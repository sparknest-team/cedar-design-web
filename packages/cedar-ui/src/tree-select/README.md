---
permalink: /components/tree-select/
---

# TreeSelect

可以对树形结构数据进行选择。

## 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 组件配置

### TreeSelect Props

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| type | 参数类型 | string | -      |

### TreeSelect Events

| 事件名 | 说明           | 参数                          |
| ------ | -------------- | ----------------------------- |
| click  | 点击触发的事件 | `(event: MouseEvent) => void` |

### TreeSelect Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { TreeSelectProps } from '@cedar/ui'
```
