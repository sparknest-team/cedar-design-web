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

### `<overflow-list>` Props

| Parameter | Description | Type | Default |
| ------ | ------------------ | ------------------ | :-----: |
| min | Minimum number of elements to display | `number` | `0` |
| margin | Item Margin | `number` | `8` |
| from | Overflow From | `'start' \| 'end'` | `'end'` |

### `<overflow-list>` Events

| Event | Description | Arguments |
| ------ | ------------------ | --------------- |
| change | Emitted when the overflow count changes | value: `number` |

### `<overflow-list>` Slots

| Slot | Description | Arguments |
| -------- | :------: | ---------------- |
| overflow | Collapsed elements | number: `number` |

### Type definitions

The component exports the following types

```ts
import type { BadgeInstance } from '@cedar-design/ui'
```
