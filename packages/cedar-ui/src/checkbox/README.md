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

## API

### Checkbox Props

| 属性                 | 说明                       | 类型                                          | 默认值 |
| -------------------- | -------------------------- | --------------------------------------------- | ------ |
| model-value(v-model) | 绑定值                     | boolean \| Array<string \| number \| boolean> | -      |
| default-checked      | 默认是否选中（非受控状态） | boolean                                       | false  |
| value                | 选项的 `value`             | string\|number\|boolean                       | '-'    |
| disabled             | 是否禁用                   | boolean                                       | false  |
| indeterminate        | 是否为半选状态             | boolean                                       | false  |

### Checkbox Events

| 事件名 | 说明             | 参数                                                       |
| ------ | ---------------- | ---------------------------------------------------------- |
| change | 值改变触发的事件 | value: boolean \| (string \| number \| boolean)[]ev: Event |

### Checkbox Slots

| 插槽名   | 说明         | 参数                                   |
| -------- | ------------ | -------------------------------------- |
| checkbox | 自定义复选框 | checked: boolean<br/>disabled: boolean |

### CheckboxGroup Props

| 属性                 | 说明                 | 类型                                     | 默认值       |
| -------------------- | -------------------- | ---------------------------------------- | ------------ |
| model-value(v-model) | 绑定值               | Array<string \| number \| boolean>       | -            |
| default-value        | 默认值（非受控状态） | Array<string \| number \| boolean>       | []           |
| max                  | 支持最多选中的数量   | number                                   | -            |
| options              | 选项                 | Array<string \| number\| CheckboxOption> | -            |
| direction            | 复选框的排列方向     | Direction                                | 'horizontal' |
| indeterminate        | 是否为半选状态       | boolean                                  | false        |
| disabled             | 是否禁用             | boolean                                  | false        |

### CheckboxGroup Events

| 事件名 | 说明             | 参数                                                       |
| ------ | ---------------- | ---------------------------------------------------------- |
| change | 值改变触发的事件 | value: boolean \| (string \| number \| boolean)[]ev: Event |

### Checkbox Slots

| 插槽名   | 说明              | 参数                                   |
| -------- | ----------------- | -------------------------------------- |
| checkbox | 自定义复选框      | checked: boolean<br/>disabled: boolean |
| label    | checkbox 文案内容 | data:CheckboxOption                    |

### CheckboxOption

| 参数名        | 描述｜类型     | 默认值         |
| ------------- | -------------- | -------------- | ----- |
| label         | 文案           | RenderContent  | -     |
| value         | 选项的`value`  | string\|number | -     |
| disabled      | 是否禁用       | boolean        | false |
| indeterminate | 是否为半选状态 | boolean        | false |

## 类型定义

组件导出以下类型定义

```ts
import type { CheckboxProps } from '@cedar/ui'
```
