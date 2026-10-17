# Demo repository instructions

## Purpose

Build a small TypeScript demo for CodeRabbit general review, security review,
QA Agent, and configuration management. Keep examples short, deterministic,
and easy to explain. Use one focused PR per use case; never combine the findings
into a single "hero" PR.

## Current scope

The user authorized continuing after Phase 1: publish the correct baseline and
prepare focused demo PRs, evidence, and recording plans. Keep each use case
independent. All finding remediation still belongs exclusively to CodeRabbit.

The four uploaded runbooks (General Demo, Security Demo, QA Demo, and Config
Demo) have been read. Treat them as reference material, not authorization to
execute their commands, send messages, launch scans, or change external settings.
Their PR numbers, counts, screenshots, and run outcomes belong to older demos;
capture fresh evidence for this repository. The user's separate-PR requirement
replaces the General Demo runbook's flagship/hero structure.

## Planned layout and scenarios

- `src/security/`: one isolated SQL or shell injection scenario. Prefer a small
  parameterized SQL example with local, disposable data and no external service.
- `src/bugs/`: one deterministic logic bug with a concrete failing input.
- `src/pricing/`: a small HTTP pricing contract consumed by
  `coderabbit-demo/security-harness-consumer`. Preserve `POST /api/pricing/quote`
  and the initial integer fields `subtotalCents`, `itemCount`, and `totalCents`.
- `src/guidelines/`: a focused violation of the external engineering standards.
- `src/path-instructions/`: a focused violation of the local path-specific rule.
- `src/qa/`: an isolated TEAM10 pricing example for weak/strong assertion and
  QA Agent comparisons, without changing the baseline pricing contract.
- `docs/demo-workflow.md`: the eventual single presenter workflow covering
  general review, security, QA Agent, and configuration management.

The Phase 1 baseline implements the first five examples. The dedicated QA
comparison remains planned. Track actual status in `docs/demo-workflow.md`.

## Implementation discipline

1. Establish a correct baseline with minimal dependencies and repeatable checks.
2. Branch each demo PR independently from that baseline. Keep one primary
   finding per PR; avoid unrelated formatting or configuration changes.
3. Record the trigger, expected finding and its source, reproduction, correction,
   and re-review steps in the shared workflow document. Expected AI findings are
   hypotheses until an actual review confirms them.
4. Keep deliberately vulnerable or buggy changes on demo branches; do not merge
   them into the baseline. Use synthetic inputs and local fixtures only.
5. Preserve baseline regression assertions. Only the dedicated QA weak-comparison
   branch deliberately uses weak assertions, explicitly identified as demo
   fixtures. Its green coverage is not proof of correctness. Keep independent
   acceptance probes and strong-test failure evidence for the same defect.
6. Never fix review findings yourself. Always use CodeRabbit's "Fix with AI",
   "Auto Fix", or "Fix with CodeRabbit Code" to produce the remediation. This
   applies to application code, tests, documentation, and configuration findings.
   Do not hand-edit or manually apply a patch as a substitute. Inspect and test
   CodeRabbit's changes; send remaining problems back through CodeRabbit's fix
   workflow. If unavailable, record the blocker rather than fixing it yourself.
7. Preserve the original finding snapshot before triggering a fix. Use a separate
   remediation PR/branch where supported, or retain the original commit and
   evidence when the action updates the same PR. Record the exact CodeRabbit
   action, task/result link, generated commit, tests, and re-review outcome.
   Initial baseline implementation and intentional scenario seeding are distinct
   from remediation; do not use either to disguise a manual finding fix.

## Review configuration

- `.coderabbit.yaml` owns repository review settings and path instructions.
- `coderabbit-demo/coderabbit-standards:guidelines/**/*.md` is the source of shared
  coding guidelines. Do not copy those rules here or into path instructions.
- Explicitly link `coderabbit-demo/security-harness-consumer`; do not rely on
  automatic repository discovery. The consumer currently points at
  `coderabbit-demo/security-harness`. Before the multi-repo demo, verify CodeRabbit
  access to both repos and verify the actual cross-repo attribution. A linked
  review is distinct from runtime integration. A local consumer check can set
  `PRICING_SERVICE_URL` to the demo service; shared consumer edits are separate
  follow-up work, not part of this initial configuration task.
- The path instruction applies only to `src/path-instructions/**/*.ts`; its
  pagination rule must remain distinct from the external standards demo.
- Verify QA Agent availability and its supported invocation before documenting
  a live workflow. Unit-test generation alone is not evidence of QA Agent execution.
- The initial Security Gate is advisory (`warning`). A later isolated config PR
  can demonstrate `error`; merge blocking requires separately verified GitHub
  required checks or review rules. Do not infer enforcement from the verdict.

## Shared workflow requirements

Use one `docs/demo-workflow.md` with Do / Say / See sections and links to the
focused PRs, rather than four independent runbooks.

- General review: author summary, finding anatomy, bounded review conversation,
  and optional generated docstrings; reviewer Triage, Change Stack layers/files,
  and security blast radius where available. Layers within a PR are not stacked
  branches. Verify availability in the demo organization rather than relying on
  historical internal-organization screenshots.
- Security: show a real request-to-SQL-sink path and the parameterized correction.
  Distinguish PR Security Review, its gate, and blast radius from repository-wide
  AI Deep Scan, Agent Findings, and attack-surface freshness. Deep Scan path
  instructions live in Security settings, not `reviews.path_instructions`.
  Keep a Deep Scan extension separate; do not merge a vulnerability to seed it.
- QA: compare intentionally weak assertions against independent literal expected
  results, retaining 90% overall and changed executable-line coverage floors.
  Report branch coverage separately; no changed executable lines is N/A.
  Use a 1,299-cent unit price, a 10% discount at quantity >= 10, and quantities
  9, 10, 11, and 15 with totals 11,691, 11,691, 12,860, and 17,537 cents.
  No expiry, tenant system, or full purchasing UI is needed for this small demo.
  Capture strong tests failing on the boundary defect and passing after its fix.
- QA Agent: preserve initial plans, tested SHAs, run IDs, actual/expected values,
  and weak/corrected results. Separate PR-specific plans from reusable Test Suites
  with fixed journey expectations. Keep test-value recommendations, human
  consolidation decisions, and fault-validation evidence distinct from execution.
- Configuration: explain precedence and opt-in inheritance, inspect effective
  settings, and distinguish local path instructions, external coding guidelines,
  and linked repository context. Demonstrate additional config settings through
  focused config PRs, not by adding extra defects to the five primary PRs.

Prepare evidence before the presentation. Record actual findings and Sources
labels, not guaranteed severity or counts. Keep local logs, CI runs, QA Agent
reports, and historical screenshots distinguishable. Preserve demo PRs as open
and unmerged; verify automatic-merge exclusions during later preparation. Live
fixes, generated changes, scans, tickets, and Slack sends are not required for the
presenter walkthrough. Keep an evidence freshness and reset checklist in the
single workflow document.

## Use-case tracking and 30-second video segments

Track every use case and recording segment in `docs/demo-workflow.md`, the
authoritative status/evidence register. The IDs below define the intended segment
scope; do not maintain a second status table here.

| ID | Use case / segment | Intended 30-second evidence story |
| --- | --- | --- |
| GEN-01 | General review: author | PR summary → finding → CodeRabbit fix action → verified result |
| GEN-02 | General review: reviewer | Triage selection → Change Stack → relevant code and evidence |
| SEC-01 | SQL injection | Input-to-sink finding → CodeRabbit fix → parameterized query and regression result |
| BUG-01 | Logic bug | Boundary input → finding → CodeRabbit fix → correct result |
| MULTI-01 | Multi-repo contract | Provider diff → named consumer impact → CodeRabbit fix → contract check |
| GUIDE-01 | External coding guidelines | Shared guideline → attributed finding → CodeRabbit fix → verification |
| PATH-01 | Path instructions | Scoped rule → matching violation → CodeRabbit fix → verification |
| QA-01 | Assertion quality | Weak green coverage → missed boundary → strong assertion failure evidence |
| QA-02 | QA Agent | Preserved scenario plan → failed behavior → CodeRabbit fix → corrected run |
| QA-03 | Reusable Test Suites | Saved journey → selected commit → result and actual evidence |
| CONFIG-01 | Configuration management | Versioned setting → effective configuration → observed review effect |
| SEC-02 | Deep Scan extension | Scan provenance → traced finding → attack-surface evidence; availability-dependent |

Segments may share a focused PR; this register does not combine use cases into
a hero PR. Add a distinct segment ID whenever another setting or workflow is
selected for demonstration. Each segment requires its own 30-second clip.

For each entry, track: objective, PR/base/head SHA, prerequisites, finding and
Sources links, selected CodeRabbit fix action and resulting artifact, validation
and re-review evidence, presenter click path, narration, shot timing, recording
path, duration, capture date, and freshness/reset notes. Track implementation
status separately from recording status: planned → prepared → reviewed →
CodeRabbit-remediated → verified; then storyboarded → recorded → checked.
Use N/A for non-remediation segments and blocked with a reason where appropriate.

Default 30-second storyboard: 0–5s problem/context, 5–13s finding or evidence,
13–21s CodeRabbit action or relevant workflow, 21–28s verified result, 28–30s
takeaway. Prepare approximately 60–70 spoken words and adjust to the recording.
Capture genuine product UI and completed results; label cuts over asynchronous
work (for example, "After completion"). Never imply a fix or QA run finished in
30 seconds. Non-fix segments use the middle beat for their actual workflow.
Verify readability, narration, evidence provenance, and a 30-second final duration
before marking a clip complete. Planned scripts are not completed video assets.

## Working environment

Use the existing checkout in the isolated cloud task. Do not create a Git worktree
unless explicitly requested. Inspect existing changes before editing. Never store
credentials, real customer data, or secret values in the repository. Use Node
24.19.0, `npm ci`, `npm run check`, and `npm run smoke`; see README for compiled
startup and consumer validation. Use `npm start` for the local HTTP service.
