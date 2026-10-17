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
| SEC-01 | SQL injection | Safe SQL baseline prepared | Pending dedicated PR | Planned |
| BUG-01 | Inclusive discount boundary | Generated correction prepared; HTTP validation blocked | PR #2; evidence card below; delivery and re-review pending | Planned |
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

### BUG-01 coding-workflow evidence — October 17, 2026 UTC

This is the proposed shared-register update prepared on the task checkout for
delivery through a stacked PR; main has not been modified directly. Objective:
restore the inclusive TEAM10 boundary in PR #2, keeping the demo open and unmerged.

- **Original snapshot:** `demo/bug-01-before-fix` at
  `66354f26a5a93ff1e740531cab3d47495535b770`, as supplied by the authoritative
  implementation handoff. No local tag exists in this checkout; remote tag
  verification is pending because remote operations are prohibited. No tag was
  moved or deleted. PR base SHA and finding/Sources URLs remain pending.
- **Fix workflow:** this coding task implements the supplied CodeRabbit coding
  workflow handoff. `qualifiesForDiscount` now uses `itemCount >= 10`, with an
  inclusive-threshold comment. Regression assertions and the lockfile are
  unchanged. Exact initiating UI action and task/artifact URL were not supplied;
  record them from the delivered workflow artifact. Generated commit SHA is
  pending system delivery; no commit or remote operation was performed here.
- **Tested revision:** uncommitted correction over HEAD
  `66354f26a5a93ff1e740531cab3d47495535b770`; corrected
  `src/bugs/discount.ts` Git blob is
  `97011a13e5ac436fd66b3eb0c0571034fb9a32a6`.
  This HEAD is the seeded parent, not a generated fixed commit. Revalidate and
  record the generated commit SHA after delivery.
- **Environment / installation:** Node **24.19.0**, selected with
  `npm exec --yes --package=node@24.19.0 --package=npm -- sh`;
  `npm ci` succeeded using the existing lockfile (52 packages added,
  audit reported zero vulnerabilities).
- **Full validation:** `npm run check` exited 1. Typecheck and compiled build
  passed; all 53 existing tests ran: **38 passed, 15 failed**. HTTP tests failed
  with `ECONNREFUSED` to ephemeral `127.0.0.1` ports, including the timeout test
  receiving a connection error instead of `TimeoutError`. Coverage gates were
  not reached; no passing coverage claim is made. The initial proxy-enabled
  attempt stalled and was terminated; retrying with proxy variables unset
  reproduced the connection failures.
- **Smoke validation:** both `npm run smoke` and
  `npm run smoke -- --built` ran and exited 1 with local HTTP `ECONNREFUSED`.
  The initial source smoke under the environment proxy timed out. These are
  execution-environment blockers; tests and HTTP behavior were not weakened.
- **Independent literal probe:** Node 24.19.0 imported `quote` directly from
  `src/pricing/quote.ts` and used `node:assert/strict` deep equality for every
  row below; all four passed. This confirms calculation behavior, not HTTP
  integration or a green full validation run.

  | Item count | Subtotal cents | Expected total cents | Actual total cents |
  | --- | --- | --- | --- |
  | 9 | 11691 | 11691 | 11691 |
  | 10 | 12990 | 11691 | 11691 |
  | 11 | 14289 | 12860 | 12860 |
  | 15 | 19485 | 17537 | 17537 |

- **Local evidence only:** `/tmp/bug-01-validation.log` (initial attempt),
  `/tmp/bug-01-source-smoke.log`, `/tmp/bug-01-validation-local.log`,
  `/tmp/bug-01-validation-direct.log` (final full and both smoke results), and
  `/tmp/bug-01-pricing-probe.log`. These execution-container logs are ephemeral;
  archive them with the delivered artifact before reset. Hosted validation run
  links are unavailable. Further application corrections must use CodeRabbit.
- **Re-review:** pending after system delivery. No re-review request was sent
  and no outcome is available; remote commands are prohibited in this task.
  Request CodeRabbit re-review on the delivered fix and record its actual result,
  finding resolution, artifact URL, and tested generated SHA before marking
  BUG-01 verified.
- **Recording / freshness:** still planned, with no video asset, duration, or
  capture date. Prerequisites are preserved original finding/Sources evidence,
  workflow artifact, successful full validation, and actual re-review. Use the
  existing 0–5 / 5–13 / 13–21 / 21–28 / 28–30 second storyboard for PR #2 →
  finding → recorded fix action → verified boundary → takeaway, with an
  **After completion** cut. Exact click path and narration remain pending real
  UI evidence. Retain the original snapshot, refresh checks at the delivered
  SHA, verify automatic-merge exclusion, and leave PR #2 open and unmerged.

## General review — Do / Say / See

**Do:** Open one focused PR's summary and finding, then its CodeRabbit fix action.
For the reviewer, open Triage and that PR's Change Stack where available.
**Say:** Explain the change, its specific consequence, and the evidence needed
before accepting the generated fix.
**See:** Actual summary, finding source, CodeRabbit-generated artifact, and checks.
Do not present source branches as functional layers or invent unavailable views.

## Security — Do / Say / See

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
