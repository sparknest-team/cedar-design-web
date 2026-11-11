## Implementation
- [x] 将两端 props 与实现统一为 inset / spacing，不保留旧属性。
- [x] 同步样式 modifier、主题 token、token 契约与样式参考。
- [x] 迁移调用方、demo、功能调试配置和中英文文档。
- [x] 验证新属性的预设、自定义值、方向切换与旧 API 移除：两端 27 项测试通过；活动源码、文档、IDE 提示和 Playground 资源无旧属性调用。
- [x] 运行相关组件测试、类型、lint、demo 和同源检查：两端 typecheck 与组件范围 lint 通过；26 个 SFC 编译、8 对示例和中英文引用检查通过；Divider 同源检查通过。
