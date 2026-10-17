import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { quote } from "./pricing/quote.ts";
import { createCatalog, searchProducts } from "./security/products.ts";

function json(response: ServerResponse, status: number, value: unknown) {
  response.writeHead(status, { "content-type": "application/json" });
  response.end(JSON.stringify(value));
}

async function readJson(request: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  let bytes = 0;
  for await (const chunk of request) {
    bytes += chunk.length;
    if (bytes > 16_384) throw new RangeError("Request too large");
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

/** Create an isolated HTTP app; closing the server also closes its database. */
export function createApp() {
  const db = createCatalog();
  const server = createServer(async (request, response) => {
    try {
      const url = new URL(request.url ?? "/", "http://localhost");
      if (request.method === "GET" && url.pathname === "/health") {
        json(response, 200, { status: "ok" });
      } else if (request.method === "GET" && url.pathname === "/api/products/search") {
        const query = url.searchParams.get("q") ?? "";
        if (query.length > 100) throw new TypeError("Search is limited to 100 characters");
        json(response, 200, { products: searchProducts(db, query) });
      } else if (request.method === "POST" && url.pathname === "/api/pricing/quote") {
        if (request.headers["content-type"]?.split(";")[0]?.trim() !== "application/json") {
          json(response, 415, { error: "Use application/json" });
          return;
        }
        json(response, 200, quote(await readJson(request)));
      } else {
        json(response, 404, { error: "Not found" });
      }
    } catch (error) {
      const status = error instanceof RangeError ? 413
        : error instanceof TypeError || error instanceof SyntaxError ? 400 : 500;
      json(response, status, { error: status === 500 ? "Internal error" : "Invalid request" });
    }
  });
  server.requestTimeout = 5_000;
  server.headersTimeout = 5_000;
  server.on("close", () => db.close());
  return server;
}
