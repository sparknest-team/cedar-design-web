---
lang: en-US
permalink: /en/components/date-range-picker/
---

# Date Range Picker

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `:default-value="['2019-08-01', '2020-06-01']"`.

<demo src="./__demos__/picker/basic.vue"></demo>

## Date views and presentation

### Mode

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `type` | Panel type | Mode, Responsive Panels |
| `disable-confirm` | Commit immediately | Responsive Panels |
| `show-time` | Include time selection | Responsive Panels |
<!-- demo-config-notes:end -->


Preview configuration: `type="week"`, `type="month"`, `type="year"`, `type="quarter"`.

<demo src="./__demos__/picker/mode.vue"></demo>

### Responsive Panels

Preview configuration: `aria-label="独立面板快捷位置"`, `:options="positions"`, `variant="button"`, `size="sm"`.

<demo src="../date/picker/__demos__/responsive-panels.vue"></demo>

## Time and selection rules

### Disabled Parts

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `disabled-date` | Return true to disable a date | Disabled Parts |
| `show-time` | Include time selection | Show Time |
| `default-value` | Uncontrolled initial value, read once | Show Time |
| `disable-confirm` | Commit immediately | Endpoint Lock |
| `disabled` | Disable interaction | Endpoint Lock |
<!-- demo-config-notes:end -->


Preview configuration: `:disabled-date="(current) => dayjs(current).day() === 0"`.

<demo src="./__demos__/picker/disabled-parts.vue"></demo>

### Show Time

Preview configuration: `show-time`, `:default-value="['2019-08-01 09:00:00', '2019-08-02 18:00:00']"`.

<demo src="./__demos__/picker/show-time.vue"></demo>

### Endpoint Lock

- `disabled`: Prevents user interaction.

<demo src="./__demos__/picker/endpoint-lock.vue"></demo>

## Shortcuts and customization

### Entry Boundary

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `day-start-of-week` | First weekday, calendar only; integer 0–6 | Entry Boundary |
| `disable-confirm` | Commit immediately | Entry Boundary |
| `disabled-date` | Return true to disable a date | Entry Boundary |
<!-- demo-config-notes:end -->


- `min`: Sets the lower bound.
- `max`: Sets the upper bound.

<demo src="./__demos__/entry-boundary.vue"></demo>

## Reading direction

Range values remain `[start, end]` across direction changes; switching direction neither swaps endpoints nor commits drafts. Range ribbons and boundary corners follow reading order. Paged calendar grids use visual Left/Right focus movement and chronological rows. Maple endpoint editing and continuous range highlighting are separate presentations. Explicit shortcut positions `left/right` remain physical, and popovers inherit their source direction.

## API

### Props

Pure panels do not accept field/popup props such as open/default-open, popup-container, placement, trigger-props, placeholder, variant or clearable. Configure popups through Date/DateRange popup-props, and typing through input-editable. disable-confirm alone controls confirmation tools; show-confirm-btn is removed.

| Arguments | Description | Type | Default |
| ------------------- | ------------------------------- | ------------------------------------------ | ------- |
| `model-value` | Bound value | `(Date \| string \| number)[]` | `-` |
| `type` | Panel type | `date \| week \| month \| year \| quarter` | `date` |
| `format` | Display format | `string` | `-` |
| `day-start-of-week` | First weekday, calendar only; integer 0–6 | `DateWeekStart` | `0` |
| `readonly` | Readonly; does not change selection | `boolean` | `false` |
| `time-picker-props` | Local time-panel display options | `Partial<TimePickerProps>` | `-` |
| `show-time` | Include time selection | `boolean` | `false` |
| `disabled` | Disable interaction | `boolean \| boolean[]` | `-` |
| `disabled-date` | Return true to disable a date | `Function` | `-` |

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

## Public entries and types

Root/date-range entries export DateRangePicker, DateRangePickerProps, DateRangePickerInstance, DateRangePickerType, DateRangePickerOptions and DateRangePickerEmits. Install the panel independently with app.use or use DateRange.Picker. Options allows presentation only, excluding models, formats, bounds and disabling rules. No independent date-picker/date-range-picker npm subpaths exist.

Both support shortcuts/shortcuts-position, picker-value/default-picker-value, preview-shortcut, abbreviation and exchange-time. Mobile presentation, multiple/range, touch gestures and panel appearance are real platform differences; missing capabilities are not filled with empty APIs.

## Shortcuts and viewport

Uses the same independently copied shortcut/viewport controller as DatePicker. Range values/picker-value contain two dates. Shortcuts cannot overwrite locked endpoints. See [Shortcuts and calendar viewport](/en/components/date-picker/#shortcuts-and-calendar-viewport).

### Interactive time exchange

exchange-time defaults to true: reversed interactive selection swaps complete date/time endpoints. false swaps dates only, retaining each position's time. Reordering revalidates endpoint rules, disabled times and locks. Model assignments, typed input and shortcuts are not reordered automatically. show-current controls current-date highlighting only; range panels have no show-now-button. See [Current date and range policies](/en/components/date-picker/#current-date-and-range-policies).

### Locale and nested calendar options

Date labels, titles and actions use each library's global Locale/Provider. Cedar removes component-level `locale` without dictionary overrides/aliases. Locale changes neither select nor commit dates.

### Embedded time and wheel presentation

Embedded time columns share the date columns’ draft transaction. Changing either endpoint's time still requires outer confirmation by default, preserving the selection without early model writeback.

Embedded time columns and date columns share one draft transaction. By default, changing either endpoint time requires the outer confirmation; the edit is preserved without committing early.

`time-picker-props` uses `DateTimePickerOptions`: `use12Hours`, `step`, `hideDisabledOptions`, `class`, `style`. It configures time presentation only. The date owner controls values, formats/second precision, constraints and confirmation. `step` samples displayed options without silently adjusting external values. Unknown options/listeners are not forwarded.

### Per-instance date locale isolation

Date owners read local global Locale/Provider. Each instance controls week start through `day-start-of-week`. They do not change host Dayjs default locale/base language settings; date metadata is registered under library namespaces. Neither instances nor sources are shared across libraries.

`value-format` is a stable English date protocol, including month-name tokens. `format` display/typed text uses the UI language. Locale changes do not rewrite models or invalidate English-month models. Numeric protocols, Date objects and timestamps remain unchanged. Chinese core/Maple locale data is integrated; other formats prefer registered Dayjs locale data and safely fall back to English when unavailable.

Week numbers/comparisons no longer depend on global week-start settings; equal week numbers across years are not mistaken for the same week. Mounting/updating/unmounting instances with different week starts is isolated.
