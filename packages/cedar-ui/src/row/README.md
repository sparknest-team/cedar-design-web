---
permalink: /components/row/
---

# Row / Col

24 栏 Flex 栅格，可有效保证页面一致性与协作统一。

> CSS Grid 布局见 [Grid 栅格](/components/grid/)。

## 基础用法

基础用法。

<demo src="../grid/__demos__/basic.vue"></demo>

## 栅格偏移

指定 `offset` 可以对栅格进行平移操作。

<demo src="../grid/__demos__/offset.vue"></demo>

## 区块间隔

通过在 `Row` 上指定 `gutter` 可以增加栅格的区域间隔。

<demo src="../grid/__demos__/gutter.vue"></demo>

## 水平布局

通过 `justify` 来进行水平布局。

<demo src="../grid/__demos__/flex-justify.vue"></demo>

## 垂直布局

通过 `align` 来进行垂直布局。

<demo src="../grid/__demos__/flex-align.vue"></demo>

## 排序

通过 `order` 来进行元素排序。

<demo src="../grid/__demos__/order.vue"></demo>

## 响应式布局

预置六种响应尺寸, 分别为 `xs`, `sm`, `md`, `lg`, `xl`, `xxl`。

<demo src="../grid/__demos__/adaptation.vue"></demo>

## 其他属性的响应式

`span`, `offset`, `order` 属性可以内嵌到 `xs`, `sm`, `md`, `lg`, `xl`, `xxl` 对象中使用。
比如 `:xs="8"` 相当于 `:xs="{ span: 8 }"`。

<demo src="../grid/__demos__/adaptation-object.vue"></demo>

## Flex 用法

通过设置 `Col` 组件的 `flex` 属性，可以任意配置 flex 布局。

<demo src="../grid/__demos__/flex.vue"></demo>

## 组件配置

### Row Props

| 参数名  | 描述                                                                                                                           | 类型                                                                                |  默认值   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- | :-------: |
| gutter  | 栅格间隔，单位是`px` 栅格间隔。可传入响应式对象写法 { xs: 4, sm: 6, md: 12}，传入数组 [ 水平间距， 垂直间距 ] 来设置两个方向。 | `number\| ResponsiveValue\| [number \| ResponsiveValue, number \| ResponsiveValue]` |    `0`    |
| justify | 水平对齐方式 (`justify-content`)                                                                                               | `'start' \| 'center' \| 'end' \| 'space-around' \| 'space-between'`                 | `'start'` |
| align   | 竖直对齐方式 ( `align-items` )                                                                                                 | `'start' \| 'center' \| 'end' \| 'stretch'`                                         | `'start'` |
| div     | 开启这个选项`Row`和`Col`都会被当作div而不会附带任何Grid相关的类和样式                                                          | `boolean`                                                                           |  `false`  |
| wrap    | `Col` 是否支持换行                                                                                                             | `boolean`                                                                           |  `true`   |

### Col Props

| 参数名 | 描述                                   | 类型                                                | 默认值 |
| ------ | -------------------------------------- | --------------------------------------------------- | :----: |
| span   | 栅格占位格数                           | `number`                                            |  `24`  |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | `number`                                            |  `-`   |
| order  | 对元素进行排序                         | `number`                                            |  `-`   |
| xs     | < 576px 响应式栅格                     | `number \| { [key: string]: any }`                  |  `-`   |
| sm     | >= 576px 响应式栅格                    | `number \| { [key: string]: any }`                  |  `-`   |
| md     | >= 768px 响应式栅格                    | `number \| { [key: string]: any }`                  |  `-`   |
| lg     | >= 992px 响应式栅格                    | `number \| { [key: string]: any }`                  |  `-`   |
| xl     | >= 1200px 响应式栅格                   | `number \| { [key: string]: any }`                  |  `-`   |
| xxl    | >= 1600px 响应式栅格                   | `number \| { [key: string]: any }`                  |  `-`   |
| flex   | 设置 flex 布局属性                     | `number \| string \| 'initial' \| 'auto' \| 'none'` |  `-`   |

## 类型定义

### ResponsiveValue

| 参数名 | 描述                 | 类型     | 默认值 |
| ------ | -------------------- | -------- | :----: |
| xxl    | >= 1600px 响应式配置 | `number` |  `-`   |
| xl     | >= 1200px 响应式配置 | `number` |  `-`   |
| lg     | >= 992px 响应式配置  | `number` |  `-`   |
| md     | >= 768px 响应式配置  | `number` |  `-`   |
| sm     | >= 576px 响应式配置  | `number` |  `-`   |
| xs     | < 576px 响应式配置   | `number` |  `-`   |

```ts
import type { RowProps, ColProps } from '@cedarjs/ui'
```
