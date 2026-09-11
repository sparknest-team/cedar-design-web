## ADDED Requirements

### Requirement: Range expansion
The pure core SHALL export SchedulerRecurrenceRule, SchedulerRecurringEvent, SchedulerOccurrence, SchedulerRecurrenceException, SchedulerRecurrenceOptions and expandSchedulerRecurrences. Daily and weekly rules SHALL support positive integer intervals, optional positive count and inclusive until. Weekly rules SHALL use Monday week boundaries and optional weekday numbers 0–6. Count SHALL apply before cancellations, from the first matching date on or after the seed start.

### Requirement: Date semantics and bounded computation
Expansion SHALL use the runtime's local calendar and [start, end) intersection. All-day events SHALL retain date-only strings with calendar-day duration; timed events SHALL retain elapsed duration. Occurrence IDs SHALL remain stable across visible windows in the same timezone. Invalid input and exceeded work/output budgets SHALL throw rather than return partial results. A DST-normalized date SHALL not permanently shift the wall-clock time of subsequent dates.

### Requirement: Single-occurrence exceptions
Exceptions SHALL identify a series and original occurrence start. Omitted event SHALL mean cancellation; a replacement SHALL retain scheduling. Expansion SHALL suppress the original and place the replacement by its actual range, including moves from a later original date into an earlier window. Nonmember exception dates SHALL not create phantom events. setSchedulerRecurrenceException SHALL create detached immutable exception records and replace the same identity atomically.

### Requirement: Integration and scope
The Scheduler model SHALL remain an array of expanded ordinary events. The demo SHALL adapt editor/move/remove operations into single-instance exceptions, support standalone creation and restoration of exceptions, and use internal Cedar UI controls. It SHALL reject unscheduling repeated instances. Canonical series and exceptions, rather than projections, SHALL be persisted by the application; server validation SHALL cover series-wide conflicts. Changes to a series require an explicit exception migration policy.
