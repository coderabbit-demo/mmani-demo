# Demo workflow and recording register

## Presenter release — October 19, 2026, afternoon

The current presenter script is the Do / Say / See walkthrough below, including
the three updated segments in this section. Earlier dated status notes are an
audit trail, not current blockers. Twelve 30-second clips are prepared. On
October 19, the user approved the original nine: GEN-01, GEN-02, SEC-01, BUG-01,
MULTI-01, GUIDE-01, PATH-01, QA-01, and CONFIG-01. Their recording status is
**checked / user-approved**; approved file hashes are in the capture manifest.
QA-02, QA-03, and SEC-02 remain drafts pending user review. Filenames retain
`-draft` to preserve existing links; approval does not alter the video bytes.

### QA-02 — current Do / Say / See

**Do:** Open PR #10's saved weak plan and result, then CodeRabbit fix PR #14.
Show the downloaded corrected plan and final result under `QA-02-corrected-export`.
**Say:** “The original QA run exposed the ten-item defect. CodeRabbit supplied
the correction. The preserved corrected execution records the four expected
responses. These PR-specific plans differ; this is not a fixed-suite replay.”
**See:** Exact run IDs, SHAs, literal HTTP totals, and the saved final result.
Keep the weak run's unresolved criteria, unknown corrected runtime, and the
non-authoritative-results caveat visible. Label downloaded evidence as an export.
The Review Stack access problem does not prevent using these recovered artifacts.

### QA-03 — current Do / Say / See

**Do:** Open Test Suites → mmani-demo → saved QA-03 journey → run history.
Compare weak job `8ac582c9-4662-4d25-94d5-a089c0409038` with corrected job
`554ca141-3818-4c95-8383-893f73ef4307`; expand the saved result with Enter if
clicking its disclosure does not open it. Open the HTTP evidence files.
**Say:** “The same saved journey revision catches the boundary failure and
passes on CodeRabbit's correction. Both runs used Node v24.20.0. The expected
values did not change.”
**See:** Revision 1, commits b2dcfc46 and 4e6f38b0, 12,990 versus 11,691 at ten
items, then all four correct totals. The managed runtime differs from the
repository's 24.19.0 pin. The probe implementations differ; the journey and
literal requirements remain fixed. No browser execution is claimed.

### SEC-02 — current Do / Say / See

**Do:** Open [scan history](https://app.coderabbit.ai/security/activity?search=mmani-demo),
select scan `af366706-e2bf-4852-9424-07c2af52c036`, expand Last scan details,
open its finding, then inspect the repository Attack surface tab and the
`addedLines` sink at `scripts/changed-coverage.mjs:42`.
**Say:** “This repository-wide scan records a specific commit and one Medium
finding. Its trace follows contributor-controlled input through CI validation to
an unchecked numeric loop. The mapped point is verified while its finding stays
open; verified coverage does not mean vulnerability-free.”
**See:** Completed in 18m 35s, triggered October 19 at 1:09 PM Pacific; scanned
commit `18ea929f0694fd31695376de007ff953374ecd4e`. Finding
`d865a373-04a1-4293-bb26-5da3b4335aa0` is Medium, Open, CWE-835, with External
reachability and Moderate exploitability as reported by CodeRabbit. First/last
seen: 1:29 PM Pacific. The current surface shows **73/73 verified**, zero stale/
unverified, and warns that 15 points were checked within the repository and
further checks need external evidence. The earlier 81-point map is a historical
snapshot with a different denominator; do not claim a fixed-denominator trend.

[Scan provenance](../assets/demo-evidence/captures-2026-10-19/SEC-02-scan-provenance.txt),
[finding trace](../assets/demo-evidence/captures-2026-10-19/SEC-02-finding-trace.txt),
and [surface](../assets/demo-evidence/captures-2026-10-19/SEC-02-surface-completed.txt).
No reproducer was executed, no fix was triggered, and no vulnerability was merged
to seed this scan. Remediation is not part of this investigation-only segment;
any later correction must be produced by CodeRabbit.

Freshness check: all 16 demo PRs remain open and unmerged, every auto-merge
request is absent, and repository automatic merging is disabled. Triage-specific
automatic rules remain unverified. Recheck this before presenting. No new local
application test pass is claimed by this documentation/media-only update.

## QA-03 comparison execution — October 19, 2026

**Comparison complete:** corrected job finished in **4m 56s**, with the single
journey **passed**. Execution run `e579e311-45fb-420f-9d07-1132e29dfdc8` tested
`4e6f38b08d23d81ae408afdaed418b6aaccc2064`, journey revision **1**, on
`Web-Dev-MMANI` with Node **v24.20.0**, matching the weak run's runtime.
Recorded HTTP responses for quantities 9, 10, 11, and 15 were all HTTP 200 and
exactly matched totals **11,691 / 11,691 / 12,860 / 17,537** cents. The corrected
probe also verified exact fields, integer values, and no duplicate JSON fields.
The saved journey and literal expectations were unchanged; generated probe code
is not byte-identical between runs. Final repository state was clean and service
shutdown recorded. Neither run started a browser session.

[Corrected summary](../assets/demo-evidence/captures-2026-10-19/QA-03-corrected-completed.txt)
and [corrected HTTP observations](../assets/demo-evidence/captures-2026-10-19/QA-03-corrected-http-evidence.txt)
complete the fixed-journey failure/pass evidence. Runtime deviation from the
repository's 24.19.0 pin remains documented for both runs. QA-03 evidence is
verified within this scope; its 30-second recording is still pending.
The launch/in-progress notes below are retained as history.

Weak job completed in **7m 24s** with **one bug found**. Execution run ID:
`cbf91494-d0c3-43cd-af67-9860a2c2c71d`. All four HTTP cases executed on the
expected weak SHA: quantity ten returned **12,990**, expected **11,691** cents;
quantities 9, 11, and 15 matched 11,691, 12,860, and 17,537 respectively.
The UI records Node **v24.20.0** as a deviation from the repository pin,
with validity shown as `none`; retain this label without interpreting it as a
runtime-compliance pass. Final checkout was clean and service shutdown verified.
[Completed summary](../assets/demo-evidence/captures-2026-10-19/QA-03-weak-completed.txt)
and [HTTP observations](../assets/demo-evidence/captures-2026-10-19/QA-03-weak-http-evidence.txt).

Started corrected job `554ca141-3818-4c95-8383-893f73ef4307` at **2:12 PM Pacific**
on `coderabbitai/chat/b2dcfc4`, confirmed commit prefix `4e6f38b0`, unchanged
journey revision **1** and environment readiness revision **2**. Status:
**in progress**; corrected outcome and runtime remain to be captured.

User authorized execution of the saved journey. Started weak-branch job
`8ac582c9-4662-4d25-94d5-a089c0409038` at 2:03 PM Pacific on
`demo/qa-01-weak-assertions`, head `b2dcfc46b3de2a1c69350a2ab3de046e8fcc821b`.
Journey ID `53d66f3f-1fdb-4011-8e52-8c5b35b53d23`, revision **1**;
environment `Web-Dev-MMANI`, readiness configuration revision **2** passed.
The job progressed from queued to in progress. A final result is not yet claimed.
Corrected comparison target remains `coderabbitai/chat/b2dcfc4`, head
`4e6f38b08d23d81ae408afdaed418b6aaccc2064`; both PRs were confirmed open.

## QA-03 reusable journey saved — October 19, 2026

Added **QA-03 — TEAM10 inclusive boundary and exact pricing contract** to the
`mmani-demo` Test Suites library, with seven steps and fixed literal HTTP
expectations for quantities 9, 10, 11, and 15. The UI confirms one saved journey,
seven steps, and **No recent result**. Environment: `Web-Dev-MMANI`; execution
branch remains `main`. No run was started by this save operation.

The managed environment supports only Node major-version pinning; the user
reports v24.20.0. Each execution must record its actual Node version and tested
SHA. The 24.19.0 repository pin deviation is explicit and does not cause a manual
sandbox modification. Reuse this journey unchanged on PR #10's weak branch and
PR #14's CodeRabbit-corrected branch; preserve both results and flag any runtime
difference. Only CodeRabbit may remediate findings.

[Saved steps](../assets/demo-evidence/QA-03-journey-steps.json) and
[UI snapshot](../assets/demo-evidence/captures-2026-10-19/QA-03-journey-saved.txt).
Implementation status: prepared; completed execution evidence and recording
remain pending. This supersedes earlier statements that the library is empty.

## QA-02 saved plan and final result recovered — October 19, 2026

The second user-supplied archive, `saved-plan-and-run-metadata.zip`, supplies
the corrected run's persisted plan and final result. Independent comparison
confirms the plan extract equals the saved state's scenario values, the final
result extract equals its saved result, and both previously downloaded execution
files match the SHA-256 hashes recorded in that result. Run, PR, and commit match
the QA-02 corrected evidence below. These checks establish consistency across
the supplied exports; cloud origin was not independently fetched.

- [Saved plan](../assets/demo-evidence/QA-02-corrected-export/saved-plan.json):
  four HTTP requests, explicit input/output expectations, scope, and entry/exit
  criteria. This was embedded in persisted state, not a separate plan object.
- [Saved final result](../assets/demo-evidence/QA-02-corrected-export/saved-final-result.json):
  one passed scenario, one passed entry criterion, five passed exit criteria;
  no recorded scenario deviations or limitations. The run-level caveat is
  “QA Agent results are non-authoritative.” Input validation and unrelated
  endpoints were outside scope. Run completed October 16 at 10:00:09 PM Pacific.
- [Metadata verification](../assets/demo-evidence/QA-02-corrected-export/metadata-verification.json)
  records archive hash and comparisons. Internal organization/storage locator
  fields are omitted from the public final-result copy; originals remain in
  the supplied archive.

QA-02's plan-to-execution-to-saved-result evidence is ready for the presenter
script and video preparation. A separate final-validator document is not required
to represent this saved final result accurately. Runtime version remains unknown:
schema/model versions do not prove Node or agent runtime versions. Do not claim
pinned-runtime compliance. No original browser video exists in these exports.
The weak run's unresolved criteria and runtime deviation remain explicit, and
the two PR-specific plans still differ. Recording remains pending; QA-03's fixed
journey comparison remains separate. This section supersedes the earlier missing
plan/final-result blockers below.

## QA-02 downloaded evidence — October 19, 2026

The user supplied `original-evidence.zip` for corrected PR #14 run
`69a73d04-cc6e-416e-bbf5-72a604503bd0`, scenario
`pricing-team10-inclusive-boundary`, commit
`4e6f38b08d23d81ae408afdaed418b6aaccc2064`. Both enclosed execution artifacts
match the supplied manifest's byte counts and MD5 checksums. This verifies
archive consistency; the declared cloud origin was not independently fetched.
Internal cloud locators remain in the original download and are not reproduced here.

- [Execution result](../assets/demo-evidence/QA-02-corrected-export/execution-result.txt)
  records one entry and five exit criteria passed.
- [Execution log](../assets/demo-evidence/QA-02-corrected-export/execution-log.txt)
  contains four HTTP 200 responses and exact JSON matches: quantities 9, 10,
  11, and 15 return totals 11,691, 11,691, 12,860, and 17,537 cents. Requests
  were recorded October 16 at 9:58:56 PM Pacific. Git status was clean before
  and after the probe. These are historical agent observations, not a new local run.
- [Independent archive checks](../assets/demo-evidence/QA-02-corrected-export/verification.json)
  preserve hashes and limitations. The archive lacks a standalone initial plan,
  runtime version, and separate final-validator report. Its browser recording
  reports `not_started` and `interrupted`; there is no recorded browser video.

The missing corrected HTTP execution evidence is now recovered despite the
Review Stack access blocker. Use the downloaded artifacts in QA-02's result
beat and label their source. Full plan/runtime/final-validation provenance remains
pending; do not mark the clip checked. Preserve the weak run's runtime deviation
and unresolved criteria. These different PR-specific scenarios are not a fixed
Test Suite replay and do not replace QA-03. The user also reports Deep Scan
completed; completed scan artifacts have not yet been inspected in this update.

## Latest readiness update — October 19, 2026, afternoon (Pacific)

This update supersedes the Test Suites enrollment and scan-not-started blockers
in the earlier capture below. The user completed repository/environment setup
and initiated the Deep Scan. Read-only UI verification confirms:

- **QA-03:** `mmani-demo` is enrolled, execution branch `main`, environment
  `Web-Dev-MMANI`. The library still displays “Build your user journey library”
  and unpublished drafts displays “No unpublished drafts.” Setup is available;
  a saved fixed journey and completed weak/corrected runs are still pending.
  [Setup evidence](../assets/demo-evidence/captures-2026-10-19/QA-03-setup-ready-latest.txt)
  and [draft check](../assets/demo-evidence/captures-2026-10-19/QA-03-drafts-empty-latest.txt).
- **SEC-02:** repository-wide scan `af366706-e2bf-4852-9424-07c2af52c036`
  was initiated by Mahesh Mani at 1:09 PM Pacific. Scan history reports
  **Estimating**, with duration and cost not yet available. Completed results,
  tested commit, findings, and refreshed surface evidence remain pending.
  [Scan history](https://app.coderabbit.ai/security/activity?search=mmani-demo)
  and [captured state](../assets/demo-evidence/captures-2026-10-19/SEC-02-running-latest.txt).

No duplicate scan or QA run was started during this verification. Recording
status remains nine drafts; QA-02, QA-03, and SEC-02 are not completed clips.

## Continuation evidence — October 19, 2026 (Pacific)

This dated update supersedes earlier access, delivery, and recording-pending
statements below. Earlier test results remain tied to their original SHAs and
environments; they were not rerun on this Mac.

- Local GitHub and CodeRabbit CLI authentication work outside the sandbox. The
  sandbox's initial credential/network failures were environmental, not invalid
  sign-ins. CodeRabbit CLI and browser context were selected as `coderabbit-demo`.
  This Mac has Node 24.13.0; no new pinned-runtime local test pass is claimed.
- Before retrying PR #15: all 15 PRs were open, no delivery branch existed, all
  listed GitHub jobs were complete, and CodeRabbit's repository task listing
  returned zero tasks. The old checked create-PR action and unanswered diagnosis
  remain preserved in [delivery evidence](../assets/demo-evidence/2026-10-19-pr15-delivery.json).
- One bounded retry used **CodeRabbit CLI `code new`**, then **`code push --stacked`**.
  [Task c9557282](https://app.coderabbit.ai/code/tasks/c9557282-4f73-41d8-b11b-e5dd46628bd7)
  produced [documentation cleanup PR #16](https://github.com/coderabbit-demo/mmani-demo/pull/16).
  Base: `f95264bf7f801834d7e26a9ae90554b0f93a510f`; generated head:
  `09dd2e649a9f49918332f4d9ca425e6b3aa6e6b4`. Git records CodeRabbit as both author
  and committer. Only `docs/demo-workflow.md` changes. Independent comparison of
  every other path is empty, and `git diff --check` passes. CodeRabbit validated
  the three absolute links with HTTP 200. No manual finding fix was applied.
  [Independent diff/tree checks](../assets/demo-evidence/2026-10-19-cleanup-independent-check.json).
- [PR #16 CI passed](https://github.com/coderabbit-demo/mmani-demo/actions/runs/39314026551).
  Its bot review was **skipped**, despite the successful status context; this is
  not a completed re-review. [Validation](../assets/demo-evidence/2026-10-19-pr16-validation.json)
  and [bot response](../assets/demo-evidence/2026-10-19-pr16-comments.json) are separate.
  PR #16 is open against PR #15's branch; neither was merged. PR #15's own head
  still contains the old documentation, so demonstrate the separate cleanup artifact.
- All **16 PRs are open, unmerged, with auto-merge absent**. PR #16 has the
  **Demo - Do not merge** label. Exact current base/head SHAs are in
  [PR snapshot](../assets/demo-evidence/2026-10-19-pr-state.json).
- Authenticated Triage and Change Stack work in the demo organization. GEN-02's
  actual click path is Triage → repository `mmani-demo` → search `BUG-01` →
  P3 card #2 → layer “Update discount threshold” → `src/bugs/discount.ts`.
  Layers are within the PR; no branch stacking is implied. No merge or fix button
  was activated during capture. Triage automatic rules remain unverified.
- QA-02's original saved plan, execution result, and final checks are now captured
  [here](../assets/demo-evidence/captures-2026-10-19/). The result records actual
  12,990 versus expected 11,691 cents at quantity ten. It used **Node 24.14.1**,
  not pinned 24.19.0. The final validator retains **1 failed / 4 unresolved** exit
  criteria due to this deviation, although the execution artifact reports other
  cases passed. Preserve both layers of evidence; do not promote them to four
  validated passes. Run/commit IDs remain those in `qa-agent-runs.json`.
- The corrected PR #14 QA evidence URL currently returns **No Review Stack for
  this pull request**. Its public pass summary remains available; detailed
  corrected artifacts are blocked. Do not launch another run or present a fixed
  Test Suite replay as a workaround for missing original evidence.
- Test Suites UI is available, but searching its repository selector for
  `mmani-demo` returns **No matching repositories**. QA-03 needs repository setup,
  a fixed journey revision/environment, and completed weak/corrected runs before
  its intended clip can be completed. No setup settings were changed.
- Deep Scan UI is available. This repository reports **no completed analysis**,
  **0 / 81 verified security points**, mapping dated October 16, 9:14 PM Pacific,
  and last scanned **Never**. SEC-02 remains blocked on separately scoped scan
  evidence; no scan was started and no vulnerable branch was merged.

### Video delivery and remaining gates

Nine actual MP4 drafts now exist in [demo-videos](../assets/demo-videos/).
They are **edited real UI still captures**, not continuous cursor recordings,
with synthetic Samantha narration, burned-in narration, separate SRT captions,
and explicit “After completion” cuts. Each is 1920×1080, 30 fps, 900 frames,
and exactly 30.000 seconds. The capture date is October 19; historical CI dates
remain visible. The QA-01 acceptance card is explicitly labeled local evidence.

[Capture manifest](../assets/demo-videos/capture-manifest.json) records each shot,
narration, timing, asset path, and duration. [Media validation](../assets/demo-videos/media-validation.json)
records stream/duration/audio-signal checks. Public source URLs and DOM snapshots
are preserved in the capture directory. **Drafts are not marked checked**:
full playback, narration pace, final crops, and claim-to-shot alignment need review.
GEN-01/BUG-01/GEN-02 reuse the same focused PR #2→#6 evidence appropriately.

QA-02, QA-03, and SEC-02 retain scripts only; no substitute videos were fabricated.
GUIDE-01's draft shows the verified code result, while the separate documentation
cleanup is PR #16. CONFIG-01's fresh UI shows the observed before/after setting;
its original CHILL run-profile report is retained separately in `pr-13-review.json`.
Before final export, align that specific report with the effective-profile beat.

Freshness/reset: recheck the recorded SHAs and URLs; keep snapshot tags and all
PRs open; never rerun fix actions during playback. Revisit the original QA artifact
URLs after access is repaired, without replacing historical runs. Refresh clip
crops if product UI changes. No current video implies execution finished in thirty
seconds. Repository main remains the only authoritative status register.

## Preparation status

The correct baseline is published at `916e3862f2bbf6f2b8a680d70692abc3b0df25a3`
on `main`, with a passing [hosted baseline run](https://github.com/coderabbit-demo/mmani-demo/actions/runs/39001168131).
Focused demonstration PRs and separate CodeRabbit-generated remediation PRs are open. Original defect snapshots are preserved with
`demo/<id>-before-fix` tags; CodeRabbit remediation can advance PR heads without
erasing those snapshots. QA Agent completed both runs: one failed scenario on the weak snapshot and one passed scenario on CodeRabbit's correction. Detailed execution artifacts and video assets are still pending.
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
| GEN-01 | Author: summary → finding → CodeRabbit fix | Finding and CodeRabbit fix locally verified; bot re-review skipped | PR #2 → #6 | [30s draft](../assets/demo-videos/GEN-01-30s-draft.mp4); checked / user-approved October 19 |
| GEN-02 | Reviewer: Triage → Change Stack → evidence | Authenticated views and PR #2 layer verified October 19 | PR #2 → #6; captured Triage/layer | [30s draft](../assets/demo-videos/GEN-02-30s-draft.mp4); checked / user-approved October 19 |
| SEC-01 | SQL injection | CodeRabbit fix #9 locally verified: 61 tests pass; bot re-review skipped | [PR #1](https://github.com/coderabbit-demo/mmani-demo/pull/1), [finding](https://github.com/coderabbit-demo/mmani-demo/pull/1#discussion_r4301289005), [fix request](https://github.com/coderabbit-demo/mmani-demo/pull/1#issuecomment-6229490251) | [30s draft](../assets/demo-videos/SEC-01-30s-draft.mp4); checked / user-approved October 19 |
| BUG-01 | Inclusive discount boundary | CodeRabbit fix #6 locally verified: 53 tests pass; bot re-review skipped | [PR #2](https://github.com/coderabbit-demo/mmani-demo/pull/2), [finding](https://github.com/coderabbit-demo/mmani-demo/pull/2#discussion_r4301285165), [CodeRabbit fix PR #6](https://github.com/coderabbit-demo/mmani-demo/pull/6) | [30s draft](../assets/demo-videos/BUG-01-30s-draft.mp4); checked / user-approved October 19 |
| MULTI-01 | Downstream response contract | CodeRabbit fix #7 and actual consumer pass; direct consumer-source retrieval and impact confirmed | [PR #3](https://github.com/coderabbit-demo/mmani-demo/pull/3), [finding](https://github.com/coderabbit-demo/mmani-demo/pull/3#discussion_r4301284933), [fix request](https://github.com/coderabbit-demo/mmani-demo/pull/3#issuecomment-6229464959) | [30s draft](../assets/demo-videos/MULTI-01-30s-draft.mp4); checked / user-approved October 19 |
| GUIDE-01 | External coding guidelines | Replacement reviewed; external source verified in follow-up, original review retrieval unverified; CodeRabbit code fix #15 passes 58 tests; separate CodeRabbit cleanup #16 verified and unmerged | [Replacement PR #12](https://github.com/coderabbit-demo/mmani-demo/pull/12), [generated original #11](https://github.com/coderabbit-demo/mmani-demo/pull/11); original #4 retained | [30s draft](../assets/demo-videos/GUIDE-01-30s-draft.mp4); checked / user-approved October 19 |
| PATH-01 | Path-specific pagination | Explicit Path instructions attribution verified; CodeRabbit fix #8 passes 53 tests; bot re-review skipped | [PR #5](https://github.com/coderabbit-demo/mmani-demo/pull/5), [finding](https://github.com/coderabbit-demo/mmani-demo/pull/5#discussion_r4301286142), [fix request](https://github.com/coderabbit-demo/mmani-demo/pull/5#issuecomment-6229490395) | [30s draft](../assets/demo-videos/PATH-01-30s-draft.mp4); checked / user-approved October 19 |
| QA-01 | Weak versus strong assertions | CodeRabbit fix #14 restores independent assertions and boundary; 53 tests and both smoke modes pass | [Weak PR #10](https://github.com/coderabbit-demo/mmani-demo/pull/10) → [fix #14](https://github.com/coderabbit-demo/mmani-demo/pull/14) | [30s draft](../assets/demo-videos/QA-01-30s-draft.mp4); checked / user-approved October 19 |
| QA-02 | QA Agent behavioral evidence | Weak UI artifacts and corrected exported plan/result verified; runtime caveats preserved | [Weak status](https://github.com/coderabbit-demo/mmani-demo/pull/10#issuecomment-6229596313) → [corrected status](https://github.com/coderabbit-demo/mmani-demo/pull/14#issuecomment-6229876787) | 30-second draft assembled; playback review pending |
| QA-03 | Reusable Test Suites | Verified weak failure and corrected pass, same journey revision 1, Node v24.20.0 | Jobs 8ac582c9 / 554ca141; exact SHAs and HTTP evidence above | 30-second draft assembled; playback review pending |
| CONFIG-01 | Versioned review configuration | Verified one-line assertive → chill override; hosted profile CHILL | [PR #13](https://github.com/coderabbit-demo/mmani-demo/pull/13#issuecomment-6229837239) | [30s draft](../assets/demo-videos/CONFIG-01-30s-draft.mp4); checked / user-approved October 19 |
| SEC-02 | Deep Scan / attack-surface extension | Completed scan af366706 at 18ea929; one open Medium finding; 73/73 mapped points verified | Scan provenance, finding trace, surface snapshots captured | 30-second draft assembled; playback review pending |

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
PR #12's completed review raised a
[Major timeout issue](https://github.com/coderabbit-demo/mmani-demo/pull/12#discussion_r4301450030)
explicitly referencing the external TypeScript requirement for bounded outbound
fetch from request handlers, plus a Minor stale status-row issue on that branch.
Both were delegated through the
[CodeRabbit fix request](https://github.com/coderabbit-demo/mmani-demo/pull/12#issuecomment-6229865871).
The [provenance follow-up](https://github.com/coderabbit-demo/mmani-demo/pull/12#issuecomment-6229912759)
retrieved `coderabbit-demo/coderabbit-standards:guidelines/typescript.md`, rule
“No unbounded outbound calls”, blob `ac80b0584885f88e9e64ff651914b880aaa803a8`.
It confirmed applicability to the real handler, but explicitly could not verify
that the original review retrieved that file. Demonstrate the verified follow-up
source inspection; do not present it as a confirmed original-review Sources badge.
The rule requires a bounded timeout; 1,000 ms comes from the prior implementation,
not the external rule. [Captured provenance](../assets/demo-evidence/GUIDE-01-source-provenance.md).

[CodeRabbit remediation PR #15](https://github.com/coderabbit-demo/mmani-demo/pull/15),
SHA `f95264bf7f801834d7e26a9ae90554b0f93a510f`, restores the bounded fetch and adds
a real HTTP stalled-service regression requiring a 502 within two seconds.
All **58 tests pass**, line coverage is **98.36%**, branch coverage **94.02%**,
and source/compiled HTTP smoke checks pass.
[Validation log](../assets/demo-evidence/GUIDE-01-fixed-check.txt).
A separate documentation check found that its copied workflow links to evidence
files absent from the older branch. CodeRabbit confirmed all eleven missing targets
and produced a [documentation-only proposal](https://github.com/coderabbit-demo/mmani-demo/pull/15#issuecomment-6229946259).
Its create-PR action has been activated; delivery is pending. The proposal replaces
the branch copy with a short canonical link and provenance, preserving verified
source/tests. No manual fix was applied. The timeout remediation is locally verified;
the generated PR is not fully ready until its documentation is reconciled.
The authoritative workflow remains this file on main.


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
produced [PR #14](https://github.com/coderabbit-demo/mmani-demo/pull/14), SHA
`4e6f38b08d23d81ae408afdaed418b6aaccc2064`. Only the discount helper and the
weak assertions changed; all other regression assertions remain. Local validation:
53 tests pass, 100% source lines, 94.44% branches, and both smoke modes pass.
[Check log](../assets/demo-evidence/QA-01-fixed-check.txt).
A [corrected QA Agent run](https://github.com/coderabbit-demo/mmani-demo/pull/14#issuecomment-6229875248)
completed on that exact generated commit: **one scenario passed**,
`pricing-team10-inclusive-boundary`, run `69a73d04-cc6e-416e-bbf5-72a604503bd0`.
The published summary reports that recorded HTTP responses matched all four cases,
the exact JSON contract, and rounding behavior. Input validation and unrelated
endpoints were outside scope; detailed response artifacts have not been retrieved.
Its plan differs from the weak run's `pricing-discount-001`, so this is not a replay
of a fixed Test Suite. It ran in an emulated environment, warns that review context
was unavailable, and describes its results as non-authoritative.
[Run metadata and latest status](../assets/demo-evidence/qa-agent-runs.json). The original
weak branch remains unchanged. CodeRabbit skipped its review of its own fix PR;
local validation and QA Agent execution are separate evidence types.

QA Agent accepted run `fcff9300-2e35-4c5c-b17b-97994fc328d9` for the weak SHA;
its [status](https://github.com/coderabbit-demo/mmani-demo/pull/10#issuecomment-6229596313)
reports **one scenario failed**, `pricing-discount-001`: “It applies the discount
starting at ten items and returns exact integer-cent totals.” Exit criteria:
0 passed, 1 failed, 4 unresolved (5 assigned). It ran in an **emulated environment**;
the public status does not expose the full plan or actual/expected values.
An [evidence request](https://github.com/coderabbit-demo/mmani-demo/pull/10#issuecomment-6229850090)
received a [retrieval response](https://github.com/coderabbit-demo/mmani-demo/pull/10#issuecomment-6229885368):
CodeRabbit could verify only the public summary, not the saved plan, input/output
artifacts, or reasons for unresolved criteria. The authenticated QA evidence page
or an export of its original artifacts is needed to complete that segment. Do not
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
not captured product footage or finished videos. A local Chromium browser,
Playwright, and FFmpeg are available. A TLS-verified public GitHub page probe
returned HTTP 200, but its assets failed through the proxy, leaving the page
unstyled. Do not record that degraded rendering as a finished demo.

The saved environment draft adds `github.githubassets.com`,
`avatars.githubusercontent.com`, and `camo.githubusercontent.com`, preserving its
existing domains. Review/save and publish those settings, then rerun the browser
preflight at `/workspace/.tools/demo-recording/preflight.py`. Browser access was
validated with the environment-provided proxy CA in Chromium's certificate store;
do not disable TLS verification. Public GitHub captures can cover GEN-01, SEC-01,
BUG-01, MULTI-01, GUIDE-01, PATH-01, QA-01, and CONFIG-01 once the assets load.
Authenticated CodeRabbit access is still required for GEN-02, detailed QA-02,
QA-03, and SEC-02. No authenticated session or finished footage is available.

| Public capture segment | Evidence to show after the browser preflight passes |
| --- | --- |
| GEN-01 / BUG-01 | PR #2 summary and boundary finding → CodeRabbit fix #6 → captured local validation |
| SEC-01 | PR #1 SQL input-to-sink issue → CodeRabbit fix #9 bound query → 61-test local result |
| MULTI-01 | PR #3 exact consumer-source reply → fix #7 → actual consumer compatibility probe |
| GUIDE-01 | PR #12 real handler → verified external-source follow-up → fix #15 → 58-test local result |
| PATH-01 | Scoped YAML rule → PR #5 Sources attribution → fix #8 → page-zero regression result |
| QA-01 | [Successful weak-assertion CI](https://github.com/coderabbit-demo/mmani-demo/actions/runs/39002157960) → PR #10 weak assertions → independent failure and CodeRabbit fix #14 |
| CONFIG-01 | PR #13 one-line YAML diff → completed CHILL configuration report |

CodeRabbit's documentation-only create-PR action on PR #15 remains checked without
a delivered branch or PR. A [delivery diagnosis request](https://github.com/coderabbit-demo/mmani-demo/pull/15#issuecomment-6230010830)
asks whether the task is queued, blocked, or untriggered; do not repeatedly activate
it or apply its hidden patch manually.

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

Shots: external standards file → PR #12 real request path → verified source-retrieval
follow-up → CodeRabbit fix #15 and passing timeout test → takeaway. Use the follow-up
source evidence; the initial review's retrieval trace remains unverified.

Narration: “Our TypeScript standard lives in a separate repository. This request
handler calls a service without a timeout. In this follow-up, CodeRabbit retrieves
the external rule and confirms that it applies. We delegate the correction to
CodeRabbit, then verify the real handler returns an error when its dependency
stalls. This demonstrates shared guidance applied to a concrete request path,
with the source inspection preserved.”

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
