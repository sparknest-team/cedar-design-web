## ADDED Requirements

### Requirement: Return animation targets the current placeholder

When a floating card closes, the return animation SHALL use the card placeholder's current position and size, and SHALL discard that measurement if the floating state or component ownership changes during measurement.

#### Scenario: Layout changes while the card is expanded

- **WHEN** the placeholder moves or changes size while the card is floating and the card is closed
- **THEN** the return animation targets the newly measured placeholder rectangle
- **AND** the card content remains mounted
