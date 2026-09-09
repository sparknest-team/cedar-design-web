# 构建命令

Cedar 与 Maple 使用相同的命令名称。建议在各自仓库根目录执行，使用 pnpm 9.6.0。

| 命令 | 用途 |
| --- | --- |
| `pnpm build:lib` | 构建 npm 组件包及构建链中的依赖包，不构建文档、不发布 |
| `pnpm build:doc` | 仅构建文档站点 |
| `pnpm build` | 先构建 npm 包，再构建文档；包构建失败时不会继续构建文档 |
| `pnpm dev` | 启动文档开发服务 |

在 `packages/cedar-ui` 内同样支持这三个构建命令，但包构建仅处理当前 UI 包，不预先构建工作区依赖；首次构建优先使用根目录命令。没有额外的构建别名。

文档继续使用 VuePress，产物位于 `packages/cedar-ui/dist`。npm 包继续使用 Cedar CLI。命令统一不代表两端共用构建实现。辅助包的专用构建、发布命令保持原有职责。
