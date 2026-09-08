---
permalink: /components/input-number/
---

# InputNumber

用于输入、调整和提交数值的输入框。组件将展示字符串和业务数值分开处理：用户可以自然地输入 `-`、`.` 或 `1.` 等中间状态，提交时再统一执行解析、精度和范围修正。

默认情况下，`v-model` 在失焦或按下 Enter 时更新；如果需要跟随完整数字输入实时更新，可以使用 `model-event="input"`。无论哪种模式，`change` 都只表示一次已提交的值变化。

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

通过指定 `prefix` 和 `suffix` 插槽来在输入框内添加前缀和后缀；`prepend` 和 `append` 可以在输入框外添加附加内容，三种模式均生效。

<demo src="./__demos__/prefix.vue"></demo>

### 自定义图标

通过指定`plus`和`minus`插槽来修改树枝增减的图标

<demo src="./__demos__/custom-icon.vue"></demo>

### 格式化展示值

通过`formatter`和`parser`配合使用可以定义输入框展示值。

<demo src="./__demos__/format.vue"></demo>

### v-model的触发事件

数字输入框默认在 blur 或者按下 Enter 时会修改绑定的值，通过设置属性 `model-event="input"` 让完整的数字在输入时更新绑定值。`change` 仍然只在提交时触发，不会因为每次键入而重复触发。

输入过程中允许暂时超出 `min/max`，组件会在提交时修正范围；清空时只触发 `update:modelValue(undefined)` 和 `clear`。

<demo src="./__demos__/v-model-event.vue"></demo>

### 事件与清空

`input` 用于监听编辑过程，参数中同时提供解析后的数字和当前展示文本；`change` 用于保存、计算或触发表单联动。开启 `clearable` 后，用户主动清空会触发 `clear`，不会额外制造一次 `input/change`。

<demo src="./__demos__/events.vue"></demo>

### 前后缀与自定义控件

`prefix` 和 `suffix` 位于输入框内部，`prepend` 和 `append` 位于输入框外部；`plus` 和 `minus` 用于替换步进按钮图标，`clear-icon` 用于替换清空图标。

<demo src="./__demos__/slots.vue"></demo>

### 事件与清空

`input` 用于监听编辑过程，参数中同时提供解析后的数字和当前展示文本；`change` 用于保存、计算或触发表单联动。开启 `clearable` 后，用户主动清空会触发 `clear`，不会额外制造一次 `input/change`。

<demo src="./__demos__/events.vue"></demo>

### 前后缀与自定义控件

`prefix` 和 `suffix` 位于输入框内部，`prepend` 和 `append` 位于输入框外部；`plus` 和 `minus` 用于替换步进按钮图标，`clear-icon` 用于替换清空图标。

<demo src="./__demos__/slots.vue"></demo>

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

| 事件名  | 描述                   | 参数                                                                |
| ------- | ---------------------- | ------------------------------------------------------------------- |
| change  | 值发生改变时触发       | value: `number \| undefined`<br>ev: `Event`                         |
| focus   | 输入框获取焦点时触发   | ev: `FocusEvent`                                                    |
| blur    | 输入框失去焦点时触发   | ev: `FocusEvent`                                                    |
| clear   | 用户点击清除按钮时触发 | ev: `Event`                                                         |
| input   | 输入时触发             | value: `number \| undefined`<br>inputValue: `string`<br>ev: `Event` |
| keydown | 按下键盘时触发         | ev: `KeyboardEvent`                                                 |

### `<input-number>` Methods

| 方法名 | 描述             | 参数 | 返回值 |
| ------ | ---------------- | ---- | ------ |
| focus  | 使输入框获取焦点 | -    | -      |
| blur   | 使输入框失去焦点 | -    | -      |

### `<input-number>` Slots

| 插槽名     |     描述     | 参数                    |
| ---------- | :----------: | ----------------------- |
| minus      | 数值减少图标 | -                       |
| plus       | 数值增加图标 | -                       |
| append     |   后置标签   | -                       |
| prepend    |   前置标签   | -                       |
| suffix     |     后缀     | -                       |
| prefix     |     前缀     | -                       |
| clear-icon |   清空图标   | `{ clear: () => void }` |

## 类型定义

组件导出以下类型定义

```ts
import type { InputNumberProps } from "@cedarjs/ui";
```
