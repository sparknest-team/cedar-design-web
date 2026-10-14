# Slider 主体同源

补齐 Cedar 的只读、触控标签和颜色几何配置，Maple 的 marks、ticks、InputNumber、非受控初始值和提示格式化。Pointer Events 覆盖鼠标/触控，本地键盘无全局监听，范围固定低/高端且不可交叉。showTooltip 统一为 boolean|'always'，删除 Maple labelVisible 并迁移。两端独立复制主体/值模型/样式；Form安装接线本地维护，不引入共享运行时。保留 InputNumber 集成并隔离内部重复验证。

## Non-goals
不修改公共 Input/InputNumber 基础 API，不引入平台配置对象。

