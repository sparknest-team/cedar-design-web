## MODIFIED Requirements

### Requirement: 统一语言来源
日期组件不再接收 locale，使用各库全局语言及既有 Provider。切换语言应刷新月份标签、标题与动作，不修改模型。不得在翻译钩子内再次修改全局 dayjs 语言。

#### Scenario: 同实例切换语言
- WHEN 全局语言从中文变为英文
- THEN 日期标签和动作同时更新，无选择通知。

### Requirement: 范围内嵌日历外观
Maple DateRangePicker.datePickerProps 仅接受 hint、color、titleColor、buttonElevation、touchable。运行时同样按白名单筛选，不能接管模型、事件、规则、视口、presentation、elevation、abbreviation 或当前动作。默认值保持不变；顶层 dayStartOfWeek、abbreviation 管理日历。DateRange 字段通过 dateRangePickerProps 设置此选项。

#### Scenario: 非类型化调用
- WHEN JavaScript 传入嵌套 onUpdate:modelValue、pickerValue 或 presentation
- THEN 均不转发给内部日历，主状态与布局不受影响。
