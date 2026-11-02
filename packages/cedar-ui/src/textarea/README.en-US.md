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

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Status

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                           | Related examples |
| --------------- | --------------------------------- | ---------------- |
| `placeholder`   | Placeholder text                  | Status           |
| `variant`       | `filled` / `outline` / `standard` | Status           |
| `default-value` | Uncontrolled initial value        | Status           |
| `readonly`      | Whether readonly                  | Status           |
| `disabled`      | Whether disabled                  | Status           |
| `error`         | Show the error state              | Status           |

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

| Configuration     | Purpose                                      | Related examples |
| ----------------- | -------------------------------------------- | ---------------- |
| `placeholder`     | Placeholder text                             | Max Length       |
| `max-length`      | Truncating or error-only length limit        | Max Length       |
| `clearable`       | Enables the clear action                     | Max Length       |
| `show-word-limit` | Show the character counter                   | Max Length       |
| `aria-label`      | Accessible name when no visible label exists | Native Attrs     |
| `rows`            | Native visible row count                     | Native Attrs     |

<!-- demo-config-notes:end -->

<demo src="./__demos__/max-length.vue"></demo>

### Native Attrs

<demo src="./__demos__/native-attrs.vue"></demo>

## Customization and slots

### Slots

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                  | Related examples |
| ------------- | ------------------------ | ---------------- |
| `clearable`   | Enables the clear action | Slots            |
| `placeholder` | Placeholder text         | Slots            |

<!-- demo-config-notes:end -->

<demo src="./__demos__/slots.vue"></demo>

## Interaction and control

### State Lab

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                                                | Related examples                      |
| ------------- | ------------------------------------------------------ | ------------------------------------- |
| `placeholder` | Placeholder text                                       | Auto Size, Interaction, Body Contract |
| `rows`        | Native visible row count                               | Auto Size, Body Contract              |
| `auto-size`   | Automatic height, optionally with minimum/maximum rows | Auto Size, Body Contract              |
| `clearable`   | Enables the clear action                               | Interaction, Body Contract            |
| `disabled`    | Whether disabled                                       | State Lab                             |
| `readonly`    | Whether readonly                                       | State Lab                             |

<!-- demo-config-notes:end -->

<demo src="./__demos__/state-lab.vue"></demo>

### Auto Size

<demo src="./__demos__/auto-size.vue"></demo>

### Interaction

<demo src="./__demos__/interaction.vue"></demo>

### Body Contract

<demo src="./__demos__/body-contract.vue"></demo>

## Design notes

- Defaults to `outline` with `clearable` disabled.
- `input` means live editing; `change` commits on changed blur or clear. Enter remains a newline.
- `auto-size` lets content determine height, overriding visual effects of `rows`/manual `resize`.
- Form/FormItem own business validation/messages; Textarea supplies event signals/error appearance only.

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

### Textarea Props

Supports Input-compatible hint, line, text-color, focus-color and blur-color. Omitted hint inherits InputGroup/library defaults. An outer FormItem label hides the internal floating hint.

| Prop                    | Description                                                      | Type                                                | Default   |
| ----------------------- | ---------------------------------------------------------------- | --------------------------------------------------- | --------- |
| model-value (`v-model`) | Controlled value                                                 | `string`                                            | `-`       |
| default-value           | Uncontrolled initial value                                       | `string`                                            | `''`      |
| model-modifiers         | Supports the `trim` model modifier                               | `{ trim?: boolean }`                                | `{}`      |
| placeholder             | Placeholder text                                                 | `string`                                            | `-`       |
| variant                 | `filled` / `outline` / `standard`                                | `FormControlVariant`                                | `outline` |
| size                    | `xs` / `sm` / `md` / `lg` / `xl`                                 | `ComponentSize`                                     | `md`      |
| clearable               | Enables the clear action                                         | `boolean`                                           | `false`   |
| disabled                | Whether disabled                                                 | `boolean`                                           | `false`   |
| readonly                | Whether readonly                                                 | `boolean`                                           | `false`   |
| error                   | Show the error state                                             | `boolean`                                           | `false`   |
| rows                    | Native visible row count                                         | `string \| number`                                  | `-`       |
| resize                  | Allows vertical manual resizing                                  | `boolean`                                           | `true`    |
| auto-size               | Automatic height, optionally with minimum/maximum rows           | `boolean \| { minRows?: number; maxRows?: number }` | `false`   |
| max-length              | Truncating or error-only length limit                            | `number \| { length: number; errorOnly?: boolean }` | `0`       |
| show-word-limit         | Show the character counter                                       | `boolean`                                           | `false`   |
| word-length             | Custom length function                                           | `(value: string) => number`                         | `-`       |
| word-slice              | Custom slice function                                            | `(value: string, maxLength: number) => string`      | `-`       |
| aria-label              | Accessible name when no visible label exists                     | `string`                                            | `-`       |
| autofocus               | Focus automatically after mount                                  | `boolean`                                           | `false`   |
| enterkeyhint            | Virtual keyboard Enter hint                                      | `string`                                            | `-`       |
| textarea-attrs          | Supplemental native textarea attributes                          | `Record<string, unknown>`                           | `-`       |
| hint                    | Floating hint; inherits InputGroup/library defaults when omitted | boolean                                             | undefined |
| line                    | Show border/underline                                            | boolean                                             | true      |
| text-color              | Instance text color                                              | string                                              | undefined |
| focus-color             | Instance focus color                                             | string                                              | undefined |
| blur-color              | Instance unfocused hint color                                    | string                                              | undefined |

### Textarea Events

| Event   | Description                                    | Arguments                  |
| ------- | ---------------------------------------------- | -------------------------- |
| input   | User input after IME composition               | `value: string, ev: Event` |
| change  | Changed value committed on blur                | `value: string, ev: Event` |
| keydown | Native keydown signal; Enter remains a newline | `ev: KeyboardEvent`        |
| clear   | Clear → input → update:model-value → change    | `ev: Event`                |
| focus   | Emitted on focus                               | `ev: FocusEvent`           |
| blur    | Emitted on blur                                | `ev: FocusEvent`           |

### Textarea Slots

| Slot       | Description          | Arguments                     |
| ---------- | -------------------- | ----------------------------- |
| prefix     | Prefix content       | `-`                           |
| suffix     | Suffix content       | `-`                           |
| clear-icon | Clear icon or button | `clear: (ev?: Event) => void` |

### Textarea Methods

| Method | Description                 |
| ------ | --------------------------- |
| focus  | Focus the internal textarea |
| blur   | Blur the internal textarea  |

## Type definitions

```ts
import type {
  TextareaAutoSize,
  TextareaMaxLength,
  TextareaProps,
  WordLength,
  WordSlice,
} from "@cedar-design/ui";
```

## Style variables

| Variable                          | Default                           |
| --------------------------------- | --------------------------------- |
| `--c-textarea-height`             | `auto`                            |
| `--c-textarea-min-height`         | `--c-sys-control-height-xl`       |
| `--c-textarea-font-size`          | `--c-sys-font-size-md`            |
| `--c-textarea-line-height`        | `--c-line-height`                 |
| `--c-textarea-padding-horizontal` | `--c-sys-space-3`                 |
| `--c-textarea-padding-vertical`   | `--c-sys-space-1`                 |
| `--c-textarea-placeholder-color`  | `--c-sys-color-content-secondary` |
| `--c-textarea-counter-color`      | `--c-sys-color-content-secondary` |
| `--c-textarea-counter-font-size`  | `--c-sys-font-size-xs`            |
| `--c-textarea-counter-margin-top` | `var(--c-sys-space-2)`            |

Both counters sit outside the textarea. counter-margin-top controls their gap and avoids covering text.

### Native layout and public types

size supports five FieldDecorator densities: xs/sm/md/lg/xl. rows, auto-size and Textarea tokens still control textarea height/text metrics. Cedar allows manual resize by default; Maple does not. InputGroup/Form state is inherited, with explicit child values taking precedence. Exposes focus(options?), blur(), select() and textareaRef.

`TextareaProps`、`TextareaVariant`、`TextareaMaxLength`、`TextareaAutoSize`、`TextareaEmits`、`TextareaSlots`、`TextareaExpose`、`TextareaInstance`。

Native methods: `focus(options?: FocusOptions)`, `blur()`, `select()`; `textareaRef` is the native element.

### Form field presentation and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-`direct` modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

`--c-field-caret-color` sets the shared caret color, defaulting to `currentColor`. `--c-textarea-caret-color` overrides this component and defaults to `var(--c-field-caret-color)`.

## Configuring the cleared value

`empty-value` / `emptyValue` sets the model value produced by clearing. It accepts a value in the component model type or a zero-argument factory. Omission preserves the existing default; use `() => undefined` to distinguish omission from returning undefined. Arrays are shallow-copied on every clear; selected items that cannot be cleared remain. It does not redefine emptiness, alter Form reset defaults or treat 0/false as universally empty.
Text and person-ID models remain strings; use an empty string or a business-defined string sentinel.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.
