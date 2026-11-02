---
lang: en-US
permalink: /en/components/segmented/
---

# Segmented

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `options`: Options

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Segment sizes and disabled states

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `size` | Size | Segment sizes and disabled states |
| `options` | Action list | Segment sizes and disabled states |
| `disabled` | Disable interaction | Segment sizes and disabled states |
| `default-value` | Uncontrolled default value | Segment sizes and disabled states |
<!-- demo-config-notes:end -->


Compare density at each size and disabled-option behavior.

<demo src="./__demos__/appearance-state-comparison.vue"></demo>

## Layout and arrangement

### Block

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `block` | Fill parent width | Block |
| `options` | Action list | Block |
<!-- demo-config-notes:end -->


- `block`: Fit parent width
- `options`: Options

<demo src="./__demos__/block.vue"></demo>

## Interaction and control

### Controlled

- `model-value`: Binding value
- `options`: Options

<demo src="./__demos__/controlled.vue"></demo>

## Accessibility

- The root uses `role="radiogroup"`; native `radio` options support keyboard changes.
- `name` binds a native form field `name`.
- Whole-control disabling sets `aria-disabled`.

## API

### Segmented Props

| Arguments | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | Current value | `string \| number` | — |
| default-value | Uncontrolled default value | `string \| number` | — |
| options | Action list | `(string \| number \| SegmentedOption)[]` | `[]` |
| size | Size | `xs \| sm \| md \| lg \| xl` | `md` |
| disabled | Disable interaction | `boolean` | `false` |
| block | Fill parent width | `boolean` | `false` |
| orientation | Horizontal/vertical arrangement of segmented options, default horizontal; not text reading direction | `horizontal \| vertical` | `horizontal` |
| name | Native name | `string` | — |

### SegmentedOption

| Field | Description | Type |
| --- | --- | --- |
| label | Label | `string \| () => VNodeChild` |
| value | Value | `string \| number` |
| disabled | Disable this item | `boolean` |

### Segmented Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Value change | `(value, event)` |
| update:model-value | v-model | `(value)` |

### Segmented Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| label | Custom option content | `{ data: SegmentedOption }` |
