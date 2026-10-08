# 纯时间面板确认与禁用展示

Maple TimePicker/TimeRangePicker 默认改为显式确认：select 通知草稿，确认才更新模型/change；disableConfirm 跳过确认。字段及日期内部明确指定 disableConfirm，避免双重确认。hideDisabledOptions 默认为 false，列表保留禁用项，true 隐藏；时钟不改变刻度坐标。两端公开字段均声明 hideDisabledOptions。无兼容别名。
