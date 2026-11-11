# Popup motion token and lifecycle alignment

## Why
Maple Popup still hardcodes 250ms. Govern motion using the same component-token responsibility as Cedar Drawer, while preserving explicit platform defaults.

## What Changes
- Add Maple-only popup-transition-duration (250ms) and popup-transition-timing-function (ease); preserve existing transition properties and all placements.
- Govern names/defaults, real consumers, reduce priority and actual DOM ancestor scope.
- Keep content mounted and scroll locks held through leave completion; ignore duplicate or canceled lifecycle completion callbacks in both independent popup-transition helpers.
- Add real Teleport and native IAB lifecycle evidence; do not claim real OS reduced-motion from simulated tests.

## Impact
Additive CSS API only. No Cedar Popup placeholder, component prop alias or theme-dependent duration.
