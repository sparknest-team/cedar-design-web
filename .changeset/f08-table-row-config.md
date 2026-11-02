---
"@cedar-design/ui": minor
---

Add opt-in TypedTableConfig<Row>, TypedTableColumn<Row> and related row/path types with defineTableConfig<Row>. Check data, identity fields, nested/array column paths and row callbacks together, then adapt the same object to the existing TableProps for Vue and TSX consumers. Keep all legacy Table types and runtime behavior. Add a reactive demo, declaration consumers and interaction regressions. Automatic summaries keep the legacy entry; typed custom summaries must return complete rows. Maple's slot-only table API remains unchanged.
