---
permalink: /guide/start/
---

## 安装

### 安装依赖

::: code-tabs#shell
@tab yarn

```bash:no-line-numbers
# yarn
$ yarn add @cedar/ui
```

@tab npm

```bash:no-line-numbers
# npm
$ npm install @cedar/ui
```

:::

### 引入样式

暂不支持按需引入样式。

```typescript
import '@cedar/ui/dist/index.css'
```

### 使用指令

如果不是完成引入组件，想要全局使用指令则需要全局注册指令。

```typescript
import { Tooltip, Spin } from '@cedar/ui'

app.directive('loading', Spin.directive)
app.directive('tooltip', Tooltip.directive)
```

### 完整引入

完整引入会全局注册指令。

```typescript
import { createApp } from 'vue'
import Cedar from '@cedar/ui'
import App from './App.vue'
import '@cedar/ui/dist/index.css'

const app = createApp(App)
app.use(Cedar)
app.mount('#app')
```
