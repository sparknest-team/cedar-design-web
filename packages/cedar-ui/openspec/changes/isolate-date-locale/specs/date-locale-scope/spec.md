## MODIFIED Requirements

### Requirement: 实例日期语言上下文
每个日期字段/面板应使用其既有全局 Locale/Provider 的语言和本实例 dayStartOfWeek。内部 Symbol 上下文不作为组件 Prop 或字典覆盖入口。日期解析、显示与通知文案读取该上下文；不改变模型。

#### Scenario: 多周起始实例
- WHEN 同时显示周日起始与周一起始的日期组件
- THEN 挂载、更新或卸载一端不会改变另一端的周号或格式化结果，宿主 Dayjs 默认语言与基础语言配置保持不变。

### Requirement: Scoped Dayjs
仅注册各库命名空间下的独立日期语言元数据；en-US 解析到已加载的 en，其他语言先匹配完整代码、再匹配语言段、最后安全回退 en。核心中文与 Maple 内置语言的 Dayjs 数据静态接入。不得再用 initializeDateLocale 全局设置周起始日。

#### Scenario: 语言切换
- WHEN 全局语言或 Provider 切换
- THEN 本实例解析/显示/通知与周标签更新，不触发模型选择或提交。

### Requirement: 模型与界面文本分离
valueFormat 模型协议固定使用英文日期数据，不跟随界面语言改变；format 展示与手输文本使用当前界面语言。默认数字协议保持不变；切换语言不改写模型，也不能使英文月份名称模型失效。

#### Scenario: 月份名称模型
- WHEN valueFormat=YYYY MMMM DD，模型为 2025 January 15，界面由英文切换中文
- THEN 模型仍有效且不改写，展示 format=MMMM 输出一月；手输中文月份经展示解析后提交为稳定英文模型。
