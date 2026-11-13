# 统一表单字段默认外观与间距

表单字段在 Cedar 与 Maple 中混用 filled、standard 与 outline 默认值，导致同一表单的外观不一致。横向 FormItem 还继承了 Row 默认的负 gutter 外边距，覆盖表单间距。

字段统一默认 outline，保留显式变体及 InputGroup 继承优先级。Cedar 与 Maple FormItem 默认 gutter=0，显式 row-props.gutter 继续优先；桌面和移动端各尺寸默认均使用 16px 间距，保留逐尺寸 token 定制。Textarea 计数不在数字中间换行。
