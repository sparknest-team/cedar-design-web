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

The axis, highlight and indentation follow reading start. Vertical scrolling and anchor targets remain unchanged.

## API

### `<anchor>` Props

| Parameter | Description | Type | Default |
| ---------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------- | :-------: |
| boundary | Scrolling `boundary` value. After setting the value to a number, it will stop scrolling when the distance is `boundary` from the scrolling container. | `'start' \| 'end' \| 'center' \| 'nearest' \| number` | `'start'` |
| show-line | Whether to show the left axis | `boolean` | `true` |
| show-background | Whether to show the background | `boolean` | `true` |
| scroll-container | Scroll container | `string \| HTMLElement \| Window` | `-` |
| change-hash | Whether to change the hash. When set to `false`, clicking on the anchor will not change the hash of the page | `boolean` | `true` |

### `<anchor>` Events

| Event | Description | Arguments |
| ------ | ------------------ | ------------------------------------------------ |
| select | Emitted when the user clicks a link | hash: `string \| undefined`<br>preHash: `string` |
| change | Emitted when the active link changes | hash: `string` |

### `<anchor-link>` Props

| Parameter | Description | Type | Default |
| ------ | ------------------ | -------- | :----: |
| title | Anchor link text | `string` | `-` |
| href | Anchor link URL | `string` | `-` |

### Type definitions

The component exports the following types

```ts
import type { AnchorInstance } from '@cedar-design/ui'
```
