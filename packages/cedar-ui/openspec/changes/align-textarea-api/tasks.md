## 1. Contract

- [x] 1.1 建立 Textarea 值模型、事件、长度、高度、插槽和无障碍契约。
- [x] 1.2 记录 Cedar/Maple 平台差异与首版 TypeScript 对齐边界。
- [x] 1.3 运行 OpenSpec 严格校验。

## 2. Cedar

- [x] 2.1 统一 props、受控/非受控值、trim、长度限制和错误合并。
- [x] 2.2 统一 input/change/clear/keydown 事件与 textareaAttrs 优先级。
- [x] 2.3 完善 rows、resize、autoSize、插槽和无障碍行为。
- [x] 2.4 更新 README、demo、类型导出和 Textarea 单测。
- [x] 2.5 回归 Mention 与 Map 直接消费者。

## 3. Maple

- [x] 3.1 按 Cedar 首版职责和命名实现相同值、长度与事件契约。
- [x] 3.2 补齐 defaultValue、error、rows、autoSize、插槽和原生属性优先级。
- [x] 3.3 保留移动端 hint/line/颜色与默认禁用 resize 的平台差异。
- [x] 3.4 更新中英文文档、example、locale 和 Textarea 单测。

## 4. Verification

- [x] 4.1 通过 Cedar Textarea、Mention、Map 定向单测、类型检查和类库构建。
- [x] 4.2 通过 Maple Textarea 定向单测、规范检查和构建；完整类型检查仍受仓库既有跨组件错误阻断。
- [x] 4.3 检查两端 contract diff、文档 API、测试场景和 `git diff --check`。

> 验证备注：Cedar 文档构建被既有缺失 demo `src/time-range/__demos__/disabled-parts.vue` 阻断；Maple 完整类型检查仍报告既有 140 项跨组件错误。两者均未包含 Textarea 新错误。
