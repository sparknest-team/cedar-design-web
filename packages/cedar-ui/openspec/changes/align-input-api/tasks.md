## 1. Contract

- [x] 1.1 新增 Input 公共契约，明确 Props、Events、Slots、Expose 和平台差异。
- [x] 1.2 运行 OpenSpec 严格校验。

## 2. Cedar

- [x] 2.1 更新 props、值模型、输入类型、长度限制和默认值。
- [x] 2.2 统一 change/clear/Enter 事件、插槽和 inputAttrs 优先级。
- [x] 2.3 完善无障碍行为和 Input 单测。
- [x] 2.4 更新 README、demo 和导出类型。

## 3. Maple

- [x] 3.1 更新 props、值模型、输入类型、长度限制和 FormItem 错误合并。
- [x] 3.2 保留 hint/line 浮动能力，统一插槽、事件和原生属性透传。
- [x] 3.3 同步 Cedar 的键盘清除、ARIA 和交互测试标准。
- [x] 3.4 更新文档和 example。

## 4. Verification

- [x] 4.1 通过 Cedar Input 单测、类型检查和构建。
- [ ] 4.2 Maple Input 定向单测和构建已通过；全量类型检查仍受仓库既有非 Input 类型错误阻断。
- [x] 4.3 检查两端 contract diff、文档 API 和测试场景一致。
