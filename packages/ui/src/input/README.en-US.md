---
lang: en-US
permalink: /en/components/input/
---

# Input

Text input with controlled and uncontrolled values.

## Reading direction

The input inherits `dir` from its page or local scope. Affixes, clear actions and input groups follow reading order. Runtime changes retain the native editor, focus and selection; the browser handles caret movement, mixed text and composition without swapping editing keys. Parent rerenders preserve the native composition buffer; older selection-restoration tasks do not overwrite a newer composition.

## Basic examples

### Control Sizes

- `size`: Controls the component size.
- `variant`: Selects the visual variant.

<demo src="../field-decorator/__demos__/control-sizes.vue"></demo>

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Appearance configuration comparison

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------- | ------------------ | ------------------ |
| `placeholder` | Hint text | Form Feedback, Floating Hint |
| `hint` | Whether hint text floats | Form Feedback, Floating Hint |
| `clearable` | Whether to allow the input to be cleared | Form Feedback, Floating Hint |
| `variant` | Field appearance | Floating Hint |

<!-- demo-config-notes:end -->


Choose an axis to compare its available values with the same content and model. Other settings remain unchanged while comparing.

<demo src="./__demos__/appearance-lab.vue"></demo>

### Form Feedback

<demo src="./__demos__/form-feedback.vue"></demo>

### Floating Hint

When `hint` is omitted it inherits InputGroup; the standalone library default is `true`. An outer FormItem label suppresses the floating hint. Explicit `false` uses the native placeholder; explicit `true` remains subject to outer-label suppression. `text-color`, `focus-color`, and `blur-color` override text and hint colors.

- `variant`: Selects the visual variant.

<demo src="./__demos__/floating-hint.vue"></demo>

## Input content and layout

### Word Limit

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ----------------- | ---------------------------------------------------------- | ---------------------------------- |
| `placeholder` | Hint text | Word Limit, Prefix, Group |
| `clearable` | Whether to allow the input to be cleared | Word Limit, Prefix, Group State |
| `max-length` | Finite nonnegative length or `{ length, errorOnly? }`; 0 is unlimited; invalid values diagnose and fall back to no limit | Word Limit |
| `show-word-limit` | Show the character counter | Word Limit |
| `default-value` | Uncontrolled initial value; read only at creation, never written into the parent | Group State |
| `disabled` | Disabled state; can inherit from Form | Group State |

<!-- demo-config-notes:end -->


<demo src="./__demos__/word-limit.vue"></demo>

`max-length` accepts a finite nonnegative number or `{ length, errorOnly? }`; `0` means unlimited. Object `length` follows the same numeric constraint and `errorOnly` is an optional boolean. Invalid values use Vue prop-validation diagnostics and fall back to no limit; null is treated as unset. Default slicing counts UTF-16 code units. Supply `word-length / word-slice` together for custom counting and slicing.

### Password

<demo src="./__demos__/password.vue"></demo>

### Prefix

<demo src="./__demos__/prefix.vue"></demo>

### Group

<demo src="./__demos__/group.vue"></demo>

`InputGroupLabel` renders a span for content attached outside the input. Associate a visible name by matching FormItem `label-attrs.for` to the Input `id`, or use a native label with for/id. You can also provide `aria-label` explicitly.

### Group State

- `disabled`: Prevents user interaction.
- `readonly`: Displays the current value without allowing edits.

<demo src="./__demos__/group-state.vue"></demo>

## Value model and interaction

### Default Value

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --------------- | ---------------------------------------------------------- | ---------------------------------- |
| `clearable` | Whether to allow the input to be cleared | Event Pipeline, Clear icon and manual deletion |
| `default-value` | Uncontrolled initial value; read only at creation, never written into the parent | Default Value |
| `aria-label` | Native input accessible label | Default Value |
| `disabled` | Disabled state; can inherit from Form | Interaction state comparison |
| `readonly` | Readonly state; can inherit from Form | Interaction state comparison |
| `error` | Error state; can inherit from FormItem | Interaction state comparison |

<!-- demo-config-notes:end -->


<demo src="./__demos__/default-value.vue"></demo>

`v-model.trim` follows Vue model event rules: `update:modelValue` is trimmed during input, while `input` reports the original text after length normalization. An uncontrolled editor may retain surrounding whitespace while editing and normalizes its local display on commit; committing does not repeat the same model proposal already reported. Controlled display follows the final parent value, and `change` still denotes a commit.

### Clear icon and manual deletion

Set clear output to null. Clear with the icon, restore the initial value, then delete all text with Backspace. The model shows null for the icon and an empty string for manual deletion.

<demo src="./__demos__/en-US/empty-value.vue"></demo>

### Interaction state comparison

Toggle the state, interact with the component, and restore editing using the controls outside the specimen. Error appearance alone does not run validation.

<demo src="./__demos__/state-lab.vue"></demo>

### Event Pipeline

<demo src="./__demos__/event-pipeline.vue"></demo>

### Commit approval

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes null unchanged; omitted values preserve the existing default. Editors render null as blank without converting ordinary empty-string input to null. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

Cancellable hooks use `(payload, done, context)`: closure payloads contain `{ action }`, change/commit payloads contain `{ value, previousValue }`, and Popup uses `{ reason }`. Context provides `signal` and an optional original `event`. Return a boolean/Promise, or call done()/done(false). Synchronous void waits for done; Promise&lt;void&gt; allows the operation. First completion wins. Pending state controls loading/disabled automatically. Cancellation invalidates stale results. Button refs are not exposed.

<demo src="./__demos__/en-US/commit-protocol.vue"></demo>

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom line); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

## Loading and waiting

### Loading

Toggle loading to compare the default indicator and bottom line. The input remains editable while loading.

<demo src="./__demos__/loading.vue"></demo>

## Composition input

IME composition preserves the native text being entered; external model updates do not replace it before composition completes. Existing formatting and controlled-owner acceptance apply after completion. Queued restoration from an earlier input cannot replace the text or caret of a later edit or composition. Length limits and modifiers retain their existing post-composition input/commit timing.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Input Props

| Parameter | Description | Type | Default |
| ------------------------- | ---------------------------------------------------------- | --------------------------------------------------- | :---------: |
| model-value **(v-model)** | Bound value | `string \| null` | `-` |
| `loading` | Loading presentation; keeps the input editable | `boolean` | `false` |
| `loading-mode` | Loading layout: default indicator or bottom line | `default / line` | `default` |
| model-modifiers | `v-model` modifiers; supports `trim` | `{ trim?: boolean }` | `{}` |
| default-value | Uncontrolled initial value; read only at creation, never written into the parent | `string` | `''` |
| variant | Field appearance | `'filled' \| 'outline' \| 'standard'` | `'outline'` |
| size | Input size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| clearable | Whether to allow the input to be cleared | `boolean` | `false` |
| empty-value | Clear output; omission clears to an empty string and manual deletion is unchanged | `string \| null \| (() => string \| null)` | `undefined` |
| disabled | Disabled state; can inherit from Form | `boolean` | `-` |
| readonly | Readonly state; can inherit from Form | `boolean` | `-` |
| error | Error state; can inherit from FormItem | `boolean` | `-` |
| placeholder | Hint text | `string` | `-` |
| hint | Whether hint text floats | `boolean` | Inherited when omitted; standalone default `true` |
| line | Whether to draw a border or underline | `boolean` | `true` |
| text-color | Input text color | `string` | `-` |
| focus-color | Focused hint and supported border colors; does not control the caret | `string` | `-` |
| blur-color | Unfocused hint color | `string` | `-` |
| aria-label | Native input accessible label | `string` | `-` |
| autofocus | Focus automatically after mount | `boolean` | `false` |
| enterkeyhint | Mobile virtual-keyboard enter-key hint | `string` | `-` |
| max-length | Finite nonnegative length or `{ length, errorOnly? }`; 0 is unlimited; invalid values diagnose and fall back to no limit | `number \| { length: number; errorOnly?: boolean }` | `0` |
| show-word-limit | Show the character counter | `boolean` | `false` |
| word-length | Length-counting function | `(value: string) => number` | `-` |
| word-slice | Text-slicing function, used with wordLength | `(value: string, maxLength: number) => string` | `-` |
| input-attrs | Attributes for the internal input element | `object` | `-` |
| `type` | Input type: text/password/number/tel/email | `InputType`<br>`'number' \| 'text' \| 'email' \| 'tel' \| 'password'` | `text` |
| `edit-mode` | Editor mode; inherits FormItem/Form | `direct / click / dblclick` | `undefined` |
| `read-pretty` | Reading presentation; inherits FormItem/Form | `boolean` | `undefined` |
| `open` | Controlled editor visibility in deferred modes | `boolean` | `undefined` |
| `default-open` | Uncontrolled initial editor visibility; creation-only | `boolean` | `false` |
| `before-commit` | Deferred save approval: (payload, done, context) | `BeforeFieldCommit` | `undefined` |
| `popup-container` | Deferred editor portal target; false renders in place | `PopupContainer` | `undefined` |

`disabled / readonly / size` resolve from child → InputGroup → FormItem/Form → library defaults; Cedar size also supports ConfigProvider. `clearable` applies only to nonempty editable inputs: PC shows it on hover/focus, while touch devices and Maple keep it visible. Native name/id/aria-*/data-* reach the input; class/style stay on the wrapper. `input-attrs` cannot override controlled value, type, disabled/readonly state or length policy.

### Input Events

| Event | Description | Arguments |
| ----------- | -------------------------- | ------------------------------ |
| input | Emitted on user input | value: `string`<br>ev: `Event` |
| change | Emitted on blur, Enter submission or clearing | value: `string \| null`<br>ev?: `Event` |
| press-enter | Emitted when the user presses Enter | ev: `KeyboardEvent` |
| clear | Emitted when the user clicks the clear button | ev: `Event` |
| focus | Emitted when the input gains focus | ev: `FocusEvent` |
| blur | Emitted when the input loses focus | ev: `FocusEvent` |
| `update:modelValue` | Model proposal; includes explicit null | `value: string \| null` |
| `update:open` | Editor visibility request | `open: boolean` |
| `keydown` | Native keyboard notification | `event: KeyboardEvent` |
| `click` | Native input click notification | `event: MouseEvent` |

### Input Methods

| Method | Description | Arguments | Returns |
| ------ | ---------------- | ---- | ------ |
| focus | Focus the input | - | - |
| blur | Blur the input | - | - |
| select | Select all text | - | - |

### Input Slots

| Slot | Description | Prop |
| ---------- | :------------: | ---------------------- |
| suffix | Suffix content | - |
| prefix | Prefix content | - |
| clear-icon | Custom clear button | `clear(event?: Event)` |
| `read` | Custom reading content | `{ value: string \| null }` |

### InputPassword Props

| Parameter | Description | Type | Default |
| ------------------ | --------------------------------------- | --------- | :-----: |
| visibility-toggle | Whether to show the password-visibility toggle | `boolean` | `true` |
| default-visibility | Default uncontrolled visibility | `boolean` | `false` |
| visibility | Controlled password visibility; supports v-model:visibility | `boolean` | `-` |

InputPassword supports all Input props, events, slots and methods.

### InputGroup Props

| Parameter | Description | Type | Default |
| -------- | ------------ | ------------------------------- | -------------------------------- |
| size | Default size within the group | `ComponentSize`<br>`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | Inherited from Form/ConfigProvider, or `md` |
| variant | Default variant within the group | `filled \| outline \| standard` | `filled` |
| disabled | Group disabled state | `boolean` | Inherited from Form, or `false` |
| readonly | Group readonly state | `boolean` | Inherited from Form, or `false` |
| hint | Group floating hint | `boolean` | Library default |

### InputPassword Events

| Parameter | Description | Prop |
| ----------------- | -------------------- | ----------------- |
| visibility-change | Emitted when visibility changes | `visible:boolean` |
| `update:visibility` | Controlled visibility request | `visible: boolean` |

## Types

The component exports the following types

```ts
import type { InputProps } from "@cedar-design/ui-vue";
```

Public types: `InputEmits`, `InputSlots`, `InputExpose`, `InputGroupSlots`, `InputPasswordEmits`, `InputPasswordSlots`, `InputPasswordExpose`.

### Form presentation inheritance

Supports `edit-mode`: `direct / click / dblclick`. Inherits FormItem/Form when unset; standalone usage defaults to direct. readPretty displays plain text; popup editing updates v-model after confirmation by default. Optional before-commit can intercept saving after candidate validation. See the Form documentation for usage and comparison demos.

### Input caret theme

| CSS variable | Default | Description |
| ----------------------- | -------------- | -------------------------------- |
| `--c-input-caret-color` | `currentColor` | Caret color, independently overridable from text color |

`--c-field-caret-color` sets the shared caret color, defaulting to `currentColor`. `--c-input-caret-color` overrides this component and defaults to `var(--c-field-caret-color)`.

Deferred `change` preserves the real confirmation event when available (for example, the save button). Programmatic editor handoff has no DOM event, so its second argument is optional. The event target can be the confirmation control rather than the input. `change` is a notification: its returned Promise is not awaited; use `before-commit` to approve asynchronous saves.

InputPassword forwards all Input props, events and slots. `open` controls only the deferred editor; direct mode has no editor. Initial `open`/default-`open` does not request an initialization close, and later default-`open` changes do not reopen the editor.

### Native busy metadata

When neither loading nor commit waiting is active, Input preserves native aria-busy metadata. Internal busy takes precedence over an external false hint. Setting aria-busy alone does not create an indicator or async task.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-input-caret-color` | `var(--c-field-caret-color)` | `caret-color` |
| `--c-input-control-font-size` | `inherit` | `font-size` |
| `--c-input-control-height` | `auto` | `height` |
| `--c-input-control-line-height` | `inherit` | `line-height` |
| `--c-input-control-padding-horizontal` | `0` | `padding` |
| `--c-input-counter-color` | `var(--c-field-suffix-text-color)` | `color` |
| `--c-input-counter-font-size` | `12px` | `font-size` |
| `--c-input-feedback-duration` | `1s` | `animation` |
| `--c-input-feedback-error-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-input-feedback-success-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-input-feedback-validating-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-input-feedback-warning-color` | `var(--c-sys-color-content-warning)` | `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-input-caret-color: var(--c-field-caret-color);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
