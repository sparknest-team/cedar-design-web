# Local-calendar recurrence and single-occurrence exceptions

Add independent core contracts for daily/weekly series and exception records, with range expansion into ordinary Scheduler events. Keep the component's model-value semantics unchanged. Existing editor, move and delete flows can update an exception through an application adapter; standalone events still work.

This iteration is deliberately not an RFC 5545 RRULE parser: monthly/yearly rules, IANA display zones, this-and-following splits and whole-series migration require later designs. No expanded event array should replace canonical series in persistence.
