# Tasks

## 1. 调研与迁移面

- [x] 1.1 记录 Cedar / Maple Loading、Result 现有 Props、插槽、DOM、token 和测试基线。
- [x] 1.2 扫描两库的 `dot`、`element`、`image`、`footer` 消费方并列出迁移清单。
- [x] 1.3 确认状态图形的同源模板和两端 token 差异。

## 2. Loading 同源

- [x] 2.1 统一 Props 与插槽，删除 `dot` 和 `element`，将 `hideIcon` 同步到 Maple。
- [x] 2.2 统一主体 DOM、尺寸逻辑、遮罩、可访问性和 reduced-motion 行为。
- [x] 2.3 使两端 loading 指令复用同一组件契约，覆盖更新、fullscreen、background、清理和 SSR。
- [x] 2.4 更新两端消费方、Demo、文档、类型和单测。

## 3. Result 同源

- [x] 3.1 统一 Props，将 `imageSize` / `animation` 同步到 Cedar。
- [x] 3.2 统一九种状态图形、image container、尺寸计算、动画与 reduced-motion 行为。
- [x] 3.3 统一 `icon` / `title` / `subtitle` / `extra` / `default` 插槽，删除 `image` / `footer`。
- [x] 3.4 更新两端消费方、Demo、文档、类型和单测。

## 4. 同源保护与验收

- [x] 4.1 增加 Loading / Result 配对契约测试和源码归一化检查。
- [x] 4.2 运行两端 Loading / Result 原有测试、新增测试与 SSR 测试。
- [x] 4.3 运行两端类型检查、组件样式 Less 编译与 UI 包构建。
- [x] 4.4 仅更新本轮状态图形和 DOM 变化直接导致的快照，记录所有范围外回归失败。
