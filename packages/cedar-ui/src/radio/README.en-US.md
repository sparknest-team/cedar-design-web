---
lang: en-US
permalink: /en/components/radio/
---

# Radio

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Reading direction

Radio groups inherit source dir. Horizontal keys follow visible direction in RTL and skip disabled options; vertical keys and Home/End keep logical order. Radio and button variants retain one Tab entry. Changing direction does not change the selected value.

## Basic examples

### Basic usage

- `disabled`: Prevents user interaction.

<demo src="./__demos__/basic.vue"></demo>

## Groups and layout

### Radio group declarations

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                                                   | Related examples                                       |
| ------------- | --------------------------------------------------------- | ------------------------------------------------------ |
| `value`       | Option `value`                                            | Radio group declarations, Group Direction, Button Type |
| `disabled`    | Disabled state; inherits from the form/group when omitted | Radio group declarations, Grid Layout                  |

<!-- demo-config-notes:end -->

Compare child and options declarations, then select items to inspect the group model.

<demo src="./__demos__/group-declaration-comparison.vue"></demo>

### Group Direction

Preview configuration: `orientation="vertical"`, `value="A"`, `value="B"`, `value="C"`.

<demo src="./__demos__/group-direction.vue"></demo>

### Button Type

Preview configuration: `variant="button"`, `value="Beijing"`, `value="Shanghai"`, `value="Guangzhou"`.

<demo src="./__demos__/button-type.vue"></demo>

### Grid Layout

- `disabled`: Prevents user interaction.

<demo src="./__demos__/grid-layout.vue"></demo>

### Group State

Preview configuration: `:default-value="'a'"`, `:options="options"`, `:readonly="readonly"`, `:model-value="''"`.

<demo src="./__demos__/group-state.vue"></demo>

### Button Sizes

Preview configuration: `variant="button"`, `:size="size"`, `default-value="week"`, `:options="options"`.

<demo src="./__demos__/button-sizes.vue"></demo>

## Options and value model

### Control Value

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                                                   | Related examples          |
| --------------- | --------------------------------------------------------- | ------------------------- |
| `default-value` | Initial uncontrolled value                                | Control Value, Controlled |
| `value`         | Option `value`                                            | Control Value             |
| `readonly`      | Readonly state; inherits from the form/group when omitted | Control Value             |
| `disabled`      | Disabled state; inherits from the form/group when omitted | Control Value             |

<!-- demo-config-notes:end -->

- `readonly`: Displays the current value without allowing edits.
- `disabled`: Prevents user interaction.

<demo src="./__demos__/control-value.vue"></demo>

### Option Data

Preview configuration: `:options="options"`, `:field-names="fields"`, `orientation="vertical"`, `:options="renderOptions"`.

<demo src="./__demos__/option-data.vue"></demo>

### Controlled

Preview configuration: `:model-value="true"`, `:model-value="checked2"`, `:default-value="true"`.

<demo src="./__demos__/controlled.vue"></demo>

## Interaction and keyboard

### State Lab

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                                                   | Related examples |
| ------------- | --------------------------------------------------------- | ---------------- |
| `value`       | Option `value`                                            | State Lab        |
| `disabled`    | Disabled state; inherits from the form/group when omitted | State Lab        |
| `readonly`    | Readonly state; inherits from the form/group when omitted | State Lab        |
| `error`       | Error state; inherits from the form/group when omitted    | State Lab        |

<!-- demo-config-notes:end -->

Preview configuration: `value="design"`.

<demo src="./__demos__/state-lab.vue"></demo>

### Keyboard Navigation

Preview configuration: `:options="options"`, `aria-label="通知方式"`.

<demo src="./__demos__/keyboard-navigation.vue"></demo>

## Control and content customization

### Native Control

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                                                   | Related examples             |
| ------------- | --------------------------------------------------------- | ---------------------------- |
| `value`       | Option `value`                                            | Native Control, Custom Radio |
| `readonly`    | Readonly state; inherits from the form/group when omitted | Native Control               |

<!-- demo-config-notes:end -->

- `readonly`: Displays the current value without allowing edits.

<demo src="./__demos__/native-control.vue"></demo>

### Custom Radio

Preview configuration: `default-value="1"`, `value="1"`, `:model-value="checked"`, `checkable`.

<demo src="./__demos__/custom-radio.vue"></demo>

## Async options

### Async Options

Preview configuration: `edit-mode="direct"`, `:options="options"`.

<demo src="./__demos__/async-options.vue"></demo>

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

`ChoiceValue = string | number | boolean`；`CheckboxModel = boolean | ChoiceValue[]`；`RadioModel = ChoiceValue | null`。

### Radio Props

| Prop                  | Description                                               | Type                      | Default   |
| --------------------- | --------------------------------------------------------- | ------------------------- | --------- |
| model-value (v-model) | Controlled value                                          | ChoiceValue \| null       | undefined |
| default-value         | Initial uncontrolled value                                | ChoiceValue \| null       | null      |
| value                 | Option `value`                                            | `string\|number\|boolean` | `true`    |
| variant               | Radio variant                                             | `'radio'\|'button'`       | `'radio'` |
| disabled              | Disabled state; inherits from the form/group when omitted | boolean                   | undefined |
| readonly              | Readonly state; inherits from the form/group when omitted | boolean                   | undefined |
| error                 | Error state; inherits from the form/group when omitted    | boolean                   | undefined |

### Radio Events

| Event              | Description          | Arguments                         |
| ------------------ | -------------------- | --------------------------------- |
| update:model-value | Proposes a new value | value: ChoiceValue                |
| change             | Value change         | value: ChoiceValue, event?: Event |
| focus              | Focus                | event: FocusEvent                 |
| blur               | Blur                 | event: FocusEvent                 |

### Radio Methods

| Method | Arguments              | Returns |
| ------ | ---------------------- | ------- |
| select | -                      | void    |
| focus  | options?: FocusOptions | void    |
| blur   | -                      | void    |

### Radio Slots

| Slot  | Description          | Arguments                                |
| ----- | -------------------- | ---------------------------------------- |
| radio | Custom radio control | `checked:boolean`<br/>`disabled:boolean` |

### RadioGroup Props

| Prop                  | Description                                                                                            | Type                                                                                                    | Default        |
| --------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | -------------- |
| model-value (v-model) | Controlled value                                                                                       | RadioModel                                                                                              | undefined      |
| default-value         | Initial uncontrolled value                                                                             | RadioModel                                                                                              | null           |
| variant               | Radio-group variant                                                                                    | `'radio'\|'button'`                                                                                     | `'radio'`      |
| size                  | Radio-group size                                                                                       | `'xs'\|'sm'\|'md'\|'lg'\|'xl'`                                                                          | `-`            |
| options               | Options; replaces default slot when supplied                                                           | Array<ChoiceValue \| RadioOption \| Record<string, unknown>> / `(query, { signal }) => Array / Promise` | `undefined`    |
| orientation           | Horizontal/vertical arrangement of radio-group options, default horizontal; not text reading direction | `'horizontal'\|'vertical'`                                                                              | `'horizontal'` |
| disabled              | Disabled state; inherits from the form/group when omitted                                              | boolean                                                                                                 | undefined      |
| readonly              | Readonly state; inherits from the form/group when omitted                                              | boolean                                                                                                 | undefined      |
| error                 | Error state; inherits from the form/group when omitted                                                 | boolean                                                                                                 | undefined      |
| field-names           | Option field mapping                                                                                   | ChoiceFieldNames                                                                                        | undefined      |
| aria-label            | Accessible group name                                                                                  | string                                                                                                  | ''             |

### RadioGroup Events

| Event              | Description                          | Arguments                                      |
| ------------------ | ------------------------------------ | ---------------------------------------------- |
| update:model-value | Proposes a new value                 | value: string \| number \| boolean             |
| change             | Value change; notified once by Group | value: string \| number \| boolean, ev?: Event |

### RadioGroup Slots

| Slot  | Description          | Arguments                                |
| ----- | -------------------- | ---------------------------------------- |
| radio | Custom radio control | `checked:boolean`<br/>`disabled:boolean` |
| label | Radio label content  | `data: RadioOption, checked: boolean`    |

### RadioOption

| Field    | Description              | Type                                                              |
| -------- | ------------------------ | ----------------------------------------------------------------- |
| value    | Option identity          | ChoiceValue                                                       |
| label    | Label or render function | VNodeChild \| (data: RadioOption, checked: boolean) => VNodeChild |
| disabled | Disable interaction      | boolean                                                           |
| readonly | Read-only interaction    | boolean                                                           |

## Type definitions

The component exports the following types

```ts
import type { RadioProps } from "@cedar-design/ui";
```

### ChoiceFieldNames

`{ label?: string; value?: string; disabled?: string; readonly?: string; indeterminate?: string }`

Exported types：`RadioOption`、`ChoiceFieldNames`。

### Native attributes and appearance

| Component          | Prop                            | Description                                                       | Type                | Default   |
| ------------------ | ------------------------------- | ----------------------------------------------------------------- | ------------------- | --------- |
| Radio / RadioGroup | name                            | Native field name; child overrides group                          | string              | undefined |
| Radio              | aria-label                      | Native control accessible name                                    | string              | undefined |
| Radio              | input-attrs                     | Native input attributes                                           | InputHTMLAttributes | undefined |
| Radio              | checked-color / unchecked-color | Instance checked/unchecked colors; error/disabled take precedence | string              | undefined |
| Radio              | icon-size                       | Icon dimension; numbers are px, strings are CSS lengths           | number \| string    | undefined |
| Radio              | ripple                          | Touch ripple feedback                                             | boolean             | true      |

### Icons and default slot

checked-icon and unchecked-icon are supported on both platforms. default and radio slots receive { checked, disabled }. click emits the original MouseEvent once. Disabled emits no click; readonly may emit click without changing the value.

### Form field presentation and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-`direct` modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

The `options` prop accepts an array or `(query, { signal }) => array/Promise`. The component manages loading, cancellation and stale-result isolation; failures emit load-error. Single/multiple groups initialize with an empty-string query, searchable fields reload when the query changes, and root loading for tree fields remains independent of existing load-more child loading.
