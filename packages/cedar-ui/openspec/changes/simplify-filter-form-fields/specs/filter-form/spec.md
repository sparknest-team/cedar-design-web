## ADDED Requirements

### Requirement: Direct component fields
FilterForm SHALL accept fields[].component as a Vue component or a key in the optional fieldMap. Field props SHALL override registered defaultProps. Unknown keys SHALL be skipped.

#### Scenario: Direct or registered component
- **WHEN** a field supplies a component object or registered key
- **THEN** FilterForm renders that component with its configured props and current model value

### Requirement: Standard model binding and reactive options
FilterForm SHALL synchronize field values exclusively through modelValue and update:modelValue. Options SHALL be supplied through props.options without optionsMap, optionsFromMap, or valueEvent configuration.

#### Scenario: Update and options refresh
- **WHEN** a component emits update:modelValue
- **THEN** FilterForm updates the field path and emits the updated form model
- **WHEN** field props.options changes
- **THEN** the rendered component receives the new options
