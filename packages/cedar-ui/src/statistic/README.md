---
permalink: /components/statistic/
---

# Statistic 统计数值

突出展示某个或某组数字、带描述的统计类数据。

## 案例

### 基础用法

通过 `title` 展示描述，通过 `value` 展示数值。`value` 支持数字或字符串。

<demo src="./__demos__/basic.vue"></demo>

### 前缀 / 后缀

通过 `prefix` / `suffix` 或同名插槽为数值添加单位、货币符号或趋势图标。

<demo src="./__demos__/prefix-suffix.vue"></demo>

### 等宽数字

开启 `tabular-nums` 后，每个数字字符占用相同宽度，适合数值频繁变化或纵向对齐的场景。下面的数值始终保持四位，请观察右侧竖线：比例数字切换时竖线会左右跳动，等宽数字的竖线则保持稳定。

<demo src="./__demos__/tabular-nums.vue"></demo>

### 额外信息

通过 `extra` 或 `extra` 插槽在数值下方展示补充说明。

<demo src="./__demos__/extra.vue"></demo>

### 数值动画

通过 `animation` 开启数值滚动动画，可用 `start` 控制播放时机。

本例 Start 将父级 `start` 从 `false` 改为 `true`，从 `value-from` 播放到目标值；重复点击不会重播。`start=false` 暂停，随后切回 `true` 会从 `value-from` 重新播放，不是从暂停位置继续。需要可重播按钮时，由父级先设为 `false`，等待一次 Vue 更新后再设为 `true`。

<demo src="./__demos__/animation.vue"></demo>

### 自定义数值

未传入 `value` 时，可用默认插槽自定义数值内容。例如嵌入 `CountTo` 实现滚动数字。

<demo src="./__demos__/count-to.vue"></demo>

### 倒计时

`Countdown` 是独立组件，模板中使用 `<c-countdown>`。完整用法见 [Countdown 倒计时](/components/countdown/)。

<demo src="../countdown/__demos__/statistic.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### `<Statistic>` Props

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

### `<Statistic>` Slots

| 插槽名    | 说明                                     | 参数 |
| --------- | ---------------------------------------- | ---- |
| `default` | 自定义数值内容，未传入 `value` 时生效    | `-`  |
| `title`   | 标题                                     | `-`  |
| `prefix`  | 前缀                                     | `-`  |
| `suffix`  | 后缀                                     | `-`  |
| `extra`   | 额外内容                                 | `-`  |

### 类型定义

组件导出以下类型定义

```ts
import type { StatisticProps } from '@cedar-design/ui'
```

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--c-statistic-title-color` | `var(--c-sys-color-content-secondary)` |
| `--c-statistic-title-font-size` | `var(--c-font-size-body-3)` |
| `--c-statistic-title-margin-bottom` | `var(--c-spacing-4)` |
| `--c-statistic-value-color` | `var(--c-sys-color-content-primary)` |
| `--c-statistic-value-font-size` | `26px` |
| `--c-statistic-value-font-weight` | `var(--c-font-weight-500)` |
| `--c-statistic-decimal-font-size` | `inherit` |
| `--c-statistic-prefix-color` | `var(--c-sys-color-content-secondary)` |
| `--c-statistic-prefix-font-size` | `14px` |
| `--c-statistic-prefix-spacing` | `var(--c-spacing-1)` |
| `--c-statistic-suffix-color` | `var(--c-sys-color-content-secondary)` |
| `--c-statistic-suffix-font-size` | `14px` |
| `--c-statistic-suffix-spacing` | `var(--c-spacing-1)` |
| `--c-statistic-extra-color` | `var(--c-sys-color-content-secondary)` |
| `--c-statistic-extra-font-size` | `var(--c-font-size-body-3)` |
| `--c-statistic-extra-margin-top` | `var(--c-spacing-4)` |

## 同源实现与平台边界

两端各自保存完整源码，不引用公共核心，不共享组件实例或响应式状态；修改时同步维护两份实现。主体、Props、关键样式及配对测试纳入只读源码一致性检查，主题 token 和安装入口各自维护。

默认插槽动态出现/消失时同步切换占位文字；动画在卸载及 KeepAlive 停用时暂停。
