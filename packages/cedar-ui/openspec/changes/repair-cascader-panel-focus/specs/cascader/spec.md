## ADDED Requirements

### Requirement: A focused option remains active after pointer exit

An enabled focused Cascader option SHALL become the active option, and leaving it with the pointer SHALL NOT clear its active state while focus remains within it.

#### Scenario: Focused option is selected with Enter

- **WHEN** a user focuses an enabled leaf option, moves the pointer away and presses Enter in the standalone panel
- **THEN** the panel selects the focused option

#### Scenario: Arrow navigation moves the active option

- **WHEN** an option owns focus and the user navigates to another visible option with an arrow key
- **THEN** focus moves to the newly active option unless focus or the active option changed before the update
- **AND** nested interactive controls retain their own keyboard handling

#### Scenario: Pointer leaves a different option

- **WHEN** an option retains focus while the pointer enters and leaves another option in the same panel
- **THEN** the focused option becomes active again
- **AND** focus in a different Cascader panel is not adopted

#### Scenario: A key is already consumed or belongs to input composition

- **WHEN** a panel receives a prevented keydown or an input composition keydown, including legacy keyCode 229
- **THEN** it does not navigate or select an option
- **AND** ordinary arrow and Enter keys continue to navigate and select

#### Scenario: A virtual option mounts after navigation

- **WHEN** keyboard navigation targets an option that must first be mounted by a virtual list
- **THEN** the standalone panel and editor move focus to that option after it mounts
- **AND** a later focus change, pointer action, deactivation or unmount cancels the pending transfer
