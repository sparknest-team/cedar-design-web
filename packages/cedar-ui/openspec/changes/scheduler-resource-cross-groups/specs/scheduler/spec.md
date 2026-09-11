# Scheduler 交叉分组增量规范

- resourceGroupDimensions: string[]，默认 []，仅资源时间线有效。至少两个不同且已声明的维度启用；无效配置回退。交叉模式优先于单维度轴及 resourceGroupBy。
- 组合筛选在笛卡尔积前执行；最后维度为叶行，前序路径组成折叠组。包含空任务行，不自动截断，不包含维度不完整的事件。
- SchedulerResourceRow 导出 key/groupKey/groupLabel/resources/resourceIds。纯函数 createSchedulerResourceRows 与 moveSchedulerResourceRow 从 scheduler/core 导出。键由 JSON.stringify 真实 ID 数组生成，不可保存为资源关联。
- 创建组合单元格预填全部资源。SchedulerCell 新增 resourceIds?；交叉单元格 resourceId 为 undefined。
- 拖动只替换来源路径资源，保留其他关联；共享事件所有投影同步。时长调整不改关联。沿用事务、容量和可用时间校验及历史。
- resource-header 增加 resources? 路径；resource 保持真实末级资源。expandedKeys 使用父路径编码键。
- 既有单维度日程与资源时间线不改变。全局资源 ID 唯一。目录规模由调用方通过筛选控制。

## 验收场景

1. 北站任务含两人，在两个对应行中展示；主值仍一条。
2. 北站小林拖到南站小林，替换站并保留小陈；撤销恢复。
3. 南站小陈空白单元格新建同时带入南站与小陈；不泄漏显示键。
4. 禁用父站阻止新建；人员其他站的占用仍阻止容量超限。
5. 切换维度顺序与筛选更新组合行；组名变化不改变稳定键。
