---
permalink: /components/progress-group/
---

# ProgressGroup 分段进度条

将多个数值展示为同一条进度轨中的分段，并提供对应图例。

## 基础用法

`items` 中每项的 `value` 都以 `max` 为基准计算宽度，开启 `status` 可展示累计百分比。

<demo src="./__demos__/basic.vue"></demo>

## 尺寸

通过 `size` 设置进度轨粗细。

<demo src="./__demos__/sizes.vue"></demo>

## 排列方向

`orientation="vertical"` 可展示纵向分段进度条；纵向模式需要容器提供明确高度。

<demo src="./__demos__/orientation.vue"></demo>

## 环形分段进度

设置 `mode="circle"` 展示分段圆环。通过 `circle-size` 控制直径，`stroke-width` 控制环宽，状态内容位于圆心。

<demo src="./__demos__/circle.vue"></demo>

## 颜色与纯进度轨

通过 `color` 统一设置默认颜色，也可以在每个 item 上覆盖；省略所有标签可隐藏图例。

<demo src="./__demos__/color.vue"></demo>

## 自定义状态与数值

使用 `status` 和 `item-trailing` 插槽自定义累计状态与图例尾部内容。

鼠标悬浮或键盘聚焦分段时会显示提示并加粗当前分段。item 的 `tip` 可覆盖默认文案，`tooltip` 插槽可完全自定义内容。

<demo src="./__demos__/slots.vue"></demo>

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 分段数据 | `ProgressGroupItem[]` | `[]` |
| mode | 展示模式 | `'line' \| 'circle'` | `'line'` |
| max | 所有分段计算占比时的总值 | `number` | `100` |
| status | 是否展示累计百分比 | `boolean` | `false` |
| size | 进度轨尺寸 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| color | 分段未指定颜色时使用的默认颜色 | `string` | 主题主色 |
| circle-size | 环形模式的直径 | `number \| string` | `120` |
| stroke-width | 环形模式的轨道宽度 | `number` | `8` |
| tooltip | 是否启用分段悬浮/聚焦提示 | `boolean` | `true` |
| orientation | 排列方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |

### Item

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| label | 图例名称 | `string` |
| value | 分段数值 | `number` |
| color | 分段颜色 | `string` |
| icon | 图例图标组件 | `Component` |
| slot | 自定义插槽名前缀 | `string` |
| tip | 自定义提示文案 | `string` |

### Slots

| 名称 | 插槽参数 |
| --- | --- |
| status | `{ percent, value, max }` |
| tooltip | `{ item, index, percent }` |
| item / item-leading / item-label / item-trailing | `{ item, index, percent }` |
