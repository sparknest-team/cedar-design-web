---
permalink: /components/form/
---

# Form

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

标签一律由 `FormItem` 的 `label`（或 label 插槽）负责渲染；控件本身只提供 `placeholder` 等占位文案，不承担字段标签。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

### 表单布局

表单支持三种布局方式： horizontal - 水平排列（默认，标签在左、控件在右）， vertical - 垂直排列（标签在上、控件在下）， inline - 行内排列。

通过 `Form.layout`（或单项覆盖）切换上下 / 左右标签布局。

<demo src="./__demos__/layout.vue"></demo>

### 额外信息和帮助信息

可以使用 extra 添加额外信息。
如果需要在外部自定义校验信息，可以使用`help`属性或插槽。设置`help`时校验信息会被屏蔽。

<demo src="./__demos__/extra.vue"></demo>

### 嵌套数据

展示了多种表单项嵌套的方式。
表单项组件默认会将表单项状态和事件绑定到第一子组件，如果想要使用表单项进行布局设置，请设置 :merge-props="false"
以关闭绑定，或者使用函数指定需要绑定的数据。
如果使用 grid 组件进行布局，请设置 :content-flex="false" 关闭表单项内容的 flex 布局。

<demo src="./__demos__/nested-data.vue"></demo>

### 栅格布局

展示了使用栅格布局的方式。可以使用 `label-col-flex` 属性指定标签的具体宽度。

### 自动标签宽度

设置 `auto-label-width` 开启自动标签宽度。仅在 `layout="horizontal"` 布局下生效。

\*_目前仅在首次加载后生效_。

<demo src="./__demos__/auto-tag-width.vue"></demo>

### 验证表单

展示了表单校验的使用方法。

<demo src="./__demos__/validate.vue"></demo>

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

通过异步的方法校验表单功能。

<demo src="./__demos__/async-validate-form.vue"></demo>

### 滚动到指定表单字段

展示了提交失败自动滚动到第一个错误字段和手动滚动对应字段的使用方法。

<demo src="./__demos__/scroll-assign.vue"></demo>

## API

### `<Form>` Props

| 参数名                | 描述                                                      | 类型                                       |        默认值         |
| --------------------- | --------------------------------------------------------- | ------------------------------------------ | :-------------------: |
| model **(必填)**      | 表单数据对象                                              | `object`                                   |          `-`          |
| layout                | 表单的布局方式，包括水平、垂直、多列                      | `'horizontal' \| 'vertical' \| 'inline'`   |    `'horizontal'`     |
| size                  | 表单控件的尺寸                                            | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`     |        `'md'`         |
| label-col-props       | 标签元素布局选项。参数同 `<col>` 组件一致                 | `object`                                   | `span: 5, offset: 0`  |
| wrapper-col-props     | 表单控件布局选项。参数同 `<col>` 组件一致                 | `object`                                   | `span: 19, offset: 0` |
| label-align           | 标签的对齐方向                                            | `'left' \| 'right'`                        |       `'right'`       |
| disabled              | 是否禁用表单                                              | `boolean`                                  |          `-`          |
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

| 参数名            | 描述                                                                                                     | 类型                                                               |   默认值   |
| ----------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | :--------: |
| field             | 表单元素在数据对象中的path（数据项必填）                                                                 | `string`                                                           |    `''`    |
| label             | 标签的文本                                                                                               | `string`                                                           |    `-`     |
| tooltip           | 提示内容                                                                                                 | `string`                                                           |    `-`     |
| show-colon        | 是否显示冒号                                                                                             | `boolean`                                                          |  `false`   |
| no-style          | 是否去除样式                                                                                             | `boolean`                                                          |  `false`   |
| disabled          | 是否禁用                                                                                                 | `boolean`                                                          |    `-`     |
| help              | 帮助文案                                                                                                 | `string`                                                           |    `-`     |
| extra             | 额外显示的文案                                                                                           | `string`                                                           |    `-`     |
| required          | 是否必须填写                                                                                             | `boolean`                                                          |  `false`   |
| asterisk-position | 可选择将星号置于 label 前/后                                                                             | `'start' \| 'end'`                                                 | `'start'`  |
| rules             | 表单项校验规则（优先级高于 form 的 rules）                                                               | `FieldRule \| FieldRule[]`                                         |    `-`     |
| validate-status   | 校验状态                                                                                                 | `'success' \| 'warning' \| 'error' \| 'validating'`                |    `-`     |
| validate-trigger  | 触发校验的事件                                                                                           | `'change' \| 'input' \| 'focus' \| 'blur'`                         | `'change'` |
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
| merge-props       | （已废除）控制传递到子元素上的 Props。默认包括 disabled、error、size、 events 和 FormItem 上的额外属性。 | `boolean \| ((props: Record<string, any>) => Record<string, any>)` |   `true`   |
| label-col-flex    | 设置标签 `Col` 组件的 flex 属性。设置时表单 `Col` 组件的 flex 属性会被设置为 `auto`。                    | `number\|string`                                                   |    `-`     |
| feedback          | 是否显示表单控件的反馈图标                                                                               | `boolean`                                                          |  `false`   |
| label-component   | 表单项标签渲染的元素                                                                                     | `string`                                                           | `'label'`  |
| label-attrs       | 表单项元素的属性                                                                                         | `object`                                                           |    `-`     |

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
