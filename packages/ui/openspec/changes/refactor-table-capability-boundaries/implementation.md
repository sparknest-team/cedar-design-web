# 首批实施记录

日期：2026-11-19。范围：建立兼容/体积基线，提取列宽分配和冻结偏移计算；尚未提供轻量公共入口，也未迁移 Maple。

## 实现边界

- `src/table/kernel/column-widths.ts`：纯宽度分配，接收最小列输入，返回宽度映射、溢出状态和有序写回记录；不修改输入。保留 fit、零宽初始化、像素取整、操作列占宽和钉死列规则。
- `src/table/kernel/frozen-columns.ts`：纯数据列和操作列冻结偏移，保留 auto/fixed 宽度优先级、物理 left/right、RTL、分组叶子边界，以及既有操作列名称/引用身份差异。
- `hooks/use-columns-layout.ts`：保留旧函数和返回结构，映射 Cedar 的扩展列身份与钉死策略，再按原顺序写回 `_realWidth`。
- `utils.ts`：只把原冻结计算函数接到内核；保留调用方、样式返回和子组件配合方式。

本次未更改 Table 的 props/emits/index/types/方法声明、主组件调度或测量/滚动生命周期。没有引入公共插件 API 或运行时新依赖。两个内核文件不 import Vue、DOM 或 Cedar 组件。

## 兼容证据

先在原实现运行 353 个现有 Table 测试，再捕获兼容快照。新增四个运行时契约测试保护导出、42 个 props、23 个事件、8 个方法、子组件身份、setup 实例字段、事件顺序与 raw 行身份，以及宽度/冻结场景输出；另新增五个纯内核测试检查已冻结输入、像素分配、溢出、auto 测量优先级、操作列和依赖边界。

原始列宽和 utils 源码另以只读参照保存在 `artifacts/table-layout-refactor/original-layout/`，其 SHA-256 与最初生产快照匹配。差分测试直接提取原计算函数，对照 800 组列宽/写回和 600 组冻结场景。它不依靠更新 UI 集成快照来接受新算法，也不复制一份手写算法作为 oracle。

生产基线工具在临时目录复制源码，调用相同的 `buildLibrary`，生成 ESM/CJS、声明及样式，再从真实包 exports 消费 `table` 和 `table/style`。记录 runtime API、SSR HTML、Table 相关发布声明、实际传递依赖与 minified/gzip/brotli 字节数；比较时验证工具版本和锁文件一致。临时构建不会清理工作区的 es/lib/types。

## 并行改动隔离

实施期间工作区另有 TableColGroup、Table 样式、Demo、分组表头投影和测试快照的并行修复。这些改动保留，未作为本次布局提取的实现内容。

最初的 `before/after` 是这些修复介入前的成功对比，完整入口 JS gzip 从 120455 增至 120682 字节（+227，约 0.19%），CSS gzip 均为 30913 字节。

最终使用 `release-before/release-after` 再验证最新上下文：只在临时副本中移植原列宽函数和三个原冻结函数及私有助手，保留当前分组投影、组件及样式。非布局 utils 使用 AST 归一化参与上下文指纹，其余生产输入也参与指纹；上下文不匹配就失败，不能把并行修复造成的变化归因于重构。初始快照不会被新结果覆盖。

工具链明确固定 UI 包的 vue-tsc 及其 TypeScript peer，避免根目录 shim 绑定另一版 TypeScript。最终报告同时记录 TypeScript 与声明编译器实际使用的版本；声明编译器 peer 不一致会在构建前失败。

最终匹配上下文的 gzip 结果（字节，Vue/@vue/shared external，包含 table/style）：

| 消费样例 | 原布局 JS | 新内核 JS | 原/新 CSS |
| --- | ---: | ---: | ---: |
| 完整导出 | 120474 | 120706 | 30943 / 30943 |
| 基础 props | 120469 | 120703 | 30943 / 30943 |
| 冻结列 props | 120481 | 120714 | 30943 / 30943 |

完整入口增加 232 字节（约 0.19%），未超过参照 1% 的预算。两种模块格式的运行时 API/SSR、既有 Table 发布声明比较通过。最终 Table 测试 363/363 通过（包含并行新增的分组用例），运行前后 Table 实现与测试输入指纹相同；结果保存于 `release-after/tests.json`。原算法差分与正反门禁共 11 个 Node 测试通过。

## 复跑

仓库根目录执行：

```sh
pnpm check:table-layout
pnpm --dir packages/ui exec vitest run src/table --maxWorkers=2
pnpm lint
pnpm typecheck
```

`check:table-layout` 包含正反门禁测试、原算法差分测试和重新生产构建。JS gzip 允许相对固定参照最多 1% 增长，CSS 指标必须保持；API、SSR 或原有声明变化即失败。此预算用于本阶段防止回退，不表示完整入口有移动端级别的轻量体积。

若工具链或其他组件/样式再次变化，先审查差异，再使用保存的原布局源码在同一上下文重建一对新参照，不自动刷新既有 baseline：

```sh
NODE_ENV=production pnpm exec node scripts/quality/table-layout-baseline.mjs --out /private/tmp/table-new-reference --layout-reference artifacts/table-layout-refactor/original-layout
NODE_ENV=production pnpm exec node scripts/quality/table-layout-baseline.mjs --out /private/tmp/table-new-result --compare /private/tmp/table-new-reference
```

## 后续验证边界

本轮发布构建、声明/运行时/SSR 对照、jsdom 单测及静态依赖检查不等同于完整 quality、生产三引擎交互、浏览器 hydration 或移动真机验收。测量/滚动生命周期的独立提取、基础 renderer、按需公共入口和移动端接入仍按 tasks.md 后续阶段推进。
