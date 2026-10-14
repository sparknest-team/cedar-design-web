# 删除日期字段无效端侧参数

Cedar 不渲染移动滚轮或范围单日历外观插件，删除 Date.pickerProps、DateRange.pickerProps 与 DateRange.datePickerProps。Maple 保留真实端侧扩展，不向 Cedar 机械增加空能力。

迁移旧日期 Demo 的初始时间到日期顶层 defaultValue。两端共同字段参数映射以 union narrowing 处理实际不同的 Props，不保留兼容别名。
