> PeopleSelect 请求方案已由后续 `unify-async-data-source` 决议取代：options/loading + search，旧 fetch/urlType 删除并标记下个 major。下文保留 P1 实施历史，其它 P1 修复继续有效。

# 设计与兼容性

- Table 仅为 pagination 配置建立 total 可选的专用类型；独立 Pagination 保持必填。
- Switch 区分省略与 false，按字段 > FormItem > Form 继承；异步切换继续复用现有失效机制。
- PeopleSelect 接受外部类型化 fetch 函数（参数区分 query 搜索和 ids 反显），不再新增两套业务源入口；旧对象接口隔离至 legacy-api.ts，内部映射到旧 DTO；保留 fetch/urlType，异步操作带 AbortSignal 与世代保护。缺请求器/失败统一收敛为空结果。
- Select 保留既有清空结果：无空字符串候选时为 ''，有时为 undefined。类型如实包含 undefined；新增 valueOnClear 允许固定单选结果，多选不受影响。
- 保留所有旧属性、默认交互与请求协议；不以直接重命名或删除方式收敛 API。
