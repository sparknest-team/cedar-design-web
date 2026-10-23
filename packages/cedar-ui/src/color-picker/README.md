---
permalink: /components/color-picker/
---

# ColorPicker

颜色选择**面板**（默认无触发器）。

表单字段请使用 [`Color`](/components/color/)。

## 案例

### 基本用法

默认只渲染面板。

<demo src="./__demos__/basic.vue"></demo>

### 禁用

<demo src="./__demos__/disabled.vue"></demo>

### 颜色格式

通过 `format` 设置颜色值的格式，支持 `hex` 和 `rgb`。

<demo src="./__demos__/format.vue"></demo>

### 预设颜色和历史颜色

通过 `showPreset` 和 `showHistory` 开启预设颜色和历史颜色区域。

<demo src="./__demos__/colors.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

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
