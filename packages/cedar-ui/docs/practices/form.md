---
permalink: /practices/form/
title: 分步表单页
---

# 分步表单页

基础资料、计划预算、核对提交、办理结果四阶段。

## 完整业务体验

先提交空资料查看校验；填写名称和负责人，设置计划与预算。保存草稿后离开并回来恢复；确认页模拟失败并重试，成功后点击“查看项目详情”。新项目同时进入列表、卡片和工作台。

<demo src="./__demos__/form/basic.vue"></demo>

## 实现与边界

页面的布局、字段、表格、卡片、弹层、反馈和分页全部使用 Cedar 自有组件。六类页面共享本地项目工作区；刷新保留本次浏览器会话的数据，归档可恢复，重置还原整个工作区。数据模型与行为在 `__demos__/shared/usePracticeData.js` 中，页面可按自身业务接入接口。

示例使用合成数据，不访问业务后端，不模拟服务端权限。CSV 导出只包含本地当前查询结果。

参考信息组织：[Ant Design 表单页面](https://ant.design/docs/spec/research-form/) · [Arco Design Pro](https://github.com/arco-design/arco-design-pro) · [TDesign Starter](https://tdesign.tencent.com/starter)。全部界面使用本库组件组合。

[最佳实践入口](/practices/) · [特色与场景](/showcase/)
