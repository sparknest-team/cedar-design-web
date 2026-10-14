## MODIFIED Requirements

### Requirement: 日期展示模式所有权
Maple 日期字段及纯面板只能在各自根 presentation 选择有效展示模式。DatePickerOptions/DateRangePickerOptions 为字段嵌套配置，不允许 presentation；Cedar 不因对齐而增加未实现的滚轮/时钟模式。

#### Scenario: 根默认与显式展示
- WHEN Maple 字段只传嵌套 presentation 或同时传根 presentation
- THEN 嵌套选择器被过滤；根默认 picker 或显式有效模式决定渲染，不通过嵌套兼容分支改变。

### Requirement: 类型和运行时同一边界
两端日期嵌套过滤器拒绝 presentation 与已有状态/模型/规则所有权键；保留合法周起始、视口、快捷项及外观。Maple 发布入口与 date/date-range 子路径的 Options 均拒绝嵌套 presentation，根 Props 保留正例。
