---
permalink: /components/list/
---

# List

最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

## 基础示例

### 基础用法

列表的基本使用方法。可用于承载文字、列表、图片和段落。

<demo src="./__demos__/basic.vue"></demo>

## 外观与状态

### 不同尺寸

列表组件提供了三种大小 `sm, md, lg` ，可根据业务需求自行选择。

<demo src="./__demos__/size.vue"></demo>

## 内容与布局

### 前缀与后缀

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `bordered` | 外边框 | 自定义内容 |
| `data` | 数据，与 item 插槽配合 | 自定义内容 |
<!-- demo-config-notes:end -->

`list-item` 只提供 `prefix` / 默认内容 / `suffix` 三列布局。头像、标题、操作都由业务自己组合。

<demo src="./__demos__/prefix-suffix.vue"></demo>

### 自定义内容

主体和两侧插槽都可以放任意内容。分页、栅格请自行组合 `Pagination` / `Grid`。

<demo src="./__demos__/actions-layout.vue"></demo>

同时提供默认插槽与 `data` 时，默认插槽优先，`item` 插槽不会被调用。`loading` 仅表示整张列表首次加载或刷新；需要滚动分页时请使用 [InfiniteScroll](/components/infinite-scroll/) 组合。

## 滚动与虚拟列表

### 容器滚动

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `data` | 数据，与 item 插槽配合 | 容器滚动、无限长列表、虚拟定位 |
| `virtual-list-props` | 数据模式虚拟化；default插槽存在时忽略 | 无限长列表、虚拟定位 |
| `max-height` | 普通列表最大高度；数字px/CSS长度，0不限 | 容器滚动 |
| `scrollbar` | 普通列表自定义滚动条；false使用原生滚动 | 容器滚动 |
| `size` | 仅实现 sm/md/lg，不支持 xs/xl | 容器滚动 |
| `split` | 头尾及列表项分隔线，与边框独立 | 容器滚动 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/bounded-scroll.vue"></demo>

### 无限长列表

通过指定 `virtualListProps` 来开启虚拟列表，在大量数据时获得高性能表现。
在使用虚拟列表时，如果列表元素之间高度变化较大可能导致滚动时视口出现空白区域，可通过调整 `virtualListProps.buffer`
属性解决，[使用方式](/vue/docs/faq#%E8%99%9A%E6%8B%9F%E5%88%97%E8%A1%A8%E7%9A%84%E4%BD%BF%E7%94%A8)。

<demo src="./__demos__/virtual-list.vue"></demo>

### 虚拟定位

示例使用 `Space direction="column"` 将操作区放在列表上方，列表独占可用宽度；`estimatedSize` 是未测量行的估计高度，不要求业务行采用固定高度。

定位优先使用已渲染行的真实边界，行高测量会同步更新虚拟留白。程序滚动触发的渲染保留当前对齐；不同位置的原生滚动、新命令、数据替换、停用或卸载会取消旧补偿。`auto` 对已完整可见行不改变滚动位置和渲染窗口。支持 `ResizeObserver` 时，已观察根节点的尺寸变化会更新测量；任意布局变化不保证持续追踪。

<demo src="./__demos__/virtual-navigation.vue"></demo>

## 生命周期

### 保留命令与 KeepAlive 生命周期

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `data` | 数据，与 item 插槽配合 | 保留命令与 KeepAlive 生命周期 |
| `virtual-list-props` | 数据模式虚拟化；default插槽存在时忽略 | 保留命令与 KeepAlive 生命周期 |
<!-- demo-config-notes:end -->

<demo src="./__demos__/virtual-lifecycle.vue"></demo>

## API

虚拟列表先覆盖视口，再按 `buffer` 在前后预渲染；`buffer=0` 合法，`estimatedSize` 必须是有限正数（包括小于 1 的值），无效值回退 30px。`fixedSize` 可动态切换；可变高度使用已测量值和估计值，支持 `ResizeObserver` 时会监听已挂载的可测量根节点尺寸变化。`item` 插槽接收原始索引和 unknown 数据，可返回多个可测量根节点，并应提供稳定的 `itemKey`；测量按同一项目的根节点整体边界计算。需要向辅助技术表达完整集合时，可在业务行上按实际数据提供 `aria-setsize` 和 `aria-posinset`。

服务端渲染时，`default`、`header`、`footer`、`empty` 或 `item` 插槽中同一节点同时使用 `v-for` 和 `v-memo` 当前会报错；数据模式是否启用虚拟化均受影响。可暂时移除该节点的 `v-memo` 并验证更新行为。

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

### List Events / Methods

- scroll(event: Event)：真实滚动事件，一次滚动通知一次。
- scrollIntoView({ index?, key?, align })：虚拟列表定位，index 优先；align 为 top/bottom/auto。auto 在项目已完整可见时不滚动，否则最小滚动使其可见。无效目标、非虚拟模式不操作。

### List Slots

List：default（优先于data）、item({ item, index })、header、footer、empty。空态仅无默认插槽、无数据、非加载时渲染。ListItem：prefix、default、suffix，保持列表项语义，不管理按钮/业务交互。

## Types

ListProps、ListSize、ListVirtualListProps、ListScrollbarProps、ListExpose、ListSlots、ListEmits、ListInstance、ListItemInstance。

List 与 InfiniteScroll 分工独立：List管理展示与可选虚拟视口；无限分页应组合 InfiniteScroll 的 status/target 交互，不在 List 中重复维护加载状态机。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-list-background` | `transparent` | `background` |
| `--c-list-border-color` | `var(--c-color-neutral-3)` | `border`, `border-bottom`, `border-top` |
| `--c-list-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-list-border-width` | `1px` | `border`, `border-bottom`, `border-top` |
| `--c-list-empty-color` | `var(--c-list-text-color)` | `color` |
| `--c-list-empty-padding` | `16px` | `padding` |
| `--c-list-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-list-font-size-header` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-list-font-weight-header` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-list-item-prefix-margin-right` | `var(--c-spacing-8)` | `margin-inline-end` |
| `--c-list-item-suffix-margin-left` | `var(--c-spacing-8)` | `margin-inline-start` |
| `--c-list-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-list-line-height-header` | `1.5` | `line-height` |
| `--c-list-loading-padding` | `0px` | `padding` |
| `--c-list-size-lg-padding-horizontal-footer` | `var(--c-list-size-lg-padding-horizontal-item)` | `padding` |
| `--c-list-size-lg-padding-horizontal-header` | `var(--c-spacing-8)` | `padding` |
| `--c-list-size-lg-padding-horizontal-item` | `var(--c-spacing-8)` | `padding` |
| `--c-list-size-lg-padding-vertical-footer` | `var(--c-list-size-lg-padding-vertical-item)` | `padding` |
| `--c-list-size-lg-padding-vertical-header` | `var(--c-spacing-7)` | `padding` |
| `--c-list-size-lg-padding-vertical-item` | `17px` | `padding` |
| `--c-list-size-md-padding-horizontal-footer` | `var(--c-list-size-md-padding-horizontal-item)` | `padding` |
| `--c-list-size-md-padding-horizontal-header` | `var(--c-spacing-8)` | `padding` |
| `--c-list-size-md-padding-horizontal-item` | `var(--c-spacing-8)` | `padding` |
| `--c-list-size-md-padding-vertical-footer` | `var(--c-list-size-md-padding-vertical-item)` | `padding` |
| `--c-list-size-md-padding-vertical-header` | `var(--c-spacing-6)` | `padding` |
| `--c-list-size-md-padding-vertical-item` | `13px` | `padding` |
| `--c-list-size-sm-padding-horizontal-footer` | `var(--c-list-size-sm-padding-horizontal-item)` | `padding` |
| `--c-list-size-sm-padding-horizontal-header` | `var(--c-spacing-8)` | `padding` |
| `--c-list-size-sm-padding-horizontal-item` | `var(--c-spacing-8)` | `padding` |
| `--c-list-size-sm-padding-vertical-footer` | `var(--c-list-size-sm-padding-vertical-item)` | `padding` |
| `--c-list-size-sm-padding-vertical-header` | `var(--c-spacing-4)` | `padding` |
| `--c-list-size-sm-padding-vertical-item` | `9px` | `padding` |
| `--c-list-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-list-text-color-header` | `var(--c-color-text-1)` | `color` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-list-background: transparent;
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
