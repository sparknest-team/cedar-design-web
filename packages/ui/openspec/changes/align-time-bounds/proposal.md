# 时间边界 API 对齐

Cedar 的 Time、TimeRange、TimePicker、TimeRangePicker 补齐 Maple 已有 min/max。
边界为包含端点的 HH:mm 或 HH:mm:ss（24 小时制），不跟随 format/use12Hours。
列表禁用展示与提交均使用本库复制的时间规则；范围两端分别校验。
不增加兼容别名、跨库运行时、platform 配置或新 CSS token。

验证动态边界、秒精度、十二小时制、范围、字段提交和外部模型不被静默修改。
