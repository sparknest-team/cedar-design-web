## ADDED Requirements

### Requirement: Independent common source
Both libraries SHALL own independent copies of the Select/Cascader field, controller, option algorithms and Menu. Shared runtime instances and platform configuration SHALL NOT be introduced.

#### Scenario: Presentation selection
- **WHEN** a Cedar selector is created
- **THEN** only menu is supported
- **WHEN** a Maple selector is created
- **THEN** menu, list and picker are supported through separate statically imported presentation files

### Requirement: Draft ownership
The controller SHALL own draft and committed values, and SHALL publish Form events only when a value is committed.

#### Scenario: Cancel mobile draft
- **WHEN** a user changes a multi-list or picker draft then cancels
- **THEN** the committed model remains unchanged

#### Scenario: Controlled confirmation
- **WHEN** a controlled parent keeps the popup open after confirmation
- **THEN** repeated confirmation does not publish the same session twice

### Requirement: Stable option identity
Option identity SHALL use values and typed paths, not labels.

#### Scenario: Async data replacement
- **WHEN** options arrive for an existing model ID
- **THEN** the field resolves its label without modifying the model
- **AND** stale lazy callbacks from a replaced tree do not change the new tree
