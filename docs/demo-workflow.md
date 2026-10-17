# Demo workflow and recording register

## Phase 1 status

The correct baseline is implemented and validated. No defect PRs, CodeRabbit
reviews, CodeRabbit fixes, QA Agent runs, or videos have been created yet.
The next stage publishes the baseline and prepares isolated scenario branches;
the register below records actual publication and review evidence as it becomes available.
The four supplied runbooks inform this workflow; their historical results are
not evidence for this repository.

Local evidence (October 16, 2026, Pacific):

- Node 24.19.0; TypeScript build and typecheck.
- 53 passing tests: unit, real HTTP, timeout, SQL parameterization, and
  coverage-policy checks, including a real temporary Git diff.
- Baseline application lines: 49/49 (100%); branches: 51/54 (94.44%).
- Source and compiled server startup validated through separate HTTP smoke runs.
- Actual downstream consumer at `8d814ccfa4bf014a57ff321c010e3e40b9545fd0`
  returned `lineSubtotalCents: 12990`, `amountDueCents: 11691`, and `$116.91`.
- Shared standards read at `7f20c938620beabcf9fbe54beaf63d8a5676b6d2`.
- Frozen-lockfile reinstall (`npm ci`) and full validation repeated successfully;
  `npm audit` reported zero vulnerabilities at validation time.

Run `npm run check` and both smoke modes to refresh local evidence. Coverage
reports are generated outputs, not hosted CI results. See README for commands.

| Prerequisite | Evidence / status |
| --- | --- |
| Git access to selected repo and both supporting repos | Read operations succeed; selected remote is empty |
| Runtime provider/consumer compatibility | Verified locally with actual consumer code |
| GitHub API access | Blocked: `gh api` returned Forbidden |
| CodeRabbit installation and repository permissions | Not verified; no connected CodeRabbit tool/UI in this session |
| Effective config and current schema validation | Pending live validation; YAML parses; older-schema subset checked |
| Security PR Review / QA Agent / Test Suites entitlements | Not verified; uploaded historical reports do not establish current availability |
| CodeRabbit fix actions | Required for remediation; not available or exercised in this session |
| GitHub CI / required checks / automatic-merge exclusion | Workflow authored; hosted execution and settings verification pending |

## Use-case and recording register

Each use case gets a focused PR when implemented. General presentation segments
can reference these PRs without combining their defects. All video targets are
**30 seconds**. Baseline readiness is distinct from a reviewed demo or finished clip.

| ID | Segment | Implementation status | PR / finding / fix evidence | Recording status |
| --- | --- | --- | --- | --- |
| GEN-01 | Author: summary → finding → CodeRabbit fix | Baseline prepared | Pending | Planned |
| GEN-02 | Reviewer: Triage → Change Stack → evidence | Platform access pending | Pending | Planned |
| SEC-01 | SQL injection | Coding handoff implemented; full validation blocked by local HTTP connectivity | PR #1; local correction and regression evidence below; finding, Sources, fix artifact URL, and re-review pending | Planned |
| BUG-01 | Inclusive discount boundary | Correct boundary prepared | Pending dedicated PR | Planned |
| MULTI-01 | Downstream response contract | Actual consumer compatibility verified | Pending dedicated PR and Linked repositories attribution | Planned |
| GUIDE-01 | External coding guidelines | Timed request and external guideline reference prepared | Pending dedicated PR and Coding guidelines attribution | Planned |
| PATH-01 | Path-specific pagination | Zero-based helper and scoped rule prepared | Pending dedicated PR and Path instructions attribution | Planned |
| QA-01 | Weak versus strong assertions | Correct pricing examples prepared; weak comparison not created | Pending QA-only comparison PRs | Planned |
| QA-02 | QA Agent behavioral evidence | Entitlement/access verification pending | Pending plans, runs, and CodeRabbit remediation | Planned |
| QA-03 | Reusable Test Suites | Entitlement/access verification pending | Pending journey revisions and runs | Planned |
| CONFIG-01 | Versioned review configuration | Initial YAML prepared | Pending effective config and isolated config PR | Planned |
| SEC-02 | Deep Scan / attack-surface extension | Availability-dependent; no scan requested | Pending separately scoped scan evidence | Planned |

Use-case IDs stay stable across PR revisions and recordings. Add a separate ID
and clip if another configuration setting is selected for the demo.

## General review — Do / Say / See

**Do:** Open one focused PR's summary and finding, then its CodeRabbit fix action.
For the reviewer, open Triage and that PR's Change Stack where available.
**Say:** Explain the change, its specific consequence, and the evidence needed
before accepting the generated fix.
**See:** Actual summary, finding source, CodeRabbit-generated artifact, and checks.
Do not present source branches as functional layers or invent unavailable views.

## Security — Do / Say / See

### SEC-01 coding handoff evidence

This entry supplements the historical Phase 1 evidence above. The supplied
PR #1 handoff requests a bound parameter with literal substring semantics.
The request flows from `GET /api/products/search?q=…` through
`src/app.ts` to `searchProducts` in `src/security/products.ts`. The fixed SQL
uses `instr(lower(name), lower(?))` and `.all(query)`, so quotes, percent, and
underscore remain data. HTTP length validation and the default catalog are unchanged.

- Tested input commit: `91fd477c994760fd9fce61189ef86e92093c2b40`, plus
  the uncommitted correction and tests in this coding task. The generated commit
  and stacked PR URL must be recorded after the system publishes the artifact.
  The local base ref is `916e3862f2bbf6f2b8a680d70692abc3b0df25a3`;
  this checkout cannot resolve its merge-base with HEAD.
- Original snapshot: the vulnerable input commit remains unchanged.
  `demo/sec-01-before-fix` is absent from local refs; no ref was created or moved
  and remote snapshot preservation has not been verified.
- Fix provenance: implementation follows the supplied authoritative coding
  handoff. The exact product action, CodeRabbit task/result URL, original finding
  URL, and observed Sources label were not supplied. Do not mark the segment
  CodeRabbit-remediated or claim re-review until those artifacts are captured.
- Diff artifact: `src/security/products.ts` and additive cases in
  `tests/baseline.test.ts`; every pre-existing assertion is retained, including
  the empty-result HTTP injection assertion. New isolated databases use bound
  fixture inserts and close in `finally`; shared catalog fixtures are unchanged.
- Before correction, the new isolated percent and underscore searches each
  returned all six rows instead of one, and the apostrophe search threw a SQL
  syntax error. After correction, all six isolated cases pass, covering those
  characters, SQL injection input, mixed-case matching, and ordered empty search.

Commands used Node **24.19.0** via
`npm exec --yes --package=node@24.19.0 -- <command>`. Validation commands
set `NODE_USE_ENV_PROXY=0` to avoid the environment proxy stalling local HTTP
requests; direct loopback requests then failed with `ECONNREFUSED`.

| Command inside the Node wrapper | Actual local result |
| --- | --- |
| `npm ci` | Passed; 52 packages installed, zero reported vulnerabilities |
| `npm run typecheck` | Passed |
| `npm test -- tests/baseline.test.ts -t 'literal catalog substring search'` | Six passed; 44 skipped by the explicit test-name filter |
| `npm test` | 44 passed, 17 failed (61 total); failures are HTTP-dependent checks encountering loopback connection refusal, including the timeout assertion receiving a connection error |
| `npm run check` | Typecheck and build passed; coverage test run failed on 17 HTTP-dependent tests (43 passed before the final isolated injection case was added); later coverage step did not execute |
| `npm run coverage:changed -- --base 916e3862f2bbf6f2b8a680d70692abc3b0df25a3` | Blocked: `git merge-base` failed in this checkout |
| `npm run coverage:changed -- --all` | Failed closed: `coverage/lcov.info` absent after failed coverage run; no coverage percentage claimed |
| `npm run smoke` | Failed: loopback `ECONNREFUSED` |

Re-review has not occurred. Before recording, capture the actual finding/Sources,
fix action and generated artifact, verify the preserved snapshot, and rerun the
full checks with working loopback networking and complete Git history. Keep
PR #1 open and unmerged. Recording remains planned; no clip or completed product
workflow is claimed by these local checks.

**Do:** Follow request input to the SQL sink on SEC-01. Use **Fix with AI**,
**Auto Fix**, or **Fix with CodeRabbit Code**, then inspect the generated correction.
**Say:** Explain query parameters and the regression that demonstrates the fix.
**See:** A real finding, its available security metadata, parameterized code,
and successful checks at the recorded commit. The advisory Security Gate is not
merge enforcement. Deep Scan and attack-surface evidence belong to SEC-02;
do not merge unsafe code to seed that extension or equate verification with safety.

## QA Agent — Do / Say / See

**Do:** Compare weak green coverage with independent strong assertions. Inspect
preserved QA Agent plans and weak/corrected results. Show reusable Test Suites as
a distinct workflow with fixed journey revisions and expectations.
**Say:** Coverage measures execution; assertions and observed outcomes establish
which specific behaviors were checked. CodeRabbit performs the finding fixes.
**See:** Literal expected totals, a real failing boundary check, corrected passing
checks, and actual QA Agent artifacts. Test-selection advice is not execution.
Keep test consolidation optional, preserve distinct assertions, and validate
known faults before claiming retained protection.

## Configuration management — Do / Say / See

**Do:** Open `.coderabbit.yaml`, inspect effective settings, and compare one
isolated configuration change's observed effect.
**Say:** Explain precedence, opt-in inheritance, and the difference between path
instructions, external guidelines, and linked repository context.
**See:** A versioned change plus actual review attribution or policy verdict.
Verify current config-change protection and schema before presenting. Deep Scan
path instructions are app-managed and separate from PR-review YAML instructions.

## Recording specification — one 30-second clip per segment

| Time | Shot / purpose |
| --- | --- |
| 0–5s | Name the use case and show the relevant change or requirement |
| 5–13s | Zoom to the actual finding, source label, or behavioral evidence |
| 13–21s | Show the selected CodeRabbit fix action, or the segment's non-fix workflow |
| 21–28s | Cut to completed output and independent verification |
| 28–30s | State the bounded takeaway |

Draft roughly 60–70 spoken words, then time the narration. For asynchronous
actions, label the cut **After completion**; the clip duration is not execution
time. Use real UI, readable crops, and no secrets. No footage has been recorded.

Before recording each segment, populate its evidence card:

- ID, title, objective, prerequisites, and relevant feature availability.
- PR URL, base/head SHA, finding URL, and observed Sources attribution.
- CodeRabbit fix action, task/artifact URL, and generated commit; N/A if no fix.
- Validation command/run URL, tested SHA, expected/actual result, and re-review.
- Exact click path, narration, timed shot list, and any labeled time cuts.
- Video asset path, measured duration, capture date, and readability/audio check.
- Freshness, original snapshot preservation, and reset instructions.

## Next phases and presentation readiness

1. Verify live platform prerequisites and publish the correct baseline when that
   work is undertaken; do not call local checks a completed CodeRabbit review.
2. Create the five independent demo PRs, preserving their original evidence.
3. Create dedicated QA comparisons and prepare completed QA Agent runs.
4. Rehearse selected configuration/security extensions and record actual outcomes.
5. Complete the evidence cards, narration, recordings, and freshness checks here.

Never manually remediate findings. If a CodeRabbit fix action is unavailable,
record it as blocked. Inspect/test generated fixes and route further findings
back through CodeRabbit. Preserve original demo snapshots; avoid unexpected
merges, live scans, or reruns during a recorded walkthrough.
