---
lang: en-US
permalink: /en/components/scrollbar/
---

# Scrollbar

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Type

- `type`: Type

<demo src="./__demos__/type.vue"></demo>

## Lifecycle and edge cases

### Thumb Lifecycle

<demo src="./__demos__/thumb-lifecycle.vue"></demo>

### Lifecycle

<demo src="./__demos__/lifecycle.vue"></demo>

## API

### `<scrollbar>` Props

| Parameter | Description | Type | Default |
| ----------- | ---------- | ----------------------- | :-------: |
| type | Type | `'track' \| 'embed'` | `'embed'` |
| outer-class | Outer class | `string\|object\|array` | `-` |
| outer-style | Outer style | `StyleValue` | `-` |

### `<scrollbar>` Events

| Event | Description | Arguments |
| ------ | ---------- | ---- |
| scroll | Emitted on scrolling | - |

### `<scrollbar>` Methods

| Method | Description | Arguments | Returns | Version |
| ---------- | -------- | ---------------------------------------------------------------- | ------ | :----- |
| scrollTo | Scroll | options: `number \| {left?: number;top?: number}`<br>y: `number` | - |  |
| scrollTop | Vertical scroll | top: `number` | - | 2.40.0 |
| scrollLeft | Horizontal scroll | left: `number` | - | 2.40.0 |

### Type definitions

The component exports the following types

```ts
import type { ScrollbarBoxInstance } from '@cedar-design/ui'
```
