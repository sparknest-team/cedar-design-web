---
title: TimeRangePicker 时间范围面板
description: '时间范围选择面板（默认无触发器）。字段请使用 TimeRange。'
permalink: /components/time-range-picker/
---

# TimeRangePicker

时间范围选择**面板**（默认无触发器），左右同时展示开始 / 结束时间。

表单字段请使用 [`TimeRange`](/components/time-range/)。单时间面板请使用 [`TimePicker`](/components/time-picker/)。

### 纯面板确认与禁用选项

纯面板默认确认后提交：选择时仅发 select，确认后才更新模型并发 change；disable-confirm 开启后有效选择立即提交。hide-disabled-options 默认 false，开启后隐藏禁用项；时钟保留原刻度角度。字段和日期组件内部显式跳过子面板确认，由外层负责提交。外部模型替换会重置草稿，不主动派发事件。

<demo src="./__demos__/panel-behavior.vue"></demo>

独立面板直接管理自己的草稿与提交状态。外部替换模型会重置草稿，不触发选择或变更事件；只读、禁用均阻止选择和确认。Cedar 使用列表，Maple 使用滚轮或时钟，展示层不另建一份草稿。

## 案例

### 基本用法

<demo src="./__demos__/picker/basic.vue"></demo>

### 定制格式

<demo src="./__demos__/picker/format.vue"></demo>

### 定制步长

<demo src="./__demos__/picker/step.vue"></demo>

### 十二小时制

<demo src="./__demos__/picker/use12Hours.vue"></demo>

### 跳过确认

<demo src="./__demos__/picker/no-confirm.vue"></demo>

### 禁用部分时间

<demo src="./__demos__/picker/disabled-parts.vue"></demo>

### 次日标记

结束早于开始时显示「次日」，并关闭确认时的起止交换。

<demo src="./__demos__/picker/show-next-day.vue"></demo>

## API

面板主体统一管理草稿和确认，展示内容只渲染这一份状态。上方示例展示 extra 插槽及有效确认次数；重复确认相同值会触发 confirm，不会重复触发 change。

### 时间上下限

`min` / `max` 的类型为 `string`，默认不限制；格式固定为 24 小时制 `HH:mm` 或 `HH:mm:ss`，不受 `format` 或 `use12Hours` 影响，包含端点。`HH:mm` 的秒视为 00。范围的两个端点分别校验；`showNextDay` 不把边界变成跨午夜区间。`min > max` 时没有可提交时间。无法解析的边界按未设置处理。

动态修改边界不会改写外部模型。提交须同时满足边界、步长和禁用回调；不显示秒时按秒为 00 校验。列表粗粒度列在整个小时/分钟都越界时禁用，最终确认仍校验完整时间。隐藏禁用项使用 `hide-disabled-options`。

<demo src="./__demos__/bounds.vue"></demo>

### 纯面板事件与插槽边界

`TimePicker` / `TimeRangePicker` 不管理字段或弹层；`open`、`size`、`variant`、清除和浮层配置应传给 `Time` / `TimeRange`。

- `select(value, date)`：修改草稿。
- `change(value, date)`：有效确认且值变化时触发，并更新模型。
- `confirm(value, date)`：每次有效确认均触发，包括值未变化；`disableConfirm` 模式在有效选择提交时也触发。禁用、只读或无效草稿不会触发。
- `extra`：附加说明内容。
- `actions({ confirm, canConfirm, value })`：替换默认操作栏；`value` 是草稿，调用 `confirm()` 提交，并根据 `canConfirm` 禁用按钮。

单时间事件值为格式化字符串及 Date；范围事件值为对应数组。纯面板不再派发 `open-change`、`update:open` 或 `clear`。


### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 绑定值 | `(string \| number \| Date)[]` | `-` |
| `format` | 展示格式 | `string` | `-` |
| `use12-hours` | 12 小时制 | `boolean` | `false` |
| `hide-disabled-options` | 隐藏禁用时间选项 | `boolean` | `false` |
| `show-next-day` | 结束早于开始时显示「次日」，并关闭确认时的起止交换 | `boolean` | `false` |
| `disable-confirm` | 跳过确认 | `boolean` | `false` |
| `disabled` | 禁用 | `boolean` | `false` |
| `step` | 时分秒步长 | `object` | `-` |
