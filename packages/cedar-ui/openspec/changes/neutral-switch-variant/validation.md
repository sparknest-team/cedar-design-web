# Validation — 2026-09-30

- Switch, CountTo, Countdown, Statistic and ProgressGroup: Cedar 71 tests passed; Maple 92 tests passed (including 20 theme tests).
- Playground brand/mode selection and invalid persisted values: 9 tests passed.
- Shared theme contract: 64 system names, 29 system defaults, 422 component defaults, 38 component-name contracts in the current workspace. This includes separately governed InputNumber values; this numeric batch adds 12 defaults.
- Full theme audit chain passed. Numeric audit: 120 consumers and 192 contrast pairs. Minimum 4.480:1 belongs to a graphic threshold of 3:1; text checks use 4.5:1. Custom colors, browser layout and animation are not covered.
- Paired source checks and 101 paired demos passed.
- Maple global lint passed after scoped formatting corrections.
- Maple library build and Playground production build passed. Playground generates browser-compatible ESM with only Vue external; package CSS is refreshed alongside it. Production build reports a large-chunk warning.
- Meaningful legacy names: zero in the three repositories' searchable source/documentation after excluding embedded data URLs. Image/font Base64 is intentionally preserved.
- Strict OpenSpec validation passed.

## Remaining validation limits

- Maple global typecheck reports existing Ellipsis test element typing and InputNumber test/example errors outside this batch.
- Cedar type contract check reports an unused expected-error directive for Form's missing model, outside this batch.
- Playground typecheck also exposes older callable Dialog usage in download/store and a missing REPL typescriptVersion field. These are not theme APIs; they remain for the Playground API-alignment batch.
- No real-browser interaction or visual acceptance was performed. Successful static color checks do not establish full visual conformance.
