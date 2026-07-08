---
permalink: /components/config-provider/
---

# ConfigProvider

在应用的最外层进行配置，一次设置，全局生效。一般用于设置国际化语言等功能。

## 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 组件配置

### ConfigProvider Props

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| type | 参数类型 | string | -      |

### ConfigProvider Events

| 事件名 | 说明           | 参数                          |
| ------ | -------------- | ----------------------------- |
| click  | 点击触发的事件 | `(event: MouseEvent) => void` |

### ConfigProvider Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { ConfigProviderProps } from '@cedar/ui'
```
