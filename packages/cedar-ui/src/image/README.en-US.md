---
lang: en-US
permalink: /en/components/image/
---

# Image

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `width`: Sets the configured width.

<demo src="./__demos__/basic.vue"></demo>

## Image presentation and states

### Fit Mode

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `width` | Displayed image width | Fit Mode, Captions and additional content, Error |
| `src` | Image source URL | Fit Mode, Captions and additional content, Error |
| `height` | Displayed image height | Fit Mode, Error, Loader |
| `preview-disabled` | Whether click preview is disabled | Fit Mode, Loader, Lazy |
| `object-fit` | How the image fits its container | Fit Mode, Lazy |
| `title` | Title | Captions and additional content |
<!-- demo-config-notes:end -->


- `width`: Sets the configured width.
- `height`: Constrains the component height.

<demo src="./__demos__/fit-mode.vue"></demo>

### Captions and additional content

Compare caption and extra-slot placement independently of previews, loading and failures.

<demo src="./__demos__/content-comparison.vue"></demo>

### Error

- `width`: Sets the configured width.
- `height`: Constrains the component height.

<demo src="./__demos__/error.vue"></demo>

### Loader

- `width`: Sets the configured width.
- `height`: Constrains the component height.

<demo src="./__demos__/loader.vue"></demo>

### Lazy

- `width`: Sets the configured width.
- `height`: Constrains the component height.

<demo src="./__demos__/lazy.vue"></demo>

## Preview entries and groups

### Disable Preview

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `width` | Displayed image width | Disable Preview, Preview Entry, Preview Group |
| `src` | Image source URL | Disable Preview, Preview Entry, Preview Group |
| `height` | Displayed image height | Preview Entry, Preview Group |
| `object-fit` | How the image fits its container | Preview Entry, Preview Group |
| `preview-disabled` | Whether click preview is disabled | Disable Preview |
| `preview-props` | Preview options | Preview Entry |
<!-- demo-config-notes:end -->


- `width`: Sets the configured width.

<demo src="./__demos__/disable-preview.vue"></demo>

### Preview Entry

- `width`: Sets the configured width.
- `height`: Constrains the component height.

<demo src="./__demos__/preview-entry.vue"></demo>

### Component Preview

Preview configuration: `v-model:open="open"`, `src="/cat.jpg"`.

<demo src="./__demos__/component-preview.vue"></demo>

### Imperative Preview

<demo src="./__demos__/imperative-preview.vue"></demo>

### Preview Group

- `width`: Sets the configured width.
- `height`: Constrains the component height.

<demo src="./__demos__/preview-group.vue"></demo>

### Component Preview Group

Preview configuration: `v-model:open="open"`, `:images="images"`, `:loop="false"`.

<demo src="./__demos__/component-preview-group.vue"></demo>

## Preview customization and interaction

### Ripple

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `width` | Displayed image width | Ripple, Overlay Closable, Hide Footer Never |
| `src` | Image source URL | Ripple, Overlay Closable, Hide Footer Never |
| `height` | Displayed image height | Ripple, Overlay Closable, Presentation |
| `object-fit` | How the image fits its container | Ripple, Overlay Closable, Presentation |
| `preview-disabled` | Whether click preview is disabled | Ripple, Hide Footer Never, Presentation |
| `preview-props` | Preview options | Overlay Closable, Preview Popup Container |
<!-- demo-config-notes:end -->


- `width`: Sets the configured width.
- `height`: Constrains the component height.

<demo src="./__demos__/ripple.vue"></demo>

### Overlay Closable

- `width`: Sets the configured width.
- `height`: Constrains the component height.

<demo src="./__demos__/overlay-closable.vue"></demo>

### Hide Footer Never

- `width`: Sets the configured width.

<demo src="./__demos__/hide-footer-never.vue"></demo>

### Preview Features

Preview configuration: `v-model:open="open"`, `:images="images"`, `:loop="false"`, `name="切换"`.

<demo src="./__demos__/preview-features.vue"></demo>

### Presentation

- `width`: Sets the configured width.
- `height`: Constrains the component height.

<demo src="./__demos__/presentation.vue"></demo>

### Preview Popup Container

- `width`: Sets the configured width.

<demo src="./__demos__/preview-popup-container.vue"></demo>

## Lifecycle

### Track Lifecycle

Preview configuration: `v-model:open="open"`, `:images="images"`, `:loop="loop"`, `name="Replace images / 换图"`.

<demo src="./__demos__/track-lifecycle.vue"></demo>

### Controller Lifecycle

Preview configuration: `v-model:open="open"`, `:src="source"`, `interaction="touch"`, `:keyboard="true"`.

<demo src="./__demos__/controller-lifecycle.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"` and supports runtime and nested overrides. Preview collection navigation, horizontal keys and swipes follow reading direction without reversing the image array. Direction changes cancel pending gestures while preserving the current image, scale and rotation. Images and zoomed pan coordinates are not mirrored. Numerical indicators remain LTR.

## API

ImagePreviewGroup binds a one-based image number through ordinary `v-model`; `defaultValue` initializes the uncontrolled index. Panel opening uses `v-model:open` and `defaultOpen` independently. Programmatic preview options also use modelValue/`defaultValue` and onUpdate:modelValue.

### `<image>` Props

| Parameter | Description | Type | Default | Version |
| -------------------------- | ------------------------------------------------------- | ---------------------------------------------------------- | :-------: | :----- |
| src | Image source URL | `string` | `-` |  |
| width | Displayed image width | `string \| number` | `-` |  |
| height | Displayed image height | `string \| number` | `-` |  |
| title | Title | `string` | `-` |  |
| description | Caption displayed at the bottom; also used as alt when alt is empty | `string` | `-` |  |
| object-fit | How the image fits its container | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `-` |  |
| alt | Image text description | `string` | `-` |  |
| hide-footer | Whether to hide the footer; supports `'never'`, which retains the footer on error | `boolean \| 'never'` | `false` |  |
| footer-position | Footer region inside (inner) or outside (outer) the image, default inner; not four-side popup placement | `'inner' \| 'outer'` | `'inner'` |  |
| show-loader | Whether to show a loading effect | `boolean` | `false` |  |
| preview-disabled | Whether click preview is disabled | `boolean` | `false` |  |
| open **(v-model)** | Controlled preview open state | `boolean` | `-` |  |
| default-open | Default preview open state | `boolean` | `false` |  |
| preview-props | Preview options | `ImagePreviewProps` | `-` |  |
| footer-class | Footer-area class | `string\|array\|object` | `-` | 2.23.0 |
| popup-container | Preview mount container | `string \| HTMLElement \| false` | `-` |  |

### `<image>` Events

| Event | Description | Arguments |
| ------------------- | -------------------- | --------------- |
| open-change | Preview open/close event | open: `boolean` |

### `<image>` Slots

| Slot | Description | Arguments |
| --------------- | :------------------: | ---- |
| error | Custom error-state content | - |
| error-icon | Custom error-state icon | - |
| loader | Custom loading effect | - |
| extra | Additional footer content | - |
| preview-actions | Custom preview toolbar | - |

### `<image-preview>` Props

| Parameter | Description | Type | Default |
| ------------------ | ----------------------------------------------------------------- | ----------------------- | :----------------------------------------------------------------------------------------: |
| src | Image source URL | `string` | `-` |
| open **(v-model)** | Whether open | `boolean` | `-` |
| default-open | Default uncontrolled open state | `boolean` | `false` |
| overlay-closable | Whether clicking the overlay outside the image requests closing; clicking the image does not close it | `boolean` | `true` |
| closable | Show the close button | `boolean` | `true` |
| actions-layout | Action layout | `string[]` | `[  'fullScreen',  'rotateRight',  'rotateLeft',  'zoomIn',  'zoomOut',  'originalSize',]` |
| popup-container | Popup mount target, matching `teleport` `to`; defaults `to` document.body | `HTMLElement \| string \| false` | `-` |
| esc-to-close | Whether ESC closes the preview | `boolean` | `true` |
| wheel-zoom | Whether mouse-wheel zoom is enabled | `boolean` | `true` |
| keyboard | Whether keyboard controls are enabled | `boolean` | `true` |
| default-scale | Default zoom scale | `number` | `1` |
| scale-step | Zoom increment per action | `number` | `0.5` |

### `<image-preview>` Events

| Event | Description | Arguments |
| ----------- | ------------ | --------------- |
| close | Close event | - |
| open-change | Open-state change | open: `boolean` |

### `<image-preview>` Slots

| Slot | Description | Arguments | Version |
| ------- | :----------------: | ---- | :----- |
| actions | Additional custom actions | - | 2.17.0 |

### `<image-preview-group>` Props

| Parameter | Description | Type | Default |
| --------------------- | ----------------------------------------------------------------- | ----------------------- | :----------------------------------------------------------------------------------------: |
| images | Image list; providing it disables collection of child Image sources | `string[]` | `-` |
| model-value **(v-model)** | Index of the current image, starting at 1 | `number` | `-` |
| default-value | Initially displayed image index, starting at 1 | `number` | `1` |
| loop | Whether to loop indefinitely | `boolean` | `false` |
| open **(v-model)** | Controlled open state | `boolean` | `-` |
| default-open | Default uncontrolled open state | `boolean` | `false` |
| overlay-closable | Whether clicking the overlay outside the image requests closing; clicking the image does not close it | `boolean` | `true` |
| closable | Show the close button | `boolean` | `true` |
| actions-layout | Toolbar layout | `string[]` | `[  'fullScreen',  'rotateRight',  'rotateLeft',  'zoomIn',  'zoomOut',  'originalSize',]` |
| popup-container | Popup mount target, matching `teleport` `to`; defaults `to` document.body | `string \| HTMLElement \| false` | `-` |

### `<image-preview-group>` Events

| Event | Description | Arguments |
| ----------- | ---------------- | --------------- |
| change | Switch image | imageNumber: `number`，previousImageNumber: `number` |
| open-change | Preview open/close | open: `boolean` |

### `<image-preview-group>` Slots

| Slot | Description | Arguments | Version |
| ------- | :----------------: | ---- | :----- |
| actions | Additional custom actions | - | 2.46.0 |

### `<image-preview-action>` Props (2.17.0)

| Parameter | Description | Type | Default |
| -------- | -------- | --------- | :-----: |
| name | Name | `string` | `-` |
| disabled | Whether disabled | `boolean` | `false` |

### Type definitions

```ts
import type { ImageInstance } from "@cedar-design/ui";
import { imagePreview } from "@cedar-design/ui";
```

### `imagePreview` methods

Replacing an imperative preview disposes the previous instance and invokes its `onClosed` once, just like normal closure. Use this callback to release owned resources such as Object URLs. Old handles never close newer previews. If `onClosed` synchronously opens a new preview, that newer call wins and the interrupted outer call returns `undefined`.

| Method | Description | Arguments |
| ---------------------------------- | ------------ | ------------------------------------- |
| `imagePreview` | Open the image preview | `url \| url[] \| ImagePreviewOptions` |
| `imagePreview.close` | Close the preview | `-` |
| `imagePreview.setDefaultOptions` | Set default configuration | `ImagePreviewOptions` |
| `imagePreview.resetDefaultOptions` | Reset default configuration | `-` |

## FAQ

### `image-preview` prop notes

1. With `keyboard` set to `true`, shortcuts are enabled according to `actions-layout`.

- `esc`: close the preview
- `left`: previous image
- `right`: next image
- `up`: zoom in
- `down`: zoom out
- `space`: restore original size

2. `defaultScale` sets the initial zoom ratio. For example, 1.5 initially displays the image at 1.5 times its original size.

3. `scaleStep` sets the zoom increment for wheel, double-click and toolbar actions.

### Variable consumption boundaries

`--c-image-preview-arrow-font-size` controls preview-group arrows. DOM for old actions-item, trigger, scale-value dimensions and simple-toolbar variables no longer exists; these ineffective entries are removed. The toolbar uses preview-color-action-* and preview-padding-action-content; the footer uses existing footer variables. Error/loading layers fill the image without an extra 100px minimum height. Zoom/track transitions use system motion and stop under reduced motion.

### Image-preview group numbering

`modelValue/defaultValue` start at `1`. `open(imageNumber = 1)` and `to(imageNumber)` use the same numbering; invalid/noninteger values are ignored. `prev()/next()` retain this numbering at loop boundaries. Model events are `update:modelValue(imageNumber)`; navigation emits `change(imageNumber, previousImageNumber)`, while external assignments do not. Long press emits `long-press(imageNumber)`; the indicator slot receives `{ imageNumber, length }`. Internal array indices remain zero-based.

Root `class` and `style` merge with the Image wrapper. Use `img-props.class/style` to style the inner image. Preview `open-change` is a Vue notification event: each state transition emits once, `.once` uses Vue event semantics, and returned Promises do not control loading. The typed `onOpenChange` listener uses this same event path.
