---
permalink: /components/count-to/
---

# CountTo 数字动画

展示起始数值到目标数值的数字动画。

## 基础示例

### 基础用法

通过 `from` 和 `to` 指定起始值与目标值。

<demo src="./__demos__/basic.vue"></demo>

## 内容与展示

### 精度、时长与动画曲线

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `to` | 目标值 | 精度、时长与动画曲线 |
| `precision` | 小数精度 | 精度、时长与动画曲线 |
| `duration` | 动画持续时间（毫秒） | 精度、时长与动画曲线 |
| `timing-function` | 动画缓动函数 | 精度、时长与动画曲线 |
<!-- demo-config-notes:end -->

比较小数精度对最终文本的影响，以及时长和缓动曲线对数字变化过程的影响；手动启动、暂停另行展示。

<details>
<summary>配置说明与使用限制</summary>

#### 精度

通过 `precision` 控制小数位数。

#### 自定义时长

通过 `duration` 指定动画时长（毫秒）。

#### 自定义动画曲线

通过 `timing-function` 指定缓动函数。

</details>

<demo src="./__demos__/number-format-comparison.vue"></demo>

## 自定义与插槽

### 自定义样式

通过默认插槽自定义展示内容，插槽参数为当前数值。

<demo src="./__demos__/custom.vue"></demo>

## 交互与控制

### 手动控制

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `to` | 目标值 | 手动控制 |
| `auto-start` | 是否自动开始播放动画 | 手动控制 |
<!-- demo-config-notes:end -->

设置 `auto-start` 为 `false`，通过 `start`、`pause`、`reset` 手动控制动画。

<demo src="./__demos__/manual.vue"></demo>

## API

### CountTo Props

| 属性              | 说明                     | 类型                     | 默认值   |
| ----------------- | ------------------------ | ------------------------ | -------- |
| from              | 起始值                   | _number \| string_       | `0`      |
| to                | 目标值                   | _number \| string_       | `0`      |
| duration          | 动画持续时间（毫秒）     | _number \| string_       | `2000`   |
| precision         | 小数精度                 | _number \| string_       | `0`      |
| auto-start        | 是否自动开始播放动画     | _boolean_                | `true`   |
| timing-function   | 动画缓动函数             | _(v: number) => number_  | `-`      |

### CountTo Events

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| end    | 动画结束时触发 | `-`      |

### CountTo Slots

| 插槽名  | 说明       | 参数              |
| ------- | ---------- | ----------------- |
| default | 自定义内容 | `value: number`   |

### CountTo Methods

| 方法名 | 说明                                                             | 参数 | 返回值 |
| ------ | ---------------------------------------------------------------- | ---- | ------ |
| start  | 开始动画                                                         | `-`  | `-`    |
| pause  | 暂停动画                                                         | `-`  | `-`    |
| reset  | 重置动画；若 `auto-start` 为 `true`，重置后会自动开始播放        | `-`  | `-`    |

## 类型定义

组件导出以下类型定义

```ts
import type { CountToProps, CountToInstance } from '@cedar-design/ui'
```

### 样式变量

| 变量名                        | 默认值                     |
| ----------------------------- | -------------------------- |
| `--c-count-to-text-color`     | `var(--c-sys-color-content-primary)` |
| `--c-count-to-text-font-size` | `var(--c-font-size-lg)`    |

## 同源实现与平台边界

两端各自保存完整源码，不引用公共核心，不共享组件实例或响应式状态；修改时同步维护两份实现。主体、Props、关键样式及配对测试纳入只读源码一致性检查，主题 token 和安装入口各自维护。

动画在卸载及 KeepAlive 停用时暂停，重新激活后恢复；各实例的数值和动画状态独立。
