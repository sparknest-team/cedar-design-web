- [x] 统一 FieldDecorator 实现和两端调用方。
- [x] 统一 Input、Password、Group、GroupLabel 及输入状态逻辑。
- [x] 接入各端全局表单、ConfigProvider 和语言系统。
- [x] 对齐样式结构、保留 PC/移动端 token 与清除显示差异。
- [x] 更新文档、demo、类型导出、同源检查和调研状态。
- [x] 完成相关测试、类型、样式与文档验证。

验证记录：两端 typecheck、18 对文件同源检查、token 契约、Less 编译、Maple 792 个 demo 语法检查及受影响源码 lint 已通过。完整仓库 lint:check 已尝试，但长时间未完成后停止，不标记为通过。生产包和整站构建未在本轮重跑。

关联回归：Cedar 76/76、Maple 224/224；Maple resolver 18/18。浏览器验证了两端浮动提示、组合禁用继承、密码切换、移动端失焦后清除按钮常驻，以及 Maple 中间卡片和右侧移动预览的子组件解析。
