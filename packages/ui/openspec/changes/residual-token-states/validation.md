# Validation

- `node design-ui/bin/residual-token-check.mjs`: passed, 140 theme/state cases, 112 overrides and four next-day text contrast pairs (at least 4.5:1 against the built-in panel).
- `openspec validate residual-token-states --strict`: valid.
- Maple DropdownMenu component test run: blocked before collection because `cli/lib/node/config/vitest.setup.js` was absent during concurrent CLI build; three suites, zero tests. Parent integration must rerun after build completion.
- Cedar DropdownMenu behavior tests: 21 tests passed in four files (`--threads=false`).

Compiled CSS validation covers actual Maple root/cover structure and both pointer hover and keyboard active combinations with selected/disabled states. It is not browser animation-frame or full visual acceptance.
