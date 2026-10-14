# 日期 Locale 的实例隔离

两端日期所有者使用独立复制的内部 Locale 上下文，将全局语言来源与本实例周起始日传给日期解析/格式化。Dayjs 只注册各库命名空间下的语言元数据，不切换宿主默认语言、不覆盖宿主已有语言配置。删除 Cedar initializeDateLocale 的全局写入。

不新增组件 locale Prop，不保留兼容入口。日期值、校验、确认与字段/面板协议不变；周起始日仍使用既有 dayStartOfWeek。
