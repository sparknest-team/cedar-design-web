---
'@cedar-design/ui-vue': patch
---

PC 端弹层移除触摸监听，改用 overscroll-behavior 拦截边界链式滚动：modal-focus 不再在 document 上注册 touchstart/touchmove，dialog/drawer 的可滚动容器补 overscroll-behavior: contain。
