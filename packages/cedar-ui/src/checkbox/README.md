---
permalink: /components/checkbox/
---

# Checkbox

在一组数据中，用户可通过复选框选择一个或多个数据。

## 案例

### 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

### 受控

通过`v-model` (`model-value`)属性控制是否选中

<demo src="./__demos__/controlled-mode.vue"></demo>

### 禁用状态

禁用复选框

<demo src="./__demos__/disabled.vue"></demo>

### 复选框组

通过 `CheckboxGroup`组件展示复选框组。设置`direction="column"`可以展示竖向的复选框组

<demo src="./__demos__/checkbox-group.vue"></demo>

### 复选框组选项

`CheckboxGroup`通过options属性设置子元素

<demo src="./__demos__/checkbox-group-options.vue"></demo>

### 限制可勾选数量

通过设置`max`限制最多可被勾选的项目数。

<demo src="./__demos__/max-checked.vue"></demo>

### 全选

在实现全选功能时，可以通过`indeterminate`属性展示半选效果。

<demo src="./__demos__/checked-all-indeterminate.vue"></demo>

### 布局

使用`CheckboxGroup`传入`Checkbox`，配合`Grid`组件实现灵活的布局

<demo src="./__demos__/grid.vue"></demo>

### 自定义复选框

使用`#checkbox`插槽自定义复选框的展示

<demo src="./__demos__/checked-custom.vue"></demo>

### 分组状态与只读

`model-value !== undefined` 表示受控，父级不回写时保留原值；`default-value` 只初始化非受控值。分组内只由 Group 发出 `update:model-value → change(value, event?)`，并通知 FormItem 一次，子项不重复发值变化事件。
Group 的 `disabled`、`readonly`、`error` 未设置时继承表单，显式 `false` 可以覆盖表单；子项不能绕过 Group 的禁用或只读限制。

<demo src="./__demos__/group-state.vue"></demo>

### 异步选项

选项载入、移除和外部值更新均不会反向触发值变化；未载入的已选值不会自动清理。达到 max 仍可取消已选项；外部超限值不会自动裁剪。

<demo src="./__demos__/async-options.vue"></demo>

### 独立值模型与方法

Checkbox 的布尔模型始终返回 boolean；数组模型按 value 增删选项，不修改传入数组。indeterminate 只用于展示，由业务方计算，不会自动回写。
两端统一使用 `default-value` 初始化非受控值；受控提议被拒绝时保持原值。用户选择按 `update:model-value → change(value, event?)` 通知，命令式调用的 event 为 undefined。
提供 `toggle(checked?: boolean)`、`focus(options?)`、`blur()`。禁用禁止选择和聚焦，只读允许聚焦、禁止改值。Enter 按下与空格释放激活当前控件，长按不重复激活，失焦/停用会取消待处理的空格操作。

<demo src="./__demos__/control-value.vue"></demo>

### 选项数据与标签

两端均支持原始值或对象选项。`field-names` 映射 `label/value/disabled/readonly/indeterminate`；只读选项允许聚焦但不能改值，Checkbox 的半选仅用于展示。
`label` 插槽接收 `{ data, checked }`，优先于标签渲染函数 `(data, checked) => VNodeChild`。data 为保留业务字段的归一化副本，不修改输入对象；未提供标签时显示值的文字。
显式传入 `options` 时替代默认插槽，包括 `[]`；不传时使用默认插槽。选项值限字符串、有限数字或布尔值；缺失/非法值及同类型重复值被忽略（保留第一项）。`false`、`0`、`''` 和 `'0'` 是不同选项。异步选项变更不反向修改模型。
CheckboxGroup 使用 `ChoiceValue[]`，`max` 只接受 number，请使用 `:max="2"`。

<demo src="./__demos__/option-data.vue"></demo>

### 分组批量方法

两端提供 `checkAll()` 和 `inverseAll()`，返回独立数组副本。仅操作已挂载且可编辑的子项，保留禁用、只读及未加载的已选值；重复值只要有一项被锁定，该值就不参与批量修改。
`checkAll` 保留原模型顺序，按当前 DOM 顺序追加未选值；`inverseAll` 先移除可编辑的已选值，再按 DOM 顺序加入此前未选值。新增选择遵守 `max`，不裁剪外部传入的超限值。
受控模式返回提议，需父级回写；拒绝的提议不保存。分组禁用/只读时只返回当前值副本。有实际变化才按 `update:model-value → change(value, undefined) → FormItem` 通知一次，无变化不发事件。
子项重排、挂载、卸载及 KeepAlive 激活/停用会同步更新候选；变更渲染子项后应等待 `nextTick` 再调用方法。

<demo src="./__demos__/group-methods.vue"></demo>

## API

`ChoiceValue = string | number | boolean`；`CheckboxModel = boolean | ChoiceValue[]`；`RadioModel = ChoiceValue | null`。

### Checkbox Props

| 属性                 | 说明                       | 类型                                          | 默认值 |
| -------------------- | -------------------------- | --------------------------------------------- | ------ |
| model-value (v-model) | 受控值 | boolean \| ChoiceValue[] | undefined |
| default-value | 非受控初始值 | boolean \| ChoiceValue[] | false |
| value | 数组/分组模式的选项标识 | string\|number\|boolean | true |
| disabled | 是否禁用；未设置时继承表单/分组 | boolean | undefined |
| readonly | 是否只读；未设置时继承表单/分组 | boolean | undefined |
| error | 错误态；未设置时继承表单/分组 | boolean | undefined |
| indeterminate        | 是否为半选状态             | boolean                                       | false  |

### Checkbox Events

| 事件名 | 说明             | 参数                                                       |
| ------ | ---------------- | ---------------------------------------------------------- |
| update:model-value | 提议新值 | value: CheckboxModel |
| change | 值变化 | value: CheckboxModel, event?: Event |
| focus | 聚焦 | event: FocusEvent |
| blur | 失焦 | event: FocusEvent |

### Checkbox Methods

| 方法 | 参数 | 返回值 |
| --- | --- | --- |
| toggle | checked?: boolean | void |
| focus | options?: FocusOptions | void |
| blur | - | void |

### Checkbox Slots

| 插槽名   | 说明         | 参数                                   |
| -------- | ------------ | -------------------------------------- |
| checkbox | 自定义复选框 | checked: boolean<br/>disabled: boolean |

### CheckboxGroup Props

| 属性                 | 说明                 | 类型                                     | 默认值       |
| -------------------- | -------------------- | ---------------------------------------- | ------------ |
| model-value (v-model) | 受控值 | ChoiceValue[] | undefined |
| default-value | 非受控初始值 | ChoiceValue[] | [] |
| max | 最多可选数量 | number | undefined |
| options | 选项；传入时替代默认插槽 | Array<ChoiceValue \| CheckboxOption \| Record<string, unknown>> | undefined |
| direction            | 复选框的排列方向     | Direction                                | 'horizontal' |
| disabled | 是否禁用；未设置时继承表单/分组 | boolean | undefined |
| readonly | 是否只读；未设置时继承表单/分组 | boolean | undefined |
| error | 错误态；未设置时继承表单/分组 | boolean | undefined |
| field-names | 选项字段映射 | ChoiceFieldNames | undefined |

### CheckboxGroup Methods

| 方法 | 参数 | 返回值 |
| --- | --- | --- |
| checkAll | - | ChoiceValue[] |
| inverseAll | - | ChoiceValue[] |

### CheckboxGroup Events

| 事件名 | 说明             | 参数                                                       |
| ------ | ---------------- | ---------------------------------------------------------- |
| update:model-value | 提议新值 | value: (string \| number \| boolean)[] |
| change | 值变化，只由 Group 通知一次 | value: (string \| number \| boolean)[], ev?: Event |

### CheckboxGroup Slots

| 插槽名   | 说明              | 参数                                   |
| -------- | ----------------- | -------------------------------------- |
| checkbox | 自定义复选框      | checked: boolean<br/>disabled: boolean |
| label    | checkbox 文案内容 | data: CheckboxOption, checked: boolean |

### CheckboxOption

| 字段 | 说明 | 类型 |
| --- | --- | --- |
| value | 选项标识 | ChoiceValue |
| label | 标签或渲染函数 | VNodeChild \| (data: CheckboxOption, checked: boolean) => VNodeChild |
| disabled | 禁用 | boolean |
| readonly | 只读 | boolean |
| indeterminate | 仅展示半选状态 | boolean |


## 类型定义

组件导出以下类型定义

```ts
import type { CheckboxProps } from '@cedarjs/ui'
```

### ChoiceFieldNames

`{ label?: string; value?: string; disabled?: string; readonly?: string; indeterminate?: string }`

公开导出类型：`CheckboxOption`、`ChoiceFieldNames`。

公开方法类型：`CheckboxGroupMethods`；`CheckboxGroupInstance` 包含上述方法。

### 减少动态效果

内置 CSS 过渡遵循 `prefers-reduced-motion: reduce`。关闭过渡不改变最终显隐、选中／展开状态及事件语义；插槽内自定义动画由应用自行控制。
