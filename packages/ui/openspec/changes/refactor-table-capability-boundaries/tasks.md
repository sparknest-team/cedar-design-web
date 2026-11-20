# 实施清单

## 本轮设计交付

- [x] 核对当前 Cedar Table、Maple 原生 Table、发布入口、样式依赖及同源/兼容规范。
- [x] 摘取设计时兼容清单，并关联现有回归用例。
- [x] 明确完整入口保留、基础入口主动选用、内部静态组合和两端独立源码的架构。
- [x] 记录阶段边界、验收要求和仍需实测的体积预算。
- [x] 对照 Element Plus、Naive UI、Arco、TanStack v9、shadcn-vue、AG Grid 和 Varlet，补充来源与设计取舍。
- [x] 明确状态/API、客户端计算、UI 与渲染策略的边界，以及远程筛选的按需验收样例。

首批完成基线与列宽/冻结计算；第二批继续拆分基础渲染与功能控制器，并提供主动选用的 Core 和无 UI 的筛选/排序入口。未勾选项保留后续工作，不以新增入口替代旧入口验收。

## P0 兼容与体积基线

- [x] 在隔离生产构建中保存原实现的发布声明、JS 消费 fixture、运行时导出与 SSR 结果；记录实例可见字段。
- [x] 原实现的 353 个 Table 测试全部通过，保存测试清单与固定工具链信息。
- [x] 补充列宽/写回、冻结/方向/分组、公共 API/实例、选择+分页+筛选事件轨迹的四个契约测试及五个纯内核测试；原有受控/虚拟/懒加载回归继续运行。
- [x] 使用实际发布入口和 table/style 记录三个消费样例的 JS/CSS 压缩体积及依赖图，预算为 JS gzip 不超参照 1%，CSS 压缩指标不变。
- [x] 增加原始源码参照的差分测试：800 组列宽和 600 组冻结/操作列场景，独立于分组投影快照。
- [x] 保存原阶段生产截图，补齐三引擎真实几何、键盘/可访问交互及固定源码/产物指纹证据。
- [ ] 补充 TableCore 与 summary/virtual 特定边界的专用 SSR hydration 和真机证据；SSR 字符串及 jsdom 测试不能替代这些证据。

## P1 布局提取

- [x] 提取最小内部列输入与宽度分配，保留当前写回适配和像素分配规则。
- [x] 提取冻结偏移与分组叶子边界，保留物理方向和操作列行为；现有表头关联算法保持原位置。
- [ ] 提取测量/滚动生命周期，保持调度与清理时机；接回原 Table。
- [x] 通过现有 Table 回归、纯内核与原算法差分，验证 auto/fixed、删列、RTL、零宽、动态内容、扩展列碰撞与多实例；真实浏览器几何的后续补充见 quality-implementation.md。

## P2 渲染解耦

- [x] 提取不引用桌面控件的分组列、单元格布局、内容优先级与基础 DOM 渲染函数；通过私有回调注入标题、排序、筛选、展开内容和事件。
- [x] 提取私有虚拟渲染策略，复用原 VirtualList、refs 和范围事务，不修改子组件/context 协议。
- [ ] 进一步统一操作列贡献接口。
- [x] 分离 table-th 的基础语义与桌面筛选/排序 UI；选择操作列继续使用原子组件，保持 DOM 与插槽优先级。
- [ ] 逐个迁移最小上下文，保持原子组件注册、实例身份与 injection 配合。
- [ ] 验证动态/memo 列、结构和内容插槽、分离表头关联、SSR/hydration。

## P3 功能模块化

- [x] 移动 filter/sort、selection、expand/lazy、pagination、span、drag/resize 的私有控制器，并拆出 filter/sort/pagination 数据计算；旧 hooks 路径保留内部转出。
- [x] 拆分 summary 数据、span、行和面板，以及 virtual 行位置事务与列表策略；主 Table 保留原数据/渲染顺序、生命周期和业务行贡献。
- [x] 保持数据管线、受控/非受控状态、所有事件和八个公开方法；完整 Table 回归与发布契约比较通过。
- [x] 提取时保留懒加载请求世代、分页目标/主题/Teleport、KeepAlive 与滚动资源清理，相关原用例通过；浏览器生命周期全矩阵仍属后续验收。
- [x] 第二批 Table 374 个测试与 Core/feature 复测通过；第三批最终 Table 382 + VirtualList 59 个测试、19 个契约/差分检查和旧发布声明/类型消费检查通过。

## P4 新增主动选用的轻量消费方式

- [x] 定稿 TableCore 与筛选/排序新增 API/spec；不向旧 Table 添加必需参数。
- [x] 提供独立 core JS/types/style，完整 Table 和 table/style 继续工作。
- [x] 验证 exports、入口发现、ESM/CJS、声明、resolver、sideEffects、包内容与已支持 Vue 版本；源码兼容下限和实际运行版本分别记录。
- [x] 验证远程筛选/排序状态独立于客户端算法与桌面面板；Core 不创建隐藏数据处理状态，原虚拟管线不变。
- [x] 用隔离生产发布包验证基础/冻结/状态/本地算法样例的传递依赖及 JS/CSS 预算；补固定证据测试与重新构建门禁。
- [x] 完整执行 quality，冻结候选各门禁修复后分阶段通过；相同生产输入完成全组件三引擎回归，保留原始失败及最终通过证据；新增用户 API 带 minor changeset，不自动发布。
- [x] 单独保存绑定候选产物哈希的原生浏览器与手机 Table 待验收清单。
- [ ] 完成原生浏览器和手机真机验收，并对冻结后的并发改动单独回归。

## P5 后续单独立项

- [ ] 独立设计 Maple 数据列使用方式，保留既有原生插槽 Table API。
- [ ] 复制适用内核与布局模块、建立明确文件与类型的同源检查；不跨库运行时依赖。
- [ ] 实测触摸横滚、冻结可读区域、异步内容、手机性能与增量体积；移动筛选 UI 单独设计。

第二批详细实现、体积、浏览器证据和剩余边界见 [render-implementation.md](./render-implementation.md)。

第三批 summary/virtual 编排与成对回归门禁见 [orchestration-implementation.md](./orchestration-implementation.md)。

完整 quality 分阶段结果、三引擎与真机待验收边界见 [quality-implementation.md](./quality-implementation.md)。
