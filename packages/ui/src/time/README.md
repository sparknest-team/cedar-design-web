---
title: Time 时间
description: "表单时间字段。面板请使用 TimePicker。"
permalink: /components/time/
---

# Time

父级在确认后保持弹层展开时，没有新选择的重复确认不会重复提交；新的时间选择会开启新事务，可以再次确认。

展开时，原生 combobox 通过 `aria-controls` 关联当前实例的命名弹层；关闭后同步更新状态并移除关联。`aria-label`、`aria-describedby` 可传递给原生控件。自定义 selected/触发插槽需自行保留可访问名称、键盘操作和状态关联。

表单时间字段（带触发器）。内部使用 `TimePicker`。

纯面板请使用 [`TimePicker`](/components/time-picker/)（默认无触发器）。时间范围字段请使用 [`TimeRange`](/components/time-range/)。

## 基础示例

### 基本用法

<demo src="./__demos__/basic.vue"></demo>

## 外观与展示

### 尺寸

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置          | 作用       | 相关示例                                 |
| ------------- | ---------- | ---------------------------------------- |
| `size`        | 尺寸       | 尺寸、表单控件尺寸对照                   |
| `variant`     | 输入框变体 | 表单控件尺寸对照、字段外壳与配置边界     |
| `placeholder` | 占位       | 表单控件尺寸对照、字段外壳与配置边界     |
| `format`      | 展示格式   | 字段外壳与配置边界、时间格式与十二小时制 |
| `use12-hours` | 12 小时制  | 时间格式与十二小时制                     |

<!-- demo-config-notes:end -->

<demo src="./__demos__/size.vue"></demo>

### 表单控件尺寸对照

切换五档 size 和三种字段变体，比较 Input、Button、Select、日期时间及其他单行表单控件的高度。Button 在这里固定使用 outline。DatePicker/TimePicker 是面板，此处使用带输入框的 Date/Time 字段。示例同时展示有值、可清空、标签删除与长标签多选；Select/Cascader 设置 tag-nowrap 时保持同档高度，长标签文字省略、删除图标保留；标签行可横向滚动，清空按钮和箭头固定在外侧。被省略的标签正文支持悬停、键盘聚焦或点按查看完整文字，点外部或按 Esc 关闭，不改变选中值。可清空后恢复选中值重复比较。多行文本和允许换行的多选内容按内容撑高。

<demo src="../field-decorator/__demos__/control-sizes.vue"></demo>

### 字段外壳与配置边界

`hint` 控制浮动提示（Cedar 默认 false，Maple 默认 true），有 Form 外置标签时不启用。`line` 默认 true；`text-color / focus-color / blur-color` 为可选颜色字符串。`error` 未设置时继承 Form，显式 false 覆盖错误态。TimeRange 的 `separator` 默认 `~`，允许空字符串。默认 variant 保留 Cedar filled、Maple standard，可显式指定同一变体。

字段顶层负责值、默认值、展开、格式、步长、边界、禁用规则和只读/禁用状态。请直接在字段上设置这些属性，不放进 timePickerProps/timeRangePickerProps。嵌套配置只允许对应面板的展示属性；不能通过模型/确认/选择事件替换字段流程。类型会拒绝此类配置，运行时也过滤，且不会把嵌套规则作为顶层未设置时的回退。

Maple 的 pickerProps 可配置 optionHeight/optionCount 等外观，不可替换 columns、fieldNames、选中值、toolbar 或展开状态。popupProps 可设置定位、外观和生命周期回调，但不能设置 open/defaultOpen 或覆盖展开更新事件；顶层 popupContainer（包括 false）优先。纯时间面板内部的嵌套配置遵循相同规则。

<demo src="./__demos__/field-appearance.vue"></demo>

字段交互由本库的一份实例控制器编排：select 暂存草稿，确认时按当前规则校验后提交并通知 Form。清除通过相同提交路径写入 undefined，再通知 clear；只读、禁用或未开启 clearable 时不能清除。只读仍可聚焦，focus/blur 去重；受控关闭请求尚未被接受时，不会重复提交。

### 时间格式与十二小时制

比较分钟、秒和十二小时显示；注意午夜 12 AM 与中午 12 PM 的区别。值格式和步长边界仍独立展示。

<details>
<summary>配置说明与使用限制</summary>

#### 显示格式

未设置 `format` 时默认 `HH:mm:ss`；开启 `use12-hours` 后默认 `hh:mm:ss a`，字段与纯面板一致。显式 `format` 决定字符串值的解析和输出格式，`use12-hours` 还可独立控制面板小时列；建议十二小时格式包含 `a` 或 `A`，以区分上午与下午。

使用方括号包裹固定文字，例如 `[Time] HH:mm`。固定文字不参与时间列识别，不会因为包含 `s` 或 `A` 而额外显示秒或 AM/PM 列。空格式或没有时、分、秒 token 的格式回退到上述默认格式。

</details>

<demo src="./__demos__/format-comparison.vue"></demo>

## 值模型与选择规则

### 模型类型与固定文字

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置              | 作用       | 相关示例                                     |
| ----------------- | ---------- | -------------------------------------------- |
| `format`          | 展示格式   | 模型类型与固定文字、独立步长示例、时间上下限 |
| `model-value`     | 绑定值     | 独立步长示例                                 |
| `use12-hours`     | 12 小时制  | 独立步长示例                                 |
| `step`            | 时分秒步长 | 独立步长示例                                 |
| `disable-confirm` | 跳过确认   | 跳过确认                                     |

<!-- demo-config-notes:end -->

字符串按 `format` 严格解析，不接受溢出时间或不匹配的格式；Date 和毫秒时间戳按本地时间反显。提交值始终为格式化字符串（范围为数组）。

<demo src="./__demos__/format-model.vue"></demo>

### 独立步长示例

十二小时显示与 5 小时步长组合时，步长从 24 小时制的零点计算，合法小时为 0 / 5 / 10 / 15 / 20，不在中午重新起算。AM 显示 12 / 05 / 10，PM 显示 03 / 08；03 PM 对应模型 15:30:00。切换规则不修改已有值，确认合法候选后才提交，取消保留原值；禁用 15 点后，03 PM 不可选，08 PM 仍对应 20 点。

With 12-hour display and a 5-hour step, hours remain anchored to midnight: 0/5/10/15/20, not restarted at noon. AM offers 12/05/10 and PM offers 03/08. Selecting 03 PM commits 15:30:00 because this Demo retains HH:mm:ss as its model format. Changing the rules preserves the old 09:30:00; cancellation does not commit aligned candidates. Only confirmation writes the selected value. Enable Disable 15:00 to combine disabled-hours with the step: 03 PM is unavailable while 08 PM still means 20:00. Turning off Accept controlled updates records proposals without changing the business value; re-enable it before confirming an accepted value. Proposal counts are not acceptance counts. Other non-dividing steps and physical touch remain separate coverage.

小时候选以 0 点为起点，十二小时制只改变显示；无效步长回退为 1。

<demo src="./__demos__/step.vue"></demo>

### 时间上下限

单值边界示例收紧下限至10:30:40后，字段仍反显已提交的10:30:38，纯面板不能确认。跨到31分钟后显式选择02秒，确认才将字段/模型更新为包含上界10:31:02；字段弹层改秒为00后Escape取消仍保持02。列表保留旧秒草稿时须自行选合法秒，不会把动态规则变化当作自动提交。

In the single-value bounds Demo, tightening the minimum retains committed 10:30:38 and prevents invalid confirmation. Explicitly selecting 10:31:02 and confirming commits the inclusive maximum. Editing the field popup draft to second 00 and canceling preserves second 02. Rule changes alone do not submit a new value.

`min` / `max` 的类型为 `string`，默认不限制；格式固定为 24 小时制 `HH:mm` 或 `HH:mm:ss`，不受 `format` 或 `use12Hours` 影响，包含端点。`HH:mm` 的秒视为 00。范围的两个端点分别校验；`showNextDay` 不把边界变成跨午夜区间。`min > max` 时没有可提交时间。无法解析的边界按未设置处理。

动态修改边界不会改写外部模型。提交须同时满足边界、步长和禁用回调；不显示秒时按秒为 00 校验。列表粗粒度列在整个小时/分钟都越界时禁用，最终确认仍校验完整时间。隐藏禁用项使用 `hide-disabled-options`。

<demo src="./__demos__/bounds.vue"></demo>

### 跳过确认

<demo src="./__demos__/no-confirm.vue"></demo>

## 输入与状态控制

### 交互状态对比

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置             | 作用             | 相关示例                                     |
| ---------------- | ---------------- | -------------------------------------------- |
| `format`         | 展示格式         | 交互状态对比、手输与面板选择、默认值与受控值 |
| `readonly`       | 只读             | 交互状态对比、选择与提交、多个字段与浮层切换 |
| `clearable`      | 可清除           | 手输与面板选择、默认值与受控值、选择与提交   |
| `disabled`       | 禁用             | 交互状态对比、选择与提交                     |
| `input-editable` | 允许桌面文本输入 | 手输与面板选择、复制与编辑                   |
| `open`           | 弹层显隐         | 默认值与受控值                               |

<!-- demo-config-notes:end -->

在同一实例上切换禁用、只读和错误状态后再操作控件，比较可编辑性和交互反馈。恢复开关位于目标控件外；错误外观本身不会执行校验。

<details>
<summary>配置说明与使用限制</summary>

#### 交互状态切换

适用于选择时间点。调整禁用、只读、错误反馈，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

</details>

<demo src="./__demos__/state-lab.vue"></demo>

### 手输与面板选择

`inputEditable` 默认为 `true`（Maple 默认为 `false`）。回车或失焦提交，Esc 撤销；格式、步长、边界和禁用规则与面板一致。无效输入或父级拒绝受控更新时回到模型值；切换为不可编辑、只读或禁用会丢弃未提交输入。输入法组合期间不提交。范围两端之间移动焦点不提交。

<demo src="./__demos__/text-entry.vue"></demo>

### 默认值与受控值

`defaultValue` 初始化字段/纯面板的非受控值，仅读取一次；后续选择保存在各自实例。传入 `modelValue` 后以父级值为准。字段 `defaultOpen` 只初始化一次；受控 `open` 需父级接收 `update:open`，`open-change(open: boolean)` 通知显隐请求。`clear` 不携带参数。纯面板支持 `disabled`，同时禁用范围两端。

<demo src="./__demos__/default-state.vue"></demo>

### 选择与提交

字段的 `focus` / `blur` 事件均无参数，同一次聚焦或失焦只通知一次；范围两端切换不产生额外整字段事件。只读字段仍可聚焦，但不能展开修改；禁用字段不能聚焦，已聚焦时动态禁用会释放焦点状态并通知失焦。

字段和纯面板提交时按当前格式、步长及禁用规则重新校验；Cedar 手动输入也遵守相同规则。规则变化不会自动改写已提交值。起止端点始终不自动交换；关闭 `show-next-day` 时倒序范围不能提交，开启后允许结束早于开始。清空仍提交 `undefined`，不受候选时间限制，但遵守只读/禁用状态。

`select(value, date)` 表示用户选择草稿，`change(value, date)` 表示提交。未配置 empty-value 时，单值和范围字段清除返回 `undefined`，对应 Date 参数也为 `undefined`；显式配置时保留允许的清空输出，`clear` 不带参数。Date 参数是本地时间表示（不自动进行次日日期运算）。字段默认确认后提交；`disable-confirm` 开启后仅有效选择立即提交并请求关闭，不允许次日时的倒序草稿仍不能提交。受控 `open` 仍需父级接受更新。独立纯面板同样默认确认后提交；开启 disable-confirm 后有效选择立即提交，但不会关闭面板。

<demo src="./__demos__/selection-events.vue"></demo>

父级直接替换模型会重置草稿，但不会触发 `select` 或 `change`。示例提供“外部更新”按钮，可与用户选择、确认提交分别观察。

字段使用 PickerField → FieldDecorator；面板只负责选择，不注入表单。有效文本在回车或失焦时提交，Escape 或外部关闭丢弃未确认草稿，清除立即提交空值。四类字段的统一示例见 [Date](/components/date/#统一字段与提交)。

### 多个字段与浮层切换

示例分别展示单时间与范围的模型值。取消只丢弃当前字段的草稿，清除只影响当前字段；切换到其他字段不会提交尚未确认的选择。

<demo src="./__demos__/multiple-fields.vue"></demo>

### 复制与编辑

open-trigger-target="icon" 时，输入区可以编辑或复制，只有右侧选择按钮响应点击打开。关闭手输或搜索后，已有文本仍可复制。

<demo src="./__demos__/open-trigger-target.vue"></demo>

### 共享字段加载

`loading` 控制共享字段加载状态；`loading-mode` 为 `default`（指示器）或 `line`（底部不定进度线），默认 `default`。渲染统一由 FieldDecorator 负责，不隐式改变 disabled/readonly；需要禁止编辑时单独设置。

## 阅读方向

继承最近的 `dir="ltr|rtl"`，方向切换不修改时间或提交草稿。小时、分钟、秒等列按阅读顺序排列；左右键沿视觉方向跨列移动焦点。Cedar 的上下键与 Home/End 在当前时间列移动焦点，Enter/Space 选择，禁用项跳过；Maple 滚轮保留上下键和 Home/End 的选值行为。是否即时提交仍由原有确认配置决定。弹层继承字段来源方向。

## API

### 空值识别与阅读空文案

`empty-values` 用于空值识别，`empty-value` 保留原清空输出；`empty-text` 仅在 `read-pretty` 空内容下展示，默认 `'-'`，字段 > FormItem > Form，自定义 read 插槽优先。显式配置 empty-values 后，内置 required 接入该策略，自定义校验仍收到原值。详见[统一说明](/guide/empty-values/)。

| 参数         | 类型               | 缺省与范围                                            |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | 字段 > FormItem > Form > 组件族默认；完整覆盖，不合并 |
| empty-text   | string             | 字段 > FormItem > Form > '-'；显式 '' 有效            |

以上是字段展示层 API；纯面板不因此新增阅读模式。Form 与 FormItem 提供继承配置。empty-value 的现有类型与默认输出仍按该组件原 API 执行。

### 浮层配置与字段通知

`popup-props` 显式配置本地 Trigger 的定位和外观，例如 `{ placement: 'top-start' }`；不能覆盖 open、disabled、trigger 等字段状态或交互。顶层 `popup-container`（包括 false）优先。`input-editable` 默认 true，可关闭桌面文本输入。面板外观使用 `time-picker-props`（支持 class/style），面板/浮层参数通过上述显式属性配置；id、aria-* 等属性透传给字段。

`click(event)` 只通知非禁用字段的点击；只读字段可通知但不展开。关闭统一监听 `open-change(false)`，它表示关闭请求，受控 open 仍需父级接受。两端不提供字段 close 事件；不要把关闭请求当作值提交。

字段图标插槽为 `suffix-icon`，参数为 `focus: boolean`、`popupOpen: boolean`。实例方法 `focus(index = 0)` 聚焦指定端点而不提交值；`blur()` 失焦并请求关闭。

### Time Props

| 参数 | 说明 | 类型 | 缺省说明 |
| --- | --- | --- | --- |
| `before-commit` | 显式字段保存守卫，使用 payload、done、context | `BeforeFieldCommit` | `undefined` |
| `blur-color` | 失焦时的颜色 | `string` | 主题缺省 |
| `clearable` | 允许清除；不会绕过禁用、只读或等待状态 | `boolean` | `true` |
| `default-open` | 非受控初始开关，仅创建时读取 | `boolean` | `false` |
| `default-value` | 非受控初始值，仅创建时读取 | `TimeValue` | `undefined` |
| `disable-confirm` | 有效选择后立即提交；字段还请求关闭 | `boolean` | `false` |
| `disabled` | 禁用交互；字段未设时继承 FormItem/Form | `boolean` | 继承，最终 false |
| `disabled-hours` | 返回禁用小时，小时始终为 0–23 | `() => number[]` | `undefined` |
| `disabled-minutes` | 按已选小时返回禁用分钟 | `(hour?: number) => number[]` | `undefined` |
| `disabled-seconds` | 按已选小时和分钟返回禁用秒 | `(hour?: number, minute?: number) => number[]` | `undefined` |
| `edit-mode` | 字段编辑模式；未设时继承 FormItem/Form | `FieldEditMode`<br>`'direct' \| 'click' \| 'dblclick'` | 继承，最终 direct |
| `empty-text` | 纯阅读模式的空内容文字 | `string` | 继承，最终 '-' |
| `empty-value` | 清空输出或工厂，不改变空值识别策略 | `TimeValue \| null \| (() => TimeValue \| null \| undefined)` | `undefined` |
| `empty-values` | 空值识别列表，覆盖而不合并 | `readonly unknown[]` | 继承/组件族默认 |
| `error` | 字段错误展示；未设时继承 | `boolean` | 继承，最终 false |
| `focus-color` | 聚焦时的颜色 | `string` | 主题缺省 |
| `format` | 字符串解析、显示及输出格式；十二小时缺省带 a | `string` | 按 use12Hours |
| `hide-disabled-options` | 隐藏禁用时间选项；时钟保留刻度位置 | `boolean` | `false` |
| `hint` | 浮动占位提示；存在 Form 外置标签时不浮动 | `boolean` | `true` |
| `input-editable` | 允许手输；不影响面板选择入口 | `boolean` | `true` |
| `line` | 显示外壳边框或底线 | `boolean` | `true` |
| `loading` | 手动加载反馈，不从事件返回值推导 | `boolean` | `false` |
| `loading-mode` | 字段加载展示模式 | `default \| line` | `default` |
| `max` | 最大可选钟点，HH:mm 或 HH:mm:ss，包含端点 | `string` | `undefined` |
| `min` | 最小可选钟点，HH:mm 或 HH:mm:ss，包含端点 | `string` | `undefined` |
| `model-value` | 外部值；数值和 Date 保留原值，正常提交输出格式化字符串 | `TimeModelValue` | `undefined` |
| `open` | 受控编辑层开关 | `boolean` | `undefined` |
| `open-trigger-target` | 点击整个字段或仅图标打开；不限制键盘打开 | `field \| icon` | `field` |
| `placeholder` | 占位文字；范围可使用起止数组 | `string` | `undefined` |
| `popup-container` | 编辑层挂载容器，false 保持原位 | `PopupContainer` | 共享容器缺省 |
| `popup-props` | 浮层展示配置，不接管模型、状态和事件 | `TimePopupPresentationProps` | `{}` |
| `read-pretty` | 纯阅读展示，不渲染编辑器；独立于 readonly | `boolean` | 继承，最终 false |
| `readonly` | 只读；字段可聚焦复制，不改值或展开编辑 | `boolean` | 继承，最终 false |
| `size` | 五档尺寸；字段遵循表单继承 | `ComponentSize`<br>`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | 继承，最终 md |
| `step` | 以 0 点为起点的时分秒步长，无效步长回退为 1 | `TimeStep` | 有效步长均 1 |
| `text-color` | 内容文字颜色 | `string` | 主题缺省 |
| `time-picker-props` | 独立时间面板的展示配置，根拥有模型、规则和状态 | `TimePanelPresentationProps` | `{}` |
| `use12-hours` | 十二小时面板；小时禁用回调仍用 0–23 | `boolean` | `false` |
| `variant` | 字段外观 | `filled \| outline \| standard` | `filled` |

### 编辑与确认

通过 `edit-mode` 配置编辑方式；未指定时依次继承 FormItem、Form，默认 `direct`。支持值：`direct / click / dblclick`。非 direct 编辑模式通过字段值入口打开编辑面板，并维护单份草稿；确认后才更新 v-model，取消、重置或启用 readPretty 时丢弃草稿。

Cedar 使用 edit-mode="click" / "dblclick" 在字段附近打开编辑浮层，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。readPretty 为独立阅读属性，与 readonly、disabled 分开。

`before-commit(payload, done, context)` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

日期／时间字段在 inline 下沿用原确认策略；在 click/dblclick 编辑展示中，内部纯面板隐藏确认工具栏，由编辑层提供唯一一组确认／取消。独立 DatePicker、DateRangePicker、TimePicker、TimeRangePicker 保留原有面板 API 和确认行为，不继承 Form 的字段展示。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。

### 透传配置边界

open/defaultOpen、disabled、trigger、closeOnClickReference、preventFocus 和对应展开更新由时间字段管理。顶层 popup-container 明确设置时优先，否则使用嵌套配置；popupClass 会合并。inline 展示层固定 popupOffset=4；Maple 还固定 unmountOnClose=true，因此嵌套配置中的这些字段不保证能控制最终值。

### TimePicker Props

| 参数 | 说明 | 类型 | 缺省说明 |
| --- | --- | --- | --- |
| `default-value` | 非受控初始值，仅创建时读取 | `TimeValue \| TimeValue[]` | `undefined` |
| `disable-confirm` | 有效选择后立即提交；字段还请求关闭 | `boolean` | `false` |
| `disabled` | 禁用面板选择和确认 | `boolean` | `false` |
| `disabled-hours` | 返回禁用小时，小时始终为 0–23 | `() => number[]` | `undefined` |
| `disabled-minutes` | 按已选小时返回禁用分钟 | `(hour?: number) => number[]` | `undefined` |
| `disabled-seconds` | 按已选小时和分钟返回禁用秒 | `(hour?: number, minute?: number) => number[]` | `undefined` |
| `format` | 字符串解析、显示及输出格式；十二小时缺省带 a | `string` | 按 use12Hours |
| `hide-disabled-options` | 隐藏禁用时间选项；时钟保留刻度位置 | `boolean` | `false` |
| `max` | 最大可选钟点，HH:mm 或 HH:mm:ss，包含端点 | `string` | `undefined` |
| `min` | 最小可选钟点，HH:mm 或 HH:mm:ss，包含端点 | `string` | `undefined` |
| `model-value` | 面板外部值，初始化草稿并响应后续变化 | `TimeValue \| TimeValue[]` | `undefined` |
| `readonly` | 只读面板，不改草稿或确认 | `boolean` | `false` |
| `show-next-day` | 仅范围：允许结束早于开始并显示次日，不交换起止 | `boolean` | `false` |
| `step` | 以 0 点为起点的时分秒步长，无效步长回退为 1 | `TimeStep` | 有效步长均 1 |
| `type` | 桌面通用面板的单选/范围模式 | `time \| time-range` | `time` |
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
| `update:modelValue` | `TimeModelValue` |
| `change` | `TimeModelValue, Date \| undefined` |
| `select` | `string \| undefined, Date \| undefined` |
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
| `update:modelValue` | `TimePickerEmits['update:modelValue']` |
| `change` | `TimePickerEmits['change']` |
| `select` | `TimePickerEmits['select']` |
| `confirm` | `TimePickerEmits['confirm']` |

### 面板事件

纯面板业务事件为 update:modelValue、change、select、confirm。select 通知候选，确认有效后通知 confirm；值实际改变时才通知 update:modelValue 和 change。关闭、清空、焦点等字段事件不属于纯面板。

面板 actions 的完整作用域如下；extra 无参数。

```ts
import type { TimeValue } from '@cedar-design/ui-vue'
type PanelActionsScope = { confirm: () => boolean; canConfirm: boolean; value: TimeValue | Array<TimeValue | undefined> | undefined }
```

### 显式保存守卫

beforeCommit(payload, done, context) 仅属于字段保存。payload 含 value、previousValue，context 含 signal 和可选 event。返回 undefined 等待 done；返回 boolean 或 Promise 按结果结算。FormItem 先校验候选；失败保留草稿。普通 select、change、confirm 和 click 监听器返回值不会执行该任务协议。

### 类型导入

```ts
import { Time, TimePicker, type TimeProps, type TimeEmits,
  type TimeSlots, type TimeInstance, type TimePickerProps,
  type TimePickerEmits, type TimePickerSlots } from '@cedar-design/ui-vue'
```

<!-- time-contract:end -->

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-time-picker-border-color` | `var(--c-color-neutral-3)` | `border`, `border-bottom`, `border-inline-end`, `border-top` |
| `--c-time-picker-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-time-picker-box-shadow` | `var(--c-shadow1-down)` | `box-shadow` |
| `--c-time-picker-cell-bg-active` | `var(--c-color-fill-2)` | `background-color` |
| `--c-time-picker-cell-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-time-picker-cell-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-time-picker-cell-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-time-picker-cell-font-weight-active` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-time-picker-cell-height` | `var(--c-size-6)` | `height`, `line-height` |
| `--c-time-picker-cell-padding-left` | `var(--c-spacing-9)` | `padding-inline-start` |
| `--c-time-picker-cell-spacing` | `var(--c-spacing-2)` | `height`, `padding` |
| `--c-time-picker-cell-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-time-picker-cell-text-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-time-picker-column-height` | `224px` | `height` |
| `--c-time-picker-column-width` | `var(--c-size-16)` | `width` |
| `--c-time-picker-footer-extra-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-time-picker-footer-padding` | `var(--c-spacing-4)` | `padding` |
| `--c-time-picker-popover-body-reserve` | `128px` | `height` |
| `--c-time-picker-popover-column-max-height` | `224px` | `height` |
| `--c-time-picker-popover-gap` | `32px` | `max-width` |
| `--c-time-picker-range-gap` | `var(--c-spacing-6)` | `gap` |
| `--c-time-picker-range-next-day-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-time-picker-range-panel-title-gap` | `var(--c-spacing-3)` | `gap` |
| `--c-time-picker-range-panel-title-line-height` | `22px` | `line-height` |
| `--c-time-picker-range-panel-title-padding-horizontal` | `var(--c-spacing-6)` | `padding` |
| `--c-time-picker-range-panel-title-padding-vertical` | `var(--c-spacing-3)` | `padding` |
| `--c-time-picker-range-wrapper-padding` | `var(--c-spacing-4)` | `padding` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-time-picker-border-color: var(--c-color-neutral-3);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
