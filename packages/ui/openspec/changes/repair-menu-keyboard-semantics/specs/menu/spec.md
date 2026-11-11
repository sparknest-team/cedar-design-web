## ADDED Requirements

### Requirement: Scoped keyboard navigation and menu state

Menu references SHALL expose menu popup and expanded state. Keyboard entry SHALL move focus into the accepted open menu, and navigation SHALL not capture keys from unrelated focused controls. Tab SHALL request close while allowing normal forward or backward focus navigation.

#### Scenario: Entering a nested menu

- **WHEN** the user presses Enter or Space on an enabled submenu item
- **THEN** its submenu opens and the first enabled item receives focus

#### Scenario: Focus is elsewhere

- **WHEN** focus is outside the menu and its reference and the user presses an arrow key
- **THEN** the menu SHALL NOT prevent the key or move focus
