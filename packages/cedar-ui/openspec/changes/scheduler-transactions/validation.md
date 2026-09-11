# Validation — 2026-09-10

- Scheduler suite: 106 tests passed across 11 files; includes 15 transaction/history/selection tests.
- Tests cover final-state swaps, readonly/availability rejection, no partial persistence, detached hooks, failed operations, history ordering/limits, controlled acceptance, external invalidation, async stale rejection and shared-event selection.
- Existing custom-editor regression found inconsistent snapshots for absent resourceIds; canonicalized fingerprints and confirmed all legacy tests pass.
- Full Vue type check, library/declaration build and public API contract type checking passed.
- Package check: 0 errors, 0 warnings. Built transaction helpers imported and executed in Node without DOM.
- Shared specification: 0 errors; existing missing-test warnings for Col and Row.
- Generated documentation SFC parsed successfully.
- Browser verified multi-selection of two events, one batch move, undo, redo, and simulated failed deletion retaining both shared projections. No runtime errors in final interaction checks.

History is local and opt-in; arbitrary server-transformed/external updates invalidate it. Batch remote persistence requires the new atomic beforeTransaction hook rather than sequential legacy per-event saves.
