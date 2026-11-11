## MODIFIED Requirements

### Requirement: TreeSelect 搜索开关统一
TreeSelect SHALL 使用 filterable，默认根据 multiple 推导；SHALL 使用独立 retainInputValue，不提供 allowSearch 兼容别名。

#### Scenario: 显式关闭多选搜索
- **WHEN** multiple=true 且 filterable=false
- **THEN** 输入框只读且 aria-autocomplete=none

## ADDED Requirements

### Requirement: 公开类型与运行时一致
Select 和 AutoComplete SHALL 从根与组件入口导出 Emits/Slots/Expose；事件参数类型 SHALL 从运行时声明派生。

#### Scenario: 错误事件参数
- **WHEN** Select search 类型用例传入 number
- **THEN** 类型检查拒绝该参数

### Requirement: 渐进式示例
Steps SHALL 同屏对比四类 type；Search 首例 SHALL 只有一个输入；Scheduler 首例 SHALL 无资源或请求器依赖。

#### Scenario: 同步对比进度
- **WHEN** 用户切换 Steps Demo 的当前序号
- **THEN** 四种外观显示同一序号且仍支持点击切换
