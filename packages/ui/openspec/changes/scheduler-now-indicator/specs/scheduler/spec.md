# Scheduler 当前时间规范

- showNowIndicator 默认 false；仅 day/week/resource-day 显示。
- getSchedulerNowPosition 由显式 now/day/startHour/endHour 计算本地时间百分比，输入无效、不同日或范围外返回 undefined。
- 起点包含、终点排除；秒参与定位，不读取系统时间，不改变日程数据。
- 每 30 秒刷新，隐藏标签页暂停，返回立即刷新；关闭、不支持视图、卸载后停止计时。
- SSR 不创建计时器，挂载后显示，避免服务端与客户端时刻不一致。
- 标线有可访问名称，非 live region，pointer-events none；样式使用 Scheduler tokens。
- Demo 提供开关、今天/明天及三种支持视图。
