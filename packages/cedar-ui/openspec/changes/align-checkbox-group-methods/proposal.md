# CheckboxGroup 方法同源

补齐 Cedar checkAll / inverseAll，与 Maple 使用各自独立复制的方法控制器及注册清理逻辑。只处理已挂载、可编辑子项，保留只读/禁用/未加载的选中值，按实时 DOM 顺序补选，受控模式返回提议而不保存。公开导出 CheckboxGroupMethods。修复无选中集合变化却因排序而通知的问题。

本批不改 Radio button、完整键盘、主体和样式，不升级整组件状态，不增加跨库运行时或兼容 API。
