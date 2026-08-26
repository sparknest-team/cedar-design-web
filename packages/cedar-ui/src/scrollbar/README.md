---
permalink: /components/scrollbar/
---

# Scrollbar

## 案例

### 基础用法

滚动条组件基本用法。scrollbar 的默认插槽需要唯一的子元素。

<demo src="./__demos__/basic.vue"></demo>

### 滚动条类型

设置 `type` 属性改变滚动条类型，`track` 类型会显示滚动条轨道。

<demo src="./__demos__/type.vue"></demo>

## API

### `<scrollbar>` Props

| 参数名      | 描述       | 类型                    |  默认值   |
| ----------- | ---------- | ----------------------- | :-------: |
| type        | 类型       | `'track' \| 'embed'`    | `'embed'` |
| outer-class | 外层的类名 | `string\|object\|array` |    `-`    |
| outer-style | 外层的样式 | `StyleValue`            |    `-`    |

### `<scrollbar>` Events

| 事件名 | 描述       | 参数 |
| ------ | ---------- | ---- |
| scroll | 滚动时触发 | -    |

### `<scrollbar>` Methods

| 方法名     | 描述     | 参数                                                             | 返回值 | 版本   |
| ---------- | -------- | ---------------------------------------------------------------- | ------ | :----- |
| scrollTo   | 滚动     | options: `number \| {left?: number;top?: number}`<br>y: `number` | -      |        |
| scrollTop  | 纵向滚动 | top: `number`                                                    | -      | 2.40.0 |
| scrollLeft | 横向滚动 | left: `number`                                                   | -      | 2.40.0 |

### 类型定义

组件导出以下类型定义

```ts
import type { ScrollbarBoxInstance } from '@cedarjs/ui'
```
