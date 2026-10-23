> 已被替代：当前公共组件统一为 `Menu`，注册名 `CMenu`，子路径 `@cedarjs/ui/menu`。本目录仅保留历史变更记录；现行命名要求见 [Menu 规范](../unify-menu-name-and-context-point/specs/menu/spec.md)。

# Validation

- DropdownMenu、SplitButton、Breadcrumb、Search 与 TableColumnManager 定向测试通过：14 files / 73 tests。
- Cedar Vue declaration typecheck 通过。
- Cedar library/declaration build 通过；生成 `dropdown-menu` 子路径且无旧 `menu` 子路径。本变更完成后的 public API contract typecheck 曾通过；最终复跑时被并行出现的 Scheduler `getSchedulerVisibleDays` / `hiddenDays` 类型不一致阻塞，与本变更无关。
- Cedar Resolver build/test 通过：20 / 20。
- OpenSpec quality check 通过：0 errors（Row/Col 原有 behavior-test warning 2 条）。
- 发布包检查通过：0 errors / 0 warnings。
- VuePress 文档构建通过：254 pages。构建保留仓库原有 ai-collaboration broken-link warning 与 Scheduler circular-chunk warning。
