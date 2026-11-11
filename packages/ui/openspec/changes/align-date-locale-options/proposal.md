# 日期语言与嵌套参数边界

删除 Cedar 日期组件级 locale，日期标签和动作统一使用本库全局 Locale/Provider。Maple 范围面板 datePickerProps 收窄为真正生效的日历外观，不允许嵌套控制器、事件、视口或根布局参数。

不增加共享运行时、不保留兼容字段。标题布局、普通 Picker 的独立 API、时间面板参数继续独立评估。
