---
title: Date 日期
description: '表单日期字段。通过 type 切换年/月/周/日/季度；面板请使用 DatePicker。'
permalink: /components/date/
---

# Date

表单日期字段（带触发器）。内部使用 `DatePicker`。

纯面板请使用 [`DatePicker`](/components/date-picker/)（默认无触发器）。日期范围字段请使用 [`DateRange`](/components/date-range/)。

## 案例

### 日期值格式

两端使用独立复制的日期值、约束、面板和字段主体。年/月/日模型格式为 `YYYY` / `YYYY-MM` / `YYYY-MM-DD`，日期时间默认含秒；`:use-seconds="false"` 使用分钟精度。`format` 只控制显示，`value-format` 控制模型和事件，支持自定义格式、`Date` 与 `timestamp`。Cedar 另提供周/季度面板；Maple 另提供移动端滚轮和时钟展示。

### 统一字段与提交

Date / DateRange / Time / TimeRange 使用相同的 PickerField → FieldDecorator 字段链路。桌面支持键入有效值后回车或失焦提交；有确认按钮的面板只在确认时写回，Escape 或外部关闭丢弃草稿。清除立即提交空值。面板组件不再提供 `hideTrigger` 双模式，自定义触发器使用字段的默认插槽。

<demo src="./__demos__/field-protocol.vue"></demo>

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

### 模型格式与显示格式

<demo src="./__demos__/value-formats.vue"></demo>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 绑定值 | `Date \| string \| number` | `-` |
| `type` | 选择类型 | `date \| week \| month \| year \| quarter` | `date` |
| `open` | 弹层显隐 | `boolean` | `-` |
| `clearable` | 可清除 | `boolean` | `true` |
| `disabled` | 禁用 | `boolean` | `false` |
| `readonly` | 只读 | `boolean` | `false` |
| `size` | 尺寸 | `xs \| sm \| md \| lg \| xl` | `-` |
| `variant` | 输入框变体 | `filled \| outline \| standard` | `filled` |
| `placeholder` | 占位 | `string` | `-` |
| `disabled-date` | 禁用日期 | `Function` | `-` |
| `format` | 展示格式 | `string \| Function` | 随 `type` |
| `show-time` | 选择时间 | `boolean` | `false` |
| `date-picker-props` | 透传给 DatePicker | `object` | `{}` |


### 日期族统一契约

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `default-value` | 非受控初始值，仅初始化读取 | DateValue / DateValue[] | — |
| `value-format` | 模型与事件的格式，可为自定义日期格式、Date 或 timestamp | string | 随 type |
| `use-seconds` | 默认时间精度；显式 format 优先 | boolean | true |
| `min` / `max` | 包含端点的边界；字符串按 value-format 解析 | DateValue | — |
| `disabled-time` | 当前日期、端点的时间禁用列表 | (date: Date, side: DateSide) => DateDisabledTime | — |
| `disable-confirm` | 选择后立即提交 | boolean | false |
| `default-open` | 非受控初始展开 | boolean | false |\n| `popup-props` | Trigger 展示配置；不允许覆盖展开状态及规则 | object | {} |\n| `popup-container` | 挂载目标；顶层优先，支持 false 原地渲染 | string / HTMLElement / (() => HTMLElement) / false | — |

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
| `update:open` / `open-change` | 展开状态变化 | open: boolean |\n| `clear` | 清除 | 无 |\n| `focus` / `blur` | 整个字段的焦点边界 | 无 |\n| `click` | 点击字段 | event |

桌面支持键盘编辑。默认面板先编辑草稿再确认；设置 disable-confirm 可直接提交。Escape 或关闭会丢弃草稿。focus(index = 0) 定位起止输入，blur() 关闭浮层。
