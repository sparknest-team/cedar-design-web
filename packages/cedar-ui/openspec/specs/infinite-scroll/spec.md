# infinite-scroll Specification

## Purpose
TBD - created by archiving change align-list-infinite-scroll-spec. Update Purpose after archive.
## Requirements
### Requirement: InfiniteScroll 公共状态类型

两端 SHALL 导出 `InfiniteScrollStatus = 'idle' | 'loading' | 'error' | 'finished'`。组件 SHALL 使用单一 `status` 表达分页状态，不得同时公开多个布尔分页状态。

#### Scenario: status 类型一致

- **WHEN** 检查 Cedar 与 Maple 的公开类型
- **THEN** 两端 `InfiniteScrollStatus` 都只包含 `idle`、`loading`、`error`、`finished`

#### Scenario: 不存在冲突布尔状态

- **WHEN** 检查 `InfiniteScroll` 公共 props
- **THEN** 不存在独立的 `loading`、`error`、`finished` 布尔 props

### Requirement: InfiniteScroll 公共 props

两端 `InfiniteScroll` SHALL 提供：

- `status: InfiniteScrollStatus`，支持 `v-model:status`，默认 `idle`
- `bottomOffset: string | number`，默认 `0`
- `immediate: boolean`，默认 `true`
- `disabled: boolean`，默认 `false`
- `target?: string | HTMLElement`

#### Scenario: 默认 props

- **WHEN** 未传 props 渲染 `InfiniteScroll`
- **THEN** `status` 为 `idle`
- **AND** `bottomOffset` 为 `0`
- **AND** `immediate` 为 `true`
- **AND** `disabled` 为 `false`

#### Scenario: v-model status

- **WHEN** 组件请求从 `idle` 进入 `loading`
- **THEN** 发出 `update:status`，值为 `loading`
- **AND** 使用方可通过 `v-model:status` 接收更新

### Requirement: InfiniteScroll 公共 slots

两端 `InfiniteScroll` SHALL 提供 `default`、`loading`、`error`、`finished` slots。组件 SHALL 渲染 `default` 内容，并只渲染与当前 status 对应的状态区。

#### Scenario: loading slot

- **WHEN** `status='loading'`
- **THEN** 在默认内容后渲染 `loading` slot 或端侧默认 loading 区
- **AND** 不渲染 error 或 finished 状态区

#### Scenario: error slot 参数

- **WHEN** `status='error'` 且使用方提供 `error` slot
- **THEN** slot props 包含可调用的 `retry`
- **AND** 调用该函数与调用组件暴露的 `retry()` 行为一致

#### Scenario: finished slot

- **WHEN** `status='finished'`
- **THEN** 渲染 `finished` slot 或端侧默认完成区
- **AND** 不再自动触发 load

### Requirement: InfiniteScroll 公共事件与方法

两端 SHALL 发出 `update:status`、`load`、`retry` events，并暴露 `check()` 与 `retry()` methods。

#### Scenario: check 主动检查

- **WHEN** 调用 `check()`，组件已挂载、未禁用、有效状态为 `idle` 且已到阈值
- **THEN** 触发一次标准加载流程

#### Scenario: check 条件不满足

- **WHEN** 调用 `check()`，但未到阈值、组件未挂载、目标不可用、已禁用或状态不是 `idle`
- **THEN** 安全返回
- **AND** 不发出 `load`

### Requirement: 状态机限制

`InfiniteScroll` SHALL 只允许以下加载相关迁移：`idle → loading → idle | error | finished` 与 `error → loading`。`finished` SHALL 保持终态，直到外部将 `status` 重置为 `idle`。

#### Scenario: idle 触底进入 loading

- **WHEN** 有效状态为 `idle` 且到达阈值
- **THEN** 请求迁移到 `loading`

#### Scenario: loading 由外部完成

- **WHEN** 当前状态为 `loading`
- **THEN** 组件等待外部将 status 更新为 `idle`、`error` 或 `finished`
- **AND** 组件不自行判断请求结果或修改业务数据

#### Scenario: finished 阻止所有自动加载

- **WHEN** `status='finished'`
- **THEN** 滚动、布局变化与 `check()` 均不触发 `load`

#### Scenario: 外部重置 finished

- **WHEN** 外部将 `status` 从 `finished` 重置为 `idle`
- **THEN** 后续 `check()` 可再次按阈值触发加载

### Requirement: 加载前同步更新状态并加锁

每次标准加载流程 MUST 在发出 `load` 前，同步设置内部锁并同步发出 `update:status('loading')`。内部有效状态 MUST 立即视为 `loading`，不得等待父组件回写。

#### Scenario: 事件顺序

- **WHEN** `idle` 状态首次到达阈值
- **THEN** 同步设置内部锁
- **AND** 先发出 `update:status('loading')`
- **AND** 后发出一次 `load`

#### Scenario: 父级尚未回写时重复检查

- **WHEN** 第一次加载事件已发出，但父组件尚未将 `status` 回写为 `loading`
- **AND** 同一帧再次收到滚动、observer 回调或 `check()` 调用
- **THEN** 不再次发出 `update:status` 或 `load`

#### Scenario: 外部完成后允许下一次加载

- **WHEN** 外部先接受 `loading`，随后将 `status` 更新回 `idle`
- **THEN** 内部锁释放
- **AND** 下一次满足阈值的检查可发出新一轮 load

#### Scenario: 父级拒绝状态更新

- **WHEN** 组件已请求 `loading`，但外部未进行任何 status 状态变化
- **THEN** 内部锁保持
- **AND** 不持续重复发出 load

### Requirement: 错误重试

`retry()` SHALL 仅在有效状态为 `error` 且 `disabled=false` 时启动重试。重试 SHALL 同步进入内部 loading、发出 `update:status('loading')`，再发出一次 `retry`，且不得额外发出 `load`。默认 error 区 MUST 可点击并调用 `retry()`。

#### Scenario: 点击默认错误区

- **WHEN** `status='error'` 且用户点击默认 error 区
- **THEN** 同步发出 `update:status('loading')`
- **AND** 发出一次 `retry`
- **AND** 不发出 `load`

#### Scenario: 自定义错误区重试

- **WHEN** `status='error'` 且自定义 error slot 调用参数中的 `retry`
- **THEN** 行为与点击默认错误区一致

#### Scenario: 非 error 状态调用 retry

- **WHEN** `status` 为 `idle`、`loading` 或 `finished` 时调用 `retry()`
- **THEN** 不发出 `retry`
- **AND** 不发出 `load`

### Requirement: bottomOffset 单位语义

`bottomOffset` 为数字时 SHALL 按 px 解释；为字符串时 MUST 作为 CSS length 解析为当前客户端环境中的像素值，不得直接丢弃单位。

#### Scenario: 数字阈值

- **WHEN** `bottomOffset=24`
- **THEN** 在距底部小于等于 `24px` 时满足加载阈值

#### Scenario: CSS length 阈值

- **WHEN** `bottomOffset` 为合法的 `2rem`、`10vh` 或 `calc(1rem + 8px)` 等 CSS length
- **THEN** 按浏览器当前计算值换算为 px 后判断阈值

#### Scenario: 字符串单位不得丢失

- **WHEN** `bottomOffset='2rem'`
- **THEN** 不得将其简单解释为 `2px`

#### Scenario: 非法 CSS length

- **WHEN** `bottomOffset` 字符串无法解析为 CSS length
- **THEN** 按 `0px` 阈值处理
- **AND** 不因解析结果为非数字而误触发提前加载

### Requirement: target 与滚动容器解析

`target` SHALL 在两端作为可选公共 prop 接受 CSS selector 字符串或 `HTMLElement`。未提供时，组件 SHALL 使用最近滚动父级；不存在元素滚动父级时使用页面滚动容器。

#### Scenario: HTMLElement target

- **WHEN** `target` 是可用 HTMLElement
- **THEN** 监听该元素滚动并以其视口计算阈值

#### Scenario: selector target

- **WHEN** `target` 是可解析到 HTMLElement 的 CSS selector
- **THEN** 在客户端挂载后解析并监听该元素

#### Scenario: 自动发现最近滚动父级

- **WHEN** 未提供 `target`
- **THEN** 从组件根节点向上寻找最近可滚动父级
- **AND** 以该容器计算阈值

#### Scenario: target 动态变化

- **WHEN** `target` 从容器 A 变为容器 B
- **THEN** 先移除 A 上的监听与关联 observer
- **AND** 只在 B 上保留一套监听与 observer

### Requirement: SSR 安全与资源清理

组件 MUST 在 SSR 渲染期间避免访问 `window`、`document`、`HTMLElement`、DOM selector 与布局 API。所有滚动监听、observer 与待执行检查 MUST 在 target 变化和卸载时幂等清理。

#### Scenario: 服务端渲染

- **WHEN** 在无 DOM 全局对象的服务端渲染 `InfiniteScroll`
- **THEN** 渲染不抛异常
- **AND** 不尝试解析 target 或读取布局

#### Scenario: SSR 期间调用 check

- **WHEN** 在未挂载或无 DOM 环境调用 `check()`
- **THEN** 安全返回且不触发 load

#### Scenario: 卸载清理

- **WHEN** 组件已绑定滚动监听与 observer 后卸载
- **THEN** 移除全部监听、observer 与待执行任务
- **AND** 重复执行 cleanup 不抛异常

#### Scenario: 卸载后旧回调到达

- **WHEN** 卸载前排队的异步检查在卸载后执行
- **THEN** 不读取已销毁节点
- **AND** 不发出状态或加载事件

### Requirement: immediate 行为

`immediate=true` 时，组件 SHALL 在客户端挂载并完成滚动容器解析后执行一次初始 `check()`；`immediate=false` 时 SHALL 跳过该次初始检查。

#### Scenario: 首屏不足自动加载

- **WHEN** `immediate=true`、status 为 `idle`，且初始内容未填满滚动视口
- **THEN** 挂载后触发一次加载流程

#### Scenario: 关闭初始检查

- **WHEN** `immediate=false`
- **THEN** 挂载完成本身不触发 load
- **AND** 后续滚动或主动调用 `check()` 仍可触发

### Requirement: disabled 行为

`disabled=true` 时，组件 SHALL 阻止自动加载与重试，但保持当前内容及状态区展示。由 `true` 变为 `false` 后 SHALL 安排一次检查。

#### Scenario: disabled 阻止加载

- **WHEN** `disabled=true` 且到达阈值
- **THEN** 不发出 `update:status`、`load` 或 `retry`

#### Scenario: 重新启用

- **WHEN** `disabled` 从 `true` 变为 `false`，且 status 为 `idle`
- **THEN** 重新检查当前阈值

### Requirement: Tab 组合

`InfiniteScroll` SHALL 在隐藏 Tab 中避免基于无效布局触发加载，并在所属 Tab 重新激活后执行检查。

#### Scenario: 隐藏 Tab

- **WHEN** `InfiniteScroll` 所在 Tab 处于非激活状态
- **THEN** 不因零尺寸或失真布局触发 load

#### Scenario: Tab 重新激活

- **WHEN** 所属 Tab 从隐藏变为激活
- **THEN** 在布局可测量后执行一次 `check()`
- **AND** 仍受 status、disabled 与内部锁约束

### Requirement: PullRefresh 组合

`InfiniteScroll` SHALL 能与 `PullRefresh` 组合，且不接管其刷新状态。调用方可在刷新期间通过 `disabled` 暂停分页，并在刷新完成后重置为 `idle` 再检查。

#### Scenario: 下拉刷新期间暂停分页

- **WHEN** PullRefresh 开始刷新且调用方设置 `disabled=true`
- **THEN** 滚动与尺寸变化不触发分页 load

#### Scenario: 刷新后恢复分页

- **WHEN** 调用方替换数据、将 `status` 重置为 `idle` 并设置 `disabled=false`
- **THEN** `InfiniteScroll` 重新检查内容是否填满视口
- **AND** 内容仍不足时可加载下一页

### Requirement: Cedar 虚拟列表组合

`InfiniteScroll` SHALL 能与 Cedar `List.virtualListProps` 组合。检测 MUST 基于实际虚拟滚动容器及代表数据尾部的可观察边界，数据或虚拟高度变化后 SHALL 重新检查。

#### Scenario: 指定虚拟滚动 target

- **WHEN** `InfiniteScroll` 包裹 Cedar 虚拟 `List`，且 `target` 指向实际虚拟滚动容器
- **THEN** 以该容器视口判断是否接近数据尾部

#### Scenario: 虚拟数据追加

- **WHEN** load 后追加数据、虚拟内容高度变化且外部将 status 置回 `idle`
- **THEN** 重新检查尾部边界
- **AND** 若仍不足一屏，可触发下一轮 load

#### Scenario: 不恢复 List 分页入口

- **WHEN** 使用虚拟 `List` 与 `InfiniteScroll`
- **THEN** 分页事件只由 `InfiniteScroll` 发出
- **AND** Cedar `List` 不提供 `reachBottom`

### Requirement: Maple 旧无限加载 API 被移除

Maple SHALL 将旧 `List` 无限加载器迁为 `InfiniteScroll`，并移除旧 `loading`、`error`、`finished`、`offset`、`immediateCheck` props 及 `update:error`、`update:loading` events。不得保留别名、旧路径 re-export 或 shim。

#### Scenario: 新旧 props 不并存

- **WHEN** 检查 Maple `InfiniteScroll` props 与类型
- **THEN** 存在 `status`、`bottomOffset`、`immediate`
- **AND** 不存在 `loading`、`error`、`finished`、`offset`、`immediateCheck`

#### Scenario: 新旧事件不并存

- **WHEN** 检查 Maple `InfiniteScroll` emits
- **THEN** 存在 `update:status`、`load`、`retry`
- **AND** 不存在 `update:error`、`update:loading`

#### Scenario: 旧 List 路径不转发 InfiniteScroll

- **WHEN** 检查 Maple 组件入口与 `list` 模块
- **THEN** `List` 只导出展示型组件
- **AND** 不从旧 `list` 路径 re-export 或安装 `InfiniteScroll`

