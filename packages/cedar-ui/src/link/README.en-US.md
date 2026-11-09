---
lang: en-US
permalink: /en/components/link/
---

# Link

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Link sizes and semantic colors

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `status` | Link status | Link sizes and semantic colors, Link Mode, Link Underline |
| `href` | Link URL | Link Mode, Hoverable |
| `size` | Text, icon and loading-icon size | Link sizes and semantic colors |
| `icon` | Icon | Link sizes and semantic colors |
| `loading` | Whether the link is loading | Link sizes and semantic colors |
| `target` | Native link target | Link Mode |
<!-- demo-config-notes:end -->


Compare sizes and semantic colors independently of navigation, disabled interception and loading.

<demo src="./__demos__/appearance-comparison.vue"></demo>

### Link Mode

- `status`: Selects the semantic state.

<demo src="./__demos__/link-mode.vue"></demo>

### Link Underline

- `status`: Selects the semantic state.

<demo src="./__demos__/link-underline.vue"></demo>

### Link Disabled

- `disabled`: Prevents user interaction.

<demo src="./__demos__/link-disabled.vue"></demo>

### Hoverable

Preview configuration: `hoverable`, `href="#link"`.

<demo src="./__demos__/hoverable.vue"></demo>

## Content and presentation

### Link Icon

Preview configuration: `icon`.

<demo src="./__demos__/link-icon.vue"></demo>

## Interaction and control

### Link Loading

Preview configuration: `loading`, `:loading="loading"`.

<demo src="./__demos__/link-loading.vue"></demo>

## API

### Native links and manual loading

Supply href for navigation. Disabled/loading links that originally had href retain the link role, remove navigation attributes and leave the Tab order. Native download, hreflang, referrerpolicy and ARIA attributes are forwarded. loading takes precedence over the icon slot. click is a MouseEvent notification using Vue once semantics; returned Promises do not manage loading. Use Button for business actions without a navigation target.

On first activation, business code prepares the report. Once ready, activation uses the browser's native download behavior. Unmounting cancels preparation.


### Link Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `size` | Five text, icon and spinner sizes | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' |
| `href` | Native link destination | string | - |
| `target` | Native target | string | - |
| `rel` | Native link relationship | string | - |
| `status` | Semantic status | `SemanticStatus`<br>`'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | 'default' |
| `underline` | Underline policy | 'always' \| 'hover' \| 'none' | 'none' |
| `hoverable` | Padded hover/active backgrounds | boolean | false |
| `icon` | Show the leading icon; icon slot takes priority | boolean | false |
| `loading` | Show spinner and block navigation/click | boolean | false |
| `disabled` | Disable the link | boolean | false |


### Link Events

| Event | Description | Arguments |
| ------ | -------------- | ----------------------------- |
| click | Click event | `(event: MouseEvent) => void` |

### Link Slots

| Slot | Description |
| --- | --- |
| default | Link content |
| icon | Custom icon; replaced by the loading icon while loading |

## Types

The component exports the following types

```ts
import type { LinkProps, LinkSize, LinkUnderline, LinkInstance } from '@cedar-design/ui'
```

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-link-bg-active` | `var(--c-color-fill-3)` | `background-color` |
| `--c-link-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-link-border-radius` | `var(--c-sys-radius-sm)` | `border-radius` |
| `--c-link-focus-color` | `currentColor` | `outline` |
| `--c-link-focus-offset` | `2px` | `outline-offset` |
| `--c-link-focus-opacity` | `0.8` | `opacity` |
| `--c-link-focus-width` | `2px` | `outline` |
| `--c-link-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-link-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-link-margin-icon-right` | `var(--c-spacing-3)` | `margin-inline-end` |
| `--c-link-padding-horizontal` | `var(--c-spacing-2)` | `padding` |
| `--c-link-padding-vertical` | `1px` | `padding` |
| `--c-link-size-icon` | `1em` | `font-size` |
| `--c-link-size-lg-font-size` | `var(--c-sys-font-size-lg)` | `font-size` |
| `--c-link-size-md-font-size` | `var(--c-link-font-size)` | `font-size` |
| `--c-link-size-sm-font-size` | `var(--c-sys-font-size-sm)` | `font-size` |
| `--c-link-size-xl-font-size` | `var(--c-sys-font-size-xl)` | `font-size` |
| `--c-link-size-xs-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-link-spin-duration` | `1s` | `animation` |
| `--c-link-text-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-link-text-color-active` | `var(--c-link-text-color)` | `color` |
| `--c-link-text-color-default` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-link-text-color-disabled` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-text-color-error` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-link-text-color-error-active` | `var(--c-link-text-color-error)` | `color` |
| `--c-link-text-color-error-disabled` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-text-color-error-hover` | `var(--c-link-text-color-error)` | `color` |
| `--c-link-text-color-error-loading` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-text-color-hover` | `var(--c-link-text-color)` | `color` |
| `--c-link-text-color-info` | `var(--c-sys-color-content-info)` | `color` |
| `--c-link-text-color-loading` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-text-color-primary` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-link-text-color-secondary` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-link-text-color-success` | `var(--c-sys-color-content-success)` | `color` |
| `--c-link-text-color-success-active` | `var(--c-link-text-color-success)` | `color` |
| `--c-link-text-color-success-disabled` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-text-color-success-hover` | `var(--c-link-text-color-success)` | `color` |
| `--c-link-text-color-success-loading` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-text-color-tertiary` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-link-text-color-warning` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-link-text-color-warning-active` | `var(--c-link-text-color-warning)` | `color` |
| `--c-link-text-color-warning-disabled` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-text-color-warning-hover` | `var(--c-link-text-color-warning)` | `color` |
| `--c-link-text-color-warning-loading` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-link-transition-duration` | `0.15s` | `transition` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-link-border-radius: var(--c-sys-radius-sm);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->

### Custom styling

Customize appearance through `--c-link-*` CSS variables. Keyboard focus supports `--c-link-focus-width` (2px), `--c-link-focus-offset` (2px), `--c-link-focus-color` (currentColor) and `--c-link-focus-opacity` (0.8). Reduced motion disables loading rotation and transitions.

Text colors match Button text variants: default uses content-primary; secondary/tertiary use content-secondary; colored statuses use their semantic content colors; disabled/loading use content-disabled. Both brands inherit these in light/dark modes.

Size variables: `--c-link-size-xs-font-size`, `--c-link-size-sm-font-size`, `--c-link-size-md-font-size`, `--c-link-size-lg-font-size`, `--c-link-size-xl-font-size`. Defaults are 12 / 13 / 14 / 16 / 18px. md references `--c-link-font-size`; icons/loading icons use 1em.
