# 周视图错位叠放

用户要求重叠任务保持宽度，错位叠放，点击前置且失焦恢复。新增 eventLayout: stack/columns；默认周视图 stack，其他时间网格 columns。stack 使用固定总错位量，卡片宽度不随并发数量均分。布局仍基于现有冲突分组和稳定列索引。

仅对重叠组：单击前置、双击详情、Tab 聚焦前置、Enter 详情；离开焦点恢复。多选模式保持单击选择。只读可查看前置但不可提交；disabled 不开放详情。CSS :focus-within 驱动临时层级，不改变事件数组或持久化数据。

全天、月视图与资源时间线不受此配置影响。CSS token 控制错位量。提供重叠、非重叠、只读、多选和两种布局切换 demo 与回归。

## 周视图百分比叠放

按用户更新要求，stack 布局采用 left = column / columns × 100%，width = 100% - left；每张卡片右边缘对齐日期列末端。columns 并排布局及焦点前置机制保持现有行为。Demo 同步说明三张重叠卡片的百分比位置，移除不再使用的 stack-offset token。

## 静态日程与类型主题

当 Scheduler、单个日程或交互配置使日程不可移动时，卡片隐藏左侧强调边框，避免传达可编辑或可拖拽的错误暗示。判定覆盖 `movable: false`、Scheduler `disabled` 和日程 `readonly`。

`SchedulerEvent` 与 `SchedulerEventTemplate` 增加 `backgroundColor` 和 `backgroundPattern`。`backgroundPattern` 支持 `solid`、`diagonal-stripes`、`dots`、`crosshatch`；已有 `color` 同时作为强调色和图案色。新建、复制以及拖拽镜像保留这些视觉字段，不把具体业务类型固化到组件内部。

自定义日程 Demo 通过 `editor` 插槽展示业务侧配置方式：工作、会议、休息和不可用时段映射到各自的标题建议、颜色、图案及默认只读状态。新增弹窗允许选择类型、预览样式并覆盖创建后的编辑和拖拽权限，业务类型本身不进入 Scheduler 核心枚举。

## 高密度重叠收敛

新增可选 `overlapEventLimit`，用于日、周和资源日程的时间网格。相连重叠组超过上限时保留前若干布局列，并以“还有 N 项”代替隐藏列；Popover 展示组内全部日程，选择后继续触发原详情流程。省略配置时完整展示，收敛不修改 Event、碰撞结果或提交规则。

`SchedulerEvent.metadata` 是应用自有浅层键值数据。Scheduler 不解释类型或后端字段，只在草稿、移动、复制和模板新建中保留一层独立对象。自定义类型 Demo 用 Mock API 演示初始加载、异步提交、拒绝保存以及 metadata 请求体。
