---
permalink: /components/style-provider/
---

## StyleProvider 样式定制

### 介绍

通过 StyleProvider 挂载 CSS 变量，支持 **组件式** 与 **函数式** 两种调用。与 Maple 用法一致，变量前缀使用 `--c-*`。

全局主题切换（亮 / 暗 / 主题包）见 [主题定制](/themes/)。

### 组件式调用

局部定制子树内的样式变量。经 `teleport` 传送到 `StyleProvider` 外的节点不会生效。

```vue
<template>
  <c-style-provider :style-vars="styleVars">
    <c-button type="primary" @click="toggle">切换主色</c-button>
  </c-style-provider>
</template>

<script setup>
import { ref } from 'vue'

const custom = {
  '--c-brand-6': '0, 190, 190',
}

const styleVars = ref(null)

function toggle() {
  styleVars.value = styleVars.value ? null : custom
}
</script>
```

### 函数式调用

直接更新 `:root` 上的样式变量，适合全局定制；传入 `Themes.dark` 等主题包时会同步 `html[cedar-theme]`：

```ts
import { StyleProvider, Themes } from '@cedarjs/ui'

StyleProvider(Themes.dark)
StyleProvider(Themes.md3Light)
StyleProvider(null) // 移除注入并恢复亮色
```

详情见 [主题定制](/themes/)。
### API

#### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `style-vars` | CSS 变量 | `Record<string, string>` | `{}` |
| `tag` | 自定义标签名 | `string` | `div` |

#### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 组件内容 | `-` |
