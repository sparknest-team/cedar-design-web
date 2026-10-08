## ADDED Requirements

### Requirement: 显式配置入口
Time 和 TimeRange SHALL 使用 popupProps 配置浮层外观及位置；字段状态和交互方式不允许被嵌套配置覆盖。顶层 popupContainer（含 false）优先。Cedar SHALL 显式声明 inputEditable，默认 true；普通 attrs 只透传字段，不作为面板配置。

### Requirement: 字段通知一致
Time 和 TimeRange SHALL 在非禁用字段点击时发送一次 click(event)。只读字段可点击通知但不能展开。关闭请求 SHALL 使用 open-change(false)，不提供携带旧模型值的 close 事件。失焦方法 SHALL 请求关闭而不提交草稿。
