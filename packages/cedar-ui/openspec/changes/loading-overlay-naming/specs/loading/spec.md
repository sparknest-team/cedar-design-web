## ADDED Requirements

### Requirement: Content covering layers use overlay terminology
Both Loading components SHALL use content-overlay for their BEM content covering element and loading-overlay-background for the product-prefixed background token. Directives SHALL write, update and remove the renamed token for their background option.

#### Scenario: Loading wraps content
- **WHEN** loading is enabled with a default slot
- **THEN** the content-overlay element is rendered and disappears when loading is disabled.

#### Scenario: Directive custom background
- **WHEN** a directive background changes or is cleared
- **THEN** the loading-overlay-background token is updated or removed, with no old mask token remaining.
- **AND** the overlay continues to stop clicks from reaching the host.
