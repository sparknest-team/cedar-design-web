## Why

Cedar 的默认插槽在 `loading=true` 时渲染，与 Maple 及常见 Skeleton 组件语义相反，业务内容会直接出现在加载态，看起来像骨架屏失效。两端同时存在“组合式占位”和“内置文章占位”两套互不兼容的 API。

## What Changes

- **BREAKING**：Cedar 默认插槽改为加载完成内容，自定义加载模板统一使用 `template` 插槽，删除 `content` 插槽。
- 两端统一内置 `title/avatar/card/rows/fullscreen` 配置和 `animation` 开关。
- 两端统一提供 `SkeletonLine`、`SkeletonShape` 及 `Skeleton.Line/Shape`。
- 修复 Cedar Line 的非响应式 props 计算，并补齐类型、文档和契约测试。

## Impact

- Cedar：`src/skeleton/**`。
- Maple：`packages/ui/src/skeleton/**` 及公共导出。
