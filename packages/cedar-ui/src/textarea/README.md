---
permalink: /components/textarea/
---

# Textarea

多行纯文本编辑控件，适用于评论或反馈表单中的一段意见。

## 案例

### 基础用法

可以用于多行输入。

<demo src="./__demos__/basic.vue"></demo>

### 文本域状态

文本域可以设置禁用和错误状态。

<demo src="./__demos__/status.vue"></demo>

### 字数统计

设置 max-length 可以限制最大字数，配合 show-word-limit 可以显示字数统计。

<demo src="./__demos__/max-length.vue"></demo>

### 自适应高度

通过设置 auto-size，可以让文本框自适应输入内容。

<demo src="./__demos__/auto-size.vue"></demo>

## API

### Textarea Props

| 属性                     | 说明                               | 类型                                        | 默认值  |
| ------------------------ | ---------------------------------- | ------------------------------------------- | ------- |
| model-value(**v-model**) | 绑定值｜`string`                   | `-`                                         |
| default-value            | 默认值(非受控状态)                 | `string`                                    | `''`    |
| placeholder              | 提示文字                           | `string`                                    | `-`     |
| disabled                 | 是否禁用                           | `boolean`                                   | `false` |
| error                    | 是否为错误状态                     | `boolean`                                   | `false` |
| max-length               | 输入的最大长度                     | `number\|{length:number,errorOnly?:boolean` | `0`     |
| show-word-limit          | 是否显示字数统计                   | `boolean`                                   | `false` |
| clearable              | 是否允许清空文本域                 | `boolean`                                   | `false` |
| auto-size                | 是否让文本自适应内容高度           | `boolean\|{minRows?;number,maxRows?;number` | `false` |
| word-length              | 字符长度的计算方法                 | `(value:string)=>number`                    | `-`     |
| word-slice               | 字符截取方法，同wordLength一起使用 | `(value:string,maxLength:number)=>string`   | `-`     |

### Textarea Events

| 事件名 | 说明                 | 参数                          |
| ------ | -------------------- | ----------------------------- |
| input  | 用户输入时触发       | `value:string`<br/>`ev:Event` |
| change | 仅在文本框失焦时触发 | `value:sring`<br/>`ev:Event`  |
| clear  | 点击清除按钮时触发   | `ev:MouseEvent`               |
| focus  | 文本框获取焦点时触发 | `ev:FocusEvent`               |
| blur   | 文本框失去焦点时触发 | `ev:FocusEvent`               |

### Textarea Methods

| 事件名 | 描述             | 参数 | 返回值 |
| ------ | ---------------- | ---- | ------ |
| focus  | 使输入框获取焦点 | `-`  | `-`    |
| blur   | 使输入框失去焦点 | `-`  | `-`    |

## 类型定义

组件导出以下类型定义

```ts
import type { TextareaProps } from '@cedar/ui'
```
