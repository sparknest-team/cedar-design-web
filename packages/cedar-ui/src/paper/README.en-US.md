---
permalink: /en/components/paper/
lang: en-US
---

# Paper

Paper is a low-level surface with background, radius, optional border and elevation. It has no variant, status, structural slots or default padding. Use Card for structured content. Paper does not manage popup positioning, focus or button semantics.

## Basic examples

### Examples

<demo src="./__demos__/basic.vue"></demo>

## Interaction and control

### Live properties

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `bordered` | Show a border independently of elevation | Live properties |
| `round` | 50% radius; a circle only with equal width and height | Live properties |
| `radius` | Explicit radius, taking priority over round | Live properties |
| `elevation` | false disables; true uses level 2; numeric levels 0–24 | Live properties |
| `width` | Width | Live properties |
| `height` | Surface height | Live properties |
<!-- demo-config-notes:end -->


Border and shadow are independent. An explicit radius overrides round; removing it restores round. The inner native button provides keyboard semantics, and its click bubbles to Paper to update parent-owned feedback.

<demo src="./__demos__/live-properties.vue"></demo>

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| bordered | Show a border independently of elevation | boolean | false |
| elevation | false disables; true uses level 2; numeric levels 0–24 | boolean / number | false |
| ripple | Opt-in ripple; does not add button semantics | boolean | false |
| radius | Explicit radius, taking priority over round | number / string | — |
| width | Width | number / string | — |
| height | Surface height | number / string | — |
| round | 50% radius; a circle only with equal width and height | boolean | false |
| inline | Use inline-flex | boolean | false |

Numbers and numeric strings for radius/width/height use px. Other strings pass through as CSS lengths, such as 1rem, 50% and calc(100% - 8px). Classes, native attributes and styles fall through to the root.

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Triggered when the paper is clicked | MouseEvent |

### Slots

| Slot | Description |
| --- | --- |
| default | Paper content |

### Style variables

| Variable | Default |
| --- | --- |
| --c-paper-background | `var(--c-sys-color-surface-default)` |
| --c-paper-border-radius | `4px` |
| --c-paper-border-width | `1px` |
| --c-paper-border-color | `var(--c-sys-color-border-default)` |
| --c-paper-transition-duration | `var(--c-sys-motion-duration-slow)` |

Built-in themes can override backgrounds/radii. bordered=false reserves no border space; enabled borders use border-box and count within fixed dimensions. Background, border and shadow are independent.

### Types

```ts
import type { PaperProps, PaperInstance } from '@cedar-design/ui'
```

## Independent source copies

Each platform maintains its own component body, props, styles, tokens and contract tests, adapting prefixes/local imports without a cross-library core or shared instances/state.

Maple migration: the default background becomes the theme surface, and the default pointer cursor is removed. The inline class becomes mp-paper--inline. Existing dimensions, radii, elevation and ripple APIs remain.
