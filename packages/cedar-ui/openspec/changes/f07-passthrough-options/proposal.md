# F07 透传配置的兼容类型边界

用户已确认：Cedar/Maple 同步新增主动选用的专用配置类型，保留旧类型和现有运行行为，补 demo 与测试，其他改造暂不动。

问题：完整 TriggerProps / Partial<TreeProps> / Record 类型容许嵌套状态字段，但内部会覆盖或过滤；不同宿主覆盖顺序不同。

范围：两端 AutoComplete/Select/Cascader/Date/DateRange；Cedar TreeSelect。核对现有 Time/TimeRange 类型；仅记录 Cedar ColorPicker/Table 现有优先级，不收紧行为。新增 minor API，不发布。
