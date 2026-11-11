## Why

Cedar 与 Maple 的 InputNumber 已经具备相同的基础能力，但在中间输入态、提交事件、清空行为和插槽透传上仍存在实现差异。InputNumber 还是 Input 的直接消费者，需要建立一份稳定的数字输入契约，避免业务在桌面端和移动端之间切换时出现重复 change 或值类型漂移。

## What Changes

- 统一 `number | undefined` 值模型，并保留内部字符串输入态。
- 统一 `modelEvent="change" | "input"` 的更新语义，`change` 只表示提交完成。
- 统一清空行为：更新为空值并触发 `clear`，不额外触发 `input/change`。
- 保留并统一 `embed`、`button`、`input` 三种模式。
- 统一 `prefix`、`suffix`、`prepend`、`append`、`plus`、`minus`、`clear-icon` 插槽。
- 补齐两端 spinbutton 无障碍属性与增减按钮标签。

## Impact

- Cedar：`packages/ui/src/input-number/**`。
- Maple：`packages/ui/src/input-number/**`。
- 两端 InputNumber 文档、demo、测试和类型导出。
- Maple 原 `Counter` 保持兼容，不在本次移除或重命名。
