# FormItem 装饰与状态展示对齐

补齐 Maple 的 contentClass/contentFlex/labelAttrs/labelComponent/showColon/tooltip，以 Cedar 标签渲染为基础独立复制。显式 validateStatus 只覆盖外观，自动状态 validating → success/error，清空回到未校验。错误文案只在 error 展示。保留本地规则引擎与布局默认值，不创建共享运行时。
