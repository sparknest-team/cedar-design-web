# Group option contract

## ADDED Requirements
### Requirement: Independent normalized option data
Both libraries SHALL maintain independent copies of option normalization. Values SHALL be string, finite number or boolean. fieldNames SHALL map label/value/disabled/readonly/indeterminate. Normalized options SHALL preserve business fields without mutating input. Missing/invalid values and repeated typed values SHALL be skipped, retaining the first valid occurrence.

#### Scenario: Reactive options
- WHEN options or fieldNames change
- THEN labels and guards update without model writes; false, zero and empty string remain distinct identities.

### Requirement: Rendering and guards
An explicitly supplied options array SHALL replace the default slot, including an empty array. An omitted options prop SHALL render the default slot. label slot SHALL take precedence over label render functions, then label content; slot data SHALL include normalized data and checked, and render functions SHALL receive (data, checked). readonly options SHALL be focusable but cannot change selection; disabled options cannot change selection. Checkbox options SHALL support indeterminate as presentation only.

### Requirement: Group model and types
RadioGroup SHALL use RadioModel with null as the default empty value. CheckboxGroup SHALL use ChoiceValue[] and numeric max. Both libraries SHALL export CheckboxOption, RadioOption and ChoiceFieldNames. No old Maple GroupOption compatibility aliases SHALL remain.

#### Scenario: Empty string identity
- WHEN RadioGroup is mounted with an empty-string option and no model/default
- THEN no option is selected; explicitly selecting empty string emits that exact value.
