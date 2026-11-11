# Breadcrumb 独立同源复制

以 Cedar routes 优先、分隔符优先级和 select(route, event) 为共同契约；主体、Props、上下文、类型、样式和测试各库独立复制。保留本地安装入口、图标及 Menu，Maple Vue 入口作为本地 TSX 实现的兼容门面。修复空 routes、动态索引及省略项误触发菜单，服务端首次渲染同步计数。Maple 的默认插槽不再覆盖非空 routes；Cedar 内容包裹为 __content。
