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

<demo src="./__demos__/content-comparison.vue"></demo>

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

### `<skeleton>` Props

| Parameter | Description | Type | Default |
| ------------------ | ---------------------------- | ------------------------- | :-----: |
| loading | Whether to display the loading skeleton | `boolean` | `true` |
| animation | Whether skeleton animation is enabled | `boolean` | `true` |
| title | Whether to show a title placeholder | `boolean` | `false` |
| avatar | Whether to show an avatar placeholder | `boolean` | `false` |
| card | Whether to show a card placeholder | `boolean` | `false` |
| rows | The paragraph number of rows | `number \| string` | `3` |
| rows-width | Width of each row | `Array<number \| string>` | `[]` |
| title-width | `50%` | `number \| string` | `-` |
| avatar-size | `34px` | `number \| string` | `-` |
| card-height | `160px` | `number \| string` | `-` |
| fullscreen | Whether to use a fullscreen placeholder | `boolean` | `false` |
| fullscreen-z-index | Fullscreen placeholder stacking level | `number \| string` | `100` |

### `<skeleton>` Slots

| Slot | Description |
| -------- | -------------------- |
| default | Actual content after loading |
| template | Custom loading placeholder |

### `<skeleton-line>` Props

| Parameter | Description | Type | Default |
| ------------ | ---------------- | ------------------------- | :----: |
| rows | Displayed row count | `number` | `1` |
| widths | Line skeleton width | `Array<number \| string>` | `[]` |
| line-height | Line skeleton height | `number` | `20` |
| line-spacing | Line skeleton row spacing | `number` | `15` |

### `<skeleton-shape>` Props

| Parameter | Description | Type | Default |
| ------ | -------------- | ---------------------- | :--------: |
| shape | Graphic skeleton shape | `'square' \| 'circle'` | `'square'` |
| size | Graphic skeleton size | `'sm' \| 'md' \| 'lg'` | `'md'` |

### Type definitions

The component exports the following types

```ts
import type {
  SkeletonInstance,
  SkeletonLineProps,
  SkeletonShapeProps,
} from "@cedar-design/ui";
```

## Shared implementation and platform boundaries

Each platform maintains a complete local implementation. They do not import a common core or share component instances or reactive state. Changes must update both implementations. Component bodies, props, key styles and paired tests have read-only source consistency checks; theme tokens and installation entries remain local to each library.

Skeleton, SkeletonLine and SkeletonShape use independently copied source. Each library maintains its skeleton theme and size tokens.

### Managed defaults

| Token | Default |
| --- | --- |
| `--c-skeleton-content-padding` | `var(--c-sys-space-6)` |
| `--c-skeleton-card-border-radius` | `var(--c-sys-radius-md)` |
| `--c-skeleton-card-margin-bottom` | `var(--c-sys-space-6)` |
| `--c-skeleton-card-background-color` | `var(--c-sys-color-state-hover)` |
| `--c-skeleton-animation-background` | `linear-gradient(90deg, transparent, var(--c-sys-color-surface-default), transparent)` |
| `--c-skeleton-avatar-border-radius` | `50%` |
| `--c-skeleton-avatar-margin-right` | `var(--c-sys-space-6)` |
| `--c-skeleton-avatar-background-color` | `var(--c-sys-color-state-hover)` |
| `--c-skeleton-title-border-radius` | `10px` |
| `--c-skeleton-title-background-color` | `var(--c-sys-color-state-hover)` |
| `--c-skeleton-row-height` | `12px` |
| `--c-skeleton-row-border-radius` | `10px` |
| `--c-skeleton-row-margin-top` | `10px` |
| `--c-skeleton-shape-size-sm` | `36px` |
| `--c-skeleton-shape-size-md` | `48px` |
| `--c-skeleton-shape-size-lg` | `60px` |
| `--c-skeleton-shape-border-radius` | `var(--c-sys-radius-md)` |

### Motion variables

| Token | Default |
| --- | --- |
| `--c-skeleton-animation-duration` | `1s` |
| `--c-skeleton-transition-duration` | `var(--c-sys-motion-duration-slow)` |

Built-in motion follows prefers-reduced-motion: reduce, preserving content/state feedback while disabling decorative spinning, shimmer and ripples. Icon name changes skip waiting and cancel unfinished transitions. Ripple duration variables affect only CSS; the 250ms lifecycle timer remains unchanged, so each visual stage should not exceed 250ms. Callers must adapt custom animation classes.
