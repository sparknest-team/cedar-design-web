---
lang: en-US
permalink: /en/components/time-range-picker/
---

# Time Range Picker

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `:default-value="['09:00:00', '18:00:00']"`.

<demo src="./__demos__/picker/basic.vue"></demo>

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

<demo src="./__demos__/picker/format.vue"></demo>

### Use12Hours

- `format`: Controls the displayed format.

<demo src="./__demos__/picker/use12Hours.vue"></demo>

## Selection rules and interaction

### Disabled Parts

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `format` | Display format | Bounds, Panel Behavior |
| `disable-confirm` | Skip confirmation | No Confirm, Panel Behavior |
| `step` | Hour/minute/second steps | Step |
| `show-next-day` | Show next day when end precedes start, disabling endpoint exchange on confirmation | Show Next Day |
| `hide-disabled-options` | Hide disabled time options | Panel Behavior |
<!-- demo-config-notes:end -->


Preview configuration: `:default-value="['09:00:00', '18:00:00']"`, `:disabled-hours="() => [1, 2, 4, 14]"`, `:disabled-minutes="() => [1, 2, 3, 4, 14, 15, 16, 20, 50]"`, `:disabled-seconds="() => [1, 2, 3, 4, 5, 6, 7, 10, 14]"`.

<demo src="./__demos__/picker/disabled-parts.vue"></demo>

### Step

- `step`: Controls the allowed increment.

<demo src="./__demos__/picker/step.vue"></demo>

### Bounds

- `format`: Controls the displayed format.
- `min`: Sets the lower bound.
- `max`: Sets the upper bound.

<demo src="./__demos__/bounds.vue"></demo>

### No Confirm

Preview configuration: `disable-confirm`, `:default-value="['09:00:00', '18:00:00']"`.

<demo src="./__demos__/picker/no-confirm.vue"></demo>

### Show Next Day

Preview configuration: `:default-value="['22:00:00', '06:00:00']"`, `show-next-day`.

<demo src="./__demos__/picker/show-next-day.vue"></demo>

### Panel Behavior

- `format`: Controls the displayed format.
- `readonly`: Displays the current value without allowing edits.

<demo src="./__demos__/panel-behavior.vue"></demo>

## Reading direction

Range values remain `[start, end]`; direction changes preserve endpoint order, drafts and overnight semantics. Panels and time columns follow reading order, with visual Left/Right focus movement across endpoint columns. Cedar Up/Down moves focus and Enter/Space selects; Maple retains wheel selection with Up/Down. Existing confirmation settings control submission. Popovers inherit their source direction.

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
| `model-value` | Bound value | `(string \| number \| Date)[]` | `-` |
| `format` | Display format | `string` | `-` |
| `use12-hours` | 12-hour clock | `boolean` | `false` |
| `hide-disabled-options` | Hide disabled time options | `boolean` | `false` |
| `show-next-day` | Show next day when end precedes start, disabling endpoint exchange on confirmation | `boolean` | `false` |
| `disable-confirm` | Skip confirmation | `boolean` | `false` |
| `disabled` | Disable interaction | `boolean` | `false` |
| `step` | Hour/minute/second steps | `object` | `-` |
