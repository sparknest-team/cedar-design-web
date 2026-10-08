# Validation

- `node design-ui/bin/non-color-token-check.mjs`: passed, 33 families, 424 theme/preference cases, 184 motion overrides.
- Existing `motion-theme-check.mjs`: passed, 80 theme/preference cases, 88 duration overrides.
- Cedar Tag/Alert/Button/Switch: 86 tests passed.
- Maple Tag/Alert/Button/Switch: 122 tests passed.
- Cedar Avatar/Collapse/Checkbox/Overlay/Trigger/ProgressGroup: 157 tests passed.
- `openspec validate non-color-token-closure --strict`: valid (exit 0); optional telemetry failed under restricted network.
- Maple global lint: 53 errors and 1 warning in concurrently modified Checkbox/Radio source files; no Less/Markdown files from this change are linted by that command. Parent integration owns the final lint rerun.
- Maple Avatar/Collapse/Checkbox/Overlay/Trigger/ProgressGroup: 210 tests passed (25 files), after resource-limited execution completed.

These checks exercise compiled CSS, token overrides and component behavior, not full browser layout/animation-frame acceptance. The paired raw-default suggestions and platform rationale live in `design-ui/audits/non-color-token-contract-suggestions.json` and `design-ui/audits/non-color-token-resolution.md`.
