## MODIFIED Requirements

### Requirement: Calendar recurrence rules
SchedulerRecurrenceRule frequency SHALL also accept monthly/yearly. dayOfMonth SHALL accept 1–31 or -1 (last day). weekOfMonth SHALL accept 1–5 or -1 and select that ordinal date among days matching daysOfWeek (default seed weekday). monthOfYear SHALL accept 1–12 for yearly rules only, default seed month. Numeric dates SHALL default to seed day.

Monthly intervals SHALL anchor to seed month; yearly intervals SHALL anchor to seed year. Missing dates SHALL skip by default, or clamp to month end with overflow=last-day. Skipped dates SHALL not consume count. Missing ordinal weekdays SHALL always skip. Calendar arithmetic SHALL preserve local wall-clock behavior and Gregorian leap rules.

### Requirement: Unambiguous validation
Daily/weekly SHALL reject calendar-only fields. Monthly SHALL reject monthOfYear. dayOfMonth and weekOfMonth SHALL be mutually exclusive. Ordinal rules SHALL reject overflow; daysOfWeek on monthly/yearly SHALL require weekOfMonth. Invalid selectors SHALL throw before publication.

### Requirement: Split compatibility
Inherited split rules SHALL freeze implicit original day/month/weekday defaults before re-anchoring the tail. Splitting a 31st rule from February's fallback SHALL still produce March 31; splitting a February 29 yearly rule from a non-leap instance SHALL retain February 29 in later leap years. Existing exception, count and until semantics SHALL remain unchanged.

### Requirement: Demo
A Cedar-only demo SHALL cover monthly 31st, last Monday–Friday date, second Monday and yearly leap day, with interval/count controls, overflow choice, date previews and clickable navigation. It SHALL explicitly distinguish weekdays from public-holiday working calendars.
