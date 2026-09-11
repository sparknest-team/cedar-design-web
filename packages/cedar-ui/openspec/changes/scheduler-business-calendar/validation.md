# Validation — 2026-09-10

- Scheduler suite: 156 tests / 20 files passed.
- America/New_York: 19 business-calendar/recurrence tests passed.
- Added 7 calendar regression tests and one real demo integration test, including out-of-view holiday rejection.
- Full Vue declaration type check passed.

Logs: /tmp/scheduler-business-{tests,dst,types,build,contracts,package,spec}.log.

- Library compilation, generated public API contracts and package validation passed (0 package errors/warnings).
- Shared standards: 0 errors; existing Col/Row missing-test warnings remain.
- Browser at localhost:9992/components/scheduler/: February 27 holiday save rejected and form retained; February 28 makeup booking saved. Disabling overrides changed settlement date from February 28 to February 27, retained the existing booking, and rejected its subsequent weekend edit. Test booking removed afterwards; no browser error logs.
