# 时间字段展示配置边界

字段负责 modelValue/defaultValue、open/defaultOpen、时间规则及 disabled/readonly。
嵌套 timePickerProps/timeRangePickerProps、pickerProps、popupProps 只定制展示，不可覆盖相应所有者状态、规则及通知事件。
运行时过滤与公开类型保持一致；不保留旧配置别名。顶层 popupContainer 优先于 popupProps.popupContainer。

Cedar Time/TimeRange 补齐 hint/line/textColor/focusColor/blurColor，TimeRange 补齐 separator。
Maple Time/TimeRange 补齐 error，undefined 继承 Form，显式 false 可覆盖。
保留两端已有默认外观；Form 外置标签抑制浮动提示。无新 CSS token。
