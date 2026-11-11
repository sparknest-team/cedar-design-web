# 统一 Cedar / Maple 组件契约

用户已批准 2026-09-07 的跨端实施方案，并明确 Card、Affix、Badge 必须先修改一端再复制到另一端。两包独立实现、独立实例，不使用跨仓库运行时依赖、共享单例或源码生成模板。

按 design-ui/audits/api-alignment-plan.md 分批迁移尺寸、浮层、事件、状态、组件名与公共类型。Badge 采用红底白字默认色；AutoComplete 同时统一展开条件和选项过滤 API。

这些变更包含破坏性修改，迁移随 major Changeset 记录，不在源码保留被替换的别名。各批单独记录已验证结果，不将整个计划提前标为完成。
