## ADDED Requirements

### Requirement: Fixed time-grid context

Date headings and all-day rows SHALL stick together while timed events scroll. Today SHALL be visually identified. The current time label SHALL align with the current-time line and only appear when today is visible.

### Requirement: Presentation extension points

Scheduler SHALL expose a toolbar slot (date, mode, navigate, create) and a pointer-transparent column-background slot (date, resource). These SHALL NOT interpret application state.

### Requirement: Fixed-duration events

SchedulerEvent.resizable=false SHALL hide and disable resize interaction while retaining moving and viewing. Copies SHALL preserve this capability. Application persistence remains responsible for authoritative duration constraints.

#### Scenario: Move a fixed-duration event

- WHEN an event has resizable=false and otherwise permits moving
- THEN no resize handles are rendered and resize projection is rejected
- AND a move retains its duration.

#### Scenario: Scroll a week containing today

- WHEN the user scrolls timed events vertically
- THEN the date and all-day headings remain fixed
- AND today's heading remains highlighted even if the optional current-time marker is disabled.

#### Scenario: Replace presentation from a business page

- WHEN a page supplies toolbar and column-background slots
- THEN it receives generic date, navigation and column context
- AND Scheduler does not read business status or metadata to render those extensions.
