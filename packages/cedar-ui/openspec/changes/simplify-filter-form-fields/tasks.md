## Implementation
- [x] Simplify field types and runtime resolution.
- [x] Migrate docs and demos to component and props.options.
- [x] Verify direct components, registry defaults, nested model updates and reactive options.

Validation: FilterForm 9 tests passed; pnpm typecheck passed; pnpm spec:check passed (0 errors, 0 warnings); all three FilterForm demos compiled with Vue SFC compiler.

## Token/catalog follow-up (2026-10-16)
- [x] Verify actual compiled Less, Form style import and mounted FilterForm DOM consumers; preserve parallel business/style implementation.
- [x] Synchronize only authorized FilterForm/Form generated sections (historical five differences now two context hunks); add 5 catalog regressions and 2 DOM cases.
- [x] Verify shared catalog tests 8/8, Cedar FilterForm/Form 75/75 across 17 files, scoped lint and full token consumer gate. Prior validation above is historical, not rerun type/build/native evidence.
- [ ] Separate FieldDecorator drift requires owner handoff or scoped authorization; keep global catalog check enabled. Preserve Map SDK/native environment blockers.

Evidence: design-ui/audits/evidence/filter-form-token-catalog-2026-10-16/results.json.
