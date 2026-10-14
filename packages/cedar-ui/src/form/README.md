---
permalink: /components/form/
---

# Form

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

标签一律由 `FormItem` 的 `label`（或 label 插槽）负责渲染；控件本身只提供 `placeholder` 等占位文案，不承担字段标签。

### 标签与内容装饰

<demo src="./__demos__/decoration.vue"></demo>

### 校验展示状态

显式 validate-status 优先于自动状态；error 才显示错误信息，其他状态显示 help。它只控制展示，不改变 validate 的真实结果。自动校验经历 validating → success/error；clearValidate 恢复未校验状态。setFields 仅传 message 会设为 error；显式 status='' 和 message='' 可清空。

<demo src="./__demos__/presentation-status.vue"></demo>

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

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

`validate-trigger="clear"` 只在用户点击控件的清空按钮时校验；普通输入不会触发。本例清空后显示必填错误。

<demo src="./__demos__/clear-trigger.vue"></demo>

### 自定义表单校验状态

开启 feedback 可以让部分输入组件展示当前状态信息

<demo src="./__demos__/feedback.vue"></demo>

### 动态表单

通过数据动态控制表单内容。

<demo src="./__demos__/dynamic-form.vue"></demo>

### 全局禁用

通过 disabled 属性可以禁用整个表单。

<demo src="./__demos__/disabled.vue"></demo>

### 表单异步校验

本地模拟异步校验，用户名输入 `admin` 后提交通过，其他值显示错误；不访问外部接口。原生提交/重置按钮使用 `html-type`。重置会取消本例的模拟校验并忽略旧提交结果，卸载或停用也会清理计时器。

外层标签通过 `label-attrs.for` 对应 Input 的 `id`；多个示例实例使用独立 ID，便于点击标签聚焦和辅助技术识别。

<demo src="./__demos__/async-validate-form.vue"></demo>

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
| scrollToField | 滚动到制定表单项     | `feild:string`                                                                                           | `-`                                                  |

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
import type { FormProps } from '@cedarjs/ui'
```

### 五档密度与项目间距

xs/sm/md/lg/xl 均通过 size 类选择对应几何。项目下间距和验证文案预留高度共同使用 size-*-item-margin-bottom；inline 使用独立 inline-item-margin-bottom，error/help 不重复添加项目下间距。

| 变量 | 默认值 |
| --- | --- |
| `--c-form-size-xl-height` | `var(--c-size-xl)` |
| `--c-form-size-xl-label-font-size` | `var(--c-sys-font-size-lg)` |
| `--c-form-size-xl-item-margin-bottom` | `var(--c-spacing-8)` |
