---
permalink: /components/input/
---

# Input

Input 是用于单行文本输入的基础表单控件。它保留原生输入的直觉交互，同时提供统一的外观、受控/非受控值模型、长度限制、清除操作和表单联动能力。

## 设计要点

- 默认使用 `outlined` 外观；需要更强的层级感时可切换为 `filled` 或 `standard`。
- `clearable` 默认关闭。只有在清除操作确实能提升效率时才建议开启。
- `v-model` 适合需要实时响应的场景；`default-value` 适合只提供初始值的场景。
- `input` 表示实时输入，`change` 表示一次编辑提交：失焦或按下 Enter 时触发，同一轮编辑只触发一次。

## 基础用法

最常见的场景是使用 `v-model` 绑定字符串值。输入框默认采用描边外观。

<demo src="./__demos__/basic.vue"></demo>

## 值模型

使用 `v-model` 时，值由父组件控制；使用 `default-value` 时，组件读取初始值后自行维护后续变化。

<demo src="./__demos__/value-model.vue"></demo>

```vue
<c-input v-model="keyword" placeholder="受控输入" />
<c-input default-value="初始内容" placeholder="非受控输入" />
```

建议把展示、搜索和联动状态放在 `v-model` 中；独立的小型输入控件可以使用 `default-value`，减少不必要的状态同步。

## 外观与尺寸

### 变体

通过 `variant` 选择输入框的视觉层级。可选值为 `outlined`、`filled` 和 `standard`，默认值为 `outlined`。

<demo src="./__demos__/variant.vue"></demo>

### 尺寸

Input 提供 `xs`、`sm`、`md`、`lg`、`xl` 五种尺寸。一个表单区域内建议保持尺寸一致。

<demo src="./__demos__/size.vue"></demo>

### 输入框组合

多个输入框需要表达连续关系时，可以使用 InputGroup 统一尺寸、禁用状态和外观。

<demo src="./__demos__/group.vue"></demo>

## 输入类型

Input 支持 `text`、`password`、`number`、`tel` 和 `email`。

<demo src="./__demos__/types.vue"></demo>

`number` 用于数字输入体验，但值模型仍然是 `string`，不会被强制转换为 JavaScript number。`tel` 和 `email` 会为浏览器和移动端输入法提供语义提示。密码显隐交互建议使用 `InputPassword`。

## 前缀、后缀与清除

通过 `prefix`、`suffix` 插槽补充单位、图标或上下文信息。开启 `clearable` 后，清除按钮仅在有值且输入框可编辑时显示。

<demo src="./__demos__/prefix.vue"></demo>

自定义清除图标时，插槽会收到 `clear` 方法。若替换为自定义按钮，请保留可聚焦、可按键触发和明确的 `aria-label`：

```vue
<c-input v-model="keyword" clearable>
  <template #prefix><SearchIcon /></template>
  <template #suffix>件</template>
  <template #clear-icon="{ clear }">
    <button type="button" aria-label="清除" @click="clear">×</button>
  </template>
</c-input>
```

## 状态

`readonly` 用于展示不可编辑但可复制的值；`disabled` 用于不可参与当前流程的控件；`error` 用于表达错误视觉状态。

<demo src="./__demos__/state.vue"></demo>

## 长度限制与字数统计

传入数字时，超过长度的内容会被截断。传入对象并设置 `errorOnly: true` 时，组件保留超出内容，仅标记错误。

<demo src="./__demos__/word-limit.vue"></demo>

```vue
<!-- 默认截断 -->
<c-input v-model="title" :max-length="10" show-word-limit />

<!-- 仅校验：保留超出内容，并进入 error 状态 -->
<c-input v-model="description" :max-length="{ length: 100, errorOnly: true }" show-word-limit />
```

对于中文字符、emoji 或业务自定义编码，使用 `word-length` 定义计数规则，并配合 `word-slice` 定义截取规则。

## 事件语义

<demo src="./__demos__/interaction.vue"></demo>

| 事件                | 触发时机                                    | 参数                       |
| ------------------- | ------------------------------------------- | -------------------------- |
| `update:modelValue` | 值模型更新时                                | `value: string`            |
| `input`             | 用户每次输入时                              | `value: string, ev: Event` |
| `change`            | 失焦或按下 Enter 提交编辑时；同一轮编辑去重 | `value: string, ev: Event` |
| `press-enter`       | 按下 Enter 时                               | `ev: KeyboardEvent`        |
| `keydown`           | 任意按键时，作为原生兼容事件保留            | `ev: KeyboardEvent`        |
| `clear`             | 用户触发清除时                              | `ev: Event`                |
| `focus` / `blur`    | 获得/失去焦点时                             | `ev: FocusEvent`           |

`clear` 会清空值并触发 `update:modelValue`，但不会额外伪造一次 `input` 或 `change`。如果清除后需要提交搜索或重新校验，请在 `clear` 中显式处理。

## 表单校验

Input 只负责输入和事件，不主动决定业务校验规则。将它放入 FormItem 后，由 FormItem 统一管理规则、校验时机和错误消息。

<demo src="./__demos__/form.vue"></demo>

```vue
<c-form :model="form">
  <c-form-item
    field="email"
    label="邮箱"
    :rules="[{ required: true, message: '请输入邮箱' }]"
    :validate-trigger="['blur', 'change']"
  >
    <c-input v-model="form.email" type="email" />
  </c-form-item>
</c-form>
```

## 原生属性与无障碍

组件自身未声明的原生输入属性可以通过 `input-attrs` 传给内部 `<input>`，适合补充 `name`、`autocomplete`、`inputmode`、`aria-describedby` 等语义信息。

<demo src="./__demos__/native-attrs.vue"></demo>

可见标签优先使用 `label` 的 `for` 与输入框 id 关联；没有可见标签时至少提供 `aria-label`。帮助文本、错误文本应通过 `aria-describedby` 关联。自定义 `clear-icon` 时应使用可聚焦、可键盘操作的元素。

<demo src="./__demos__/accessibility.vue"></demo>

## 密码输入框

InputPassword 在 Input 的基础上提供密码显隐交互，适合登录、注册和敏感信息输入。

<demo src="./__demos__/password.vue"></demo>

## API

### Input Props

| 参数名                | 描述                                   | 类型                                           |   默认值   |
| --------------------- | -------------------------------------- | ---------------------------------------------- | :--------: |
| model-value (v-model) | 受控绑定值                             | `string`                                       |    `-`     |
| default-value         | 非受控模式的初始值                     | `string`                                       |    `''`    |
| type                  | text / password / number / tel / email | `InputType`                                    |   `text`   |
| variant               | filled / outlined / standard           | `string`                                       | `outlined` |
| size                  | xs / sm / md / lg / xl                 | `ComponentSize`                                |    `md`    |
| clearable             | 是否允许清空输入框                     | `boolean`                                      |  `false`   |
| disabled              | 是否禁用                               | `boolean`                                      |  `false`   |
| readonly              | 是否为只读状态                         | `boolean`                                      |  `false`   |
| error                 | 是否为错误状态                         | `boolean`                                      |  `false`   |
| placeholder           | 占位提示文字                           | `string`                                       |    `-`     |
| max-length            | 最大长度；数字为截断模式               | `number or object`                             |    `0`     |
| show-word-limit       | 是否显示字数统计                       | `boolean`                                      |  `false`   |
| word-length           | 自定义长度计算方法                     | `(value: string) => number`                    |    `-`     |
| word-slice            | 自定义截取方法                         | `(value: string, maxLength: number) => string` |    `-`     |
| input-attrs           | 内部 input 元素的原生属性              | `Record<string, unknown>`                      |    `-`     |

### Input Events

| 事件名      | 描述                         | 参数                       |
| ----------- | ---------------------------- | -------------------------- |
| input       | 用户输入时触发               | `value: string, ev: Event` |
| change      | 失焦或按下回车提交变更时触发 | `value: string, ev: Event` |
| press-enter | 用户按下回车时触发           | `ev: KeyboardEvent`        |
| keydown     | 用户按键时触发（兼容性事件） | `ev: KeyboardEvent`        |
| clear       | 用户清空输入框时触发         | `ev: Event`                |
| focus       | 输入框获取焦点时触发         | `ev: FocusEvent`           |
| blur        | 输入框失去焦点时触发         | `ev: FocusEvent`           |

### Input Methods

| 方法名 | 描述             |
| ------ | ---------------- |
| focus  | 使输入框获取焦点 |
| blur   | 使输入框失去焦点 |

### Input Slots

| 插槽名     | 描述           | 参数                |
| ---------- | -------------- | ------------------- |
| prefix     | 前缀元素       | -                   |
| suffix     | 后缀元素       | -                   |
| clear-icon | 清除图标或按钮 | `clear: () => void` |

### InputPassword

InputPassword 在 Input 的基础上提供密码显隐交互。

| 参数名             | 描述                   | 类型      | 默认值  |
| ------------------ | ---------------------- | --------- | :-----: |
| visibility-toggle  | 是否显示密码可见性按钮 | `boolean` | `true`  |
| default-visibility | 默认是否可见，非受控   | `boolean` | `false` |

| 事件名            | 描述                 | 参数               |
| ----------------- | -------------------- | ------------------ |
| visibility-change | 密码可见性改变时触发 | `visible: boolean` |

## 类型定义

```ts
import type { InputMaxLength, InputProps, InputType } from '@cedarjs/ui'
```
