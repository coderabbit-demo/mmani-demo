# Demo workflow and recording register

## Phase 1 status

The correct baseline is published at `916e3862f2bbf6f2b8a680d70692abc3b0df25a3`
on `main`, with a passing [hosted baseline run](https://github.com/coderabbit-demo/mmani-demo/actions/runs/39001168131).
Five independent demo PRs are open. Original defect snapshots are preserved with
`demo/<id>-before-fix` tags; CodeRabbit remediation can advance PR heads without
erasing those snapshots. No QA Agent runs or video assets have been produced.
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
| Git access to selected repo and both supporting repos | Reads succeed; baseline, five scenario branches, and original-snapshot tags pushed |
| Runtime provider/consumer compatibility | Verified locally with actual consumer code |
| GitHub API access | Working; PR creation and review reads verified after the initial Forbidden response |
| CodeRabbit installation and repository permissions | Hosted reviews confirm repo config, ASSERTIVE profile, Enterprise plan; initial external guideline fetch failed, but the warning disappeared after the owner made the standards repo public and a fresh full review completed |
| Effective config and current schema validation | Repo YAML/profile and Security Gate observed in hosted reviews; current full schema validation remains pending |
| Security PR Review / QA Agent / Test Suites entitlements | Not verified; uploaded historical reports do not establish current availability |
| CodeRabbit fix actions | Auto Fix requests produce CodeRabbit coding proposals; activating the bot's create-PR action created BUG-01 remediation PR #6. Generated changes require independent validation |
| GitHub CI / required checks / automatic-merge exclusion | Baseline CI passes, seeded PRs fail in test execution; GitHub auto-merge is disabled; required-check enforcement and CodeRabbit Triage rules not verified |

CLI note: the official installer installed CodeRabbit CLI to
`/workspace/.tools/bin`, but invocation fails with `EROFS` while creating
`/home/agent/.coderabbit`. No CLI review ran; all review evidence here comes from
CodeRabbit's hosted GitHub reviews. Do not present this as CLI parity evidence.

## Use-case and recording register

Each use case gets a focused PR when implemented. General presentation segments
can reference these PRs without combining their defects. All video targets are
**30 seconds**. Baseline readiness is distinct from a reviewed demo or finished clip.

| ID | Segment | Implementation status | PR / finding / fix evidence | Recording status |
| --- | --- | --- | --- | --- |
| GEN-01 | Author: summary → finding → CodeRabbit fix | Hosted finding available; fix pending | PR #2 | Storyboarded; footage pending |
| GEN-02 | Reviewer: Triage → Change Stack → evidence | Platform access pending | Pending | Planned |
| SEC-01 | SQL injection | Security finding verified; CodeRabbit remediation requested | [PR #1](https://github.com/coderabbit-demo/mmani-demo/pull/1), [finding](https://github.com/coderabbit-demo/mmani-demo/pull/1#discussion_r4301289005), [fix request](https://github.com/coderabbit-demo/mmani-demo/pull/1#issuecomment-6229490251) | Storyboarded; footage pending |
| BUG-01 | Inclusive discount boundary | Reviewed; CodeRabbit generated fix PR | [PR #2](https://github.com/coderabbit-demo/mmani-demo/pull/2), [finding](https://github.com/coderabbit-demo/mmani-demo/pull/2#discussion_r4301285165), [CodeRabbit fix PR #6](https://github.com/coderabbit-demo/mmani-demo/pull/6) | Storyboarded; validation/footage pending |
| MULTI-01 | Downstream response contract | Consumer failure and review verified; attribution needs checking | [PR #3](https://github.com/coderabbit-demo/mmani-demo/pull/3), [finding](https://github.com/coderabbit-demo/mmani-demo/pull/3#discussion_r4301284933), [fix request](https://github.com/coderabbit-demo/mmani-demo/pull/3#issuecomment-6229464959) | Storyboarded; footage pending |
| GUIDE-01 | External coding guidelines | Original finding preserved; independent HTTP replacement prepared; runtime verification blocked; explicit attribution pending | [PR #4](https://github.com/coderabbit-demo/mmani-demo/pull/4), [finding](https://github.com/coderabbit-demo/mmani-demo/pull/4#discussion_r4301284627), [fresh review](https://github.com/coderabbit-demo/mmani-demo/pull/4#issuecomment-6229490501); replacement delivery pending (evidence below) | Storyboarded; external evidence pending |
| PATH-01 | Path-specific pagination | Explicit Path instructions attribution verified; CodeRabbit fix requested | [PR #5](https://github.com/coderabbit-demo/mmani-demo/pull/5), [finding](https://github.com/coderabbit-demo/mmani-demo/pull/5#discussion_r4301286142), [fix request](https://github.com/coderabbit-demo/mmani-demo/pull/5#issuecomment-6229490395) | Storyboarded; footage pending |
| QA-01 | Weak versus strong assertions | Correct pricing examples prepared; weak comparison not created | Pending QA-only comparison PRs | Planned |
| QA-02 | QA Agent behavioral evidence | Entitlement/access verification pending | Pending plans, runs, and CodeRabbit remediation | Planned |
| QA-03 | Reusable Test Suites | Entitlement/access verification pending | Pending journey revisions and runs | Planned |
| CONFIG-01 | Versioned review configuration | Initial YAML prepared | Pending effective config and isolated config PR | Planned |
| SEC-02 | Deep Scan / attack-surface extension | Availability-dependent; no scan requested | Pending separately scoped scan evidence | Planned |

Use-case IDs stay stable across PR revisions and recordings. Add a separate ID
and clip if another configuration setting is selected for the demo.

## Original snapshots and validation

All five PRs target `main` and have the **Demo - Do not merge** label. Each starts
from the same correct baseline. The tests and assertions remain unchanged.

| ID | Original snapshot tag | Local tests | Hosted seeded run |
| --- | --- | --- | --- |
| SEC-01 | `demo/sec-01-before-fix` | 52 pass, 1 fail | [Failure](https://github.com/coderabbit-demo/mmani-demo/actions/runs/39001295943) |
| BUG-01 | `demo/bug-01-before-fix` | 51 pass, 2 fail | [Failure](https://github.com/coderabbit-demo/mmani-demo/actions/runs/39001353827) |
| MULTI-01 | `demo/multi-01-before-fix` | 47 pass, 6 fail | [Failure](https://github.com/coderabbit-demo/mmani-demo/actions/runs/39001357844) |
| GUIDE-01 | `demo/guide-01-before-fix` | 52 pass, 1 fail | [Failure](https://github.com/coderabbit-demo/mmani-demo/actions/runs/39001361751) |
| PATH-01 | `demo/path-01-before-fix` | 50 pass, 3 fail | [Failure](https://github.com/coderabbit-demo/mmani-demo/actions/runs/39001366086) |

Typechecking passes for all five scenarios. Local evidence, exact commits, and
assertion failures are in [phase2-local.json](../assets/demo-evidence/phase2-local.json).
Hosted execution is tracked separately in [phase2-ci.json](../assets/demo-evidence/phase2-ci.json).
The multi-repo probe uses the actual unchanged consumer and reports
`amountDueCents: undefined` when the provider renames its response field; see
[its captured assertion](../assets/demo-evidence/MULTI-01-consumer.txt).
Before review, scenario preparation narrowed an overly broad rename to preserve
the request's `subtotalCents`; the tagged snapshot contains only the intended
response-contract regression. This was seed preparation, not finding remediation.

Each PR's description identifies its single use case and intentional red tests.
These are context-informed reviews, not blind defect-discovery experiments.
Do not count repeated unit/HTTP failures as separate root-cause bugs.

SEC-01's initial review reports a Major SQL injection finding (CWE-89, External,
Trivial) plus a related Minor change to literal `%`/`_` search behavior. Both
were delegated to CodeRabbit; do not describe the review as exactly one finding.
The external-guideline diagnosis found no confirmed YAML defect and explained
that private sources are supported subject to installation/access checks. The
owner subsequently made the standards repo public; this is not a claim that
public visibility is generally required for external guidelines.

To rehearse the original state, first ensure a clean checkout, then switch to its
snapshot tag in detached mode. Run the recorded tests and return to `main` when
finished. Do not reset or force-push an active PR. Keep original and remediated
evidence tied to their respective SHAs.

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

## Draft 30-second narration and shot lists

These scripts are preparation artifacts, not recordings. Use the five timed
beats above. Record a claimed fix/result only after CodeRabbit produces it and
validation confirms it; otherwise leave the segment blocked. Adjust narration
speed after a timed read, preserving a 30-second final export.

### GEN-01 — Author workflow

Shots: PR #2 summary → boundary finding → CodeRabbit fix request → generated
commit and passing check → takeaway. Completion gate: verified CodeRabbit fix.

Narration: “Start with a small pull request and its generated summary. CodeRabbit
identifies the exact boundary that changes the customer's price, explains the
impact, and links the finding to the code. I delegate the correction to
CodeRabbit, then inspect its generated change and regression results. The author
can move from understanding the review to validating a fix, with an auditable
record of each step.”

### GEN-02 — Reviewer workflow

Shots: real Triage entry → chosen PR → Change Stack → finding/code → takeaway.
Completion gate: authenticated UI access and current evidence for every view.

Narration: “A reviewer starts by choosing which change needs attention. Triage
provides context for that choice. In Change Stack, I inspect the purpose of the
pull request, navigate to the relevant code, and read the supporting finding.
These views help organize the review; they do not replace judgment. Before
approving, I still need the correction, the test evidence, and the current
review result.”

### SEC-01 — SQL injection

Shots: PR #1 diff → injection finding/CWE and route → CodeRabbit action →
parameterized output plus regression check → takeaway. Gate: verified generated fix.

Narration: “This small search change puts request text directly into SQL. The
review traces the public search parameter to the query: an injection string
returns catalog rows instead of being treated as text. I ask CodeRabbit to
produce the correction. After completion, we inspect its parameterized query and
run the regression. The evidence is the input path and behavior, not just a
security label.”

### BUG-01 — Inclusive boundary

Shots: PR #2 comparison → exact-ten finding → Auto Fix action → generated commit
and test totals → takeaway. Gate: original and remediated test evidence.

Narration: “The discount starts at ten items, including exactly ten. This
comparison accidentally excludes that boundary, returning 12,990 cents instead
of 11,691. CodeRabbit identifies the functional error, and we delegate its
correction through Auto Fix. After completion, the same independent assertions
verify the result. We did not change the expected price to make the tests pass:
the implementation must satisfy the requirement.”

### MULTI-01 — Consumer compatibility

Shots: PR #3 renamed field → actual consumer call site → CodeRabbit fix request
→ restored contract and consumer probe → takeaway. Gate: verified source
retrieval/attribution and generated compatibility-preserving fix.

Narration: “This response rename looks local, but another repository reads the
old field. The consumer's checkout summary receives an undefined amount, even
though the provider still computes a price. We inspect the affected call site
and ask CodeRabbit to preserve the existing contract. After its correction,
the real consumer again receives 11,691 cents. Cross-repository context makes
the compatibility decision visible before merging.”

### GUIDE-01 — External standards

Shots: public standards file → replacement handler/timeout diff → attributed review →
CodeRabbit fix and timeout test → takeaway. Gate: a fresh review must actually
load and cite the standards; a generic timeout finding is insufficient.

Narration: “Our TypeScript standard lives in a separate repository. It requires
bounded outbound requests, and this pull request removes the timeout. The review
cites that external guideline rather than a copied local rule. We ask CodeRabbit
to restore compliant behavior and verify the unresponsive-service test after
completion. The standard stays centrally maintained, while the review applies
it to this repository's concrete change.”

#### Replacement scenario preparation — October 17, 2026 (UTC)

This is intentional scenario preparation, not timeout remediation. Keep the
replacement open, unmerged, without auto-merge, and never deploy it publicly.
The existing narration remains conditional on actual attribution and a separately
authorized CodeRabbit fix. No fix, scan, deployment, or settings change occurred.

- Original PR #4 snapshot: `49f7a2d1782ae832b93b93448ac3bb1c283f497e`,
  additionally preserved locally at `archive/guide-01-original-49f7a2d`.
  No commit or remote operation was made to PR #4 or its original branch.
- Replacement local branch: `demo/guide-01-http-scenario`, created independently
  from `main` at `4e86c7d0c61f62698266c59bbc46ef46d68ac823`.
  Replacement PR URL and final head SHA: **pending system delivery against main**.
  No hosted coding-task URL, generated commit, or PR result has been returned.
  The current coding-workflow artifact is the local implementation/diff; record
  the actual returned artifact and PR before presentation.
- Tested revision: uncommitted changes over that base SHA, not a generated head
  commit. Changed files: `src/app.ts`, `src/guidelines/service-status.ts`,
  `tests/guidelines-http.test.ts`, `scripts/smoke.mjs`, and this register
  (documentation updated after testing). Both handler and original timeout-removal
  seed are visible in the main-to-working-tree diff.
- `GET /api/guidelines/service-status` awaits `serviceIsHealthy` against its own
  loopback listener's fixed `/health` fixture; normal `npm start` needs no extra
  service. Only server-owned `createApp` configuration can override the URL.
  Responses: `200 {"healthy":true}`, `503 {"healthy":false}` for non-OK,
  or `502 {"error":"Service unavailable"}` for connection failure.
- Four real-HTTP tests assert literal responses, actual fixture requests,
  ignored query/body/header/Host destinations, non-OK and dropped connections.
  Listeners and connections are cleaned up. Test deadlines bound clients only.
  The application's unbounded fetch, response-body cancellation, `response.ok`,
  baseline assertions, and both 90% line policies are preserved.

Commands ran using `npx --yes --package=node@24.19.0 -c '<command>'`, since
the default installed Node was 24.15.0. Runtime retries prefixed the wrapper
with `NO_PROXY=127.0.0.1,localhost` because `NODE_USE_ENV_PROXY=1` is set.

| Command inside Node 24.19.0 wrapper | Actual result |
| --- | --- |
| `node --version && npm ci` | v24.19.0; 52 packages installed; audit reported zero vulnerabilities |
| `npm run check` | Typecheck and build passed; tests **38 passed, 19 failed / 57**; aggregate stopped before changed coverage |
| `npm run test:coverage -- --coverage.reportOnFailure` | Same 38/19; lines 21/57 (36.84%); branches 25/67 (37.31%); 90% line threshold failed |
| `npm run coverage:changed -- --all` | Initially missing LCOV; after report-on-failure, failed: 21/57 (36.84%) |
| `npm run coverage:changed -- --base 4e86c7d0c61f62698266c59bbc46ef46d68ac823` | Initially missing LCOV; after report-on-failure, failed: overall 21/57; changed executable lines 1/9 (11.11%) |
| `npm run smoke` | Failed on loopback connection before handler validation |
| `npm run smoke -- --built` | Independently attempted; failed on loopback connection before handler validation |

Validation limits: initial source smoke timed out; the initial test attempt was
stopped after connection failures. No-proxy retries failed with `ECONNREFUSED`,
including a minimal same-process HTTP listener/fetch probe outside the app.
Disabling the environment proxy also failed that probe. Of 19 failed tests,
15 are existing HTTP/service checks and four are new handler checks; 27 baseline
checks and all 11 coverage-policy checks passed. The unchanged stalled-service
assertion received connection refusal instead of `TimeoutError`, so this run
does **not** isolate the intentional timeout defect. Expected with working
loopback: 56 passes and one intentional timeout failure; that is not an observed
result. Source/compiled smoke success and consumer integration are unverified.

**Do:** After delivery, open the replacement's main-to-head diff, trace handler
to fetch, and inspect the actual review's Sources.
**Say:** This adds a real HTTP path to the isolated outbound-timeout scenario.
**See:** Preserved snapshot, replacement diff, fixture assertions, and fresh
runtime/review evidence once available. External Coding guidelines attribution
remains pending until a real replacement review against main cites
`coderabbit-demo/coderabbit-standards/guidelines/typescript.md`.
A generic timeout finding, completed review command, or absence of a skipped-source
warning is insufficient. Finding/Sources links, fix artifact, tested generated
SHA, and re-review remain pending; wait for separate remediation instruction.

Freshness/reset: retain the original PR #4 snapshot and historical evidence;
refresh tests in a working loopback environment, capture final base/head SHAs,
and verify both PRs remain open with auto-merge disabled. Preserve actual findings
before any authorized CodeRabbit fix. Reset only to the preserved seed, never
merge it into main. The segment remains one 30-second clip with the existing
0–5 / 5–13 / 13–21 / 21–28 / 28–30 second timing. Recording path, duration,
capture date, footage, and checked final narration are pending; no video exists.

### PATH-01 — Directory-specific instructions

Shots: YAML glob/rule → PR #5 offset → Path instructions citation → CodeRabbit
fix and tests → takeaway. Gate: verified generated fix; attribution already observed.

Narration: “This directory uses zero-based pagination. The rule is written in
CodeRabbit's path instructions, scoped to the matching TypeScript files. This
change subtracts one page, so page zero produces a negative offset. CodeRabbit
explicitly cites the path instruction. We delegate the correction and verify
the existing page-zero, page-one, and page-three cases. A local convention
becomes a concrete review check without duplicating shared organization rules.”

### QA-01 — Coverage versus assertions

Shots: future weak green coverage → weak assertion → exact-ten requirement →
strong red test → takeaway. Gate: dedicated QA comparisons and captured runs.

Narration: “These tests execute the pricing code and meet the coverage floor,
but their assertions still accept the wrong total. The exact-ten requirement
gives us an independent expected value. Strong assertions reject the boundary
defect even when coverage looks similar. CodeRabbit's review explains which
behavior needs protection. Coverage tells us what executed; the assertion tells
us whether that specific result was correct.”

### QA-02 — QA Agent execution

Shots: preserved scenario plan → expected/actual failure → CodeRabbit fix →
corrected execution evidence → takeaway. Gate: real weak and corrected QA Agent runs.

Narration: “Here is the QA Agent's saved scenario plan, followed by its actual
execution evidence. At the ten-item boundary, compare the expected price with
the application's response. We delegate remediation to CodeRabbit and inspect
a later run on the generated commit. The transition is labeled after completion:
this is a thirty-second explanation, not a claim that the agent completed its
work in thirty seconds.”

### QA-03 — Reusable Test Suites

Shots: saved journey → fixed revision/branch → completed run → actual assertions
→ takeaway. Gate: enabled Test Suites and a completed run of a reviewed journey.

Narration: “A reusable Test Suite preserves a known journey beyond a single pull
request. We select the execution branch while keeping the journey's expectations
fixed, then inspect its completed result and evidence. This is different from
a PR-specific QA plan. A pass supports the behavior that was exercised; it does
not prove exhaustive coverage or justify deleting unit tests. Keep the scenario
revision and tested commit together.”

### CONFIG-01 — Configuration as code

Shots: repo YAML → effective settings → focused rule/finding → policy verdict →
takeaway. Gate: effective configuration and observed comparison; no fabricated toggles.

Narration: “The review policy is a versioned file in this repository. We inspect
the effective settings, then connect one setting to its observed review effect.
Path instructions, external guidelines, and linked repositories provide different
kinds of context. The Security Gate reports a policy verdict; GitHub rules
separately control merge enforcement. Configuration changes what the reviewer
checks, not whether every possible defect has been eliminated.”

### SEC-02 — Deep Scan extension

Shots: scan/commit provenance → finding trace → attack-surface point → freshness
and scope → takeaway. Gate: separately prepared real scan evidence and UI access.

Narration: “PR security review examines an incoming change. Deep Scan provides
a separate repository-wide investigation at a recorded commit. We inspect a
finding's code evidence, then the mapped surface and its freshness. A verified
point can still carry an open vulnerability, and mapped coverage has a specific
denominator. This view helps prioritize investigation; it does not certify that
the repository is safe or fully covered.”

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
