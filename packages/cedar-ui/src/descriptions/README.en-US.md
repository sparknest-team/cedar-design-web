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

Inherits the nearest `dir="ltr|rtl"` and supports runtime and nested overrides. Labels, values, borders and default text alignment follow logical reading edges. Direction changes do not reverse records, column definitions or span semantics.

## API

### `<Descriptions>` Props

| Prop | Description | Type | Default |
| ------------ | ------------------------------------------------------------------ | :---------------------------------------------------------------------------------------: | :------------- |
| data | Description-list data | `DescData[]` | `[]` |
| column | Items per row. Responsive configuration is supported since 2.20.0; see Grid | `number \| ResponsiveValue` | `3` |
| title | Description-list title | `string` | `-` |
| layout | Description-list arrangement | `'horizontal' \| 'vertical' \| 'inline-horizontal' \| 'inline-vertical' \| 'inline-auto'` | `'horizontal'` |
| align | Text alignment | `TextAlign \| { label?: TextAlign; value?: TextAlign }` | `'left'` |
| size | Description-list size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `-` |
| bordered | Whether to show border | `boolean` | `false` |
| label-style | Label styles | `CSSProperties` | `-` |
| value-style | Content styles | `CSSProperties` | `-` |
| table-layout | Table-style `layout-fixed`; setting `fixed` distributes widths evenly | `'auto' \| 'fixed'` | `'auto'` |
| aria-label | Accessible description-list label | `string` | `-` |

### `<Descriptions>` Slots

| Slot | Description | Arguments |
| ------ | :------: | ------------------------------------------------------ |
| value | Content | value: `string`<br>index: `number`<br>data: `DescData` |
| label | Label | label: `string`<br>index: `number`<br>data: `DescData` |
| title | Title | - |

### `<DescriptionsItem>` Props

| Prop | Description | Type | Default |
| ----- | -------- | :------: | :----- |
| span | Column span | `number` | `1` |
| label | Label | `string` | `-` |

### `<DescriptionsItem>` Slots

| Slot | Description | Arguments |
| ------- | :--: | ---- |
| default | Content | - |
| label | Label | - |

### DescData

| Parameter | Description | Type | Default |
| ------ | -------- | -------------------------- | :----: |
| label | Label | `string \| RenderFunction` | `-` |
| value | Data | `string \| RenderFunction` | `-` |
| span | Column span | `number` | `-` |

## Type definitions

The component exports the following types

```ts
import type { DescriptionsProps } from "@cedar-design/ui";
```
