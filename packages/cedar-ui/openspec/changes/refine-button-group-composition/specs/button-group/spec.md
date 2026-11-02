## ADDED Requirements

### Requirement: Group semantics and native interaction
ButtonGroup SHALL default to role=group, forward author labels and role overrides, and retain native Tab/Enter/Space behavior without roving focus.

#### Scenario: Group labeled by application
- WHEN an application supplies aria-label or aria-labelledby
- THEN the group exposes the label without introducing another tab stop.

### Requirement: Adjacent effective variants
Joining SHALL use adjacent direct Button variants and the parent layout direction. Two outlines SHALL share one seam; two text buttons SHALL have one separator. A text/default/tonal override SHALL NOT erase an adjacent outlined button's border.

#### Scenario: Mixed outline/text/outline
- WHEN the middle button overrides an outlined group to text
- THEN both outline boundaries remain visible in horizontal/vertical and LTR/RTL layouts.

### Requirement: Stable ownership and opt-in composition
The default slot SHALL document direct Button DOM adjacency. Wrapped arbitrary controls SHALL NOT be promised joined styling. Existing child overrides and group-owned elevation SHALL remain unchanged. Enum validation SHALL match shared Button enums, and provider elevation SHALL match boolean|number.

#### Scenario: Group disabled with exception
- WHEN a group is disabled and a child explicitly supplies disabled=false
- THEN that child remains enabled and siblings inherit disabled.
