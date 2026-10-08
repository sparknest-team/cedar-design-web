# 日期组件族同源
## Why
日期字段、纯面板的值解析、禁用校验与提交事件存在漂移；移动端 Date 字符串回调和日期时间精度需要与 Cedar 收敛。
## What
先在 Cedar 定义可复制的值 / 约束 / 选择事务，实现 Date、DateRange 与两个纯面板的统一边界。展示留在各端独立文件，保留桌面日历及移动滚轮、日历、时钟能力。补齐 format、valueFormat、defaultValue/defaultOpen 和事件协议。
## Non-goals
不共享运行时，不引入 platform 配置，不重写日期网格与滚轮布局，不新增兼容别名。
