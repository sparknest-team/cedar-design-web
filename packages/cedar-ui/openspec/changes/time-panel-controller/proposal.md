# 时间面板主体状态收敛

先重构 Cedar，再独立复制 useTimePanel 到 Maple。统一草稿/外部值、只读禁用、确认重校验、范围提交排序及 select/change。列表 Dayjs 边界和移动滚轮/时钟手势放在本地 presentation 文件，不引入跨库运行时或 platform 配置。

本轮不更改公开 Props/Slots，不宣称字段弹层模板与完整 API 已同源。Cedar 纯面板删除无消费者的输入状态 hook；open-change 仅在有效确认时通知外层关闭，包括确认相同值。

