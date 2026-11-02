---
"@cedar-design/ui": minor
---

Restore Switch Form/FormItem disabled and readonly inheritance with explicit false overrides. Preserve Select 1.x clear results, accurately type undefined, and add optional emptyValue for stable single-select clearing. Make Table.pagination.total optional without weakening standalone Pagination.total. The subsequent PeopleSelect options/search migration supersedes the provisional fetch work; see the dedicated major changeset unify-async-data-source.

Existing props and defaults remain available. Select event handlers must account for the already possible undefined clear result. New APIs are additive and require a minor release.
