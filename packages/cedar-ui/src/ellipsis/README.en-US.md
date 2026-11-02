---
permalink: /en/components/ellipsis/
lang: en-US
---

# Ellipsis

Single-line or multi-line truncation with optional expansion and Tooltip.

## Basic examples

### Single line

<demo src="./__demos__/basic.vue"></demo>

## Content and presentation

### Multiple lines

<demo src="./__demos__/multiline.vue"></demo>

## Customization and slots

### Custom tooltip

<demo src="./__demos__/custom-tooltip.vue"></demo>

## Interaction and control

### Interactive expansion

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `line-clamp` | Positive line count; omitted or invalid means single line | Interactive expansion, Controlled expansion |
| `expand-trigger` | Enable click / Enter / Space toggling | Interactive expansion, Controlled expansion |
| `tooltip` | Tooltip configuration; false disables it | Interactive expansion, Controlled expansion |
| `expand` | Controlled expansion | Controlled expansion |
<!-- demo-config-notes:end -->


<demo src="./__demos__/expand.vue"></demo>

### Controlled expansion

<demo src="./__demos__/controlled.vue"></demo>

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `expand` | Controlled expansion | `boolean` | `undefined` |
| `default-expand` | Initial uncontrolled expansion | `boolean` | `false` |
| `expand-trigger` | Enable click / Enter / Space toggling | `'click'` | `—` |
| `line-clamp` | Positive line count; omitted or invalid means single line | `number \| string` | `—` |
| `tooltip` | Tooltip configuration; false disables it | `boolean \| TooltipProps` | `true` |

Providing `expand` makes the component request updates from its parent rather than changing controlled state. When omitted, internal state is used, initialized once by `default-expand`. Tooltip follows its own width and trigger defaults; display does not depend on measured overflow. Touch callers can include `click` in `tooltip.trigger` explicitly. External class/style/width apply directly to the text node.

### Events and slots

- `update:expand(expand: boolean)`: the new state requested by user interaction; external updates do not emit it.
- `default`: body text.
- `tooltip-content`: tooltip content. Without it, tooltip.content takes precedence, then body text; content is not concatenated twice.
- Keyboard: expandable text supports Enter / Space; tooltip-enabled text is focusable with Tab. No public instance methods.

### Types

```ts
import type { EllipsisProps, EllipsisInstance, EllipsisExpandTrigger } from '@cedar-design/ui'
```

### Style variables

| Token | Default |
| --- | --- |
| `--c-ellipsis-focus-color` | `var(--c-sys-color-content-brand)` |
| `--c-ellipsis-focus-width` | `2px` |
| `--c-ellipsis-focus-offset` | `2px` |
