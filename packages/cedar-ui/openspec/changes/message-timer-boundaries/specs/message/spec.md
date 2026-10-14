## MODIFIED Requirements

### Requirement: active display timer ownership

An automatic Message display deadline SHALL only run for an active, open, mounted owner. Deactivation and unmount SHALL cancel and invalidate pending work. Inactive updates and retained exposed restart methods SHALL NOT schedule tasks.

#### Scenario: KeepAlive reactivation
- GIVEN an open Message deactivated after part of its duration
- WHEN it is activated again
- THEN its full current configured duration starts once, independently of CSS transition tokens.

### Requirement: hover deadline and invalid duration

Hover pause SHALL retain a finite positive deadline's remaining time. Exhausted positive deadlines SHALL request close once on resume; explicitly configured zero, negative and non-finite durations SHALL NOT schedule automatic close.

#### Scenario: reset while hovered
- GIVEN a paused positive display deadline
- WHEN resetOnUpdate applies an explicit zero duration
- THEN resuming remains persistent and does not request close.
