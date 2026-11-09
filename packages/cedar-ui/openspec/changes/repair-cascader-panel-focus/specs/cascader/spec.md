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
