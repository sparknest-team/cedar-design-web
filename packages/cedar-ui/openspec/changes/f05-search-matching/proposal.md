# F05 搜索匹配规则

用户确认两端同步 caseSensitive，明确要求 strict 不保留；TreeSelect 默认搜索字段先不改。本轮只处理 F05，F06 必须完成汇报后重新确认。

五类组件共八份实现：AutoComplete/Select/Cascader 两端、PeopleSelect/TreeSelect Cedar 独有。strict 删除是已发布 API 破坏性变更，两端 major changeset；caseSensitive 本身为可选新增能力，不改变不传参调用方行为。

同时匹配 value 与 label 已可通过 filterOption/filterTreeNode 实现，补 Demo 与测试，不新增 searchFields 公共配置。
