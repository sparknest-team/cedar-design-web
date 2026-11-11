## MODIFIED Requirements

### Requirement: Default row gutters
Cedar and Maple Row SHALL default to a fresh [16, 16] tuple, providing 16px horizontal and vertical gutters. Explicit scalar and responsive values SHALL retain horizontal-only semantics. The div mode SHALL omit all gutter styling.

#### Scenario: Omitted gutter
- **WHEN** a Row renders Col children without a gutter prop
- **THEN** each Col receives 8px padding on each side of both axes, and Row offsets the outer padding with negative margins

#### Scenario: Explicit spacing and nested rows
- **WHEN** a nested Row sets gutter to 0
- **THEN** its Col children receive no gutter padding regardless of the outer Row gutter

#### Scenario: Plain container
- **WHEN** div is enabled
- **THEN** Row and its Col children omit gutter styles
