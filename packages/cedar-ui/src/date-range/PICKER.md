---
title: DateRangePicker 日期范围面板
description: '日期范围选择面板（默认无触发器）。字段请使用 DateRange。'
permalink: /components/date-range-picker/
---

# DateRangePicker

日期范围选择**面板**（默认无触发器）。

表单字段请使用 [`DateRange`](/components/date-range/)。单日期面板请使用 [`DatePicker`](/components/date-picker/)。

## 案例

### 基本用法

<demo src="./__demos__/picker/basic.vue"></demo>

### 选择类型

通过 `mode` 切换日 / 周 / 月 / 年 / 季度范围。

<demo src="./__demos__/picker/mode.vue"></demo>

### 带时间

<demo src="./__demos__/picker/show-time.vue"></demo>

### 禁用部分日期

<demo src="./__demos__/picker/disabled-parts.vue"></demo>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 绑定值 | `(Date \| string \| number)[]` | `-` |
| `mode` | 面板类型 | `date \| week \| month \| year \| quarter` | `date` |
| `hide-trigger` | 无触发器，仅面板 | `boolean` | `true` |
| `format` | 展示格式 | `string` | `-` |
| `show-time` | 选择时间 | `boolean` | `false` |
| `disabled` | 禁用 | `boolean \| boolean[]` | `-` |
| `disabled-date` | 禁用日期 | `Function` | `-` |
