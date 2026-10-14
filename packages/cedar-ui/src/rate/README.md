---
permalink: /components/rate/
---

# Rate

用于评分或打星的组件。

## 案例

### 基础用法

评分组件基本用法。

<demo src="./__demos__/basic.vue"></demo>

### 半选

指定 `allow-half` 来开启半选。

<demo src="./__demos__/half.vue"></demo>

### 自定义颜色

通过 color 可以自定义颜色。另外可以通过对象形式自定义不同分值时的颜色。

<demo src="./__demos__/color.vue"></demo>

### 只读模式

通过设置 `readonly` 属性让评分组件为只读状态。

<demo src="./__demos__/readonly.vue"></demo>

### 支持清除

通过设置 `clearable` 来允许清除评分。

<demo src="./__demos__/clear.vue"></demo>

### 自定义评分字符

可以将星星替换为其他字符，比如表情、字母，数字，字体图标甚至中文。

<demo src="./__demos__/character.vue"></demo>

### 任意长度的评分

通过指定 `count` 来指定任意长度的评分组件。

<demo src="./__demos__/count.vue"></demo>

### 笑脸分级

通过 `grading` 使用笑脸分级。

<demo src="./__demos__/grading.vue"></demo>

### 键盘与状态

<demo src="./__demos__/keyboard.vue"></demo>

### 尺寸与符号

<demo src="./__demos__/sizes-and-symbols.vue"></demo>

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value | 受控评分，配合 v-model；外部更新不发事件 | number | undefined |
| default-value | 非受控初值，只初始化一次 | number | 0 |
| count | 正有限数向下取整；非法值回退 5 | number \| string | 5 |
| allow-half | 半分步长 | boolean | false |
| clearable | 重复点击当前分数清空；键盘边界不会清空 | boolean | false |
| grading | 固定五级表情评分，优先于插槽和图标 | boolean | false |
| disabled | 禁用；缺省继承表单，显式 false 覆盖 | boolean | undefined |
| readonly | 只读且可聚焦；缺省继承表单 | boolean | undefined |
| aria-label | 评分的业务无障碍名称 | string | undefined |
| size | 图标尺寸；数字/数字字符串为 px，带单位为 CSS 长度 | number \| string | 样式默认值 |
| gap | 图标间距；数字/数字字符串为 px，带单位为 CSS 长度 | number \| string | 样式默认值 |
| color | 选中颜色，或按每个图标分值的递增阈值映射 | string \| Record<string, string> | undefined |
| empty-color | 未选中颜色 | string | undefined |
| disabled-color | 禁用时覆盖选中/未选中颜色 | string | undefined |
| icon | 选中图标 | string \| Component | 星形 |
| half-icon | 半选图标 | string \| Component | 半星 |
| empty-icon | 未选中图标 | string \| Component | 空星 |
| ripple | 点击水波纹 | boolean | true |

size/gap 不接受 xs/sm/md/lg/xl 档位；省略、非法或非正数保留样式默认值。CSS var/calc/min/max/clamp 长度可用。评分按 1 或 0.5 步长归一至 0～count；非有限评分显示 0，不反向改写外部值。

### Events

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| update:model-value | value: number | 用户产生新值 |
| change | value: number | 新值确认；相同值不重复通知 |
| hover-change | value: number | 鼠标预览改变；离开/失焦/禁用/只读重置为 0 |

### Slots

| 插槽 | 参数 | 说明 |
| --- | --- | --- |
| character | { index, value, active } | index 从 0 开始，value 从 1 开始；替换评分符号 |

优先级：grading > character > icon/half-icon/empty-icon > 默认图标。字符串图标需要全局注册；组件值无需注册。

### Methods

focus() 聚焦评分，blur() 移除焦点。只读仍可聚焦，禁用移出 Tab 序列。方向键增减、Home 清零、End 满分；子控件键盘事件和 Alt/Ctrl/Meta 组合键不被接管。触屏点击与鼠标点击遵循相同半选、清空规则。

### 类型定义

导出 RateProps、RateColor、RateIcon、RateInstance、RateExpose、RateEmits、RateCharacterSlotProps。

### 样式变量

| Token | Default |
| --- | --- |
| `--c-rate-disabled-color` | `var(--c-sys-color-content-disabled)` |
| `--c-rate-error-color` | `var(--c-sys-color-content-danger)` |
| `--c-rate-active-scale` | `1.2` |
| `--c-rate-focus-color` | `var(--c-sys-color-content-brand)` |
| `--c-rate-focus-width` | `2px` |
| `--c-rate-focus-offset` | `2px` |
| `--c-rate-size` | `var(--c-font-size-title-3)` |
| `--c-rate-gap` | `var(--c-spacing-4)` |
| `--c-rate-min-height` | `var(--c-size-md)` |
| `--c-rate-action-padding` | `0px` |
| `--c-rate-empty-color` | `var(--c-color-fill-3)` |
| `--c-rate-active-color` | `rgb(var(--c-gold-6))` |
| `--c-rate-transition-duration` | `var(--c-transition-duration-2)` |
| `--c-rate-scale-duration` | `var(--c-transition-duration-4)` |
| `--c-rate-transition-timing-function` | `var(--c-transition-timing-function-standard)` |

两端公开 Token 后缀及含义一致；Cedar 保留金色星形和紧凑间距，Maple 保留主色星形与触控内边距，默认值差异已登记主题契约。源码各自维护，不共享运行时。

`transition-duration` 控制 hover/颜色过渡，`scale-duration` 控制选中动画，`transition-timing-function` 控制缓动。低动态偏好下关闭非必要动画；`size` / `gap` Prop 会覆盖当前实例的对应 Token。
