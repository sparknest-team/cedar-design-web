# Cedar Resolver

Resolves known `C`-prefixed Cedar components, `CIcon*` icons, supported directives and explicit function APIs for `unplugin-vue-components` and `unplugin-auto-import`.

`src/component-names.json` contains the UI root's public `_XxxComponent` aliases. The registry is bundled into the resolver; it does not import the UI runtime or scan consumer files. Update it when adding/removing public components. `pnpm test` checks the registry against actual TypeScript root exports and verifies style entries.

Unknown names return `undefined`, including browser globals such as `CSS`, `CSSStyleSheet`, `CustomEvent` and `Cache`. A `C` prefix alone is not sufficient evidence of a library component.

Regression tests also run the docs workspace's real auto-import plugin over `size-length.ts`, with declaration generation disabled. Run `pnpm test` and `pnpm typecheck` in this package. After rebuilding the resolver, restart an already-running docs dev server to reload its Vite configuration.

## 显式具名导入自动样式（Vite）

与 MapleStyleImports 对齐：CedarStyleImports 使用 resolver 的样式映射，在 Vue/TypeScript 编译后为显式具名值导入补样式。支持组件、Message、Notification、Dialog、Drawer、ImagePreviewFn/previewImage/imagePreview 及别名；去重，跳过类型、命名空间、默认导入和无样式工具。importStyle:false 可关闭。

```ts
import { CedarResolver, CedarStyleImports } from '@cedar-design/resolver-vue'

// Vite plugins 数组（不是 resolvers 数组）：
plugins: [
  vue(),
  CedarStyleImports(),
  Components({ resolvers: [CedarResolver()] }),
  AutoImport({ resolvers: [CedarResolver()] }),
]
```

页面仅需 `import { Message } from '@cedar-design/ui-vue'`，无需手动引入样式。Cedar 文档站已内置该插件；更新后需重启文档开发服务。两端分别维护插件源码，不共享运行时实现。
