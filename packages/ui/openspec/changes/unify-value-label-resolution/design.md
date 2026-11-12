## Decision

`fallbackOption` is a synchronous function receiving the component's value and returning display data with `value` and `label`. Business code owns fetching and reactive state. A component preserves the model value as its identity regardless of the returned object's value. Select-like controls keep their documented boolean setting and value domains; Cascader can pass an entire path, not just a leaf. Current options take priority over a fallback. InputTag has no options and uses fallback for primitive tags. Rich rendering remains the responsibility of formatters and slots.

Display resolution does not emit model or change events. Read presentation and direct editing must resolve consistently, including reactive business updates. Missing labels fall back to the original value. All changes are scoped to components with a distinct value/label concept; AutoComplete remains free text.

## Mention

Candidate source becomes `options`. The explicit `atomic` mode uses the native input/textarea with a synchronized presentation overlay. The model uses `@[<percent-encoded ID>]` for string identities, `!n:` / `!b:` markers for numbers and booleans, and an optional encoded prefix before `|`. Literal `@[` and backslashes are escaped. A synchronous fallback supplies unresolved display data and never changes the model. `atomic` defaults to false because legacy unescaped text is ambiguous and must not be silently reinterpreted.

Projected UTF-16 ranges map visible edits back to encoded text. Intersections with entities expand to the entire entity; arrow navigation and deletion treat entities as units. Clipboard data within Cedar retains encoded identities alongside plain text. Composition uses the native field's existing commit handling; reactive label updates remap the selection without emitting a model change. Atomic mode maintains bounded undo/redo history. Dynamic/remote candidate loading remains owned by the existing `options` mechanism; fallback does not issue requests. Object and non-finite numeric identities are unsupported in atomic mode.
