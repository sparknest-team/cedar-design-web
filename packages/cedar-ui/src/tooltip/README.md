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

### 外观组合

适用于悬浮时的补充说明。调整状态、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

<demo src="./__demos__/appearance-lab.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

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

## 公开 CSS 变量

以下为实际 :root 默认值。业务定制优先使用组件变量；内部定位变量不属于公开 API。

| 变量 | 默认值 | 意义与场景 |
| --- | --- | --- |
| `--c-tooltip-background` | `var(--c-sys-color-surface-tooltip)` | 内容与箭头背景 |
| `--c-tooltip-text-color` | `var(--c-sys-color-content-on-dark)` | 正文前景 |
| `--c-tooltip-status-primary-background` | `var(--c-sys-color-action-primary)` | primary 状态内容与箭头背景 |
| `--c-tooltip-status-info-background` | `var(--c-sys-color-status-info)` | info 状态内容与箭头背景 |
| `--c-tooltip-status-success-background` | `var(--c-sys-color-status-success)` | success 状态内容与箭头背景 |
| `--c-tooltip-status-warning-background` | `var(--c-sys-color-status-warning)` | warning 状态内容与箭头背景 |
| `--c-tooltip-status-danger-background` | `var(--c-sys-color-status-danger)` | danger 状态内容与箭头背景 |
| `--c-tooltip-status-primary-text-color` | `var(--c-sys-color-content-on-dark)` | primary 状态文字；与对应底色成对设置 |
| `--c-tooltip-status-info-text-color` | `var(--c-sys-color-content-on-dark)` | info 状态文字；与对应底色成对设置 |
| `--c-tooltip-status-success-text-color` | `var(--c-sys-color-content-on-dark)` | success 状态文字；与对应底色成对设置 |
| `--c-tooltip-status-warning-text-color` | `var(--c-sys-color-content-on-dark)` | warning 状态文字；与对应底色成对设置 |
| `--c-tooltip-status-danger-text-color` | `var(--c-sys-color-content-on-dark)` | danger 状态文字；与对应底色成对设置 |
| `--c-tooltip-padding-horizontal` | `var(--c-sys-space-6)` | 内容横向内边距 |
| `--c-tooltip-padding-vertical` | `var(--c-sys-space-4)` | 内容纵向内边距 |
| `--c-tooltip-font-size` | `var(--c-sys-font-size-md)` | 内容字号 |
| `--c-tooltip-line-height` | `var(--c-line-height)` | 内容行高 |
| `--c-tooltip-border-radius` | `var(--c-sys-radius-md)` | 内容圆角 |
| `--c-tooltip-max-width` | `350px` | 提示内容最大宽度 |
| `--c-tooltip-opacity` | `1` | 内容与箭头透明度；改动需重新检查对比度 |
| `--c-tooltip-size-xs-padding-horizontal` | `var(--c-sys-space-4)` | xs 尺寸：内容横向内边距 |
| `--c-tooltip-size-xs-padding-vertical` | `var(--c-sys-space-2)` | xs 尺寸：内容纵向内边距 |
| `--c-tooltip-size-xs-font-size` | `var(--c-sys-font-size-xs)` | xs 尺寸：内容字号 |
| `--c-tooltip-animation-duration` | `var(--c-sys-motion-duration-standard)` | 组件入退场时长；reduced-motion 可覆盖 |

所有内置主题 opacity 为 1。彩色实心状态文字遵循 Button，统一使用 on-dark，明暗模式一致。Maple 暗色保留圆角 4px、字号 14px、纵向／横向内边距 8px／16px。中性表面在明暗模式均保持深色。`color` 同时设置内容与箭头背景，`text-color` 设置文字；显式 content-style／arrow-style 覆盖各自节点。自定义颜色／透明度需重新验证。

使用 Teleport 时，变量需放在实际 popup 的作用域中（例如通过 `popup-style`）；触发按钮上的变量不会自动继承到浮层。
