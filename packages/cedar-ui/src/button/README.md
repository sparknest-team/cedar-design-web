---
permalink: /components/button/
---

Button 的禁用配色按变体区分：彩色实心使用淡化状态背景；text/outline 保持透明背景并淡化状态文字；tonal 保留浅色背景。中性按钮使用中性禁用色。禁用时暂停 color/text-color 覆盖，关闭 hover/active 反馈和阴影。

# Button

两端使用同一份实现和示例，组件前缀、主题基础变量与注册入口各自保留。

## 案例

### 八种主题色

<demo src="./__demos__/basic.vue"></demo>

### 变体、状态与尺寸

选择变体和尺寸，同时对比八种状态色。实心适合主要操作，text 和 outline 适合次要操作；这里只组合三个外观维度。

<demo src="./__demos__/variants.vue"></demo>

### 五档尺寸

同一平台的水平 Button 与 Input 默认按相同 size 对齐高度和字号。Cedar 高度为 24/28/32/36/44px，Maple 为 32/40/48/56/64px；按钮单侧内边距为 8/12/16/20/24px，图标与文字间距为 6px。堆叠按钮使用独立的内容高度规则。组件局部样式覆盖仍各自生效。

<demo src="./__demos__/size.vue"></demo>

### 禁用与链接拦截

<demo src="./__demos__/disabled.vue"></demo>

### 加载动画、布局与尺寸

选择加载布局和指示器尺寸，对比五种动画。加载时按钮保留文案并阻止重复操作。

<demo src="./__demos__/loading.vue"></demo>

### 加载指示器样式

<demo src="./__demos__/loading-appearance.vue"></demo>

### 同步、异步与失败恢复

<demo src="./__demos__/auto-loading.vue"></demo>

### 块级按钮

<demo src="./__demos__/block.vue"></demo>

### 自定义颜色

<demo src="./__demos__/custom-color.vue"></demo>

### 按钮组继承与覆盖

切换组尺寸和禁用状态，观察子按钮继承配置。子按钮可独立覆盖状态色，显式 disabled=false 可覆盖组禁用。

<demo src="./__demos__/button-group.vue"></demo>

### 按钮组布局

在水平和垂直排列中比较变体和尺寸。尺寸、变体与排列方向共同组成三个外观维度。

<demo src="./__demos__/button-group-layout.vue"></demo>

### 按钮组图文与加载

切换图文堆叠和排列方向，再启用第一个按钮的加载状态；其他操作仍可独立使用。竖向按钮组的横排图文按起始边对齐，避免文字长度不同导致图标错位。

<demo src="./__demos__/button-group-content.vue"></demo>

### 原生表单、焦点与触摸事件

<demo src="./__demos__/native-events.vue"></demo>

### 水波与阴影反馈

点击按钮观察水波，调整阴影等级比较层次感。关闭水波不会影响点击事件。

<demo src="./__demos__/feedback.vue"></demo>

### 图标与图文布局

使用内置图标，切换四种变体和五档尺寸，对比纯图标、横排图文、上下堆叠。堆叠按钮按内容撑高，上下至少保留 8px 内边距。纯图标只传 icon 插槽；round 控制圆形，stacked 控制上下排列。

<demo src="./__demos__/icons.vue"></demo>

### 表单控件尺寸对照

切换五档 size 和三种字段变体，比较 Input、Button、Select、日期时间及其他单行表单控件的高度。Button 在这里固定使用 outline。DatePicker/TimePicker 是面板，此处使用带输入框的 Date/Time 字段。示例同时展示有值、可清空、标签删除与长标签多选；Select/Cascader 设置 tag-nowrap 时保持同档高度，长标签文字省略、删除图标保留；标签行可横向滚动，清空按钮和箭头固定在外侧。被省略的标签正文支持悬停、键盘聚焦或点按查看完整文字，点外部或按 Esc 关闭，不改变选中值。可清空后恢复选中值重复比较。多行文本和允许换行的多选内容按内容撑高。

<demo src="../field-decorator/__demos__/control-sizes.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

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
| loading-type | 加载动画；与 Loading 的 type 相同，line 模式不适用 | `circle / wave / cube / rect / disappear` | `circle` |
| loading-mode | 行内、覆盖或底部进度线；line 只使用 loading-color | `default / fill / line` | `default` |
| loading-size | 指示器尺寸；xs/sm/md/lg/xl 对应 12/14/16/18/20px，数字为 px；省略时跟随按钮尺寸，line 模式不适用 | `ComponentSize / number` | `undefined` |
| loading-color | 加载指示器颜色 | `string` | `currentColor` |
| auto-loading | 等待 click/touchstart 返回的 Promise；同步回调不闪 loading | `boolean` | `false` |
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

## 类型

ButtonProps、ButtonVariant、ButtonLoadingMode、ButtonHandler、ButtonInstance、ButtonGroupProps、ButtonGroupInstance。

## CSS 变量职责与完整默认值

Button 保留 58 个外观变量。`{status}-color` 控制实心背景，`{status}-foreground-color` 控制 text/outline/tonal 的文字和图标，`{status}-tonal-color` 控制浅色背景。语义状态共用 `solid-text-color` 和 `solid-state-layer-color`；default/tertiary 前景与 primary/tertiary 状态层保留必要的主题差异。

尺寸统一使用 xs/sm/md/lg/xl。字号、过渡时长、焦点宽度与偏移、堆叠高度增量直接复用系统变量；按钮组与堆叠圆角共用 border-radius。四个状态透明度变量保留 hover/active 的差异。loading-duration 仅控制底部进度线；其他加载动画由 Loading 负责。内部变量与固定动画几何细节不再作为公共定制项。


| 变量名 | 默认值 |
| --- | --- |
| `--c-button-border-radius` | `var(--c-sys-radius-md)` |
| `--c-button-content-gap` | `var(--c-sys-space-3)` |
| `--c-button-danger-color` | `var(--c-sys-color-status-danger)` |
| `--c-button-danger-disabled-color` | `rgb(var(--c-danger-3))` |
| `--c-button-danger-foreground-color` | `var(--c-sys-color-content-danger)` |
| `--c-button-danger-tonal-color` | `rgb(var(--c-danger-1))` |
| `--c-button-default-color` | `var(--c-sys-color-surface-default)` |
| `--c-button-default-foreground-color` | `var(--c-sys-color-content-primary)` |
| `--c-button-default-tonal-color` | `var(--c-sys-color-surface-muted)` |
| `--c-button-disabled-color` | `var(--c-color-fill-2)` |
| `--c-button-disabled-solid-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-disabled-text-color` | `var(--c-sys-color-content-disabled)` |
| `--c-button-focus-color` | `var(--c-sys-color-content-brand)` |
| `--c-button-info-color` | `var(--c-sys-color-status-info)` |
| `--c-button-info-disabled-color` | `rgb(var(--c-blue-3))` |
| `--c-button-info-foreground-color` | `var(--c-sys-color-content-info)` |
| `--c-button-info-tonal-color` | `rgb(var(--c-blue-1))` |
| `--c-button-lg-height` | `36px` |
| `--c-button-lg-padding` | `0 var(--c-sys-space-7)` |
| `--c-button-loading-duration` | `1s` |
| `--c-button-loading-line-height` | `3px` |
| `--c-button-md-height` | `32px` |
| `--c-button-md-padding` | `0 var(--c-sys-space-6)` |
| `--c-button-plain-state-opacity-active` | `1` |
| `--c-button-plain-state-opacity-hover` | `0.5` |
| `--c-button-primary-color` | `var(--c-sys-color-action-primary)` |
| `--c-button-primary-disabled-color` | `rgb(var(--c-primary-3))` |
| `--c-button-primary-foreground-color` | `var(--c-sys-color-content-brand)` |
| `--c-button-primary-state-layer-color` | `var(--c-button-solid-state-layer-color)` |
| `--c-button-primary-tonal-color` | `rgb(var(--c-primary-1))` |
| `--c-button-secondary-color` | `rgb(var(--c-gray-6))` |
| `--c-button-secondary-foreground-color` | `var(--c-sys-color-content-secondary)` |
| `--c-button-secondary-tonal-color` | `rgb(var(--c-gray-2))` |
| `--c-button-sm-height` | `28px` |
| `--c-button-sm-padding` | `0 var(--c-sys-space-5)` |
| `--c-button-solid-state-layer-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-solid-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-stacked-gap` | `var(--c-sys-space-2)` |
| `--c-button-state-layer-color` | `var(--c-sys-color-surface-page)` |
| `--c-button-state-opacity-active` | `0.12` |
| `--c-button-state-opacity-hover` | `0.08` |
| `--c-button-success-color` | `var(--c-sys-color-status-success)` |
| `--c-button-success-disabled-color` | `rgb(var(--c-success-3))` |
| `--c-button-success-foreground-color` | `var(--c-sys-color-content-success)` |
| `--c-button-success-tonal-color` | `rgb(var(--c-success-1))` |
| `--c-button-tertiary-color` | `rgb(var(--c-gray-7))` |
| `--c-button-tertiary-foreground-color` | `var(--c-sys-color-content-secondary)` |
| `--c-button-tertiary-state-layer-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-button-tertiary-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-tertiary-tonal-color` | `rgb(var(--c-gray-1))` |
| `--c-button-warning-color` | `var(--c-sys-color-status-warning)` |
| `--c-button-warning-disabled-color` | `rgb(var(--c-warning-3))` |
| `--c-button-warning-foreground-color` | `var(--c-sys-color-content-warning)` |
| `--c-button-warning-tonal-color` | `rgb(var(--c-warning-1))` |
| `--c-button-xl-height` | `44px` |
| `--c-button-xl-padding` | `0 var(--c-sys-space-8)` |
| `--c-button-xs-height` | `24px` |
| `--c-button-xs-padding` | `0 var(--c-sys-space-4)` |
