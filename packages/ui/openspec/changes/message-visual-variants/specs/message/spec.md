# Message visual variants

## ADDED Requirements

### Requirement: Explicit visual emphasis
Message SHALL accept neutral, tonal and solid variants in component props and service options. Cedar SHALL default to neutral and Maple SHALL default to solid.

#### Scenario: Explicit cross-platform variant
- **WHEN** callers select the same variant and status
- **THEN** both platforms use equal color-role token defaults, independently overridable by background, content, icon, border and close control

#### Scenario: Updating a queued message
- **WHEN** a caller updates an existing id with a different variant
- **THEN** the existing message changes variant without duplicating the message

