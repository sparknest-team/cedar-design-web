---
permalink: /components/color-picker/
---

# ColorPicker

颜色选择**面板**（默认无触发器）。

表单字段请使用 [`Color`](/components/color/)。

FormItem 的错误描述会关联到内嵌面板或内置触发按钮，并保留已有 `aria-describedby`。使用自定义触发内容时，应由调用方为该内容配置需要的无障碍描述。

## 基础示例

### 基本用法

默认只渲染面板。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 禁用

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `default-value` | 默认值 | 禁用 |
| `disabled` | 禁用 | 禁用 |
| `hide-trigger` | 无触发器，仅面板 | 禁用 |
| `show-text` | 显示颜色值 | 禁用 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/disabled.vue"></demo>

## 内容与展示

### 预设颜色和历史颜色

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `default-value` | 默认值 | 预设颜色和历史颜色 |
| `history-colors` | 历史颜色 | 预设颜色和历史颜色 |
| `show-history` | 显示历史颜色 | 预设颜色和历史颜色 |
| `show-preset` | 显示预设颜色 | 预设颜色和历史颜色 |
<!-- demo-config-notes:end -->

通过 `showPreset` 和 `showHistory` 开启预设颜色和历史颜色区域。

历史和预设支持 HEX、带透明度的 HEX 以及 RGB / RGBA；选择时同时更新颜色和透明度，无效条目不会改变当前值。RGB 百分比通道按 0%–100% 转换并限制到有效范围。

RGB / RGBA 使用带括号的函数形式，通道可用逗号或空格分隔；不完整或包含额外文本的输入视为无效。无效的初始模型值回退为不透明红色。

`default-value` 只用于初始化。受控的 `model-value` 由父级决定；用户选择提出更新，父级未接受时恢复当前受控颜色。外部模型同步不会触发 `change`。

<demo src="./__demos__/colors.vue"></demo>

## 数据与选项

### 颜色格式

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `default-value` | 默认值 | 颜色格式 |
| `format` | 颜色值格式 | 颜色格式 |
| `show-text` | 显示颜色值 | 颜色格式 |
| `hide-trigger` | 无触发器，仅面板 | 颜色格式 |
<!-- demo-config-notes:end -->

通过 `format` 设置颜色值的格式，支持 `hex` 和 `rgb`。

面板禁用时，调色板和滑块退出 Tab 顺序，输入与格式选择器不可操作。色相和透明度滑块支持方向键及 Home / End；颜色通道提供本地化的无障碍名称。

`format` 控制输出颜色的格式，并决定面板首次显示时的输入模式。面板内的格式切换只改变输入方式；之后更改 `format` 会改变输出格式，不会重置用户当前选择的输入模式，也不会单独触发 change。

<demo src="./__demos__/format.vue"></demo>

## API

### ColorPicker Props

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value **(v-model)** | 绑定值 | `string` | `-` |
| default-value | 默认值 | `string` | `-` |
| format | 颜色值格式 | `'hex' \| 'rgb'` | `-` |
| size | 尺寸 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| show-text | 显示颜色值 | `boolean` | `false` |
| show-history | 显示历史颜色 | `boolean` | `false` |
| show-preset | 显示预设颜色 | `boolean` | `false` |
| disabled | 禁用 | `boolean` | `false` |
| disabled-alpha | 禁用透明通道 | `boolean` | `false` |
| hide-trigger | 无触发器，仅面板 | `boolean` | `true` |
| history-colors | 历史颜色 | `string[]` | `-` |
| preset-colors | 预设颜色 | `string[]` | `-` |


### 透传配置优先级

嵌套 triggerProps 中的 disabled 等字段可覆盖 ColorPicker 传入弹层的对应配置。需要禁用整个组件时，应同时检查顶层属性和嵌套配置。

拖动监听绑定控件所属视图。KeepAlive 停用或卸载会结束当前手势并释放监听；重新激活后需重新开始手势，旧手势回调不能继续改值。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-color-picker-control-bar-alpha-margin-top` | `var(--c-spacing-9)` | `margin-top` |
| `--c-color-picker-control-bar-border-radius` | `10px` | `border-radius` |
| `--c-color-picker-control-bar-handle-inner-offset` | `var(--c-spacing-4)` | `height`, `width` |
| `--c-color-picker-control-bar-handle-size` | `var(--c-size-4)` | `height`, `width` |
| `--c-color-picker-control-bar-height` | `14px` | `height` |
| `--c-color-picker-control-bar-width` | `182px` | `width` |
| `--c-color-picker-input-bg-color` | `var(--c-color-fill-2)` | `background-color` |
| `--c-color-picker-input-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-color-picker-input-size-lg-padding` | `calc((var(--c-field-size-lg-height) - var(--c-color-picker-preview-size-lg)) / 2) var(--c-spacing-3)` | `padding` |
| `--c-color-picker-input-size-md-padding` | `calc((var(--c-field-size-md-height) - var(--c-color-picker-preview-size-md)) / 2) var(--c-spacing-2)` | `padding` |
| `--c-color-picker-input-size-sm-padding` | `calc((var(--c-field-size-sm-height) - var(--c-color-picker-preview-size-sm)) / 2) var(--c-spacing-2)` | `padding` |
| `--c-color-picker-input-size-xs-padding` | `calc((var(--c-field-size-xs-height) - var(--c-color-picker-preview-size-xs)) / 2) var(--c-spacing-2)` | `padding` |
| `--c-color-picker-palette-handle-border-size` | `var(--c-border-width-2)` | `border` |
| `--c-color-picker-palette-handle-size` | `var(--c-size-4)` | `height`, `width` |
| `--c-color-picker-palette-height` | `178px` | `height` |
| `--c-color-picker-panel-affix-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-color-picker-panel-alpha-input-width` | `52px` | `width` |
| `--c-color-picker-panel-bg-color` | `var(--c-color-bg-1)` | `background-color` |
| `--c-color-picker-panel-block-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-color-picker-panel-block-margin` | `var(--c-spacing-6)` | `margin` |
| `--c-color-picker-panel-block-size` | `var(--c-size-4)` | `height`, `width` |
| `--c-color-picker-panel-border-color` | `var(--c-color-border-2)` | `border`, `border-inline-end`, `border-inline-start`, `border-top` |
| `--c-color-picker-panel-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-color-picker-panel-box-shadow` | `var(--c-shadow2-down)` | `box-shadow` |
| `--c-color-picker-panel-checker-size` | `var(--c-spacing-4)` | `background-size` |
| `--c-color-picker-panel-colors-empty-margin-y` | `var(--c-spacing-9)` | `margin` |
| `--c-color-picker-panel-colors-list-margin` | `calc(-1 * var(--c-spacing-4)) calc(-1 * var(--c-spacing-2)) 0` | `margin` |
| `--c-color-picker-panel-colors-section-margin-top` | `var(--c-spacing-9)` | `margin-top` |
| `--c-color-picker-panel-colors-wrapper-margin-top` | `var(--c-spacing-7)` | `margin-top` |
| `--c-color-picker-panel-empty-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-color-picker-panel-format-padding-left` | `var(--c-spacing-4)` | `padding-inline-start` |
| `--c-color-picker-panel-format-select-width` | `58px` | `width` |
| `--c-color-picker-panel-input-group-margin-left` | `var(--c-spacing-9)` | `margin-inline-start` |
| `--c-color-picker-panel-input-margin-top` | `var(--c-spacing-9)` | `margin-top` |
| `--c-color-picker-panel-input-padding-x` | `var(--c-spacing-6)` | `padding` |
| `--c-color-picker-panel-padding` | `var(--c-spacing-9)` | `padding` |
| `--c-color-picker-panel-preview-size` | `var(--c-size-10)` | `font-size`, `height`, `width` |
| `--c-color-picker-panel-section-title-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-color-picker-panel-section-title-font-weight` | `var(--c-font-weight-400)` | `font-weight` |
| `--c-color-picker-panel-width` | `260px` | `width` |
| `--c-color-picker-preview-border-color` | `var(--c-color-border-2)` | `border` |
| `--c-color-picker-preview-border-size` | `var(--c-border-width-1)` | `border` |
| `--c-color-picker-preview-size-lg` | `26px` | `height`, `padding`, `width` |
| `--c-color-picker-preview-size-md` | `var(--c-size-6)` | `height`, `padding`, `width` |
| `--c-color-picker-preview-size-sm` | `22px` | `height`, `padding`, `width` |
| `--c-color-picker-preview-size-xs` | `var(--c-size-4)` | `height`, `padding`, `width` |
| `--c-color-picker-value-font-color` | `var(--c-color-text-1)` | `color` |
| `--c-color-picker-value-font-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-color-picker-value-font-size` | `var(--c-field-size-md-font-size)` | `font-size` |
| `--c-color-picker-value-margin-left` | `var(--c-spacing-2)` | `margin-inline-start` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-color-picker-control-bar-alpha-margin-top: var(--c-spacing-9);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
