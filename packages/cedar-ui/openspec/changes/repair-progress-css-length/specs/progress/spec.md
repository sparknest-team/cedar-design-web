## ADDED Requirements

### Requirement: Circular stroke CSS lengths
Circular Progress MUST resolve supported stroke lengths in the rendered circle's CSS context. Percentages MUST use the circle diameter, and the resolved positive stroke MUST remain capped below the diameter. Font, custom-property and size changes MUST update the geometry without mixing transformed visual pixels with layout pixels.

#### Scenario: Relative stroke changes
- **WHEN** a circle uses an `em`, percentage, `calc()` or `var()` stroke and its CSS context changes
- **THEN** the rendered SVG stroke and radius update to the resolved layout-space value
- **AND** the measurement resources are released when the component is deactivated or unmounted
