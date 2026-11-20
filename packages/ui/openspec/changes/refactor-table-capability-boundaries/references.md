# 其他表格实现的架构参照

查阅日期：2026-11-19。目的：验证 Cedar 的布局复用、功能按需和兼容迁移方案；本轮不替换运行时、不引入第三方表格依赖。

## 1. 证据范围

同时检查本地源码和官方文档。本地源码只代表下表固定提交，不自动等于最新发布版本；所列检查路径当时没有工作区修改。TanStack 官方当前页面显示 v9，不能把 v8 的扩展方式与 v9 的显式 feature 机制混用。在线 latest 链接可能变化，实施时需固定所评估版本。

| 来源 | 本地提交 / 在线依据 | 主要检查路径 |
| --- | --- | --- |
| Element Plus | `a3e4ce505d7abc373e29702aaebc19a33a9e41b0` | `packages/components/table/src/{table-layout.ts,store/index.ts,table-header/index.ts}`；`table/style/index.ts`；`table-v2/src/{table-v2.tsx,composables/use-columns.ts}` |
| Naive UI | `fe69c62663f7648c249a9786dea3565979526a38` | `src/data-table/src/{DataTable.tsx,MainTable.tsx,use-table-data.ts,use-scroll.ts,use-group-header.ts,TableParts/Body.tsx,TableParts/Header.tsx}` |
| Arco Design Vue | `ee158dd75e81f636f34d1929fd3b19b5a6f0e32a` | `packages/web-vue/components/table/{table.tsx,table-th.tsx,hooks/,style/index.ts}` |
| shadcn-vue | `dd3ff4ccbb46a15081e841570e51a5a2ace095cf` | `apps/v4/components/demo/DataTableDemo.vue`；`apps/v4/content/docs/components/data-table.md`；`apps/v4/package.json` 中依赖 `@tanstack/vue-table: ^9.1.2` |
| Varlet | `b31b00035bc4162a80f59c156d65c0b50a5b2fbc` | `packages/varlet-ui/src/table/table.vue` |
| TanStack Table | 官方当前 v9 文档 | feature、row model、列宽、冻结与虚拟化指南，见下文 |
| AG Grid | 官方 Modules 文档，查阅时页面显示 36.3.0 | 完整 bundle、按需 modules、实例级装配，见下文 |

没有执行各库的生产体积对比，因此下文的依赖判断不等同于实测 KB 或大小排名。

## 2. 方案比较

| 方案 | 源码/文档确认的结构 | 对 Cedar 的借鉴 | 不直接照搬的部分 |
| --- | --- | --- | --- |
| Element Plus Table | `TableLayout` 集中布局，store 管理数据与交互状态，表头/表体分离 | 宽度分配、布局观察和状态管理分工 | `TableLayout` 仍持有 Vue ref、table、store 和 DOM，不能把整个类当纯布局内核 |
| Element Plus Table V2 | 独立虚拟表格组件，左右固定区与主区独立 renderer | 大数据渲染策略可以独立 | 不把旧 Cedar 整体换成 V2，也不要求移动端默认创建多套固定区表格 |
| Naive UI DataTable | 数据、滚动、分组表头、选择、展开等拆为 composable；Header/Body 消费共同冻结映射 | 让表头和表体复用同一套列几何，收敛滚动与测量所有权 | composable 拆分不等于功能级按需；入口仍直接引用分页、Body 仍直接引用虚拟列表及选择控件 |
| Arco Design Vue | hooks 分离排序/过滤/选择等；主组件装配，表头直接引用桌面控件 | 渐进提取路径与 Cedar 当前结构接近 | 若只移动 hooks，依赖图仍会从主组件和表头拉入完整能力 |
| TanStack Table v9 | headless；显式 feature、独立 row model、算法函数；渲染由使用者负责 | 静态能力组合；把状态/API、本地算法和 UI 拆开 | 不直接替换 Cedar 引擎、API、默认列宽及受控状态；DOM 测量仍需自有实现 |
| shadcn-vue | 用基础 Table 标签组件 + TanStack features + 自选控件组合数据表 | 保留简单表格；移动筛选 UI 可独立于状态/计算能力 | 不把所有 Cedar 用户变成自己拼装表格；原完整入口仍应开箱即用 |
| AG Grid | 完整功能 bundle 与按需 modules 并存；支持逐实例提供模块 | 完整默认配置与主动按需配置可以共存 | 不引入全局注册作为 Cedar 的必需步骤，也不复制其大型模块/服务容器 |
| Varlet | 原生 table 插槽 + 滚动容器与 footer | 保护 Maple 当前轻量原生表格场景 | 该结构本身不提供数据列布局与冻结内核，不能仅复制容器就获得这些能力 |

以上“对 Cedar 的借鉴”为本设计的推论，不是各库对 Cedar 的兼容承诺。

## 3. 重点发现与来源

### 3.1 布局独立是成熟做法，但布局类不等于纯算法

Element Plus 的 `TableLayout.updateColumnsWidth` 独立计算弹性列和实际宽度，但类同时读取 DOM、store 和 Vue ref。适合参考职责分离，Cedar 仍需进一步把纯列宽计算与 DOM 观察分开。Cedar 已有自己的 fit=false 撑满规则，不能以对齐参考库为由更改。见 [Element Plus 布局源码](https://github.com/element-plus/element-plus/blob/a3e4ce505d7abc373e29702aaebc19a33a9e41b0/packages/components/table/src/table-layout.ts)。

Naive UI 的 `useScroll` 生成左右冻结列的位置映射，Header 和 Body 共用。可参考“统一几何、各层消费”的结构；其基于列配置推导宽度的做法不自动覆盖 Cedar auto 模式的 DOM 实测宽度。见 [Naive UI 滚动与冻结源码](https://github.com/tusen-ai/naive-ui/blob/fe69c62663f7648c249a9786dea3565979526a38/src/data-table/src/use-scroll.ts)。

### 3.2 内部 hooks 与打包按需是两个问题

Arco 的主组件已使用多个 hooks，但仍直接 import Pagination、VirtualList 等，表头直接引用 Trigger 和选择控件。Naive UI 也存在类似传递依赖。因此不能用 hooks 数量或目录拆分证明体积改善。见 [Arco 主组件](https://github.com/arco-design/arco-design-vue/blob/ee158dd75e81f636f34d1929fd3b19b5a6f0e32a/packages/web-vue/components/table/table.tsx) 和 [Naive UI 表体](https://github.com/tusen-ai/naive-ui/blob/fe69c62663f7648c249a9786dea3565979526a38/src/data-table/src/TableParts/Body.tsx)。

### 3.3 TanStack v9 对能力按需的拆分最值得参考

官方将 feature 的状态/API、本地 row model、算法函数分别注册；完整集合与单项导入并存，未注册能力不进入相应类型表面。Cedar 可借鉴其分层：例如远程筛选只需要状态、事件和自选 UI，不必携带本地过滤器。完整 Table 仍由 Cedar 内部预装，现有用户无需新注册。见 [v9 Features Guide](https://tanstack.com/table/latest/docs/guide/features)。

这不意味着直接采用 TanStack 就解决列宽。它的 sizing 提供数值状态及尺寸 API，由使用者把数值应用到布局；Cedar 内容测量、自适应分配和冻结更新仍须实现。见 [Column Sizing Guide](https://tanstack.com/table/latest/docs/framework/react/guide/column-sizing)。

冻结可以使用单表 sticky 或拆分表格；当前 v9 文档使用逻辑 start/end。Cedar 本次保留既有物理 left/right 和 RTL 行为，不迁移命名。见 [Column Pinning Guide](https://tanstack.com/table/latest/docs/framework/react/guide/column-pinning)。

虚拟化由独立 virtualizer 负责可见索引和测量，表格负责行模型；因此 Cedar 将 virtual 从普通数据功能细分为渲染策略。见 [Virtualization Guide](https://tanstack.com/table/latest/docs/framework/react/guide/virtualization)。

### 3.4 兼容完整入口与按需入口可以共存

AG Grid 同时提供完整模块集合和单项 modules，并支持直接给单个 grid 传模块。Cedar 可参考这种“完整装配 + 主动精简”双入口，而非把所有旧用户迁到插件注册。这里借鉴装配方式，不引入其实现或授权模式。见 [AG Grid Modules](https://www.ag-grid.com/javascript-data-grid/modules/)。

shadcn-vue 的示例将基础标签、feature 集合与 UI 控件分开组合，适合作为移动端 UI 独立的参照；Cedar 是现有组件库，仍须保留完整封装。见 [固定提交中的 DataTableDemo](https://github.com/unovue/shadcn-vue/blob/dd3ff4ccbb46a15081e841570e51a5a2ace095cf/apps/v4/components/demo/DataTableDemo.vue)。

Element Plus 虚拟表格采用独立组件和 cell renderer，说明虚拟化可以有不同 renderer，但不能据此声称与普通 Table 的 API/行为完全相同。见 [官方 Table V2 文档](https://element-plus.org/en-US/component/table-v2.html)。

## 4. 对原设计的具体修订

1. 功能进一步区分四层：状态/API 控制器、客户端计算、UI、渲染策略。筛选面板不属于筛选状态，虚拟化不属于数据处理阶段。
2. 列宽分配与冻结属于 Cedar/Maple 高频基础能力；即便 TanStack 将其作为可选 feature，Cedar 的基础入口仍默认提供。列宽拖拽交互继续独立。
3. 完整入口使用私有完整装配，旧 props 驱动现有行为；基础入口依赖最小装配。禁止基础装配 import 完整 feature 集合后再运行时挑选。
4. 共享状态与算法不能强迫共享 UI；前后端处理方式和不同客户端 UI 可以独立选用。原 Table 的数据管线和事件语义先保持。
5. 暂不引入 TanStack、AG Grid 或新的公共插件框架。先在自有实现中证明边界与兼容性，避免把本次任务变成底层引擎迁移。
6. 体积结论只由真实发布产物的依赖图和压缩测量得出；不引用其他库宣传体积作为 Cedar 预算。

## 5. 实施时的最小验证样例

除原四种消费样例，增加“远程筛选状态 + 自定义筛选 UI”样例：应有筛选状态/事件，无内置客户端过滤算法、桌面筛选面板和 Trigger。基础 renderer 不得通过默认表头回引这些实现。

新增模块边界检查：基础/完整装配无反向依赖；虚拟 renderer 只接收最终行投影与布局，不持有第二份排序/选择状态；功能静态依赖需要明确，缺失时不能默默降级。是否公开通用扩展 API，仍等到实际组合样例验证后再决定。
