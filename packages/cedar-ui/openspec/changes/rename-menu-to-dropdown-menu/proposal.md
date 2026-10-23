> 已被替代：当前公共组件统一为 `Menu`，注册名 `CMenu`，子路径 `@cedarjs/ui/menu`。本目录仅保留历史变更记录；现行命名要求见 [Menu 规范](../unify-menu-name-and-context-point/specs/menu/spec.md)。

# 将 Menu 收口为 DropdownMenu 命令菜单

Cedar 的 `Menu` 同时暴露命令菜单和多选树状态，容易与 Select、Cascader 的数据选择职责混淆。将根组件破坏性重命名为 `DropdownMenu`，明确它用于从临时浮层激活命令；仅保留 MenuOption 供 SplitButton 与手写内容复用。

- 根组件、Props、实例类型、包子路径和文档改为 DropdownMenu，不保留旧 Menu alias。
- `select` 继续按既有顺序在 `update:modelValue` 之后触发，但文档语义改为“激活菜单项”。
- 保留单选 `modelValue`、options 树、fieldNames 和子菜单；删除 `multiple`、复选框表现和父子选择联动。
- 删除 MenuGroup 与 MenuSubmenu，使用支持 item/group/divider 的 options 递归描述结构；label/icon/extra 支持 VNode、渲染函数和根级作用域插槽。
- 文档优先展示更多操作和右键菜单；SplitButton 仅链接到其独立组件文档，不重复维护组合案例。
- 现有 Search、Breadcrumb、TableColumnManager 和 SplitButton 调用方迁移到 DropdownMenu。

CSS 类名、变量和内部 DOM 标记同步破坏性迁移到 `c-dropdown-menu-*`、`--c-dropdown-menu-*` 与 `data-dropdown-menu-*`。
