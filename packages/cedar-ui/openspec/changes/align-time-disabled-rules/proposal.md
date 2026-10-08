# Time 禁用契约与滚轮约束

统一 Time/TimeRange 与面板的 disabledHours/disabledMinutes/disabledSeconds，返回禁用值数组，小时一律 0–23。Maple 移除旧 disabledTime，无兼容别名。Date 保留日期 API，由内部转换接入 TimePicker。

本阶段补齐 Maple 滚轮 min/max、级联列与提交校验。格式与模型值类型迁移不在本阶段；移动时钟布局保留。
