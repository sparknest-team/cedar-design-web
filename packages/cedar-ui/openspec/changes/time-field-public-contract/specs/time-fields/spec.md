## ADDED Requirements

### Requirement: 范围占位符
TimeRange SHALL 接受 string 或 string[]。字符串用于两个端点；数组按端点取值，缺项为空；显式空字符串不回退到默认值。未传值时使用各端现有默认文案。

### Requirement: 字段图标与焦点
Time / TimeRange SHALL 提供 suffix-icon 插槽，参数为 focus、popupOpen。不保留 arrow-icon 公开别名。focus(index = 0) SHALL 将焦点移到指定端点，不提交值。
