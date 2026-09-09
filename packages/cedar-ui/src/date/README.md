---
title: Date 日期
description: '表单日期字段。通过 type 切换年/月/周/日/季度；面板请使用 DatePicker。'
permalink: /components/date/
---

# Date

表单日期字段（带触发器）。内部使用 `DatePicker`。

纯面板请使用 [`DatePicker`](/components/date-picker/)（默认无触发器）。日期范围字段请使用 [`DateRange`](/components/date-range/)。

## 案例

### 基本用法

<demo src="./__demos__/basic.vue"></demo>

### 选择类型

通过 `type` 切换日 / 周 / 月 / 年 / 季度。

<demo src="./__demos__/type.vue"></demo>

### 带时间

<demo src="./__demos__/show-time.vue"></demo>

### 清除与禁用

<demo src="./__demos__/status.vue"></demo>

### 尺寸

<demo src="./__demos__/size.vue"></demo>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 绑定值 | `Date \| string \| number` | `-` |
| `type` | 选择类型 | `date \| week \| month \| year \| quarter` | `date` |
| `open` | 弹层显隐 | `boolean` | `-` |
| `clearable` | 可清除 | `boolean` | `false` |
| `disabled` | 禁用 | `boolean` | `false` |
| `readonly` | 只读 | `boolean` | `false` |
| `size` | 尺寸 | `xs \| sm \| md \| lg \| xl` | `-` |
| `variant` | 输入框变体 | `filled \| outline \| standard` | `filled` |
| `placeholder` | 占位 | `string` | `-` |
| `disabled-date` | 禁用日期 | `Function` | `-` |
| `format` | 展示格式 | `string \| Function` | 随 `type` |
| `show-time` | 选择时间 | `boolean` | `false` |
| `date-picker-props` | 透传给 DatePicker | `object` | `{}` |
