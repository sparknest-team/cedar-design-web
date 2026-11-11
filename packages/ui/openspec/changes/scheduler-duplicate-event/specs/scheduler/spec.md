# Scheduler 复制规范

- 复制已保存源数据，生成独立 ID；复制草稿本身不改变 modelValue，不调用保存钩子。
- 保留标准日程字段（包含 taskId），深复制 Date/resourceIds；不传递 readonly、重复实例身份或业务扩展字段。
- 同 ID、空 ID、非法或只读源数据不允许核心复制；实例方法在锁定、源不存在或只读时返回 false。
- 内置编辑器支持详情复制；新建草稿不再显示复制。自定义插槽提供 duplicate 动作。
- editable=false 发送 action=create/source=duplicate 的 editor-request，不打开内置编辑器。
- 副本保存经过所有既有规则和原子事务；取消无副作用，失败保留草稿，成功可撤销重做。
- Demo 展示定时、全天、未排期复制和模拟保存失败。
