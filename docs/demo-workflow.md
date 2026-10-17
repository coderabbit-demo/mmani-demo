# Demo workflow and recording register

## Preparation status

The correct baseline is published at `916e3862f2bbf6f2b8a680d70692abc3b0df25a3`
on `main`, with a passing [hosted baseline run](https://github.com/coderabbit-demo/mmani-demo/actions/runs/39001168131).
Five independent demo PRs, four CodeRabbit-generated remediation PRs, and a dedicated QA weak-assertion draft PR are open. Original defect snapshots are preserved with
`demo/<id>-before-fix` tags; CodeRabbit remediation can advance PR heads without
erasing those snapshots. QA Agent completed the weak-snapshot run with one failed scenario; corrected execution and video assets are still pending.
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
| Security PR Review / QA Agent / Test Suites entitlements | Hosted Security Review and completed QA Agent failure observed; reusable Test Suites and Deep Scan remain unverified |
| CodeRabbit fix actions | Auto Fix requests produce CodeRabbit coding proposals; activating the bot's create-PR action created remediation PRs #6–#9; local validation passes, but CodeRabbit skips reviewing its own PRs |
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
| GEN-01 | Author: summary → finding → CodeRabbit fix | Finding and CodeRabbit fix locally verified; bot re-review skipped | PR #2 → #6 | Storyboarded; footage pending |
| GEN-02 | Reviewer: Triage → Change Stack → evidence | Platform access pending | Pending | Planned |
| SEC-01 | SQL injection | CodeRabbit fix #9 locally verified: 61 tests pass; bot re-review skipped | [PR #1](https://github.com/coderabbit-demo/mmani-demo/pull/1), [finding](https://github.com/coderabbit-demo/mmani-demo/pull/1#discussion_r4301289005), [fix request](https://github.com/coderabbit-demo/mmani-demo/pull/1#issuecomment-6229490251) | Storyboarded; footage pending |
| BUG-01 | Inclusive discount boundary | CodeRabbit fix #6 locally verified: 53 tests pass; bot re-review skipped | [PR #2](https://github.com/coderabbit-demo/mmani-demo/pull/2), [finding](https://github.com/coderabbit-demo/mmani-demo/pull/2#discussion_r4301285165), [CodeRabbit fix PR #6](https://github.com/coderabbit-demo/mmani-demo/pull/6) | Storyboarded; footage pending |
| MULTI-01 | Downstream response contract | CodeRabbit fix #7 and actual consumer pass; direct consumer-source retrieval and impact confirmed | [PR #3](https://github.com/coderabbit-demo/mmani-demo/pull/3), [finding](https://github.com/coderabbit-demo/mmani-demo/pull/3#discussion_r4301284933), [fix request](https://github.com/coderabbit-demo/mmani-demo/pull/3#issuecomment-6229464959) | Storyboarded; footage pending |
| GUIDE-01 | External coding guidelines | Timeout remediation prepared in coding workflow; local HTTP validation blocked; historical source attribution unverified | [Replacement PR #12](https://github.com/coderabbit-demo/mmani-demo/pull/12), [generated original #11](https://github.com/coderabbit-demo/mmani-demo/pull/11); original #4 retained | Storyboarded; external evidence pending |
| PATH-01 | Path-specific pagination | Explicit Path instructions attribution verified; CodeRabbit fix #8 passes 53 tests; bot re-review skipped | [PR #5](https://github.com/coderabbit-demo/mmani-demo/pull/5), [finding](https://github.com/coderabbit-demo/mmani-demo/pull/5#discussion_r4301286142), [fix request](https://github.com/coderabbit-demo/mmani-demo/pull/5#issuecomment-6229490395) | Storyboarded; footage pending |
| QA-01 | Weak versus strong assertions | Reviewed: weak 53-test/100%-line pass misses boundary; CodeRabbit flags bug and weak assertions; remediation requested | [Draft PR #10](https://github.com/coderabbit-demo/mmani-demo/pull/10) | Storyboarded; footage pending |
| QA-02 | QA Agent behavioral evidence | Weak-snapshot run completed: one scenario failed; 1 failed and 4 unresolved exit criteria | [PR #10 QA status](https://github.com/coderabbit-demo/mmani-demo/pull/10#issuecomment-6229596313) | Storyboarded; execution/footage pending |
| QA-03 | Reusable Test Suites | Entitlement/access verification pending | Pending journey revisions and runs | Planned |
| CONFIG-01 | Versioned review configuration | Verified one-line assertive → chill override; hosted profile CHILL | [PR #13](https://github.com/coderabbit-demo/mmani-demo/pull/13#issuecomment-6229837239) | Storyboarded; footage pending |
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

## CodeRabbit remediation and QA evidence

All four fixes were produced by CodeRabbit's coding workflow and published using
its **Create a pull request with these changes** action. No finding was repaired
manually. The original demo branches remain unchanged and all PRs remain unmerged.

| Use case | CodeRabbit fix | Local validation |
| --- | --- | --- |
| BUG-01 | [PR #6](https://github.com/coderabbit-demo/mmani-demo/pull/6) | 53 tests pass; both HTTP smoke modes pass |
| MULTI-01 | [PR #7](https://github.com/coderabbit-demo/mmani-demo/pull/7) | 53 tests pass; unchanged real consumer returns $116.91 |
| PATH-01 | [PR #8](https://github.com/coderabbit-demo/mmani-demo/pull/8) | 53 tests pass; both HTTP smoke modes pass |
| SEC-01 | [PR #9](https://github.com/coderabbit-demo/mmani-demo/pull/9) | 61 tests pass, including CodeRabbit's eight added regressions; both smoke modes pass |

All four report 100% line and 94.44% branch coverage locally. Exact generated
SHAs and re-review response links are in
[coderabbit-fixes.json](../assets/demo-evidence/coderabbit-fixes.json).
CodeRabbit explicitly skipped each requested follow-up review because the PR
was authored by the account configured to post its reviews. Passing local tests
are **not** a completed CodeRabbit re-review. Preserve that distinction on video.

GUIDE-01's [source inspection](https://github.com/coderabbit-demo/mmani-demo/pull/4#discussion_r4301314113)
retrieved the external guideline but found that its request-handler scope does
not cover the original test-only helper. A
[CodeRabbit scenario adaptation request](https://github.com/coderabbit-demo/mmani-demo/pull/4#issuecomment-6229540980)
produced [PR #11](https://github.com/coderabbit-demo/mmani-demo/pull/11), commit
`742c06cb1baae25731b8ed2abc97024158d17a12`. The exact generated commit, without
manual edits, is published against main as [PR #12](https://github.com/coderabbit-demo/mmani-demo/pull/12)
under the user account so CodeRabbit can review it. Both the real handler and
unbounded fetch are visible. Typecheck/build and four new handler tests pass;
56 total tests pass and the original timeout test fails as intended. Both HTTP
smoke modes pass. [Local log](../assets/demo-evidence/GUIDE-01-handler-check.txt).
The original generic timeout finding is not proof of guideline attribution.

The consumer repository is now public, verified through GitHub's API.
[CodeRabbit successfully retrieved its source](https://github.com/coderabbit-demo/mmani-demo/pull/3#issuecomment-6229583446)
at `8d814ccfa4bf014a57ff321c010e3e40b9545fd0`: `src/checkout.ts`,
`buildCheckoutSummary(cart)`, line 25 reads `quote.totalCents`. Its
`src/client.ts` response type requires that field and `fetchQuote()` performs no
runtime remapping. CodeRabbit confirmed the renamed provider response produces
an undefined consumer output. This is direct source-backed review evidence;
CodeRabbit did not execute the consumer. Our separate local integration probe
provides the runtime evidence. See the
[captured response](../assets/demo-evidence/MULTI-01-source-review.md).

QA-01 [draft PR #10](https://github.com/coderabbit-demo/mmani-demo/pull/10),
SHA `b2dcfc46b3de2a1c69350a2ab3de046e8fcc821b`, preserves the exact-ten discount
defect while deliberately weakening only its QA comparison assertions.
[53 passing tests](../assets/demo-evidence/QA-01-weak-check.txt) and
[100% changed-line coverage](../assets/demo-evidence/QA-01-weak-changed.txt)
miss the [independent acceptance failure](../assets/demo-evidence/QA-01-acceptance-probe.txt):
12,990 cents returned instead of 11,691. The original BUG-01 strong assertions
fail on this defect, and CodeRabbit fix #6 passes them. The weak snapshot is tagged
`demo/qa-01-before-fix`. A manual full review and `@coderabbitai test` request were
submitted on PR #10. CodeRabbit completed its review and raised two Major issues:
[boundary](https://github.com/coderabbit-demo/mmani-demo/pull/10#discussion_r4301338265)
and [weak assertions](https://github.com/coderabbit-demo/mmani-demo/pull/10#discussion_r4301338268).
The [CodeRabbit fix request](https://github.com/coderabbit-demo/mmani-demo/pull/10#issuecomment-6229834546)
requests a separate corrected PR, preserving the weak branch for QA execution.

QA Agent accepted run `fcff9300-2e35-4c5c-b17b-97994fc328d9` for the weak SHA;
its [status](https://github.com/coderabbit-demo/mmani-demo/pull/10#issuecomment-6229596313)
reports **one scenario failed**, `pricing-discount-001`: “It applies the discount
starting at ten items and returns exact integer-cent totals.” Exit criteria:
0 passed, 1 failed, 4 unresolved (5 assigned). It ran in an **emulated environment**;
the public status does not expose the full plan or actual/expected values.
An [evidence request](https://github.com/coderabbit-demo/mmani-demo/pull/10#issuecomment-6229850090)
asks for those original artifacts without reconstructing them from code. Do not
substitute our independent local probe for QA Agent execution details. Reusable
Test Suites are still unverified. Historical runbooks do not fill these gaps.

CONFIG-01 [PR #13](https://github.com/coderabbit-demo/mmani-demo/pull/13), SHA
`51053d1eead9af9d21d313a3dbf4d3bcc9d38c59`, changes only `reviews.profile` from
`assertive` to `chill`. The completed hosted review generated no actionable comments and explicitly reports **CHILL**; compare
baseline **ASSERTIVE**. This proves that repository profile selection took effect,
not a different issue count, organization inheritance, or merge enforcement.
[Captured report](../assets/demo-evidence/pr-13-review.json).

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

Draft caption tracks for all twelve segments are in
[assets/demo-captions](../assets/demo-captions/). Each spans exactly 30 seconds,
with ten provisional three-second cues. Retiming to the recorded narration and
checking readability are required before export. These are scripts/caption assets,
not captured product footage or finished videos. This environment has no connected
authenticated CodeRabbit browser or recording tool; Triage, Test Suites, Deep Scan,
and product UI capture therefore remain outside the verified evidence.

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

Shots: public standards file → PR #12 handler and timeout change → attributed review →
CodeRabbit fix and timeout test → takeaway. Gate: a fresh review must actually
load and cite the standards; a generic timeout finding is insufficient.

Narration: “Our TypeScript standard lives in a separate repository. It requires
bounded outbound requests, and this pull request removes the timeout. The review
cites that external guideline rather than a copied local rule. We ask CodeRabbit
to restore compliant behavior and verify the unresponsive-service test after
completion. The standard stays centrally maintained, while the review applies
it to this repository's concrete change.”

#### Separate timeout remediation — October 17, 2026 (UTC)

This coding-workflow handoff prepares a separate stacked remediation from PR #12's
exact head, `742c06cb1baae25731b8ed2abc97024158d17a12`. Original PR #12,
`demo/guide-01-handler`, and snapshot tags are preserved; no remote commands,
commits, merges, or branch updates were performed here. System delivery is still
pending: no new PR URL, generated commit SHA, or hosted task/result link has been
returned. Keep both PRs open and unmerged and recheck auto-merge settings before
recording. The tested revision is the uncommitted source/test diff over that
head; documentation was reconciled afterward. Record the delivered commit and
repeat validation in a working loopback environment before claiming verification.

Original findings and corrections in this remediation:

- [Timeout finding, discussion_r4301450030](https://github.com/coderabbit-demo/mmani-demo/pull/12#discussion_r4301450030):
  `src/guidelines/service-status.ts` restores `AbortSignal.timeout(1_000)` and
  the bounded-request doc comment, retaining body cancellation and `response.ok`.
  `tests/guidelines-http.test.ts` preserves all four existing tests and adds a
  real stalled-service handler regression. The fixture must receive exactly
  `GET /stalled`; the handler must return 502 with exact body
  `{"error":"Service unavailable"}`. `performance.now()` measures completion
  through body consumption, under 2,000 ms (1,000 ms deadline plus 1,000 ms
  scheduling allowance). The client watchdog is 3,000 ms; rejection or a destroyed
  connection fails the test. Existing server/connection cleanup runs after failure.
- [GEN-01 status finding, discussion_r4301450028](https://github.com/coderabbit-demo/mmani-demo/pull/12#discussion_r4301450028):
  this document is reconciled with the shared register at local main
  `c86566cd43e54bfa9d3fd9ead836c8dda88cf82b`, retaining GUIDE-01 history below.
  PR #6 satisfies GEN-01's fix demonstration and passed local validation.
  CodeRabbit skipped re-review because its author was the configured review
  account; this is not a completed bot re-review. No second use-case register
  was added.

Guideline provenance: the supplied handoff reports retrieval of
[guidelines/typescript.md, No unbounded outbound calls](https://github.com/coderabbit-demo/coderabbit-standards/blob/main/guidelines/typescript.md#no-unbounded-outbound-calls),
blob `ac80b0584885f88e9e64ff651914b880aaa803a8`. Its bounded-fetch requirement
applies through the real handler, but does not prescribe 1,000 ms; that value
restores the previous implementation. This session did not retrieve the source.
The published timeout comment links Node.js documentation. Historical retrieval
for that review remains **unverified** without the retrieval trace for review run
`b7cea767-ff75-49ba-8e70-0d64869f49db`; repository configuration alone is insufficient.

Validation used Node **24.19.0** through
`npx --yes --package=node@24.19.0 -c '<command>'`. `npm ci` exited **0**,
installed 52 packages, and reported zero vulnerabilities. Dependencies and
`package-lock.json` are unchanged. The reproducible final attempts set
`NODE_USE_ENV_PROXY=0 NO_PROXY=127.0.0.1,localhost` to bypass the environment's
proxy for synthetic local fixtures.

| Command | Actual exit | Observed result |
| --- | --- | --- |
| `npm run typecheck` | 0 | Passed |
| `npm run build` | 0 | Passed |
| `npm test` | 1 | 38 passed, 20 failed / 58; loopback connection failures |
| `npm run test:coverage` | 1 | Same 38/20; no LCOV emitted on failure |
| `npm run coverage:changed -- --all` | 1 | Initially missing LCOV; after diagnostic report, 21/57 lines (36.84%) |
| `npm run coverage:changed -- --base 742c06cb1baae25731b8ed2abc97024158d17a12` | 1 | Initially missing LCOV; after diagnostic report, selected changed lines 1/1 (100%); overall floor failed |
| `npm run smoke` | 1 | Source smoke failed with loopback `ECONNREFUSED` |
| `npm run smoke -- --built` | 1 | Compiled smoke independently failed with loopback `ECONNREFUSED` |
| `npm run test:coverage -- --coverage.reportOnFailure` | 1 | Lines 21/57 (36.84%); branches 25/67 (37.31%); 90% line floor failed |
| `npm run check` | 1 | Typecheck/build passed; failed during coverage tests |

The selected changed-line result is separate from the all-source check.
`git merge-base HEAD 742c06cb1baae25731b8ed2abc97024158d17a12` confirms that exact
stacked base for this local diff. Once the system creates the remediation PR,
verify its actual target/merge-base and repeat the changed-line command if it
changes. The checkout is shallow and `git merge-base HEAD main` has no result;
no main-based merge-base coverage is claimed.

The original `TimeoutError` assertion and all previous assertions remain intact.
A minimal same-process listener/fetch probe also failed with `ECONNREFUSED`.
The new stalled-handler test never reached its fixture, so no handler 502/body or
elapsed completion time was observed. Temporarily removing the deadline and
running `npm test -- tests/guidelines-http.test.ts -t "returns 502 within"`
exited **1** (one failed, four skipped) with the same connection refusal;
the deadline was restored immediately afterward. This is **not** fault-validation
proof: demonstrating watchdog failure without the deadline, then a genuine 502
within 2,000 ms with it, remains blocked by loopback networking. No assertions
were weakened. No completed CodeRabbit re-review or verified remediation is claimed.

**Do:** Open both original finding links, this separate diff, and the final
validation logs; rerun the stalled fixture after networking is available.
**Say:** The timeout and stale status are corrected in a separate coding artifact;
execution and historical review attribution retain explicit evidence limits.
**See:** A bounded fetch, preserved assertions, and actual failed validation,
followed by fresh successful execution and re-review only when obtained.
The GUIDE-01 narration above remains conditional; do not record it as established
external Sources attribution. Recording path, duration, capture date, generated
commit, delivery URL, successful timeout evidence, and re-review remain pending.

#### Historical replacement scenario preparation — October 17, 2026 (UTC)

This subsection preserves earlier preparation evidence verbatim. Its pending
delivery/runtime statements describe that earlier attempt, superseded by main's
scenario evidence and the separate remediation results above.

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

Shots: PR #10 weak green coverage → weak assertion → exact-ten requirement →
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

Shots: main ASSERTIVE report → PR #13 one-line YAML diff → hosted CHILL report →
context configuration blocks → takeaway. Gate: verified effective profile, now observed.

Narration: “The baseline review reports an assertive profile. This separate pull
request changes one YAML setting to chill. CodeRabbit's run configuration now
reports chill, so we can verify that the repository setting took effect.
Path instructions, shared guidelines, and linked repositories are separate
configuration choices. This profile comparison shows a real settings change;
it does not prove fewer defects or establish GitHub merge enforcement.”

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
