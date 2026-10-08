## ADDED Requirements

### Requirement: Registered optional styling variables

Maple Carousel fade/card durations, Picker option check color and TimeRange next-day color SHALL have centralized default declarations and direct consumers. Next-day text SHALL use a content role rather than a border role and achieve 4.5:1 contrast against its built-in panel background.

#### Scenario: Override a former fallback-only variable

- **WHEN** an application overrides any of these variables
- **THEN** the corresponding compiled CSS property consumes the override

### Requirement: Persistent dropdown selection

DropdownMenu SHALL preserve selected painting through pointer hover and keyboard active states via an independent selected-hover variable. Disabled SHALL win over selection and all interactive painting states.

#### Scenario: Disabled selected item is hovered

- **WHEN** a selected item is disabled while hovered or keyboard active
- **THEN** its disabled background and disabled content role win, including Maple's selected cover

#### Scenario: Selected hover is customized

- **WHEN** selected-hover background is overridden
- **THEN** selected hovered or keyboard-active options consume that value without altering plain selected options
