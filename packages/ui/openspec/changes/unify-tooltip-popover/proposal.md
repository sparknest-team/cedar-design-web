# Tooltip / Popover 独立同源复制

在已同源的 Trigger 基础上收口 Tooltip 与 Popover。两库独立保存同一份组件主体、Props、外观映射与结构样式，不共享运行时实例。Tooltip 统一为轻量说明，Popover 统一为可交互结构化面板；发布前直接删除重复和兼容 API。

Tooltip 使用 `size: xs | md`、`color/textColor`，默认 hover+focus、top、箭头和关闭卸载。Popover 默认 click、bottom、箭头并保留关闭后的交互状态；删除 Maple 的 `defaultStyle`、`popoverClass`、`elevation`。两者通过 Trigger 给实际引用节点接入 ARIA。
