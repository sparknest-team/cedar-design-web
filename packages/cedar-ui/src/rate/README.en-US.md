---
lang: en-US
permalink: /en/components/rate/
---

# Rate

Keyboard and pointer rating selection.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Readonly

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                                                        | Related examples |
| --------------- | -------------------------------------------------------------- | ---------------- |
| `default-value` | Initial uncontrolled value; subsequent changes do not reset it | Readonly         |
| `readonly`      | Focusable but not editable; inherits Form when omitted         | Readonly         |
| `color`         | Active color or increasing per-icon threshold color map        | Color            |

<!-- demo-config-notes:end -->

- `readonly`: Displays the current value without allowing edits.

<demo src="./__demos__/readonly.vue"></demo>

### Color

- `color`: Overrides the color.

<demo src="./__demos__/color.vue"></demo>

## Content and presentation

### Sizes And Symbols

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                                                           | Related examples                                   |
| --------------- | ----------------------------------------------------------------- | -------------------------------------------------- |
| `default-value` | Initial uncontrolled value; subsequent changes do not reset it    | Sizes And Symbols, Half, Rating count and clearing |
| `allow-half`    | Enable half-point steps                                           | Sizes And Symbols, Half                            |
| `grading`       | Fixed five-face rating; overrides slots and icon props            | Sizes And Symbols, Grading                         |
| `size`          | Icon dimension: number/numeric string in px, otherwise CSS length | Sizes And Symbols                                  |
| `aria-label`    | Accessible business label                                         | Sizes And Symbols                                  |
| `gap`           | Icon spacing: number/numeric string in px, otherwise CSS length   | Sizes And Symbols                                  |

<!-- demo-config-notes:end -->

- `size`: Controls the component size.

<demo src="./__demos__/sizes-and-symbols.vue"></demo>

### Half

<demo src="./__demos__/half.vue"></demo>

### Rating count and clearing

Compare rating totals and clearing the current selection, separately from half steps, keyboards and controlled values.

<demo src="./__demos__/value-rules-comparison.vue"></demo>

### Grading

<demo src="./__demos__/grading.vue"></demo>

## Customization and slots

### Character

<demo src="./__demos__/character.vue"></demo>

## Interaction and control

### State Lab

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                                                                  | Related examples    |
| --------------- | ------------------------------------------------------------------------ | ------------------- |
| `disabled`      | Disable interaction; inherits Form when omitted                          | State Lab, Keyboard |
| `readonly`      | Focusable but not editable; inherits Form when omitted                   | State Lab, Keyboard |
| `allow-half`    | Enable half-point steps                                                  | Keyboard            |
| `clearable`     | Click the current score again to clear; keyboard boundaries do not clear | Keyboard            |
| `aria-label`    | Accessible business label                                                | Keyboard            |
| `default-value` | Initial uncontrolled value; subsequent changes do not reset it           | Keyboard            |

<!-- demo-config-notes:end -->

<demo src="./__demos__/state-lab.vue"></demo>

### Keyboard

- `readonly`: Displays the current value without allowing edits.
- `disabled`: Prevents user interaction.

<demo src="./__demos__/keyboard.vue"></demo>

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Props

| Prop           | Description                                                              | Type                             | Default       |
| -------------- | ------------------------------------------------------------------------ | -------------------------------- | ------------- |
| model-value    | Controlled value, including zero; external updates emit no events        | number                           | undefined     |
| default-value  | Initial uncontrolled value; subsequent changes do not reset it           | number                           | 0             |
| count          | Positive finite number, rounded down; invalid values fall back to 5      | number \| string                 | 5             |
| allow-half     | Enable half-point steps                                                  | boolean                          | false         |
| clearable      | Click the current score again to clear; keyboard boundaries do not clear | boolean                          | false         |
| grading        | Fixed five-face rating; overrides slots and icon props                   | boolean                          | false         |
| disabled       | Disable interaction; inherits Form when omitted                          | boolean                          | undefined     |
| readonly       | Focusable but not editable; inherits Form when omitted                   | boolean                          | undefined     |
| aria-label     | Accessible business label                                                | string                           | undefined     |
| size           | Icon dimension: number/numeric string in px, otherwise CSS length        | number \| string                 | Style default |
| gap            | Icon spacing: number/numeric string in px, otherwise CSS length          | number \| string                 | Style default |
| color          | Active color or increasing per-icon threshold color map                  | string \| Record<string, string> | undefined     |
| empty-color    | Inactive color                                                           | string                           | undefined     |
| disabled-color | Disabled color, overriding active/inactive colors                        | string                           | undefined     |
| icon           | Checked icon                                                             | string \| Component              | Filled star   |
| half-icon      | Half icon                                                                | string \| Component              | Half star     |
| empty-icon     | Unchecked icon                                                           | string \| Component              | Empty star    |
| ripple         | Click ripple                                                             | boolean                          | true          |

size/gap do not accept xs/sm/md/lg/xl presets. Omitted, invalid or nonpositive values retain style defaults. CSS var/calc/min/max/clamp lengths are supported. Ratings normalize to 0–count in steps of 1 or 0.5. Nonfinite ratings display 0 without rewriting the external value.

### Events

| Event              | Arguments     | Description                                                   |
| ------------------ | ------------- | ------------------------------------------------------------- |
| update:model-value | value: number | User produces a new value                                     |
| change             | value: number | Confirmed new value; no duplicate for equal values            |
| hover-change       | value: number | Hover preview; resets to zero on leave/blur/disabled/readonly |

### Slots

| Slot      | Arguments                | Description                                                   |
| --------- | ------------------------ | ------------------------------------------------------------- |
| character | { index, value, active } | index starts at 0; value starts at 1. Replaces rating symbols |

Precedence: grading > character > icon/half-icon/empty-icon > default icon. String icons require global registration; component values do not.

### Methods

focus() focuses the rating; blur() removes focus. Readonly remains focusable, while disabled leaves the Tab sequence. Arrow keys adjust, Home clears and End selects the maximum. Keyboard events from interactive children and Alt/Ctrl/Meta combinations are not intercepted. Touch and mouse share half-selection/clearing rules.

### Type definitions

Exports RateProps, RateColor, RateIcon, RateInstance, RateExpose, RateEmits and RateCharacterSlotProps.

### Style variables

| Token                                 | Default                                        |
| ------------------------------------- | ---------------------------------------------- |
| `--c-rate-disabled-color`             | `var(--c-sys-color-content-disabled)`          |
| `--c-rate-error-color`                | `var(--c-sys-color-content-danger)`            |
| `--c-rate-active-scale`               | `1.2`                                          |
| `--c-rate-focus-color`                | `var(--c-sys-color-content-brand)`             |
| `--c-rate-focus-width`                | `2px`                                          |
| `--c-rate-focus-offset`               | `2px`                                          |
| `--c-rate-size`                       | `var(--c-font-size-title-3)`                   |
| `--c-rate-gap`                        | `var(--c-spacing-4)`                           |
| `--c-rate-min-height`                 | `var(--c-size-md)`                             |
| `--c-rate-action-padding`             | `0px`                                          |
| `--c-rate-empty-color`                | `var(--c-color-fill-3)`                        |
| `--c-rate-active-color`               | `rgb(var(--c-gold-6))`                         |
| `--c-rate-transition-duration`        | `var(--c-transition-duration-2)`               |
| `--c-rate-scale-duration`             | `var(--c-transition-duration-4)`               |
| `--c-rate-transition-timing-function` | `var(--c-transition-timing-function-standard)` |

Public token suffixes/meanings match across platforms. Cedar retains gold stars and compact spacing; Maple retains primary-color stars and touch padding. Defaults are recorded in the theme contract. Sources are maintained independently without a shared runtime.

`transition-duration` controls hover/color transitions, `scale-duration` controls selection animation, and `transition-timing-function` controls easing. Reduced motion disables these animations. `size` and `gap` props override the corresponding tokens for a single instance.

### Form field presentation and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-`direct` modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

## Configuring the cleared value

`empty-value` / `emptyValue` sets the model value produced by clearing. It accepts a value in the component model type or a zero-argument factory. Omission preserves the existing default; use `() => undefined` to distinguish omission from returning undefined. Arrays are shallow-copied on every clear; selected items that cannot be cleared remain. It does not redefine emptiness, alter Form reset defaults or treat 0/false as universally empty.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.
