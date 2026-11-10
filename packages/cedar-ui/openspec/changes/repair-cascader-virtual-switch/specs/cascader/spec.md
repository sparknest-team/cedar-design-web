## ADDED Requirements

### Requirement: Expanded branches reference their rendered child menu

An expanded Cascader branch SHALL reference its actual child menu with an instance-scoped ID. The reference SHALL be absent while the child menu is empty, not yet loaded or hidden in the mobile editor.

#### Scenario: A child menu appears in ordinary or virtual rendering

- **WHEN** an expanded branch has a rendered child menu
- **THEN** its aria-controls references that menu's ID
- **AND** separate panel instances use distinct IDs

#### Scenario: A child menu is unavailable

- **WHEN** the child menu has not loaded, has no items, or is hidden by the mobile editor
- **THEN** the branch does not claim the child is expanded and does not expose a dangling child menu reference

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
