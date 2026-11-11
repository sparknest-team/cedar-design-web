## ADDED Requirements

### Requirement: SplitButton composition

The library SHALL expose a `SplitButton` component containing a primary action button and a menu trigger button.

#### Scenario: Invoke the primary action

- **WHEN** the user activates the primary button
- **THEN** the component emits `click` without opening the menu

#### Scenario: Select an additional action

- **WHEN** the user selects a menu option
- **THEN** the component emits `select` with the menu selection payload

### Requirement: Breaking rename

The library SHALL expose `SplitButton` without retaining `MenuButton` compatibility aliases.

#### Scenario: Install the component library

- **WHEN** Cedar installs all components
- **THEN** `CSplitButton` is registered and `CMenuButton` is not registered
