## Why

Cedar Input 的输入控制、组合与表单反馈能力需要补齐 Maple 的浮动提示能力，再将完整实现独立复制到 Maple。当前两端 FieldDecorator 的状态名称、DOM、清除操作和布局测量不同，直接复制 Input 会影响 Select、Textarea 和日期触发器。

## What Changes

- Cedar 重构为完整的 Input / InputPassword / InputGroup / InputGroupLabel 和 FieldDecorator SFC，再复制到 Maple，各库独立维护。
- FieldDecorator 统一 focused / error / disabled / readonly、前后缀、clear-icon、浮动标签和缺口测量；删除 Maple 的 isFocusing / isError / formDisabled 内部协议并迁移全部调用方。
- Input 统一原生属性、光标保持、IME、长度处理、受控/非受控值、提交事件、表单反馈、外部标签处理及 Group 覆盖规则。
- 默认 hint 和尺寸/清除按钮可见性保留在两端 props 与样式中；主体不引入 platform 配置或共享运行时实例。
- 全局语言和表单系统通过各库自己的集成文件接入，组件内部不维护私有语言字典。

## Validation

验证两端输入家族、FieldDecorator 使用方、表单状态、键盘操作、浮动标签几何与 SSR；增加逐文件同源检查，更新 API、demo、菜单和调研状态。
