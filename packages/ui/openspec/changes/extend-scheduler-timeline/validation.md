# Validation

- Scheduler suite: 76 tests passed across 9 files, including existing drag/editor/resource tests and new controlled scale, controlled expansion, grouping, DST coordinates, midnight creation and one-day navigation tests.
- Public contract type checking passed.
- Shared component specification: 0 errors; existing missing-test warnings for Col, Row and StyleProvider.
- VuePress-generated Scheduler page parses successfully. Browser loaded the actual documentation and new grouped demo without runtime errors.
- Browser testing found overlapping collapsed group controls during horizontal scrolling; changed each group control to a separate block. Verified independent expand/collapse and all three resource rows after the fix.
- Existing default remains weekly day-granularity timeline. New hour scale shows one local day. No recurrence, working-calendar rules, virtualization or batch transactions are claimed by this change.

- Final UI build/declaration generation passed; package export validation passed with 0 errors and 0 warnings. Browser scale switching preserved focused date and displayed the expected weekly range.
