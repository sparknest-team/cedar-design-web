## Decisions

1. `modelValue` 与 `defaultValue` 的公共值类型为 `number | undefined`；空值和 `-`、`.`、`1.` 等编辑中间态只保留在内部字符串状态，不向上层伪装成完整数字。
2. `modelEvent="change"` 在 blur、Enter 或步进操作时提交；`modelEvent="input"` 允许完整数字在输入过程中更新 v-model，但 `change` 仍只在提交时触发，且按最后一次提交值去重。
3. 清空只触发 `update:modelValue(undefined)` 与 `clear(event)`，不额外触发 `input` 或 `change`。
4. `embed`、`button`、`input` 三种模式继续保留；`prepend/append` 为输入框外部附加内容，`prefix/suffix` 为输入框内部内容，`plus/minus` 替换步进图标，`clear-icon` 透传到底层 Input。
5. 原生输入使用 `role="spinbutton"`；有限范围写入 `aria-valuemin/max`，有效数字写入 `aria-valuenow`，增减按钮提供可访问名称。
6. Cedar 作为公共 API 基线，Maple 适配移动端视觉与旧 `Counter` 兼容能力；不把 `Counter` 的移动端专属 prop 强行加入公共 InputNumber。
