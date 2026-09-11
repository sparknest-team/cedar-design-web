# Validation — 2026-09-10

- Scheduler suite: 128 tests / 14 files passed, including core recurrence and actual demo integration.
- America/New_York: all 12 recurrence tests passed, including March DST normalization and all-day calendar duration.
- Full Vue declaration type check passed.

Logs: /tmp/scheduler-recurrence-{tests,dst,types,build,contracts,package,spec}.log.

- Final library compilation and generated public API contract checks passed.
- Package validation: 0 errors, 0 warnings.
- Shared standards: 0 errors; existing Col/Row missing behavior-test warnings remain.
- Browser at localhost:9992/components/scheduler/: three weekly instances rendered. Renamed Wednesday only (one exception, other titles unchanged); deleted Wednesday only (two instances, count not extended); restored exceptions (three original instances). Browser error log empty on the fresh page after compilation.
- Final 128-test suite was rerun after compilation, because existing demos import generated package files which are temporarily removed during build.
