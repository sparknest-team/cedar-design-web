## MODIFIED Requirements

### Requirement: Effective numeric bounds
Min MUST be finite or negative infinity; max MUST be finite or positive infinity. Invalid individual bounds MUST use Vue prop diagnostics and fall back to their respective unbounded defaults. Reversed bounds MUST diagnose and become unbounded without swapping. Commit, step eligibility/start/clamping and ARIA MUST share effective bounds. Negative numbers and zero MUST remain valid.

### Requirement: Approved clear notification
An approved clear MUST notify clear before input, model update and any changed-value change notification. A veto MUST emit none of those action/model notifications. Clearing an intermediate draft with no different numeric model MUST NOT invent change; input-mode model publication MUST still clear with one changed-value notification. Before-commit remains the explicit approval entry, with payload/done/context, cancellation and existing error feedback. Ordinary event return Promises MUST NOT create tasks.

### Requirement: Public entry and types
Named/default/component metadata exports MUST identify the same installed InputNumber. Public component types and root/sub-entry exports MUST expose existing events, reading/customization slots and native instance methods, preserving nullable/undefined numeric values and optional deferred change sources. Documentation MUST cover all 36 props, 11 events, 8 slots, 3 methods and native reference, with accurate direct/deferred guard semantics.
