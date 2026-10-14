---
title: DateRangePicker 日期范围面板
description: '日期范围选择面板（默认无触发器）。字段请使用 DateRange。'
permalink: /components/date-range-picker/
---

# DateRangePicker

日期范围选择**面板**（默认无触发器）。

表单字段请使用 [`DateRange`](/components/date-range/)。单日期面板请使用 [`DatePicker`](/components/date-picker/)。

## 案例

### 字段与嵌入式面板

字段管理输入与浮层，纯面板直接嵌入页面。日历周起点统一为 day-start-of-week（数字 0～6，0 为周日），动态修改立即生效。

<demo src="./__demos__/entry-boundary.vue"></demo>

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

纯面板不接收 open/default-open、popup-container、placement、trigger-props、placeholder、variant、clearable 等字段/浮层属性。浮层配置请使用 Date/DateRange 的 popup-props；输入可编辑性使用字段 input-editable。确认区只由 disable-confirm 控制，不再使用 show-confirm-btn。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 绑定值 | `(Date \| string \| number)[]` | `-` |
| `type` | 面板类型 | `date \| week \| month \| year \| quarter` | `date` |
| `format` | 展示格式 | `string` | `-` |
| `day-start-of-week` | 每周第一天（仅日历），整数 0～6 | `DateWeekStart` | `0` |
| `readonly` | 只读，不更改选择 | `boolean` | `false` |
| `time-picker-props` | 本库时间面板展示选项 | `Partial<TimePickerProps>` | `-` |
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

## 公共入口与类型

根入口和 date-range 子路径均导出 DateRangePicker、DateRangePickerProps、DateRangePickerInstance、DateRangePickerType、DateRangePickerOptions、DateRangePickerEmits。面板可以单独 app.use 安装，也可使用 DateRange.Picker。Options 只允许展示配置，不含模型、格式、边界和禁用规则。没有独立的 date-picker/date-range-picker npm 子路径。

两端共同支持 shortcuts/shortcuts-position、picker-value/default-picker-value、preview-shortcut、abbreviation、exchange-time。移动端 presentation、multiple/range、触摸手势及面板外观为真实展示差异，不把差集机械补成空 API。

## 快捷选项与视口

与 DatePicker 使用同一份独立复制的快捷项与视口控制器；范围值及 picker-value 均包含两个日期，锁定端点不能被快捷项改写。详见 [快捷选项与日历视口](/components/date-picker/#快捷选项与日历视口)。

### 交互时间交换

exchange-time 默认 true，反序交互交换整个日期时间端点；false 只交换日期，保留起止位置的时间。重排后继续校验端点规则、时间禁用和锁定端点；模型、手输与快捷项不自动重排。show-current 仅控制当前日期高亮，范围面板不提供 show-now-button。详见 [当前日期与范围策略](/components/date-picker/#当前日期与范围策略)。

### 语言与嵌套日历参数

日期标签、标题和动作接入各库的全局 Locale 与既有 Provider。Cedar 删除日期组件级 `locale`，不保留覆盖字典或兼容别名。切换语言不会选择或提交日期。

### 内嵌时间与滚轮展示

`time-picker-props` 使用 `DateTimePickerOptions`：`use12Hours`、`step`、`hideDisabledOptions`、`class`、`style`。仅配置时间展示；日期值、格式/秒精度、约束和确认仍由日期所有者管理。`step` 负责展示采样，不静默修正外部值。未知参数及监听函数不转发。

### 日期语言的实例隔离

日期所有者读取本库全局 Locale/Provider，周起始日由各实例 `day-start-of-week` 管理。不切换宿主 Dayjs 默认语言，也不覆盖宿主基础语言配置；只在各库命名空间下注册日期语言元数据，组件实例与源码不跨库共享。

`value-format` 是稳定英文日期协议（包括月份名称 token），`format` 的显示及手输文本使用界面语言。切换语言不会改写模型，也不会令英文月份名称模型失效。默认数字协议、Date 对象、时间戳不变。中文核心语言与 Maple 内置语言数据已接入；其他日期格式优先使用已注册 Dayjs 语言数据，未加载的语言安全回退英文。

周号和周比较不再依赖全局周起始设置，跨年同周号不能被误判成同一周。两个不同周起始实例的挂载、更新和卸载互不影响。
