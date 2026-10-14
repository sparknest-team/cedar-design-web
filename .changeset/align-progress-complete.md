---
"@cedarjs/ui": major
---

Progress / ProgressGroup 使用两端独立复制的主体与样式；Progress 补齐 track、rotate、textClass 和环形不确定进度，修复 animation/bufferColor/响应式渐变/SSR ID。统一五档及自定义长度、0–100 百分比，公开样式变量迁移为语义集合。ProgressGroup 的布尔 status 与 status 插槽直接改为 showText/text，无旧 API 别名；线形/圆形统一累计裁剪并补键盘 tooltip。

