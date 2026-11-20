# 第二批实施记录：基础渲染与主动选用的入口

日期：2026-11-20。本批不改变原 Table 的 props、事件、八个公开方法、子组件/context 协议和默认组合方式。

## 实现

- `render/columns.ts`、`render/cell-layout.ts`：迁出原分组投影、冻结 class/style 适配；旧 utils 路径保留内部转出。
- `render/cells.tsx`、`render/cell-content.tsx`：基础单元格/表头 DOM 和内容优先级；不引用桌面 UI。完整 Table 和 Core 共享函数，没有给原组件增加 DOM wrapper。
- `desktop/use-header-filter.tsx`、`desktop/use-header-sorter.tsx`：完整 Table 的面板、控件和图标，交互仍使用原控制器。
- `features/`：迁移 filter/sort、selection、expand/lazy、pagination、span、drag/resize 私有控制器；单独拆出 filter/sort/pagination 计算。主 Table 保留管线顺序、拖拽预览、summary 和 virtual 编排。旧 hooks 文件保留内部 re-export，方便逐步迁移。
- `core/` 与 `layout/use-core-layout.ts`：语义化原生单表、分组表头关联、共享列宽/冻结内核、原生滚动和独立样式。auto 测量实际宽度；fixed 使用宽度分配结果；分组 sticky 顶部偏移来自实际表头行高。
- 新增 `table/core`、`table/core/style`、`table/features/filter`、`table/features/filter/client`、`table/features/sort`、`table/features/sort/client` 的 types/ESM/CJS exports。只主动导入，不更换根入口和 resolver；不引入全局插件注册或运行时新依赖。
- 远程筛选/排序只导入状态；本地平面数组计算显式导入 client。Core 接收准备好的数据，不建立第二份隐藏数据状态。中文、英文 Table 文档与新增 OpenSpec 记录公共 API。

## 发布构建与体积

证据目录：`artifacts/table-render-refactor/`。`original-table/` 是本批开始前的生产 Table 源码，不覆盖；`reference-table/` 只叠加并行的 viewport isolation 样式修复并保存 provenance。原架构在临时目录恢复，工作区文件不回退。

最终比较为 `matched-before/` 与 `final-after/`。构建中遇到其他组件的并行源码变更，原门禁正确拒绝不同上下文的比较；随后使用最终构建保留的同一份非 Table 源码快照重建旧 Table 参照。工具链、锁文件、非 Table 上下文指纹、旧 API/SSR 和样式指标一致。旧声明仅存在 TypeScript 推导的对象属性顺序变化，归一化仅排序无重名的普通属性签名；可选性、readonly、成员类型、重载和元组顺序仍严格比较，另有反例测试保护。

Vue / @vue/shared external，消费实际 package exports 并包含对应样式的 gzip 字节：

| 消费方式 | JS | CSS |
| --- | ---: | ---: |
| 原完整 Table | 121255 | 30943 |
| 重构后完整 Table | 122067 | 30943 |
| Core | 13462 | 5681 |
| Core + 冻结配置 | 见 final-after/report.json | 5681 |
| Core + 筛选/排序状态或本地计算 | 见 final-after/report.json 各独立 fixture | 5681 |

完整入口 JS 增加 812 字节（约 0.67%），在原 1% 预算内；CSS 不变。Core 的 JS 与 CSS 均小于完整入口的四分之一。该数值包含基础主题 CSS，不包含 Vue，不等同于应用总包或移动真机性能。模块图断言 Core 不含桌面面板、Trigger、Checkbox、Radio、Pagination、Scrollbar、Tooltip 或 VirtualList；基础 Core 不含 features；状态入口不含 client 计算。

发布消费者额外检查 Core props/实例类型、旧 Table 配置、远程筛选最小列类型、按需算法及反例类型错误；验证新增 feature exports 的 ESM/CJS 和 Core 的 SSR 一致性。

## 验证与剩余范围

完整 Table 测试 374 个通过；最后的 Core auto 列宽约束改动后重跑 Core/feature 9 个用例通过。固定报告/反向门禁/原始算法差分共 15 个 Node 测试通过。全量 lint、最终受影响源码 lint、完整 typecheck（含公开 API project）、源码最低 Vue 检查、无循环/根入口回流检查、spec 和 resolver 25 个用例通过。详见 `verification.json`。Table 中英文文档的结构归一化、demo 分组与公开文档策略单独检查通过。额外的全库 token 检查在非 Table 的 field-decorator hover token 处失败；全库文档检查在 filter-form 的 above-table/inside-card demo 分组处失败。这些既有/并行问题保留原样，未作为本次 Table 重构修复。

生产浏览器使用 ego-browser 的独立 TaskSpace 90，已关闭。截图和 `browser-qa.json` 记录双层表头真实 sticky 偏移、两侧冻结横滚稳定性、RTL 溢出 End/Home、窄屏容器、动态数据及 SSR hydration；没有 Vue 警告。它是 ego-lite Chromium 验证，不是三引擎、原生浏览器或移动真机验收。完整 `pnpm quality` 尚未运行。

本批没有把 summary/virtual 主编排和所有 context 一次性搬走；P1 的完整 Table 测量/滚动生命周期也继续原路径。下一批继续按 tasks.md 拆分，Maple 接入另行实施。

## 复跑

`pnpm check:table-layout` 运行固定契约/差分报告测试，并重新生产构建消费当前源码。它不会自动刷新参照；如无关生产源码又发生变更，会拒绝跨上下文比较。

审查上游差异后，可在两个新的输出目录重建匹配上下文的参照与结果：

```sh
NODE_ENV=production pnpm exec node scripts/quality/table-layout-baseline.mjs --table-scope --table-reference artifacts/table-render-refactor/reference-table --out /private/tmp/table-reference-new
NODE_ENV=production pnpm exec node scripts/quality/table-layout-baseline.mjs --table-scope --compare /private/tmp/table-reference-new --out /private/tmp/table-result-new --browser-fixture
```

`--browser-fixture` 可生成包含真实发布入口及 SSR hydration 的独立浏览器页面；不用于体积统计。并行工作时先保留构建快照，再用 `--reference-context-ui <snapshot-ui>` 重建原 Table，确保所有非 Table 输入相同。不得覆盖历史证据来接受行为变化。
