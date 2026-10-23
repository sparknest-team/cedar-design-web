---
title: Date 日期
description: '表单日期字段。通过 type 切换年/月/周/日/季度；面板请使用 DatePicker。'
permalink: /components/date/
---

# Date

展开时，原生 combobox 通过 `aria-controls` 关联当前实例的命名弹层；关闭后同步更新状态并移除关联。`aria-label`、`aria-describedby` 可传递给原生控件。自定义 selected/触发插槽需自行保留可访问名称、键盘操作和状态关联。

表单日期字段（带触发器）。内部使用 `DatePicker`。

纯面板请使用 [`DatePicker`](/components/date-picker/)（默认无触发器）。日期范围字段请使用 [`DateRange`](/components/date-range/)。

## 案例

### 基本用法

<demo src="./__demos__/basic.vue"></demo>

### 清除与禁用

<demo src="./__demos__/status.vue"></demo>

### 尺寸

<demo src="./__demos__/size.vue"></demo>

### 表单控件尺寸对照

切换五档 size 和三种字段变体，比较 Input、Button、Select、日期时间及其他单行表单控件的高度。Button 在这里固定使用 outline。DatePicker/TimePicker 是面板，此处使用带输入框的 Date/Time 字段。示例同时展示有值、可清空、标签删除与长标签多选；Select/Cascader 设置 tag-nowrap 时保持同档高度，长标签文字省略、删除图标保留；标签行可横向滚动，清空按钮和箭头固定在外侧。被省略的标签正文支持悬停、键盘聚焦或点按查看完整文字，点外部或按 Esc 关闭，不改变选中值。可清空后恢复选中值重复比较。多行文本和允许换行的多选内容按内容撑高。

<demo src="../field-decorator/__demos__/control-sizes.vue"></demo>

### 字段与面板边界

字段保留输入和浮层状态；嵌套面板参数只接受展示选项，不能覆盖顶层模型、格式或校验规则。

<demo src="./picker/__demos__/entry-boundary.vue"></demo>

### 日期值格式

两端使用独立复制的日期值、约束、面板和字段主体。年/月/日模型格式为 `YYYY` / `YYYY-MM` / `YYYY-MM-DD`，日期时间默认含秒；`:use-seconds="false"` 使用分钟精度。`format` 只控制显示，`value-format` 控制模型和事件，支持自定义格式、`Date` 与 `timestamp`。Cedar 另提供周/季度面板；Maple 另提供移动端滚轮和时钟展示。

### 统一字段与提交

Date / DateRange / Time / TimeRange 使用相同的 PickerField → FieldDecorator 字段链路。桌面支持键入有效值后回车或失焦提交；有确认按钮的面板只在确认时写回，Escape 或外部关闭丢弃草稿。清除立即提交空值。面板组件不再提供 `hideTrigger` 双模式，自定义触发器使用字段的默认插槽。

<demo src="./__demos__/field-protocol.vue"></demo>

### 受控关闭被拒绝

父级可以拒绝 `update:open(false)`，此时面板仍展开。一次选择只能提交并请求关闭一次；受控模型回写相同值不会重置已确认状态。在保持展开时选择新日期会开启新事务，可以再次确认。示例显示模型、提交次数与关闭请求次数。

<demo src="./__demos__/rejected-close.vue"></demo>

### 选择类型

通过 `type` 切换日 / 周 / 月 / 年 / 季度。

<demo src="./__demos__/type.vue"></demo>

### 带时间

<demo src="./__demos__/show-time.vue"></demo>

### 模型格式与显示格式

<demo src="./__demos__/value-formats.vue"></demo>

### 外观组合

适用于选择单个日期。调整变体、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

<demo src="./__demos__/appearance-lab.vue"></demo>

### 交互状态切换

适用于选择单个日期。调整禁用、只读、错误反馈，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

<demo src="./__demos__/state-lab.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

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
| `date-picker-props` | 面板展示选项 | `DatePickerOptions` | `{}` |


### 日期族统一契约

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `default-value` | 非受控初始值，仅初始化读取 | DateValue / DateValue[] | — |
| `value-format` | 模型与事件的格式，可为自定义日期格式、Date 或 timestamp | string | 随 type |
| `use-seconds` | 默认时间精度；显式 format 优先 | boolean | true |
| `min` / `max` | 包含端点的边界；字符串按 value-format 解析 | DateValue | — |
| `disabled-time` | 当前日期、端点的时间禁用列表 | (date: Date, side: DateSide) => DateDisabledTime | — |
| `disable-confirm` | 选择后立即提交 | boolean | false |
| `default-open` | 非受控初始展开 | boolean | false |
| `popup-props` | Trigger 展示配置；不允许覆盖展开状态及规则 | object | {} |
| `popup-container` | 挂载目标；顶层优先，支持 false 原地渲染 | string / HTMLElement / (() => HTMLElement) / false | — |

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
| `update:open` / `open-change` | 展开状态变化 | open: boolean |
| `clear` | 清除 | 无 |
| `focus` / `blur` | 整个字段的焦点边界 | 无 |
| `click` | 点击字段 | event |

桌面支持键盘编辑。默认面板先编辑草稿再确认；设置 disable-confirm 可直接提交。Escape 或关闭会丢弃草稿。focus(index = 0) 定位起止输入，blur() 关闭浮层。

## 月份标签

字段通过 `date-picker-props`（Date）或 `date-range-picker-props`（DateRange）配置面板的该选项。

`abbreviation`（boolean，默认 `true`）控制日历月份网格的缩写；`false` 使用当前 Locale 的完整月份名。运行时修改立即生效，不改变值，也不触发选择事件。此开关不影响星期标签、标题、滚轮列或值格式。范围日历以顶层选项为准，嵌套日历参数不能覆盖。

<demo src="./picker/__demos__/month-labels.vue"></demo>

### 语言与嵌套日历参数

日期标签、标题和动作接入各库的全局 Locale 与既有 Provider。Cedar 删除日期组件级 `locale`，不保留覆盖字典或兼容别名。切换语言不会选择或提交日期。

### 内嵌时间与滚轮展示

`time-picker-props` 使用 `DateTimePickerOptions`：`use12Hours`、`step`、`hideDisabledOptions`、`class`、`style`。仅配置时间展示；日期值、格式/秒精度、约束和确认仍由日期所有者管理。`step` 负责展示采样，不静默修正外部值。未知参数及监听函数不转发。

<demo src="./picker/__demos__/time-presentation.vue"></demo>

### 真实端侧能力

Cedar 不公开 `Date.pickerProps`、`DateRange.pickerProps` 或 `DateRange.datePickerProps`：PC 字段不渲染移动滚轮或范围内部的移动日历插件，原无效参数已删除且无兼容别名。Maple 保留这些真实扩展，使用 DateWheelOptions 与 DateRangeCalendarOptions。两端通过 `Date.datePickerProps` / `DateRange.dateRangePickerProps` 配置完整面板，`timePickerProps` 配置内嵌时间展示。初始日期时间放在顶层 `defaultValue`，不要放在 `timePickerProps.defaultValue` 中。

### 日期语言的实例隔离

日期所有者读取本库全局 Locale/Provider，周起始日由各实例 `day-start-of-week` 管理。不切换宿主 Dayjs 默认语言，也不覆盖宿主基础语言配置；只在各库命名空间下注册日期语言元数据，组件实例与源码不跨库共享。

`value-format` 是稳定英文日期协议（包括月份名称 token），`format` 的显示及手输文本使用界面语言。切换语言不会改写模型，也不会令英文月份名称模型失效。默认数字协议、Date 对象、时间戳不变。中文核心语言与 Maple 内置语言数据已接入；其他日期格式优先使用已注册 Dayjs 语言数据，未加载的语言安全回退英文。

周号和周比较不再依赖全局周起始设置，跨年同周号不能被误判成同一周。两个不同周起始实例的挂载、更新和卸载互不影响。

<demo src="./picker/__demos__/locale-isolation.vue"></demo>

### 周与季度手输

默认周展示 `gggg-wo` 按当前界面语言与实例周起始解析为该周的第一天，模型仍为 `YYYY-MM-DD`。中文周一起始的 `2020-53周` 提交 `2020-12-28`；不存在的周、错误序数后缀不提交。默认季度 `YYYY-[Q]Q`（如 `2025-Q2`）严格解析为首月，模型 `YYYY-MM`（`2025-04`）。手输继续遵守禁用、边界和范围顺序，不自动交换端点。

自定义周/季度展示可以使用 Dayjs 支持的普通日期 token；任意自定义周序数格式没有逆解析协议。`format` 为函数时请设置 `input-editable=false`，通过面板选择。

<demo src="./picker/__demos__/period-text.vue"></demo>

日期字段的可编辑条件由公共所有者统一管理：`input-editable` 默认 true，函数 `format` 不可反解析，因此输入只读。两端单值/范围的 Enter、失焦、组合输入、受控拒绝回写、禁用与范围顺序通过同一组原生输入测试；Maple 多选拼接文本保持只读，由面板选择。

### 手输与面板选择

<demo src="./picker/__demos__/text-entry.vue"></demo>

### 字段视口与快捷项事件

字段通过嵌套 `date-picker-props` 配置 `pickerValue`、`defaultPickerValue` 和快捷项，不新增第二套顶层视口 Prop。嵌套配置里的监听器不会透传；在字段组件上监听以下事件并回写嵌套 `pickerValue`。

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| `update:picker-value` | 请求日历视口更新，不改变选择模型 | value: DateSelection |
| `picker-value-change` | 已请求的视口及展示通知 | value, date(s), formatted text(s) |
| `select-shortcut` | 接受的快捷项，仍遵守字段确认策略 | shortcut: DateShortcut |

受控视口拒绝更新时保持原月份，后续回写才更新；快捷项选择先进入字段草稿，默认确认后提交。滚轮/时钟没有日历月份导航能力。

<demo src="./picker/__demos__/field-panel-tools.vue"></demo>

### 展示模式的所有权

Cedar 只实现桌面日历，不公开移动 `presentation`。Maple 在字段/纯面板根选择真实展示模式；字段嵌套 `DatePickerOptions` / `DateRangePickerOptions` 不包含 presentation，两库复制的过滤器均拒绝嵌套选择器，不通过隐式覆盖保留无效 API。

### 周起始日的响应式展示

`dayStartOfWeek` 更新时，日历表头与日期列位置同步更新，不改变选中值或提交草稿。纯面板使用根属性，字段通过 `datePickerProps` / `dateRangePickerProps` 配置；滚轮视图不使用星期列。

### 动态日期限制

更新或移除 `min` / `max` 会重新计算可选日期，不自动修改已有模型或草稿。面板导航与候选日期校验是不同职责，已有值超出新限制时也不会被静默重写；用户重新选择或确认时按当前限制校验。

### Form 字段展示与确认

本组件支持 `presentation`，字段 > FormItem > Form 逐层继承；未指定时为 `inline`，保留原有交互。支持值：`inline / click / dblclick`。其他编辑展示使用 Cell 入口和一份草稿，确认后才更新 v-model；取消、重置或启用 readPretty 丢弃草稿。

Cedar 使用 presentation="click" / "dblclick" 在原位进入编辑，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。 readPretty 为纯阅读属性，与 readonly、disabled 独立。

`before-commit(value, { previousValue, signal })` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

日期／时间字段在 inline 下沿用原确认策略；在 popover/popup/dialog 中，内部纯面板隐藏确认工具栏，由编辑层提供唯一一组确认／取消。独立 DatePicker、DateRangePicker、TimePicker、TimeRangePicker 保留原有面板 API 和确认行为，不继承 Form 的字段展示。

独立 DatePicker / DateRangePicker 与 inline 共用日历基准宽度（每个 265px）。单日期带时间时，宽屏下日历与时间列左右排列；范围在宽屏保留两个并排日历。面板会按窄容器换行，侧边快捷项另占一列，不压缩日历；确认与 actions 插槽保持由面板自身管理。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。
