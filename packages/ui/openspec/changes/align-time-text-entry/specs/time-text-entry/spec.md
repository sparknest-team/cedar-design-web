# Time text entry

## ADDED Requirements

### Requirement: Optional mobile text entry
Maple Time and TimeRange SHALL support inputEditable, default false; Cedar defaults true. Explicit false SHALL prevent text editing but allow panel selection when not disabled or readonly.

#### Scenario: Enter a valid time without opening a modal
- GIVEN an editable Maple field
- WHEN the user types and presses Enter
- THEN the existing time validator commits at most once, and no open request is issued.

### Requirement: Shared commit rules
Typed values SHALL follow format, use12Hours, min/max, step and disabled callbacks. Range values SHALL follow showNextDay ordering. Composition SHALL not commit until composition ends. Rejected or invalid values SHALL not update the model. Disabled and readonly controls SHALL not commit or open interactive panels.

### Requirement: Explicit panel activation
An editable Maple field SHALL offer a keyboard-accessible localized icon button and ArrowDown to open its selected presentation. Space and Enter inside an editable native input SHALL not act as popup trigger keys.
