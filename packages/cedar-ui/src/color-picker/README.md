---
permalink: /components/color-picker/
---

# ColorPicker

颜色选择**面板**（默认无触发器）。

表单字段请使用 [`Color`](/components/color/)。

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

<demo src="./__demos__/format.vue"></demo>

## API

### `<ColorPicker>` Props

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


### 透传配置的现有优先级（F07）

现有 triggerProps 在部分内部 Trigger 配置之后展开，嵌套 disabled 等字段目前可以覆盖内部传值。F07 兼容阶段保留该顺序和类型，不套用 AutoComplete 的托管字段规则；不新增安全子集承诺，也不自动禁止这些旧能力。

拖动监听绑定控件所属视图。KeepAlive 停用或卸载会结束当前手势并释放监听；重新激活后需重新开始手势，旧手势回调不能继续改值。
