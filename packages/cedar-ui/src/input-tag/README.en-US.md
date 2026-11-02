---
lang: en-US
permalink: /en/components/input-tag/
---

# InputTag

Editable tag values with controlled array models.

## Reading direction

Tags follow reading order while their source array stays unchanged. With empty input, Backspace removes the last closable value; Enter adds a tag. Composition does not submit or delete tags.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Tag input size and state

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                            | Related examples         |
| --------------- | ---------------------------------- | ------------------------ |
| `default-value` | Default value (uncontrolled state) | Tag input size and state |
| `placeholder`   | Placeholder                        | Tag input size and state |
| `size`          | The size of the input              | Tag input size and state |
| `clearable`     | Enables the clear action           | Tag input size and state |
| `disabled`      | Whether disabled                   | Tag input size and state |
| `readonly`      | Whether it is read-only mode       | Tag input size and state |

<!-- demo-config-notes:end -->

Compare sizes and disabled, read-only or error appearance while keeping the empty-value protocol separate.

<demo src="./__demos__/appearance-state-comparison.vue"></demo>

## Content and presentation

### Max

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                                                   | Related examples |
| --------------- | --------------------------------------------------------- | ---------------- |
| `default-value` | Default value (uncontrolled state)                        | Max              |
| `placeholder`   | Placeholder                                               | Max              |
| `max-tag-count` | The maximum number of tags displayed, `0` means unlimited | Max              |
| `clearable`     | Enables the clear action                                  | Max              |

<!-- demo-config-notes:end -->

- `default-value`: Default value (uncontrolled state)
- `placeholder`: Placeholder
- `max-tag-count`: The maximum number of tags displayed, `0` means unlimited
- `clearable`: Whether to allow clear

<demo src="./__demos__/max.vue"></demo>

## Loading and waiting

### Controlled loading

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `loading` | Explicit business loading state | `boolean` | `false` |


Set loading explicitly to display feedback. Ordinary event return values do not drive loading. Before hooks retain their documented pending behavior.

<demo src="./__demos__/loading.vue"></demo>

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### `<input-tag>` Props

| Parameter                 | Description                                               | Type                                              |  Default   |
| ------------------------- | --------------------------------------------------------- | ------------------------------------------------- | :--------: |
| model-value **(v-model)** | Bound value                                               | `(string \| number \| TagData)[]`                 |    `-`     |
| default-value             | Default value (uncontrolled state)                        | `(string \| number \| TagData)[]`                 |    `[]`    |
| input-value **(v-model)** | The value of the input                                    | `string`                                          |    `-`     |
| default-input-value       | The default value of the input (uncontrolled state)       | `string`                                          |    `''`    |
| placeholder               | Placeholder                                               | `string`                                          |    `-`     |
| disabled                  | Whether disabled                                          | `boolean`                                         |  `false`   |
| error                     | Whether it is an error state                              | `boolean`                                         |  `false`   |
| readonly                  | Whether it is read-only mode                              | `boolean`                                         |  `false`   |
| clearable                 | Enables the clear action                                  | `boolean`                                         |  `false`   |
| size                      | The size of the input                                     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`            |   `'md'`   |
| variant                   | The variant of the input                                  | `'filled' \| 'outline' \| 'standard'`             | `'filled'` |
| max-tag-count             | The maximum number of tags displayed, `0` means unlimited | `number`                                          |    `0`     |
| retain-input-value        | Whether to keep the content of the input box              | `boolean \| { create?: boolean; blur?: boolean }` |  `false`   |
| format-tag                | Format tag content                                        | `(data: TagData) => string`                       |    `-`     |
| unique-value              | Whether to create only unique values                      | `boolean`                                         |  `false`   |
| field-names               | Customize fields in `TagData`                             | `InputTagFieldNames`                              |    `-`     |
| tag-nowrap                | Tag content does not wrap                                 | `boolean`                                         |  `false`   |

### `<input-tag>` Events

| Event              | Description                                   | Arguments                                               |
| ------------------ | --------------------------------------------- | ------------------------------------------------------- |
| change             | Emitted when the value changes                | value: `(string \| number \| TagData)[]`<br>ev: `Event` |
| input-value-change | Emitted when the input value changes          | inputValue: `string`<br>ev: `Event`                     |
| press-enter        | Emitted when Enter is pressed                 | inputValue: `string`<br>ev: `KeyboardEvent`             |
| remove             | Emitted when a tag's remove button is clicked | removed: `string \| number`<br>ev: `Event`              |
| clear              | Emitted when the clear button is clicked      | ev: `MouseEvent`                                        |
| focus              | Emitted when the input gains focus            | ev: `FocusEvent`                                        |
| blur               | Emitted when the input loses focus            | ev: `FocusEvent`                                        |

### `<input-tag>` Methods

| Method | Description     | Arguments | Returns |
| ------ | --------------- | --------- | ------- |
| focus  | Focus the input | -         | -       |
| blur   | Blur the input  | -         | -       |

### `<input-tag>` Slots

| Slot   |         Description         | Arguments       |
| ------ | :-------------------------: | --------------- |
| tag    | Displayed input-tag content | data: `TagData` |
| prefix |       Prefix content        | -               |
| suffix |       Suffix content        | -               |

### TagData

| Parameter | Description      | Type               | Default |
| --------- | ---------------- | ------------------ | :-----: |
| value     | Tag value        | `string \| number` |   `-`   |
| label     | Tag content      | `string`           |   `-`   |
| closable  | Whether closable | `boolean`          | `false` |
| tagProps  | Tag props        | `TagProps`         |   `-`   |

### Type definitions

The component exports the following types

```ts
import type { InputTagInstance } from "@cedar-design/ui";
```

## Removing legacy InputTag icon references

Cedar InputTag embeds Tag's actual close-btn and renders no old c-icon-hover pseudo-element. The old mixin import, default/focus pseudo-element backgrounds and duplicate custom Tag text rules are removed; Tag owns its text. Existing close-button appearance, click removal and readonly/disabled behavior remain, without a new hover background.

Both libraries remove tag-custom-icon-bg-hover; Cedar also removes input-tag-tag-remove-icon-color-bg / input-tag-tag-remove-icon-color-bg-focus. Unused variables have no replacements; remove ineffective overrides. No aliases remain. Maple has no InputTag component and only synchronizes shared Tag-variable cleanup.

The former cross-component exemptions are closed. check:token-consumers checks 414 Badge/Tag declarations without exemptions and compiles InputTag to prevent legacy icon selectors/variables returning. Integration tests cover actual DOM, close interactions and custom colors. The 553 shared defaults are unchanged because removed shared variables previously registered names only. This does not claim complete InputTag token, browser-visual or keyboard governance.

## InputTag wrapper and content responsibilities

FieldDecorator owns InputTag outline / filled / standard wrappers. Form must not redraw backgrounds, borders or focus shadows; old Form overrides for obsolete InputTag state classes are removed, while validation messages remain. filled default/hover/focus still use FieldDecorator fill-1 / fill-2 / fill-3.

input-tag-* controls content density, default tag backgrounds and disabled text. Selectors match actual c-field-decorator--size-* / --focus / --disabled classes rather than nonexistent old InputTag classes; disabled overrides focus. All xs/sm/md/lg/xl sizes are covered. xl uses 32px tags, 16px input text and 4px vertical padding.

Removed 33 unused wrapper variables: size-{xs,sm,md,lg}-height; color-text-error; color-placeholder, color-icon-clear, color-icon-clear-bg-hover; color-border-{default,error,disabled} and -hover/-focus forms; color-bg-{default,error}, their -hover/-focus forms, color-bg-disabled and its -hover form; color-shadow-{default,error}-focus; size-shadow-{default,error}-focus; border-radius, border-width, size-icon-clear and size-icon-clear-hover. All use --c-input-tag-. No compatibility aliases remain.

Migrate by responsibility: field-variant-{variant}-background for wrapper backgrounds; field-border-radius for corners; field-placeholder-text-color for placeholders; field-clear-icon-color / field-clear-icon-size for clear icons. Prefer size for geometry; do not override internal variables. Unused legacy variables have no one-to-one replacement. Tag content uses the InputTag variables below.

InputTag retains 27 content variables in unused-consumer checks. Both libraries’ Badge/Tag plus Cedar InputTag cover 441 declarations and 80 size/focus/disabled cascades. The shared-default contract remains 553 entries; Cedar-only InputTag is not a cross-platform shared component. Default text, disabled text, tag backgrounds and focused backgrounds use content-primary, content-disabled, surface-default and state-hover. Disabled restyles neutral tags only, preserving explicit color/status; business themes own custom-color contrast. Parent disabled/readonly overrides tagProps.closable/checkable. Loading or explicitly nonclosable tags cannot be removed with Backspace. Cedar spot checks cover five sizes, xl input/keyboard removal, light/dark modes and disabled custom colors, not a complete visual audit.

### Current content variables

| Variable                                  | Default                               |
| ----------------------------------------- | ------------------------------------- |
| `--c-input-tag-size-xs-tag-height`        | `20px`                                |
| `--c-input-tag-size-sm-tag-height`        | `20px`                                |
| `--c-input-tag-size-md-tag-height`        | `24px`                                |
| `--c-input-tag-size-lg-tag-height`        | `28px`                                |
| `--c-input-tag-size-xl-tag-height`        | `32px`                                |
| `--c-input-tag-size-xs-font-size`         | `12px`                                |
| `--c-input-tag-size-sm-font-size`         | `14px`                                |
| `--c-input-tag-size-md-font-size`         | `14px`                                |
| `--c-input-tag-size-lg-font-size`         | `14px`                                |
| `--c-input-tag-size-xl-font-size`         | `16px`                                |
| `--c-input-tag-color-text-default`        | `var(--c-sys-color-content-primary)`  |
| `--c-input-tag-color-text-disabled`       | `var(--c-sys-color-content-disabled)` |
| `--c-input-tag-tag-margin-right`          | `4px`                                 |
| `--c-input-tag-tag-margin-y`              | `2px`                                 |
| `--c-input-tag-padding-x`                 | `4px`                                 |
| `--c-input-tag-size-xs-padding-y`         | `0px`                                 |
| `--c-input-tag-size-sm-padding-y`         | `2px`                                 |
| `--c-input-tag-size-md-padding-y`         | `2px`                                 |
| `--c-input-tag-size-lg-padding-y`         | `2px`                                 |
| `--c-input-tag-size-xl-padding-y`         | `4px`                                 |
| `--c-input-tag-tag-font-size`             | `12px`                                |
| `--c-input-tag-tag-color-bg`              | `var(--c-sys-color-surface-default)`  |
| `--c-input-tag-tag-color-bg-focus`        | `var(--c-sys-color-state-hover)`      |
| `--c-input-tag-tag-color-bg-disabled`     | `var(--c-sys-color-state-hover)`      |
| `--c-input-tag-tag-color-border`          | `var(--c-color-fill-3)`               |
| `--c-input-tag-tag-color-border-disabled` | `var(--c-color-fill-3)`               |
| `--c-input-tag-tag-color-border-focus`    | `var(--c-sys-color-state-hover)`      |

### Form field presentation and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-`direct` modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

## Configuring the cleared value

`empty-value` / `emptyValue` sets the model value produced by clearing. It accepts a value in the component model type or a zero-argument factory. Omission preserves the existing default; use `() => undefined` to distinguish omission from returning undefined. Arrays are shallow-copied on every clear; selected items that cannot be cleared remain. It does not redefine emptiness, alter Form reset defaults or treat 0/false as universally empty.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.
