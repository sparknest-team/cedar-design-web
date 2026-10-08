# 时间默认值与受控状态

补齐 Maple 四个时间入口 defaultValue、字段 defaultOpen，以及纯面板 disabled。提炼 useFieldValue / useFieldOpen，在两库独立保存相同源码；Cedar TemporalField、时间面板与 Maple 时间入口接入。

默认值仅初始化；外部值替换优先，不派发更新；清空不能复活默认值。未绑定模型时选择保存在本实例，Date/数组克隆。open 显式受控时只请求 update:open/open-change，父级不接受就不自行关闭。禁用和只读禁止打开及提交，但允许关闭。

Maple clear 与 Cedar 一致不携带载荷。范围清空值暂仍为 []，其余 select/change 日期载荷、disableConfirm、隐藏禁用项及主体渲染拆分不在本阶段宣称完成。
