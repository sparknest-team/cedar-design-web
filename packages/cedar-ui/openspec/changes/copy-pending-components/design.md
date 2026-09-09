# 设计与平台边界

- 两端独立维护主体、Props、行为工具和 implementation.less；一致性检查只允许产品前缀、本地工具/图标包路径等明确替换。
- platform.ts 仅适配本库图标、配置读取及历史默认值。Space 默认 wrap 为 Cedar=false / Maple=true；显式值语义相同。Icon 注册名保留 C / M，spin 类保留既有格式。
- 主题 token 留在两库，Maple 原有 token 从主体样式中拆出，不建立共享实例或模板生成流程。
- PageHeader 使用原生返回按钮，Cedar 内部类名统一 BEM；Alert 关闭按钮支持 Enter/Space，并以本地 transitionName 区分离场样式。
- Tag 明确透传 class/style 到真实根 span，关闭事件不冒泡成 check。两端淡出行为一致。
- 定时组件在卸载/停用清理，Icon 连续 name 变化取消旧回调；Countdown 的结束事件和 reset 分轮管理。
- 保留原有测试并新增每端 32 项配对检查；包含 SSR、受控状态、实例隔离、动态插槽、卸载与 KeepAlive。
- 更新快照仅限本轮明确变化：PageHeader 的 BEM/原生按钮、Alert 离场名称、Divider ARIA 和 Tag 过渡结构。整库其他 Button/Card 等快照差异不在本轮批量更新。
