# Radio 交互与移动按钮模式

本波统一双端局部 RadioGroup 导航、roving tabindex、动态顺序与生命周期，补齐 Maple button variant 和尺寸；清理 Maple Ripple 样式运行时依赖，复验按需样式及发布包 SSR。两库独立复制逻辑与按钮样式，无跨库运行时或旧 API 兼容别名。

不直接覆盖原有圆形 Radio 和 Checkbox 样式，不宣称完整主体/BEM 已同源。所有状态更新以验证范围为准。
