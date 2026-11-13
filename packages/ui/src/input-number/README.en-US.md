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

| Configuration | Purpose | Related examples |
| ------------- | --------------------------- | ------------------------------------ |
| `size` | All five sizes implemented; inheritable | Control Sizes, Field Options |
| `variant` | Field variant; inherits InputGroup | Control Sizes, Field Options |
| `placeholder` | Placeholder | Control Sizes, Field Options |
| `min` | Minimum | Appearance Lab |
| `max` | Maximum | Appearance Lab |
| `mode` | Step-button layout | Field Modes |

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

| Configuration | Purpose | Related examples |
| ----------- | ---------------------------- | -------------------------------------------------- |
| `clearable` | Allow clearing an editable field | Quantity Controls, Format Slots, Number Boundaries |
| `mode` | Step-button layout | Quantity Controls, Format Slots |
| `min` | Minimum | Quantity Controls, Number Boundaries |
| `max` | Maximum | Quantity Controls, Number Boundaries |
| `step` | Positive finite step; scientific notation supported | Quantity Controls, Number Boundaries |
| `formatter` | Display formatting only; does not change the number | Format Slots, Number Boundaries |

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

| Configuration | Purpose | Related examples |
| ----------- | ----------------------------- | -------------------------- |
| `disabled` | Disabled; inherits when omitted | State Lab, Form Inheritance |
| `readonly` | Read-only; allows focus/copy but no mutations | State Lab, Form Inheritance |
| `clearable` | Allow clearing an editable field | Controlled Events, Form Inheritance |
| `min` | Minimum | State Lab |
| `max` | Maximum | State Lab |
| `error` | Error state; inherits FormItem when omitted | State Lab |

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

## Composition input

IME composition preserves the native text being entered; external model updates do not replace it before completion. Existing formatting and controlled-owner acceptance apply afterward. Queued restoration from an earlier input cannot replace a later edit's text or caret. Numeric updates still follow model-event, with unchanged blur/Enter commit timing.

## Usage notes

### Editing and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-direct modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.



`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

`--c-field-caret-color` sets the shared caret color, defaulting to `currentColor`. `--c-input-number-caret-color` overrides this component and defaults to `var(--c-field-caret-color)`.

Explicit beforeCommit waiting uses the existing loadingMode indicator and sets aria-busy on the actual input. Manual loading remains business-owned and does not imply readonly; beforeCommit guards retain their existing interaction lock. Notification return Promises, including change/step, do not control waiting.

Deferred `change` preserves the real confirmation event when available (for example, the save button). Programmatic editor handoff has no DOM event, so its second argument is optional. The event target can be the confirmation control rather than the input. `change` is a notification: its returned Promise is not awaited; use `before-commit` to approve asynchronous saves.

Public focus/blur methods are callable from initial mount. Focus opens an editable deferred editor and targets it after readiness; disabled, readonly, or reading fields do not open. Blur only blurs the current target without reopening. Stored methods never bind an old editor; closure, mode changes, deactivation, or unmount cancel queued calls.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Clear output

`empty-value` defines the output of an existing clear action. Omission preserves the component fallback; supported types remain component-specific. It does not change empty-values recognition or Form reset defaults.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

### InputNumber Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| empty-value | Clear output, falling back to undefined when omitted | `number \| null \| undefined \| (() => number \| null \| undefined)` | `undefined` |
| model-value | Controlled numeric value including null; uses internal state when omitted | `number \| null` | `undefined` |
| default-value | Initial uncontrolled numeric value, read at creation | `number` | `undefined` |
| disable-input | Disable typing while retaining step buttons and arrow-key stepping | `boolean` | `false` |
| disable-increment | Disable incrementing through buttons and arrow keys | `boolean` | `false` |
| disable-decrement | Disable decrementing through buttons and arrow keys | `boolean` | `false` |
| increment-button | Show the increment button | `boolean` | `true` |
| decrement-button | Show the decrement button | `boolean` | `true` |
| press | Repeat stepping while held; approval-enabled operations do not repeat requests | `boolean` | `true` |
| mode | Step-button layout | `'embed' \| 'button' \| 'input'` | `'embed'` |
| precision | Explicit precision is an integer from 0 to 100, at least the decimal places required by step | `number` | `undefined` |
| step | Positive finite step size | `number` | `1` |
| disabled | Disabled state; can inherit from Form | `boolean` | `-` |
| error | Error state; can inherit from FormItem | `boolean` | `-` |
| max | Maximum commit bound, allowing positive infinity | `number` | `Infinity` |
| min | Minimum commit bound, allowing negative infinity | `number` | `-Infinity` |
| formatter | Editor display formatter without changing the numeric model | `InputNumberFormatter` | `undefined` |
| parser | Parse user-edited text once per edit | `InputNumberParser` | `undefined` |
| placeholder | Hint text | `string` | `-` |
| size | Input size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| variant | Field appearance | `'filled' \| 'outline' \| 'standard'` | `'outline'` |
| hint | Whether hint text floats | `boolean` | Inherited when omitted; standalone default `false` |
| clearable | Whether to allow the input to be cleared | `boolean` | `false` |
| model-event | Model notification timing; change always denotes a commit | `'change' \| 'input'` | `'change'` |
| readonly | Readonly state; can inherit from Form | `boolean` | `-` |
| input-attrs | Additional native attributes; the component owns controlled value, state, ARIA bounds, and component events | `Record<string, unknown>` | `undefined` |
| edit-mode | Editor mode; inherits FormItem/Form | `direct / click / dblclick` | `undefined` |
| read-pretty | Reading presentation; inherits FormItem/Form | `boolean` | `undefined` |
| empty-values | Empty-value recognition set; an explicit set replaces inherited values | `readonly unknown[]` | Inherited component-family policy |
| empty-text | Empty reading text, inherited from FormItem/Form | `string` | `'-'` |
| before-commit | Direct commit and deferred save approval: (payload, done, context) | `BeforeFieldCommit` | `undefined` |
| open | Controlled editor visibility in deferred modes | `boolean` | `undefined` |
| default-open | Uncontrolled initial editor visibility; creation-only | `boolean` | `false` |
| popup-container | Deferred editor portal target; false renders in place | `PopupContainer` | `undefined` |
| loading | Loading presentation; keeps the input editable | `boolean` | `false` |
| loading-mode | Loading layout: default indicator or bottom line | `default / line` | `default` |

Min may be finite or -Infinity; max may be finite or Infinity. Negative values and 0 are valid. Invalid individual bounds use Vue prop-validation diagnostics and fall back to their unbounded defaults. An inverted range diagnoses both bounds and becomes unbounded, without swapping values. Input commits, stepping, and ARIA share the effective bounds; clear markers still follow empty-value.

Approved clearing notifies **clear → input → update:modelValue → change**. Clear is an action notification and is not emitted after a veto. A target equal to the current model does not invent change. The default clear value is undefined; explicit empty-value may provide null or another supported numeric value.

`before-commit(payload, done, context)` receives `{ value, previousValue }`; context provides `signal`. Synchronous void waits for done; true, done(), or fulfilled `Promise<void>` allows the operation. False, done(false), `Promise<false>`, throwing, or rejection cancels. Direct mode approves changed model values before committing, stepping, or clearing; `model-event="input"` also approves before publishing, without repeated approval for the same value. Pending work announces aria-busy and locks typing/stepping. External model/configuration/state changes or deactivation/unmount cancel stale work. Direct approval errors preserve the value and notify `commit-error`; deferred editing approves once at final confirmation and uses the existing panel feedback. With approval enabled, holding a button does not start repeated requests. Ordinary listener Promises are not approval tasks.

### InputNumber Events

| Event | Parameters / Type | Description |
| --- | --- | --- |
| update:modelValue | `number \| null \| undefined` | Model update proposal |
| update:open | `boolean` | Editor visibility request |
| open-change | `boolean` | Editor visibility change notification |
| input | `value: number \| null \| undefined, text: string, event: Event` | Parsed numeric value and display text from user editing |
| change | `value: number \| null \| undefined, event?: Event` | Numeric commit; deferred source event may be absent |
| clear | `event: Event` | Approved clear action notification, preceding value notifications |
| step | `value: number, direction: 'plus' \| 'minus', event: Event` | Step notification after changing the value |
| commit-error | `error: unknown` | Direct approval error notification; a boolean veto is not an error |
| keydown | `event: KeyboardEvent` | Native keyboard notification with synchronous preventDefault support |
| focus | `event: FocusEvent` | Native editor receives focus |
| blur | `event: FocusEvent` | Native editor loses focus |

### InputNumber Slots

| Slot | Parameters / Type | Description |
| --- | --- | --- |
| read | `{ value: number \| null \| undefined; text: string }` | Custom reading content |
| prefix | `-` | Inner prefix |
| suffix | `-` | Inner suffix |
| prepend | `-` | Outer leading content |
| append | `-` | Outer trailing content |
| plus | `-` | Increment button content |
| minus | `-` | Decrement button content |
| clear-icon | `{ clear(event?: Event): void }` | Clear icon or button |

### InputNumber Methods

| Method / property | Parameters / Type | Description |
| --- | --- | --- |
| focus | `focus(options?: FocusOptions): void` | Focus the mounted editor |
| blur | `blur(): void` | Blur the mounted editor |
| select | `select(): void` | Select all text in the mounted editor |
| inputRef | `HTMLInputElement \| undefined` | Reference to the mounted native numeric input |

## Types

```ts
import type {
  InputNumberEmits,
  InputNumberSlots,
  InputNumberExpose,
  InputNumberInstance,
  InputNumberProps,
  InputNumberInstance,
  InputNumberMode,
  InputNumberModelEvent,
  InputNumberSize,
  InputNumberVariant,
  InputNumberFormatter,
  InputNumberParser,
} from "@cedar-design/ui-vue";
```

## CSS Variables

Use `--c-input-number-*` for number-input styling and FieldDecorator `--c-field-*` variables for shared field appearance.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-input-number-addon-background` | `var(--c-sys-color-surface-muted)` | `background` |
| `--c-input-number-addon-border-color` | `var(--c-sys-color-border-default)` | `border` |
| `--c-input-number-addon-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-input-number-border-radius` | `var(--c-field-border-radius)` | `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--c-input-number-border-width` | `1px` | `border`, `border-inline-end`, `border-inline-start`, `border-top`, `outline`, `outline-offset` |
| `--c-input-number-caret-color` | `var(--c-field-caret-color)` | `caret-color` |
| `--c-input-number-size-lg-step-button-width` | `var(--c-sys-control-height-lg)` | `width` |
| `--c-input-number-size-md-step-button-width` | `var(--c-sys-control-height-md)` | `width` |
| `--c-input-number-size-sm-step-button-width` | `var(--c-sys-control-height-sm)` | `width` |
| `--c-input-number-size-xl-step-button-width` | `var(--c-sys-control-height-xl)` | `width` |
| `--c-input-number-size-xs-step-button-width` | `var(--c-sys-control-height-xs)` | `width` |
| `--c-input-number-step-button-active-background` | `var(--c-sys-color-state-selected)` | `background` |
| `--c-input-number-step-button-background` | `var(--c-sys-color-surface-muted)` | `background` |
| `--c-input-number-step-button-border-color` | `var(--c-sys-color-border-subtle)` | `border-inline-end`, `border-inline-start`, `border-top` |
| `--c-input-number-step-button-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-input-number-step-button-disabled-color` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-input-number-step-button-hover-background` | `var(--c-sys-color-state-hover)` | `background` |
| `--c-input-number-step-button-icon-size` | `14px` | `font-size` |
| `--c-input-number-step-button-transition-duration` | `0.2s` | `transition` |
| `--c-input-number-step-button-width` | `var(--c-sys-control-height-md)` | `width` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-input-number-addon-background: var(--c-sys-color-surface-muted);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
