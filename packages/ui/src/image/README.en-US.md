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

| Configuration      | Purpose                           | Related examples                                 |
| ------------------ | --------------------------------- | ------------------------------------------------ |
| `width`            | Displayed image width             | Fit Mode, Captions and additional content, Error |
| `src`              | Image source URL                  | Fit Mode, Captions and additional content, Error |
| `height`           | Displayed image height            | Fit Mode, Error, Loader                          |
| `preview-disabled` | Whether click preview is disabled | Fit Mode, Loader, Lazy                           |
| `object-fit`       | How the image fits its container  | Fit Mode, Lazy                                   |
| `title`            | Title                             | Captions and additional content                  |

<!-- demo-config-notes:end -->

- `width`: Sets the configured width.
- `height`: Constrains the component height.

<demo src="./__demos__/fit-mode.vue"></demo>

### Captions and additional content

Compare caption and extra-slot placement independently of previews, loading and failures.

<demo src="./__demos__/content-comparison.en-US.vue"></demo>

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

| Configuration      | Purpose                           | Related examples                              |
| ------------------ | --------------------------------- | --------------------------------------------- |
| `width`            | Displayed image width             | Disable Preview, Preview Entry, Preview Group |
| `src`              | Image source URL                  | Disable Preview, Preview Entry, Preview Group |
| `height`           | Displayed image height            | Preview Entry, Preview Group                  |
| `object-fit`       | How the image fits its container  | Preview Entry, Preview Group                  |
| `preview-disabled` | Whether click preview is disabled | Disable Preview                               |
| `preview-props`    | Preview options                   | Preview Entry                                 |

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

| Configuration      | Purpose                           | Related examples                            |
| ------------------ | --------------------------------- | ------------------------------------------- |
| `width`            | Displayed image width             | Ripple, Overlay Closable, Hide Footer Never |
| `src`              | Image source URL                  | Ripple, Overlay Closable, Hide Footer Never |
| `height`           | Displayed image height            | Ripple, Overlay Closable, Presentation      |
| `object-fit`       | How the image fits its container  | Ripple, Overlay Closable, Presentation      |
| `preview-disabled` | Whether click preview is disabled | Ripple, Hide Footer Never, Presentation     |
| `preview-props`    | Preview options                   | Overlay Closable, Preview Popup Container   |

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

<demo src="./__demos__/track-lifecycle.en-US.vue"></demo>

### Controller Lifecycle

Preview configuration: `v-model:open="open"`, `:src="source"`, `interaction="touch"`, `:keyboard="true"`.

<demo src="./__demos__/controller-lifecycle.en-US.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Previous/next preview navigation, horizontal keys and swipes follow reading direction without reversing the value array. Direction changes cancel unfinished gestures while preserving the current image, zoom and rotation. Images and zoomed drag coordinates are not mirrored automatically. Image indices retain LTR numeric display.

## API

ImagePreviewGroup binds a one-based image number through ordinary `v-model`; `defaultValue` initializes the uncontrolled index. Panel opening uses `v-model:open` and `defaultOpen` independently. Programmatic preview options also use modelValue/`defaultValue` and onUpdate:modelValue.

### Image Props

| Prop                | Type                           | Default | Description                                                  |
| ------------------- | ------------------------------ | ------- | ------------------------------------------------------------ |
| src                 | string                         | -       | Thumbnail source                                             |
| preview-src         | string                         | -       | Preview URL, falling back to src                             |
| fallback-src        | string                         | -       | One fallback after a source error                            |
| width               | string \| number               | -       | Root width; numbers are px                                   |
| height              | string \| number               | -       | Root height; numbers are px                                  |
| object-fit          | ImageFit                       | fill    | Image fitting mode                                           |
| object-position     | string                         | 50% 50% | Native object position                                       |
| radius              | string \| number               | 0       | Root border radius                                           |
| alt                 | string                         | -       | Image alternative text; empty is preserved                   |
| title               | string                         | -       | Image title and footer title                                 |
| description         | string                         | -       | Footer text and alt fallback                                 |
| load-description    | string                         | -       | Last alt fallback                                            |
| hide-footer         | boolean \| 'never'             | false   | Hide footer, or show it in every load state                  |
| footer-position     | 'inner' \| 'outer'             | inner   | Footer position                                              |
| footer-class        | string \| array \| object      | -       | Footer classes                                               |
| lazy                | boolean                        | false   | Use native image lazy loading                                |
| img-props           | ImgHTMLAttributes              | -       | Thumbnail element attributes                                 |
| previewed-img-props | ImgHTMLAttributes              | -       | Single preview image attributes                              |
| show-loader         | boolean                        | false   | Show default loader while loading                            |
| ripple              | boolean                        | false   | Enable ripple                                                |
| block               | boolean                        | true    | Render block layout                                          |
| preview-disabled    | boolean                        | false   | Disable image preview                                        |
| open                | boolean                        | `-`     | Controlled standalone preview state Supports `v-model:open`. |
| default-open        | boolean                        | false   | Initial uncontrolled preview state                           |
| preview-props       | `Partial<ImagePreviewProps>`   | -       | Standalone preview options                                   |
| popup-container     | string \| HTMLElement \| false | body    | Preview mount target                                         |

### Image Events

| Event       | Description           | Arguments     |
| ----------- | --------------------- | ------------- |
| update:open | Preview state request | open: boolean |
| open-change | Preview state request | open: boolean |
| click       | Image activation      | event: Event  |
| load        | Image resource loaded | event: Event  |
| error       | Image resource failed | event: Event  |

### Image Slots

| Slot            | Description                                       | Scope |
| --------------- | ------------------------------------------------- | ----- |
| extra           | Footer content                                    | -     |
| placeholder     | Loading placeholder; takes precedence over loader | -     |
| loader          | Custom loading indicator                          | -     |
| error           | Error content                                     | -     |
| error-icon      | Default error icon replacement                    | -     |
| preview-actions | Standalone preview toolbar extra actions          | -     |

### ImagePreview Props

| Prop                  | Type                           | Default                     | Description                                       |
| --------------------- | ------------------------------ | --------------------------- | ------------------------------------------------- |
| src                   | string                         | -                           | Preview image URL                                 |
| open                  | boolean                        | `-`                         | Controlled preview state Supports `v-model:open`. |
| default-open          | boolean                        | false                       | Initial uncontrolled state                        |
| interaction           | 'auto' \| 'desktop' \| 'touch' | auto                        | Interaction mode                                  |
| popup-container       | string \| HTMLElement \| false | body                        | Preview mount target                              |
| lock-scroll           | boolean                        | true                        | Lock background scrolling                         |
| closable              | boolean                        | true                        | Show separate close button                        |
| overlay-closable      | boolean                        | true                        | Allow backdrop to close                           |
| esc-to-close          | boolean                        | true                        | Allow Escape to close                             |
| image-prevent-default | boolean                        | false                       | Prevent image context menu                        |
| default-scale         | number                         | 1                           | Initial and reset scale                           |
| min-scale             | number                         | 0.5                         | Lower scale bound                                 |
| max-scale             | number                         | 8                           | Upper scale bound                                 |
| scale-step            | number                         | 0.5                         | Zoom increment                                    |
| wheel-zoom            | boolean                        | desktop                     | Enable wheel zoom; automatic when omitted         |
| keyboard              | boolean                        | desktop                     | Enable preview keyboard shortcuts                 |
| draggable             | boolean                        | true                        | Enable pointer gestures                           |
| keep-drag-offset      | boolean                        | false                       | Keep offset when scale returns to 1 or less       |
| show-toolbar          | boolean                        | true                        | Show toolbar and its actions slot                 |
| actions-layout        | ImagePreviewActionName[]       | desktop defaults / touch [] | Ordered toolbar actions                           |
| previewed-img-props   | ImgHTMLAttributes              | -                           | Preview image element attributes                  |

### ImagePreview Events

| Event          | Description                  | Arguments     |
| -------------- | ---------------------------- | ------------- |
| update:open    | Preview state request        | open: boolean |
| open-change    | Preview state request        | open: boolean |
| open / opened  | Open transition start / end  | -             |
| close / closed | Close transition start / end | -             |
| key-escape     | Escape notification          | -             |
| long-press     | Long press notification      | -             |
| prev / next    | Navigation requests          | -             |

### ImagePreview Slots

| Slot       | Description                | Scope                                                                     |
| ---------- | -------------------------- | ------------------------------------------------------------------------- |
| image      | Replace the preview image  | { src, scale, rotate, translateX, translateY, moving, previewedImgProps } |
| actions    | Additional toolbar actions | -                                                                         |
| close-icon | Separate close button icon | -                                                                         |
| overlay    | Preview overlay content    | -                                                                         |
| extra      | Extra preview content      | -                                                                         |

When `images` is omitted or `undefined`, the group collects previewable child Images in DOM order; updating a child URL preserves its identity and position. An explicitly supplied array is the source, and `[]` means no images. Set it back to `undefined` to resume child collection. In array mode use the group `open` / `to` methods to select an image; child Images do not map themselves to array indices.

Public indices start at 1. The displayed index is clamped when data shrinks, and child reordering preserves the selected image identity. A controlled `modelValue` receives an update request when adjustment is needed; its owner can accept or reject it. No preview content is shown when the list is empty; the open state remains, so content may reappear when images return.

A previewable image exposes a named button action supporting Tab, Enter and Space. When preview closes, focus is restored to its opener when possible if focus is still in the preview or has fallen to the document body. The action is absent when preview is disabled or the image has failed. Explicit `alt=""` stays empty; a previewable decorative image still has a separately named preview action. When `alt` is omitted, `imgProps.alt`, `description`, then `loadDescription` supply the fallback.

When keyboard shortcuts are enabled, only the topmost preview handles arrow keys and Space. Inputs, editable regions and other interactive controls retain their own key behavior.

### ImagePreviewGroup Props

| Prop                  | Type                           | Default                     | Description                                                |
| --------------------- | ------------------------------ | --------------------------- | ---------------------------------------------------------- |
| open                  | boolean                        | `-`                         | Controlled preview state Supports `v-model:open`.          |
| default-open          | boolean                        | false                       | Initial uncontrolled state                                 |
| interaction           | 'auto' \| 'desktop' \| 'touch' | auto                        | Interaction mode                                           |
| popup-container       | string \| HTMLElement \| false | body                        | Preview mount target                                       |
| lock-scroll           | boolean                        | true                        | Lock background scrolling                                  |
| closable              | boolean                        | true                        | Show separate close button                                 |
| overlay-closable      | boolean                        | true                        | Allow backdrop to close                                    |
| esc-to-close          | boolean                        | true                        | Allow Escape to close                                      |
| image-prevent-default | boolean                        | false                       | Prevent image context menu                                 |
| default-scale         | number                         | 1                           | Initial and reset scale                                    |
| min-scale             | number                         | 0.5                         | Lower scale bound                                          |
| max-scale             | number                         | 8                           | Upper scale bound                                          |
| scale-step            | number                         | 0.5                         | Zoom increment                                             |
| wheel-zoom            | boolean                        | desktop                     | Enable wheel zoom; automatic when omitted                  |
| keyboard              | boolean                        | desktop                     | Enable preview keyboard shortcuts                          |
| draggable             | boolean                        | true                        | Enable pointer gestures                                    |
| keep-drag-offset      | boolean                        | false                       | Keep offset when scale returns to 1 or less                |
| show-toolbar          | boolean                        | true                        | Show toolbar and its actions slot                          |
| actions-layout        | ImagePreviewActionName[]       | desktop defaults / touch [] | Ordered toolbar actions                                    |
| images                | string[]                       | -                           | Explicit images; undefined collects children, [] is empty  |
| model-value           | number                         | `-`                         | Controlled image number, starting at 1 Supports `v-model`. |
| default-value         | number                         | 1                           | Initial image number, starting at 1                        |
| loop                  | boolean                        | false                       | Wrap when navigating                                       |

### ImagePreviewGroup Events

| Event             | Description                  | Arguments                                        |
| ----------------- | ---------------------------- | ------------------------------------------------ |
| update:open       | Preview state request        | open: boolean                                    |
| open-change       | Preview state request        | open: boolean                                    |
| update:modelValue | Image number request         | imageNumber: number                              |
| change            | Image number change request  | imageNumber: number, previousImageNumber: number |
| open / opened     | Open transition start / end  | -                                                |
| close / closed    | Close transition start / end | -                                                |
| key-escape        | Escape notification          | -                                                |
| long-press        | Long press notification      | imageNumber: number                              |

### ImagePreviewGroup Slots

| Slot       | Description                | Scope                   |
| ---------- | -------------------------- | ----------------------- |
| default    | Child images               | -                       |
| close-icon | Separate close button icon | -                       |
| indicator  | Image count display        | { imageNumber, length } |
| extra      | Extra preview content      | { url }                 |
| actions    | Additional toolbar actions | { url }                 |

### ImagePreviewAction Props (2.17.0)

| Parameter | Description      | Type      | Default |
| --------- | ---------------- | --------- | :-----: |
| name      | Name             | `string`  |   `-`   |
| disabled  | Whether disabled | `boolean` | `false` |

### ImagePreviewGroup Methods

| Method                       | Description                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------- |
| open(imageNumber = 1)        | Request open at a 1-based image number                                       |
| close()                      | Request close                                                                |
| prev() / next()              | Navigate one image                                                           |
| to(imageNumber)              | Navigate to a 1-based image number                                           |
| reset()                      | Reset current preview transforms                                             |
| zoomTo(scale)                | Set finite scale within bounds                                               |
| zoomIn() / zoomOut()         | Change scale by scale-step                                                   |
| rotateLeft() / rotateRight() | Rotate by 90 degrees                                                         |
| toggleFullscreen()           | Toggle fullscreen; returns the browser Promise or undefined when unsupported |

`Image.showPreview()` requests the current image preview. The `imagePreview`, `previewImage`, and `ImagePreviewFn` service accepts a URL, URL array, or options and returns `ImagePreviewHandle | undefined` (for example during SSR). Its handle offers the 12 Group operations; paging operations have no effect for a single image. The service also exposes `close()`, `setDefaultOptions()`, and `resetDefaultOptions()`. A call such as `imagePreview({ closable: true })` uses the images configured by `setDefaultOptions()`. A nonempty `images` list or a `src` URL on the call overrides those images. When both are supplied, the list takes precedence. Native `lazy` is browser-scheduled and does not promise automatic retries.

Scale parameters must be finite and positive; invalid min/max/default/step values fall back to 0.5/8/1/0.5. If max is below min it resolves to min. Initial and reset scales are clamped, changes to bounds clamp the current value, and `zoomTo` ignores nonfinite input. `close` in `actionsLayout` is a toolbar action, independent of the separate button controlled by `closable`.

### Image Methods

| Method        | Description                                      |
| ------------- | ------------------------------------------------ |
| showPreview() | Request the current image preview when available |

### ImagePreviewAction Slots

| Slot    | Description           | Scope |
| ------- | --------------------- | ----- |
| default | Action button content | -     |

## Types

```ts
import type { ImageInstance } from '@cedar-design/ui-vue'
import { imagePreview } from '@cedar-design/ui-vue'
```

### ImagePreview Methods

Replacing an imperative preview disposes the previous instance and invokes its `onClosed` once, just like normal closure. Use this callback to release owned resources such as Object URLs. Old handles never close newer previews. If `onClosed` synchronously opens a new preview, that newer call wins and the interrupted outer call returns `undefined`.

| Method                       | Description                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------- |
| open()                       | Request open                                                                 |
| close()                      | Request close                                                                |
| reset()                      | Reset scale, rotation and offset                                             |
| zoomTo(scale)                | Set finite scale within bounds                                               |
| zoomIn() / zoomOut()         | Change scale by scale-step                                                   |
| rotateLeft() / rotateRight() | Rotate by 90 degrees                                                         |
| toggleFullscreen()           | Toggle fullscreen; returns the browser Promise or undefined when unsupported |

## FAQ

### `image-preview` prop notes

1. Set `keyboard` to `true` to enable preview shortcuts independently of `actions-layout`. Escape is controlled by `esc-to-close`.

- `esc`: close the preview
- `left`: previous image
- `right`: next image
- `up`: zoom in
- `down`: zoom out
- `space`: restore original size

2. `defaultScale` sets the initial zoom ratio. For example, 1.5 initially displays the image at 1.5 times its original size.

3. `scaleStep` sets the zoom increment for wheel, double-click and toolbar actions.

### Image-preview group numbering

`modelValue/defaultValue` start at `1`. `open(imageNumber = 1)` and `to(imageNumber)` use the same numbering; invalid/noninteger values are ignored. `prev()/next()` retain this numbering at loop boundaries. Model events are `update:modelValue(imageNumber)`; navigation emits `change(imageNumber, previousImageNumber)`, while external assignments do not. Long press emits `long-press(imageNumber)`; the indicator slot receives `{ imageNumber, length }`. Internal array indices remain zero-based.

Root `class` and `style` merge with the Image wrapper. Use `img-props.class/style` to `style` the inner image. Preview `open-change` is a Vue notification event: each state transition emits once, `.once` uses Vue event semantics, and returned Promises do not control loading. The typed `onOpenChange` listener uses this same event path.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable                                        | Default / condition                                                     | Affected styles                          |
| ----------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------- |
| `--c-image-border-radius`                       | `var(--c-border-radius-sm)`                                             | `border-radius`                          |
| `--c-image-description-footer-inner-text-color` | `var(--c-color-white)`                                                  | `color`                                  |
| `--c-image-description-footer-outer-text-color` | `var(--c-color-neutral-6)`                                              | `color`                                  |
| `--c-image-error-bg`                            | `var(--c-color-neutral-1)`                                              | `background-color`                       |
| `--c-image-error-text-color`                    | `var(--c-color-neutral-4)`                                              | `color`                                  |
| `--c-image-font-size-description`               | `var(--c-font-size-body-3)`                                             | `font-size`                              |
| `--c-image-font-size-error-icon`                | `60px`                                                                  | `height`, `width`                        |
| `--c-image-font-size-error-text`                | `var(--c-font-size-body-1)`                                             | `font-size`                              |
| `--c-image-font-size-loader-spin`               | `32px`                                                                  | `font-size`                              |
| `--c-image-font-size-loader-spin-text`          | `var(--c-font-size-title-1)`                                            | `font-size`                              |
| `--c-image-font-size-title`                     | `var(--c-font-size-title-1)`                                            | `font-size`                              |
| `--c-image-font-weight-title`                   | `var(--c-font-weight-500)`                                              | `font-weight`                            |
| `--c-image-footer-inner-bg`                     | `linear-gradient(360deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%)` | `background`                             |
| `--c-image-footer-inner-text-color`             | `var(--c-color-white)`                                                  | `color`                                  |
| `--c-image-footer-outer-text-color`             | `var(--c-color-neutral-8)`                                              | `color`                                  |
| `--c-image-line-height-error-text`              | `1.6667`                                                                | `line-height`                            |
| `--c-image-loader-bg`                           | `var(--c-color-neutral-1)`                                              | `background-color`                       |
| `--c-image-loader-spin-text-color`              | `var(--c-sys-color-content-brand)`                                      | `color`                                  |
| `--c-image-loader-spin-text-text-color`         | `var(--c-color-neutral-6)`                                              | `color`                                  |
| `--c-image-padding-footer-inner-horizontal`     | `16px`                                                                  | `padding`                                |
| `--c-image-padding-footer-inner-vertical`       | `9px`                                                                   | `padding`                                |
| `--c-image-preview-arrow-bg`                    | `rgba(255, 255, 255, 0.3)`                                              | `background-color`                       |
| `--c-image-preview-arrow-bg-disabled`           | `rgba(255, 255, 255, 0.2)`                                              | `background-color`                       |
| `--c-image-preview-arrow-bg-hover`              | `rgba(255, 255, 255, 0.5)`                                              | `background-color`                       |
| `--c-image-preview-arrow-font-size`             | `var(--c-size-4)`                                                       | `font-size`                              |
| `--c-image-preview-arrow-icon-color`            | `var(--c-color-white)`                                                  | `color`                                  |
| `--c-image-preview-arrow-icon-color-disabled`   | `rgba(255, 255, 255, 0.3)`                                              | `color`                                  |
| `--c-image-preview-arrow-position`              | `var(--c-spacing-8)`                                                    | `inset-inline-end`, `inset-inline-start` |
| `--c-image-preview-arrow-size`                  | `var(--c-size-8)`                                                       | `height`, `width`                        |
| `--c-image-preview-border-radius-action`        | `var(--c-border-radius-sm)`                                             | `border-radius`                          |
| `--c-image-preview-border-radius-loading`       | `var(--c-border-radius-md)`                                             | `border-radius`                          |
| `--c-image-preview-border-radius-toolbar`       | `var(--c-border-radius-md)`                                             | `border-radius`                          |
| `--c-image-preview-color-action-bg`             | `transparent`                                                           | `background-color`                       |
| `--c-image-preview-color-action-disabled-bg`    | `transparent`                                                           | `background-color`                       |
| `--c-image-preview-color-action-disabled-text`  | `var(--c-color-text-4)`                                                 | `color`                                  |
| `--c-image-preview-color-action-hover-bg`       | `var(--c-color-neutral-2)`                                              | `background-color`                       |
| `--c-image-preview-color-action-hover-text`     | `var(--c-sys-color-content-brand)`                                      | `color`                                  |
| `--c-image-preview-color-action-text`           | `var(--c-color-neutral-8)`                                              | `color`                                  |
| `--c-image-preview-color-close-btn-bg`          | `rgba(0, 0, 0, 0.5)`                                                    | `background`                             |
| `--c-image-preview-color-close-btn-text`        | `var(--c-color-white)`                                                  | `color`                                  |
| `--c-image-preview-color-loading-bg`            | `#232324`                                                               | `background-color`                       |
| `--c-image-preview-color-loading-text`          | `var(--c-sys-color-content-brand)`                                      | `color`                                  |
| `--c-image-preview-color-scale-value-text`      | `var(--c-color-white)`                                                  | `color`                                  |
| `--c-image-preview-color-toolbar-bg`            | `var(--c-color-bg-2)`                                                   | `background-color`                       |
| `--c-image-preview-font-size-action`            | `14px`                                                                  | `font-size`                              |
| `--c-image-preview-font-size-loading`           | `18px`                                                                  | `font-size`                              |
| `--c-image-preview-margin-action-right`         | `var(--c-spacing-none)`                                                 | `margin-inline-end`                      |
| `--c-image-preview-overlay-bg`                  | `var(--c-color-overlay-bg)`                                             | `background-color`                       |
| `--c-image-preview-padding-action-content`      | `13px`                                                                  | `padding`                                |
| `--c-image-preview-position-close-btn-right`    | `36px`                                                                  | `inset-inline-end`                       |
| `--c-image-preview-position-close-btn-top`      | `36px`                                                                  | `top`                                    |
| `--c-image-preview-position-toolbar-bottom`     | `46px`                                                                  | `bottom`                                 |
| `--c-image-preview-size-close-btn-width`        | `32px`                                                                  | `height`, `line-height`, `width`         |
| `--c-image-preview-size-close-icon`             | `14px`                                                                  | `font-size`                              |
| `--c-image-preview-size-loading-height`         | `48px`                                                                  | `height`                                 |
| `--c-image-preview-size-loading-width`          | `48px`                                                                  | `width`                                  |
| `--c-image-preview-spacing-loading-padding`     | `var(--c-spacing-5)`                                                    | `padding`                                |
| `--c-image-preview-spacing-toolbar-horizontal`  | `var(--c-spacing-7)`                                                    | `padding`                                |
| `--c-image-preview-spacing-toolbar-vertical`    | `var(--c-spacing-2)`                                                    | `padding`                                |
| `--c-image-spacing-actions-left`                | `var(--c-spacing-6)`                                                    | `padding-inline-start`                   |
| `--c-image-spacing-error-padding`               | `var(--c-spacing-7)`                                                    | `padding`                                |
| `--c-image-spacing-footer-top`                  | `var(--c-spacing-2)`                                                    | `margin-top`                             |
| `--c-image-title-text-color-footer-inner`       | `var(--c-color-white)`                                                  | `color`                                  |
| `--c-image-title-text-color-footer-outer`       | `var(--c-color-text-1)`                                                 | `color`                                  |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-image-border-radius: var(--c-border-radius-sm);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->

### Custom styling

`--c-image-preview-arrow-font-size` controls preview-group arrows. Use preview-color-action-* and preview-padding-action-content for the toolbar, and footer variables for the bottom bar. Error/loading layers fill the image without an extra 100px minimum height. Zoom/track transitions use system motion and stop under reduced motion.
