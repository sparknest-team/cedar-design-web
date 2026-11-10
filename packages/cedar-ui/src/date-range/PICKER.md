---
title: DateRangePicker 日期范围面板
description: '日期范围选择面板（默认无触发器）。字段请使用 DateRange。'
permalink: /components/date-range-picker/
---

# DateRangePicker

日期范围选择**面板**（默认无触发器）。

### 快捷预览宽限与表头结算（2026-10-16）

离开快捷项后的100ms是交互宽限，不是CSS动画结束时间，不提交模型。新预览／单元格选择／配置或模型变化、停用卸载会使旧等待失效；旧回调不能清新预览或输入草稿。表头渲染等待按原预览归属一次消费，离开后的宽限期仍可正常显示预览表头；激活不恢复旧任务。



表单字段请使用 [`DateRange`](/components/date-range/)。单日期面板请使用 [`DatePicker`](/components/date-picker/)。

## 基础示例

### 基本用法

<demo src="./__demos__/picker/basic.vue"></demo>

## 日期视图与展示

### 选择类型

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `type` | 面板类型 | 选择类型、窄屏与组合面板 |
| `disable-confirm` | 选择后立即提交 | 窄屏与组合面板 |
| `show-time` | 选择时间 | 窄屏与组合面板 |
<!-- demo-config-notes:end -->

通过 `type` 切换日 / 周 / 月 / 年 / 季度范围。

<demo src="./__demos__/picker/mode.vue"></demo>

### 窄屏与组合面板

独立面板随容器宽度收缩；范围日历在空间不足时上下排列。可切换快捷项位置，检查时间、导航与确认操作。

<demo src="../date/picker/__demos__/responsive-panels.vue"></demo>

## 时间与选择规则

### 禁用部分日期

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `disabled-date` | 禁用日期 | 禁用部分日期 |
| `show-time` | 选择时间 | 带时间 |
| `default-value` | 非受控初始值，仅初始化读取 | 带时间 |
| `disable-confirm` | 选择后立即提交 | 端点锁定 |
| `disabled` | 禁用 | 端点锁定 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/picker/disabled-parts.vue"></demo>

### 带时间

<demo src="./__demos__/picker/show-time.vue"></demo>

### 端点锁定

双锁不拦截父级主动更新模型，但日期与确认保持禁用；外部更新后解锁起点，只恢复起点编辑，不自动提交。此时选择16并确认保留新终点22，不恢复旧终点15。

点击“外部改为18~~22”直接更新父模型：未确认的旧草稿随之同步，锁定端以新模型为基准；外部更新不增加选择或确认次数。之后选择24并确认，只提交18~~24，不恢复旧起点。

先编辑草稿再锁定该端，不代表授权草稿覆盖已提交端点：只要锁定端草稿与模型不同，确认保持不可用。解除锁定保留草稿并恢复确认，但本身不提交，仍需显式确认。

逆序候选如果会交换锁定端，必须在写入内部日历草稿前拒绝；已提交范围与当前展示草稿均不改变，之后的合法选择仍可确认。范围排序不能静默移动锁定端。

本例显式设置 disable-confirm=false。仅一端锁定时，单次日期选择只编辑未锁端，不重新开始两次点击选范围；双锁时日期候选同步禁用语义，确认不可用。解除锁定恢复编辑，本身不提交。

`disabled=[起点锁定, 终点锁定]` 保留已提交端点，只修改另一端的草稿；确认后才回写模型。切换锁定本身不提交；两端都锁定时不能选择。此处是独立面板，不提供弹层取消链。

<demo src="./__demos__/picker/endpoint-lock.vue"></demo>

## 快捷工具与定制

### 字段与嵌入式面板

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `day-start-of-week` | 每周第一天（仅日历），整数 0～6 | 字段与嵌入式面板 |
| `disable-confirm` | 选择后立即提交 | 字段与嵌入式面板 |
| `disabled-date` | 禁用日期 | 字段与嵌入式面板 |
<!-- demo-config-notes:end -->

字段管理输入与浮层，纯面板直接嵌入页面。日历周起点统一为 day-start-of-week（数字 0～6，0 为周日），动态修改立即生效。

本例通过 `actions` 插槽调用 `confirm`，并把 `disabled` 绑定到提交按钮。选择草稿不更新“已提交”，确认后才写回；动态收紧边界不会清除已有模型，但不合法草稿不能提交。双日历两侧的月份可能不同，请依据各自标题选择日期。仅占位而无导航回调的箭头禁用，并退出 Tab 顺序及无障碍树。

<demo src="./__demos__/entry-boundary.vue"></demo>

“禁用20日结束”动态改变 `disabled-date` 回调：先选10~20草稿，再启用禁用，提交不可用且已提交值不变；解除禁用只恢复确认资格，不自动提交。禁用只作用于结束端，不应误禁起点20日。

The “disable day 20 as the end” switch changes `disabled-date` dynamically. A pending 10–20 range cannot commit while blocked; the committed model stays unchanged. Unblocking only restores confirmation eligibility, without committing. Day 20 remains valid as the start.

## 阅读方向

范围值始终保持 `[开始, 结束]`，切换阅读方向不会交换端点或提交草稿。日历范围连接线与边界圆角跟随阅读方向；分页网格的左右键按视觉方向移动焦点，上下键保持日期行序。Maple 的端点编辑和连续范围高亮是不同展示路径。显式 `shortcuts-position="left|right"` 保持物理侧；弹层继承字段来源方向。

## API

### DateRangePicker Props

纯面板不接收 open/default-open、popup-container、placement、trigger-props、placeholder、variant、clearable 等字段/浮层属性。浮层配置请使用 Date/DateRange 的 popup-props；输入可编辑性使用字段 input-editable。确认区只由 disable-confirm 控制。

| 参数                | 说明                            | 类型                                       | 默认值  |
| ------------------- | ------------------------------- | ------------------------------------------ | ------- |
| `model-value`       | 绑定值                          | `(Date \| string \| number)[]`             | `-`     |
| `type`              | 面板类型                        | `date \| week \| month \| year \| quarter` | `date`  |
| `format`            | 展示格式                        | `string`                                   | `-`     |
| `day-start-of-week` | 每周第一天（仅日历），整数 0～6 | `DateWeekStart`                            | `0`     |
| `readonly`          | 只读，不更改选择                | `boolean`                                  | `false` |
| `time-picker-props` | 本库时间面板展示选项            | `Partial<TimePickerProps>`                 | `-`     |
| `show-time`         | 选择时间                        | `boolean`                                  | `false` |
| `disabled`          | 禁用                            | `boolean \| boolean[]`                     | `-`     |
| `disabled-date`     | 禁用日期                        | `Function`                                 | `-`     |

### 日期族统一契约

| 参数              | 说明                                                    | 类型                                             | 默认值  |
| ----------------- | ------------------------------------------------------- | ------------------------------------------------ | ------- |
| `default-value`   | 非受控初始值，仅初始化读取                              | DateValue / DateValue[]                          | —       |
| `value-format`    | 模型与事件的格式，可为自定义日期格式、Date 或 timestamp | string                                           | 随 type |
| `min` / `max`     | 包含端点的边界；字符串按 value-format 解析              | DateValue                                        | —       |
| `disabled-time`   | 当前日期、端点的时间禁用列表                            | (date: Date, side: DateSide) => DateDisabledTime | —       |
| `disable-confirm` | 选择后立即提交                                          | boolean                                          | true    |

`DateValue = Date | string | number`。单值清除为 undefined，范围清除为 []。
`disabledDate(date, side)` 和 `disabledTime(date, side)` 的 date 始终为 Date，side 为 start/end。
时间回调返回 `disabledHours()`、`disabledMinutes(hour)`、`disabledSeconds(hour, minute)` 数字列表。
非法日期、不完整或逆序范围不能提交；确认时重新验证动态禁用规则。范围锁定端点不能被清除或改动。
嵌套面板 props 只配置展示，不得覆盖顶层 model-value、格式、边界、禁用规则或控制事件。

### DateRangePicker Events

| 事件                 | 说明                    | 参数                              |
| -------------------- | ----------------------- | --------------------------------- |
| `update:model-value` | 写入模型                | value                             |
| `select`             | 选择草稿，不等于提交    | value, date(s), formatted text(s) |
| `change`             | 有效值正式变化          | value, date(s), formatted text(s) |
| `confirm`            | 确认有效选择，不使用 ok | value, date(s), formatted text(s) |

设置 `:disable-confirm="false"` 显示确认区；`actions` 插槽提供 `{ confirm, disabled }`，自定义操作仍须调用 confirm 完成校验。

## 公共入口与类型

根入口和 date-range 子路径均导出 DateRangePicker、DateRangePickerProps、DateRangePickerInstance、DateRangePickerType、DateRangePickerOptions、DateRangePickerEmits。面板可以单独 app.use 安装，也可使用 DateRange.Picker。Options 只允许展示配置，不含模型、格式、边界和禁用规则。没有独立的 date-picker/date-range-picker npm 子路径。

两端共同支持 shortcuts/shortcuts-position、picker-value/default-picker-value、preview-shortcut、abbreviation、exchange-time。移动端 presentation、multiple/range、触摸手势及面板外观为真实展示差异，不把差集机械补成空 API。

## 快捷选项与视口

范围值及 picker-value 均包含两个日期，锁定端点不能被快捷项改写。详见 [快捷选项与日历视口](/components/date-picker/#快捷选项与日历视口)。

### 交互时间交换

exchange-time 默认 true，反序交互交换整个日期时间端点；false 只交换日期，保留起止位置的时间。重排后继续校验端点规则、时间禁用和锁定端点；模型、手输与快捷项不自动重排。show-current 仅控制当前日期高亮，范围面板不提供 show-now-button。详见 [当前日期与范围策略](/components/date-picker/#当前日期与范围策略)。

### 语言与嵌套日历参数

日期标签、标题和操作按钮的语言由全局 Locale 和 Provider 配置。切换语言不会选择或提交日期。

### 内嵌时间与滚轮展示

内嵌时间列的选择与日期列使用同一草稿事务；默认修改起点或终点时间后仍需外层确认，不会丢失时间选择，也不会提前写回模型。

Embedded time columns and date columns share one draft transaction. By default, changing either endpoint time requires the outer confirmation; the edit is preserved without committing early.

`time-picker-props` 使用 `DateTimePickerOptions`：`use12Hours`、`step`、`hideDisabledOptions`、`class`、`style`。仅配置时间展示；日期值、格式/秒精度、约束和确认仍由日期所有者管理。`step` 负责展示采样，不静默修正外部值。未知参数及监听函数不转发。

### 日期语言的实例隔离

日期组件使用当前库的 Locale/Provider 配置，周起始日由各实例的 `day-start-of-week` 控制，不会修改应用中 Dayjs 的默认语言或基础语言配置。

`value-format` 是稳定英文日期协议（包括月份名称 token），`format` 的显示及手输文本使用界面语言。切换语言不会改写模型，也不会令英文月份名称模型失效。默认数字协议、Date 对象、时间戳不变。中文核心语言与 Maple 内置语言数据已接入；其他日期格式优先使用已注册 Dayjs 语言数据，未加载的语言安全回退英文。

周号和周比较使用各实例的周起始设置，跨年同周号不能被误判成同一周。两个不同周起始实例的挂载、更新和卸载互不影响。

## CSS Variables

<!-- component-css-variables:start -->

本组件未声明独立的公共 CSS 变量。请使用本页公开的配置与布局入口。 组合控件的外观复用 `date` 的公共变量；共享变量可能同时影响同一 DOM 子树中的其他控件。

内部自定义属性与测量中间值属于实现细节，不作为业务定制 API。

<!-- component-css-variables:end -->
