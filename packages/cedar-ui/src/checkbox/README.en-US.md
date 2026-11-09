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

| Configuration | Purpose | Related examples |
| ---------- | ------------------------------- | ---------------------- |
| `value` | Option identifier in array/group mode | Option declaration comparison, Grid |
| `disabled` | Disabled state; inherits from the form/group when omitted | Grid |

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

| Configuration | Purpose | Related examples |
| --------------- | ------------------------------- | ---------------------- |
| `default-value` | Initial uncontrolled value | Control Value, Controlled Mode |
| `value` | Option identifier in array/group mode | Control Value |
| `readonly` | Readonly state; inherits from the form/group when omitted | Control Value |
| `disabled` | Disabled state; inherits from the form/group when omitted | Control Value |

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

| Configuration | Purpose | Related examples |
| --------------- | ------------------------------- | ---------------------------- |
| `value` | Option identifier in array/group mode | Max Checked, Checked All Indeterminate |
| `disabled` | Disabled state; inherits from the form/group when omitted | Max Checked, Interaction state comparison |
| `indeterminate` | Whether to display an indeterminate state | Checked All Indeterminate |
| `readonly` | Readonly state; inherits from the form/group when omitted | Interaction state comparison |
| `error` | Error state; inherits from the form/group when omitted | Interaction state comparison |

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

| Configuration | Purpose | Related examples |
| --------------- | ------------------------------- | -------------- |
| `name` | Native field name; inherits from Group when omitted | Native Control |
| `indeterminate` | Whether to display an indeterminate state | Native Control |
| `aria-label` | Accessible name when no visible label exists | Native Control |
| `default-value` | Initial uncontrolled value | Native Control |
| `readonly` | Readonly state; inherits from the form/group when omitted | Native Control |
| `disabled` | Disabled state; inherits from the form/group when omitted | Native Control |

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

## Native input attributes and keyboard cancellation

Native `id`, `form`, `required`, constraints, aria/data attributes and keyboard listeners belong to the actual input. Class/`style` and other shell attributes remain on the label. Generated native IDs are stable and unique, and an external label can target an explicit `id`. HTML `required` participates in native browser `form` validation, separately from Form business rules.

Once / Capture / Passive native listener modifiers stay on the input rather than firing from interactive slot children. Native preventDefault can veto Enter / Space activation and RadioGroup arrow navigation; canceled Space leaves no delayed release action. Checked, disabled, input type and group Tab navigation remain component-managed.

The nullable Checkbox model is preserved. checked in default / checkbox slots is always boolean, with null shown as false; rendering alone never proposes a new model.

## Usage notes

### Editing and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-direct modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(payload, done, context)` can guard saving the editor. FormItem validates the candidate first; invalid candidates keep the editor open. `open / default-open / update:open` control the editor. `#read="{ value, text }"` customizes read content. See the unified field presentation examples in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

The `options` prop accepts an array or `(query, { signal }) => array/Promise`. The component manages loading, cancellation and stale-result isolation; failures emit load-error. Single/multiple groups initialize with an empty-string query, searchable fields reload when the query changes, and root loading for tree fields remains independent of existing load-more child loading.

Public focus/blur methods are callable from initial mount. Focus opens an editable deferred editor and targets it after readiness; disabled, readonly, or reading fields do not open. Blur only blurs the current target without reopening. Stored methods never bind an old editor; closure, mode changes, deactivation, or unmount cancel queued calls.

CheckboxGroup checkAll/inverseAll change values only through an active editor. When a deferred editor is closed, deactivated, or unmounted, calls return an independent array copy of the current business value without opening the editor or publishing model changes.

## API

### Parameters, presentation clearing and mount-time boundaries

orientation accepts horizontal / vertical and falls back to horizontal after invalid-value diagnostics. max belongs to CheckboxGroup: valid values are finite nonnegative integers, zero forbids new choices, and omission is unlimited. Existing external values are never truncated. Invalid JavaScript callers retain the existing normalization after diagnostics: negatives become zero, fractions are floored, NaN is unlimited, and Infinity remains unlimited.

icon-size accepts positive lengths. Numbers and numeric strings use px, including positive fractions such as 0.5. Invalid, nonpositive or nonfinite values diagnose and fall back to the theme; the Divider minimum of 1 does not apply. Business styles determine the final resolved value of CSS expressions.

uninject-group-context decides group participation at mount. Changing it later does not reinject; change the key or remount. An isolated control still participates in Form. clearable / empty-value apply only to explicit presentation-layer clearing; native unchecking still proposes false or removes the array value and never uses empty-value. Ordinary event Promises do not participate in waiting; before-commit uses payload / done / context only when saving a deferred edit.

During an explicit options request both group roots announce aria-busy and emit one load-error on failure. No loading prop or extra graphic is added, and loading/failure never proposes a new model.

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

`ChoiceValue = string | number | boolean`；`CheckboxModel = boolean | ChoiceValue[] | null`；`RadioModel = ChoiceValue | null`。

### Checkbox Props

| Prop | Description | Type | Default |
| ---------------------- | ---------------------------------- | ------------------------ | --------- |
| model-value (v-model) | Controlled value | CheckboxModel | undefined |
| default-value | Initial uncontrolled value | CheckboxModel | false |
| value | Option identifier in array/group mode | string\|number\|boolean | true |
| disabled | Disabled state; inherits from the form/group when omitted | boolean | undefined |
| readonly | Readonly state; inherits from the form/group when omitted | boolean | undefined |
| error | Error state; inherits from the form/group when omitted | boolean | undefined |
| indeterminate | Whether to display an indeterminate state | boolean | false |
| checked-color | Instance checked color; error/disabled states take precedence | string | undefined |
| unchecked-color | Instance unchecked color; error/disabled states take precedence | string | undefined |
| icon-size | Positive length; invalid values diagnose and fall back to the theme | number \| string | undefined |
| ripple | Whether to enable ripple feedback | boolean | true |
| uninject-group-context | Ignore surrounding CheckboxGroup; form state still applies | boolean | false |
| name | Native field name; inherits from Group when omitted | string | undefined |
| aria-label | Accessible name when no visible label exists | string | undefined |
| edit-mode | Editing mode, inherited from FormItem and Form | `'direct' \| 'click' \| 'dblclick'` | `'direct'` |
| read-pretty | Independent read presentation; explicit false overrides the parent | `boolean` | `false` |
| clearable | Deferred editor clearing; does not change native deselection | `boolean` | `false` |
| empty-value | Explicit presentation clear output; does not control native unchecking | `CheckboxModel \| (() => CheckboxModel)` | `false` |
| empty-values | Empty-value recognition; field takes precedence over FormItem and Form | `readonly unknown[]` | `-` |
| empty-text | Read empty text; an explicit empty string is valid | `string` | `'-'` |
| before-commit | Guard before saving a deferred edit; return a boolean or Promise, or complete via done | `(payload: { value: unknown; previousValue: unknown }, done: (allow?: boolean) => void, context: { signal: AbortSignal; event?: Event }) => void \| boolean \| Promise<void \| boolean>` | `-` |
| open | Controlled editor visibility, separate from native input focus | `boolean` | `-` |
| default-open | Initial visibility of an uncontrolled editor | `boolean` | `false` |
| popup-container | Editor mount container | `string \| HTMLElement \| false` | `-` |

### Checkbox Events

| Event | Description | Arguments |
| ------------------ | ---------------- | ----------------------------------- |
| update:modelValue | Proposes a new value | value: CheckboxModel |
| change | Value change | value: CheckboxModel, event?: Event |
| click | Click; not emitted while disabled | event: MouseEvent |
| focus | Focus | event: FocusEvent |
| blur | Blur | event: FocusEvent |
| update:open | Controlled editor visibility update | open: boolean |
| open-change | Actual editor visibility change | open: boolean |

### Checkbox Methods

| Method | Arguments | Returns |
| ------ | ---------------------- | ------ |
| toggle | checked?: boolean | void |
| focus | options?: FocusOptions | void |
| blur | - | void |

### Checkbox Slots

| Slot | Description | Prop |
| ------------------ | ------------------ | ----------------------------------------------------------- |
| checkbox | Customize the complete control appearance | checked: boolean, disabled: boolean, indeterminate: boolean |
| checked-icon | Checked icon | - |
| unchecked-icon | Unchecked icon | - |
| indeterminate-icon | Half icon | - |
| default | Label | checked: boolean |
| read | Custom read content, taking precedence over empty-text | value: CheckboxModel, text: string |

### CheckboxGroup Props

| Prop | Description | Type | Default |
| --------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------ |
| model-value (v-model) | Controlled value | ChoiceValue[] \| null | undefined |
| default-value | Initial uncontrolled value | ChoiceValue[] | [] |
| max | Maximum selection count | number | undefined |
| options | Options; replaces default slot when supplied | Array<ChoiceValue \| CheckboxOption \| Record<string, unknown>> / `(query, { signal }) => Array / Promise` | `undefined` |
| orientation | Horizontal/vertical arrangement of checkbox-group options, default horizontal; not text reading direction | Orientation<br>`'horizontal' \| 'vertical'` | 'horizontal' |
| disabled | Disabled state; inherits from the form/group when omitted | boolean | undefined |
| readonly | Readonly state; inherits from the form/group when omitted | boolean | undefined |
| error | Error state; inherits from the form/group when omitted | boolean | undefined |
| field-names | Option field mapping | ChoiceFieldNames | undefined |
| name | Native input name within the group | string | undefined |
| aria-label | Accessible group name | string | undefined |
| edit-mode | Editing mode, inherited from FormItem and Form | `'direct' \| 'click' \| 'dblclick'` | `'direct'` |
| read-pretty | Independent read presentation; explicit false overrides the parent | `boolean` | `false` |
| clearable | Deferred editor clearing; does not change native deselection | `boolean` | `false` |
| empty-value | Explicit presentation clear output; does not control native unchecking | `ChoiceValue[] \| null \| (() => ChoiceValue[] \| null)` | `[]` |
| empty-values | Empty-value recognition; field takes precedence over FormItem and Form | `readonly unknown[]` | `-` |
| empty-text | Read empty text; an explicit empty string is valid | `string` | `'-'` |
| before-commit | Guard before saving a deferred edit; return a boolean or Promise, or complete via done | `(payload: { value: unknown; previousValue: unknown }, done: (allow?: boolean) => void, context: { signal: AbortSignal; event?: Event }) => void \| boolean \| Promise<void \| boolean>` | `-` |
| open | Controlled editor visibility, separate from native input focus | `boolean` | `-` |
| default-open | Initial visibility of an uncontrolled editor | `boolean` | `false` |
| popup-container | Editor mount container | `string \| HTMLElement \| false` | `-` |

### CheckboxGroup Methods

| Method | Arguments | Returns |
| ---------- | ---- | ------------- |
| checkAll | - | ChoiceValue[] |
| inverseAll | - | ChoiceValue[] |

### CheckboxGroup Events

| Event | Description | Arguments |
| ------------------ | --------------------------- | -------------------------------------------------- |
| update:modelValue | Proposes a new value | value: ChoiceValue[] \| null |
| change | Value change proposal | value: ChoiceValue[] \| null, event?: Event |
| update:open | Controlled editor visibility update | open: boolean |
| open-change | Actual editor visibility change | open: boolean |
| load-error | Explicit option loading failed; does not change the model | error: unknown |

### CheckboxGroup Slots

| Slot | Description | Prop |
| -------- | ----------------- | -------------------------------------- |
| checkbox | Custom checkbox | checked: boolean<br/>disabled: boolean<br/>indeterminate: boolean |
| label | Checkbox label content | data: CheckboxOption, checked: boolean |
| read | Custom read content, taking precedence over empty-text | value: ChoiceValue[] \| null, text: string |
| default | Native child options when options is omitted | - |

## Types

### CheckboxOption

| Field | Description | Type |
| ------------- | -------------- | -------------------------------------------------------------------- |
| value | Option identity | ChoiceValue |
| label | Label or render function | VNodeChild \| (data: CheckboxOption, checked: boolean) => VNodeChild |
| disabled | Disable interaction | boolean |
| readonly | Read-only interaction | boolean |
| indeterminate | Display-only indeterminate state | boolean |

The component exports the following types

```ts
import type { CheckboxProps } from "@cedar-design/ui";
```

### ChoiceFieldNames

`{ label?: string; value?: string; disabled?: string; readonly?: string; indeterminate?: string }`

Public types: `CheckboxOption`, `ChoiceFieldNames`, `CheckboxSlots` and `CheckboxGroupSlots`, consistently exported from root and subentries.

Public method type：`CheckboxGroupMethods`；`CheckboxGroupInstance` includes these methods.

### Reduced motion

Built-in CSS transitions follow `prefers-reduced-motion: reduce`. Removing transitions does not change final visibility, selected/expanded state or event semantics. Applications control custom animations inside slots.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-checkbox-action-padding` | `5px` | `padding` |
| `--c-checkbox-animation-duration` | `var(--c-transition-duration-3)` | `transition` |
| `--c-checkbox-control-border-radius` | `2px` | `border-radius` |
| `--c-checkbox-control-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-checkbox-control-color-checked` | `var(--c-sys-color-content-brand)` | `color`, `outline` |
| `--c-checkbox-control-color-disabled` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-checkbox-control-color-error` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-checkbox-control-size` | `14px` | `height`, `width` |
| `--c-checkbox-group-gap` | `var(--c-spacing-7)` | `gap` |
| `--c-checkbox-label-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-checkbox-label-gap` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-checkbox-label-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-checkbox-label-text-color-disabled` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-checkbox-mark-color` | `var(--c-sys-color-surface-default)` | `background-color`, `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-checkbox-action-padding: 5px;
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
