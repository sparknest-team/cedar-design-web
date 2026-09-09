---
permalink: /components/input-tag/
---

# InputTag

用来输入标签。

## 案例

### 基础用法

标签输入框的基本用法。

<demo src="./__demos__/basic.vue"></demo>

### 输入框状态

输入框有禁用、只读和错误三种状态。

<demo src="./__demos__/status.vue"></demo>

### 最多展示标签数量

设置最多展示标签数量。

<demo src="./__demos__/max.vue"></demo>

### 输入框尺寸

输入框分为 `xs`、`sm`、`md`、`lg` 四种尺寸。

<demo src="./__demos__/size.vue"></demo>

## API

### `<input-tag>` Props

| 参数名                    | 描述                               | 类型                                              |   默认值    |
| ------------------------- | ---------------------------------- | ------------------------------------------------- | :---------: |
| model-value **(v-model)** | 绑定值                             | `(string \| number \| TagData)[]`                 |     `-`     |
| default-value             | 默认值（非受控状态）               | `(string \| number \| TagData)[]`                 |    `[]`     |
| input-value **(v-model)** | 输入框的值                         | `string`                                          |     `-`     |
| default-input-value       | 输入框的默认值（非受控状态）       | `string`                                          |    `''`     |
| placeholder               | 占位符                             | `string`                                          |     `-`     |
| disabled                  | 是否禁用                           | `boolean`                                         |   `false`   |
| error                     | 是否为错误状态                     | `boolean`                                         |   `false`   |
| readonly                  | 是否为只读模式                     | `boolean`                                         |   `false`   |
| clearable                 | 是否允许清空                       | `boolean`                                         |   `true`    |
| size                      | 输入框的大小                       | `'xs' \| 'sm' \| 'md' \| 'lg'`                    |   `'md'`    |
| variant                   | 输入框的变体                       | `'filled' \| 'outline' \| 'standard'`                          | `'filled'` |
| max-tag-count             | 最多展示的标签个数，`0` 表示不限制 | `number`                                          |     `0`     |
| retain-input-value        | 是否保留输入框的内容               | `boolean \| { create?: boolean; blur?: boolean }` |   `false`   |
| format-tag                | 格式化标签内容                     | `(data: TagData) => string`                       |     `-`     |
| unique-value              | 是否仅创建唯一的值                 | `boolean`                                         |   `false`   |
| field-names               | 自定义 `TagData` 中的字段          | `InputTagFieldNames`                              |     `-`     |
| tag-nowrap                | 标签内容不换行                     | `boolean`                                         |   `false`   |

### `<input-tag>` Events

| 事件名             | 描述                     | 参数                                                    |
| ------------------ | ------------------------ | ------------------------------------------------------- |
| change             | 值发生改变时触发         | value: `(string \| number \| TagData)[]`<br>ev: `Event` |
| input-value-change | 输入值发生改变时触发     | inputValue: `string`<br>ev: `Event`                     |
| press-enter        | 按下回车键时触发         | inputValue: `string`<br>ev: `KeyboardEvent`             |
| remove             | 点击标签的删除按钮时触发 | removed: `string \| number`<br>ev: `Event`              |
| clear              | 点击清除按钮时触发       | ev: `MouseEvent`                                        |
| focus              | 输入框获取焦点时触发     | ev: `FocusEvent`                                        |
| blur               | 输入框失去焦点时触发     | ev: `FocusEvent`                                        |

### `<input-tag>` Methods

| 方法名 | 描述             | 参数 | 返回值 |
| ------ | ---------------- | ---- | ------ |
| focus  | 使输入框获取焦点 | -    | -      |
| blur   | 使输入框失去焦点 | -    | -      |

### `<input-tag>` Slots

| 插槽名 |         描述         | 参数            |
| ------ | :------------------: | --------------- |
| tag    | 输入框标签的显示内容 | data: `TagData` |
| prefix |       前缀元素       | -               |
| suffix |       后缀元素       | -               |

### TagData

| 参数名   | 描述       | 类型               | 默认值  |
| -------- | ---------- | ------------------ | :-----: |
| value    | 标签值     | `string \| number` |   `-`   |
| label    | 标签内容   | `string`           |   `-`   |
| closable | 是否可关闭 | `boolean`          | `false` |
| tagProps | 标签属性   | `TagProps`         |   `-`   |

### 类型定义

组件导出以下类型定义

```ts
import type { InputTagInstance } from '@cedarjs/ui'
```
