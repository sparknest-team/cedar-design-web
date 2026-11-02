---
lang: en-US
permalink: /en/components/date/
---

# Date

Floating date panels use the visual viewport height so the full calendar is visible when space permits. Short windows scroll content while keeping actions visible. Override `--c-date-picker-popover-max-height` to adjust the limit (default `100dvh - 32px`).

A date field with a trigger. Use DatePicker for a standalone panel.

## String models and time zones

format controls display; value-format controls the model and events. Use YYYY-MM-DD for a date string or YYYY-MM for a month string. MM-DD has no year and parsing uses the current year, so retain a full date for cross-year ordering or explicit leap-year rules.

Omitting time-zone preserves browser-local behavior. With an IANA time zone, Date and timestamps represent instants while strings represent local civil times in that zone. Invalid DST times are rejected; newly entered repeated times resolve to the first occurrence. Untouched Date/timestamp range endpoints preserve their exact instant and hidden precision. Maple-only scroll/line views do not change Cedar panel defaults.

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

| Configuration  | Purpose                                                                | Related examples                                      |
| -------------- | ---------------------------------------------------------------------- | ----------------------------------------------------- |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | Appearance configuration comparison, Locale Isolation |
| `type`         | Type                                                                   | Type, Locale Isolation                                |
| `size`         | Size                                                                   | Control Sizes                                         |
| `variant`      | Field appearance                                                       | Control Sizes                                         |
| `placeholder`  | Placeholder                                                            | Control Sizes                                         |
| `clearable`    | Show the clear action                                                  | Type                                                  |

<!-- demo-config-notes:end -->

Choose a dimension to compare all its values side by side while keeping other settings and content identical. Change the other settings to inspect combinations; input specimens share one model.

<demo src="./__demos__/appearance-lab.vue"></demo>

### Control Sizes

<demo src="../field-decorator/__demos__/control-sizes.vue"></demo>

### Type

<demo src="./__demos__/type.vue"></demo>

### Month Labels

<demo src="./picker/__demos__/month-labels.vue"></demo>

### Locale Isolation

<demo src="./picker/__demos__/locale-isolation.vue"></demo>

## Time and selection rules

### Show Time

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration  | Purpose                                                                | Related examples |
| -------------- | ---------------------------------------------------------------------- | ---------------- |
| `show-time`    | Include time selection                                                 | Show Time        |
| `format`       | Display format                                                         | Show Time        |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | Show Time        |
| `clearable`    | Show the clear action                                                  | Show Time        |

<!-- demo-config-notes:end -->

<demo src="./__demos__/show-time.vue"></demo>

### Time Presentation

<demo src="./picker/__demos__/time-presentation.vue"></demo>

## Value model and text input

### Value Formats

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration       | Purpose                                                                | Related examples                         |
| ------------------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| `format`            | Display format                                                         | Value Formats, String Values, Text Entry |
| `value-format`      | Model and event value format: a date format string, Date, or timestamp | Value Formats, String Values             |
| `type`              | Type                                                                   | String Values, Period Text               |
| `date-picker-props` | Panel presentation options                                             | Period Text                              |

<!-- demo-config-notes:end -->

<demo src="./__demos__/value-formats.vue"></demo>

### String Values

<demo src="./__demos__/en-US/string-values.vue"></demo>

### Period Text

<demo src="./picker/__demos__/period-text.vue"></demo>

### Text Entry

<demo src="./picker/__demos__/text-entry.vue"></demo>

## Interaction and field configuration

### Api Review

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration       | Purpose                                                                | Related examples                    |
| ------------------- | ---------------------------------------------------------------------- | ----------------------------------- |
| `disabled`          | Disable interaction                                                    | Api Review, Field Protocol          |
| `open`              | Controlled popup visibility                                            | Rejected Close, Passthrough Options |
| `date-picker-props` | Panel presentation options                                             | Field Panel Tools, Entry Boundary   |
| `placeholder`       | Placeholder                                                            | Field Protocol, Entry Boundary      |
| `value-format`      | Model and event value format: a date format string, Date, or timestamp | Api Review                          |
| `readonly`          | Read-only interaction                                                  | Api Review                          |

<!-- demo-config-notes:end -->

</details>

<demo src="./__demos__/state-lab.vue"></demo>

### Rejected Close

<demo src="./__demos__/rejected-close.vue"></demo>

### Field Panel Tools

<demo src="./picker/__demos__/field-panel-tools.vue"></demo>

### Field Protocol

<demo src="./__demos__/field-protocol.vue"></demo>

### Entry Boundary

<demo src="./picker/__demos__/entry-boundary.vue"></demo>

### Passthrough Options

<demo src="./__demos__/passthrough-options.vue"></demo>

### Props

| Arguments             | Description                                                                                                                      | Type                                       | Default         |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------- |
| `open-trigger-target` | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | `'field' \| 'icon'`                        | `'field'`       |
| `model-value`         | Bound value                                                                                                                      | `Date \| string \| number`                 | `-`             |
| `type`                | Date precision                                                                                                                   | `date \| week \| month \| year \| quarter` | `date`          |
| `open`                | Controlled popup visibility                                                                                                      | `boolean`                                  | `-`             |
| `clearable`           | Show the clear action                                                                                                            | `boolean`                                  | `true`          |
| `disabled`            | Disable interaction                                                                                                              | `boolean`                                  | `false`         |
| `readonly`            | Read-only interaction                                                                                                            | `boolean`                                  | `false`         |
| `size`                | Component size                                                                                                                   | `xs \| sm \| md \| lg \| xl`               | `-`             |
| `variant`             | Field appearance                                                                                                                 | `filled \| outline \| standard`            | `filled`        |
| `placeholder`         | Placeholder                                                                                                                      | `string`                                   | `-`             |
| `disabled-date`       | Return true to disable a date                                                                                                    | `Function`                                 | `-`             |
| `format`              | Display format                                                                                                                   | `string \| Function`                       | Depends on type |
| `show-time`           | Include time selection                                                                                                           | `boolean`                                  | `false`         |
| `date-picker-props`   | Panel presentation options                                                                                                       | `DatePickerOptions`                        | `{}`            |

#### Copying and editing

With open-trigger-target="icon", use the input area to edit or copy and the suffix button to open. Existing text remains copyable when editing or search is disabled.

<demo src="./__demos__/open-trigger-target.en-US.vue"></demo>

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom line); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Calendar dates, months and years follow reading order; navigation icons mirror, while date values keep their meaning. In paged grids, Left/Right moves focus visually, Up/Down moves one row, and Home/End moves to the row boundary, skipping disabled items. Focus navigation does not select; Enter/Space keeps the existing selection behavior. Navigation is bounded by the displayed grid. Explicit `shortcuts-position="left|right"` remains physical; `bottom` stays below. Field popovers inherit their source direction.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Props

| Arguments             | Description                                                                                                                      | Type                                       | Default        |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | -------------- |
| `open-trigger-target` | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | `'field' \| 'icon'`                        | `'field'`      |
| `model-value`         | Bound value                                                                                                                      | `Date \| string \| number`                 | `-`            |
| `type`                | Date precision                                                                                                                   | `date \| week \| month \| year \| quarter` | `date`         |
| `open`                | Controlled popup visibility                                                                                                      | `boolean`                                  | `-`            |
| `clearable`           | Show the clear action                                                                                                            | `boolean`                                  | `true`         |
| `disabled`            | Disable interaction                                                                                                              | `boolean`                                  | `false`        |
| `readonly`            | Read-only interaction                                                                                                            | `boolean`                                  | `false`        |
| `size`                | Size                                                                                                                             | `xs \| sm \| md \| lg \| xl`               | `-`            |
| `variant`             | Field appearance                                                                                                                 | `filled \| outline \| standard`            | `filled`       |
| `placeholder`         | Placeholder                                                                                                                      | `string`                                   | `-`            |
| `disabled-date`       | Return true to disable a date                                                                                                    | `Function`                                 | `-`            |
| `format`              | Display format                                                                                                                   | `string \| Function`                       | Follows `type` |
| `show-time`           | Include time selection                                                                                                           | `boolean`                                  | `false`        |
| `date-picker-props`   | Panel presentation options                                                                                                       | `DatePickerOptions`                        | `{}`           |

### Shared date-family contract

| Arguments         | Description                                                                                                                                                                                                                                             | Type                                               | Default      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------ |
| `default-value`   | Uncontrolled initial value, read once                                                                                                                                                                                                                   | DateValue / DateValue[]                            | —            |
| `value-format`    | Model and event value format: a date format string, Date, or timestamp                                                                                                                                                                                  | string                                             | Follows type |
| `min` / `max`     | Inclusive bounds; string bounds use value-format                                                                                                                                                                                                        | DateValue                                          | —            |
| `disabled-time`   | Disabled times for the current date and endpoint                                                                                                                                                                                                        | (date: Date, side: DateSide) => DateDisabledTime   | —            |
| `disable-confirm` | Commit immediately                                                                                                                                                                                                                                      | boolean                                            | false        |
| `default-open`    | Uncontrolled initial open state                                                                                                                                                                                                                         | boolean                                            | false        |
| `popup-props`     | Optional field-popup presentation settings. Placement defaults to bottom-start and is positioned automatically by the underlying Trigger; the preferred side can be overridden. No top-level placement prop; field state and rules cannot be overridden | object                                             | {}           |
| `popup-container` | Portal target; the top-level value wins, including false for inline rendering                                                                                                                                                                           | string / HTMLElement / (() => HTMLElement) / false | —            |

`DateValue = Date | string | number`. Clearing a single value produces undefined; clearing a range produces [].
The date argument of `disabledDate(date, side)` and `disabledTime(date, side)` is always a Date; side is start/end.
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

## Explicit time zones

`timeZone` accepts IANA names such as `Asia/Shanghai`. Date objects and millisecond timestamps represent instants; strings represent local time in the target zone. Display, typed input, min/max, shortcuts and disabling rules use the same protocol; event Date objects retain the actual instant. Omitting `timeZone` preserves local-zone behavior. Nonexistent daylight-saving times and invalid zones cannot be committed; repeated times use the first occurrence. Maple scroll / line are mobile calendar presentations; desktop retains its existing panel.

## Configuring the cleared value

`empty-value` / `emptyValue` sets the model value produced by clearing. It accepts a value in the component model type or a zero-argument factory. Omission preserves the existing default; use `() => undefined` to distinguish omission from returning undefined. Arrays are shallow-copied on every clear; selected items that cannot be cleared remain. It does not redefine emptiness, alter Form reset defaults or treat 0/false as universally empty.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

### Placement semantics and configuration

The Date field prefers bottom-start below its input. Override the preferred side through popupProps.placement only when needed; the underlying Trigger positions it, not Popup or Popover. DatePicker is a standalone date panel with no input anchor; placement in the legacy date/picker directory is not a current public DatePicker prop.
