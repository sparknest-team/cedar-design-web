---
'@cedar-design/cli-vue': minor
'@cedar-design/ui-vue': minor
---

构建工具链统一到 Node 26 / pnpm 10，与 Maple、design-ui 保持同一套运行时：

- `engines.node` 下限 20 → `>=26.13.1`，`.nvmrc` / `.node-version` / `.npmrc use-node-version` / Volta 全部固定 26.13.1
- pnpm `9.6.0` → `10.23.0`：pnpm 10 不再读 `package.json` 的 `pnpm` 字段，`pnpm.overrides` 与 `patchedDependencies` 全部迁到 `pnpm-workspace.yaml`；否则 `@sparknest/*` 的 `link:` 覆盖会静默失效、VuePress 补丁不再应用
- 新增 `onlyBuiltDependencies`（`@parcel/watcher` / `core-js` / `esbuild` / `loca-boot-*`）：pnpm 10 默认拦截依赖的安装脚本，需显式放行
- `pnpm-lock.yaml` 按 pnpm 10 重新归一化：`overrides` 段补齐工作区级覆盖、`patchedDependencies` 哈希改为 sha256；解析结果与版本号不变
