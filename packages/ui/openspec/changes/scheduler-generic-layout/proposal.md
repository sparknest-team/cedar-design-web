# Scheduler 通用布局与业务边界重构

任务分配 DTO 不应成为基础组件协议。移除 taskId 和核心任务适配器，示例以 metadata 承载关联；保留通用时间、资源、容量、工作日历与事务能力。

新增 layoutGroupId 表示时间网格内连续布局单元。event-layout 扩展为可选几何回调，产品特定比例留在 Demo。既有 stack/columns 默认行为不变。

这是新组件的破坏性 API 调整：taskId → metadata.taskId；任务适配器改为应用自己的实现。分组不隐含业务编辑或保存规则。
