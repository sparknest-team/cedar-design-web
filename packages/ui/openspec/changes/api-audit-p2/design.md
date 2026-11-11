# 设计

- TreeSelect.filterable 为布尔搜索开关；省略时按 multiple 推导。保留输入策略拆为 retainInputValue；不保留旧别名。
- AutoComplete 运行时 emits 独立到 emits.ts，命名 Emits 类型从校验器参数推导；Select 同样复用运行时声明。Slots/Expose 按实际支持的插槽和 focus/blur 建模，两端根入口及组件入口导出。
- 删除上游 @version 2.x 标记，不猜造本库引入版本；修正文档中陈旧字段展示模式。
- Steps 同屏渲染四类外观，共用进度与交互；Search 首例只保留单输入提交，按钮、字段、历史分别演示；Scheduler 首例不依赖资源或请求器，完整资源场景单独保留，业务组合放在最后。
- 内部生命周期验证说明完整归档到 archived-scheduler-notes.md，不放在入门内容前。
