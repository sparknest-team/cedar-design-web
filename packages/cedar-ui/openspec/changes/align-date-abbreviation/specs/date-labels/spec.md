## ADDED Requirements

### Requirement: 月份缩写
DatePicker / DateRangePicker 的 abbreviation 默认 true（Date / DateRange 通过 datePickerProps / dateRangePickerProps 配置），仅控制日历月份选择网格文本。false 使用当前 Locale 的完整月份名。运行时改变必须立即刷新，不改变 modelValue，也不发选择事件。标题、星期和滚轮文本不受影响。

#### Scenario: 范围日历
- WHEN 顶层 abbreviation=false，嵌套 datePickerProps.abbreviation=true
- THEN 使用完整月份名，顶层选项优先。
