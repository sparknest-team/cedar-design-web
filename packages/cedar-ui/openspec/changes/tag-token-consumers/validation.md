# Validation — 2026-09-30

- Consumer graph: 3 tests passed (alias/fallback, cycles, multiple theme declarations).
- Compiled consumer audit: 416 Badge/Tag declarations across both libraries passed, with one paired explicit cross-component hold.
- Theme contract passed: 64 system names, 39 system values, 553 component defaults, 38 component-name contracts.
- Badge/Tag affected tests: Cedar 21 and Maple 45 passed.
- Badge themes: 288 states, 720 contrast pairs, 288 background overrides passed.
- Tag themes: 1024 semantic states, 640 contrast pairs, 1664 preset states, 416 background overrides passed.
- Tag paired-source check and 101 paired demo checks passed.
- Chinese shared/menu consumer-policy sections match. Removed names are absent from library source; only the intentionally held custom-icon token remains.
- Strict OpenSpec validation and scoped diff whitespace checks passed.
- Maple global lint failed with 50 errors in eight Checkbox/Radio files, outside this change. Those files were not modified by this stage.
- Scoped Maple Badge/Tag ESLint passed.

## Scope limits

No runtime or type changes; no typecheck, production build or browser visual run this stage. The audit proves compiled CSS reference reachability, not selector/DOM reachability or a winning cascade. Existing generated playground assets were not rebuilt. InputTag's legacy icon-hover reference is retained pending an integration-specific review.
