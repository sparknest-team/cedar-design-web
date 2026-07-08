---
permalink: /components/slider/
---

# Slider

组件描述。

## 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 组件配置

### Slider Props

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| type | 参数类型 | string | -      |

### Slider Events

| 事件名 | 说明           | 参数                          |
| ------ | -------------- | ----------------------------- |
| click  | 点击触发的事件 | `(event: MouseEvent) => void` |

### Slider Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { SliderProps } from '@cedar/ui'
```
