---
title: TimeRange 时间范围
description: "表单时间范围字段。面板请使用 TimeRangePicker。"
permalink: /components/time-range/
---

# TimeRange

表单时间范围字段（带触发器）。内部使用 `TimeRangePicker`。

纯面板请使用 [`TimeRangePicker`](/components/time-range-picker/)（默认无触发器）。

## 基础示例

### 基本用法

<demo src="./__demos__/basic.vue"></demo>

## 外观与展示

### 尺寸

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置            | 作用                                                                   | 相关示例                                           |
| --------------- | ---------------------------------------------------------------------- | -------------------------------------------------- |
| `format`        | 展示格式                                                               | 字段外壳与配置边界、范围格式与十二小时制、次日标记 |
| `clearable`     | 可清除                                                                 | 范围格式与十二小时制、自定义占位、次日标记         |
| `placeholder`   | 占位                                                                   | 字段外壳与配置边界、自定义占位                     |
| `show-next-day` | 允许结束早于开始并显示「次日」；关闭时倒序范围不能提交，起止始终不交换 | 范围格式与十二小时制、次日标记                     |
| `size`          | 尺寸                                                                   | 尺寸                                               |
| `variant`       | 输入框变体                                                             | 字段外壳与配置边界                                 |

<!-- demo-config-notes:end -->

<demo src="./__demos__/size.vue"></demo>

### 字段外壳与配置边界

`hint` 控制浮动提示（Cedar 与 Maple 默认均为 false），有 Form 外置标签时不启用。`line` 默认 true；`text-color / focus-color / blur-color` 为可选颜色字符串。`error` 未设置时继承 Form，显式 false 覆盖错误态。TimeRange 的 `separator` 默认 `~`，允许空字符串。Cedar 与 Maple 的字段默认均为 outline；可显式指定 filled 或 standard。

字段顶层负责值、默认值、展开、格式、步长、边界、禁用规则和只读/禁用状态。请直接在字段上设置这些属性，不放进 timePickerProps/timeRangePickerProps。嵌套配置只允许对应面板的展示属性；不能通过模型/确认/选择事件替换字段流程。类型会拒绝此类配置，运行时也过滤，且不会把嵌套规则作为顶层未设置时的回退。

Maple 的 pickerProps 可配置 optionHeight/optionCount 等外观，不可替换 columns、fieldNames、选中值、toolbar 或展开状态。popupProps 可设置定位、外观和生命周期回调，但不能设置 open/defaultOpen 或覆盖展开更新事件；顶层 popupContainer（包括 false）优先。纯时间面板内部的嵌套配置遵循相同规则。

<demo src="./__demos__/field-appearance.vue"></demo>

字段交互由本库的一份实例控制器编排：select 暂存草稿，确认时按当前规则校验后提交并通知 Form。清除通过相同提交路径写入 undefined，再通知 clear；只读、禁用或未开启 clearable 时不能清除。只读仍可聚焦，focus/blur 去重；受控关闭请求尚未被接受时，不会重复提交。

### 范围格式与十二小时制

比较范围的分钟、秒与十二小时制显示，操作起止端点观察格式；跨日判断和值格式独立展示。

<details>
<summary>配置说明与使用限制</summary>

#### 显示格式

未设置 `format` 时默认 `HH:mm:ss`；开启 `use12-hours` 后默认 `hh:mm:ss a`，字段与纯面板一致。显式 `format` 决定字符串值的解析和输出格式，`use12-hours` 还可独立控制面板小时列；建议十二小时格式包含 `a` 或 `A`，以区分上午与下午。

使用方括号包裹固定文字，例如 `[Time] HH:mm`。固定文字不参与时间列识别，不会因为包含 `s` 或 `A` 而额外显示秒或 AM/PM 列。空格式或没有时、分、秒 token 的格式回退到上述默认格式。

</details>

<demo src="./__demos__/format-comparison.vue"></demo>

### 自定义占位

<demo src="./__demos__/placeholder.vue"></demo>

### 次日标记

结束时间早于开始时间时，开启 `show-next-day` 会在字段与面板结束侧显示「次日」并允许提交；关闭时倒序范围不能提交。起止端点始终不自动交换。

<demo src="./__demos__/show-next-day.vue"></demo>

此示例开启文本编辑并显示模型，保留 22:00→次日06:00 的端点顺序；清除为 `undefined`，可通过重置按钮恢复。`show-next-day` 表示时间顺序与标签，不将模型自动转换为下一日日期。

## 值模型与选择规则

### 模型类型与固定文字

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置          | 作用      | 相关示例                                     |
| ------------- | --------- | -------------------------------------------- |
| `format`      | 展示格式  | 模型类型与固定文字、独立步长示例、时间上下限 |
| `use12-hours` | 12 小时制 | 独立步长示例                                 |

<!-- demo-config-notes:end -->

字符串按 `format` 严格解析，不接受溢出时间或不匹配的格式；Date 和毫秒时间戳按本地时间反显。提交值始终为格式化字符串（范围为数组）。

<demo src="./__demos__/format-model.vue"></demo>

### 独立步长示例

小时候选以 0 点为起点，十二小时制只改变显示；无效步长回退为 1。

<demo src="./__demos__/step.vue"></demo>

可切换十二小时面板，分钟/秒步长保持不变；显式 `HH:mm:ss` 仍决定模型格式，AM/PM 选择转换为对应的 24 小时值。

### 时间上下限

`min` / `max` 的类型为 `string`，默认不限制；格式固定为 24 小时制 `HH:mm` 或 `HH:mm:ss`，不受 `format` 或 `use12Hours` 影响，包含端点。`HH:mm` 的秒视为 00。范围的两个端点分别校验；`showNextDay` 不把边界变成跨午夜区间。`min > max` 时没有可提交时间。无法解析的边界按未设置处理。

动态修改边界不会改写外部模型。提交须同时满足边界、步长和禁用回调；不显示秒时按秒为 00 校验。列表粗粒度列在整个小时/分钟都越界时禁用，最终确认仍校验完整时间。隐藏禁用项使用 `hide-disabled-options`。

<demo src="./__demos__/bounds.vue"></demo>

## 输入与状态控制

### 交互状态对比

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置             | 作用             | 相关示例                                     |
| ---------------- | ---------------- | -------------------------------------------- |
| `format`         | 展示格式         | 交互状态对比、手输与面板选择、默认值与受控值 |
| `clearable`      | 可清除           | 手输与面板选择、默认值与受控值、选择与提交   |
| `disabled`       | 禁用             | 交互状态对比、选择与提交                     |
| `readonly`       | 只读             | 交互状态对比、选择与提交                     |
| `input-editable` | 允许桌面文本输入 | 手输与面板选择、复制与编辑                   |
| `model-value`    | 绑定值           | 默认值与受控值                               |

<!-- demo-config-notes:end -->

在同一实例上切换禁用、只读和错误状态后再操作控件，比较可编辑性和交互反馈。恢复开关位于目标控件外；错误外观本身不会执行校验。

<details>
<summary>配置说明与使用限制</summary>

#### 交互状态切换

适用于营业时段等时间范围。调整禁用、只读、错误反馈，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

</details>

<demo src="./__demos__/state-lab.vue"></demo>

### 手输与面板选择

`inputEditable` 默认为 `true`（Maple 默认为 `false`）。回车或失焦提交，Esc 撤销；格式、步长、边界和禁用规则与面板一致。无效输入或父级拒绝受控更新时回到模型值；切换为不可编辑、只读或禁用会丢弃未提交输入。输入法组合期间不提交。范围两端之间移动焦点不提交。

<demo src="./__demos__/text-entry.vue"></demo>

### 默认值与受控值

`defaultValue` 初始化字段/纯面板的非受控值，仅读取一次；后续选择保存在各自实例。传入 `modelValue` 后以父级值为准。字段 `defaultOpen` 只初始化一次；受控 `open` 需父级接收 `update:open`，`open-change(open: boolean)` 通知显隐请求。`clear` 不携带参数。纯面板支持 `disabled`，同时禁用范围两端。

<demo src="./__demos__/default-state.vue"></demo>

示例可分别拒绝值更新与展开更新：拒绝时保留父级模型/显隐，提案单独显示；重新打开从父级模型恢复。关闭请求不代表父级已接受。

父级拒绝关闭、面板保持展开时，没有新选择的重复确认不会重复提交；再次选择新时间会开启新事务，可重新确认提交。

### 选择与提交

字段的 `focus` / `blur` 事件均无参数，同一次聚焦或失焦只通知一次；范围两端切换不产生额外整字段事件。只读字段仍可聚焦，但不能展开修改；禁用字段不能聚焦，已聚焦时动态禁用会释放焦点状态并通知失焦。

字段和纯面板提交时按当前格式、步长及禁用规则重新校验；Cedar 手动输入也遵守相同规则。规则变化不会自动改写已提交值。起止端点始终不自动交换；关闭 `show-next-day` 时倒序范围不能提交，开启后允许结束早于开始。清空仍提交 `undefined`，不受候选时间限制，但遵守只读/禁用状态。

`select(value, date)` 表示用户选择草稿，`change(value, date)` 表示提交。未配置 empty-value 时，单值和范围字段清除返回 `undefined`，对应 Date 参数也为 `undefined`；显式配置时保留允许的清空输出，`clear` 不带参数。Date 参数是本地时间表示（不自动进行次日日期运算）。字段默认确认后提交；`disable-confirm` 开启后仅有效选择立即提交并请求关闭，不允许次日时的倒序草稿仍不能提交。受控 `open` 仍需父级接受更新。独立纯面板同样默认确认后提交；开启 disable-confirm 后有效选择立即提交，但不会关闭面板。

<demo src="./__demos__/selection-events.vue"></demo>

父级直接替换模型会重置草稿，但不会触发 `select` 或 `change`。示例提供“外部更新”按钮，可与用户选择、确认提交分别观察。

起止输入使用同一字段焦点：Tab 在两端间切换时保留草稿，不触发 blur 校验或提交；Enter 或离开整个字段才提交，Escape 丢弃草稿。点击结束输入会激活时间面板的结束端。

字段使用 PickerField → FieldDecorator；面板只负责选择，不注入表单。有效文本在回车或失焦时提交，Escape 或外部关闭丢弃未确认草稿，清除立即提交空值。四类字段的统一示例见 [Date](/components/date/#统一字段与提交)。

### 复制与编辑

open-trigger-target="icon" 时，输入区可以编辑或复制，只有右侧选择按钮响应点击打开。关闭手输或搜索后，已有文本仍可复制。

<demo src="./__demos__/open-trigger-target.vue"></demo>

### 共享字段加载

`loading` 控制共享字段加载状态；`loading-mode` 为 `default`（指示器）或 `line`（底部不定进度线），默认 `default`。渲染统一由 FieldDecorator 负责，不隐式改变 disabled/readonly；需要禁止编辑时单独设置。

## 阅读方向

范围值始终保持 `[开始, 结束]`，LTR/RTL 切换只调整布局，不交换端点或修改跨日语义。时间列与起止面板按阅读顺序排列，左右键沿视觉方向移动焦点，可跨起止时间列；Cedar 上下键移动焦点、Enter/Space 选择，Maple 上下键保留滚轮选值语义。草稿与确认行为沿用原有配置，弹层继承字段来源方向。

## API

### 空值识别与阅读空文案

`empty-values` 用于空值识别，`empty-value` 保留原清空输出；`empty-text` 仅在 `read-pretty` 空内容下展示，默认 `'-'`，字段 > FormItem > Form，自定义 read 插槽优先。显式配置 empty-values 后，内置 required 接入该策略，自定义校验仍收到原值。详见[统一说明](/guide/empty-values/)。

| 参数         | 类型               | 缺省与范围                                            |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | 字段 > FormItem > Form > 组件族默认；完整覆盖，不合并 |
| empty-text   | string             | 字段 > FormItem > Form > '-'；显式 '' 有效            |

以上是字段展示层 API；纯面板不因此新增阅读模式。Form 与 FormItem 提供继承配置。empty-value 的现有类型与默认输出仍按该组件原 API 执行。

### 浮层配置与字段通知

`popup-props` 显式配置本地 Trigger 的定位和外观，例如 `{ placement: 'top-start' }`；不能覆盖 open、disabled、trigger 等字段状态或交互。顶层 `popup-container`（包括 false）优先。`input-editable` 默认 true，可关闭桌面文本输入。面板外观使用 `time-range-picker-props`（支持 class/style），面板/浮层参数通过上述显式属性配置；id、aria-* 等属性透传给字段。

`click(event)` 只通知非禁用字段的点击；只读字段可通知但不展开。关闭统一监听 `open-change(false)`，它表示关闭请求，受控 open 仍需父级接受。两端不提供字段 close 事件；不要把关闭请求当作值提交。

字段图标插槽为 `suffix-icon`，参数为 `focus: boolean`、`popupOpen: boolean`。实例方法 `focus(index = 0)` 聚焦起点（0）或终点（1）而不提交值；`blur()` 失焦并请求关闭。

`placeholder` 字符串用于两端；数组分别指定起止文案，缺项为空；显式空字符串不会回退默认文案。

### TimeRange Props

`input-attrs` 作用于两个直接输入框。例如 `:input-attrs="[{ 'aria-label': '出发' }, { 'aria-label': '返回' }]"` 可分别命名起止输入。值、禁用、只读、占位符、角色和弹层状态由组件管理；公共描述、单项描述和表单错误会合并到对应输入中；组件报错时优先标记无效，否则保留单项 `aria-invalid`。`RangeInputAttributes` 从组件子入口及库根入口导出，包含原生属性和 `Once` 事件类型。

当 FormItem 的 `label-attrs.for` 明确指向其中一个输入时，未单独命名的起止输入会使用表单标签和本地化的起止名称；`input-attrs` 或字段上的显式无障碍名称优先。旧自定义语言包可提供 `fieldPresentation.rangeStart` 和 `fieldPresentation.rangeEnd`；缺少时回退原日期或时间起止文案。

| 参数 | 说明 | 类型 | 缺省说明 |
| --- | --- | --- | --- |
| `before-commit` | 显式字段保存守卫，使用 payload、done、context | `BeforeFieldCommit` | `undefined` |
| `blur-color` | 失焦时的颜色 | `string` | 主题缺省 |
| `clearable` | 允许清除；不会绕过禁用、只读或等待状态 | `boolean` | `true` |
| `default-open` | 非受控初始开关，仅创建时读取 | `boolean` | `false` |
| `default-value` | 非受控初始值，仅创建时读取 | `TimeValue[]` | `undefined` |
| `disable-confirm` | 有效选择后立即提交；字段还请求关闭 | `boolean` | `false` |
| `disabled` | 禁用交互；字段未设时继承 FormItem/Form | `boolean` | 继承，最终 false |
| `disabled-hours` | 返回禁用小时，小时始终为 0–23 | `() => number[]` | `undefined` |
| `disabled-minutes` | 按已选小时返回禁用分钟 | `(hour?: number) => number[]` | `undefined` |
| `disabled-seconds` | 按已选小时和分钟返回禁用秒 | `(hour?: number, minute?: number) => number[]` | `undefined` |
| `edit-mode` | 字段编辑模式；未设时继承 FormItem/Form | `FieldEditMode`<br>`'direct' \| 'click' \| 'dblclick'` | 继承，最终 direct |
| `empty-text` | 纯阅读模式的空内容文字 | `string` | 继承，最终 '-' |
| `empty-value` | 清空输出或工厂，不改变空值识别策略 | `TimeValue[] \| null \| (() => TimeValue[] \| null \| undefined)` | `undefined` |
| `empty-values` | 空值识别列表，覆盖而不合并 | `readonly unknown[]` | 继承/组件族默认 |
| `error` | 字段错误展示；未设时继承 | `boolean` | 继承，最终 false |
| `focus-color` | 聚焦时的颜色 | `string` | 主题缺省 |
| `format` | 字符串解析、显示及输出格式；十二小时缺省带 a | `string` | 按 use12Hours |
| `hide-disabled-options` | 隐藏禁用时间选项；时钟保留刻度位置 | `boolean` | `false` |
| `hint` | 浮动占位提示；存在 Form 外置标签时不浮动 | `boolean` | `false` |
| `input-editable` | 允许手输；不影响面板选择入口 | `boolean` | `true` |
| `input-attrs` | 按顺序设置起点、终点原生输入属性；单项名称优先于公共名称 | `RangeInputAttributes[]` | `undefined` |
| `line` | 显示外壳边框或底线 | `boolean` | `true` |
| `loading` | 手动加载反馈，不从事件返回值推导 | `boolean` | `false` |
| `loading-mode` | 字段加载展示模式 | `default \| line` | `default` |
| `max` | 最大可选钟点，HH:mm 或 HH:mm:ss，包含端点 | `string` | `undefined` |
| `min` | 最小可选钟点，HH:mm 或 HH:mm:ss，包含端点 | `string` | `undefined` |
| `model-value` | 外部值；数值和 Date 保留原值，正常提交输出格式化字符串 | `TimeRangeModelValue` | `undefined` |
| `open` | 受控编辑层开关 | `boolean` | `undefined` |
| `open-trigger-target` | 点击整个字段或仅图标打开；不限制键盘打开 | `field \| icon` | `field` |
| `placeholder` | 占位文字；范围可使用起止数组 | `string \| string[]` | `undefined` |
| `popup-container` | 编辑层挂载容器，false 保持原位 | `PopupContainer` | 共享容器缺省 |
| `popup-props` | 浮层展示配置，不接管模型、状态和事件 | `TimePopupPresentationProps` | `{}` |
| `read-pretty` | 纯阅读展示，不渲染编辑器；独立于 readonly | `boolean` | 继承，最终 false |
| `readonly` | 只读；字段可聚焦复制，不改值或展开编辑 | `boolean` | 继承，最终 false |
| `separator` | 范围起止之间的分隔文字，允许空串 | `string` | ` ~ ` |
| `show-next-day` | 仅范围：允许结束早于开始并显示次日，不交换起止 | `boolean` | `false` |
| `size` | 五档尺寸；字段遵循表单继承 | `ComponentSize`<br>`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | 继承，最终 md |
| `step` | 以 0 点为起点的时分秒步长，无效步长回退为 1 | `TimeStep` | 有效步长均 1 |
| `text-color` | 内容文字颜色 | `string` | 主题缺省 |
| `time-range-picker-props` | 范围面板展示配置，根拥有模型、规则和状态 | `TimePanelPresentationProps` | `{}` |
| `use12-hours` | 十二小时面板；小时禁用回调仍用 0–23 | `boolean` | `false` |
| `variant` | 字段外观 | `filled \| outline \| standard` | `outline` |

### 编辑与确认

通过 `edit-mode` 配置编辑方式；未指定时依次继承 FormItem、Form，默认 `direct`。支持值：`direct / click / dblclick`。非 direct 编辑模式通过字段值入口打开编辑面板，并维护单份草稿；确认后才更新 v-model，取消、重置或启用 readPretty 时丢弃草稿。

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

`before-commit(payload, done, context)` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

日期／时间字段在 inline 下沿用原确认策略；在 click/dblclick 编辑展示中，内部纯面板隐藏确认工具栏，由编辑层提供唯一一组确认／取消。独立 DatePicker、DateRangePicker、TimePicker、TimeRangePicker 保留原有面板 API 和确认行为，不继承 Form 的字段展示。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。

### 透传配置边界

open/defaultOpen、disabled、trigger、closeOnClickReference、preventFocus 和对应展开更新由时间字段管理。顶层 popup-container 明确设置时优先，否则使用嵌套配置；popupClass 会合并。inline 展示层固定 popupOffset=4；Maple 还固定 unmountOnClose=true，因此嵌套配置中的这些字段不保证能控制最终值。

### TimeRangePicker Props

| 参数 | 说明 | 类型 | 缺省说明 |
| --- | --- | --- | --- |
| `default-value` | 非受控初始值，仅创建时读取 | `TimeValue[]` | `undefined` |
| `disable-confirm` | 有效选择后立即提交；字段还请求关闭 | `boolean` | `false` |
| `disabled` | 禁用面板选择和确认 | `boolean` | `false` |
| `disabled-hours` | 返回禁用小时，小时始终为 0–23 | `() => number[]` | `undefined` |
| `disabled-minutes` | 按已选小时返回禁用分钟 | `(hour?: number) => number[]` | `undefined` |
| `disabled-seconds` | 按已选小时和分钟返回禁用秒 | `(hour?: number, minute?: number) => number[]` | `undefined` |
| `format` | 字符串解析、显示及输出格式；十二小时缺省带 a | `string` | 按 use12Hours |
| `hide-disabled-options` | 隐藏禁用时间选项；时钟保留刻度位置 | `boolean` | `false` |
| `max` | 最大可选钟点，HH:mm 或 HH:mm:ss，包含端点 | `string` | `undefined` |
| `min` | 最小可选钟点，HH:mm 或 HH:mm:ss，包含端点 | `string` | `undefined` |
| `model-value` | 面板外部值，初始化草稿并响应后续变化 | `TimeValue[]` | `undefined` |
| `readonly` | 只读面板，不改草稿或确认 | `boolean` | `false` |
| `show-next-day` | 仅范围：允许结束早于开始并显示次日，不交换起止 | `boolean` | `false` |
| `step` | 以 0 点为起点的时分秒步长，无效步长回退为 1 | `TimeStep` | 有效步长均 1 |
| `use12-hours` | 十二小时面板；小时禁用回调仍用 0–23 | `boolean` | `false` |

## 配置清空后的值

`empty-value` 指定当前组件已有清空动作的输出；省略时采用该组件默认返回。具体类型以组件 API 为准。它不改变 empty-values 的识别规则，也不改变 Form reset 的初始值。

`empty-value` 可显式设为 `null`（或 `() => null`），清空时原样提交 null；省略时保留组件原默认值。界面把 null 显示为空，不会把普通输入的空字符串自动转成 null。支持弹出编辑的字段中，清空先修改草稿，确认后提交，取消则保留原值。

公共 focus/blur 从首次挂载即可调用。focus 会打开可编辑的延迟编辑器，等待其就绪后定位；禁用、只读或纯阅读时不因此打开。blur 只失焦当前目标，不重新打开。保存的方法不会绑定旧编辑器，关闭、切换模式、停用或卸载会取消排队调用。

延迟编辑中，清空会保留配置的合法 empty-value，确认后提交该空值；例如 null 不会被重新替换成午夜。首次创建的空滚轮面板可以初始化可视候选，但这不是用户选择，也不提交模型；同一面板之后明确清空的草稿不再自动补候选。重新打开后取消不会额外提交。

### 字段通知与公开类型

字段 update:modelValue/change 使用 TimeModelValue（范围字段为 TimeRangeModelValue）：普通选择提交格式化字符串，显式清空可保留 null、时间戳、Date 或范围数组等属性允许的配置值。清空的辅助 Date 可以是 undefined；范围为空数组时辅助值也是空数组。清空不发送 select，select 仍表示用户选择的格式化草稿，范围选择可以暂时不完整。

导出 TimeEmits、TimeModelValue、TimeReadScope、TimeSuffixIconScope、TimeSlots、TimeActionsScope、TimeExpose，以及对应的 TimeRangeEmits、TimeRangeModelValue、TimeRangeReadScope、TimeRangeSlots、TimeRangeActionsScope、TimeRangeExpose。根入口与各自子入口均可导入，实例关联公开 Expose。

字段 read 接收 { value, text }，保留 nullable 模型；suffix-icon 接收 { focus, popupOpen }；clear-icon 接收受保护的 clear(event?)。范围字段还支持 separator。Cedar 的 direct 模式支持 default 自定义触发区，Maple 不支持该槽；两端尚未接通字段 loading-icon，不在类型中承诺。actions/extra 属于面板草稿：Cedar direct 转发，Maple direct 不转发、延迟编辑转发，不把内层 confirm 当作外层最终保存入口。

<!-- time-contract:start -->

### 属性缺省与格式

属性表的继承、按格式或有效步长说明是有效缺省，原始 Props 可为 undefined。format 未设置时为 HH:mm:ss，use12Hours=true 时为 hh:mm:ss a。时间边界使用 24 小时钟点，不使用日期族的 valueFormat 或时区协议。

### 字段事件与插槽参数类型

事件只通知，不收集监听器 Promise。update:modelValue 与 change 包含当前清空策略允许的 null、0、Date 或范围数组；select 只表示格式化草稿，不把选择等同于保存。字段 update:open/open-change 表示开关请求，初始化不自动通知。

| 事件 | 参数 |
| --- | --- |
| `update:modelValue` | `TimeRangeModelValue` |
| `change` | `TimeRangeModelValue, (Date \| undefined)[] \| undefined` |
| `select` | `(string \| undefined)[] \| undefined, (Date \| undefined)[] \| undefined` |
| `clear` | `()` |
| `click` | `Event` |
| `focus` | `()` |
| `blur` | `()` |
| `update:open` | `boolean` |
| `open-change` | `boolean` |

字段 focus(index?)、blur() 作用于真实输入或触发区，不改变模型。read 插槽接收 value、text；suffix-icon 接收 focus、popupOpen；clear-icon 接收受保护的 clear(event?)。prefix、selected、suffix 和 extra 无作用域参数，范围另有 separator。Cedar direct 模式支持 default 自定义触发区；Maple 不支持。

actions 和 extra 属于面板草稿，Cedar direct 转发；Maple direct 不转发，延迟编辑转发。面板 confirm() 不是外层字段最终保存入口。纯面板只有 actions/extra 插槽，没有字段 read、clear-icon 或 loading-icon 插槽；独立面板没有公开 ref.confirm() 方法，定制确认使用 actions.confirm。

### 面板事件参数类型

参数为对应公开事件类型的元组；日期参数由格式化钟点解析，不承诺保留输入 Date 的原日期。

| 事件 | 参数 |
| --- | --- |
| `update:modelValue` | `TimeRangePickerEmits['update:modelValue']` |
| `change` | `TimeRangePickerEmits['change']` |
| `select` | `TimeRangePickerEmits['select']` |
| `confirm` | `TimeRangePickerEmits['confirm']` |

### 面板事件

纯面板业务事件为 update:modelValue、change、select、confirm。select 通知候选，确认有效后通知 confirm；值实际改变时才通知 update:modelValue 和 change。关闭、清空、焦点等字段事件不属于纯面板。

面板 actions 的完整作用域如下；extra 无参数。

```ts
import type { TimeValue } from '@cedar-design/ui-vue'
type PanelActionsScope = { confirm: () => boolean; canConfirm: boolean; value: Array<TimeValue | undefined> | undefined }
```

### 显式保存守卫

beforeCommit(payload, done, context) 仅属于字段保存。payload 含 value、previousValue，context 含 signal 和可选 event。返回 undefined 等待 done；返回 boolean 或 Promise 按结果结算。FormItem 先校验候选；失败保留草稿。普通 select、change、confirm 和 click 监听器返回值不会执行该任务协议。

### 类型导入

```ts
import { TimeRange, TimeRangePicker, type TimeRangeProps, type TimeRangeEmits,
  type TimeRangeSlots, type TimeRangeInstance, type TimeRangePickerProps,
  type TimeRangePickerEmits, type TimeRangePickerSlots } from '@cedar-design/ui-vue'
```

<!-- time-contract:end -->

## CSS Variables

<!-- component-css-variables:start -->

本组件未声明独立的公共 CSS 变量。请使用本页公开的配置与布局入口。 组合控件的外观复用 `time` 的公共变量；共享变量可能同时影响同一 DOM 子树中的其他控件。

内部自定义属性与测量中间值属于实现细节，不作为业务定制 API。

<!-- component-css-variables:end -->
