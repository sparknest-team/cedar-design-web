---
lang: en-US
permalink: /en/components/config-provider/
---

# Config Provider

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `size`: ComponentSize

<demo src="./__demos__/basic.vue"></demo>

## API

### ConfigProvider Props

| Prop | Description | Type | Default |
| ---- | -------- | ------ | ------ |
| dir | Reading direction; inherits the source scope when omitted. Physical left/right placements keep their meaning. | `ReadingDirection` (`ltr` / `rtl`) | — |
| type | Argument type | string | - |

### ConfigProvider Events

| Event | Description | Arguments |
| ------ | -------------- | ----------------------------- |
| click | Click event | `(event: MouseEvent) => void` |

### ConfigProvider Slots

| Slot | Description |
| ------- | -------------- |
| default | Custom default content |

## Type definitions

The component exports the following types

```ts
import type { ConfigProviderProps } from '@cedar-design/ui'
```


## Reading direction

Use `<c-config-provider dir="rtl">` to scope right-to-left layout. Omit `dir` to inherit, or nest `dir="ltr"` for a local override. Native DOM `dir` containers work too. The provider renders a `display: contents` div to carry direction to ordinary descendants without adding a layout box; place it in an HTML context that permits a div. It does not change the document direction. The former boolean `rtl` option is replaced by `dir` before release. Physical left/right placements retain their meaning.
