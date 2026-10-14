# VerificationCode

## ADDED Requirements

### Requirement: independent complete OTP bodies
Both libraries SHALL expose identical Props, Emits, Slots and Expose contracts with independent source copies. Separator and formatter SHALL support both existing capabilities. Type, maskSymbol, variant, autofocus, gutter, align, allowPaste, pasteTransform and dynamic instance colors SHALL be available in both.

#### Scenario: rejected complete proposal
- WHEN a controlled parent refuses the proposed full code
- THEN change reports the proposal but native values restore and finish does not fire.

#### Scenario: accepted edit
- WHEN input or paste changes the code
- THEN input, update:modelValue and change occur in that order, with one Form notification per semantic, and accepted full code emits finish.

### Requirement: native interaction boundaries
Composition SHALL not jump focus or delete prematurely. Paste prohibition SHALL prevent native insertion. Autofill SHALL distribute a whole code from one cell. Disabled and readonly SHALL block edits; readonly SHALL remain focusable. KeepAlive deactivation SHALL cancel pending focus and finish. SSR SHALL produce distinct stable native ids per cell and instance.

#### Scenario: deactivation before queued completion
- WHEN editing completes and the component is immediately deactivated
- THEN no pending focus or finish executes.

### Requirement: token equivalence
Both libraries SHALL expose gutter, cell-height, cell-max-width and input-font-size. Optional dimension overrides SHALL fall back on size-specific FieldDecorator values at the component element, not unresolved private variables at root.

