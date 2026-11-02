---
"@cedar-design/ui": major
---

Add PeopleSelect options array/loader and a reactive fallback-option display callback, avatars and optional built-in call/chat icons. Reuse setPropsDefaults and local props for business callbacks, with generic action renderers/slots as an extension. Each field owns cancellation, loading and stale results; the library contains no business transport, dialer or chat SDK.

Support options/data array-or-loader sources on selection fields. Consolidate close/confirm guards under beforeClose/beforeConfirm/beforeCancel with boolean, Promise and done completion. Unify close/confirm/change/field-commit hooks as (payload, done, context). Remove button refs and callable-context hybrids; synchronous void waits for done, boolean/Promise returns settle directly. This is a major API migration.

Allow explicit null emptyValue with matching nullable models/events. Preserve omitted defaults, ordinary empty-string entry, protected selections, Form reset and valid zero/false values. Popup editors can clear a draft and either confirm or cancel it. Fix direct Form inheritance while retaining local false overrides.

Fix Search composition and clearing; add date string models, SafeArea diagnostics, scoped English docs and language-specific LLM downloads.

Table pagination.container mounts the managed pagination/footer externally with the same state, row slicing and events. Sticky footer layout keeps its synchronized horizontal rail above pagination, accepts zero offsets, and retains optional custom pagination slots.

Rename Cascader fallback to fallback-option on both platforms. Read-only and editable PeopleSelect views use independent reactive fallback data without inserting it into candidate options.

Sticky pagination reuses the shared embed Scrollbar for hover/focus display. Suppress the internal horizontal native bar/thumb while keeping vertical scrolling available, eliminating duplicate rails.
