# 验证记录

- `pnpm run typecheck`：通过。
- Scheduler 全量回归：47 个文件，275 项通过，1 项既有 Empty 快照不一致（`c-empty-image` → `c-empty__image` 等），未覆盖或更新其他组件重构的快照。该次运行已包含 5 项新布局测试。
- 补充 metadata 不影响布局的契约测试后，`layout-groups.test.tsx`：6/6 通过，包含 Demo 控件切换、连续/间隔/重叠分组、裁剪、独立复制、非法几何回退和组焦点恢复。
- `git diff --check`：通过。
- `pnpm build:doc`：退出码 0，文档构建通过；保留既有文档坏链、rrule 默认导出和工作日历跨 chunk 循环依赖警告。

## 边界

任务模型转换只在 `__demos__/task-assignments.ts` 中；生产代码无 taskId 读取。布局核心仅依赖类型，不依赖 Vue、出勤单或任务 DTO。分组是展示关系，不代表保存事务或业务锁定关系。

工作台“一任务一块”、业务组外框和跨归属联动仍属于后续 Demo 工作。本轮未声称完成整份 PRD。
