import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createServer } from "node:http";
import { once } from "node:events";
import { createApp } from "../src/app.ts";
import { quote } from "../src/pricing/quote.ts";
import { pageOffset } from "../src/path-instructions/pagination.ts";
import { serviceIsHealthy } from "../src/guidelines/service-status.ts";
import { createCatalog, searchProducts } from "../src/security/products.ts";

const app = createApp();
let base: string;

beforeAll(async () => {
  app.listen(0, "127.0.0.1");
  await once(app, "listening");
  const address = app.address();
  if (!address || typeof address === "string") throw new Error("No TCP listener");
  base = `http://127.0.0.1:${address.port}`;
});
afterAll(async () => {
  app.close();
  await once(app, "close");
});

describe("integer-cent pricing and the inclusive boundary", () => {
  it.each([
    [9, 11_691, 11_691], [10, 12_990, 11_691],
    [11, 14_289, 12_860], [15, 19_485, 17_537],
  ])("quotes %i items", (itemCount, subtotalCents, totalCents) => {
    expect(quote({ itemCount, subtotalCents })).toEqual({ itemCount, subtotalCents, totalCents });
  });
  it.each([null, [], "1299", {}, { subtotalCents: -1, itemCount: 1 },
    { subtotalCents: 1.5, itemCount: 1 }, { subtotalCents: 1, itemCount: 0 },
    { subtotalCents: 1, itemCount: 1.5 }, { subtotalCents: 100_000_001, itemCount: 1 },
    { subtotalCents: 1, itemCount: 10_001 }, { subtotalCents: NaN, itemCount: 1 },
    { subtotalCents: 1, itemCount: Infinity }, { subtotalCents: "1", itemCount: 1 },
  ])("rejects malformed quotes: %j", (input) => {
    expect(() => quote(input)).toThrow(TypeError);
  });
  it("allows zero cents and strips extra fields from the response", () => {
    expect(quote({ subtotalCents: 0, itemCount: 1, secret: "synthetic" }))
      .toEqual({ subtotalCents: 0, itemCount: 1, totalCents: 0 });
  });
});

describe("real HTTP requests", () => {
  it("reports health", async () => {
    const response = await fetch(`${base}/health`);
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ status: "ok" });
  });
  it("preserves the consumer contract at exactly ten items", async () => {
    const response = await fetch(`${base}/api/pricing/quote`, {
      method: "POST", headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify({ subtotalCents: 12_990, itemCount: 10 }),
    });
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ subtotalCents: 12_990, itemCount: 10, totalCents: 11_691 });
  });
  it.each(["{", "null", '{"subtotalCents":-1,"itemCount":10}'])
    ("rejects invalid JSON or quote input: %s", async (body) => {
      const response = await fetch(`${base}/api/pricing/quote`, {
        method: "POST", headers: { "content-type": "application/json" }, body,
      });
      expect(response.status).toBe(400);
      expect(await response.json()).toEqual({ error: "Invalid request" });
    });
  it("rejects the wrong media type", async () => {
    const response = await fetch(`${base}/api/pricing/quote`, { method: "POST", body: "{}" });
    expect(response.status).toBe(415);
    await response.body?.cancel();
  });
  it("rejects an oversized body", async () => {
    const response = await fetch(`${base}/api/pricing/quote`, {
      method: "POST", headers: { "content-type": "application/json" }, body: " ".repeat(16_385),
    });
    expect(response.status).toBe(413);
    await response.body?.cancel();
  });
  it("returns 404 for an unknown route", async () => {
    const response = await fetch(`${base}/missing`);
    expect(response.status).toBe(404);
    expect(await response.json()).toEqual({ error: "Not found" });
  });
  it("searches the synthetic SQLite catalog", async () => {
    const response = await fetch(`${base}/api/products/search?q=note`);
    expect(await response.json()).toEqual({ products: [{ id: 1, name: "Notebook" }] });
  });
  it("lists all three products for an empty search", async () => {
    const response = await fetch(`${base}/api/products/search`);
    expect(await response.json()).toEqual({ products: [
      { id: 1, name: "Notebook" }, { id: 2, name: "Pencil" }, { id: 3, name: "Folder" },
    ] });
  });
  it("treats SQL injection input as search data", async () => {
    const response = await fetch(`${base}/api/products/search?q=${encodeURIComponent("' OR 1=1 --")}`);
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ products: [] });
  });
  it.each(["%", "_"])("treats %s as literal HTTP search data", async (query) => {
    const response = await fetch(`${base}/api/products/search?q=${encodeURIComponent(query)}`);
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ products: [] });
  });
  it("rejects excessive search text", async () => {
    const response = await fetch(`${base}/api/products/search?q=${"a".repeat(101)}`);
    expect(response.status).toBe(400);
    await response.body?.cancel();
  });
});

describe("literal catalog substring search", () => {
  it.each([
    ["%", [{ id: 5, name: "100% Cotton" }]],
    ["_", [{ id: 4, name: "part_number" }]],
    ["'", [{ id: 6, name: "Artist's Pad" }]],
    ["' OR 1=1 --", []],
    ["cOtToN", [{ id: 5, name: "100% Cotton" }]],
    ["", [
      { id: 1, name: "Notebook" }, { id: 2, name: "Pencil" }, { id: 3, name: "Folder" },
      { id: 4, name: "part_number" }, { id: 5, name: "100% Cotton" },
      { id: 6, name: "Artist's Pad" },
    ]],
  ])("searches for literal %j with ordered results", (query, expected) => {
    const db = createCatalog();
    try {
      const insert = db.prepare("INSERT INTO products (id, name) VALUES (?, ?)");
      insert.run(6, "Artist's Pad");
      insert.run(5, "100% Cotton");
      insert.run(4, "part_number");
      expect(searchProducts(db, query)).toEqual(expected);
    } finally {
      db.close();
    }
  });
});

describe("zero-based pagination", () => {
  it.each([[0, 10, 0], [1, 10, 10], [3, 25, 75]])("page %i, size %i", (page, size, offset) => {
    expect(pageOffset(page, size)).toBe(offset);
  });
  it.each([[-1, 10], [0, 0], [1.5, 10], [0, 101], [0, 1.5], [Number.MAX_SAFE_INTEGER, 100]])
    ("rejects page %s, size %s", (page, size) => expect(() => pageOffset(page, size)).toThrow(TypeError));
});

describe("outbound service check", () => {
  it("accepts a healthy service", async () => expect(await serviceIsHealthy(`${base}/health`)).toBe(true));
  it("reports an unhealthy service", async () => expect(await serviceIsHealthy(`${base}/missing`)).toBe(false));
  it("times out an unresponsive service", async () => {
    const stalled = createServer(() => {});
    stalled.listen(0, "127.0.0.1");
    await once(stalled, "listening");
    try {
      const address = stalled.address();
      if (!address || typeof address === "string") throw new Error("No TCP listener");
      await expect(serviceIsHealthy(`http://127.0.0.1:${address.port}`)).rejects.toMatchObject({ name: "TimeoutError" });
    } finally {
      stalled.closeAllConnections();
      stalled.close();
      await once(stalled, "close");
    }
  });
});
