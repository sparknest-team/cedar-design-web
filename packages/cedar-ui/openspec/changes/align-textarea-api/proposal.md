## Why

Cedar 与 Maple 的 Textarea 在值模型、提交事件、清空行为、长度限制、高度控制、插槽和原生属性透传上存在差异。两端需要建立统一的多行文本输入契约，同时保留桌面端手动调整高度与移动端浮动 placeholder 等平台体验。

## What Changes

- **BREAKING**：两端 `variant` 默认值统一为 `outlined`。
- 两端统一支持受控 `modelValue`、非受控 `defaultValue` 和 `v-model.trim`。
- `input` 表示 IME 完成后的实时编辑；`change` 仅在失焦时按提交值去重触发；Textarea 不提供 Enter 提交事件。
- 清空只更新为空字符串并触发 `clear(event)`，不额外触发 `input/change`。
- 统一对象型 `maxLength`、`showWordLimit`、`wordLength`、`wordSlice` 和 `errorOnly` 语义。
- 统一 `rows`、`autoSize` 和 `resize` 高度模型；Cedar 默认允许纵向 resize，Maple 默认关闭。
- 统一 `prefix`、`suffix`、`clear-icon` 插槽、关键原生属性、键盘事件和 ARIA 错误状态。
- 首版两端 TypeScript 功能逻辑尽量保持相同职责、命名和事件顺序，但不抽取共享包。

## Impact

- Cedar：`packages/cedar-ui/src/textarea/**`，以及 Mention、Map 直接消费者回归验证。
- Maple：`packages/maple-ui/src/textarea/**`。
- 两端 Textarea 文档、demo、测试、类型导出和 changeset。
