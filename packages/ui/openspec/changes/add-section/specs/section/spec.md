## ADDED Requirements

### Requirement: Content grouping
Section SHALL render a semantic section with optional title, description, actions and default content. The heading level SHALL default to 2 outside a Form.

#### Scenario: Change appearance
- **WHEN** a plain section switches to line
- **THEN** the heading gains a decorative line and the content remains mounted

### Requirement: Form grouping
Section SHALL adapt to the nearest Form, including inline layout, inter-field spacing and grid span. Its props SHALL allow card appearance, a heading marker and an end boundary. Form SHALL no longer register a section subcomponent.

#### Scenario: Default form section
- **WHEN** a form section renders with a title
- **THEN** it has a level-three heading, a marker and a line
