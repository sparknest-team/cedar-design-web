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

## 文档开发与性能

- `pnpm preview` 使用独立 Vite preview 配置预览 VuePress 的 `dist`，不加载库构建配置或启动 Histoire。先执行 `pnpm build:doc`；子路径部署时使用与构建一致的 `FX_BASE`。
- dev/build 默认不写自动导入的 ESLint 配置和声明文件。确需重新生成时，以 `CEDAR_DOCS_GENERATE_TYPES=1 pnpm dev` 显式开启。
- 示例映射在初始化完成时汇总一次，开发期页面变化才刷新；HMR 按源页面去重。
- 示例源码高亮按内容及语言复用，缓存字符串估算容量最多 32 MiB，按最近使用顺序淘汰。源码修改会自然失效，不复用旧高亮。
- 示例源码及高亮 HTML 不再内嵌在 demo 页面的 Vue 模板属性中，改为按内容哈希生成 `__demo-sources/*.json`；展开或复制源码时读取，中文与英文复用同一资源。dev 使用内存资源路由，build 输出静态 JSON，不开放任意本地文件读取。
- 生产构建使用 `.temp-build`，与 dev 的 `.temp` 隔离，避免同时运行时互相覆盖页面文件。
- 非 iframe 交互示例通过 VuePress `ClientOnly` 在浏览器挂载，不在静态生成时执行交互组件；说明正文保持静态输出。这不是组件库通用 SSR 能力的验证。
- 中英文页面仍完整生成。根目录只收录 README 和 CHANGELOG，不将 AGENTS 工作指令作为网站页面。
- 针对性回归：`pnpm --filter @cedarjs/ui exec vitest run --config vitest.docs.config.ts`。

上述优化不等于已证明所有内存溢出问题解决；完整文档构建的结果需单独验证。

### 本轮验证（2026-09-10）

- 9 项文档插件回归测试通过，覆盖初始化批处理、高亮缓存、应用隔离、HMR、源码资源输出与访问边界、请求复用和失败重试，以及页面模板不再内嵌源码。
- 新增源码资源工具的独立 TypeScript 检查通过；生产预览中的 Scheduler 正常挂载，展开源码后成功读取并显示源码，无加载错误。
- 完整 `pnpm build:doc` 在 Node 23.9.0 默认堆上限下通过，耗时约 109 秒，生成 254 个页面；未提高内存上限，未再出现本轮 OOM 或示例 SSR 的 `_push2` 异常。未单独测量峰值内存。
- 表格页面生成的 Vue 文件由约 1.8 MB 降至 74 KB；产物包含 713 个有效源码 JSON 资源，总计约 11 MB，源码展示与复制功能保留。
- 仍有非阻断警告：`practices/ai-collaboration.md` 中指向仓库 AGENTS 和 Copilot 指令的链接无法作为站内页面解析。
