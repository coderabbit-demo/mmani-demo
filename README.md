# mmani-demo

A small, correct TypeScript baseline for separate CodeRabbit demo PRs. There are
no deliberately seeded defects in this baseline. Finding remediation must use
CodeRabbit's **Fix with AI**, **Auto Fix**, or **Fix with CodeRabbit Code**.

## Run locally

Use Node **24.19.0** (`.nvmrc`) and npm. SQLite is built into Node; the synthetic
catalog lives in memory and resets each time the server starts. No secrets,
database server, frontend framework, or runtime npm dependencies are needed.

```sh
npm ci
npm run check
npm run smoke
npm start
```

The server binds to `127.0.0.1:3000`. Set `PORT` to override it. `npm run dev`
restarts on edits; Ctrl-C shuts down the server and closes the database.
`npm run smoke -- --built` verifies the compiled output after `npm run build`.
The npm cache is project-local so installation works in the cloud sandbox.

## Small examples

| Path | Correct baseline behavior |
| --- | --- |
| `src/security/products.ts` | Parameterized SQL against three synthetic products |
| `src/bugs/discount.ts` | Inclusive ten-item discount boundary |
| `src/pricing/quote.ts` | Integer-cent input/output compatible with the existing consumer |
| `src/guidelines/service-status.ts` | Outbound request with a one-second timeout |
| `src/path-instructions/pagination.ts` | Zero-based offset calculation |

HTTP routes: `GET /health`, `GET /api/products/search?q=note`, and
`POST /api/pricing/quote` with JSON `{ "subtotalCents": 12990, "itemCount": 10 }`.
The quote response is `{ "subtotalCents": 12990, "itemCount": 10, "totalCents": 11691 }`.
This is a quote calculator, not a checkout/payment system. The synthetic subtotal
is caller-provided; the service does not charge money or persist orders.

## Validation

- `npm run check`: typecheck, compiled build, tests, and 90% line-coverage gates.
- `npm run test:coverage`: application coverage under `coverage/` (HTML LCOV report,
  LCOV data, JSON summary). Branch coverage is reported separately.
- `npm run coverage:changed -- --base <full-base-SHA>`: measure executable changed
  lines from the Git merge-base. Generate fresh coverage first.
- `npm run coverage:changed -- --all`: initial/local all-source baseline check;
  this is explicitly labeled, not represented as a measured PR diff.
- `npm run smoke`: start a separate server, make real HTTP requests, check literal
  results, and shut it down. Includes an SQL-looking search input that returns no
  results rather than changing the predicate.

All `src/**/*.ts` files are in the coverage denominator; none are excluded.
Tests, tooling, and the process launcher under `scripts/` are outside application
coverage. The launcher is exercised by smoke tests; coverage-policy tests check
failure behavior and a real temporary Git diff. Empty or incomplete coverage
fails; a diff with no changed executable lines is N/A. GitHub Actions is configured
but has not run here; required-check merge enforcement is not configured.

## Check the actual downstream consumer

Read `coderabbit-demo/security-harness-consumer` into a separate scratch directory.
Do not modify its source or shared configuration. With `CONSUMER_DIR` pointing to
that checkout, run from this repository:

```sh
mkdir -p .cache/consumer-build
./node_modules/.bin/tsc "$CONSUMER_DIR/src/checkout.ts" \
  --module commonjs --target es2022 --outDir .cache/consumer-build \
  --typeRoots ./node_modules/@types --types node --skipLibCheck
printf '%s\n' '{"type":"commonjs"}' > .cache/consumer-build/package.json
CONSUMER_BUILD="$PWD/.cache/consumer-build/checkout.js" npm run smoke -- --built
```

This compiles the real consumer without changing it, starts the local provider,
sets `PRICING_SERVICE_URL` for that process, and checks the checkout summary and
`$116.91` formatting. It does not change the consumer's deployed upstream or prove
CodeRabbit's access to either repository.

See [the single demo workflow and use-case register](docs/demo-workflow.md) for
phase status, future PRs, evidence requirements, and 30-second recording plans.
