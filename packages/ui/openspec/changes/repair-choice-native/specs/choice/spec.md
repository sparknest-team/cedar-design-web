# Choice native field ownership

## ADDED Requirements
### Requirement: Nullable checked presentation is boolean
Checkbox SHALL expose boolean checked state through default and custom checkbox slots, while preserving a null raw model and emitting no value proposal during presentation.

#### Scenario: Null model
- GIVEN an explicitly controlled null Checkbox model
- THEN checked is false in both slot shapes and no unsolicited model update occurs.

### Requirement: The native input owns field attrs
Checkbox and Radio SHALL route id/name/form/constraints/ARIA/data and native keyboard listener modifiers to their actual input, retaining label class/style and other root attrs. Native IDs SHALL be stable and unique. Radio inputAttrs SHALL retain its alias priority while model, disabled, checked, type and group tab navigation remain component-managed.

#### Scenario: External label and required input
- GIVEN id and required on a choice control
- THEN label association and native form validation target the input once.

### Requirement: Keyboard cancellation is honored
Native preventDefault SHALL veto manual Enter/Space activation and RadioGroup arrow navigation without leaving a stale Space action.

#### Scenario: Captured arrow cancellation
- WHEN an input keydown capture listener cancels ArrowRight
- THEN the group does not change its value or active option.

### Requirement: Deferred field IDs have one owner
An explicit field id SHALL belong to the reference when closed and the active editor when open. Maple FieldPresentation SHALL match Cedar on this ownership transfer.

#### Scenario: Popup editor opens
- GIVEN an id on Checkbox, Radio, Input, Textarea or InputNumber
- WHEN the deferred editor opens and closes
- THEN exactly one matching DOM id exists in each state.
