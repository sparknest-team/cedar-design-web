---
permalink: /components/countdown/
---

# Countdown 倒计时

实时展示剩余时长，支持暂停、重置与毫秒精度。

`time` 为剩余时长（毫秒）。若要对准某个时刻，传入 `deadline - Date.now()`。

## 案例

### 基础用法

<demo src="./__demos__/basic.vue"></demo>

### 自定义格式

`format` 占位符为 `DD` / `HH` / `mm` / `ss` / `S`（`SS` / `SSS`）。未出现的高位会累加到下一级。

<demo src="./__demos__/format.vue"></demo>

### 显示毫秒

通过 `S` / `SS` / `SSS` 展示毫秒。

<demo src="./__demos__/millisecond.vue"></demo>

### 自定义样式

默认插槽参数为 `timeData`，可按天、时、分、秒分别渲染。

<demo src="./__demos__/custom.vue"></demo>

### 手动控制

设置 `auto-start` 为 `false`，通过 `start`、`pause`、`reset` 控制。倒计时结束时触发 `end`。

<demo src="./__demos__/manual.vue"></demo>

### 嵌入 Statistic

未传入 `value` 时，Statistic 可用默认插槽嵌入 Countdown。

<demo src="./__demos__/statistic.vue"></demo>

## API

### Countdown Props

| 属性          | 说明                                       | 类型                 | 默认值       |
| ------------- | ------------------------------------------ | -------------------- | ------------ |
| `time`        | 倒计时时长（毫秒）                         | `number \| string`   | `0`          |
| `format`      | 展示格式                                   | `string`             | `'HH:mm:ss'` |
| `auto-start`  | 是否自动开始倒计时                         | `boolean`            | `true`       |

### format 占位符

| 格式  | 说明          |
| ----- | ------------- |
| `DD`  | 天数          |
| `HH`  | 小时          |
| `mm`  | 分钟          |
| `ss`  | 秒            |
| `S`   | 毫秒（1 位）  |
| `SS`  | 毫秒（2 位）  |
| `SSS` | 毫秒（3 位）  |

### Countdown Events

| 事件名   | 说明             | 参数                  |
| -------- | ---------------- | --------------------- |
| `change` | 倒计时变化时触发 | `timeData: TimeData`  |
| `end`    | 倒计时结束时触发 | `-`                   |

### Countdown Slots

| 插槽名    | 说明       | 参数                  |
| --------- | ---------- | --------------------- |
| `default` | 自定义内容 | `timeData: TimeData`  |

### TimeData

| 名称           | 说明     | 类型     |
| -------------- | -------- | -------- |
| `days`         | 剩余天数 | `number` |
| `hours`        | 剩余小时 | `number` |
| `minutes`      | 剩余分钟 | `number` |
| `seconds`      | 剩余秒   | `number` |
| `milliseconds` | 剩余毫秒 | `number` |

### Countdown Methods

| 方法名  | 说明                                                              | 参数 | 返回值 |
| ------- | ----------------------------------------------------------------- | ---- | ------ |
| `start` | 开始倒计时                                                        | `-`  | `-`    |
| `pause` | 暂停倒计时                                                        | `-`  | `-`    |
| `reset` | 重置倒计时；若 `auto-start` 为 `true`，重置后会自动开始           | `-`  | `-`    |

## 类型定义

组件导出以下类型定义

```ts
import type { CountdownProps, CountdownInstance, TimeData } from '@cedarjs/ui'
```

### 样式变量

| 变量名                          | 默认值                     |
| ------------------------------- | -------------------------- |
| `--c-countdown-text-color`      | `var(--c-color-text-1)`    |
| `--c-countdown-text-font-size`  | `var(--c-font-size-lg)`    |
