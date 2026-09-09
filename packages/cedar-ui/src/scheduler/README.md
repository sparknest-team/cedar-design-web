---
permalink: /components/scheduler/
---

# Scheduler 日程调度

原生 Vue 日程调度组件。资源是可选关联，可表示人员、设备、会议室，也可完全不使用。内置 Cedar 编辑器与资源筛选，日期计算、重叠布局、分配和校验独立于 Vue。现有 Calendar 继续负责轻量日期展示与选择。

## 案例

### 基础用法

日、周、月、议程切换；未排期日程可以拖到时间网格。

<demo src="./__demos__/basic.vue"></demo>

### 不关联资源的计划

只管理日期与时间，不需要准备人员列表；没有资源、查询回调或关联 ID 时，侧栏和编辑器自动隐藏资源选择。

<demo src="./__demos__/without-resources.vue"></demo>

### 设备排期与工单

相同资源 API 用于设备，无人员字段依赖。示例包括工单拖入、双设备联合占用、全天维护、只读日程及本地重叠校验。`resource-label` 自定义显示名称，不改变存储字段。

<demo src="./__demos__/equipment.vue"></demo>

### 异步目录、分页与 ID 回显

示例可切换设备接口和人员接口。仅提供当前 4 条可见资源，而已有日程关联第 12 条，通过 `resolve-resources` 单独回显。打开资源下拉框后远程搜索、滚动或点击加载更多；搜索结果不会添加资源视图的行/列。可模拟搜索与回显失败，查看 ID 保留及重试。

<demo src="./__demos__/async-resources.vue"></demo>

日程只保存 `resourceIds`；`id` 是稳定标识，`label` 是显示名称。业务层把 `userId/displayName`、`deviceId/deviceName` 等接口字段映射为 `{ id, label }`。不要把名称当 ID，也不要为了回显把全量目录放进 `resources`。

| 数据入口 | 职责 |
| --- | --- |
| resources | 当前资源视图的行/列及本地候选项，可以是部分目录；同 ID 时优先于缓存 |
| request-resources | 远程搜索与游标分页，返回候选项，不修改可见行/列 |
| resolve-resources | 根据已有 ID 批量加载名称，不依赖当前搜索页 |
| before-change | 对接服务端有效性、权限、全量冲突与保存校验 |

```ts
import type { SchedulerRequestResources, SchedulerResolveResources } from '@cedarjs/ui'

const requestResources: SchedulerRequestResources = async ({ query, cursor, signal }) => {
  const params = new URLSearchParams({ query })
  if (cursor !== undefined) params.set('cursor', cursor)
  const response = await fetch(`/api/devices?${params}`, { signal })
  if (!response.ok) throw new Error('设备查询失败')
  const page = await response.json()
  return {
    items: page.items.map((item) => ({ id: String(item.deviceId), label: item.deviceName })),
    nextCursor: page.nextCursor, // 没有下一页时省略；游标使用非空字符串
  }
}

const resolveResources: SchedulerResolveResources = async (ids, { signal }) => {
  const response = await fetch('/api/devices/by-ids', {
    method: 'POST', signal,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ids }),
  })
  if (!response.ok) throw new Error('设备回显失败')
  const items = await response.json()
  return items.map((item) => ({ id: String(item.deviceId), label: item.deviceName }))
}
```

同一实例缓存回显结果，并合并请求中的重复 ID；不在实例之间共用数据。搜索更换关键词会取消旧请求，即使接口未响应取消信号也忽略过期结果。切换 `resolve-resources` 回调会清空回显缓存；切换租户/目录建议给 Scheduler 设置不同 `key`，隔离搜索结果、缓存和编辑草稿。

回显查不到或失败时保留原 ID 并用 ID 显示，不会清空日程关联或禁止保存。失败触发 `resource-error`；可通过提示按钮或重新打开选择器重试。远程请求只影响资源控件的加载状态，不使用 Scheduler 的 `loading` 锁住整个日程。

当前未加载的资源不等于无效资源。已知 `disabled` 的资源不能新增分配，已有关联可保留/移除；保存期间新增分配的资源变为禁用会阻止保存，但目录翻页、补全名称不会使保存过期。`allow-overlap=false` 仅检查已加载日程，全量冲突和权限必须由服务端校验。

### 多人分配

一条日程可关联多人。拖到另一人员列时只替换拖出列的人员，其他参与者保留；时间变更影响这条日程的所有参与者。需要每个人独立时间时，创建不同 id 的日程，用同一 taskId 关联。

<demo src="./__demos__/resources.vue"></demo>

### 自定义卡片拖入新增

左侧卡片通过 `sidebar-extra` 插槽自定义，不需要提前写入日程数据。绑定原生 `dragstart` 到 `startDrag(template, $event)`，`dragend` 到 `cancelDrag`。
拖入日/周/资源时间格识别准确时刻和目标资源；月格与全天行生成一天的全天日程；资源时间线识别日期和资源，以 `start-hour` 为开始时间。议程视图没有拖入目标。
落下后打开内置编辑弹层，确认才新增，取消不保存，模板可重复使用。`duration` 为正数分钟，省略时使用 `step`；全天落点忽略分钟时长。目标资源优先于模板的 `resourceIds`。
只读、禁用、加载、提交中或内置编辑器已打开时不可拖入。`editable=false` 时拖入改为触发 `editor-request`，交由外部页面确认。保存复用 `before-change`、冲突校验和受控更新逻辑。此示例使用桌面原生拖拽，触屏及键盘用户仍可用工具栏新增入口。

<demo src="./__demos__/custom-cards.vue"></demo>

### 资源时间线

按资源显示一周排期，按占用日期展示日程，跨天日程连续展示，同一天的日程分层排列；精确时分请看资源日程视图。拖放到日期格保留原开始时分。

<demo src="./__demos__/timeline.vue"></demo>

### 异步保存

before-change 返回 false 取消，抛错或拒绝 Promise 会触发 change-error 并保留原数据。期间组件禁止重复变更。如果外部数据或权限变化，旧提案失效。服务端仍需原子校验权限、版本和资源冲突。

<demo src="./__demos__/async-change.vue"></demo>

### 自定义日程与只读

插槽提供展示内容；外层已经是可聚焦按钮，插槽内避免嵌套交互控件。只读仍能打开详情。

<demo src="./__demos__/custom-event.vue"></demo>

### 自定义新建 / 编辑表单

`editor` 插槽替换内置 Drawer 的内容，`action` 区分 `create` / `edit`。`event` 是隔离草稿，可修改其字段；`save(event)` 提交完整日程，`save()` 提交当前自定义草稿。不得修改草稿 ID。二者都保留校验和 `before-change`，成功才自动关闭；取消不会写入数据。

`error` 是结构化 SchedulerError，`errorMessage` 是当前语言的显示文案，包含内置字段校验或保存失败。自定义内容负责显示错误并根据 `readonly` / `pending` 禁用控件。`save` 是触发提交的动作，不返回成功 Promise；需要等待结果请使用实例 `change()`。`remove()` 在新建模式下无效。

<demo src="./__demos__/custom-editor.vue"></demo>

### 完全自定义弹窗 / 页面

设置 `editable=false` 后，工具栏新增、空白格点击、卡片拖入和已有日程点击统一通过 `editor-request` 交给业务方。组件不打开内置 Drawer，也不自动保存。`request.event` 已带生成的 ID、日期/时间和资源；`source` 标明来源，`readonly` 用于只读详情。

<demo src="./__demos__/external-editor.vue"></demo>

业务方可以使用 Dialog、独立路由或其他表单。确认时调用 `change({ type: request.action === 'create' ? 'create' : 'update', event })`，等待返回 `true` 后关闭；返回 `false` 时保留表单，可监听 `change-error` 显示错误。删除已有日程使用 `type: 'remove'`。

只绑定 `editor-request` 来打开外部表单，不要再通过 `cell-click` / `event-click` 打开一次。内置编辑模式不触发 `editor-request`。工具栏和拖入不是格子点击，不触发 `cell-click`。

外部页面自己管理取消、重复打开、提交中禁止关闭、卸载后的响应和编辑快照/版本。示例拒绝覆盖已打开的窗口，并在提交前比对打开时的数据；Scheduler 的 `change()` 只检查提交过程中的并发变化，不代替业务页面打开期间的版本校验。真正跨路由的表单还需自行持久化草稿并对接服务端，不能在 Scheduler 卸载后继续调用旧实例。

## API

### `<c-scheduler>` Props

| 属性              | 说明                                    | 类型                                            | 默认值   |
| ----------------- | --------------------------------------- | ----------------------------------------------- | -------- |
| model-value       | 日程数据，支持 v-model；传入时受控      | SchedulerEvent[]                                | —        |
| default-value     | 非受控初始数据                          | SchedulerEvent[]                                | []       |
| mode              | 当前视图，支持 v-model:mode             | SchedulerMode                                   | —        |
| default-mode      | 非受控默认视图                          | SchedulerMode                                   | week     |
| date              | 定位日期，支持 v-model:date             | Date / string / number                          | —        |
| default-date      | 初始定位日期                            | Date / string / number                          | 当前日期 |
| resources         | 当前可见资源行/列及本地选项，不要求全量目录 | SchedulerResource[]                          | []       |
| resource-label    | 资源字段名称，如设备、会议室             | string                                          | 语言包“资源” |
| request-resources | 按关键词和游标查询候选资源               | SchedulerRequestResources                       | —        |
| resolve-resources | 按 ID 批量补全名称                       | SchedulerResolveResources                       | —        |
| modes             | 允许切换的视图                          | SchedulerMode[]                                 | 全部六种 |
| first-day-of-week | 周起始，0 周日至 6 周六                 | number                                          | 1        |
| start-hour        | 时间网格起始小时，0–23                  | number                                          | 8        |
| end-hour          | 时间网格结束小时，必须大于起始，最多 24 | number                                          | 20       |
| step              | 时间格及吸附分钟，正整数且整除 60       | number                                          | 30       |
| readonly          | 可查看和导航，不能修改                  | boolean                                         | false    |
| disabled          | 禁用交互                                | boolean                                         | false    |
| loading           | 数据加载中，禁止修改                    | boolean                                         | false    |
| show-sidebar      | 显示筛选和未排期列表                    | boolean                                         | true     |
| allow-overlap     | 允许同资源时间重叠                      | boolean                                         | true     |
| editable          | 启用内置编辑器；false 通过 editor-request 接管 | boolean                                  | true     |
| before-change     | 返回 false 取消；异步拦截、保存接口     | SchedulerBeforeChange / SchedulerBeforeChange[] | —        |

mode 为 `day | week | month | agenda | resource-day | resource-timeline`。agenda 与资源时间线按周导航。超出时间网格小时范围的日程仍可在月/议程/时间线查看。

model-value 受控时，组件只提出新值，由父组件接受后更新界面；不会在接口失败后先移动再回滚。组件不修改输入数组或对象。before-change 得到分离副本，修改副本不会修改提交值。

### `<c-scheduler>` Events

| 事件               | 说明                                     | 参数                          |
| ------------------ | ---------------------------------------- | ----------------------------- |
| update:model-value | 提出新主值                               | SchedulerEvent[]              |
| update:mode        | 视图切换                                 | SchedulerMode                 |
| update:date        | 定位日期变更                             | Date                          |
| change             | 校验和钩子完成；受控时表示已提出通过的值 | value, SchedulerChangeContext |
| change-error       | 校验、冲突、保存或过期提案错误           | error, SchedulerChange        |
| event-click        | 点击日程（传出副本）                     | SchedulerEvent                |
| cell-click         | 点击空白时段                             | SchedulerCell                 |
| range-change       | 首次与实际可见日期范围变化               | SchedulerRange                |
| resource-error     | 资源搜索或回显失败，不修改日程数据       | error, SchedulerResourceErrorContext |
| editor-request     | 仅 editable=false：请求外部新建或查看/编辑 | SchedulerEditorRequest |

### `<c-scheduler>` Slots

| 插槽            | 参数                                              | 说明                                                                                          |
| --------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| event           | { event }                                         | 日程按钮内容                                                                                  |
| sidebar-extra   | { startDrag, cancelDrag, disabled }                | 左侧顶部自定义内容；startDrag(template: SchedulerEventTemplate, event: DragEvent)，show-sidebar=false 时不显示 |
| resource-header | { resource?, date }                               | 资源标题或日期标题                                                                            |
| toolbar-extra   | { date, mode }                                    | 工具栏扩展                                                                                    |
| editor          | SchedulerEditorSlotProps | 自定义抽屉内容：action、event、error、errorMessage、save、remove、close、readonly、pending |
| empty           | —                                                 | 空状态                                                                                        |
| loading         | —                                                 | 加载状态                                                                                      |

### 实例方法

| 方法                             | 说明                                                      |
| -------------------------------- | --------------------------------------------------------- |
| `change(change): Promise<boolean>` | 执行 create/update/remove/move/resize，复用全部校验与钩子 |
| goToDate(date: Date)             | 定位日期；遵循受控模型                                    |

## 类型定义

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
  SchedulerEventTemplate,
  SchedulerRequestResources,
  SchedulerResolveResources,
  SchedulerResourcePage,
  SchedulerResourceQuery,
  SchedulerResourceErrorContext,
  SchedulerEditorRequest,
  SchedulerEditorAction,
  SchedulerEditorSlotProps,
} from "@cedarjs/ui";

interface SchedulerEvent {
  id: string;
  title: string;
  start?: Date | string | number;
  end?: Date | string | number;
  allDay?: boolean;
  resourceIds?: string[];
  taskId?: string;
  description?: string;
  color?: string;
  readonly?: boolean;
}
type SchedulerEventTemplate = Pick<SchedulerEvent, "title" | "description" | "color" | "taskId" | "resourceIds"> & {
  duration?: number; // 正数分钟，默认 step
};
interface SchedulerResource {
  id: string;
  label: string;
  color?: string;
  disabled?: boolean;
}
interface SchedulerResourceQuery {
  query: string;
  cursor?: string;
  signal: AbortSignal;
}
interface SchedulerResourcePage {
  items: SchedulerResource[];
  nextCursor?: string;
}
type SchedulerRequestResources = (query: SchedulerResourceQuery) => SchedulerResourcePage | Promise<SchedulerResourcePage>;
type SchedulerResolveResources = (ids: string[], context: { signal: AbortSignal }) => SchedulerResource[] | Promise<SchedulerResource[]>;
type SchedulerResourceErrorContext =
  | { type: 'search'; query: string; cursor?: string }
  | { type: 'resolve'; ids: string[] };

type SchedulerEditorAction = 'create' | 'edit';
type SchedulerEditorRequest = { event: SchedulerEvent; readonly: boolean } & (
  | { action: 'create'; source: 'toolbar' | 'cell' | 'drop' }
  | { action: 'edit'; source: 'event' }
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
  close: () => void;
}
```

每条日程 id 必须唯一。start/end 同时省略表示未排期；否则 end 必须晚于 start。所有区间为 `[start, end)`，前后相邻不冲突。allDay 为 true 时使用 `YYYY-MM-DD` 字符串，end 是不包含的结束日期（一天事项如 9 月 9 日至 9 月 10 日）。

当前按运行环境本地时区显示，定时日程建议传 ISO 时间点；没有任意 IANA 显示时区的承诺。跨时区重复规则、虚拟资源行、实时协作、历史撤销与外部同步尚不在本次公共 API 中。指针拖拽支持移动与拉伸，Escape 取消；键盘与触屏也可通过编辑表单完成排期/分配修改。资源选项的 disabled 禁止新增分配与拖入，已存在的关联可保留或移除。

## 独立核心

源码 `src/scheduler/core` 不导入 Vue、DOM 或外部日历库，可单独测试及后续提取为 scheduler-core 包。发布后可直接使用纯核心子入口，避免导入组件运行时：

```ts
import {
  applySchedulerChange,
  getSchedulerConflicts,
  layoutSchedulerEvents,
} from "@cedarjs/ui/scheduler/core";
```

其余日期与时间线工具也从该入口导出。核心提供计算与不可变变更，不承担网络、权限认证或数据库事务。

### 样式变量

所有变量集中于 `style/token.less`，支持亮暗主题覆盖。

| 变量名                         | 默认值                         |
| ------------------------------ | ------------------------------ |
| --c-scheduler-background       | var(--c-color-bg-2)            |
| --c-scheduler-color            | var(--c-color-text-1)          |
| --c-scheduler-border-color     | var(--c-color-border)          |
| --c-scheduler-sidebar-width    | 220px                          |
| --c-scheduler-slot-height      | 36px                           |
| --c-scheduler-column-min-width | 120px                          |
| --c-scheduler-max-height       | 720px                          |
| --c-scheduler-event-color      | rgb(var(--c-primary-6))        |
| --c-scheduler-event-background | var(--c-color-primary-light-1) |
| --c-scheduler-lane-height      | 38px                           |
