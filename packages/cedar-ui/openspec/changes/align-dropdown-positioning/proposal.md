# Menu 定位契约收口

补齐 Cedar strategy，统一两端根/多级子菜单的响应式定位策略。默认 absolute，可选 fixed；popupContainer 与定位策略独立，fixed 不自动改变挂载点或规避 transform 祖先。

删除遗留 platform.ts 聚合层：公共 Props、类型直接声明；展示差异留在 appearance.ts，公共 Trigger 选项独立复制。保留已登记的 hover/click、关闭卸载和视觉差异，不建立共享运行时。同步 Demo、类型、文档、测试和调研。

非目标：不合并两端全部视图，不改 Time 手输及 Date 面板模型，不迁移未配对组件。
