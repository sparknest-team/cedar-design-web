## Decisions

1. 公共 API 以 Cedar 命名为基线，并吸收 Maple 的 `messageAlign`。
2. `beforeClose` 是唯一关闭拦截器；`done()` 后才提交 action。
3. 遮罩事件统一为 `click-mask`，因为公开概念已经使用 `mask` / `maskClosable`。
4. 函数式入口仅使用静态方法，支持字符串简写；不让组件对象同时承担可调用函数语义。
5. 按钮外观统一经 `ButtonProps` 配置，删除 Maple 重复快捷字段。
6. 两端视觉数值允许不同，但 API、默认行为和事件顺序必须一致。
