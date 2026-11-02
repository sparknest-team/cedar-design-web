## ADDED Requirements

### Requirement: Defined properties own final state

Each externally writable model SHALL be controlled exactly when its corresponding property is not undefined. Controlled requests SHALL NOT replace the effective value without an external update. Each named model SHALL have independent ownership.

#### Scenario: Parent rejects an update

- GIVEN a controlled Switch with modelValue false
- WHEN the user requests true and the parent keeps false
- THEN update:modelValue(true) is emitted once and the final DOM and ARIA remain false

#### Scenario: Independent keyboard models

- GIVEN a NumberKeyboard with controlled open and uncontrolled modelValue
- WHEN the user types then requests close
- THEN the internal text can change while visibility remains controlled by open

### Requirement: Defaults initialize without business events

Default properties SHALL initialize uncontrolled state once and SHALL NOT overwrite a defined external value, repopulate a cleared model, or initialize the parent model through an emitted update.

#### Scenario: Empty controlled value beats a default

- GIVEN an Input with defaultValue seed and modelValue empty string
- WHEN it mounts or defaultValue changes
- THEN it displays empty text and emits no update or change

### Requirement: Defined empty values preserve ownership

Clearable models SHALL have documented defined default empty values. Undefined SHALL remain an ownership sentinel and SHALL NOT be the target standard clear value. Explicit emptyValue factories SHALL retain undefined output where the component value domain permits it. The parent MAY normalize that candidate before passing it back. Clear buttons, keyboard-empty commits, panel clears, types, events and Form reset SHALL be audited together.

#### Scenario: Clear a controlled number

- GIVEN a controlled InputNumber
- WHEN the user clears it and the parent accepts the standard null update
- THEN it remains controlled and the parent can reject subsequent input

#### Scenario: Parent normalizes an explicit undefined candidate

- GIVEN a supported emptyValue factory returning undefined and a parent normalizing nullish updates to null
- WHEN clear is requested
- THEN undefined is emitted unchanged, the parent returns null, and the model remains controlled

#### Scenario: Parent accepts an explicit undefined candidate unchanged

- GIVEN a supported emptyValue factory returning undefined
- WHEN the parent returns that candidate unchanged as the external property
- THEN the model becomes uncontrolled under the documented ownership-handoff contract; releasing ownership is not guaranteed to produce a blank display

### Requirement: Ownership handoff uses authoritative state

A transition to uncontrolled state SHALL retain the most recently observed authoritative value, not an unaccepted candidate or an obsolete default. Ownership transitions SHALL NOT emit business updates.

#### Scenario: Rejected candidate followed by release

- GIVEN external A, a rejected internal proposal B and initial default D
- WHEN the external property becomes undefined
- THEN uncontrolled state starts from A rather than B or D

#### Scenario: Multiple observed changes in one tick

- GIVEN the component observes external A then external B before Vue settles a tick
- WHEN it subsequently observes undefined
- THEN it takes over B without update or change events

### Requirement: Transient state does not own committed state

Drafts, gesture previews, composition buffers and animation retention SHALL remain distinct from committed external models. Components SHALL reconcile to authoritative state after submission, rejection or cancellation at their defined interaction boundaries.

#### Scenario: Rejected floating panel anchor

- GIVEN a controlled FloatingPanel anchor A
- WHEN a drag previews B and the parent rejects the final request
- THEN the drag remains responsive and the settled panel returns to A

#### Scenario: Submitted editor remains externally open

- GIVEN independent controlled value and open properties
- WHEN confirmation requests updates and the parent keeps open true
- THEN the editor stays open, reconciles with the authoritative value and can accept a later editing session

### Requirement: Guards cannot veto external state

Guards SHALL validate internal action requests only. External state replacement, unmounting, deactivation or invalidating operation conditions SHALL cancel stale asynchronous work. A stale result SHALL NOT emit a new request or restore obsolete state.

#### Scenario: External close overrides a pending guard

- GIVEN open true and a pending or rejecting beforeClose
- WHEN the parent sets open false
- THEN final open is false, stale work is invalidated, no additional beforeClose is invoked and no reverse update:open(true) is emitted

### Requirement: Update requests differ from observed lifecycles

Update events SHALL represent candidate submissions. Change events SHALL follow their documented user-commit semantics. Visibility lifecycle and transition-completion events SHALL require corresponding effective state transitions. External model updates SHALL NOT echo user update/change events.

#### Scenario: Close request is ignored

- GIVEN controlled open true
- WHEN an allowed internal close request is ignored by the parent
- THEN update:open(false) is emitted but close and closed are not emitted merely for that request

#### Scenario: External correction

- GIVEN candidate B
- WHEN the parent supplies C instead
- THEN C becomes authoritative without an echo update or user change event

### Requirement: Internal ownership does not mutate external data

Components SHALL use copy-on-write and domain-appropriate snapshots for owned mutable data. They SHALL preserve identities of business values not owned by the component and SHALL NOT launch acceptance-dependent side effects from a rejected proposal.

#### Scenario: Rejected file addition

- GIVEN a controlled Upload list
- WHEN the parent rejects a candidate file addition
- THEN no upload starts for that addition and temporary resources are released

### Requirement: Compatibility and cross-platform delivery

Existing published proxy helper behavior SHALL NOT silently change. Breaking changes to component ownership, default clear values, guards or public return meanings SHALL follow the published compatibility policy. Both libraries SHALL have equivalent ownership contracts, independent implementation copies and relevant behavioral verification.

#### Scenario: Current documentation remains factual

- GIVEN the target contract is not implemented
- WHEN user guides are updated
- THEN they describe current exceptions explicitly and do not claim the target behavior has shipped
