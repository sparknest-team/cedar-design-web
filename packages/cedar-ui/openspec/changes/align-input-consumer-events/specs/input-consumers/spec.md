# Search / AutoComplete 输入依赖契约

## MODIFIED Requirements

### Requirement: 统一通知顺序
输入包装组件 MUST 通过 input 通知输入、update:modelValue 请求更新模型。Search 的清空 MUST 顺序触发 clear、input、update:modelValue、change，各一次，且仅写一次字段模型，不自动搜索。AutoComplete 正常输入在模型更新通知后发 search；清空不发 search、不选择候选、不重新展开面板。候选选择仍为 update:modelValue、select、change。

#### Scenario: 受控模型拒绝清空
- WHEN 父组件保留原受控值并重复执行清空
- THEN 每次有效请求的 change 不得被错误的已提交基线吞掉，渲染仍保持实际受控值。

#### Scenario: trim 提交
- WHEN 用户 Enter 提交 trim 后的关键词
- THEN 包装组件同步模型请求；搜索使用父组件已接受的最新值，父拒绝更新时不伪造内部状态。

### Requirement: Form 不重复提交
包装组件 MUST 与原生 Input 分工；阻止默认行为的候选键盘提交不能再次提交旧查询文本。每次语义动作仅通知 Form 对应触发器一次。
