## ADDED Requirements

### Requirement: Explicit presentation ownership
Time fields SHALL own their model, open state and validation rules. Nested presentation props SHALL exclude corresponding owner properties and update/select/confirm notifications from public types and runtime forwarding.

#### Scenario: Conflicting nested rule
- WHEN a nested timePickerProps.min is supplied from untyped JavaScript
- THEN it is not used, even when the field min is unset.

#### Scenario: Conflicting popup state
- WHEN popupProps.open requests a state different from the field
- THEN the field open state remains authoritative.

### Requirement: Aligned field appearance semantics
Both libraries SHALL support hint, line, textColor, focusColor, blurColor and error. TimeRange SHALL accept separator including an empty string.

#### Scenario: Form ownership
- WHEN a Form supplies an outer label
- THEN the floating hint is suppressed.
- WHEN error is explicitly false
- THEN it overrides inherited Form error.
