---
permalink: /components/date-picker/
---

# DatePicker

日期选择**面板**（默认无触发器）。通过 `type` 切换年/月/周/日/季度。

### 单值快捷预览等待（2026-10-16）

离开快捷项后的100ms为悬停交互宽限，不是CSS动画完成时长；不提交模型。新预览、关闭、禁用、只读、关闭快捷预览、模型替换、停用／卸载使旧等待失效；已取消／已消费回调不能清掉新预览。重新激活只接受新hover，不恢复旧等待。保留100ms默认值与公开API，无新CSS Token。

表单字段请使用 [`Date`](/components/date/)；日期范围字段请使用 [`DateRange`](/components/date-range/)；范围面板请使用 [`DateRangePicker`](/components/date-range-picker/)。

根入口和 date 子路径均导出 DatePicker、DatePickerProps、DatePickerInstance、DatePickerType、DatePickerOptions、DatePickerEmits。面板可以单独 app.use 安装，也可使用 Date.Picker。Options 只允许展示配置，不含模型、格式、边界和禁用规则。没有独立的 date-picker/date-range-picker npm 子路径。

两端共同支持 abbreviation；日期语言使用全局 Locale。移动端 presentation、multiple/range、触摸手势及面板外观为真实展示差异，不把差集机械补成空 API。

## 基础示例

### 基本用法

默认只渲染面板。

<demo src="./__demos__/basic.vue"></demo>

## 日期视图与展示

### 选择类型

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `type` | 面板类型 | 选择类型、月份标签、日期语言的实例隔离 |
| `disable-confirm` | 选择后立即提交 | 月份标签、窄屏与组合面板 |
| `day-start-of-week` | 每周第一天（仅日历），整数 0～6 | 日期语言的实例隔离 |
| `show-time` | 选择时间 | 窄屏与组合面板 |
<!-- demo-config-notes:end -->

通过 `type` 切换面板类型。

<demo src="./__demos__/mode.vue"></demo>

### 月份标签

`abbreviation`（boolean，默认 `true`）控制日历月份网格的缩写；`false` 使用当前 Locale 的完整月份名。运行时修改立即生效，不改变值，也不触发选择事件。此开关不影响星期标签、标题、滚轮列或值格式。范围日历以顶层选项为准，嵌套日历参数不能覆盖。

<demo src="./__demos__/month-labels.vue"></demo>

### 语言与嵌套日历参数

日期标签、标题和动作接入各库的全局 Locale 与既有 Provider。Cedar 删除日期组件级 `locale`，不保留覆盖字典或兼容别名。切换语言不会选择或提交日期。

### 日期语言的实例隔离

日期所有者读取本库全局 Locale/Provider，周起始日由各实例 `day-start-of-week` 管理。不切换宿主 Dayjs 默认语言，也不覆盖宿主基础语言配置；只在各库命名空间下注册日期语言元数据，组件实例与源码不跨库共享。

`value-format` 是稳定英文日期协议（包括月份名称 token），`format` 的显示及手输文本使用界面语言。切换语言不会改写模型，也不会令英文月份名称模型失效。默认数字协议、Date 对象、时间戳不变。中文核心语言与 Maple 内置语言数据已接入；其他日期格式优先使用已注册 Dayjs 语言数据，未加载的语言安全回退英文。

周号和周比较不再依赖全局周起始设置，跨年同周号不能被误判成同一周。两个不同周起始实例的挂载、更新和卸载互不影响。

<demo src="./__demos__/locale-isolation.vue"></demo>

### 编辑容器与面板复用

DatePicker / DateRangePicker 独立使用时自带表面背景和操作区；actions 插槽替换整个默认操作区。嵌入 Form 的弹层时，统一外壳负责标题、关闭与底部确认，日期面板只贡献此刻等辅助操作，避免重复确认。关闭放弃草稿，确认失败仍保留草稿。

### 窄屏与组合面板

独立面板随容器宽度收缩；范围日历在空间不足时上下排列。可切换快捷项位置，检查时间、导航与确认操作。

<demo src="./__demos__/responsive-panels.vue"></demo>

## 时间与选择规则

### 带时间

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `show-time` | 选择时间 | 带时间、禁用部分日期、内嵌时间与滚轮展示 |
| `format` | 展示格式 | 带时间、内嵌时间与滚轮展示 |
| `value-format` | 模型与事件的格式，可为自定义日期格式、Date 或 timestamp | 当前日期与范围策略、内嵌时间与滚轮展示 |
| `default-value` | 非受控初始值，仅初始化读取 | 带时间 |
| `disabled-date` | 禁用日期 | 禁用部分日期 |
| `disabled-time` | 当前日期、端点的时间禁用列表 | 禁用部分日期 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/show-time.vue"></demo>

### 禁用部分日期

<demo src="./__demos__/disabled-parts.vue"></demo>

### 当前日期与范围策略

<demo src="./__demos__/current-range.vue"></demo>

| 属性              | 说明                                               | 默认值 |
| ----------------- | -------------------------------------------------- | ------ |
| `show-current`    | 日历中高亮当前日/月/年，不产生选择或提交           | true   |
| `show-now-button` | DatePicker 单选面板的选择当前按钮，多选/范围不显示 | true   |

选择当前按面板 type、时间精度与 value-format 生成候选，遵守 disabled/readonly、min/max、日期和时间禁用规则及 disable-confirm。disable-confirm=false 时只选择草稿，确认才提交；挂载或改变高亮均不写模型。字段通过 date-picker-props 配置。旧 showNowBtn 名称已删除，不保留别名。

actions 插槽提供 `{ confirm, disabled, selectNow, nowDisabled }`。自定义按钮应调用这两个受保护动作，不应直接写模型。

DateRangePicker 的 `exchange-time` 默认 true。反序交互日期在 true 时交换整个日期时间端点；false 时只交换日期、保留起止位置的时分秒。结果仍须通过端点规则和锁定端点校验。外部模型、手输值和快捷项不静默重排；保留时间位置后同日时间仍逆序的候选不能提交。Cedar 原 ConfigProvider.exchangeTime 全局覆盖已移除。

### 内嵌时间与滚轮展示

`time-picker-props` 使用 `DateTimePickerOptions`：`use12Hours`、`step`、`hideDisabledOptions`、`class`、`style`。仅配置时间展示；日期值、格式/秒精度、约束和确认仍由日期所有者管理。`step` 负责展示采样，不静默修正外部值。未知参数及监听函数不转发。

<demo src="./__demos__/time-presentation.vue"></demo>

## 快捷工具与定制

### 预设快捷选择

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `disable-confirm` | 选择后立即提交 | 快捷选项与日历视口、字段与嵌入式面板 |
| `show-time` | 选择时间 | 预设快捷选择 |
| `day-start-of-week` | 每周第一天（仅日历），整数 0～6 | 字段与嵌入式面板 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/short-cuts.vue"></demo>

### 额外页脚

<demo src="./__demos__/footer.vue"></demo>

### 快捷选项与日历视口

<demo src="./__demos__/panel-tools.vue"></demo>

两端均导出 `DateShortcut`、`DateShortcutsPosition`。快捷项包含 `label`、`value`（值或按需执行的函数）、可选 `format`（快捷值的输入格式）与 `disabled`；输出使用面板的 `value-format`。悬停或聚焦只预览，不提交；点击走普通日期选择的校验与确认流程。设置 `preview-shortcut=false` 仅关闭预览。`shortcuts-position` 支持 left/bottom/right，移动端建议 bottom。

`picker-value` 管理日历视口，不是选中值；`default-picker-value` 仅初始化读取。范围视口为两个日期。导航发出 `update:picker-value` 和 `picker-value-change(value, dates, texts)`，不触发 `change` 或 `select`；受控更新不被接纳时保留原视口。`select-shortcut(shortcut)` 仅在快捷项通过校验并被接受后触发。移动端滚轮/时钟展示不提供日历月份导航。字段通过 `date-picker-props` 配置这些选项，转发上述三个事件。

### 字段与嵌入式面板

字段管理输入与浮层，纯面板直接嵌入页面。日历周起点统一为 day-start-of-week（数字 0～6，0 为周日），动态修改立即生效。

本例纯面板显式设置 `:disable-confirm="false"`：点击日期只修改草稿，“已提交”在确认后更新。切换周起点或移除边界不提交新值；恢复边界不会清除已有模型，超出新边界的草稿不能确认，请重新选择合法日期。

面板箭头提供可访问名称，并跟随组件语言系统切换；日面板为上一月/下一月，月份面板为上一年/下一年，年份列表为上一组/下一组年份。月份预览变化不等于提交日期。

<demo src="./__demos__/entry-boundary.vue"></demo>

## 阅读方向

组件继承最近的 `dir="ltr|rtl"`，支持运行时切换与局部方向覆盖。日历日期、月份、年份按阅读顺序排列，前后翻页图形随方向调整，日期值与起止顺序保持原义。分页网格中左右键按视觉方向移动焦点，上下键移动一行，Home/End 移至当前行首尾并跳过禁用项；焦点移动不提交，Enter/Space 沿用选值行为，边界停留在当前显示网格。快捷区 `shortcuts-position="left|right"` 保持物理侧，底部使用 `bottom`。弹层继承字段来源方向。

## API

### Props

纯面板不接收 open/default-open、popup-container、placement、trigger-props、placeholder、variant、clearable 等字段/浮层属性。浮层配置请使用 Date/DateRange 的 popup-props；输入可编辑性使用字段 input-editable。确认区只由 disable-confirm 控制，不再使用 show-confirm-btn。

| 参数                | 说明                            | 类型                                       | 默认值  |
| ------------------- | ------------------------------- | ------------------------------------------ | ------- |
| `model-value`       | 绑定值                          | `Date \| string \| number`                 | `-`     |
| `type`              | 面板类型                        | `date \| week \| month \| year \| quarter` | `date`  |
| `format`            | 展示格式                        | `string \| Function`                       | `-`     |
| `day-start-of-week` | 每周第一天（仅日历），整数 0～6 | `DateWeekStart`                            | `0`     |
| `readonly`          | 只读，不更改选择                | `boolean`                                  | `false` |
| `time-picker-props` | 本库时间面板展示选项            | `Partial<TimePickerProps>`                 | `-`     |
| `show-time`         | 选择时间                        | `boolean`                                  | `false` |
| `disabled`          | 禁用                            | `boolean`                                  | `false` |
| `disabled-date`     | 禁用日期                        | `Function`                                 | `-`     |

桌面日历展示能力（快捷选择、页脚和单元格插槽）保留在独立的 presentation 实现中。

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

### Events

| 事件                 | 说明                    | 参数                              |
| -------------------- | ----------------------- | --------------------------------- |
| `update:model-value` | 写入模型                | value                             |
| `select`             | 选择草稿，不等于提交    | value, date(s), formatted text(s) |
| `change`             | 有效值正式变化          | value, date(s), formatted text(s) |
| `confirm`            | 确认有效选择，不使用 ok | value, date(s), formatted text(s) |

设置 `:disable-confirm="false"` 显示确认区；`actions` 插槽提供 `{ confirm, disabled }`，自定义操作仍须调用 confirm 完成校验。
