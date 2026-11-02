## ADDED Requirements

### Requirement: 已发布 API 的 P1 修复兼容性
系统 SHALL 保留现有属性与默认行为；新增 API SHALL 为可选项。

#### Scenario: 表格未指定总数
- **WHEN** Table 接收 pagination 为 { pageSize: 20 }
- **THEN** 类型检查通过并从数据推导总数，独立 Pagination 仍要求 total

#### Scenario: 表单状态覆盖
- **WHEN** Switch 省略 disabled/readonly
- **THEN** 继承 FormItem/Form；显式 false 覆盖；父状态变化使迟到切换失效

#### Scenario: 人员业务源与旧适配器
- **WHEN** 传入 fetch 函数
- **THEN** 使用类型化选项及取消信号；无新源时保留旧地址；无请求器时结束加载

#### Scenario: 选择器清空
- **WHEN** 未设置 valueOnClear
- **THEN** 保留 1.x 空字符串候选相关的清空规则，类型包含 undefined
- **WHEN** 设置 valueOnClear
- **THEN** 单选采用指定结果，多选仍保留禁用已选项
