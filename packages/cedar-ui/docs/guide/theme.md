---
permalink: /guide/theme/
---

# 主题定制

文档已迁移至 [主题定制 /themes](/themes/)。

Cedar 与 Maple 对齐：

- `import { StyleProvider, Themes } from '@cedarjs/ui'`
- `StyleProvider.setStyleVars(Themes.default.dark)` 使用默认青绿色暗色主题
- `StyleProvider.setStyleVars(Themes.maple.light)` 使用枫叶亮色主题
- 两套主题都提供 `light` / `dark`
- 亦可用 `ConfigProvider` 的 `theme` 或直接改 DOM 属性
