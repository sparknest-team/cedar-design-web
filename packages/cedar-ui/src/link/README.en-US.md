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

### Native links and controlled loading

Provide href for navigation. Disabled/loading links retain their link role when an href was provided, remove navigation attributes and leave the Tab order. Native download, hreflang, referrerpolicy and ARIA attributes pass through. Loading replaces the icon slot. click is a MouseEvent notification with Vue once semantics; returned promises do not manage loading. Use Button for operations without a navigation target.

The loading example prepares a report on the first activation, then uses the browser's native download on the next activation. Preparation is canceled when unmounted.


### `<Link>` Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `size` | Five text, icon and spinner sizes | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' |
| `href` | Native link destination | string | - |
| `target` | Native target | string | - |
| `rel` | Native rel | string | - |
| `status` | Semantic status | SemanticStatus | 'default' |
| `underline` | Underline policy | 'always' \| 'hover' \| 'none' | 'none' |
| `hoverable` | Padded hover/active backgrounds | boolean | false |
| `icon` | Show the leading icon; icon slot takes priority | boolean | false |
| `loading` | Show spinner and block navigation/click | boolean | false |
| `disabled` | Disable the link | boolean | false |


### `<Link>` Events

| Event | Description | Arguments |
| ------ | -------------- | ----------------------------- |
| click | Click event | `(event: MouseEvent) => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | Link content |
| icon | Custom icon; replaced by the loading icon while loading |

### Type definitions

The component exports the following types

```ts
import type { LinkProps, LinkSize, LinkUnderline, LinkInstance } from '@cedar-design/ui'
```

### Style migration

Internal classes use `c-link--status-*`, `c-link--underline-*`, `c-link--disabled`, `c-link--loading` and `c-link__icon`. Migrate old single-hyphen selectors and prefer `--c-link-*` CSS variables. Focus supports `--c-link-focus-width` (2px), `--c-link-focus-offset` (2px), `--c-link-focus-color` (currentColor) and `--c-link-focus-opacity` (0.8). Reduced motion disables loading rotation and transitions.

Text colors match Button text variants: default uses content-primary; secondary/tertiary use content-secondary; colored statuses use their semantic content colors; disabled/loading use content-disabled. Both brands inherit these in light/dark modes.

Size variables: `--c-link-size-xs-font-size`, `--c-link-size-sm-font-size`, `--c-link-size-md-font-size`, `--c-link-size-lg-font-size`, `--c-link-size-xl-font-size`. Defaults are 12 / 13 / 14 / 16 / 18px. md references `--c-link-font-size`; icons/loading icons use 1em.
