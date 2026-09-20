---
permalink: /components/popover/
---

# Popover 气泡卡片

点击触发元素后展示结构化内容。Popover 可以包含按钮、表单和其他交互元素；纯文字说明使用 Tooltip。

## 基础用法

<demo src="./__demos__/basic.vue"></demo>

## 交互内容与状态保留

Popover 默认 `unmount-on-close="false"`，关闭后保留表单草稿。

<demo src="./__demos__/interactive.vue"></demo>

## API

Popover 继承 Trigger 的定位、容器、受控状态、关闭策略和公开方法。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | — |
| content | 正文 | `string` | — |
| trigger | 触发方式 | `TriggerEvent \| TriggerEvent[]` | `click` |
| placement | 首选方位 | `TriggerPlacement` | `bottom` |
| show-arrow | 是否显示箭头 | `boolean` | `true` |
| popup-offset | 沿方位主轴的距离 | `number` | `10` |
| unmount-on-close | 关闭后卸载内容；默认保留交互草稿 | `boolean` | `false` |
| close-on-click-reference | 再次点击触发元素时关闭 | `boolean` | `true` |

事件为 `update:open`、`open-change`、`open`、`opened`、`close`、`closed`、`click-outside`。插槽为 `default`、`title` 和 `content`。属性内容与插槽同时存在时插槽优先。

实际面板包含统一的 content/title/body 三层。触发元素通过 `aria-controls`、`aria-expanded` 与面板关联；外部 reference 和 SVG 同样支持。

## 同源约定

Cedar 与 Maple 独立保存同一份主体、Props、外观映射和结构样式。无样式定位场景直接使用 Trigger；Popover 不提供 `defaultStyle`、`popoverClass` 或 `elevation`，自定义外观使用组件 Token、`content-class` 或 `content-style`。
