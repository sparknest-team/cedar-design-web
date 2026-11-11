# 时间字段焦点与键盘边界

两端复制 useFieldFocus，去重组件/Form 的 focus/blur，readonly 保留聚焦、disabled 释放已聚焦状态。Cedar Time/TimeRange 补齐无参数 focus/blur 事件，不增加兼容别名。基础 PickerField 在禁用后重置 active，防止重新启用不通知聚焦。

Maple 时间字段不再监听 window，快捷键只绑定触发器，展示差异放到本地 presentation/use-trigger-keyboard。Tab 不被字段手写逻辑阻止，Popup 内部约束保留；已经展开的只读字段仍可取消。Date 移动键盘不在此次改造范围。

