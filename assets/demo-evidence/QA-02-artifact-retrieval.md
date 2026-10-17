Source: https://github.com/coderabbit-demo/mmani-demo/pull/10#issuecomment-6229885368


> [!TIP]
> For best results, initiate chat on the files or code changes.

<details>
<summary>🧩 Analysis chain</summary>

🔍 Additional research query:

`Read-only evidence retrieval: Find preserved CodeRabbit QA Agent run fcff9300-2e35-4c5c-b17b-97994fc328d9 for coderabbit-demo/mmani-demo PR 10, tested commit b2dcfc46b3de2a1c69350a2ab3de046e8fcc821b, scenario pricing-discount-001. Retrieve the actual scenario plan, executed steps, tested inputs, observed and expected values, individual exit-criterion statuses and reasons for four unresolved criteria, and direct artifact URLs. Distinguish execution logs from scenario plans and summaries. Do not reconstruct missing details. Do not start a run or change anything.`

Length of output: 315

---

🏁 Script executed:

```shell
#!/bin/bash
set -uo pipefail
echo '=== Preserved QA Agent comments ==='
gh api --paginate repos/coderabbit-demo/mmani-demo/issues/10/comments --jq '.[] | select(.body | contains("fcff9300-2e35-4c5c-b17b-97994fc328d9")) | {html_url,created_at,updated_at,user:.user.login,body}'
echo '=== Linked QA Agent page ==='
curl -sS -L --max-time 30 --max-filesize 1000000 -w '\nHTTP_STATUS=%{http_code}\nFINAL_URL=%{url_effective}\n' 'https://app.coderabbit.ai/change-stack/coderabbit-demo/mmani-demo/pull/10/qa-agent?scenario=pricing-discount-001' | head -c 24000
```

Length of output: 27711

---

</details>

`@manimahesh` I verified the preserved GitHub summary, but I could not retrieve the detailed run artifacts. **The available evidence does not establish the executed inputs, observed values, or reasons for the four unresolved criteria.**

### Verified QA Agent record

Source: [preserved QA Agent comment](https://github.com/coderabbit-demo/mmani-demo/pull/10#issuecomment-6229596313).

| Field | Preserved value |
|:---|:---|
| Run ID | `fcff9300-2e35-4c5c-b17b-97994fc328d9` |
| Tested commit | [`b2dcfc46b3de2a1c69350a2ab3de046e8fcc821b`](https://github.com/coderabbit-demo/mmani-demo/commit/b2dcfc46b3de2a1c69350a2ab3de046e8fcc821b) |
| Scenario | `pricing-discount-001` |
| Scenario title | “It applies the discount starting at ten items and returns exact integer-cent totals” |
| Scenario result | 1 complete; 1 failed |
| Exit criteria | 5 assigned: 0 passed, 1 failed, 4 unresolved |
| Stated limitations | Emulated environment; non-authoritative results that supplement CI and human review |

### Evidence gaps

| Requested detail | Retrieval result |
|:---|:---|
| Preserved scenario plan and steps | Not retrieved. The summary contains only the scenario title. |
| Actual tested inputs | Not present in the summary. |
| Observed versus expected values | Not present in the summary. |
| Individual criterion statuses and unresolved reasons | Not present in the summary. The aggregate counts do not explain the reasons. |
| Logs, request/response captures, or other execution artifacts | No direct artifact links were retrieved. |

The summary links to the [QA Agent evidence page](https://app.coderabbit.ai/change-stack/coderabbit-demo/mmani-demo/pull/10/qa-agent) and the [scenario detail page](https://app.coderabbit.ai/change-stack/coderabbit-demo/mmani-demo/pull/10/qa-agent?scenario=pricing-discount-001). The page request returned application HTML, not run evidence, and the capture ended with a write error. No connected MCP source was available to retrieve the artifacts.

### Acceptance expectations are not execution evidence

The supplied acceptance criteria specify these values at a 1,299-cent unit price:

| Quantity | Subtotal cents | Expected total cents | QA Agent observed value |
|:---|:---|:---|:---|
| 9 | 11691 | 11691 | Not retrieved |
| 10 | 12990 | 11691 | Not retrieved |
| 11 | 14289 | 12860 | Not retrieved |
| 15 | 19485 | 17537 | Not retrieved |

These rows do **not** establish that QA Agent tested all four inputs. The PR description’s reported exact-ten result of `12990` versus expected `11691` belongs to its independent acceptance probe. I cannot attribute that observation to this QA Agent run.

Please share or export the preserved scenario plan, execution log, and criterion assessments from the linked evidence page, or ask me to retry artifact retrieval. Until then, the detailed execution record remains unverified. I did not start a new run, execute independent tests, or change code.

_You are interacting with an AI system._
