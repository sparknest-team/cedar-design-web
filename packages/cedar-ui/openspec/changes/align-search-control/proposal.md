# Search 公共控制逻辑独立同源

Cedar 补齐 action、shape、label、全屏历史和 Input 显式属性；公共 Props、控制器、历史内容、类型先完善 Cedar 后复制到 Maple。双方独立维护，无跨库运行时、platform 配置和旧 API alias。PC 的 InputGroup 与移动搜索条、本地 Drawer / Popup 保留展示差异。

本次明确不兼容调整：model 不再就地写入，update:model 提议新对象；modelValue 优先于当前字段 model 值，model 未提供才采用本地 defaultValue。搜索等待父级接受后取实际值，不泄漏拒绝的候选、trim 或字段提议。历史去重、去空、trim 与最大数量统一。
