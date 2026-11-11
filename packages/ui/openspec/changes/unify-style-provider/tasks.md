# Tasks

- [x] 组件、Props、函数调用、安装和默认值设置两端独立复制
- [x] 补齐 null 类型、StyleProviderDefaults 根导出和 SSR 防护
- [x] 同步局部嵌套示例、双语 API 文档、菜单及调研状态
- [x] 添加安装、默认值、替换、主题、隔离及 SSR 配对测试
- [x] 将主体、Props、入口、测试和 demo 纳入同源检查

## 验证（2026-09-10）

- Cedar 7 项、Maple 13 项 StyleProvider 测试通过。
- 两端定向 vue-tsc 通过：在 UI 包执行 pnpm exec vue-tsc --noEmit -p tsconfig.style-provider-check.json。
- Maple 修改目录及根导出的 ESLint 检查通过；194 个 demo SFC 语法检查通过。
- node design-ui/bin/copied-components-check.mjs style-provider：5 组文件通过。
- 全库同源检查仍被 SplitButton 既有源文件差异阻断；本次未更改它。
- 全库类型检查未通过：Maple Card/Form/InputNumber 示例错误；Cedar rootDir 歧义，显式指定后仍有其他示例及构建配置错误。
- Maple 全库 lint:check 已运行但长时间未结束，主动取消；不计为通过。
- 本次未重新运行完整 npm/doc 构建或浏览器视觉验收。
