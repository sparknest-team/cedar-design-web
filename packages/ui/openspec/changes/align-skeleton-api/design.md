## Decisions

1. 默认插槽始终表示真实内容；`template` 插槽只表示加载占位内容。
2. 默认内置三行段落占位并开启动画，零配置即可看到骨架屏。
3. 保留 Maple 的快捷文章、卡片和全屏 API，同时把 Cedar 的 Line/Shape 原语同步到 Maple。
4. 两端 API、默认行为和 DOM 语义一致，视觉 token 数值允许按平台不同。
5. 根节点设置 `aria-busy`，让加载状态能被辅助技术识别。
6. Maple 是 Skeleton 实现的源码模板；Cedar 通过整文件复制同步，仅允许命名空间、工具 import、文件命名、注册方式和 CSS token 前缀等平台适配。
