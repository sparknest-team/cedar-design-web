## ADDED Requirements

### Requirement: Range fields own endpoint activation
Each range field SHALL provide its own active endpoint state to its native inputs and range panel. Standalone panels SHALL work without a provider. Different instances and libraries SHALL NOT share state.

#### Scenario: A user starts from the end input
- WHEN the end input is focused or clicked
- THEN the range panel activates its end editor without modifying the model.

#### Scenario: A user tabs between range inputs
- GIVEN uncommitted text in the start input
- WHEN focus moves to the end input
- THEN the field SHALL NOT emit blur or commit; the draft SHALL be retained until Enter or leaving both inputs, and Escape SHALL discard it.

### Requirement: Selection presentation is separate from option management
SelectionField SHALL render normalized selected items without injecting FormItem or fetching options.

#### Scenario: Two options have the same label
- GIVEN selected options with distinct keys and identical labels
- WHEN the second tag is removed
- THEN only the second key is emitted for removal.

### Requirement: Field interaction respects editing state
Disabled/readonly fields SHALL block removal and search changes. A composition SHALL commit once, and composing Enter SHALL NOT select an option.

### Requirement: Both libraries own their implementation
Both packages SHALL maintain independent matching copies. Imports and namespace prefixes MAY differ; cross-package runtime references and platform configuration SHALL NOT be introduced.

### Requirement: Date and time fields own the transaction
PickerField SHALL render native single/range inputs without injecting FormItem. Field owners SHALL use useFieldTransaction for draft isolation, commit, cancel, external replacement and clear. Mobile fields SHALL remain readonly native triggers; desktop fields MAY parse typed values before committing.

#### Scenario: A popup is cancelled or dismissed
- GIVEN an edited draft and an existing committed value
- WHEN the popup closes without confirmation
- THEN no model or change event is emitted and reopening restores the committed value.

#### Scenario: A controlled popup closes asynchronously
- GIVEN a confirmation awaiting the parent's open update
- WHEN another confirmation is requested
- THEN the duplicate commit is rejected.

### Requirement: Panels do not own the form field
Cedar DatePicker/DateRangePicker/TimePicker/TimeRangePicker SHALL render panels only and SHALL NOT inject FormItem or render a trigger. hideTrigger SHALL be removed without a compatibility alias. Custom triggers SHALL be passed through Date/DateRange/Time/TimeRange default slots. Date and Cascader field readonly/disabled/error state SHALL inherit Form unless explicitly overridden.
