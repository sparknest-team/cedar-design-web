# 设计

- caseSensitive：AutoComplete、Select、PeopleSelect、Cascader 默认 false；TreeSelect 默认 true。
- AutoComplete strict 删除，无别名、无双属性优先级。case-sensitive 是模板写法，caseSensitive 是 TS 写法。
- Select/AutoComplete/PeopleSelect 的内置过滤继续使用规范化 label；Cascader 保留原有路径标签/当前节点（checkStrictly）规则和 toLocaleLowerCase 的非敏感语义；TreeSelect 保留 value/fieldNames.value，不改成 label。
- 自定义 filterOption/filterTreeNode 优先，不强行预处理查询文本或覆盖业务大小写策略。业务同时匹配两字段时，在回调内读取并转换原始 value/label，mapped fields 读取实际业务字段。
- Select/AutoComplete/PeopleSelect：filterOption=false 不做本地过滤；TreeSelect：disableFilter=true；Cascader：仍为函数协议，不新增 false 联合类型，远程结果可传 () => true。
- Select 的普通候选、分组、额外候选、slot Option 可见性及键盘候选共用同一配置；TreeSelect 的展示与键盘匹配用同一函数。动态修改大小写规则需退役旧键盘候选和旧筛选计时器。
- 本轮不改 filterable/shouldOpen、searchDelay、limit、checkStrictly 或异步请求协议。strict 删除按用户明确要求记下个 major，未发布。
