## MODIFIED Requirements

### Requirement: Primary value binding
Components SHALL expose modelValue/update:modelValue for their primary value and defaultValue for uncontrolled initialization. Secondary named models SHALL remain independent.

#### Scenario: Controlled value
- WHEN a parent binds ordinary v-model
- THEN interaction requests an update through update:modelValue and the parent controls the displayed value.

#### Scenario: Default value
- WHEN an uncontrolled component is created
- THEN it reads defaultValue without emitting an update.
- WHEN defaultValue later changes
- THEN the current state is retained; a new instance reads the new default.
