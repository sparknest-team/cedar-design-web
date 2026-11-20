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

<demo src="./__demos__/entry-boundary.en-US.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Calendar dates, months and years follow reading order; navigation icons mirror, while date values keep their meaning. In paged grids, Left/Right moves focus visually, Up/Down moves one row, and Home/End moves to the row boundary, skipping disabled items. Focus navigation does not select; Enter/Space keeps the existing selection behavior. Navigation is bounded by the displayed grid. Explicit `shortcuts-position="left|right"` remains physical; `bottom` stays below. Field popovers inherit their source direction.

## API

### DatePicker Props

Pure panels do not accept field/popup props such as open/default-open, popup-container, placement, trigger-props, placeholder, variant or clearable. Configure popups through Date/DateRange popup-props, and typing through input-editable. disable-confirm alone controls confirmation tools; 

| Prop | Description | Type | Default behavior |
| --- | --- | --- | --- |
| `abbreviation` | Use abbreviated month-grid names; false uses full month names | `boolean` | `true` |
| `day-start-of-week` | First day of week for calendars, an integer from 0 to 6 | `DateWeekStart` | `0` |
| `default-picker-value` | Initial calendar viewport, read once; selected values take precedence over the current date | `DateSelection` | `undefined` |
| `default-value` | Initial uncontrolled value, read only at creation | `DateValue` | `undefined` |
| `disable-confirm` | Commit on selection; false retains draft for confirmation | `boolean` | `true` |
| `disabled` | Disable panel selection and commit | `boolean` | `false` |
| `disabled-date` | Return true to disable the date; side is start/end | `(date: Date, side: DateSide) => boolean`<br>`DateSide: 'end' \| 'start'` | `undefined` |
| `disabled-time` | Return disabled hour/minute/second lists for a date and endpoint | `(date: Date, side: DateSide) => DateDisabledTime`<br>`DateSide: 'end' \| 'start'` | `undefined` |
| `empty-value` | Clear output or synchronous factory, independent of emptyValues recognition | `DateValue \| null \| (() => DateValue \| null \| undefined)` | `undefined` |
| `format` | Display/text-input format; a function only formats without reverse text parsing | `string \| ((date: Date) => string)` | From precision/time settings |
| `max` | Inclusive maximum; a supplied invalid boundary is not silently ignored | `DateValue` | `undefined` |
| `min` | Inclusive minimum; a supplied invalid boundary is not silently ignored | `DateValue` | `undefined` |
| `model-value` | External date value; undefined is uncontrolled, null is explicitly empty | `DateValue \| null` | `undefined` |
| `picker-value` | Controlled calendar viewport, separate from selection; range viewports contain two dates | `DateSelection` | `undefined` |
| `preview-shortcut` | Preview shortcuts on hover/focus without committing | `boolean` | `true` |
| `readonly` | Readonly panel without candidate changes or commits | `boolean` | `false` |
| `shortcuts` | Shortcuts with values or on-demand synchronous value factories, optional format/disabled | `DateShortcut[]` | `[]` |
| `shortcuts-position` | Shortcut position | `left \| bottom \| right` | `bottom` |
| `show-current` | Highlight the current date without changing selection or model | `boolean` | `true` |
| `show-now-button` | Show the now action according to the actual panel range capabilities | `boolean` | `true` |
| `show-time` | Enable time precision/selection, with visible precision controlled by format | `boolean` | `false` |
| `time-picker-props` | Presentation options for the Cedar embedded time panel, excluding date model/rules | `DateTimePickerOptions` | `{}` |
| `time-zone` | IANA time zone; an invalid zone does not fall back to a valid selectable value | `string` | System local time zone |
| `type` | Date precision; Cedar includes week/quarter, while Maple supports date/month/year | `date \| month \| year \| week \| quarter` | `date` |
| `value-format` | Serialized model format: Date, timestamp or format tokens, independent of display format | `string` | From precision/time settings |

Desktop calendar capabilities, including shortcuts, footer and cell slots, remain in a separate presentation implementation.

### Shared date-family contract

| Prop | Description | Type | Default |
| ----------------- | ------------------------------------------------------- | ------------------------------------------------ | ------- |
| `default-value` | Uncontrolled initial value, read once | DateValue / DateValue[] | — |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | string | Follows type |
| `min` | Inclusive minimum date; string bounds use value-format | DateValue | — |
| `max` | Inclusive maximum date; string bounds use value-format | DateValue | — |
| `disabled-time` | Disabled times for the current date and endpoint | (date: Date, side: DateSide) => DateDisabledTime<br>`DateSide: 'end' \| 'start'` | — |
| `disable-confirm` | Commit immediately | boolean | true |

`DateValue = Date | string | number`. Clearing a single value produces undefined; clearing a range produces [].
The date argument of `disabledDate(date, side)` and `disabledTime(date, side)` is always a Date; side is start/end.
Time callbacks return numeric lists from `disabledHours()`, `disabledMinutes(hour)` and `disabledSeconds(hour, minute)`.
Invalid dates and incomplete/reversed ranges cannot be committed. Confirmation revalidates dynamic disabling rules. Locked range endpoints cannot be cleared or changed.
Nested panel props configure presentation only; they must not override top-level model-value, format, bounds, disabling rules or control events.

### DatePicker Events

| Event | Arguments |
| --- | --- |
| `update:modelValue` | `DatePickerEmits['update:modelValue']` |
| `change` | `DatePickerEmits['change']` |
| `select` | `DatePickerEmits['select']` |
| `confirm` | `DatePickerEmits['confirm']` |
| `update:pickerValue` | `DatePickerEmits['update:pickerValue']` |
| `picker-value-change` | `DatePickerEmits['picker-value-change']` |
| `select-shortcut` | `DatePickerEmits['select-shortcut']` |

Set `:disable-confirm="false"` to show confirmation tools. The `actions` slot provides `{ confirm, disabled }`; custom `actions` must still call confirm to validate.

### Complete standalone-panel contract

Complete properties, events, slots and instance boundaries match the standalone-panel sections in the main field documentation.

[Complete API](/en/components/date/)

### Action scope

```ts
{ confirm: () => void; disabled: boolean; selectNow: () => void; nowDisabled: boolean }
```

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-date-picker-actions-padding` | `8px 12px` | `padding` |
| `--c-date-picker-body-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-date-picker-body-padding-vertical` | `14px` | `padding` |
| `--c-date-picker-box-shadow` | `var(--c-shadow1-down)` | `box-shadow` |
| `--c-date-picker-btn-confirm-margin-vertical` | `5px` | `margin` |
| `--c-date-picker-cell-bg-disabled` | `var(--c-color-fill-1)` | `background-color` |
| `--c-date-picker-cell-bg-hover-in-range` | `var(--c-color-fill-2)` | `background-color` |
| `--c-date-picker-cell-bg-in-range` | `var(--c-color-primary-light-1)` | `background-color` |
| `--c-date-picker-cell-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-date-picker-cell-font-weight-in-view` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-date-picker-cell-hover-range-boundary-bg` | `var(--c-color-fill-2)` | `background-color` |
| `--c-date-picker-cell-hover-range-boundary-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-date-picker-cell-range-boundary-bg` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-date-picker-cell-range-boundary-text-color` | `var(--c-color-white)` | `color` |
| `--c-date-picker-cell-text-color-in-view` | `var(--c-color-text-1)` | `color` |
| `--c-date-picker-cell-text-color-not-in-view` | `var(--c-color-text-4)` | `color` |
| `--c-date-picker-container-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-date-picker-container-min-height` | `var(--c-size-15)` | `min-height` |
| `--c-date-picker-datetime-popover-width` | `calc(var(--c-date-picker-panel-date-width) + var(--c-date-picker-time-panel-min-width) + 2px)` | `flex`, `width` |
| `--c-date-picker-footer-btn-wrapper-padding-horizontal` | `var(--c-spacing-4)` | `padding` |
| `--c-date-picker-footer-btn-wrapper-padding-vertical` | `3px` | `padding` |
| `--c-date-picker-footer-extra-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-date-picker-footer-extra-padding-horizontal` | `var(--c-spacing-9)` | `padding` |
| `--c-date-picker-footer-extra-padding-vertical` | `var(--c-spacing-4)` | `padding` |
| `--c-date-picker-footer-now-height` | `var(--c-size-9)` | `height`, `line-height` |
| `--c-date-picker-header-label-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-date-picker-header-label-padding` | `var(--c-spacing-1)` | `padding` |
| `--c-date-picker-header-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-date-picker-header-padding-vertical` | `var(--c-spacing-4)` | `padding` |
| `--c-date-picker-header-title-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-date-picker-header-title-line-height` | `var(--c-size-6)` | `line-height` |
| `--c-date-picker-panel-background` | `var(--c-sys-color-surface-overlay)` | `background` |
| `--c-date-picker-panel-border` | `var(--c-color-border-2)` | `border` |
| `--c-date-picker-panel-border-color` | `var(--c-color-neutral-3)` | `border`, `border-bottom`, `border-inline-end`, `border-inline-start`, `border-left`, `border-right`, `border-top` |
| `--c-date-picker-panel-cell-bg-hover` | `var(--c-color-fill-3)` | `background-color` |
| `--c-date-picker-panel-cell-bg-selected` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-date-picker-panel-cell-border-radius` | `var(--c-date-picker-panel-cell-circle-height)` | `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--c-date-picker-panel-cell-boundary-border-radius` | `var(--c-date-picker-panel-cell-circle-height)` | `border-end-end-radius`, `border-end-start-radius`, `border-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--c-date-picker-panel-cell-circle-height` | `var(--c-size-6)` | `border-end-end-radius`, `border-end-start-radius`, `border-radius`, `border-start-end-radius`, `border-start-start-radius`, `height`, `line-height`, `min-width`, `width` |
| `--c-date-picker-panel-cell-padding-vertical` | `var(--c-spacing-2)` | `padding`, `padding-inline-end`, `padding-inline-start` |
| `--c-date-picker-panel-cell-selected-border-radius` | `var(--c-border-radius-circle)` | `border-radius` |
| `--c-date-picker-panel-cell-text-color-hover` | `var(--c-color-text-1)` | `color` |
| `--c-date-picker-panel-cell-text-color-selected` | `var(--c-color-white)` | `color` |
| `--c-date-picker-panel-current-time-dot-color` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-date-picker-panel-date-width` | `265px` | `flex`, `min-width`, `width` |
| `--c-date-picker-panel-label-bg-hover` | `var(--c-color-fill-3)` | `background-color` |
| `--c-date-picker-panel-month-width` | `265px` | `width` |
| `--c-date-picker-panel-preferred-width` | `var(--c-date-picker-popover-width)` | `flex`, `width` |
| `--c-date-picker-panel-quarter-width` | `265px` | `width` |
| `--c-date-picker-panel-radius` | `8px` | `border-radius` |
| `--c-date-picker-panel-time-cell-spacing-horizontal` | `var(--c-spacing-2)` | `padding` |
| `--c-date-picker-panel-time-cell-width` | `var(--c-size-9)` | `width` |
| `--c-date-picker-panel-time-padding` | `var(--c-spacing-3)` | `padding` |
| `--c-date-picker-panel-time-padding-horizontal` | `var(--c-spacing-5)` | `padding-inline-start` |
| `--c-date-picker-panel-week-width` | `298px` | `flex`, `width` |
| `--c-date-picker-panel-year-width` | `265px` | `width` |
| `--c-date-picker-popover-gap` | `32px` | `max-height`, `max-width` |
| `--c-date-picker-popover-max-height` | `calc(100dvh - var(--c-date-picker-popover-gap))` | `max-height` |
| `--c-date-picker-popover-width` | `calc(var(--c-date-picker-panel-date-width) + 2px)` | `flex`, `width` |
| `--c-date-picker-preview-outline` | `1px dashed var(--c-color-primary)` | `outline` |
| `--c-date-picker-range-panel-min-width` | `224px` | `min-width` |
| `--c-date-picker-range-popover-width` | `calc(var(--c-date-picker-panel-date-width) * 2 + 2px)` | `flex`, `width` |
| `--c-date-picker-row-padding-vertical` | `var(--c-spacing-1)` | `padding` |
| `--c-date-picker-shortcuts-active-text-color` | `var(--c-sys-color-action-primary)` | `color` |
| `--c-date-picker-shortcuts-column-width` | `128px` | `flex`, `width` |
| `--c-date-picker-shortcuts-inline-item-margin-right` | `var(--c-spacing-5)` | `margin-inline` |
| `--c-date-picker-shortcuts-inline-item-margin-vertical` | `5px` | `margin-block` |
| `--c-date-picker-shortcuts-item-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-date-picker-shortcuts-item-padding-vertical` | `var(--c-spacing-3)` | `padding` |
| `--c-date-picker-shortcuts-margin-top` | `var(--c-spacing-5)` | `margin` |
| `--c-date-picker-shortcuts-max-height` | `300px` | `max-height` |
| `--c-date-picker-shortcuts-placement-item-margin-vertical` | `5px` | `margin` |
| `--c-date-picker-shortcuts-placement-padding-horizontal` | `var(--c-spacing-4)` | `padding` |
| `--c-date-picker-shortcuts-placement-padding-vertical` | `5px` | `padding` |
| `--c-date-picker-shortcuts-width` | `106px` | `width` |
| `--c-date-picker-switch-icon-bg` | `var(--c-color-bg-popup)` | `background-color` |
| `--c-date-picker-switch-icon-bg-hover` | `var(--c-color-fill-3)` | `background-color` |
| `--c-date-picker-switch-icon-border-radius` | `var(--c-border-radius-circle)` | `border-radius` |
| `--c-date-picker-switch-icon-color` | `var(--c-color-text-2)` | `color` |
| `--c-date-picker-switch-icon-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-date-picker-switch-icon-margin` | `var(--c-spacing-1)` | `margin-left`, `margin-right` |
| `--c-date-picker-switch-icon-size` | `var(--c-size-6)` | `height`, `width` |
| `--c-date-picker-time-panel-min-width` | `160px` | `flex`, `min-width`, `width` |
| `--c-date-picker-timepicker-height` | `276px` | `height` |
| `--c-date-picker-timepicker-title-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-date-picker-timepicker-title-height` | `var(--c-size-10)` | `height`, `line-height` |
| `--c-date-picker-today-dot-offset` | `var(--c-spacing-1)` | `bottom`, `margin-left` |
| `--c-date-picker-today-dot-size` | `var(--c-spacing-2)` | `height`, `width` |
| `--c-date-picker-transition-duration-1` | `var(--c-transition-duration-1)` | `transition` |
| `--c-date-picker-transition-timing-function-linear` | `var(--c-transition-timing-function-linear)` | `transition` |
| `--c-date-picker-view-tab-pane-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-date-picker-view-tab-pane-text-color-active` | `var(--c-color-text-1)` | `color` |
| `--c-date-picker-view-tab-pane-text-color-inactive` | `var(--c-color-text-4)` | `color` |
| `--c-date-picker-view-tab-pane-text-icon-spacing` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-date-picker-view-tabs-height` | `50px` | `height`, `line-height` |
| `--c-date-picker-week-list-item-color` | `var(--c-color-text-3)` | `color` |
| `--c-date-picker-week-list-item-height` | `var(--c-size-8)` | `height`, `line-height` |
| `--c-date-picker-week-popover-width` | `calc(var(--c-date-picker-panel-week-width) + 2px)` | `flex`, `width` |
| `--c-date-picker-week-range-popover-width` | `calc(var(--c-date-picker-panel-week-width) * 2 + 2px)` | `flex`, `width` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-date-picker-actions-padding: 8px 12px;
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
