# Time 格式基础协议

## ADDED Requirements

### Requirement: 同一默认格式解析
Cedar 字段和纯面板 SHALL 在未传 format 时默认 HH:mm:ss；use12Hours=true 时默认 hh:mm:ss a。显式有效格式 SHALL 保持原样。

#### Scenario: 独立十二小时面板
- WHEN 面板仅传 use12Hours=true
- THEN 使用 hh:mm:ss a，并显示十二小时列及 AM/PM 列

### Requirement: 字面量不产生列
方括号文字 SHALL 不参与时、分、秒或 AM/PM 列判断。无时分秒 token 的 format SHALL 回退默认格式。

#### Scenario: 文字包含秒和时段字母
- WHEN format 为 [seconds AM] HH:mm
- THEN 只生成小时和分钟列

### Requirement: 动态格式
格式计算 SHALL 跟踪 format/use12Hours 的添加和变更，不捕获初始化快照。
