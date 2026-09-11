# Scheduler 多维资源规范

- 资源 dimensionId 归属维度；resourceDimensions 定义 id/label，资源 ID 跨维度唯一。
- resourceFilters/defaultResourceFilters/update:resourceFilters：同维度 OR、跨维度 AND，空组无限制，筛选不修改源事件。
- resourceDimension/defaultResourceDimension/update:resourceDimension：资源视图只决定行/列维度，空字符串为所有资源。
- 无维度配置时旧单组选择兼容；编辑器按维度替换，保留其他维度与未知 ID。
- 请求支持可选 dimensionId，分页结果限定维度，查询错误上下文附带维度；仍以全局 ID 回显。
- 未解析资源不满足维度筛选，解析后响应式更新。
- 全量当前事件继续参与事务、工作时间与容量校验，所有资源共同约束。
- 同维度资源拖动只更换该资源，跨维度拖动拒绝；修改筛选和展示维度清理拖动预览。
- 纯核心提供 filterSchedulerEventsByResources 与 setSchedulerResourceDimension。
- Demo 展示站/人多选、快捷组合、切换行维度及独立编辑。
