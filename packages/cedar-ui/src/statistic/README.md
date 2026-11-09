---
permalink: /components/statistic/
---

# Statistic 统计数值

突出展示某个或某组数字、带描述的统计类数据。

## 基础示例

### 基础用法

通过 `title` 展示描述，通过 `value` 展示数值。`value` 支持数字或字符串。

<demo src="./__demos__/basic.vue"></demo>

## 内容与展示

### 等宽数字

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `title` | 数值展示的标题 | 等宽数字、额外信息、数值动画 |
| `value` | 数值展示的值 | 等宽数字、额外信息、数值动画 |
| `suffix` | 数值后缀 | 等宽数字 |
| `value-style` | 自定义显示值的样式 | 等宽数字 |
| `tabular-nums` | 是否使用等宽数字，避免数值变化时宽度跳动 | 等宽数字 |
| `prefix` | 数值前缀 | 额外信息 |
<!-- demo-config-notes:end -->

开启 `tabular-nums` 后，每个数字字符占用相同宽度，适合数值频繁变化或纵向对齐的场景。下面的数值始终保持四位，请观察右侧竖线：比例数字切换时竖线会左右跳动，等宽数字的竖线则保持稳定。

<demo src="./__demos__/tabular-nums.vue"></demo>

### 额外信息

通过 `extra` 或 `extra` 插槽在数值下方展示补充说明。

<demo src="./__demos__/extra.vue"></demo>

### 数值动画

通过 `animation` 开启数值滚动动画，可用 `start` 控制播放时机。

本例 Start 将父级 `start` 从 `false` 改为 `true`，从 `value-from` 播放到目标值；重复点击不会重播。`start=false` 暂停，随后切回 `true` 会从 `value-from` 重新播放，不是从暂停位置继续。需要可重播按钮时，由父级先设为 `false`，等待一次 Vue 更新后再设为 `true`。

<demo src="./__demos__/animation.vue"></demo>

### 倒计时

`Countdown` 是独立组件，模板中使用 `<c-countdown>`。完整用法见 [Countdown 倒计时](/components/countdown/)。

<demo src="../countdown/__demos__/statistic.vue"></demo>

## 自定义与插槽

### 前缀 / 后缀

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `title` | 数值展示的标题 | 前缀 / 后缀、自定义数值 |
| `suffix` | 数值后缀 | 前缀 / 后缀、自定义数值 |
| `value` | 数值展示的值 | 前缀 / 后缀 |
| `prefix` | 数值前缀 | 前缀 / 后缀 |
| `show-group-separator` | 是否展示进位分隔符（数字模式使用） | 前缀 / 后缀 |
| `precision` | 小数保留位数（数字模式使用） | 前缀 / 后缀 |
<!-- demo-config-notes:end -->

通过 `prefix` / `suffix` 或同名插槽为数值添加单位、货币符号或趋势图标。

<demo src="./__demos__/prefix-suffix.vue"></demo>

### 自定义数值

未传入 `value` 时，可用默认插槽自定义数值内容。例如嵌入 `CountTo` 实现滚动数字。

<demo src="./__demos__/count-to.vue"></demo>

## 动画时长边界

时长为有限非负毫秒数。0 在下一帧到达目标；负数、NaN 和无穷值会产生开发环境属性诊断，并安全地按 0 处理，不会持续请求动画帧。下一帧执行前暂停或卸载会取消本次完成。启用数值动画时，修改 animation-duration 按已有规则重新播放。

## API

`precision` 支持 0–100 的整数，无效值回退为 0。数值格式使用 JavaScript 二进制数和舍入，不能替代精确的财务计算；特别大的数可能以科学计数法显示，动画端点差值溢出时直接显示最终值。数值分组使用 en-US 规则，`separator` 可替换分组逗号，小数点固定为点；日期按本地时间格式化。非有限数值会提示且按原值显示，不参与动画；无效动画起点回退为 0，无效时长按 0 处理并在下一帧结束。

### Statistic Props

| 属性                   | 说明                                                           | 类型                      | 默认值       |
| ---------------------- | -------------------------------------------------------------- | ------------------------- | ------------ |
| `title`                | 数值展示的标题                                                 | `string`                  | -            |
| `value`                | 数值展示的值                                                   | `number \| string \| Date` | -            |
| `prefix`               | 数值前缀                                                       | `string`                  | -            |
| `suffix`               | 数值后缀                                                       | `string`                  | -            |
| `format`               | 数值展示的格式（日期模式使用）                                 | `string`                  | `'HH:mm:ss'` |
| `extra`                | 额外的显示内容                                                 | `string`                  | -            |
| `start`                | 是否开始动画                                                   | `boolean`                 | `true`       |
| `precision`            | 小数保留位数（数字模式使用）                                   | `number`                  | `0`          |
| `separator`            | 进位分隔符（数字模式使用）                                     | `string`                  | -            |
| `show-group-separator` | 是否展示进位分隔符（数字模式使用）                             | `boolean`                 | `false`      |
| `tabular-nums`         | 是否使用等宽数字，避免数值变化时宽度跳动                       | `boolean`                 | `false`      |
| `animation`            | 是否开启动画                                                   | `boolean`                 | `false`      |
| `animation-duration`   | 动画的过渡时间                                                 | `number`                  | `2000`       |
| `value-from`           | 动画的起始值                                                   | `number`                  | -            |
| `placeholder`          | 提示文字（当 `value` 为 `undefined` 且未使用默认插槽时显示）   | `string`                  | -            |
| `value-style`          | 自定义显示值的样式                                             | `CSSProperties`           | -            |

### Statistic Slots

| 插槽名    | 说明                                     | 参数 |
| --------- | ---------------------------------------- | ---- |
| `default` | 自定义数值内容，未传入 `value` 时生效    | `-`  |
| `title`   | 标题                                     | `-`  |
| `prefix`  | 前缀                                     | `-`  |
| `suffix`  | 后缀                                     | `-`  |
| `extra`   | 额外内容                                 | `-`  |

## Types

组件导出以下类型定义

```ts
import type { StatisticProps } from '@cedar-design/ui'
```

## 使用说明



默认插槽动态出现/消失时同步切换占位文字；动画在卸载及 KeepAlive 停用时暂停。

### 动画配置与生命周期

`start=true` 时，动态开启 `animation`、更改数字目标、`valueFrom` 或 `animationDuration` 会从当前配置的起点重播；只改精度、分隔符等格式不会重播。关闭动画或切换为字符串/日期立即展示目标值并停止调度帧。`start=false` 暂停当前数值，后续显式切回 `true` 重播；暂停时改配置只准备新起点，不调度帧。KeepAlive 停用暂停，配置未变则激活后续跑；配置改变则激活时重新同步。卸载释放调度帧。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-statistic-decimal-font-size` | `inherit` | `font-size` |
| `--c-statistic-extra-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-statistic-extra-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-statistic-extra-margin-top` | `var(--c-spacing-4)` | `margin-top` |
| `--c-statistic-prefix-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-statistic-prefix-font-size` | `14px` | `font-size` |
| `--c-statistic-prefix-spacing` | `var(--c-spacing-1)` | `margin-inline-end` |
| `--c-statistic-suffix-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-statistic-suffix-font-size` | `14px` | `font-size` |
| `--c-statistic-suffix-spacing` | `var(--c-spacing-1)` | `margin-inline-start` |
| `--c-statistic-title-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-statistic-title-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-statistic-title-margin-bottom` | `var(--c-spacing-4)` | `margin-bottom` |
| `--c-statistic-value-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-statistic-value-font-size` | `26px` | `font-size` |
| `--c-statistic-value-font-weight` | `var(--c-font-weight-500)` | `font-weight` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-statistic-decimal-font-size: inherit;
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
