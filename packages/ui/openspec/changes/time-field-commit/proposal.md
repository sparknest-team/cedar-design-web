# 时间字段提交规则统一

字段和纯面板使用本库独立复制的 time-commit；字段继续复用 useFieldTransaction，经 useTimeFieldTransaction 做最终校验。Cedar 时间文本输入补齐 step 校验，范围倒序不再单独拒绝，改为与面板相同的排序；showNextDay 保留顺序。Maple 确认按钮同步受 Form/字段只读禁用控制。

不新增兼容别名。清除 undefined 不受时间候选限制，但仍受 blocked 控制。Date/DateRange 的日期输入规则不变。移动打开时初始化候选保留为展示扩展回调。

