# 设计

两端各自维护 time/time-format.ts，提供列识别、默认格式解析和纯时钟标签格式化。不共享运行时或实例，不新增 platform 配置。

Cedar 字段、TimePicker、Panel 和 RangePanel 使用相同默认规则；移除 props 层固定 HH:mm:ss，避免丢失“未传入”的信息。useTimeFormat 在 computed 中读取 props，允许原本不存在的属性后续变化。方括号字面量不参与列推导。

Maple 标签格式化接入本库副本，但公开格式及模型 API 原样保留至下一阶段的原子迁移。
