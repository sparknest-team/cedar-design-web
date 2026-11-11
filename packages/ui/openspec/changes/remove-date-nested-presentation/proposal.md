# 日期展示模式归根所有

Maple Date/DateRange 的根 presentation 默认 picker，在 dateFieldPanelOptions 中始终覆盖嵌套 presentation；公开 DatePickerOptions/DateRangePickerOptions 仍接受该无效键。Cedar 只有桌面日历且没有该展示模式 Prop。

移除 Maple 两种字段嵌套 Options 的 presentation 类型字段，不改变纯 DatePickerProps/DateRangePickerProps 或 Date/DateRange 根选择器。两库独立复制的日期嵌套过滤器将 presentation 作为根所有权键拒绝，防止 JS、旧对象或未知键穿透。同步调用方、Demo、文档、发布类型反例、运行时与真实展示验证。无兼容别名，无嵌套 fallback，无共享运行时。
