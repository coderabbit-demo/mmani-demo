import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createRequire } from "node:module";

const child = spawn(process.execPath, ["scripts/start.mjs", ...process.argv.slice(2)], {
  env: { ...process.env, PORT: "0" }, stdio: ["ignore", "pipe", "pipe"],
});
const stopped = once(child, "exit");
child.stderr.pipe(process.stderr);
try {
  const port = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Startup timed out")), 10_000);
    let output = "";
    child.stdout.on("data", chunk => {
      output += chunk;
      const match = /Demo listening on 127\.0\.0\.1:(\d+)/.exec(output);
      if (match) { clearTimeout(timer); resolve(Number(match[1])); }
    });
    child.once("error", error => { clearTimeout(timer); reject(error); });
    child.once("exit", code => { clearTimeout(timer); reject(new Error(`Server exited: ${code}`)); });
  });
  const base = `http://127.0.0.1:${port}`;
  const get = path => fetch(`${base}${path}`, { signal: AbortSignal.timeout(3_000) });
  assert.deepEqual(await (await get("/health")).json(), { status: "ok" });
  const serviceStatus = await get("/api/guidelines/service-status");
  assert.equal(serviceStatus.status, 200);
  assert.equal(await serviceStatus.text(), '{"healthy":true}');
  for (const [itemCount, subtotalCents, totalCents] of [
    [9, 11_691, 11_691], [10, 12_990, 11_691], [11, 14_289, 12_860], [15, 19_485, 17_537],
  ]) {
    const response = await fetch(`${base}/api/pricing/quote`, {
      method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ itemCount, subtotalCents }), signal: AbortSignal.timeout(3_000),
    });
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { itemCount, subtotalCents, totalCents });
  }
  assert.deepEqual(await (await get("/api/products/search?q=note")).json(), {
    products: [{ id: 1, name: "Notebook" }],
  });
  assert.deepEqual(await (await get(`/api/products/search?q=${encodeURIComponent("' OR 1=1 --")}`)).json(), { products: [] });
  if (process.env.CONSUMER_BUILD) {
    process.env.PRICING_SERVICE_URL = base;
    const consumer = createRequire(import.meta.url)(process.env.CONSUMER_BUILD);
    const summary = await consumer.buildCheckoutSummary({ subtotalCents: 12_990, itemCount: 10 });
    assert.deepEqual(summary, { lineSubtotalCents: 12_990, amountDueCents: 11_691 });
    assert.equal(consumer.formatCents(summary.amountDueCents), "$116.91");
    console.log("Actual downstream consumer: checkout summary and $116.91 formatting passed.");
  }
  console.log("HTTP smoke passed: health, local service-status handler, four literal pricing cases, catalog search, and injection input.");
} finally {
  if (child.exitCode === null) child.kill("SIGTERM");
  const timer = setTimeout(() => child.kill("SIGKILL"), 5_000);
  await stopped;
  clearTimeout(timer);
}
