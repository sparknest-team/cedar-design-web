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

通过 `type` 切换日 / 周 / 月 / 年 / 季度范围。

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
| `type` | 面板类型 | `date \| week \| month \| year \| quarter` | `date` |
| `format` | 展示格式 | `string` | `-` |
| `show-time` | 选择时间 | `boolean` | `false` |
| `disabled` | 禁用 | `boolean \| boolean[]` | `-` |
| `disabled-date` | 禁用日期 | `Function` | `-` |


### 日期族统一契约

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `default-value` | 非受控初始值，仅初始化读取 | DateValue / DateValue[] | — |
| `value-format` | 模型与事件的格式，可为自定义日期格式、Date 或 timestamp | string | 随 type |
| `use-seconds` | 默认时间精度；显式 format 优先 | boolean | true |
| `min` / `max` | 包含端点的边界；字符串按 value-format 解析 | DateValue | — |
| `disabled-time` | 当前日期、端点的时间禁用列表 | (date: Date, side: DateSide) => DateDisabledTime | — |
| `disable-confirm` | 选择后立即提交 | boolean | true |


`DateValue = Date | string | number`。单值清除为 undefined，范围清除为 []。
`disabledDate(date, side)` 和 `disabledTime(date, side)` 的 date 始终为 Date，side 为 start/end。
时间回调返回 `disabledHours()`、`disabledMinutes(hour)`、`disabledSeconds(hour, minute)` 数字列表。
非法日期、不完整或逆序范围不能提交；确认时重新验证动态禁用规则。范围锁定端点不能被清除或改动。
嵌套面板 props 只配置展示，不得覆盖顶层 model-value、格式、边界、禁用规则或控制事件。

### Events

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| `update:model-value` | 写入模型 | value |
| `select` | 选择草稿，不等于提交 | value, date(s), formatted text(s) |
| `change` | 有效值正式变化 | value, date(s), formatted text(s) |
| `confirm` | 确认有效选择，不使用 ok | value, date(s), formatted text(s) |

设置 `:disable-confirm="false"` 显示确认区；`actions` 插槽提供 `{ confirm, disabled }`，自定义操作仍须调用 confirm 完成校验。
