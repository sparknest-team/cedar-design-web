# 日程单击详情与摘要示例

用户要求堆叠日程单击直接打开窗口，或先打开 Popover 再进入高级编辑。移除叠放卡片阻止单击激活和独立双击激活的行为，保留焦点前置。复用现有 editable/editor-request/event 插槽，不新增公共 API。

新增 event-dialog 与 event-popover 两个 demo，共享不可变草稿、原数据过期检查、只读、模拟保存失败、取消和通过 Scheduler.change 保存/删除的实现。Popover 使用内部组件，普通查看只展示业务摘要；高级编辑使用内部 Dialog/Form/Input/Date/Textarea/Button。日期导航与指针手势开始关闭摘要，避免拖拽虚影复制已打开的 Popover。

站点/负责人是明确标注的演示字段；不接入外部服务。

## 整卡锚定与视口自适应

摘要通过内部包装组件复用 CPopover，reference 指向整张日程卡片。定位计算与 DOM 测量分离，优先 right-start、left-start、right-end、left-end；两侧有宽度时优先保持侧边，垂直超出则贴近视口上/下边缘；两侧过窄改用 top/bottom，并双轴限制在可视视口内。

360px 默认宽度、8px 视口边距、10px 卡片间距；最大尺寸取 visualViewport（缺失时 window），过高滚动、长文本折行。打开时绑定 ResizeObserver、滚动和 resize；关闭或卸载清理，异步挂载有版本保护。仅影响日程摘要示例，不改变全库 Popover 默认定位规则。

## 点击单元格新增也采用 Popover

同一 preview 配置覆盖已有日程编辑和 source=cell 的新建请求；工具栏、拖入、复制等其他来源继续打开 Dialog。示例捕获单元格点击（含键盘激活生成的 click），把真实单元格作为独立 Popover reference；不复用上一次点击位置。

新增 Popover 复用相同草稿与保存校验，支持快速创建、取消和携带草稿进入高级编辑。开始查看其他日程、日期范围变化或只读状态变化关闭旧弹层；保存成功关闭新建摘要。未保存草稿不会提前写入主值。

## 新增日程占位

新增编辑期间在目标时间段渲染不参与数据提交和规则校验的视觉占位。内置编辑器自动使用当前新增草稿；外部 Dialog/Popover 可通过 `previewEvent` 传入同一份响应式草稿，使标题、日期和时间修改同步到占位。保存、取消或关闭后移除；拖拽中的实时预览优先于编辑占位。
