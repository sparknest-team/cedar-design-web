---
permalink: /components/input-number/
---

# InputNumber

仅允许输入数字格式的输入框。

## 案例

### 尺寸

输入框定义了四种默认尺寸 xs, sm, md, lg。

<demo src="./__demos__/size.vue"></demo>

### 精度和步长

通过 precision 来设置数字精度。当 precision 小于 step 的小数位时，精度取 step 的小数个数。

<demo src="./__demos__/step-precision.vue"></demo>

### 按钮模式

基础用法。

<demo src="./__demos__/button-mode.vue"></demo>

### 前缀、后缀

通过指定 prefix 和 suffix 插槽来在输入框内添加前缀和后缀。

prepend 和 append 在 button 模式下不生效。

<demo src="./__demos__/prefix.vue"></demo>

### 自定义图标

通过指定`plus`和`minus`插槽来修改树枝增减的图标

<demo src="./__demos__/custom-icon.vue"></demo>

### 格式化展示值

通过`formatter`和`parser`配合使用可以定义输入框展示值。

<demo src="./__demos__/format.vue"></demo>

### v-model的触发事件

数字输入框默认在 blur 或者按下 Enter 时会修改绑定的值，通过设置属性 model-event="input" 让组件在输入时修改绑定的值。
注意：在此模式下，输入时的值会超出设置的 min/max，组件会在失焦时修正值的大小。

<demo src="./__demos__/v-model-event.vue"></demo>

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## API

### `<InputNumber>` Props

| 参数名                    | 描述                                                           | 类型                                   |   默认值    |
| ------------------------- | -------------------------------------------------------------- | -------------------------------------- | :---------: |
| model-value **(v-model)** | 绑定值                                                         | `number`                               |     `-`     |
| default-value             | 默认值（非受控模式）                                           | `number`                               |     `-`     |
| mode                      | 模式（`embed`：按钮内嵌，`button`：左右按钮，`input`：纯输入） | `'embed' \| 'button' \| 'input'`       |  `'embed'`  |
| precision                 | 数字精度                                                       | `number`                               |     `-`     |
| step                      | 数字变化步长                                                   | `number`                               |     `1`     |
| disabled                  | 是否禁用                                                       | `boolean`                              |   `false`   |
| error                     | 是否为错误状态                                                 | `boolean`                              |   `false`   |
| max                       | 最大值                                                         | `number`                               | `Infinity`  |
| min                       | 最小值                                                         | `number`                               | `-Infinity` |
| formatter                 | 定义输入框展示值                                               | `func`                                 |     `-`     |
| parser                    | 从 `formatter` 转换为数字，和 `formatter` 搭配使用             | `func`                                 |     `-`     |
| placeholder               | 输入框提示文字                                                 | `string`                               |     `-`     |
| size                      | 输入框大小                                                     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` |   `'md'`    |
| clearable                 | 是否允许清空输入框                                             | `boolean`                              |   `false`   |
| model-event               | 触发 `v-model` 的事件                                          | `'change' \| 'input'`                  | `'change'`  |
| read-only                 | 只读                                                           | `boolean`                              |   `false`   |
| input-attrs               | 内部input元素的属性                                            | `object`                               |     `-`     |

### `<input-number>` Events

| 事件名 | 描述                   | 参数                                                                |
| ------ | ---------------------- | ------------------------------------------------------------------- |
| change | 值发生改变时触发       | value: `number \| undefined`<br>ev: `Event`                         |
| focus  | 输入框获取焦点时触发   | ev: `FocusEvent`                                                    |
| blur   | 输入框失去焦点时触发   | ev: `FocusEvent`                                                    |
| clear  | 用户点击清除按钮时触发 | ev: `Event`                                                         |
| input  | 输入时触发             | value: `number \| undefined`<br>inputValue: `string`<br>ev: `Event` |

### `<input-number>` Methods

| 方法名 | 描述             | 参数 | 返回值 |
| ------ | ---------------- | ---- | ------ |
| focus  | 使输入框获取焦点 | -    | -      |
| blur   | 使输入框失去焦点 | -    | -      |

### `<input-number>` Slots

| 插槽名  |     描述     | 参数 |
| ------- | :----------: | ---- |
| minus   | 数值减少图标 | -    |
| puls    | 数值增加图标 | -    |
| append  |   后置标签   | -    |
| prepend |   前置标签   | -    |
| suffix  |     后缀     | -    |
| prefix  |     前缀     | -    |

## 类型定义

组件导出以下类型定义

```ts
import type { InputNumberProps } from "@cedarjs/ui";
```
