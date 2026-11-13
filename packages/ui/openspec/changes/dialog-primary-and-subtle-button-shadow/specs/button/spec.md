## MODIFIED Requirements

### Requirement: elevation 投影

Button 与 ButtonGroup SHALL 在 elevation 省略时不添加阴影；显式为 true 时使用等级 1。显式数值继续归一化到 0～24，false 关闭。仅实心变体显示阴影。

#### Scenario: 默认无阴影
- **WHEN** 使用实心 Button 或 ButtonGroup，未设置 elevation
- **THEN** 不添加阴影
