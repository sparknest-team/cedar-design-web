# Validation — 2026-09-10

- Scheduler suite: 137 tests / 16 files passed.
- Added 8 pure split regression tests plus the real demo integration test.
- Full Vue declaration type check passed.
- Integration verifies protected exceptions, rejected persistence leaving canonical data unchanged, successful split/discard, and the calendar instance surviving summary count changes.

Logs: /tmp/scheduler-split-{tests,types,build,contracts,package,spec,demo-test}.log.

- Library compilation completed successfully; generated public API contracts passed.
- Package validation: 0 errors, 0 warnings. Shared standards: 0 errors with existing Col/Row missing-test warnings.
- Browser at localhost:9992/components/scheduler/: default protection blocked splitting Wednesday while Friday had an exception. Explicit discard and rename yielded old prefix count 1 plus new tail count 8; Monday kept its title and Wednesday/Friday changed. Cancelling the new tail left only Monday. Browser error logs empty; demo reset to initial state for review.
