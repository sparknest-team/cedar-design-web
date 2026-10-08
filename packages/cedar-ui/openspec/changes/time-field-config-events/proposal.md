# 时间字段配置入口及事件收口

两端字段使用 popupProps 配置本地浮层（Cedar Trigger，Maple Popup），timePickerProps/timeRangePickerProps 仅配置面板。Cedar 不再从未声明 attrs 接收面板或浮层选项，原生属性传给字段。公开 click 在非禁用字段点击时通知一次；只读字段可通知但不展开。移除 Maple close，关闭请求统一 open-change(false)，不新增兼容别名。

本轮不改变日期字段接口或两端浮层呈现方式。
