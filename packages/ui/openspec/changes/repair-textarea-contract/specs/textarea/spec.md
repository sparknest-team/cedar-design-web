## MODIFIED Requirements

### Requirement: Rows and auto-size validation
Native rows MUST be positive finite integers, with numeric strings normalized before DOM assignment. Invalid or optional null rows MUST safely restore native default rows. Auto-size MUST accept boolean or an object with optional positive finite minRows/maxRows, including fractional line-height budgets, and minRows MUST NOT exceed maxRows. Invalid policies MUST use standard Vue prop diagnostics, disable automatic measurement, clear previous calculated styles, and restore native/platform sizing and resize.

### Requirement: Public event and slot types
The existing wrapper open-change notification MUST be represented as a boolean event in Textarea's component types. The read slot MUST expose nullable value and string text. Direct instance focus/blur/select and native element access MUST remain valid. All 37 props, 9 events, 4 slots, 3 methods and native reference MUST be documented, including optional change event sources and the established before-commit(payload, done, context) protocol. This change does not claim closed deferred-instance behavior, tracked separately.
