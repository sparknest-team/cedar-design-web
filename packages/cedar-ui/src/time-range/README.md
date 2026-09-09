---
title: TimeRange 时间范围
description: '表单时间范围字段。面板请使用 TimeRangePicker。'
permalink: /components/time-range/
---

# TimeRange

表单时间范围字段（带触发器）。内部使用 `TimeRangePicker`。

纯面板请使用 [`TimeRangePicker`](/components/time-range-picker/)（默认无触发器）。

## 案例

### 基本用法

<demo src="./__demos__/basic.vue"></demo>

### 格式与步长

<demo src="./__demos__/format.vue"></demo>

### 十二小时制

<demo src="./__demos__/use12Hours.vue"></demo>

### 自定义占位

<demo src="./__demos__/placeholder.vue"></demo>

### 清除与禁用

<demo src="./__demos__/status.vue"></demo>

### 次日标记

结束时间早于开始时间时，开启 `show-next-day` 会在字段与面板结束侧显示「次日」，且确认时**不再自动交换**起止时间。

<demo src="./__demos__/show-next-day.vue"></demo>

### 尺寸

<demo src="./__demos__/size.vue"></demo>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 绑定值 | `(string \| number \| Date)[]` | `-` |
| `open` | 弹层显隐 | `boolean` | `-` |
| `clearable` | 可清除 | `boolean` | `true` |
| `disabled` | 禁用 | `boolean` | `false` |
| `readonly` | 只读 | `boolean` | `false` |
| `size` | 尺寸 | `xs \| sm \| md \| lg \| xl` | `-` |
| `variant` | 输入框变体 | `filled \| outline \| standard` | `filled` |
| `placeholder` | 占位 | `string \| string[]` | `-` |
| `format` | 展示格式 | `string` | `-` |
| `use12-hours` | 12 小时制 | `boolean` | `false` |
| `show-next-day` | 结束早于开始时显示「次日」，并关闭确认时的起止交换 | `boolean` | `false` |
| `time-range-picker-props` | 透传给 TimeRangePicker | `object` | `{}` |
