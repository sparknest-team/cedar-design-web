## ADDED Requirements

### Requirement: Selection versus commit
Time fields SHALL emit select(value,date) for user draft selection and change(value,date) only on commit. Maple fields SHALL support disableConfirm for immediate valid commits.

#### Scenario: Default confirmation
- WHEN a user selects then cancels
- THEN select fires but no model update or change fires

#### Scenario: Immediate confirmation
- WHEN disableConfirm is true and a valid time is selected
- THEN select precedes model update and change, and the field requests close

### Requirement: Empty range
Clearing a TimeRange field SHALL emit update:modelValue(undefined), change(undefined,undefined), and clear() with no select event.

#### Scenario: Clear populated range
- WHEN clear is activated
- THEN the empty model is undefined, not an empty array
