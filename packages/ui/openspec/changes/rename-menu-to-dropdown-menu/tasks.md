> 已被替代：当前公共组件统一为 `Menu`，注册名 `CMenu`，子路径 `@cedarjs/ui/menu`。本目录仅保留历史变更记录；现行命名要求见 [Menu 规范](../unify-menu-name-and-context-point/specs/menu/spec.md)。

- [x] 新增 DropdownMenu 公开入口并移除 Menu 根入口。
- [x] 删除 multiple、复选框展示和树形选择联动。
- [x] 迁移 Cedar 内部消费方、类型契约和测试。
- [x] 重写文档定位、首屏案例和侧边栏入口。
- [x] 运行组件测试、类型检查和构建验证。
- [x] 将分组、分隔线和子菜单重构为 options 数据结构，移除 MenuGroup/MenuSubmenu。
- [x] 将 CSS、token 和 DOM 标记从 menu 全量迁移为 dropdown-menu。
