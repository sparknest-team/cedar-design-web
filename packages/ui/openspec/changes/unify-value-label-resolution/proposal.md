## Why

业务保存稳定身份，而字段需要在初始值、候选项变化和业务数据更新时反显名称。当前多个字段的回退签名不一致，InputTag 缺少独立值的显示解析，Mention 使用纯文本而无法表示独立的提及身份。

## What Changes

- 统一适用组件的同步 `fallback-option` 契约，业务负责异步获取和缓存。
- InputTag 的原始值通过 fallback 反显，不改变 modelValue。
- Mention 候选源改为 `options`，并为身份与展示分离的原子提及项定义可逆的序列化和编辑语义。
- AutoComplete 保持自由文本模型；两端同步适用的公共契约与测试。

## Non-goals

- 组件自动请求、缓存或重试业务数据。
