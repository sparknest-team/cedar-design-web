# SplitButton 独立同源复制

以 Cedar 的 script setup 组合结构为基础，补齐 Maple 的 popupClass、offsetX/offsetY、open/close/resize 能力，两端分别复制主体、Props 和契约测试，不引入共享运行时或实例。

click 与 Button 一样是消费 Promise 返回值的控制回调，保留 @click 用法。两组点击回调交给内部 Button 执行，不经过 emit 丢失返回值。主按钮不主动阻止冒泡，不打开菜单；默认触发图标统一为向下箭头，放在 Button 的 icon 插槽。

Cedar Menu 增加屏幕轴偏移及 popupClass 透传、实例方法；不改 Trigger 既有 popupOffset 主轴语义，不要求两端 Menu 整体同源。方法 open/close 遵循受控状态和禁用规则。

placement 类型补齐底层 Trigger 已支持的标准十二方位，与 Maple 对齐。
