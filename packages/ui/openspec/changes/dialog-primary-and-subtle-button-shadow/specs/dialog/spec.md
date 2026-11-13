## MODIFIED Requirements

### Requirement: 确认按钮操作层级

Cedar 与 Maple Dialog SHALL 默认使用 primary 状态、default 实心变体的确认按钮。取消按钮 SHALL 使用描边外观（Maple 显式 outline，Cedar 继承 Button 默认值）。confirmButtonProps 与 cancelButtonProps SHALL 能分别覆盖按钮的状态和变体。

#### Scenario: 默认确认按钮
- **WHEN** Dialog 未指定 confirmButtonProps
- **THEN** 确认按钮使用 primary + default，默认不添加阴影

#### Scenario: 自定义确认按钮
- **WHEN** confirmButtonProps 指定 status 或 variant
- **THEN** 使用指定值覆盖内置默认值
