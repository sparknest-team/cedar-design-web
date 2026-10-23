---
title: Time 时间
description: '表单时间字段。面板请使用 TimePicker。'
permalink: /components/time/
---

# Time

父级在确认后保持弹层展开时，没有新选择的重复确认不会重复提交；新的时间选择会开启新事务，可以再次确认。

展开时，原生 combobox 通过 `aria-controls` 关联当前实例的命名弹层；关闭后同步更新状态并移除关联。`aria-label`、`aria-describedby` 可传递给原生控件。自定义 selected/触发插槽需自行保留可访问名称、键盘操作和状态关联。

表单时间字段（带触发器）。内部使用 `TimePicker`。

纯面板请使用 [`TimePicker`](/components/time-picker/)（默认无触发器）。时间范围字段请使用 [`TimeRange`](/components/time-range/)。

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

### 手输与面板选择

`inputEditable` 默认为 `true`（Maple 默认为 `false`）。回车或失焦提交，Esc 撤销；格式、步长、边界和禁用规则与面板一致。无效输入或父级拒绝受控更新时回到模型值；切换为不可编辑、只读或禁用会丢弃未提交输入。输入法组合期间不提交。范围两端之间移动焦点不提交。

<demo src="./__demos__/text-entry.vue"></demo>

### 默认值与受控值

`defaultValue` 初始化字段/纯面板的非受控值，仅读取一次；后续选择保存在各自实例。传入 `modelValue` 后以父级值为准。字段 `defaultOpen` 只初始化一次；受控 `open` 需父级接收 `update:open`，`open-change(open: boolean)` 通知显隐请求。`clear` 不携带参数。纯面板支持 `disabled`，同时禁用范围两端。

<demo src="./__demos__/default-state.vue"></demo>

### 选择与提交

字段的 `focus` / `blur` 事件均无参数，同一次聚焦或失焦只通知一次；范围两端切换不产生额外整字段事件。只读字段仍可聚焦，但不能展开修改；禁用字段不能聚焦，已聚焦时动态禁用会释放焦点状态并通知失焦。

字段和纯面板提交时按当前格式、步长及禁用规则重新校验；Cedar 手动输入也遵守相同规则。规则变化不会自动改写已提交值。范围提交默认按时间排序，开启 `show-next-day` 保留输入顺序。清空仍提交 `undefined`，不受候选时间限制，但遵守只读/禁用状态。

`select(value, date)` 表示用户选择草稿，`change(value, date)` 表示提交。单值和范围字段清除均返回 `undefined`，对应 Date 参数也为 `undefined`，`clear` 不带参数。Date 参数是本地时间表示（不自动进行次日日期运算）。字段默认确认后提交；`disable-confirm` 开启后有效选择立即提交并请求关闭。范围提交会排序，开启 `show-next-day` 后保留端点顺序。受控 `open` 仍需父级接受更新。独立纯面板同样默认确认后提交；开启 disable-confirm 后立即提交，但不会关闭面板。

<demo src="./__demos__/selection-events.vue"></demo>

父级直接替换模型会重置草稿，但不会触发 `select` 或 `change`。示例提供“外部更新”按钮，可与用户选择、确认提交分别观察。

字段使用 PickerField → FieldDecorator；面板只负责选择，不注入表单。有效文本在回车或失焦时提交，Escape 或外部关闭丢弃未确认草稿，清除立即提交空值。四类字段的统一示例见 [Date](/components/date/#统一字段与提交)。

### 模型类型与固定文字

字符串按 `format` 严格解析，不接受溢出时间或不匹配的格式；Date 和毫秒时间戳按本地时间反显。提交值始终为格式化字符串（范围为数组）。

<demo src="./__demos__/format-model.vue"></demo>

### 显示格式

未设置 `format` 时默认 `HH:mm:ss`；开启 `use12-hours` 后默认 `hh:mm:ss a`，字段与纯面板一致。显式 `format` 决定字符串值的解析和输出格式，`use12-hours` 还可独立控制面板小时列；建议十二小时格式包含 `a` 或 `A`，以区分上午与下午。

使用方括号包裹固定文字，例如 `[Time] HH:mm`。固定文字不参与时间列识别，不会因为包含 `s` 或 `A` 而额外显示秒或 AM/PM 列。空格式或没有时、分、秒 token 的格式回退到上述默认格式。

<demo src="./__demos__/format.vue"></demo>

### 十二小时制

<demo src="./__demos__/ampm.vue"></demo>

### 跳过确认

<demo src="./__demos__/no-confirm.vue"></demo>

### 独立步长示例

十二小时显示与5小时步长组合：步长仍以24小时的0点为起点，合法小时为0/5/10/15/20，而不是在中午重新起算。AM候选12/05/10，PM候选03/08；显示为03 PM时提交模型仍为15:30:00（示例format保持HH:mm:ss）。切换规则不改旧09:30:00，取消也不提交候选对齐值；确认合法候选后才写回。可再开启“禁用15点”叠加disabled-hours回调，此时03 PM不可选而08 PM仍对应20点。“父级接受更新”关闭时只记录提议，不改业务值；重新接受后确认才回写。提议次数不是模型接受次数。其他非整除步长和物理触屏仍需单独验收。

With 12-hour display and a 5-hour step, hours remain anchored to midnight: 0/5/10/15/20, not restarted at noon. AM offers 12/05/10 and PM offers 03/08. Selecting 03 PM commits 15:30:00 because this Demo retains HH:mm:ss as its model format. Changing the rules preserves the old 09:30:00; cancellation does not commit aligned candidates. Only confirmation writes the selected value. Enable Disable 15:00 to combine disabled-hours with the step: 03 PM is unavailable while 08 PM still means 20:00. Turning off Accept controlled updates records proposals without changing the business value; re-enable it before confirming an accepted value. Proposal counts are not acceptance counts. Other non-dividing steps and physical touch remain separate coverage.

小时候选以 0 点为起点，十二小时制只改变显示；无效步长回退为 1。

<demo src="./__demos__/step.vue"></demo>

### 多个字段与浮层切换

示例分别展示单时间与范围的模型值。取消只丢弃当前字段的草稿，清除只影响当前字段；切换到其他字段不会提交尚未确认的选择。

<demo src="./__demos__/multiple-fields.vue"></demo>

### 交互状态切换

适用于选择时间点。调整禁用、只读、错误反馈，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

<demo src="./__demos__/state-lab.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### 浮层配置与字段通知

`popup-props` 显式配置本地 Trigger 的定位和外观，例如 `{ placement: 'top-start' }`；不能覆盖 open、disabled、trigger 等字段状态或交互。顶层 `popup-container`（包括 false）优先。`input-editable` 默认 true，可关闭桌面文本输入。面板外观使用 `time-picker-props`（支持 class/style），不再从未声明的 attrs 读取面板/浮层参数；id、aria-* 等属性透传给字段。

`click(event)` 只通知非禁用字段的点击；只读字段可通知但不展开。关闭统一监听 `open-change(false)`，它表示关闭请求，受控 open 仍需父级接受。两端不提供字段 close 事件；不要把关闭请求当作值提交。

字段图标插槽为 `suffix-icon`，参数为 `focus: boolean`、`popupOpen: boolean`。实例方法 `focus(index = 0)` 聚焦指定端点而不提交值；`blur()` 失焦并请求关闭。

### 字段外壳与配置边界

`hint` 控制浮动提示（Cedar 默认 false，Maple 默认 true），有 Form 外置标签时不启用。`line` 默认 true；`text-color / focus-color / blur-color` 为可选颜色字符串。`error` 未设置时继承 Form，显式 false 覆盖错误态。TimeRange 的 `separator` 默认 ` ~ `，允许空字符串。默认 variant 保留 Cedar filled、Maple standard，可显式指定同一变体。

字段顶层负责值、默认值、展开、格式、步长、边界、禁用规则和只读/禁用状态。请直接在字段上设置这些属性，不放进 timePickerProps/timeRangePickerProps。嵌套配置只允许对应面板的展示属性；不能通过模型/确认/选择事件替换字段流程。类型会拒绝此类配置，运行时也过滤，且不会把嵌套规则作为顶层未设置时的回退。

Maple 的 pickerProps 可配置 optionHeight/optionCount 等外观，不可替换 columns、fieldNames、选中值、toolbar 或展开状态。popupProps 可设置定位、外观和生命周期回调，但不能设置 open/defaultOpen 或覆盖展开更新事件；顶层 popupContainer（包括 false）优先。纯时间面板内部的嵌套配置遵循相同规则。

<demo src="./__demos__/field-appearance.vue"></demo>


字段交互由本库的一份实例控制器编排：select 暂存草稿，确认时按当前规则校验后提交并通知 Form。清除通过相同提交路径写入 undefined，再通知 clear；只读、禁用或未开启 clearable 时不能清除。只读仍可聚焦，focus/blur 去重；受控关闭请求尚未被接受时，不会重复提交。

### 时间上下限

单值边界示例收紧下限至10:30:40后，字段仍反显已提交的10:30:38，纯面板不能确认。跨到31分钟后显式选择02秒，确认才将字段/模型更新为包含上界10:31:02；字段弹层改秒为00后Escape取消仍保持02。列表保留旧秒草稿时须自行选合法秒，不会把动态规则变化当作自动提交。

In the single-value bounds Demo, tightening the minimum retains committed 10:30:38 and prevents invalid confirmation. Explicitly selecting 10:31:02 and confirming commits the inclusive maximum. Editing the field popup draft to second 00 and canceling preserves second 02. Rule changes alone do not submit a new value.

`min` / `max` 的类型为 `string`，默认不限制；格式固定为 24 小时制 `HH:mm` 或 `HH:mm:ss`，不受 `format` 或 `use12Hours` 影响，包含端点。`HH:mm` 的秒视为 00。范围的两个端点分别校验；`showNextDay` 不把边界变成跨午夜区间。`min > max` 时没有可提交时间。无法解析的边界按未设置处理。

动态修改边界不会改写外部模型。提交须同时满足边界、步长和禁用回调；不显示秒时按秒为 00 校验。列表粗粒度列在整个小时/分钟都越界时禁用，最终确认仍校验完整时间。隐藏禁用项使用 `hide-disabled-options`。

<demo src="./__demos__/bounds.vue"></demo>


### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model-value` | 绑定值 | `string \| number \| Date` | `-` |
| `open` | 弹层显隐 | `boolean` | `-` |
| `popup-props` | 本地 Trigger 的展示配置，不控制字段状态 | `TimePopupPresentationProps<Partial<TriggerProps>>` | `{}` |
| `input-editable` | 允许桌面文本输入 | `boolean` | `true` |
| `clearable` | 可清除 | `boolean` | `true` |
| `disabled` | 禁用 | `boolean` | `false` |
| `readonly` | 只读 | `boolean` | `false` |
| `size` | 尺寸 | `xs \| sm \| md \| lg \| xl` | `-` |
| `variant` | 输入框变体 | `filled \| outline \| standard` | `filled` |
| `placeholder` | 占位 | `string` | `-` |
| `format` | 展示格式 | `string` | `-` |
| `use12-hours` | 12 小时制 | `boolean` | `false` |
| `hide-disabled-options` | 隐藏禁用时间选项 | `boolean` | `false` |
| `step` | 时分秒步长 | `object` | `-` |
| `disable-confirm` | 跳过确认 | `boolean` | `false` |
| `time-picker-props` | 透传给 TimePicker | `object` | `{}` |

### Form 字段展示与确认

本组件支持 `presentation`，字段 > FormItem > Form 逐层继承；未指定时为 `inline`，保留原有交互。支持值：`inline / click / dblclick`。其他编辑展示使用 Cell 入口和一份草稿，确认后才更新 v-model；取消、重置或启用 readPretty 丢弃草稿。

Cedar 使用 presentation="click" / "dblclick" 在原位进入编辑，Enter/F2 也可进入；取消/Escape 丢弃草稿，确认后提交。 readPretty 为纯阅读属性，与 readonly、disabled 独立。

`before-commit(value, { previousValue, signal })` 可拦截弹层保存；FormItem 先校验候选值，失败保持编辑。`open / default-open / update:open` 控制编辑层。`#read="{ value, text }"` 可自定义阅读内容。集中示例见 Form 的“各类字段统一展示”。

日期／时间字段在 inline 下沿用原确认策略；在 popover/popup/dialog 中，内部纯面板隐藏确认工具栏，由编辑层提供唯一一组确认／取消。独立 DatePicker、DateRangePicker、TimePicker、TimeRangePicker 保留原有面板 API 和确认行为，不继承 Form 的字段展示。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。
