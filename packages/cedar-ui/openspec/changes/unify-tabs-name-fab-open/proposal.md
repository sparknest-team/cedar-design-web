# Tabs 业务标识与 FAB 展开状态

用户确定两端 Tabs 子项统一使用必填 name，与 Vue key 分离；更新运行时、类型、消费者、文档、Demo 和测试，不保留 key 选中回退。数字与字符串 name 不混同，响应式 name 变化不要求重建 Vue 节点。

Maple FAB 动作菜单改为 open/update:open/defaultOpen，整体显示改为 visible；图标改为 openIcon/closedIcon，trigger 插槽和 click 参数同步。受控 open 由父级决定，初始化不回写。其他已有 open 的弹层入口继续保留。
