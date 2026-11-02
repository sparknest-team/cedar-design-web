# 统一空值识别与纯阅读占位

本变更接入 emptyValues 与 readPretty.emptyText，保留 emptyValue 的清空输出职责。先审计组件族的识别、清空、手动删空与校验，再补输入/展示适配。

边界：不修改 modelValue/open 的受控判定、代理工具、默认清空返回值、草稿提交时机或 Form reset 语义。新增可选字段策略；未配置 emptyValues 时保留领域默认识别。emptyText 默认 '-'，字段 > FormItem > Form；read 插槽优先，不写入模型。

实现与范围以 [设计](./design.md)、[逐组件清单](./component-matrix.md)、[任务](./tasks.md) 和 [规范增量](./specs/empty-policy/spec.md) 为准。

实际验证见[验证记录](./verification.md)。
