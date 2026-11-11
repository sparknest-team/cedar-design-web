# Validation — 2026-09-10

- Scheduler suite: 91 tests passed in 10 files. New tests cover lunch gaps, adjacency, weekly schedules, per-resource overrides, all-day and unscheduled semantics, cross-midnight coverage, invalid settings and async stale rejection.
- Full Vue declaration type check and UI build passed.
- Package check: 0 errors, 0 warnings. Built pure core availability helper imported and executed in Node without a browser.
- Shared spec check: 0 errors; existing missing-test warnings for Col, Row and StyleProvider.
- Generated VuePress Scheduler page passed SFC parsing.
- Browser: unavailable meeting-room cells shaded; a noon reservation was rejected with the draft retained; a 13:00 reservation saved successfully. Disabling maintenance removed its shaded cells. Final reload restored demo data and both examples rendered.
- Running a library build triggered transient HMR errors in unrelated component entry modules; a fresh page load after the build rendered successfully.
