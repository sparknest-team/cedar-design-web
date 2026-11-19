---
permalink: /components/field-decorator/
---

# FieldDecorator 字段装饰器

FieldDecorator 是 Input、Textarea、Select 与日期时间控件的展示外壳，负责边框、尺寸、浮动提示、前后缀和清除按钮；不管理输入值、表单校验或弹层开合。



- 三种变体：`outline`（默认）、`filled`、`standard`。消费者可以显式选择自己的默认变体。
- 五种尺寸：`xs / sm / md / lg / xl`，默认 `md`；具体高度使用各端 token。
- `hint` 在两端默认均为 `false`；Input 在 FormItem 已有外部标签时关闭浮动提示。
- 有内容且可编辑时才渲染清除按钮；`0` 算非空，`[]` 算空。Cedar 在 hover/focus 时显示，Maple 常驻；触屏媒体条件下 Cedar 也常驻。
- 默认按钮通过各端全局语言系统读取无障碍文案，不维护组件私有词典。
- 内容列尺寸使用 ResizeObserver 观察，支持前缀变化及隐藏容器重新显示；卸载时清理监听。

输入控件聚焦时不额外绘制外圈 outline，沿用各变体已有的边框、底线或背景聚焦反馈；适用于 Input、Textarea、Date 和 Time 等消费者。

输入框、文本域和数字输入框的光标使用 `currentColor`，与当前输入文字颜色一致；错误态不单独覆盖光标颜色。

`--c-field-caret-color` 默认 `currentColor`，统一控制 Input、InputNumber 与 Textarea 的光标颜色；不改变文字色。

## 基础示例

### 表单控件尺寸对照

切换五档 size 和三种字段变体，比较 Input、Button、Select、日期时间及其他单行表单控件的高度。Button 在这里固定使用 outline。DatePicker/TimePicker 是面板，此处使用带输入框的 Date/Time 字段。示例同时展示有值、可清空、标签删除与长标签多选；Select/Cascader 设置 tag-nowrap 时保持同档高度，长标签文字省略、删除图标保留；标签行可横向滚动，清空按钮和箭头固定在外侧。被省略的标签正文支持悬停、键盘聚焦或点按查看完整文字，点外部或按 Esc 关闭，不改变选中值。可清空后恢复选中值重复比较。多行文本和允许换行的多选内容按内容撑高。

<demo src="./__demos__/control-sizes.vue"></demo>

## 加载与等待

### 共享字段加载

`loading` 控制共享字段加载状态；`loading-mode` 为 `default`（指示器）或 `line`（底部不定进度线），默认 `default`。渲染统一由 FieldDecorator 负责，不隐式改变 disabled/readonly；需要禁止编辑时单独设置。

 <demo src="./__demos__/loading.vue"></demo>

## 使用说明

### 错误与禁用边框

动态更换 `tag` 后，尺寸观察会绑定当前根节点和内容节点。KeepAlive 停用释放观察和排队测量；旧激活代次的帧不会修改当前布局。

## API

### FieldDecorator Props

浮动提示为描边预留缺口，缺口与内容列对齐，左右间距通过 `hint-space` 调整。

| 属性 | 类型 | 默认值 / 含义 |
| --- | --- | --- |
| `loading` | `boolean` | `false`，显示加载状态，不改变禁用或只读 |
| `loading-mode` | `'default' \| 'line'` | `default`；指示器或底部进度线 |
| `tag` | `'div' \| 'span'` | `div`，外壳标签 |
| `value` | `unknown` | 仅判断内容是否为空 |
| `id` | `string` | 浮动标签关联的原生控件 id |
| `title` | `string` | 原生标题提示 |
| `size` | `ComponentSize`<br>`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `md`，实现全部五档尺寸 |
| `variant` | `'outline' \| 'filled' \| 'standard'` | `outline` |
| `placeholder` | `string` | 浮动标签文本 |
| `hint` | `boolean` | `false` |
| `hint-center` | `boolean` | `true`；多行控件设为 false |
| `line` | `boolean` | `true`，是否显示边框或底线 |
| `focused` | `boolean` | 消费者传入焦点状态 |
| `composing` | `boolean` | 输入法组合期间保持标签浮起 |
| `disabled` | `boolean` | 消费者合并 Form / Group 后传入的禁用状态 |
| `readonly` | `boolean` | 消费者合并 Form / Group 后传入的只读状态 |
| `error` | `boolean` | 消费者合并 Form / Group 后传入的错误状态 |
| `clearable` | `boolean` | `false`，是否允许清除 |
| `text-color` | `string` | 逐实例自定义文字颜色；静态主题优先使用 token |
| `focus-color` | `string` | 逐实例自定义聚焦颜色；静态主题优先使用 token |
| `blur-color` | `string` | 逐实例自定义未聚焦颜色；静态主题优先使用 token |
| `cursor` | `string` | 自定义光标 |

### FieldDecorator Slots / Events

`default` 放原生输入框、标签或展示内容；`prefix` / `suffix` 放附加内容；`clear-icon` 接收 `clear(event?)`，自定义按钮应调用它，清除不会冒泡打开选择面板。

`loading-icon` 仅在 `loading=true` 且 `loading-mode=default` 时替换加载指示器的图标；`line` 模式不渲染图标。`fieldLoadingProps` 包含 `loading` 和 `loadingMode`；`fieldLoadingModes`、`FieldLoadingMode` 与 `FieldLoadingProps` 可从组件入口或根入口导入。

`clear(event)` 通知消费者更新值；`mousedown(event)` 供消费者管理焦点。外壳不自行修改模型。

样式语义统一使用 `--c-field-*` / `--mp-field-*`；声明集中在各自 `style/token.less`，实现不跨库共享。不要在消费者中重复绘制边框。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-field-blur-color` | `var(--c-sys-color-content-tertiary)` | `border-bottom`, `color` |
| `--c-field-border-radius` | `var(--c-border-radius-md)` | `border-end-end-radius`, `border-end-start-radius`, `border-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--c-field-border-width` | `1px` | `border`, `border-bottom`, `margin-inline-start`, `min-height`, `outline`, `outline-offset`, `padding-inline-start` |
| `--c-field-caret-color` | `currentColor` | `caret-color` |
| `--c-field-clear-icon-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-field-clear-icon-size` | `12px` | `font-size` |
| `--c-field-clear-padding` | `2px` | `padding` |
| `--c-field-clear-radius` | `50%` | `border-radius` |
| `--c-field-clear-visibility` | `hidden` | `visibility` |
| `--c-field-content-gap` | `8px` | `gap`, `padding-inline-end`, `padding-inline-start` |
| `--c-field-content-padding-vertical` | `5px` | `top` |
| `--c-field-control-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-field-control-text-color-disabled` | `var(--c-sys-color-content-disabled)` | `-webkit-text-fill-color`, `color` |
| `--c-field-error-color` | `var(--c-sys-color-status-danger)` | `border-bottom-color`, `border-color`, `color` |
| `--c-field-focus-color` | `var(--c-sys-color-action-primary)` | `border-bottom-color`, `color`, `outline` |
| `--c-field-hint-duration` | `0.2s` | `transition` |
| `--c-field-hint-scale` | `0.75` | `font-size`, `top`, `transform` |
| `--c-field-hint-space` | `4px` | `padding`, `padding-inline-start` |
| `--c-field-icon-size` | `14px` | `font-size` |
| `--c-field-line-height` | `1.5` | `line-height`, `top` |
| `--c-field-loading-color` | `var(--c-field-focus-color)` | `color` |
| `--c-field-loading-duration` | `1s` | `animation` |
| `--c-field-loading-line-size` | `2px` | `height` |
| `--c-field-padding-horizontal` | `12px` | `inset-inline-start`, `margin-inline-end`, `margin-inline-start`, `max-width`, `padding`, `padding-inline-end`, `padding-inline-start`, `width` |
| `--c-field-placeholder-text-color` | `var(--c-sys-color-content-tertiary)` | `color` |
| `--c-field-prefix-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-field-size-lg-font-size` | `14px` | `font-size` |
| `--c-field-size-lg-height` | `36px` | `flex`, `height`, `min-height`, `padding` |
| `--c-field-size-md-font-size` | `14px` | `font-size` |
| `--c-field-size-md-height` | `32px` | `flex`, `height`, `min-height`, `padding` |
| `--c-field-size-sm-font-size` | `14px` | `font-size` |
| `--c-field-size-sm-height` | `28px` | `flex`, `height`, `min-height`, `padding` |
| `--c-field-size-xl-font-size` | `16px` | `font-size` |
| `--c-field-size-xl-height` | `44px` | `flex`, `height`, `min-height` |
| `--c-field-size-xs-font-size` | `12px` | `font-size` |
| `--c-field-size-xs-height` | `24px` | `flex`, `height`, `min-height`, `padding` |
| `--c-field-suffix-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-field-variant-filled-background` | `var(--c-sys-color-surface-muted)` | `background` |
| `--c-field-variant-filled-background-disabled` | `var(--c-color-fill-2)` | `background` |
| `--c-field-variant-filled-background-error` | `var(--c-color-danger-light-1)` | `background` |
| `--c-field-variant-filled-background-focus` | `var(--c-color-fill-3)` | `background` |
| `--c-field-variant-filled-background-hover` | `var(--c-sys-color-state-hover)` | `background` |
| `--c-field-variant-outline-background` | `transparent` | `background` |
| `--c-field-variant-outline-border-color` | `var(--c-sys-color-border-default)` | `border`, `border-color` |
| `--c-field-variant-outline-border-color-disabled` | `var(--c-sys-color-border-subtle)` | `border-color` |
| `--c-field-variant-outline-border-color-error` | `var(--c-sys-color-status-danger)` | `border-color` |
| `--c-field-variant-outline-border-color-focus` | `var(--c-sys-color-action-primary)` | `border-color` |
| `--c-field-variant-outline-border-color-hover` | `color-mix(in srgb, var(--c-field-variant-outline-border-color) 80%, var(--c-sys-color-border-strong))` | `border-color` |
| `--c-field-variant-standard-line-color` | `var(--c-field-blur-color)` | `border-bottom` |
| `--c-field-variant-standard-line-color-disabled` | `var(--c-sys-color-border-subtle)` | `border-bottom-color` |
| `--c-field-variant-standard-line-color-error` | `var(--c-field-error-color)` | `border-bottom-color` |
| `--c-field-variant-standard-line-color-focus` | `var(--c-field-focus-color)` | `border-bottom-color` |
| `--c-field-variant-standard-line-size` | `1px` | `border-bottom` |
| `--c-field-variant-standard-line-size-focus` | `2px` | `border-bottom-width` |
| `--c-search-color-icon` | `var(--c-color-text-2)` | `color` |
| `--c-search-size-icon` | `14px` | `font-size` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-field-blur-color: var(--c-sys-color-content-tertiary);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->

### 错误与禁用边框

以下后缀分别加上 `--c-field-` / `--mp-field-`：`variant-outline-border-color-error` 控制 outline 错误边框；`variant-standard-line-color-error` 控制 standard 错误底线；`variant-standard-line-color-disabled` 控制 standard 禁用底线，默认引用 system border-subtle。禁用优先于错误、hover 和 focus。三个入口均支持局部覆盖；错误提示文字仍由 `field-error-color` 管理。
