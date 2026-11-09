## ADDED Requirements

### Requirement: Virtual column mode follows the current configuration

The Cascader column SHALL switch between ordinary and virtual rendering when `virtualListProps` is added or removed after mount.

#### Scenario: Configuration changes while the panel is open

- **WHEN** virtual list configuration is added and subsequently removed
- **THEN** the open column switches to virtual rendering and then returns to ordinary rendering

#### Scenario: A virtual column renders options

- **WHEN** a virtual column contains options
- **THEN** its menu items are children of a list with the menu role
- **AND** a caller-supplied virtual-list container element is retained

#### Scenario: Keyboard navigation reaches an offscreen virtual option

- **WHEN** the active option changes to an item outside the visible virtual range
- **THEN** the virtual column scrolls that option into view, including when item keys are customized
- **AND** a superseded update cannot scroll to an obsolete active option
