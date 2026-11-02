---
permalink: /practices/dashboard/
title: 团队工作台
---

# 团队工作台

按类型汇总项目指标、预算、待办与最近动态。

## 完整业务体验

选择业务范围，处理待办中的项目；再进入列表或详情，核对同一个项目的状态。创建、编辑、归档和跟进都会进入最近动态。

<demo src="./__demos__/dashboard/basic.vue"></demo>

## 实现与边界

页面的布局、字段、表格、卡片、弹层、反馈和分页全部使用 Cedar 自有组件。六类页面共享本地项目工作区；刷新保留本次浏览器会话的数据，归档可恢复，重置还原整个工作区。数据模型与行为在 `__demos__/shared/usePracticeData.js` 中，页面可按自身业务接入接口。

示例使用合成数据，不访问业务后端，不模拟服务端权限。CSV 导出只包含本地当前查询结果。

参考信息组织：[Ant Design 表单页面](https://ant.design/docs/spec/research-form/) · [Arco Design Pro](https://github.com/arco-design/arco-design-pro) · [TDesign Starter](https://tdesign.tencent.com/starter)。全部界面使用本库组件组合。

[最佳实践入口](/practices/) · [特色与场景](/showcase/)
