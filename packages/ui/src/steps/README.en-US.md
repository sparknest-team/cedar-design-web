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

<demo src="./__demos__/appearance-lab.en-US.vue"></demo>

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

<demo src="./__demos__/types.en-US.vue"></demo>

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

## Triggers and positioning

### Popup placement

content-placement shares side vocabulary and spelling, not an identical set across all components. Steps implements only right/bottom; dot and navigation variants have derived rules. Unsupported sides are not added for naming uniformity.

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

Step values are nonnegative safe integers: 0 gives every step an automatic waiting status, and values beyond the step count give every step an automatic finished status; an individual status can override it. Invalid values warn in development and render as 1. The node slot is not rendered for arrow type, and the icon slot is not rendered for dot type. Text and native decorations in the default slot do not consume step indices.

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

| Slot | Description | Prop |
| ----------- | ---- | --------------------------------- |
| default | Title | `index`、`status`、`active`、`disabled` |
| title | Title | `index`、`status`、`active`、`disabled` |
| node | Node | `index`、`status`、`active`、`disabled` |
| icon | Icon | `index`、`status`、`active`、`disabled` |
| description | Description | `index`、`status`、`active`、`disabled` |

## Types

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
} from '@cedar-design/ui-vue'
```

## Usage notes





`active` indicates only whether the current one-based step index matches modelValue, independently of wait/process/finish/error status. A current error step remains `active`. Focus/hover do not change `active`.

## Reading direction and keyboard interaction

Steps inherits the nearest `dir="ltr"` or `dir="rtl"`, including runtime changes. Horizontal steps, connectors and arrows follow reading direction; vertical steps remain top to bottom. Step numbers, progress values and custom icon content keep their meaning.

With `changeable`, Left/Right moves focus according to reading direction, or Up/Down vertically. Home/End focuses the first/last available step, skipping disabled items. Enter/Space confirms. Moving focus or changing reading direction does not update progress.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-steps-arrow-item-bg-error` | `var(--c-sys-color-content-danger)` | `background-color`, `border-inline-start` |
| `--c-steps-arrow-item-bg-finish` | `var(--c-sys-color-state-selected)` | `background-color`, `border-inline-start` |
| `--c-steps-arrow-item-bg-process` | `var(--c-sys-color-action-primary)` | `background-color`, `border-inline-start` |
| `--c-steps-arrow-item-bg-wait` | `var(--c-sys-color-surface-muted)` | `background-color`, `border-inline-start` |
| `--c-steps-arrow-item-description-color-error` | `var(--c-sys-color-surface-default)` | `color` |
| `--c-steps-arrow-item-description-color-finish` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-arrow-item-description-color-process` | `var(--c-sys-color-surface-default)` | `color` |
| `--c-steps-arrow-item-description-color-wait` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-arrow-item-description-margin-top` | `0` | `margin-top` |
| `--c-steps-arrow-item-gap` | `var(--c-spacing-2)` | `margin-inline-end` |
| `--c-steps-arrow-item-title-color-error` | `var(--c-sys-color-surface-default)` | `color` |
| `--c-steps-arrow-item-title-color-finish` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-steps-arrow-item-title-color-process` | `var(--c-sys-color-surface-default)` | `color` |
| `--c-steps-arrow-item-title-color-wait` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-arrow-item-title-font-weight-active` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-steps-arrow-size-md-title-padding-left` | `var(--c-spacing-7)` | `padding-inline-start` |
| `--c-steps-arrow-size-sm-title-padding-left` | `var(--c-spacing-8)` | `padding-inline-start` |
| `--c-steps-changeable-hover-text-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-steps-circle-horizontal-item-description-margin-top` | `var(--c-spacing-1)` | `margin-top` |
| `--c-steps-circle-item-bg-error` | `var(--c-sys-color-content-danger)` | `background-color` |
| `--c-steps-circle-item-bg-finish` | `var(--c-sys-color-state-selected)` | `background-color` |
| `--c-steps-circle-item-bg-process` | `var(--c-sys-color-action-primary)` | `background-color` |
| `--c-steps-circle-item-bg-wait` | `var(--c-sys-color-surface-muted)` | `background-color` |
| `--c-steps-circle-item-border-color-error` | `transparent` | `border` |
| `--c-steps-circle-item-border-color-finish` | `transparent` | `border` |
| `--c-steps-circle-item-border-color-process` | `transparent` | `border` |
| `--c-steps-circle-item-border-color-wait` | `transparent` | `border` |
| `--c-steps-circle-item-description-color-error` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-circle-item-description-color-finish` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-circle-item-description-color-process` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-circle-item-description-color-wait` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-circle-item-icon-border-radius` | `var(--c-border-radius-circle)` | `border-radius` |
| `--c-steps-circle-item-icon-gap` | `var(--c-spacing-6)` | `inset-inline-start`, `margin-inline-end`, `padding-inline-end` |
| `--c-steps-circle-item-icon-text-color-error` | `var(--c-sys-color-surface-default)` | `color` |
| `--c-steps-circle-item-icon-text-color-finish` | `var(--c-sys-color-action-primary)` | `color` |
| `--c-steps-circle-item-icon-text-color-process` | `var(--c-sys-color-surface-default)` | `color` |
| `--c-steps-circle-item-icon-text-color-wait` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-circle-item-tail-color-error` | `var(--c-sys-color-content-danger)` | `background-color` |
| `--c-steps-circle-item-tail-color-process` | `var(--c-sys-color-action-primary)` | `background-color` |
| `--c-steps-circle-item-tail-color-wait` | `var(--c-sys-color-border-default)` | `background-color` |
| `--c-steps-circle-item-tail-size` | `var(--c-border-width-1)` | `height`, `inset-inline-start`, `top`, `width` |
| `--c-steps-circle-item-title-color-error` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-steps-circle-item-title-color-finish` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-steps-circle-item-title-color-process` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-steps-circle-item-title-color-wait` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-circle-item-title-font-weight-active` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-steps-circle-tail-hack-width` | `5000px` | `width` |
| `--c-steps-circle-vertical-item-description-margin-top` | `var(--c-spacing-1)` | `margin-top` |
| `--c-steps-circle-vertical-tail-padding-extra` | `var(--c-spacing-3)` | `padding` |
| `--c-steps-direction-horizontal-description-width` | `var(--c-size-35)` | `max-width` |
| `--c-steps-dot-horizontal-item-description-margin-top` | `var(--c-spacing-2)` | `margin-top` |
| `--c-steps-dot-horizontal-item-title-margin-top` | `var(--c-spacing-2)` | `margin-top` |
| `--c-steps-dot-item-bg-error` | `var(--c-sys-color-content-danger)` | `background-color` |
| `--c-steps-dot-item-bg-finish` | `var(--c-sys-color-action-primary)` | `background-color` |
| `--c-steps-dot-item-bg-process` | `var(--c-sys-color-action-primary)` | `background-color` |
| `--c-steps-dot-item-bg-wait` | `var(--c-sys-color-content-secondary)` | `background-color` |
| `--c-steps-dot-item-border-color-error` | `var(--c-sys-color-content-danger)` | `border-color` |
| `--c-steps-dot-item-border-color-finish` | `var(--c-sys-color-action-primary)` | `border-color` |
| `--c-steps-dot-item-border-color-process` | `var(--c-sys-color-action-primary)` | `border-color` |
| `--c-steps-dot-item-border-color-wait` | `var(--c-sys-color-content-secondary)` | `border-color` |
| `--c-steps-dot-item-description-color-error` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-dot-item-description-color-finish` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-dot-item-description-color-process` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-dot-item-description-color-wait` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-dot-item-icon-border-radius` | `var(--c-border-radius-circle)` | `border-radius` |
| `--c-steps-dot-item-icon-gap` | `var(--c-spacing-2)` | `inset-inline-start`, `margin-inline-end`, `padding-top` |
| `--c-steps-dot-item-icon-margin-left` | `calc((var(--c-steps-label-vertical-content-width) - var(--c-steps-dot-item-icon-size)) / 2)` | `inset-inline-start`, `margin-inline-start` |
| `--c-steps-dot-item-icon-size` | `var(--c-size-2)` | `height`, `inset-inline-start`, `margin-inline-end`, `margin-inline-start`, `margin-top`, `padding-top`, `top`, `width` |
| `--c-steps-dot-item-icon-size-active` | `var(--c-spacing-5)` | `height`, `margin-inline-start`, `margin-top`, `width` |
| `--c-steps-dot-item-tail-color-error` | `var(--c-sys-color-content-danger)` | `background-color` |
| `--c-steps-dot-item-tail-color-process` | `var(--c-sys-color-action-primary)` | `background-color` |
| `--c-steps-dot-item-tail-color-wait` | `var(--c-sys-color-border-default)` | `background-color` |
| `--c-steps-dot-item-tail-size` | `var(--c-border-width-1)` | `height`, `top` |
| `--c-steps-dot-item-title-color-error` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-steps-dot-item-title-color-finish` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-steps-dot-item-title-color-process` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-steps-dot-item-title-color-wait` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-steps-dot-item-title-font-weight-active` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-steps-dot-vertical-item-description-margin-top` | `var(--c-spacing-2)` | `margin-top` |
| `--c-steps-dot-vertical-item-dot-margin-top` | `var(--c-spacing-4)` | `margin-top` |
| `--c-steps-dot-vertical-item-dot-margin-top-active` | `calc(var(--c-steps-dot-vertical-item-dot-margin-top) - (var(--c-steps-dot-item-icon-size-active) - var(--c-steps-dot-item-icon-size)))` | `margin-top` |
| `--c-steps-dot-vertical-item-icon-margin-right` | `var(--c-spacing-7)` | `margin-inline-end` |
| `--c-steps-dot-vertical-tail-padding-bottom` | `var(--c-spacing-1)` | `padding-bottom` |
| `--c-steps-dot-vertical-tail-padding-top-extra` | `var(--c-spacing-2)` | `padding-top` |
| `--c-steps-label-vertical-content-width` | `100%` | `inset-inline-start`, `margin-inline-start` |
| `--c-steps-navigation-arrow-color` | `var(--c-sys-color-content-secondary)` | `border` |
| `--c-steps-navigation-arrow-line-width` | `var(--c-border-width-2)` | `border` |
| `--c-steps-navigation-arrow-right` | `30px` | `inset-inline-end` |
| `--c-steps-navigation-arrow-size` | `var(--c-spacing-3)` | `height`, `width` |
| `--c-steps-navigation-arrow-spacing-right` | `var(--c-spacing-5)` | `padding-inline-end` |
| `--c-steps-navigation-arrow-top` | `var(--c-spacing-5)` | `top` |
| `--c-steps-navigation-content-margin-bottom` | `var(--c-spacing-8)` | `margin-bottom` |
| `--c-steps-navigation-description-padding-right` | `var(--c-spacing-8)` | `padding-inline-end` |
| `--c-steps-navigation-ink-bg` | `var(--c-sys-color-action-primary)` | `background-color` |
| `--c-steps-navigation-ink-height` | `var(--c-border-width-2)` | `height` |
| `--c-steps-navigation-ink-spacing-left` | `var(--c-spacing-none)` | `inset-inline-start` |
| `--c-steps-navigation-ink-spacing-right` | `30px` | `inset-inline-end` |
| `--c-steps-navigation-margin-right` | `var(--c-spacing-10)` | `margin-inline-end` |
| `--c-steps-navigation-padding-left` | `var(--c-spacing-8)` | `padding-inline-start` |
| `--c-steps-node-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-steps-size-md` | `var(--c-size-7)` | `height`, `inset-inline-start`, `line-height`, `margin-inline-start`, `margin-top`, `padding`, `padding-inline-end`, `top`, `width` |
| `--c-steps-size-md-arrow` | `var(--c-size-18)` | `border-bottom`, `border-inline-start`, `border-top`, `height`, `inset-inline-end`, `padding-inline-start` |
| `--c-steps-size-md-description-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-steps-size-md-icon-font-size` | `var(--c-size-4)` | `font-size` |
| `--c-steps-size-md-item-icon-margin-left` | `calc((var(--c-steps-label-vertical-content-width) - var(--c-steps-size-md)) / 2)` | `inset-inline-start`, `margin-inline-start` |
| `--c-steps-size-md-title-font-size` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-steps-size-sm` | `var(--c-size-6)` | `height`, `inset-inline-start`, `line-height`, `margin-inline-start`, `padding`, `padding-inline-end`, `top`, `width` |
| `--c-steps-size-sm-arrow` | `var(--c-size-10)` | `border-bottom`, `border-inline-start`, `border-top`, `height`, `inset-inline-end`, `padding-inline-start` |
| `--c-steps-size-sm-description-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-steps-size-sm-icon-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-steps-size-sm-item-icon-margin-left` | `calc((var(--c-steps-label-vertical-content-width) - var(--c-steps-size-sm)) / 2)` | `inset-inline-start`, `margin-inline-start` |
| `--c-steps-size-sm-title-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-steps-transition-duration-1` | `var(--c-transition-duration-1)` | `transition` |
| `--c-steps-transition-timing-function-linear` | `var(--c-transition-timing-function-linear)` | `transition` |
| `--c-steps-vertical-item-min-height` | `90px` | `min-height` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-steps-arrow-item-description-color-error: var(--c-sys-color-surface-default);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
