---
permalink: /components/input/
---

# Input

基本表单组件，并在原生控件基础上进行了功能扩展，可以组合使用。

默认长度按 UTF-16 码元计算（emoji 通常占 2）；默认截断不会拆开有效的代理对，边界不足时舍去整个字符。若需按用户感知字符（字素簇）计数和裁剪，请配套提供 `word-length` 与 `word-slice`；自定义裁剪结果由业务负责。

## 案例

### 变体

设置 `variant` 来调整不同风格的输入框。
可选值为 `filled`、`outline` 和 `standard`。

<demo src="./__demos__/variant.vue"></demo>

### 尺寸

输入框完整支持五种尺寸 `xs / sm / md / lg / xl`，默认 `md`。

<demo src="./__demos__/size.vue"></demo>

### 状态

输入框可以设置禁用和错误状态。

<demo src="./__demos__/state.vue"></demo>

### 表单控件尺寸对照

切换五档 size 和三种字段变体，比较 Input、Button、Select、日期时间及其他单行表单控件的高度。Button 在这里固定使用 outline。DatePicker/TimePicker 是面板，此处使用带输入框的 Date/Time 字段。示例同时展示有值、可清空、标签删除与长标签多选；Select/Cascader 设置 tag-nowrap 时保持同档高度，长标签文字省略、删除图标保留；标签行可横向滚动，清空按钮和箭头固定在外侧。被省略的标签正文支持悬停、键盘聚焦或点按查看完整文字，点外部或按 Esc 关闭，不改变选中值。可清空后恢复选中值重复比较。多行文本和允许换行的多选内容按内容撑高。

<demo src="../field-decorator/__demos__/control-sizes.vue"></demo>


输入框的基本用法。

<demo src="./__demos__/basic.vue"></demo>

### 输入框组合

通过 input-group 可以组合使用输入框。

<demo src="./__demos__/group.vue"></demo>

### 组合状态继承

`InputGroup` 统一传递 `size / variant / disabled / readonly / hint`；子项显式设置的值（包括 `false`）优先。`InputPassword` 和清除按钮同样遵循继承后的状态。

<demo src="./__demos__/group-state.vue"></demo>

### 表单反馈

通过 FormItem 的 `feedback` 和 `validate-status` 展示校验反馈。有外置 FormItem 标签时，Input 自动关闭内部浮动提示，避免重复标签。

<demo src="./__demos__/form-feedback.vue"></demo>

### 前缀、后缀

通过指定 prefix 和 suffix 插槽来在输入框内添加前缀和后缀。

<demo src="./__demos__/prefix.vue"></demo>

### 浮动提示

设置 `hint` 后，提示文字作为关联原生输入框的标签，在聚焦或输入非空值时浮起；`line` 控制描边或底线是否显示。桌面端默认不启用浮动提示，仍可使用普通 `placeholder`；移动端默认启用。`text-color`、`focus-color`、`blur-color` 可覆盖文字与提示颜色。

<demo src="./__demos__/floating-hint.vue"></demo>

### 数字统计

设置 max-length 可以限制最大字数，配合 show-word-limit 可以显示字数统计。
超出长度时会截断，并通过 `update:model-value` 与 `input` 传出截断后的值。清空按 `clear → input → update:model-value → change` 通知，随后失焦不会补发 `change`。

<demo src="./__demos__/word-limit.vue"></demo>

### 密码输入框

用于输入密码。

<demo src="./__demos__/password.vue"></demo>

### 主体与事件契约

两端维护独立复制的主体。输入按 input → update:modelValue 通知；清空按 clear → input → update:modelValue → change 通知，各一次，Form 对应语义也各接收一次。只读、禁用和组合输入期间禁止清空。受控提议被拒绝后恢复原生内容，包括不支持光标 API 的输入类型。

<demo src="./__demos__/event-pipeline.vue"></demo>

### 外观组合

适用于表单中的单行文本输入。调整变体、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

<demo src="./__demos__/appearance-lab.vue"></demo>

### 交互状态切换

适用于表单中的单行文本输入。调整禁用、只读、错误反馈，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

<demo src="./__demos__/state-lab.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### `<Input>` Props

| 参数名                    | 描述                                 | 类型                                                |   默认值    |
| ------------------------- | ------------------------------------ | --------------------------------------------------- | :---------: |
| model-value **(v-model)** | 绑定值                               | `string`                                            |     `-`     |
| model-modifiers           | `v-model` 修饰符，支持 `trim`        | `{ trim?: boolean }`                                |    `{}`     |
| default-value             | 默认值（非受控状态）                 | `string`                                            |    `''`     |
| variant                   | 输入框变体                           | `'filled' \| 'outline' \| 'standard'`               | `'outline'` |
| size                      | 输入框大小                           | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`              |   `'md'`    |
| clearable                 | 是否允许清空输入框                   | `boolean`                                           |   `false`   |
| disabled                  | 是否禁用，可继承 Form                | `boolean`                                           |     `-`     |
| readonly                  | 是否只读，可继承 Form                | `boolean`                                           |     `-`     |
| error                     | 是否为错误状态，可继承 FormItem      | `boolean`                                           |     `-`     |
| placeholder               | 提示文字                             | `string`                                            |     `-`     |
| hint                      | 提示文字是否浮起                     | `boolean`                                           |   `false`   |
| line                      | 是否绘制边框或底线                   | `boolean`                                           |   `true`    |
| text-color                | 输入文字颜色                         | `string`                                            |     `-`     |
| focus-color               | 聚焦提示及支持的边框通道；不控制 caret | `string`                                            |     `-`     |
| blur-color                | 未聚焦时提示颜色                     | `string`                                            |     `-`     |
| aria-label                | 原生输入框的无障碍标签               | `string`                                            |     `-`     |
| autofocus                 | 是否自动聚焦                         | `boolean`                                           |   `false`   |
| enterkeyhint              | 移动端虚拟键盘回车键提示             | `string`                                            |     `-`     |
| max-length                | 输入值的最大长度                     | `number \| { length: number; errorOnly?: boolean }` |     `0`     |
| show-word-limit           | 是否显示字数统计                     | `boolean`                                           |   `false`   |
| word-length               | 字符长度的计算方法                   | `(value: string) => number`                         |     `-`     |
| word-slice                | 字符截取方法，同 wordLength 一起使用 | `(value: string, maxLength: number) => string`      |     `-`     |
| input-attrs               | 内部 input 元素的属性                | `object`                                            |     `-`     |

`disabled / readonly / size` 按子项 → InputGroup → FormItem/Form → 库默认值继承；Cedar 的尺寸还支持 ConfigProvider。`clearable` 只对非空且可编辑的输入生效：PC 在悬浮或焦点进入时显示，触控设备与 Maple 常驻显示。原生 `name / id / aria-* / data-*` 会透传给 input；`class / style` 留在外壳，`input-attrs` 不能覆盖受控值、类型、禁用、只读和长度策略。

### `<Input>` Events

| 事件名      | 描述                           | 参数                           |
| ----------- | ------------------------------ | ------------------------------ |
| input       | 用户输入时触发                 | value: `string`<br>ev: `Event` |
| change      | 失焦、回车提交或清空时触发 | value: `string`<br>ev: `Event` |
| press-enter | 用户按下回车时触发             | ev: `KeyboardEvent`            |
| clear       | 用户点击清除按钮时触发         | ev: `MouseEvent`               |
| focus       | 输入框获取焦点时触发           | ev: `FocusEvent`               |
| blur        | 输入框失去焦点时触发           | ev: `FocusEvent`               |

### `<Input>` Methods

| 方法名 | 描述             | 参数 | 返回值 |
| ------ | ---------------- | ---- | ------ |
| focus  | 使输入框获取焦点 | -    | -      |
| blur   | 使输入框失去焦点 | -    | -      |
| select | 选中输入内容 | - | - |

### `<input>` Slots

| 插槽名 |   描述   | 参数 |
| ------ | :------: | ---- |
| suffix | 后缀元素 | -    |
| prefix | 前缀元素 | -    |
| clear-icon | 自定义清除按钮 | `clear(event?: Event)` |

### `<InputPassword>` Props

| 参数名             | 描述                   | 类型      | 默认值  |
| ------------------ | ---------------------- | --------- | :-----: |
| visibility-toggle  | 是否显示密码可见性按钮 | `boolean` | `true`  |
| default-visibility | 默认是否可见，非受控   | `boolean` | `false` |
| visibility | 受控密码可见性，支持 v-model:visibility | `boolean` | `-` |

InputPassword 支持所有 Input 属性、事件、插槽与方法。

### `<InputGroup>` Props

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 组内默认尺寸 | `ComponentSize` | 继承 Form/ConfigProvider 或 `md` |
| variant | 组内默认变体 | `filled \| outline \| standard` | `filled` |
| disabled | 组内禁用状态 | `boolean` | 继承 Form 或 `false` |
| readonly | 组内只读状态 | `boolean` | 继承 Form 或 `false` |
| hint | 组内浮动提示 | `boolean` | 库默认值 |

### `<InputPassword>` Events

| 参数名            | 描述                 | 参数              |
| ----------------- | -------------------- | ----------------- |
| visibility-change | visibility改变时触发 | `visible:boolean` |

## 类型定义

组件导出以下类型定义

```ts
import type { InputProps } from "@cedarjs/ui";
```

公开类型 / Public types: `InputEmits`, `InputSlots`, `InputExpose`, `InputGroupSlots`, `InputPasswordEmits`, `InputPasswordSlots`, `InputPasswordExpose`.

### 表单展示继承

支持 presentation：`inline / click / dblclick`，默认 inline。可继承 FormItem/Form；readPretty 以纯文本阅读，其他弹层默认确认后更新 v-model。可选 before-commit 在候选校验通过后拦截保存。使用方式与对比 Demo 统一见 Form 文档。
