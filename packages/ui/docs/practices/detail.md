---
permalink: /practices/detail/
title: 业务详情页
---

# 业务详情页

动态项目资料、任务清单、交付进度、跟进、操作记录与归档。

## 完整业务体验

从列表或卡片进入一个具体项目；编辑资料后取消，确认原值未变；保存编辑、完成任务并添加跟进，再到工作台查看操作动态。

<demo src="./__demos__/detail/basic.vue"></demo>

## 实现与边界

页面的布局、字段、表格、卡片、弹层、反馈和分页全部使用 Cedar 自有组件。六类页面共享本地项目工作区；刷新保留本次浏览器会话的数据，归档可恢复，重置还原整个工作区。数据模型与行为在 `__demos__/shared/usePracticeData.js` 中，页面可按自身业务接入接口。

示例使用合成数据，不访问业务后端，不模拟服务端权限。CSV 导出只包含本地当前查询结果。

参考信息组织：[Ant Design 表单页面](https://ant.design/docs/spec/research-form/) · [Arco Design Pro](https://github.com/arco-design/arco-design-pro) · [TDesign Starter](https://tdesign.tencent.com/starter)。全部界面使用本库组件组合。

[最佳实践入口](/practices/) · [特色与场景](/showcase/)
