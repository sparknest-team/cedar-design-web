---
lang: en-US
permalink: /en/components/date-picker/
---

# Date Picker

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `default-value`: Default value

<demo src="./__demos__/basic.vue"></demo>

## Date views and presentation

### Mode

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `type` | Panel type | Mode, Month Labels, Locale Isolation |
| `disable-confirm` | Commit immediately | Month Labels, Responsive Panels |
| `day-start-of-week` | First weekday, calendar only; integer 0–6 | Locale Isolation |
| `show-time` | Include time selection | Responsive Panels |
<!-- demo-config-notes:end -->


Preview configuration: `type="week"`, `type="month"`, `type="year"`, `type="quarter"`.

<demo src="./__demos__/mode.vue"></demo>

### Month Labels

- `picker-value`: The date displayed in the default panel
- `abbreviation`: Whether to enable abbreviation

<demo src="./__demos__/month-labels.vue"></demo>

### Locale Isolation

- `picker-value`: The date displayed in the default panel
- `day-start-of-week`: The first day of the week starts on the day of the week, 0-Sunday, 1-Monday, and so on.

<demo src="./__demos__/locale-isolation.vue"></demo>

### Responsive Panels

- `show-time`: Whether to increase time selection
- `shortcuts`: Quick selection of preset time range
- `shortcuts-position`: The position of the preset range on the panel, which is placed at the bottom by default, and the side is generally used for scenes with a large number of preset times

<demo src="./__demos__/responsive-panels.vue"></demo>

## Time and selection rules

### Show Time

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `show-time` | Include time selection | Show Time, Disabled Parts, Time Presentation |
| `format` | Display format | Show Time, Time Presentation |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | Current Range, Time Presentation |
| `default-value` | Uncontrolled initial value, read once | Show Time |
| `disabled-date` | Return true to disable a date | Disabled Parts |
| `disabled-time` | Disabled times for the current date and endpoint | Disabled Parts |
<!-- demo-config-notes:end -->


- `show-time`: Whether to increase time selection
- `default-value`: Default value
- `format`: Display the format of the date, refer to [String Parsing Format](#string-parsing-format)

<demo src="./__demos__/show-time.vue"></demo>

### Disabled Parts

- `disabled-date`: Unselectable date
- `show-time`: Whether to increase time selection
- `disabled-time`: Unselectable time

<demo src="./__demos__/disabled-parts.vue"></demo>

### Current Range

- `value-format`: The format of the value, valid for `value` `defaultValue` `pickerValue` `defaultPickerValue` and the return value in the event, supports setting as timestamp, Date and string (refer to [String parsing format](#string-parsing-format) ). If not specified, it will be formatted as a string, in the same format as `format`.
- `default-picker-value`: Date displayed on the panel
- `show-now-button`: Whether to display the now button when showTime

<demo src="./__demos__/current-range.vue"></demo>

### Time Presentation

- `model-value`: Value
- `show-time`: Whether to increase time selection
- `format`: Display the format of the date, refer to [String Parsing Format](#string-parsing-format)
- `value-format`: The format of the value, valid for `value` `defaultValue` `pickerValue` `defaultPickerValue` and the return value in the event, supports setting as timestamp, Date and string (refer to [String parsing format](#string-parsing-format) ). If not specified, it will be formatted as a string, in the same format as `format`.

<demo src="./__demos__/time-presentation.vue"></demo>

## Shortcuts and customization

### Short Cuts

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `disable-confirm` | Commit immediately | Panel Tools, Entry Boundary |
| `show-time` | Include time selection | Short Cuts |
| `day-start-of-week` | First weekday, calendar only; integer 0–6 | Entry Boundary |
<!-- demo-config-notes:end -->


- `shortcuts`: Quick selection of preset time range
- `show-time`: Whether to increase time selection

<demo src="./__demos__/short-cuts.vue"></demo>

### Footer

Preview configuration: `showTime`.

<demo src="./__demos__/footer.vue"></demo>

### Panel Tools

- `picker-value`: The date displayed in the default panel
- `shortcuts`: Quick selection of preset time range

<demo src="./__demos__/panel-tools.vue"></demo>

### Entry Boundary

- `min`: Sets the lower bound.
- `max`: Sets the upper bound.
- `day-start-of-week`: The first day of the week starts on the day of the week, 0-Sunday, 1-Monday, and so on.

<demo src="./__demos__/entry-boundary.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Calendar dates, months and years follow reading order; navigation icons mirror, while date values keep their meaning. In paged grids, Left/Right moves focus visually, Up/Down moves one row, and Home/End moves to the row boundary, skipping disabled items. Focus navigation does not select; Enter/Space keeps the existing selection behavior. Navigation is bounded by the displayed grid. Explicit `shortcuts-position="left|right"` remains physical; `bottom` stays below. Field popovers inherit their source direction.

## API

### Props

Pure panels do not accept field/popup props such as open/default-open, popup-container, placement, trigger-props, placeholder, variant or clearable. Configure popups through Date/DateRange popup-props, and typing through input-editable. disable-confirm alone controls confirmation tools; show-confirm-btn is removed.

| Arguments | Description | Type | Default |
| ------------------- | ------------------------------- | ------------------------------------------ | ------- |
| `model-value` | Bound value | `Date \| string \| number` | `-` |
| `type` | Panel type | `date \| week \| month \| year \| quarter` | `date` |
| `format` | Display format | `string \| Function` | `-` |
| `day-start-of-week` | First weekday, calendar only; integer 0–6 | `DateWeekStart` | `0` |
| `readonly` | Readonly; does not change selection | `boolean` | `false` |
| `time-picker-props` | Local time-panel display options | `Partial<TimePickerProps>` | `-` |
| `show-time` | Include time selection | `boolean` | `false` |
| `disabled` | Disable interaction | `boolean` | `false` |
| `disabled-date` | Return true to disable a date | `Function` | `-` |

Desktop calendar capabilities, including shortcuts, footer and cell slots, remain in a separate presentation implementation.

### Shared date-family contract

| Arguments | Description | Type | Default |
| ----------------- | ------------------------------------------------------- | ------------------------------------------------ | ------- |
| `default-value` | Uncontrolled initial value, read once | DateValue / DateValue[] | — |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | string | Follows type |
| `min` / `max` | Inclusive bounds; string bounds use value-format | DateValue | — |
| `disabled-time` | Disabled times for the current date and endpoint | (date: Date, side: DateSide) => DateDisabledTime | — |
| `disable-confirm` | Commit immediately | boolean | true |

`DateValue = Date | string | number`. Clearing a single value produces undefined; clearing a range produces [].
The date argument of `disabledDate(date, side)` and `disabledTime(date, side)` is always a Date; side is start/end.
Time callbacks return numeric lists from `disabledHours()`, `disabledMinutes(hour)` and `disabledSeconds(hour, minute)`.
Invalid dates and incomplete/reversed ranges cannot be committed. Confirmation revalidates dynamic disabling rules. Locked range endpoints cannot be cleared or changed.
Nested panel props configure presentation only; they must not override top-level model-value, format, bounds, disabling rules or control events.

### Events

| Event | Description | Arguments |
| -------------------- | ----------------------- | --------------------------------- |
| `update:model-value` | Request a model update | value |
| `select` | Select a draft; does not imply submission | value, date(s), formatted text(s) |
| `change` | Committed value changes | value, date(s), formatted text(s) |
| `confirm` | Confirm valid selection; does not use ok | value, date(s), formatted text(s) |

Set `:disable-confirm="false"` to show confirmation tools. The `actions` slot provides `{ confirm, disabled }`; custom `actions` must still call confirm to validate.
