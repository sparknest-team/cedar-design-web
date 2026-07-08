---
permalink: /components/drag-container/
---

# DragContainer

组件描述。

## 基础用法

基础用法，通过modelValue绑定列表数据模型。

<demo src="./__demos__/basic.vue"></demo>

## 组件配置

### DragContainer Props

| 属性       | 说明           | 类型   | 默认值 |
| ---------- | -------------- | ------ | ------ |
| modelValue | 托管的拖拽列表 | Array  | -      |
| dragOption | DragOptions    | ------ | ------ |

### DragContainer Events

| 事件名 | 说明         | 参数                    |
| ------ | ------------ | ----------------------- |
| change | 拖拽完成回调 | `(list: Array) => void` |

### DragContainer Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## 类型定义

### DragOption 拖拽配置

| 属性          | 说明                          | 类型    | 默认值  |
| ------------- | ----------------------------- | ------- | ------- |
| draggable     | 允许拖拽元素的CSS选择器       | String  | ------- |
| sort          | 是否可以拖拽排序              | Boolean | true    |
| handle        | 拖拽手柄CSS选择器             | String  | ------  |
| animation     | 拖拽动画时间                  | Number  | ------  |
| filter        | 不需要进行拖动的元素          | String  | ------  |
| ghostClass    | Drop Placeholder元素的CSS类名 | String  | ------  |
| dragClass     | 正在拖拽中的元素类名          | String  | ------  |
| swapThreshold | 交换区阈值                    | Number  | 1       |

组件导出以下类型定义

```ts
import type { DragContainerProps } from '@cedar/ui'
```
