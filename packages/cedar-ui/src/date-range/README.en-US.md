---
lang: en-US
permalink: /en/components/date-range/
---

# DateRange

A date range field. The bound model is an array; use DateRangePicker for a standalone panel.

## String range models

Set format="MM-DD" and value-format="MM-DD" to get ['09-10', '10-10'] directly. These values have no year; parsing uses the current year and cannot preserve cross-year ordering. For real bookings store YYYY-MM-DD and map the payload in application code. format only changes display, while value-format changes the model and events.

Without time-zone the browser-local time zone remains in effect. An explicit IANA time zone changes the civil-time interpretation of strings; Date/timestamp values preserve their instant. Editing one endpoint does not change an untouched endpoint's repeated-hour occurrence or milliseconds.

## Basic examples

### Basic

<demo src="./__demos__/basic.vue"></demo>

### Interaction state comparison

Toggle disabled, read-only and error states, then interact with the same instance. Recovery controls remain outside the target; error appearance alone does not validate data.

<details>
<summary>Configuration details and limits</summary>

#### State Lab

## Appearance and date presentation

### Appearance configuration comparison

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration  | Purpose                                                                | Related examples                    |
| -------------- | ---------------------------------------------------------------------- | ----------------------------------- |
| `clearable`    | Show the clear action                                                  | Mode, Separator                     |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | Appearance configuration comparison |
| `type`         | Mode                                                                   | Mode                                |
| `separator`    | Range separator                                                        | Separator                           |
| `placeholder`  | Placeholder                                                            | Separator                           |

<!-- demo-config-notes:end -->

Choose a dimension to compare all its values side by side while keeping other settings and content identical. Change the other settings to inspect combinations; input specimens share one model.

<demo src="./__demos__/appearance-lab.vue"></demo>

### Mode

<demo src="./__demos__/mode.vue"></demo>

### Separator

<demo src="./__demos__/separator.vue"></demo>

## Time and range rules

### Show Time

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                                                                | Related examples      |
| --------------- | ---------------------------------------------------------------------- | --------------------- |
| `format`        | Display format                                                         | Show Time, Boundaries |
| `show-time`     | Include time selection                                                 | Show Time             |
| `clearable`     | Show the clear action                                                  | Show Time             |
| `value-format`  | Model and event value format: a date format string, Date, or timestamp | Boundaries            |
| `disabled-date` | Return true to disable a date                                          | Boundaries            |

<!-- demo-config-notes:end -->

<demo src="./__demos__/show-time.vue"></demo>

### Boundaries

<demo src="./__demos__/boundaries.vue"></demo>

## Value model and text input

### String Values

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration  | Purpose                                                                | Related examples          |
| -------------- | ---------------------------------------------------------------------- | ------------------------- |
| `format`       | Display format                                                         | String Values, Text Entry |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | String Values             |
| `disabled`     | Disable interaction                                                    | Text Entry                |

<!-- demo-config-notes:end -->

<demo src="./__demos__/en-US/string-values.vue"></demo>

### Text Entry

<demo src="../date/picker/__demos__/text-entry.vue"></demo>

## Interaction and field configuration

### Api Review

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration             | Purpose                                                                      | Related examples                    |
| ------------------------- | ---------------------------------------------------------------------------- | ----------------------------------- |
| `open`                    | Controlled popup visibility                                                  | Rejected Close, Passthrough Options |
| `date-range-picker-props` | Panel presentation options                                                   | Field Panel Tools, Entry Boundary   |
| `value-format`            | Model and event value format: a date format string, Date, or timestamp       | Api Review                          |
| `readonly`                | Read-only interaction                                                        | Api Review                          |
| `format`                  | Display format                                                               | Field Panel Tools                   |
| `popup-props`             | Trigger presentation options; cannot override owned visibility or date rules | Passthrough Options                 |

<!-- demo-config-notes:end -->

</details>

<demo src="./__demos__/state-lab.vue"></demo>

### Rejected Close

<demo src="./__demos__/rejected-close.vue"></demo>

### Field Panel Tools

<demo src="./__demos__/field-panel-tools.vue"></demo>

### Entry Boundary

<demo src="./__demos__/entry-boundary.vue"></demo>

### Passthrough Options

<demo src="./__demos__/passthrough-options.vue"></demo>

### Props

| Arguments                 | Description                                                                                                                      | Type                                       | Default   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------- |
| `open-trigger-target`     | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | `'field' \| 'icon'`                        | `'field'` |
| `model-value`             | Bound value                                                                                                                      | `(Date \| string \| number)[]`             | `-`       |
| `type`                    | Date precision                                                                                                                   | `date \| week \| month \| year \| quarter` | `date`    |
| `open`                    | Controlled popup visibility                                                                                                      | `boolean`                                  | `-`       |
| `clearable`               | Show the clear action                                                                                                            | `boolean`                                  | `true`    |
| `disabled`                | Disable interaction                                                                                                              | `boolean \| boolean[]`                     | `-`       |
| `readonly`                | Read-only interaction                                                                                                            | `boolean`                                  | `false`   |
| `size`                    | Component size                                                                                                                   | `xs \| sm \| md \| lg \| xl`               | `-`       |
| `variant`                 | Field appearance                                                                                                                 | `filled \| outline \| standard`            | `filled`  |
| `separator`               | Range separator                                                                                                                  | `string`                                   | `-`       |
| `placeholder`             | Placeholder                                                                                                                      | `string[]`                                 | `-`       |
| `disabled-date`           | Return true to disable a date                                                                                                    | `Function`                                 | `-`       |
| `format`                  | Display format                                                                                                                   | `string`                                   | `-`       |
| `show-time`               | Include time selection                                                                                                           | `boolean`                                  | `false`   |
| `date-range-picker-props` | Panel presentation options                                                                                                       | `DateRangePickerOptions`                   | `{}`      |

#### Copying and editing

With open-trigger-target="icon", use the input area to edit or copy and the suffix button to open. Existing text remains copyable when editing or search is disabled.

<demo src="./__demos__/open-trigger-target.en-US.vue"></demo>

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom line); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

## Reading direction

Range values remain `[start, end]` across direction changes; switching direction neither swaps endpoints nor commits drafts. Range ribbons and boundary corners follow reading order. Paged calendar grids use visual Left/Right focus movement and chronological rows. Maple endpoint editing and continuous range highlighting are separate presentations. Explicit shortcut positions `left/right` remain physical, and popovers inherit their source direction.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Props

| Arguments                 | Description                                                                                                                      | Type                                       | Default   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------- |
| `open-trigger-target`     | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | `'field' \| 'icon'`                        | `'field'` |
| `model-value`             | Bound value                                                                                                                      | `(Date \| string \| number)[]`             | `-`       |
| `type`                    | Date precision                                                                                                                   | `date \| week \| month \| year \| quarter` | `date`    |
| `open`                    | Controlled popup visibility                                                                                                      | `boolean`                                  | `-`       |
| `clearable`               | Show the clear action                                                                                                            | `boolean`                                  | `true`    |
| `disabled`                | Disable interaction                                                                                                              | `boolean \| boolean[]`                     | `-`       |
| `readonly`                | Read-only interaction                                                                                                            | `boolean`                                  | `false`   |
| `size`                    | Size                                                                                                                             | `xs \| sm \| md \| lg \| xl`               | `-`       |
| `variant`                 | Field appearance                                                                                                                 | `filled \| outline \| standard`            | `filled`  |
| `separator`               | Range separator                                                                                                                  | `string`                                   | `-`       |
| `placeholder`             | Placeholder                                                                                                                      | `string[]`                                 | `-`       |
| `disabled-date`           | Return true to disable a date                                                                                                    | `Function`                                 | `-`       |
| `format`                  | Display format                                                                                                                   | `string`                                   | `-`       |
| `show-time`               | Include time selection                                                                                                           | `boolean`                                  | `false`   |
| `date-range-picker-props` | Panel presentation options                                                                                                       | `DateRangePickerOptions`                   | `{}`      |

### Shared date-family contract

| Arguments         | Description                                                                   | Type                                               | Default      |
| ----------------- | ----------------------------------------------------------------------------- | -------------------------------------------------- | ------------ |
| `default-value`   | Uncontrolled initial value, read once                                         | DateValue / DateValue[]                            | —            |
| `value-format`    | Model and event value format: a date format string, Date, or timestamp        | string                                             | Follows type |
| `min` / `max`     | Inclusive bounds; string bounds use value-format                              | DateValue                                          | —            |
| `disabled-time`   | Disabled times for the current date and endpoint                              | (date: Date, side: DateSide) => DateDisabledTime   | —            |
| `disable-confirm` | Commit immediately                                                            | boolean                                            | false        |
| `default-open`    | Uncontrolled initial open state                                               | boolean                                            | false        |
| `popup-props`     | Trigger presentation options; cannot override owned visibility or date rules  | object                                             | {}           |
| `popup-container` | Portal target; the top-level value wins, including false for inline rendering | string / HTMLElement / (() => HTMLElement) / false | —            |

`DateValue = Date | string | number`. Clearing a single value produces undefined; clearing a range produces [].
The date argument of `disabledDate(date, side)` and `disabledTime(date, side)` is always a Date; side is start/end.

`disabled-date` restricts range endpoints. A range may cross disabled interior values; it is not scanned item by item or truncated automatically. This applies to dates, months and years. Interior disabled values remain gray. Changing pages preserves the selected start and clears hover preview; reverse selection is sorted chronologically.
Time callbacks return numeric lists from `disabledHours()`, `disabledMinutes(hour)` and `disabledSeconds(hour, minute)`.
Invalid dates and incomplete/reversed ranges cannot be committed. Confirmation revalidates dynamic disabling rules. Locked range endpoints cannot be cleared or changed.
Nested panel props configure presentation only; they must not override top-level model-value, format, bounds, disabling rules or control events.

### Events

| Event                         | Description                               | Arguments                         |
| ----------------------------- | ----------------------------------------- | --------------------------------- |
| `update:model-value`          | Request a model update                    | value                             |
| `select`                      | Select a draft; does not imply submission | value, date(s), formatted text(s) |
| `change`                      | Committed value changes                   | value, date(s), formatted text(s) |
| `update:open` / `open-change` | Popup visibility changes                  | open: boolean                     |
| `clear`                       | Clear the selection                       | None                              |
| `focus` / `blur`              | Focus enters or leaves the whole field    | None                              |
| `click`                       | Click the field                           | event                             |

Desktop supports keyboard editing. The default panel edits a draft before confirmation; disable-confirm commits directly. Escape or closing discards the draft. focus(index = 0) focuses a start/end input, and blur() closes the popup.

## Configuring the cleared value

`empty-value` / `emptyValue` sets the model value produced by clearing. It accepts a value in the component model type or a zero-argument factory. Omission preserves the existing default; use `() => undefined` to distinguish omission from returning undefined. Arrays are shallow-copied on every clear; selected items that cannot be cleared remain. It does not redefine emptiness, alter Form reset defaults or treat 0/false as universally empty.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.
