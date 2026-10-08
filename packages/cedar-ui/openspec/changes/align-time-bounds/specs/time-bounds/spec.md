## ADDED Requirements

### Requirement: Inclusive time bounds across fields and panels
Time, TimeRange, TimePicker and TimeRangePicker SHALL accept optional min/max strings in 24-hour HH:mm or HH:mm:ss, independent of display format. Invalid boundary strings SHALL be treated as unset. Reversed bounds SHALL allow no commit.

#### Scenario: Dynamic lower bound excludes current value
- WHEN min moves after the current value
- THEN the external model is preserved and confirmation is disabled until a valid draft is selected.

#### Scenario: Range and twelve-hour display
- WHEN the display uses AM/PM or a range
- THEN bounds are still 24-hour values and each endpoint must independently satisfy them.

#### Scenario: Inclusive boundary
- WHEN a candidate equals a valid boundary and satisfies step and disabled rules
- THEN confirmation succeeds.
