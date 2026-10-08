## ADDED Requirements

### Requirement: Independent same-source input families
Cedar and Maple SHALL maintain independent copies of Input, InputPassword, InputGroup, InputGroupLabel and FieldDecorator. They SHALL NOT import the other library's runtime or use a platform configuration object.

#### Scenario: Source parity
- **WHEN** the input source parity check runs
- **THEN** component bodies, input normalization, native attributes, field geometry and styles match after namespace/import normalization
- **AND** hint defaults, token values and existing form/locale bridges remain explicitly local

### Requirement: Consistent input interaction
Input SHALL preserve controlled values, cursor positions, composition input, length limits, readonly/disabled state and commit-only change events.

#### Scenario: Clear editable input
- **WHEN** a nonempty editable input is cleared
- **THEN** it emits its model update and clear notification without opening a parent picker or emitting change
- **AND** Maple keeps the clear button visible without hover

#### Scenario: Group and outer label
- **WHEN** Input or InputPassword is inside an InputGroup and FormItem
- **THEN** explicit child props override group defaults, including false
- **AND** an outer form label suppresses the floating hint, including through no-style items
