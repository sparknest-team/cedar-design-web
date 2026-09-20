# Design

Trigger 继续唯一负责开关状态、定位、容器、过渡、层级和引用解析。新增 `referenceAttrs` 通道，把语义属性写入默认插槽、SVG 或外部 reference，并在切换引用、deactivate 和卸载时恢复原值。

Tooltip 面板使用 `role=tooltip` 和 `aria-describedby`；Popover 使用 content/title/body 三层，通过 `aria-controls`、`aria-expanded` 与触发元素关联。组件主体采用 script setup，完整公开 Trigger controls。平台文件只处理 namespace 和本地导入；结构样式及 Token 后缀一致，Token 值允许引用各端主题。

不保留 `backgroundColor`、布尔 `xs`、`defaultStyle`、`popoverClass`、`elevation` alias。无样式定位使用 Trigger，自定义面板使用 Token、contentClass 或 contentStyle。
