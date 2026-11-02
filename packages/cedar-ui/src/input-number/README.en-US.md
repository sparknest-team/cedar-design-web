---
lang: en-US
permalink: /en/components/input-number/
---

# InputNumber

Numeric editing with bounds and formatting.

## Reading direction

The numeric input inherits its source `dir`; step buttons follow reading order. Values, precision and vertical keys retain their meaning: ArrowUp increases and ArrowDown decreases. Neither values nor display strings are reversed.

## Basic examples

### Basic usage

<demo src="./__demos__/field-basic.vue"></demo>

## Appearance and layout

### Appearance Lab

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                                 | Related examples             |
| ------------- | --------------------------------------- | ---------------------------- |
| `size`        | All five sizes implemented; inheritable | Control Sizes, Field Options |
| `variant`     | Field variant; inherits InputGroup      | Control Sizes, Field Options |
| `placeholder` | Placeholder                             | Control Sizes, Field Options |
| `min`         | Minimum                                 | Appearance Lab               |
| `max`         | Maximum                                 | Appearance Lab               |
| `mode`        | Step-button layout                      | Field Modes                  |

<!-- demo-config-notes:end -->

- `min`: Sets the lower bound.
- `max`: Sets the upper bound.

<demo src="./__demos__/appearance-lab.vue"></demo>

### Control Sizes

- `size`: Controls the component size.
- `variant`: Selects the visual variant.

<demo src="../field-decorator/__demos__/control-sizes.vue"></demo>

### Field Modes

<demo src="./__demos__/field-modes.vue"></demo>

### Field Options

- `size`: Controls the component size.
- `variant`: Selects the visual variant.

<demo src="./__demos__/field-options.vue"></demo>

## Numeric input and formatting

### Quantity Controls

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                                             | Related examples                                   |
| ------------- | --------------------------------------------------- | -------------------------------------------------- |
| `clearable`   | Allow clearing an editable field                    | Quantity Controls, Format Slots, Number Boundaries |
| `mode`        | Step-button layout                                  | Quantity Controls, Format Slots                    |
| `min`         | Minimum                                             | Quantity Controls, Number Boundaries               |
| `max`         | Maximum                                             | Quantity Controls, Number Boundaries               |
| `step`        | Positive finite step; scientific notation supported | Quantity Controls, Number Boundaries               |
| `formatter`   | Display formatting only; does not change the number | Format Slots, Number Boundaries                    |

<!-- demo-config-notes:end -->

- `min`: Sets the lower bound.
- `max`: Sets the upper bound.
- `step`: Controls the allowed increment.
- `disabled`: Prevents user interaction.

<demo src="./__demos__/quantity-controls.vue"></demo>

### Format Slots

<demo src="./__demos__/format-slots.vue"></demo>

### Number Boundaries

- `step`: Controls the allowed increment.
- `max`: Sets the upper bound.
- `min`: Sets the lower bound.

<demo src="./__demos__/number-boundaries.vue"></demo>

### Empty markers and valid zero

Configure empty-values and empty-value when an API uses -1 for missing data. Initially the input is blank while the model remains -1. Set it to 0 to see a valid zero; clearing returns -1. A second field clears to a valid 0, showing that clear output need not mean missing data.

<demo src="./__demos__/en-US/empty-value.vue"></demo>

## Interaction and forms

### State Lab

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                                       | Related examples                    |
| ------------- | --------------------------------------------- | ----------------------------------- |
| `disabled`    | Disabled; inherits when omitted               | State Lab, Form Inheritance         |
| `readonly`    | Read-only; allows focus/copy but no mutations | State Lab, Form Inheritance         |
| `clearable`   | Allow clearing an editable field              | Controlled Events, Form Inheritance |
| `min`         | Minimum                                       | State Lab                           |
| `max`         | Maximum                                       | State Lab                           |
| `error`       | Error state; inherits FormItem when omitted   | State Lab                           |

<!-- demo-config-notes:end -->

- `min`: Sets the lower bound.
- `max`: Sets the upper bound.

<demo src="./__demos__/state-lab.vue"></demo>

### Controlled Events

<demo src="./__demos__/controlled-events.vue"></demo>

### Form Inheritance

- `disabled`: Prevents user interaction.
- `readonly`: Displays the current value without allowing edits.
- `size`: Controls the component size.

<demo src="./__demos__/form-inheritance.vue"></demo>

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom line); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Clear output

`empty-value` / `emptyValue` sets the model value produced by clearing. It accepts a value in the component model type or a zero-argument factory. Omission preserves the existing default; use `() => undefined` to distinguish omission from returning undefined. Arrays are shallow-copied on every clear; selected items that cannot be cleared remain. It does not redefine emptiness, alter Form reset defaults or treat 0/false as universally empty.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

### Props

| Prop          | Description                                                      | Type                            | Default                    |
| ------------- | ---------------------------------------------------------------- | ------------------------------- | -------------------------- |
| model-value   | Controlled number; undefined denotes an empty/uncontrolled value | `number`                        | —                          |
| default-value | Initial uncontrolled value                                       | `number`                        | —                          |
| mode          | Step-button layout                                               | `embed \| button \| input`      | `embed`                    |
| precision     | Decimal places (0–100), at least the step precision              | `number`                        | —                          |
| step          | Positive finite step; scientific notation supported              | `number`                        | `1`                        |
| disabled      | Disabled; inherits when omitted                                  | `boolean`                       | Inherited, otherwise false |
| error         | Error state; inherits FormItem when omitted                      | `boolean`                       | Inherited, otherwise false |
| max           | Maximum                                                          | `number`                        | `Infinity`                 |
| min           | Minimum                                                          | `number`                        | `-Infinity`                |
| formatter     | Display formatting only; does not change the number              | `(text: string) => string`      | —                          |
| parser        | Parse the original text once per edit                            | `(text: string) => string`      | —                          |
| placeholder   | Placeholder                                                      | `string`                        | —                          |
| size          | All five sizes implemented; inheritable                          | `xs \| sm \| md \| lg \| xl`    | Inherited, otherwise md    |
| variant       | Field variant; inherits InputGroup                               | `outline \| filled \| standard` | `outline`                  |
| hint          | Floating hint; inherits InputGroup / FieldDecorator              | `boolean`                       | Library default            |
| clearable     | Allow clearing an editable field                                 | `boolean`                       | `false`                    |
| model-event   | Model update timing; change only reports commits                 | `change \| input`               | `change`                   |
| readonly      | Read-only; allows focus/copy but no mutations                    | `boolean`                       | Inherited, otherwise false |
| input-attrs   | Additional native input attributes                               | `Record<string, unknown>`       | —                          |

### Events

| Event              | Arguments                                                  | Description                                                      |
| ------------------ | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| input              | `(value: number \| undefined, text: string, event: Event)` | Parsed value and display text while editing                      |
| update:model-value | `(value: number \| undefined)`                             | Proposed model update                                            |
| change             | `(value: number \| undefined, event: Event)`               | Commit, step or clear                                            |
| clear              | `(event: Event)`                                           | Explicit clear                                                   |
| focus              | `(event: FocusEvent)`                                      | Focus                                                            |
| blur               | `(event: FocusEvent)`                                      | Blur                                                             |
| keydown            | `(event: KeyboardEvent)`                                   | Native keyboard event; preventDefault intercepts default actions |

### Slots

| Slot             | Arguments                            | Description         |
| ---------------- | ------------------------------------ | ------------------- |
| prefix / suffix  | —                                    | Inside the field    |
| prepend / append | —                                    | Outside the field   |
| plus / minus     | —                                    | Step-button icons   |
| clear-icon       | `{ clear: (event?: Event) => void }` | Custom clear button |

### Methods

| Method / property | Type                               | Description                       |
| ----------------- | ---------------------------------- | --------------------------------- |
| focus             | `(options?: FocusOptions) => void` | Focus; ineffective while disabled |
| blur              | `() => void`                       | Blur                              |
| select            | `() => void`                       | Select all text                   |
| inputRef          | `HTMLInputElement \| undefined`    | Native input element              |

## Type definitions / Types

```ts
import type {
  InputNumberProps,
  InputNumberInstance,
  InputNumberMode,
  InputNumberModelEvent,
  InputNumberSize,
  InputNumberVariant,
  InputNumberFormatter,
  InputNumberParser,
} from "@cedar-design/ui";
```

## Style variables

| Token                                              | Default                                |
| -------------------------------------------------- | -------------------------------------- |
| `--c-input-number-step-button-width`               | `var(--c-sys-control-height-md)`       |
| `--c-input-number-step-button-color`               | `var(--c-sys-color-content-secondary)` |
| `--c-input-number-step-button-disabled-color`      | `var(--c-sys-color-content-disabled)`  |
| `--c-input-number-step-button-border-color`        | `var(--c-sys-color-border-subtle)`     |
| `--c-input-number-step-button-background`          | `var(--c-sys-color-surface-muted)`     |
| `--c-input-number-step-button-hover-background`    | `var(--c-sys-color-state-hover)`       |
| `--c-input-number-step-button-active-background`   | `var(--c-sys-color-state-selected)`    |
| `--c-input-number-step-button-icon-size`           | `14px`                                 |
| `--c-input-number-step-button-transition-duration` | `0.2s`                                 |
| `--c-input-number-addon-background`                | `var(--c-sys-color-surface-muted)`     |
| `--c-input-number-addon-color`                     | `var(--c-sys-color-content-primary)`   |
| `--c-input-number-addon-border-color`              | `var(--c-sys-color-border-default)`    |
| `--c-input-number-border-width`                    | `1px`                                  |
| `--c-input-number-border-radius`                   | `var(--c-field-border-radius)`         |
| `--c-input-number-size-xs-step-button-width`       | `var(--c-sys-control-height-xs)`       |
| `--c-input-number-size-sm-step-button-width`       | `var(--c-sys-control-height-sm)`       |
| `--c-input-number-size-md-step-button-width`       | `var(--c-sys-control-height-md)`       |
| `--c-input-number-size-lg-step-button-width`       | `var(--c-sys-control-height-lg)`       |
| `--c-input-number-size-xl-step-button-width`       | `var(--c-sys-control-height-xl)`       |

Old `--c-field-number-*` tokens are removed in favor of `--c-input-number-*`, without aliases. Shared field appearance still uses FieldDecorator `--c-field-*` tokens.

### Form field presentation and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-`direct` modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

`--c-field-caret-color` sets the shared caret color, defaulting to `currentColor`. `--c-input-number-caret-color` overrides this component and defaults to `var(--c-field-caret-color)`.

An explicit beforeCommit wait uses the existing loadingMode indicator and native aria-busy. Manual loading remains independent and does not implicitly make the input readonly; the beforeCommit guard owns its existing input lock. Returned change/step notification Promises do not control waiting.
