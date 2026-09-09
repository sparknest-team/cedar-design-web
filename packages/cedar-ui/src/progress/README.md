---
permalink: /components/progress/
---

# Progress

组件描述。

## 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 循环进度条

通过设置 `indeterminate` 属性，可以展示循环进度条。
<demo src="./__demos__/loop.vue"></demo>

## 进度条状态

通过 `status` 指定进度条语义状态。
<demo src="./__demos__/status.vue"></demo>

## 环状进度条

设置 `mode="circle"` 将会展示环形进度条。
<demo src="./__demos__/circle.vue"></demo>

## 迷你进度条

设置`size="xs"`展示微型进度条。
<demo src="./__demos__/mini.vue"></demo>

## 进度条大小

通过 `size` 设置进度条的大小
<demo src="./__demos__/size.vue"></demo>

## 步骤进度条

通过设置 `steps` 展示步骤进度条。
<demo src="./__demos__/step.vue"></demo>

## 组件配置

### Progress Props

| 属性    | 说明     | 类型   | 默认值 |
| ------- | -------- | ------ | ------ |
| mode    | 展示模式 | `'line' \| 'circle'` | `'line'` |
| status  | 状态     | `SemanticStatus` | `'default'` |
| size | circle 外径 / line 轨道厚度；数字按 px，字符串可用 CSS 长度 | `ComponentSize \| number \| string` | `md` |
| percent | Percentage, 0–100; numeric strings accepted; decimal precision retained | number / string | 0 |

### Progress Events

| 事件名 | 说明           | 参数                          |
| ------ | -------------- | ----------------------------- |
| click  | 点击触发的事件 | `(event: MouseEvent) => void` |

### Progress Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { ProgressProps } from '@cedarjs/ui'
```

尺寸与跨端迁移约定见仓库根目录 `API-MIGRATION.md`。只支持文档列出的档位，不代表支持全部 ComponentSize。

## Percent contract / 百分比契约

percent 使用 0～100，12.5 表示 12.5%；数字字符串可用，不接受百分号、CSS 单位或十六进制字符串。超范围截断，NaN/Infinity/非法值回退 0。
Cedar 旧值需要乘以 100（0.5 → 50）；不会自动猜测比例。文案插槽和 aria 值均为 0～100，Maple 圆环不再先取整计算。

percent uses 0–100, including decimal numeric strings. CSS units and percent signs are invalid. Finite out-of-range values are clamped; invalid/non-finite values become 0.
Migrate Cedar ratios by multiplying by 100; there is no automatic ratio detection. Slot and accessible values use percentages; Maple circle geometry no longer rounds first.
