---
permalink: /components/button/
---

# Button

两端使用同一份实现和示例，组件前缀、主题基础变量与注册入口各自保留。

## 案例

### 八种主题色

<demo src="./__demos__/basic.vue"></demo>

### 四种变体

<demo src="./__demos__/variants.vue"></demo>

### 五档尺寸

<demo src="./__demos__/size.vue"></demo>

### 禁用与链接拦截

<demo src="./__demos__/disabled.vue"></demo>

### 加载布局与动画

<demo src="./__demos__/loading.vue"></demo>

### 同步、异步与失败恢复

<demo src="./__demos__/auto-loading.vue"></demo>

### 块级按钮

<demo src="./__demos__/block.vue"></demo>

### 颜色、水波与阴影

<demo src="./__demos__/custom-color.vue"></demo>

### 图标插槽与圆形按钮

<demo src="./__demos__/round.vue"></demo>

### 图标文字堆叠

<demo src="./__demos__/stacked.vue"></demo>

### 按钮组继承与覆盖

<demo src="./__demos__/button-group.vue"></demo>

### 原生表单、焦点与触摸事件

<demo src="./__demos__/native-events.vue"></demo>

## API

<!-- same-source-api:start -->
### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| status | 主题色；省略时继承按钮组，否则 default | `SemanticStatus` | `undefined` |
| variant | 外观；省略时继承按钮组，否则 default | `default / text / outline / tonal` | `undefined` |
| size | 尺寸；省略时继承按钮组，否则 md | `xs / sm / md / lg / xl` | `undefined` |
| html-type | 原生按钮类型 | `button / submit / reset` | `button` |
| component | 根标签，链接属性通过 attrs 传入 | `button / a` | `button` |
| round | 圆形按钮 | `boolean` | `false` |
| block | 占满可用宽度 | `boolean` | `false` |
| loading | 加载状态，禁止点击和链接跳转 | `boolean` | `false` |
| loading-type | 加载动画；与 Loading 的 type 相同 | `circle / wave / cube / rect / disappear` | `circle` |
| loading-mode | 行内、覆盖或底部进度线 | `default / fill / line` | `default` |
| loading-size | 加载动画尺寸；省略时使用按钮尺寸，行内图标替换使用 xs | `ComponentSize / number` | `undefined` |
| loading-color | 加载指示器颜色 | `string` | `currentColor` |
| loading-radius | circle 动画半径 | `string / number` | `undefined` |
| auto-loading | 等待 click/touchstart 返回的 Promise；同步回调不闪 loading | `boolean` | `false` |
| icon-container | 图标容器外观 | `boolean` | `false` |
| disabled | 禁用；省略时继承按钮组，显式 false 可覆盖 | `boolean` | `undefined` |
| ripple | 点击水波 | `boolean` | `true` |
| focusable | 允许 Tab 顺序聚焦；不影响通过代码聚焦 | `boolean` | `true` |
| autofocus | 原生自动聚焦 | `boolean` | `false` |
| text-color | 自定义文字色 | `string` | `undefined` |
| color | 自定义背景／变体基色 | `string` | `undefined` |
| elevation | default 变体阴影；true 为 2，false 关闭，数字四舍五入并限制 0～24；组内由组控制 | `boolean / number` | `true` |
| stacked | 图标文字纵向排列；省略时继承按钮组 | `boolean` | `undefined` |

### Events

| 事件 | 参数与行为 |
| --- | --- |
| click | `(event: Event) => void / Promise<unknown>` |
| touchstart | `(event: Event) => void / Promise<unknown>` |

事件处理函数可返回 Promise，也支持多个监听器。auto-loading 会等待全部监听器完成，即使某个提前拒绝也不会提前解除禁用。卸载或 KeepAlive 停用会使旧异步结果失效。内部直接读取监听器返回值，不再二次 emit。原生 focus/blur 等事件透传。禁用／加载中的 click 会阻止跳转与冒泡。

### Slots

| 插槽 | 说明 | 参数 |
| --- | --- | --- |
| default | 按钮内容；加载时保留 | — |
| icon | 前置图标；stacked 时位于文字上方 | — |

### Methods

无自定义公开方法。
<!-- same-source-api:end -->

## ButtonGroup

属性：size=md、status=default、variant=default、color/text-color=undefined、disabled/stacked/vertical=false、elevation=true。使用 default 插槽，公开 buttonGroupProvider（响应式组配置），没有自定义事件。子按钮按字段覆盖组配置；阴影由组整体控制。

## 迁移

Cedar 原 loading-type=default/fill/line 改为 loading-mode=default/fill/line；loading-type 现在选择加载动画。Maple 如需原覆盖式布局，设置 loading-mode=fill。两端 ripple、focusable 默认均为 true。样式变量采用统一 Button token 名称（--c-/--mp- 前缀），完整变量见 style/token.less。

## 类型

ButtonProps、ButtonVariant、ButtonLoadingMode、ButtonHandler、ButtonInstance、ButtonGroupProps、ButtonGroupInstance。

## CSS 变量职责与完整默认值

status-color 只负责实心背景，status-text-color 负责其对比前景；历史命名 status-icon-color 实际控制 text/outline/tonal 及 default icon-container 的可读文字和图标，status-icon-container-color 控制对应浅色表面。定制时应成对覆盖。disabled 优先于 color/text-color 属性；loading 默认继承 currentColor，显式 loading-color 优先。焦点环独立使用 content-brand。

state-opacity-hover/active（0.08/0.12）用于实心、tonal 和图标容器；plain-state-opacity-hover/active（0.5/1）用于 text/outline 的浅色反馈。status-state-layer-color 控制实心反馈色；state-layer-color 控制 tonal/图标容器反馈色。active 高于 hover，disabled/loading 禁止反馈，覆盖层不遮挡前景。internal-button-state-* 是私有变量，不支持业务定制。自定义配色、瞬时 ripple、禁用对比度不在默认对比度保证内。

下表是 :root 默认值而非主题覆盖。暗色 tertiary 的文字改为 on-bright、覆盖层改为 on-dark；Maple 品牌浅色 primary 的文字改为 on-dark、覆盖层改为 on-bright。尺寸与 loading 动效保留现有组件值，不属于本阶段统一范围。

| 变量 | :root 默认值 |
| --- | --- |
| `--c-button-default-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-button-primary-text-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-button-danger-text-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-button-success-text-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-button-warning-text-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-button-info-text-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-button-default-color` | `var(--c-sys-color-surface-default)` |
| `--c-button-primary-color` | `var(--c-sys-color-action-primary)` |
| `--c-button-danger-color` | `var(--c-sys-color-status-danger)` |
| `--c-button-success-color` | `var(--c-sys-color-status-success)` |
| `--c-button-warning-color` | `var(--c-sys-color-status-warning)` |
| `--c-button-info-color` | `var(--c-sys-color-status-info)` |
| `--c-button-secondary-color` | `rgb(var(--c-gray-6))` |
| `--c-button-secondary-text-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-button-tertiary-color` | `rgb(var(--c-gray-7))` |
| `--c-button-tertiary-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-default-icon-color` | `var(--c-sys-color-content-primary)` |
| `--c-button-primary-icon-color` | `var(--c-sys-color-content-brand)` |
| `--c-button-danger-icon-color` | `var(--c-sys-color-content-danger)` |
| `--c-button-success-icon-color` | `var(--c-sys-color-content-success)` |
| `--c-button-warning-icon-color` | `var(--c-sys-color-content-warning)` |
| `--c-button-info-icon-color` | `var(--c-sys-color-content-info)` |
| `--c-button-default-icon-container-color` | `var(--c-sys-color-surface-muted)` |
| `--c-button-primary-icon-container-color` | `rgb(var(--c-primary-1))` |
| `--c-button-danger-icon-container-color` | `rgb(var(--c-danger-1))` |
| `--c-button-success-icon-container-color` | `rgb(var(--c-success-1))` |
| `--c-button-warning-icon-container-color` | `rgb(var(--c-warning-1))` |
| `--c-button-info-icon-container-color` | `rgb(var(--c-blue-1))` |
| `--c-button-disabled-color` | `var(--c-color-disabled)` |
| `--c-button-disabled-text-color` | `var(--c-sys-color-content-disabled)` |
| `--c-button-border-radius` | `var(--c-sys-radius-md)` |
| `--c-button-mini-padding` | `0 var(--c-sys-space-4)` |
| `--c-button-small-padding` | `0 var(--c-sys-space-5)` |
| `--c-button-normal-padding` | `0 var(--c-sys-space-6)` |
| `--c-button-large-padding` | `0 22px` |
| `--c-button-xl-padding` | `0 28px` |
| `--c-button-round-padding` | `var(--c-sys-space-3)` |
| `--c-button-mini-height` | `20px` |
| `--c-button-small-height` | `28px` |
| `--c-button-normal-height` | `36px` |
| `--c-button-large-height` | `44px` |
| `--c-button-xl-height` | `52px` |
| `--c-button-mini-font-size` | `var(--c-font-size-xs)` |
| `--c-button-small-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-button-normal-font-size` | `var(--c-sys-font-size-md)` |
| `--c-button-large-font-size` | `var(--c-sys-font-size-lg)` |
| `--c-button-xl-font-size` | `var(--c-sys-font-size-xl)` |
| `--c-button-content-gap` | `var(--c-sys-space-3)` |
| `--c-button-line-height` | `1.2` |
| `--c-button-stacked-height` | `48px` |
| `--c-button-focus-width` | `2px` |
| `--c-button-focus-color` | `var(--c-sys-color-content-brand)` |
| `--c-button-focus-offset` | `2px` |
| `--c-button-icon-container-padding` | `var(--c-sys-space-3)` |
| `--c-button-loading-line-height` | `3px` |
| `--c-button-loading-line-width` | `40%` |
| `--c-button-loading-duration` | `1s` |
| `--c-button-loading-static-opacity` | `0.5` |
| `--c-button-secondary-icon-color` | `var(--c-sys-color-content-secondary)` |
| `--c-button-secondary-icon-container-color` | `rgb(var(--c-gray-2))` |
| `--c-button-tertiary-icon-color` | `var(--c-sys-color-content-secondary)` |
| `--c-button-tertiary-icon-container-color` | `rgb(var(--c-gray-1))` |
| `--c-button-mini-stacked-height` | `36px` |
| `--c-button-small-stacked-height` | `44px` |
| `--c-button-normal-stacked-height` | `var(--c-button-stacked-height)` |
| `--c-button-large-stacked-height` | `56px` |
| `--c-button-xl-stacked-height` | `64px` |
| `--c-button-stacked-gap` | `var(--c-sys-space-2)` |
| `--c-button-stacked-padding` | `var(--c-sys-space-2)` |
| `--c-button-stacked-border-radius` | `var(--c-sys-radius-md)` |
| `--c-button-group-border-radius` | `var(--c-sys-radius-md)` |
| `--c-button-default-state-layer-color` | `var(--c-sys-color-content-primary)` |
| `--c-button-primary-state-layer-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-info-state-layer-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-success-state-layer-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-warning-state-layer-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-danger-state-layer-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-secondary-state-layer-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-tertiary-state-layer-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-button-state-layer-color` | `var(--c-sys-color-surface-page)` |
| `--c-button-state-opacity-hover` | `0.08` |
| `--c-button-state-opacity-active` | `0.12` |
| `--c-button-plain-state-opacity-hover` | `0.5` |
| `--c-button-plain-state-opacity-active` | `1` |

### 动效变量

内置动效遵循 `prefers-reduced-motion: reduce`；减少动效不会阻止加载状态或关闭事件更新。

| Token | Default |
| --- | --- |
| `--c-button-transition-duration` | `var(--c-sys-motion-duration-standard)` |
