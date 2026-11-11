# Tasks

- [x] 独立复制约束类型和候选算法
- [x] 迁移 Maple 时间 API 与 Date 内部调用
- [x] 接入滚轮级联及确认校验
- [x] 更新类型、demo、文档、审计、changeset
- [x] 测试、类型及同源检查

验证：Cedar 23 项、Maple 日期/时间 91 项测试通过；两端 typecheck、修改范围 lint、四组同源检查及 821 个 Demo SFC 检查通过。Maple 全库 lint 长时间无输出后中止，未算通过；未运行浏览器视觉验收或全量 npm/文档构建。整组件格式/值类型/步长和主体收口仍为下一阶段。
