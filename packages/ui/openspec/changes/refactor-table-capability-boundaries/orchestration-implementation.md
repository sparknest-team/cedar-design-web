# 第三批：summary 与 virtual 编排

日期：2026-11-20。本批仅调整私有模块边界；原 Table 的 props、事件、八个方法、默认功能组合和 Core/feature 公共入口不变。

## 模块职责

- `features/summary/use-summary-data.ts`：消费主 Table 已筛选、排序、分页后的数据与 raw 数据，保留默认求和、嵌套路径、首列文案、null/非数字规则和自定义 summary 回调。
- `features/summary/use-summary-render.tsx`：拥有 summary span、操作/数据单元格、原插槽转发、tfoot 与分离底部面板。主 Table 提供事件、表头关联、列组渲染及原有 ref；不增加组件、DOM wrapper 或 provider。
- `features/virtual/row-plan.ts`：每次 Table render 新建行位置事务，保留树/空树/展开行计数、重复 key 退让、自定义结构与阈值退让；仅在可见范围调用有条件的业务展开回调，复用该范围的 detail 内容。
- `features/virtual/render-body.tsx`：setup 时建立私有虚拟策略；渲染时读取原 refs，通过原 VirtualList 组件完成 body。保留 item key、component/tbody 优先级、props spread 顺序、prepareRange 和滚动处理，不创建第二份数据状态。
- 主 Table 继续负责数据管线、原始行/展开渲染、测量/滚动生命周期、表头与分页。列组渲染和单元格事件贡献由 body/summary 共用；hover 仍使用原共享 debounce。

完整组件始终同步组合这些模块；本批没有给 Core 添加 summary/virtual 功能开关，也没有增加公共插件协议。

## 兼容门禁

`artifacts/table-orchestration-refactor/original-table/` 保存本批开始前的生产 Table 源码与 SHA-256。参照不是 Git HEAD：它包含前两批已接受的重构和当时已有的并行修复。

新增成对构建工具 `scripts/quality/table-orchestration-check.mjs`。它先复制一次当前生产源码上下文，再在两个独立发布构建中恢复原 Table / 使用当前 Table。两者采用同一非 Table 输入、配置、依赖和工具链；不会因其他组件的并行修改而比较两份不同上下文，也不会刷新原始 Table 参照。比较运行时 props/默认值/emits/方法/子组件、发布声明、ESM/CJS SSR、实际 exports 消费图与体积；保留此前的 1% JS gzip 上限及 CSS 指标完全不变要求。

保留主 Table 对 VirtualListProps 的既有类型绑定，避免声明生成器在代码迁移后改用带 `.ts` 后缀的内联类型路径。声明比较没有因此放宽。

新增 13 个发布格式 SSR 差分场景：内联/分离 summary、自定义 summary 的当前页和 raw 身份、合并与选择列、空 summary、summary + virtual、树和空树、返回内容/空内容的展开回调、离屏回调、阈值、自定义 tbody 和显式 component。ESM/CJS 都比较完整 HTML 和调用轨迹。

新增 8 个集成回归，覆盖三个布局下的筛选/排序/分页后汇总、动态配置与数据更新、默认数字/空值/嵌套路径规则、raw 行事件身份、props 覆盖顺序、五类原生单元格事件和共享 hover debounce。原有虚拟范围、懒加载、custom tbody、节点身份、草稿、SSR/hydration 等用例继续执行。

## 复跑

```sh
pnpm check:table-layout
pnpm --dir packages/ui exec vitest run src/table src/_components/virtual-list-v2 --maxWorkers=1 --no-file-parallelism
pnpm typecheck
pnpm lint
```

重新构建的成对门禁默认将报告保存在临时目录；固定历史证据测试不会被自动更新。可显式指定一个不存在的目录，并生成不参与体积计算的浏览器页面：

```sh
NODE_ENV=production pnpm exec node scripts/quality/table-orchestration-check.mjs --out /private/tmp/table-orchestration-new --browser-fixture
```

构建、测试、浏览器和体积最终结果见本批证据目录的 `verification.json` 与成对构建 `comparison.json`。生产浏览器验证使用任务专用的 ego-browser Space；Chromium 和响应式模拟不替代三引擎、原生浏览器或真机发布验收。完整 quality 不属于本批已通过范围。

## 最终结果

同上下文的 `release-verified/before` 与 `release-verified/after` 比较通过。Vue/@vue/shared external，包含相应样式的 gzip 字节：

| 消费方式 | 重构前 JS | 重构后 JS | 原/新 CSS |
| --- | ---: | ---: | ---: |
| 完整 Table | 122264 | 123476 | 30943 / 30943 |
| 基础 props | 122264 | 123476 | 30943 / 30943 |
| 冻结 props | 122274 | 123487 | 30943 / 30943 |
| summary props | 122259 | 123473 | 30943 / 30943 |
| virtual props | 122284 | 123496 | 30943 / 30943 |
| Core | 13462 | 13462 | 5681 / 5681 |

完整入口增加 1212 字节（约 0.99%），所有样例均在既定 1% 上限内。Core、冻结 Core，以及筛选/排序状态和本地计算的六个消费图、JS/CSS 指标均完全不变。Core 仍不会传递导入 summary 或 VirtualList。

最终源码的 Table 382 个测试与 VirtualList 59 个测试全部通过（共 441），固定兼容/反例/原算法差分共 19 个 Node 测试通过。全量 lint、最终受影响源码 lint、完整 typecheck（含公开 API）、最低 Vue 源码检查、依赖循环检查与 spec 检查通过。生产源码与成功构建的 Table 指纹一致。

生产浏览器对同一成对构建执行相同断言，五个状态的结果完全一致：初始汇总、纵横滚动、分页更新、RTL 和数据替换。包括表头/表体/汇总滚动位置、冻结位置、虚拟行索引/总行数、DOM 实例身份、当前页汇总和 hydration；没有 Vue 警告。TaskSpace 101 与仅本机可访问的预览服务均已关闭。JSON、截图和测试报告保存在 `artifacts/table-orchestration-refactor/`。

未运行完整 quality、生产三引擎和原生/真机发布验收；不把本批结果标记为最终发布验收通过。
