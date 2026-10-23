---
'@cedarjs/ui': patch
---

修复 NavMenu scrollTo 旧请求在新命令、禁用、配置变化或 KeepAlive 停用后仍滚动的问题；卸载失效，激活只接受新命令，保留现有 Promise<void> 和 nearest 对齐，无新增公开 API。
