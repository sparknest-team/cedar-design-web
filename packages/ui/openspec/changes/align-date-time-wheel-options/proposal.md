# 日期时间与滚轮展示选项

两端日期嵌套时间面板只配置 use12Hours、step、hideDisabledOptions 和 class/style；模型、格式、约束、确认与事件由日期所有者负责。Maple 日期滚轮仅接 optionHeight/optionCount/class/style，补齐单值面板转发。calendarClock 明确选用时钟。

不保留旧 API 兼容，不增加跨库运行时。CSS/完整日历主体与独立时间组件公共 API 不在本批重写。
