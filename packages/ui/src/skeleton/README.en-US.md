---
lang: en-US
permalink: /en/components/skeleton/
---

# Skeleton

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `:loading="loading"`.

<demo src="./__demos__/basic.vue"></demo>

## Content and presentation

### Skeleton content shapes

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `title` | Whether to show a title placeholder | Skeleton content shapes, Animation |
| `loading` | Whether to display the loading skeleton | Skeleton content shapes, Fullscreen |
| `avatar` | Whether to show an avatar placeholder | Skeleton content shapes, Animation |
| `rows` | The paragraph number of rows | Skeleton content shapes |
| `rows-width` | Width of each row | Skeleton content shapes |
| `card` | Whether to show a card placeholder | Skeleton content shapes |
<!-- demo-config-notes:end -->


Compare text-row placeholders with avatar and card shapes according to the final content layout.

<demo src="./__demos__/content-comparison.en-US.vue"></demo>

### Animation

Preview configuration: `title`, `avatar`, `:animation="animation"`.

<demo src="./__demos__/animation.vue"></demo>

### Fullscreen

Preview configuration: `fullscreen`, `:loading="loading"`.

<demo src="./__demos__/fullscreen.vue"></demo>

## Customization and slots

### Custom Template

Preview configuration: `:rows="3"`, `:widths="['100%', '100%', '60%']"`, `shape="circle"`.

<demo src="./__demos__/custom-template.vue"></demo>

## API

### Skeleton Props

| Parameter | Description | Type | Default |
| ------------------ | ---------------------------- | ------------------------- | :-----: |
| loading | Whether to display the loading skeleton | `boolean` | `true` |
| animation | Whether skeleton animation is enabled | `boolean` | `true` |
| title | Whether to show a title placeholder | `boolean` | `false` |
| avatar | Whether to show an avatar placeholder | `boolean` | `false` |
| card | Whether to show a card placeholder | `boolean` | `false` |
| rows | The paragraph number of rows | `number \| string` | `3` |
| rows-width | Width of each row | `Array<number \| string>` | `[]` |
| title-width | Title placeholder width; falls back to the theme variable, `50%` by default | `number \| string` | `-` |
| avatar-size | Avatar placeholder size; falls back to the theme variable, `34px` by default | `number \| string` | `-` |
| card-height | Card placeholder height; falls back to the theme variable, `160px` by default | `number \| string` | `-` |
| fullscreen | Whether to use a fullscreen placeholder | `boolean` | `false` |
| fullscreen-z-index | Fullscreen placeholder stacking level | `number \| string` | `100` |

### Skeleton Slots

| Slot | Description |
| -------- | -------------------- |
| default | Actual content after loading |
| template | Custom loading placeholder |

### SkeletonLine Props

| Parameter | Description | Type | Default |
| ------------ | ---------------- | ------------------------- | :----: |
| rows | Row count; non-finite and negative values become zero, fractions are rounded down | `number` | `1` |
| widths | Line skeleton width | `Array<number \| string>` | `[]` |
| line-height | Line skeleton height | `number` | `20` |
| line-spacing | Line skeleton row spacing | `number` | `15` |

### SkeletonShape Props

| Parameter | Description | Type | Default |
| ------ | -------------- | ---------------------- | :--------: |
| shape | Graphic skeleton shape | `'square' \| 'circle'` | `'square'` |
| size | Graphic skeleton size | `'sm' \| 'md' \| 'lg'` | `'md'` |

## Types

The component exports the following types

```ts
import type {
  SkeletonInstance,
  SkeletonLineProps,
  SkeletonShapeProps,
} from "@cedar-design/ui-vue";
```

## Usage notes





### Fullscreen coverage

`fullscreen` renders an inline `position: fixed` placeholder without automatically teleporting to body. It covers the viewport when no ancestor establishes a fixed positioning containing block. An ancestor with `transform`, a relevant `will-change`, or `contain` may limit coverage to that ancestor. To cover the viewport, place Skeleton outside those ancestors or arrange its position with Vue Teleport in the application. This loading placeholder does not manage modal focus. See [CSS Positioned Layout fixed containing blocks](https://www.w3.org/TR/css-position-3/#fixed-cb).

Omitted size props use their theme tokens. A `-` in the table means there is no Prop default, rather than no placeholder size. Both Line and the main component normalize non-finite and negative row counts to zero and round fractions down.

### Motion

Built-in Skeleton placeholders and standalone Line/Shape primitives default to `aria-hidden="true"`. The root exposes waiting through `aria-busy`. Custom `template` content and the loaded default content remain accessible and can supply business status messages.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-skeleton-animation-background` | `linear-gradient(90deg, transparent, var(--c-sys-color-surface-default), transparent)` | `background` |
| `--c-skeleton-animation-duration` | `1s` | `animation` |
| `--c-skeleton-avatar-background-color` | `var(--c-sys-color-state-hover)` | `background-color` |
| `--c-skeleton-avatar-border-radius` | `50%` | `border-radius` |
| `--c-skeleton-avatar-margin-right` | `var(--c-sys-space-6)` | `margin-inline-end` |
| `--c-skeleton-avatar-size` | `34px` | `height`, `width` |
| `--c-skeleton-card-background-color` | `var(--c-sys-color-state-hover)` | `background-color` |
| `--c-skeleton-card-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-skeleton-card-height` | `160px` | `height` |
| `--c-skeleton-card-margin-bottom` | `var(--c-sys-space-6)` | `margin-bottom` |
| `--c-skeleton-content-padding` | `var(--c-sys-space-6)` | `padding` |
| `--c-skeleton-row-border-radius` | `10px` | `border-radius` |
| `--c-skeleton-row-height` | `12px` | `height` |
| `--c-skeleton-row-margin-top` | `10px` | `margin-top` |
| `--c-skeleton-shape-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-skeleton-shape-size-lg` | `60px` | `height`, `width` |
| `--c-skeleton-shape-size-md` | `48px` | `height`, `width` |
| `--c-skeleton-shape-size-sm` | `36px` | `height`, `width` |
| `--c-skeleton-title-background-color` | `var(--c-sys-color-state-hover)` | `background-color` |
| `--c-skeleton-title-border-radius` | `10px` | `border-radius` |
| `--c-skeleton-title-width` | `50%` | `width` |
| `--c-skeleton-transition-duration` | `var(--c-sys-motion-duration-slow)` | `transition` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-skeleton-animation-background: linear-gradient(90deg, transparent, var(--c-sys-color-surface-default), transparent);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->

### Motion

Built-in motion respects `prefers-reduced-motion: reduce`, keeping content and state feedback while disabling decorative animations. Adapt custom animations to that preference in your application.
