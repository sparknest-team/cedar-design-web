# Business calendars with date overrides

Introduce a shared pure business-calendar model for recurring ordinal working dates and booking availability. Weekly defaults and explicit date overrides represent company holidays and weekend makeup work without embedding official calendars or fetching legal holiday data.

Reuse disabledRanges for availability instead of adding a second component ownership mode. Recurrence accepts a businessCalendar only for monthly/yearly ordinal rules. Series splitting retains detached calendar data.
