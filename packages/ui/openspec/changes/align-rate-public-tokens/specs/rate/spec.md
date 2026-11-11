# Rate 样式契约

## ADDED Requirements

### Requirement: 两端公开 Token 同名同义
Rate MUST expose size、gap、min-height、action-padding、empty-color、active-color、disabled-color、error-color、active-scale、transition-duration、scale-duration、transition-timing-function、focus-color、focus-width、focus-offset；仅前缀分别为 c/mp。公开 Token 与私有计算映射严格分离。

#### Scenario: 主题定制
- WHEN 修改对应公开 Token
- THEN 两端独立维护的样式读取相同含义，size/gap 的实例 Prop 仍优先；低动态偏好禁用非必要动画。

### Requirement: 默认值差异可审计
既有尺寸、间距、选中颜色、动效时长差异 MUST 在 theme-contract 中登记。禁用、错误和焦点使用系统语义色。暗色无需重复覆盖能够从语义色继承的组件 Token。
