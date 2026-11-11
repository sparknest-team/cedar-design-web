# 模态组件族分层同源改造

Cedar 与 Maple 已各自保存 `popup-layer`、`modal-focus`、`scroll-lock`、`popup-transition` 和 `popup-container` 的同源实现，但当前组件消费者仍混用 Cedar `usePopupManager/useOverflow` 与 Maple `useStack/useZIndex/useLock` 等旧入口。“基础层已同源”因此只代表能力源码已经存在，不代表 Overlay、Drawer / Popup、Dialog、Message 已经实际走同一条行为链。

本变更按 `Overlay -> Drawer / Popup -> Dialog -> Message` 收口。Overlay 作为最小背景层完整同源；Drawer 与 Popup 作为异名对应组件，统一模态表面协议、状态机、关闭请求、层级、焦点、锁滚动和过渡生命周期，但保留桌面 Drawer 与移动 Popup 的结构职责；Dialog 统一组件契约、主体控制逻辑和命令式管理器；Message 统一队列、计时、更新、关闭和函数式 API，保留端侧布局与触控外观。

两库继续独立维护，不共享运行时模块、实例或全局状态。先在一端形成最终源码，再复制到另一端并仅修改前缀、本地 import 和合理的端侧外观；不新增 `platform.ts`、生成源码或跨包运行时依赖。组件库尚未正式发布，改造直接迁移最终 API，不保留旧属性、旧事件或旧命令式调用的兼容分支。

2026-09-21 已完成第一层 Overlay：两端主体 SFC、Props 和结构样式独立复制并进入同源门禁，统一 popup-layer、z-index、容器锁、真实 Teleport Document、背景 pointer 序列、ESC、KeepAlive 和生命周期。Drawer / Popup、Dialog、Message 仍待实施。
