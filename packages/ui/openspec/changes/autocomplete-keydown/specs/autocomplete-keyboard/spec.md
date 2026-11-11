## ADDED Requirements

### Requirement: AutoComplete keyboard event ownership
AutoComplete SHALL emit the original input keydown before its internal keyboard action, including inside the editor. If the event is prevented, the action SHALL be suppressed. Vue SHALL own once listeners and the event return value SHALL NOT be treated as an asynchronous task.

#### Scenario: Prevent candidate reopening once
- **WHEN** a once listener prevents the first ArrowDown on a focused input with closed suggestions
- **THEN** suggestions stay closed and a subsequent ArrowDown can reopen them

#### Scenario: Editor event forwarding
- **WHEN** input keyboard events occur across closing and reopening the editor
- **THEN** the public instance receives them and its once listener executes at most once

#### Scenario: Escape in an embedded suggestion editor
- **WHEN** suggestions are embedded in the editor rather than a separate popup and Escape is not consumed or composing
- **THEN** Escape reaches the editor and requests its closure
- **AND** a separate suggestion popup consumes Escape to close itself first
