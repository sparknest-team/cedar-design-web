# Loading / Result 轻量反馈组件同源

## Why

Cedar 与 Maple 的 `Loading` 、`Result` 已具备相同的基础职责，但默认 DOM、状态图形、插槽名和扩展 API 仍不一致。目前业务在两端复用时需要分支处理，且 `dot` / `element` / `image` / `footer` 与已有能力重叠，会继续扩大最终 API。

## What Changes

- 统一 `Loading` 的默认渲染、包裹内容加载态、指示器尺寸与 `tip` 插槽。
- **BREAKING**：删除 `Loading.dot`，点状加载不再作为与 `type` 并行的布尔分支；删除 `element` 插槽，自定义指示器统一使用 `icon`。
- 保留并同步 `Loading.hideIcon`，支持只显示提示文案的加载态。
- 统一 `Result` 的全部状态图形、默认布局和空内容渲染规则。
- `Result` 最终插槽统一为 `icon` / `title` / `subtitle` / `extra` / `default`，**BREAKING** 删除 Maple 的 `image` / `footer` 旧插槽。
- 将 Maple 有独立价值的 `Result.imageSize` 和 `Result.animation` 纳入两端最终 API。
- 两端各自保留组件注册、图标资源、CSS 前缀和主题 token 等平台适配。

## Impact

- Cedar：`src/loading/**`、`src/result/**`。
- Maple：`packages/ui/src/loading/**`、`packages/ui/src/result/**`。
- 两端的公共类型、指令选项、Demo、文档、测试与同源检查。

## Non-goals

- 不合并 `LoadingBar`、`Empty`、`Skeleton` 或全局命令式反馈服务。
- 不跨仓库引用源码，不建立运行时共享包。
- 不保留旧 Prop / 插槽 alias，不增加弃用警告分支。
