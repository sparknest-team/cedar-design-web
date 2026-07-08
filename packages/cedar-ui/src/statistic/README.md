---
permalink: /components/statistic/
---

# Statistic

突出展示某个或某组数字、带描述的统计类数据。

## 案例

### 基础用法

当需要突出某个或某组数字或展示带描述的统计类数据时使用。

<demo src="./__demos__/basic.vue"></demo>

## API

### `<Statistic>` Props

| 属性                   | 说明                                         | 类型             | 默认值       |
| ---------------------- | -------------------------------------------- | ---------------- | ------------ |
| `title`                | 数值展示的标题                               | `string`         | -            |
| `value`                | 数值展示的值                                 | `number \| Date` | -            |
| `format`               | 数值展示的格式（日期模式使用）               | `string`         | `'HH:mm:ss'` |
| `extra`                | 额外的显示内容                               | `string`         | -            |
| `start`                | 是否开始动画                                 | `boolean`        | `true`       |
| `precision`            | 小数保留位数（数字模式使用）                 | `number`         | `0`          |
| `separator`            | 进位分隔符（数字模式使用）                   | `string`         | -            |
| `show-group-separator` | 是否展示进位分隔符（数字模式使用）           | `boolean`        | `false`      |
| `animation`            | 是否开启动画                                 | `boolean`        | `false`      |
| `animation-duration`   | 动画的过渡时间                               | `number`         | `2000`       |
| `value-from`           | 动画的起始值                                 | `number`         | -            |
| `placeholder`          | 提示文字（当 `value` 为 `undefined` 时显示） | `string`         | -            |
| `value-style`          | 自定义显示值的样式                           | `CSSProperties`  | -            |

### `<Statistic>` Slots

| 插槽名   | 说明     | 参数     |
| -------- | -------- | -------- |
| `title`  | 标题     | `string` |
| `prefix` | 前缀     | `string` |
| `suffix` | 后缀     | `string` |
| `extra`  | 额外内容 | `string` |

### `<Countdown>` Props

| 属性          | 说明                             | 类型            | 默认值                      |
| ------------- | -------------------------------- | --------------- | --------------------------- |
| `title`       | 倒计时的标题                     | `string`        | -                           |
| `value`       | 倒计时的值                       | `number`        | `() => Date.now() + 300000` |
| `now`         | 用于修正初始化时间显示不正确     | `number`        | `() => Date.now()`          |
| `format`      | 倒计时的展示格式（使用 `dayjs`） | `string`        | `'HH:mm:ss'`                |
| `start`       | 是否开始倒计时                   | `boolean`       | `true`                      |
| `value-style` | 自定义显示值的样式               | `CSSProperties` | -                           |

### `<Countdown>` Events

| 事件名   | 描述                   | 参数 |
| -------- | ---------------------- | ---- |
| `finish` | 倒计时完成后触发的回调 | `-`  |

### `<Countdown>` Slots

| 插槽名  | 描述 | 参数 |
| ------- | ---- | ---- |
| `title` | 标题 | `-`  |

### 类型定义

组件导出以下类型定义

```ts
import type { StatisticProps } from '@cedar/ui'
```
