## ADDED Requirements

### Requirement: Explicit timezone protocol
Fields and panels SHALL accept optional IANA `timeZone`. Date and timestamp models SHALL preserve instants. Strings SHALL represent civil time in the target zone. Limits, formatting, text parsing, disabled callbacks and Date events SHALL follow the same protocol.

#### Scenario: DST gap and fold
- WHEN a civil time is skipped by daylight saving time
- THEN selection SHALL be rejected
- WHEN a civil time is repeated
- THEN the earlier matching instant SHALL be selected deterministically

#### Scenario: Independent instances
- WHEN two instances use different zones
- THEN neither SHALL mutate the global default timezone or the other's model
### Requirement: Preserve untouched instants
Calendar interaction SHALL retain the original instant and hidden precision for endpoints whose civil label did not change. Editing the opposite endpoint SHALL NOT reinterpret the later occurrence of a repeated hour. Partial-hour DST gaps SHALL disable nonexistent minutes while keeping valid minutes selectable.

#### Scenario: Locked later-fold endpoint
- GIVEN a locked timestamp in the second occurrence of a repeated hour
- WHEN the opposite endpoint is edited
- THEN the locked timestamp and hidden milliseconds SHALL remain unchanged
