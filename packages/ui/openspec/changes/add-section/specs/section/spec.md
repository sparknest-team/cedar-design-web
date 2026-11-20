## ADDED Requirements

### Requirement: Content grouping
Section SHALL render a semantic section with optional title, description, actions and default content. The heading level SHALL default to 2 outside a Form.

#### Scenario: Change appearance
- **WHEN** a plain section switches to heading-line
- **THEN** the heading gains a decorative line and the content remains mounted

### Requirement: Form grouping
Section SHALL adapt to the nearest Form, including inline layout, inter-field spacing and grid span. Its props SHALL allow outline appearance and a heading marker. Pages SHALL compose Divider between sections when needed. Form SHALL no longer register a section subcomponent.

#### Scenario: Default form section
- **WHEN** a form section renders with a title
- **THEN** it has a level-three heading, a marker and a line

### Requirement: Marker placement
Section SHALL use `showMarker` to control visibility and `markerPlacement` to select the heading (`title`, default) or the entire surface (`section`). Both placements SHALL use the section accent color.

#### Scenario: Mark a body-only section
- **WHEN** the marker is enabled with section placement and only the default slot is provided
- **THEN** a marker spans the inline-start edge of the surface and the header is omitted

### Requirement: Semantic section surfaces
Section SHALL accept an optional status of default, info, success, warning or danger. The tonal variant SHALL provide a lightly tinted surface, and the outline variant SHALL provide a transparent surface with a border. Status colors SHALL also apply to the enabled marker in either placement.

#### Scenario: Change status while editing
- **WHEN** a user switches a section from warning to success or toggles tonal and outline
- **THEN** the surface updates and the section content stays mounted

### Requirement: Visual size
Section SHALL support sm and md (default). Size controls title typography, title marker height, header spacing and padded surfaces. Changing size SHALL preserve the semantic heading level.
