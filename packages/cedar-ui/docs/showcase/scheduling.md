---
permalink: /showcase/scheduling/
title: 资源排期
---

# 资源排期

Scheduler 用于日程展示与编辑，可关联人员、设备或会议室。先体验时间调整，再加入资源与容量约束。

## 拖动与调整时间

1. 拖动一条日程，观察落点预览和预计起止时间。
2. 调整日程上、下边缘，观察步长吸附。
3. 拖动时按 Esc 取消，核对下方已提交日程没有变化。

<demo src="../../src/scheduler/__demos__/drag-feedback.vue"></demo>

## 人员与设备的共同资源模型

体验设备排期中的工单拖入、联合占用和维护时段。同一资源 API 可以表达人员与设备，业务字段通过 metadata 和插槽接入。

<demo src="../../src/scheduler/__demos__/equipment.vue"></demo>

## 与其他实现对照什么

在相同日程和资源数据下，比较视图切换、拖动预览、时间拉伸、冲突反馈及编辑器扩展。进一步检查异步保存失败是否保留原值、重试是否重复提交。对照排期产品时还应记录版本、授权范围和所用插件。

继续阅读：[Scheduler](/components/scheduler/) · [任务日历工作台](/examples/task-calendar/)

---

[返回总览，标记已体验](/showcase/) · [下一站：逐组件对照](/showcase/components/)
