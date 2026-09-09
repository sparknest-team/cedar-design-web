## ADDED Requirements

### Requirement: Percentage uses the same scale
Both Progress components SHALL accept finite decimal numbers or numeric strings on a 0–100 scale, clamp out-of-range values, and normalize invalid input to zero. Text slot values and accessible values SHALL use the same scale without rounding geometry. Cedar callers SHALL migrate old ratios by multiplying by 100; no automatic ratio detection is permitted.

### Requirement: Independent identical Switch implementations
Both Switch components SHALL use independently copied source, props and styles, adapting only package namespace and local configuration/form bridges. Both SHALL implement circle/round/line/md3, default circle, sm/md/lg, controlled and uncontrolled values, readonly, loading, ripple, text/icon slots, and identical events.

#### Scenario: Async change control
- **WHEN** beforeChange(nextValue) returns false or rejects
- **THEN** no value/change event SHALL be emitted; pending state SHALL clear.
- **WHEN** a pending switch is unmounted, deactivated, disabled, made readonly, or its value changes externally
- **THEN** the stale pending result SHALL NOT commit a value.

### Requirement: Independent copied implementations
Card、Affix、Badge SHALL 在两包保留同构的独立实现，不共享实例或跨仓库模块。源实现修改后复制，只有命名空间、工具导入和安装入口可以适配。

#### Scenario: Badge defaults
- **WHEN** 两端 Badge 未传 status 并有正数 content
- **THEN** SHALL 显示红色背景、白色文字，并应用相同的截断、显隐和偏移逻辑。

### Requirement: Distinct, aligned autocomplete policies
两端 AutoComplete SHALL 提供 shouldOpen 与 filterOption。前者控制展开许可，后者控制选项过滤。

#### Scenario: Filtered server options
- **WHEN** filterOption=false 且 shouldOpen 返回 true，有可展示选项且控件已聚焦、未禁用
- **THEN** SHALL 展示传入选项，不进行第二次客户端过滤。
