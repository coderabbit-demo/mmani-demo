Source: https://github.com/coderabbit-demo/mmani-demo/pull/12#issuecomment-6229912759


> [!TIP]
> For best results, initiate chat on the files or code changes.

<details>
<summary>🧩 Analysis chain</summary>

🏁 Script executed:

```shell
#!/bin/bash
set -uo pipefail
printf '\n--- Target review comment ---\n'
gh api repos/coderabbit-demo/mmani-demo/pulls/comments/4301450030
printf '\n--- Review comments ---\n'
gh api --paginate repos/coderabbit-demo/mmani-demo/pulls/12/comments --jq '.[] | {id,path,line,body,user:.user.login,html_url}'
printf '\n--- PR 6 evidence ---\n'
gh pr view 6 --repo coderabbit-demo/mmani-demo --json title,body,state,url,comments,reviews
printf '\n--- Candidate files ---\n'
fd -H -t f '(^package\.json$|service-status|guidelines-http|demo-workflow|smoke|coderabbit|app\.ts$)' -E .git
printf '\n--- Source outline ---\n'
ast-grep outline src/app.ts src/guidelines/service-status.ts tests/guidelines-http.test.ts
printf '\n--- Validation commands ---\n'
cat package.json
printf '\n--- Current main shared register ---\n'
gh api repos/coderabbit-demo/mmani-demo/contents/docs/demo-workflow.md?ref=main --jq .content | base64 --decode
```

Length of output: 45058

---

⚙️ CodeRabbit configuration inspected

Length of output: 99519

---

🏁 Script executed:

```shell
#!/bin/bash
set -uo pipefail
printf '\n--- Implementation and handler tests ---\n'
sed -n '1,180p' src/app.ts
cat src/guidelines/service-status.ts
sed -n '1,180p' tests/guidelines-http.test.ts
printf '\n--- Existing timeout tests ---\n'
rg -n -C 5 'serviceIsHealthy|unresponsive|stall' tests
printf '\n--- Smoke structure and commands ---\n'
ast-grep outline scripts/smoke.mjs
sed -n '1,180p' scripts/smoke.mjs
rg -n -C 3 'smoke|compiled|USE_DIST' README.md
printf '\n--- Branch register ---\n'
sed -n '1,170p' docs/demo-workflow.md
printf '\n--- PR snapshot ---\n'
gh pr view 12 --repo coderabbit-demo/mmani-demo --json headRefName,headRefOid,baseRefName,url
printf '\n--- Original review record ---\n'
gh api repos/coderabbit-demo/mmani-demo/pulls/12/reviews/5556282149 --jq '{id,body,commit_id,submitted_at}'
printf '\n--- Earlier guideline source inspection ---\n'
gh api repos/coderabbit-demo/mmani-demo/pulls/comments/4301314113 --jq '{body,html_url}'
printf '\n--- External guideline file and immutable blob identity ---\n'
gh api repos/coderabbit-demo/coderabbit-standards/contents/guidelines/typescript.md --jq '{path,sha,html_url}'
gh api repos/coderabbit-demo/coderabbit-standards/contents/guidelines/typescript.md --jq .content | base64 --decode
```

Length of output: 37315

---

</details>

`@manimahesh` I’m routing this request to the coding workflow for a **separate remediation PR**. Preserve PR `#12` at `742c06cb1baae25731b8ed2abc97024158d17a12`. Do not update its branch or merge either PR.

### Guideline provenance

I retrieved this source during this follow-up:

- **Repository:** `coderabbit-demo/coderabbit-standards`
- **File:** [`guidelines/typescript.md`](https://github.com/coderabbit-demo/coderabbit-standards/blob/main/guidelines/typescript.md#no-unbounded-outbound-calls)
- **Rule:** “No unbounded outbound calls”
- **Retrieved file blob:** `ac80b0584885f88e9e64ff651914b880aaa803a8`

The rule states:

> Every outbound `fetch` from a request handler must carry a bounded timeout (`AbortSignal.timeout(...)`). A handler must not stay pending on an unresponsive dependency.

This rule applies to PR `#12`’s real handler through `serviceIsHealthy()`. It does **not** specify 1,000 ms. That value comes from the previous implementation.

**I cannot verify that the original review retrieved this file for [discussion_r4301450030](https://github.com/coderabbit-demo/mmani-demo/pull/12#discussion_r4301450030).** The published comment links Node.js documentation, not the guideline. Current configuration selects the external repository, but configuration does not prove review-time retrieval. My original attribution was too strong. Exact historical provenance requires the retrieval trace for review run `b7cea767-ff75-49ba-8e70-0d64869f49db`.

### Remediation plan



- Restore the 1,000 ms outbound deadline without changing dependencies.
- Preserve every existing assertion and add a real-handler stalled-service regression.
- Correct the stale GEN-01 status in the remediation branch without duplicating main’s shared register.
- Run all requested validation in the coding environment and report actual results.









I ran read-only inspection only. No validation commands ran, and no remediation PR has been created in this interaction.

Thanks for clarifying the GEN-01 evidence.

---

<details>
<summary>✏️ Learnings added</summary>

```
Learnt from: manimahesh
URL: https://github.com/coderabbit-demo/mmani-demo/pull/12

Timestamp: 2026-10-17T04:57:26.228Z
Learning: In coderabbit-demo/mmani-demo, PR #6 satisfies GEN-01's CodeRabbit fix demonstration as well as BUG-01. Local validation passed, but CodeRabbit skipped reviewing PR #6 because its author was the configured review account. docs/demo-workflow.md on main is the shared status register. Preserve the distinction between local validation and bot re-review, and reconcile stale branch documentation rather than adding duplicate status tables.
```

> Note: Learnings are effective only in the context of similar code segments. To apply general coding guidelines, please configure [review instructions](https://docs.coderabbit.ai/guides/review-instructions). You can manage existing learnings in the [app](https://app.coderabbit.ai/learnings).

</details>

---



- [ ]  📌 Create a pull request with these changes

_You are interacting with an AI system._
