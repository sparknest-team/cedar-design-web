## ADDED Requirements

### Requirement: Canonical series split
The pure core SHALL export splitSchedulerRecurrence, SchedulerRecurrenceSplitOptions and SchedulerRecurrenceSplitResult. Input SHALL include series, exceptions and an occurrence with original identity. Output SHALL include detached series, retained exceptions and removedExceptions. The helper SHALL not perform network writes.

The boundary SHALL be validated against the original rule without exceptions, including count and until. Prefix occurrences SHALL retain their series ID and occurrence IDs. Splitting at the first occurrence SHALL remove the old series. Omitting nextEvent SHALL cancel this and following. A nextEvent SHALL require a fresh series ID and a valid scheduled seed matching its rule. Readonly series and duplicate IDs SHALL be rejected.

### Requirement: Tail rule semantics
Omitting rule SHALL preserve the old pattern, original weekday default, until and remaining count. Providing rule SHALL completely replace the tail rule, including termination. Weekly interval phase SHALL remain correct when splitting at a matching day without changing the seed date. The full proposal SHALL fail on invalid configuration or work limits rather than publish partial records.

### Requirement: Exception policy
Exception partition SHALL use originalStart rather than a moved event's displayed start. Prefix exceptions SHALL remain intact even if moved after the boundary. Exceptions at or after the boundary SHALL reject splitting by default; explicit discard SHALL remove them and return detached removedExceptions. No implicit mapping to a new series SHALL occur.

### Requirement: Reviewable demo behavior
The demo SHALL offer single/this-and-following scope, protect/discard policy, change/cancel, reset and simulated save rejection using internal Cedar controls. It SHALL preview series counts, retain state and the open form on failure, and publish series and exceptions together only after successful persistence simulation. The component's main model SHALL remain ordinary projected events.
