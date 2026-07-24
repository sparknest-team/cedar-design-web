---
title: DateRange 日期范围
description: '表单日期范围字段。通过 type 切换类型；面板请使用 DateRangePicker。'
permalink: /components/date-range/
---

# DateRange

表单日期范围字段（带触发器）。内部使用 `DateRangePicker`。

纯面板请使用 [`DateRangePicker`](/components/date-range-picker/)（默认无触发器）。

## 案例

### 基本用法

<demo src="./__demos__/basic.vue"></demo>

### 选择类型

通过 `type` 切换日 / 周 / 月 / 年 / 季度范围。

<demo src="./__demos__/mode.vue"></demo>

### 自定义分隔符与占位

<demo src="./__demos__/separator.vue"></demo>

### 清除与禁用

<demo src="./__demos__/status.vue"></demo>

### 带时间

<demo src="./__demos__/show-time.vue"></demo>

### 尺寸

<demo src="./__demos__/size.vue"></demo>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 绑定值 | `(Date \| string \| number)[]` | `-` |
| `type` | 选择类型 | `date \| week \| month \| year \| quarter` | `date` |
| `popup-visible` | 弹层显隐 | `boolean` | `-` |
| `clearable` | 可清除 | `boolean` | `false` |
| `disabled` | 禁用 | `boolean \| boolean[]` | `-` |
| `readonly` | 只读 | `boolean` | `false` |
| `size` | 尺寸 | `xs \| sm \| md \| lg \| xl` | `-` |
| `separator` | 分隔符 | `string` | `-` |
| `placeholder` | 占位 | `string[]` | `-` |
| `disabled-date` | 禁用日期 | `Function` | `-` |
| `format` | 展示格式 | `string` | `-` |
| `show-time` | 选择时间 | `boolean` | `false` |
| `date-range-picker-props` | 透传给 DateRangePicker | `object` | `{}` |
