# 完成跨端模型命名审查

根据用户确认的规范，迁移 Carousel、TabBar、可选 Tag、Switch 默认值、图片预览组与 Image 面板开关、FloatingPanel 停靠值。补齐已有主模型和面板入口缺少的默认值。同步类型、运行时、调用方、demo、API 调试配置及文档。数据选项与多个独立具名状态按实际语义保留；详见 design-ui/audits/primary-model-naming.md。

FAB 保留可选 visible，用于保存实例的内容隐藏；v-if 用于销毁。修正自定义 trigger 在隐藏时卸载、隐藏触发菜单 closed 及外部点击改变隐藏菜单状态的问题。
