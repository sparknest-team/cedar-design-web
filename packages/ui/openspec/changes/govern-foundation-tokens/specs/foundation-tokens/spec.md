## ADDED Requirements

### Requirement: Foundation defaults have shared semantics
Both platforms SHALL use the shared default-value contract for Hover, Icon, Paper, Ripple, Skeleton and Space.

#### Scenario: Simultaneous hover and focus
- **WHEN** an overlay is both hovering and focusing
- **THEN** focusing opacity wins without stacking both opacities

#### Scenario: Inherited icon size
- **WHEN** no size prop or token override is supplied
- **THEN** Icon inherits host font size on both platforms

#### Scenario: Theme-aware surface and placeholders
- **WHEN** the brand or color mode changes
- **THEN** Paper and Skeleton consume the same system roles without fixed light-only colors

#### Scenario: Space presets
- **WHEN** size is xs, sm, md, lg or xl
- **THEN** physical row / column gaps preserve their existing values and are not swapped by flex direction
