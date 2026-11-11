## ADDED Requirements

### Requirement: Explicit panel commit
Standalone time panels SHALL default to draft selection and explicit confirmation; disableConfirm SHALL commit valid selections immediately.

#### Scenario: Select then confirm
- WHEN a user changes the wheel with default props
- THEN select fires without model/change, and confirmation commits the draft once

#### Scenario: External replacement
- WHEN the parent changes modelValue while a draft exists
- THEN the external value replaces the draft without emitting updates

#### Scenario: Nested panel
- WHEN a time panel is embedded in a field or date panel
- THEN only the outer owner offers a confirmation action

### Requirement: Disabled option visibility
hideDisabledOptions SHALL hide forbidden options without changing allowed values or clock geometry.

#### Scenario: All options forbidden
- WHEN all hours are disabled
- THEN confirmation is disabled and no update can be emitted
