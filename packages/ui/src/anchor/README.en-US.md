---
lang: en-US
permalink: /en/components/anchor/
---

# Anchor

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `show-background`: Whether to show the background

<demo src="./__demos__/basic.vue"></demo>

## Layout and arrangement

### Affix

Preview configuration: `:offsetTop="80"`, `href="#basic"`, `href="#show-line"`, `href="#affix"`.

<demo src="./__demos__/affix.vue"></demo>

## Content and presentation

### Show Line

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `show-line` | Whether to show the left axis | Show Line |
| `change-hash` | Whether to change the hash. When set to `false`, clicking on the anchor will not change the hash of the page | Hash |
<!-- demo-config-notes:end -->


- `show-line`: Whether to show the left axis

<demo src="./__demos__/show-line.vue"></demo>

### Hash

- `change-hash`: Whether to change the hash. When set to `false`, clicking on the anchor will not change the hash of the page

<demo src="./__demos__/hash.vue"></demo>

## Lifecycle and edge cases

### Boundary

- `boundary`: Scrolling boundary value. After setting the value to a number, it will stop scrolling when the distance is `boundary` from the scrolling container.

<demo src="./__demos__/boundary.vue"></demo>

### Scroll Lifecycle

<demo src="./__demos__/scroll-lifecycle.vue"></demo>

## Reading direction

The axis and highlight sit at inline start; link indentation uses logical positioning. Vertical scrolling and anchor targets are unchanged.

## API

### Anchor Props

| Parameter | Description | Type | Default |
| ---------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------- | :-------: |
| boundary | Scrolling `boundary` value. After setting the value to a number, it will stop scrolling when the distance is `boundary` from the scrolling container. | `'start' \| 'end' \| 'center' \| 'nearest' \| number` | `'start'` |
| show-line | Whether to show the left axis | `boolean` | `true` |
| show-background | Whether to show the background | `boolean` | `true` |
| scroll-container | Scroll container | `string \| HTMLElement \| Window` | `-` |
| change-hash | Whether to change the hash. When set to `false`, clicking on the anchor will not change the hash of the page | `boolean` | `true` |

When scroll-container is an element, clicking an anchor scrolls each container between the target and that boundary, without scrolling ancestors outside it or the window. Targets outside the specified container are not scrolled. With Window or no container, the scroll chain extends to the window. Numeric boundary offsets apply at the outermost scroll target.

The line and background can be shown independently. Their positions are recalculated when visibility or link dimensions change.

Anchor tracks same-page hash links. Non-hash URLs keep native navigation and do not participate in automatic positioning. The root is a div; provide role="navigation" and aria-label as needed. The active link uses aria-current="location". Numeric boundary values must be finite and may be negative; invalid values warn in development and fall back to start.

### Anchor Events

| Event | Description | Arguments |
| ------ | ------------------ | ------------------------------------------------ |
| select | Emitted on link click; preHash is the active anchor before the click | hash: `string \| undefined`<br>preHash: `string` |
| change | Emitted when the active link changes | hash: `string` |

### AnchorLink Props

| Parameter | Description | Type | Default |
| ------ | ------------------ | -------- | :----: |
| title | Anchor link text | `string` | `-` |
| href | Anchor link URL | `string` | `-` |

## Types

The component exports the following types

```ts
import type { AnchorProps, AnchorLinkProps, AnchorBoundaryPosition, AnchorInstance, AnchorLinkInstance } from '@cedar-design/ui-vue'
```

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-anchor-border-radius-title-hover` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-anchor-color-bg-line` | `var(--c-color-fill-3)` | `background-color` |
| `--c-anchor-color-bg-line-active` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-anchor-color-bg-title-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-anchor-color-title` | `var(--c-color-text-2)` | `color` |
| `--c-anchor-color-title-active` | `var(--c-sys-color-action-primary)` | `color` |
| `--c-anchor-color-title-hover` | `rgb(var(--c-primary-5))` | `color` |
| `--c-anchor-font-size-title` | `14px` | `font-size` |
| `--c-anchor-font-weight-title-active` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-anchor-font-weight-title-hover` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-anchor-line-slider-height` | `12px` | `height` |
| `--c-anchor-line-width` | `2px` | `inset-inline-start`, `width` |
| `--c-anchor-sub-item--inset` | `-6px` | `margin-inline-start` |
| `--c-anchor-title-margin-bottom` | `var(--c-spacing-1)` | `margin-bottom` |
| `--c-anchor-title-padding-x` | `16px` | `padding-inline-start` |
| `--c-anchor-title-padding-y` | `4px` | `padding` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-anchor-border-radius-title-hover: var(--c-border-radius-sm);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
