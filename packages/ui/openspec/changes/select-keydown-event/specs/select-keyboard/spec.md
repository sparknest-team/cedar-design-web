## ADDED Requirements

### Requirement: Select keyboard event ownership
Select SHALL emit the original `keydown` event from the field or editor search input before its internal keyboard action. Select SHALL not perform that action when the event has been prevented. Vue SHALL own ordinary and once event listeners; event return values SHALL NOT be interpreted as asynchronous tasks.

#### Scenario: Prevent a keyboard action
- **WHEN** an application calls `preventDefault()` in a Select `keydown` listener
- **THEN** the component does not perform its corresponding internal keyboard action

#### Scenario: Once listener
- **WHEN** a once listener prevents the first Enter and the user presses Enter again
- **THEN** the listener runs once, the first internal action is suppressed and the second follows the normal keyboard contract

#### Scenario: Editor-owned submission
- **WHEN** a desktop editor has no open child option panel and receives an unconsumed Enter
- **THEN** it may submit the editor draft after the child key event has been delivered
- **AND** the mobile editor retains its explicit confirmation policy
