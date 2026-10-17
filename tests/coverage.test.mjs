import { describe, expect, it } from "vitest";
import { addedLines, coverageResult, parseLcov } from "../scripts/changed-coverage.mjs";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { execFileSync, spawnSync } from "node:child_process";

describe("coverage evidence fails closed", () => {
  it("accepts matching line counters", () => {
    const result = parseLcov("SF:src/example.ts\nDA:1,2\nDA:3,0\nLF:2\nLH:1\nend_of_record\n");
    expect([...result.values()][0]).toEqual(new Map([[1, 2], [3, 0]]));
  });
  it.each(["", "SF:x\n", "DA:1,2\nLF:1\nLH:1\n",
    "SF:x\nDA:1,1\nLF:2\nLH:1\n", "SF:x\nDA:1,no\nLF:1\nLH:1\n",
    "SF:x\nDA:1,1\nDA:1,1\nLF:2\nLH:2\n"])("rejects incomplete or malformed evidence", (text) => {
    expect(() => parseLcov(text)).toThrow();
  });
  it("tracks new-side executable lines and ignores deletions", () => {
    expect(addedLines("@@ -2 +2,2 @@\n@@ -9,2 +10,0 @@\n@@ -15 +15 @@\n"))
      .toEqual(new Set([2, 3, 15]));
  });
  it("fails below the 90% threshold", () => {
    expect(coverageResult([1, 0]).status).toBe("failed");
    expect(coverageResult([...Array(9).fill(1), 0]).status).toBe("passed");
  });
  it("distinguishes missing execution from a non-executable diff", () => {
    expect(() => coverageResult([])).toThrow();
    expect(coverageResult([], true)).toEqual({ status: "not-applicable", covered: 0, total: 0, percent: null });
  });
  it("checks a real Git diff, fails on missed coverage, and reports docs-only changes as N/A", () => {
    const directory = mkdtempSync(join(tmpdir(), "mmani-coverage-"));
    const script = resolve("scripts/changed-coverage.mjs");
    const git = (...args) => execFileSync("git", args, { cwd: directory, encoding: "utf8" });
    const run = base => spawnSync(process.execPath, [script, "--base", base], { cwd: directory, encoding: "utf8" });
    try {
      mkdirSync(join(directory, "src"));
      mkdirSync(join(directory, "coverage"));
      writeFileSync(join(directory, "src/example.ts"), "export const count = 1;\n");
      git("init", "--quiet");
      git("add", "src");
      git("-c", "user.name=Coverage Test", "-c", "user.email=coverage@example.invalid", "-c", "commit.gpgsign=false", "commit", "--quiet", "-m", "fixture");
      const base = git("rev-parse", "HEAD").trim();
      writeFileSync(join(directory, "coverage/lcov.info"), "SF:src/example.ts\nDA:1,1\nLF:1\nLH:1\nend_of_record\n");
      expect(JSON.parse(run(base).stdout).selected.status).toBe("not-applicable");
      writeFileSync(join(directory, "src/example.ts"), "export const count = 2;\n");
      expect(JSON.parse(run(base).stdout).selected).toMatchObject({ status: "passed", covered: 1, total: 1 });
      writeFileSync(join(directory, "coverage/lcov.info"), "SF:src/example.ts\nDA:1,0\nLF:1\nLH:0\nend_of_record\n");
      expect(run(base).status).toBe(1);
      writeFileSync(join(directory, "src/new.ts"), "export const other = 3;\n");
      expect(run(base).stderr).toContain("Missing coverage");
    } finally {
      rmSync(directory, { recursive: true, force: true });
    }
  });
});
