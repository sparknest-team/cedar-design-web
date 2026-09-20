---
permalink: /components/tooltip/
---

# Tooltip 文字气泡

用于补充说明按钮、图标或被截断的文字。默认同时响应鼠标悬停和键盘聚焦；需要承载可操作内容时使用 Popover。

## 基础用法

<demo src="./__demos__/basic.vue"></demo>

## 尺寸

Tooltip 只实现 `md` 和 `xs` 两档，默认 `md`。

<demo src="./__demos__/mini.vue"></demo>

## 主题色与自定义颜色

`status` 表示主题意图；`color` 和 `text-color` 覆盖背景色与文字色。

<demo src="./__demos__/status.vue"></demo>
<demo src="./__demos__/color.vue"></demo>

## 位置

<demo src="./__demos__/placement.vue"></demo>

## 指令与文本溢出

<demo src="./__demos__/directive.vue"></demo>
<demo src="./__demos__/text-ellipsis.vue"></demo>

## API

Tooltip 继承 Trigger 的定位、容器、受控状态、关闭策略和公开方法。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | `string` | — |
| status | 面板主题 | `default \| primary \| info \| success \| warning \| danger` | `default` |
| size | 尺寸；只实现两档 | `xs \| md` | `md` |
| color | 自定义背景色 | `string` | — |
| text-color | 自定义文字色 | `string` | — |
| trigger | 触发方式 | `TriggerEvent \| TriggerEvent[]` | `['hover', 'focus']` |
| placement | 首选方位 | `TriggerPlacement` | `top` |
| show-arrow | 是否显示箭头 | `boolean` | `true` |
| popup-offset | 沿方位主轴的距离 | `number` | `10` |
| unmount-on-close | 关闭后卸载内容 | `boolean` | `true` |

事件为 `update:open`、`open-change`、`open`、`opened`、`close`、`closed`、`click-outside`。插槽为 `default` 和 `content`。公开 `open`、`close`、`resize`、`allowClose`、`getReference`、`setReference`、`focusReference`。

Tooltip 内容具有 `role="tooltip"`，打开时会把内容 ID 写入实际触发元素的 `aria-describedby`；关闭、更换外部 reference 或卸载时会清理属性。

## 同源约定

Cedar 与 Maple 独立保存同一份主体、Props、外观映射和结构样式，只允许前缀、本地导入及主题 Token 值不同。不提供 `backgroundColor` 或布尔 `xs` 兼容入口。
