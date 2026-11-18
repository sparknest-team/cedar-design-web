---
lang: en-US
deferExamples: true
permalink: /en/components/scheduler/
---

# Scheduler

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Reading direction

Scheduler inherits `dir` from the page, a local container, or ConfigProvider. Use the documentation navigation switch to change LTR/RTL at runtime. Month/week/resource columns and horizontal time follow inline start; vertical time continues downwards. Switching direction preserves dates, event data, selection and the horizontal reading offset, and cancels active drag or resize gestures.

Hourly resource timelines support moving events and resizing both start and end, respecting `snapDuration`, readonly state, milestones and event `resizable`. Zoom preserves the date at the center of the visible time area. Resource labels stick to inline start; virtual rows and their heading scroll together.

Default overlap layouts use inline start. A custom `eventLayout` return value keeps the physical meaning of `left`; callers control that geometry. RTL does not reverse dates, time zones, dependencies or source resource order.

## Basic examples

### Basic usage

Preview configuration: `default-date="2026-09-09"`.

<demo src="./__demos__/basic.vue"></demo>

## Views and layout

### Layout Groups

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `default-date` | Initial navigation date | Layout Groups, Without Resources, Resource Week |
| `default-mode` | Default uncontrolled view | Layout Groups, Timeline, Hidden Days |
| `resources` | Currently visible resource rows/columns and local options; a complete directory is unnecessary | Resource Week, Timeline, Now Indicator |
| `start-hour` | Time-grid start hour, 0–23 | Layout Groups, Now Indicator, Stacked Events |
| `end-hour` | Time-grid end hour; greater than start and at most 24 | Layout Groups, Now Indicator, Stacked Events |
| `modes` | Views available for switching | Without Resources, Hidden Days, Now Indicator |
<!-- demo-config-notes:end -->


Preview configuration: `:default-date="today"`, `default-mode="day"`, `:event-layout="custom ? layout : 'stack'"`, `:show-sidebar="false"`.

<demo src="./__demos__/layout-groups.vue"></demo>

### Without Resources

Preview configuration: `:modes="['day', 'week', 'month', 'agenda']"`, `default-date="2026-09-09"`.

<demo src="./__demos__/without-resources.vue"></demo>

### Resource Week

Preview configuration: `default-date="2026-09-09"`, `:resources="resources"`.

<demo src="./__demos__/resource-week.vue"></demo>

### Timeline

Preview configuration: `default-date="2026-09-09"`, `default-mode="resource-timeline"`, `:resources="resources"`.

<demo src="./__demos__/timeline.vue"></demo>

### Hidden Days

Preview configuration: `default-date="2026-09-18"`, `default-mode="month"`, `:modes="['week', 'month', 'agenda']"`, `:hidden-days="hidden"`.

<demo src="./__demos__/hidden-days.vue"></demo>

### Now Indicator

Preview configuration: `v-model:date="date"`, `:show-now-indicator="enabled"`, `default-mode="resource-day"`, `:modes="['day', 'week', 'resource-day']"`.

<demo src="./__demos__/now-indicator.vue"></demo>

### Timeline Groups

Preview configuration: `v-model:scale="scale"`, `v-model:expanded-keys="expanded"`, `default-date="2026-09-09"`, `default-mode="resource-timeline"`.

<demo src="./__demos__/timeline-groups.vue"></demo>

### Stacked Events

- `readonly`: Displays the current value without allowing edits.

<demo src="./__demos__/stacked-events.vue"></demo>

## Resources and assignments

### Resources

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `default-date` | Initial navigation date | Resources, Resource Cross Groups, Resource Dimensions |
| `default-mode` | Default uncontrolled view | Resources, Resource Cross Groups, Resource Dimensions |
| `resources` | Currently visible resource rows/columns and local options; a complete directory is unnecessary | Resources, Resource Cross Groups, Resource Dimensions |
| `resource-dimensions` | Dimension definitions: `{ id, label }[]` | Resource Cross Groups, Resource Dimensions, Independent Assignments |
| `resource-filters` | Combined resource-dimension filters; supports v-model:resource-filters | Resource Cross Groups, Resource Dimensions, Virtual Resources |
| `show-assignment-details` | Edit resource occupancy and roles | Independent Assignments, Assignment Load |
<!-- demo-config-notes:end -->


Preview configuration: `default-date="2026-09-09"`, `default-mode="resource-day"`, `:resources="resources"`, `:start-hour="8"`.

<demo src="./__demos__/resources.vue"></demo>

### Resource Cross Groups

Preview configuration: `data-cross-groups-demo`, `v-model:resource-filters="filters"`, `:resource-group-dimensions="groupDimensions"`, `default-date="2026-09-22"`.

<demo src="./__demos__/resource-cross-groups.vue"></demo>

### Resource Dimensions

Preview configuration: `data-dimensions-demo`, `v-model:resource-filters="filters"`, `v-model:resource-dimension="axis"`, `default-date="2026-09-22"`.

<demo src="./__demos__/resource-dimensions.vue"></demo>

### Independent Assignments

Preview configuration: `:resources="resources"`, `:resource-dimensions="dimensions"`, `:resource-group-dimensions="['station', 'person']"`, `default-date="2026-09-22"`.

<demo src="./__demos__/independent-assignments.vue"></demo>

### Assignment Load

Preview configuration: `default-date="2026-09-22"`, `default-mode="resource-timeline"`, `default-scale="hour"`, `:resources="resources"`.

<demo src="./__demos__/assignment-load.vue"></demo>

### Virtual Resources

Preview configuration: `data-virtual-resources-demo`, `v-model:resource-filters="filters"`, `:resources="resources"`, `:resource-dimensions="dimensions"`.

<demo src="./__demos__/virtual-resources.vue"></demo>

## Working hours and capacity

### Recurring and date-specific working hours

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `default-date` | Initial navigation date | Recurring and date-specific working hours, Maintenance, Resource Capacity |
| `default-mode` | Default uncontrolled view | Recurring and date-specific working hours, Maintenance, Resource Capacity |
| `resources` | Currently visible resource rows/columns and local options; a complete directory is unnecessary | Recurring and date-specific working hours, Maintenance, Resource Capacity |
| `resource-label` | Resource field name, such as equipment or meeting room | Recurring and date-specific working hours, Maintenance |
| `allow-overlap` | Allow overlapping times for the same resource | Recurring and date-specific working hours |
<!-- demo-config-notes:end -->


Compare recurring hours with date-specific overrides. Attempt creation or editing inside and outside available periods to inspect full-duration validation.

<demo src="./__demos__/working-hours-comparison.vue"></demo>

### Maintenance

Preview configuration: `default-date="2026-09-09"`, `default-mode="resource-timeline"`, `default-scale="hour"`, `resource-label="设备"`.

<demo src="./__demos__/maintenance.vue"></demo>

### Resource Capacity

Preview configuration: `:status="span.exceeded ? 'danger' : 'success'"`, `default-date="2026-09-15"`, `default-mode="resource-timeline"`, `default-scale="hour"`.

<demo src="./__demos__/resource-capacity.vue"></demo>

## Recurrence and calendars

### Recurring Events

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `default-mode` | Default uncontrolled view | Recurring Events, Calendar Recurrence, Business Calendar |
| `default-date` | Initial navigation date | Recurring Events, Business Calendar, Recurrence Following |
| `model-value` | Schedule data; supports v-model and becomes controlled when provided | Calendar Recurrence, Recurrence Following, Zoned Recurrence |
| `readonly` | Viewing/navigation allowed, editing blocked | Calendar Recurrence, Recurrence Following, Zoned Recurrence |
| `resources` | Currently visible resource rows/columns and local options; a complete directory is unnecessary | Recurring Events |
| `date` | Navigation date; supports v-model:date | Calendar Recurrence |
<!-- demo-config-notes:end -->


Preview configuration: `:options="frequencies"`, `aria-label="重复频率"`, `:min="1"`, `:max="12"`.

<demo src="./__demos__/recurring-events.vue"></demo>

### Calendar Recurrence

- `readonly`: Displays the current value without allowing edits.

<demo src="./__demos__/calendar-recurrence.vue"></demo>

### Business Calendar

Preview configuration: `default-date="2026-02-26"`, `default-mode="week"`, `:working-hours="hours"`, `:disabled-ranges="blocked"`.

<demo src="./__demos__/business-calendar.vue"></demo>

### Recurrence Following

- `readonly`: Displays the current value without allowing edits.

<demo src="./__demos__/recurrence-following.vue"></demo>

### Zoned Recurrence

- `readonly`: Displays the current value without allowing edits.

<demo src="./__demos__/zoned-recurrence.vue"></demo>

## Editing and interaction

### Drag Feedback

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `default-date` | Initial navigation date | Drag Feedback, Duplicate Events, Custom Cards |
| `default-mode` | Default uncontrolled view | Drag Feedback, Duplicate Events, Custom Event |
| `resources` | Currently visible resource rows/columns and local options; a complete directory is unnecessary | Drag Feedback, Duplicate Events, Custom Cards |
| `before-change` | Return false to cancel; supports asynchronous interception and save APIs | Custom Event, Custom Editor, External Editor |
| `resource-label` | Resource field name, such as equipment or meeting room | Drag Feedback |
| `start-hour` | Time-grid start hour, 0–23 | Drag Feedback |
<!-- demo-config-notes:end -->


- `step`: Controls the allowed increment.

<demo src="./__demos__/drag-feedback.vue"></demo>

### Duplicate Events

Preview configuration: `default-date="2026-09-16"`, `default-mode="week"`, `:resources="resources"`, `:before-transaction="persist"`.

<demo src="./__demos__/duplicate-events.vue"></demo>

### Event Dialog

<demo src="./__demos__/event-dialog.vue"></demo>

### Event Popover

<demo src="./__demos__/event-popover.vue"></demo>

### Custom Cards

Preview configuration: `default-date="2026-09-09"`, `:resources="resources"`.

<demo src="./__demos__/custom-cards.vue"></demo>

### Custom Event

Preview configuration: `default-date="2026-09-09"`, `default-mode="week"`, `:resources="resources"`.

<demo src="./__demos__/custom-event.vue"></demo>

### Custom Editor

Preview configuration: `default-date="2026-09-09"`, `default-mode="day"`, `:before-change="beforeChange"`, `:model="event"`.

<demo src="./__demos__/custom-editor.vue"></demo>

### External Editor

Preview configuration: `:editable="false"`, `default-date="2026-09-09"`, `default-mode="day"`, `:before-change="beforeChange"`.

<demo src="./__demos__/external-editor.vue"></demo>

### Batch History

Preview configuration: `v-model:selected-keys="selected"`, `default-date="2026-09-09"`, `default-mode="resource-timeline"`, `:resources="resources"`.

<demo src="./__demos__/batch-history.vue"></demo>

### Atomic Swap

Preview configuration: `default-date="2026-09-09"`, `default-mode="resource-day"`, `:resources="[{ id: 'room', label: '会议室 A' }]"`, `:allow-overlap="false"`.

<demo src="./__demos__/atomic-swap.vue"></demo>

### Interaction Completion

Preview configuration: `v-model:mode="mode"`, `default-date="2026-09-22"`, `:slot-duration="60"`, `:snap-duration="15"`.

<demo src="./__demos__/interaction-completion.vue"></demo>

### Advanced Planning

Preview configuration: `default-date="2026-09-22"`, `default-mode="resource-timeline"`, `default-scale="hour"`, `:resources="resources"`.

<demo src="./__demos__/advanced-planning.vue"></demo>

## Async loading and saving

### Async Resources

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `default-mode` | Default uncontrolled view | Async Resources, Remote Events, Async Change |
| `resources` | Currently visible resource rows/columns and local options; a complete directory is unnecessary | Async Resources, Async Change |
| `before-change` | Return false to cancel; supports asynchronous interception and save APIs | Async Resources, Async Change |
| `default-date` | Initial navigation date | Async Resources, Async Change |
| `resource-label` | Resource field name, such as equipment or meeting room | Async Resources |
| `request-resources` | Query resource candidates by keyword and cursor | Async Resources |
<!-- demo-config-notes:end -->


Preview configuration: `options`, `:resources="visibleResources"`, `:resource-label="kind === 'device' ? '设备' : '人员'"`, `:request-resources="requestResources"`.

<demo src="./__demos__/async-resources.vue"></demo>

### Remote Events

- `readonly`: Displays the current value without allowing edits.

<demo src="./__demos__/remote-events.vue"></demo>

### Async Change

Preview configuration: `:model-value="events"`, `default-date="2026-09-09"`, `default-mode="resource-day"`, `:resources="resources"`.

<demo src="./__demos__/async-change.vue"></demo>

## Workflows and integration

### Equipment

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `resources` | Currently visible resource rows/columns and local options; a complete directory is unnecessary | Equipment, Task Calendar Details, Task Calendar Workbench |
| `default-mode` | Default uncontrolled view | Equipment, Calendar Integration, Task Calendar Details |
| `default-date` | Initial navigation date | Equipment, Calendar Integration, Task Calendar Details |
| `editable` | Enable the built-in editor; false delegates through editor-request | Task Calendar Details, Task Calendar Workbench |
| `start-hour` | Time-grid start hour, 0–23 | Task Calendar Details, Task Calendar Workbench |
| `end-hour` | Time-grid end hour; greater than start and at most 24 | Task Calendar Details, Task Calendar Workbench |
<!-- demo-config-notes:end -->


Preview configuration: `:resources="devices"`, `resource-label="设备"`, `default-mode="resource-day"`, `default-date="2026-09-09"`.

<demo src="./__demos__/equipment.vue"></demo>

### Calendar Integration

Preview configuration: `placeholder="ICS 文本"`, `:rows="4"`, `default-date="2026-09-22"`, `default-mode="week"`.

<demo src="./__demos__/calendar-integration.vue"></demo>

### Task Calendar Details

Preview configuration: `:editable="false"`, `:resources="resources"`, `default-date="2026-09-09"`, `default-mode="resource-day"`.

<demo src="./__demos__/task-calendar-details.vue"></demo>

### Task Calendar Workbench

- `step`: Controls the allowed increment.
- `readonly`: Displays the current value without allowing edits.
- `disabled`: Prevents user interaction.

<demo src="./__demos__/task-calendar-workbench.vue"></demo>

## Reading direction

Inherits `dir` from the page, local container or ConfigProvider, including the documentation's live LTR/RTL controls. Month/week/resource columns and horizontal timelines start at inline start; vertical time stays top to bottom. Direction changes preserve date, events, selection and horizontal reading distance while canceling active dragging/resizing.

Hourly resource timelines support moving events and resizing both start and end, respecting `snapDuration`, readonly state, milestones and event `resizable`. Zoom preserves the date at the center of the visible time area. Resource labels stick to inline start; virtual rows and their heading scroll together.

Default overlap layouts use inline start. A custom `eventLayout` return value keeps the physical meaning of `left`; callers control that geometry. RTL does not reverse dates, time zones, dependencies or source resource order.

## Usage notes

### Async operation feedback

Awaited before-* hooks show loading feedback and aria-busy. Rejection or failure restores interaction; repeated input does not start the same operation again. Ordinary event return Promises do not participate in loading.
### Configuration

All variables are defined in `style/token.less` and support light/dark theme overrides.

## API

### Scheduler Props

| Prop | Description | Type | Default |
| -------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------- | ------------ |
| model-value | Schedule data; supports v-model and becomes controlled when provided | SchedulerEvent[] | — |
| preview-event | Unsaved new-event placeholders; visual only | SchedulerEvent | — |
| default-value | Initial uncontrolled data | SchedulerEvent[] | [] |
| mode | Current view; supports v-model:mode | SchedulerMode<br>`'month' \| 'week' \| 'day' \| 'agenda' \| 'resource-day' \| 'resource-timeline'` | — |
| default-mode | Default uncontrolled view | SchedulerMode<br>`'month' \| 'week' \| 'day' \| 'agenda' \| 'resource-day' \| 'resource-timeline'` | week |
| date | Navigation date; supports v-model:date | Date / string / number | — |
| default-date | Initial navigation date | Date / string / number | Current date |
| resource-dimensions | Dimension definitions: `{ id, label }[]` | SchedulerResourceDimension[] | [] |
| resource-filters | Combined resource-dimension filters; supports v-model:resource-filters | SchedulerResourceFilters | — |
| default-resource-filters | Initial uncontrolled filters | SchedulerResourceFilters | {} |
| resource-dimension | Resource row/column dimension; an empty string shows all | string | — |
| default-resource-dimension | Initial uncontrolled display dimension | string | '' |
| resources | Currently visible resource rows/columns and local options; a complete directory is unnecessary | SchedulerResource[] | [] |
| resource-label | Resource field name, such as equipment or meeting room | string | Localized resource label |
| request-resources | Query resource candidates by keyword and cursor | SchedulerRequestResources | — |
| resolve-resources | Batch-resolve resource names by ID | SchedulerResolveResources | — |
| modes | Views available for switching | SchedulerMode[]<br>`SchedulerMode: 'month' \| 'week' \| 'day' \| 'agenda' \| 'resource-day' \| 'resource-timeline'` | All six views |
| first-day-of-week | Week start: 0 Sunday to 6 Saturday | number | 1 |
| start-hour | Time-grid start hour, 0–23 | number | 8 |
| end-hour | Time-grid end hour; greater than start and at most 24 | number | 20 |
| initial-scroll-minute | Minute of day initially scrolled into view; subsequent renders retain user scroll position | number | — |
| step | Grid/snap interval in minutes; a positive integer dividing 60 | number | 30 |
| slot-duration | Grid interval in minutes; positive integer | number | step |
| snap-duration | Pointer snap interval in minutes; positive integer | number | step |
| default-duration | Default duration for click-to-create, in positive integer minutes | number | step |
| drag-to-create | Drag-select empty slots in day/week/resource-day views | boolean | false |
| month-event-limit | Maximum directly displayed events per month-view day; extra events use Popover | number | 3 |
| overlap-event-limit | Maximum directly displayed events per overlapping time-grid group; extra events use Popover | number | — |
| zoom | Controlled timeline zoom, 0.5–4; supports v-model:zoom | number | `undefined` |
| default-zoom | Initial uncontrolled timeline zoom, 0.5–4 | number | `1` |
| show-date-header | Tiered timeline date headers | boolean | true |
| show-assignment-details | Edit resource occupancy and roles | boolean | false |
| show-resource-load | Resource peak load, capacity and utilization within the range | boolean | false |
| rule-policy | allow/warn/block policies for capacity/unavailable/conflict | SchedulerRulePolicy | {}（block） |
| dependencies | Task dependencies | SchedulerDependency[] | [] |
| event-layout | Time-grid layout: stack / columns / geometry callback. Week defaults to stack; others to columns | SchedulerEventLayout | Depends on the view |
| readonly | Viewing/navigation allowed, editing blocked | boolean | false |
| disabled | Disable interaction | boolean | false |
| hidden-days | Hide specified weekdays in week/month/agenda, 0–6; cannot hide every day | number[] | [] |
| show-now-indicator | Show the current local-time line in day/week/resource-day views | boolean | false |
| show-sidebar | Show filters and the unscheduled list | boolean | true |
| allow-overlap | Allow overlapping times for the same resource | boolean | true |
| editable | Enable the built-in editor; false delegates through editor-request | boolean | true |
| before-change | Return false to cancel; supports asynchronous interception and save APIs | SchedulerBeforeChange / SchedulerBeforeChange[] | — |
| selectable | Enable multi-selection | boolean | false |
| selected-keys | Controlled selected event IDs; supports v-model:selected-keys; shared events count once | string[] | `undefined` |
| default-selected-keys | Initial uncontrolled selected event IDs; shared events count once | string[] | `[]` |
| history | Enable undo and redo for accepted changes | boolean | false |
| history-limit | Positive history capacity; invalid values fall back to 20 | number | 20 |
| before-transaction | Transaction guard; replaces before-change when provided | SchedulerBeforeTransaction / SchedulerBeforeTransaction[] | — |
| working-hours | Weekly working hours; omitted means unrestricted, empty forbids timed events | SchedulerWorkingHours[] | — |
| date-working-hours | Date-specific working-hour overrides | SchedulerDateWorkingHours[] | [] |
| disabled-ranges | Unavailable intervals, optionally scoped to resources | SchedulerDisabledRange[] | [] |
| scale | Controlled resource timeline scale; supports v-model:scale | `'hour' \| 'day'` | `undefined` |
| default-scale | Initial uncontrolled resource timeline scale | `'hour' \| 'day'` | `'day'` |
| virtual-list-props | Enables virtual resource timeline scrolling when provided | SchedulerVirtualListProps | — |
| resource-group-dimensions | Cross-group in dimension order, with at least two distinct dimensions | string[] | [] |
| resource-group-by | Map a resource to a stable group key | (resource: SchedulerResource) => string | — |
| expanded-keys | Controlled expanded group keys; supports v-model:expanded-keys; all groups expand when omitted | string[] | `undefined` |
| default-expanded-keys | Initial uncontrolled expanded group keys; all groups expand when omitted | string[] | `undefined` |

mode is `day | week | month | agenda | resource-day | resource-timeline`. Agenda/resource-timeline navigate by week. Events outside time-grid hours remain visible in month/agenda/timeline.

With controlled model-value, the component proposes data and waits for parent acceptance before changing the UI; it does not move first and roll back after request failure. Input arrays/objects are not mutated. before-change receives detached copies; editing them does not alter the committed proposal.

### Scheduler Events

| Event | Description | Arguments |
| ------------------------ | ---------------------------------------------------------------- | ------------------------------------ |
| update:model-value | Proposes a new main value | SchedulerEvent[] |
| update:resourceFilters | Combined resource-filter changes; controlled mode waits for parent acceptance | SchedulerResourceFilters |
| update:resourceDimension | Resource row/column display-dimension changes | string |
| update:mode | View changes | SchedulerMode |
| update:zoom | Timeline zoom changes | number |
| rule-warning | Advisory rule issues on an accepted proposal | SchedulerError[] |
| update:date | Navigation-date changes | Date |
| change | Validation/hooks complete; controlled mode has proposed a validated value | value, SchedulerChangeContext |
| change-error | Validation, conflict, save or stale-proposal errors | error, SchedulerChange |
| event-click | Activate an event with a copy; stacked events support click/Enter too, while multiselection does not activate | SchedulerEvent |
| cell-click | Click an empty time slot | SchedulerCell |
| range-change | Initial and actual visible-date-range changes | SchedulerRange |
| resource-error | Resource search/display resolution fails without changing schedule data | error, SchedulerResourceErrorContext |
| editor-request | Only with editable=false: request external creation or viewing/editing | SchedulerEditorRequest |
| update:selectedKeys | Selected event IDs changed | string[] |
| update:scale | Timeline scale changed | 'hour' / 'day' |
| update:expandedKeys | Expanded group keys changed | string[] |
| transaction | Proposed value after a single or batch transaction succeeds | SchedulerEvent[], SchedulerTransactionContext |
| transaction-error | Transaction failed; preserves the original cause | unknown, SchedulerTransactionContext |

### Scheduler Slots

| Slot | Prop | Description |
| ----------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| event | { event } | Event-button content |
| sidebar | { startDrag, cancelDrag, disabled, unscheduled } | Replace the entire sidebar, e.g. with a resource tree/task pool; hidden when show-sidebar=false |
| sidebar-extra | { startDrag, cancelDrag, disabled } | Content above the default sidebar; startDrag(template: SchedulerEventTemplate, event: DragEvent). Hidden when show-sidebar=false |
| resource-header | { resource?, resources?, date } | Resource or date header |
| toolbar | { date, mode, navigate, create } | Replace the toolbar; navigate(-1/1) changes range, create() follows toolbar creation |
| column-background | { date, resource? } | Background for day/week/resource-day columns without intercepting pointers; useful for soft warnings/heatmaps |
| toolbar-extra | { date, mode } | Toolbar extension |
| editor | SchedulerEditorSlotProps | Custom drawer content: action, event, error, errorMessage, save, remove, duplicate, close, readonly, pending |
| empty | — | Empty state |

### Scheduler Methods

| Method | Description |
| ---------------------------------- | -------------------------------------------------------------- |
| `change(change): Promise<boolean>` | Execute create/update/remove/move/resize with all validation/hooks |
| duplicateEvent(id: string) | Open a separately copied draft or request custom creation; returns boolean without automatically saving |
| goToDate(date: Date) | Navigate to a date; respects controlled models |
| `transaction(changes): Promise<boolean>` | Execute a batch with the same rules and transaction guard |
| `undo(): Promise<boolean>` / `redo(): Promise<boolean>` | Undo / redo accepted history through the transaction guard |
| `canUndo` / `canRedo` | Read-only state indicating whether undo / redo is available |

## Types

```ts
import type {
  SchedulerProps,
  SchedulerInstance,
  SchedulerMode,
  SchedulerEvent,
  SchedulerResource,
  SchedulerChange,
  SchedulerChangeContext,
  SchedulerBeforeChange,
  SchedulerBeforeTransaction,
  SchedulerTransactionContext,
  SchedulerEventTemplate,
  SchedulerRequestResources,
  SchedulerResolveResources,
  SchedulerResourcePage,
  SchedulerResourceQuery,
  SchedulerResourceErrorContext,
  SchedulerEditorRequest,
  SchedulerEditorAction,
  SchedulerEditorSlotProps,
} from "@cedar-design/ui-vue";

interface SchedulerEvent {
  id: string;
  title: string;
  start?: Date | string | number;
  end?: Date | string | number;
  allDay?: boolean;
  resourceIds?: string[];
  resourceDetails?: Record<string, { units?: number; role?: string }>;
  milestone?: boolean;
  layoutGroupId?: string;
  description?: string;
  color?: string;
  accentColor?: string;
  backgroundColor?: string;
  backgroundPattern?: "solid" | "diagonal-stripes" | "dots" | "crosshatch";
  metadata?: Record<string, unknown>;
  readonly?: boolean;
  resizable?: boolean; // false disables time-grid resizing while preserving moving/viewing
}
type SchedulerEventTemplate = Pick<
  SchedulerEvent,
  | "title"
  | "description"
  | "color"
  | "accentColor"
  | "backgroundColor"
  | "backgroundPattern"
  | "metadata"
  | "resourceIds"
> & {
  duration?: number; // positive minutes; defaults to default-duration or step
};
interface SchedulerResource {
  id: string;
  dimensionId?: string;
  label: string;
  color?: string;
  disabled?: boolean;
  capacity?: number; // nonnegative safe integer; omission leaves concurrent event counts unlimited
}
interface SchedulerResourceQuery {
  dimensionId?: string;
  query: string;
  cursor?: string;
  signal: AbortSignal;
}
interface SchedulerResourcePage {
  items: SchedulerResource[];
  nextCursor?: string;
}
type SchedulerRequestResources = (
  query: SchedulerResourceQuery,
) => SchedulerResourcePage | Promise<SchedulerResourcePage>;
type SchedulerResolveResources = (
  ids: string[],
  context: { signal: AbortSignal },
) => SchedulerResource[] | Promise<SchedulerResource[]>;
type SchedulerResourceErrorContext =
  | { type: "search"; query: string; cursor?: string; dimensionId?: string }
  | { type: "resolve"; ids: string[] };

type SchedulerEditorAction = "create" | "edit";
type SchedulerEditorRequest = { event: SchedulerEvent; readonly: boolean } & (
  | { action: "create"; source: "toolbar" | "cell" | "drop" | "duplicate" }
  | { action: "edit"; source: "event" }
);
interface SchedulerEditorSlotProps {
  action: SchedulerEditorAction;
  event: SchedulerEvent;
  error?: SchedulerError;
  errorMessage?: string;
  readonly: boolean;
  pending: boolean;
  save: (event?: SchedulerEvent) => void;
  remove: () => void;
  duplicate: () => void;
  close: () => void;
}
```

Every event id must be unique. Omitting both start/end means unscheduled; otherwise end must follow start, except timed milestones requiring start=end. All intervals are `[start, end)`, so adjacent intervals do not conflict. allDay uses `YYYY-MM-DD` strings with an exclusive end, e.g. September 9–10 for a one-day event.

Display currently uses the runtime's local zone; timed events should use ISO instants. Arbitrary IANA display zones are not promised. Cross-zone RRULE, ICS and version synchronization come from separate adapters; business code must connect real external accounts. Configure virtual resource rows with virtual-list-props. See examples for local undo and range-based remote loading. Pointer drag supports moving/resizing; Escape cancels. Keyboard/touch users can also schedule/assign through the editor. Disabled resource options prevent new assignments/drops while existing associations may remain or be removed.


`before-transaction` takes precedence over `before-change` for both single and batch transactions. A batch with only `before-change` is rejected with `transaction-hook-required` to avoid partial persistence. Guard arrays run in order; false cancels and void allows. Data and rules are checked again after waiting; stale proposals are not committed. The first argument of `change-error` and `transaction-error` preserves the original cause (`unknown`); editor display uses a normalized `SchedulerError`. In controlled mode history records only changes accepted by the parent. Promises returned by ordinary events do not participate in transactions.

`useSchedulerDataSource` is exported from the root. It accepts `requestEvents`, range, resource IDs, `enabled`, cache duration and capacity, and returns `events`, `loading`, `error`, `loadedRange`, `refresh`, `cancel`, and `invalidate`. It is an independent data source: `loading` is returned state, not a Scheduler prop. Requests use AbortSignal and stale results are discarded.

## Independent core

Use the Vue- and DOM-independent scheduling utilities through `@cedar-design/ui-vue/scheduler/core`:

```ts
import {
  applySchedulerChange,
  getSchedulerConflicts,
  layoutSchedulerEvents,
} from "@cedar-design/ui-vue/scheduler/core";
```

Other date/timeline utilities are exported from this entry too. The core computes and applies immutable changes; it does not handle networking, authorization or database transactions.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-scheduler-axis-cell-width` | `96px` | `min-width` |
| `--c-scheduler-background` | `var(--c-color-bg-2)` | `background` |
| `--c-scheduler-border-color` | `var(--c-color-border)` | `border`, `border-bottom`, `border-inline-end`, `border-inline-start`, `border-top` |
| `--c-scheduler-border-width` | `1px` | `border`, `border-bottom`, `border-inline-end`, `border-inline-start`, `border-top`, `height`, `width` |
| `--c-scheduler-color` | `var(--c-color-text-1)` | `color` |
| `--c-scheduler-column-min-width` | `120px` | `grid-template-columns`, `min-width` |
| `--c-scheduler-dependency-width` | `2px` | `stroke-width` |
| `--c-scheduler-dragging-opacity` | `0.3` | `opacity` |
| `--c-scheduler-editor-width` | `440px` | Component styling |
| `--c-scheduler-event-accent-color` | `var(--c-scheduler-event-color)` | `border-inline-start` |
| `--c-scheduler-event-accent-width` | `3px` | `border-inline-start` |
| `--c-scheduler-event-background` | `var(--c-color-primary-light-1)` | `background`, `background-color`, `background-image` |
| `--c-scheduler-event-background-image` | `linear-gradient(var(--c-scheduler-event-background), var(--c-scheduler-event-background))` | `background-image` |
| `--c-scheduler-event-color` | `rgb(var(--c-primary-6))` | `background-image`, `border-inline-start`, `color` |
| `--c-scheduler-event-font-size` | `12px` | `font-size` |
| `--c-scheduler-event-gap` | `2px` | `gap`, `height`, `margin-bottom`, `padding`, `top` |
| `--c-scheduler-event-min-height` | `20px` | `min-height`, `min-width` |
| `--c-scheduler-event-padding` | `4px` | `padding` |
| `--c-scheduler-event-radius` | `4px` | `border-radius` |
| `--c-scheduler-focus-color` | `var(--c-sys-color-action-primary)` | `outline` |
| `--c-scheduler-focus-width` | `2px` | `outline`, `outline-offset` |
| `--c-scheduler-font-size` | `14px` | `font-size` |
| `--c-scheduler-gap` | `12px` | `gap`, `margin-bottom`, `padding` |
| `--c-scheduler-ghost-opacity` | `0.96` | `opacity` |
| `--c-scheduler-ghost-padding` | `8px 12px` | `padding` |
| `--c-scheduler-ghost-z-index` | `2000` | `z-index` |
| `--c-scheduler-gutter-width` | `64px` | `grid-template-columns`, `min-width` |
| `--c-scheduler-header-z-index` | `4` | `z-index` |
| `--c-scheduler-heading-height` | `44px` | `min-height` |
| `--c-scheduler-lane-height` | `38px` | `height`, `top` |
| `--c-scheduler-line-height` | `1.5` | `line-height` |
| `--c-scheduler-max-height` | `720px` | `max-height` |
| `--c-scheduler-min-height` | `560px` | `min-height` |
| `--c-scheduler-mode-width` | `150px` | `width` |
| `--c-scheduler-month-cell-height` | `124px` | `height`, `min-height` |
| `--c-scheduler-muted-color` | `var(--c-color-text-3)` | `color` |
| `--c-scheduler-now-color` | `var(--c-sys-color-content-danger)` | `border-top`, `color` |
| `--c-scheduler-now-width` | `2px` | `border-top` |
| `--c-scheduler-now-z-index` | `3` | `z-index` |
| `--c-scheduler-padding` | `16px` | `margin-bottom`, `padding` |
| `--c-scheduler-preview-duration` | `0ms` | `transition` |
| `--c-scheduler-preview-opacity` | `0.65` | `opacity` |
| `--c-scheduler-preview-shadow` | `0 4px 16px rgba(0, 0, 0, 0.15)` | `box-shadow` |
| `--c-scheduler-preview-z-index` | `3` | `z-index` |
| `--c-scheduler-radius` | `8px` | `border-radius` |
| `--c-scheduler-resize-height` | `6px` | `height`, `width` |
| `--c-scheduler-resource-width` | `150px` | `grid-template-columns`, `min-width`, `width` |
| `--c-scheduler-resource-z-index` | `2` | `z-index` |
| `--c-scheduler-selected-background` | `var(--c-color-primary-light-1)` | `background` |
| `--c-scheduler-sidebar-width` | `220px` | `width` |
| `--c-scheduler-slot-height` | `36px` | `height` |
| `--c-scheduler-stack-focus-step` | `1` | `z-index` |
| `--c-scheduler-subtle-background` | `var(--c-color-fill-1)` | `background` |
| `--c-scheduler-timeline-min-width` | `1000px` | `min-width` |
| `--c-scheduler-today-background` | `var(--c-color-primary-light-1)` | `background` |
| `--c-scheduler-today-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-scheduler-unavailable-background` | `var(--c-color-fill-2)` | `background` |
| `--c-scheduler-virtual-height` | `480px` | Component styling |
| `--c-scheduler-weekday-count` | `7` | `grid-template-columns` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-scheduler-background: var(--c-color-bg-2);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
