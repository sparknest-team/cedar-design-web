---
title: Time 时间
description: '表单时间字段。面板请使用 TimePicker。'
permalink: /components/time/
---

# Time

表单时间字段（带触发器）。内部使用 `TimePicker`。

纯面板请使用 [`TimePicker`](/components/time-picker/)（默认无触发器）。时间范围字段请使用 [`TimeRange`](/components/time-range/)。

## 案例

### 基本用法

<demo src="./__demos__/basic.vue"></demo>

### 格式与步长

<demo src="./__demos__/format.vue"></demo>

### 十二小时制

<demo src="./__demos__/use12Hours.vue"></demo>

### 清除与禁用

<demo src="./__demos__/status.vue"></demo>

### 尺寸

<demo src="./__demos__/size.vue"></demo>

### 跳过确认

<demo src="./__demos__/no-confirm.vue"></demo>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 绑定值 | `string \| number \| Date` | `-` |
| `open` | 弹层显隐 | `boolean` | `-` |
| `clearable` | 可清除 | `boolean` | `true` |
| `disabled` | 禁用 | `boolean` | `false` |
| `readonly` | 只读 | `boolean` | `false` |
| `size` | 尺寸 | `xs \| sm \| md \| lg \| xl` | `-` |
| `variant` | 输入框变体 | `filled \| outlined \| standard` | `filled` |
| `placeholder` | 占位 | `string` | `-` |
| `format` | 展示格式 | `string` | `-` |
| `use12-hours` | 12 小时制 | `boolean` | `false` |
| `step` | 时分秒步长 | `object` | `-` |
| `disable-confirm` | 跳过确认 | `boolean` | `false` |
| `time-picker-props` | 透传给 TimePicker | `object` | `{}` |
