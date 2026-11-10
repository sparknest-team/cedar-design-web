---
permalink: /components/input/
---

# Input

基本表单组件，并在原生控件基础上进行了功能扩展，可以组合使用。

默认长度按 UTF-16 码元计算（emoji 通常占 2）；默认截断不会拆开有效的代理对，边界不足时舍去整个字符。若需按用户感知字符（字素簇）计数和裁剪，请配套提供 `word-length` 与 `word-slice`；自定义裁剪结果由业务负责。

## 阅读方向

输入框继承页面或局部容器的 `dir`；前后缀、清除操作和输入框组按阅读顺序排列。运行时切换方向保留原生输入节点、焦点和选区；光标、选区、混合文字与输入法组合由浏览器处理，不交换左右编辑键。父级重绘时保留正在组合的原生文本；旧选区恢复任务不会覆盖新的组合缓冲。

## 基础示例

### 表单控件尺寸对照

切换五档 size 和三种字段变体，比较 Input、Button、Select、日期时间及其他单行表单控件的高度。Button 在这里固定使用 outline。DatePicker/TimePicker 是面板，此处使用带输入框的 Date/Time 字段。示例同时展示有值、可清空、标签删除与长标签多选；Select/Cascader 设置 tag-nowrap 时保持同档高度，长标签文字省略、删除图标保留；标签行可横向滚动，清空按钮和箭头固定在外侧。被省略的标签正文支持悬停、键盘聚焦或点按查看完整文字，点外部或按 Esc 关闭，不改变选中值。可清空后恢复选中值重复比较。多行文本和允许换行的多选内容按内容撑高。

<demo src="../field-decorator/__demos__/control-sizes.vue"></demo>

输入框的基本用法。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 外观配置对比

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置          | 作用               | 相关示例           |
| ------------- | ------------------ | ------------------ |
| `placeholder` | 提示文字           | 表单反馈、浮动提示 |
| `hint`        | 提示文字是否浮起   | 表单反馈、浮动提示 |
| `clearable`   | 是否允许清空输入框 | 表单反馈、浮动提示 |
| `variant`     | 输入框变体         | 浮动提示           |

<!-- demo-config-notes:end -->

选择一个对比维度后，同屏展示它的全部可选值；其余配置和内容保持一致。可切换其他配置检查组合效果；输入类预览共享一个值。

<details>
<summary>配置说明与使用限制</summary>

#### 变体

设置 `variant` 来调整不同风格的输入框。
可选值为 `filled`、`outline` 和 `standard`。

#### 尺寸

输入框完整支持五种尺寸 `xs / sm / md / lg / xl`，默认 `md`。

#### 外观组合

适用于表单中的单行文本输入。调整变体、尺寸，用相同数据观察变化。内容保持一致，便于比较不同设置的实际效果。

</details>

<demo src="./__demos__/appearance-lab.vue"></demo>

### 表单反馈

通过 FormItem 的 `feedback` 和 `validate-status` 展示校验反馈。有外置 FormItem 标签时，Input 自动关闭内部浮动提示，避免重复标签。

<demo src="./__demos__/form-feedback.vue"></demo>

### 浮动提示

`hint` 未设置时继承 InputGroup；独立使用的库默认值为 `true`，有外置 FormItem 标签时关闭浮动提示。显式设置 `false` 使用原生 placeholder，显式设置 `true` 仍受外置标签抑制。`text-color`、`focus-color`、`blur-color` 可覆盖文字与提示颜色。

<demo src="./__demos__/floating-hint.vue"></demo>

## 输入内容与布局

### 数字统计

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置              | 作用                                                       | 相关示例                           |
| ----------------- | ---------------------------------------------------------- | ---------------------------------- |
| `placeholder`     | 提示文字                                                   | 数字统计、前缀、后缀、输入框组合   |
| `clearable`       | 是否允许清空输入框                                         | 数字统计、前缀、后缀、组合状态继承 |
| `max-length`      | 有限非负长度或 `{ length, errorOnly? }`；0 不限；非法值提示并回退不限 | 数字统计                           |
| `show-word-limit` | 是否显示字数统计                                           | 数字统计                           |
| `default-value`   | 非受控初始值，仅创建时读取；后续修改不重置输入，不回写父级 | 组合状态继承                       |
| `disabled`        | 是否禁用，可继承 Form                                      | 组合状态继承                       |

<!-- demo-config-notes:end -->

设置 max-length 可以限制最大字数，配合 show-word-limit 可以显示字数统计。
`errorOnly: true` 保留超限文本并显示错误；其余长度限制会截断，`input` 通知归一化文本，模型通知遵循 Vue 修饰符。清空按 `clear → input → update:model-value → change` 通知，随后失焦不会补发 `change`。

<demo src="./__demos__/word-limit.vue"></demo>

`max-length` 为有限非负数或 `{ length, errorOnly? }`，`0` 表示不限。对象的 `length` 同样须为有限非负数，`errorOnly` 为可选布尔值；非法值沿 Vue Prop 校验提示并按不限长度回退，传入 null 按未设置处理。默认截断按 UTF-16 码元计算；自定义计数与裁剪请配套提供 `word-length / word-slice`。

### 密码输入框

用于输入密码。

<demo src="./__demos__/password.vue"></demo>

### 前缀、后缀

通过指定 prefix 和 suffix 插槽来在输入框内添加前缀和后缀。

<demo src="./__demos__/prefix.vue"></demo>

### 输入框组合

通过 input-group 可以组合使用输入框。

<demo src="./__demos__/group.vue"></demo>

`InputGroupLabel` 的根节点为 span，用于输入框外侧的附加内容。可使用 FormItem 的 `label-attrs.for` 对应 Input 的 `id`，或使用原生 label 的 for/id 关联可见字段名；也可显式提供 `aria-label`。

### 组合状态继承

`InputGroup` 统一传递 `size / variant / disabled / readonly / hint`；子项显式设置的值（包括 `false`）优先。`InputPassword` 和清除按钮同样遵循继承后的状态。

<demo src="./__demos__/group-state.vue"></demo>

## 值模型与交互

### 默认值与双向绑定

<!-- demo-config-notes:start -->

#### 本组配置对照

| 配置            | 作用                                                       | 相关示例                           |
| --------------- | ---------------------------------------------------------- | ---------------------------------- |
| `clearable`     | 是否允许清空输入框                                         | 主体与事件契约、清空按钮与手动删空 |
| `default-value` | 非受控初始值，仅创建时读取；后续修改不重置输入，不回写父级 | 默认值与双向绑定                   |
| `aria-label`    | 原生输入框的无障碍标签                                     | 默认值与双向绑定                   |
| `disabled`      | 是否禁用，可继承 Form                                      | 交互状态对比                       |
| `readonly`      | 是否只读，可继承 Form                                      | 交互状态对比                       |
| `error`         | 是否为错误状态，可继承 FormItem                            | 交互状态对比                       |

<!-- demo-config-notes:end -->

`modelValue` 是受控值，通过普通 `v-model` 绑定；父级提供的值优先，包括空字符串。`defaultValue` 是非受控初始值，仅在组件创建时读取；之后由组件内部保存用户输入。修改 `defaultValue` 不会重置现有文字，重新挂载才会重新读取，也不会在初始化时触发 `update:modelValue` 或写入父级表单。

`v-model.trim` 遵循 Vue 模型事件规则：输入时的 `update:modelValue` 已去除首尾空白；`input` 仍通知经过长度归一化的原始文本。非受控输入可在编辑时保留空白，提交时归一化本地显示；提交不重复发布已通知的同一个模型值。受控显示始终由父级最终值决定，`change` 仍表示提交。

需要表单默认值时，直接初始化绑定字段，例如 `const text = ref('北京')`，然后使用 `<c-input v-model="text" />`。

<demo src="./__demos__/default-value.vue"></demo>

### 清空按钮与手动删空

将清空输出设为 null。先点击清空图标，观察模型为 null；恢复初值后用 Backspace 删光，观察模型为空字符串。普通输入不会自动套用 empty-value。

<demo src="./__demos__/empty-value.vue"></demo>

### 交互状态对比

在同一实例上切换禁用、只读和错误状态后再操作控件，比较可编辑性和交互反馈。恢复开关位于目标控件外；错误外观本身不会执行校验。

<details>
<summary>配置说明与使用限制</summary>

#### 状态

输入框可以设置禁用和错误状态。

#### 交互状态切换

适用于表单中的单行文本输入。调整禁用、只读、错误反馈，用相同数据观察变化。控制区始终可用，可以随时恢复编辑；错误外观本身不会触发表单校验。

</details>

<demo src="./__demos__/state-lab.vue"></demo>

### 主体与事件契约

输入按 input → update:modelValue 通知；清空按 clear → input → update:modelValue → change 通知，各一次，Form 对应语义也各接收一次。只读、禁用和组合输入期间禁止清空。受控提议被拒绝后恢复原生内容，包括不支持光标 API 的输入类型。

<demo src="./__demos__/event-pipeline.vue"></demo>

### 提交前确认

字段提交也支持 `beforeCommit({ value, previousValue }, done, context)`：第二个参数 done 决定允许或拒绝，第三个参数 context 提供取消信号；Promise 和 boolean 写法继续支持。声明 done 的回调必须调用完成函数，或返回 boolean/Promise。

守卫统一使用 `(payload, done, context)`：关闭 payload 为 `{ action }`，切换和提交为 `{ value, previousValue }`，Popup 为 `{ reason }`。context 提供 `signal` 和可选原始 `event`。返回 boolean/Promise，或调用 done()/done(false)；同步 void 等待 done，Promise&lt;void&gt; 放行。首次完成生效。等待期间自动管理 loading/disabled，取消后旧结果失效，不暴露内部按钮 refs。

<demo src="./__demos__/commit-protocol.vue"></demo>

### 共享字段加载

`loading` 控制共享字段加载状态；`loading-mode` 为 `default`（指示器）或 `line`（底部不定进度线），默认 `default`。渲染统一由 FieldDecorator 负责，不隐式改变 disabled/readonly；需要禁止编辑时单独设置。

## 加载与等待

### 加载状态

切换加载状态，对比默认指示器与底部加载线。加载期间仍可编辑输入；是否禁止编辑由 disabled / readonly 单独控制。

<demo src="./__demos__/loading.vue"></demo>

## 组合输入

使用输入法组合文字时保留正在输入的文本，组合完成前外部模型更新不替换这段文本。组合结束后再按原有格式化和受控接受规则处理；旧输入的排队回填不会改写后续编辑或组合的文本与光标。长度限制和修饰符按组合结束后的既有输入/提交时机处理。

## API

### 空值识别与阅读空文案

`empty-values` 用于空值识别，`empty-value` 保留原清空输出；`empty-text` 仅在 `read-pretty` 空内容下展示，默认 `'-'`，字段 > FormItem > Form，自定义 read 插槽优先。显式配置 empty-values 后，内置 required 接入该策略，自定义校验仍收到原值。详见[统一说明](/guide/empty-values/)。

| 参数         | 类型               | 缺省与范围                                            |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | 字段 > FormItem > Form > 组件族默认；完整覆盖，不合并 |
| empty-text   | string             | 字段 > FormItem > Form > '-'；显式 '' 有效            |

以上是字段展示层 API；纯面板不因此新增阅读模式。Form 与 FormItem 提供继承配置。empty-value 的现有类型与默认输出仍按该组件原 API 执行。

### Input Props

| 参数名                    | 描述                                                       | 类型                                                |   默认值    |
| ------------------------- | ---------------------------------------------------------- | --------------------------------------------------- | :---------: |
| model-value **(v-model)** | 绑定值                                                     | `string \| null`                                    |     `-`     |
| `loading` | 加载展示；不隐式禁用输入 | `boolean` | `false` |
| `loading-mode` | 加载布局：默认指示器或底部加载线 | `default / line` | `default` |
| model-modifiers           | `v-model` 修饰符，支持 `trim`                              | `{ trim?: boolean }`                                |    `{}`     |
| default-value             | 非受控初始值，仅创建时读取；后续修改不重置输入，不回写父级 | `string`                                            |    `''`     |
| variant                   | 输入框变体                                                 | `'filled' \| 'outline' \| 'standard'`               | `'outline'` |
| size                      | 输入框大小                                                 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`              |   `'md'`    |
| clearable                 | 是否允许清空输入框                                         | `boolean`                                           |   `false`   |
| empty-value               | 清空输出；省略时清空返回空字符串，不影响手动删除           | `string \| null \| (() => string \| null)`          | `undefined` |
| disabled                  | 是否禁用，可继承 Form                                      | `boolean`                                           |     `-`     |
| readonly                  | 是否只读，可继承 Form                                      | `boolean`                                           |     `-`     |
| error                     | 是否为错误状态，可继承 FormItem                            | `boolean`                                           |     `-`     |
| placeholder               | 提示文字                                                   | `string`                                            |     `-`     |
| hint                      | 提示文字是否浮起                                           | `boolean`                                           | 未设置时继承；独立默认 `true` |
| line                      | 是否绘制边框或底线                                         | `boolean`                                           |   `true`    |
| text-color                | 输入文字颜色                                               | `string`                                            |     `-`     |
| focus-color               | 聚焦提示及支持的边框通道；不控制 caret                     | `string`                                            |     `-`     |
| blur-color                | 未聚焦时提示颜色                                           | `string`                                            |     `-`     |
| aria-label                | 原生输入框的无障碍标签                                     | `string`                                            |     `-`     |
| autofocus                 | 是否自动聚焦                                               | `boolean`                                           |   `false`   |
| enterkeyhint              | 移动端虚拟键盘回车键提示                                   | `string`                                            |     `-`     |
| max-length                | 有限非负长度或 `{ length, errorOnly? }`；0 不限；非法值提示并回退不限 | `number \| { length: number; errorOnly?: boolean }` |     `0`     |
| show-word-limit           | 是否显示字数统计                                           | `boolean`                                           |   `false`   |
| word-length               | 字符长度的计算方法                                         | `(value: string) => number`                         |     `-`     |
| word-slice                | 字符截取方法，同 wordLength 一起使用                       | `(value: string, maxLength: number) => string`      |     `-`     |
| input-attrs               | 内部 input 元素的属性                                      | `object`                                            |     `-`     |
| `type` | 输入类型：text/password/number/tel/email | `InputType`<br>`'number' \| 'text' \| 'email' \| 'tel' \| 'password'` | `text` |
| `edit-mode` | 编辑模式；继承 FormItem/Form | `direct / click / dblclick` | `undefined` |
| `read-pretty` | 纯阅读展示；继承 FormItem/Form | `boolean` | `undefined` |
| `open` | 延迟编辑层的受控打开状态 | `boolean` | `undefined` |
| `default-open` | 非受控编辑层初始打开状态；仅创建时读取 | `boolean` | `false` |
| `before-commit` | 延迟保存审批：(payload, done, context) | `BeforeFieldCommit` | `undefined` |
| `popup-container` | 延迟编辑层挂载目标；false 原地渲染 | `PopupContainer` | `undefined` |

`disabled / readonly / size` 按子项 → InputGroup → FormItem/Form → 库默认值继承；Cedar 的尺寸还支持 ConfigProvider。`clearable` 只对非空且可编辑的输入生效：PC 在悬浮或焦点进入时显示，触控设备与 Maple 常驻显示。原生 `name / id / aria-* / data-*` 会透传给 input；`class / style` 留在外壳，`input-attrs` 不能覆盖受控值、类型、禁用、只读和长度策略。

### Input Events

| 事件名      | 描述                       | 参数                           |
| ----------- | -------------------------- | ------------------------------ |
| input       | 用户输入时触发             | value: `string`<br>ev: `Event` |
| change      | 失焦、回车提交或清空时触发 | value: `string \| null`<br>ev?: `Event` |
| press-enter | 用户按下回车时触发         | ev: `KeyboardEvent`            |
| clear       | 用户点击清除按钮时触发     | ev: `Event`               |
| focus       | 输入框获取焦点时触发       | ev: `FocusEvent`               |
| blur        | 输入框失去焦点时触发       | ev: `FocusEvent`               |
| `update:modelValue` | 模型更新提议，包含显式 null | `value: string \| null` |
| `update:open` | 编辑层打开状态请求 | `open: boolean` |
| `keydown` | 原生键盘通知 | `event: KeyboardEvent` |
| `click` | 原生输入点击通知 | `event: MouseEvent` |

### Input Methods

| 方法名 | 描述             | 参数 | 返回值 |
| ------ | ---------------- | ---- | ------ |
| focus  | 使输入框获取焦点 | -    | -      |
| blur   | 使输入框失去焦点 | -    | -      |
| select | 选中输入内容     | -    | -      |

### Input Slots

| 插槽名     |      描述      | 参数                   |
| ---------- | :------------: | ---------------------- |
| suffix     |    后缀元素    | -                      |
| prefix     |    前缀元素    | -                      |
| clear-icon | 自定义清除按钮 | `clear(event?: Event)` |
| `read` | 自定义阅读内容 | `{ value: string \| null }` |

### InputPassword Props

| 参数名             | 描述                                    | 类型      | 默认值  |
| ------------------ | --------------------------------------- | --------- | :-----: |
| visibility-toggle  | 是否显示密码可见性按钮                  | `boolean` | `true`  |
| default-visibility | 默认是否可见，非受控                    | `boolean` | `false` |
| visibility         | 受控密码可见性，支持 v-model:visibility | `boolean` |   `-`   |

InputPassword 支持所有 Input 属性、事件、插槽与方法。

### InputGroup Props

| 参数名   | 描述         | 类型                            | 默认值                           |
| -------- | ------------ | ------------------------------- | -------------------------------- |
| size     | 组内默认尺寸 | `ComponentSize`<br>`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | 继承 Form/ConfigProvider 或 `md` |
| variant  | 组内默认变体 | `filled \| outline \| standard` | `filled`                         |
| disabled | 组内禁用状态 | `boolean`                       | 继承 Form 或 `false`             |
| readonly | 组内只读状态 | `boolean`                       | 继承 Form 或 `false`             |
| hint     | 组内浮动提示 | `boolean`                       | 库默认值                         |

### InputPassword Events

| 参数名            | 描述                 | 参数              |
| ----------------- | -------------------- | ----------------- |
| visibility-change | visibility改变时触发 | `visible:boolean` |
| `update:visibility` | 受控可见性更新请求 | `visible: boolean` |

## Types

组件导出以下类型定义

```ts
import type { InputProps } from "@cedar-design/ui";
```

公开类型 / Public types: `InputEmits`, `InputSlots`, `InputExpose`, `InputGroupSlots`, `InputPasswordEmits`, `InputPasswordSlots`, `InputPasswordExpose`.

### 表单展示继承

支持 `edit-mode`：`direct / click / dblclick`。未设置时继承 FormItem/Form，独立使用时默认 direct；readPretty 以纯文本阅读，编辑浮层默认确认后更新 v-model。可选 before-commit 在候选校验通过后拦截保存。使用方式与对比 Demo 统一见 Form 文档。

### 输入光标主题

| CSS 变量                | 默认值         | 说明                             |
| ----------------------- | -------------- | -------------------------------- |
| `--c-input-caret-color` | `currentColor` | 输入光标颜色，可独立于文字色覆盖 |

统一光标色通过 `--c-field-caret-color` 设置（默认 `currentColor`）；本组件可用 `--c-input-caret-color` 单独覆盖，默认 `var(--c-field-caret-color)`。

延迟编辑的 `change` 在有来源时保留真实确认事件，例如保存按钮事件；程序触发的编辑器接力没有 DOM 事件，第二个参数可缺省。事件 target 可能是确认控件，不保证是输入元素。`change` 只通知，不等待监听器返回的 Promise；异步审批请使用 `before-commit`。

InputPassword 透传 Input 的全部属性、事件和插槽。`open` 仅控制延迟编辑层；direct 模式没有编辑层。初始 open/default-open 不触发初始化关闭，后续修改 default-open 不会重新打开编辑器。

### 原生等待状态

当内部没有 loading 或提交等待时，Input 保留原生 aria-busy 提示；内部等待优先于外部 false。仅设置 aria-busy 不会创建加载图标或异步任务。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-input-caret-color` | `var(--c-field-caret-color)` | `caret-color` |
| `--c-input-control-font-size` | `inherit` | `font-size` |
| `--c-input-control-height` | `auto` | `height` |
| `--c-input-control-line-height` | `inherit` | `line-height` |
| `--c-input-control-padding-horizontal` | `0` | `padding` |
| `--c-input-counter-color` | `var(--c-field-suffix-text-color)` | `color` |
| `--c-input-counter-font-size` | `12px` | `font-size` |
| `--c-input-feedback-duration` | `1s` | `animation` |
| `--c-input-feedback-error-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-input-feedback-success-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-input-feedback-validating-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-input-feedback-warning-color` | `var(--c-sys-color-content-warning)` | `color` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-input-caret-color: var(--c-field-caret-color);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
