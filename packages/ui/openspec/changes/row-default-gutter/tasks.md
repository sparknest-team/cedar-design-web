# Tasks

- [x] 同步 Cedar/Maple 默认值、文档与 API 示例配置
- [x] 基础与换行示例使用默认 gutter，独立示例行增加间隔
- [x] 验证默认双轴、显式覆盖、嵌套与 div 模式

验证：Cedar 相关筛选测试 52 项通过；Maple Row/Col 精确筛选测试 14 项通过；Cedar spec:check 为 0 errors / 0 warnings。

静态检查：Cedar 全库 lint 与 typecheck 通过。Maple 全库 lint 仅报告本次新增内容的 5 处格式问题，已通过定向 ESLint --fix 修正，Row 目录 lint 复查通过；全库 typecheck 仍被 Breadcrumb/Image/ProgressGroup/Signature/Tabs 的无关测试类型错误阻断。未执行浏览器视觉验收。
