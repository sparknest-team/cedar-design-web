# API 审计 P2：搜索命名、公开类型与示例路径

按用户要求调研统一异步方案，先完成明确授权的改造：TreeSelect 搜索入口统一为 filterable，不保留 allowSearch；补充四种 Steps 外观对比；整理 Search/Scheduler 示例；修正文档和公开类型入口。

兼容性：用户明确要求移除 allowSearch，Cedar 使用 major changeset 并提供迁移步骤。其它已发布 API 保持；PeopleSelect 请求签名、异步守卫、生命周期及样式扩展方案本轮仅调研，不在未确认统一方案前批量重构。
