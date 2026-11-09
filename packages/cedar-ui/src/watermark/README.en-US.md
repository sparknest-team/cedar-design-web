---
lang: en-US
permalink: /en/components/watermark/
---

# Watermark

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `:content="content"`, `:font="{ color: dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.25)' }"`.

<demo src="./__demos__/basic.vue"></demo>

## Content and presentation

### Multiline

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `content` | One or more text lines; also used when an image fails | Multiline, Image, Fullscreen |
| `image` | Image URL, preferred over text | Image |
| `width` | Mark width; measured from content by default | Image |
| `height` | Mark height; measured from content by default | Image |
| `font` | Text style | Image |
| `fullscreen` | Cover the viewport | Fullscreen |
<!-- demo-config-notes:end -->


Preview configuration: `:content="['Cedar Design', dayjs().format('YYYY-MM-DD')]"`.

<demo src="./__demos__/multiline.vue"></demo>

### Image

- `width`: Sets the configured width.
- `height`: Constrains the component height.

<demo src="./__demos__/image.vue"></demo>

### Fullscreen

Preview configuration: `content="Cedar Design"`, `:fullscreen="fullscreen"`, `:z-index="99"`.

<demo src="./__demos__/fullscreen.vue"></demo>

## Customization and slots

### Custom

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `content` | One or more text lines; also used when an image fails | Custom |
| `rotate` | Rotation angle | Custom |
| `gap` | Watermark gap `[x, y]` | Custom |
| `offset` | First mark offset; defaults to half the gap | Custom |
| `font` | Text style | Custom |
<!-- demo-config-notes:end -->


Preview configuration: `size="sm"`, `:model="form"`, `auto-label-width`, `:gutter="16"`.

<demo src="./__demos__/custom.vue"></demo>

## Usage notes

### Sizing and redraw

- Supply two finite numbers for `gap` and `offset`; non-negative gaps are recommended. A negative gap is currently clamped to zero only for tile dimensions, while drawing and background offsets use the original value, so do not rely on negative gaps for overlap. Use finite positive values for `width`, `height`, `font.fontSize`, and `font.lineHeight`; rendered width and height are at least 1. `rotate` and `zIndex` should be finite. Invalid inputs are not guaranteed to be corrected; valid `alpha` values are finite and between 0 and 1.
- The default `lineHeight` is `Math.round(fontSize * 1.4)`. Canvas parses the text color: `font.color` takes precedence over the computed color token. Supply a color supported by Canvas; CSS variable expressions are not guaranteed to resolve directly. Asynchronously loaded fonts do not trigger redraw automatically; call `redraw()` after they are ready.
- Image load failures emit `error` and fall back to text when available; Canvas failures also emit `error`. `redraw()` returns a Promise and normally handles rendering failures internally. Older asynchronous results cannot overwrite the current layer or report errors after props change or unmount, but the underlying image request is not cancelled. The `default` slot is not drawn into the watermark image.

## API

### Watermark Props

| Prop | Description | Type | Default |
| ------------- | ------------------------------------------ | -------------------- | -------------------------- |
| `content` | One or more text lines; also used when an image fails | `string \| string[]` | `-` |
| `image` | Image URL, preferred over text | `string` | `-` |
| `width` | Mark width; measured from content by default | `number` | `-` |
| `height` | Mark height; measured from content by default | `number` | `-` |
| `gap` | Watermark gap `[x, y]` | `[number, number]` | `[90, 90]` |
| `offset` | First mark offset; defaults to half the gap | `[number, number]` | `[gap[0] / 2, gap[1] / 2]` |
| `rotate` | Rotation angle | `number` | `-22` |
| `font` | Text style | `WatermarkFont` | `-` |
| `z-index` | Layer z-index | `number` | `6` |
| `alpha` | Overall opacity in the `0..1` range | `number` | `1` |
| `anti-tamper` | Restore a removed or modified layer | `boolean` | `true` |
| `grayscale` | Render in grayscale | `boolean` | `false` |
| `repeat` | Repeat the mark | `boolean` | `true` |
| `staggered` | Stagger repeated rows | `boolean` | `true` |
| `fullscreen` | Cover the viewport | `boolean` | `false` |

### WatermarkFont Events

| Event | Description | Arguments |
| ------- | -------------------------- | ------------------------------------------------- |
| `error` | Image loading or Canvas rendering failed | `{ source: 'image' \| 'canvas'; error: unknown }` |

### WatermarkFont Methods

| Method | Description | Returns |
| -------- | ---------------------- | --------------- |
| `redraw` | Regenerate the watermark from current props | `Promise<void>` |

### WatermarkFont Slots

| Slot | Description |
| --------- | -------------------- |
| `default` | Page content covered by the watermark |

## Types

### WatermarkFont

| Prop | Type | Default |
| ------------ | ----------------------------------- | ---------------------------------- |
| `color` | `string` | `var(--c-watermark-content-color)` |
| `fontSize` | `number` | `16` |
| `fontFamily` | `string` | `sans-serif` |
| `fontStyle` | `'normal' \| 'italic' \| 'oblique'` | `normal` |
| `fontWeight` | `string \| number` | `normal` |
| `textAlign` | `CanvasTextAlign`<br>`'center' \| 'end' \| 'left' \| 'right' \| 'start'` | `center` |
| `lineHeight` | `number` | `Math.round(fontSize × 1.4)` |

## CSS Variables

The watermark reads its color from the computed CSS variable and redraws when a `class` or `style` change on the component or its current ancestors changes that color. Call `redraw()` after changes that cannot be observed, such as CSSOM or media query changes, or after moving it to a new ancestor. `anti-tamper` restores removal and class/style changes to the managed layer; it is not a security boundary.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-watermark-content-color` | `rgba(0, 0, 0, 0.15)` | Component styling |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-watermark-content-color: rgba(0, 0, 0, 0.15);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
