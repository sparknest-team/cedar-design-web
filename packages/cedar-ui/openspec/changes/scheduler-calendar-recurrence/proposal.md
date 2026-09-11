# Calendar-based monthly/yearly recurrence

Extend the existing recurrence rule rather than adding a second engine. Monthly/yearly patterns share range expansion, instance identity, exception handling, safety budgets and series splitting with daily/weekly rules.

Support numeric month days, last day, ordinal matching weekdays, yearly month, and explicit skip/last-day overflow. Keep runtime-local timezone semantics; this is not a full RRULE parser or holiday calendar.
