---
permalink: /components/pagination/
---

# Pagination

采用分页控制单页内的信息数量，也可进行页面跳转。

## 案例

### 基础用法

基础用法。

<demo src="./__demos__/basic.vue"></demo>

### 更多页码

当页码较大时，会使用更多页码的分页样式。

<demo src="./__demos__/more-page-size.vue"></demo>

### 每页条数

通过设置`show-page-size`,展示每页条数选择器。

<demo src="./__demos__/show-page-size.vue"></demo>

### 页码跳转

通过设置`show-jumper`,展示页码跳转输入框 。

<demo src="./__demos__/show-jumper.vue"></demo>

### 分页尺寸

分页分为`xs`、`sm`、`md`、`lg`、`xl`五种尺寸。

<demo src="./__demos__/size.vue"></demo>

### 简洁模式

通过设置`simple`,展示简洁模式。

<demo src="./__demos__/simple.vue"></demo>

### 展示总数

通过设置`show-total`,展示总数。

<demo src="./__demos__/show-total.vue"></demo>

### 全部展示

展示全部配置项

<demo src="./__demos__/all.vue"></demo>

### 自定义分页按钮

可以通过插槽自定义分页按钮内容

<demo src="./__demos__/custom-page-button.vue"></demo>

## API

### Pagination Props

| 属性                   | 说明                                                            | 类型            | 默认值                 |
| ---------------------- | --------------------------------------------------------------- | --------------- | ---------------------- |
| total(**必填**)        | 数据总数                                                        | `number`        | `-`                    |
| current(**v-model**)   | 当前页数                                                        | `number`        | `-`                    |
| default-current        | 默认当前页数                                                    | `number`        | `1`                    |
| page-size(**v-model**) | 每页条数                                                        | `number`        | `-`                    |
| default-page-size      | 默认每页展示的数据条数(非受控状态)                              | `number`        | `10`                   |
| disabled               | 是否禁用                                                        | `boolean`       | `false`                |
| hide-on-single-page    | 只有一页时是否隐藏分页                                          | `boolean`       | `false`                |
| simple                 | 是否使用简洁模式                                                | `boolean`       | `false`                |
| show-total             | 是否展示总数                                                    | `boolean`       | `false`                |
| show-more              | 是否展示更多按钮                                                | `boolean`       | `false`                |
| show-jumper            | 是否展示跳转输入框                                              | `boolean`       | `false`                |
| show-page-size         | 是否展示每页条数选择器                                          | `boolean`       | `false`                |
| page-size-options      | 每页条数选择器选项                                              | `number[]`      | `[10, 20, 30, 40, 50]` |
| page-size-props        | 每页条数选择器属性                                              | `SelectProps`   | `-`                    |
| size                   | 尺寸                                                            | `Size`          | `md`                   |
| page-item-style        | 分页按钮样式                                                    | `CSSProperties` | `-`                    |
| active-page-item-style | 当前分页按钮样式                                                | `CSSProperties` | `-`                    |
| base-size              | 计算显示省略的基础个数，显示省略的个数为`baseSize+2*bufferSize` | `number`        | `6`                    |
| buffer-size            | 显示省略号时，当前页码左右显示的页码个数                        | `number`        | `2`                    |
| auto-adjust            | 是否在改变数据条数时自动调整页码                                | `boolean`       | `true`                 |

### Pagination Events

| 事件名           | 说明               | 参数              |
| ---------------- | ------------------ | ----------------- |
| change           | 页码改变时触发     | current:`number`  |
| page-size-change | 每页条数改变时触发 | pageSize:`number` |

### Pagination Slots

| 插槽名             | 说明           | 参数                          |
| ------------------ | -------------- | ----------------------------- |
| total              | 总数           | total:`number`                |
| page-item-ellipsis | 分页按钮(省略) | `-`                           |
| page-item-step     | 分页按钮(步)   | type:`'previous'\|'next'`     |
| page-item          | 分页按钮       | page:`number`                 |
| jumper-prepend     | 跳转前缀       | `-`                           |
| jumper-append      | 跳转后缀       | `-`                           |

## 类型定义

组件导出以下类型定义

```ts
import type { PaginationProps } from '@cedarjs/ui'
```
