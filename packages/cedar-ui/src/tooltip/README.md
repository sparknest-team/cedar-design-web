---
permalink: /components/tooltip/
---

# Tooltip

鼠标悬停、聚焦或点击在某个组件时，弹出的文字提示。
`<tooltip>` 组件继承 `<trigger>` 组件的全部属性

## 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 自定义背景颜色

通过 `background-color` 属性自定义背景颜色。

<demo src="./__demos__/color.vue"></demo>

## 迷你尺寸

适用于小场景或数字气泡样式。

<demo src="./__demos__/mini.vue"></demo>

## 位置

文字气泡支持 12 个不同的方位。分别为：`上左`、`上`、`上右`、`下左`、`下`、`下右`、`左上`、`左`、`左下`、`右上`、`右`、`右下`。

<demo src="./__demos__/position.vue"></demo>

## 指令用法

支持通过v-tooltip指令使用。
<demo src="./__demos__/directive.vue"></demo>

## 文本溢出时显示tooltip

通过v-tooltip:ellipsis指令使用，当文本溢出时显示tooltip。
<demo src="./__demos__/text-ellipsis.vue"></demo>

## 组件配置

### Tooltip Props

| 属性                        | 说明                               | 类型                                                                                                     | 默认值  |
| --------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| popup-visible **(v-model)** | 文字气泡是否可见                   | `boolean`                                                                                                | `-`     |
| default-popup-visible       | 文字气泡默认是否可见（非受控模式） | `boolean`                                                                                                | `false` |
| content                     | 文字气泡内容                       | `string`                                                                                                 | `-`     |
| position                    | 弹出位置                           | `'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'` | `'top'` |
| xs                          | 是否展示为迷你尺寸                 | `boolean`                                                                                                | `false` |
| background-color            | 弹出框的背景颜色                   | `string`                                                                                                 | `-`     |
| content-class               | 弹出框内容的类名                   | `ClassName`                                                                                              | `-`     |
| content-style               | 弹出框内容的样式                   | `CSSProperties`                                                                                          | `-`     |
| arrow-class                 | 弹出框箭头的类名                   | `ClassName`                                                                                              | `-`     |
| arrow-style                 | 弹出框箭头的样式                   | `CSSProperties`                                                                                          | `-`     |
| popup-container             | 弹出框的挂载容器                   | `string \| HTMLElement`                                                                                  | `-`     |

### Tooltip Events

| 事件名               | 说明                       | 参数               |
| -------------------- | -------------------------- | ------------------ |
| popup-visible-change | 文字气泡显示状态改变时触发 | visible: `boolean` |

### Tooltip Slots

| 插槽名  | 说明 |
| ------- | ---- |
| content | 内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { TooltipProps } from '@cedar/ui'
```
