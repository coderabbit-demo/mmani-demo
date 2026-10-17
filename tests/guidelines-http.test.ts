import { afterEach, expect, it } from "vitest";
import { createServer, request as httpRequest, type Server } from "node:http";
import { once } from "node:events";
import { createApp } from "../src/app.ts";

const servers: Server[] = [];

async function listen(server: Server): Promise<string> {
  servers.push(server);
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("No TCP listener");
  return `http://127.0.0.1:${address.port}`;
}

afterEach(async () => {
  await Promise.all(servers.splice(0).map(async server => {
    const closed = once(server, "close");
    server.close();
    server.closeAllConnections();
    await closed;
  }));
});

it("reaches the server-owned fixture through the real handler", async () => {
  const app = createApp();
  const base = await listen(app);
  const fixturePaths: string[] = [];
  app.on("request", request => {
    if (request.url === "/health") fixturePaths.push(request.url);
  });
  const response = await fetch(`${base}/api/guidelines/service-status`, {
    signal: AbortSignal.timeout(3_000),
  });
  expect(response.status).toBe(200);
  expect(await response.text()).toBe('{"healthy":true}');
  expect(fixturePaths).toEqual(["/health"]);
});

it("ignores client destinations and still requests only the local fixture", async () => {
  let decoyRequests = 0;
  const decoy = await listen(createServer((_request, response) => {
    decoyRequests++;
    response.end("decoy");
  }));
  const app = createApp();
  const base = await listen(app);
  const fixtureHosts: (string | undefined)[] = [];
  app.on("request", request => {
    if (request.url === "/health") fixtureHosts.push(request.headers.host);
  });
  const body = JSON.stringify({ url: decoy });
  const client = httpRequest(`${base}/api/guidelines/service-status?url=${encodeURIComponent(decoy)}`, {
    method: "GET",
    headers: {
      host: new URL(decoy).host, "x-service-url": decoy,
      "content-type": "application/json", "content-length": Buffer.byteLength(body),
    },
    signal: AbortSignal.timeout(3_000),
  });
  const received = once(client, "response");
  client.end(body);
  const [response] = await received;
  let text = "";
  for await (const chunk of response) text += chunk;
  expect(response.statusCode).toBe(200);
  expect(text).toBe('{"healthy":true}');
  expect(fixtureHosts).toEqual([new URL(base).host]);
  expect(decoyRequests).toBe(0);
});

it("returns 503 when the configured local service is non-OK", async () => {
  const fixturePaths: (string | undefined)[] = [];
  const fixture = await listen(createServer((request, response) => {
    fixturePaths.push(request.url);
    response.writeHead(503);
    response.end("synthetic unavailable");
  }));
  const base = await listen(createApp({ serviceStatusUrl: `${fixture}/fixture` }));
  const response = await fetch(`${base}/api/guidelines/service-status`, {
    signal: AbortSignal.timeout(3_000),
  });
  expect(response.status).toBe(503);
  expect(await response.text()).toBe('{"healthy":false}');
  expect(fixturePaths).toEqual(["/fixture"]);
});

it("returns 502 when the configured local service drops the connection", async () => {
  let fixtureRequests = 0;
  const fixture = await listen(createServer(request => {
    fixtureRequests++;
    request.socket.destroy();
  }));
  const base = await listen(createApp({ serviceStatusUrl: fixture }));
  const response = await fetch(`${base}/api/guidelines/service-status`, {
    signal: AbortSignal.timeout(3_000),
  });
  expect(response.status).toBe(502);
  expect(await response.text()).toBe('{"error":"Service unavailable"}');
  expect(fixtureRequests).toBeGreaterThan(0);
});
