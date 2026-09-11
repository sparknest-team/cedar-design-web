# Validation — 2026-09-10

- Scheduler suite: 148 tests / 18 files passed.
- America/New_York: 22 recurrence/calendar tests passed.
- Added 10 calendar-rule tests plus one real demo test covering overflow controls, weekday presets and preview navigation.
- Full Vue declaration type check passed.
- Shared standards: 0 errors; existing Col/Row missing-test warnings remain.

Logs: /tmp/scheduler-calendar-{tests,dst,types,build,contracts,package,spec}.log.

- Library compilation, generated public API contracts and package validation passed (0 package errors/warnings).
- Browser at localhost:9992/components/scheduler/: monthly 31st initially skips February/April; overflow toggle adds February 28 and April 30 while March stays 31. Date preview buttons navigate the calendar. Last weekday preset shows January 30 and February 27. Yearly leap-day fallback gives 2025–2027 February 28 and 2028 February 29; disabling fallback shows 2024/2028/2032/2036/2040/2044 February 29. Browser error logs empty, preset restored for review.
