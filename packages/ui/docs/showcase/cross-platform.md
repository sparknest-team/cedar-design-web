---
permalink: /showcase/cross-platform/
title: 桌面与移动
---

# 桌面与移动

使用相同的巡检任务、部门选项和业务模型，对照两端的编辑方式。Cedar 的选择与日期时间字段在当前位置展开面板；Maple 的这些字段明确使用 Popup，确认后提交，取消保留原值。任务名称在两端都直接输入。

## 同一个任务，两种交互

1. 在 Cedar 中选择“研发部”，观察已提交模型。
2. 在 Maple 手机预览中点击“负责部门”，在 Popup 内选择“研发部”；先不确认，观察已提交模型。
3. 点击右上角关闭（取消）后重新打开，核对仍为原来的值；再次选择并确认，核对模型更新。
4. 对日期和时间重复这组操作，比较面板形态与确认过程。

<PlatformComparison />

## 公共约定与平台差异

| 项目 | Cedar | Maple |
| --- | --- | --- |
| 业务数据 | 相同任务与部门 ID | 相同任务与部门 ID |
| 文本输入 | inline，直接输入 | inline，直接输入 |
| 本例选择、日期、时间 | inline，在字段附近操作 | popup，进入弹层编辑 |
| Popup 草稿 | 本例不使用 Popup 草稿 | 确认前不提交，取消保留原值 |
| 使用代码 | c- 前缀；字段的 edit-mode 为 direct | mp- 前缀；对应字段的 edit-mode 为 popup |

两端共用 API 语义，组件的交互方式按端侧场景选择。Maple 的选择和日期时间字段通常采用 Popup；文本输入仍可以保持直接编辑。

## 尺寸与外观

下面单独比较尺寸与变体；上方的业务示例负责展示交互差异。

<demo src="../../src/field-decorator/__demos__/control-sizes.vue"></demo>

---

[返回总览，标记已体验](/showcase/) · [下一站：完整业务表单](/showcase/forms/)
