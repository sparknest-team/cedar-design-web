---
title: TimeRangePicker 时间范围面板
description: '时间范围选择面板（默认无触发器）。字段请使用 TimeRange。'
permalink: /components/time-range-picker/
---

# TimeRangePicker

时间范围选择**面板**（默认无触发器），左右同时展示开始 / 结束时间。

表单字段请使用 [`TimeRange`](/components/time-range/)。单时间面板请使用 [`TimePicker`](/components/time-picker/)。

## 案例

### 基本用法

<demo src="./__demos__/basic.vue"></demo>

### 定制格式

<demo src="./__demos__/format.vue"></demo>

### 定制步长

<demo src="./__demos__/step.vue"></demo>

### 十二小时制

<demo src="./__demos__/use12Hours.vue"></demo>

### 跳过确认

<demo src="./__demos__/no-confirm.vue"></demo>

### 禁用部分时间

<demo src="./__demos__/disabled-parts.vue"></demo>

### 次日标记

结束早于开始时显示「次日」，并关闭确认时的起止交换。

<demo src="./__demos__/show-next-day.vue"></demo>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 绑定值 | `(string \| number \| Date)[]` | `-` |
| `hide-trigger` | 无触发器，仅面板 | `boolean` | `true` |
| `format` | 展示格式 | `string` | `-` |
| `use12-hours` | 12 小时制 | `boolean` | `false` |
| `show-next-day` | 结束早于开始时显示「次日」，并关闭确认时的起止交换 | `boolean` | `false` |
| `disable-confirm` | 跳过确认 | `boolean` | `false` |
| `disabled` | 禁用 | `boolean` | `false` |
| `step` | 时分秒步长 | `object` | `-` |
