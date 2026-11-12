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

| Configuration | Purpose | Related examples |
| ---------- | ------------------------------- | ------------------------------------------------ |
| `value` | Option `value` | Radio group declarations, Group Direction, Button Type |
| `disabled` | Disabled state; inherits from the form/group when omitted | Radio group declarations, Grid Layout |

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

| Configuration | Purpose | Related examples |
| --------------- | ------------------------------- | ---------------------- |
| `default-value` | Initial uncontrolled value | Control Value, Controlled |
| `value` | Option `value` | Control Value |
| `readonly` | Readonly state; inherits from the form/group when omitted | Control Value |
| `disabled` | Disabled state; inherits from the form/group when omitted | Control Value |

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

| Configuration | Purpose | Related examples |
| ---------- | ------------------------------- | ------------ |
| `value` | Option `value` | State Lab |
| `disabled` | Disabled state; inherits from the form/group when omitted | State Lab |
| `readonly` | Readonly state; inherits from the form/group when omitted | State Lab |
| `error` | Error state; inherits from the form/group when omitted | State Lab |

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

| Configuration | Purpose | Related examples |
| ---------- | ------------------------------- | ---------------------------------- |
| `value` | Option `value` | Native Control, Custom Radio |
| `readonly` | Readonly state; inherits from the form/group when omitted | Native Control |

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

## Native input attributes and keyboard cancellation

Native `id`, `form`, `required`, constraints, aria/data attributes and keyboard listeners belong to the actual input. Class/`style` and other shell attributes remain on the label. Generated native IDs are stable and unique, and an external label can target an explicit `id`. HTML `required` participates in native browser `form` validation, separately from Form business rules.

Once / Capture / Passive native listener modifiers stay on the input rather than firing from interactive slot children. Native preventDefault can veto Enter / Space activation and RadioGroup arrow navigation; canceled Space leaves no delayed release action. Checked, disabled, input type and group Tab navigation remain component-managed.

input-attrs preserves native attribute aliases. An alias overrides a matching top-level native attribute, but cannot override component-managed state. Radio's checked state is managed through native `checked`; supplied `aria-checked` does not override it. The component still manages tabindex, retaining one Tab entry per RadioGroup.

## API

### Parameters, presentation clearing and mount-time boundaries

orientation accepts horizontal / vertical and falls back to horizontal after invalid-value diagnostics. max belongs to CheckboxGroup: valid values are finite nonnegative integers, zero forbids new choices, and omission is unlimited. Existing external values are never truncated. Invalid JavaScript callers retain the existing normalization after diagnostics: negatives become zero, fractions are floored, NaN is unlimited, and Infinity remains unlimited.

icon-size accepts positive lengths. Numbers and numeric strings use px, including positive fractions such as 0.5. Invalid, nonpositive or nonfinite values diagnose and fall back to the theme; the Divider minimum of 1 does not apply. Business styles determine the final resolved value of CSS expressions.

uninject-group-context decides group participation at mount. Changing it later does not reinject; change the key or remount. An isolated control still participates in Form. clearable / empty-value apply only to explicit presentation-layer clearing; native unchecking still proposes false or removes the array value and never uses empty-value. Ordinary event Promises do not participate in waiting; before-commit uses payload / done / context only when saving a deferred edit.

During an explicit options request both group roots announce aria-busy and emit one load-error on failure. No loading prop or extra graphic is added, and loading/failure never proposes a new model.

Ordinary circular Radio icons do not scale with Group.size. The five sizes apply to button presentation; circular dimensions use icon-size or the theme. The radio slot replaces the complete visible circular content while retaining the native input. Button presentation uses the default label and ignores the radio slot.

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

`ChoiceValue = string | number | boolean`；`CheckboxModel = boolean | ChoiceValue[] | null`；`RadioModel = ChoiceValue | null`。

### Radio Props

| Prop | Description | Type | Default |
| --------------------- | ------------------------------- | ------------------------- | --------- |
| model-value (v-model) | Controlled value | RadioModel | undefined |
| default-value | Initial uncontrolled value | ChoiceValue \| null | null |
| value | Option `value` | `string\|number\|boolean` | `true` |
| variant | Radio variant | `'radio'\|'button'` | `'radio'` |
| disabled | Disabled state; inherits from the form/group when omitted | boolean | undefined |
| readonly | Readonly state; inherits from the form/group when omitted | boolean | undefined |
| error | Error state; inherits from the form/group when omitted | boolean | undefined |
| edit-mode | Editing mode, inherited from FormItem and Form | `'direct' \| 'click' \| 'dblclick'` | `'direct'` |
| read-pretty | Independent read presentation; explicit false overrides the parent | `boolean` | `false` |
| clearable | Deferred editor clearing; does not change native deselection | `boolean` | `false` |
| empty-value | Explicit presentation clear output; does not control native unchecking | `RadioModel \| (() => RadioModel)` | `null` |
| empty-values | Empty-value recognition; field takes precedence over FormItem and Form | `readonly unknown[]` | `-` |
| empty-text | Read empty text; an explicit empty string is valid | `string` | `'-'` |
| before-commit | Guard before saving a deferred edit; return a boolean or Promise, or complete via done | `(payload: { value: unknown; previousValue: unknown }, done: (allow?: boolean) => void, context: { signal: AbortSignal; event?: Event }) => void \| boolean \| Promise<void \| boolean>` | `-` |
| open | Controlled editor visibility, separate from native input focus | `boolean` | `-` |
| default-open | Initial visibility of an uncontrolled editor | `boolean` | `false` |
| popup-container | Editor mount container | `string \| HTMLElement \| false` | `-` |
| checked-color | Instance checked color; error and disabled take precedence | string | undefined |
| unchecked-color | Instance unchecked color | string | undefined |
| icon-size | Positive length; invalid values diagnose and fall back to the theme | number \| string | undefined |
| ripple | Whether to enable ripple feedback | boolean | true |
| name | Native field name; inherits from Group when omitted | string | undefined |
| input-attrs | Native attribute alias; cannot override component-managed state | InputHTMLAttributes | undefined |
| aria-label | Accessible name when no visible label exists | string | undefined |
| uninject-group-context | Choose group isolation at mount while retaining Form participation | boolean | false |

### Radio Events

| Event | Description | Arguments |
| ------------------ | -------- | --------------------------------- |
| update:modelValue | Proposes a new value | value: RadioModel |
| change | Value change proposal | value: RadioModel, event?: Event |
| focus | Focus | event: FocusEvent |
| blur | Blur | event: FocusEvent |
| update:open | Controlled editor visibility update | open: boolean |
| open-change | Actual editor visibility change | open: boolean |
| click | Click; not emitted while disabled | event: MouseEvent |

### Radio Methods

| Method | Arguments | Returns |
| ------ | ---------------------- | ------ |
| select | - | void |
| focus | options?: FocusOptions | void |
| blur | - | void |

### Radio Slots

| Slot | Description | Prop |
| ------ | ------------ | ---------------------------------------- |
| radio | Custom radio control | `checked:boolean`<br/>`disabled:boolean` |
| read | Custom read content, taking precedence over empty-text | value: RadioModel, text: string |
| default | Button label or default circular label | checked: boolean, disabled: boolean |
| checked-icon | Default circular checked icon | - |
| unchecked-icon | Default circular unchecked icon | - |

### RadioGroup Props

| Prop | Description | Type | Default |
| --------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------- |
| model-value (v-model) | Controlled value | RadioModel | undefined |
| default-value | Initial uncontrolled value | RadioModel | null |
| variant | Radio-group variant | `'radio'\|'button'` | `'radio'` |
| size | Radio-group size | `'xs'\|'sm'\|'md'\|'lg'\|'xl'` | `-` |
| options | Options; replaces default slot when supplied | Array<ChoiceValue \| RadioOption \| Record<string, unknown>> / `(query, { signal }) => Array / Promise` | `undefined` |
| orientation | Horizontal/vertical arrangement of radio-group options, default horizontal; not text reading direction | `'horizontal'\|'vertical'` | `'horizontal'` |
| disabled | Disabled state; inherits from the form/group when omitted | boolean | undefined |
| readonly | Readonly state; inherits from the form/group when omitted | boolean | undefined |
| error | Error state; inherits from the form/group when omitted | boolean | undefined |
| field-names | Option field mapping | ChoiceFieldNames | undefined |
| aria-label | Accessible group name | string | '' |
| edit-mode | Editing mode, inherited from FormItem and Form | `'direct' \| 'click' \| 'dblclick'` | `'direct'` |
| read-pretty | Independent read presentation; explicit false overrides the parent | `boolean` | `false` |
| clearable | Deferred editor clearing; does not change native deselection | `boolean` | `false` |
| empty-value | Explicit presentation clear output; does not control native unchecking | `RadioModel \| (() => RadioModel)` | `null` |
| empty-values | Empty-value recognition; field takes precedence over FormItem and Form | `readonly unknown[]` | `-` |
| empty-text | Read empty text; an explicit empty string is valid | `string` | `'-'` |
| before-commit | Guard before saving a deferred edit; return a boolean or Promise, or complete via done | `(payload: { value: unknown; previousValue: unknown }, done: (allow?: boolean) => void, context: { signal: AbortSignal; event?: Event }) => void \| boolean \| Promise<void \| boolean>` | `-` |
| open | Controlled editor visibility, separate from native input focus | `boolean` | `-` |
| default-open | Initial visibility of an uncontrolled editor | `boolean` | `false` |
| popup-container | Editor mount container | `string \| HTMLElement \| false` | `-` |
| name | Native input name within the group | string | undefined |

### RadioGroup Events

| Event | Description | Arguments |
| ------------------ | --------------------------- | ---------------------------------------------- |
| update:modelValue | Proposes a new value | value: RadioModel |
| change | Value change proposal | value: RadioModel, event?: Event |
| update:open | Controlled editor visibility update | open: boolean |
| open-change | Actual editor visibility change | open: boolean |
| load-error | Explicit option loading failed; does not change the model | error: unknown |

### RadioGroup Slots

| Slot | Description | Prop |
| ------ | ------------- | ---------------------------------------- |
| radio | Custom radio control | `checked:boolean`<br/>`disabled:boolean` |
| label | Radio label content | `data: RadioOption, checked: boolean` |
| read | Custom read content, taking precedence over empty-text | value: RadioModel, text: string |
| default | Native child options when options is omitted | - |

## Types

### RadioOption

| Field | Description | Type |
| -------- | -------------- | ----------------------------------------------------------------- |
| value | Option identity | ChoiceValue |
| label | Label or render function | VNodeChild \| (data: RadioOption, checked: boolean) => VNodeChild |
| disabled | Disable interaction | boolean |
| readonly | Read-only interaction | boolean |

The component exports the following types

```ts
import type { RadioProps, RadioGroupProps, RadioEmits, RadioGroupEmits, RadioSlots, RadioGroupSlots } from "@cedar-design/ui-vue";
```

### ChoiceFieldNames

`{ label?: string; value?: string; disabled?: string; readonly?: string; indeterminate?: string }`

Exported types：`RadioOption`、`ChoiceFieldNames`。

### Native attributes and appearance

| Component | Prop | Description | Type | Default |
| ------------------ | ------------------------------- | ------------------------------------------ | ------------------- | --------- |
| Radio / RadioGroup | name | Native field name; child overrides group | string | undefined |
| Radio | aria-label | Native control accessible name | string | undefined |
| Radio | input-attrs | Native input attributes | InputHTMLAttributes | undefined |
| Radio | checked-color | Instance checked color; error / disabled state takes precedence | string | undefined |
| Radio | unchecked-color | Instance unchecked color; error / disabled state takes precedence | string | undefined |
| Radio | icon-size | Icon dimension; numbers are px, strings are CSS lengths | number \| string | undefined |
| Radio | ripple | Touch ripple feedback | boolean | true |

### Icons and default slot

checked-icon and unchecked-icon are supported on both platforms. default and radio slots receive { checked, disabled }. click emits the original MouseEvent once. Disabled emits no click; readonly may emit click without changing the value.

### Editing and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-direct modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(payload, done, context)` can guard saving the editor. FormItem validates the candidate first; invalid candidates keep the editor open. `open / default-open / update:open` control the editor. `#read="{ value, text }"` customizes read content. See the unified field presentation examples in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

The `options` prop accepts an array or `(query, { signal }) => array/Promise`. The component manages loading, cancellation and stale-result isolation; failures emit load-error. Single/multiple groups initialize with an empty-string query, searchable fields reload when the query changes, and root loading for tree fields remains independent of existing load-more child loading.

Public focus/blur methods are callable from initial mount. Focus opens an editable deferred editor and targets it after readiness; disabled, readonly, or reading fields do not open. Blur only blurs the current target without reopening. Stored methods never bind an old editor; closure, mode changes, deactivation, or unmount cancel queued calls.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-radio-action-padding` | `calc((var(--c-internal-radio-mask-height) / 2) - (var(--c-radio-control-size) / 2))` | `padding` |
| `--c-radio-animation-duration` | `var(--c-transition-duration-3)` | `transition` |
| `--c-radio-control-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-radio-control-color-checked` | `var(--c-sys-color-action-primary)` | `color`, `outline` |
| `--c-radio-control-color-disabled` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-radio-control-color-error` | `var(--c-sys-color-content-danger)` | `box-shadow`, `color` |
| `--c-radio-control-size` | `14px` | `font-size`, `height`, `padding`, `width` |
| `--c-radio-group-gap` | `var(--c-spacing-8)` | `gap` |
| `--c-radio-label-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-radio-label-gap` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-radio-label-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-radio-label-text-color-disabled` | `var(--c-sys-color-content-disabled)` | `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-radio-action-padding: calc((var(--c-internal-radio-mask-height) / 2) - (var(--c-radio-control-size) / 2));
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
