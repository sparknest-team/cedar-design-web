# 验证记录

2026-09-11：44 个文件、253 项 Scheduler 全量测试通过；声明检查通过。新增 demo 测试验证单击 Dialog、取消不写入、保存通过 change、Popover→高级编辑、失败保留草稿、只读不提供保存与删除动作。

浏览器验证：单击 Popover 日程显示标题、时间、说明与演示负责人；高级编辑打开对应 Dialog；保存修改后的标题更新到卡片；直接弹窗 demo 单击打开另一个独立日程窗口；Escape 关闭摘要，无 error 日志。

共享规范：95 个组件、0 errors，Col/Row 缺少行为测试的 2 个既有 warnings。最终构建与公开类型契约均退出 0，包检查 0 errors、0 warnings。补充摘要切换保护后 demo 专项 3/3 再次通过；旧摘要的 click-outside 不会关闭新摘要。

定位增量：纯计算专项覆盖左右顶对齐、侧边底对齐、过高贴边、两侧过窄切换上下、超大内容和 visualViewport 偏移。真实浏览器整卡 top=349.0625 时，弹层 top 相同，水平间距 10px；480×320 视口自动切换 bottom-start 且不越界；280×160 视口内部滚动并保持边界内。临时视口尺寸已恢复。

定位增量最终回归：45 个文件、256 项测试全部通过；包含摘要包装组件和共享 demo 的专用 vue-tsc 检查通过。没有修改发布组件 API 或全局 Trigger 实现。

## 2026-09-11：单元格新增 Popover

- 定向运行 event-details-demo.test.tsx：5 项全部通过，覆盖单元格快速创建、高级编辑保留草稿，以及工具栏新增直接弹窗。
- event-details-example.vue 和 event-summary-popover.vue 定向 vue-tsc 检查通过。
- 浏览器验证：点击周一 08:00 空白格打开新增 Popover；填写名称后进入高级编辑，名称与单元格时间保留；工具栏新建显示 source=toolbar 的新增窗口。
- 本次沿用示例 preview 配置与 editor-request.source 分流，未新增 Scheduler 公共 API。

## 2026-09-11：新增占位日程

- Scheduler、event-details-demo、interaction-completion 三个测试文件共 31 项通过，覆盖内置新增占位、关闭清理、外部 Popover 草稿同步及保存清理。
- 浏览器验证：单击周一 08:00 后显示“新日程 08:00–08:30”占位，透明度 0.85 且不接收指针；Popover 输入“现场巡检草稿”后占位标题即时同步。
- `previewEvent` 只进入视觉预览层，不修改 `modelValue`，拖拽预览具有更高优先级。
