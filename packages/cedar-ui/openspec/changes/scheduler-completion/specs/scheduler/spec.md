# Scheduler 增量规范

## 交互与视图

虚拟列表更新时优先保留可见资源行键与行内偏移；锚点被过滤或折叠时回退到相邻有效行，保持横向位置。时间线指针手势由父组件持有，源卡片被回收不结束拖动。边缘逐帧滚动后重新计算预览；Escape、失焦、pointercancel、禁用及卸载清理手势。

slotDuration、snapDuration、defaultDuration 分别决定网格、吸附和单击默认时长，省略时兼容 step。dragToCreate 支持同列正反向拖选并打开创建草稿。monthEventLimit 折叠每日超量日程，以内部 Popover 和 Button 查看详情。月视图、依赖图和指针流程独立封装。

时间线通过 zoom/defaultZoom/update:zoom 控制 0.5–4 倍缩放，保持视口中心；showDateHeader 控制日期分层表头。资源列保留固定定位。

## 资源与约束

resourceIds 是唯一资源身份来源。resourceDetails 按资源 ID 增补非负 units 和 role；省略占用量为 1。移动资源关联保留占用信息。createSchedulerTaskEvents 将业务任务的独立分配转换为共享 taskId 的独立时间块，复制隔离输入。

showAssignmentDetails 启用内部编辑控件；showResourceLoad 展示峰值、容量和整个可见时间范围的利用率，利用率并非仅工作时段统计。rulePolicy 仅允许 capacity、unavailable、conflict 配置 allow/warn/block，默认阻止；提醒通过 rule-warning 和内置 Alert 输出。非法配置、只读、过期及依赖错误不得降级。

依赖支持四类起止关系和分钟 lag，校验缺失端点、重复身份、环和顺序。只连接已渲染的可见时间线端点，不自动重排后继。业务需加载相关端点；删除端点前先更新依赖关系。milestone 仅支持定时 start=end，不占用容量，不显示拉伸手柄。

## 独立适配器

scheduler/core 不依赖 Vue、DOM 或第三方日历库。scheduler/adapters 提供 RRULE、IANA 时区、ICS、打印和版本同步；高级时间规则依赖 rrule 与 Temporal polyfill。RRULE 使用定时种子、单规则字符串、稳定实例身份和显式计算预算，DST 歧义默认拒绝，可指定解决策略。

组件网格仍使用运行环境本地时区。适配器支持跨时区计算及格式化，不承诺完整多时区网格编辑。

ICS 支持 UTC/IANA TZID/明确默认时区的浮动时间、普通全天与定时事件、定时 RRULE 种子、里程碑、文本转义和 UTF-8 折行。不支持的全天 RRULE、自定义 VTIMEZONE、例外及 DURATION 明确拒绝；资源与依赖映射由业务提供。打印返回已转义的独立 HTML。

模拟 provider 提供 load/commit/subscribe，按 expectedRevision 原子拒绝过期提交，快照深复制，订阅可注销。真实日历授权、网络连接、持久化及多人合并策略由业务实现。组件异步事务用内部数据版本校验变化；历史仍保留内容快照语义。

## 验收

新增拖选/月历、独立分配、加权负载、依赖/里程碑、跨时区规则、ICS/模拟协同六个 demo，并更新虚拟资源 demo。验证纯核心、组件交互、demo 挂载、公开声明、构建产物及浏览器运行。
