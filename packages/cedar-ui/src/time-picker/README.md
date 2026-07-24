---
permalink: /components/time-picker/
---

# TimePicker

时间选择**面板**（默认无触发器）。

表单字段请使用 [`Time`](/components/time/)；时间范围字段请使用 [`TimeRange`](/components/time-range/)；范围面板请使用 [`TimeRangePicker`](/components/time-range-picker/)。

## 案例

### 基本用法

默认只渲染面板。

<demo src="./__demos__/basic.vue"></demo>

### 禁用部分时间选项

<demo src="./__demos__/disabled-parts.vue"></demo>

### 跳过确认

<demo src="./__demos__/no-confirm.vue"></demo>

### 定制格式

<demo src="./__demos__/format.vue"></demo>

### 定制步长

<demo src="./__demos__/step.vue"></demo>

### 十二小时制

<demo src="./__demos__/use12Hours.vue"></demo>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 绑定值 | `string \| number \| Date` | `-` |
| `hide-trigger` | 无触发器，仅面板 | `boolean` | `true` |
| `format` | 展示格式 | `string` | `-` |
| `use12-hours` | 12 小时制 | `boolean` | `false` |
| `disable-confirm` | 跳过确认 | `boolean` | `false` |
| `disabled` | 禁用 | `boolean` | `false` |
| `step` | 时分秒步长 | `object` | `-` |
