---
permalink: /components/list/
---

# List

VirtualList 消费者生命周期已专项验证：新请求、数据变化、停用及卸载使旧 nextTick 补偿失效，保留命令在停用／卸载后无效，激活不重放旧补偿。补偿不是 RAF 插值，不新增 CSS Token／API；各端15项专项通过，完整 List Cedar41／Maple34通过，真实浏览器新增0。既有 key／index／align 及测量契约保持。下文分类说明保留先前时点。

`scrollIntoView` 仅在虚拟模式向内部 VirtualList 的 `scrollTo` 转发 options，不是直接调用 DOM `scrollIntoView`，也没有本地动效计时器。原生滚动、减少动效或保留命令的生命周期须以 VirtualList 消费者专项为准；方法名／调用提示不等于视觉验收。本轮源码分类不改 List API／实现。

最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

## 案例

### 保留命令与 KeepAlive 生命周期

<demo src="./__demos__/virtual-lifecycle.vue"></demo>

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


### 容器滚动

<demo src="./__demos__/bounded-scroll.vue"></demo>

### 虚拟定位

<demo src="./__demos__/virtual-navigation.vue"></demo>

## API

### List Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据，与 item 插槽配合 | unknown[] | undefined |
| size | 仅实现 sm/md/lg，不支持 xs/xl | 'sm' \| 'md' \| 'lg' | md |
| bordered | 外边框 | boolean | true |
| split | 头尾及列表项分隔线，与边框独立 | boolean | true |
| loading | 首次加载/刷新反馈，不管理分页 | boolean | false |
| max-height | 普通列表最大高度；数字px/CSS长度，0不限 | number \| string | 0 |
| virtual-list-props | 数据模式虚拟化；default插槽存在时忽略 | ListVirtualListProps | undefined |
| scrollbar | 普通列表自定义滚动条；false使用原生滚动 | boolean \| ListScrollbarProps | true |

虚拟列表使用独立视口，不额外嵌套自定义滚动条。virtualListProps.height 优先于 maxHeight；均省略时虚拟视口默认 200px。数字/带单位CSS长度受支持，非法或非正 max-height 不限制高度。

ListVirtualListProps 支持 height、threshold、fixedSize、estimatedSize、buffer、itemKey、component。没有废弃的 isStaticItemHeight；data 统一由 List.data 提供。数据量小于或等于 threshold 时渲染全部；非固定高度使用测量值与 estimatedSize 估计，buffer 控制前后预渲染行数。

ListScrollbarProps 支持 type: 'track'|'embed'、outerClass、outerStyle、hide、disableHorizontal、disableVertical。属性作为 JavaScript 对象字段使用 camelCase。

### Events / Methods

- scroll(event: Event)：真实滚动事件，一次滚动通知一次。
- scrollIntoView({ index?, key?, align })：虚拟列表定位，index 优先；align 为 top/bottom/auto。auto 在项目已完整可见时不滚动，否则最小滚动使其可见。无效目标、非虚拟模式不操作。

### Slots

List：default（优先于data）、item({ item, index })、header、footer、empty。空态仅无默认插槽、无数据、非加载时渲染。ListItem：prefix、default、suffix，保持列表项语义，不管理按钮/业务交互。

### 类型

ListProps、ListSize、ListVirtualListProps、ListScrollbarProps、ListExpose、ListSlots、ListEmits、ListInstance、ListItemInstance。

List 与 InfiniteScroll 分工独立：List管理展示与可选虚拟视口；无限分页应组合 InfiniteScroll 的 status/target 交互，不在 List 中重复维护加载状态机。

## 样式变量

| Token | Default |
| --- | --- |
| `--c-list-background` | `transparent` |
| `--c-list-empty-padding` | `16px` |
| `--c-list-empty-color` | `var(--c-list-text-color)` |
| `--c-list-loading-padding` | `0px` |
| `--c-list-border-width` | `1px` |
| `--c-list-border-color` | `var(--c-color-neutral-3)` |
| `--c-list-border-radius` | `var(--c-border-radius-md)` |
| `--c-list-text-color` | `var(--c-color-text-1)` |
| `--c-list-font-size` | `var(--c-font-size-body-3)` |
| `--c-list-line-height` | `var(--c-line-height)` |
| `--c-list-text-color-header` | `var(--c-color-text-1)` |
| `--c-list-font-size-header` | `var(--c-font-size-title-1)` |
| `--c-list-font-weight-header` | `var(--c-font-weight-500)` |
| `--c-list-line-height-header` | `1.5` |
| `--c-list-size-sm-padding-vertical-header` | `var(--c-spacing-4)` |
| `--c-list-size-sm-padding-horizontal-header` | `var(--c-spacing-8)` |
| `--c-list-size-sm-padding-vertical-item` | `9px` |
| `--c-list-size-sm-padding-horizontal-item` | `var(--c-spacing-8)` |
| `--c-list-size-md-padding-vertical-header` | `var(--c-spacing-6)` |
| `--c-list-size-md-padding-horizontal-header` | `var(--c-spacing-8)` |
| `--c-list-size-md-padding-vertical-item` | `13px` |
| `--c-list-size-md-padding-horizontal-item` | `var(--c-spacing-8)` |
| `--c-list-size-lg-padding-vertical-header` | `var(--c-spacing-7)` |
| `--c-list-size-lg-padding-horizontal-header` | `var(--c-spacing-8)` |
| `--c-list-size-lg-padding-vertical-item` | `17px` |
| `--c-list-size-lg-padding-horizontal-item` | `var(--c-spacing-8)` |
| `--c-list-item-prefix-margin-right` | `var(--c-spacing-8)` |
| `--c-list-item-suffix-margin-left` | `var(--c-spacing-8)` |
| `--c-list-size-sm-padding-vertical-footer` | `var(--c-list-size-sm-padding-vertical-item)` |
| `--c-list-size-sm-padding-horizontal-footer` | `var(--c-list-size-sm-padding-horizontal-item)` |
| `--c-list-size-md-padding-vertical-footer` | `var(--c-list-size-md-padding-vertical-item)` |
| `--c-list-size-md-padding-horizontal-footer` | `var(--c-list-size-md-padding-horizontal-item)` |
| `--c-list-size-lg-padding-vertical-footer` | `var(--c-list-size-lg-padding-vertical-item)` |
| `--c-list-size-lg-padding-horizontal-footer` | `var(--c-list-size-lg-padding-horizontal-item)` |
