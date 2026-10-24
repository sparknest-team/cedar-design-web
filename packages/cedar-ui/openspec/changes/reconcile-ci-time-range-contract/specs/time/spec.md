# 时间范围提交

## MODIFIED Requirements

### Requirement: 保持起止端点身份

字段文本、字段弹层和独立面板 SHALL 使用同一提交边界。提交不得隐式交换起止值。`showNextDay=false` 时起点晚于终点 SHALL 拒绝提交；`true` 时 SHALL 保留端点顺序。两个端点相等 SHALL 允许提交。无论次日开关状态，格式、步长、上下界和禁用回调仍 SHALL 校验。

#### Scenario: 倒序文本不可提交后修复

- GIVEN 未开启次日且模型为 09:00 至 18:00
- WHEN 文本改为 19:00 至 10:00 并确认
- THEN 不触发模型更新或 change
- WHEN 修复为 09:00 至 20:00 并确认
- THEN 恰好提交一次 09:00 至 20:00

#### Scenario: 次日保留端点且不能绕过禁用规则

- GIVEN 开启次日
- WHEN 提交合法的 19:00 至 10:00
- THEN 保留顺序提交；若 19 点被禁用或不满足当前步长则拒绝提交
