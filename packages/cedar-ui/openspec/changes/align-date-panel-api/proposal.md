# 日期字段与面板 API 边界

Date/DateRange 为表单字段，DatePicker/DateRangePicker 为纯面板。以现有复制的日期模型/控制器为基础，剔除纯面板无效字段/浮层 Props；统一 dayStartOfWeek 数字 0–6；补齐事件、类型与单独安装入口。嵌套面板 Options 仅允许展示配置，不接管顶层模型/规则。独立复制公共协议，不共享运行时，保留桌面日历与移动滚轮/时钟展示差异。不在本批重写展示引擎或扩大 Maple week/quarter 枚举。
