---
lang: en-US
permalink: /en/components/filter-form/
---

# Filter Form

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `v-model:collapsed="collapsed"`, `:fields="fields"`, `:rules="rules"`.

<demo src="./__demos__/basic.vue"></demo>

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

### FilterForm Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| model-value **(v-model)** | Form value | `Record<string, unknown>` | `{}` |
| fields | Filter-item schema | `FilterFormField[]` | `[]` |
| field-map | Optional field-component registry | `FilterFormFieldMap` | `{}` |
| rules | Forwarded Form validation rules | object | - |
| collapsed **(v-model)** | Whether to collapse extra items | boolean | `true` |
| collapsible | Whether expanding/collapsing is enabled | boolean | `true` |
| cols | Responsive column count | number \| object | `{ xs:1, sm:2, md:3, lg:3, xl:4, xxl:5 }` |
| grid-props | Other Grid props | object | - |
| change-debounce | Change debounce interval in milliseconds | number | `500` |

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

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:model-value | v-model | `(value) => void` |
| update:collapsed | Collapsed state changes | `(collapsed) => void` |
| change | Debounced field-value changes | `(value, field) => void` |

### Slots

| Slot | Description |
| --- | --- |
| actions | Action area for search/reset, on the same row as the expand/collapse control |

### Methods

| Method | Description |
| --- | --- |
| formRef | Internal Form instance |

## Style variables

| Variable | Default |
| --- | --- |
| `--c-filter-form-border-radius` | `var(--c-border-radius-md)` |
| `--c-filter-form-background-color` | `var(--c-sys-color-surface-default)` |
| `--c-filter-form-padding` | `var(--c-sys-space-7)`（20px） |
| `--c-filter-form-border-color` | `var(--c-sys-color-border-subtle)` |
| `--c-filter-form-border-width` | `1px` |
| `--c-filter-form-action-offset` | `calc(1em * var(--c-form-line-height) + var(--c-form-vertical-label-margin-bottom))` |
| `--c-filter-form-item-margin-bottom` | `0px`; Grid controls row spacing |
| `--c-filter-form-actions-gap` | `var(--c-sys-space-5)`（12px） |
| `--c-filter-form-collapse-gap` | `4px` |
| `--c-filter-form-collapse-color` | `var(--c-color-text-2)` |
| `--c-filter-form-collapse-hover-color` | `var(--c-sys-color-content-brand)` |
| `--c-filter-form-focus-width` | `2px` |
| `--c-filter-form-focus-offset` | `3px` |

Consumption verified on 2026-10-16: real Less compilation and mounted DOM confirm these 13 variables feed the container, FormItem, action-area and collapse-button rules. The static style entry also imports Form styles. Multi-column action `padding-top` consumes action-offset; stacked single-column mode overrides it to `0`. Root derived aliases do not necessarily recompute after locally overriding Form dependencies; adjust alignment by overriding `--c-filter-form-action-offset` on the actual FilterForm root.

## Types

```ts
import type {
  FilterFormProps,
  FilterFormField,
  FilterFormFieldMap,
  FilterFormFieldRegistration,
} from '@cedar-design/ui'
```

Grid column spacing is controlled by `grid-props.colGap` in numeric px. There is no same-name CSS override, ensuring numerical Grid measurements match actual spacing.

Changing changeDebounce reschedules a pending snapshot with the new delay;0 publishes immediately. Enter cancels its pending duplicate. Model resets invalidate stale snapshots while an accepted matching update:modelValue echo retains its change notification. Deactivation/unmount cancel pending work; reactivation accepts new input.
