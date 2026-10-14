# 日期字段面板事件链路

Maple DateFieldContent 已声明 update:pickerValue / picker-value-change / select-shortcut，但 DatePanel 上仅绑定 select，三类面板事件在本地展示层丢失。Cedar 已具备同名转发；两端公共包装器、所有者及公开 Emits 已声明，无需增加或兼容旧 API。

独立复制 Cedar 对应三条监听至 Maple 本地 presentation，新增两端相同字段事件链路测试，分别验证单值/范围、三参数视口通知、快捷项身份、选择模型不被导航改写和嵌套受控视口更新。新增/更新 Demo 与文档；不改变内部 Popup/Trigger 和控制器所有权。
