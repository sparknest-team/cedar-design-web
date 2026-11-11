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

## Triggers and positioning

### Popup placement

`directions` selects resize-handle edges. The default is the right edge; multiple edges can be enabled.

## API

### ResizeBox Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| width **(v-model)** | CSS width under the current box model; finite nonnegative pixels | `number` | `undefined` |
| height **(v-model)** | CSS height under the current box model; finite nonnegative pixels | `number` | `undefined` |
| component | Root HTML tag; supply a valid tag name | `string` | `'div'` |
| directions | Unique physical edges; an empty array removes all handles | `ResizeBoxDirection[]`<br>`ResizeBoxDirection: 'left' \| 'right' \| 'bottom' \| 'top'` | `['right']` |

### ResizeBox Events

| Event | Description | Arguments |
| ------------ | -------------- | -------------------------------------------------------------- |
| update:width | Width update request; controlled mode waits for parent writeback | width: `number` |
| update:height | Height update request; controlled mode waits for parent writeback | height: `number` |
| moving-start | Emitted when dragging starts | ev: `MouseEvent` |
| moving | Emitted during dragging | size: `{ width: number; height: number; }`<br>ev: `MouseEvent` |
| moving-end | Emitted when dragging ends | ev: `MouseEvent` |

### ResizeBox Slots

| Slot | Description | Prop |
| ------------------- | :----------: | --------------------------------------------------- |
| default | Unscoped resizable-box content | - |
| resize-trigger | Resize-handle content | direction: `'left' \| 'right' \| 'top' \| 'bottom'` |
| resize-trigger-icon | Resize-handle icon | direction: `'left' \| 'right' \| 'top' \| 'bottom'` |

## Types

The component exports the following types

```ts
import type { ResizeBoxInstance, ResizeBoxProps, ResizeBoxDirection } from '@cedar-design/ui-vue'
```

## Reading direction and interaction

ResizeBox `directions` are physical edges: left stays left and right stays right in RTL. Handles and width/height meanings do not reverse. Moving the left handle left or the right handle right increases width; moving the top handle up or bottom handle down increases height. The minimum dimension is zero.

Focusable handles expose a spinbutton for finite nonnegative pixel dimensions without a fixed upper bound. aria-valuemin is 0; no fictitious aria-valuemax is supplied. Names and pixel value text follow Locale/ConfigProvider. Mouse and touch pointers retain physical-edge resizing.

Up increases and Down decreases the current width or height by 10px. Shift or PageUp/PageDown uses 50px; Home requests 0 and End does nothing. Left/right handles also retain physical-edge Left/Right shortcuts. Top/bottom handles interpret Up/Down as numeric changes, rather than edge movement. Text inherits native direction. Direction changes, removal of an active handle, deactivation and unmount release gesture listeners and the temporary cursor.

## Dimensions and box sizing

width, height and update events use CSS dimensions under the current box-sizing: border-box includes border and padding, while content-box means the content area. Measurement, keyboard/pointer deltas and writes share this dimension without deducting handle padding twice. Controlled mode only requests parent updates; without acceptance, both size and accessible value remain unchanged.

## Dragging and cancellation

An accepted mouse or pointer drag produces exactly one end notification on release, cancellation, configuration changes, KeepAlive deactivation or unmounting. Listeners and cursor ownership are released before notification. ResizeBox retains moving-start/moving-end; Split retains move-start/move-end. When no native terminal mouse event exists, the end argument is the original press event. Discrete keyboard adjustments emit value updates without creating drag start/end events. Ending stops the gesture without rolling back an applied dimension or awaiting a listener’s returned promise.

Zero width/height is valid. Invalid numbers are not written to CSS and behave as omitted dimensions. Invalid edge lists produce no handles; valid array edges are retained and deduplicated, with standard Vue development diagnostics. Public Props include model-update and drag-notification listeners; returned promises are not collected.

```ts
import type { ResizeBoxProps, ResizeBoxDirection } from '@cedar-design/ui-vue'
const edge: ResizeBoxDirection = 'right'
const props: ResizeBoxProps = { width: 200, directions: [edge], 'onUpdate:width': (width) => console.log(width) }
```

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-resize-box-trigger-bg` | `var(--c-color-neutral-3)` | `background-color` |
| `--c-resize-box-trigger-font-size-icon` | `12px` | `font-size`, `margin` |
| `--c-resize-box-trigger-icon-color` | `var(--c-color-text-1)` | `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-resize-box-trigger-bg: var(--c-color-neutral-3);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
