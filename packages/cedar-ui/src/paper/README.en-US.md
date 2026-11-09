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

### Paper Props

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

elevation=false adds no elevation class, true uses level 2, and numeric values are rounded to the nearest integer then clamped to 0–24. NaN/Infinity produce Vue prop validation warnings in development and fall back to 2 at runtime. Numeric radius/width/height values must be finite and nonnegative; invalid numbers remove that inline dimension instead of retaining its previous value, while zero remains valid. Decimal and scientific-notation numeric strings use px. Other CSS strings are parsed by the browser; expressions unsupported by the browser are not promised.

### Paper Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Triggered when the paper is clicked | MouseEvent |

click only notifies with the original MouseEvent, including bubbling clicks from children. @click.once follows standard Vue event semantics without awaiting listener Promises. PaperProps includes this listener and is consistent between root and subentry. PaperInstance has no additional business execution methods.

### Paper Slots

| Slot | Description |
| --- | --- |
| default | Paper content |

## Types

```ts
import Paper, { Paper as NamedPaper } from '@cedar-design/ui/paper'
import type { PaperProps, PaperInstance } from '@cedar-design/ui'
import type { PaperProps as SubPaperProps } from '@cedar-design/ui/paper'
const surface: PaperProps = { onClick: (event: MouseEvent) => event.preventDefault() }
```

## Usage notes



The default background uses the theme surface color without a pointer cursor. Customize appearance through size, radius, elevation and ripple props.

## CSS Variables

Built-in themes can override backgrounds/radii. bordered=false reserves no border space; enabled borders use border-box and count within fixed dimensions. Background, border and shadow are independent.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-paper-background` | `var(--c-sys-color-surface-default)` | `background` |
| `--c-paper-border-color` | `var(--c-sys-color-border-default)` | `border` |
| `--c-paper-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-paper-border-width` | `1px` | `border` |
| `--c-paper-transition-duration` | `var(--c-sys-motion-duration-slow)` | `transition` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-paper-background: var(--c-sys-color-surface-default);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
