---
lang: en-US
permalink: /en/components/split/
---

# Split

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `size`: The size of the segmentation, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px
- `min`: Minimum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px

<demo src="./__demos__/basic.vue"></demo>

## Layout and arrangement

### Nested

- `orientation`: Direction of division

<demo src="./__demos__/nested.vue"></demo>

## API

### `<split>` Props

| Parameter | Description | Type | Default |
| ------------------ | ----------------------------------------------------------------- | ---------------------------- | :------------: |
| component | The html tag of the split box | `string` | `'div'` |
| orientation | Arrangement axis of the two panels: horizontal by default means left/right panels, whose divider handle is vertical | `'horizontal' \| 'vertical'` | `'horizontal'` |
| size **(v-model)** | The size of the segmentation, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px | `number\|string` | `-` |
| default-size | Default split size, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px | `number\|string` | `0.5` |
| min | Minimum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px | `number\|string` | `-` |
| max | Maximum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px | `number\|string` | `-` |
| disabled | Whether disabled | `boolean` | `false` |

### `<split>` Events

| Event | Description | Arguments |
| ---------- | ---------------- | ---- |
| move-start | Emitted before dragging starts | - |
| moving | Emitted during dragging | - |
| move-end | Emitted after dragging ends | - |

### `<split>` Slots

| Slot | Description | Arguments |
| ------------------- | :--------------: | ---- |
| first | First panel content | - |
| resize-trigger | Resize-handle content | - |
| resize-trigger-icon | Resize-handle icon | - |
| second | Second panel content | - |

### Type definitions

The component exports the following types

```ts
import type { SplitInstance } from '@cedar-design/ui'
```

`--c-split-trigger-size-icon-wrapper` (default 6px) controls handle thickness: width for vertical handles, height for horizontal handles. It does not change their 100% length along the panel.


## Reading direction and interaction

Split inherits the nearest native dir. Size and bounds always describe the first pane, preserving ratio or pixel units. In RTL, dragging left grows the first horizontal pane; vertical movement is unchanged. Focused separators support arrows, Shift, Home and End. Direction/orientation changes, disablement and teardown cancel gestures and restore the cursor without changing the size merely because direction changed.
