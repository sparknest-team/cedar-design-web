## Why

Cedar 与 Maple 的 Search 虽然都已支持字段搜索与受控历史，但实时输入、失焦提交、清空、加载态、默认外观和按钮命名仍不一致。Input 对齐后，Maple Search 还继续按旧的 `clear(value)` 契约处理事件，已经导致值被错误写成 Event。两端需要以新的 Input 契约为基础建立统一的搜索提交语义。

## What Changes

- **BREAKING**：Maple 移除 `searchText`、`searchField` 以及 `SearchResult.searchText/searchField` 兼容别名。
- **BREAKING**：Maple 的 `clearable` 默认值由 `true` 改为 `false`，与 Cedar 和 Input 基线一致。
- 两端统一受控/非受控搜索文本、搜索字段、字段对象和受控历史的数据契约。
- `input` 表示实时编辑，`change` 仅沿用 Input 的失焦或 Enter 提交；清空只触发 `clear(event)`。
- 搜索图标、搜索按钮、Enter 和历史项只触发一次 `search(result, event)`；搜索提交不主动失焦。
- Maple 补齐 `searchButton`、`buttonText`、`buttonProps`、`loading` 公共属性，并保留移动端取消操作和全屏历史能力。
- Cedar 的 Transfer 实时筛选消费者从 `change` 迁移到 `input`。
- 首版两端 TypeScript 功能逻辑尽量保持相同职责、命名和事件顺序，但不抽取共享包。

## Impact

- Cedar：`packages/cedar-ui/src/search/**` 与 `src/transfer/transfer-view.vue`。
- Maple：`packages/maple-ui/src/search/**`。
- 两端 Search 文档、demo、测试、类型导出和 changeset。
