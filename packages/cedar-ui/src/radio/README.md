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

通过设置`direction="column"`可以展示竖直的单选框组。

<demo src="./__demos__/group-direction.vue"></demo>

### 按钮类型的单选框组

通过指定`variant="button"`，可以显示按钮类型的单选框组。

<demo src="./__demos__/button-type.vue"></demo>

### 按钮类型单选框组的尺寸

按钮类型的单选框组分为`xs`、`sm`、`md`、`lg`四种尺寸。

<demo src="./__demos__/button-type-size.vue"></demo>

### 布局

使用`RadioGroup`传入`Radio`配合`Grid`组件实现灵活布局。

<demo src="./__demos__/grid-layout.vue"></demo>

### 自定义单选框

使用#radio插槽自定义复选框的展示

<demo src="./__demos__/custom-radio.vue"></demo>

## API

### Radio Props

| 属性                 | 说明                     | 类型                       | 默认值    |
| -------------------- | ------------------------ | -------------------------- | --------- |
| model-value(v-model) | 绑定值                   | `string\|number \|boolean` | `-`       |
| default-checked      | 默认是否选中(非受控状态) | `boolean`                  | `false`   |
| value                | 选项的`value`            | `string\|number\|boolean`  | `true`    |
| variant                 | 单选的类型               | `'radio'\|'button'`        | `'radio'` |
| disabled             | 是否禁用                 | `boolean`                  | `false`   |

### Radio Events

| 事件名 | 说明         | 参数                                           |
| ------ | ------------ | ---------------------------------------------- |
| change | 值改变时触发 | `value: string \| number \| boolean ev: Event` |

### Radio Slots

| 插槽名 | 说明         | 参数                                     |
| ------ | ------------ | ---------------------------------------- |
| radio  | 自定义单选框 | `checked:boolean`<br/>`disabled:boolean` |

### RadioGroup Props

| 属性                 | 说明               | 类型                                    | 默认值         |
| -------------------- | ------------------ | --------------------------------------- | -------------- |
| model-value(v-model) | 绑定值             | `string\|number \|boolean`              | `-`            |
| default-value        | 默认值(非受控状态) | `string\|number\|boolean`               | `''`           |
| variant                 | 单选框组的类型     | `'radio'\|'button'`                     | `'radio'`      |
| size                 | 单选框组的尺寸     | `'xs'\|'sm'\|'md'\|'lg'\|'xl'`          | `-`            |
| options              | 选项               | `Array<string \| number\| RadioOption>` | `-`            |
| direction            | 单选框组的方向     | `'horizontal'\|'vertical'`              | `'horizontal'` |
| disabled             | 是否禁用           | `boolean`                               | `false`        |

### RadioGroup Events

| 事件名 | 说明         | 参数                                 |
| ------ | ------------ | ------------------------------------ |
| change | 值改变时触发 | `value: string \| number \| boolean` |

### RadioGroup Slots

| 插槽名 | 说明          | 参数                                     |
| ------ | ------------- | ---------------------------------------- |
| radio  | 自定义单选框  | `checked:boolean`<br/>`disabled:boolean` |
| label  | radio文案内容 | `data:RadioOption`                       |

### RadioOption

| 属性     | 说明          | 类型             | 默认值  |
| -------- | ------------- | ---------------- | ------- |
| label    | 文案          | `RanderContext`  | `-`     |
| value    | 选项的`value` | `string\|number` | `-`     |
| disabled | 是否禁用      | `boolean`        | `false` |

## 类型定义

组件导出以下类型定义

```ts
import type { RadioProps } from '@cedarjs/ui'
```
