## ADDED Requirements

### Requirement: Hoverable and dismissible tooltip
ProgressGroup MUST allow pointer movement from a segment into its descriptive tooltip and keep it visible while hovered. Escape MUST dismiss it, including when keyboard focus is outside the group. Leaving hover MUST restore the focused segment's tooltip when applicable.

#### Scenario: Move from segment to tooltip
- **WHEN** the pointer leaves a segment and travels through the gap into its tooltip
- **THEN** the tooltip stays visible while the pointer remains over it
- **AND** Escape closes it without moving keyboard focus

### Requirement: Orientation and slot contract
Orientation MUST affect linear layout only. Circle layout MUST remain unchanged when orientation changes. Item classes, named slot fallback, text-slot precedence and SVG stroke units MUST be documented.

#### Scenario: Circle orientation changes
- **WHEN** a circle ProgressGroup changes orientation
- **THEN** its circle and legend layout remains unchanged
