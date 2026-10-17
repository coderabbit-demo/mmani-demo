import { readFileSync, readdirSync } from "node:fs";
import { resolve, relative } from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

export function parseLcov(text) {
  const files = new Map();
  for (const block of text.split("end_of_record")) {
    if (!block.trim()) continue;
    const name = /^SF:(.+)$/m.exec(block)?.[1];
    if (!name) throw new Error("Missing LCOV source name");
    const lines = new Map();
    for (const row of block.split("\n").filter(row => row.startsWith("DA:"))) {
      const match = /^DA:([1-9]\d*),(\d+)(?:,.*)?$/.exec(row);
      if (!match) throw new Error("Malformed LCOV line");
      const line = Number(match[1]);
      const hits = Number(match[2]);
      if (!Number.isSafeInteger(line) || !Number.isSafeInteger(hits) || lines.has(line)) {
        throw new Error("Invalid or duplicate LCOV line");
      }
      lines.set(line, hits);
    }
    const found = /^LF:(\d+)$/m.exec(block)?.[1];
    const hit = /^LH:(\d+)$/m.exec(block)?.[1];
    if (found === undefined || hit === undefined || Number(found) !== lines.size
        || Number(hit) !== [...lines.values()].filter(n => n > 0).length) {
      throw new Error("Missing or inconsistent LCOV totals");
    }
    const path = resolve(name);
    if (files.has(path)) throw new Error("Duplicate LCOV source");
    files.set(path, lines);
  }
  if (!files.size) throw new Error("Empty coverage report");
  return files;
}

export function addedLines(diff) {
  const lines = new Set();
  for (const match of diff.matchAll(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/gm)) {
    const start = Number(match[1]);
    const count = match[2] === undefined ? 1 : Number(match[2]);
    for (let i = start; i < start + count; i++) lines.add(i);
  }
  return lines;
}

export function coverageResult(hits, allowEmpty = false) {
  if (!hits.length) {
    if (!allowEmpty) throw new Error("No executable source lines");
    return { status: "not-applicable", covered: 0, total: 0, percent: null };
  }
  const covered = hits.filter(n => n > 0).length;
  return { status: covered / hits.length >= 0.9 ? "passed" : "failed",
    covered, total: hits.length, percent: 100 * covered / hits.length };
}

function sources(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? sources(path) : path.endsWith(".ts") ? [path] : [];
  });
}

function main() {
  const args = process.argv.slice(2);
  if (!(args.length === 1 && args[0] === "--all")
      && !(args.length === 2 && args[0] === "--base" && /^[a-f0-9]{40}$/.test(args[1]))) {
    throw new Error("Use --all for the initial/local baseline, or --base <full Git commit SHA> for a PR");
  }
  const git = (...args) => execFileSync("git", args, { encoding: "utf8" });
  const base = args[0] === "--base" ? git("merge-base", args[1], "HEAD").trim() : null;
  const report = parseLcov(readFileSync("coverage/lcov.info", "utf8"));
  const overallHits = [];
  const changedHits = [];
  for (const file of sources("src")) {
    const lines = report.get(file);
    if (!lines) throw new Error(`Missing coverage for ${file}`);
    overallHits.push(...lines.values());
    const path = relative(process.cwd(), file);
    const isNew = base && !git("ls-tree", "--name-only", base, "--", path).trim();
    const changed = base && !isNew
      ? addedLines(git("diff", "--no-ext-diff", "--no-color", "--unified=0", base, "--", path)) : null;
    for (const [line, hits] of lines) {
      if (!changed || changed.has(line)) changedHits.push(hits);
    }
  }
  const overall = coverageResult(overallHits);
  const selected = coverageResult(changedHits, Boolean(base));
  console.log(JSON.stringify({ mode: base ? "changed-lines" : "all-source-baseline", base,
    threshold: 90, overall, selected }, null, 2));
  if (overall.status === "failed" || selected.status === "failed") process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { main(); } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
