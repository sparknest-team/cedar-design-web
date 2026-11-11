## MODIFIED Requirements

### Requirement: 日期时间展示边界
DateTimePickerOptions 定义 use12Hours、step、hideDisabledOptions、class/style；运行时白名单同类型一致，格式与秒精度由日期顶层指定。Date/DateRange/DatePicker/DateRangePicker 使用此选项，不允许嵌套值、约束、通知或布局接管。

#### Scenario: 调整时间展示
- WHEN 嵌套 use12Hours 或 step 变化
- THEN 时间网格/时钟按展示能力刷新，不自动修改日期值。

### Requirement: 移动滚轮展示边界
DateWheelOptions 定义 optionHeight、optionCount、class/style；单值和范围的日期/时间滚轮都转发该选项。不允许嵌套 columns、toolbar、模型、弹层、字段映射或通知覆盖。

#### Scenario: 时钟分支
- WHEN presentation=calendarClock 且时间面板被打开
- THEN 内部 TimePicker.presentation=clock，不能通过嵌套选项改为 picker。
