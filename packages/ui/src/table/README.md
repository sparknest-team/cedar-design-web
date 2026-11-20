---
permalink: /components/table/
---

# Table

Cedar Table 支持排序、行选择和远程数据等功能；Maple Table 是轻量级原生表格展示容器，不提供相同的数据和交互 API。

用于数据收集展示、分析整理、操作处理。

当前排序列的表头通过 `aria-sort` 标示升序或降序；自定义表头内的输入及按钮保留自己的键盘和点击操作。

默认行选择控件使用行键生成可访问名称，全选控件使用本地化名称；显式选择列标题优先。

当设置高度、启用粘性表头或虚拟列表导致表格分为多个原生表格时，数据表和汇总表会生成同表语义列头，并通过 `headers` 关联数据单元格。数据表的语义列头同步当前排序状态；汇总表使用独立汇总数据，不声明数据行的排序状态。`td` 插槽显式设置的 `headers` 优先，由调用方负责引用有效的同表列头。 动态增删或替换 `thead`、`tbody`、`tr`、`th`、`td` 结构插槽时，表格同步更新；`th` 的关联语义表头也会同步。虚拟表支持自定义 `tbody`；由于自定义容器可能改变行结构，此时不自动输出虚拟行总数和行索引。 空状态、页脚、汇总单元格及具名列插槽等内容插槽也支持动态增删和替换。实际屏幕阅读器及复杂自定义表头的验收尚未完成；依赖读屏识别列头的场景应验证目标环境，必要时提供可访问的替代内容。

## 基础示例

### 基础用法

传入 `columns` 和 `data` 即可展示表格；默认铺满容器，列宽超出时自动横向滚动。

<demo src="./__demos__/basic.vue"></demo>

### 空数据

数据为空时显示缺省提示；通过 `empty` 插槽提供业务引导，不把空状态和尺寸控制混在基础案例中。

<demo src="./__demos__/empty-state.vue"></demo>

## 列宽、布局与固定列

### 列宽配置场景

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `columns` | 表格的列描述信息 | 列宽配置场景、固定列、分组表头与固定列 |
| `data` | 表格的数据 | 列宽配置场景、固定列、分组表头与固定列 |
| `pagination` | 分页的属性配置 | 列宽配置场景、布局、自适应与拖拽调宽 |
| `bordered` | 是否显示边框 | 分组表头与固定列、布局、自适应与拖拽调宽 |
| `sticky-pagination` | 分页相对页面/外层滚动容器吸底；数字为距底部偏移（px） | 列宽配置场景 |
| `row-selection` | 表格的行选择器配置 | 列宽配置场景 |
<!-- demo-config-notes:end -->

表格宽度和列宽是两层配置：`style="width: 100%"` 或 `style="width: 480px"` 控制外层容器，`columns` 中的 `width` / `minWidth` 控制各列。无需设置 `scroll.x` 或 `scroll.y`。

横向滚动需要表格外层有可确定的可用宽度；在 flex 或 grid 布局中，必要时给包含表格的项目设置 `min-width: 0` 或明确宽度，避免内容将祖先撑宽。

先用下面七种组合比较不指定列宽、全部最小宽、定宽与弹性混合、全部定宽、横向溢出、左右固定列，以及选择列/扩展列。切换 100%、480px、360px 可以直接观察重算和横向滚动。

| 配置 | 分配规则（默认 `table-layout="fixed"`、`fit=true`） |
| --- | --- |
| 不设置列宽 | 以每列 80px 为基础，按比例分配剩余空间 |
| `minWidth` | 指定弹性列的基础宽度；空间不足时保留基础宽度并横向滚动 |
| `width` + 弹性列 | 显式 `width` 保持不变，剩余空间给弹性列，按各自 `minWidth` 比例分配 |
| 全部指定 `width` | 超出容器时保留列宽；不足容器时按比例放大普通数据列以铺满 |
| `fit=false` | 仍至少铺满容器；剩余空间由所有普通数据列按基础宽度比例分摊 |
| 选择列 / 扩展列 | 选择列按自己的操作列宽度保留；扩展列不参与普通数据列的比例放大 |

这里的“弹性”指剩余宽度分配，不是浏览器的 `table-layout: auto`。未设置 `width` 的列才是弹性列；`minWidth` 不会让显式 `width` 的列变成弹性列。以上分配规则针对默认的 `fixed` 布局。

<demo src="./__demos__/column-width-scenarios.vue"></demo>

### 固定列

在 `columns` 中指定 `fixed: 'left'` 或 `fixed: 'right'`，可将列固定到左侧或右侧。固定列建议设置 `width`。当列最小宽之和超过容器时会自动出现横向滚动。

<demo src="./__demos__/fixed.vue"></demo>

### 分组表头与固定列

分组表头使用固定列时，需要优先指定数据列为固定列。
如果一个分组下的所有数据列都是固定列，此时可以设置分组列为固定列，宽度为子列宽度之和。

<demo src="./__demos__/columns-children-and-fixed.vue"></demo>

### 布局、自适应与拖拽调宽

在同一张表中依次切换布局、剩余空间分配、分组表头、拖拽调宽和窄容器，直接比较相同列配置的变化。

| 配置 | 作用与限制 |
| --- | --- |
| `table-layout="fixed"`（默认） | 组件计算列宽并写入 `<col>`，长文本不会任意撑开列 |
| `table-layout="auto"` | 浏览器按内容分配实际列宽，长文本可能撑开列；固定列偏移根据渲染后实测宽度修正 |
| `column-resizable` | 仅 `fixed` 布局渲染拖拽把手；拖拽后的宽度参与下一次宽度计算 |
| `max-height` 或任意列 `ellipsis` | 会强制使用 `fixed`，保证高度限制和省略行为可靠 |

`width` 不代表任何配置下都严格不变：存在弹性列且 `fit=true` 时定宽列保持原宽；全部指定宽度或 `fit=false` 时，Cedar 会按上面的规则铺满容器。

<demo src="./__demos__/column-sizing-playground.vue"></demo>

### 自动滚动与高度设置

- 横向：组件比较计算后的列宽总和与可用容器宽度，自动决定是否需要滚动；调整容器或列配置会重新计算。
- 纵向：设置 `height` 固定高度，或设置 `max-height` 让内容少时收缩、超出后滚动。不限制高度时，由页面/外层容器负责纵向滚动。
- 粘性：`sticky-header` / `sticky-pagination` 控制相对页面或外层滚动容器的定位。存在横向溢出且启用了粘性分页时，悬浮表格或焦点位于表格内即可显示底部同步滚动条。

下方“滚动与粘性定位”分组专门展示高度、表头和分页的组合。

## 表头与列结构

### 分组表头

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `columns` | 表格的列描述信息 | 分组表头、文本省略和提示、单元格合并 |
| `data` | 表格的数据 | 分组表头、文本省略和提示、单元格合并 |
| `bordered` | 是否显示边框 | 分组表头、单元格合并 |
| `span-method` | 单元格合并方法（索引从数据项开始计数） | 单元格合并 |
| `row-selection` | 表格的行选择器配置 | 单元格合并 |
| `span-all` | 是否让合并方法的索引包含所有 | 单元格合并 |
<!-- demo-config-notes:end -->

`columns` 内可以设置 `children`，用于表头分组。

<demo src="./__demos__/columns-children.vue"></demo>

### 文本省略和提示

开启 `ellipsis` 属性可以显示省略号，如果同时开启 `tooltip` 会在显示省略号时使用文本提示。注意：开启 `tooltip`
后会修改 `table-cell` 中的 DOM 结构。

<demo src="./__demos__/ellipsis-and-tooltip.vue"></demo>

### 单元格合并

通过 `span-method` 属性进行单元格合并。可以设置 `span-all` 让列索引包含操作列，注意：目前如果合并多项选择器会导致全选状态判断错误。

<demo src="./__demos__/span-method.vue"></demo>

### 总结行

设置 `summary` 可以开启表尾总结行，并可以通过 `summary-text` 指定首列文字。
如果想要自定义总结行展示，可以传入函数。函数的返回值为需要展示的数据，结构同 `data` 一样即可，支持多行数据。
注意：控制列暂不可以自定义内容

<demo src="./__demos__/summary.vue"></demo>

## 滚动与粘性定位

### 纵向滚动（height）

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `columns` | 表格的列描述信息 | 纵向滚动（height）、流体高度（max-height）、固定列 + 固定表头 |
| `data` | 表格的数据 | 纵向滚动（height）、流体高度（max-height）、固定列 + 固定表头 |
| `pagination` | 分页的属性配置 | 纵向滚动（height）、流体高度（max-height）、固定列 + 固定表头 |
| `height` | 表格高度。设置后表头固定，表体滚动。数字单位为 px | 纵向滚动（height）、固定列 + 固定表头 |
| `sticky-header` | 表头相对页面/外层滚动容器吸顶；数字为距顶部偏移（px） | 表头吸顶（页面滚动）、粘性表头、分页与横向滚动条 |
| `sticky-pagination` | 分页相对页面/外层滚动容器吸底；数字为距底部偏移（px） | 分页吸底（页面滚动）、粘性表头、分页与横向滚动条 |
<!-- demo-config-notes:end -->

通过 `height` 开启固定高度：表头固定，表体纵向滚动。

<demo src="./__demos__/scroll.vue"></demo>

### 流体高度（max-height）

`max-height`：内容少时收缩，超出后滚动；并强制 `table-layout: fixed`。可与固定列组合。

<demo src="./__demos__/fluid-height.vue"></demo>

### 固定列 + 固定表头

同时设置 `height` 与左右固定列（对齐 Element 的 fixed column and header 场景）。

<demo src="./__demos__/fixed-column-and-header.vue"></demo>

### 表头吸顶（页面滚动）

`sticky-header` 是相对**页面/外层滚动容器**的 CSS sticky，和 `height` 造成的「表体内滚动 + 表头固定」不是一回事。

- 适用：表格很高、页面整体滚动时希望表头贴在视口顶部
- 不适用：只想在表格内部滚动看数据 → 用 `height` / `max-height`
- 传数字可指定距顶部偏移（例如避开全局导航）

<demo src="./__demos__/sticky-header.vue"></demo>

### 分页吸底（页面滚动）

`sticky-pagination` 相对**页面/外层滚动容器**吸底，翻长列表时分页条留在视口底部。传数字可指定距底部偏移。

<demo src="./__demos__/sticky-panation.vue"></demo>

### 粘性表头、分页与横向滚动条

<demo src="./__demos__/sticky-layout.vue"></demo>

sticky-header 与 sticky-pagination 相对页面或外层滚动容器定位。数值 0 表示启用且偏移为 0。与 height/max-height 限制表格内部滚动是两种不同场景。祖先应保留实际滚动布局，不要额外套 overflow:hidden 阻断粘性定位。

内置分页吸底时，将同步横向滚动条放在分页上方并一起吸底。表体与该滚动条双向同步，横向滚动入口保持可见并可操作；没有横向溢出时不显示这条滚动条。

需要完全自定义布局时传 pagination=false，分页和当前页数据由业务控制。示例可以切换这种模式。此时 Table 不进行内置分页切片；后端分页传当前页，前端分页由业务先 slice。pagination 对象里的 total 仅控制分页总数，不会自动发请求。

### 只替换分页内容，保留 Table 的吸底布局

完整 pagination 插槽接收 { page, pageSize, total, onChange, onPageSizeChange }。放入业务分页组件即可替换内置 Pagination；Table 继续负责数据分页与滚动条/分页的上下布局。业务分页不要自行 position:fixed，否则会离开该布局。pagination=false 则完全退出这套分页协议，适合业务自己管理当前页数据和整个布局。

```vue
<c-table :data="rows" :columns="columns" sticky-header sticky-pagination :pagination="{ pageSize: 20 }">
  <template #pagination="pager">
    <business-pagination :page="pager.page" :page-size="pager.pageSize" :total="pager.total" @change="pager.onChange" />
  </template>
</c-table>
```

横向操作条的最小高度由 `--c-table-sticky-scrollbar-height` 控制，默认 16px；实际高度同时保留浏览器原生滚动条所需空间。

### 分页挂载到外部容器

`pagination.container` 接收 CSS 选择器或 HTMLElement，省略时分页仍在表格内部。只是改变挂载位置，页码、数据切片、事件和粘性底部仍由同一个 Table 管理，无需插槽或另一套分页状态。使用同一个滚动容器时，外部宿主可设为 display: contents，让粘性分页与横向滚动条共享滚动上下文。指定目标必须实际存在；选择器目标可以在同一渲染批次内稍后创建。SSR 由宿主框架处理 Teleport 输出。多个异步表格应使用各自独立的分页目标，并由宿主将每个目标对应的 Teleport 内容注入该目标；共享目标在服务端和客户端异步接管顺序不同时可能发生内容或事件归属错位。`pagination=false` 仍表示完全关闭 Table 分页及数据切片。

```vue
<c-table
  :data="rows" :columns="columns"
  :sticky-header="0" :sticky-pagination="0"
  :pagination="{ pageSize: 10, total: 500, container: '#table-pagination' }"
/>
<div id="table-pagination" style="display: contents" />
```

粘性定位示例提供外层滚动容器，Table 本身不设置 height/max-height 或纵向滚动限制。可切换整页滚动、自定义分页和外置底部挂载点。Table 统一管理同步横向滚动条与 pagination 插槽组成的吸附区域，pagination.container 移动整个区域。外置目标必须处于预期的滚动与布局边界内，任意 DOM 位置不保证相同的 sticky 效果。

开启粘性分页时隐藏内部横向滑块及原生横向滚动条，底部复用 Scrollbar 的 embed 模式，在鼠标悬浮整个 Table 或键盘焦点进入 Table 时显示；分页挂载到外部容器时同样生效。拖动、轨道点击和触控板保持同步。示例的纵向滚动由外层容器负责，Table 未设置 height/max-height。

## 选择与数据交互

### 行选择器

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `columns` | 表格的列描述信息 | 行选择器、行选择器(单选框)、展开行 |
| `data` | 表格的数据 | 行选择器、行选择器(单选框)、展开行 |
| `row-selection` | 表格的行选择器配置 | 行选择器、行选择器(单选框)、树形数据展示 |
| `draggable` | 表格拖拽排序的配置 | 可拖拽表格、拖拽锚点 |
| `selected-keys` | 已选择的行（受控模式）优先于 `rowSelection` | 行选择器 |
| `pagination` | 分页的属性配置 | 行选择器 |
<!-- demo-config-notes:end -->

通过设置 `row-selection` 开启行选择器。

<demo src="./__demos__/row-selection.vue"></demo>

### 行选择器(单选框)

通过设置 `rowSelection.type='radio'` 开启单选模式。

<demo src="./__demos__/row-selection-single.vue"></demo>

### 展开行

通过设置 `expandable` 开启展开行功能。可以在 `data` 中添加 `expand` 属性，设置展开行显示内容。

<demo src="./__demos__/expandable.vue"></demo>

### 树形数据展示

树形数据展示的例子，`data` 里有 `children` 字段时会展示为树形表格。

<demo src="./__demos__/tree-children.vue"></demo>

### 排序和筛选

Cedar Table 在 SSR 首屏需要应用默认筛选时，请通过 `:columns` 数组传入列，并设置 `filterable.defaultFilteredValue`。使用 `<c-table-column>` 子组件声明列时，不保证服务端输出已筛选的行。

通过设置 `columns` 中的 `sortable` 和 `filterable` 属性，可以配置排序和筛选功能。 通过 `filter-icon-align-left`
属性可以让筛选按钮左对齐。
<br/>
如果想实现远程排序，可以通过`sortable.sorter=true` 来关闭内部排序，并通过 `change` 或者 `sorterChange` 事件来实现服务器端排序。
<br/>
如果想实现远程筛选，则需要不传`filterable.filter`或者使`filterable.filter`返回`true`,来关闭内部筛选，并通过 `change`
或者`filterChange`事件来实现服务器端筛选。
<demo src="./__demos__/sort-and-filter.vue"></demo>

### 可拖拽表格

（实验性）
开启表格行可拖拽功能

<demo src="./__demos__/droppable-table.vue"></demo>

### 拖拽锚点

（实验性）
开启锚点拖拽功能

<demo src="./__demos__/droppable-anchor.vue"></demo>

### 可编辑表格

可以在使用插槽获得的数据，修改 `data` 中的数据，达到可编辑表格的功能。
可以直接修改插槽传出的 `record` 变量。这个 `record` 变量是传入的 `data` 中对应数据的引用，请保证 `data` 为 Reactive 类型。

<demo src="./__demos__/editable-form.vue"></demo>

## 列管理与渲染定制

### 自定义表头 / 列管理

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `columns` | 表格的列描述信息 | 自定义表头 / 列管理、自定义筛选菜单、自定义渲染 |
| `data` | 表格的数据 | 自定义表头 / 列管理、自定义筛选菜单、自定义渲染 |
| `pagination` | 分页的属性配置 | 自定义表头 / 列管理 |
| `size` | 表格的大小 | 自定义表头 / 列管理 |
| `row-class` | 表格行元素的类名。 | 自定义表格元素 |
<!-- demo-config-notes:end -->

Table **不内置**列管理。通过扩展点与外部 `TableColumnManager` 组合：

- `extra-column`：末尾扩展列（如设置图标），内容用 `#extra-column-header` / `#extra-column-cell`；默认宽度 **28px**，可通过 `extraColumn: { width: number }` 覆盖
- `#header-cell-actions`：表头右侧操作区，菜单内容由外部完全控制
- `v-model:columns` + `@column-resize`：外部改列并触发重渲染

基础组合：

<demo src="./__demos__/column-manager-basic.vue"></demo>

自定义入口与本地记忆：

<demo src="./__demos__/custom-table-columns.vue"></demo>

### 自定义筛选菜单

通过插槽可以自定义筛选菜单内容。

<demo src="./__demos__/custom-filter.vue"></demo>

### 自定义渲染

通过 `#columns` 插槽和 `<c-table-column>` 组件可以使用模板的方法自定义列渲染。
至少一个 `<c-table-column>` 注册后，声明式列替代 `columns` 属性；没有注册列时继续使用 `columns`。

列标题依次使用 `titleSlotName` 指向的 Table 具名插槽、列的 `title` 插槽、`title` 值。单元格依次使用列的 `cell` 插槽、`render`、`slotName` 指向的 Table 具名插槽、`dataIndex` 对应数据。建议每处只配置一种内容来源。

<demo src="./__demos__/custom-rendering.vue"></demo>

### 自定义表格元素

可以通过特定插槽自定义表格元素的渲染。仅需要传入表格元素，内部属性会自动附加上去

<demo src="./__demos__/customize-table-elements.vue"></demo>

## 异步与大数据

### 子树懒加载

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `columns` | 表格的列描述信息 | 子树懒加载、异步目录、虚拟列表 |
| `data` | 表格的数据 | 子树懒加载、异步目录、虚拟列表 |
| `pagination` | 分页的属性配置 | 异步目录、虚拟列表 |
| `load-more` | 数据懒加载函数，传入时开启懒加载功能 | 子树懒加载 |
| `size` | 表格的大小 | 异步目录 |
| `row-selection` | 表格的行选择器配置 | 虚拟列表 |
<!-- demo-config-notes:end -->

通过 `load-more` 属性可以开启子树懒加载功能。
开启子树懒加载功能后，需要在无子树节点标注 `isLeaf: true`，没有标注且没有 `children` 属性的节点会认为需要子树懒加载处理。
`load-more` 属性有提供 `done` 函数进行回调，可以在回调中传入懒加载的子树。如果 `done` 函数没有传入数据会认为懒加载失败，此节点可以再次触发懒加载。

<demo src="./__demos__/load-more.vue"></demo>

### 异步目录

`TableColumnManager` 的 `loadOptions` / `remoteSearch` 在外部弹层中使用。

<demo src="./__demos__/column-manager-async.vue"></demo>

详见 [`TableColumnManager`](/components/table-column-manager/)。

### 虚拟列表

设置 `virtual-list-props` 开启虚拟列表功能。
默认虚拟行结构会把展开的树节点和详情计入读屏行号。函数生成的详情在对应记录进入渲染窗口时计算一次，内容和行号共用这个结果。若所有已展开的函数型详情均在窗口内，表格会给出准确总数；若有详情在窗口外，总数标为未知（`aria-rowcount="-1"`）。窗口之前有未渲染的函数型详情时，其结果会影响后续所有行，表格会省略当前行号。虚拟滚动下固定列仍有限制。

编辑虚拟行时，用稳定的行键保存草稿。例如，在单元格插槽中使用 `v-model="drafts[record.key]"`，并在表格外定义响应式的 `drafts`。滚动足够远时，表格会卸载该行；返回后，新输入框会从草稿中恢复值。

<demo src="./__demos__/virtual-list-props.vue"></demo>

## 业务组合

### 关联业务行与列类型

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `columns` | 表格的列描述信息 | 任务筛选与数据联动、表格属性 |
| `data` | 表格的数据 | 任务筛选与数据联动、表格属性 |
| `pagination` | 分页的属性配置 | 任务筛选与数据联动 |
| `bordered` | 是否显示边框 | 表格属性 |
| `hoverable` | 是否显示选中效果 | 表格属性 |
| `stripe` | 是否开启斑马纹效果 | 表格属性 |
<!-- demo-config-notes:end -->

使用 `defineTableConfig<User>` 将数据、列路径、渲染、排序和筛选回调关联到业务行。`rowKey` 显式指定业务身份；示例增加行时通过 computed 重新校验配置，数据更新照常传给原 Table。

<demo src="./__demos__/typed-config.vue"></demo>

### 任务筛选与数据联动

查询任务或部门、按状态筛选、完成任务；统计和结果同步更新，支持空结果与恢复。

<demo src="./__demos__/task-workbench.vue"></demo>

### 表格属性

这里罗列了一些表格的属性，你可以方便的打开或关闭一些属性，查看它的效果。

<demo src="./__demos__/form-attribute.vue"></demo>

### 轻量入口与功能组合

Core、当前页汇总和虚拟列表分别组合；切换布局、分页、阅读方向或数据时，保持各表格自己的状态和滚动容器。

<demo src="./__demos__/capability-composition.vue"></demo>

## 加载与等待

### 手动加载与原生插槽

布尔值或对象 loading 同时适用于数据模式与原生插槽模式；对象需要显式 loading: true。切换加载时保留行、草稿与焦点，通知事件不负责自动执行加载任务。

使用默认插槽时，表格渲染插槽提供的原生表格内容和 `footer`，不再根据 `data` / `columns` 生成表头、数据行或内置分页；排序、筛选及选择等数据模式功能也不接管这些原生内容。需要这些功能时使用数据模式。

<demo src="./__demos__/loading.vue"></demo>

## 轻量入口与按需功能

原有 `Table`、`tableProps`、实例方法和 `table/style` 保持完整功能及默认行为。只需要平面数据展示、分组表头、自适应列宽、冻结列和原生横向滚动时，可主动导入 `TableCore`；它使用独立样式，不会自动注册到原有 Table resolver。

```ts
import TableCore from '@cedar-design/ui-vue/table/core'
import '@cedar-design/ui-vue/table/core/style'
import type { TableCoreColumn } from '@cedar-design/ui-vue/table/core'

const columns: TableCoreColumn[] = [
  { dataIndex: 'name', title: 'Name', fixed: 'left', width: 120 },
  { dataIndex: 'description', title: 'Description', minWidth: 180 },
]
```

`TableCore` 接收已经准备好的平面 `data`，不会隐式筛选、排序、分页、展开树或启用虚拟列表。`tableLayout="auto"` 按浏览器实际内容宽度测量冻结偏移；默认 `fixed` 使用列宽分配内核。`fixed: 'left' | 'right'` 表示物理方向，`dir="rtl"` 保留相同含义。原生滚动区域可以聚焦后使用方向键、Home 和 End。

筛选、排序状态与客户端计算具有独立入口。远程场景只引入状态，在回调中自行请求并更新 `data`；受控值仍以列配置为准，回调同时提供用户请求和当前有效状态。清空/重置时，每个受影响字段分别触发回调。

```ts
import { computed, ref } from 'vue'
import { useTableFilters } from '@cedar-design/ui-vue/table/features/filter'
import type { TableFilterColumn } from '@cedar-design/ui-vue/table/features/filter'

const filterColumns = ref<TableFilterColumn[]>([
  { dataIndex: 'status', filterable: { defaultFilteredValue: [] } },
])
const { filters, setFilter, resetFilters, clearFilters } = useTableFilters({
  columns: filterColumns,
  onChange(field, requested, effective) {
    // 使用 requested 发起远程请求；将结果赋给传入 TableCore 的 data。
  },
})
```

需要本地计算时再显式组合下列入口；这些函数只处理传入的平面数组，不修改原数组，保留行对象身份。列配置使用原有 `TableColumnData` 的 `filterable.filter` / `sortable.sorter`。`sortable.sorter: true` 保留远程排序语义，不执行本地重排。

```ts
import { filterTableData } from '@cedar-design/ui-vue/table/features/filter/client'
import { useTableSorting } from '@cedar-design/ui-vue/table/features/sort'
import { sortTableData } from '@cedar-design/ui-vue/table/features/sort/client'

const { sorter, setSorter, resetSorters, clearSorters } = useTableSorting({
  columns: localColumns, // Ref<TableColumnData[]>
  onChange(field, direction, effective) {},
})
const visibleData = computed(() => sortTableData(
  filterTableData(rows.value, filters.value, localColumns.value),
  sorter.value,
  localColumns.value,
))
```

筛选面板、移动端操作面板和分页控件由调用方组合；完整 `Table` 继续使用原桌面交互，不会因新增入口改变行为。

## API

### TableCore Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| columns | `TableCoreColumn[]` | `[]` | 数据列和分组列 |
| data | `TableCoreData[]` | `[]` | 外部处理后的平面数据 |
| row-key | `string` | `'key'` | 行身份字段，缺失时回退当前索引 |
| size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | 基础尺寸 |
| table-layout | `'fixed' \| 'auto'` | `'fixed'` | 列宽分配或原生内容布局 |
| fit | `boolean` | `true` | 弹性列吸收剩余宽度 |
| height / max-height | `number \| string` | — | 滚动视口高度 / 最大高度；数字为 px |
| sticky-header / show-header | `boolean` | `true` | 视口内固定表头 / 显示表头 |
| bordered / hoverable | `boolean` | `true` | 边框 / 行悬停 |
| stripe / loading | `boolean` | `false` | 斑马纹 / aria-busy 状态；loading 保留数据行 |

### TableCore Events

| 名称 | 参数 | 说明 |
| --- | --- | --- |
| row-click | `(record, event)` | 点击数据行 |
| cell-click | `(record, column, event)` | 点击数据单元格 |
| header-click | `(column, event)` | 点击表头 |

### TableCore Slots

| 名称 | 参数 | 说明 |
| --- | --- | --- |
| header | `{ column }` | 表头内容，优先于列的 titleSlotName/title |
| cell | `{ record, column, rowIndex }` | 单元格内容，优先于列 render/slotName |
| empty / footer | — | 空数据内容 / 视口外底部内容 |
| 列 titleSlotName / slotName | 对应 header / cell 参数 | 按名称提供列内容 |

### TableCore Methods

| 名称 | 参数 | 说明 |
| --- | --- | --- |
| scrollTo | `ScrollToOptions` | 使用原生物理滚动坐标，RTL 与 HTMLElement.scrollTo 相同 |

`TableCoreColumn` 支持 `dataIndex`、`title`、`children`、`width`、`minWidth`、`fixed`、`align`、`ellipsis`、`render`、`slotName`、`titleSlotName` 和表头/单元格 class/style。`render` 接收 `{ record, column, rowIndex }`；`record` 是原始行对象。省略内容以 CSS 截断，不自动引入桌面 Tooltip。

### Table Props

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
| pagination                  | 分页的属性配置                                                                             | `boolean \| TablePaginationConfig`                                                                                                                                                  |   `true`    |
| indent-size                 | 树形表格的缩进距离                                                                         | `number`                                                                                                                                                                      |    `16`     |
| row-key                     | 表格行 `key` 的取值字段                                                                    | `string`                                                                                                                                                                      |   `'key'`   |
| show-header                 | 是否显示表头                                                                               | `boolean`                                                                                                                                                                     |   `true`    |
| virtual-list-props          | 传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#virtuallistprops)           | `VirtualListProps`                                                                                                                                                            |     `-`     |
| span-method                 | 单元格合并方法（索引从数据项开始计数）                                                     | `(data: {  record: TableData;  column: TableColumnData \| TableOperationColumn;  rowIndex: number;  columnIndex: number;}) => { rowspan?: number; colspan?: number } \| void` |     `-`     |
| span-all                    | 是否让合并方法的索引包含所有                                                               | `boolean`                                                                                                                                                                     |   `false`   |
| components                  | 配置操作列，详见 TableComponents                                                           | `TableComponents`                                                                                                                                                             |     `-`     |
| row-number                  | 保留属性；当前不生成行号                                                                   | `boolean \| object`                                                                                                                                                           |     `-`     |
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

### Table Events

| 事件名           | 描述                           | 参数                                                                               |
| ---------------- | ------------------------------ | ---------------------------------------------------------------------------------- |
| expand           | 点击展开行时触发               | rowKey: `string \| number`<br>record: `TableData`                                  |
| expanded-change  | 已展开的数据行发生改变时触发   | rowKeys: `(string \| number)[]`                                                    |
| select           | 点击行选择器时触发             | rowKeys: `(string \| number)[]`<br>rowKey: `string \| number`<br>record: `TableData` |
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

### Table Methods

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

`clearFilters` 和 `resetFilters` 指定列时保留其他列的筛选状态；省略参数或传空数组时处理全部可筛选列。受控列的实际值仍由父组件决定。

单选模式下，`select(keys, true)` 只选择传入的第一个键，空数组不操作；`select(keys, false)` 移除指定的键。`selectAll(true)` 不操作；`selectAll(false)` 移除当前页可选行的键。受控选择仍须由父组件接收并更新 `selectedKeys`。

`select`、`selectAll`、`expand` 和 `expandAll` 的状态参数省略时为 `true`。`expand` 接收一个或多个键，重复展开不会重复添加键；`expandAll` 处理所有数据行。`resetSorters` 恢复列的默认排序，`clearSorters` 清除排序；受控排序仍由父组件决定。

### Table Slots

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

### TableColumn Props

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

### TableColumn Slots

| 插槽名         |         描述         | 参数                                                                                                                                                                         |
| -------------- | :------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter-icon    |     筛选按钮图标     | -                                                                                                                                                                            |
| filter-content | 自定义筛选弹出框内容 | filterValue: `string[]`<br>setFilterValue: `(filterValue: string[]) => void`<br>handleFilterConfirm: `(event: Event) => void`<br>handleFilterReset: `(event: Event) => void` |
| default        | 声明分组表头的子列 | - |
| title          |         标题         | -                                                                                                                                                                            |
| cell           |        单元格        | record: `TableData`<br>column: `TableColumnData`<br>rowIndex: `number`                                                                                                       |

### 表格结构子组件

`Thead` 和 `Tbody` 分别渲染表头和表体，默认插槽提供内容；同名插槽可定制对应元素。`Tr`、`Th` 和 `Td` 是依赖 Table 上下文的底层渲染器，不是独立的数据表格。通常通过 Table 的 `tr`、`th`、`td` 插槽定制元素。

客户端渲染时，内容插槽和结构插槽都可以在列表项上组合 `v-for`、`:key` 和 `v-memo`。

**服务端渲染**时，Vue 3.5.45 编译使用方模板可能在业务页面的服务端构建产物中生成引用未声明 `_cache` 的插槽函数，导致首屏缺少内容。在 Table 发布入口已复现于标题、单元格、筛选图标与面板、空状态、页脚、展开行与图标、分页、汇总单元格、拖动手柄、扩展列和表头操作区。自定义 `thead`、`tbody`、`tr`、`th`、`td` 同样受影响，即使循环为空也可能报错。需要 SSR 时，在这些插槽的列表项上保留 `v-for` 和稳定的 `:key`，移除同一节点的 `v-memo`。

通过 `#columns` 声明的 `TableColumn` 支持服务端输出表头与数据单元格，包括分组列和动态列；也可以通过 `columns` 属性定义列。

`Tr` 的 `expand`、`empty`、`checked` 表示行状态，`rowIndex` 和 `record` 提供行上下文。`Th` 接收 `column`、`operations`、`dataColumns` 和 `resizable`。`Td` 接收 `rowIndex`、`record`、`column`、`type`、`operations`、`dataColumns`、`colSpan`、`rowSpan`、`isFixedExpand`、`containerWidth`、`showExpandBtn`、`indentSize`、`renderExpandBtn` 和 `summary`，这些字段用于 Table 内部布局及渲染。

### TableComponents

`components.operations` 接收当前的 `dragHandle`、`expand` 和 `selection` 操作列（未启用时相应值为空），返回要渲染的操作列数组。它用于调整操作列，不是任意表格元素的替换接口。

### TableOperationColumn Props

| 字段 | 说明 | 类型 |
| --- | --- | --- |
| name | 操作列标识 | `string` |
| title | 列标题 | `string \| RenderFunction` |
| width | 列宽 | `number` |
| fixed | 是否固定 | `boolean` |
| render | 自定义操作单元格内容 | `(record: TableData) => VNodeChild` |

`isLastLeftFixed` 和 `_realWidth` 用于表格布局计算，业务代码通常无需设置。`TableComponents` 与 `TableOperationColumn` 类型可从根入口或 table 入口导入。

### 分页配置类型

`pagination.align` 支持 `start` 和 `end`，默认靠末端（LTR 居右，RTL 居左）。使用 `:pagination="{ align: 'start' }"` 可将分页条移至起始侧。分页条位于表格底部。

`TablePaginationConfig = Omit<PaginationProps, 'total'> & { total?: number; container?: string | HTMLElement; align?: 'start' | 'end' }`。表格省略 `pagination.total` 时由有效数据条数推导；远程分页可继续显式传入总数。原 `PaginationProps` 对象仍可直接传给表格，独立 `Pagination` 的 `total` 必填要求不变。根入口与 table 入口均导出 `TablePaginationConfig`。

### 透传配置优先级

列 filterable.triggerProps 中的嵌套 open 等字段可以覆盖筛选浮层状态。需要由业务控制筛选浮层时，应同时管理其打开状态与筛选条件。

## Types

### TableData

| 参数名   | 描述             | 类型                       | 默认值  |
| -------- | ---------------- | -------------------------- | :-----: |
| key      | 数据行的key      | `string`                   |   `-`   |
| expand   | 扩展行内容       | `string \| RenderFunction` |   `-`   |
| children | 子数据           | `TableData[]`              |   `-`   |
| disabled | 是否禁用行选择器 | `boolean`                  | `false` |
| isLeaf   | 是否是叶子节点   | `boolean`                  | `false` |

### TableSortable

自定义 `sorter(a, b, { direction })` 需自行根据 `direction` 返回升序或降序结果，Table 不会再次反转；`sorter: true` 关闭内部排序。未提供函数时使用内置比较，相同值保留原顺序。

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

筛选内容依次使用列的 `filter-content` 插槽、`slotName` 指向且实际存在的 Table 具名插槽、`renderContent`，最后使用 `filters` 内置选项。指定的具名插槽不存在时会继续使用后续内容。

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
| slotName             | Table 上自定义筛选内容的具名插槽           | `string`                                                                                                                                                                                                 | `-` |

### TableColumnData

| 参数名           | 描述                                                    | 类型                                                                                                | 默认值  |
| ---------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | :-----: |
| dataIndex        | 列信息的标识，对应 `TableData` 中的数据                 | `string`                                                                                            |   `-`   |
| title            | 列标题                                                  | `string \| RenderFunction`                                                                          |   `-`   |
| width            | 列宽基准。有弹性列且 fit=true 时保持固定；全部定宽且不足容器时按比例放大            | `number`                                                                                            |   `-`   |
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

## 可选的业务行类型配置

```ts
import { defineTableConfig } from '@cedar-design/ui-vue'
import type { TypedTableConfig, TypedTableColumn, TableDataPath } from '@cedar-design/ui-vue/table'

interface User { id: string; name: string; age: number }
const users: User[] = [{ id: 'a', name: 'Alice', age: 20 }]
const config = defineTableConfig<User>({
  rowKey: 'id', data: users,
  columns: [{ dataIndex: 'age', render: ({ record }) => record.age.toFixed(0) }],
})
```

将 config 用于 `<c-table v-bind="config" />` 或 TSX `<Table {...config} />`。无需业务侧 as any；原 TableData、TableColumnData、TableProps 及组件 Props 保持。新入口检查发生在入参阶段，返回原 TableProps 供旧组件调用，运行时返回同一对象，不复制数据/列、不调整排序筛选、不包装组件。

| 关联范围 | 新类型的规则 |
| --- | --- |
| data / columns | 相同 Row，树形 children 递归使用同一业务结构 |
| dataIndex | 校验字段与嵌套路径，例如 profile.city、tags[0].label、tags.0.label；递归最多五层业务结构；动态字符串和更深路径继续使用旧入口 |
| render / sortable / filterable | record、比较器与筛选器参数为 Row，分组 children 列同样关联 |
| 行回调 | 单元格样式/类、rowClass、expandable、loadMore、spanMethod 与自定义合计关联 Row |
| rowKey | 必须显式传入 Row 中值为 string/number 的字段；这里是字段名，不是嵌套路径 |
| summary | 可省略、false，或返回完整 Row 的自定义函数；自动 summary=true 不保证是业务行，新入口不接受，原 Table 配置仍支持 |

业务接口通常不需要显式 extends TableData；其 any 索引会使 keyof 变宽，削弱字段拼写检查。使用普通业务 interface，通过泛型约束检查表格保留元数据的兼容性。后端数据内容仍需业务校验，类型不会检查 ID 是否唯一。

类型入口只覆盖这份配置内的关联；原组件的模板插槽、组件事件和自定义 components 扩展不会自动变成 Row 泛型。返回的 TableProps 仍为旧宽类型，不应期待后续任意修改返回对象也继续校验 Row。响应式来源会替换数组时，用 `computed(() => defineTableConfig<Row>(...))` 保持更新；不要把调用时的 rows.value 当成持续跟随 ref 的订阅。

自动合计行可能包含文本、总数和缺失字段，不能让 render(record: User) 假定其完整。需要自动合计或异构树行时继续使用原宽配置；采用自定义合计的新入口需提供完整业务行。两种入口的原 Table 行为都不改变。

Maple Table 是原生表格展示容器，不提供 data / columns 配置。

## 阅读方向与滚动

Table 继承最近的原生 `dir`；直接传入 `dir` 时，服务端首屏即使用指定方向。动态切换方向时，保留仍然存在的单元格节点和输入状态。普通列按阅读方向排列；显式 `fixed: left/right` 保持物理侧，内部按冻结区稳定分区，不修改传入的列、数据或业务索引。跨冻结区的多级分组表头会分段显示，保持每段与正文列对齐。省略 align 时按阅读起点对齐，显式 left/right 保持物理对齐。

表头、正文、汇总和吸底滚动条以非负的“距阅读起点距离”同步，适配原生 RTL 的负 scrollLeft。切换方向保留该距离并按新视口范围钳制；虚拟行的纵向定位不改变横向距离。Teleport 分页/吸底区域继承来源表格方向。

列宽手柄支持方向感知的鼠标/触摸拖动与左右键调整，键盘步长 10px、Shift 为 50px，Home 到达 40px 下限；保持原有 fixed 布局才可调宽的约束。吸底滚动条支持左右键、Home/End，测量按帧合并并在停用/卸载时清理。切换阅读方向不会更改选择、排序、筛选、分页状态或触发列宽事件。

懒加载子节点缓存归属于源节点对象及其行 key，不因复用同一 key 而继承旧节点缓存。替换节点、行 key 或加载函数会使旧任务/缓存失效；停用或卸载会使待完成的单元格回调失效。done() 表示未取得子节点，结束等待并允许重试；done([]) 接受空结果，同一次任务只接受首次完成。同步加载异常释放等待后仍进入 Vue 错误通道。保持 load-more 的 done 回调协议，不将通知事件返回的 Promise 当作任务入口。

回调式加载函数若返回 Promise，其拒绝会释放等待并进入 Vue 错误通道；完成值会被忽略，不能代替 done。这是显式加载属性的异常处理，不会收集 expand 等通知事件的 Promise。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-table-body-bg` | `var(--c-color-bg-2)` | `background`, `background-color` |
| `--c-table-body-cell-bg` | `var(--c-color-bg-2)` | `background-color` |
| `--c-table-body-cell-text-color` | `rgb(var(--c-gray-10))` | `color` |
| `--c-table-body-min-height` | `40px` | `min-height` |
| `--c-table-body-row-active-bg` | `var(--c-color-fill-1)` | `background-color` |
| `--c-table-body-row-active-dark-bg` | `var(--c-color-neutral-2)` | `background-color` |
| `--c-table-body-row-hover-bg` | `var(--c-color-fill-1)` | `background`, `background-color` |
| `--c-table-body-sorted-cell-bg` | `var(--c-color-fill-1)` | `background-color` |
| `--c-table-body-stripe-row-bg` | `var(--c-color-fill-1)` | `background`, `background-color` |
| `--c-table-border-color` | `var(--c-color-neutral-3)` | `border`, `border-bottom`, `border-left`, `border-right`, `border-top`, `box-shadow` |
| `--c-table-border-radius` | `var(--c-border-radius-md)` | `border-radius`, `border-top-left-radius`, `border-top-right-radius` |
| `--c-table-border-style` | `solid` | `border`, `border-bottom`, `border-left`, `border-right`, `border-top` |
| `--c-table-border-width` | `var(--c-border-width-1)` | `border`, `border-bottom`, `border-left`, `border-right`, `border-top`, `bottom`, `box-shadow`, `margin` |
| `--c-table-column-handle-right` | `-4px` | `inset-inline-end` |
| `--c-table-column-handle-width` | `8px` | `width` |
| `--c-table-column-insert-empty-font-size` | `14px` | `font-size` |
| `--c-table-column-insert-empty-line-height` | `22px` | `line-height` |
| `--c-table-column-insert-empty-text-color` | `var(--c-color-text-3)` | `color` |
| `--c-table-column-insert-group-margin-top` | `16px` | `margin-top` |
| `--c-table-column-insert-group-title-font-size` | `12px` | `font-size` |
| `--c-table-column-insert-group-title-line-height` | `20px` | `line-height` |
| `--c-table-column-insert-group-title-margin-bottom` | `8px` | `margin-bottom` |
| `--c-table-column-insert-group-title-text-color` | `var(--c-color-text-3)` | `color` |
| `--c-table-column-insert-item-min-height` | `32px` | `min-height` |
| `--c-table-column-insert-max-height` | `calc(100vh - 160px)` | `max-height` |
| `--c-table-column-insert-padding` | `16px 20px` | `padding` |
| `--c-table-drag-handle-col-width` | `40px` | `max-width`, `min-width`, `width` |
| `--c-table-editable-body-cell-border-color` | `var(--c-color-white)` | `border` |
| `--c-table-empty-height` | `240px` | `height` |
| `--c-table-empty-image-size` | `48px` | `font-size`, `height`, `width` |
| `--c-table-expand-button-border-radius` | `2px` | `border-radius` |
| `--c-table-expand-button-font-size` | `12px` | `font-size` |
| `--c-table-expand-button-margin-right` | `var(--c-spacing-2)` | `margin-inline-end` |
| `--c-table-expand-button-size` | `14px` | `height`, `line-height`, `width` |
| `--c-table-expand-content-bg` | `var(--c-color-fill-1)` | `background-color` |
| `--c-table-expand-content-hover-bg` | `var(--c-color-fill-1)` | `background-color` |
| `--c-table-expand-icon-bg` | `var(--c-color-neutral-3)` | `background-color` |
| `--c-table-expand-icon-border-color` | `transparent` | `border` |
| `--c-table-expand-icon-border-width` | `var(--c-border-width-1)` | `border` |
| `--c-table-expand-icon-col-width` | `40px` | `max-width`, `min-width`, `width` |
| `--c-table-expand-icon-color` | `var(--c-color-text-2)` | `color` |
| `--c-table-expand-icon-hover-bg` | `var(--c-color-neutral-4)` | `background-color` |
| `--c-table-expand-icon-hover-border-color` | `transparent` | `border-color` |
| `--c-table-expand-icon-hover-color` | `var(--c-color-text-1)` | `color` |
| `--c-table-expand-loading-icon-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-table-extra-column-icon-color` | `var(--c-color-text-2)` | `color` |
| `--c-table-extra-column-icon-hover-color` | `var(--c-color-text-1)` | `color` |
| `--c-table-filters-bottom-gap` | `8px` | `margin-inline-end` |
| `--c-table-filters-bottom-height` | `38px` | `height` |
| `--c-table-filters-bottom-line-height` | `38px` | `line-height` |
| `--c-table-filters-bottom-padding` | `0 12px` | `padding` |
| `--c-table-filters-icon-font-size` | `16px` | `font-size` |
| `--c-table-filters-icon-hover-bg` | `var(--c-color-fill-4)` | `background` |
| `--c-table-filters-item-font-size` | `14px` | `font-size` |
| `--c-table-filters-item-height` | `32px` | `height` |
| `--c-table-filters-item-line-height` | `32px` | `line-height` |
| `--c-table-filters-item-padding` | `0 12px` | `padding` |
| `--c-table-filters-list-padding` | `4px 0` | `padding` |
| `--c-table-filters-popup-bg` | `var(--c-color-bg-5)` | `background` |
| `--c-table-filters-popup-border-color` | `var(--c-color-neutral-3)` | `border` |
| `--c-table-filters-popup-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-table-filters-popup-box-shadow` | `var(--c-shadow1-down)` | `box-shadow` |
| `--c-table-filters-popup-max-height` | `200px` | `max-height` |
| `--c-table-filters-popup-min-width` | `100px` | `min-width` |
| `--c-table-filters-text-height` | `34px` | `height` |
| `--c-table-filters-text-line-height` | `32px` | `line-height` |
| `--c-table-filters-text-max-width` | `160px` | `max-width` |
| `--c-table-filters-text-padding-left` | `10px` | `padding-inline-start` |
| `--c-table-filters-width` | `24px` | `width` |
| `--c-table-header-cell-action-color` | `var(--c-color-text-3)` | `color` |
| `--c-table-header-cell-action-hover-color` | `var(--c-color-text-1)` | `color` |
| `--c-table-header-cell-action-margin-left` | `2px` | `margin-inline-start` |
| `--c-table-header-cell-bg` | `var(--c-color-neutral-2)` | `background`, `background-color` |
| `--c-table-header-cell-text-color` | `rgb(var(--c-gray-10))` | `color` |
| `--c-table-header-filters-icon-active-color` | `var(--c-sys-color-action-primary)` | `color` |
| `--c-table-header-filters-icon-color` | `var(--c-color-text-2)` | `color` |
| `--c-table-header-filters-icon-hover-bg` | `var(--c-color-neutral-4)` | `background-color` |
| `--c-table-header-sorted-cell-bg` | `var(--c-color-neutral-3)` | `background-color` |
| `--c-table-header-sorted-cell-hover-bg` | `rgba(var(--c-gray-4), 0.5)` | `background-color` |
| `--c-table-header-sorter-icon-active-color` | `var(--c-sys-color-action-primary)` | `color` |
| `--c-table-header-sorter-icon-color` | `var(--c-color-neutral-5)` | `color` |
| `--c-table-header-sorter-icon-down-top` | `-3px` | `top` |
| `--c-table-header-sorter-icon-font-size` | `12px` | `font-size` |
| `--c-table-header-sorter-icon-height` | `8px` | `height`, `line-height` |
| `--c-table-header-sorter-icon-left` | `1px` | `left` |
| `--c-table-header-sorter-icon-margin-left` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-table-header-sorter-icon-next-color` | `var(--c-color-neutral-6)` | `color` |
| `--c-table-header-sorter-icon-up-top` | `-2px` | `top` |
| `--c-table-header-sorter-icon-width` | `14px` | `width` |
| `--c-table-header-text-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-table-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-table-pagination-margin` | `var(--c-spacing-6)` | `margin-bottom`, `margin-top` |
| `--c-table-pagination-sticky-bg` | `var(--c-color-bg-1)` | `background`, `background-color` |
| `--c-table-pagination-sticky-padding` | `12px 0` | `padding` |
| `--c-table-resizing-border-color` | `var(--c-sys-color-action-primary)` | `border-right-color` |
| `--c-table-selection-col-width` | `40px` | `max-width`, `min-width`, `width` |
| `--c-table-shadow-left` | `inset 6px 0 8px -3px rgba(0, 0, 0, 0.15)` | `box-shadow` |
| `--c-table-shadow-right` | `inset -6px 0 8px -3px rgba(0, 0, 0, 0.15)` | `box-shadow` |
| `--c-table-shadow-wrapper-width` | `10px` | `width` |
| `--c-table-size-lg-extra-icon-font-size` | `16px` | `font-size` |
| `--c-table-size-lg-extra-padding-horizontal` | `var(--c-spacing-2)` | `padding` |
| `--c-table-size-lg-font-size` | `var(--c-table-size-md-font-size)` | `font-size` |
| `--c-table-size-lg-header-font-size` | `var(--c-table-size-md-header-font-size)` | `font-size` |
| `--c-table-size-lg-padding-horizontal` | `var(--c-table-size-md-padding-horizontal)` | `margin`, `padding` |
| `--c-table-size-lg-padding-vertical` | `var(--c-table-size-md-padding-vertical)` | `margin`, `padding`, `padding-block` |
| `--c-table-size-md-extra-icon-font-size` | `16px` | `font-size` |
| `--c-table-size-md-extra-padding-horizontal` | `var(--c-spacing-2)` | `padding` |
| `--c-table-size-md-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-table-size-md-header-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-table-size-md-padding-horizontal` | `var(--c-spacing-7)` | `margin`, `padding` |
| `--c-table-size-md-padding-vertical` | `9px` | `margin`, `padding`, `padding-block` |
| `--c-table-size-sm-extra-icon-font-size` | `14px` | `font-size` |
| `--c-table-size-sm-extra-padding-horizontal` | `var(--c-spacing-1)` | `padding` |
| `--c-table-size-sm-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-table-size-sm-header-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-table-size-sm-padding-horizontal` | `var(--c-spacing-7)` | `margin`, `padding` |
| `--c-table-size-sm-padding-vertical` | `5px` | `margin`, `padding`, `padding-block` |
| `--c-table-size-xs-extra-icon-font-size` | `14px` | `font-size` |
| `--c-table-size-xs-extra-padding-horizontal` | `var(--c-spacing-1)` | `padding` |
| `--c-table-size-xs-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-table-size-xs-header-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-table-size-xs-padding-horizontal` | `var(--c-spacing-7)` | `margin`, `padding` |
| `--c-table-size-xs-padding-vertical` | `2px` | `margin`, `padding`, `padding-block` |
| `--c-table-sticky-scrollbar-height` | `16px` | `height` |
| `--c-table-sticky-scrollbar-opacity` | `0.8` | `opacity` |
| `--c-table-tfoot-bg` | `var(--c-color-neutral-2)` | `background-color` |
| `--c-table-th-actions-margin-left` | `8px` | `margin-inline-start` |
| `--c-table-transition-duration` | `var(--c-transition-duration-1)` | `transition` |
| `--c-table-transition-timing-function` | `var(--c-transition-timing-function-linear)` | `transition` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-table-body-cell-text-color: rgb(var(--c-gray-10));
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
