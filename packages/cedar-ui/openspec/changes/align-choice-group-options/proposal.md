# Checkbox / Radio Group 选项契约对齐

## Why
Cedar 缺少字段映射，Maple 缺少原始值选项、选项只读与 label 插槽，Group 选项模型和空值不一致。

## What
先实现 Cedar 选项归一化与 Props，再独立复制到 Maple。统一 primitive/对象选项、fieldNames、readonly、标签渲染参数、options 优先级。RadioGroup 使用 RadioModel，默认 null；max 统一 number。

## Non-goals
本批不改主体 DOM、样式、Group 批量方法及完整键盘导航；组件状态保持待适配。不使用跨库运行时或兼容别名。
