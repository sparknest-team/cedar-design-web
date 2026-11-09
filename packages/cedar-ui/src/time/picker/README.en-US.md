---
lang: en-US
permalink: /en/components/time-picker/
---

# Time Picker

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `default-value="09:09:06"`.

<demo src="./__demos__/basic.vue"></demo>

## Format and presentation

### Format

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `format` | Display format | Format, Use12Hours |
| `use12-hours` | 12-hour clock | Use12Hours |
<!-- demo-config-notes:end -->


- `format`: Controls the displayed format.

<demo src="./__demos__/format.vue"></demo>

### Use12Hours

- `format`: Controls the displayed format.

<demo src="./__demos__/use12Hours.vue"></demo>

## Selection rules and interaction

### Disabled Parts

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `format` | Display format | Disabled Parts, Bounds, Panel Behavior |
| `disable-confirm` | Skip confirmation | No Confirm, Panel Behavior |
| `use12-hours` | 12-hour clock | Disabled Parts |
| `step` | Hour/minute/second steps | Step |
| `hide-disabled-options` | Hide disabled time options | Panel Behavior |
<!-- demo-config-notes:end -->


- `format`: Controls the displayed format.

<demo src="./__demos__/disabled-parts.vue"></demo>

### Step

- `step`: Controls the allowed increment.

<demo src="./__demos__/step.vue"></demo>

### Bounds

- `format`: Controls the displayed format.
- `min`: Sets the lower bound.
- `max`: Sets the upper bound.

<demo src="../__demos__/bounds.vue"></demo>

### No Confirm

Preview configuration: `disable-confirm`.

<demo src="./__demos__/no-confirm.vue"></demo>

### Panel Behavior

- `format`: Controls the displayed format.
- `readonly`: Displays the current value without allowing edits.

<demo src="./__demos__/panel-behavior.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"`; direction changes do not modify time or commit drafts. Hour, minute and second columns follow reading order, with Left/Right moving focus visually between columns. Cedar Up/Down and Home/End move focus within the current column, Enter/Space selects, and disabled options are skipped. Maple wheels retain Up/Down and Home/End selection behavior. Existing confirmation configuration determines immediate commits. Popovers inherit source field direction.

## API

The panel owns one draft/confirmation state, reused by its presentation. Examples show the extra slot and valid-confirm count. Confirming the same value again emits confirm without a duplicate change.

### Pure-panel event and slot boundaries

`TimePicker`/`TimeRangePicker` do not manage fields/popups. Pass `open`, `size`, `variant`, clearing and popup configuration to `Time`/`TimeRange`.

- `select(value, date)`: edit the draft.
- `change(value, date)`: valid confirmation with a changed value; updates the model.
- `confirm(value, date)`: every valid confirmation, including unchanged values. `disableConfirm` also emits it on valid selection commits. Disabled, readonly or invalid drafts do not emit it.
- `extra`: additional explanatory content.
- `actions({ confirm, canConfirm, value })`: replace default tools. `value` is the draft; call `confirm()` to commit and disable buttons according to `canConfirm`.

Single-time events carry formatted strings and Date objects; range events carry corresponding arrays. Use field `open-change` and `update:open` to manage the popup, and field `clear` for clearing the value.

### TimePicker Props

| Prop | Description | Type | Default behavior |
| --- | --- | --- | --- |
| `default-value` | Initial uncontrolled value, read only at creation | `TimeValue \| TimeValue[]` | `undefined` |
| `disable-confirm` | Commit a valid selection immediately; fields also request closing | `boolean` | `false` |
| `disabled` | Disable panel selection and confirmation | `boolean` | `false` |
| `disabled-hours` | Return disabled hours in the 0–23 clock | `() => number[]` | `undefined` |
| `disabled-minutes` | Return disabled minutes for the selected hour | `(hour?: number) => number[]` | `undefined` |
| `disabled-seconds` | Return disabled seconds for the selected hour and minute | `(hour?: number, minute?: number) => number[]` | `undefined` |
| `format` | String parsing, display and output format; 12-hour defaults include a | `string` | From use12Hours |
| `hide-disabled-options` | Hide disabled time options; clocks retain tick positions | `boolean` | `false` |
| `max` | Maximum inclusive clock time in HH:mm or HH:mm:ss | `string` | `undefined` |
| `min` | Minimum inclusive clock time in HH:mm or HH:mm:ss | `string` | `undefined` |
| `model-value` | Panel external value, seeding draft and accepting later changes | `TimeValue \| TimeValue[]` | `undefined` |
| `readonly` | Readonly panel without draft changes or confirmation | `boolean` | `false` |
| `show-next-day` | Ranges only: allow an earlier end time as next day without swapping endpoints | `boolean` | `false` |
| `step` | Hour/minute/second steps from midnight; invalid steps fall back to 1 | `TimeStep` | Effective steps are all 1 |
| `type` | Single/range mode of the desktop general panel | `time \| time-range` | `time` |
| `use12-hours` | 12-hour panel; disabled-hour callbacks still use 0–23 | `boolean` | `false` |

### Complete standalone-panel contract

Complete properties, events, slots and instance boundaries match the standalone-panel sections in the main field documentation.

[Complete API](/en/components/time/)

### TimePicker Events

| Event | Arguments |
| --- | --- |
| `update:modelValue` | `TimePickerEmits['update:modelValue']` |
| `select` | `TimePickerEmits['select']` |
| `change` | `TimePickerEmits['change']` |
| `confirm` | `TimePickerEmits['confirm']` |

### TimePicker Slots

| Slot | Prop |
| --- | --- |
| `extra` | `()` |
| `actions` | `{ confirm: () => boolean; canConfirm: boolean; value: TimeValue \| Array<TimeValue \| undefined> \| undefined }` |

Public panel business event types exclude draft-initialize, which is an internal Maple owner bridge. Panels do not accept field beforeCommit or loading properties.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-time-picker-border-color` | `var(--c-color-neutral-3)` | `border`, `border-bottom`, `border-inline-end`, `border-top` |
| `--c-time-picker-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-time-picker-box-shadow` | `var(--c-shadow1-down)` | `box-shadow` |
| `--c-time-picker-cell-bg-active` | `var(--c-color-fill-2)` | `background-color` |
| `--c-time-picker-cell-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-time-picker-cell-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-time-picker-cell-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-time-picker-cell-font-weight-active` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-time-picker-cell-height` | `var(--c-size-6)` | `height`, `line-height` |
| `--c-time-picker-cell-padding-left` | `var(--c-spacing-9)` | `padding-inline-start` |
| `--c-time-picker-cell-spacing` | `var(--c-spacing-2)` | `height`, `padding` |
| `--c-time-picker-cell-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-time-picker-cell-text-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-time-picker-column-height` | `224px` | `height` |
| `--c-time-picker-column-width` | `var(--c-size-16)` | `width` |
| `--c-time-picker-footer-extra-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-time-picker-footer-padding` | `var(--c-spacing-4)` | `padding` |
| `--c-time-picker-popover-body-reserve` | `128px` | `height` |
| `--c-time-picker-popover-column-max-height` | `224px` | `height` |
| `--c-time-picker-popover-gap` | `32px` | `max-width` |
| `--c-time-picker-range-gap` | `var(--c-spacing-6)` | `gap` |
| `--c-time-picker-range-next-day-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-time-picker-range-panel-title-gap` | `var(--c-spacing-3)` | `gap` |
| `--c-time-picker-range-panel-title-line-height` | `22px` | `line-height` |
| `--c-time-picker-range-panel-title-padding-horizontal` | `var(--c-spacing-6)` | `padding` |
| `--c-time-picker-range-panel-title-padding-vertical` | `var(--c-spacing-3)` | `padding` |
| `--c-time-picker-range-wrapper-padding` | `var(--c-spacing-4)` | `padding` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-time-picker-border-color: var(--c-color-neutral-3);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
