# 输入包装组件事件管线

Input/Textarea 遵循公共表单输入顺序后，Search/AutoComplete 必须同时迁移，不能继续手动重复清空或依赖旧顺序。补充受控拒绝、trim 提交、键盘候选选择与 Form 单次通知回归。

不改 Search/AutoComplete 的展示结构、不删除功能，也不为旧输入事件顺序保留兼容路径。
