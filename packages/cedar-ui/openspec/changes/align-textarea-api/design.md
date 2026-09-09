## Contract

公共 Textarea API：

- Props：`modelValue`、`defaultValue`、`modelModifiers`、`variant`、`size`、`clearable`、`disabled`、`readonly`、`error`、`placeholder`、`rows`、`resize`、`autoSize`、`maxLength`、`showWordLimit`、`wordLength`、`wordSlice`、`ariaLabel`、`autofocus`、`enterkeyhint`、`textareaAttrs`。
- Maple 额外保留 `hint`、`line`、`textColor`、`focusColor`、`blurColor` 和浮动 placeholder；Cedar 不补浮动 placeholder。
- Events：`update:modelValue`、`input(value, event)`、`change(value, event)`、`keydown(event)`、`clear(event)`、`focus(event)`、`blur(event)`。
- Slots：`prefix`、`suffix`、`clear-icon`。
- Expose：`focus()`、`blur()`；Cedar 继续暴露现有 `textareaRef` 供内部 Mention 使用。

## Behavior

- `modelValue` 存在时使用受控值；否则以 `defaultValue` 初始化内部值，后续 `defaultValue` 变化不重置。
- IME composition 期间不触发输入更新；完成后按 `update:modelValue` → `input` 顺序触发。
- Enter 保持原生换行语义，仅触发 `keydown`；`change` 只在失焦时触发，并按最近一次提交值去重。顺序为 `change` → `blur`。
- `v-model.trim` 在失焦提交时规范化值；必要时先发出 `update:modelValue`，再判断并触发 `change`。
- `clear` 先更新值为空字符串，再触发 `clear(event)`，不额外触发 `input` 或 `change`，清空后保持焦点。
- 数字型 `maxLength` 与 `errorOnly=false` 在用户编辑时截断；`errorOnly=true` 保留超长内容并合并到错误态。外部受控超长值不反向改写。
- `showWordLimit` 默认关闭；默认以 JavaScript 字符串长度和切片计数，业务可用 `wordLength`/`wordSlice` 覆盖。
- `rows` 不设置组件默认值；`autoSize` 优先于 `rows` 与 `resize`，并在用户输入、程序赋值和容器尺寸变化后重新测量。
- `textareaAttrs` 仅补充原生属性；组件控制的值、禁用、只读、行数、核心事件和错误态优先。

## Platform Differences

- Cedar `resize` 默认 `true`，适合鼠标纵向拖动；Maple 默认 `false`，避免移动端误触与布局抖动。
- Maple 保留浮动 placeholder、移动端最小高度、触摸与软键盘相关能力；Cedar 保持非浮动 placeholder。
- 两端尺寸和视觉 token 可以不同，但值、长度、事件、错误与自动高度契约一致。
- 首版只复制对齐各自仓库内的 TypeScript 功能逻辑，后续允许合理漂移，不建立共享包。
