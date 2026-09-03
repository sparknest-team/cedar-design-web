## 1. Cedar 展示型 List 收口

- [x] 1.1 将 `List` 公共 props 收口为 `data?: unknown[]`、`size: 'sm' | 'md' | 'lg'`、`bordered`、`split`、`loading`
- [x] 1.2 删除 `size` 的 `xs` / `xl` 取值，不保留别名值
- [x] 1.3 实现 `default` 优先于 `data + item` 的内容规则，并补齐 `header`、`footer`、`empty` slots
- [x] 1.4 复核 `ListItem` 仅公开 `prefix`、`default`、`suffix` slots
- [x] 1.5 保留 Cedar 扩展 `maxHeight`、`virtualListProps`、`scrollbar`、`scroll`、`scrollIntoView`
- [x] 1.6 从 `List` 删除 `bottomOffset` prop、`reachBottom` event、`scroll-loading` slot 及相关监听和样式，不保留兼容分支
- [x] 1.7 为 default/data 优先级、空态、整表 loading、尺寸、边框、分割线、虚拟列表与 `scrollIntoView` 补充契约测试

## 2. Cedar InfiniteScroll 新增

- [x] 2.1 新建 `src/infinite-scroll/`，定义 `InfiniteScrollStatus`、公共 props、events、slots 与 `check/retry` 暴露方法
- [x] 2.2 实现 `idle → loading → idle|error|finished`、`error → loading` 状态机及 `finished` 外部重置规则
- [x] 2.3 在发出 `load` 前同步发出 `update:status('loading')` 并设置内部锁，覆盖父级异步回写前的重复触发
- [x] 2.4 实现默认 loading/error/finished 状态区，确保默认 error 可点击重试、自定义 error slot 获得 `{ retry }`，重试只发出 `retry` 而不重复发出 `load`
- [x] 2.5 实现数字 px 与字符串 CSS length 的 `bottomOffset` 解析，禁止丢弃单位
- [x] 2.6 实现 `target?: string | HTMLElement` 与最近滚动父级解析，支持 target 变化重绑
- [x] 2.7 实现 SSR 安全、幂等监听清理、尺寸/内容变化检查、`immediate` 与 `disabled` 行为
- [x] 2.8 补充 Tab 激活、PullRefresh、动态内容和 Cedar 虚拟列表 target 组合测试
- [x] 2.9 补齐 `InfiniteScroll` 安装导出、类型导出、样式、README 与 demos

## 3. Maple 旧 List 迁为 InfiniteScroll

- [x] 3.1 将现有 `src/list/` 无限加载行为迁入新的 `src/infinite-scroll/`，组件名、注册名、样式前缀和导出统一改为 `InfiniteScroll`
- [x] 3.2 删除旧 `loading`、`error`、`finished` 三布尔 props，改用 `status` / `v-model:status`
- [x] 3.3 将 `offset` 改为 `bottomOffset`，将 `immediateCheck` 改为 `immediate`，不保留 alias
- [x] 3.4 移除 `loadingText`、`errorText`、`finishedText` 公开 props，状态内容统一由默认区域与 slots 表达
- [x] 3.5 将 `update:error` / `update:loading` 改为 `update:status`，补齐 `retry` event 与 `retry()` method
- [x] 3.6 增加同步内部锁，确保滚动、观察器和 `check()` 在父级回写前最多触发一次 load
- [x] 3.7 实现 CSS length 阈值、target/最近滚动父级、SSR 与清理行为
- [x] 3.8 迁移现有 Tab、PullRefresh、错误重试与自定义状态示例到新契约
- [x] 3.9 删除旧 `List` 无限加载器导出和旧路径，不添加 re-export 或 shim

## 4. Maple 展示型 List 新建

- [x] 4.1 新建展示型 `List`，实现公共 props、slots、默认值与 default/data 优先级
- [x] 4.2 新建 `ListItem`，实现 `prefix`、`default`、`suffix` slots
- [x] 4.3 确保 `loading` 只表示整表首次加载/刷新，非 loading 空数据渲染 `empty`
- [x] 4.4 补齐 `List` / `ListItem` 安装导出、类型导出、样式、文档、示例与测试
- [x] 4.5 不为 Cedar 端侧的 `maxHeight`、`virtualListProps`、`scrollbar`、`scroll`、`scrollIntoView` 制造空实现

## 5. 跨端文档与迁移

- [x] 5.1 按 `MIGRATION.md` 更新 Cedar 文档与 demos：所有触底加载改为 `InfiniteScroll + List`
- [x] 5.2 按 `MIGRATION.md` 更新 Maple 文档与 demos：旧无限加载 `List` 改为 `InfiniteScroll`，展示列表使用新 `List`
- [x] 5.3 全量搜索并删除 Cedar 的 `bottomOffset`（List 上）、`reachBottom`、`scroll-loading` 残留
- [x] 5.4 全量搜索并删除 Maple 旧 List 无限加载的 `loading/error/finished/offset/immediateCheck` 及旧事件残留
- [x] 5.5 确保两端公开类型、组件入口、README、中文/英文文档和示例只描述当前 API
- [x] 5.6 在两端 CHANGELOG 标注 BREAKING 组件拆分与迁移入口

## 6. 验证

- [x] 6.1 两端运行 List 与 InfiniteScroll 单元测试、类型检查及构建（相关测试与 Maple compile 通过；两端全库 typecheck 仅被既有非本次错误阻断）
- [x] 6.2 验证 SSR 渲染不访问 DOM，挂载/target 切换/卸载不残留监听或 observer
- [x] 6.3 验证同一帧多次滚动与 check 只触发一次 load，finished 不触发，外部重置 idle 后恢复
- [x] 6.4 验证 `0`、数字 px、`rem/em/vh/vw/calc(...)` 阈值与非法字符串降级
- [x] 6.5 验证 Tab 隐藏/激活、PullRefresh 刷新、短内容连续加载与 Cedar 虚拟列表组合
- [x] 6.6 运行 `openspec validate align-list-infinite-scroll-spec --strict` 与 `openspec status --change align-list-infinite-scroll-spec`（当前 CLI 无 `verify` 命令）
