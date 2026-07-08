---
permalink: /components/calendar/
---

# Calendar

日历组件。

## 案例

### 基础用法

展示和选择日历

<demo src="./__demos__/basic.vue"></demo>

## API

### `<calendar>` Props

| 参数名                    | 描述                 | 类型                    |       默认值        |
| ------------------------- | -------------------- | ----------------------- | :-----------------: |
| model-value **(v-model)** | 绑定值               | `date`                  |         `-`         |
| default-value             | 默认值（非受控状态） | `date`                  |         `-`         |
| mode                      | 模式                 | `'month' \| 'year'`     |         `-`         |
| default-mode              | 默认模式             | `'month' \| 'year'`     |      `'month'`      |
| modes                     | 显示的模式           | `('month' \| 'year')[]` | `['month', 'year']` |

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
import type { CalendarInstance } from '@cedar/ui'
```
