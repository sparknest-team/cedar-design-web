---
permalink: /
home: true
heroText: Cedar Design Web
tagline: Vue 3 + Arco Design
actions:
  - text: 快速上手
    link: /guide/quickstart/
    type: primary
features:
  - title: Arco Design
    details: 基于 Arco Design 进行二次封装的组件库
  - title: Vue
    details: 以 Vue 3 作为框架支撑
  - title: Vite + Vuepress
    details: 使用 Vite 作为项目的构建和打包工具，利用 Vuepress 开发组件文档
---

```shell
yarn add @cedar-design/ui@1.x
```

## 本地构建

在仓库根目录执行 `pnpm build:lib` 构建 npm 包，`pnpm build:doc` 构建文档，`pnpm build` 依次构建两者，与 Maple 保持一致。
