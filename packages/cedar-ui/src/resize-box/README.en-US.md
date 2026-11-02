---
lang: en-US
permalink: /en/components/resize-box/
---

# Resize Box

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `directions`: Can be stretched side, there are up, down, left and right can be used

<demo src="./__demos__/basic.vue"></demo>

## Layout and arrangement

### Layout

Preview configuration: `:resize-directions="['right']"`.

<demo src="./__demos__/layout.vue"></demo>

## Interaction and control

### Controlled

- `directions`: Can be stretched side, there are up, down, left and right can be used
- `width`: Width
- `height`: Height

<demo src="./__demos__/controlled.vue"></demo>

### Custom Triggers

- `directions`: Can be stretched side, there are up, down, left and right can be used

<demo src="./__demos__/custom-triggers.vue"></demo>

## API

### `<resize-box>` Props

| Parameter | Description | Type | Default |
| -------------------- | ------------------------------------------ | -------------------------------------------- | :---------: |
| width **(v-model)** | Width | `number` | `-` |
| height **(v-model)** | Surface height | `number` | `-` |
| component | The html tag of the telescopic box | `string` | `'div'` |
| directions | Edges with enabled resize handles, right only by default. Any combination of top/right/bottom/left; describes neither pointer movement nor popup placement | `('left' \| 'right' \| 'top' \| 'bottom')[]` | `['right']` |

### `<resize-box>` Events

| Event | Description | Arguments |
| ------------ | -------------- | -------------------------------------------------------------- |
| moving-start | Emitted when dragging starts | ev: `MouseEvent` |
| moving | Emitted during dragging | size: `{ width: number; height: number; }`<br>ev: `MouseEvent` |
| moving-end | Emitted when dragging ends | ev: `MouseEvent` |

### `<resize-box>` Slots

| Slot | Description | Arguments |
| ------------------- | :----------: | --------------------------------------------------- |
| resize-trigger | Resize-handle content | direction: `'left' \| 'right' \| 'top' \| 'bottom'` |
| resize-trigger-icon | Resize-handle icon | direction: `'left' \| 'right' \| 'top' \| 'bottom'` |

### Type definitions

The component exports the following types

```ts
import type { ResizeBoxInstance } from '@cedar-design/ui'
```


### Placement semantics and configuration

directions means edges with enabled resize handles; the existing name is retained. Only the right edge is enabled by default; multiple edges can be combined. It is neither an orientation axis nor popup placement. Edges is a more direct name for a new design, but this update does not rename the API.


## Reading direction and interaction

ResizeBox directions name physical edges: left/right/top/bottom retain their sides in RTL. Handles support the corresponding axis arrow keys, mouse and touch pointers; Shift increases the step from 10px to 50px. Dimensions clamp at zero. Direction changes, edge removal and teardown cancel active gestures and release cursor ownership.
