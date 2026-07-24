---
permalink: /components/date-picker/
---

# DatePicker

日期选择**面板**（默认无触发器）。通过 `mode` 切换年/月/周/日/季度。

表单字段请使用 [`Date`](/components/date/)；日期范围字段请使用 [`DateRange`](/components/date-range/)；范围面板请使用 [`DateRangePicker`](/components/date-range-picker/)。

## 案例

### 基本用法

默认只渲染面板。

<demo src="./__demos__/basic.vue"></demo>

### 选择类型

通过 `mode` 切换面板类型。

<demo src="./__demos__/mode.vue"></demo>

### 带时间

<demo src="./__demos__/show-time.vue"></demo>

### 禁用部分日期

<demo src="./__demos__/disabled-parts.vue"></demo>

### 预设快捷选择

<demo src="./__demos__/short-cuts.vue"></demo>

### 额外页脚

<demo src="./__demos__/footer.vue"></demo>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 绑定值 | `Date \| string \| number` | `-` |
| `mode` | 面板类型 | `date \| week \| month \| year \| quarter` | `date` |
| `hide-trigger` | 无触发器，仅面板 | `boolean` | `true` |
| `format` | 展示格式 | `string \| Function` | `-` |
| `show-time` | 选择时间 | `boolean` | `false` |
| `disabled` | 禁用 | `boolean` | `false` |
| `disabled-date` | 禁用日期 | `Function` | `-` |

其余面板能力可通过 attrs 透传底层 `Picker`。
