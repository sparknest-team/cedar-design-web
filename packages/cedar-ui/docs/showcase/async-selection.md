---
permalink: /showcase/async-selection/
title: 异步数据选择
---

# 异步数据选择

业务数据经常只保存 ID，而界面需要展示名称、搜索候选和处理加载状态。人员选择将候选 request 与已选人员 resolve 分开，让业务提供服务函数。

## 从 ID 到人员展示

下方初始模型为人员 ID。观察编辑字段和阅读字段中的人员名称，搜索 Alice 或 Bob 并切换人员，再点击阅读字段的操作按钮查看本地反馈。

示例使用本地人员数据；操作按钮只记录结果。业务接口、权限与聊天服务由应用接入。

<demo src="../../src/people-select/__demos__/injected-services.vue"></demo>

## 远程搜索

输入搜索词，观察候选和加载状态。展开源码，查看请求与字段值如何连接。

<demo src="../../src/select/__demos__/search.vue"></demo>

## 与其他实现对照什么

| 场景 | 核对结果 |
| --- | --- |
| 初始只有 ID | 是否能解析并展示已选项 |
| 连续快速输入 | 旧请求结果是否覆盖新的搜索结果 |
| 清空、只读、阅读态 | 是否仍发出不必要的候选请求 |
| 加载失败 | 是否有明确反馈和恢复入口 |
| 业务操作区 | 是否能组合权限与自定义操作 |

请求竞争与失败场景需使用可控延迟及错误数据单独验证，不能从正常搜索结果推断。

继续阅读：[PeopleSelect](/components/people-select/) · [Select](/components/select/) · [AutoComplete](/components/auto-complete/)

## 复用业务数据服务

重新加载候选，观察加载状态和选中值；展开源码查看 useAsyncData 如何把数据请求与字段绑定分开。此例为本地固定数据，不模拟请求失败。

<demo src="../../src/select/__demos__/async-source.vue"></demo>

演示后返回[专栏总览](/showcase/)继续下一站。

## 连续修改时的异步校验

输入错误用户名并触发校验，再改为 admin 再次校验。手动先返回最新结果、再返回最早结果，检查过期校验是否影响当前字段。此例的等待队列完全在本地，方便演示返回顺序。

<demo src="../../src/form/__demos__/async-race.vue"></demo>

---

[返回总览，标记已体验](/showcase/) · [下一站：任务数据工作台](/showcase/data-workbench/)
