---
permalink: /components/scheduler/
---

# Scheduler 日程调度

原生 Vue 日程调度组件。资源是可选关联，可表示人员、设备、会议室，也可完全不使用。内置 Cedar 编辑器与资源筛选，日期计算、重叠布局、分配和校验独立于 Vue。现有 Calendar 继续负责轻量日期展示与选择。

| 目标 | 从这里开始 |
| --- | --- |
| 只展示或编辑日期与时间 | 基础用法，不关联资源的计划 |
| 给人员或设备排期 | 资源视图与分配 |
| 加载后端日程、保存修改 | 按范围远程加载，保存与自定义 |
| 设置休假、重复与可用时间 | 日历体验与可用时间，重复日程与日历数据 |
| 大规模排期、事务和完整业务 | 大规模资源、批量操作、最后的业务组合示例 |

## 基础示例

### 基础用法

先从一个日程开始：切换日/周/月视图，点击空白时间创建日程，点击已有日程编辑。只需 v-model 和初始日期，不需要准备资源、远程接口或保存钩子。

<demo src="./__demos__/basic.vue"></demo>

## 视图与布局

### 布局分组与自定义宽度

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `default-date` | 初始定位日期 | 布局分组与自定义宽度、不关联资源的计划、资源周计划 |
| `default-mode` | 非受控默认视图 | 布局分组与自定义宽度、资源时间线、隐藏周末与指定星期 |
| `resources` | 当前可见资源行/列及本地选项，不要求全量目录 | 资源周计划、资源时间线、现在时间线 |
| `start-hour` | 时间网格起始小时，0–23 | 布局分组与自定义宽度、现在时间线、重叠日程错位叠放 |
| `end-hour` | 时间网格结束小时，必须大于起始，最多 24 | 布局分组与自定义宽度、现在时间线、重叠日程错位叠放 |
| `modes` | 允许切换的视图 | 不关联资源的计划、隐藏周末与指定星期、现在时间线 |
<!-- demo-config-notes:end -->

固定时长日程可设置 `resizable: false`，隐藏拉伸手柄但保留移动；它不限制应用通过表单或接口重新设置时间，最终时长仍由业务保存规则校验。

`layoutGroupId` 只用于日、周、资源日程时间网格的横向布局：同一日期和资源列内，同组时间相接或重叠的块共享列、宽度和聚焦层级；有空隙时分为独立布局单元。每个块保留自己的起止时间，分组不触发联动编辑、批量拖拽或保存。完全重合的同组块会互相遮挡，业务可拆分组或使用自定义详情。月、全天、议程和资源时间线不使用此字段。

`event-layout` 保留 `stack` / `columns`，也可传入 `(item: Readonly<SchedulerLayoutItem>) => { left, width }`。回调只定制横向几何，数值为单列宽度的 0–1 比例，必须满足 `left >= 0`、`width > 0`、`left + width <= 1`；非法结果回退默认叠放。纵向位置由时间决定，自定义布局支持聚焦前置。相同布局单元应返回相同几何，回调应保持纯函数，不修改 `item.event`。

<demo src="./__demos__/layout-groups.vue"></demo>

组件只认识日程、资源、时间和通用展示属性。出勤单、任务类型、休息状态、业务权限、表单和服务端 DTO 映射放在 Demo/应用中，通过 `metadata`、插槽、`before-change`、`before-transaction` 接入。复制日程不继承 `layoutGroupId`，避免意外加入原布局组。

业务任务信息保存在日程的 `metadata` 中，例如 `metadata.taskId`。`layoutGroupId` 仅用于布局分组，应按业务需要设置。

### 不关联资源的计划

只管理日期与时间，不需要准备人员列表；没有资源、查询回调或关联 ID 时，侧栏和编辑器自动隐藏资源选择。

<demo src="./__demos__/without-resources.vue"></demo>

### 资源周计划

在基础日历上增加资源列表，观察同一份日程的资源关联。再继续查看多人分配和远程目录。

<demo src="./__demos__/resource-week.vue"></demo>

### 资源时间线

按资源显示一周排期，按占用日期展示日程，跨天日程连续展示，同一天的日程分层排列；精确时分请看资源日程视图。拖放到日期格保留原开始时分。

<demo src="./__demos__/timeline.vue"></demo>

### 隐藏周末与指定星期

<demo src="./__demos__/hidden-days.vue"></demo>

`hidden-days` 接受星期数组，`0` 表示周日，`6` 表示周六；默认 `[]`，例如 `[0, 6]` 显示工作周。作用于周、月和议程视图，月表头与列数同步缩减，`first-day-of-week` 决定星期顺序。重复星期只计算一次。非法星期或隐藏全部七天会触发 Vue prop 校验警告，组件回退显示全部日期。

这是展示过滤：不会修改日程、重复规则、排期权限或完整的 `range-change` 查询范围；导航仍按原周/月跨度。跨隐藏日期的任务在可见日期上显示，持续时长不压缩；拖动使用目标格子的实际日期。更改隐藏配置会取消当前拖动预览。隐藏日期仍参与容量/冲突校验，表单和外部命令仍可排期；需要禁止预约请使用工作时间或禁用时段。

单日、资源日程和资源时间线目前保留原来的完整日期/时间轴。纯核心 `getSchedulerVisibleDays(range, hiddenDays)` 返回独立的可见日期数组，非法隐藏配置或范围会抛出 `RangeError`。

### 现在时间线

时间网格的日期头与全天行共同固定，纵向滚动时保持可见；今天的日期头高亮。启用 `show-now-indicator` 后，时间轴同时显示与红线对齐的当前时间文字，红线处于卡片上方。

<demo src="./__demos__/now-indicator.vue"></demo>

设置 `show-now-indicator` 在日、周和资源日程中显示当前本地时间标线，默认关闭。只在当天列且当前时间位于 `[start-hour, end-hour)` 内显示；资源日程中的当天资源列各显示一条。月、议程和资源时间线暂不显示。

标线每 30 秒刷新，浏览器标签页隐藏时暂停计时，返回时立即刷新；关闭功能、切换不支持的视图或卸载后停止计时。服务端渲染不读取实时钟、不启动计时器，客户端挂载后显示。标线不会拦截鼠标或触摸操作，提供“当前时间”的可访问名称，但不会持续播报。

纯核心 `getSchedulerNowPosition(now, day, startHour = 0, endHour = 24)` 返回本地时间在网格中的百分比；不在当天/时间范围或输入无效时返回 `undefined`。该函数不读取系统时间，与现有本地时间布局保持一致；不代表已实现任意 IANA 显示时区。

可通过 `--c-scheduler-now-color`、`--c-scheduler-now-width`、`--c-scheduler-now-z-index` 调整标线样式。

### 时间线缩放与资源分组

小时刻度显示定位日，天刻度显示一周。切换刻度保留定位日期，上一页/下一页跟随刻度按日或按周导航。资源分组仅影响时间线展示，不修改日程分配。

<demo src="./__demos__/timeline-groups.vue"></demo>

| 属性                                  | 说明                                                      | 默认值   |
| ------------------------------------- | --------------------------------------------------------- | -------- |
| scale / default-scale                 | `hour` 或 `day`，支持 `v-model:scale`                     | `day`    |
| virtual-list-props                    | 资源时间线虚拟列表配置 `SchedulerVirtualListProps`        | —        |
| resource-group-dimensions             | 交叉分组维度顺序，资源时间线有效                          | []       |
| resource-group-by                     | `(resource: SchedulerResource) => string`，返回稳定分组键 | —        |
| expanded-keys / default-expanded-keys | 展开的分组键，支持 `v-model:expanded-keys`                | 全部展开 |

资源较多时可先折叠不关注的分组。小时刻度按真实经过小时构建，夏令时切换日可能有 23 或 25 个小时；表头带时区缩写用于辨别重复小时。当前运行环境时区仍决定显示日期。

### 重叠日程错位叠放

<demo src="./__demos__/stacked-events.vue"></demo>

周视图默认使用 `event-layout="stack"`：重叠组按并发列数等分卡片起点，每张卡片延伸到该日期列的最右侧。例如 3 张同时重叠的日程，起点分别为 0%、33.33%、66.67%，宽度分别为 100%、66.67%、33.33%。单击前置并直接打开详情，Tab 聚焦同样前置，Enter 打开详情；焦点离开卡片后恢复原层级。非重叠日程仍单击打开，多选模式仍单击选择。

可通过 `event-layout="columns"` 恢复旧并排布局。日与资源日程默认并排，也可显式启用 stack；全天、月历、时间线布局不受影响。设置 `overlap-event-limit` 后，一个相连重叠组超过该数量时隐藏后续列并显示“还有 N 项”，点击 Popover 查看该组全部日程；省略时不收敛。选择 Popover 项继续触发正常详情，筛选、数据和冲突校验不受影响。

前置仅改变焦点层级，不修改数组、选中模型或事件时间。只读允许查看，disabled 阻止查看操作。布局方式与 `allow-overlap` 的业务冲突校验相互独立。

## 资源与任务分配

### 多人分配

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `default-date` | 初始定位日期 | 多人分配、交叉分组：站下展开人员、多资源维度：站与人 |
| `default-mode` | 非受控默认视图 | 多人分配、交叉分组：站下展开人员、多资源维度：站与人 |
| `resources` | 当前可见资源行/列及本地选项，不要求全量目录 | 多人分配、交叉分组：站下展开人员、多资源维度：站与人 |
| `resource-dimensions` | 维度定义 `{ id, label }[]` | 交叉分组：站下展开人员、多资源维度：站与人、独立任务分配 |
| `resource-filters` | 跨维度组合筛选，支持 v-model:resource-filters | 交叉分组：站下展开人员、多资源维度：站与人、大量资源与虚拟滚动 |
| `show-assignment-details` | 编辑资源占用量与角色 | 独立任务分配、占用量与资源负载 |
<!-- demo-config-notes:end -->

一条日程可关联多人。拖到另一人员列时只替换拖出列的人员，其他参与者保留；时间变更影响这条日程的所有参与者。需要每个人独立时间时，创建不同 id 的日程，在 `metadata.taskId` 中保存关联。

<demo src="./__demos__/resources.vue"></demo>

### 交叉分组：站下展开人员

<demo src="./__demos__/resource-cross-groups.vue"></demo>

资源时间线设置 `:resource-group-dimensions="['station', 'person']"`，按站分组并在每站下面展示人员行；顺序反转后按人分组。支持两个以上维度，最后一个维度作为行，前面的资源路径作为分组。此设置优先于 `resource-group-by` 和 `resource-dimension`，其他视图继续使用原有单维度轴。

- 行是筛选后各维度资源的笛卡尔积，包含空排期组合，便于直接新建任务。缺少任一维度资源时没有组合行；不满足完整组合的任务可在日程列表或单维度视图中查看。
- 点击组合行自动填入各维度真实资源 ID。`cell-click` 提供 `resourceIds`，组合行的 `resourceId` 为 undefined；展示行键不会进入日程数据。
- 一个任务关联多人或多站时显示在全部匹配组合中，底层仍只有一条任务。拖动修改整条任务的时间，并将来源行的资源替换为目标行资源，其他参与者保留；调整时长不改变资源。它不表示把共享任务拆成独立分配关系。
- 所有资源的容量、工作时间和禁用状态共同约束操作，筛选隐藏的任务仍参与保存校验。空白格可用时间提示同时考虑各维度；容量在提交时校验。
- 复用 `expanded-keys` 控制折叠。分组键为父资源 ID 数组的 `JSON.stringify`，例如 `'["station:north"]'`，不依赖显示名称。`resource-header` 插槽的 `resource` 是末级真实资源，`resources` 为完整资源路径。
- 空数组默认关闭；重复、少于两个或未声明的维度配置回退到普通资源行。纯函数 `createSchedulerResourceRows(resources, dimensionIds)` 对少于两个、重复或空维度 ID 抛出 RangeError，并返回 `SchedulerResourceRow[]`；`moveSchedulerResourceRow(ids, from, to)` 只计算资源替换，可独立于 Vue 使用。

组合行可通过 `virtual-list-props` 开启虚拟滚动，不自动截断组合目录；极大目录应先通过维度筛选缩小范围。资源目录以传入的 `resources` 为准；远程选择结果需由业务合并到资源目录后才生成新行。

### 多资源维度：站与人

<demo src="./__demos__/resource-dimensions.vue"></demo>

通过 `resource-dimensions` 定义资源维度，例如 `[{ id: 'station', label: '站' }, { id: 'person', label: '人' }]`，每个资源使用 `dimensionId` 归属一个维度。维度 ID 应非空且唯一；资源 ID 必须在全部维度之间唯一，可使用 `station:north`、`person:lin` 这样的业务前缀。同一日程继续使用一份 `resourceIds`，可同时关联多个站、多个人，所有关联资源共同参与可用时间、容量和冲突校验。

```ts
const resources = [
  { id: "station:north", label: "北站", dimensionId: "station", capacity: 2 },
  { id: "person:lin", label: "小林", dimensionId: "person", capacity: 1 },
];
const event = {
  id: "inspection",
  title: "北站巡检",
  start: "2026-09-22T09:00:00",
  end: "2026-09-22T10:00:00",
  resourceIds: ["station:north", "person:lin"],
};
const resourceFilters = { station: ["station:north"], person: ["person:lin"] };
```

- **同维度“或”、跨维度“且”**：选多个站和多个人时，日程需匹配任一所选站，并匹配任一所选人。空数组或缺省维度不限制该维度；共享日程按 ID 保持一份数据。
- `v-model:resource-filters` 控制筛选，`default-resource-filters` 提供非受控初值；侧栏每个维度独立多选，更新一个维度保留其他维度。
- `v-model:resource-dimension` 决定资源日程/时间线的列或行，`default-resource-dimension` 提供初值，默认空字符串显示所有维度资源。切换展示维度不修改日程和其他筛选。
- 编辑器按维度选择。更新“人”保留原“站”及尚未解析的资源 ID；未归入已配置维度的现有关联显示在“其他资源”。筛选不会自动成为新日程的默认分配；从资源格新建只预填该格资源。
- 拖动到同维度另一资源，只替换对应资源，其他维度关联保持；跨维度资源间拖动被阻止。过滤不会减少事务校验数据：被筛掉的日程仍可导致人员冲突或容量不足。

纯核心工具：`filterSchedulerEventsByResources(events, resources, filters)` 返回匹配事件数组（事件对象保留原引用，不修改输入）；`setSchedulerResourceDimension(resourceIds, dimensionId, selectedIds, resources)` 返回替换一个维度后的独立 ID 数组，其他维度和未知 ID 保留，新选择的 ID 必须存在且归属该维度。

远程查询 `requestResources` 新增可选 `dimensionId`，每个维度独立查询/分页/取消；服务端应按维度查询并在返回资源上提供 `dimensionId`。客户端还会过滤不属于该维度的候选。`resolveResources` 仍按全局 ID 回显，返回维度后自动参与分组。未知资源在解析完成前不能满足维度筛选，不会被猜测归类；筛选键不会因暂时缺少目录记录而被隐式忽略。

未配置 `resource-dimensions` 时原有单组资源筛选和编辑继续工作。完整日程范围仍由原来的加载接口提供；这些筛选是本地展示条件，服务端保存仍应校验全部相关数据。

### 独立任务分配

<demo src="./__demos__/independent-assignments.vue"></demo>

Demo 内的 `createSchedulerTaskEvents(task, assignments)` 适配器将独立的站/人分配转换为共享 `metadata.taskId` 的不同日程块，各块可有不同时间、资源及占用量。分配 ID 在一个任务内唯一，生成事件 ID 为 `JSON.stringify([task.id, assignment.id])`。多个资源共享同一时间块时仍使用单个 Event；两种语义由业务明确选择，不自动拆分共享事件。

### 占用量与资源负载

<demo src="./__demos__/assignment-load.vue"></demo>

Event 新增 `resourceDetails?: Record<string, { units?: number; role?: string }>`，以 `resourceIds` 为唯一资源关联来源；详情仅补充已关联资源的占用量和角色。units 是有限非负数，省略为 1，支持 0.5；0 表示不占容量。未关联 ID 的详情不参与负载。复制深拷贝详情，同维度拖动携带来源详情，目标已关联时保留目标原详情。

`show-assignment-details` 在内置编辑器显示占用量和角色，`show-resource-load` 在资源时间线表头显示当前日期范围的峰值负载/容量、峰值占用条和范围利用率。利用率分母为完整可见范围的经过分钟数 × 容量，不仅限于工作时间；容量为零或未配置时不计算百分比。`getSchedulerResourceSummary` 同时返回 peakLoad、unitMinutes 与 utilization。峰值包含筛选隐藏的已加载日程，超载标红；服务端仍需检查未加载数据。

`rule-policy` 可分别配置 capacity、unavailable、conflict 为 `allow | warn | block`，默认 block。warn 在成功提交后显示警告并触发 `rule-warning`（SchedulerError[]）；allow 忽略该类规则。conflict 仍以 `allow-overlap=false` 为启用前提。无效配置、无效事件、只读、禁用资源和过期版本不能降级为提醒；保存钩子仍可否决。灰色背景始终表示可用时间约束，即使其提交策略为提醒。

### 大量资源与虚拟滚动

<demo src="./__demos__/virtual-resources.vue"></demo>

设置 `:virtual-list-props="{ height: 480, estimatedSize: 80, buffer: 10 }"` 开启资源时间线虚拟滚动，配置命名与 Table、Select 一致。普通资源行和交叉分组均可使用；未配置时保持完整渲染。分组标题与资源行一起进入滚动窗口，顶部时间刻度跟随横向滚动。

| 配置          | 说明                                                       | 默认值                                       |
| ------------- | ---------------------------------------------------------- | -------------------------------------------- |
| height        | 视口高度，数字为 px，也支持 CSS 高度字符串                 | `var(--c-scheduler-virtual-height)`（480px） |
| estimatedSize | 未测量行的预估高度，正数 px；实际高度按内容测量            | 80                                           |
| buffer        | 预渲染窗口参数，正整数；内部列表最多挂载约 `buffer × 3` 项 | 10                                           |

行布局按需计算并缓存；滚动不改变事件数据或真实资源 ID。筛选、分组展开、日程内容或刻度变化后重置测量缓存，按原可见行键恢复行内偏移与横向位置；原行消失时回退到邻近有效行。更高的视口或更紧凑的行高应增大 `buffer`，确保窗口能够覆盖视口。

资源时间线指针手势由 Scheduler 持有，源卡片卸载后仍可继续；靠近容器边缘会自动滚动并重新计算目标。Escape、失焦、取消和卸载清理手势。虚拟滚动减少 DOM 和布局计算，组合资源目录仍在内存中生成；极大规模的笛卡尔积仍需先筛选或在业务侧限制目录范围。

边缘自动横滚会改变指针下的实际时间格，因此拖动时即使指针横坐标不变，也可能同时更改资源与开始时间；保存后可打开详情核对，或使用撤销/重做恢复。此资源时间线的紧凑卡片支持移动，不显示时间网格的起止拉伸手柄；调整时长可通过详情编辑。非首屏空白格新建使用实际组合行的资源，取消草稿不增加日程。

撤销/重做恢复的是日程数据，不会强制滚动到历史日程的位置。若恢复后的卡片不在当前视口内，先滚动使其可见，再点击查看详情；也可以聚焦日程按钮后使用 Enter 打开。

## 工作时间与容量

### 周期与指定日期可用时段

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `default-date` | 初始定位日期 | 周期与指定日期可用时段、维护禁用时段、资源并发容量 |
| `default-mode` | 非受控默认视图 | 周期与指定日期可用时段、维护禁用时段、资源并发容量 |
| `resources` | 当前可见资源行/列及本地选项，不要求全量目录 | 周期与指定日期可用时段、维护禁用时段、资源并发容量 |
| `resource-label` | 资源字段名称，如设备、会议室 | 周期与指定日期可用时段、维护禁用时段 |
| `allow-overlap` | 允许同资源时间重叠 | 周期与指定日期可用时段 |
<!-- demo-config-notes:end -->

对照工作日规则与指定日期覆盖；在允许和禁止的时段分别尝试创建或编辑任务，观察完整时长的校验边界。

<details>
<summary>配置说明与使用限制</summary>

#### 指定日期工作时间

`date-working-hours` 接受 `SchedulerDateWorkingHours[]`，每项包含本地日期 `date: "YYYY-MM-DD"`、`intervals: { startMinute, endMinute }[]` 和可选 `resourceIds`。分钟范围为 0–1440，结束必须晚于开始；可配置多个时段，空 `intervals` 关闭当天。

优先级为：资源指定日期 > 公共指定日期 > 资源每周规则 > 公共每周规则。指定日期替换当天的周规则，可开放原本关闭的补班日；未匹配的日期沿用每周规则。相同日期不能重复配置公共规则或同一资源，可将分段时段合并到一条规则。非法日期、分钟或重复作用域会使校验返回 `invalid-config`。

全天日程跳过小时限制；维护和企业日历产生的 `disabled-ranges` 始终有效。多人日程必须满足每个人的规则。规则切换不会自动修改已有任务，保存、拖动和跨日期编辑均按完整日程校验；异步保存期间规则变化会拒绝旧结果。

纯逻辑调用：`getSchedulerAvailabilityIssues(event, { workingHours, dateWorkingHours, disabledRanges })`，无需 Vue 或 DOM。

</details>

<demo src="./__demos__/working-hours-comparison.vue"></demo>

### 维护禁用时段

<demo src="./__demos__/maintenance.vue"></demo>

| 属性               | 类型                          | 说明                                                   |
| ------------------ | ----------------------------- | ------------------------------------------------------ |
| date-working-hours | `SchedulerDateWorkingHours[]` | 指定日期时段覆盖，默认 `[]`；详见上文优先级            |
| working-hours      | `SchedulerWorkingHours[]`     | 未传不限制，空数组禁止定时日程；按运行环境本地周历解释 |
| disabled-ranges    | `SchedulerDisabledRange[]`    | 维护、停用等绝对时间区间，默认空数组                   |

```ts
import type {
  SchedulerWorkingHours,
  SchedulerDisabledRange,
} from "@cedar-design/ui-vue";
const workingHours: SchedulerWorkingHours[] = [
  { daysOfWeek: [1, 2, 3, 4, 5], startMinute: 540, endMinute: 720 },
  { daysOfWeek: [1, 2, 3, 4, 5], startMinute: 780, endMinute: 1080 },
];
const disabledRanges: SchedulerDisabledRange[] = [
  {
    id: "maintenance",
    start: "2026-09-09T10:00:00",
    end: "2026-09-09T12:00:00",
    resourceIds: ["equipment-a"],
    label: "定期维护",
  },
];
```

工作时间的起止分钟为当天 0–1440，结束必须晚于开始；跨午夜请拆成两天配置。多个窗口取并集，可以表达午休。存在某资源专用工作窗口时，该资源使用专用周计划覆盖全局周计划；没有适用规则的资源不受限制。多人共享日程必须同时满足每个资源的规则。

禁用区间采用 `[start, end)`，首尾相接不冲突。未指定或空 `resourceIds` 表示全局。全天日程作为日期事项不校验工作小时，但仍校验维护区间。未排期任务和删除不受可用时间规则限制。现有数据仍正常展示，更新时重新校验。

日/周时间网格及小时资源时间线以灰色标记含不可用部分的单元格，可悬停查看提示。格子仍能打开编辑器以调整时间；日/月汇总格不表达整天可用性。规则失败触发 `change-error`，错误码为 `unavailable`；错误的 `issues` 给出资源 ID、维护区间 ID、标签或 `invalid-config`。校验先于 `before-change`，失败不会调用保存钩子。异步等待期间规则变化会以 `stale` 拒绝旧提案。

纯核心入口导出 `getSchedulerAvailabilityIssues(event, options)`，应用可在预检查或服务端复用。时区采用当前运行环境，前后端必须统一日期语义；数据库仍应原子校验实际资源占用。

### 资源并发容量

将容量降至 1，把任务移出重叠时段后可保存，再拖入冲突区会拒绝修改并保留原排期。结束时间恰等于另一项开始时间时不算重叠。当前资源时间线卡片只支持移动，不提供拉伸手柄。

<demo src="./__demos__/resource-capacity.vue"></demo>

资源可设置 `capacity`，表示非负安全整数的并发日程上限；省略表示不限制，`0` 表示不能安排定时或全天日程。每条已排期日程对每个关联资源默认占用 1 份，可通过 resourceDetails.units 调整，重复的资源 ID 只计一次；未排期任务不占容量。相邻的 `[start, end)` 日程不重叠。多人任务需同时满足所有关联资源的容量。

默认允许重叠时，显式容量仍生效；`allow-overlap="false"` 更严格，继续禁止任何资源冲突。维护和工作时间校验也继续生效。新建、编辑、拖动、批量事务、撤销重做均校验最终排期；超额返回 `SchedulerError.code === 'capacity'`，`capacityIssues` 提供 `resourceId/start/end/load/capacity/eventIds/exceeded`。纯删除允许释放容量，外部降低容量不会自动修改已有日程。

- `getSchedulerResourceLoad(events, resource, range?)` 返回有占用的分段负载，`range` 可裁剪统计范围；同一时段事件集合变化时分段，未配置容量的资源也可统计。
- `getSchedulerCapacityIssues(event, events, resources)` 按 ID 替换候选日程，只检查候选时间和关联资源，返回超额时段。两项工具均可从 `@cedar-design/ui-vue/scheduler/core` 导入，无 Vue/DOM 依赖。

容量使用已知资源目录（包括远程回显）和当前已加载日程。未知资源无法推断容量，未加载日程也不会被计入；服务端应在保存事务中校验完整数据和并发版本。`resourceDetails` 补充占用量，`resourceIds` 仍是唯一分配来源。网格的灰色时段仍表示工作时间/维护，负载由纯工具输出，可通过资源表头插槽和 Cedar 组件展示。

## 重复日程与日历

### 重复日程与本次例外

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `default-mode` | 非受控默认视图 | 重复日程与本次例外、每月、每年重复、企业休假与补班日历 |
| `default-date` | 初始定位日期 | 重复日程与本次例外、企业休假与补班日历、修改本次及以后 |
| `model-value` | 日程数据，支持 v-model；传入时受控 | 每月、每年重复、修改本次及以后、RRULE、时区与夏令时 |
| `readonly` | 可查看和导航，不能修改 | 每月、每年重复、修改本次及以后、RRULE、时区与夏令时 |
| `resources` | 当前可见资源行/列及本地选项，不要求全量目录 | 重复日程与本次例外 |
| `date` | 定位日期，支持 v-model:date | 每月、每年重复 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/recurring-events.vue"></demo>

系列与例外由业务保存，`expandSchedulerRecurrences` 按可见范围生成普通日程，传给现有 `v-model`。本例将编辑、拖动、拉伸和删除映射为“仅本次”的例外，新建仍是独立日程。“恢复全部例外”会撤销本例中的本次修改与取消；调整规则会清除本例的例外，不代表库替业务迁移系列。

```ts
import {
  expandSchedulerRecurrences,
  setSchedulerRecurrenceException,
} from "@cedar-design/ui-vue/scheduler/core";
import type {
  SchedulerRecurringEvent,
  SchedulerRecurrenceException,
} from "@cedar-design/ui-vue/scheduler/core";

const series: SchedulerRecurringEvent[] = [
  {
    event: {
      id: "sync",
      title: "项目同步",
      start: "2026-09-07T09:00:00",
      end: "2026-09-07T10:00:00",
    },
    rule: {
      frequency: "weekly",
      interval: 1,
      daysOfWeek: [1, 3, 5],
      count: 12,
    },
  },
];
let exceptions: SchedulerRecurrenceException[] = [];
const occurrences = expandSchedulerRecurrences(
  series,
  {
    start: new Date("2026-09-07T00:00:00"),
    end: new Date("2026-09-14T00:00:00"),
  },
  { exceptions },
);
// 保存完整的替换日程；省略第三个参数表示取消本次。
exceptions = setSchedulerRecurrenceException(exceptions, occurrences[0], {
  ...occurrences[0],
  title: "仅修改本次标题",
});
```

| 类型 / 方法                                                           | 说明                                                                                                                            |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SchedulerRecurringEvent                                               | `{ event, rule }`；event 为已排期的系列起点，id 是系列唯一标识                                                                  |
| SchedulerRecurrenceRule                                               | frequency 为 daily / weekly / monthly / yearly；interval 默认 1；weekly 的 daysOfWeek 默认起点星期，0 表示周日；一周从周一开始  |
| count / until                                                         | count 为原规则总发生次数（取消仍占次数）；until 为包含的最晚开始时间；同时配置则先到者结束                                      |
| SchedulerOccurrence                                                   | 普通日程加 seriesId、originalStart（全天为日期字符串，定时为 ISO 时间点字符串）；生成的 id 是不透明实例标识，不应解析或自行拼接 |
| SchedulerRecurrenceException                                          | `{ seriesId, originalStart, event? }`；event 省略表示取消；提供时必须保持排期                                                   |
| expandSchedulerRecurrences(series, range, options?)                   | 返回与范围相交的完整实例，按开始时间排序；options 可传 exceptions、maxOccurrences（默认 10000）、maxIterations（默认 100000）   |
| setSchedulerRecurrenceException(exceptions, occurrence, replacement?) | 不修改输入，返回替换该实例例外后的新数组                                                                                        |

开始日期只作为下界：每周所选星期不含起点星期时，第一次是之后的第一个匹配日。count 不会因为翻页或取消重新计数。until 表示时间点；日期字符串代表当地零点，定时会议若要包含当天需传入相应开始时刻。

全天系列保留日期字符串与日历天数；定时系列在运行环境本地日历上重复，保持原始时分及实际经过时长。夏令时不存在的时刻遵循 JavaScript Date 的归一化，随后日期恢复起点时分。不支持任意 IANA 时区或完整 RRULE；前后端须统一时区，不能依赖实例 ID 跨时区不变。

例外始终引用原始发生时间，移动后仍可继续修改同一次。移出当前窗口的实例不再显示，移入窗口的例外正常出现。孤立例外或已不属于当前规则的发生时间不会生成实例；修改系列规则时，业务须明确保留、迁移或清理策略。

展开函数遇到非法规则、重复标识或计算/数量上限会抛错，不返回截断数据。上限针对一次展开调用的全部系列；长期系列会从起点扫描，较大数据建议由服务端按范围展开，并配合上方远程加载器处理错误。

本例不启用本地撤销历史；恢复例外是系列层操作。接入后端时由 `before-transaction` 原子保存系列/例外变更，再接受 `v-model` 提案。“本次及以后”拆分见下方示例；全系列冲突检查、专用整系列编辑尚未提供，当前窗口的冲突检查不能代替全系列校验。

### 每月、每年重复

<demo src="./__demos__/calendar-recurrence.vue"></demo>

月/年规则继续使用 `SchedulerRecurrenceRule`，共享单次例外、次数、截止时间及“本次及以后”拆分。

| 字段        | 说明                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------ |
| frequency   | monthly / yearly；interval 分别按起点月份 / 年份计数                                             |
| dayOfMonth  | 1–31，或 -1 表示最后一天；默认起点日期                                                           |
| weekOfMonth | 1–5 或 -1（最后一个）；从当月符合 daysOfWeek 的日期集合中选择第几个匹配日                        |
| daysOfWeek  | 月/年规则须搭配 weekOfMonth；默认起点星期；0 周日到 6 周六                                       |
| monthOfYear | 仅 yearly，1–12；默认起点月份                                                                    |
| overflow    | skip（默认）跳过不存在的日期，last-day 落到月底；只用于数字日期规则，不能与 weekOfMonth 同时使用 |

```ts
import type { SchedulerRecurrenceRule } from "@cedar-design/ui-vue/scheduler/core";

const rules = [
  { frequency: "monthly", dayOfMonth: 31, overflow: "skip" },
  { frequency: "monthly", dayOfMonth: -1 },
  { frequency: "monthly", weekOfMonth: -1, daysOfWeek: [1, 2, 3, 4, 5] },
  { frequency: "monthly", weekOfMonth: 2, daysOfWeek: [1] },
  { frequency: "yearly", monthOfYear: 2, dayOfMonth: 29, overflow: "last-day" },
] satisfies SchedulerRecurrenceRule[];
```

每月 31 日默认跳过二月、四月等月份；落到月底时，之后有 31 日的月份会恢复到 31 日。每年 2 月 29 日同理，遵循公历闰年规则。第五个星期一不存在时直接跳过；被跳过的日期不消耗 count，取消例外仍消耗原次数。

`weekOfMonth` 选择的是整个星期集合中的第 N 个匹配日：`daysOfWeek: [1]` 配合 2 是第二个星期一；`[1,2,3,4,5]` 配合 -1 是最后一个周一至周五日期。后者不包含法定节假日、调休或企业工作日历。数字日期和星期顺序规则不能混用。

展开只从系列起点开始，不补出起点之前的匹配日。分拆继承规则时会固化原始月日/星期默认值，避免从二月 28 日拆分后把“31 日落到月底”改成“每月 28 日”。仍使用运行环境本地时区与计算上限，不承诺完整 RRULE 或任意 IANA 时区。

### 企业休假与补班日历

<demo src="./__demos__/business-calendar.vue"></demo>

`SchedulerBusinessCalendar` 共用“常规工作星期 + 指定日期覆盖”的数据模型；不内置官方节假日。上方纯星期示例继续保持原语义，需要企业日历时显式传入 businessCalendar。

```ts
import {
  isSchedulerWorkingDate,
  getSchedulerCalendarDisabledRanges,
} from "@cedar-design/ui-vue/scheduler/core";
import type {
  SchedulerBusinessCalendar,
  SchedulerRecurrenceRule,
} from "@cedar-design/ui-vue/scheduler/core";

const businessCalendar: SchedulerBusinessCalendar = {
  workingDays: [1, 2, 3, 4, 5],
  overrides: [
    { date: "2026-02-27", working: false, label: "模拟企业休假" },
    { date: "2026-02-28", working: true, label: "模拟补班" },
  ],
};
const rule: SchedulerRecurrenceRule = {
  frequency: "monthly",
  weekOfMonth: -1,
  businessCalendar,
};
isSchedulerWorkingDate("2026-02-28", businessCalendar); // true
```

| API / 字段                                                    | 说明                                                                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| workingDays                                                   | 0 周日至 6 周六，默认周一至周五；空数组表示没有常规工作日                                              |
| overrides                                                     | `{ date: 'YYYY-MM-DD', working: boolean, label?: string }[]`；指定日期优先于星期，重复或非法日期会抛错 |
| rule.businessCalendar                                         | 仅 monthly / yearly 搭配 weekOfMonth；按实际工作日选择第 N 个或最后一个，不能同时传 daysOfWeek         |
| isSchedulerWorkingDate(date, calendar)                        | 查询指定本地日期是否工作                                                                               |
| getSchedulerCalendarDisabledRanges(calendar, range, maxDays?) | 把范围内的非工作日期转换为现有 disabledRanges；默认最多扫描 3660 天，超出抛错                          |

日期范围遵循 `[start, end)`，输出是相交的完整非工作日区间，不裁剪日期两端。将结果绑定 `disabled-ranges` 后，原有拖动、编辑、批量操作会复用可用时间校验。多日任务中的任意休息日也会被拦截。

工作日期和每日小时分别约束：补班日不会自动覆盖 `working-hours` 中禁止周末的配置。本例把每日 09:00–18:00 应用到全部星期，再由工作日历决定哪些日期开放。额外的维护禁用区间仍然有效，补班不解除维护。现有预约不会因切换日历而自动移动或删除，再次编辑时重新校验。

可见范围生成的禁用区间只保证该范围；demo 还在 `before-transaction` 中为提案完整时间段生成区间，避免编辑至视图外漏校验。生产接口仍需按完整资源、时区、权限和版本做服务端校验。日历没有配置的日期继续按 workingDays 判断，因此业务需提供所需年份的休假/补班数据。

修改工作日历可能改变“最后工作日”的原始发生时间，已有例外不能自动迁移；需显式保留、清理或迁移。示例不提供节假日下载、调休推算、按资源选择多个企业日历或工作小时的日期级覆盖。

### 修改本次及以后

<demo src="./__demos__/recurrence-following.vue"></demo>

`splitSchedulerRecurrence` 生成系列层提案，不直接修改日历或调用服务端。示例使用外部 Cedar Dialog 选择“仅本次 / 本次及以后”，将系列与例外一起保存成功后再发布到日历。模拟保存失败会保留原数据与表单。

```ts
import { splitSchedulerRecurrence } from "@cedar-design/ui-vue/scheduler/core";

const proposal = splitSchedulerRecurrence(
  series,
  exceptions,
  selectedOccurrence,
  {
    nextEvent: { ...editedOccurrence, id: "new-series-id" },
    exceptionPolicy: "discard", // 明确清除本次及以后的例外；默认 reject
  },
);
// 先原子保存 proposal.series / proposal.exceptions，再更新业务状态。
// proposal.removedExceptions 可用于展示清除内容或审计。
```

| 选项 / 返回值       | 说明                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| nextEvent           | 新系列的完整已排期起点，id 必须与全部已有系列不同；省略表示取消本次及以后                                  |
| rule                | 可选完整新规则；省略继承原频率、间隔、星期、截止时间，并扣除之前已发生的次数；传入时完整替换，包括终止条件 |
| exceptionPolicy     | reject（默认）保护后续例外，discard 明确清除；不会自动把旧例外映射到新系列                                 |
| maxIterations       | 校验扫描上限，默认 100000；超出抛错，不返回部分提案                                                        |
| series / exceptions | 可一起原子保存的新系列与保留例外，不修改输入                                                               |
| removedExceptions   | 本次及以后被清除的例外副本                                                                                 |

切分点用 `originalStart`，即使某次会议已经被移到其他日期，也不会改变它在系列里的位置。之前的系列和实例 ID 保持不变；后续实例获得新系列 ID。此前发生但移动到未来的例外继续保留，未来发生但移动到过去的例外仍属于后续范围。

从第一次拆分会直接替换原系列；取消第一次及以后会删除整个系列。默认继承规则时，取消记录仍占原始次数；until 保持原截止时间。如果更改起点日期，新起点必须匹配继承或显式传入的新规则。需要改变星期、次数或截止时间时，请传完整 rule；不传 count / until 的新规则会持续重复。

本例默认保护已有例外，选择“清除后续例外”后才允许删除它们。该选择同样适用于取消后续安排。完整 RRULE、自动迁移后续例外、跨时区系列和多人并发版本合并不包含在此 API 中。服务端仍需检查版本、权限与所有后续冲突，并原子保存整个提案；仅检查当前可见窗口不足以确认系列有效。

### RRULE、时区与夏令时

<demo src="./__demos__/zoned-recurrence.vue"></demo>

高级引擎从 `@cedar-design/ui-vue/scheduler/adapters` 导入，使用 [rrule](https://github.com/jkbrzt/rrule) 解析 RFC RRULE 字段、使用 [Temporal polyfill](https://github.com/js-temporal/temporal-polyfill) 转换 IANA 时区，未替换轻量 core 重复规则。

`expandSchedulerRRule({event, rule, timeZone?}, range, options?)` 接受定时种子和单个 RRULE 值（可带 RRULE: 前缀），DTSTART 由 event.start 唯一决定，不能在 rule 中再次指定。支持 BYDAY、BYSETPOS 等规则；options 提供 excludeDates/includeDates（真实时间点）、maxOccurrences、maxIterations。超出预算抛错，不静默截断。生成稳定的 seriesId/originalStart，供业务保存例外。

`schedulerZonedDate(localDateTime, timeZone, disambiguation?)` 将当地时间转换为 Date；不存在或重复时间默认 reject，可明确选择 earlier、later、compatible。`formatSchedulerZonedDate` 格式化真实时间点。RRULE 保持指定地区当地时刻、持续时间保持实际毫秒数。当前组件网格仍采用运行环境本地时间；时区 demo 通过卡片格式化展示指定时区，不将本地网格宣称为完整的多时区编辑器。

## 编辑与交互

### 拖拽虚影与实时拉伸

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `default-date` | 初始定位日期 | 拖拽虚影与实时拉伸、复制日程、自定义卡片拖入新增 |
| `default-mode` | 非受控默认视图 | 拖拽虚影与实时拉伸、复制日程、自定义日程与只读 |
| `resources` | 当前可见资源行/列及本地选项，不要求全量目录 | 拖拽虚影与实时拉伸、复制日程、自定义卡片拖入新增 |
| `before-change` | 返回 false 取消；异步拦截、保存接口 | 自定义日程与只读、自定义新建 / 编辑表单、完全自定义弹窗 / 页面 |
| `resource-label` | 资源字段名称，如设备、会议室 | 拖拽虚影与实时拉伸 |
| `start-hour` | 时间网格起始小时，0–23 | 拖拽虚影与实时拉伸 |
<!-- demo-config-notes:end -->

拖拽与拉伸预览不显示额外的虚线框，保留日程自身的主题样式、半透明反馈和动态尺寸变化。移动时鼠标旁显示紧凑的标题/时间摘要，不复制完整自定义卡片；摘要限制在屏幕边缘内，日历中的落点预览即时跟随吸附位置，按 Escape 取消且不保存。

时间格在普通悬停、拖拽及拉伸期间均不显示悬停背景，键盘焦点提示不受影响。

标题可留空：内置编辑器、自定义编辑器的 `save` 和实例 `change` 在保存时会将空标题或纯空格标题补为“无主题”（英文环境为 `Untitled`），然后再进行校验和调用 `before-change`。独立核心函数仍要求传入有效标题。

移动日程时显示保留标题、自定义插槽内容和主题色的半透明虚影，目标位置显示吸附预览及预计起止时间。日/周/资源日程视图的定时日程支持上边缘调整开始、下边缘调整结束；按 `step` 吸附，最短时长为一个步长。预览不改变原数据，松手后仍经过校验和 `before-change`，失败保留原值。

同一资源列内只移动时间时，保持原有 `resourceIds` 及其顺序；跨资源移动才替换来源资源，其他参与资源保持关联。

按 Escape、取消指针、窗口失焦或交互被禁用会撤销预览；动画遵循系统减少动态效果设置。月、全天行和资源时间线支持移动预览，精确起止拉伸仅在定时时间网格提供。

开始新的指针手势会取消残留的旧手势；自定义卡片内部阻止松手事件冒泡也不会导致其他日程跟随拉伸。拖拽只提交当前日程的数据，多资源列中的同一日程（相同 `id`）会同步显示；保存后若产生时间重叠，卡片会按重叠布局重新分列。

<demo src="./__demos__/drag-feedback.vue"></demo>

下方“已提交日程”直接展示 v-model 的起止时间与资源 ID，便于核对只修改目标日程；预览不是提交值。可使用“重置日程”恢复两个独立 ID 的初始场景。

### 复制日程

<demo src="./__demos__/duplicate-events.vue"></demo>

详情中的“复制日程”使用当前已保存日程创建新草稿，未保存的表单修改不会带入。副本保持标题、日期、时长、全天状态、资源、描述、颜色、`metadata`，生成新 ID；取消不创建数据。定时、全天、未排期均支持。保存仍经过工作时间、维护、容量、冲突和保存钩子，成功后可以撤销重做。

示例中的“下一次副本保存失败”只拒绝下一次提交，并自动复位；失败时抽屉保留草稿，可直接点击保存重试，不需要先关闭抽屉操作外部开关。此开关仅模拟本地保存，不是组件属性。

保存被容量、可用时间或业务钩子拒绝时，编辑器保留草稿与错误以便修正重试；点击取消关闭编辑器后清除该次错误，不在日历外层残留过期提示，已保存模型不变。

实例方法 `duplicateEvent(id): boolean` 用于打开复制草稿；返回 `true` 只表示草稿已打开或编辑请求已发出，**不表示已保存**。日程不存在、只读或组件正在加载/保存、禁用时返回 `false`。`editable=false` 时发送 `editor-request`，其 `action='create'`、`source='duplicate'`。自定义 `editor` 插槽可调用 `duplicate()`；新建模式下该动作无效。

纯核心 `duplicateSchedulerEvent(event, newId)` 从 `@cedar-design/ui-vue/scheduler/core` 导出，返回脱离原数据的标准 `SchedulerEvent`，不修改源数据，也不执行保存。调用者负责 ID 在数据集中的唯一性；空 ID、与源相同 ID、非法或只读源日程会抛错。复制重复实例不会保留 `seriesId/originalStart`，会成为独立普通日程。标准 `metadata` 会浅复制；未声明的对象扩展字段不会自动复制，需要应用在提交前按自身规则添加。

### 单击日程直接弹窗

<demo src="./__demos__/event-dialog.vue"></demo>

通过 `editable=false` 与 `editor-request` 接入内部 Dialog，单击堆叠卡片即可编辑；新建也使用同一窗口。取消不提交，保存调用 Scheduler 的 `change`，复用只读、冲突与保存钩子校验。

### Popover 摘要与高级编辑

<demo src="./__demos__/event-popover.vue"></demo>

通过 `event` 插槽放置受控 Popover，以日程卡片为锚点；`editor-request` 打开对应摘要。同一 Popover 模式也处理点击空白单元格新增：锚定该单元格，填写名称后可直接创建；“高级编辑”携带当前草稿打开完整 Dialog。工具栏“新建日程”等非单元格入口仍直接打开窗口，拖入和复制也不按单元格点击处理。只读时提供“查看完整详情”；点击外部、Escape、切换日期或开始指针操作关闭摘要。示例站点与负责人为演示字段，可替换为业务资源数据。

摘要锚定整张日程卡片：依次尝试右侧顶部、左侧顶部、右侧底部、左侧底部对齐；两侧够宽但上下都放不下时，尽量保留侧边并贴视口边界。两侧太窄则尝试卡片上方或下方，最终位置限制在视口内，保留 8px 边距。弹层默认宽 360px，超宽自动收窄，超高内部滚动；跟随页面/容器滚动、窗口和可视视口尺寸变化重新定位。

两个示例共享编辑实现，包含日期、标题、说明、删除、取消和失败重试。无需新增 Scheduler 公共 API，也可按相同方式接入业务弹窗。

日程的 `color` 用作文字、前景和图案颜色；`accentColor` 单独设置可操作日程左侧的强调线，省略时跟随 `color`；`backgroundColor` 设置卡片底色，`backgroundPattern` 可选 `solid`、`diagonal-stripes`、`dots`、`crosshatch`。全局只读、禁用、日程只读或当前不可拖拽时，卡片不显示左侧操作强调线。图案使用语义枚举，便于不同业务类型保持一致。

业务类型不是 Scheduler 的内置枚举。应用可把 `typeId` 等信息放入 `metadata`，再在自定义编辑器中映射为标题建议、外观和权限；Scheduler 不读取这些内容，只在新建、编辑、拖动和复制过程中保留一层独立副本。

### 自定义卡片拖入新增

左侧卡片通过 `sidebar-extra` 插槽自定义，不需要提前写入日程数据。绑定原生 `dragstart` 到 `startDrag(template, $event)`，`dragend` 到 `cancelDrag`。
拖入日/周/资源时间格识别准确时刻和目标资源；月格与全天行生成一天的全天日程；资源时间线识别日期和资源，以 `start-hour` 为开始时间。议程视图没有拖入目标。
落下后打开内置编辑弹层，确认才新增，取消不保存，模板可重复使用。`duration` 为正数分钟，省略时使用 `step`；全天落点忽略分钟时长。目标资源优先于模板的 `resourceIds`。
只读、禁用、加载、提交中或内置编辑器已打开时不可拖入。`editable=false` 时拖入改为触发 `editor-request`，交由外部页面确认。保存复用 `before-change`、冲突校验和受控更新逻辑。此示例使用桌面原生拖拽，触屏及键盘用户仍可用工具栏新增入口。

<demo src="./__demos__/custom-cards.vue"></demo>

### 自定义日程与只读

插槽提供展示内容；外层已经是可聚焦按钮，插槽内避免嵌套交互控件。只读仍能打开详情。

<demo src="./__demos__/custom-event.vue"></demo>

### 自定义新建 / 编辑表单

`editor` 插槽替换内置 Drawer 的内容，`action` 区分 `create` / `edit`。`event` 是隔离草稿，可修改其字段；`save(event)` 提交完整日程，`save()` 提交当前自定义草稿。不得修改草稿 ID。二者都保留校验和 `before-change`，成功才自动关闭；取消不会写入数据。

`error` 是结构化 SchedulerError，`errorMessage` 是当前语言的显示文案，包含内置字段校验或保存失败。自定义内容负责显示错误并根据 `readonly` / `pending` 禁用控件。`save` 是触发提交的动作，不返回成功 Promise；需要等待结果请使用实例 `change()`。`remove()` 和 `duplicate()` 在新建模式下无效。

<demo src="./__demos__/custom-editor.vue"></demo>

### 完全自定义弹窗 / 页面

设置 `editable=false` 后，工具栏新增、空白格点击、卡片拖入和已有日程点击统一通过 `editor-request` 交给业务方。组件不打开内置 Drawer，也不自动保存。`request.event` 已带生成的 ID、日期/时间和资源；`source` 标明来源，`readonly` 用于只读详情。

<demo src="./__demos__/external-editor.vue"></demo>

示例中的“下一次模拟接口提交失败”只拒绝一次保存或删除，随后自动复位；失败时 Dialog 保留草稿，保存可直接再次确认，删除可再次点击删除，无需关闭窗口操作外部开关。取消则丢弃未保存草稿。

业务方可以使用 Dialog、独立路由或其他表单。确认时调用 `change({ type: request.action === 'create' ? 'create' : 'update', event })`，等待返回 `true` 后关闭；返回 `false` 时保留表单，可监听 `change-error` 显示错误。删除已有日程使用 `type: 'remove'`。

只绑定 `editor-request` 来打开外部表单，不要再通过 `cell-click` / `event-click` 打开一次。内置编辑模式不触发 `editor-request`。工具栏和拖入不是格子点击，不触发 `cell-click`。

外部页面自己管理取消、重复打开、提交中禁止关闭、卸载后的响应和编辑快照/版本。示例拒绝覆盖已打开的窗口，并在提交前比对打开时的数据；Scheduler 的 `change()` 只检查提交过程中的并发变化，不代替业务页面打开期间的版本校验。真正跨路由的表单还需自行持久化草稿并对接服务端，不能在 Scheduler 卸载后继续调用旧实例。

### 多选、批量操作与撤销重做

<demo src="./__demos__/batch-history.vue"></demo>

### 原子事务交换

<demo src="./__demos__/atomic-swap.vue"></demo>

### 批量与事务约定

| 属性                                  | 说明                                                        | 默认值 |
| ------------------------------------- | ----------------------------------------------------------- | ------ |
| selectable                            | 展示多选模式开关；开启模式后点击卡片切换选中，暂停卡片拖拽  | false  |
| selected-keys / default-selected-keys | 选中日程 ID，支持 `v-model:selected-keys`；共享日程只计一次 | 空数组 |
| history                               | 开启本地撤销/重做，展示工具栏                               | false  |
| history-limit                         | 最多保留历史条数，正整数                                    | 20     |
| before-transaction                    | 一次性校验或保存整笔事务；返回 false 取消，异常保留数据     | —      |

| 实例方法                                 | 说明                                                                |
| ---------------------------------------- | ------------------------------------------------------------------- |
| `transaction(changes): Promise<boolean>` | 原子提交多条 create/update/remove/move/resize；每个 ID 只能出现一次 |
| `undo(): Promise<boolean>`               | 撤销最近一次已接受变更，重新经过规则与保存钩子                      |
| `redo(): Promise<boolean>`               | 重做最近一次撤销                                                    |
| `canUndo` / `canRedo`                    | 当前是否允许撤销/重做                                               |

新增 `transaction(value, context)` 与 `transaction-error(error, context)` 事件；context 包含 `action`（change/undo/redo）、`changes`、`previousValue` 和 `value`。原单条 `change` / `change-error` 事件仅在事务含一条变更时触发，多条变更不会逐条触发这些事件。

**保存钩子：**通过 `before-transaction` 原子保存单条、批量、撤销和重做操作。仅配置 `before-change` 时只能处理单条操作，批量事务会返回 `transaction-hook-required`。服务端仍需使用数据库事务保证保存的一致性。

```ts
import type { SchedulerBeforeTransaction } from "@cedar-design/ui-vue";
const beforeTransaction: SchedulerBeforeTransaction = async (context) => {
  // 在这里向业务后端提交整个 context.changes；失败抛错或返回 false。
  // 后端应对整批变更校验版本、权限和最终资源占用，再原子保存。
};
```

批量后移保留本地时分；包含未排期任务时整批拒绝，避免静默遗漏。添加资源为追加去重，不替换其他参与人。只读成员、禁用资源、工作时间和维护冲突均会阻止整批操作。

受控模式中，父组件接受对应 `update:model-value` 后才记录历史；若父组件不接受，撤销不可用。父组件接受的数据若与提案不同（例如服务端重写字段），视为外部更新并清空本地历史。其他外部数据更新也会清空历史，避免覆盖别人或后端的修改。规则变更不会清空历史，但撤销必须通过当前规则。关闭 history 清空历史，新的成功变更清空重做分支。历史只属于当前组件实例，不是多人协作版本历史。

### 拖选、吸附间隔与月历更多日程

<demo src="./__demos__/interaction-completion.vue"></demo>

`drag-to-create` 在日、周、资源日程的空白时段启用指针拖选，支持同一列内向前或向后选择。释放后打开创建表单；Escape、失焦或禁用取消。单击和键盘激活仍可创建日程。

触屏拖动日程、调整起止时间或拖选空白时段需要长按 350ms。长按生效前移动超过 8px 会取消排期手势，把操作留给页面滚动；鼠标仍保持 5px 移动阈值，无需等待。粗指针设备上的上下缩放热区扩大到至少 14px，视觉线条尺寸不变。

焦点位于日程、时间单元格、月视图日期或“还有 N 项”入口时，方向键会按屏幕中的上下左右位置移动到最近的可用日历控件。Enter/Space 沿用 Cedar Button 的原生激活行为；禁用项和不可见项会被跳过。导航只在日历内容区生效，不接管工具栏、编辑器及表单输入。关闭内置编辑器后焦点返回原触发控件；若该日程已删除或视图已变化，则定位到原位置附近的可用日历控件，最终回退到 Scheduler 容器。

`slot-duration` 控制网格分钟数，`snap-duration` 控制指针吸附，`default-duration` 控制单击新建时长，均省略时回退旧 `step`。例如 60 / 15 / 45 表示一小时格、15 分钟吸附、45 分钟默认任务。拖选使用选择区间；外部模板的 duration 优先。指针拖动时间线也按吸附间隔定位；吸附以当前单元格真实开始时间为锚点。

月视图默认每天直接显示 3 条日程，固定单元格高度；超出时显示“还有 N 项”。点击后使用 Cedar Popover 展示当天全部日程，选择其中一项可进入详情。`month-event-limit` 可调整直接展示数量；隐藏周末仍沿用真实日期。

### 依赖、里程碑与时间线缩放

<demo src="./__demos__/advanced-planning.vue"></demo>

`dependencies` 为 `{id, fromId, toId, type?, lag?}[]`，支持 finish-to-start（默认）、start-to-start、finish-to-finish、start-to-finish，lag 为实际经过分钟数，可为负。纯函数 `getSchedulerDependencyIssues` 返回无效配置、缺失端点、循环和时间顺序问题；提交使用最终事务状态校验，失败返回 dependency 错误。尚未排期的端点不检查时间顺序。删除事件前需先移除相关依赖。

资源时间线为当前已挂载的两端绘制依赖连线；虚拟列表中一端不在视口时不绘制。此功能不会自动重排其他任务。`milestone: true` 表示定时零时长里程碑，必须 start=end，不支持全天或未排期；以 ◆ 显示，不占容量，可移动而不能拉伸。

`zoom/default-zoom/update:zoom` 控制 0.5–4 倍时间线缩放，工具栏提供放大缩小；以当前视口中心的时间为锚调整横向位置。`show-date-header` 默认开启日期分组表头。资源名称在横向滚动时固定。

## 异步加载与保存

### 异步目录、分页与 ID 回显

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `default-mode` | 非受控默认视图 | 异步目录、分页与 ID 回显、按范围远程加载、异步保存 |
| `resources` | 当前可见资源行/列及本地选项，不要求全量目录 | 异步目录、分页与 ID 回显、异步保存 |
| `before-change` | 返回 false 取消；异步拦截、保存接口 | 异步目录、分页与 ID 回显、异步保存 |
| `default-date` | 初始定位日期 | 异步目录、分页与 ID 回显、异步保存 |
| `resource-label` | 资源字段名称，如设备、会议室 | 异步目录、分页与 ID 回显 |
| `request-resources` | 按关键词和游标查询候选资源 | 异步目录、分页与 ID 回显 |
<!-- demo-config-notes:end -->

示例可切换设备接口和人员接口。仅提供当前 4 条可见资源，而已有日程关联第 12 条，通过 `resolve-resources` 单独回显。打开资源下拉框后远程搜索、滚动或点击加载更多；搜索结果不会添加资源视图的行/列。可模拟搜索与回显失败，查看 ID 保留及重试。

示例状态文案按当前请求更新：回显或搜索失败后，成功重试会清除旧失败提示；切换设备/人员接口会重置示例反馈。失败和重试都不会将资源显示名称写进日程，关联仍只存稳定 ID。

<demo src="./__demos__/async-resources.vue"></demo>

日程只保存 `resourceIds`；`id` 是稳定标识，`label` 是显示名称。业务层把 `userId/displayName`、`deviceId/deviceName` 等接口字段映射为 `{ id, label }`。不要把名称当 ID，也不要为了回显把全量目录放进 `resources`。

| 数据入口          | 职责                                                                |
| ----------------- | ------------------------------------------------------------------- |
| resources         | 当前资源视图的行/列及本地候选项，可以是部分目录；同 ID 时优先于缓存 |
| request-resources | 远程搜索与游标分页，返回候选项，不修改可见行/列                     |
| resolve-resources | 根据已有 ID 批量加载名称，不依赖当前搜索页                          |
| before-change     | 对接服务端有效性、权限、全量冲突与保存校验                          |

```ts
import type {
  SchedulerRequestResources,
  SchedulerResolveResources,
} from "@cedar-design/ui-vue";

const requestResources: SchedulerRequestResources = async ({
  query,
  cursor,
  signal,
}) => {
  const params = new URLSearchParams({ query });
  if (cursor !== undefined) params.set("cursor", cursor);
  const response = await fetch(`/api/devices?${params}`, { signal });
  if (!response.ok) throw new Error("设备查询失败");
  const page = await response.json();
  return {
    items: page.items.map((item) => ({
      id: String(item.deviceId),
      label: item.deviceName,
    })),
    nextCursor: page.nextCursor, // 没有下一页时省略；游标使用非空字符串
  };
};

const resolveResources: SchedulerResolveResources = async (ids, { signal }) => {
  const response = await fetch("/api/devices/by-ids", {
    method: "POST",
    signal,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids }),
  });
  if (!response.ok) throw new Error("设备回显失败");
  const items = await response.json();
  return items.map((item) => ({
    id: String(item.deviceId),
    label: item.deviceName,
  }));
};
```

同一实例缓存回显结果，并合并请求中的重复 ID；不在实例之间共用数据。搜索更换关键词会取消旧请求，即使接口未响应取消信号也忽略过期结果。切换 `resolve-resources` 回调会清空回显缓存；切换租户/目录建议给 Scheduler 设置不同 `key`，隔离搜索结果、缓存和编辑草稿。

回显查不到或失败时保留原 ID 并用 ID 显示，不会清空日程关联或禁止保存。失败触发 `resource-error`；可通过提示按钮或重新打开选择器重试。远程请求只影响资源控件的加载状态，不锁住整个日程。

当前未加载的资源不等于无效资源。已知 `disabled` 的资源不能新增分配，已有关联可保留/移除；保存期间新增分配的资源变为禁用会阻止保存，但目录翻页、补全名称不会使保存过期。`allow-overlap=false` 仅检查已加载日程，全量冲突和权限必须由服务端校验。

### 按范围远程加载

<demo src="./__demos__/remote-events.vue"></demo>

`useSchedulerDataSource` 独立负责加载，不改变 Scheduler 的 `v-model` 数据所有权。将 `range-change` 写入范围 ref，将返回的 `events` 绑定到组件。需要避免在加载中或失败后编辑时，由业务设置 `readonly="loading || !!error"`；整块占位可在外层使用 Loading。

```ts
import { ref } from "vue";
import { useSchedulerDataSource } from "@cedar-design/ui-vue";
import type { SchedulerRange } from "@cedar-design/ui-vue";

const range = ref<SchedulerRange>();
const { events, loading, error, refresh } = useSchedulerDataSource({
  range,
  requestEvents: async ({ start, end, resourceIds, signal }) => {
    const params = new URLSearchParams({
      start: start.toISOString(),
      end: end.toISOString(),
      resourceIds: resourceIds.join(","),
    });
    const response = await fetch(`/api/events?${params}`, { signal });
    if (!response.ok) throw new Error("加载失败");
    return response.json();
  },
});
```

| 选项            | 说明                                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| requestEvents   | 查询函数或其 ref，接收 start、end、resourceIds、AbortSignal，返回日程数组或 Promise；切换函数清空缓存 |
| range           | 范围、ref 或 getter；undefined 暂停并清空当前数据                                                     |
| resourceIds     | 可选数组、ref 或 getter；去重排序后作为查询条件，空数组表示不限资源                                   |
| enabled         | 可选 boolean、ref 或 getter，默认 true；false 取消加载并清空当前数据                                  |
| cacheTime       | 缓存有效毫秒数，默认 30000，0 禁用                                                                    |
| maxCacheEntries | LRU 缓存条数上限，默认 20，0 禁用                                                                     |

返回 `events`（可写 ref）、`loading`、`error`、`loadedRange`（最后成功发布的范围）、`refresh()`（绕过当前缓存并返回成功与否）、`cancel()`（保留已发布数据，终止当前请求）、`invalidate()`（仅清空全部缓存）。在组件 setup 或 effectScope 中调用；SSR 不自动请求。

范围为 `[start, end)`：接口应返回与范围相交的完整日程，不截断跨日事件，不返回仅第一页。资源筛选条件由业务同步传入；组件内部资源筛选不会自动改变加载器条件。未排期任务可由业务接口额外包含在返回数组中。

切换范围会清空旧窗口并取消旧请求，即使接口忽略 AbortSignal，过期响应也不会覆盖最新结果。失败通过 `error` 暴露，点击刷新重试。查询结果会整体校验，重复 ID 或无效日程不会部分发布。缓存以精确范围和资源条件区分；通过 `v-model` 替换或响应式原位编辑会取消在途加载并清空缓存。Date 的原生 set 方法不会触发 Vue 响应式，请替换日期值。

加载器不执行保存。继续使用 `before-transaction` 向服务端提交 `context.changes`；不要将当前窗口的 `context.value` 当作全库替换。全局冲突、权限及原子保存由服务端校验。切换窗口属于外部数据更新，会使组件本地撤销历史失效。

### 异步保存

before-change 返回 false 取消，抛错或拒绝 Promise 会触发 change-error 并保留原数据。期间组件禁止重复变更。如果外部数据或权限变化，旧提案失效。服务端仍需原子校验权限、版本和资源冲突。

<demo src="./__demos__/async-change.vue"></demo>

示例只使用本地 600ms 模拟保存。“下一次模拟保存失败”仅失败一次后自动复位，可在保留草稿的编辑器中直接重试。“父组件接受更新”关闭后，验证通过仍只是提案，下方模型明细和卡片保持已保存值；取消编辑也不写入。卸载、停用或重置清理示例请求计时器。

## 业务组合与集成

### 设备排期与工单

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `resources` | 当前可见资源行/列及本地选项，不要求全量目录 | 设备排期与工单、出勤详情、打卡与关单、任务日历组合工作台 |
| `default-mode` | 非受控默认视图 | 设备排期与工单、外部日历、模拟协同、ICS 与打印、出勤详情、打卡与关单 |
| `default-date` | 初始定位日期 | 设备排期与工单、外部日历、模拟协同、ICS 与打印、出勤详情、打卡与关单 |
| `editable` | 启用内置编辑器；false 通过 editor-request 接管 | 出勤详情、打卡与关单、任务日历组合工作台 |
| `start-hour` | 时间网格起始小时，0–23 | 出勤详情、打卡与关单、任务日历组合工作台 |
| `end-hour` | 时间网格结束小时，必须大于起始，最多 24 | 出勤详情、打卡与关单、任务日历组合工作台 |
<!-- demo-config-notes:end -->

相同资源 API 用于设备，无人员字段依赖。示例包括工单拖入、双设备联合占用、全天维护、只读日程及本地重叠校验。`resource-label` 自定义显示名称，不改变存储字段。

<demo src="./__demos__/equipment.vue"></demo>

### 外部日历、模拟协同、ICS 与打印

<demo src="./__demos__/calendar-integration.vue"></demo>

`SchedulerCalendarProvider` 定义 load(range, signal)、commit(changes, expectedRevision, origin?) 与可选 subscribe。`createSchedulerMemoryProvider` 为离线示例实现：校验递增版本、发布分离快照、可注销订阅。真实服务需实现认证、持久化、权限与完整业务校验。示例用 origin 忽略自己的回声，外部更新仍触发 Scheduler 的过期保护；内部事务用本地单调版本检测等待期间数据变化。

`exportSchedulerICalendar(events, {stamp, name?})` 导出 UTC 定时事件和 DATE 全天事件，正确转义文本并按 UTF-8 75 字节折行；未排期事件明确拒绝。`importSchedulerICalendar(text, {timeZone?, disambiguation?})` 返回普通 events 与 RRULE 种子 series；要求 UID/DTSTART/DTEND。支持 UTC/IANA TZID/指定时区的浮动时间。全天 RRULE、自定义 VTIMEZONE、RECURRENCE-ID、RDATE/EXDATE/EXRULE、DURATION 及重复 UID 会明确拒绝，交由专用提供方适配，避免导入后语义丢失。

`createSchedulerPrintHtml(events, options?)` 返回独立可打印 HTML，含完整转义、重复表头及跨页设置。调用方决定打开、保存或打印；示例的打印按钮只打印此文档。

### 出勤详情、打卡与关单

<demo src="./__demos__/task-calendar-details.vue"></demo>

点击日程先打开 Popover 摘要，再通过“高级详情”查看工单、任务技能、人员、设备、标准工时、来源和打卡记录。页面用 `metadata.attendanceOrderId` 查询完整业务对象；关单后保留业务对象中的计划时间，只把 Scheduler Event 映射为实际打卡时间和只读外观。完成、休息和来源都是 Demo 业务配置。

### 任务日历组合工作台

<demo src="./__demos__/task-calendar-workbench.vue"></demo>

[打开宽屏工作台](/examples/task-calendar/)。所有日期以打开页面时的本周一和今天动态生成，包含本周/下周、逾期/临期、已关闭记录与工作日轮休。

工作台将出勤单、任务、打卡保存为独立业务 DTO，再通过 `workbench-model.ts` 投影为 SchedulerEvent：一个任务一块，同单连续任务共享 `layoutGroupId`；同时勾选人员与设备时，各生成稳定视图 ID，点击/悬停关联高亮。跨天与全天单按出勤单投影到全天区。对象色、闭单白蒙版、休息斜纹和边框都由 Demo 映射，不添加组件业务状态。

人员/设备与待办分别使用 Cedar Tree，来源搜索固定在顶部。父节点勾选由 Tree 提供，重复资源条目的选中状态由资源 ID 同步；站点快捷按钮支持再次反选。待办按设备或选中人员负责的站点聚合，逾期优先、截止日期较早优先。待办可拖空白建单、拖到已有可编辑任务块合并，也可在详情中加入已勾选任务。一次打包限制同一设备。移出任务在保存后回池，最后一项移出后解散出勤单；取消或保存失败均不修改已保存数据。

详情支持按标准工时计算计划结束、查看工单、任务 hover/focus 显示该设备打卡并定位最近记录、关联已有打卡或手动补录后关单。已关闭、休息和查看者都不可编辑。时间重叠、每日超过 8 小时及超截止日只提示；技能、数据完整性、权限和版本冲突拒绝保存。拖动期间的截止日背景通过 `column-background` 插槽显示，空白仍允许落入。

保存使用独立内存 Mock API，`重新加载` 读取该 API 当前数据，刷新浏览器会重建 Mock。`提交数据` 可查看真实提交给 Mock 的业务 DTO，未把视图投影数组当成后端主表。移动通过 `before-change` 异步准备、`change` 成功后版本比较并提交，取消或过期手势不写入服务端；表单直接调用同一业务 API。保存失败保留草稿和勾选。生产接入只替换 API，不需要修改 Scheduler。

交互取舍：详情统一用 Dialog；全天表单允许填写日期范围；任务级实际打卡时间尚无独立来源时，闭单后的任务块按标准工时比例分布在整单真实打卡区间，详情保留原始记录。原生拖放合并的目标为任务卡片内容区，键盘操作使用“加入已勾选任务”；不向核心增加出勤单 drop-target 协议。

## 阅读方向

继承页面、局部容器或 ConfigProvider 的 `dir`，可沿用文档导航的 LTR/RTL 按钮实时切换。月/周/资源列和横向时间轴从阅读起点排列；纵向时间仍从上向下。切换方向保留日期、日程数据、选择和横向阅读距离，并取消正在进行的拖动或拉伸。

小时级资源时间线支持日程移动和开始/结束两端拉伸，遵守 `snapDuration`、只读状态、里程碑和日程的 `resizable` 限制。时间轴缩放保留可视时间区域中心的日期；资源标签固定在阅读起点，虚拟行与表头同步滚动。

默认重叠布局使用逻辑起点；自定义 `eventLayout` 返回的 `left` 保持屏幕物理左侧语义，由调用方按业务需要提供几何位置。日期、时区、依赖关系和资源顺序不会因 RTL 而反转。

## 使用说明

### 异步操作反馈

before-* 等待期间显示加载反馈并标记 aria-busy；拒绝或失败后恢复，重复提交不再启动同一操作。普通事件返回的 Promise 不参与加载。
### 配置说明

所有变量集中于 `style/token.less`，支持亮暗主题覆盖。

## API

### Scheduler Props

| 属性                       | 说明                                                                    | 类型                                            | 默认值       |
| -------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------- | ------------ |
| model-value                | 日程数据，支持 v-model；传入时受控                                      | SchedulerEvent[]                                | —            |
| preview-event              | 尚未保存的新增日程占位，只参与视觉展示                                  | SchedulerEvent                                  | —            |
| default-value              | 非受控初始数据                                                          | SchedulerEvent[]                                | []           |
| mode                       | 当前视图，支持 v-model:mode                                             | SchedulerMode<br>`'month' \| 'week' \| 'day' \| 'agenda' \| 'resource-day' \| 'resource-timeline'` | —            |
| default-mode               | 非受控默认视图                                                          | SchedulerMode<br>`'month' \| 'week' \| 'day' \| 'agenda' \| 'resource-day' \| 'resource-timeline'` | week         |
| date                       | 定位日期，支持 v-model:date                                             | Date / string / number                          | —            |
| default-date               | 初始定位日期                                                            | Date / string / number                          | 当前日期     |
| resource-dimensions        | 维度定义 `{ id, label }[]`                                              | SchedulerResourceDimension[]                    | []           |
| resource-filters           | 跨维度组合筛选，支持 v-model:resource-filters                           | SchedulerResourceFilters                        | —            |
| default-resource-filters   | 非受控筛选初值                                                          | SchedulerResourceFilters                        | {}           |
| resource-dimension         | 资源行/列展示维度，空字符串显示全部                                     | string                                          | —            |
| default-resource-dimension | 非受控展示维度初值                                                      | string                                          | ''           |
| resources                  | 当前可见资源行/列及本地选项，不要求全量目录                             | SchedulerResource[]                             | []           |
| resource-label             | 资源字段名称，如设备、会议室                                            | string                                          | 语言包“资源” |
| request-resources          | 按关键词和游标查询候选资源                                              | SchedulerRequestResources                       | —            |
| resolve-resources          | 按 ID 批量补全名称                                                      | SchedulerResolveResources                       | —            |
| modes                      | 允许切换的视图                                                          | SchedulerMode[]<br>`SchedulerMode: 'month' \| 'week' \| 'day' \| 'agenda' \| 'resource-day' \| 'resource-timeline'` | 全部六种     |
| first-day-of-week          | 周起始，0 周日至 6 周六                                                 | number                                          | 1            |
| start-hour                 | 时间网格起始小时，0–23                                                  | number                                          | 8            |
| end-hour                   | 时间网格结束小时，必须大于起始，最多 24                                 | number                                          | 20           |
| initial-scroll-minute      | 时间网格首次显示时定位的当天分钟数，后续保留用户滚动位置                | number                                          | —            |
| step                       | 时间格及吸附分钟，正整数且整除 60                                       | number                                          | 30           |
| slot-duration              | 网格分钟数，正整数                                                      | number                                          | step         |
| snap-duration              | 指针吸附分钟数，正整数                                                  | number                                          | step         |
| default-duration           | 单击新建默认分钟数，正整数                                              | number                                          | step         |
| drag-to-create             | 日/周/资源日程空白时段拖选                                              | boolean                                         | false        |
| month-event-limit          | 月视图每日直接展示上限，超出通过 Popover 查看                           | number                                          | 3            |
| overlap-event-limit        | 时间网格重叠组直接展示上限，超出通过 Popover 查看                       | number                                          | —            |
| zoom / default-zoom        | 时间线缩放，0.5–4                                                       | number                                          | 1            |
| show-date-header           | 时间线日期分层表头                                                      | boolean                                         | true         |
| show-assignment-details    | 编辑资源占用量与角色                                                    | boolean                                         | false        |
| show-resource-load         | 资源峰值、容量及范围利用率                                              | boolean                                         | false        |
| rule-policy                | capacity/unavailable/conflict 的 allow/warn/block 策略                  | SchedulerRulePolicy                             | {}（block）  |
| dependencies               | 任务依赖关系                                                            | SchedulerDependency[]                           | []           |
| event-layout               | 时间网格布局 stack / columns / 几何回调；默认周视图 stack、其他 columns | SchedulerEventLayout                            | 按视图       |
| readonly                   | 可查看和导航，不能修改                                                  | boolean                                         | false        |
| disabled                   | 禁用交互                                                                | boolean                                         | false        |
| hidden-days                | 周、月、议程隐藏指定星期，0–6，不可全部隐藏                             | number[]                                        | []           |
| show-now-indicator         | 日、周、资源日程显示当前本地时间标线                                    | boolean                                         | false        |
| show-sidebar               | 显示筛选和未排期列表                                                    | boolean                                         | true         |
| allow-overlap              | 允许同资源时间重叠                                                      | boolean                                         | true         |
| editable                   | 启用内置编辑器；false 通过 editor-request 接管                          | boolean                                         | true         |
| before-change              | 返回 false 取消；异步拦截、保存接口                                     | SchedulerBeforeChange / SchedulerBeforeChange[] | —            |
| selectable | 启用多选操作 | boolean | false |
| selected-keys / default-selected-keys | 受控选中日程 ID / 非受控初始选中 ID | string[] | — / [] |
| history | 对已接受的变更启用撤销与重做 | boolean | false |
| history-limit | 历史记录数量，正整数；无效值回退 20 | number | 20 |
| before-transaction | 事务保存守卫，设置后替代 before-change | SchedulerBeforeTransaction / SchedulerBeforeTransaction[] | — |
| working-hours | 每周工作时间；省略不限制，空数组禁止定时日程 | SchedulerWorkingHours[] | — |
| date-working-hours | 按日期覆盖工作时间 | SchedulerDateWorkingHours[] | [] |
| disabled-ranges | 禁用时间区间，可限定资源 | SchedulerDisabledRange[] | [] |
| scale / default-scale | 受控 / 非受控资源时间线刻度 | 'hour' / 'day' | — / day |
| virtual-list-props | 配置后启用资源时间线虚拟滚动 | SchedulerVirtualListProps | — |
| resource-group-dimensions | 按维度顺序交叉分组，至少两个不同维度 | string[] | [] |
| resource-group-by | 资源到稳定分组键的映射 | (resource: SchedulerResource) => string | — |
| expanded-keys / default-expanded-keys | 受控 / 非受控分组展开键；省略默认全部展开 | string[] | — / — |

mode 为 `day | week | month | agenda | resource-day | resource-timeline`。agenda 与资源时间线按周导航。超出时间网格小时范围的日程仍可在月/议程/时间线查看。

model-value 受控时，组件只提出新值，由父组件接受后更新界面；不会在接口失败后先移动再回滚。组件不修改输入数组或对象。before-change 得到分离副本，修改副本不会修改提交值。

### Scheduler Events

| 事件                     | 说明                                                             | 参数                                 |
| ------------------------ | ---------------------------------------------------------------- | ------------------------------------ |
| update:model-value       | 提出新主值                                                       | SchedulerEvent[]                     |
| update:resourceFilters   | 维度组合筛选变更，受控时等待父组件接受                           | SchedulerResourceFilters             |
| update:resourceDimension | 资源行/列展示维度变更                                            | string                               |
| update:mode              | 视图切换                                                         | SchedulerMode                        |
| update:zoom              | 时间线缩放值变化                                                 | number                               |
| rule-warning             | 提案通过时的提醒型规则问题                                       | SchedulerError[]                     |
| update:date              | 定位日期变更                                                     | Date                                 |
| change                   | 校验和钩子完成；受控时表示已提出通过的值                         | value, SchedulerChangeContext        |
| change-error             | 校验、冲突、保存或过期提案错误                                   | error, SchedulerChange               |
| event-click              | 激活日程（传出副本）；叠放重叠项同样通过单击或 Enter，多选不触发 | SchedulerEvent                       |
| cell-click               | 点击空白时段                                                     | SchedulerCell                        |
| range-change             | 首次与实际可见日期范围变化                                       | SchedulerRange                       |
| resource-error           | 资源搜索或回显失败，不修改日程数据                               | error, SchedulerResourceErrorContext |
| editor-request           | 仅 editable=false：请求外部新建或查看/编辑                       | SchedulerEditorRequest               |
| update:selectedKeys | 选中日程 ID 变更 | string[] |
| update:scale | 时间线刻度变更 | 'hour' / 'day' |
| update:expandedKeys | 分组展开键变更 | string[] |
| transaction | 单项或批量事务通过后提出新值 | SchedulerEvent[], SchedulerTransactionContext |
| transaction-error | 事务失败，保留原始原因 | unknown, SchedulerTransactionContext |

### Scheduler Slots

| 插槽              | 参数                                             | 说明                                                                                                               |
| ----------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| event             | { event }                                        | 日程按钮内容                                                                                                       |
| sidebar           | { startDrag, cancelDrag, disabled, unscheduled } | 替换整个侧栏；适合业务资源树与待排任务池，show-sidebar=false 时不显示                                              |
| sidebar-extra     | { startDrag, cancelDrag, disabled }              | 默认侧栏顶部自定义内容；startDrag(template: SchedulerEventTemplate, event: DragEvent)，show-sidebar=false 时不显示 |
| resource-header   | { resource?, resources?, date }                  | 资源标题或日期标题                                                                                                 |
| toolbar           | { date, mode, navigate, create }                 | 替换工具栏；navigate(-1/1) 切换范围，create() 走工具栏新增流程                                                     |
| column-background | { date, resource? }                              | 日/周/资源日程列背景，不接管指针；用于业务软提示、热力背景等                                                       |
| toolbar-extra     | { date, mode }                                   | 工具栏扩展                                                                                                         |
| editor            | SchedulerEditorSlotProps                         | 自定义抽屉内容：action、event、error、errorMessage、save、remove、duplicate、close、readonly、pending                         |
| empty             | —                                                | 空状态                                                                                                             |

### Scheduler Methods

| 方法                               | 说明                                                           |
| ---------------------------------- | -------------------------------------------------------------- |
| `change(change): Promise<boolean>` | 执行 create/update/remove/move/resize，复用全部校验与钩子      |
| duplicateEvent(id: string)         | 打开独立复制草稿或发出自定义创建请求，返回 boolean，不自动保存 |
| goToDate(date: Date)               | 定位日期；遵循受控模型                                         |
| `transaction(changes): Promise<boolean>` | 执行批量事务，应用同一套规则与事务守卫 |
| `undo(): Promise<boolean>` / `redo(): Promise<boolean>` | 撤销 / 重做已接受的历史，仍经过事务守卫 |
| `canUndo` / `canRedo` | 只读状态，表示当前是否可撤销 / 重做 |

## Types

```ts
import type {
  SchedulerProps,
  SchedulerInstance,
  SchedulerMode,
  SchedulerEvent,
  SchedulerResource,
  SchedulerChange,
  SchedulerChangeContext,
  SchedulerBeforeChange,
  SchedulerBeforeTransaction,
  SchedulerTransactionContext,
  SchedulerEventTemplate,
  SchedulerRequestResources,
  SchedulerResolveResources,
  SchedulerResourcePage,
  SchedulerResourceQuery,
  SchedulerResourceErrorContext,
  SchedulerEditorRequest,
  SchedulerEditorAction,
  SchedulerEditorSlotProps,
} from "@cedar-design/ui-vue";

interface SchedulerEvent {
  id: string;
  title: string;
  start?: Date | string | number;
  end?: Date | string | number;
  allDay?: boolean;
  resourceIds?: string[];
  resourceDetails?: Record<string, { units?: number; role?: string }>;
  milestone?: boolean;
  layoutGroupId?: string;
  description?: string;
  color?: string;
  accentColor?: string;
  backgroundColor?: string;
  backgroundPattern?: "solid" | "diagonal-stripes" | "dots" | "crosshatch";
  metadata?: Record<string, unknown>;
  readonly?: boolean;
  resizable?: boolean; // false 禁用时间网格拉伸，仍可移动/查看
}
type SchedulerEventTemplate = Pick<
  SchedulerEvent,
  | "title"
  | "description"
  | "color"
  | "accentColor"
  | "backgroundColor"
  | "backgroundPattern"
  | "metadata"
  | "resourceIds"
> & {
  duration?: number; // 正数分钟，默认 default-duration 或 step
};
interface SchedulerResource {
  id: string;
  dimensionId?: string;
  label: string;
  color?: string;
  disabled?: boolean;
  capacity?: number; // 非负安全整数，省略不限制并发日程数
}
interface SchedulerResourceQuery {
  dimensionId?: string;
  query: string;
  cursor?: string;
  signal: AbortSignal;
}
interface SchedulerResourcePage {
  items: SchedulerResource[];
  nextCursor?: string;
}
type SchedulerRequestResources = (
  query: SchedulerResourceQuery,
) => SchedulerResourcePage | Promise<SchedulerResourcePage>;
type SchedulerResolveResources = (
  ids: string[],
  context: { signal: AbortSignal },
) => SchedulerResource[] | Promise<SchedulerResource[]>;
type SchedulerResourceErrorContext =
  | { type: "search"; query: string; cursor?: string; dimensionId?: string }
  | { type: "resolve"; ids: string[] };

type SchedulerEditorAction = "create" | "edit";
type SchedulerEditorRequest = { event: SchedulerEvent; readonly: boolean } & (
  | { action: "create"; source: "toolbar" | "cell" | "drop" | "duplicate" }
  | { action: "edit"; source: "event" }
);
interface SchedulerEditorSlotProps {
  action: SchedulerEditorAction;
  event: SchedulerEvent;
  error?: SchedulerError;
  errorMessage?: string;
  readonly: boolean;
  pending: boolean;
  save: (event?: SchedulerEvent) => void;
  remove: () => void;
  duplicate: () => void;
  close: () => void;
}
```

每条日程 id 必须唯一。start/end 同时省略表示未排期；否则 end 必须晚于 start；定时 milestone 例外，要求 start=end。所有区间为 `[start, end)`，前后相邻不冲突。allDay 为 true 时使用 `YYYY-MM-DD` 字符串，end 是不包含的结束日期（一天事项如 9 月 9 日至 9 月 10 日）。

当前按运行环境本地时区显示，定时日程建议传 ISO 时间点；没有任意 IANA 显示时区的承诺。跨时区 RRULE、ICS 与版本同步从独立 adapters 入口提供，真实外部账号连接需业务实现；虚拟资源行通过 virtual-list-props 配置。本地历史撤销与按范围远程加载见上方示例。指针拖拽支持移动与拉伸，Escape 取消；键盘与触屏也可通过编辑表单完成排期/分配修改。资源选项的 disabled 禁止新增分配与拖入，已存在的关联可保留或移除。


`before-transaction` 优先于 `before-change`，单项或批量事务只执行事务守卫；仅配置 `before-change` 时批量事务会以 `transaction-hook-required` 拒绝，避免部分保存。守卫数组按顺序执行，返回 false 取消，void 允许。等待结束后会重新检查数据和规则；过期提案不会提交。`change-error` 和 `transaction-error` 的第一个参数保留原始 cause（`unknown`），编辑器展示使用归一化的 `SchedulerError`。受控模式中，历史只记录父组件接受的变更；普通事件返回的 Promise 不参与事务。

`useSchedulerDataSource` 从根入口导出，接受 `requestEvents`、范围、资源 ID、`enabled`、缓存时长和容量；返回 `events`、`loading`、`error`、`loadedRange`、`refresh`、`cancel`、`invalidate`。它是独立数据源，`loading` 是返回的状态而不是 Scheduler 属性；请求使用 AbortSignal，并丢弃过期结果。

## 独立核心

可通过 `@cedar-design/ui-vue/scheduler/core` 使用不依赖 Vue 或 DOM 的日程计算工具：

```ts
import {
  applySchedulerChange,
  getSchedulerConflicts,
  layoutSchedulerEvents,
} from "@cedar-design/ui-vue/scheduler/core";
```

其余日期与时间线工具也从该入口导出。核心提供计算与不可变变更，不承担网络、权限认证或数据库事务。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-scheduler-axis-cell-width` | `96px` | `min-width` |
| `--c-scheduler-background` | `var(--c-color-bg-2)` | `background` |
| `--c-scheduler-border-color` | `var(--c-color-border)` | `border`, `border-bottom`, `border-inline-end`, `border-inline-start`, `border-top` |
| `--c-scheduler-border-width` | `1px` | `border`, `border-bottom`, `border-inline-end`, `border-inline-start`, `border-top`, `height`, `width` |
| `--c-scheduler-color` | `var(--c-color-text-1)` | `color` |
| `--c-scheduler-column-min-width` | `120px` | `grid-template-columns`, `min-width` |
| `--c-scheduler-dependency-width` | `2px` | `stroke-width` |
| `--c-scheduler-dragging-opacity` | `0.3` | `opacity` |
| `--c-scheduler-editor-width` | `440px` | 组件样式 |
| `--c-scheduler-event-accent-color` | `var(--c-scheduler-event-color)` | `border-inline-start` |
| `--c-scheduler-event-accent-width` | `3px` | `border-inline-start` |
| `--c-scheduler-event-background` | `var(--c-color-primary-light-1)` | `background`, `background-color`, `background-image` |
| `--c-scheduler-event-background-image` | `linear-gradient(var(--c-scheduler-event-background), var(--c-scheduler-event-background))` | `background-image` |
| `--c-scheduler-event-color` | `rgb(var(--c-primary-6))` | `background-image`, `border-inline-start`, `color` |
| `--c-scheduler-event-font-size` | `12px` | `font-size` |
| `--c-scheduler-event-gap` | `2px` | `gap`, `height`, `margin-bottom`, `padding`, `top` |
| `--c-scheduler-event-min-height` | `20px` | `min-height`, `min-width` |
| `--c-scheduler-event-padding` | `4px` | `padding` |
| `--c-scheduler-event-radius` | `4px` | `border-radius` |
| `--c-scheduler-focus-color` | `var(--c-sys-color-content-brand)` | `outline` |
| `--c-scheduler-focus-width` | `2px` | `outline`, `outline-offset` |
| `--c-scheduler-font-size` | `14px` | `font-size` |
| `--c-scheduler-gap` | `12px` | `gap`, `margin-bottom`, `padding` |
| `--c-scheduler-ghost-opacity` | `0.96` | `opacity` |
| `--c-scheduler-ghost-padding` | `8px 12px` | `padding` |
| `--c-scheduler-ghost-z-index` | `2000` | `z-index` |
| `--c-scheduler-gutter-width` | `64px` | `grid-template-columns`, `min-width` |
| `--c-scheduler-header-z-index` | `4` | `z-index` |
| `--c-scheduler-heading-height` | `44px` | `min-height` |
| `--c-scheduler-lane-height` | `38px` | `height`, `top` |
| `--c-scheduler-line-height` | `1.5` | `line-height` |
| `--c-scheduler-max-height` | `720px` | `max-height` |
| `--c-scheduler-min-height` | `560px` | `min-height` |
| `--c-scheduler-mode-width` | `150px` | `width` |
| `--c-scheduler-month-cell-height` | `124px` | `height`, `min-height` |
| `--c-scheduler-muted-color` | `var(--c-color-text-3)` | `color` |
| `--c-scheduler-now-color` | `var(--c-sys-color-content-danger)` | `border-top`, `color` |
| `--c-scheduler-now-width` | `2px` | `border-top` |
| `--c-scheduler-now-z-index` | `3` | `z-index` |
| `--c-scheduler-padding` | `16px` | `margin-bottom`, `padding` |
| `--c-scheduler-preview-duration` | `0ms` | `transition` |
| `--c-scheduler-preview-opacity` | `0.65` | `opacity` |
| `--c-scheduler-preview-shadow` | `0 4px 16px rgba(0, 0, 0, 0.15)` | `box-shadow` |
| `--c-scheduler-preview-z-index` | `3` | `z-index` |
| `--c-scheduler-radius` | `8px` | `border-radius` |
| `--c-scheduler-resize-height` | `6px` | `height`, `width` |
| `--c-scheduler-resource-width` | `150px` | `grid-template-columns`, `min-width`, `width` |
| `--c-scheduler-resource-z-index` | `2` | `z-index` |
| `--c-scheduler-selected-background` | `var(--c-color-primary-light-1)` | `background` |
| `--c-scheduler-sidebar-width` | `220px` | `width` |
| `--c-scheduler-slot-height` | `36px` | `height` |
| `--c-scheduler-stack-focus-step` | `1` | `z-index` |
| `--c-scheduler-subtle-background` | `var(--c-color-fill-1)` | `background` |
| `--c-scheduler-timeline-min-width` | `1000px` | `min-width` |
| `--c-scheduler-today-background` | `var(--c-color-primary-light-1)` | `background` |
| `--c-scheduler-today-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-scheduler-unavailable-background` | `var(--c-color-fill-2)` | `background` |
| `--c-scheduler-virtual-height` | `480px` | 组件样式 |
| `--c-scheduler-weekday-count` | `7` | `grid-template-columns` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-scheduler-background: var(--c-color-bg-2);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
