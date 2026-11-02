---
title: DateRange 日期范围
description: "表单日期范围字段。通过 type 切换类型；面板请使用 DateRangePicker。"
permalink: /components/date-range/
---

# DateRange

表单日期范围字段（带触发器）。内部使用 `DateRangePicker`。

纯面板请使用 [`DateRangePicker`](/components/date-range-picker/)（默认无触发器）。

字段通过 `date-picker-props`（Date）或 `date-range-picker-props`（DateRange）配置面板的该选项。

`abbreviation`（boolean，默认 `true`）控制日历月份网格的缩写；`false` 使用当前 Locale 的完整月份名。运行时修改立即生效，不改变值，也不触发选择事件。此开关不影响星期标签、标题、滚轮列或值格式。范围日历以顶层选项为准，嵌套日历参数不能覆盖。

## 基础示例

### 基本用法

<demo src="./__demos__/basic.vue"></demo>

## 外观与日期展示

### 外观配置对比

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置           | 作用                                                    | 相关示例                     |
| -------------- | ------------------------------------------------------- | ---------------------------- |
| `clearable`    | 可清除                                                  | 选择类型、自定义分隔符与占位 |
| `value-format` | 模型与事件的格式，可为自定义日期格式、Date 或 timestamp | 外观配置对比                 |
| `type`         | 选择类型                                                | 选择类型                     |
| `separator`    | 分隔符                                                  | 自定义分隔符与占位           |
| `placeholder`  | 占位                                                    | 自定义分隔符与占位           |

<!-- demo-config-notes:end -->

选择一个对比维度后，同屏展示它的全部可选值；其余配置和内容保持一致。可切换其他配置检查组合效果；输入类预览共享一个值。

<details>
<summary>配置说明与使用限制</summary>

#### 外观组合

适用于预订或查询的起止日期。调整变体、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

</details>

<demo src="./__demos__/appearance-lab.vue"></demo>

### 选择类型

通过 `type` 切换日 / 周 / 月 / 年 / 季度范围。

<demo src="./__demos__/mode.vue"></demo>

### 自定义分隔符与占位

<demo src="./__demos__/separator.vue"></demo>

## 时间与范围规则

### 带时间

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置            | 作用                                                    | 相关示例               |
| --------------- | ------------------------------------------------------- | ---------------------- |
| `format`        | 展示格式                                                | 带时间、边界和端点禁用 |
| `show-time`     | 选择时间                                                | 带时间                 |
| `clearable`     | 可清除                                                  | 带时间                 |
| `value-format`  | 模型与事件的格式，可为自定义日期格式、Date 或 timestamp | 边界和端点禁用         |
| `disabled-date` | 禁用日期                                                | 边界和端点禁用         |

<!-- demo-config-notes:end -->

<demo src="./__demos__/show-time.vue"></demo>

### 边界和端点禁用

桌面日历需要选齐起点和终点后才能确认；点击结束输入可先选终点、再选起点。Escape 关闭时丢弃未确认的范围。

<demo src="./__demos__/boundaries.vue"></demo>

### 语言与嵌套日历参数

日期标签、标题和动作接入各库的全局 Locale 与既有 Provider。Cedar 删除日期组件级 `locale`，不保留覆盖字典或兼容别名。切换语言不会选择或提交日期。

### 内嵌时间与滚轮展示

日期范围的内嵌时间选择也属于外层草稿：修改起点或终点时间不会提前写回，显式确认后才提交；取消保留原模型。日期时间手输的反序范围不会自动交换端点。

Embedded time edits update the outer range draft, not the committed model. Confirm explicitly to submit; cancel preserves the previous value. Reversed date-time text input is rejected rather than reordered.

`time-picker-props` 使用 `DateTimePickerOptions`：`use12Hours`、`step`、`hideDisabledOptions`、`class`、`style`。仅配置时间展示；日期值、格式/秒精度、约束和确认仍由日期所有者管理。`step` 负责展示采样，不静默修正外部值。未知参数及监听函数不转发。

### 真实端侧能力

Cedar 不公开 `Date.pickerProps`、`DateRange.pickerProps` 或 `DateRange.datePickerProps`：PC 字段不渲染移动滚轮或范围内部的移动日历插件，原无效参数已删除且无兼容别名。Maple 保留这些真实扩展，使用 DateWheelOptions 与 DateRangeCalendarOptions。两端通过 `Date.datePickerProps` / `DateRange.dateRangePickerProps` 配置完整面板，`timePickerProps` 配置内嵌时间展示。初始日期时间放在顶层 `defaultValue`，不要放在 `timePickerProps.defaultValue` 中。

### 日期语言的实例隔离

日期所有者读取本库全局 Locale/Provider，周起始日由各实例 `day-start-of-week` 管理。不切换宿主 Dayjs 默认语言，也不覆盖宿主基础语言配置；只在各库命名空间下注册日期语言元数据，组件实例与源码不跨库共享。

`value-format` 是稳定英文日期协议（包括月份名称 token），`format` 的显示及手输文本使用界面语言。切换语言不会改写模型，也不会令英文月份名称模型失效。默认数字协议、Date 对象、时间戳不变。中文核心语言与 Maple 内置语言数据已接入；其他日期格式优先使用已注册 Dayjs 语言数据，未加载的语言安全回退英文。

周号和周比较不再依赖全局周起始设置，跨年同周号不能被误判成同一周。两个不同周起始实例的挂载、更新和卸载互不影响。

### 周与季度手输

默认周展示 `gggg-wo` 按当前界面语言与实例周起始解析为该周的第一天，模型仍为 `YYYY-MM-DD`。中文周一起始的 `2020-53周` 提交 `2020-12-28`；不存在的周、错误序数后缀不提交。默认季度 `YYYY-[Q]Q`（如 `2025-Q2`）严格解析为首月，模型 `YYYY-MM`（`2025-04`）。手输继续遵守禁用、边界和范围顺序，不自动交换端点。

自定义周/季度展示可以使用 Dayjs 支持的普通日期 token；任意自定义周序数格式没有逆解析协议。`format` 为函数时请设置 `input-editable=false`，通过面板选择。

日期字段的可编辑条件由公共所有者统一管理：`input-editable` 默认 true，函数 `format` 不可反解析，因此输入只读。两端单值/范围的 Enter、失焦、组合输入、受控拒绝回写、禁用与范围顺序通过同一组原生输入测试；Maple 多选拼接文本保持只读，由面板选择。

## 值模型与输入

### 字符串模型：年月日、年月与月日范围

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置           | 作用                                                    | 相关示例                                           |
| -------------- | ------------------------------------------------------- | -------------------------------------------------- |
| `format`       | 展示格式                                                | 字符串模型：年月日、年月与月日范围、手输与面板选择 |
| `value-format` | 模型与事件的格式，可为自定义日期格式、Date 或 timestamp | 字符串模型：年月日、年月与月日范围                 |
| `disabled`     | 禁用                                                    | 手输与面板选择                                     |

<!-- demo-config-notes:end -->

`format` 决定显示，`value-format` 决定提交值。下面直接得到 `"2026-09-10"`、`"2026-09"` 或 `["09-10", "10-10"]`，无需将 Date 再转换。日期范围使用数组。`MM-DD` 没有年份，解析时使用当前年，不能表示跨年先后或某个明确年份的 2 月 29 日；有跨年、时区或闰年要求时保留 `YYYY-MM-DD`，在业务提交时单独映射月日。默认仍是 page，未指定 timeZone 使用浏览器本地时区。

<demo src="./__demos__/string-values.vue"></demo>

### 手输与面板选择

<demo src="../date/picker/__demos__/text-entry.vue"></demo>

## 交互与字段配置

### 交互状态对比

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置                      | 作用                                                    | 相关示例                             |
| ------------------------- | ------------------------------------------------------- | ------------------------------------ |
| `open`                    | 弹层显隐                                                | 受控关闭被拒绝、透传配置边界与优先级 |
| `date-range-picker-props` | 面板展示选项                                            | 字段视口与快捷项事件、字段与面板边界 |
| `value-format`            | 模型与事件的格式，可为自定义日期格式、Date 或 timestamp | 交互状态对比                         |
| `readonly`                | 只读                                                    | 交互状态对比                         |
| `format`                  | 展示格式                                                | 字段视口与快捷项事件                 |
| `popup-props`             | Trigger 展示配置；不允许覆盖展开状态及规则              | 透传配置边界与优先级                 |

<!-- demo-config-notes:end -->

在同一实例上切换禁用、只读和错误状态后再操作控件，比较可编辑性和交互反馈。恢复开关位于目标控件外；错误外观本身不会执行校验。

<details>
<summary>配置说明与使用限制</summary>

#### 交互状态切换

适用于预订或查询的起止日期。调整只读、错误反馈，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

</details>

<demo src="./__demos__/state-lab.vue"></demo>

### 受控关闭被拒绝

父级拒绝关闭时，范围面板会保留展开；同一选择的重复确认不会再次提交或请求关闭，修改起止日期后则可以开启新的确认事务。

<demo src="./__demos__/rejected-close.vue"></demo>

### 字段视口与快捷项事件

字段通过嵌套 `date-range-picker-props` 配置 `pickerValue`、`defaultPickerValue` 和快捷项，不新增第二套顶层视口 Prop。嵌套配置里的监听器不会透传；在字段组件上监听以下事件并回写嵌套 `pickerValue`。

| 事件                  | 说明                             | 参数                              |
| --------------------- | -------------------------------- | --------------------------------- |
| `update:picker-value` | 请求日历视口更新，不改变选择模型 | value: DateSelection              |
| `picker-value-change` | 已请求的视口及展示通知           | value, date(s), formatted text(s) |
| `select-shortcut`     | 接受的快捷项，仍遵守字段确认策略 | shortcut: DateShortcut            |

受控视口拒绝更新时保持原月份，后续回写才更新；快捷项选择先进入字段草稿，默认确认后提交。滚轮/时钟没有日历月份导航能力。

<demo src="./__demos__/field-panel-tools.vue"></demo>

### 展示模式的所有权

Cedar 只实现桌面日历，不公开移动 `edit-mode`。Maple 在字段/纯面板根选择真实展示模式；字段嵌套 `DatePickerOptions` / `DateRangePickerOptions` 不包含 presentation，两库复制的过滤器均拒绝嵌套选择器，不通过隐式覆盖保留无效 API。

### 周起始日的响应式展示

`dayStartOfWeek` 更新时，日历表头与日期列位置同步更新，不改变选中值或提交草稿。纯面板使用根属性，字段通过 `datePickerProps` / `dateRangePickerProps` 配置；滚轮视图不使用星期列。

### 动态日期限制

更新或移除 `min` / `max` 会重新计算可选日期，不自动修改已有模型或草稿。面板导航与候选日期校验是不同职责，已有值超出新限制时也不会被静默重写；用户重新选择或确认时按当前限制校验。

### Form 字段展示与确认

本组件支持 `edit-mode`，字段 > FormItem > Form 逐层继承；未指定时为 `direct`，保留原有交互。支持值：`direct / click / dblclick`。非 direct 编辑模式通过字段值入口打开编辑面板，并维护单份草稿；确认后才更新 v-model，取消、重置或启用 readPretty 时丢弃草稿。

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

`before-commit(value, { previousValue, signal })` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

日期／时间字段在 inline 下沿用原确认策略；在 click/dblclick 编辑展示中，内部纯面板隐藏确认工具栏，由编辑层提供唯一一组确认／取消。独立 DatePicker、DateRangePicker、TimePicker、TimeRangePicker 保留原有面板 API 和确认行为，不继承 Form 的字段展示。

### 范围日历的视口与选择

默认双日历从起始日期所在月开始显示连续两个月；两侧外部箭头联动翻月，跨年连续。月份／年份标题选择同步调整相邻面板，视口导航只发 picker-value 事件，不修改选中范围。显式 picker-value / default-picker-value 可以指定独立视口；同月或逆序视口只在显示层纠正，不回写受控值。

已有范围时重新点选第一个日期会进入未完成草稿，确认暂时禁用；第二个端点合法后才可确认。反向点选按日期排序，取消恢复先前已提交值。禁用端点和日期／时间限制仍在选择及确认时校验。

独立 DatePicker / DateRangePicker 与 inline 共用日历基准宽度（每个 265px）。单日期带时间时，宽屏下日历与时间列左右排列；范围在宽屏保留两个并排日历。面板会按窄容器换行，侧边快捷项另占一列，不压缩日历；确认与 actions 插槽保持由面板自身管理。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。

### 字段与面板边界

字段保留输入和浮层状态；嵌套面板参数只接受展示选项，不能覆盖顶层模型、格式或校验规则。

<demo src="./__demos__/entry-boundary.vue"></demo>

### 日期值格式

两端使用独立复制的日期值、约束、面板和字段主体。年/月/日模型格式为 `YYYY` / `YYYY-MM` / `YYYY-MM-DD`，日期时间默认含秒；`format="YYYY-MM-DD HH:mm"` 与 `value-format="YYYY-MM-DD HH:mm"` 使用分钟字符串。`format` 只控制显示，`value-format` 控制模型和事件，支持自定义格式、`Date` 与 `timestamp`。Cedar 另提供周/季度面板；Maple 另提供移动端滚轮和时钟展示。

起止输入使用同一字段焦点：Tab 在两端间切换时保留草稿，不触发 blur 校验或提交；Enter 或离开整个字段才提交，Escape 丢弃草稿。点击结束输入会让范围面板从结束端开始选择。

字段使用 PickerField → FieldDecorator；面板只负责选择，不注入表单。有效文本在回车或失焦时提交，Escape 或外部关闭丢弃未确认草稿，清除立即提交空值。四类字段的统一示例见 [Date](/components/date/#统一字段与提交)。

### 透传配置边界与优先级

建议使用 `DateRangePopupOptions` 声明 popup-props，边界与 DatePopupOptions 一致。仅用于 inline 锚定弹层；范围值、规则、open/defaultOpen、禁用及通知归 DateRange 管理。popup-container 顶层优先、嵌套回退，popupClass 合并内部类；trigger、closeOnClickReference、preventFocus、popupOffset 由展示层固定，Maple 还固定 unmountOnClose=true。新类型不开放这些固定项，附加平移使用 popupTranslate。已有运行时字段/监听过滤和旧配置可用能力保持。

本次仅新增可主动选用的专用类型，不收窄已发布的宽属性类型，不增加运行时过滤、不改变覆盖顺序；旧业务写法继续可编译。若直接使用旧宽属性，内部托管字段仍可能通过类型检查，但不代表能控制内部状态。

```ts
import type { DateRangePopupOptions } from "@cedar-design/ui";
```

<demo src="./__demos__/passthrough-options.vue"></demo>

### 复制与编辑

open-trigger-target="icon" 时，输入区可以编辑或复制，只有右侧选择按钮响应点击打开。关闭手输或搜索后，已有文本仍可复制。

<demo src="./__demos__/open-trigger-target.vue"></demo>

### 共享字段加载

`loading` 控制共享字段加载状态；`loading-mode` 为 `default`（指示器）或 `line`（底部不定进度线），默认 `default`。渲染统一由 FieldDecorator 负责，不隐式改变 disabled/readonly；需要禁止编辑时单独设置。

## 阅读方向

范围值始终保持 `[开始, 结束]`，切换阅读方向不会交换端点或提交草稿。日历范围连接线与边界圆角跟随阅读方向；分页网格的左右键按视觉方向移动焦点，上下键保持日期行序。Maple 的端点编辑和连续范围高亮是不同展示路径。显式 `shortcuts-position="left|right"` 保持物理侧；弹层继承字段来源方向。

## API

### 空值识别与阅读空文案

`empty-values` 用于空值识别，`empty-value` 保留原清空输出；`empty-text` 仅在 `read-pretty` 空内容下展示，默认 `'-'`，字段 > FormItem > Form，自定义 read 插槽优先。显式配置 empty-values 后，内置 required 接入该策略，自定义校验仍收到原值。详见[统一说明](/guide/empty-values/)。

| 参数         | 类型               | 缺省与范围                                            |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | 字段 > FormItem > Form > 组件族默认；完整覆盖，不合并 |
| empty-text   | string             | 字段 > FormItem > Form > '-'；显式 '' 有效            |

以上是字段展示层 API；纯面板不因此新增阅读模式。Form 与 FormItem 提供继承配置。empty-value 的现有类型与默认输出仍按该组件原 API 执行。

### Props

| 参数                      | 说明                                                                                   | 类型                                       | 默认值    |
| ------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------ | --------- |
| `open-trigger-target`     | 打开面板的点击区域；field 为整个字段，icon 仅右侧选择按钮。不影响键盘展开及受控 open。 | `'field' \| 'icon'`                        | `'field'` |
| `model-value`             | 绑定值                                                                                 | `(Date \| string \| number)[]`             | `-`       |
| `type`                    | 选择类型                                                                               | `date \| week \| month \| year \| quarter` | `date`    |
| `open`                    | 弹层显隐                                                                               | `boolean`                                  | `-`       |
| `clearable`               | 可清除                                                                                 | `boolean`                                  | `true`    |
| `disabled`                | 禁用                                                                                   | `boolean \| boolean[]`                     | `-`       |
| `readonly`                | 只读                                                                                   | `boolean`                                  | `false`   |
| `size`                    | 尺寸                                                                                   | `xs \| sm \| md \| lg \| xl`               | `-`       |
| `variant`                 | 输入框变体                                                                             | `filled \| outline \| standard`            | `filled`  |
| `separator`               | 分隔符                                                                                 | `string`                                   | `-`       |
| `placeholder`             | 占位                                                                                   | `string[]`                                 | `-`       |
| `disabled-date`           | 禁用日期                                                                               | `Function`                                 | `-`       |
| `format`                  | 展示格式                                                                               | `string`                                   | `-`       |
| `show-time`               | 选择时间                                                                               | `boolean`                                  | `false`   |
| `date-range-picker-props` | 面板展示选项                                                                           | `DateRangePickerOptions`                   | `{}`      |

### 日期族统一契约

| 参数              | 说明                                                    | 类型                                               | 默认值  |
| ----------------- | ------------------------------------------------------- | -------------------------------------------------- | ------- |
| `default-value`   | 非受控初始值，仅初始化读取                              | DateValue / DateValue[]                            | —       |
| `value-format`    | 模型与事件的格式，可为自定义日期格式、Date 或 timestamp | string                                             | 随 type |
| `min` / `max`     | 包含端点的边界；字符串按 value-format 解析              | DateValue                                          | —       |
| `disabled-time`   | 当前日期、端点的时间禁用列表                            | (date: Date, side: DateSide) => DateDisabledTime   | —       |
| `disable-confirm` | 选择后立即提交                                          | boolean                                            | false   |
| `default-open`    | 非受控初始展开                                          | boolean                                            | false   |
| `popup-props`     | Trigger 展示配置；不允许覆盖展开状态及规则              | object                                             | {}      |
| `popup-container` | 挂载目标；顶层优先，支持 false 原地渲染                 | string / HTMLElement / (() => HTMLElement) / false | —       |

`DateValue = Date | string | number`。单值清除为 undefined，范围清除为 []。
`disabledDate(date, side)` 和 `disabledTime(date, side)` 的 date 始终为 Date，side 为 start/end。

`disabled-date` 限制起止端点，范围可以跨过中间的禁用项；不会逐项扫描或自动截断范围。日期、月份、年份均采用此规则。中间禁用项保持灰色，翻页保留已选起点并清除悬浮预览；反向点选按时间先后排序。
时间回调返回 `disabledHours()`、`disabledMinutes(hour)`、`disabledSeconds(hour, minute)` 数字列表。
非法日期、不完整或逆序范围不能提交；确认时重新验证动态禁用规则。范围锁定端点不能被清除或改动。
嵌套面板 props 只配置展示，不得覆盖顶层 model-value、格式、边界、禁用规则或控制事件。

### Events

| 事件                          | 说明                 | 参数                              |
| ----------------------------- | -------------------- | --------------------------------- |
| `update:model-value`          | 写入模型             | value                             |
| `select`                      | 选择草稿，不等于提交 | value, date(s), formatted text(s) |
| `change`                      | 有效值正式变化       | value, date(s), formatted text(s) |
| `update:open` / `open-change` | 展开状态变化         | open: boolean                     |
| `clear`                       | 清除                 | 无                                |
| `focus` / `blur`              | 整个字段的焦点边界   | 无                                |
| `click`                       | 点击字段             | event                             |

桌面支持键盘编辑。默认面板先编辑草稿再确认；设置 disable-confirm 可直接提交。Escape 或关闭会丢弃草稿。focus(index = 0) 定位起止输入，blur() 关闭浮层。

## 配置清空后的值

`empty-value` 指定当前组件已有清空动作的输出；省略时采用该组件默认返回。具体类型以组件 API 为准。它不改变 empty-values 的识别规则，也不改变 Form reset 的初始值。

`empty-value` 可显式设为 `null`（或 `() => null`），清空时原样提交 null；省略时保留组件原默认值。界面把 null 显示为空，不会把普通输入的空字符串自动转成 null。支持弹出编辑的字段中，清空先修改草稿，确认后提交，取消则保留原值。
