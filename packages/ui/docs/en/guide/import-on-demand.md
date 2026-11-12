---
permalink: /en/guide/import-on-demand/
---

# Import on demand

This page covers automatic, manual and full imports, plus icons, directives, function APIs, types and styles. Start with [Quick start](/en/guide/quickstart/) if you have not installed the library.

## Automatic On-Demand Imports (Recommended)

Cedar maintains `@cedar-design/resolver-vue`. With `unplugin-vue-components`, components, standalone SVG icons, and component styles are imported on demand at build time.

```shell
npm i @cedar-design/resolver-vue unplugin-auto-import unplugin-vue-components -D
```

```ts
// vite.config.ts
import { CedarResolver } from '@cedar-design/resolver-vue'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [CedarResolver()],
    }),
    Components({
      resolvers: [CedarResolver()],
    }),
  ],
})
```

Components can then be used without local imports:

```html
<template>
  <c-button status="primary">Confirm</c-button>
  <c-icon size="40" color="red">
    <c-icon-info-circle-fill />
  </c-icon>
</template>
```

The resolver generates equivalent on-demand imports:

```ts
import { IconInfoCircleFill } from '@cedar-design/icons-vue/icon-info-circle-fill'
import { Button, Icon } from '@cedar-design/ui-vue'
import '@cedar-design/ui-vue/button/style'
import '@cedar-design/ui-vue/icon/style'
```

Standalone SVG icons inherit the wrapper color through `currentColor` and need no additional CSS. The `c-icon` wrapper itself requires `@cedar-design/ui-vue/icon/style`.

### Dynamic icon names

`<c-icon name="info-circle-fill" />` only looks up icons explicitly registered on the Vue application. Register the icons needed for dynamic names before mounting:

```ts
import { createApp } from 'vue'
import { IconInfoCircleFill, IconWarning } from '@cedar-design/icons-vue'
import App from './App.vue'

const app = createApp(App)
app.component('IconInfoCircleFill', IconInfoCircleFill)
app.component('IconWarning', IconWarning)
app.mount('#app')
```

Registering the entire icon collection with a namespace import loads all icons. Prefer explicit registration or static icon components for on-demand loading.

### Use SVG Icons Directly

Every SVG icon from `@cedar-design/icons-vue` is an independent Vue component and can be rendered without the `c-icon` wrapper:

```html
<script setup lang="ts">
  import { IconDelete, IconPlus, IconSearch, IconShareFill } from '@cedar-design/icons-vue'
</script>

<template>
  <!-- Direct SVG icons do not include application layout styles. -->
  <!-- Provide width, height, and spacing for the usage context. -->
  <IconPlus style="width: 1em; height: 1em; margin-right: 8px" />
  <IconShareFill style="width: 1em; height: 1em; margin-right: 8px" />
  <IconDelete style="width: 1em; height: 1em; margin-right: 8px" />
  <IconSearch style="width: 1em; height: 1em; margin-right: 8px" />
</template>
```

“Layout styles” means application-level `width`, `height`, and `margin`; icon components still support `size`, `color`, `rotate`, and `spin`. Direct usage is also tree-shakable. Use the `c-icon` wrapper when size, color, animation, layout, or the interaction area should be controlled consistently.

### Programmatic APIs

The same `CedarResolver()` shown above resolves APIs such as `Message`, `Dialog`, and `Notification` for `unplugin-auto-import`.

`importStyle` controls style imports for template components, the Icon wrapper, and programmatic APIs consistently. Set `CedarResolver({ autoImport: false })` only when programmatic API resolution should be disabled.

### Directives

The same `CedarResolver()` also resolves `v-c-loading` and `v-tooltip`. The loading directive uses the `c-` prefix to avoid collisions with directives from other component libraries. Set `directives: false` to disable directive resolution.

## Manual On-Demand Imports

```html
<script setup lang="ts">
  import { IconInfoCircleFill } from '@cedar-design/icons-vue/icon-info-circle-fill'
  import { Button } from '@cedar-design/ui-vue'
  import '@cedar-design/ui-vue/button/style'
</script>

<template>
  <Button status="primary">Confirm</Button>
  <IconInfoCircleFill :size="24" />
</template>
```

## Full Import

```ts
import { createApp } from 'vue'
import Cedar from '@cedar-design/ui-vue'
import '@cedar-design/ui-vue/style'
import App from './App.vue'

createApp(App).use(Cedar).mount('#app')
```

Standalone SVG icons are not globally registered by the UI package. Import them explicitly or use `CedarResolver()`.

## TypeScript

```json
{
  "include": ["src", "components.d.ts", "auto-imports.d.ts"]
}
```

Keep the existing entries in your TypeScript `include`; the plugins generate these declaration files from actual usage.

## Style imports

The resolver imports component styles by default. Disable this when the full stylesheet is already loaded:

```ts
CedarResolver({ importStyle: false })
```
