## Why

`MenuButton` 实际表达的是“主操作 + 菜单触发按钮”的分裂按钮模式。将其命名为 `SplitButton` 可准确描述组件语义，并与 Maple Design Mobile 保持一致。

## What Changes

- **BREAKING**：移除 `MenuButton`、`Menu.Button`、`CMenuButton` 与 `MenuButtonInstance`。
- 新增独立组件 `SplitButton`、`CSplitButton`、`SplitButtonProps`、`SplitButtonInstance` 与 `splitButtonProps`。
- **BREAKING**：旧 `type` 改为 Cedar Button 当前使用的 `status + variant`。
- 新增 `triggerButtonProps` 与 `autoLoading`，对齐 Maple SplitButton。

## Capabilities

### New Capabilities

- `split-button`: 提供主操作按钮和菜单触发按钮组成的复合操作入口。

## Impact

- 受影响源码：`src/menu`、`src/split-button`、根导出、全量安装与全局组件类型。
- 调用方需将 `<c-menu-button>` 改为 `<c-split-button>`，并将 `type` 迁移为 `status` / `variant`。
