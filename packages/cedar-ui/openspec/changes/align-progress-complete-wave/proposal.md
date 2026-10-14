# Progress 完整同源

## Why
Progress 两端 API、文本默认值、分段与不确定状态不同；ProgressGroup 的 status 布尔值违背状态命名，线形溢出和圆形裁剪不同。

## Changes
- 保留 percent 0–100、size 五档和 number|string 长度；补齐两端 steps/animation/bufferColor/track/rotate/textClass、不确定圆形，默认 showText=true。
- 统一响应式渐变和 SSR 稳定 ID、ARIA、减少动态效果及独立复制样式。
- ProgressGroup status/#status 改 showText/#text，无兼容别名；统一超额裁剪、键盘提示和异常值。
- 两端独立复制，安装入口和本地尺寸配置接入允许差异。

## Non-goals
不修改全局主题基础，不引入共享运行时。

