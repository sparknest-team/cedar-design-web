# 默认周展示文本严格解析

日期字段默认 inputEditable=true，但 Dayjs customParseFormat 不支持反解析 gggg-wo。季度 YYYY-[Q]Q 已由两库现有 Dayjs 支持，不另写重复解析器。

使用当前实例语言、weekStart/yearStart，将默认周展示文本严格转换为该周起始日，再走原有禁用/边界/范围提交和 valueFormat 输出。通过完整格式 round-trip 校验年份、周号与本地序数后缀，不接受不存在的周号。公共格式与模型协议不变，不添加兼容别名或移动端空展示模式。先 Cedar 验证，再独立复制逻辑和测试至 Maple。

非目标：任意自定义周 token 格式、函数 format 的逆解析、Maple 周/季度面板。
