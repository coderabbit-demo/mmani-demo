const { createApp } = await import(process.argv.includes("--built") ? "../dist/app.js" : "../src/app.ts");
const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 0 || port > 65_535) {
  throw new TypeError("PORT must be an integer between 0 and 65535");
}
const server = createApp();
server.listen(port, "127.0.0.1", () => {
  console.log(`Demo listening on 127.0.0.1:${server.address().port}`);
});
process.once("SIGTERM", () => server.close());
process.once("SIGINT", () => server.close());
