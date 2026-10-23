# Cedar 组件可访问性规范

组件以 WCAG 2.2 AA 和 WAI-ARIA Authoring Practices 为验收基线。

## 通用要求

- 优先使用原生语义元素；模拟交互控件必须提供等价 role、状态和键盘行为。
- 所有操作必须可用键盘完成，并使用 `:focus-visible` 提供可见焦点。
- 纯图标操作必须具有 accessible name；装饰图标必须对辅助技术隐藏。
- `disabled` 必须阻止事件，`loading` 必须暴露 `aria-busy` 并避免重复提交。
- 错误不能只通过颜色表达；动画必须尊重 `prefers-reduced-motion`。
- 文本和交互状态的颜色对比度必须达到 WCAG 2.2 AA。

## 组件要求

- Dialog/Drawer：modal 语义、焦点捕获、关闭后焦点恢复、Escape 行为。
- Tooltip/Popover：trigger 与浮层通过 ARIA 关系关联。
- Tabs：`tablist`/`tab`/`tabpanel`、选中状态、方向键和 Home/End。
- Checkbox/Radio/Switch：键盘切换、checked/indeterminate 状态。
- Input/Form：label、description、error 与控件关联，错误时使用 `aria-invalid`。
- Select/Menu/Tree：符合对应 APG 模式的焦点管理和键盘导航。
- Progress/Loading：提供角色、当前值或可读的未知进度状态。

每个交互组件必须包含键盘与关键 ARIA 自动化测试，并在 README 增加“可访问性”说明。
