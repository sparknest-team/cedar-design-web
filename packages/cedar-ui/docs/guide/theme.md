---
permalink: /guide/theme/
---

# 主题定制

文档已迁移至 [主题定制 /themes](/themes/)。

Cedar 与 Maple 对齐：

- `import { StyleProvider, Themes } from '@cedarjs/ui'`
- `StyleProvider.setStyleVars(Themes.dark)` 同步 `html[cedar-theme=dark]`
- `StyleProvider.setStyleVars(null)` 恢复亮色
- 另有 `Themes.md3Light` / `Themes.md3Dark` 品牌覆盖包
- 亦可用 `ConfigProvider` 的 `theme` 或直接改 DOM 属性
