# 设计

- use-search-control.ts 拥有值/字段、不可变 model 提议、事件、结果、历史和生命周期。
- Props / emits / slots / expose 类型独立复制，两端默认 shape / historyPopup 保留桌面与触控习惯。
- form 状态复用本地 useInputForm，只读 merged 状态，不发送第二份 Form 通知。
- HistoryContent.vue 同源；history-presentation.vue 分别连接 Drawer / Popup，不用嵌套第二个 Search，避免双模型与 change 通知。
- 等待中的搜索与 focus 在 unmount/deactivate 时取消；切换 historyPopup 清掉 closing 标记。
- modelField 指定优先于 defaultField / 第一项。字段切换发新字段、空值及清除其他已声明字段的新 model；未声明属性保留。父级可分别拒绝三个提议，实际 props 是唯一受控真值。
