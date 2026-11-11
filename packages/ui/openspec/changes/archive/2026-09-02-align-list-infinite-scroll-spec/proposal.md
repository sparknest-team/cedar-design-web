## Why

当前 Cedar Design Web 与 Maple Design Mobile 对 `List` 的职责定义相反：Cedar 的 `List` 是展示列表，但同时包含 `bottomOffset`、`reachBottom` 与 `scroll-loading` 等触底加载能力；Maple 的 `List` 则完全是一个无限加载器，缺少跨端一致的展示型列表。相同组件名承载不同语义，导致类型、文档、组合方式与业务迁移都无法统一。

本次变更将两端组件收敛为两个职责单一的组件：展示型 `List` 与行为型 `InfiniteScroll`。这是直接 BREAKING 调整，不保留旧 prop、事件、插槽、导出路径或组件别名。

## What Changes

- 两端新增并统一展示型 `List`：
  - 公共 props：`data?: unknown[]`、`size: 'sm' | 'md' | 'lg'`、`bordered`、`split`、`loading`。
  - 公共 slots：`default`、`item({ item, index })`、`header`、`footer`、`empty`。
  - `ListItem` 公共 slots：`prefix`、`default`、`suffix`。
  - 当 `default` slot 与 `data` 同时提供时，`default` slot 优先；`loading` 仅表达整表首次加载或刷新，不表达分页加载。
  - Cedar 保留端侧扩展：`maxHeight`、`virtualListProps`、`scrollbar`，以及 `scroll` 事件、`scrollIntoView` 方法。
- 两端新增并统一行为型 `InfiniteScroll`：
  - `InfiniteScrollStatus = 'idle' | 'loading' | 'error' | 'finished'`。
  - props：`status`（支持 `v-model:status`，默认 `idle`）、`bottomOffset`（`string | number`，默认 `0`）、`immediate`（默认 `true`）、`disabled`（默认 `false`）、可选公共 `target?: string | HTMLElement`。
  - events：`update:status`、`load`、`retry`。
  - slots：`default`、`loading`、`error`、`finished`；`error` slot 参数包含 `retry`。
  - methods：`check()`、`retry()`。
- `InfiniteScroll` 使用明确状态机：`idle → loading → idle | error | finished`、`error → loading`；`finished` 是终态，直到外部显式重置为 `idle`。
- 触发加载前同步发出 `update:status('loading')`，并同步设置内部锁，避免受控父组件回写前重复触发 `load`。
- 未提供 `target` 时监听最近滚动父级；提供时，字符串解析为选择器目标，元素值直接使用。SSR 期间不得访问 DOM，挂载后才解析并监听，目标变化与卸载时必须安全清理。
- 数字 `bottomOffset` 按 px 解释；字符串必须按 CSS length 解析，不得用 `parseFloat` 忽略单位。
- 默认错误区可点击重试；组合场景覆盖 `Tab`、`PullRefresh`、Cedar 虚拟列表与动态内容。
- **BREAKING（Cedar）**：从 `List` 移除 `bottomOffset` prop、`reachBottom` 事件与 `scroll-loading` slot，滚动加载迁至 `InfiniteScroll`。
- **BREAKING（Maple）**：旧 `List` 无限加载器迁为 `InfiniteScroll`；旧 `loading`、`error`、`finished`、`offset`、`immediateCheck` 迁到新状态契约，并新建展示型 `List` / `ListItem`。
- 不保留旧别名 prop、旧事件、旧导出、旧路径 re-export 或 shim。

## Capabilities

### New Capabilities

- `list`：定义两端统一的展示型列表与列表项契约，并明确 Cedar 虚拟列表、滚动条与命令式滚动扩展。
- `infinite-scroll`：定义两端统一的无限滚动检测、状态机、阈值、目标滚动容器、重试及组合场景契约。

### Modified Capabilities

（无 —— 当前 `openspec/specs/` 尚无 `list` 或 `infinite-scroll` 基线规范。）

## Impact

- **Cedar 代码范围**：后续实现将调整 `src/list/`，新增 `src/infinite-scroll/`，并同步入口导出、样式、测试、README 与 demos。
- **Maple 代码范围**：后续实现将把现有 `src/list/` 无限加载行为迁至 `src/infinite-scroll/`，重新实现展示型 `src/list/` 与 `ListItem`，并同步入口导出、样式、测试、文档与示例。
- **API**：两端均有 BREAKING 变更；尤其 Cedar `List` 不再负责触底加载，Maple `List` 不再代表无限加载器。
- **组合行为**：需要验证 SSR、监听清理、显隐切换、下拉刷新与虚拟列表内容变化后的重新检查。
- **依赖**：不要求新增三方依赖；CSS length 可通过浏览器计算样式能力安全换算。
