## MODIFIED Requirements

### Requirement: 默认周文本反解析
type=week 且展示格式为 gggg-wo 时，字段应按实例 UI 语言和 dayStartOfWeek/yearStart 将输入解析为该周起始日；只有再格式化与原文本一致时接受。复用原有日期禁用与范围校验，不绕过所有者提交规则。

#### Scenario: 跨年周
- WHEN 中文周一起始输入 2020-53周
- THEN 解析为 2020-12-28，默认模型输出 YYYY-MM-DD，通知仍为本地周文本。

#### Scenario: 非法序数或不存在的周
- WHEN 英文输入 2025-1th 或不存在的 54 周
- THEN 不提交或通知模型变更。

### Requirement: 其他格式不回归
季度默认 YYYY-[Q]Q 继续由 Dayjs 严格解析为季度首月，非法季度不提交；数字/月份/时间/Date/时间戳格式不变。自定义周/季度 format 可使用 Dayjs 支持的普通日期 token；函数 format 无逆解析协议，应关闭 inputEditable。
