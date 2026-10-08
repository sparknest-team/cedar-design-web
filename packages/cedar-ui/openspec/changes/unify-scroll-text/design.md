# 设计

BackTop 的 useBackTop 独立复制，负责目标绑定、阈值、RAF 动画和 KeepAlive/卸载清理；主体及 CSS/Token 同源，命名空间和安装入口本地化。默认监听页面，目标 getter 可反映异步挂载。动画仅操作绑定元素并保留横向位置，重复点击取消前次动画；减少动态效果偏好时立即滚动。原生 button 自带 Enter/Space，插槽只接受非交互内容，避免嵌套按钮。旧 BTween 任意字符串改为 linear/quartOut/easeInOutCubic 或自定义函数。

Ellipsis 移除 Cedar 多余 src 目录和外壳；样式直接落到文本节点。单行/多行、展开及 Tooltip 配置同源；提示默认遵循 Tooltip，不默认限制为触发器宽度。tooltip=false 显式禁用并关闭。仅一个 tooltip-content 插槽，未提供时优先 content 再使用正文。保持原有“提示不依赖是否实际溢出”的语义。键盘支持只在 expandTrigger=click 时启用。

BackTop 样式统一 44px 触控目标、中性浮起表面、品牌色图标；主题使用 system token，不绕过语义层。旧 token 无兼容别名，迁移表进入文档。SSR 首屏原地隐藏按钮，挂载后再 Teleport。
