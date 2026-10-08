# Foundation token validation — 2026-09-30

- Cedar affected tests: 38 passed (32 component tests, 1 explicit-focus regression, 5 Space preset cases covering both directions).
- Maple affected tests: 106 passed after removing obsolete dark-theme snapshot entries (component/theme suite plus new theme invariant and 5 Space preset cases). Global icon-size-xs/sm/md/lg primitives remain preserved; only Icon's component size defaults to inherit.
- Full theme audit chain passed. Foundation audit separately re-run after including hoverOverlay.ts: 448 checks across both platforms, brands and modes.
- Shared contract: 64 system names, 37 governed system values, 462 governed component values, 38 component-name contracts. All 38 have entries, but several cover only selected dimensions.
- Paired component checks and 101 paired demos passed.
- Chinese foundation documentation sections match across shared standard and both menu mirrors; English guide and component tables updated.
- Strict OpenSpec validation passed. Optional telemetry flush fails without network access; validation itself succeeds.
- Scoped lint for the six component families and modified theme files/tests passed.

## Limits

- Global Maple lint initially found 5 formatting errors in checkbox/choice-state.ts. The final rerun found 65 formatting errors across Checkbox.vue, CheckboxGroup.vue, choice-state.ts, Radio.vue and RadioGroup.vue as these out-of-scope files changed during this batch. Scoped lint passed; unrelated edits were preserved.
- No full production build or real-browser visual acceptance was run for this batch. CSS cascade/color checks are not browser rendering, animation, forced-color or accessibility certification.
- Component motion constants outside the registered root tokens remain for the next motion/geometry phase. Paper inherits content color; custom host content colors still need their own contrast verification.
