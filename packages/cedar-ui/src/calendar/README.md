---
permalink: /components/calendar/
---

# Calendar

用于展示月历或年历，并支持单日期选择、自定义日期内容和受控状态。表单中的日期输入请使用 Date，带选择面板的复杂选择请使用 DatePicker，日程编排请使用 Scheduler。

## 案例

### 基础用法

展示并选择日期。

<demo src="./__demos__/basic.vue"></demo>

### 受控状态与事件

通过 `v-model` 从外部设置日期，并通过 `change`、`panel-change` 区分日期选择和面板翻页。

<demo src="./__demos__/controlled.vue"></demo>

### 月视图与年视图

使用 `mode` 控制视图。未传入 `mode` 时，也可以通过头部的模式切换器改变内部视图。

<demo src="./__demos__/modes.vue"></demo>

### 一周起始与周序号

`day-start-of-week` 控制星期排列，`is-week` 在日期前显示周序号。

<demo src="./__demos__/week-options.vue"></demo>

## 定制

### 自定义日期单元格

默认插槽可在日期数字下方展示标记、摘要等轻量内容。点击自定义内容所在单元格仍会选择日期。

<demo src="./__demos__/custom-cell.vue"></demo>

### 自定义头部标题

`header` 插槽替换中间标题，上一页、下一页、今天和模式切换仍由 Calendar 管理。

<demo src="./__demos__/custom-header.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### `<calendar>` Props

| 参数名                    | 描述                 | 类型                    |       默认值        |
| ------------------------- | -------------------- | ----------------------- | :-----------------: |
| model-value **(v-model)** | 绑定值               | `date`                  |         `-`         |
| default-value             | 默认值（非受控状态） | `date`                  |         `-`         |
| mode                      | 模式                 | `'month' \| 'year'`     |         `-`         |
| default-mode              | 默认模式             | `'month' \| 'year'`     |      `'month'`      |
| modes                     | 显示的模式           | `('month' \| 'year')[]` | `['month', 'year']` |
| day-start-of-week         | 一周开始日           | `0 \| 1`                |         `0`         |
| is-week                   | 是否显示周序号       | `boolean`                |       `false`       |

### `<calendar>` Events

| 事件名       | 描述                 | 参数         |
| ------------ | -------------------- | ------------ |
| change       | 选择的日期改变时触发 | date: `Date` |
| panel-change | 日期面板改变时触发   | date: `Date` |

### `<calendar>` Slots

| 插槽名  |       描述       | 参数                                                | 版本   |
| ------- | :--------------: | --------------------------------------------------- | :----- |
| header  |  自定义头部内容  | year: `number`<br>month: `number`                   | 2.53.0 |
| default | 自定义单元格内容 | year: `number`<br>month: `number`<br>date: `number` | 2.53.0 |

### 类型定义

组件导出以下类型定义

```ts
import type { CalendarInstance } from "@cedarjs/ui";
```
