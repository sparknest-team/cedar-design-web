---
lang: en-US
permalink: /en/components/descriptions/
---

# Descriptions

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `data`: Supplies the example data.

<demo src="./__demos__/basic.vue"></demo>

## Layout and arrangement

### Label Text Alignment

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `data` | Description-list data | Label Text Alignment, Layout Pattern |
| `title` | Description-list title | Label Text Alignment, Layout Pattern |
| `layout` | Description-list arrangement | Label Text Alignment, Layout Pattern |
| `align` | Text alignment | Label Text Alignment |
| `size` | Description-list size | Layout Pattern |
| `bordered` | Whether to show border | Layout Pattern |
<!-- demo-config-notes:end -->


- `data`: Supplies the example data.
- `align`: Controls alignment on the cross axis.

<demo src="./__demos__/label-text-alignment.vue"></demo>

### Layout Pattern

- `data`: Supplies the example data.
- `size`: Controls the component size.

<demo src="./__demos__/layout-pattern.vue"></demo>

## Content and presentation

### Singel Column Style

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `data` | Description-list data | Singel Column Style, Border Background List |
| `title` | Description-list title | Singel Column Style, Border Background List |
| `column` | Items per row. Responsive configuration is supported since 2.20.0; see Grid | Singel Column Style |
| `size` | Description-list size | Singel Column Style |
| `bordered` | Whether to show border | Border Background List |
<!-- demo-config-notes:end -->


- `data`: Supplies the example data.
- `size`: Controls the component size.

<demo src="./__demos__/singel-column-style.vue"></demo>

### Border Background List

- `data`: Supplies the example data.

<demo src="./__demos__/border-background-list.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Labels and values follow reading order, with logical boundaries and default alignment. Changing direction does not reverse records, column definitions or span meanings.

## API

### Descriptions Props

| Prop | Description | Type | Default |
| ------------ | ------------------------------------------------------------------ | :---------------------------------------------------------------------------------------: | :------------- |
| data | Description-list data | `DescData[]` | `[]` |
| column | Items per row. Responsive configuration is supported since 2.20.0; see Grid | `number \| ResponsiveValue` | `3` |
| title | Description-list title | `string` | `-` |
| layout | Description-list arrangement | `'horizontal' \| 'vertical' \| 'inline-horizontal' \| 'inline-vertical' \| 'inline-auto'` | `'horizontal'` |
| align | Text alignment | `TextAlign \| { label?: TextAlign; value?: TextAlign }`<br>`TextAlign: 'center' \| 'left' \| 'right'` | `'left'` |
| size | Description-list size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `-` |
| bordered | Whether to show border | `boolean` | `false` |
| label-style | Label styles | `CSSProperties` | `-` |
| value-style | Content styles | `CSSProperties` | `-` |
| table-layout | Table-style `layout-fixed`; setting `fixed` distributes widths evenly | `'auto' \| 'fixed'` | `'auto'` |
| aria-label | Accessible description-list label | `string` | `-` |

In data mode, slot `index` in `label` and `value` is the zero-based position in the original `data` array, independent of columns and layout.

Columns and each span must be finite positive integers, including responsive values. Invalid columns fall back to 3 and invalid spans to 1. The title slot names the table automatically; an explicit `aria-label` takes precedence. The default slot takes precedence over data even when empty.

### Descriptions Slots

| Slot | Description | Prop |
| ------ | :------: | ------------------------------------------------------ |
| default | Item list; takes precedence over data | - |
| value | Content | value: `string \| RenderFunction`<br>index: `number`<br>data: `DescData` |
| label | Label | label: `string \| RenderFunction`<br>index: `number`<br>data: `DescData` |
| title | Title | - |

### DescriptionsItem Props

| Prop | Description | Type | Default |
| ----- | -------- | :------: | :----- |
| span | Column span | `number` | `1` |
| label | Label | `string` | `-` |

### DescriptionsItem Slots

| Slot | Description | Prop |
| ------- | :--: | ---- |
| default | Content | - |
| label | Label | - |

## Types

Public types include `DescData`, `DescLayout`, `DescriptionsSlotScope`, `DescriptionsSlots`, and `DescriptionsItemSlots`.

### DescData

| Parameter | Description | Type | Default |
| ------ | -------- | -------------------------- | :----: |
| label | Label | `string \| RenderFunction` | `-` |
| value | Data | `string \| RenderFunction` | `-` |
| span | Column span | `number` | `-` |

The component exports the following types

```ts
import type { DescriptionsProps } from "@cedar-design/ui-vue";
```

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-descriptions-border-bg-label` | `var(--c-color-fill-1)` | `background-color` |
| `--c-descriptions-border-color` | `var(--c-color-neutral-3)` | `border`, `border-bottom`, `border-inline-end` |
| `--c-descriptions-border-item-size-lg-padding-horizontal` | `var(--c-spacing-8)` | `padding`, `padding-inline-end` |
| `--c-descriptions-border-item-size-lg-padding-vertical` | `9px` | `padding` |
| `--c-descriptions-border-item-size-md-padding-horizontal` | `var(--c-spacing-8)` | `padding`, `padding-inline-end` |
| `--c-descriptions-border-item-size-md-padding-vertical` | `5px` | `padding` |
| `--c-descriptions-border-item-size-sm-padding-horizontal` | `var(--c-spacing-8)` | `padding`, `padding-inline-end` |
| `--c-descriptions-border-item-size-sm-padding-vertical` | `3px` | `padding` |
| `--c-descriptions-border-item-size-xl-padding-horizontal` | `var(--c-spacing-8)` | `padding`, `padding-inline-end` |
| `--c-descriptions-border-item-size-xl-padding-vertical` | `var(--c-spacing-6)` | `padding` |
| `--c-descriptions-border-item-size-xs-padding-horizontal` | `var(--c-spacing-8)` | `padding`, `padding-inline-end` |
| `--c-descriptions-border-item-size-xs-padding-vertical` | `3px` | `padding` |
| `--c-descriptions-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-descriptions-border-style` | `solid` | `border`, `border-bottom`, `border-inline-end` |
| `--c-descriptions-border-width` | `1px` | `border`, `border-bottom`, `border-inline-end` |
| `--c-descriptions-font-size-title` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-descriptions-font-weight-text-label` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-descriptions-font-weight-text-value` | `var(--c-font-weight-400)` | `font-weight` |
| `--c-descriptions-font-weight-title` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-descriptions-inline-vertical-padding-extra` | `5px` | `padding` |
| `--c-descriptions-item-label-inline-margin-bottom` | `var(--c-spacing-1)` | `margin-bottom` |
| `--c-descriptions-item-label-inline-margin-right` | `var(--c-spacing-2)` | `margin-inline-end` |
| `--c-descriptions-item-label-padding-x` | `var(--c-spacing-2)` | `padding` |
| `--c-descriptions-item-size-lg-spacing-bottom` | `var(--c-spacing-6)` | `padding-bottom` |
| `--c-descriptions-item-size-md-spacing-bottom` | `var(--c-spacing-4)` | `padding`, `padding-bottom` |
| `--c-descriptions-item-size-sm-spacing-bottom` | `var(--c-spacing-2)` | `padding-bottom` |
| `--c-descriptions-item-size-xl-spacing-bottom` | `var(--c-spacing-7)` | `padding-bottom` |
| `--c-descriptions-item-size-xs-spacing-bottom` | `var(--c-spacing-1)` | `padding-bottom` |
| `--c-descriptions-size-lg-font-size-text` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-descriptions-size-lg-title-margin-bottom` | `var(--c-spacing-8)` | `margin-bottom` |
| `--c-descriptions-size-md-font-size-text` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-descriptions-size-md-title-margin-bottom` | `var(--c-spacing-7)` | `margin-bottom` |
| `--c-descriptions-size-sm-font-size-text` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-descriptions-size-sm-title-margin-bottom` | `var(--c-spacing-4)` | `margin-bottom` |
| `--c-descriptions-size-xl-font-size-text` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-descriptions-size-xl-title-margin-bottom` | `var(--c-spacing-8)` | `margin-bottom` |
| `--c-descriptions-size-xs-font-size-text` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-descriptions-size-xs-title-margin-bottom` | `var(--c-spacing-3)` | `margin-bottom` |
| `--c-descriptions-text-color-label` | `var(--c-color-text-3)` | `color` |
| `--c-descriptions-text-color-value` | `var(--c-color-text-1)` | `color` |
| `--c-descriptions-title-color` | `var(--c-color-text-1)` | `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-descriptions-border-color: var(--c-color-neutral-3);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
