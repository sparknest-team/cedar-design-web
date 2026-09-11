## ADDED Requirements

### Requirement: Business date lookup
SchedulerBusinessCalendar SHALL contain optional workingDays (default Monday–Friday; empty means no regular days) and overrides. Each override SHALL have a strict valid date-only string and working boolean, with optional label. Overrides SHALL outrank weekday defaults. Invalid weekdays, impossible dates and duplicate override dates SHALL throw.

isSchedulerWorkingDate SHALL query the runtime-local date without changing inputs. No built-in legal holiday source or automatic regional calendar SHALL be implied.

### Requirement: Ordinal recurrence
Monthly/yearly rules with weekOfMonth SHALL optionally accept businessCalendar, replacing daysOfWeek candidate selection. Holidays SHALL be excluded, makeup weekends included, and months without enough candidates skipped without consuming count. Business calendars SHALL reject combinations with daysOfWeek or nonordinal rules. Existing single exceptions SHALL retain their precedence. Splitting SHALL copy calendars and not introduce conflicting weekday fields.

### Requirement: Availability adapter
getSchedulerCalendarDisabledRanges SHALL generate whole closed-day ranges intersecting an exclusive-end query range, retaining override labels. It SHALL use local calendar boundaries, reject invalid ranges and throw when maxDays (default 3660) is exceeded rather than returning partial output. These ranges SHALL use the existing availability path.

### Requirement: Shared demo and limits
The demo SHALL share a calendar between monthly settlement dates and editable booking constraints, clearly label all holiday/makeup dates as simulated, allow toggling the calendar, and validate full edited event ranges beyond the viewport. Weekly hours remain separate constraints; makeup dates SHALL not override restrictive weekly hours or explicit maintenance ranges. Published docs SHALL explain partial-window and server-validation limits.
