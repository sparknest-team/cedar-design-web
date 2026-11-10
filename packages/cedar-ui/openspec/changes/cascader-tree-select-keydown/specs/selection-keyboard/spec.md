## ADDED Requirements

### Requirement: Cascader and TreeSelect keyboard event ownership
Cascader and TreeSelect SHALL emit the original field keyboard event before the corresponding internal action. Cascader SHALL also forward keyboard events from its editor panel. Preventing the event SHALL suppress internal handling. Vue SHALL own once listeners and event results SHALL NOT be treated as tasks.

#### Scenario: Once listener prevents the first action
- **WHEN** a once listener prevents the first Enter and the user presses Enter again
- **THEN** the listener runs once, the first action is suppressed and the second follows the normal keyboard contract

#### Scenario: Editor event forwarding
- **WHEN** keyboard events occur in the editor
- **THEN** the public component notifies listeners and preserves once semantics across the editor session
