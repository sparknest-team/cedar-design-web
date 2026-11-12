## Implementation

- [ ] 明确统一 fallback 签名、优先级与多级路径语义，并审查两端现有兼容性。
- [x] 实现 InputTag 同步反显并覆盖编辑态与阅读态。
- [ ] 迁移 Select、TreeSelect、Cascader、PeopleSelect 两端契约与调用方。
- [x] Mention 候选入口从 `data` 迁移到 `options`。
- [x] 建立仅存 ID 的提及编码工具及往返测试。
- [x] 定义并实现 Mention 原子编辑、可逆序列化、options 与反显。
- [ ] 同步中英文文档、示例、类型和完整行为测试。
- [ ] 执行类型检查及相关组件测试，验证浏览器交互。
