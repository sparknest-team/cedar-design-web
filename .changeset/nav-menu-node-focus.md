---
'@cedarjs/ui': patch
---

修复 NavMenu 节点 enter／Escape 的旧焦点续体跨关闭／激活执行、重复请求和停用保留键盘入口；当前文档外部控件接管焦点时不再抢回，无新增公开API或CSS变量。
