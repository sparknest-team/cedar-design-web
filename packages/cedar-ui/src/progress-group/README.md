---
permalink: /components/progress-group/
---

# ProgressGroup 分段进度条

将多个数值展示为同一条进度轨中的分段，并提供对应图例。

## 基础用法

`items` 中每项的 `value` 都以 `max` 为基准计算宽度，开启 `show-text` 可展示累计百分比。

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

使用 `text` 和 `item-trailing` 插槽自定义累计状态与图例尾部内容。

鼠标悬浮或键盘聚焦分段时会显示提示并加粗当前分段。item 的 `tip` 可覆盖默认文案，`tooltip` 插槽可完全自定义内容。

<demo src="./__demos__/slots.vue"></demo>

### 超额数据与键盘提示

<demo src="./__demos__/overflow-keyboard.vue"></demo>

线形与环形按数据顺序累计裁剪到 max；图例和提示仍保留每项原始占比。例如 70+50 时第二段实际显示 30%，图例仍为 50%。非有限值和负数归零，非法 max 回退 100。Tab 聚焦可见分段展示提示，Escape 关闭；鼠标离开不会关闭仍处于焦点的提示。用 aria-label 为整个分组命名。

size 五档均实现，仅影响线形厚度（2/4/8/12/16px）；环形用 circle-size（支持 number/CSS长度）和 stroke-width。累计文本开关为 show-text，自定义插槽为 text，已删除旧布尔 status / status 插槽。

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| aria-label | 分组的无障碍名称 | `string` | — |
| items | 分段数据 | `ProgressGroupItem[]` | `[]` |
| mode | 展示模式 | `'line' \| 'circle'` | `'line'` |
| max | 所有分段计算占比时的总值 | `number` | `100` |
| show-text | 是否展示累计百分比 | `boolean` | `false` |
| size | 进度轨尺寸 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| color | 分段未指定颜色时使用的默认颜色 | `string` | `content-brand` |
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
| text | `{ percent, value, max }` |
| tooltip | `{ item, index, percent }` |
| item / item-leading / item-label / item-trailing | `{ item, index, percent }` |

### 样式变量

| 变量 | 默认值 |
| --- | --- |
| `--c-progress-group-gap` | `var(--c-sys-space-3)` |
| `--c-progress-group-item-gap` | `var(--c-sys-space-2)` |
| `--c-progress-group-dot-size` | `var(--c-sys-space-4)` |
| `--c-progress-group-radius` | `9999px` |
| `--c-progress-group-track-color` | `var(--c-sys-color-state-hover)` |
| `--c-progress-group-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-progress-group-muted-color` | `var(--c-sys-color-content-secondary)` |
| `--c-progress-group-font-size` | `var(--c-sys-font-size-sm)` |
| `--c-progress-group-tooltip-bg` | `var(--c-sys-color-surface-tooltip)` |
| `--c-progress-group-tooltip-color` | `var(--c-sys-color-content-on-dark)` |

图形标记默认使用 system content-brand。颜色优先级：item.color → 组件 color → 默认值。自定义颜色需自行验证对比度；几何 Token 保留平台差异。

### Geometry and motion variables

Built-in effects respect `prefers-reduced-motion: reduce`. Track thickness applies to both horizontal and vertical layouts; circle geometry remains prop-driven.

| Token | Default |
| --- | --- |
| `--c-progress-group-transition-duration` | `var(--c-sys-motion-duration-standard)` |
| `--c-progress-group-tooltip-duration` | `var(--c-sys-motion-duration-fast)` |
| `--c-progress-group-tooltip-max-width` | `240px` |
| `--c-progress-group-tooltip-padding` | `5px var(--c-sys-space-4)` |
| `--c-progress-group-tooltip-radius` | `var(--c-sys-radius-md)` |
| `--c-progress-group-tooltip-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-progress-group-tooltip-line-height` | `1.4` |
| `--c-progress-group-tooltip-offset` | `var(--c-sys-space-4)` |
| `--c-progress-group-text-font-weight` | `var(--c-sys-font-weight-medium)` |
| `--c-progress-group-size-xs-thickness` | `2px` |
| `--c-progress-group-size-sm-thickness` | `4px` |
| `--c-progress-group-size-md-thickness` | `8px` |
| `--c-progress-group-size-lg-thickness` | `12px` |
| `--c-progress-group-size-xl-thickness` | `16px` |
