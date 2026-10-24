---
permalink: /en/components/paper/
lang: en-US
---

# Paper

Paper is a low-level surface with background, radius, optional border and elevation. It has no variant, status, structural slots or default padding. Use Card for structured content. Paper does not manage popup positioning, focus or button semantics.

## Examples

<demo src="./__demos__/basic.vue"></demo>

### Live properties

Border and shadow are independent. An explicit radius overrides round; removing it restores round. The inner native button provides keyboard semantics, and its click bubbles to Paper to update parent-owned feedback.

<demo src="./__demos__/live-properties.vue"></demo>

## API

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| bordered | Show a border independently of elevation | boolean | false |
| elevation | false disables; true uses level 2; numeric levels 0–24 | boolean / number | false |
| ripple | Opt-in ripple; does not add button semantics | boolean | false |
| radius | Explicit radius, taking priority over round | number / string | — |
| width | Surface width | number / string | — |
| height | Surface height | number / string | — |
| round | 50% radius; a circle only with equal width and height | boolean | false |
| inline | Use inline-flex | boolean | false |

Numeric lengths and numeric strings use px; other CSS lengths are preserved. Width and height include the optional border. Native attributes, classes and custom styles pass through to the root.

The default slot contains surface content. The click event emits the original MouseEvent once. No public methods are provided.

## Style variables

| Variable | Default |
| --- | --- |
| --c-paper-background | var(--c-sys-color-surface-default) |
| --c-paper-border-radius | 4px |
| --c-paper-border-width | 1px |
| --c-paper-border-color | var(--c-sys-color-border-default) |
| --c-paper-transition-duration | var(--c-sys-motion-duration-slow) |

## Types and independent copies

```ts
import type { PaperProps, PaperInstance } from '@cedar-design/ui'
```

Both libraries maintain independent source copies, styles and tests; no shared runtime or component instances. Decorative motion respects prefers-reduced-motion. Ripple interaction coverage is tracked separately from this surface demo.
