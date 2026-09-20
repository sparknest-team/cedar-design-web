## Contract

公共 Input API：

- Props：`modelValue`、`defaultValue`、`type`、`variant`、`size`、`clearable`、`disabled`、`readonly`、`error`、`placeholder`、`maxLength`、`showWordLimit`、`wordLength`、`wordSlice`、`inputAttrs`。
- Maple 额外保留 `hint`、`line`、`autofocus`、`enterkeyhint`、`autocomplete`、`ariaLabel` 等移动端能力；Cedar 不实现浮动 placeholder。
- Events：`update:modelValue`、`input(value, event)`、`change(value, event)`、`pressEnter(event)`、`keydown(event)`、`clear(event)`、`focus(event)`、`blur(event)`。
- Slots：`prefix`、`suffix`、`clear-icon`。
- Expose：`focus()`、`blur()`。

## Behavior

- `modelValue` 存在时使用受控值；否则使用 `defaultValue` 作为初始值。
- `defaultValue` 后续变化不重置当前值；外部更新 `modelValue` 不产生用户输入事件。
- `change` 只表示用户提交值：blur 或 Enter 触发，按最后一次已提交值去重；Enter 后 blur 不重复触发。
- `clear` 先更新值为空字符串，再触发 `clear(event)`；不额外触发 `input` 或 `change`。
- `maxLength` 默认超出截断；对象形式 `errorOnly: true` 允许超出并进入错误态。
- `showWordLimit` 默认关闭；默认长度使用字符串长度，`wordLength` / `wordSlice` 可覆盖计数和截取。
- FormItem 的错误优先级高于 Input 的视觉错误覆盖；校验由 FormItem 根据 Input 事件触发。
- `inputAttrs` 仅作为原生 input 的补充属性，组件核心属性和事件处理器不可被覆盖。

## Platform Differences

- Maple 的 `hint` 支持浮动与非浮动 placeholder；Cedar 始终使用非浮动 placeholder。
- Maple 可使用 `enterkeyhint`、自动聚焦和移动端输入模式；Cedar 可通过 `inputAttrs` 传递等价原生属性。
- 两端尺寸视觉值允许不同，但公共枚举和语义一致。
