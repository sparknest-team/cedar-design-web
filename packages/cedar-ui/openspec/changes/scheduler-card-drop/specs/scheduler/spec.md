## ADDED Requirements

### Requirement: Custom sidebar cards create drafts
The sidebar-extra slot SHALL accept templates with title, description, color, taskId, resourceIds and optional positive duration in minutes. startDrag(template, event) SHALL capture a detached template and cancelDrag SHALL clear it. Disabled, readonly, loading, pending and an already open editor SHALL prevent template dragging. As extended by scheduler-editor-protocol, editable=false routes template drops to editor-request rather than blocking them.

#### Scenario: Drop and confirm
- WHEN a card is dropped on a time cell
- THEN the editor opens with its exact local date/time and target resource; duration defaults to step
- AND no value changes until save passes the existing create validation and beforeChange

#### Scenario: Date-only targets
- WHEN a card is dropped on a month cell or all-day row
- THEN it creates a one-day all-day draft with exclusive end
- WHEN dropped on a resource timeline date
- THEN it uses startHour and the target resource

#### Scenario: Cancel and reuse
- WHEN the editor or drag is cancelled, or the target resource is disabled
- THEN no event is created and the source template remains unchanged
- AND later drops create fresh unique ids

Agenda has no drop target. Native card drag is desktop-only. Templates do not replace the existing unscheduled-event move operation.
