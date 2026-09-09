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

<demo src="./__demos__/placement.vue"></demo>

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
| open **(v-model)** | 文字气泡是否可见                   | `boolean`                                                                                                | `-`     |
| default-open       | 文字气泡默认是否可见（非受控模式） | `boolean`                                                                                                | `false` |
| content                     | 文字气泡内容                       | `string`                                                                                                 | `-`     |
| placement                    | 弹出位置                           | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `'top'` |
| xs                          | 是否展示为迷你尺寸                 | `boolean`                                                                                                | `false` |
| background-color            | 弹出框的背景颜色                   | `string`                                                                                                 | `-`     |
| content-class               | 弹出框内容的类名                   | `ClassName`                                                                                              | `-`     |
| content-style               | 弹出框内容的样式                   | `CSSProperties`                                                                                          | `-`     |
| arrow-class                 | 弹出框箭头的类名                   | `ClassName`                                                                                              | `-`     |
| arrow-style                 | 弹出框箭头的样式                   | `CSSProperties`                                                                                          | `-`     |
| popup-container             | 弹出框的挂载容器                   | `string \| HTMLElement \| false`                                                                                  | `-`     |

### Tooltip Events

| 事件名               | 说明                       | 参数               |
| -------------------- | -------------------------- | ------------------ |
| open-change | 文字气泡显示状态改变时触发 | open: `boolean` |

### Tooltip Slots

| 插槽名  | 说明 |
| ------- | ---- |
| content | 内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { TooltipProps } from '@cedarjs/ui'
```

## 共同组件主体与 Trigger 契约

两端使用独立复制的组件主体；所有开关状态和生命周期由底层 Trigger 管理。`open` 是受控值，`defaultOpen` 初始化非受控状态；请求只派发一次 `update:open` 和 `open-change`，实际变化才产生 open/close，过渡完成才产生 opened/closed。默认打开也会产生首次 open。

明确支持 Trigger 的交互与渲染字段，包括 trigger（单值/数组）、disabled、mouseEnterDelay、mouseLeaveDelay、focusDelay、popupHoverStay、blurToClose、clickOutsideToClose、escToClose、restoreFocus、unmountOnClose、duration、showArrow、popupClass/popupStyle、contentClass/contentStyle、arrowClass/arrowStyle。各端定位扩展继续使用该端 Trigger 字段。

公开方法：open、close、resize、allowClose、getReference、setReference、focusReference。setReference() 无参数时恢复默认插槽引用，HTML/SVG 引用均受支持；focusReference 不会导致 focus 触发器再次打开。

默认值保留：Cedar Tooltip/Popover 为 hover、top、100 ms 延迟、有箭头、关闭后卸载；Maple Tooltip 为 hover，Popover 为 click，二者 bottom、零延迟、默认无箭头、关闭后保留内容。需要一致行为时显式传这些属性。

Tooltip 内容层带 role="tooltip"，content 插槽优先于 content 属性。backgroundColor 为两端一致的背景入口，color 保留兼容；textColor 设置文字颜色，xs 启用小尺寸。Cedar 的 contentClass/contentStyle 位于实际内容元素，其外层仍是 Trigger 内容层；依赖直接子元素的 CSS 需据此调整。
