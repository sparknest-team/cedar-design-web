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

Inherits the nearest `dir="ltr|rtl"`. Direction changes neither change the time nor commit drafts. Time columns follow reading order; Left/Right moves focus visually between columns. Cedar Up/Down and Home/End move focus within a column, skipping disabled options; Enter/Space selects. Maple wheels retain their existing Up/Down and Home/End selection behavior. Existing confirmation settings control submission. Popovers inherit their source direction.

## API

The panel owns one draft/confirmation state, reused by its presentation. Examples show the extra slot and valid-confirm count. Confirming the same value again emits confirm without a duplicate change.

### Pure-panel event and slot boundaries

`TimePicker`/`TimeRangePicker` do not manage fields/popups. Pass `open`, `size`, `variant`, clearing and popup configuration to `Time`/`TimeRange`.

- `select(value, date)`: edit the draft.
- `change(value, date)`: valid confirmation with a changed value; updates the model.
- `confirm(value, date)`: every valid confirmation, including unchanged values. `disableConfirm` also emits it on valid selection commits. Disabled, readonly or invalid drafts do not emit it.
- `extra`: additional explanatory content.
- `actions({ confirm, canConfirm, value })`: replace default tools. `value` is the draft; call `confirm()` to commit and disable buttons according to `canConfirm`.

Single-time events carry formatted strings and Date objects; range events carry corresponding arrays. Pure panels no longer emit `open-change`, `update:open` or `clear`.

### Props

| Arguments | Description | Type | Default |
| --- | --- | --- | --- |
| `model-value` | Bound value | `string \| number \| Date` | `-` |
| `format` | Display format | `string` | `-` |
| `use12-hours` | 12-hour clock | `boolean` | `false` |
| `hide-disabled-options` | Hide disabled time options | `boolean` | `false` |
| `disable-confirm` | Skip confirmation | `boolean` | `false` |
| `disabled` | Disable interaction | `boolean` | `false` |
| `step` | Hour/minute/second steps | `object` | `-` |
