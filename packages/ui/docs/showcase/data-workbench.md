---
permalink: /showcase/data-workbench/
title: 数据工作台
---

# 数据工作台

数据页面通常需要筛选条件、结果表格和用户自定义列。Cedar 提供 FilterForm、Table 与独立的 TableColumnManager，应用按业务数据流组合它们。

## 同一份任务数据，筛选与统计联动

1. 查询“运营部”，结果从五条缩小到两条。
2. 完成“展厅设备巡检”，观察完成数量和行状态同步变化。
3. 状态选择“待处理”再查询，已完成的任务不再出现。
4. 输入不存在的关键词，体验空结果；清空筛选恢复全部，点击“恢复全部任务”重置业务数据。

<demo src="../../src/table/__demos__/task-workbench.vue"></demo>

筛选只有点击查询才生效；统计和列表都由同一份任务数据计算。以下列管理示例单独展示列配置流程。

## 管理表格列

打开列管理，尝试勾选、排序和冻结，确认后观察表格变化。取消时检查表格是否保持原配置。配置保存的位置由应用选择。

<demo src="../../src/table-column-manager/__demos__/with-table-ungrouped.vue"></demo>

## 从结果管理延伸到文件输入

目录读取适合批量整理素材；剪贴板示例可以粘贴图片，或者用本地样例文件演示数量限制与重置。两者只读取本地文件，不发出上传请求。

<demo src="../../src/upload/__demos__/directory.vue"></demo>

<demo src="../../src/upload/__demos__/clipboard.vue"></demo>

## 与其他实现对照什么

比较实现相同列管理流程所需的额外组件、状态同步与业务封装。TableColumnManager 与 Table 解耦，也可以放入自定义容器；持久化由业务使用 localStorage、Pinia 或服务端完成。

继续阅读：[FilterForm](/components/filter-form/) · [Table](/components/table/) · [TableColumnManager](/components/table-column-manager/)

---

[返回总览，标记已体验](/showcase/) · [下一站：资源排期](/showcase/scheduling/)
