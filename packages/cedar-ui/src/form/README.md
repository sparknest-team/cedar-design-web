---
permalink: /components/form/
---

# Form

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

标签一律由 `FormItem` 的 `label`（或 label 插槽）负责渲染；控件本身只提供 `placeholder` 等占位文案，不承担字段标签。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

### 全局禁用

通过 disabled 属性可以禁用整个表单。

<demo src="./__demos__/disabled.vue"></demo>

### 标签与内容装饰

<demo src="./__demos__/decoration.vue"></demo>

### 文本与数值字段

<demo src="./__demos__/field-components.vue"></demo>

### 开关与勾选字段

<demo src="./__demos__/field-choice.vue"></demo>

### 下拉选择字段

<demo src="./__demos__/field-selection.vue"></demo>

### 层级选择字段

<demo src="./__demos__/field-tree.vue"></demo>

### 日期字段

<demo src="./__demos__/field-date.vue"></demo>

### 时间字段

<demo src="./__demos__/field-time.vue"></demo>

### 进度与评分字段

<demo src="./__demos__/field-rating.vue"></demo>

### 附件字段

<demo src="./__demos__/field-upload.vue"></demo>

### 专用字段

<demo src="./__demos__/field-specialized.vue"></demo>

### 独立面板操作区

<demo src="./__demos__/field-panel-actions.vue"></demo>

### 表单布局

表单支持三种布局方式： horizontal - 水平排列（默认，标签在左、控件在右）， vertical - 垂直排列（标签在上、控件在下）， inline - 行内排列。

通过 `Form.layout`（或单项覆盖）切换上下 / 左右标签布局。

<demo src="./__demos__/layout.vue"></demo>

### 额外信息和帮助信息

可以使用 extra 添加额外信息。
如果需要在外部自定义校验信息，可以使用`help`属性或插槽。error 状态下校验信息优先；无错误展示时显示 help。

<demo src="./__demos__/extra.vue"></demo>

### 嵌套数据

展示了多种表单项嵌套的方式。
表单控件通过 FormItem 注入的上下文继承状态和事件，无需绑定到第一子组件。
如果使用 Grid 组件进行布局，请设置 :content-flex="false" 关闭表单项内容的 flex 布局。

<demo src="./__demos__/nested-data.vue"></demo>

### 栅格布局

展示了使用栅格布局的方式。可以使用 `label-col-flex` 的带单位字符串指定标签宽度，数字表示 Col 伸缩比例。

### 自动标签宽度

设置 `auto-label-width` 开启自动标签宽度。仅在 `layout="horizontal"` 布局下生效。

自动宽度随标签修改、字段增删更新，各个表单独立计算。

<demo src="./__demos__/auto-label-width.vue"></demo>

### 验证表单

展示了表单校验的使用方法。

<demo src="./__demos__/validate.vue"></demo>

### 清空时校验

`validate-trigger="clear"` 只在用户点击控件的清空按钮时校验；普通输入不会触发。本例清空后显示必填错误；重新输入不会自动清除该错误，可主动校验或重置表单。

<demo src="./__demos__/clear-trigger.vue"></demo>

### 自定义表单校验状态

开启 feedback 可以让部分输入组件展示当前状态信息

<demo src="./__demos__/feedback.vue"></demo>

### 动态表单

通过数据动态控制表单内容。

<demo src="./__demos__/dynamic-form.vue"></demo>

### 滚动到指定表单字段

展示了提交失败自动滚动到第一个错误字段和手动滚动对应字段的使用方法。

<demo src="./__demos__/scroll-assign.vue"></demo>

### 标签栅格与局部覆盖

两端默认横向比例为标签 5/24、内容 19/24；Cedar 默认 horizontal，Maple 默认 vertical。仅 horizontal 消费栅格比例与自动宽度；vertical/inline 不套用 Col 百分比。响应式 xs/sm 等按视口宽度生效。

<demo src="./__demos__/label-columns.vue"></demo>

### 固定标签宽度

FormItem 显式配置优先于 Form。Col 参数与 style 对象整项覆盖，不做深层合并。label-col-flex 优先于 auto-label-width；带单位字符串指定宽度，数字沿用 Col 的伸缩比例（并非 px），内容列自动填满剩余空间。隐藏标签时内容占满。

<demo src="./__demos__/fixed-label-width.vue"></demo>

自动宽度只测量未指定 label-col-flex 的横向标签；标签文字变化、动态增删会重新对齐。多个 Form 各自计算，标签为空或移除全部字段时不会产生 Infinity/NaN。使用很长的标签时建议在窄屏切换 vertical 或设置固定宽度。

### 跨字段校验与原生提交

Pause cross-field validation holds the local confirmation rule until Resolve cross-field result. Completion compares its confirmation value with the current source. Native reset settles pending tasks, clears the model and submitted snapshot, retains the history count and prevents late submission. This is not remote cancellation or exhaustive dependency-race coverage.

“暂停跨字段校验”将确认规则挂起到“返回跨字段结果”，返回时比较本次确认值与当前源代码（不是远端接口或提交开始时的源快照）。匹配值提交后等待中修改源代码，会返回依赖错误；修正确认值并Enter重试后通过。等待中原生重置会结清本地任务、清空模型与提交快照、保留历史计数，不产生迟到提交；停用/卸载也清理等待。不代表异步循环依赖或多请求顺序均已覆盖。

未暂停时确认规则立即比较当前源代码。先匹配通过，再修改源代码，主动只校验确认值或重新提交会显示依赖错误；改正确认值后可按 Enter 或提交按钮提交。原生重置清空模型、反馈和上次提交值，提交次数累计不清零。依赖由业务主动复验，单纯编辑不保证已有成功态仍有效；本地示例不等于任意异步提交竞争或外部持久化。

<demo src="./__demos__/cross-field.vue"></demo>

### 交互状态切换

适用于整张表单的状态继承。调整禁用、只读，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

<demo src="./__demos__/state-lab.vue"></demo>

### 校验展示状态

显式 validate-status 优先于自动状态；error 才显示错误信息，其他状态显示 help。它只控制展示，不改变 validate 的真实结果。自动校验经历 validating → success/error；clearValidate 恢复未校验状态。setFields 仅传 message 会设为 error；显式 status='' 和 message='' 可清空。

<demo src="./__demos__/presentation-status.vue"></demo>

### 字段展示与确认提交

Form、FormItem、Input 和 Select 支持 presentation 继承，优先级为字段 > FormItem > Form。默认 inline；Cedar 支持 click/dblclick。普通 v-model 不变，弹层默认确认后提交。readPretty 不显示编辑器和搜索。inline 即时更新，弹层确认后更新；搜索框按展示位置自动排列。

<demo src="./__demos__/field-presentation.vue"></demo>

### 原位编辑的提交与切换

`click` / `dblclick` 共用事务逻辑：点击外部、Tab 离开或切换字段时先尝试保存，成功后关闭；校验失败或 `beforeCommit` 拒绝时保留草稿和错误，并阻止打开其他字段。同一文档同时只打开一个原位编辑器，包括不同 Form 和独立字段。字段自身传送到 body 的选项、日期和时间面板属于内部区域，选值不会触发外部保存。

内层面板打开时，Enter 优先选值，Esc 只关闭最上层面板并回到控件、保留字段草稿；面板关闭后，Enter 保存，Esc 取消并恢复原值。悬浮或键盘聚焦时显示编辑图标，并通过提示区分单击/双击；点击图标始终直接进入编辑。

多行文本保留 Enter 换行，Ctrl/Cmd+Enter 保存。输入法组词期间的 Enter 不提交。日期、时间面板内的单元格和列选项也只更新草稿，不误触外层保存。异步确认期间禁止重复确认、取消和切换；重置会终止保存及等待中的切换，迟到的结果不会写回。保存失败后可修改并重试。

### 禁用、只读与异步确认

<demo src="./__demos__/presentation-state.vue"></demo>

### 日期范围的跨页边界

比较日期、月份、年份范围：禁用 2027-01-01、2026-12、2100 年。禁用项不能作为端点，范围可以跨过它们；翻页后检查禁用项仍保持灰态。

<demo src="./__demos__/field-range-boundaries.vue"></demo>

### 表单异步校验

本地模拟异步校验，用户名输入 `admin` 后提交通过，其他值显示错误；不访问外部接口。原生提交/重置按钮使用 `html-type`。重置会取消本例的模拟校验并忽略旧提交结果，卸载或停用也会清理计时器。

外层标签通过 `label-attrs.for` 对应 Input 的 `id`；多个示例实例使用独立 ID，便于点击标签聚焦和辅助技术识别。

<demo src="./__demos__/async-validate-form.vue"></demo>

### 多字段异步聚合

State-command addendum: public `clearValidate()` and `setFields()` also invalidate a pending native submission, including field-scoped calls. Old completion cannot append submit events after a clear or explicit error; a fresh native submission still validates normally. The earlier exclusion below now applies only to editing without revalidation. The Demo keeps old tasks available for manual settlement; this does not cancel real requests.

显式调用validate()或validateField()会使等待中的旧原生submit失效：命令校验有自己的结果，不应让旧submit在完成后把旧错误或成功与当前模型混发。此后新的原生submit仍正常等待自己的字段校验并通知一次。该规则仅逻辑失效、不取消真实请求，不清空历史提交计数；既有方法签名不变，不保留旧的混发行为。仅编辑但未重新校验的快照协议仍未覆盖。

Explicit validate() or validateField() invalidates a pending older native submit. The imperative result is independent: an older submit must not later combine stale errors or success with the current model. A fresh native submit still waits for its own fields and notifies once. This is logical invalidation, not request cancellation, and retains submission history. Method signatures are unchanged; stale mixed notifications are not retained for compatibility. This does not define editing-only snapshot behavior.

“返回最新用户名结果 / 返回最新代码结果”优先结清对应字段最新任务，可让新submit先完成、旧结果最后返回。新成功后旧失败不追加提交或恢复错误；新失败后旧成功不追加提交或清除新错误。仍须等最新提交的两个字段都返回，单个字段返回不提交；默认“返回用户名/代码结果”继续返回最早任务。

原生submit采用最新提交生效：旧提交仍等待时再次提交，使旧提交的submit/submit-success/submit-failed续体失效。用guest/bad提交后改为admin/1234再提交；先返回旧两个结果，原生提交计数应仍0，新提交仍等自己的两个结果。反向旧成功/新失败同理，旧成功不能提前报通过。这个规则不取消真实请求，也不处理仅编辑但没有再次提交的业务快照。

原生submit等待中调用resetFields（含原生reset）会使该提交失效；旧Promise结清后不得再发submit、submit-success或submit-failed。停用/卸载同样使旧提交失效，后续新提交仍正常校验。此为逻辑失效，不是取消远端请求；并发submit和跨字段异步依赖不在这个重置协议内。

“原生异步提交”是表单内的原生submit按钮，也可聚焦后按Enter。独立“原生提交”计数须等两个本地异步字段都返回才增加：用户名失败先返回时暂不提交，代码返回后记录失败；修正为admin再提交，反序返回代码/用户名后记录成功并清错。下方“结果”仍只表示命令式校验，两个计数/结果互不冒充。完成后重置清空字段、保留历史提交计数。此顺序重试不代表并发submit或跨字段异步依赖已覆盖。

同一示例可连续点击两次“校验两个字段”：先输入旧值并发起，再改值发起新一轮。“返回用户名结果 / 返回代码结果”各返回该字段最早任务。旧整表先完成时，新一轮仍须等它自己的两个字段；旧成功或失败都不应覆盖最新字段反馈。结果文案由示例序号单独保护，不是 Form 自动取消旧请求，也不是原生提交并发协议。

两个字段分别返回独立本地 Promise。先返回任一字段可更新该字段反馈，但整表须等两个字段都完成。重置使旧反馈和示例结果失效，旧任务仍可手动返回以观察迟到结果。这里演示命令式 validate()，不是原生提交事件并发或跨字段依赖。

也可在用户名结果已返回、代码仍等待时重置，立即输入新值并再次校验。此时返回最早代码只会结清旧任务，不能恢复旧错误或提前完成新整表；必须返回新一轮自己的两个结果。分别用旧失败/新成功、旧成功/新失败核对字段反馈；结果文案仍由示例版本号单独保护，不等于取消真实请求。

<demo src="./__demos__/async-fields.vue"></demo>

### 异步校验的返回顺序

主动调用 `validateField` 后可继续修改字段并发起新校验。示例关闭自动触发，只通过按钮发起，手动返回本地结果以比较新旧顺序。先校验 guest，再校验 admin，先返回最新结果再返回最早结果；旧错误不应覆盖最新字段状态。结果文案由示例的请求序号保护，“本次校验值”是校验快照，不是服务端提交。

清空校验或重置后，仍可返回等待中的旧结果，确认不会恢复旧错误；卸载和停用会结清本地等待。真实接口还应取消请求，并由业务保护提交快照和版本。

本例也可在等待中切换表单 disabled / readonly：它们限制控件交互，不自动取消已经发起的校验，也不清除已有错误。外部校验控制按钮不属于被禁用的 Form。需要使旧结果失效时主动清空校验或重置；解除限制后可再次输入并发起新校验。

关闭 Mount async field 会移除字段但保留业务模型和待返回任务。重新挂载后可发起新校验，再按新旧顺序返回结果，核对旧实例的错误不会污染新字段；这不是删除业务数据，也不是整表并发提交协议。

等待中可通过“写入服务端错误”调用 `setFields` 设置显式错误；之前的异步成功或失败不应覆盖它。示例仍保留旧任务供手动返回，结果文案单独做版本保护。清空校验可移除错误，重新发起校验后以新结果为准；不代表真实接口已取消。

“校验整表”调用 `validate()`，“校验字段”调用 `validateField('name')`。可交错发起并按不同顺序返回，分别观察字段反馈和示例最新结果；重置使旧结果失效，不等于取消真实服务。当前示例只有一个异步字段，不代表多字段聚合、跨字段依赖或原生 submit 事件并发均已覆盖。

<demo src="./__demos__/async-race.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### `<Form>` Props

| 参数名                | 描述                                                      | 类型                                       |        默认值         |
| --------------------- | --------------------------------------------------------- | ------------------------------------------ | :-------------------: |
| model                 | 表单数据对象                                              | `object`                                   |         `{}`          |
| layout                | 表单的布局方式，包括水平、垂直、多列                      | `'horizontal' \| 'vertical' \| 'inline'`   |    `'horizontal'`     |
| size                  | 表单控件的尺寸                                            | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`     |        `'md'`         |
| label-col-flex | 标签列 flex；数字为伸缩比例，带单位字符串为宽度 | `number \| string` | `-` |
| label-col-style | 标签列逐实例样式 | `CSSProperties` | `-` |
| wrapper-col-style | 内容列逐实例样式 | `CSSProperties` | `-` |
| label-col-props       | 标签元素布局选项。参数同 `<col>` 组件一致                 | `object`                                   | `span: 5, offset: 0`  |
| wrapper-col-props     | 表单控件布局选项。参数同 `<col>` 组件一致                 | `object`                                   | `span: 19, offset: 0` |
| label-align           | 标签的对齐方向                                            | `'left' \| 'right'`                        |       `'right'`       |
| disabled              | 是否禁用表单                                              | `boolean`                                  |          `-`          |
| readonly              | 是否将表单控件设为只读                                    | `boolean`                                  |          `-`          |
| rules                 | 表单项校验规则                                            | `Record<string, FieldRule \| FieldRule[]>` |          `-`          |
| auto-label-width      | 是否开启自动标签宽度，仅在 `layout="horizontal"` 下生效。 | `boolean`                                  |        `false`        |
| id                    | 表单控件`id`的前缀                                        | `string`                                   |          `-`          |
| scroll-to-error | 验证失败后滚动到页面顺序的第一个（start）或最后一个（end）错误字段；不是视口对齐方式 | `'start' \| 'end'` | 不滚动 |

### `<Form>` Events

| 事件名         | 描述           | 参数                                                                                                      |
| -------------- | -------------- | --------------------------------------------------------------------------------------------------------- |
| submit         | 表单提交时触发 | data: `{values: Record<string, any>; errors: Record<string, ValidatedError> \| undefined}`<br>ev: `Event` |
| submit-success | 验证成功时触发 | values: `Record<string, any>`<br>ev: `Event`                                                              |
| submit-failed  | 验证失败时触发 | data: `{values: Record<string, any>; errors: Record<string, ValidatedError>}`<br>ev: `Event`              |
| reset          | 原生重置时触发，并重置字段值与校验状态 | ev: `Event` |

### `<form>` Methods

| 方法名        | 描述                 | 参数                                                                                                     | 返回值                                               |
| ------------- | -------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| validate      | 校验全部表单数据     | callback: `(errors: undefined \| Record<string, ValidatedError>) => void`                                | Promise<undefined \| Record<string, ValidatedError>> |
| validateField | 校验部分表单数据     | field: `string \| string[]`<br>callback: `(errors: undefined \| Record<string, ValidatedError>) => void` | Promise<undefined \| Record<string, ValidatedError>> |
| resetFields   | 重置表单数据         | field: `string \| string[]`                                                                              | -                                                    |
| clearValidate | 清除校验状态         | field: `string \| string[]`                                                                              | -                                                    |
| setFields     | 设置表单项的值和状态 | data: `Record<string, FieldData>`                                                                        | -                                                    |
| scrollToField | 滚动到指定表单项     | `field: string`                                                                                           | `-`                                                  |

### `<FormItem>` Props

未传布局、标签/内容栅格、样式、对齐和 flex 时继承 Form；显式值覆盖。

| 参数名            | 描述                                                                                                     | 类型                                                               |   默认值   |
| ----------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | :--------: |
| field             | 表单元素在数据对象中的path（数据项必填）                                                                 | `string`                                                           |    `''`    |
| label             | 标签的文本                                                                                               | `string`                                                           |    `-`     |
| tooltip           | 提示内容                                                                                                 | `string`                                                           |    `-`     |
| show-colon        | 是否显示冒号                                                                                             | `boolean`                                                          |  `false`   |
| no-style          | 是否去除样式                                                                                             | `boolean`                                                          |  `false`   |
| disabled          | 是否禁用                                                                                                 | `boolean`                                                          |    `-`     |
| readonly          | 是否只读；未传时继承 Form                                                                               | `boolean`                                                          |    `-`     |
| help              | 帮助文案                                                                                                 | `string`                                                           |    `-`     |
| extra             | 额外显示的文案                                                                                           | `string`                                                           |    `-`     |
| required          | 是否必须填写                                                                                             | `boolean`                                                          |  `false`   |
| asterisk-position | 可选择将星号置于 label 前/后                                                                             | `'start' \| 'end'`                                                 | `'start'`  |
| rules             | 表单项校验规则（优先级高于 form 的 rules）                                                               | `FieldRule \| FieldRule[]`                                         |    `-`     |
| validate-status   | 校验状态                                                                                                 | `'success' \| 'warning' \| 'error' \| 'validating'`                |    `-`     |
| validate-trigger  | 触发校验的事件；`clear` 仅由控件清空动作触发，不等同于 `change`                                  | `'change' \| 'input' \| 'focus' \| 'blur' \| 'clear'`             | `'change'` |
| size | 控件尺寸，未传继承 Form；标签外观仍由 Form 布局控制 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `-` |
| layout | 表单项布局；未传继承 Form | `'horizontal' \| 'vertical' \| 'inline'` | `-` |
| label-align | 标签对齐；未传继承 Form | `'left' \| 'right'` | `-` |
| label-col-props   | 标签元素布局选项。参数同 `<col>` 组件一致                                                                | `object`                                                           |    `-`     |
| wrapper-col-props | 表单控件布局选项。参数同 `<col>` 组件一致                                                                | `object`                                                           |    `-`     |
| hide-label        | 是否隐藏标签                                                                                             | `boolean`                                                          |  `false`   |
| hide-asterisk     | 是否隐藏星号                                                                                             | `boolean`                                                          |  `false`   |
| label-col-style   | 标签元素布局组件的 style                                                                                 | `object`                                                           |    `-`     |
| wrapper-col-style | 表单控件布局组件的 style                                                                                 | `object`                                                           |    `-`     |
| row-props         | 表单项布局选项。参数同 `<row>` 组件一致                                                                  | `object`                                                           |    `-`     |
| row-class         | 表单项布局组件的 class                                                                                   | `string\|array\|object`                                            |    `-`     |
| content-class     | 表单控件包裹层的 class                                                                                   | `string\|array\|object`                                            |    `-`     |
| content-flex      | 内容层是否开启 flex 布局                                                                                 | `boolean`                                                          |   `true`   |
| label-col-flex    | 设置标签 `Col` 组件的 flex 属性。设置时表单 `Col` 组件的 flex 属性会被设置为 `auto`。                    | `number\|string`                                                   |    `-`     |
| feedback          | 是否显示表单控件的反馈图标                                                                               | `boolean`                                                          |  `false`   |
| label-component   | 表单项标签渲染的元素                                                                                     | `string`                                                           | `'label'`  |
| label-attrs       | 标签原生属性；for 指向控件真实 id                                                                                         | `object`                                                           |    `-`     |

### `<FormItem>` Slots

| 插槽名 |   描述   | 参数 |
| ------ | :------: | ---- |
| label  |   标签   | -    |
| help   | 帮助信息 | -    |
| extra  | 额外内容 | -    |

## Type

### FieldRule

| 参数名    | 描述                              | 类型                                                                                                        | 默认值  |
| --------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------- | :-----: |
| type      | 校验的值的类型，默认为 `'string'` | `'string'    \| 'number'    \| 'boolean'    \| 'array'    \| 'object'    \| 'email'    \| 'url'    \| 'ip'` |   `-`   |
| required  | 是否必填                          | `boolean`                                                                                                   | `false` |
| message   | 校验失败时展示的信息              | `string`                                                                                                    |   `-`   |
| length    | 校验长度（string, array）         | `number`                                                                                                    |   `-`   |
| maxLength | 最大长度（string）                | `number`                                                                                                    |   `-`   |
| minLength | 最小长度（string）                | `number`                                                                                                    |   `-`   |
| match     | 匹配校验（string）                | `RegExp`                                                                                                    |   `-`   |
| uppercase | 大写（string）                    | `boolean`                                                                                                   | `false` |
| lowercase | 小写（string）                    | `boolean`                                                                                                   | `false` |
| min       | 最小值（number）                  | `number`                                                                                                    |   `-`   |
| max       | 最大值（number）                  | `number`                                                                                                    |   `-`   |
| equal     | 校验数值（number）                | `number`                                                                                                    |   `-`   |
| positive  | 正数（number）                    | `boolean`                                                                                                   | `false` |
| negative  | 负数（number）                    | `boolean`                                                                                                   | `false` |
| true      | 是否为 `true`（boolean）          | `boolean`                                                                                                   | `false` |
| false     | 是否为 `false`（boolean）         | `boolean`                                                                                                   | `false` |
| includes  | 数组中是否包含给定值（array）     | `any[]`                                                                                                     |   `-`   |
| deepEqual | 数组元素是否相等（array）         | `any`                                                                                                       |   `-`   |
| empty     | 是否为空（object）                | `boolean`                                                                                                   | `false` |
| hasKeys   | 对象是否包含给定属性（object）    | `string[]`                                                                                                  |   `-`   |
| validator | 自定义校验规则                    | `(    value: FieldValue \| undefined,    callback: (error?: string) => void  ) => void`                     |   `-`   |

### FieldData

| 参数名  | 描述           | 类型             | 默认值 |
| ------- | -------------- | ---------------- | :----: |
| value   | 字段的值       | `any`            |  `-`   |
| status  | 字段的状态     | `ValidateStatus` |  `-`   |
| message | 字段的错误信息 | `string`         |  `-`   |

### ValidatedError

| 参数名          | 描述                   | 类型      | 默认值  |
| --------------- | ---------------------- | --------- | :-----: |
| label           | 标签的文本             | `string`  |   `-`   |
| field           | 字段名                 | `string`  |   `-`   |
| value           | 字段值                 | `any`     |   `-`   |
| type            | 字段类型               | `string`  |   `-`   |
| isRequiredError | 是否为 `required` 错误 | `boolean` | `false` |
| message         | 错误信息               | `string`  |   `-`   |

### FormItemEventHandler

| 参数名   | 描述     | 类型                   | 默认值 |
| -------- | -------- | ---------------------- | :----: |
| onChange | onChange | `(ev?: Event) => void` |  `-`   |
| onInput  | onInput  | `(ev?: Event) => void` |  `-`   |
| onFocus  | onFocus  | `(ev?: Event) => void` |  `-`   |
| onBlur   | onBlur   | `(ev?: Event) => void` |  `-`   |

### useFormItem

```ts
const useFormItem = (data: { size?: Ref<Size | undefined>; disabled?: Ref<boolean>; error?: Ref<boolean> }) => {
  mergedSize: Ref<Size>
  mergedDisabled: Ref<boolean>
  mergedError: Ref<boolean>
  feedback: Ref<string>
  eventHandlers: Ref<FormItemEventHandler>
}
```

## 类型定义

组件导出以下类型定义

```ts
import type { FormProps } from '@cedar-design/ui'
```

### 五档密度与项目间距

xs/sm/md/lg/xl 均通过 size 类选择对应几何。项目下间距和验证文案预留高度共同使用 size-*-item-margin-bottom；inline 使用独立 inline-item-margin-bottom，error/help 不重复添加项目下间距。

| 变量 | 默认值 |
| --- | --- |
| `--c-form-size-xl-height` | `var(--c-size-xl)` |
| `--c-form-size-xl-label-font-size` | `var(--c-sys-font-size-lg)` |
| `--c-form-size-xl-item-margin-bottom` | `var(--c-spacing-8)` |

### presentation 继承规则

Form 支持 `inline / click / dblclick`，默认 inline；FormItem 和字段未设置时继承，显式值覆盖。readPretty 是阅读属性，与 readonly/disabled 分开。确认编辑未结束时整表提交会失败并保留草稿；reset 取消编辑。原有默认插槽与 v-model 保持不变，不需要 editor 插槽。

`read-pretty` 为独立布尔属性，与 `readonly`、`disabled` 同级；字段 > FormItem > Form 继承，显式 `false` 覆盖父级。默认 `false`。纯阅读不显示编辑器。
