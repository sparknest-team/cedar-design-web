---
permalink: /components/table/
---

# Table

用于数据收集展示、分析整理、操作处理。

## 案例

### 基础用法

表格的基本用法，需要传递 `columns` 和 `data`。

<demo src="./__demos__/basic.vue"></demo>

### 行选择器

通过设置 `row-selection` 开启行选择器。

<demo src="./__demos__/row-selection.vue"></demo>

### 行选择器(单选框)

通过设置 `rowSelection.type='radio'` 开启单选模式。

<demo src="./__demos__/row-selection-single.vue"></demo>

### 展开行

通过设置 `expandable` 开启展开行功能。可以在 `data` 中添加 `expand` 属性，设置展开行显示内容。

<demo src="./__demos__/expandable.vue"></demo>

### 文本省略和提示

开启 `ellipsis` 属性可以显示省略号，如果同时开启 `tooltip` 会在显示省略号时使用文本提示。注意：开启 `tooltip`
后会修改 `table-cell` 中的 DOM 结构。

<demo src="./__demos__/ellipsis-and-tooltip.vue"></demo>

### 树形数据展示

树形数据展示的例子，`data` 里有 `children` 字段时会展示为树形表格。

<demo src="./__demos__/tree-children.vue"></demo>

### 子树懒加载

通过 `load-more` 属性可以开启子树懒加载功能。
开启子树懒加载功能后，需要在无子树节点标注 `isLeaf: true`，没有标注且没有 `children` 属性的节点会认为需要子树懒加载处理。
`load-more` 属性有提供 `done` 函数进行回调，可以在回调中传入懒加载的子树。如果 `done` 函数没有传入数据会认为懒加载失败，此节点可以再次触发懒加载。

<demo src="./__demos__/load-more.vue"></demo>

### 表格属性

这里罗列了一些表格的属性，你可以方便的打开或关闭一些属性，查看它的效果。

<demo src="./__demos__/form-attribute.vue"></demo>

### 排序和筛选

通过设置 `columns` 中的 `sortable` 和 `filterable` 属性，可以配置排序和筛选功能。 通过 `filter-icon-align-left`
属性可以让筛选按钮左对齐。
<br/>
如果想实现远程排序，可以通过`sortable.sorter=true` 来关闭内部排序，并通过 `change` 或者 `sorterChange` 事件来实现服务器端排序。
<br/>
如果想实现远程筛选，则需要不传`filterable.filter`或者使`filterable.filter`返回`true`,来关闭内部筛选，并通过 `change`
或者`filterChange`事件来实现服务器端筛选。
<demo src="./__demos__/sort-and-filter.vue"></demo>

### 自定义筛选菜单

通过插槽可以自定义筛选菜单内容。

<demo src="./__demos__/custom-filter.vue"></demo>

### 表格布局 table-layout

Element / Cedar 的 CSS 布局只有两种：

| 值 | 含义 |
| --- | --- |
| `fixed`（默认） | 列宽由 JS + `<col>` 决定，**不被单元格内容撑开**；`width` / `min-width` / `fit` 自适应都在这套下工作 |
| `auto` | 交给浏览器按内容分配列宽；长文本可能把列撑得很宽 |

什么时候会从你设置的值变成 `fixed`：

- 设置了 `max-height` → **强制 fixed**（与 Element 一致）
- 任意列开启了 `ellipsis` → 强制 fixed（保证省略可靠）

注意：列宽「自适应铺满」不是换了一种 `table-layout`，而是在 **`fixed` + `fit: true`** 下用 `min-width` 做剩余空间分配。

<demo src="./__demos__/table-layout.vue"></demo>

### 列宽自适应（fixed + fit）

默认 `table-layout: fixed` + `fit: true`。

- 设了 `width` 的列为固定宽，不参与剩余空间分配
- 只设 `min-width`（或不设，默认 80）的列为弹性列，按 `min-width` 比例分配剩余宽度
- 当 `Σ(width | minWidth) ≤ 容器宽` 时铺满容器，**无横向滚动**

<demo src="./__demos__/column-width-fit.vue"></demo>

### 横向滚动

当列最小宽之和大于容器宽度时，自动出现横向滚动条；弹性列停在各自的 `min-width`。

<demo src="./__demos__/column-scroll-x.vue"></demo>

### fit 开关

`fit` 决定剩余空间如何分配：开启时全部给未设 `width` 的弹性列；关闭时按各列基础宽度（`width` / `minWidth`）比例放大分摊。无论开关，表格都至少铺满父容器宽度（列宽之和溢出才横向滚动）。

<demo src="./__demos__/column-fit.vue"></demo>

### 布局 × fit × 分组 排列组合

平铺/分组 × `table-layout` × `fit` 共 8 种组合的对照矩阵：

- `fit: true` 剩余空间全给弹性列（示例中只设 `min-width` 的 **名称**、**更新时间**）；`fit: false` 按各列基础宽度比例放大分摊
- **拖拽调宽仅 `fixed` 布局可用**：`auto` 布局不渲染拖拽把手（列宽由浏览器按内容分配，拖拽宽度不会生效）
- `auto` 布局下冻结列（示例中 **优先级** 左冻结、**状态** 右冻结）的 sticky 偏移以渲染后测量的真实宽度为准

<demo src="./__demos__/layout-fit-matrix.vue"></demo>

<demo src="./__demos__/width-chase-test.vue"></demo>

### 纵向滚动（height）

通过 `height` 开启固定高度：表头固定，表体纵向滚动。

<demo src="./__demos__/scroll.vue"></demo>

### 流体高度（max-height）

`max-height`：内容少时收缩，超出后滚动；并强制 `table-layout: fixed`。可与固定列组合。

<demo src="./__demos__/fluid-height.vue"></demo>

### 固定列

在 `columns` 中指定 `fixed: 'left'` 或 `fixed: 'right'`，可将列固定到左侧或右侧。固定列建议设置 `width`。当列最小宽之和超过容器时会自动出现横向滚动。

<demo src="./__demos__/fixed.vue"></demo>

### 固定列 + 固定表头

同时设置 `height` 与左右固定列（对齐 Element 的 fixed column and header 场景）。

<demo src="./__demos__/fixed-column-and-header.vue"></demo>

### 单元格合并

通过 `span-method` 属性进行单元格合并。可以设置 `span-all` 让列索引包含操作列，注意：目前如果合并多项选择器会导致全选状态判断错误。

<demo src="./__demos__/span-method.vue"></demo>

### 表头吸顶（页面滚动）

`sticky-header` 是相对**页面/外层滚动容器**的 CSS sticky，和 `height` 造成的「表体内滚动 + 表头固定」不是一回事。

- 适用：表格很高、页面整体滚动时希望表头贴在视口顶部
- 不适用：只想在表格内部滚动看数据 → 用 `height` / `max-height`
- 传数字可指定距顶部偏移（例如避开全局导航）

<demo src="./__demos__/sticky-header.vue"></demo>

### 分页吸底（页面滚动）

`sticky-pagination` 相对**页面/外层滚动容器**吸底，翻长列表时分页条留在视口底部。传数字可指定距底部偏移。

<demo src="./__demos__/sticky-panation.vue"></demo>

### 总结行

设置 `summary` 可以开启表尾总结行，并可以通过 `summary-text` 指定首列文字。
如果想要自定义总结行展示，可以传入函数。函数的返回值为需要展示的数据，结构同 `data` 一样即可，支持多行数据。
注意：控制列暂不可以自定义内容

<demo src="./__demos__/summary.vue"></demo>

### 调整列宽

使用 `column-resizable` 属性开启列宽调整。建议初始设置除最后一列外其他列的默认列宽。仅 `table-layout: fixed` 下生效——`auto` 布局列宽由浏览器按内容分配，不渲染拖拽把手。

<demo src="./__demos__/column-resizable.vue"></demo>

### 可拖拽表格

（实验性）
开启表格行可拖拽功能

<demo src="./__demos__/droppable-table.vue"></demo>

### 拖拽锚点

（实验性）
开启锚点拖拽功能

<demo src="./__demos__/droppable-anchor.vue"></demo>

### 分组表头

`columns` 内可以设置 `children`，用于表头分组。

<demo src="./__demos__/columns-children.vue"></demo>

### 分组表头与固定列

分组表头使用固定列时，需要优先指定数据列为固定列。
如果一个分组下的所有数据列都是固定列，此时可以设置分组列为固定列，宽度为子列宽度之和。

<demo src="./__demos__/columns-children-and-fixed.vue"></demo>

### 可编辑表格

可以在使用插槽获得的数据，修改 `data` 中的数据，达到可编辑表格的功能。
可以直接修改插槽传出的 `record` 变量。这个 `record` 变量是传入的 `data` 中对应数据的引用，请保证 `data` 为 Reactive 类型。

<demo src="./__demos__/editable-form.vue"></demo>

### 自定义渲染

通过 `#columns` 插槽和 `<a-table-column>` 组件可以使用模板的方法自定义列渲染。
注意：在使用 `#columns` 插槽后，将会屏蔽 `columns` 属性

<demo src="./__demos__/custom-rendering.vue"></demo>

### 自定义表格元素

可以通过特定插槽自定义表格元素的渲染。仅需要传入表格元素，内部属性会自动附加上去

<demo src="./__demos__/customize-table-elements.vue"></demo>

### 虚拟列表

设置 `virtual-list-props` 开启虚拟列表功能。
目前虚拟滚动表格受限比较多，开启虚拟滚动后不能使用展开行、树形数据、固定列等功能

<demo src="./__demos__/virtual-list-props.vue"></demo>

### 自定义表头 / 列管理

Table **不内置**列管理。通过扩展点与外部 `TableColumnManager` 组合：

- `extra-column`：末尾扩展列（如设置图标），内容用 `#extra-column-header` / `#extra-column-cell`；默认宽度 **28px**，可通过 `extraColumn: { width: number }` 覆盖
- `#header-cell-actions`：表头右侧操作区，菜单内容由外部完全控制
- `v-model:columns` + `@column-resize`：外部改列并触发重渲染

基础组合：

<demo src="./__demos__/column-manager-basic.vue"></demo>

自定义入口与本地记忆：

<demo src="./__demos__/custom-table-columns.vue"></demo>

### 异步目录

`TableColumnManager` 的 `loadOptions` / `remoteSearch` 在外部弹层中使用。

<demo src="./__demos__/column-manager-async.vue"></demo>

详见 [`TableColumnManager`](/components/table-column-manager/)。

## API

### `<Table>` Props

| 参数名                      | 描述                                                                                       | 类型                                                                                                                                                                          |   默认值    |
| --------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------: |
| columns                     | 表格的列描述信息                                                                           | `TableColumnData[]`                                                                                                                                                           |    `[]`     |
| data                        | 表格的数据                                                                                 | `TableData[]`                                                                                                                                                                 |    `[]`     |
| bordered                    | 是否显示边框                                                                               | `boolean \| TableBorder`                                                                                                                                                      |   `true`    |
| hoverable                   | 是否显示选中效果                                                                           | `boolean`                                                                                                                                                                     |   `true`    |
| stripe                      | 是否开启斑马纹效果                                                                         | `boolean`                                                                                                                                                                     |   `false`   |
| size                        | 表格的大小                                                                                 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                                                                                                        |   `'md'`    |
| table-layout                | 表格布局算法，同 CSS `table-layout`。默认 `fixed`，列宽由计算决定不被内容撑开           | `'fixed' \| 'auto'`                                                                                                                                                           |  `'fixed'`  |
| loading                     | 是否为加载中状态                                                                           | `boolean\|object`                                                                                                                                                             |   `false`   |
| row-selection               | 表格的行选择器配置                                                                         | `TableRowSelection`                                                                                                                                                           |     `-`     |
| expandable                  | 表格的展开行配置                                                                           | `TableExpandable`                                                                                                                                                             |     `-`     |
| height                      | 表格高度。设置后表头固定，表体滚动。数字单位为 px                                          | `number \| string`                                                                                                                                                            |     `-`     |
| max-height                  | 表格最大高度。内容不足时收缩，超出后表体滚动。数字单位为 px                                | `number \| string`                                                                                                                                                            |     `-`     |
| fit                         | 剩余空间的分配方式（表格始终至少铺满父容器）。`true`：全给未设 `width` 的弹性列；`false`：按各列基础宽度比例放大分摊 | `boolean`                                                                                                                                                                     |   `true`    |
| pagination                  | 分页的属性配置                                                                             | `boolean \| PaginationProps`                                                                                                                                                  |   `true`    |
| page-position               | 分页选择器的位置                                                                           | `'tl' \| 'top' \| tr' \| 'bl' \| 'bottom' \| 'br'`                                                                                                                            |   `'br'`    |
| indent-size                 | 树形表格的缩进距离                                                                         | `number`                                                                                                                                                                      |    `16`     |
| row-key                     | 表格行 `key` 的取值字段                                                                    | `string`                                                                                                                                                                      |   `'key'`   |
| show-header                 | 是否显示表头                                                                               | `boolean`                                                                                                                                                                     |   `true`    |
| virtual-list-props          | 传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#virtuallistprops)           | `VirtualListProps`                                                                                                                                                            |     `-`     |
| span-method                 | 单元格合并方法（索引从数据项开始计数）                                                     | `(data: {  record: TableData;  column: TableColumnData \| TableOperationColumn;  rowIndex: number;  columnIndex: number;}) => { rowspan?: number; colspan?: number } \| void` |     `-`     |
| span-all                    | 是否让合并方法的索引包含所有                                                               | `boolean`                                                                                                                                                                     |   `false`   |
| load-more                   | 数据懒加载函数，传入时开启懒加载功能                                                       | `(record: TableData, done: (children?: TableData[]) => void) => void`                                                                                                         |     `-`     |
| filter-icon-align-left      | 筛选图标是否左对齐                                                                         | `boolean`                                                                                                                                                                     |   `false`   |
| hide-expand-button-on-empty | 是否在子树为空时隐藏展开按钮                                                               | `boolean`                                                                                                                                                                     |   `false`   |
| row-class                   | 表格行元素的类名。                                                                         | `string\| any[]\| Record<string, any>\| ((record: TableData, rowIndex: number) => any)`                                                                                       |     `-`     |
| draggable                   | 表格拖拽排序的配置                                                                         | `TableDraggable`                                                                                                                                                              |     `-`     |
| column-resizable            | 是否允许调整列宽（仅 `table-layout: fixed` 下渲染拖拽把手）                                | `boolean`                                                                                                                                                                     |   `false`   |
| summary                     | 显示表尾总结行                                                                             | `boolean\| ((params: {    columns: TableColumnData[];    data: TableData[];  }) => TableData[])`                                                                              |     `-`     |
| summary-text                | 总结行的首列文字                                                                           | `string`                                                                                                                                                                      | `'Summary'` |
| summary-span-method         | 总结行的单元格合并方法                                                                     | `(data: {  record: TableData;  column: TableColumnData \| TableOperationColumn;  rowIndex: number;  columnIndex: number;}) => { rowspan?: number; colspan?: number } \| void` |     `-`     |
| selected-keys               | 已选择的行（受控模式）优先于 `rowSelection`                                                | `(string \| number)[]`                                                                                                                                                        |     `-`     |
| default-selected-keys       | 默认已选择的行（非受控模式）优先于 `rowSelection`                                          | `(string \| number)[]`                                                                                                                                                        |     `-`     |
| expanded-keys               | 显示的展开行、子树（受控模式）优先于 `expandable`                                          | `(string \| number)[]`                                                                                                                                                        |     `-`     |
| default-expanded-keys       | 默认显示的展开行、子树（非受控模式）优先于 `expandable`                                    | `(string \| number)[]`                                                                                                                                                        |     `-`     |
| default-expand-all-rows     | 是否默认展开所有的行                                                                       | `boolean`                                                                                                                                                                     |   `false`   |
| sticky-header               | 表头相对页面/外层滚动容器吸顶；数字为距顶部偏移（px）                                      | `boolean \| number`                                                                                                                                                           |   `false`   |
| sticky-pagination           | 分页相对页面/外层滚动容器吸底；数字为距底部偏移（px）                                      | `boolean \| number`                                                                                                                                                           |   `false`   |
| scrollbar                   | 是否开启虚拟滚动条                                                                         | `boolean \| ScrollbarProps`                                                                                                                                                   |   `true`    |
| show-empty-tree             | 是否展示空子树                                                                             | `boolean`                                                                                                                                                                     |   `false`   |
| extra-column                | 在表格末尾插入扩展列（如设置按钮）；内容由插槽提供                                         | `boolean \| TableExtraColumnConfig`                                                                                                                                           |   `false`   |
| empty-type                   | 空白状态类型                                                                               | <br/>`default`\|`network`\|`unknown`\|`success` <br/> <br/>                                                                                                                   |  `default`  |
| empty-text                   | 空白状态类型文案                                                                           | <br/>`string` <br/> <br/>                                                                                                                                                     |     `-`     |

### `<Table>` Events

| 事件名           | 描述                           | 参数                                                                               |
| ---------------- | ------------------------------ | ---------------------------------------------------------------------------------- |
| expand           | 点击展开行时触发               | rowKey: `string \| number`<br>record: `TableData`                                  |
| expanded-change  | 已展开的数据行发生改变时触发   | rowKeys: `(string \| number)[]`                                                    |
| select           | 点击行选择器时触发             | rowKeys: `string \| number[]`<br>rowKey: `string \| number`<br>record: `TableData` |
| select-all       | 点击全选选择器时触发           | checked: `boolean`                                                                 |
| selection-change | 已选择的数据行发生改变时触发   | rowKeys: `(string \| number)[]`                                                    |
| sorter-change    | 排序规则发生改变时触发         | dataIndex: `string`<br>direction: `string`                                         |
| filter-change    | 过滤选项发生改变时触发         | dataIndex: `string`<br>filteredValues: `string[]`                                  |
| page-change      | 表格分页发生改变时触发         | page: `number`                                                                     |
| page-size-change | 表格每页数据数量发生改变时触发 | pageSize: `number`                                                                 |
| change           | 表格数据发生变化时触发         | data: `TableData[]`<br>extra: `TableChangeExtra`<br>currentData: `TableData[]`     |
| update:columns   | 列配置变更时触发（配合 v-model:columns） | columns: `TableColumnData[]`                                                       |
| cell-mouse-enter | 单元格hover进入时触发          | record: `TableData`<br>column: `TableColumnData`<br>ev: `Event`                    |
| cell-mouse-leave | 单元格hover退出时触发          | record: `TableData`<br>column: `TableColumnData`<br>ev: `Event`                    |
| cell-click       | 点击单元格时触发               | record: `TableData`<br>column: `TableColumnData`<br>ev: `Event`                    |
| row-click        | 点击行数据时触发               | record: `TableData`<br>ev: `Event`                                                 |
| header-click     | 点击表头数据时触发             | column: `TableColumnData`<br>ev: `Event`                                           |
| column-resize    | 调整列宽时触发                 | dataIndex: `string`<br>width: `number`                                             |
| row-dblclick     | 双击行数据时触发               | record: `TableData`<br>ev: `Event`                                                 |
| cell-dblclick    | 双击单元格时触发               | record: `TableData`<br>column: `TableColumnData`<br>ev: `Event`                    |
| row-contextmenu  | 右击行数据时触发               | record: `TableData`<br>ev: `Event`                                                 |
| cell-contextmenu | 右击单元格时触发               | record: `TableData`column: `TableColumnData`<br>ev: `Event`                        |

### `<Table>` Methods

| 方法名       | 描述             | 参数                                                                     | 返回值 |
| ------------ | ---------------- | ------------------------------------------------------------------------ | ------ |
| selectAll    | 设置全选状态     | checked: `boolean`                                                       | -      |
| select       | 设置行选择器状态 | rowKey: `string \| number \| (string \| number)[]`<br>checked: `boolean` | -      |
| expandAll    | 设置全部展开状态 | checked: `boolean`                                                       | -      |
| expand       | 设置展开状态     | rowKey: `string \| number \| (string \| number)[]`<br>checked: `boolean` | -      |
| resetFilters | 重置列的筛选器   | dataIndex: `string \| string[]`                                          | -      |
| clearFilters | 清空列的筛选器   | dataIndex: `string \| string[]`                                          | -      |
| resetSorters | 重置列的排序     | -                                                                        | -      |
| clearSorters | 清空列的排序     | -                                                                        | -      |

### `<Table>` Slots

| 插槽名           |                 描述                  | 参数                                                                   |
| ---------------- | :-----------------------------------: | ---------------------------------------------------------------------- |
| th               |            自定义 th 元素             | column: `TableColumnData`                                              |
| thead            |           自定义 thead 元素           | -                                                                      |
| empty            |               空白展示                | -                                                                      |
| summary-cell     |                总结行                 | column: `TableColumnData`<br>record: `TableData`<br>rowIndex: `number` |
| pagination-right |            分页器右侧内容             | -                                                                      |
| pagination-left  |            分页器左侧内容             | -                                                                      |
| td               |            自定义 td 元素             | column: `TableColumnData`<br>record: `TableData`<br>rowIndex: `number` |
| tr               |            自定义 tr 元素             | record: `TableData`<br>rowIndex: `number`                              |
| tbody            |           自定义 tbody 元素           | -                                                                      |
| drag-handle-icon |             拖拽锚点图标              | -                                                                      |
| footer           |               表格底部                | -                                                                      |
| expand-row       |              展开行内容               | record: `TableData`                                                    |
| expand-icon      |              展开行图标               | expanded: `boolean`<br>record: `TableData`                             |
| columns          | 表格列定义。启用时会屏蔽 columns 属性 | -                                                                      |
| extra-column-header | 末列扩展列表头内容 | - |
| extra-column-cell | 末列扩展列单元格内容 | record / rowIndex 等 |
| header-cell-actions | 表头右侧操作区（叶子列）；内容由外部完全控制 | column / dataIndex |

### `<TableColumn>` Props

| 参数名             | 描述                                | 类型                                                      | 默认值  |
| ------------------ | ----------------------------------- | --------------------------------------------------------- | :-----: |
| data-index         | 列信息的标识，对应TableData中的数据 | `string`                                                  |   `-`   |
| title              | 列标题                              | `string`                                                  |   `-`   |
| width              | 列宽度                              | `number`                                                  |   `-`   |
| min-width          | 最小列宽                            | `number`                                                  |   `80`  |
| align              | 对齐方向                            | `TableColumnData['align']`                                |   `-`   |
| fixed              | 固定位置                            | `TableColumnData['fixed']`                                |   `-`   |
| ellipsis           | 是否显示为省略                      | `boolean`                                                 | `false` |
| sortable           | 排序相关选项                        | `TableSortable`                                           |   `-`   |
| filterable         | 过滤相关选项                        | `TableFilterable`                                         |   `-`   |
| cell-class         | 自定义单元格类名                    | `ClassName`                                               |   `-`   |
| header-cell-class  | 自定义表头单元格类名                | `ClassName`                                               |   `-`   |
| body-cell-class    | 自定义内容单元格类名                | `ClassName \| ((record: TableData) => ClassName)`         |   `-`   |
| summary-cell-class | 自定义总结栏单元格类名              | `ClassName \| ((record: TableData) => ClassName)`         |   `-`   |
| cell-style         | 自定义单元格样式                    | `CSSProperties`                                           |   `-`   |
| header-cell-style  | 自定义表头单元格样式                | `CSSProperties`                                           |   `-`   |
| body-cell-style    | 自定义内容单元格样式                | `CSSProperties \| ((record: TableData) => CSSProperties)` |   `-`   |
| summary-cell-style | 自定义总结栏单元格样式              | `CSSProperties \| ((record: TableData) => CSSProperties)` |   `-`   |
| index              | 用于手动指定选项的 index。          | `number`                                                  |   `-`   |
| tooltip            | 在省略时是否显示文字提示            | `boolean\|object`                                         | `false` |

### `<TableColumn>` Slots

| 插槽名         |         描述         | 参数                                                                                                                                                                         |
| -------------- | :------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter-icon    |     筛选按钮图标     | -                                                                                                                                                                            |
| filter-content | 自定义筛选弹出框内容 | filterValue: `string[]`<br>setFilterValue: `(filterValue: string[]) => void`<br>handleFilterConfirm: `(event: Event) => void`<br>handleFilterReset: `(event: Event) => void` |
| title          |         标题         | -                                                                                                                                                                            |
| cell           |        单元格        | record: `TableData`<br>column: `TableColumnData`<br>rowIndex: `number`                                                                                                       |

### TableData

| 参数名   | 描述             | 类型                       | 默认值  |
| -------- | ---------------- | -------------------------- | :-----: |
| key      | 数据行的key      | `string`                   |   `-`   |
| expand   | 扩展行内容       | `string \| RenderFunction` |   `-`   |
| children | 子数据           | `TableData[]`              |   `-`   |
| disabled | 是否禁用行选择器 | `boolean`                  | `false` |
| isLeaf   | 是否是叶子节点   | `boolean`                  | `false` |

### TableSortable

| 参数名           | 描述                                     | 类型                                                                                                                                                 | 默认值 |
| ---------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | :----: |
| sortDirections   | 支持的排序方向                           | `('ascend' \| 'descend')[]`                                                                                                                          |  `-`   |
| sorter           | 排序函数。设置为 `true` 可关闭内部排序。 | `((        a: TableData,        b: TableData,        extra: { dataIndex: string; direction: 'ascend' \| 'descend' }      ) => number)    \| boolean` |  `-`   |
| sortOrder        | 排序方向                                 | `'ascend' \| 'descend' \| ''`                                                                                                                        |  `-`   |
| defaultSortOrder | 默认排序方向（非受控模式）               | `'ascend' \| 'descend' \| ''`                                                                                                                        |  `-`   |

### TableFilterData

| 参数名 | 描述               | 类型                       | 默认值 |
| ------ | ------------------ | -------------------------- | :----: |
| text   | 筛选数据选项的内容 | `string \| RenderFunction` |  `-`   |
| value  | 筛选数据选项的值   | `string`                   |  `-`   |

### TableFilterable

| 参数名               | 描述                                      | 类型                                                                                                                                                                                                     | 默认值  |
| -------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: |
| filters              | 筛选数据                                  | `TableFilterData[]`                                                                                                                                                                                      |   `-`   |
| filter               | 筛选函数,用法类似于Array.prototype.filter | `(filteredValue: string[], <br/>record:TableData)=> boolean`                                                                                                                                             |   `-`   |
| multiple             | 是否支持多选                              | `boolean`                                                                                                                                                                                                | `false` |
| filteredValue        | 筛选项                                    | `string[]`                                                                                                                                                                                               |   `-`   |
| defaultFilteredValue | 默认筛选项                                | `string[]`                                                                                                                                                                                               |   `-`   |
| renderContent        | 筛选框的内容                              | `(data: {    filterValue: string[];    setFilterValue: (filterValue: string[]) => void;    handleFilterConfirm: (event: Event) => void;    handleFilterReset: (event: Event) => void;  }) => VNodeChild` |   `-`   |
| icon                 | 筛选按钮的图标                            | `RenderFunction`                                                                                                                                                                                         |   `-`   |
| triggerProps         | 筛选框的弹出框配置                        | `TriggerProps`                                                                                                                                                                                           |   `-`   |
| alignLeft            | 筛选图标是否左对齐                        | `boolean`                                                                                                                                                                                                | `false` |

### TableColumnData

| 参数名           | 描述                                                    | 类型                                                                                                | 默认值  |
| ---------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | :-----: |
| dataIndex        | 列信息的标识，对应 `TableData` 中的数据                 | `string`                                                                                            |   `-`   |
| title            | 列标题                                                  | `string \| RenderFunction`                                                                          |   `-`   |
| width            | 列宽度。设置后为固定列宽，不参与剩余空间分配            | `number`                                                                                            |   `-`   |
| minWidth         | 最小列宽。未设置 `width` 时按比例分配剩余空间；默认 80  | `number`                                                                                            |   `80`  |
| align            | 对齐方向                                                | `'left' \| 'center' \| 'right'`                                                                     |   `-`   |
| fixed            | 固定位置                                                | `'left' \| 'right'`                                                                                 |   `-`   |
| ellipsis         | 是否显示省略号                                          | `boolean`                                                                                           | `false` |
| tooltip          | 是否在显示省略号时显示文本提示。可填入 tooltip 组件属性 | `boolean \| Record<string, any>`                                                                    |   `-`   |
| sortable         | 排序相关选项                                            | `TableSortable`                                                                                     |   `-`   |
| filterable       | 过滤相关选项                                            | `TableFilterable`                                                                                   |   `-`   |
| children         | 表头子数据，用于表头分组                                | `TableColumnData[]`                                                                                 |   `-`   |
| cellClass        | 自定义单元格类名                                        | `ClassName`                                                                                         |   `-`   |
| headerCellClass  | 自定义表头单元格类名                                    | `ClassName`                                                                                         |   `-`   |
| bodyCellClass    | 自定义内容单元格类名                                    | `ClassName \| ((record: TableData) => ClassName)`                                                   |   `-`   |
| summaryCellClass | 自定义总结栏单元格类名                                  | `ClassName \| ((record: TableData) => ClassName)`                                                   |   `-`   |
| cellStyle        | 自定义单元格样式                                        | `CSSProperties`                                                                                     |   `-`   |
| headerCellStyle  | 自定义表头单元格样式                                    | `CSSProperties`                                                                                     |   `-`   |
| bodyCellStyle    | 自定义内容单元格样式                                    | `CSSProperties \| ((record: TableData) => CSSProperties)`                                           |   `-`   |
| summaryCellStyle | 自定义总结栏单元格样式                                  | `CSSProperties \| ((record: TableData) => CSSProperties)`                                           |   `-`   |
| render           | 自定义列单元格的渲染                                    | `(data: {    record: TableData;    column: TableColumnData;    rowIndex: number;  }) => VNodeChild` |   `-`   |
| slotName         | 设置当前列的渲染插槽的名字。插槽参数同 #cell            | `string`                                                                                            |   `-`   |
| titleSlotName    | 设置当前列的标题的渲染插槽的名字                        | `string`                                                                                            |   `-`   |

### TableBorder

| 参数名     | 描述                            | 类型      | 默认值  |
| ---------- | ------------------------------- | --------- | :-----: |
| wrapper    | 是否展示外边框                  | `boolean` | `false` |
| cell       | 是否展示单元格边框（表头+主体） | `boolean` | `false` |
| headerCell | 是否展示表头单元格边框          | `boolean` | `false` |
| bodyCell   | 是否展示主体单元格边框          | `boolean` | `false` |

### TableRowSelection

| 参数名                 | 描述                                           | 类型                    | 默认值  |
| ---------------------- | ---------------------------------------------- | ----------------------- | :-----: |
| type                   | 行选择器的类型                                 | `'checkbox' \| 'radio'` |   `-`   |
| selectedRowKeys        | 已选择的行（受控模式）                         | `BaseType[]`            |   `-`   |
| defaultSelectedRowKeys | 默认已选择的行（非受控模式）                   | `BaseType[]`            |   `-`   |
| showCheckedAll         | 是否显示全选选择器                             | `boolean`               | `false` |
| title                  | 列标题                                         | `string`                |   `-`   |
| width                  | 列宽度                                         | `number`                |   `-`   |
| fixed                  | 是否固定                                       | `boolean`               | `false` |
| checkStrictly          | 是否开启严格选择模式                           | `boolean`               | `true`  |
| onlyCurrent            | 是否仅展示当前页的 keys（切换分页时清空 keys） | `boolean`               | `false` |

### TableExpandable

| 参数名                 | 描述                           | 类型                                                   | 默认值  |
| ---------------------- | ------------------------------ | ------------------------------------------------------ | :-----: |
| expandedRowKeys        | 显示的展开行（受控模式）       | `BaseType[]`                                           |   `-`   |
| defaultExpandedRowKeys | 默认显示的展开行（非受控模式） | `BaseType[]`                                           |   `-`   |
| defaultExpandAllRows   | 是否默认展开所有的行           | `boolean`                                              | `false` |
| expandedRowRender      | 自定义展开行内容               | `(record: TableData) => VNodeChild`                    |   `-`   |
| icon                   | 展开图标                       | `(expanded: boolean, record: TableData) => VNodeChild` |   `-`   |
| title                  | 列标题                         | `string`                                               |   `-`   |
| width                  | 列宽度                         | `number`                                               |   `-`   |
| fixed                  | 是否固定                       | `boolean`                                              | `false` |

### TableDraggable

| 参数名 | 描述     | 类型                | 默认值  |
| ------ | -------- | ------------------- | :-----: |
| type   | 拖拽类型 | `'row' \| 'handle'` |   `-`   |
| title  | 列标题   | `string`            |   `-`   |
| width  | 列宽度   | `number`            |   `-`   |
| fixed  | 是否固定 | `boolean`           | `false` |

### TableChangeExtra

| 参数名     | 描述       | 类型                                             | 默认值 |
| ---------- | ---------- | ------------------------------------------------ | :----: |
| type       | 触发类型   | `'pagination' \| 'sorter' \| 'filter' \| 'drag'` |  `-`   |
| page       | 页码       | `number`                                         |  `-`   |
| pageSize   | 每页数据数 | `number`                                         |  `-`   |
| sorter     | 排序信息   | `Sorter`                                         |  `-`   |
| filters    | 筛选信息   | `Filters`                                        |  `-`   |
| dragTarget | 拖拽信息   | `TableData`                                      |  `-`   |

### VirtualListProps

| 参数名             | 描述                                                               | 类型               | 默认值  |
| :----------------- | ------------------------------------------------------------------ | ------------------ | :-----: |
| height             | 可视区域高度                                                       | `number \| string` |   `-`   |
| threshold          | 开启虚拟滚动的元素数量阈值，当数据数量小于阈值时不会开启虚拟滚动。 | `number`           |   `-`   |
| isStaticItemHeight | （已废除）元素高度是否是固定的，请使用 `fixedSize`                 | `boolean`          | `false` |
| fixedSize          | 元素高度是否是固定的。                                             | `boolean`          | `false` |
| estimatedSize      | 元素高度不固定时的预估高度。                                       | `number`           |   `-`   |
| buffer             | 视口边界外提前挂载的元素数量。                                     | `number`           |  `10`   |

### TableExtraColumnConfig

| 参数名 | 描述 | 类型 | 默认值 |
| :----- | ---- | ---- | :----: |
| width | 列宽；未传按表格 size | `number` | xs 28 / sm 32 / md·lg·xl 36 |
| fixed | 固定位置 | `'left' \| 'right'` | `'right'` |
| align | 对齐 | `'left' \| 'center' \| 'right'` | `'center'` |
| dataIndex | 列标识 | `string` | `__cedar_table_extra__` |
