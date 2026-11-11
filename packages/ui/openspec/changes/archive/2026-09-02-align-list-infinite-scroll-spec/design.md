## Context

两端目前都使用 `List` 名称，但组件职责不一致：

- Cedar `List` 负责列表展示、`ListItem` 排版、整表 loading、最大高度、滚动条与虚拟列表，同时自行监听滚动并发出 `reachBottom`。
- Maple `List` 不负责列表展示，只在默认内容后放置探测器，根据 `loading / error / finished` 三个布尔值执行无限加载。

继续在 `List` 中叠加兼容 API 会让展示状态与分页状态混用，也无法形成跨端稳定契约。因此本变更按“展示与行为分离”重建边界。

## Goals / Non-Goals

**Goals:**

- 两端使用同名、同语义的展示型 `List` / `ListItem`。
- 两端使用同名、同状态机的行为型 `InfiniteScroll`。
- 让普通列表、整表 loading、分页 loading、失败重试、加载完成各自有唯一表达方式。
- 明确受控 `status` 下的事件顺序与内部防重锁，消除同一帧重复触发。
- 在 SSR、滚动容器变化、组件卸载、Tab 显隐、PullRefresh 和虚拟列表组合下保持可预测行为。
- 通过迁移文档完成直接 BREAKING 升级，不引入双 API。

**Non-Goals:**

- 不统一 Cedar 与 Maple 的具体 loading 动画、错误文案、完成文案、间距或颜色。
- 不把分页请求、数据拼接、错误捕获或完成判定内置到 `InfiniteScroll`；这些仍由调用方管理。
- 不让展示型 `List.loading` 兼任分页 loading。
- 不为旧 `List` API、事件、插槽、导出路径或样式类名提供 alias、re-export 或 shim。
- 本 change 只定义规范与实施任务，不修改任何组件实现。

## Decisions

### 1. 展示与无限加载拆成两个组件

`List` 只描述列表内容和布局，`InfiniteScroll` 只描述“何时请求下一页”及其分页状态。推荐组合形式为 `InfiniteScroll` 包裹 `List`，但 `InfiniteScroll` 的默认插槽不限制内容类型，因此也可包裹 Cell、Grid 或业务节点。

这一边界意味着：

- `List.loading` 表示整表首次加载或刷新。
- `InfiniteScroll.status === 'loading'` 表示分页请求进行中。
- Cedar 的 `List.bottomOffset`、`reachBottom`、`scroll-loading` 被删除。
- Maple 的旧 `List` 无限加载器整体改名为 `InfiniteScroll`，同时新建真正的展示型 `List`。

### 2. List 公共契约与 Cedar 扩展

两端公共 props 为：

- `data?: unknown[]`
- `size: 'sm' | 'md' | 'lg'`
- `bordered: boolean`
- `split: boolean`
- `loading: boolean`

两端公共 slots 为 `default`、`item({ item, index })`、`header`、`footer`、`empty`；`ListItem` 公共 slots 为 `prefix`、`default`、`suffix`。

内容优先级固定为：

1. 提供 `default` slot 时，渲染 `default`，忽略 `data` 与 `item` slot。
2. 未提供 `default` 且 `data` 非空时，按顺序为每项调用 `item({ item, index })`。
3. 未提供 `default` 且 `data` 为空或未提供时，在非 loading 的空态渲染 `empty`。

`header` 与 `footer` 独立于内容来源，提供即渲染。`loading=true` 的视觉表现允许 Cedar 与 Maple 分别采用遮罩、骨架或 Spin，但语义必须是“当前整张列表正在首次加载或刷新”，不得因此发出分页事件。首次加载且无内容时不应同时呈现空态。

Cedar 额外保留：

- `maxHeight: string | number`
- `virtualListProps`
- `scrollbar: boolean | ScrollbarProps`
- `scroll` 事件
- `scrollIntoView(options)` 方法

这些是端侧能力，不要求 Maple 制造空实现。Cedar `size` 收窄为 `sm | md | lg`，不保留 `xs`、`xl` 别名值。

### 3. 单一 status 取代多个布尔状态

`InfiniteScrollStatus` 定义为：

```ts
type InfiniteScrollStatus = 'idle' | 'loading' | 'error' | 'finished'
```

公共 props：

- `status: InfiniteScrollStatus`，支持 `v-model:status`，默认 `idle`
- `bottomOffset: string | number`，默认 `0`
- `immediate: boolean`，默认 `true`
- `disabled: boolean`，默认 `false`
- `target?: string | HTMLElement`

公共 events：`update:status`、`load`、`retry`。公共 slots：`default`、`loading`、`error`、`finished`；`error` slot 接收 `{ retry }`。公共暴露方法：`check()`、`retry()`。

相比三个布尔值，单一 `status` 排除了 `loading && error`、`error && finished` 等非法组合。`status` 是受控公开状态，组件通过 `update:status` 请求父级更新。

### 4. 状态机、事件顺序与同步内部锁

允许的状态迁移：

```text
idle ──触底/check──> loading ──外部更新──> idle
                         ├──────> error
                         └──────> finished

error ──retry──> loading
finished ──外部重置──> idle
```

加载触发必须按以下同步顺序发生：

1. 确认当前可加载：有效状态为 `idle`（重试时为 `error`）、未禁用、已到阈值且没有内部锁。
2. 立即设置同步内部锁，并将内部有效状态视为 `loading`。
3. 同步发出 `update:status('loading')`。
4. 同步发出 `load`。

父组件尚未完成 `v-model` 回写时，再次滚动、`ResizeObserver` 回调或调用 `check()` 都不得重复发出 `load`。外部把 `status` 从 `loading` 更新为 `idle`、`error` 或 `finished` 后，内部锁才按新状态释放或保持阻塞；如果父组件拒绝接受 `loading` 更新，组件仍保持锁定，避免请求风暴，直到外部显式给出后续状态变化。

`retry()` 仅在有效状态为 `error` 且未禁用时生效。它同步加锁、发出 `update:status('loading')`，随后发出一次 `retry`；重试不额外发出 `load`，避免同时监听两个事件时重复请求。默认 error 区点击调用 `retry()`；自定义 error slot 通过参数中的 `retry` 获得相同行为。

`finished` 为终态：滚动、尺寸变化、`check()` 与 `retry()` 均不触发加载。只有外部将 `status` 重置为 `idle` 后才恢复检测。

### 5. 阈值与 CSS length 解析

到达底部的判定以内容探测器底边与滚动视口底边之间的距离为准；距离小于等于 `bottomOffset` 时视为到达阈值。

- 数字值按 CSS px 解释。
- 字符串必须作为 CSS length 解析，支持浏览器可计算的合法长度单位，例如 `px`、`rem`、`em`、`vh`、`vw` 与 `calc(...)`。
- 禁止直接 `parseFloat` 后丢弃单位。
- 无法解析的字符串不得误触发提前加载，应按 `0px` 处理，并允许开发环境给出诊断。

换算依赖 DOM 时只在客户端挂载后执行；窗口尺寸、根字号或目标容器变化后应重新计算。

### 6. target 与最近滚动父级

`target` 是两端一致的可选 prop：

- `HTMLElement`：直接作为滚动容器。
- `string`：在客户端按 CSS selector 解析目标元素。
- 未提供：从 `InfiniteScroll` 根节点向上寻找最近可滚动父级；找不到元素滚动父级时使用页面滚动容器。

组件只在挂载后访问 `window`、`document`、`HTMLElement`、选择器或布局信息，SSR 渲染阶段不得抛错。`target` 变化、根节点重新挂载或滚动容器变化时，必须先移除旧容器监听及相关观察器，再绑定新容器；卸载时必须幂等清理全部监听、observer 和待执行任务。

`check()` 在未挂载、目标不可用或 SSR 环境中安全返回，不抛异常、不触发 `load`。

### 7. immediate、disabled 与自动检查

`immediate=true` 时，组件在客户端完成挂载与目标解析后执行一次 `check()`，用于首屏内容不足一屏时自动加载。`immediate=false` 时不执行这次初始检查，但后续滚动、显隐恢复、尺寸变化或调用方主动 `check()` 仍可检测。

`disabled=true` 时不触发加载或重试，但保留当前状态展示。由 `true` 变为 `false` 后应重新检查，以避免启用时内容仍不足一屏。

自动检查可以由滚动、受观察布局变化与组合组件的显隐恢复触发，但所有入口必须走同一个状态守卫和同步锁。

### 8. 组合约束

- **Tab**：隐藏 Tab 中不得因无效布局测量触发加载；Tab 重新激活后应安排一次 `check()`。两端可通过现有 Tab 注入能力或可见性/尺寸观察实现，不把 Tab 专有 prop 加入公共 API。
- **PullRefresh**：下拉刷新期间可设置 `disabled=true`；刷新完成后先重置数据与 `status='idle'`，再启用并调用 `check()`。`InfiniteScroll` 不接管 PullRefresh 状态。
- **Cedar 虚拟列表**：`List` 的虚拟滚动仍由 `virtualListProps` 管理。`InfiniteScroll.target` 应指向实际虚拟滚动容器，并以虚拟内容尾部探测器或等价可观察边界判断触底；数据或虚拟高度变化后重新 `check()`。不得恢复 Cedar `List.reachBottom` 形成第二套分页入口。
- **动态内容**：内容追加后若仍不足一屏，调用方把 `status` 置回 `idle` 后，尺寸观察或显式 `check()` 可继续加载下一页。

### 9. 端侧视觉允许不同，语义必须一致

两端可以使用不同 loading 动画、默认错误/完成文案和交互反馈，但必须满足：

- 只渲染与当前 `status` 对应的状态区。
- 默认 error 区可点击，并调用 `retry()`。
- 自定义 `error` slot 可使用传入的 `retry`。
- `List.loading` 不替代 `InfiniteScroll` 的 `loading` slot。
- 状态区不得自行修改业务数据或擅自判定 `finished`。

### 10. 不保留兼容层

本变更遵循组件库新 API 直接收口原则：

- Cedar 不保留 `List.bottomOffset`、`reachBottom`、`scroll-loading`。
- Maple 不保留旧无限加载器名 `List`，也不保留 `loading`、`error`、`finished`、`offset`、`immediateCheck`。
- 不新增 `offset` 作为 `bottomOffset` alias，不新增 `immediateCheck` 作为 `immediate` alias。
- 不为 Maple 旧 `list` 路径 re-export `InfiniteScroll`。
- 文档、示例、类型与测试只出现新契约。

## Risks / Trade-offs

- [组件名语义变化导致迁移面大] → 提供逐项迁移表，并要求仓库内 demo、文档、测试与业务引用全量搜索。
- [受控 status 未回写会保持锁定] → 这是有意的安全行为，避免重复请求；文档明确调用方必须处理 `update:status` 或使用 `v-model:status`。
- [CSS length 换算复杂] → 使用浏览器计算后的像素值，不以 `parseFloat` 猜测；SSR 阶段延迟计算。
- [虚拟列表的 DOM 高度不等于完整数据高度] → 明确 target 与尾部边界，数据变化后重新检查，不在 `List` 中恢复分页逻辑。
- [Tab 隐藏时测量为零] → 隐藏时跳过，激活后检查。
- [监听器泄漏或 target 改变后重复监听] → 所有绑定共用幂等 cleanup，测试 target 切换与卸载。

## Migration Plan

1. 先在两端新增 `InfiniteScroll` 公共契约与测试。
2. Cedar 删除 `List` 的分页能力，现有用例改为 `InfiniteScroll + List`。
3. Maple 将旧 `List` 无限加载器迁名并改为 status 状态机，再新增展示型 `List` / `ListItem`。
4. 更新两端入口、文档、示例与测试，确保旧 API 与旧导出全部消失。
5. 按 `MIGRATION.md` 迁移调用方，并重点验证 Tab、PullRefresh、SSR 与 Cedar 虚拟列表组合。
6. 运行两端组件测试、类型检查、构建与 OpenSpec 校验。

回滚应以整个 change 对应的实现提交为单位，不通过恢复 alias 做局部兼容。

## Open Questions

无。组件边界、公共 API、状态机、阈值语义、目标滚动容器与迁移策略均已确认。
