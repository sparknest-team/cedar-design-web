## ADDED Requirements

### Requirement: Instance-local defaults
Time fields and panels SHALL initialize defaultValue once, clone mutable Date/array defaults and preserve uncontrolled edits independently.

#### Scenario: Default changes
- WHEN defaultValue changes after initialization
- THEN the user's current selection is not reset

### Requirement: Controlled state authority
Explicit modelValue and open SHALL remain authoritative. User interaction SHALL emit requests without overriding parent state.

#### Scenario: Parent rejects close
- WHEN confirmation emits update:open=false but the parent keeps open=true
- THEN the field stays open and duplicate confirmation does not emit another value update

### Requirement: Disabled panels
Maple time panels SHALL block both range endpoints when disabled.

#### Scenario: Disabled end time
- WHEN the end time is clicked in a disabled range panel
- THEN no value update is emitted

