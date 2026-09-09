# Scheduler

## ADDED Requirements

### Requirement: Native rendering and independent core
Scheduler MUST render through Vue and reuse Cedar controls. Core date ranges, validation, conflict detection, resource reassignment and overlap layout MUST be pure TypeScript, immutable and usable without a browser.

### Requirement: Public models
The primary value MUST be modelValue, an array of SchedulerEvent. Absence selects defaultValue-backed uncontrolled operation. Mode and date MUST have equivalent named models. A controlled proposal MUST NOT change displayed data until the parent updates the prop.

### Requirement: Atomic changes
Create, update, remove, move and resize MUST pass validation and optional beforeChange. A false result cancels; a rejection emits change-error; pending work prevents duplicate changes. Inputs changed during pending work MUST invalidate the proposal. No cancellation or failure may emit change.

### Requirement: Multiple resources
A shared event MUST remain one entity across resource projections. Moving from A to C replaces A only, preserves other resources and deduplicates C. Events without start/end MUST remain in an unscheduled list.

### Requirement: Accessible interaction
Events and creation controls MUST be keyboard operable. Forms MUST provide an alternative to drag operations. Disabled/readonly/loading and per-event readonly MUST prevent mutations. All-day events MUST use date-only exclusive ends. Adjacent intervals MUST NOT conflict.

### Requirement: Packaging
Scheduler MUST be registered, exported and documented, with native SFC implementation, runtime props, public types, namespaced tokens, demos and behavior tests.
