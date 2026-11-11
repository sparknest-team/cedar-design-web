# 时间格式与模型值统一

本阶段采用 Cedar 的公开协议：format 为时间 token 格式，默认 HH:mm:ss；use12Hours 默认 false，未指定 format 时开启后为 hh:mm:ss a。字符串输入按 format 严格解析；Date/毫秒时间戳按本地时间反显；输出统一为格式化字符串（范围为数组）。Maple 删除旧 format=ampm/24hr 与 Time.useSeconds，不保留别名。Date 自身 useSeconds 暂保留，由内部生成明确时间格式调用 TimePicker。

PC 列表和移动滚轮/时钟保留独立渲染文件。time-value.ts 独立复制，时钟/候选边界内部转换为 24 小时值，禁用回调不接收显示小时。min/max 保持 24 小时的 HH:mm[:ss] 边界，不随展示格式变化。无效外部值不自动回写。

完成项必须包含四入口源码、导出、内部调用、中英文 demo/文档、测试、同源门禁及调研状态。整组件主体尚未完全同源，不提前标记完成。
