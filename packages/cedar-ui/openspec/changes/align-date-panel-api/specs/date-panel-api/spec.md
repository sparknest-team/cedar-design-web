# Date field and panel boundary

## ADDED Requirements

### Requirement: Distinct field and panel props
Date and DateRange SHALL own popup state, input appearance and text entry. DatePicker and DateRangePicker SHALL own pure panel selection without field or portal props.

#### Scenario: Embedded panel
- WHEN a caller renders DatePicker independently
- THEN model/default value, rules and panel presentation SHALL work without open/popupContainer/placeholder/variant props.

### Requirement: Typed copied protocols
Both packages SHALL maintain independent copies of common panel props and event tuples. dayStartOfWeek SHALL accept only integer 0–6, default Sunday=0; the old firstDayOfWeek alias SHALL be removed.

#### Scenario: Range calendar week start
- WHEN a mobile DateRangePicker uses dayStartOfWeek=1
- THEN its inner calendar SHALL start on Monday.

### Requirement: Ownership-safe options
Nested picker Options SHALL accept presentation only; top-level model, format, boundary and rule ownership SHALL remain with the field. All four public entries SHALL provide install and public instance/props/event types.

#### Scenario: Nested model attempt
- WHEN a type consumer assigns a modelValue into DatePickerOptions
- THEN compilation SHALL reject it and runtime presentation filtering SHALL ignore it.
