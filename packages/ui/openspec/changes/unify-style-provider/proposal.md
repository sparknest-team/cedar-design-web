# StyleProvider 独立同源

两端组件、函数入口、安装、默认值设置和公开类型使用相同逻辑，分别复制维护，仅替换包内路径和平台标识。安装统一注册组件的标准名称，不再通过 Cedar 的全局安装配置包装器修改应用配置；自定义别名可显式 app.component 注册。

支持 styleVars=null；`StyleProvider` 是唯一组件入口，安装与默认值设置均不再暴露 `.Component` 分支。`setPropsDefaults` 接受变量对象、null 或工厂，在初始化时配置后续实例；`setStyleVars` 替换本库全局覆盖，SSR 无副作用；清空只清理本库 style 和主题属性，不影响另一库。

不共享核心、实例或默认值对象。不修改全库安装工具。
