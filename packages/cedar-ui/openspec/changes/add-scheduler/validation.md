# Validation

Verified on 2026-09-09.

- Scheduler behavior and core tests: 38 passed across 4 files using `pnpm exec vitest run --config vitest.scheduler.config.ts --threads false --coverage`. Statement/line coverage 91.19%; branch coverage 85.77%.
- Core tests under `TZ=America/New_York`: 12 passed, including daylight-saving date behavior.
- Resolver tests: 20 passed, including the Scheduler component registry.
- Public API contracts: `pnpm exec tsc -p tsconfig.contracts.json` passed.
- UI build and declaration generation: `pnpm exec cedar-cli compile ui-build.config.mjs` passed.
- Monorepo `pnpm package:check`: 0 errors, 0 warnings.
- Shared Cedar specification checks: 0 errors; 3 existing missing-test warnings for Col, Row and StyleProvider.
- Built pure core import in Node and Scheduler server rendering passed smoke checks.
- Browser verification: resource views, compact Cedar date inputs, shared-event editing, cross-resource pointer movement preserving other participants, and end-time resizing.

## Scope

Native Vue views use Cedar controls; the scheduling core has no Vue or DOM dependency. Six views, multiple resource assignment, unscheduled items, editing, pointer movement/resizing and asynchronous change interception are included.

Resource timeline uses day granularity; resource-day provides hour/minute placement. Dates use the runtime local timezone. Recurrence, arbitrary display timezones, virtual resource rows, undo history, real-time collaboration and external calendar synchronization remain future modules.
