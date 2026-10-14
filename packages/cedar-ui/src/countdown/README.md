---
permalink: /components/countdown/
---

# Countdown 倒计时

真实IAB default/light业务生命周期各端1组通过：实际递减、公开pause／start、KeepAlive停用回调稳定、停用时time重置到900ms不后台计时、激活恢复及卸载后回调稳定，最终节点0。稳定缓存容器保证inactive更新真实传入组件，不把父级延迟传值误记产品缺陷。非已出队竞态／跨窗口／OS证明。

### Countdown 业务时钟与停用边界

Countdown 的 RAF 刷新业务剩余时间，不是视觉插值；CSS duration／减少动效不能改变业务计时。暂停与 KeepAlive 停用冻结剩余时间，重新激活按冻结值续跑，不把停用期间计入消耗。停用时更新 time／reset 可更新剩余数据及 change 通知，但不申请 RAF；auto-start 的启动延后到激活，手动 pause 取消待恢复。停用期间直接 start 被忽略，卸载后的 start／reset 不再通知或调度。

每帧在清空句柄、计算和通知前验证代次，并在 change 回调后再次核对；回调内 reset／pause／start 的新任务不能被旧帧覆盖，已消费帧不能再次更新或抢占后继帧。结束只通知一次，reset 允许新一轮结束。两端受控时钟／RAF各8项通过，其中6项基线失败；完整Countdown Cedar18／Maple20项通过。没有新增CSS变量／公开API，模拟RAF不等于真实浏览器／OS验收。

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
| `--c-countdown-text-color`      | `var(--c-sys-color-content-primary)` |
| `--c-countdown-text-font-size`  | `var(--c-font-size-lg)`    |

## 同源实现与平台边界

两端各自保存完整源码，不引用公共核心，不共享组件实例或响应式状态；修改时同步维护两份实现。主体、Props、关键样式及配对测试纳入只读源码一致性检查，主题 token 和安装入口各自维护。

SSR 输出初始格式化时间。暂停时修改 format 会更新显示；结束事件每轮只触发一次，reset 后可开始新一轮；卸载清理动画帧。
