---
permalink: /components/list/
---

# List

最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

## 案例

### 基础用法

列表的基本使用方法。可用于承载文字、列表、图片和段落。

<demo src="./__demos__/basic.vue"></demo>

### 不同尺寸

列表组件提供了三种大小 `sm, md, lg` ，可根据业务需求自行选择。

<demo src="./__demos__/size.vue"></demo>

### 前缀与后缀

`list-item` 只提供 `prefix` / 默认内容 / `suffix` 三列布局。头像、标题、操作都由业务自己组合。

<demo src="./__demos__/prefix-suffix.vue"></demo>

### 自定义内容

主体和两侧插槽都可以放任意内容。分页、栅格请自行组合 `Pagination` / `Grid`。

<demo src="./__demos__/actions-layout.vue"></demo>

同时提供默认插槽与 `data` 时，默认插槽优先，`item` 插槽不会被调用。`loading` 仅表示整张列表首次加载或刷新；需要滚动分页时请使用 [InfiniteScroll](/components/infinite-scroll/) 组合。

### 无限长列表

通过指定 `virtualListProps` 来开启虚拟列表，在大量数据时获得高性能表现。
在使用虚拟列表时，如果列表元素之间高度变化较大可能导致滚动时视口出现空白区域，可通过调整 `virtualListProps.buffer`
属性解决，[使用方式](/vue/docs/faq#%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8%E7%9A%84%E4%BD%BF%E7%94%A8)。

<demo src="./__demos__/virtual-list.vue"></demo>

## API

### `<list>` Props

| 参数名             | 描述                                                                             | 类型                        | 默认值  | 版本   |
| ------------------ | -------------------------------------------------------------------------------- | --------------------------- | :-----: | :----- |
| data               | 列表数据，需要和 `item` 插槽同时使用                                             | `unknown[]`                 |   `-`   |        |
| size               | 列表大小                                                                         | `'sm' \| 'md' \| 'lg'`      | `'md'`  |        |
| bordered           | 是否显示边框                                                                     | `boolean`                   | `true`  |        |
| split              | 是否显示分割线                                                                   | `boolean`                   | `true`  |        |
| loading            | 是否为加载中状态                                                                 | `boolean`                   | `false` |        |
| max-height         | 列表的最大高度                                                                   | `string \| number`          |   `0`   |        |
| virtual-list-props | 传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps) | `VirtualListProps`          |   `-`   |        |
| scrollbar          | 是否开启虚拟滚动条                                                               | `boolean \| ScrollbarProps` | `true`  | 2.38.0 |

### `<list>` Events

| 事件名 | 描述           | 参数    |
| ------ | -------------- | ------- |
| scroll | 列表滚动时触发 | `Event` |

### `<list>` Methods

| 方法名         | 描述               | 参数                                                                                     | 返回值 |
| -------------- | ------------------ | ---------------------------------------------------------------------------------------- | ------ |
| scrollIntoView | 虚拟滚动到某个元素 | options: `{ index?: number; key?: number \| string; align: 'auto' \| 'top' \| 'bottom'}` | -      |

### `<list>` Slots

| 插槽名  | 描述                                       | 参数                           |
| ------- | ------------------------------------------ | ------------------------------ |
| default | 自定义列表内容；提供时优先于 `data`        | -                              |
| item    | `data` 驱动的列表项                        | index: `number`<br>item: `any` |
| empty   | 非加载状态且无默认内容、无数据时的空白展示 | -                              |
| footer  | 底部信息                                   | -                              |
| header  | 头部信息                                   | -                              |

### `<list-item>` Slots

| 插槽名  |    描述    | 参数 |
| ------- | :--------: | ---- |
| default | 列表项主体 | -    |
| prefix  | 列表项前缀 | -    |
| suffix  | 列表项后缀 | -    |

### VirtualListProps

| 参数名             | 描述                                                                | 类型               | 默认值  | 版本   |
| ------------------ | ------------------------------------------------------------------- | ------------------ | :-----: | :----- |
| height             | 可视区域高度                                                        | `number \| string` |   `-`   |        |
| threshold          | 开启虚拟滚动的元素数量阈值，当数据数量小于阈值时不会开启虚拟滚动。  | `number`           |   `-`   |        |
| isStaticItemHeight | （已废除）元素高度是否是固定的。2.34.1 版本废除，请使用 `fixedSize` | `boolean`          | `false` |        |
| fixedSize          | 元素高度是否是固定的。                                              | `boolean`          | `false` | 2.34.1 |
| estimatedSize      | 元素高度不固定时的预估高度。                                        | `number`           |   `-`   | 2.34.1 |
| buffer             | 视口边界外提前挂载的元素数量。                                      | `number`           |  `10`   | 2.34.1 |

### 类型定义

组件导出以下类型定义

```ts
import type { ListInstance, ListProps } from "@cedarjs/ui";
```
