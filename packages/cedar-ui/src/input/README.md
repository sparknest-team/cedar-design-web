---
permalink: /components/input/
---

# Input

基本表单组件，并在原生控件基础上进行了功能扩展，可以组合使用。

## 案例

输入框的基本用法。

<demo src="./__demos__/basic.vue"></demo>

### 变体

设置 `variant` 来调整不同风格的输入框。
可选值为 `filled`、`outline` 和 `standard`。

<demo src="./__demos__/variant.vue"></demo>

### 尺寸

输入框定义了四种默认尺寸 xs, sm, md, lg。

<demo src="./__demos__/size.vue"></demo>

### 输入框组合

通过 input-group 可以组合使用输入框。

<demo src="./__demos__/group.vue"></demo>

### 前缀、后缀

通过指定 prefix 和 suffix 插槽来在输入框内添加前缀和后缀。

<demo src="./__demos__/prefix.vue"></demo>

### 状态

输入框可以设置禁用和错误状态。

<demo src="./__demos__/state.vue"></demo>

### 数字统计

设置 max-length 可以限制最大字数，配合 show-word-limit 可以显示字数统计。

<demo src="./__demos__/word-limit.vue"></demo>

### 密码输入框

用于输入密码。

<demo src="./__demos__/password.vue"></demo>

## API

### `<Input>` Props

| 参数名                    | 描述                                 | 类型                                                | 默认值  |
| ------------------------- | ------------------------------------ | --------------------------------------------------- | :-----: |
| model-value **(v-model)** | 绑定值                               | `string`                                            |   `-`   |
| default-value             | 默认值（非受控状态）                 | `string`                                            |  `''`   |
| variant                   | 输入框变体                           | `'filled' \| 'outline' \| 'standard'`               | `'filled'` |
| size                      | 输入框大小                           | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`              | `'md'`  |
| clearable                 | 是否允许清空输入框                   | `boolean`                                           | `true`  |
| disabled                  | 是否禁用                             | `boolean`                                           | `false` |
| readonly                  | 是否为只读状态                       | `boolean`                                           | `false` |
| error                     | 是否为错误状态                       | `boolean`                                           | `false` |
| placeholder               | 提示文字                             | `string`                                            |   `-`   |
| max-length                | 输入值的最大长度                     | `number \| { length: number; errorOnly?: boolean }` |   `0`   |
| show-word-limit           | 是否显示字数统计                     | `boolean`                                           | `false` |
| word-length               | 字符长度的计算方法                   | `(value: string) => number`                         |   `-`   |
| word-slice                | 字符截取方法，同 wordLength 一起使用 | `(value: string, maxLength: number) => string`      |   `-`   |
| input-attrs               | 内部 input 元素的属性                | `object`                                            |   `-`   |

### `<Input>` Events

| 事件名      | 描述                           | 参数                           |
| ----------- | ------------------------------ | ------------------------------ |
| input       | 用户输入时触发                 | value: `string`<br>ev: `Event` |
| change      | 仅在输入框失焦或按下回车时触发 | value: `string`<br>ev: `Event` |
| press-enter | 用户按下回车时触发             | ev: `KeyboardEvent`            |
| clear       | 用户点击清除按钮时触发         | ev: `MouseEvent`               |
| focus       | 输入框获取焦点时触发           | ev: `FocusEvent`               |
| blur        | 输入框失去焦点时触发           | ev: `FocusEvent`               |

### `<Input>` Methods

| 方法名 | 描述             | 参数 | 返回值 |
| ------ | ---------------- | ---- | ------ |
| focus  | 使输入框获取焦点 | -    | -      |
| blur   | 使输入框失去焦点 | -    | -      |

### `<input>` Slots

| 插槽名 |   描述   | 参数 |
| ------ | :------: | ---- |
| suffix | 后缀元素 | -    |
| prefix | 前缀元素 | -    |

### `<InputPassword>` Props

| 参数名             | 描述                 | 类型      | 默认值 |
| ------------------ | -------------------- | --------- | :----: |
| visibility-toggle  | 是否显示密码可见性按钮 | `boolean` | `true` |
| default-visibility | 默认是否可见，非受控 | `boolean` | `false` |

### `<InputPassword>` Events

| 参数名            | 描述                 | 参数              |
| ----------------- | -------------------- | ----------------- |
| visibility-change | visibility改变时触发 | `visible:boolean` |

## 类型定义

组件导出以下类型定义

```ts
import type { InputProps } from '@cedarjs/ui'
```
