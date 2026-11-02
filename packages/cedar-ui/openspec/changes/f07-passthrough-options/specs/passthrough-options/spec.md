# 配置边界

## ADDED Requirements

### Requirement: Opt-in safe types
The libraries SHALL export component-specific passthrough types without narrowing existing Props or changing runtime precedence.

#### Scenario: A caller chooses a typed configuration
- WHEN a configuration uses the new type
- THEN valid presentation fields compile, owned state fields fail even when supplied through a variable, and the configuration is accepted by the legacy host Prop.

#### Scenario: Legacy configuration remains compatible
- WHEN a caller uses a published wide Prop with owned or overridden fields
- THEN it continues to compile and keeps the existing override/filter behavior.

### Requirement: Documentation and demos reflect actual ownership
The docs SHALL distinguish AutoComplete internal opening, host-controlled selection opening, container fallback, fixed Date interaction fields and legacy nested presentation overrides on both platforms.

#### Scenario: A user runs a typed demo
- WHEN a demo is mounted
- THEN the host owns its documented state and the supported nested presentation options remain effective.
