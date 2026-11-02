---
lang: en-US
permalink: /en/components/steps/
---

# Steps

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `status`: Selects the semantic state.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Appearance Lab

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `type` | Steps appearance type | Step types and states |
| `status` | Current step status | Step types and states |
| `changeable` | Whether clicking can change steps | Step types and states |
<!-- demo-config-notes:end -->


Preview configuration: `layout="vertical"`, `aria-label="status"`, `options`, `variant="button"`.

<demo src="./__demos__/appearance-lab.vue"></demo>

### Step types and states

All four types share one current-step and status model. Click a step or select 1–3, then choose wait, process, finish or error: default, arrow, dot and navigation update together. Status changes the current node’s semantic state without changing its index. Titles and descriptions follow the page language to fit the phone preview.

<details>
<summary>Configuration details and limits</summary>

#### Types

Preview configuration: `aria-label="Current step"`, `options`, `variant="button"`, `size="sm"`.

#### Error

- `status`: Selects the semantic state.

#### Arrow

- `status`: Selects the semantic state.

#### Dot

- `status`: Selects the semantic state.

#### Navigation

- `status`: Selects the semantic state.

</details>

<demo src="./__demos__/types.vue"></demo>

## Layout and arrangement

### Content Placement

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `status` | Current step status | Content Placement, Vertical |
| `content-placement` | Content side relative to the step node: right or bottom, default right. Dot steps derive it from orientation; navigation steps always use right | Content Placement |
| `orientation` | Horizontal/vertical axis of the step flow, default horizontal; arrow and navigation variants remain horizontal | Vertical |
<!-- demo-config-notes:end -->


- `status`: Selects the semantic state.

<demo src="./__demos__/content-placement.vue"></demo>

### Vertical

- `status`: Selects the semantic state.

<demo src="./__demos__/vertical.vue"></demo>

## Content and presentation

### Description

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `status` | Current step status | Description, Line Less |
| `show-line` | Whether to show connectors | Line Less |
<!-- demo-config-notes:end -->


- `status`: Selects the semantic state.

<demo src="./__demos__/description.vue"></demo>

### Line Less

- `status`: Selects the semantic state.

<demo src="./__demos__/line-less.vue"></demo>

## Customization and slots

### Custom Icon

- `status`: Selects the semantic state.

<demo src="./__demos__/custom-icon.vue"></demo>

## Interaction and control

### Changeable

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `changeable` | Whether clicking can change steps | Changeable |
| `status` | Current step status | Changeable |
<!-- demo-config-notes:end -->


- `status`: Selects the semantic state.

<demo src="./__demos__/changeable.vue"></demo>

## API

Use ordinary `v-model`. `modelValue` is the current step, starting at 1. `defaultValue` initializes uncontrolled state once; later changes do not reset it. Initialization emits no `update:modelValue`. When supplied, `modelValue` is controlled by the parent.

### Steps Props

| Prop | Description | Type | Default |
| -------------------- | ------------------------ | ----------------------------------------------------- | -------------- |
| type | Steps appearance type | `'default'` \| `'arrow'` \| `'dot'` \| `'navigation'` | `'default'` |
| orientation | Horizontal/vertical axis of the step flow, default horizontal; arrow and navigation variants remain horizontal | `'horizontal'` \| `'vertical'` | `'horizontal'` |
| content-placement | Content side relative to the step node: right or bottom, default right. Dot steps derive it from orientation; navigation steps always use right | `'right'` \| `'bottom'` | `'right'` |
| model-value(**v-model**) | Current step number | `number` | `-` |
| default-value | Default uncontrolled step number | `number` | `1` |
| status | Current step status | `'wait'` \| `'process'` \| `'finish'` \| `'error'` | `'process'` |
| show-line | Whether to show connectors | `boolean` | `true` |
| size | Steps size | `'sm'` \| `'md'` | `'md'` |
| changeable | Whether clicking can change steps | `boolean` | `false` |

### Steps Events

| Event | Description | Arguments |
| ------------------- | ------------------------------ | ---------------------------- |
| change | Emitted when the step number changes; requires `changeable` | current:`number`<br/>previous:`number`<br/>ev:`Event` |
| update:modelValue | `v-model` sync | step:`number` |

### Steps Slots

| Slot | Description |
| ----------- | ------------ |
| default | Step content |
| finish-icon | Finished status icon |
| error-icon | Error status icon |

### Step Props

| Prop | Description | Type | Default |
| ----------- | ------------ | -------------------------------------------------- | ------- |
| title | Step title | `string` | `-` |
| description | Step description | `string` | `-` |
| status | Step status | `'wait'` \| `'process'` \| `'finish'` \| `'error'` | `-` |
| disabled | Whether the step is disabled | `boolean` | `false` |

### Step Slots

| Slot | Description | Arguments |
| ----------- | ---- | --------------------------------- |
| default | Title | `index`、`status`、`active`、`disabled` |
| title | Title | `index`、`status`、`active`、`disabled` |
| node | Node | `index`、`status`、`active`、`disabled` |
| icon | Icon | `index`、`status`、`active`、`disabled` |
| description | Description | `index`、`status`、`active`、`disabled` |

## Type definitions

The component exports the following types

```ts
import type {
  StepsProps,
  StepProps,
  StepsType,
  StepStatus,
  StepsSize,
  StepsContentPlacement,
  StepsInstance,
  StepsStepInstance,
} from '@cedar-design/ui'
```

## Shared implementation and platform boundaries

Each platform maintains a complete local implementation. They do not import a common core or share component instances or reactive state. Changes must update both implementations. Component bodies, props, key styles and paired tests have read-only source consistency checks; theme tokens and installation entries remain local to each library.

Steps/Step bodies, props, context protocol and styles are source copies. Injection Symbols are defined separately per library, not shared. The four types and existing status/event contracts remain.

`active` indicates only whether the current one-based step index matches modelValue, independently of wait/process/finish/error status. A current error step remains `active`. Focus/hover do not change `active`.


### Placement semantics and configuration

content-placement shares side vocabulary and spelling, not an identical set across all components. Steps implements only right/bottom; dot and navigation variants have derived rules. Unsupported sides are not added for naming uniformity.


## Reading direction and keyboard interaction

Steps inherits the nearest native `dir` and supports live changes. Horizontal layout and directional geometry follow reading order; vertical progression stays top to bottom. With `changeable`, arrow keys move focus, Home/End reach the first/last enabled step, and Enter/Space activate it. Focus navigation and direction changes do not update progress.
