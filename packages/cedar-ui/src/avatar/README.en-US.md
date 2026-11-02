---
lang: en-US
permalink: /en/components/avatar/
---

# Avatar

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `color`: Overrides the color.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Size and shape comparison

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `shape` | Avatar shape | Size and shape comparison, Style, Hoverable |
| `image-url` | Image URL | Size and shape comparison, Hoverable |
| `alt` | Image alternative text | Size and shape comparison, Hoverable |
| `bordered` | Whether to show a border | Style, Hoverable |
| `size` | Avatar width and height; numbers are px, strings are CSS lengths | Size and shape comparison |
| `color` | Background color | Style |
<!-- demo-config-notes:end -->


Compare space used at each size, then round and square boundaries. Image fitting and fallback remain separate.

<demo src="./__demos__/shape-size-comparison.vue"></demo>

### Style

- `color`: Overrides the color.

<demo src="./__demos__/style.vue"></demo>

### Hoverable

Preview configuration: `hoverable`, `image-url="/cat.jpg"`, `alt="悬停放大"`, `shape="square"`.

<demo src="./__demos__/hoverable.vue"></demo>

## Layout and arrangement

### Group direction and overflow

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `image-url` | Image URL | Group direction and overflow |
| `alt` | Image alternative text | Group direction and overflow |
| `bordered` | Whether to show a border | Group direction and overflow |
| `color` | Background color | Group direction and overflow |
<!-- demo-config-notes:end -->


Compare horizontal and vertical groups, maximum counts, stacking and overflow indicators.

<demo src="./__demos__/group-comparison.vue"></demo>

## Content and presentation

### Auto Fix

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `image-url` | Image URL | Image, Fit, Fallback |
| `alt` | Image alternative text | Image, Fit, Fallback |
| `size` | Avatar width and height; numbers are px, strings are CSS lengths | Image, Fit, Fallback |
| `shape` | Avatar shape | Auto Fix, Image |
| `auto-fix-font-size` | Whether to shrink long text automatically | Auto Fix |
| `object-fit` | Image fitting mode | Fit |
<!-- demo-config-notes:end -->


Preview configuration: `shape="square"`, `:auto-fix-font-size="false"`, `placeholder="输入更长的文字看缩放"`, `clearable`.

<demo src="./__demos__/auto-fix.vue"></demo>

### Image

- `size`: Controls the component size.

<demo src="./__demos__/image.vue"></demo>

### Fit

- `size`: Controls the component size.

<demo src="./__demos__/fit.vue"></demo>

### Fallback

- `size`: Controls the component size.

<demo src="./__demos__/fallback.vue"></demo>

## Interaction and control

### Trigger

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `image-url` | Image URL | Trigger |
| `alt` | Image alternative text | Trigger |
| `size` | Avatar width and height; numbers are px, strings are CSS lengths | Trigger |
| `trigger-type` | How the action icon is shown | Trigger |
<!-- demo-config-notes:end -->


- `size`: Controls the component size.

<demo src="./__demos__/trigger.vue"></demo>

## API

<!-- same-source-api:start -->
### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| shape | Avatar shape | `circle / square` | `circle` |
| image-url | Image URL | `string` | `-` |
| alt | Image alternative text | `string` | `''` |
| size | Avatar width and height; numbers are px, strings are CSS lengths | `number / string` | `-` |
| auto-fix-font-size | Whether to shrink long text automatically | `boolean` | `true` |
| trigger-type | How the action icon is shown | `button / overlay` | `button` |
| trigger-icon-style | Custom style for the action icon | `CSSProperties` | `-` |
| object-fit | Image fitting mode | `fill / contain / cover / none / scale-down` | `cover` |
| color | Background color | `string` | `-` |
| bordered | Whether to show a border | `boolean` | `false` |
| border-color | Border color | `string` | `-` |
| loading | Placeholder image while loading | `string` | `-` |
| error | Fallback image URL when image loading fails | `string` | `-` |
| lazy | Whether to lazy-load the image | `boolean` | `false` |
| hoverable | Whether to scale on hover | `boolean` | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when the avatar is clicked | `(event: MouseEvent) => void` |
| load | Emitted when the image loads | `() => void` |
| error | Emitted when image loading fails | `() => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | Text, icon, or loading content for an image |
| error | Fallback content when image loading fails |
| trigger-icon | Action icon on the avatar |

### Methods

No custom public methods.
<!-- same-source-api:end -->

### AvatarGroup Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| shape | Child avatar shape | `circle / square` | `circle` |
| size | Child avatar width and height; numbers are px, strings are CSS lengths | `number / string` | `-` |
| auto-fix-font-size | Whether to shrink child avatar text automatically | `boolean` | `true` |
| max-count | Maximum visible avatars; `0` means unlimited | `number` | `0` |
| z-index-ascend | Use ascending stacking order | `boolean` | `false` |
| max-style | Custom summary avatar style | `CSSProperties` | `-` |
| max-popover-props | Summary Popover props | `PopoverProps` | `-` |
| offset | Overlap offset | `number / string` | `-` |
| vertical | Stack avatars vertically | `boolean` | `false` |

### AvatarGroup Slots

| Slot | Description |
| --- | --- |
| default | Avatar list |

### Type definitions

```ts
import type {
  AvatarGroupInstance,
  AvatarGroupProps,
  AvatarInstance,
  AvatarProps,
  AvatarObjectFit,
  AvatarShape,
  AvatarTriggerType,
} from "@cedar-design/ui";
```

### Style variables

| Variable | Default |
| --- | --- |
| `--c-avatar-size-default` | `40px` |
| `--c-avatar-font-size-text` | `20px` |
| `--c-avatar-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-avatar-text-padding-inline` | `4px` |
| `--c-avatar-bg` | `var(--c-color-fill-4)` |
| `--c-avatar-border-width` | `2px` |
| `--c-avatar-border-color` | `var(--c-sys-color-surface-default)` |
| `--c-avatar-group-item-border` | `var(--c-sys-color-surface-default)` |
| `--c-avatar-group-item-border-width` | `2px` |
| `--c-avatar-group-offset` | `-10px` |
| `--c-avatar-group-popover-item-spacing` | `8px` |
| `--c-avatar-font-weight-text` | `500` |
| `--c-avatar-circle-border-radius` | `50%` |
| `--c-avatar-square-border-radius` | `4px` |
| `--c-avatar-size-trigger-button` | `20px` |
| `--c-avatar-trigger-button-bg` | `var(--c-color-fill-2)` |
| `--c-avatar-trigger-button-bg-hover` | `var(--c-color-fill-3)` |
| `--c-avatar-trigger-overlay-icon` | `var(--c-sys-color-content-on-dark)` |
| `--c-avatar-trigger-overlay-bg` | `color-mix(in srgb, var(--c-color-black) 60%, transparent)` |
| `--c-avatar-trigger-icon-button` | `var(--c-sys-color-content-primary)` |
| `--c-avatar-spacing-trigger-button-right` | `4px` |
| `--c-avatar-spacing-trigger-button-bottom` | `4px` |
| `--c-avatar-size-trigger-icon` | `12px` |
| `--c-avatar-trigger-button-border-radius` | `50%` |
| `--c-avatar-font-size-max-count` | `20px` |
| `--c-avatar-max-count-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-avatar-trigger-overlay-font-size` | `16px` |
| `--c-avatar-hover-transform` | `scale(1.1)` |
| `--c-avatar-motion-duration` | `0.2s` |
| `--c-avatar-z-index-trigger` | `1` |
| `--c-avatar-z-index-overlay` | `0` |
| `--c-avatar-z-index-overlay-hover` | `2` |

Text, summary counts and button trigger icons use the primary content `color` by default. Borders follow the container surface; only icons on dark interaction overlays use `content-on-dark`. The avatar `fill-4` background, button background/hover levels and translucent black overlay remain component visual values. When overriding the avatar background with `color`, also check text contrast and override `text-color` if needed.

### Reduced motion

Built-in CSS transitions follow `prefers-reduced-motion: reduce`. Removing transitions does not change final visibility, selected/expanded state or event semantics. Applications control custom animations inside slots.
