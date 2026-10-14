## MODIFIED Requirements

### Requirement: 面板事件通过字段公开
Date/DateRange 内部面板的 update:pickerValue、picker-value-change(value, dates, texts)、select-shortcut(shortcut) 应各转发一次至字段公开入口，不能因平台 presentation 丢失。

#### Scenario: 单值或范围导航
- WHEN 日历面板提出视口导航
- THEN 外部收到视口请求与对应三参数通知，不改写选中 modelValue；若嵌套 pickerValue 受控且父级拒绝，则保留原视口，显式回写后才更新。

#### Scenario: 快捷项选择
- WHEN 通过受保护的快捷项动作选择有效候选
- THEN 字段收到原快捷项对象，并按字段原有确认策略管理选择草稿，不把导航或通知当作选择提交。
