---
permalink: /components/textarea/
---

# Textarea

Textarea 是用于多行纯文本编辑的基础表单控件，适合评论、反馈和说明等较长内容。

## 设计要点

- 默认使用 `outline` 外观，`clearable` 默认关闭。
- `input` 表示实时编辑，`change` 在失焦值变化或清空时提交；Enter 保持换行语义。
- `auto-size` 开启后由内容决定高度，并覆盖 `rows` 与手动 `resize` 的视觉结果。
- Form/FormItem 负责业务校验规则和消息，Textarea 只提供事件信号和错误视觉状态。

## 案例

### 基础用法与值模型

`v-model` 用于受控值；`default-value` 只提供非受控初始值。`v-model.trim` 会在失焦提交时去除首尾空白。

<demo src="./__demos__/basic.vue"></demo>

### 状态与外观

支持 `filled`、`outline`、`standard` 三种外观和 `xs`、`sm`、`md`、`lg`、`xl` 五种尺寸。

<demo src="./__demos__/status.vue"></demo>

### 字数限制

数字形式会在用户编辑时截断；`errorOnly: true` 会保留超长内容并显示错误状态。外部受控值不会仅因超长而被组件反向改写。

<demo src="./__demos__/max-length.vue"></demo>

### 行数、自动高度与手动调整

`rows` 使用原生可见行数，仍受 min-height Token 约束语义。Cedar 默认允许纵向拖动；开启 `auto-size` 后关闭手动调整，并可使用 `minRows`、`maxRows` 约束高度。

在 Form/FormItem 内未显式设置时，`size`、`disabled`、`readonly` 和 `error` 会继承表单状态；组件本地传入的值（包括 `false`）优先。

<demo src="./__demos__/auto-size.vue"></demo>

### 事件语义

`input` 先于 `update:model-value`。IME 完成后处理一次；失焦提交 `change`。清空按 `clear → input → update:model-value → change` 通知，各一次，后续失焦不重复提交。

<demo src="./__demos__/interaction.vue"></demo>

### 前缀、后缀和清除图标

<demo src="./__demos__/slots.vue"></demo>

自定义 `clear-icon` 会收到 `clear(event?)` 方法。自定义交互元素需要保留可访问名称和键盘操作。

### 原生属性与无障碍

通过 `textarea-attrs` 补充 `name`、`autocomplete`、`inputmode`、`aria-describedby` 等原生属性。组件管理的值、禁用、只读、行数、长度、核心事件和错误态具有更高优先级。

<demo src="./__demos__/native-attrs.vue"></demo>

### 主体与事件契约

两端维护独立复制的主体。输入按 input → update:modelValue 通知；清空按 clear → input → update:modelValue → change 通知，各一次，Form 对应语义也各接收一次。只读、禁用和组合输入期间禁止清空。受控提议被拒绝后恢复原生内容，包括不支持光标 API 的输入类型。

<demo src="./__demos__/body-contract.vue"></demo>

## API

### Textarea Props

支持与 Input 一致的 hint、line、text-color、focus-color、blur-color；hint 未设置时继承 InputGroup/库默认值。外层 FormItem 有标签时隐藏内部浮动提示。



| 属性                    | 说明                               | 类型                                                | 默认值     |
| ----------------------- | ---------------------------------- | --------------------------------------------------- | ---------- |
| model-value (`v-model`) | 受控绑定值                         | `string`                                            | `-`        |
| default-value           | 非受控模式初始值                   | `string`                                            | `''`       |
| model-modifiers         | v-model 修饰符；支持 `trim`        | `{ trim?: boolean }`                                | `{}`       |
| placeholder             | 占位提示文字                       | `string`                                            | `-`        |
| variant                 | `filled` / `outline` / `standard` | `FormControlVariant`                                | `outline` |
| size                    | `xs` / `sm` / `md` / `lg` / `xl`   | `ComponentSize`                                     | `md`       |
| clearable               | 是否允许清空                       | `boolean`                                           | `false`    |
| disabled                | 是否禁用                           | `boolean`                                           | `false`    |
| readonly                | 是否只读                           | `boolean`                                           | `false`    |
| error                   | 是否显示错误状态                   | `boolean`                                           | `false`    |
| rows                    | 原生可见行数，仍受 min-height Token 约束                       | `string \| number`                                  | `-`        |
| resize                  | 是否允许纵向拖动调整尺寸           | `boolean`                                           | `true`     |
| auto-size               | 是否自动高度，可设置最小/最大行数  | `boolean \| { minRows?: number; maxRows?: number }` | `false`    |
| max-length              | 最大长度；对象形式可启用仅错误模式 | `number \| { length: number; errorOnly?: boolean }` | `0`        |
| show-word-limit         | 是否显示字数统计                   | `boolean`                                           | `false`    |
| word-length             | 自定义长度计算方法                 | `(value: string) => number`                         | `-`        |
| word-slice              | 自定义截取方法                     | `(value: string, maxLength: number) => string`      | `-`        |
| aria-label              | 无可见标签时提供的可访问名称       | `string`                                            | `-`        |
| autofocus               | 是否自动聚焦                       | `boolean`                                           | `false`    |
| enterkeyhint            | 虚拟键盘回车键提示                 | `string`                                            | `-`        |
| textarea-attrs          | 内部 textarea 元素的补充原生属性   | `Record<string, unknown>`                           | `-`        |
| hint | 浮动提示，未设置时继承 InputGroup/库默认 | boolean | undefined |
| line | 显示边框/底线 | boolean | true |
| text-color | 实例文字颜色 | string | undefined |
| focus-color | 实例聚焦颜色 | string | undefined |
| blur-color | 实例失焦提示颜色 | string | undefined |

### Textarea Events

| 事件名  | 说明                                | 参数                       |
| ------- | ----------------------------------- | -------------------------- |
| input   | IME 完成后的用户输入                | `value: string, ev: Event` |
| change  | 失焦提交且值变化时触发              | `value: string, ev: Event` |
| keydown | 用户按键时触发；Enter 不提交 change | `ev: KeyboardEvent`        |
| clear   | 用户清空时触发，按 clear → input → update:model-value → change 通知 | `ev: Event`                |
| focus   | 获得焦点时触发                      | `ev: FocusEvent`           |
| blur    | 失去焦点时触发                      | `ev: FocusEvent`           |

### Textarea Slots

| 插槽名     | 说明           | 参数                          |
| ---------- | -------------- | ----------------------------- |
| prefix     | 前缀元素       | `-`                           |
| suffix     | 后缀元素       | `-`                           |
| clear-icon | 清除图标或按钮 | `clear: (ev?: Event) => void` |

### Textarea Methods

| 方法名 | 说明                     |
| ------ | ------------------------ |
| focus  | 使内部 textarea 获取焦点 |
| blur   | 使内部 textarea 失去焦点 |

## 类型定义

```ts
import type {
  TextareaAutoSize,
  TextareaMaxLength,
  TextareaProps,
  WordLength,
  WordSlice,
} from "@cedarjs/ui";
```

## 样式变量

| 变量名                                         | 默认值                            |
| ---------------------------------------------- | --------------------------------- |
| `--c-textarea-height`                          | `auto`                            |
| `--c-textarea-min-height`                      | `--c-sys-control-height-xl`       |
| `--c-textarea-font-size`                       | `--c-sys-font-size-md`            |
| `--c-textarea-line-height`                     | `--c-line-height`                 |
| `--c-textarea-padding-horizontal`              | `--c-sys-space-3`                 |
| `--c-textarea-padding-vertical`                | `--c-sys-space-1`                 |
| `--c-textarea-placeholder-color`               | `--c-sys-color-content-secondary`  |
| `--c-textarea-counter-color`                   | `--c-sys-color-content-secondary`  |
| `--c-textarea-counter-font-size`               | `--c-sys-font-size-xs`            |
| `--c-textarea-counter-margin-top` | `var(--c-sys-space-2)` |

两端计数器均在外侧，使用 counter-margin-top 控制顶部间距，避免覆盖文本。

### 原生布局与公开类型

size 支持 xs/sm/md/lg/xl 的 FieldDecorator 外壳密度；文本域高度/文字度量仍由 rows、auto-size 和 Textarea Token 控制。Cedar 默认允许手动 resize，Maple 默认关闭。继承 InputGroup 与 Form 状态，子项显式值优先；提供 focus(options?)、blur()、select() 和 textareaRef。

`TextareaProps`、`TextareaVariant`、`TextareaMaxLength`、`TextareaAutoSize`、`TextareaEmits`、`TextareaSlots`、`TextareaExpose`、`TextareaInstance`。

原生方法：`focus(options?: FocusOptions)`、`blur()`、`select()`；`textareaRef` 为原生元素。
