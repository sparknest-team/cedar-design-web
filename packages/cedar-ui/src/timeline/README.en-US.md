---
lang: en-US
permalink: /en/components/timeline/
---

# Timeline

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `reverse`: Whether reverse order

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Type

Preview configuration: `label="2017-03-10"`, `lineType="dashed"`, `type="secondary"`, `label="2018-05-12"`.

<demo src="./__demos__/type.vue"></demo>

## Layout and arrangement

### Timeline direction and labels

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `mode` | The display mode of Timeline | Timeline direction and labels |
| `label-position` | Position of label text | Timeline direction and labels |
| `orientation` | Horizontal/vertical axis of the timeline line, default vertical; constrains valid item sides | Timeline direction and labels |
| `pending` | Whether to display ghost nodes. When set to true, only ghost nodes are displayed. When passed to ReactNode, it will be displayed as node content | Timeline direction and labels |
<!-- demo-config-notes:end -->


Compare orientation, sequence and label placement independently of pending states and custom nodes.

<demo src="./__demos__/layout-comparison.vue"></demo>

## Content and presentation

### Pending

Preview configuration: `align="center"`, `:checked="!!pendingProps.orientation"`, `:checked="!!pendingProps.reverse"`, `:checked="!!pendingProps.pending"`.

<demo src="./__demos__/pending.vue"></demo>

### Mode

- `mode`: The display mode of Timeline

<demo src="./__demos__/mode.vue"></demo>

## Customization and slots

### Icon

Preview configuration: `label="2017-03-10"`, `dotColor="#00B42A"`, `label="2018-05-22"`, `label="2020-06-22"`.

<demo src="./__demos__/icon.vue"></demo>

### Dot

Preview configuration: `label="2020-04-12"`, `dotColor="#00B42A"`, `label="2020-05-17"`, `label="2020-06-22"`.

<demo src="./__demos__/dot.vue"></demo>

### Custom

<demo src="./__demos__/custom.vue"></demo>

## API

### `<timeline>` Props

| Parameter | Description | Type | Default |
| -------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------- | :----------: |
| reverse | Whether reverse order | `boolean` | `false` |
| orientation | Horizontal/vertical axis of the timeline line, default vertical; constrains valid item sides | `'horizontal' \| 'vertical'` | `'vertical'` |
| mode | The display mode of Timeline | `'left' \| 'right' \| 'top' \| 'bottom' \| 'alternate'` | `'left'` |
| pending | Whether to display ghost nodes. When set to true, only ghost nodes are displayed. When passed to ReactNode, it will be displayed as node content | `boolean\|string` | `-` |
| label-position | Position of label text | `'relative' \| 'same'` | `'same'` |

### `<timeline>` Slots

| Slot | Description | Arguments |
| ------ | :------: | ---- |
| dot | Ghost node | - |

### `<timeline-item>` Props

| Parameter | Description | Type | Default |
| ---------- | ---------------------------- | --------------------------------- | :-------: |
| dot-color | Node color | `string` | `-` |
| dot-type | Node type: outlined/filled circle | `'hollow' \| 'solid'` | `'solid'` |
| line-type | Timeline line style: solid/dashed/dotted | `'solid' \| 'dashed' \| 'dotted'` | `'solid'` |
| line-color | Timeline color | `string` | `-` |
| label | Label text | `string` | `-` |
| content-placement | Current per-item side relative to the timeline in alternate mode: left/right for vertical and top/bottom for horizontal. Constrained by mode and orientation | `TimelineItemContentPlacement` | `-` |

### `<timeline-item>` Slots

| Slot | Description | Arguments | Version |
| ------ | :--------: | ---- | :----- |
| dot | Custom node | - |  |
| label | Custom label | - | 2.50.0 |

### Type definitions

The component exports the following types

```ts
import type { MentionInstance } from '@cedar-design/ui'
```


## Reading direction and keyboard interaction

Horizontal timelines follow the inherited reading direction, including connecting lines. `reverse` independently controls visual reversal; switching direction does not reorder the data. Explicit vertical `left`/`right` sides retain their physical meaning.
