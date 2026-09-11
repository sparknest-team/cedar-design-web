# Validation

- Scheduler 全量回归：33 files / 220 tests passed。追加大量资源 demo 集成测试后，相关 2 files / 5 tests passed（总用例现为 221）。
- vue-tsc 声明源检查通过，修复内部包装组件 slot key 的严格类型报错。
- 共享规范：0 errors / 2 既有 Col、Row 行为测试 warnings。
- 浏览器 localhost:9992：2000 行 demo 初始只渲染附近项；滚动到末端新建格，表单正确带入站点 002 / 人员 008、23:00；取消后前 3 站、仅人员 001 筛选保持原有 100 条任务，恢复全部目录。无浏览器 error。
- cedar-cli 构建通过（既有 visible-days 分块循环 warning）；生成声明 API 契约检查通过；package check：0 errors / 0 warnings。

边界：虚拟化 DOM，不分页组合目录；日程/筛选/分组变化回到顶部；指针源卸载会取消拖动，无自动跨窗口拖动；较高视口需增大 buffer。
