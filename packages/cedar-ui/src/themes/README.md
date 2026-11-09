---
permalink: /themes/
---

# 主题预设

使用 ThemeProvider 统一管理应用根部和局部区域的主题。theme 控制 light/dark，style-vars 接收品牌预设或自定义变量；不修改 html。

## 内置主题

| 品牌 | 亮色 | 暗色 |
| --- | --- | --- |
| 默认青绿色 | Themes.default.light | Themes.default.dark |
| 枫叶 | Themes.maple.light | Themes.maple.dark |

## 基础示例

### 预设切换

<demo src="./__demos__/toggle.vue"></demo>

## 使用

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Themes } from '@cedar-design/ui'
const mode = ref<'light' | 'dark'>('dark')
</script>
<template>
  <c-theme-provider :theme="Themes.maple[mode]">
    <App />
  </c-theme-provider>
</template>
```

省略 style-vars 时使用默认色板，省略 theme 时继承外层。显式变量覆盖的优先级高于模式默认值。局部与嵌套、弹层、SSR 及变量规则见 [ThemeProvider](/components/theme-provider/)。

## CSS Variables

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

完整色阶见 [色板 Palette](/components/palette/)，语义工具类见 [颜色 Color](/components/style/color/)。

<!-- component-css-variables:start -->

本组件未声明独立的公共 CSS 变量。请使用本页公开的配置与布局入口。

内部自定义属性与测量中间值属于实现细节，不作为业务定制 API。

<!-- component-css-variables:end -->
