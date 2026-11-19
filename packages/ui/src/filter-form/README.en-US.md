---
lang: en-US
permalink: /en/components/filter-form/
---

# Filter Form

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Actions reserve space according to their actual width and keep the expand/collapse control and action buttons on one line. When collapsed, actions sit at the right of the first row. When expanded, fields use the full column layout and actions sit at the right of the last row, moving to a new row if needed. One- and two-column layouts retain a separate action row.

Preview configuration: `v-model:collapsed="collapsed"`, `:fields="fields"`, `:rules="rules"`.

<demo src="./__demos__/basic.vue"></demo>

### Above a table

The filter and table share the same left edge. Enter an order number or customer name to filter the rows.

<demo src="./__demos__/above-table.vue"></demo>

### Inside a Card

An outline Card supplies the border, surface and padding around the filters. Apply or reset the status filter to update the order list.

<demo src="./__demos__/inside-card.vue"></demo>

## Content and presentation

### Registered Fields

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `fields` | Filter-item schema | Registered Fields |
| `field-map` | Optional field-component registry | Registered Fields |
| `collapsible` | Whether expanding/collapsing is enabled | Registered Fields |
<!-- demo-config-notes:end -->


Preview configuration: `:fields="fields"`, `:field-map="fieldMap"`, `:collapsible="false"`.

<demo src="./__demos__/registered-fields.vue"></demo>

## Async and dynamic data

### Async Options

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `fields` | Filter-item schema | Async Options |
| `collapsible` | Whether expanding/collapsing is enabled | Async Options |
<!-- demo-config-notes:end -->


Preview configuration: `:fields="fields"`, `:collapsed="false"`, `:collapsible="false"`.

<demo src="./__demos__/async-options.vue"></demo>

## API

### Value and default value

Use ordinary `v-model`. `modelValue` is the filter-fields object. `defaultValue` initializes uncontrolled state once; later changes do not reset it. Explicit binding takes precedence, and initialization emits no `update:modelValue`.

Input updates the internal mirror before notifying the parent. If the parent does not accept the update, the input remains visible locally; a different external model replaces the mirror. `collapsed` likewise updates locally before notification and accepts later external changes. To reject an input, explicitly provide a new model object.

### FilterForm Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| model-value **(v-model)** | Form values; uses default-value when omitted | `Record<string, unknown>` | `undefined` |
| default-value | Initial values read only at creation | `Record<string, unknown>` | `{}` |
| fields | Filter-item schema | `FilterFormField[]` | `[]` |
| field-map | Optional field-component registry | `FilterFormFieldMap` | `{}` |
| rules | Forwarded Form validation rules | object | - |
| collapsed **(v-model)** | Whether to collapse extra items | boolean | `true` |
| collapsible | Whether expanding/collapsing is enabled | boolean | `true` |
| cols | Responsive column count | number \| object | `{ xs:1, sm:2, md:3, lg:3, xl:4, xxl:5 }` |
| grid-props | Forwarded Grid properties, taking precedence over matching container settings | `Record<string, unknown>` | - |
| change-debounce | change debounce in milliseconds; 0 notifies immediately; negative or nonfinite values fall back to 500 | number | `500` |

### FilterFormFieldRegistration Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:model-value | Immediate value snapshot notification on input | `(value: Record<string, unknown>) => void` |
| update:collapsed | Local expand/collapse notification | `(collapsed: boolean) => void` |
| change | Debounced input notification and immediate Enter notification; with autoEmitChange=false, blur or Enter notifies | `(value: Record<string, unknown>, field: string) => void` |

Events are notifications only; listener Promises are not collected and do not drive loading state.

### FilterFormFieldRegistration Slots

| Slot | Description |
| --- | --- |
| actions | Actions such as search/reset beside expand/collapse; no scoped arguments; available with collapsible=false |

### FilterFormFieldRegistration Instance Properties

| Prop | Type | Description |
| --- | --- | --- |
| formRef | `FormInstance \| undefined` | Inner Form instance after mounting; supports Form methods such as validate, clearValidate and resetFields |

`formRef` is an instance property. Calling the inner Form `resetFields` restores its recorded initial values locally without emitting FilterForm `update:modelValue` or `change`. To reset the complete filter, replace the bound business model; for example:

```ts
const makeInitialModel = () => ({ keyword: '', createdAt: new Date() })
const model = ref(makeInitialModel())
const resetFilters = () => { model.value = makeInitialModel() }
```

Use search/reset buttons with `type="button"` in `actions` and manage the model and queries in business handlers. The container exposes no additional reset/search methods or task execution entry point.

## Types

### FilterFormField

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| component | Vue component or a key in `fieldMap` | `string \| Component` | - |
| field | Form field path | string | - |
| label | Label | string | - |
| visible | Whether to render | boolean | `true` |
| autoEmitChange | Whether input emits change while editing | boolean | `true` |
| props | Props forwarded to the field component | object | - |
| gridItemProps | GridItem props | object | - |
| formItemProps | FormItem props | object | - |

### FilterFormFieldRegistration

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| component | Field component | Component | - |
| defaultProps | Default props | object | - |

Field properties merge in order: registration `defaultProps`, `field` `props`, then the container-owned `modelValue`, with later values taking precedence. `gridItemProps` passes through to GridItem. `formItemProps` can override the FormItem `field` and `label`, but does not change the schema `field` path used for model writes. `grid-props` can also override Grid settings such as `cols` and `collapsed`; avoid conflicting container state.

```ts
import type {
  FilterFormProps,
  FilterFormInstance,
  FilterFormEmits,
  FilterFormSlots,
  FilterFormExpose,
  FilterFormField,
  FilterFormFieldMap,
  FilterFormFieldRegistration,
} from '@cedar-design/ui-vue'
```

Grid column spacing is controlled by `grid-props.colGap` in numeric px. There is no same-name CSS override, ensuring numerical Grid measurements match actual spacing.

Changing changeDebounce reschedules the pending snapshot using the new delay; zero notifies immediately. Enter cancels the pending task before notifying the current value. External reset or a different model replacement cancels stale snapshots, while accepting the same update:modelValue proposal does not cancel change. KeepAlive deactivation and unmount cancel pending notifications; reactivation accepts new input.

Filter models use the existing Form data-snapshot policy. Date values, plain objects and arrays are copied independently; Map, Set, BigInt and cyclic references retain their data kinds instead of converting dates to strings or collections to empty objects. Mutating a plain-object or Date event snapshot does not alter the parent model or later internal snapshots. Identity semantics such as Map keys follow the existing Form policy. Functions, DOM nodes, WeakMap/WeakSet, Promises and instances with private state are outside the deeply isolated filter-data contract.

field supports the same dot and bracket paths as FormItem. Writes create missing object containers and preserve sibling fields. Prebuild array containers in default-value or model-value when an array is required. Existing intermediate values must be objects or arrays; input does not replace incompatible scalar structures. Existing local-mirror, debounce and accepted-echo behavior for model updates and change notifications is preserved.

## CSS Variables

Override `--c-filter-form-action-offset` on the FilterForm root for multi-column action alignment. Single-column stacked layout adds no top offset.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-filter-form-action-offset` | `calc(1em * var(--c-form-line-height) + var(--c-form-vertical-label-margin-bottom))` | `padding-top` |
| `--c-filter-form-actions-gap` | `var(--c-sys-space-5)` | `gap` |
| `--c-filter-form-background-color` | `transparent` | `background-color` |
| `--c-filter-form-border-color` | `var(--c-sys-color-border-subtle)` | `border` |
| `--c-filter-form-border-radius` | `0px` | `border-radius` |
| `--c-filter-form-border-width` | `0px` | `border` |
| `--c-filter-form-item-margin-bottom` | `0px` | `margin-bottom` |
| `--c-filter-form-padding` | `0px` | `padding` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-filter-form-actions-gap: var(--c-sys-space-5);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
