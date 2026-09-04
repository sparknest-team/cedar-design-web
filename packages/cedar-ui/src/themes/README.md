---
permalink: /themes/
---

# 主题定制

### 介绍

Cedar 色板与 Maple 结构对齐：**RGB 通道色阶** + **语义色** + **组件 token**。

- 色阶：`--c-primary-6: r, g, b`，用法 `rgb(var(--c-primary-6))` / `rgba(var(--c-primary-6), 0.12)`
- 语义：`--c-color-text-1`、`--c-color-bg-*`、`--c-color-fill-*` 等
- 暗色：根节点属性 `cedar-theme="dark"` 整表覆盖（CSS `:root[cedar-theme=dark]`）
- 覆盖 / 多主题包：用 [StyleProvider](/components/style-provider/) + `Themes`

设计 token：`style/theme/css-variables.less`、`style/color/css-variables.less`。

### 内置主题包

| 主题名称 | 主题包 | 说明 |
| --- | --- | --- |
| 默认亮色 | CSS `:root` | 色阶 + 语义 |
| 暗色 | `Themes.dark` 或 DOM / ConfigProvider | 与 `:root[cedar-theme=dark]` 对齐 |
| MD3 亮色 | `Themes.md3Light` | StyleProvider 注入品牌色覆盖 |
| MD3 暗色 | `Themes.md3Dark` | StyleProvider 注入 + DOM dark |

### StyleProvider 切换

`StyleProvider(Themes.dark)` 会同步设置 `html[cedar-theme=dark]`；`StyleProvider(null)` 移除属性并恢复默认。与 Maple 一致。

```vue
<template>
  <c-space>
    <c-button status="primary" @click="StyleProvider(null)">亮色</c-button>
    <c-button status="primary" @click="StyleProvider(Themes.dark)">暗色</c-button>
    <c-button status="primary" @click="StyleProvider(Themes.md3Light)">MD3 亮色</c-button>
    <c-button status="primary" @click="StyleProvider(Themes.md3Dark)">MD3 暗色</c-button>
  </c-space>
</template>

<script setup>
import { StyleProvider, Themes } from '@cedarjs/ui'
</script>
```

<demo src="./__demos__/toggle.vue"></demo>

### ConfigProvider 切换

```vue
<template>
  <c-config-provider :theme="theme">
    <App />
  </c-config-provider>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('light') // 'light' | 'dark'
</script>
```

`theme` 同步到根节点 `cedar-theme`（`light` 时移除）。取值可用 `cedarThemes`：`['light', 'dark']`。

### DOM 切换暗色

```ts
document.documentElement.setAttribute('cedar-theme', 'dark')
document.documentElement.removeAttribute('cedar-theme')
```

### 设置 body

```css
body {
  transition: background-color 0.25s, color 0.25s;
  color: var(--c-color-text);
  background-color: var(--c-color-body);
  color-scheme: var(--c-color-scheme);
}
```

### 主题定制

```ts
import { StyleProvider, Themes } from '@cedarjs/ui'

const customTheme = {
  ...Themes.md3Light,
  '--c-brand-6': '255, 0, 0',
}

StyleProvider(customTheme)
```

### 与文档站同步

文档站监听 `html[data-theme]`，并映射到 `cedar-theme`，切换 VuePress 主题时组件预览会一并切换。

### 通用样式变量（节选）

| 变量名 | 说明 |
| --- | --- |
| `--c-primary-1` … `--c-primary-10` | 主色阶（映射 brand） |
| `--c-brand-1` … `--c-brand-10` | Brand 色阶 |
| `--c-success-*` / `--c-danger-*` / `--c-warning-*` / `--c-link-*` | 功能色阶 |
| `--c-gray-1` … `--c-gray-10` | 中性色阶 |
| `--c-color-text-1` … `--c-color-text-4` | 文本语义（`c-text-1` … `c-text-4`） |
| `--c-color-bg-1` … `--c-color-bg-5` | 背景语义 |
| `--c-color-fill-1` … `--c-color-fill-4` | 填充语义 |
| `--c-color-border-1` … `--c-color-border-4` | 边框语义 |
| `--c-color-scheme` / `--c-color-body` / `--c-color-text` | 主题切换 / body |

完整色阶见 [色板 Palette](/components/palette/)，语义工具类见 [颜色 Color](/components/color/)。
