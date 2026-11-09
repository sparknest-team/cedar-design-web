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

## Sizes and bounds

`size/default-size/min/max` accept finite nonnegative numbers, numeric strings, and `px` or `%` strings. Unitless values from 0 to 1 are ratios; values greater than 1 are pixels. `50%` and `0.5` mean the same ratio; `1px` explicitly means one pixel. `rem`, `calc()`, negative values and nonfinite numbers are unsupported. Vue prop validation warns in development. Invalid size/default-size falls back to `0.5`, min to 0, and max to 100`%`.

Sizes use the container length along the current layout axis and stay inside the container. If min exceeds max, min wins within the container. Ratios follow container changes; pixel sizes stay unchanged while they fit. Each pane contributes half of the default 6px handle, with this adjustment clipped at the edges to prevent container overflow. Disabling removes the handle and its entire adjustment while preserving both panes and their input drafts.

Panes, ARIA, dragging and keyboard input share one effective size. When bounds or container changes make a size illegal, the component requests `update:size` once. If a controlled parent rejects it, presentation still respects the bounds and later input starts from that effective size. Controlled input within the legal range remains subject to parent acceptance. Updates are numeric ratios or px strings matching the input unit category. Ordinary notification events do not await Promises.

## API

### Split Props

| Parameter | Description | Type | Default |
| ------------------ | ----------------------------------------------------------------- | ---------------------------- | :------------: |
| aria-label | Accessible name of the separator handle; blank values use the current locale default | `string` | Current locale |
| component | The html tag of the split box | `string` | `'div'` |
| orientation | Arrangement axis of the two panels: horizontal by default means left/right panels, whose divider handle is vertical | `'horizontal' \| 'vertical'` | `'horizontal'` |
| size **(v-model)** | The size of the segmentation, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px | `number\|string` | `-` |
| default-size | Default split size, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px | `number\|string` | `0.5` |
| min | Minimum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px | `number\|string` | `-` |
| max | Maximum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px | `number\|string` | `-` |
| disabled | Whether disabled | `boolean` | `false` |

### Split Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:size | Drag, keyboard or legal-bound normalization request for v-model:size | `size: number\|string` |
| move-start | Start notification for an accepted drag; not emitted without measurable container size | `event: MouseEvent` |
| moving | Notification of an active drag movement | `event: MouseEvent` |
| move-end | End notification after release or cancellation, once per accepted drag | `event: MouseEvent` |

Pointer drags may supply a PointerEvent, which extends MouseEvent. Without a native terminal event, the end payload is the press event. Keyboard input emits only update:size. Ordinary events do not collect or await listener Promises.

### Split Slots

| Slot | Description | Prop |
| ------------------- | :--------------: | ---- |
| first | First panel content | - |
| resize-trigger | Resize-handle content | - |
| resize-trigger-icon | Resize-handle icon | - |
| second | Second panel content | - |

## Types

The component exports the following types

```ts
import type { SplitInstance, SplitProps } from '@cedar-design/ui'
import type { SplitProps as SubSplitProps } from '@cedar-design/ui/split'
```

`--c-split-trigger-size-icon-wrapper` (default 6px) controls handle thickness: width for vertical handles, height for horizontal handles. It does not change their 100% length along the panel.

## Reading direction and interaction

Split inherits the nearest native `dir`; its first horizontal panel sits at inline start. `size/defaultSize/min/max` always describe the first panel. RTL does not convert size to `1-size`; numeric ratios and px strings retain their original units.

In horizontal RTL dragging, moving left enlarges the first panel; vertical dragging still enlarges downward. The separator is focusable. Left/Right moves it visually, or Up/Down vertically, in 10px steps or 50px with Shift. Home/End reaches min/max. Mouse and touch pointers share sizing logic. Direction/orientation changes, disabling and unmount cancel an active drag and restore the previous cursor. Legal sizes remain unchanged when orientation changes; if the new axis makes the size illegal, the component requests the effective size.

## Dragging and cancellation

An accepted mouse or pointer drag produces exactly one end notification on release, cancellation, configuration changes, KeepAlive deactivation or unmounting. Listeners and cursor ownership are released before notification. ResizeBox retains moving-start/moving-end; Split retains move-start/move-end. When no native terminal mouse event exists, the end argument is the original press event. Discrete keyboard adjustments emit value updates without creating drag start/end events. Ending stops the gesture without rolling back an applied dimension or awaiting a listener’s returned promise.

## Handle names and instances

The existing global locale or ConfigProvider supplies the default handle name. Use `aria-label` to identify a business pane, for example `aria-label="Resize navigation pane"`; it names the focusable separator handle. Custom resize-trigger or resize-trigger-icon slots retain the supplied role, range, name and keyboard behavior.

All four named slots have no scope parameters; the component does not consume a default slot. SplitInstance is the standard Vue instance type with no extra resize command methods. Drive dimensions through props and v-model:size. SplitProps includes actual props and typed model/drag listeners, consistently exported from the root and subentry.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-split-trigger-bg` | `var(--c-color-neutral-3)` | `background-color` |
| `--c-split-trigger-font-size-icon` | `12px` | `font-size`, `margin` |
| `--c-split-trigger-icon-color` | `var(--c-color-text-1)` | `color` |
| `--c-split-trigger-size-icon-wrapper` | `6px` | `height`, `width` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-split-trigger-font-size-icon: 12px;
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
