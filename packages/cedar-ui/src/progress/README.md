---
permalink: /components/progress/
---

# Progress

组件描述。

## 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 循环进度条

通过设置 `indeterminate` 属性，可以展示循环进度条。
<demo src="./__demos__/loop.vue"></demo>

## 进度条状态

通过`type`指定进度条类型
<demo src="./__demos__/status.vue"></demo>

## 环状进度条

设置 `type="circle"` 将会展示环形进度条。
<demo src="./__demos__/circle.vue"></demo>

## 迷你进度条

设置`size="xs"`展示微型进度条。
<demo src="./__demos__/mini.vue"></demo>

## 进度条大小

通过 `size` 设置进度条的大小
<demo src="./__demos__/size.vue"></demo>

## 步骤进度条

通过设置 `steps` 展示步骤进度条。
<demo src="./__demos__/step.vue"></demo>

## 组件配置

### Progress Props

| 属性    | 说明     | 类型   | 默认值 |
| ------- | -------- | ------ | ------ |
| type    | 类型     | string | -      |
| status  | 状态     | string | -      |
| size    | 大小     | string | -      |
| percent | 进度数值 | number | -      |

### Progress Events

| 事件名 | 说明           | 参数                          |
| ------ | -------------- | ----------------------------- |
| click  | 点击触发的事件 | `(event: MouseEvent) => void` |

### Progress Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { ProgressProps } from '@cedar/ui'
```
