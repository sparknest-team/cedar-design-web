# Time 格式与值协议

## ADDED Requirements

### Requirement: 统一输入及输出
Time 与时间面板 SHALL 接受 string、Date、number（毫秒时间戳）；范围接受对应数组。输出 SHALL 是 format 格式化字符串（范围为数组）。

#### Scenario: Date 输入
- WHEN 输入本地 13:05 的 Date 且 format=hh:mm A
- THEN 显示 01:05 PM，选择后返回同格式字符串

### Requirement: 严格解析
字符串 SHALL 严格匹配 format。非法值 SHALL 不自动纠正或回写；Cedar 受控纯面板 SHALL 不因非法值而显示旧非受控值。

#### Scenario: 溢出时间
- WHEN modelValue 为 25:00:00
- THEN 不显示合法时间且不主动派发更新

### Requirement: 移动渲染扩展
Maple SHALL 删除公开 useSeconds 和 format=ampm/24hr 枚举。小时/分钟/秒列由 format 推导；AM/PM 列由 use12Hours 或十二小时 token 推导。Date 内部调用 SHALL 传明确的时间格式。

#### Scenario: 格式动态变化
- WHEN Date 模型保持不变，format 从 HH:mm:ss 改为 hh:mm A
- THEN 候选和反显更新，不主动写回模型

### Requirement: 时钟坐标
时间禁用、步长、min/max、范围排序 SHALL 使用 24 小时时钟值；min/max 为 HH:mm[:ss]，不随展示格式改变。缺省单位按零参与移动候选。

#### Scenario: AM/PM 范围跨日
- WHEN 起止为 11:30 PM 与 12:30 AM
- THEN showNextDay=true 保持顺序并提示次日；否则确认时排序
