# Scheduler 容量规范

- SchedulerResource.capacity 为非负安全整数，省略无限制，零不可排期；非法容量抛 invalid-event。
- 每条已排期事件对每个关联资源占 1，全天计入、未排期不计入，资源 ID 去重。
- 使用半开时间区间的扫描线计算同时占用，先处理结束再处理开始，不以整个候选相交事件总数代替并发峰值。
- getSchedulerResourceLoad 返回有占用时段和参与 ID，可裁剪范围，返回脱离输入的数据。
- getSchedulerCapacityIssues 以候选替换同 ID 数据，仅诊断其时间和关联资源。
- 超额阻止保存并提供 capacity 错误与 capacityIssues；检查最终批量状态，删除释放容量，撤销重做使用现行规则。
- 异步保存期间相关资源容量变化，结果 stale；allowOverlap=false 仍独立更严格。
- 未知资源、未加载事件无法推断完整容量，服务端负责最终一致校验。
- Demo 展示容量调整、第三单拦截、负载明细、超额提示和重置。
