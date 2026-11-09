---
lang: en-US
permalink: /en/components/overflow-list/
---

# Overflow List

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `auto-label-width`, `:min="0"`, `:max="20"`, `:max="800"`.

<demo src="./__demos__/basic.vue"></demo>

## Layout and arrangement

### From

- `from`: Overflow From

<demo src="./__demos__/from.vue"></demo>

## API

### OverflowList Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| min | Finite nonnegative count, floored and clamped to the item total. All items remain when the minimum reaches the total, even if they overflow. Invalid values fall back to 0. | `number` | `0` |
| margin | Extra logical gap between items in px, preserving item margins. A finite nonnegative number; invalid values fall back to 8. | `number` | `8` |
| from | Collapse the start or end of the data sequence. RTL does not change data order. Invalid values fall back to end. | `'start' \| 'end'` | `'end'` |

### OverflowList Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Notifies when the hidden count changes, including initial measurement and remeasurement. Returned Promises are not awaited. | value: `number` |

### OverflowList Slots

| Slot | Description | Prop |
| --- | --- | --- |
| default | Items to measure; each needs a measurable element root and a stable unique key. | - |
| overflow | Overflow indicator; number is the hidden count. Defaults to a +number tag. | number: `number` |

### Measurement and lifecycle

Provide a container with a constrained available width. Container size, visible item size, min, margin and from changes trigger measurement; same-count item replacements invalidate cached sizes by identity.

Hidden items unmount and may temporarily remount during remeasurement. Keep persistent input and business state externally; this is not a virtual list. Internal changes to unmounted items cannot be observed; update the key when content identity changes.

SSR initially renders all items; the client folds them after measuring layout. Direct text is not an item. Components without a measurable single root keep all items visible and warn in development.

Prefer a stable indicator width. An indicator whose width depends on number may need multiple measurements and change notifications. The slot provides indicator content and does not create a popup menu.

Both directions use logical spacing without an extra outer gap. Item margins add to the gap. The component exposes no custom instance methods.

## Types

```ts
import type { OverflowListProps, OverflowListInstance } from '@cedar-design/ui'
```
## CSS Variables

<!-- component-css-variables:start -->

This component declares no independent public CSS variables. Use the configuration and layout APIs documented on this page. The appearance of composed controls follows the public variables of `tag`; a shared variable can affect other controls in the same DOM subtree.

Internal custom properties and measurement values are implementation details and are not customization APIs.

<!-- component-css-variables:end -->
