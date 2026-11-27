---
'@cedar-design/ui-vue': patch
---

修复 jsdom 31 升级后失效的单元测试：未挂载元素的尺寸测量改用 `attachTo`、指针事件改用真 `PointerEvent` 并共用显式 `pointerId`、CSS 序列化断言语义化，并补齐 `@cedar-design/ui-vue` 子路径别名使 scheduler/core 等 demo 可被收集。
