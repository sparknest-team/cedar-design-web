---
permalink: /components/time-picker/
---

# TimePicker

在弹出面板上选择时间，以便捷完成时间输入的控件。

## 案例

### 基本用法

时间输入器的基础用法

<demo src="./__demos__/basic.vue"></demo>

### 范围选择器

时间输入器的范围选择器。

<demo src="./__demos__/time-range.vue"></demo>

### 双向绑定

支持v-model进行数据的双向绑定。

<demo src="./__demos__/v-model.vue"></demo>

### 默认值

只有默认值的清空，可通过`defaultValue`传递

<demo src="./__demos__/default-value.vue"></demo>

### 尺寸

有四种尺寸可供选择。

<demo src="./__demos__/size.vue"></demo>

### 禁用

禁用状态。

<demo src="./__demos__/disabled.vue"></demo>

### 禁用部分时间选项

通过设置 disabledHours disabledMinutes disabledSeconds，可以禁用 时 / 分 / 秒的部分选项。

<demo src="./__demos__/disabled-parts.vue"></demo>

### 跳过确认

跳过确认步骤，直接点击选择时间。

<demo src="./__demos__/no-confirm.vue"></demo>

### 定制格式

通过设置 format，可以定制需要显示的时、分、秒。

<demo src="./__demos__/format.vue"></demo>

### 定制步长

通过设置 step，可以定制需要显示的时、分、秒的步长。

<demo src="./__demos__/step.vue"></demo>

### 附加内容

选择框底部显示自定义的内容。

<demo src="./__demos__/extra.vue"></demo>

### 十二小时制

通过设置`use12Hours`,可以定制需要显示的时、分、秒。

<demo src="./__demos__/use12Hours.vue"></demo>

## API

### Props

| 参数名                      | 描述                                                  | 类型                                                           |    默认值    |
| --------------------------- | ----------------------------------------------------- | -------------------------------------------------------------- | :----------: |
| type                        | 选择器类型                                            | `'time' \| 'time-range'`                                       |   `'time'`   |
| model-value **(v-model)**   | 绑定值                                                | `string \| Array<string>`                                      |     `-`      |
| default-value               | 默认值                                                | `string \| Array<string>`                                      |     `-`      |
| disabled                    | 是否禁用                                              | `boolean`                                                      |   `false`    |
| clearable                   | 是否允许清除                                          | `boolean`                                                      |    `true`    |
| readonly                    | 是否为只读模式                                        | `boolean`                                                      |   `false`    |
| error                       | 是否为错误状态                                        | `boolean`                                                      |   `false`    |
| format                      | 展示日期的格式，参考[字符串解析格式](#字符串解析格式) | `string`                                                       | `'HH:mm:ss'` |
| placeholder                 | 提示文案                                              | `string`                                                       |     `-`      |
| size                        | 输入框尺寸                                            | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                         |    `'md'`    |
| popup-container             | 弹出框的挂载容器                                      | `string \| HTMLElement`                                        |     `-`      |
| use12-hours                 | 12 小时制                                             | `boolean`                                                      |   `false`    |
| step                        | 设置 时 / 分 / 秒 的选择间隔                          | `{  hour?: number;  minute?: number;  second?: number;}`       |     `-`      |
| disabled-hours              | 禁用的部分小时选项                                    | `() => number[]`                                               |     `-`      |
| disabled-minutes            | 禁用的部分分钟选项                                    | `(selectedHour?: number) => number[]`                          |     `-`      |
| disabled-seconds            | 禁用的部分秒数选项                                    | `(selectedHour?: number, selectedMinute?: number) => number[]` |     `-`      |
| hide-disabled-options       | 隐藏禁止选择的选项                                    | `boolean`                                                      |   `false`    |
| disable-confirm             | 禁用确认步骤，开启后直接点选时间不需要点击确认按钮    | `boolean`                                                      |   `false`    |
| position                    | 弹出的位置                                            | `'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'`            |    `'bl'`    |
| popup-visible **(v-model)** | 控制弹出框打开或者关闭                                | `boolean`                                                      |     `-`      |
| default-popup-visible       | 弹出框默认打开或者关闭                                | `boolean`                                                      |   `false`    |
| trigger-props               | 可以传入 `Trigger` 组件的参数                         | `TriggerProps`                                                 |     `-`      |
| unmount-on-close            | 是否在关闭后销毁 dom 结构                             | `boolean`                                                      |   `false`    |

### Events

| 事件名               | 描述                       | 参数                                                                                                              |
| -------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------- |
| change               | 组件值发生改变             | value: `string \| Array<string> \| undefined` <br>time: `Date \| Array<Date> \| undefined`<br>timestamp: `number` |
| select               | 选择时间但未触发组件值变化 | value: `string                                                                                                    | Array<string | undefined>`<br>time: `Date \| Array<Date \| undefined>` |
| clear                | 点击清除按钮               | -                                                                                                                 |
| popup-visible-change | 弹出框展开和收起           | visible: `boolean`                                                                                                |

### Slots

| 插槽名      |      描述      | 参数 |
| ----------- | :------------: | ---- |
| prefix      |   输入框前缀   | -    |
| suffix-icon | 输入框后缀图标 | -    |
| extra       |   额外的页脚   | -    |

### 字符串解析格式

| 格式   | 输出             |                         描述 |
| ------ | ---------------- | ---------------------------: |
| `YY`   | 21               |                 两位数的年份 |
| `YYYY` | 2021             |                   四位数年份 |
| `M`    | 1-12             |              月份，从 1 开始 |
| `MM`   | 01-12            |                 月份，两位数 |
| `MMM`  | Jan-Dec          |               缩写的月份名称 |
| `MMMM` | January-December |               完整的月份名称 |
| `D`    | 1-31             |                 月份里的一天 |
| `DD`   | 01-31            |         月份里的一天，两位数 |
| `d`    | 0-6              |     一周中的一天，星期天是 0 |
| `dd`   | Su-Sa            |     最简写的一周中一天的名称 |
| `ddd`  | Sun-Sat          |       简写的一周中一天的名称 |
| `dddd` | Sunday-Saturday  |             一周中一天的名称 |
| `H`    | 0-23             |                         小时 |
| `HH`   | 00-23            |                 小时，两位数 |
| `h`    | 1-12             |              小时, 12 小时制 |
| `hh`   | 01-12            |      小时, 12 小时制, 两位数 |
| `m`    | 0-59             |                         分钟 |
| `mm`   | 00-59            |                 分钟，两位数 |
| `s`    | 0-59             |                           秒 |
| `ss`   | 00-59            |                   秒，两位数 |
| `S`    | 0-9              |             数百毫秒，一位数 |
| `SS`   | 00-99            |             几十毫秒，两位数 |
| `SSS`  | 000-999          |               毫秒，三位数字 |
| `Z`    | -5:00            |                 UTC 的偏移量 |
| `ZZ`   | -0500            | UTC 的偏移量，数字前面加上 0 |
| `A`    | AM PM            |                            - |
| `a`    | am pm            |                            - |
| `Do`   | 1st... 3st       |         带序号的月份中的某天 |
| `X`    | 1410715640.579   |                  Unix 时间戳 |
| `x`    | 1410715640579    |              Unix 毫秒时间戳 |

## 类型定义

组件导出以下类型定义

```ts
import type { TimePickerProps } from '@cedar/ui'
```

<script setup>
</script>
<script setup>
</script>
