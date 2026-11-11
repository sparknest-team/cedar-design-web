验证：

- Cedar Tabs 45 项相关测试通过（完整组件范围后，修正新增用例的 Test Utils 实例比较方式并重跑共享 35 项）。
- Maple Tabs 与 FAB 69 项相关测试通过（同上，FAB 24 项及其他 Tabs 测试通过，共享 35 项重跑通过）。
- 两端 typecheck 通过。
- Maple 全库 lint:check 通过。
- Tabs 同源检查通过：13 对文件、40 项 token 消费。
- Cedar Tabs 范围 ESLint 通过（直接运行 node node_modules/eslint/bin/eslint.js；pnpm 包装调用退出无诊断）。
