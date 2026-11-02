---
permalink: /components/progress/
---

# Progress 进度条

展示确定或不确定任务进度。两端主体、API 与样式为独立同源代码。

## 基础示例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 进度尺寸与状态

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `size` | 五档预设或自定义长度；线形厚度、环形直径 | 进度尺寸与状态 |
| `percent` | 0–100 百分比，保留小数；支持十进制数字字符串，非法值归零，越界裁剪 | 进度尺寸与状态 |
| `mode` | 线形或环形 | 进度尺寸与状态 |
| `stroke-width` | 覆盖轨道厚度，数字按 px，字符串支持 CSS 长度 | 进度尺寸与状态 |
| `status` | default/primary/secondary/tertiary/info/success/warning/danger；default 确定进度达到 100 时推导 success | 进度尺寸与状态 |
<!-- demo-config-notes:end -->

在相同进度范围内比较尺寸和状态色；环形、分段和不确定进度保留独立模型。

<demo src="./__demos__/appearance-comparison.vue"></demo>

## 内容与展示

### 环形进度

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `percent` | 0–100 百分比，保留小数；支持十进制数字字符串，非法值归零，越界裁剪 | 环形进度、分段进度、不确定进度与动画 |
| `mode` | 线形或环形 | 环形进度、不确定进度与动画、渐变、起点、隐藏轨道与文本 |
| `status` | default/primary/secondary/tertiary/info/success/warning/danger；default 确定进度达到 100 时推导 success | 环形进度、分段进度 |
| `steps` | 仅线形的分段数，向下取整并限制为 0–1000；不确定模式忽略 | 分段进度 |
| `size` | 五档预设或自定义长度；线形厚度、环形直径 | 分段进度 |
| `indeterminate` | 不确定进度；省略 aria-valuenow，不自动推导成功 | 不确定进度与动画 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/circle.vue"></demo>

### 分段进度

<demo src="./__demos__/step.vue"></demo>

### 不确定进度与动画

<demo src="./__demos__/loop.vue"></demo>

### 渐变、起点、隐藏轨道与文本

<demo src="./__demos__/advanced.vue"></demo>

## 阅读方向

线性进度从阅读起点增长，活动与不确定进度动画沿阅读方向运动。百分比、数值和圆环角度不反转，减少动态效果的设置仍生效。

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 线形或环形 | `line \| circle` | `line` |
| percent | 0–100 百分比，保留小数；支持十进制数字字符串，非法值归零，越界裁剪 | `number \| string` | `0` |
| size | 五档预设或自定义长度；线形厚度、环形直径 | `ProgressSize` | `md` |
| stroke-width | 覆盖轨道厚度，数字按 px，字符串支持 CSS 长度 | `number \| string` | 随 size |
| steps | 仅线形的分段数，向下取整并限制为 0–1000；不确定模式忽略 | `number` | `0` |
| status | default/primary/secondary/tertiary/info/success/warning/danger；default 确定进度达到 100 时推导 success | `ProgressStatus` | `default` |
| color | 进度颜色或渐变 stop 映射，优先于 status | `string \| Record<string, string>` | — |
| track-color | 背景轨道颜色 | `string` | — |
| buffer-color | 线形剩余轨道装饰色/渐变，不代表独立缓冲百分比 | `ProgressColor` | — |
| track | 显示背景轨道；false 同时隐藏缓冲装饰层 | `boolean` | `true` |
| show-text | 显示文本；xs 环形隐藏文本避免溢出 | `boolean` | `true` |
| text-class | 文本容器类名 | `string` | — |
| rotate | 环形起点从十二点顺时针旋转的角度 | `number` | `0` |
| animation | 确定线形进度扫光动画，不应用于 steps | `boolean` | `false` |
| indeterminate | 不确定进度；省略 aria-valuenow，不自动推导成功 | `boolean` | `false` |

### 尺寸语义

| size | xs | sm | md | lg | xl |
| --- | --- | --- | --- | --- | --- |
| 线形厚度 / 环形默认描边 (px) | 2 | 3 | 4 | 6 | 8 |
| 环形直径 (px) | 16 | 48 | 64 | 80 | 96 |

`size=12` / `size="12"` 表示 12px；`size="2rem"`、`"50%"`、`"calc(100% - 2px)"` 保留 CSS 长度。自定义线形 size 控制厚度，自定义环形 size 控制直径；stroke-width 始终优先控制厚度。非正数或非法长度回退 md。环形百分比直径需要父容器有明确宽度。五档均实际实现，xs 环形不显示文本。Cedar 未传 size 时继承 ConfigProvider，Maple 未传时默认 md。

### Slots

| 插槽 | 参数 | 说明 |
| --- | --- | --- |
| text | `{ percent: number }` | 优先级高于 default |
| default | `{ percent: number }` | 自定义显示文本 |

不确定进度默认显示省略号，可用 text 插槽提供业务文案。组件本身不操作值、无更新事件；请提供 `aria-label` 标识业务任务。所有内置动画尊重系统减少动态效果设置。

### 类型定义

导出 `ProgressProps`、`ProgressInstance`、`ProgressSize`、`ProgressMode`、`ProgressStatus`、`ProgressColor` 和运行时 `progressProps`。

## 样式变量

| 变量 | 默认值 |
| --- | --- |
| `--c-progress-font-size` | `var(--c-sys-font-size-sm)` |
| `--c-progress-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-progress-track-color` | `var(--c-sys-color-state-hover)` |
| `--c-progress-default-color` | `var(--c-sys-color-content-brand)` |
| `--c-progress-primary-color` | `var(--c-sys-color-content-brand)` |
| `--c-progress-secondary-color` | `var(--c-sys-color-content-secondary)` |
| `--c-progress-tertiary-color` | `var(--c-sys-color-content-tertiary)` |
| `--c-progress-info-color` | `var(--c-sys-color-content-info)` |
| `--c-progress-success-color` | `var(--c-sys-color-content-success)` |
| `--c-progress-warning-color` | `var(--c-sys-color-content-warning)` |
| `--c-progress-danger-color` | `var(--c-sys-color-content-danger)` |
| `--c-progress-line-border-radius` | `9999px` |
| `--c-progress-text-gap` | `var(--c-sys-space-4)` |
| `--c-progress-steps-gap` | `var(--c-sys-space-2)` |
| `--c-progress-transition-duration` | `var(--c-sys-motion-duration-standard)` |
| `--c-progress-animation-duration` | `1.5s` |

环形确定进度的 success/danger 默认显示完成/失败图标（包括 xs）；text 插槽可覆盖，ARIA 数值始终保留。
