## Implementation

- [x] Remove loading Prop, body replacement, busy/loading class, click guard and direct loading imports from both Cards.
- [x] Remove paired loading demos, wrapper imports, locale keys and documentation snippets.
- [x] Migrate existing description practice to the Loading directive and explicit disabled/busy state.
- [x] Record breaking changes and migration guidance; update Props and demo inventories.

## Validation

- [x] 10 Card contract tests pass across both implementations, including directive composition preserving the input node.
- [x] All 27 copied-source checks pass.
- [x] 37 paired demo checks and eight real Maple Markdown transforms compile.
- [x] No old Card :loading usages remain in Vue sources; diff whitespace checks pass.
