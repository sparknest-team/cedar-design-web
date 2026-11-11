## ADDED Requirements

### Requirement: Focus handoff on slide inaccessibility
When a slide containing focus becomes hidden or is removed, Carousel MUST move focus to its own programmatically focusable container. It MUST preserve focus in slides that remain visible and outside the carousel, and MUST NOT move focus for a rejected controlled proposal.

#### Scenario: Focused slide is hidden
- **WHEN** navigation, an accepted model update, an effect change or item removal makes the focused slide inaccessible
- **THEN** focus moves to the carousel container before the slide becomes inert or is removed
- **AND** a container without keyboard navigation is not added to the normal Tab order unless the caller explicitly requests it
