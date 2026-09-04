## Why

Cedar 与 Maple 的 Dialog 在 Props、事件名、函数式方法、关闭 action 和 Demo 组织上存在分歧，需要按共享契约一次性统一。两库尚未稳定发布，不保留 deprecated alias。

## What Changes

- **BREAKING**：统一事件为 `click-mask`，Maple 删除 `click-overlay`。
- **BREAKING**：Maple 删除可调用的 `Dialog(...)` 以及四个按钮颜色快捷 Props。
- 两端统一 Props、Slots、实例方法和函数式方法。
- Cedar 实现现有占位的 `close/setDefaultOptions/resetDefaultOptions`；Maple 补齐桌面端已有能力。
- 重做两端 Demo、文档、类型、契约测试和无障碍行为。

## Impact

- Cedar：`src/dialog/**`。
- Maple：`packages/maple-ui/src/dialog/**`，以及相关 resolver/web-types 生成结果。
- 共享规范：`design-ui/standards/dialog.md`。
