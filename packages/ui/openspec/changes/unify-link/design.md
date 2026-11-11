# Design

原生 a + script setup；明确属性透传，禁用/加载阻止导航、点击及 Tab 聚焦。动态插槽在渲染中判断；loading 优先于 icon。焦点使用 :focus-visible 而不是设备检测。主体、Props、主样式和配对测试复制；本地图标与主题 token 不跨库引用。保留旧 CSS 变量映射，内部类名不兼容旧选择器。
