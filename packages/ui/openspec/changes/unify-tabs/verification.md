# 验证记录

## 通过

- 两端 Tabs 范围的 vue-tsc 检查通过（继承各自 tsconfig，包含真实传递依赖，未关闭类型规则）。

- `pnpm check:tabs`：8 对源码逐字一致，Less 仅前缀不同，40 项 token 后缀和五组件导出一致。
- Cedar `pnpm exec vitest run src/tabs`：28 项通过。
- Maple `pnpm exec vitest run src/tabs src/infinite-scroll --config ../cli/lib/node/config/vitest.config.js`：45 项通过。
- Maple Resolver `pnpm test`：构建成功，17 项通过，覆盖新 TabNav/TabsNavs 和旧 Tab 入口移除。
- Maple `pnpm docs:check`：224 个示例 SFC，0 失败。
- 改动范围 ESLint：Tabs、InfiniteScroll 联动测试与示例、Resolver，全部通过。
- Cedar 全量 lint 在最终上下文修正前一次检查通过；最终改动范围无 lint 报错。
- 两端 Less 编译成功。
- Chrome 实际浏览器：六种外观、横向/纵向、编辑模式、点击与方向键；浅色、深色 axe WCAG A/AA 检查 0 违规。
- 390px 触摸仿真：页面宽度 390px、无横向溢出，最小触控高度 44px，自动滚动箭头全部隐藏。
- SSR：服务器生成 tab/tablist/tabpanel、选中态及关联 ID。
- `git diff --check` 通过。

## 验证边界

- 全仓库类型检查发现任务范围外错误：Cedar 的并行 Collapse 修改；Maple 的 Collapse、Card/Form/Image/InputNumber 示例。Tabs 无诊断。该工作区存在其他并行修改，不能把当时的全仓库结果视为发布通过。
- Maple 全仓库 `pnpm lint:check` 运行约 20 分钟未结束，主动中断；只声明改动范围 lint 通过。
- 未运行两个组件库的全量发布构建，未提交或发布。浏览器覆盖 Chrome 与 Chrome 触摸仿真，未验证真机 Safari。

## 预期变化

默认首个禁用项不再被选中；未激活面板用 hidden 隔离键盘和辅助技术；内容动画统一为可选淡入；关闭按钮通过 Delete 键提供等价操作，删除后焦点移至相邻可用项。选中文字使用 primary-8 提高默认主题对比度。旧快照仅更新空 Tabs 根元素的新类名。

## 样式 API 追加验证

新增六个样式定制 Props，移除 headerPadding 与旧示例 bodyPadding。两端 Tabs 现为 25 项 Props。

- Cedar Tabs 29 项、Maple Tabs/InfiniteScroll 46 项测试通过。
- 新用例覆盖三个 DOM 层级的 class/style 合并、响应式替换、内联样式清理，以及选中/禁用类和隐藏面板保留。
- 两端 Tabs 范围 vue-tsc、Maple Tabs 范围 ESLint、同源检查通过。
- 示例语法检查 225 个 SFC，0 失败。
