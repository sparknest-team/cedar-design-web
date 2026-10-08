# BackTop / Ellipsis 独立同源

统一两端主体、公开 Props、事件、键盘语义和样式。先改 Cedar 再复制 Maple，不共享运行时或实例，不增加 platform 配置。范围不含其他滚动组件。

BackTop 使用原生按钮，默认监听页面；targetContainer 支持 selector、元素、响应式 getter，显式无效目标隐藏。统一 200ms / quartOut，保留三条内置曲线并允许函数；visibleHeight 数字字符串按 px。right/bottom/elevation/ariaLabel 补齐两端；公开 scrollToTop。Ellipsis expand 为受控值，defaultExpand 为非受控初值，点击及 Enter/Space 通知 update:expand；Tooltip 配置和内容不重复。预发布直接迁移，不保留旧别名。
