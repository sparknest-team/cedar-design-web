---
permalink: /components/popover/
---

# Popover 气泡卡片

点击触发元素后展示结构化内容。Popover 可以包含按钮、表单和其他交互元素；纯文字说明使用 Tooltip。

## 基础示例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

## 交互与控制

### 交互内容与状态保留

Popover 默认 `unmount-on-close="false"`，关闭后保留表单草稿。

<demo src="./__demos__/interactive.vue"></demo>

## 阅读方向

继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部覆盖。内容默认对齐阅读起点，弹层继承来源方向；逻辑 start/end 对齐随方向变化，显式 left/right 方位保持物理语义。

## API

Popover 继承 Trigger 的定位、容器、受控状态、关闭策略和公开方法。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | — |
| content | 正文 | `string` | — |
| trigger | 触发方式 | `TriggerEvent \| TriggerEvent[]` | `click` |
| placement | 浮层相对触发元素的首选方位，默认 bottom；启用默认的 auto-fit-position 时，空间不足会自动翻转并约束到可视区域，不保证最终停在该侧 | `TriggerPlacement` | `bottom` |
| show-arrow | 是否显示箭头 | `boolean` | `true` |
| popup-offset | 沿方位主轴的距离 | `number` | `10` |
| unmount-on-close | 关闭后卸载内容；默认保留交互草稿 | `boolean` | `false` |
| close-on-click-reference | 再次点击触发元素时关闭 | `boolean` | `true` |

事件为 `update:open`、`open-change`、`open`、`opened`、`close`、`closed`、`click-outside`。插槽为 `default`、`title` 和 `content`。属性内容与插槽同时存在时插槽优先。

实际面板包含统一的 content/title/body 三层。触发元素通过 `aria-controls`、`aria-expanded` 与面板关联；外部 reference 和 SVG 同样支持。

## 同源约定

Cedar 与 Maple 独立保存同一份主体、Props、外观映射和结构样式。无样式定位场景直接使用 Trigger；Popover 不提供 `defaultStyle`、`popoverClass` 或 `elevation`，自定义外观使用组件 Token、`content-class` 或 `content-style`。

## 公开 CSS 变量

以下为实际 :root 默认值。业务定制优先使用组件变量；内部定位变量不属于公开 API。

| 变量 | 默认值 | 意义与场景 |
| --- | --- | --- |
| `--c-popover-background` | `var(--c-sys-color-surface-overlay)` | 内容与箭头背景 |
| `--c-popover-text-color` | `var(--c-sys-color-content-secondary)` | 正文前景 |
| `--c-popover-border-color` | `var(--c-sys-color-border-default)` | 内容与箭头边框颜色 |
| `--c-popover-border-width` | `1px` | 内容与箭头边框宽度 |
| `--c-popover-border-radius` | `var(--c-sys-radius-md)` | 内容圆角 |
| `--c-popover-box-shadow` | `var(--c-shadow2-down)` | 内容阴影，保留平台差异 |
| `--c-popover-arrow-z-index` | `1` | 箭头在当前浮层内的堆叠层级 |
| `--c-popover-padding-horizontal` | `var(--c-sys-space-7)` | 内容横向内边距 |
| `--c-popover-padding-vertical` | `var(--c-sys-space-6)` | 内容纵向内边距 |
| `--c-popover-font-size` | `var(--c-sys-font-size-md)` | 内容字号 |
| `--c-popover-line-height` | `var(--c-line-height)` | 内容行高 |
| `--c-popover-title-text-color` | `var(--c-sys-color-content-primary)` | 标题前景 |
| `--c-popover-title-font-size` | `var(--c-sys-font-size-lg)` | 标题字号 |
| `--c-popover-title-font-weight` | `var(--c-sys-font-weight-medium)` | 标题字重 |
| `--c-popover-title-content-gap` | `var(--c-sys-space-2)` | 标题与正文间距 |
| `--c-popover-animation-duration` | `var(--c-sys-motion-duration-standard)` | 组件入退场时长；reduced-motion 可覆盖 |

Maple 暗色保留圆角 2px，阴影保留平台差异。内容与箭头共享背景／边框变量，不再受 Trigger 样式加载顺序影响。

使用 Teleport 时，变量需放在实际 popup 的作用域中（例如通过 `popup-style`）；触发按钮上的变量不会自动继承到浮层。
