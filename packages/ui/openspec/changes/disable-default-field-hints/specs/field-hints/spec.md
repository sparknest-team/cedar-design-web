## ADDED Requirements
### Requirement: Floating field hints are opt-in
Cedar and Maple field consumers MUST default to hint=false when neither a component nor its inherited InputGroup explicitly enables the floating hint. The shared FieldDecorator default MUST be false. Native placeholders MUST remain visible when hints are off.

#### Scenario: Explicit hint and group inheritance
- **WHEN** a consumer or inherited InputGroup sets hint=true
- **THEN** floating hints remain enabled, subject to existing outer-label suppression
- **AND** an explicit child hint=false overrides the inherited value

#### Scenario: Omitted field hint
- **WHEN** Input, InputPassword, InputNumber, Textarea, AutoComplete, Select, Cascader, Date, DateRange, Time or TimeRange omits hint
- **THEN** no floating hint or hint outline notch is rendered by default
