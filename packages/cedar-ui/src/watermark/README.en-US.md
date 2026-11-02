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

## API

### Props

| Arguments | Description | Type | Default |
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

### WatermarkFont

| Arguments | Type | Default |
| ------------ | ----------------------------------- | ---------------------------------- |
| `color` | `string` | `var(--c-watermark-content-color)` |
| `fontSize` | `number` | `16` |
| `fontFamily` | `string` | `sans-serif` |
| `fontStyle` | `'normal' \| 'italic' \| 'oblique'` | `normal` |
| `fontWeight` | `string \| number` | `normal` |
| `textAlign` | `CanvasTextAlign` | `center` |
| `lineHeight` | `number` | `fontSize × 1.4` |

### Events

| Event | Description | Arguments |
| ------- | -------------------------- | ------------------------------------------------- |
| `error` | Image loading or Canvas rendering failed | `{ source: 'image' \| 'canvas'; error: unknown }` |

### Methods

| Method | Description | Returns |
| -------- | ---------------------- | --------------- |
| `redraw` | Regenerate the watermark from current props | `Promise<void>` |

### Slots

| Slot | Description |
| --------- | -------------------- |
| `default` | Page content covered by the watermark |

### CSS variables

| Variable | Default |
| ----------------------------- | --------------------- |
| `--c-watermark-content-color` | `rgba(0, 0, 0, 0.15)` |
