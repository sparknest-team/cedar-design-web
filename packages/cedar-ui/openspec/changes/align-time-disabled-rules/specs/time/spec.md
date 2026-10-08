# Time rule contract

## ADDED Requirements

### Requirement: Canonical disabled callbacks
Time, TimePicker, TimeRange and TimeRangePicker SHALL use disabledHours(), disabledMinutes(hour?) and disabledSeconds(hour?, minute?) returning number arrays. Hours SHALL be 0–23 in both clock and wheel views. Maple SHALL NOT expose disabledTime on these components.

### Requirement: Constrained wheel values
Wheel choices SHALL respect inclusive min/max and callback constraints. A parent candidate SHALL require at least one valid descendant. Invalid or empty selections SHALL NOT commit; external model updates SHALL NOT emit writes. Both range endpoints SHALL be validated before confirmation.
