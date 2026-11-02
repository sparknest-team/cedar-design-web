## ADDED Requirements

### Requirement: Input recognition and clear output are independent

Fields SHALL expose optional emptyValues without changing emptyValue outputs or ownership predicates. Defined falsy data SHALL remain valid unless explicitly classified as empty. Empty collections SHALL be recognized without discarding protected items.

#### Scenario: Empty-string option

- GIVEN Select modelValue empty string and an option labelled All
- WHEN emptyValues excludes empty string
- THEN All remains selected and no model event is emitted

#### Scenario: Sentinel input

- GIVEN a recognized sentinel returned by an external source
- WHEN the input or selection view renders
- THEN it presents no selection/text while preserving the external model value

### Requirement: Reading placeholder is display only

Fields, FormItem and Form SHALL support emptyText with field > Item > Form > '-' precedence. Explicit empty text and custom read slots SHALL be preserved.

#### Scenario: Empty model in reading mode

- WHEN an empty model renders under readPretty
- THEN emptyText is shown without initializing or writing the model or invoking a clear factory

### Requirement: Required uses the field policy without coercing validators

With explicit emptyValues, built-in required SHALL consume the primary field empty policy. Unconfigured validation SHALL preserve each library’s existing engine behavior. Custom validators and schemas SHALL receive original model values.

#### Scenario: Legacy sentinel

- GIVEN required and explicit emptyValues containing -1
- WHEN the original -1 is validated
- THEN required fails but custom validators continue to receive -1 rather than null or display text

### Requirement: Existing control and clear contracts remain stable

This change SHALL preserve controlled predicates, defaultValue initialization, default clear outputs and user commit timing. Factories SHALL be evaluated at most once for a single TreeSelect clear action.

#### Scenario: No control change from policy updates

- WHEN emptyValues or emptyText changes
- THEN no update:modelValue, change or open request is emitted merely for that configuration change
