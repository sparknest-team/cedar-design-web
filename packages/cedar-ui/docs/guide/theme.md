---
permalink: /guide/theme/
---

# 主题定制

使用 [ThemeProvider](/components/theme-provider/) 统一管理应用根部和局部主题；ConfigProvider 不提供 theme。

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

只切换默认亮暗模式时传入 theme="light" 或 theme="dark"。品牌预设传给 theme，额外定制放在 style-vars。嵌套 Provider 可替换主题，库内弹层继承所属 Provider，不需要修改 html。内置预设见[主题预设](/themes/)。
