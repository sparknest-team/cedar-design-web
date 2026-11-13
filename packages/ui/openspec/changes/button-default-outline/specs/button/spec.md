## MODIFIED Requirements

### Requirement: Button 默认描边与组继承

Button SHALL 按显式 variant、最近 ButtonGroup 的 variant、outline 的顺序解析变体。ButtonGroup SHALL 默认使用 outline，两端一致。

#### Scenario: 默认描边
- **WHEN** Button 或 ButtonGroup 未指定 variant
- **THEN** 按钮渲染 outline 变体

#### Scenario: 显式实心
- **WHEN** Button 或 ButtonGroup 指定 variant="default"
- **THEN** 使用实心变体，子按钮显式值优先于按钮组
