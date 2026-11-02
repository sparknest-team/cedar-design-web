# 统一阅读方向与文档切换

用户授权将方向审查落实为统一能力，导航提供切换按钮。使用 dir 表达阅读方向；Cedar ConfigProvider 将 rtl 布尔配置收敛为 dir，Maple LocaleProvider 同步支持 dir。遵守发布前 API 收敛规则，同步调用方、文档和类型，不添加旧名兼容分支。

两端 use 包提供同源方向 composable，组件优先尊重局部原生 DOM dir。实现水平交互与 Trigger 的方向适配，并使文档站与移动预览方向同步。物理方位 API 保持含义，图像和代码内容不整体翻转。

实施与验收清单见 design-ui/refactors/reading-direction-plan.md。复杂表格、虚拟滚动、业务组件分别专项验收，不因基础能力完成就宣称全库通过。
