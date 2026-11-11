# 设计

字段拥有事务；面板选择先通知 select，再由字段决定是否提交。移动滚轮和时钟统一经字段 handleSelect；禁止用 watch(draft) 触发提交，避免外部更新或初始化误提交。clear 不触发 select，change 的空值和 Date 参数均为 undefined。Date 辅助参数按本地时间解析，范围按端点映射，非法值不产生 Invalid Date。单纯 Date/DateRange 的公开事件不变。
