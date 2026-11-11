# Tasks
- [x] Align Progress API, implementation, styles and independent copies.
- [x] Align ProgressGroup text, overflow, ARIA and keyboard tooltip.
- [x] Migrate component demos, documentation, tests and affected callers (no source callers outside the component directories found).
- [x] Verify component tests, types, lint and source-copy gate.

## Evidence
- Cedar / Maple: each 68 targeted tests pass; targeted ESLint passes.
- Both vue-tsc commands passed before the final static SVG/status-icon addition; integration verifies final types/build.
- design-ui/bin/progress-core-check.mjs checks 14 source/test/style pairs, 5 demo pairs and both compiled Less entries.
- SSR string determinism, unique stable gradient IDs, dynamic gradients, normalized numeric/CSS size, ResizeObserver cleanup, keyboard tooltip and clipped geometry tested.
- Browser visual QA and final package build belong to parent batch integration; not claimed here.
