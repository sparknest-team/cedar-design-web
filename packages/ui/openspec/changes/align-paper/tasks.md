# Tasks

- [x] 独立实现、导出和样式入口
- [x] Paper 双端组件测试、类型与样式验证
- [x] 双端文档、Demo、调研和菜单状态
- [x] 整库构建：后续修复 Grid/Row/Col canonical re-export 后，Cedar build:lib 与 Maple compile 均通过

验证：Cedar Paper 5 项、Maple Paper 12 项测试通过；修改后首次两端 vue-tsc 通过；Less 和双端 Demo 编译通过；源码一致性检查与导出审计通过。Maple 实际菜单产物已更新为 Paper [已同源]。后续整库构建在生成入口后因 _RowComponent/_ColComponent 重复导出失败，不能宣称整库可发布。未进行真实浏览器视觉验收。

后续验证更新：本次已修复 Grid 索引重复声明，重新生成入口并完成双端整库构建。上述历史构建阻碍已解除，新增 grid-exports-check.mjs 静态符号检查及双端运行时导出契约测试。
