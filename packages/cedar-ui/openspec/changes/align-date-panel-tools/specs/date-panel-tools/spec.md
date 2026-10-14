# ADDED Requirements

## Requirement: Shortcut validation
Shortcuts MUST use the same date validation, locked range endpoints and confirmation transaction as ordinary selection. Hover and focus MUST preview without selecting. Callbacks MUST be evaluated lazily and failures MUST reject selection.

### Scenario: Readonly shortcut
- GIVEN a readonly panel
- WHEN a shortcut is clicked
- THEN neither selection nor shortcut notification is emitted.

## Requirement: Separate viewport ownership
Calendar viewport MUST use pickerValue independently of modelValue. Unaccepted controlled navigation MUST preserve the previous viewport. defaultPickerValue MUST be read only during initialization.

### Scenario: Controlled rejection
- GIVEN a controlled January viewport
- WHEN February navigation is requested but the parent ignores it
- THEN January remains visible and the selected date is unchanged.
