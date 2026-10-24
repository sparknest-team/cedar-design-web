## MODIFIED Requirements

### Requirement: Public model naming
A primary value SHALL use modelValue/defaultValue/update:modelValue; a panel opening SHALL use open/defaultOpen/update:open. Defaults SHALL initialize state once without emitting updates. Selection identifiers on declarative items SHALL use name, independently of Vue key. Multiple independent states and data option values SHALL retain their distinct meaning.

#### Scenario: Custom switch values
- WHEN checkedValue and uncheckedValue are custom strings
- THEN defaultValue represents that actual string value, rather than a separate boolean flag.

### Requirement: FAB visibility
visible SHALL hide actual content while preserving trigger/action instances and open state.

#### Scenario: Hidden FAB
- WHEN visible becomes false
- THEN no menu close event is emitted and outside clicks do not change open state.
