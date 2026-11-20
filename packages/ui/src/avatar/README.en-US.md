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

<demo src="./__demos__/shape-size-comparison.en-US.vue"></demo>

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

<demo src="./__demos__/group-comparison.en-US.vue"></demo>

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
The default image `error` icon retains a nonempty `alt` as its accessible name; an empty `alt` denotes decoration. Provide appropriate semantics for a custom `error` slot. The default slot may switch dynamically between images and text; application code owns slotted image load events and styles.

When `trigger-icon` contains no interactive control, the avatar exposes button semantics and supports Enter and Space. Describe the action with `trigger-aria-label` or the root `aria-label`. If the slot supplies its own interactive control, that control handles keyboard input. The default click-triggered group summary can be opened by keyboard; Escape closes it and restores focus.

### Avatar Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| shape | Avatar shape | `circle / square` | `circle` |
| image-url | Image URL | `string` | `-` |
| alt | Image alternative text | `string` | `''` |
| size | Avatar width and height; numbers are px, strings are CSS lengths | `number / string` | `-` |
| auto-fix-font-size | Whether to shrink long text automatically | `boolean` | `true` |
| trigger-type | How the action icon is shown | `button / overlay` | `button` |
| trigger-aria-label | Accessible name of the interaction | `string` | `—` |
| trigger-icon-style | Custom style for the action icon | `CSSProperties` | `-` |
| object-fit | Image fitting mode | `fill / contain / cover / none / scale-down` | `cover` |
| color | Background color | `string` | `-` |
| bordered | Whether to show a border | `boolean` | `false` |
| border-color | Border color | `string` | `-` |
| loading | Placeholder image while loading | `string` | `-` |
| error | Fallback image URL when image loading fails | `string` | `-` |
| lazy | Whether to lazy-load the image | `boolean` | `false` |
| hoverable | Whether to scale on hover | `boolean` | `false` |

### Avatar Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when the avatar is clicked | `(event: MouseEvent) => void` |
| load | Emitted when the image loads | `() => void` |
| error | Emitted when image loading fails | `() => void` |

### Avatar Slots

| Slot | Description |
| --- | --- |
| default | Text, icon, or loading content for an image |
| error | Fallback content when image loading fails |
| trigger-icon | Action icon on the avatar |

### Avatar Methods

No custom public methods.
<!-- same-source-api:end -->

Group `shape` and `auto-fix-font-size` override item values, and a supplied group `size` takes priority. `max-count` is a nonnegative integer; zero or an invalid value means unlimited. Numeric `size` must be finite and nonnegative; invalid numbers use the default, while strings are CSS lengths. `offset` accepts finite negative numbers or CSS length strings; invalid numbers use the default spacing. The summary participates in group stacking order, which overrides z-index in `max-style`.

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

## Types

```ts
import type {
  AvatarGroupInstance,
  AvatarGroupProps,
  AvatarInstance,
  AvatarProps,
  AvatarObjectFit,
  AvatarShape,
  AvatarTriggerType,
} from "@cedar-design/ui-vue";
```

## CSS Variables

Text, summary counts and button trigger icons use the primary content `color` by default. Borders follow the container surface; only icons on dark interaction overlays use `content-on-dark`. The avatar `fill-4` background, button background/hover levels and translucent black overlay remain component visual values. When overriding the avatar background with `color`, also check text contrast and override `text-color` if needed.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-avatar-bg` | `var(--c-color-fill-4)` | `background-color` |
| `--c-avatar-border-color` | `var(--c-sys-color-surface-default)` | `border` |
| `--c-avatar-border-width` | `2px` | `border` |
| `--c-avatar-circle-border-radius` | `50%` | `border-radius` |
| `--c-avatar-font-size-max-count` | `20px` | `font-size` |
| `--c-avatar-font-size-text` | `20px` | `font-size` |
| `--c-avatar-font-weight-text` | `500` | `font-weight` |
| `--c-avatar-group-item-border` | `var(--c-sys-color-surface-default)` | `border` |
| `--c-avatar-group-item-border-width` | `2px` | `border` |
| `--c-avatar-group-offset` | `-10px` | `margin-block-start`, `margin-inline-start` |
| `--c-avatar-group-popover-item-spacing` | `8px` | `gap` |
| `--c-avatar-hover-transform` | `scale(1.1)` | `transform` |
| `--c-avatar-max-count-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-avatar-motion-duration` | `0.2s` | `transition` |
| `--c-avatar-size-default` | `40px` | `height`, `width` |
| `--c-avatar-size-trigger-button` | `20px` | `height`, `width` |
| `--c-avatar-size-trigger-icon` | `12px` | `font-size` |
| `--c-avatar-spacing-trigger-button-bottom` | `4px` | `bottom` |
| `--c-avatar-spacing-trigger-button-right` | `4px` | `inset-inline-end` |
| `--c-avatar-square-border-radius` | `4px` | `border-radius` |
| `--c-avatar-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-avatar-text-padding-inline` | `4px` | `padding-inline` |
| `--c-avatar-trigger-button-bg` | `var(--c-color-fill-2)` | `background-color` |
| `--c-avatar-trigger-button-bg-hover` | `var(--c-color-fill-3)` | `background-color` |
| `--c-avatar-trigger-button-border-radius` | `50%` | `border-radius` |
| `--c-avatar-trigger-icon-button` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-avatar-trigger-overlay-bg` | `color-mix(in srgb, var(--c-color-black) 60%, transparent)` | `background-color` |
| `--c-avatar-trigger-overlay-font-size` | `16px` | `font-size` |
| `--c-avatar-trigger-overlay-icon` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-avatar-z-index-overlay` | `0` | `z-index` |
| `--c-avatar-z-index-overlay-hover` | `2` | `z-index` |
| `--c-avatar-z-index-trigger` | `1` | `z-index` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-avatar-border-color: var(--c-sys-color-surface-default);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->

### Reduced motion

Built-in CSS transitions follow `prefers-reduced-motion: reduce`. Removing transitions does not change final visibility, selected/expanded state or event semantics. Applications control custom animations inside slots.
