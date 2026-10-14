# Input / Textarea 主体收口

Input 已复制主体但缺少完整验证；Textarea 两端主体仍漂移。以 Cedar 为基准补齐 hint、line、颜色、原生属性与清空协议，然后独立复制到 Maple。统一输入事件为 input → update:modelValue，清空为 clear → input → update:modelValue → change，Form 对应语义各通知一次。

Textarea 统一 FieldDecorator 清空按钮、Input 值模型/表单适配、光标恢复及独立复制的 autoSize 生命周期。保留平台清空展示和默认 resize/密度差异，仅在本地默认值/样式文件表达。不引入跨库 runtime、platform.ts 或兼容别名。

