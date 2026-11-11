# 验证

- Cedar 受影响范围 197 项测试：完整范围运行后，修正零延时防抖测试使用可控计时器、Tag Transition 包装的查询目标，重跑相关 9 项通过；其余 188 项在范围运行中通过。
- Maple 完整受影响范围 395 项测试通过；随后增加的 ActionSheet 默认开关、Picker 默认主值/开关、FAB 自定义 trigger 保活用例分别通过，FAB 整体 25 项重跑通过。
- 两端 typecheck 通过。
- Maple 全库 lint:check 通过；最终新增/修改测试的范围 lint 通过。
- Cedar 修改范围 ESLint 通过；最终计时器测试改动的范围 lint 通过。
- Carousel 严格同源通过：12 对源文件/样式/测试，26 个 token。
- Image、Switch、Tag 的定向复制组件检查通过；Menu 等共享基础的 68 对运行时文件检查通过。
- 全量 copied-components-check 检查另在本轮未改动的 trigger/positioner.ts 处报告漂移；本轮各组件定向检查通过。没有为绕过门禁修改全量检查规则。
- 发布包 types 依赖重新 build，未声称完成发布产物校验；已同步其 media-batch-types-check 类型断言到新模型名称。
