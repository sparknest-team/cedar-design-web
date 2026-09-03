## Context

旧 `MenuButton` 位于 Menu 目录并挂载为 `Menu.Button`，但其结构和交互语义属于独立的分裂按钮。Maple 已提供独立 `SplitButton`，Cedar 需要采用相同概念与公开名称。

## Goals / Non-Goals

**Goals:**

- 将组件提升为独立、可按需安装的 `SplitButton`。
- 两端统一使用 `status / variant / size` 与 `buttonProps / triggerButtonProps`。
- 完全移除旧名称，避免长期双 API。

**Non-Goals:**

- 不改变 Menu 的浮层定位、选择和关闭机制。
- 不新增 SplitButton 专属视觉 token；布局继续由 ButtonGroup、Button 和 Menu 负责。

## Decisions

### 独立组件而非 Menu 静态成员

`SplitButton` 放在 `src/split-button/` 并拥有独立 install、props、类型、测试和文档。Menu 只保留 Option、Group、Submenu 等菜单结构组件。

### 组合现有基础组件

实现继续组合 ButtonGroup、Button 和 Menu，不复制浮层或按钮逻辑。这可保持现有样式和交互，并避免 Popover 样式进入组件。

### 破坏性移除旧名称

不提供 `MenuButton`、`CMenuButton` 或 `Menu.Button` alias。调用方一次性迁移到 `SplitButton`，类型与自动安装入口保持单一。

## Risks / Trade-offs

- 旧模板与导入会直接失败；通过迁移说明明确替换规则。
- Cedar 与 Maple 的底层 Menu 能力仍有少量差异，本次只对齐双方已有的公共 props。

## Migration Plan

1. `<c-menu-button>` 改为 `<c-split-button>`。
2. `MenuButton` / `MenuButtonInstance` 改为 `SplitButton` / `SplitButtonInstance`。
3. `type` 改为 Cedar Button 的 `status`，视觉形态改用 `variant`。
4. 若需单独配置右侧触发按钮，使用 `triggerButtonProps`。
