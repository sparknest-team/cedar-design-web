---
'@cedar-design/ui-vue': patch
---

修复 Anchor 依赖 compute-scroll-into-view v4 与 scroll-into-view-if-needed（需 v3）的主版本冲突，导致下游构建报 "./middleware" is not exported。回退为 v3 的 boundary 选项写法。
