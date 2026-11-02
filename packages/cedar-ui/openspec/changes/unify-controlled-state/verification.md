# 文档与调研验证

日期：2026-10-29。范围：两端中英文受控指南、官方说明调研、设计与规范增量修订。未修改组件运行时。

## 已通过

- 四份指南各 10 段完整 Vue 示例，共 40 段：Vue SFC parse、script 编译及模板语法编译通过。该检查不是完整 vue-tsc 类型验证或实际组件交互验收。
- 两份 Maple 指南通过实际 Markdown 插件生成 SFC，并通过模板编译。
- 读取并转译两端当前 empty-value 工具源码，18 项行为核对通过：省略、显式 undefined、undefined 工厂、null、0、false、非空字符串、数组外层复制及组件 fallback。
- Maple 现有 `src/input/__tests__/empty-value.spec.ts`：41 项通过，包含显式 null、自定义输出、undefined 工厂、禁用选项保留和 Input 重输入/键盘删空。
- Cedar 现有 localized-routing / localized-pages：4 项通过，命令 exit 0；结束时另有测试进程 close timed out after 1000ms 提示，不隐去该输出。
- 设计文档相对链接、代码围栏、改动范围 diff whitespace 检查通过。指南与本轮设计 Markdown 已使用各自仓库的 Prettier 格式化。

## 未通过及边界

Maple 全库 `pnpm lint:check` 已运行，8 项格式错误使命令 exit 1，位于本轮没有修改的以下文件：

- `packages/maple-ui/docs/practices-examples/card/basic.vue`：2 项。
- `packages/maple-ui/docs/practices-examples/detail/basic.vue`：1 项。
- `packages/maple-ui/docs/practices-examples/form/basic.vue`：2 项。
- `packages/maple-ui/docs/practices-examples/list/basic.vue`：2 项。
- `packages/maple-ui/src/date/__tests__/mobile-summary-family.spec.js`：1 项。

未为通过 lint 自动修改这些文件；eslint 阶段失败，后续 api-naming 命令没有执行。本轮没有声称全库 lint 通过。

未构建或发布整站，也未声称所有代码示例已逐个通过真实浏览器操作。现有空值回归不覆盖整个目标状态统一设计；实现任务仍未开始。

## 后续 empty-value 专项核对

新增 empty-value-audit.md，先评审空值输入/输出及组件族消费者，暂缓实施上版所有权方案。本次不修改运行时或继续改写用户指南。

实际源码逻辑探针 42 项通过，覆盖 Element Plus 通用 hook 的识别/配置优先级/诊断/computed 工厂缓存与两端现有 resolver。使用真实 Vue computed/reactivity、lodash equality，注入与 utils 导出为测试适配；不是完整 ConfigProvider 或组件浏览器验证。该结果与上文既有组件回归记录分开。
