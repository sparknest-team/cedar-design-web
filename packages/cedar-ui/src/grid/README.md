---
permalink: /components/grid/
---

# Grid

基于 CSS Grid 的布局组件，支持折叠，并且可以设置后缀节点（后缀节点会显示在一行的结尾）。

> 24 栏 Flex 栅格见 [Row / Col](/components/row/)。

## Grid 布局

基于 CSS 的 Grid 布局实现的布局组件，支持折叠，并且可以设置后缀节点，后缀节点会显示在一行的结尾。

<demo src="./__demos__/grid.vue"></demo>

## 响应式的 Grid 布局

Grid 组件的响应式配置格式为 `{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }`。

<demo src="./__demos__/grid-responsive.vue"></demo>

## 组件配置

### Grid Props

| 参数名         | 描述             | 类型                        | 默认值  |
| -------------- | ---------------- | --------------------------- | :-----: |
| cols           | 每一行展示的列数 | `number \| ResponsiveValue` |  `24`   |
| row-gap        | 行与行之间的间距 | `number \| ResponsiveValue` |   `0`   |
| col-gap        | 列与列之间的间距 | `number \| ResponsiveValue` |   `0`   |
| collapsed      | 是否折叠         | `boolean`                   | `false` |
| collapsed-rows | 折叠时显示的行数 | `number`                    |   `1`   |

### GridItem Props

| 参数名 | 描述           | 类型                        | 默认值  |
| ------ | -------------- | --------------------------- | :-----: |
| span   | 跨越的格数     | `number \| ResponsiveValue` |   `1`   |
| offset | 左侧的间隔格数 | `number \| ResponsiveValue` |   `0`   |
| suffix | 是否是后缀元素 | `boolean`                   | `false` |

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
import type { GridProps } from '@cedarjs/ui'
```
