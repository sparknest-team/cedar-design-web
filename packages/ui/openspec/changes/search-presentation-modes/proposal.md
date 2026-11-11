# Search 展示模式统一

Search 已有行内历史菜单和全屏搜索两种展示方式。两端统一使用 `presentation: 'inline' | 'popup'`，默认 `inline`，删除 `historyPopup` 布尔 API，并迁移文档、Demo、类型和同源检查。菜单与全屏弹层继续使用各自平台实现。
