## ADDED Requirements
### Requirement: Button shadows are opt-in
Button and ButtonGroup MUST default elevation to false in Cedar and Maple.

#### Scenario: Default solid button or group
- **WHEN** variant=default and elevation is omitted
- **THEN** no elevation shadow is applied

#### Scenario: Explicit shadow
- **WHEN** elevation=true or a numeric elevation is provided
- **THEN** existing variant, normalization, disabled and group-ownership rules apply
