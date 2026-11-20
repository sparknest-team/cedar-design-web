# Cedar Table 重构设计

## 1. 兼容原则

用户原有代码继续通过根导出、`@cedar-design/ui-vue/table` 或现有 resolver 使用完整 Table。无需补插件、替换组件或调整配置。保留 `Table.Thead/Tbody/Tr/Th/Td/Column`、独立子组件、安装行为、公开类型、`tableProps`、`defineTableConfig` 和扩展列导出。

完整入口继续同步装配所有既有能力，运行时仍按原 props 决定行为。不将既有 UI 改成异步组件，避免引入首次交互等待、SSR 占位和事件时序变化。完整入口不承诺仅因关闭某个 prop 就大幅缩小 bundle；轻量收益来自新的静态依赖入口。

保留 props 的类型、validator、默认值和工厂，emits 的名称、参数、触发条件、顺序及次数，插槽的作用域和优先级，方法的参数与返回行为。受控值、内部候选值及默认值各自的所有权保持不变。保留原始行对象在回调中的身份，不以内部行包装对象替代。

保留 DOM 语义、可访问关联、类名、公开 token、attrs/listeners 透传、主题/语言作用域及 Teleport 的上下文。实现阶段不把 TSX 改写为 SFC、不同时重写 CSS；先做职责提取，减少无关变量。

## 2. 当前证据与风险

| 当前文件 | 现有职责 | 提取风险 |
| --- | --- | --- |
| `table.tsx` | 列注册、数据管线、状态、测量、渲染、分页目标与生命周期 | 一次搬迁容易改变 watch flush、事件顺序和 DOM ref 所有权 |
| `hooks/use-columns-layout.ts` | 固定布局宽度分配，并写回 `_realWidth` | 不是完全纯函数；直接替换会改变渲染和冻结偏移 |
| `utils.ts` | 分组、冻结几何、样式、数据处理等混合工具 | 冻结逻辑包含操作列、RTL、分组边界的现有特殊行为 |
| `table-th.tsx` | 基础表头、排序、筛选、选择、拖拽列宽等 | 只拆主入口仍会由表头引入 Trigger 和表单控件 |
| `context.ts` | 布局、注册、状态、功能回调的大上下文 | 子组件依赖必须随上下文一起迁移，不能产生两套状态 |
| `style/index.ts` | 全量功能样式入口 | JS 拆分后仍可能由基础样式引入整套桌面依赖 |

`compatibility-inventory.json` 使用 TypeScript AST 摘取当前 props/emits 声明、方法、导出，另记录注解插槽、测试文件与关键源码 SHA-256。它是设计时证据，不是最终 API 声明基线，也不完整覆盖动态命名插槽、组件实例可见字段或嵌套类型的传递依赖。实施前必须补发布包声明消费和行为测试；不能只比较数量，也不能把源码哈希固定作为重构验收条件。

当前未测量消费侧压缩体积，不声明已减少多少 KB。

## 3. 目标依赖方向

```text
原 table/index.ts（现有导出、install、子组件身份）
  -> table.tsx（完整配置的装配点，组件本身保持身份和实例 API）
       -> 桌面功能控制器 + 桌面 UI 贡献
       -> 基础渲染器 -> Vue 布局适配 -> 纯布局内核

未来 table/core（主动选用的新入口）
  -> 基础表格装配 -> 基础渲染器 -> Vue 布局适配 -> 纯布局内核
                      ↑ 实例级、显式传入的可选能力
```

依赖只能向基础层流动。纯内核不 import Vue、DOM、Cedar 类型/组件、locale、图标或 CSS。基础渲染器及其传递依赖不 import 桌面表头、筛选面板、分页、Trigger、Checkbox、Radio、拖拽和虚拟列表。以发布包的真实 bundle 图验证，不能仅检查文件顶层 import。

建议先在 `src/table/` 下采用以下私有目录；文件名是实施目标，不是新增深层公共入口承诺：

| 目录 | 职责 |
| --- | --- |
| `kernel/` | 最小列标识、分组关系、宽度分配、冻结偏移、表头关联计算 |
| `layout/` | 容器和列尺寸观察、滚动同步、布局提交与资源释放 |
| `render/` | 基础表头/表体/单元格/列组，使用中立贡献接口渲染功能 |
| `features/` | sort、filter、selection、expand/lazy、pagination、span/summary 等状态与计算模块，以及 drag/resize 交互控制器 |
| `desktop/` | 筛选浮层、排序按钮、选择控件、分页和桌面滚动条等 UI 适配 |
| `assembly/` | 完整与基础配置的静态装配、事件桥接和上下文组装 |

既有 `props.ts/types.ts/index.ts/typed-config.ts` 首轮保留；现有辅助文件是否转发或逐步移入目录，由其消费者决定。不能让基础入口通过导出 barrel 又引用回完整入口。

## 4. 列布局内核

### 4.1 输入输出与适配

内核接收内部稳定的列 ID、显式/最小/拖拽宽度、已测量宽度、冻结侧、操作列、分组路径、容器宽度、布局模式及阅读方向；输出列宽、表体宽度、溢出状态、冻结偏移和分组边界。具体 TypeScript 名称在实施时定稿，保持私有。

列 ID 沿用现有 `getColumnLayoutKey` 的身份规则，不能只用 `dataIndex`：扩展列与业务列同名、缺少字段的列、操作列和分组列均有独立语义。Cedar 适配层负责把现有类型映射到内核，并按原先时机写回内部 `_realWidth` 等字段。首轮保留当前 mutation 的可观察效果，不同时切换列对象身份或缓存策略。

### 4.2 两种自适应

- `fixed`：保持当前默认最小数据列宽 80、操作列宽 40，以及 `fit`、显式宽度、拖拽宽度、扩展列钉死和像素余数分配规则。即便 `fit=false`，当前实现仍可能按比例撑满容器，不借重构改成其他组件库的语义。
- `auto`：浏览器决定实际宽度，冻结偏移优先读取测量回写值，不能使用浏览器未执行的旧拖拽宽度。`maxHeight`、ellipsis 强制 fixed 的规则保持现状。
- 模式切换、删列、重排列、隐藏后恢复、尺寸为零和动态内容变化必须清理过期宽度；不能累积旧操作列测量结果。

### 4.3 冻结与测量

按现有物理 left/right API 与 RTL 实现保持语义，不借机改为 start/end。保留操作列顺序、分组表头跨区、末端阴影、扩展列碰撞和实际列宽优先级。

`layout/` 继续使用项目已有 ResizeObserver 与滚动设施，测量绑定目标的 ownerDocument/window。读取 DOM 与提交响应式布局的调度时机先保持，再单独优化；避免 ResizeObserver 反馈循环。卸载、KeepAlive 停用、目标替换和布局模式变化时取消旧任务，失效回调不得回写新实例。纯内核可 SSR 导入，DOM 工作仅在客户端进行。

首轮不新增全量逐单元格内容扫描或新的采样算法；移动端内容自适应性能策略在同源接入阶段根据真实数据单独验证。

## 5. 功能组合与状态边界

先使用内部显式组合函数，不设计公共插件注册系统。每种功能有自己的状态和销毁职责，通过小接口提供数据变换、操作列描述、表头/单元格内容及事件意图。装配点决定调用顺序，禁止依赖任意插件数组顺序或全局可变 registry。

参考其他实现后，功能进一步分为四个职责，不能把一个 feature 等同于整个 UI 组件：

| 职责 | 例子 | 依赖原则 |
| --- | --- | --- |
| 状态/API 控制器 | 筛选值、排序方向、分页状态、选择键、事件意图 | 不 import 对应面板与客户端算法 |
| 客户端计算 | 本地过滤、比较排序、分页切片 | 可独立引入；远程处理不必携带；旧入口保持现有语义 |
| UI 适配 | PC 筛选弹层、移动筛选面板、勾选控件 | 消费状态/API；不反向进入基础层 |
| 渲染策略 | 普通行、虚拟行、展开/合计行投影 | 使用当前数据结果和统一布局；不建立第二份功能状态 |

其中虚拟化属于渲染策略，列宽拖拽属于交互；宽度分配、测量与冻结继续是基础布局能力。Cedar 不照搬参考库的所有 feature 粒度。完整装配静态包含既有能力，基础装配只引用所需模块，不能通过导入完整注册表再运行时过滤来伪装按需。

基础层只认识中立的列与 UI 贡献，不认识筛选面板、排序按钮或选择组件。功能控制器不直接操作另一功能的私有 ref；必要协作由装配点桥接。现有 `TableContext` 首轮保留桥接，逐个子组件迁移到最小上下文，保持 injection key 与现有子组件配合，避免旧 `Table.Th` 脱离父表。

数据管线按当前实现提取：

```text
raw data + 当前 lazy 子节点
  -> processedData（行身份/树包装）
  -> validData（当前树过滤规则）
  -> sortedData（当前映射/排序 + 同级拖拽预览）
  -> flattenData（当前分页切片）
  -> 展开/虚拟行的渲染投影与合计
```

保持 `sorter=true` 的外部排序语义、自定义比较器参数、稳定排序、过滤树保留规则和 `onlyCurrent` 翻页清空选择行为。不要为了通用管线而改变过滤/排序/分页顺序。

`change` 当前由 `handleChange` 传递 `flattenRawData`、包含分页/排序/过滤/拖拽信息的 extra、以及 `sortedData`；保持各参数当前具体结构，不统一成新 row model。各操作的精确事件顺序与 watch 时序由迁移前录制和测试锁定，不预先“纠正”成理想顺序。

过滤值与面板草稿分离；指定列 clear/reset 不干扰其他列及被受控值遮盖的内部状态。懒加载缓存继续属于原始节点和 key，旧请求完成不能污染新数据、变更后的 rowKey 或已停用/卸载的实例。

方法 `select/selectAll/expand/expandAll/resetFilters/clearFilters/resetSorters/clearSorters` 继续在原 Table 实例提供，参数、默认值、返回值和调用结果保持；现有 setup 实例可见字段也应先记录并保持，不能只保护八个文档方法。

## 6. 按需入口与样式

第一阶段只拆内部，不增加公共能力参数。第二阶段计划提供显式 `@cedar-design/ui-vue/table/core`：保留基础数据/列渲染、分组表头、宽度自适应、冻结、原生滚动和基本可访问性；不包含分页、筛选、排序、选择、展开、合计、拖拽和虚拟列表。这是新组件入口，不宣称兼容完整 `TableProps`，也不接受后静默忽略不支持的字段。

基础入口使用独立 props/types 及实例接口，避免 `TableProps` 从 `table/index.ts` 形成运行时回边。新 API 需以本 change 的后续规范增量定稿并按 minor 发布，本设计不立即导出尚未实现的入口。

扩展先以实例级静态装配验证；只有实际场景需要时，才新增 `table/features/<name>` 等公共子入口并明确依赖和版本承诺。小型算法无须动态 import；新的重型面板可另行研究按打开时加载，但完整 Table 的当前 UI 不改加载方式。

既有 `table/style` 继续聚合完整样式且顺序不变，现有全量 CSS 入口继续工作。未来新增 `table/core/style` 只引入基础 token、基础布局、冻结和语义样式；功能样式跟随功能显式引入。第一阶段不从现有全量 CSS 删除规则，也不重命名 token/class。

发布时需要为嵌套 JS/样式入口配置明确的 exports、ESM/CJS 和声明映射；不能假设当前 `./*` 通配映射即可覆盖。检查 ui-build 的入口发现、style sideEffects、resolver、包内容和 Vue 3.2.47 声明消费，不只在源码 alias 下验证。

## 7. Maple 的后续复用方式

Maple 默认 Table 以当前 Cedar 完整 Table 的源码为基线迁移。基线覆盖主入口、props、类型、数据处理、表头、行列渲染、样式和对应 Demo。先固定可追溯的 Cedar 源码版本，再逐项记录保留、裁剪和平台替换。当前 Maple 第一版只同步了部分模块和 Demo，主入口与表体仍独立编排，不能作为完整迁移的验收结果。

保留列宽、冻结、分组、排序、分页与纵向行虚拟化，以及这些能力在 Cedar 的组合顺序、插槽参数和事件签名。裁剪桌面筛选浮层、拖动调宽与重排等交互时一并移除对应静态依赖。两端独立构建；Maple 使用本库的主题、语言、图标与触摸交互。

滚动有两条独立路径。Cedar 的虚拟表体调用通用 virtual-list-v2；Maple 对接本库同族组件，保留表格对行身份、列对齐与行号的约定。Cedar 的 Scrollbar 和 StickyScrollbar 提供桌面滚动条展示及联动；Maple 采用原生滚动视口。两端对等验证数据行和事件，移动端另验横滑冻结、惯性滚动、动态行高和 Tabs 手势。

## 8. 分阶段迁移与退出条件

| 阶段 | 改动 | 完成条件 |
| --- | --- | --- |
| P0 基线 | 固化发布声明、API/slots/实例、关键事件轨迹、DOM 与 bundle 依赖 | 原实现通过基线；既有失败单列，不能当作新实现通过 |
| P1 布局 | 提取 kernel + layout，旧函数适配，先接回原 Table | 宽度/冻结/RTL/分组/操作列/动态列回归，输出与原实现一致 |
| P2 渲染 | 提取基础 renderer，桌面表头行为通过贡献注入 | 原子组件、动态/memo 插槽、分离表头、SSR 和 a11y 不变 |
| P3 功能 | 保持管线及事件桥接，逐个移动控制器与桌面 UI | 每移一个功能即做定向回归，再运行完整 Table 测试与组合用例 |
| P4 按需 | 新增基础入口、独立样式、可选扩展与发布声明 | 消费包确实不带禁用能力的 JS/CSS；原入口回归通过 |
| P5 移动复用 | 从 Cedar 完整源码派生 Maple 默认 Table，记录平台差异 | 对齐保留的 Cedar API、行为和 Demo；手机场景验证并量化增量体积 |

每阶段独立提交、可独立回退；任一兼容失败就停留在该阶段修复，不用旧实现/新实现运行时双轨掩盖失败。回退指撤回阶段改动，不在发布包中永久保留两套引擎。

## 9. 验证矩阵

| 保护对象 | 现有代表用例（均在 `src/table/__tests__/`） | 需补充的组合证据 |
| --- | --- | --- |
| 列宽与冻结 | `table-auto-fixed-width`、`table-dynamic-width`、`table-delete-column-width`、`table-without-scroll-x`、`reading-direction` | 容器变窄、图片/字体内容更新、双侧冻结+分组+操作列、auto/fixed 往返 |
| 列身份与插槽 | `extra-column-slots`、`table-column-registration`、`memo-loop-reorder-structural`、`slot-reconstruction-regression`、`dynamic-th-presence` | columns 属性/声明列切换、自定义 renderer、列重排后焦点与 ID 关联 |
| 状态与事件 | `filter-reset-isolation`、`filter-content-priority`、`sort-stability`、`row-identity`、`pagination-model-value` | 受控/非受控、事件顺序和次数、外部排序/分页、选择+筛选+翻页 |
| 懒加载与虚拟化 | `lazy-ownership`、`table-lazy-expand`、`virtual-expanded-rows`、`virtual-lazy-row-positions` | 请求中替换节点/rowKey、停用后完成、冻结+虚拟+展开+合计 |
| 分页与滚动生命周期 | `pagination-target-timing`、`pagination-target-compat`、`pagination-container`、`sticky-scrollbar` | Teleport 目标更换/移除、多实例、主题作用域、KeepAlive 恢复 |
| 可访问性与 SSR | `sort-accessibility`、`selection-accessibility`、`split-header-association`、`header-idref-non-ascii`、`content-slots-ssr` | 键盘操作、原生与拆分表头切换、SSR/hydration ID 一致性 |
| 类型与发布包 | `typed-config`、`typed-config-demo` 和现有发布检查 | 旧 Vue/TSX 消费程序不改代码，根/子路径/全局安装，最低 Vue 版本 |

实施时运行定向测试、完整 Table 测试、lint、typecheck、构建与 package/runtime/resolver 检查；正式交付遵守仓库完整 quality 与兼容性要求。浏览器验收覆盖生产构建的 Chromium/WebKit/Firefox，另按发布规范记录移动真机证据，模拟视口不能冒充真机。

体积从临时目录中的真实发布产物构造四类消费样例：旧完整入口、基础表格、基础+冻结、基础+一种扩展。Vue external；JS 及各自必要 CSS 分别记录 minified/gzip（可补 brotli）、传递依赖和工具版本，同时核对 ESM/CJS/types。基础与冻结均属 core 能力，允许两者代码体积相同；不要求制造虚假的独立 chunk。

基础样例不得出现桌面筛选/Trigger/分页/选择控件/拖拽/虚拟列表的运行时代码及样式；Vue、通用纯工具不属于排除项。P0/P4 测量使用相同工具与锁文件条件；P4 应重新跑重构前基准，避免工具变更造成虚假降幅。完整入口不得有无法解释的体积或交互性能回退。数值预算在 P0 实测后写入 CI；在此之前不杜撰 KB 目标，不放宽已有门禁。

增加“远程筛选状态 + 自定义筛选 UI”的消费样例，单独验证不携带客户端过滤算法、PC 筛选面板和 Trigger；具体新增扩展 API 在 P4 定稿，不改旧 Table 的远程处理语义。

## 10. 外部方案参照

完整证据、固定提交和取舍见 [其他表格实现的架构参照](./references.md)。采用 Element Plus 的布局职责分离、Naive UI 的共同冻结几何、TanStack v9 的状态/计算/UI 分层、AG Grid 的完整与按需装配共存，以及 shadcn-vue 的基础标签组合思路。保留自有内核和现有外部契约，不在本次重构中更换底层引擎。
