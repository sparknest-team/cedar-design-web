---
permalink: /components/timeline/
---

# Timeline

按照时间顺序或倒序规则的展示信息内容。

## 基础示例

### 基础用法

基本使用

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 自定义轴线样式

自定义轴线的示例。

<demo src="./__demos__/type.vue"></demo>

## 布局与排列

### 时间线方向与标签

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `mode` | 时间轴的展示类型：时间轴在左侧，时间轴在右侧, 交替出现。 | 时间线方向与标签 |
| `label-position` | 设置标签文本的位置 | 时间线方向与标签 |
| `orientation` | 时间轴主线的横纵朝向，默认 vertical；约束节点侧别的可用方向 | 时间线方向与标签 |
| `pending` | 是否展示幽灵节点，设置为 true 时候只展示幽灵节点。传入ReactNode时，会作为节点内容展示。 | 时间线方向与标签 |
<!-- demo-config-notes:end -->

比较排列方向、顺序与标签位置；待完成状态和自定义节点不与布局混合。

<details>
<summary>配置说明与使用限制</summary>

#### 纵向时间轴

竖直方向的时间轴。

#### 横向时间轴

可以通过 `orientation` 设置展示横向时间轴

#### 标签文本位置

通过 `labelPosition` 可以设置标签文本的位置。

</details>

<demo src="./__demos__/layout-comparison.vue"></demo>

## 内容与展示

### 幽灵节点

当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点，通过`slot#pending-dot`定制其轴点。
<demo src="./__demos__/pending.vue"></demo>

### 时间轴展示类型

设置 `mode=alternate`时将会交替展示内容。同时可以通过设置 `TimelineItem` 的 `positon`属性控制时间轴节点的位置.

<demo src="./__demos__/mode.vue"></demo>

## 自定义与插槽

### 自定义节点内容

自定义节点内容

<demo src="./__demos__/icon.vue"></demo>

### 自定义节点

可以通过属性 `dotColor`, `dotType` 设置节点的颜色以及节点类型。同时可通过 `dot` 直接传入 DOM

<demo src="./__demos__/dot.vue"></demo>

### 自定义标签

可以通过 `label` 插槽自定义标签

<demo src="./__demos__/custom.vue"></demo>

## API

### `<timeline>` Props

| 参数名         | 描述                                                                                    | 类型                                                    |    默认值    |
| -------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------- | :----------: |
| reverse        | 是否倒序                                                                                | `boolean`                                               |   `false`    |
| orientation      | 时间轴主线的横纵朝向，默认 vertical；约束节点侧别的可用方向 | `'horizontal' \| 'vertical'`                            | `'vertical'` |
| mode           | 时间轴的展示类型：时间轴在左侧，时间轴在右侧, 交替出现。                                | `'left' \| 'right' \| 'top' \| 'bottom' \| 'alternate'` |   `'left'`   |
| pending        | 是否展示幽灵节点，设置为 true 时候只展示幽灵节点。传入ReactNode时，会作为节点内容展示。 | `boolean\|string`                                       |     `-`      |
| label-position | 设置标签文本的位置                                                                      | `'relative' \| 'same'`                                  |   `'same'`   |

### `<timeline>` Slots

| 插槽名 |   描述   | 参数 |
| ------ | :------: | ---- |
| dot    | 幽灵节点 | -    |

### `<timeline-item>` Props

| 参数名     | 描述                         | 类型                              |  默认值   |
| ---------- | ---------------------------- | --------------------------------- | :-------: |
| dot-color  | 节点颜色                     | `string`                          |    `-`    |
| dot-type   | 节点类型：空心圆/实心圆      | `'hollow' \| 'solid'`             | `'solid'` |
| line-type  | 时间轴类型：实线/虚线/点状线 | `'solid' \| 'dashed' \| 'dotted'` | `'solid'` |
| line-color | 时间轴颜色                   | `string`                          |    `-`    |
| label      | 标签文本                     | `string`                          |    `-`    |
| content-placement   | 当前单项在交替模式下相对时间轴的侧别，竖向为 left/right、横向为 top/bottom；受 mode 与 orientation 约束 | `TimelineItemContentPlacement`                    |    `-`    |

### `<timeline-item>` Slots

| 插槽名 |    描述    | 参数 | 版本   |
| ------ | :--------: | ---- | :----- |
| dot    | 自定义节点 | -    |        |
| label  | 自定义标签 | -    | 2.50.0 |

### 类型定义

组件导出以下类型定义

```ts
import type { MentionInstance } from '@cedar-design/ui'
```


## 阅读方向与键盘交互

Timeline 继承容器阅读方向，横向时间轴的节点和连接线随 LTR/RTL 排列。`reverse` 单独控制视觉倒序，切换阅读方向不会修改节点数据或自动切换 `reverse`。

纵向显式 `mode="left"` / `mode="right"` 及子项的物理侧别保持原意；`alternate` 继续在两侧交替。标签和自定义内容正常继承文字方向。
