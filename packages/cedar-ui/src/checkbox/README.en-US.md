---
lang: en-US
permalink: /en/components/checkbox/
---

# Checkbox

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Reading direction

Checkbox labels and groups follow source dir without reversing value arrays. Space keeps its toggle meaning; disabled and readonly behavior remains effective. Changing direction does not select or clear options.

## Basic examples

### Basic usage

Preview configuration: `value="1"`.

<demo src="./__demos__/basic.vue"></demo>

## Groups and layout

### Option declaration comparison

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                                                   | Related examples                    |
| ------------- | --------------------------------------------------------- | ----------------------------------- |
| `value`       | Option identifier in array/group mode                     | Option declaration comparison, Grid |
| `disabled`    | Disabled state; inherits from the form/group when omitted | Grid                                |

<!-- demo-config-notes:end -->

Compare child-component declarations with options data. Both use a group model; field mapping and asynchronous data are separate.

<demo src="./__demos__/group-declaration-comparison.vue"></demo>

### Grid

- `disabled`: Prevents user interaction.

<demo src="./__demos__/grid.vue"></demo>

### Group State

Preview configuration: `:default-value="['a']"`, `:options="options"`, `:readonly="readonly"`, `:model-value="[]"`.

<demo src="./__demos__/group-state.vue"></demo>

## Options and value model

### Control Value

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                                                   | Related examples               |
| --------------- | --------------------------------------------------------- | ------------------------------ |
| `default-value` | Initial uncontrolled value                                | Control Value, Controlled Mode |
| `value`         | Option identifier in array/group mode                     | Control Value                  |
| `readonly`      | Readonly state; inherits from the form/group when omitted | Control Value                  |
| `disabled`      | Disabled state; inherits from the form/group when omitted | Control Value                  |

<!-- demo-config-notes:end -->

- `readonly`: Displays the current value without allowing edits.
- `disabled`: Prevents user interaction.

<demo src="./__demos__/control-value.vue"></demo>

### Option Data

Preview configuration: `:options="options"`, `:field-names="fields"`, `orientation="vertical"`, `:options="renderOptions"`.

<demo src="./__demos__/option-data.vue"></demo>

### Controlled Mode

Preview configuration: `:model-value="true"`, `:model-value="checked2"`, `:default-value="true"`.

<demo src="./__demos__/controlled-mode.vue"></demo>

## Selection and bulk actions

### Max Checked

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                                                   | Related examples                          |
| --------------- | --------------------------------------------------------- | ----------------------------------------- |
| `value`         | Option identifier in array/group mode                     | Max Checked, Checked All Indeterminate    |
| `disabled`      | Disabled state; inherits from the form/group when omitted | Max Checked, Interaction state comparison |
| `indeterminate` | Whether to display an indeterminate state                 | Checked All Indeterminate                 |
| `readonly`      | Readonly state; inherits from the form/group when omitted | Interaction state comparison              |
| `error`         | Error state; inherits from the form/group when omitted    | Interaction state comparison              |

<!-- demo-config-notes:end -->

- `disabled`: Prevents user interaction.

<demo src="./__demos__/max-checked.vue"></demo>

### Checked All Indeterminate

Preview configuration: `:model-value="checkedAll"`, `:indeterminate="indeterminate"`, `value="1"`, `value="2"`.

<demo src="./__demos__/checked-all-indeterminate.vue"></demo>

### Group Methods

Preview configuration: `:options="reverse ? [...options].reverse() : options"`, `:max="4"`, `orientation="vertical"`.

<demo src="./__demos__/group-methods.vue"></demo>

### Interaction state comparison

Toggle the state, interact with the component, and restore editing using the controls outside the specimen. Error appearance alone does not run validation.

<demo src="./__demos__/state-lab.vue"></demo>

## Control and slot customization

### Native Control

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                                                   | Related examples |
| --------------- | --------------------------------------------------------- | ---------------- |
| `name`          | Native field name; inherits from Group when omitted       | Native Control   |
| `indeterminate` | Whether to display an indeterminate state                 | Native Control   |
| `aria-label`    | Accessible name when no visible label exists              | Native Control   |
| `default-value` | Initial uncontrolled value                                | Native Control   |
| `readonly`      | Readonly state; inherits from the form/group when omitted | Native Control   |
| `disabled`      | Disabled state; inherits from the form/group when omitted | Native Control   |

<!-- demo-config-notes:end -->

- `readonly`: Displays the current value without allowing edits.
- `disabled`: Prevents user interaction.

<demo src="./__demos__/native-control.vue"></demo>

### Checked Custom

Preview configuration: `:default-value="['1']"`, `value="1"`, `:model-value="checked"`, `value="2"`.

<demo src="./__demos__/checked-custom.vue"></demo>

### Custom Control

Preview configuration: `:icon-size="28"`, `checked-color="#137547"`, `unchecked-color="#656565"`, `icon-size="1.5rem"`.

<demo src="./__demos__/custom-control.vue"></demo>

## Async options

### Async Options

Preview configuration: `edit-mode="direct"`, `:options="options"`, `:max="2"`.

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

### Checkbox Props

| Prop                   | Description                                                     | Type                     | Default   |
| ---------------------- | --------------------------------------------------------------- | ------------------------ | --------- |
| model-value (v-model)  | Controlled value                                                | boolean \| ChoiceValue[] | undefined |
| default-value          | Initial uncontrolled value                                      | boolean \| ChoiceValue[] | false     |
| value                  | Option identifier in array/group mode                           | string\|number\|boolean  | true      |
| disabled               | Disabled state; inherits from the form/group when omitted       | boolean                  | undefined |
| readonly               | Readonly state; inherits from the form/group when omitted       | boolean                  | undefined |
| error                  | Error state; inherits from the form/group when omitted          | boolean                  | undefined |
| indeterminate          | Whether to display an indeterminate state                       | boolean                  | false     |
| checked-color          | Instance checked color; error/disabled states take precedence   | string                   | undefined |
| unchecked-color        | Instance unchecked color; error/disabled states take precedence | string                   | undefined |
| icon-size              | Numbers are px; strings are CSS lengths                         | number \| string         | undefined |
| ripple                 | Whether to enable ripple feedback                               | boolean                  | true      |
| uninject-group-context | Ignore surrounding CheckboxGroup; form state still applies      | boolean                  | false     |
| name                   | Native field name; inherits from Group when omitted             | string                   | undefined |
| aria-label             | Accessible name when no visible label exists                    | string                   | undefined |

### Checkbox Events

| Event              | Description                       | Arguments                           |
| ------------------ | --------------------------------- | ----------------------------------- |
| update:model-value | Proposes a new value              | value: CheckboxModel                |
| change             | Value change                      | value: CheckboxModel, event?: Event |
| click              | Click; not emitted while disabled | event: MouseEvent                   |
| focus              | Focus                             | event: FocusEvent                   |
| blur               | Blur                              | event: FocusEvent                   |

### Checkbox Methods

| Method | Arguments              | Returns |
| ------ | ---------------------- | ------- |
| toggle | checked?: boolean      | void    |
| focus  | options?: FocusOptions | void    |
| blur   | -                      | void    |

### Checkbox Slots

| Slot               | Description                               | Arguments                                                   |
| ------------------ | ----------------------------------------- | ----------------------------------------------------------- |
| checkbox           | Customize the complete control appearance | checked: boolean, disabled: boolean, indeterminate: boolean |
| checked-icon       | Checked icon                              | -                                                           |
| unchecked-icon     | Unchecked icon                            | -                                                           |
| indeterminate-icon | Half icon                                 | -                                                           |
| default            | Label                                     | checked: boolean                                            |

### CheckboxGroup Props

| Prop                  | Description                                                                                               | Type                                                                                                       | Default      |
| --------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------ |
| model-value (v-model) | Controlled value                                                                                          | ChoiceValue[]                                                                                              | undefined    |
| default-value         | Initial uncontrolled value                                                                                | ChoiceValue[]                                                                                              | []           |
| max                   | Maximum selection count                                                                                   | number                                                                                                     | undefined    |
| options               | Options; replaces default slot when supplied                                                              | Array<ChoiceValue \| CheckboxOption \| Record<string, unknown>> / `(query, { signal }) => Array / Promise` | `undefined`  |
| orientation           | Horizontal/vertical arrangement of checkbox-group options, default horizontal; not text reading direction | Orientation                                                                                                | 'horizontal' |
| disabled              | Disabled state; inherits from the form/group when omitted                                                 | boolean                                                                                                    | undefined    |
| readonly              | Readonly state; inherits from the form/group when omitted                                                 | boolean                                                                                                    | undefined    |
| error                 | Error state; inherits from the form/group when omitted                                                    | boolean                                                                                                    | undefined    |
| field-names           | Option field mapping                                                                                      | ChoiceFieldNames                                                                                           | undefined    |
| name                  | Native input name within the group                                                                        | string                                                                                                     | undefined    |
| aria-label            | Accessible group name                                                                                     | string                                                                                                     | undefined    |

### CheckboxGroup Methods

| Method     | Arguments | Returns       |
| ---------- | --------- | ------------- |
| checkAll   | -         | ChoiceValue[] |
| inverseAll | -         | ChoiceValue[] |

### CheckboxGroup Events

| Event              | Description                          | Arguments                                          |
| ------------------ | ------------------------------------ | -------------------------------------------------- |
| update:model-value | Proposes a new value                 | value: (string \| number \| boolean)[]             |
| change             | Value change; notified once by Group | value: (string \| number \| boolean)[], ev?: Event |

### CheckboxGroup Slots

| Slot     | Description            | Arguments                              |
| -------- | ---------------------- | -------------------------------------- |
| checkbox | Custom checkbox        | checked: boolean<br/>disabled: boolean |
| label    | Checkbox label content | data: CheckboxOption, checked: boolean |

### CheckboxOption

| Field         | Description                      | Type                                                                 |
| ------------- | -------------------------------- | -------------------------------------------------------------------- |
| value         | Option identity                  | ChoiceValue                                                          |
| label         | Label or render function         | VNodeChild \| (data: CheckboxOption, checked: boolean) => VNodeChild |
| disabled      | Disable interaction              | boolean                                                              |
| readonly      | Read-only interaction            | boolean                                                              |
| indeterminate | Display-only indeterminate state | boolean                                                              |

## Type definitions

The component exports the following types

```ts
import type { CheckboxProps } from "@cedar-design/ui";
```

### ChoiceFieldNames

`{ label?: string; value?: string; disabled?: string; readonly?: string; indeterminate?: string }`

Exported types：`CheckboxOption`、`ChoiceFieldNames`。

Public method type：`CheckboxGroupMethods`；`CheckboxGroupInstance` includes these methods.

### Reduced motion

Built-in CSS transitions follow `prefers-reduced-motion: reduce`. Removing transitions does not change final visibility, selected/expanded state or event semantics. Applications control custom animations inside slots.

### Style variables

| Variable                                 | Default                                |
| ---------------------------------------- | -------------------------------------- |
| `--c-checkbox-control-color`             | `var(--c-sys-color-content-secondary)` |
| `--c-checkbox-control-color-checked`     | `var(--c-sys-color-content-brand)`     |
| `--c-checkbox-mark-color`                | `var(--c-sys-color-surface-default)`   |
| `--c-checkbox-control-color-disabled`    | `var(--c-sys-color-content-disabled)`  |
| `--c-checkbox-control-color-error`       | `var(--c-sys-color-content-danger)`    |
| `--c-checkbox-control-size`              | `14px`                                 |
| `--c-checkbox-label-text-color`          | `var(--c-sys-color-content-primary)`   |
| `--c-checkbox-label-text-color-disabled` | `var(--c-sys-color-content-disabled)`  |
| `--c-checkbox-label-font-size`           | `var(--c-font-size-body-3)`            |
| `--c-checkbox-label-gap`                 | `var(--c-spacing-4)`                   |
| `--c-checkbox-action-padding`            | `5px`                                  |
| `--c-checkbox-group-gap`                 | `var(--c-spacing-7)`                   |
| `--c-checkbox-animation-duration`        | `var(--c-transition-duration-3)`       |

### Form field presentation and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-`direct` modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

The `options` prop accepts an array or `(query, { signal }) => array/Promise`. The component manages loading, cancellation and stale-result isolation; failures emit load-error. Single/multiple groups initialize with an empty-string query, searchable fields reload when the query changes, and root loading for tree fields remains independent of existing load-more child loading.
