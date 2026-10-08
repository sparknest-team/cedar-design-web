---
permalink: /components/radio/
---

# Radio

在一组相关且互斥数据中，用户仅能选择一个选项。

## 案例

### 基本使用

单选框的基本用法。

<demo src="./__demos__/basic.vue"></demo>

### 受控

通过`v-model`(`model-value`)属性控制是否选中

<demo src="./__demos__/controlled.vue"></demo>

### 单选框组

通过`RadioGroup`组件展示单选框组

<demo src="./__demos__/group.vue"></demo>

### 单选框组选项

`RadioGroup`通过`options`属性设置子元素

<demo src="./__demos__/group-options.vue"></demo>

### 单选框组方向

通过设置`direction="vertical"`可以展示竖直的单选框组。

<demo src="./__demos__/group-direction.vue"></demo>

### 按钮类型的单选框组

通过指定`variant="button"`，可以显示按钮类型的单选框组。

<demo src="./__demos__/button-type.vue"></demo>

### 布局

使用`RadioGroup`传入`Radio`配合`Grid`组件实现灵活布局。

<demo src="./__demos__/grid-layout.vue"></demo>

### 自定义单选框

使用#radio插槽自定义复选框的展示

<demo src="./__demos__/custom-radio.vue"></demo>

### 分组状态与只读

`model-value !== undefined` 表示受控，父级不回写时保留原值；`default-value` 只初始化非受控值。分组内只由 Group 发出 `update:model-value → change(value, event?)`，并通知 FormItem 一次，子项不重复发值变化事件。
Group 的 `disabled`、`readonly`、`error` 未设置时继承表单，显式 `false` 可以覆盖表单；子项不能绕过 Group 的禁用或只读限制。

<demo src="./__demos__/group-state.vue"></demo>

### 异步选项

选项载入、移除和外部值更新均不会反向触发值变化；未载入的已选值不会自动清理。重复选择当前值不再触发 change，false、0、空字符串按实际值比较。

<demo src="./__demos__/async-options.vue"></demo>

### 独立值模型与方法

Radio 的值为 string / number / boolean 或 null，null 表示未选中；重复点击已选项不会取消，父级可写 null 清空。
两端统一使用 `default-value` 初始化非受控值；受控提议被拒绝时保持原值。用户选择按 `update:model-value → change(value, event?)` 通知，命令式调用的 event 为 undefined。
提供 `select()`、`focus(options?)`、`blur()`。禁用禁止选择和聚焦，只读允许聚焦、禁止改值。Enter 按下与空格释放激活当前控件，长按不重复激活，失焦/停用会取消待处理的空格操作。

<demo src="./__demos__/control-value.vue"></demo>

### 选项数据与标签

两端均支持原始值或对象选项。`field-names` 映射 `label/value/disabled/readonly/indeterminate`；只读选项允许聚焦但不能改值，Checkbox 的半选仅用于展示。
`label` 插槽接收 `{ data, checked }`，优先于标签渲染函数 `(data, checked) => VNodeChild`。data 为保留业务字段的归一化副本，不修改输入对象；未提供标签时显示值的文字。
显式传入 `options` 时替代默认插槽，包括 `[]`；不传时使用默认插槽。选项值限字符串、有限数字或布尔值；缺失/非法值及同类型重复值被忽略（保留第一项）。`false`、`0`、`''` 和 `'0'` 是不同选项。异步选项变更不反向修改模型。
RadioGroup 默认 `null`，表示未选中；外部写入 `null` 清空。`''` 是有效选项，不再作为空状态标记。

<demo src="./__demos__/option-data.vue"></demo>

### 键盘导航

Tab 进入已选项（没有已选项时进入第一个可用项）；方向键循环，Home / End 跳到首尾，跳过禁用项。只读项可聚焦但不改变值。导航仅作用于当前分组，不拦截面板内其他按钮的键盘事件。

<demo src="./__demos__/keyboard-navigation.vue"></demo>

### 按钮尺寸

两端均支持 `variant="button"`。RadioGroup 的 `size` 支持 `xs / sm / md / lg / xl`，只调整按钮高度；普通圆形 Radio 不随 size 缩放。未设置时继承表单/全局尺寸，最终默认为 md。Group 的 variant 优先于子项。

<demo src="./__demos__/button-sizes.vue"></demo>

## API

`ChoiceValue = string | number | boolean`；`CheckboxModel = boolean | ChoiceValue[]`；`RadioModel = ChoiceValue | null`。

### Radio Props

| 属性                 | 说明                     | 类型                       | 默认值    |
| -------------------- | ------------------------ | -------------------------- | --------- |
| model-value (v-model) | 受控值 | ChoiceValue \| null | undefined |
| default-value | 非受控初始值 | ChoiceValue \| null | null |
| value                | 选项的`value`            | `string\|number\|boolean`  | `true`    |
| variant                 | 单选的类型               | `'radio'\|'button'`        | `'radio'` |
| disabled | 是否禁用；未设置时继承表单/分组 | boolean | undefined |
| readonly | 是否只读；未设置时继承表单/分组 | boolean | undefined |
| error | 错误态；未设置时继承表单/分组 | boolean | undefined |

### Radio Events

| 事件名 | 说明         | 参数                                           |
| ------ | ------------ | ---------------------------------------------- |
| update:model-value | 提议新值 | value: ChoiceValue |
| change | 值变化 | value: ChoiceValue, event?: Event |
| focus | 聚焦 | event: FocusEvent |
| blur | 失焦 | event: FocusEvent |

### Radio Methods

| 方法 | 参数 | 返回值 |
| --- | --- | --- |
| select | - | void |
| focus | options?: FocusOptions | void |
| blur | - | void |

### Radio Slots

| 插槽名 | 说明         | 参数                                     |
| ------ | ------------ | ---------------------------------------- |
| radio  | 自定义单选框 | `checked:boolean`<br/>`disabled:boolean` |

### RadioGroup Props

| 属性                 | 说明               | 类型                                    | 默认值         |
| -------------------- | ------------------ | --------------------------------------- | -------------- |
| model-value (v-model) | 受控值 | RadioModel | undefined |
| default-value | 非受控初始值 | RadioModel | null |
| variant                 | 单选框组的类型     | `'radio'\|'button'`                     | `'radio'`      |
| size                 | 单选框组的尺寸     | `'xs'\|'sm'\|'md'\|'lg'\|'xl'`          | `-`            |
| options | 选项；传入时替代默认插槽 | Array<ChoiceValue \| RadioOption \| Record<string, unknown>> | undefined |
| direction            | 单选框组的方向     | `'horizontal'\|'vertical'`              | `'horizontal'` |
| disabled | 是否禁用；未设置时继承表单/分组 | boolean | undefined |
| readonly | 是否只读；未设置时继承表单/分组 | boolean | undefined |
| error | 错误态；未设置时继承表单/分组 | boolean | undefined |
| field-names | 选项字段映射 | ChoiceFieldNames | undefined |

| aria-label | 分组的无障碍名称 | string | '' |

### RadioGroup Events

| 事件名 | 说明         | 参数                                 |
| ------ | ------------ | ------------------------------------ |
| update:model-value | 提议新值 | value: string \| number \| boolean |
| change | 值变化，只由 Group 通知一次 | value: string \| number \| boolean, ev?: Event |

### RadioGroup Slots

| 插槽名 | 说明          | 参数                                     |
| ------ | ------------- | ---------------------------------------- |
| radio  | 自定义单选框  | `checked:boolean`<br/>`disabled:boolean` |
| label  | radio文案内容 | `data: RadioOption, checked: boolean`                       |

### RadioOption

| 字段 | 说明 | 类型 |
| --- | --- | --- |
| value | 选项标识 | ChoiceValue |
| label | 标签或渲染函数 | VNodeChild \| (data: RadioOption, checked: boolean) => VNodeChild |
| disabled | 禁用 | boolean |
| readonly | 只读 | boolean |


## 类型定义

组件导出以下类型定义

```ts
import type { RadioProps } from '@cedarjs/ui'
```

### ChoiceFieldNames

`{ label?: string; value?: string; disabled?: string; readonly?: string; indeterminate?: string }`

公开导出类型：`RadioOption`、`ChoiceFieldNames`。
