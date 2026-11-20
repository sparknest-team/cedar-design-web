## ADDED Requirements

### Requirement: Card size and heading hierarchy

Card SHALL support explicit sizes xs, sm, md, lg, and xl. Card SHALL preserve its existing platform fallback when size is omitted.

#### Scenario: Preview a card with a nested section

- **WHEN** a Card receives a heading level from 1 through 6
- **THEN** its title renders as the matching HTML heading with size-dependent typography
- **AND** the Card description retains its own font size and the nested Section retains its own heading and description

### Requirement: Card footer alignment

Card SHALL support logical start, center, and end footer alignment, defaulting to end.
