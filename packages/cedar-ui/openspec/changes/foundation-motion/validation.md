# Foundation motion validation — 2026-09-30

- Affected component tests: Cedar 26 passed, Maple 57 passed. Maple Icon's 12 tests were re-run after the final watcher adjustment and passed.
- Motion audit: 80 theme/preference cases and 88 public-duration override checks passed. The complete theme audit chain also passed.
- Contract: 64 system names, 39 governed system values, 468 governed component defaults and 38 component-name contracts.
- Paired source checks and 101 paired demos passed; shared and both Chinese menu-guide motion sections match.
- Cedar package declaration typecheck passed. Maple global typecheck still reports 12 pre-existing errors in Ellipsis test typing and InputNumber tests/examples; none are in this stage's files.
- Scoped Maple Icon implementation/test lint and Maple global `pnpm lint:check` passed.
- Strict OpenSpec validation passed; optional telemetry cannot flush without network access.

## Boundaries

- No real-browser frame/visual acceptance or full production build was performed. Static media-query simulation is not browser or operating-system preference testing.
- Ripple visual durations remain constrained by its unchanged 250ms lifecycle timers. Reduced-motion CSS suppresses the decorative wave, but does not redesign timer ownership or directive cleanup.
- Custom animation classes and external SVG animations are not governed here. Icon's explicit rotate orientation and all host content/state feedback remain intact.
- The timer regression tests compare against the post-mount baseline because the older Cedar Vue test runtime creates an unrelated devtools bootstrap timer. Component timers must return to that baseline after cancellation/unmount.
