---
permalink: /en/components/ellipsis/
lang: en-US
---

# Ellipsis

Single-line or multi-line truncation with optional expansion and Tooltip.

## Examples

### Single line

<demo src="./__demos__/basic.vue"></demo>

### Multiple lines

<demo src="./__demos__/multiline.vue"></demo>

### Interactive expansion

<demo src="./__demos__/expand.vue"></demo>

### Controlled expansion

<demo src="./__demos__/controlled.vue"></demo>

### Custom tooltip

<demo src="./__demos__/custom-tooltip.vue"></demo>

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `expand` | Controlled expansion | `boolean` | `undefined` |
| `default-expand` | Initial uncontrolled expansion | `boolean` | `false` |
| `expand-trigger` | Enable click / Enter / Space toggling | `'click'` | `—` |
| `line-clamp` | Positive line count; omitted or invalid means single line | `number \| string` | `—` |
| `tooltip` | Tooltip configuration; false disables it | `boolean \| TooltipProps` | `true` |

`expand` never changes locally: the parent must accept `update:expand`. Omit it for internal state initialized by `default-expand`. Tooltip uses its own default width and triggers; it is not conditional on measured overflow. For touch activation, configure `tooltip.trigger` with `click`. CSS width/class/style apply to the text node.

### Events and slots

- `update:expand(expand: boolean)`: requested state after a user action; external updates do not emit.
- `default`: text content.
- `tooltip-content`: custom tooltip; otherwise use `tooltip.content` when supplied, then the text content. Content is never duplicated.
- Keyboard: interactive text supports Enter / Space; tooltip-enabled text supports Tab focus. No public methods.

### Types

```ts
import type { EllipsisProps, EllipsisInstance, EllipsisExpandTrigger } from '@cedarjs/ui'
```

### CSS tokens

| Token | Default |
| --- | --- |
| `--c-ellipsis-focus-color` | `var(--c-sys-color-content-brand)` |
| `--c-ellipsis-focus-width` | `2px` |
| `--c-ellipsis-focus-offset` | `2px` |
