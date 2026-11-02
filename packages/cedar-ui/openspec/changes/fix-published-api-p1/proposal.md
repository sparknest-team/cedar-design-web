> PeopleSelect 请求方案已由后续 `unify-async-data-source` 决议取代：options/loading + search，旧 fetch/urlType 删除并标记下个 major。下文保留 P1 实施历史，其它 P1 修复继续有效。

# 修复已发布 API 的四项 P1 问题

修复 Table 分页配置类型、Switch 表单继承、PeopleSelect 数据源耦合及缺少 fetch 时挂起、Select 空值类型与配置能力。Cedar 与 Maple 同步检查共同组件，保持 1.0 已发布 API。

新增可选 API 采用 minor changeset。Maple Table 无内置分页，且无 PeopleSelect，不新增对应能力。
