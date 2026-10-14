## MODIFIED Requirements

### Requirement: 只公开实际支持的字段配置
Cedar Date 不公开 pickerProps；Cedar DateRange 不公开 pickerProps/datePickerProps。Date.datePickerProps 和 DateRange.dateRangePickerProps 分别配置其完整日期面板，timePickerProps 配置两端都有的时间展示。Maple 保留有实际作用的 DateWheelOptions/DateRangeCalendarOptions。

#### Scenario: 发布类型
- WHEN Cedar 消费者传入已删除参数
- THEN 类型检查报错且运行时 props 对象没有该属性，无兼容别名。

### Requirement: 初始值由日期顶层持有
日期 Demo 使用顶层 defaultValue 提供初始日期时间，不再在 timePickerProps 中设置 defaultValue。
