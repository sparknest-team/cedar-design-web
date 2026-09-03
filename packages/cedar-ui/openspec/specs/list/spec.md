# list Specification

## Purpose
TBD - created by archiving change align-list-infinite-scroll-spec. Update Purpose after archive.
## Requirements
### Requirement: List 是展示型组件

两端 `List` SHALL 只负责列表内容与布局展示，不负责触底检测或分页状态管理。分页加载 MUST 由 `InfiniteScroll` 组合提供。

#### Scenario: List 单独使用不触发分页

- **WHEN** 使用方渲染 `List` 并滚动其内容
- **THEN** `List` 不发出 `load` 或 `reachBottom` 类分页事件
- **AND** 不根据滚动位置修改任何分页状态

#### Scenario: 组合 InfiniteScroll

- **WHEN** 使用方需要展示列表并在触底时加载下一页
- **THEN** 使用 `InfiniteScroll` 包裹 `List` 或将二者连接到同一实际滚动容器
- **AND** `List` 继续只负责展示，`InfiniteScroll` 负责分页状态与触发

### Requirement: List 公共 props

两端 `List` SHALL 提供以下公共 props：

- `data?: unknown[]`
- `size: 'sm' | 'md' | 'lg'`
- `bordered: boolean`
- `split: boolean`
- `loading: boolean`

两端默认值 SHALL 一致：`size='md'`、`bordered=true`、`split=true`、`loading=false`。

#### Scenario: 默认 props 一致

- **WHEN** 两端均未传入 List props
- **THEN** `size` 为 `md`
- **AND** `bordered` 与 `split` 为 `true`
- **AND** `loading` 为 `false`

#### Scenario: size 使用统一枚举

- **WHEN** 检查两端公开 `List` 类型
- **THEN** `size` 只接受 `sm`、`md`、`lg`
- **AND** 不接受 Cedar 旧值 `xs`、`xl`

#### Scenario: bordered 与 split 独立控制

- **WHEN** `bordered=false` 且 `split=true`
- **THEN** 不显示列表外边框
- **AND** 仍显示列表项之间的分割线

### Requirement: List 公共 slots

两端 `List` SHALL 提供 `default`、`item`、`header`、`footer`、`empty` slots。`item` slot 的参数 SHALL 为 `{ item, index }`，其中 `item` 对应 `data[index]`。

#### Scenario: data 驱动 item slot

- **WHEN** 未提供 `default` slot，传入 `data=[a, b]` 并提供 `item` slot
- **THEN** 按数组顺序调用两次 `item` slot
- **AND** 参数分别为 `{ item: a, index: 0 }` 与 `{ item: b, index: 1 }`

#### Scenario: header 与 footer 独立渲染

- **WHEN** 同时提供 `header`、列表内容和 `footer`
- **THEN** 渲染顺序为 header、列表内容、footer
- **AND** 内容由 `default` 还是 `data + item` 产生不影响 header/footer

### Requirement: default slot 优先于 data

当 `default` slot 与 `data` 同时提供时，`List` MUST 渲染 `default` slot，并忽略 `data` 驱动的 `item` slot，避免重复内容。

#### Scenario: default 与 data 同时提供

- **WHEN** 提供非空 `data`、`default` slot 与 `item` slot
- **THEN** 只渲染 `default` slot 内容
- **AND** 不调用 `item` slot

#### Scenario: 未提供 default 时使用 data

- **WHEN** 未提供 `default` slot，但提供非空 `data` 与 `item` slot
- **THEN** 使用 `data` 调用 `item` slot

### Requirement: 空态渲染

未提供 `default` slot，且 `data` 未提供或为空数组时，`List` SHALL 在 `loading=false` 时渲染 `empty` slot。

#### Scenario: 空数据渲染 empty

- **WHEN** `data=[]`、`loading=false`，并提供 `empty` slot
- **THEN** 渲染 `empty` slot

#### Scenario: 未传 data 渲染 empty

- **WHEN** 未提供 `default` slot 与 `data`，且 `loading=false`
- **THEN** 渲染 `empty` slot

#### Scenario: 首次 loading 不同时显示 empty

- **WHEN** 无可展示内容且 `loading=true`
- **THEN** 展示整表 loading 视觉
- **AND** 不同时展示空态

### Requirement: loading 表示整表加载

`List.loading` SHALL 仅表示整张列表正在首次加载或刷新。两端 MAY 使用不同的遮罩、Spin、骨架或其他视觉，但语义 MUST 一致，且不得把它用作分页 loading 状态。

#### Scenario: 刷新已有内容

- **WHEN** 已有列表内容且 `loading=true`
- **THEN** 保留或覆盖内容的具体视觉可由端侧决定
- **AND** 对外语义始终是整表刷新
- **AND** 不发出分页 `load` 事件

#### Scenario: 分页 loading 使用 InfiniteScroll

- **WHEN** 调用方正在请求下一页
- **THEN** 使用 `InfiniteScroll.status='loading'`
- **AND** 不要求将 `List.loading` 设为 `true`

### Requirement: ListItem 公共 slots

两端 `ListItem` SHALL 提供 `prefix`、`default`、`suffix` slots，并按 prefix、default、suffix 的语义顺序组织内容。List 内容容器 SHALL 使用 `role="list"`，ListItem 根节点 SHALL 使用 `role="listitem"`。

#### Scenario: 渲染三段内容

- **WHEN** 同时提供 `prefix`、`default`、`suffix`
- **THEN** 三段内容均被渲染
- **AND** 主内容位于 prefix 与 suffix 之间
- **AND** ListItem 根节点带 `role="listitem"`

#### Scenario: 只渲染默认内容

- **WHEN** 只提供 `default` slot
- **THEN** 不生成有业务内容的 prefix 或 suffix 区域

### Requirement: Cedar List 端侧扩展

Cedar `List` SHALL 额外支持 `maxHeight`、`virtualListProps`、`scrollbar` props、`scroll` event 与 `scrollIntoView` method。Maple 不要求提供这些能力或空实现。

#### Scenario: maxHeight 限制滚动区域

- **WHEN** Cedar `List` 设置 `maxHeight`
- **THEN** 列表内容区域在超过最大高度后可滚动
- **AND** 数字值按 px 解释

#### Scenario: virtualListProps 开启虚拟列表

- **WHEN** Cedar `List` 提供 `virtualListProps`
- **THEN** 使用 Cedar 的虚拟列表能力渲染 `data`
- **AND** 仍遵守 `default` slot 优先于 `data` 的规则

#### Scenario: scroll 事件

- **WHEN** Cedar `List` 的实际滚动容器发生滚动
- **THEN** 发出 `scroll` 事件
- **AND** 不发出 `reachBottom`

#### Scenario: scrollIntoView

- **WHEN** 调用 Cedar `List.scrollIntoView(options)`
- **THEN** 列表按既有 `options` 契约滚动到目标项
- **AND** 该方法不触发或管理分页状态

### Requirement: Cedar 旧分页 API 被移除

Cedar `List` MUST 移除 `bottomOffset` prop、`reachBottom` event 与 `scroll-loading` slot，不得提供别名或兼容分支。

#### Scenario: 公共类型不含旧 API

- **WHEN** 检查 Cedar `List` props、emits、slots 类型与文档
- **THEN** 不存在 `bottomOffset`、`reachBottom`、`scroll-loading`

#### Scenario: 旧 API 无兼容导出

- **WHEN** 检查 Cedar `List` 实现与入口
- **THEN** 不存在将旧分页 API 转发至 `InfiniteScroll` 的 shim、alias 或重复实现

### Requirement: Maple 提供新的展示型 List

Maple SHALL 将旧无限加载器从 `List` 迁为 `InfiniteScroll`，并在 `List` 名称下提供满足本规范的展示型组件及 `ListItem`。

#### Scenario: Maple List 语义已切换

- **WHEN** 使用 Maple 的 `List`
- **THEN** 获得展示型列表契约
- **AND** 不再获得旧无限加载行为

#### Scenario: Maple 不伪造 Cedar 扩展

- **WHEN** 检查 Maple `List` 公共 API
- **THEN** 不因跨端对齐而新增无实现意义的 `maxHeight`、`virtualListProps`、`scrollbar`、`scrollIntoView`

