# Simplify FilterForm fields

## Why
页面需要在 fields、fieldMap 和 optionsMap 间维护关联，且值同步事件需要逐组件配置。

## What Changes
- BREAKING: 用 fields[].component 替代 type，支持组件对象或注册表 key。
- 删除 optionsMap、optionsFromMap、valueEvent，统一 modelValue / update:modelValue。
- 保留可选 fieldMap 和 defaultProps；选项通过 props.options 响应式更新。
- 迁移文档、demo 和测试；移动端没有对应 FilterForm 组件。

## Impact
仅 FilterForm 的配置 API 变化，不保留旧 API 兼容分支。
