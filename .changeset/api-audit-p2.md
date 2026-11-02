---
"@cedar-design/ui": major
---

Rename TreeSelect.allowSearch to filterable and move its retainInputValue object option to the independent retainInputValue boolean prop. The old API is removed by explicit user request; migrate allow-search to filterable, and object settings to filterable + retain-input-value. This change requires a major release.

Export AutoComplete/Select Emits, Slots and Expose types; derive event argument tuples from the runtime validators. Remove misleading upstream 2.x version annotations, correct field presentation documentation, add a Steps appearance comparison and simplify Search/Scheduler learning paths where supported. Existing Steps.type and async request/hook protocols remain unchanged.
