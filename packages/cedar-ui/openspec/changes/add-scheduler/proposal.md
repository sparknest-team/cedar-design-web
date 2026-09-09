# Native Vue Scheduler

Implement Cedar Scheduler with Vue SFCs and internal Cedar controls. Keep scheduling calculations in `src/scheduler/core` without Vue, DOM or third-party calendar dependencies. This replaces the earlier Svelte-adapter proposal at the user's request.

The initial release supports day/week/month/agenda/resource-day/resource-timeline, unscheduled items, multi-resource assignment, editing, drag move/resize, controlled and uncontrolled state, and asynchronous beforeChange. Preserve the existing Calendar contract. Recurrence, remote data providers, arbitrary display time zones and virtual resource rows remain subsequent modules; do not publish nonfunctional options.

Public naming follows Cedar: modelValue/defaultValue, mode/defaultMode, date/defaultDate, beforeChange and emits. Use the existing shared token, documentation and package export conventions.
