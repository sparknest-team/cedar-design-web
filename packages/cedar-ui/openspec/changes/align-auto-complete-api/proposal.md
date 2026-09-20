## Why

Cedar 与 Maple 的 AutoComplete 分别继承 Arco 与 Varlet 的历史实现，当前在候选项类型、客户端过滤、实时搜索、提交型 change、清空、选中、焦点与键盘行为上不一致。Input 与 Search 已完成公共契约对齐，AutoComplete 需要复用这些基础语义，并把候选建议明确建模为允许自由输入的 editable combobox。

Maple 现有 24 项定向测试中有 19 项因前序 Input 对齐暴露出旧契约债务；Cedar 则只有 1 项基础快照，无法保护公开行为。两端需要在不抽取共享包的前提下建立首版一致的 TypeScript 职责与行为测试。

## What Changes

- 两端统一字符串 `modelValue/defaultValue`，候选项原始数值选择后归一化为字符串。
- 两端统一 `options`、`fieldNames`、`filterOption`、`strict`；AutoComplete 允许自由输入，不内建候选项必选模式。
- 输入事件统一为 `update:modelValue` → `input` → `search`，`change` 仅表示失焦、独立 Enter 或候选选择提交。
- 候选选择统一为值更新 → `select(value, option, event)` → `change` → 关闭下拉，不主动失焦。
- 清空统一为值更新 → `clear(event)`，不伪造 `input/search/change/select`。
- 默认聚焦且存在有效候选项时展开；上下键移动活动项，Enter 接受，Escape 关闭，Tab 保持浏览器默认行为。
- 两端补齐公共插槽、入口类型与 editable combobox 无障碍语义。
- Cedar 保留 Trigger、选项组、虚拟列表和滚动事件；Maple 保留移动 Menu、`getShow`、FieldDecorator 与颜色能力。
- 首版两端 TypeScript 功能逻辑尽量保持相同职责、命名和事件顺序，但不抽取共享包，后续允许合理漂移。

## Impact

- Cedar：`packages/cedar-ui/src/auto-complete/**`，必要时仅调整 AutoComplete 使用的 Select 内部接线。
- Maple：`packages/maple-ui/src/auto-complete/**`，以及 Form AutoComplete 定向消费者验证。
- 两端文档、demo、测试、类型导出、web-types（Maple）和 changeset。
