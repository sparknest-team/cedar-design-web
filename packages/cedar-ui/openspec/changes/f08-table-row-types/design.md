# 设计

- 新类型不让业务接口继承带 any 索引的 TableData；泛型约束只检查已有行元数据的结构兼容。
- TypedTableColumn<Row> 关联 dataIndex 路径、render、sorter、filter、children、parent 与行样式回调，保留原外观字段。
- 路径支持普通嵌套字段、数组点路径和括号下标，递归限制为五层，避免自引用和复杂业务模型使编译发散；动态字符串和更深路径继续可用旧入口。
- TypedTableRow<Row> 约束嵌套 children 为相同行类型；TypedTableConfig<Row> 关联 data、columns、rowKey、expandable、loadMore、spanMethod、summarySpanMethod、rowClass 及自定义 summary。
- rowKey 显式指定，限定为 Row 中 string/number 值的字段。新入口 summary 为 false 或返回完整 Row 的自定义函数，不接受自动生成的 summary=true。
- defineTableConfig 是返回同一配置对象的类型适配入口，返回已发布 TableProps，原 Table 可直接 v-bind/TSX 消费，无额外包装组件、数据变换或事件拦截。不承诺原组件 slots/emits 自动变成泛型；配置检查在入参阶段完成。
- 原组件源码和 Props 不改，旧列和路径及合计仍可用。新增 minor API，不发布。Select/Cascader 不在本轮范围。
