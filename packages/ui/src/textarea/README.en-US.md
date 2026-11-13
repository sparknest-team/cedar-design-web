---
lang: en-US
permalink: /en/components/textarea/
---

# Textarea

Multiline text input.

## Reading direction

The textarea inherits source `dir`, aligns text to inline start and its counter to inline end. Runtime direction changes retain the native editor, focus and selection; native caret and newline keys keep their meanings.

## Basic examples

### Basic usage

`v-model.trim` follows Vue model event rules: `update:modelValue` is trimmed during input, while `input` reports the original text after length normalization. An uncontrolled editor may retain surrounding whitespace while editing and normalizes its local display on commit; committing does not repeat the same model proposal already reported. Controlled display follows the final parent value, and `change` still denotes a commit.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Status

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --------------- | --------------------------------- | ---------- |
| `placeholder` | Placeholder text | Status |
| `variant` | `filled` / `outline` / `standard` | Status |
| `default-value` | Uncontrolled initial value | Status |
| `readonly` | Whether readonly | Status |
| `disabled` | Whether disabled | Status |
| `error` | Show the error state | Status |

<!-- demo-config-notes:end -->


- `variant`: Selects the visual variant.
- `readonly`: Displays the current value without allowing edits.
- `disabled`: Prevents user interaction.

<demo src="./__demos__/status.vue"></demo>

### Appearance Lab

<demo src="./__demos__/appearance-lab.vue"></demo>

## Content and presentation

### Max Length

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ----------------- | ---------------------------------------- | ---------------- |
| `placeholder` | Placeholder text | Max Length |
| `max-length` | Finite nonnegative length or `{ length, errorOnly? }`; 0 is unlimited; invalid values diagnose and fall back to no limit | Max Length |
| `clearable` | Enables the clear action | Max Length |
| `show-word-limit` | Show the character counter | Max Length |
| `aria-label` | Accessible name when no visible label exists | Native Attrs |
| `rows` | Native visible row count | Native Attrs |

<!-- demo-config-notes:end -->


<demo src="./__demos__/max-length.vue"></demo>

`max-length` accepts a finite nonnegative number or `{ length, errorOnly? }`; `0` means unlimited. Object `length` follows the same numeric constraint and `errorOnly` is an optional boolean. Invalid values use Vue prop-validation diagnostics and fall back to no limit; null is treated as unset. Default slicing counts UTF-16 code units. Supply `word-length / word-slice` together for custom counting and slicing.

### Native Attrs

<demo src="./__demos__/native-attrs.vue"></demo>

## Customization and slots

### Slots

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------- | ------------ | -------------------- |
| `clearable` | Enables the clear action | Slots |
| `placeholder` | Placeholder text | Slots |

<!-- demo-config-notes:end -->


<demo src="./__demos__/slots.vue"></demo>

## Interaction and control

### State Lab

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------- | ---------------------------------------- | -------------------------------------------------- |
| `placeholder` | Placeholder text | Auto Size, Interaction, Body Contract |
| `rows` | Native visible row count | Auto Size, Body Contract |
| `auto-size` | Automatic height, optionally with minimum/maximum rows | Auto Size, Body Contract |
| `clearable` | Enables the clear action | Interaction, Body Contract |
| `disabled` | Whether disabled | State Lab |
| `readonly` | Whether readonly | State Lab |

<!-- demo-config-notes:end -->


<demo src="./__demos__/state-lab.vue"></demo>

### Auto Size

Auto sizing converts the measured box to the actual CSS box model, counting padding and the top/bottom borders once. Explicit `minRows / maxRows` override the theme minimum; excess content scrolls within the row cap. Turning auto size off restores native height and the platform resize default. Compare both box models, fill six lines, and switch the cap.

<demo src="./__demos__/auto-size.vue"></demo>

### Interaction

<demo src="./__demos__/interaction.vue"></demo>

### Body Contract

<demo src="./__demos__/body-contract.vue"></demo>

## Value model and interaction

### Dynamic empty values

Changing empty-value (including its factory) affects the next clear operation. Changing empty-values reformats the existing model without emitting a model update. Direct clear publishes immediately; deferred clear remains a draft until confirmation.

<demo src="./__demos__/empty-policy.vue"></demo>

## Design notes

- Defaults to `outline` with `clearable` disabled.
- `input` means live editing; `change` commits on changed blur or clear. Enter remains a newline.
- `auto-size` lets content determine height, overriding visual effects of `rows`/manual `resize`.
- Form/FormItem own business validation/messages; Textarea supplies event signals/error appearance only.

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom `line`); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

## Composition input

IME composition preserves the native text being entered; external model updates do not replace it before composition completes. Existing formatting and controlled-owner acceptance apply after completion. Queued restoration from an earlier input cannot replace the text or caret of a later edit or composition. Length limits and modifiers retain their existing post-composition input/commit timing.

## Usage notes

### Sizing and native methods

size supports five FieldDecorator densities: xs/sm/md/lg/xl. rows, auto-size and Textarea tokens still control textarea height/text metrics. Cedar allows manual resize by default; Maple does not. InputGroup/Form state is inherited, with explicit child values taking precedence. Exposes focus(options?), blur(), select() and textareaRef.

`TextareaProps`、`TextareaVariant`、`TextareaMaxLength`、`TextareaAutoSize`、`TextareaEmits`、`TextareaSlots`、`TextareaExpose`、`TextareaInstance`。

Native methods: `focus(options?: FocusOptions)`, `blur()`, `select()`; `textareaRef` is the native element.

### Editing and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-direct modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

FormItem validates the candidate first and keeps editing open on failure; before-commit approval runs after validation succeeds. See the property section above for approval parameters and completion rules.

`open / default-open / update:open / open-change` control and report editor visibility; `#read="{ value, text }"` customizes reading content. See Form for composed examples.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

`--c-field-caret-color` sets the shared caret color, defaulting to `currentColor`. `--c-textarea-caret-color` overrides this component and defaults to `var(--c-field-caret-color)`.

### Configuration

Both counters sit outside the textarea. counter-margin-top controls their gap and avoids covering text.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Textarea Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| empty-value | Clear output; omission clears to an empty string and manual deletion is unchanged | `string \| null \| (() => string \| null)` | `undefined` |
| model-value | Bound value | `string \| null` | `-` |
| model-modifiers | `v-model` modifiers; supports `trim` | `{ trim?: boolean }` | `{}` |
| default-value | Uncontrolled initial value; read only at creation, never written into the parent | `string` | `''` |
| placeholder | Hint text | `string` | `-` |
| disabled | Disabled state; can inherit from Form | `boolean` | `-` |
| readonly | Readonly state; can inherit from Form | `boolean` | `-` |
| variant | Field appearance | `'filled' \| 'outline' \| 'standard'` | `'outline'` |
| size | Input size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| error | Error state; can inherit from FormItem | `boolean` | `-` |
| max-length | Finite nonnegative length or `{ length, errorOnly? }`; 0 is unlimited; invalid values diagnose and fall back to no limit | `number \| { length: number; errorOnly?: boolean }` | `0` |
| show-word-limit | Show the character counter | `boolean` | `false` |
| clearable | Whether to allow the input to be cleared | `boolean` | `false` |
| word-length | Length-counting function | `(value: string) => number` | `-` |
| word-slice | Text-slicing function, used with wordLength | `(value: string, maxLength: number) => string` | `-` |
| aria-label | Native input accessible label | `string` | `-` |
| autofocus | Focus automatically after mount | `boolean` | `false` |
| enterkeyhint | Mobile virtual-keyboard enter-key hint | `string` | `-` |
| hint | Whether hint text floats | `boolean` | Inherited when omitted; standalone default `true` |
| line | Whether to draw a border or underline | `boolean` | `true` |
| text-color | Input text color | `string` | `-` |
| focus-color | Focused hint and supported border colors; does not control the caret | `string` | `-` |
| blur-color | Unfocused hint color | `string` | `-` |
| rows | Positive integer native rows, including numeric strings; invalid values diagnose and restore native default rows. Theme constraints still affect visual height | `string \| number` | Native default `2` |
| resize | Allow vertical resizing; ignored while a valid automatic-height policy is active | `boolean` | `true` |
| auto-size | Automatic height; row budgets must be positive and finite, with minRows no greater than maxRows. Invalid configurations diagnose and disable measurement | `boolean \| { minRows?: number; maxRows?: number }` | `false` |
| textarea-attrs | Additional native textarea attributes; cannot override controlled value, state, rows, length policy, or component events | `Record<string, unknown>` | `undefined` |
| edit-mode | Editor mode; inherits FormItem/Form | `direct / click / dblclick` | `undefined` |
| read-pretty | Reading presentation; inherits FormItem/Form | `boolean` | `undefined` |
| empty-values | Empty-value recognition set; an explicit value replaces the inherited set | `readonly unknown[]` | Inherited component-family policy |
| empty-text | Empty reading text; inherits FormItem/Form | `string` | `'-'` |
| before-commit | Deferred save approval: (payload, done, context) | `BeforeFieldCommit` | `undefined` |
| open | Controlled editor visibility in deferred modes | `boolean` | `undefined` |
| default-open | Uncontrolled initial editor visibility; creation-only | `boolean` | `false` |
| popup-container | Deferred editor portal target; false renders in place | `PopupContainer` | `undefined` |
| loading | Loading presentation; keeps the input editable | `boolean` | `false` |
| loading-mode | Loading layout: default indicator or bottom line | `default / line` | `default` |

`rows` accepts a positive integer or a numeric string convertible to one. Invalid values use Vue prop-validation diagnostics and restore native default `rows`. `auto-size` minRows/maxRows accept positive finite line-height multiples, including fractions; minRows must not exceed maxRows. Invalid objects disable automatic measurement and clear its previous calculated styles. Null is treated as unset.

`before-commit(payload, done, context)` approves saving. Payload contains `{ value, previousValue }`; context provides `signal`. Synchronous void waits for done; true, done(), or fulfilled `Promise<void>` allows saving. False, done(false), `Promise<false>`, throwing, or rejection cancels. Ordinary events only notify and do not await Promises; the DOM source of `change` may be absent.

### Textarea Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:modelValue | Model update proposal during input, clearing, or confirmed saving | `value: string \| null` |
| update:open | Editor visibility request | `open: boolean` |
| open-change | Editor visibility change notification | `open: boolean` |
| input | Length-normalized user input, emitted after composition completes | `value: string, event: Event` |
| change | Commit on blur, clear, or deferred saving; the source event is optional | `value: string \| null, event?: Event` |
| keydown | Native keyboard notification; Enter keeps its newline behavior in direct mode | `event: KeyboardEvent` |
| clear | Clear request, followed by input, model update, and change notifications | `event: Event` |
| focus | Native editor receives focus | `event: FocusEvent` |
| blur | Native editor loses focus | `event: FocusEvent` |

### Textarea Slots

| Slot | Description | Prop |
| --- | --- | --- |
| read | Reading content with the raw value and formatted text | `{ value: string \| null; text: string }` |
| prefix | Prefix content | `-` |
| suffix | Suffix content | `-` |
| clear-icon | Clear icon or button | `{ clear(event?: Event): void }` |

### Textarea Methods

| Method | Description | Arguments |
| --- | --- | --- |
| focus | Focus the mounted editor | `focus(options?: FocusOptions): void` |
| blur | Blur the mounted editor | `blur(): void` |
| select | Select all text in the mounted editor | `select(): void` |
| textareaRef | Reference to the mounted native textarea | `HTMLTextAreaElement \| undefined` |

## Types

```ts
import type {
  TextareaEmits,
  TextareaSlots,
  TextareaExpose,
  TextareaInstance,
  TextareaAutoSize,
  TextareaMaxLength,
  TextareaProps,
  WordLength,
  WordSlice,
} from "@cedar-design/ui-vue";
```

## Configuring the cleared value

`empty-value` defines the output of an existing clear action. Omission preserves the component fallback; supported types remain component-specific. It does not change empty-values recognition or Form reset defaults.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

Deferred `change` preserves the real confirmation event when available (for example, the save button). Programmatic editor handoff has no DOM event, so its second argument is optional. The event target can be the confirmation control rather than the input. `change` is a notification: its returned Promise is not awaited; use `before-commit` to approve asynchronous saves.

Native textarea uses `autocomplete="off"`, matching Input and Maple; forwarded native attributes cannot override this policy.

Public focus/blur methods are callable from initial mount. Focus opens an editable deferred editor and targets it after readiness; disabled, readonly, or reading fields do not open. Blur only blurs the current target without reopening. Stored methods never bind an old editor; closure, mode changes, deactivation, or unmount cancel queued calls.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-textarea-caret-color` | `var(--c-field-caret-color)` | `caret-color` |
| `--c-textarea-counter-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-textarea-counter-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-textarea-counter-margin-top` | `var(--c-sys-space-2)` | `margin-block-start` |
| `--c-textarea-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-textarea-height` | `auto` | `height` |
| `--c-textarea-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-textarea-min-height` | `var(--c-sys-control-height-xl)` | `min-height` |
| `--c-textarea-padding-horizontal` | `var(--c-sys-space-3)` | `padding`, `padding-inline-end` |
| `--c-textarea-padding-vertical` | `var(--c-sys-space-1)` | `padding` |
| `--c-textarea-placeholder-color` | `var(--c-sys-color-content-secondary)` | `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-textarea-caret-color: var(--c-field-caret-color);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
