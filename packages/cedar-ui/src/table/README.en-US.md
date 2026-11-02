---
lang: en-US
permalink: /en/components/table/
---

# Table

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

### Manual loading

Boolean/object loading applies to both data and native-slot modes. Object options require `loading: true`. Rows and drafts remain mounted; notifications do not manage loading.

<demo src="./__demos__/loading.vue"></demo>

### Empty State

- `columns`: Column info of the table
- `data`: Table data
- `pagination`: Pagination properties configuration

<demo src="./__demos__/empty-state.vue"></demo>

## Column widths, layout and fixed columns

### Column width scenarios

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `columns` | Column info of the table | Column width scenarios, Fixed columns, Grouped headers with fixed columns |
| `data` | Table data | Column width scenarios, Fixed columns, Grouped headers with fixed columns |
| `pagination` | Pagination properties configuration | Column width scenarios, Layout, sizing and column resizing |
| `bordered` | Whether to show border | Grouped headers with fixed columns, Layout, sizing and column resizing |
| `sticky-pagination` | Sticky pagination relative to the page/outer scroller; numeric values are bottom offsets in px | Column width scenarios |
| `row-selection` | Table row selector configuration | Column width scenarios |
<!-- demo-config-notes:end -->


Container width and column width are separate settings. Use `style="width: 100%"` or `style="width: 480px"` for the container, and `columns[].width` / `minWidth` for individual columns. No `scroll.x` or `scroll.y` configuration is required.

Compare seven combinations and switch between 100%, 480px and 360px to observe recalculation and horizontal overflow.

| Configuration | Distribution with default `table-layout="fixed"`, `fit=true` |
| --- | --- |
| No column width | Each column starts at 80px and shares remaining space proportionally |
| `minWidth` | Base width of a flexible column; overflow preserves this width |
| `width` plus flexible columns | Explicit widths remain exact; flexible columns share remaining space in proportion to their base widths |
| Every column has `width` | Preserve widths on overflow; proportionally enlarge ordinary data columns when they do not fill the container |
| `fit=false` | Still fill the container; distribute remaining space proportionally across ordinary data columns |
| Selection / extra columns | Preserve selection operation width; exclude the extra column from proportional expansion |

Flexible columns have no explicit `width`. `minWidth` does not turn an explicit-width column into a flexible column. These distribution rules apply to `fixed` layout.

<demo src="./__demos__/column-width-scenarios.vue"></demo>

### Fixed columns

Set `fixed: 'left'` or `fixed: 'right'` on a column. Explicit widths are recommended. Horizontal overflow is detected automatically.

<demo src="./__demos__/fixed.vue"></demo>

### Grouped headers with fixed columns

Configure fixed positions on leaf columns. Mark a whole group as fixed only when all its leaf columns belong to the same fixed side.

<demo src="./__demos__/columns-children-and-fixed.vue"></demo>

### Layout, sizing and column resizing

Compare the same columns by switching layout, fit, grouped headers, resizing and container width in one table.

| Configuration | Behavior |
| --- | --- |
| `table-layout="fixed"` (default) | Computed widths are written to `<col>`; long content does not stretch columns arbitrarily |
| `table-layout="auto"` | The browser allocates actual widths based on content; fixed-column offsets use measured widths |
| `column-resizable` | Resize handles appear only in `fixed` layout; resized widths participate in recalculation |
| `max-height` or column `ellipsis` | Force `fixed` layout |

An explicit `width` stays exact with flexible columns and `fit=true`. If every column has a width, or `fit=false`, proportional expansion still fills the container.

<demo src="./__demos__/en-US/column-sizing-playground.vue"></demo>

### Automatic scrolling and height

Horizontal overflow follows computed total column width and available container width. Use `height` for a fixed body height or `max-height` for a shrinking body that scrolls when needed. Without either constraint, the page or outer container owns vertical scrolling. Sticky positioning is controlled separately by `sticky-header` / `sticky-pagination`. With horizontal overflow and sticky pagination enabled, hovering over Table or focusing inside Table reveals the synchronized bottom scrollbar.

See the next group for height, header and pagination combinations.

## Headers and column structure

### Columns Children

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `columns` | Column info of the table | Columns Children, Ellipsis And Tooltip, Span Method |
| `data` | Table data | Columns Children, Ellipsis And Tooltip, Span Method |
| `bordered` | Whether to show border | Columns Children, Span Method |
| `span-method` | Cell merge method (The index starts counting from the data item) | Span Method |
| `row-selection` | Table row selector configuration | Span Method |
| `span-all` | Whether to make the index of the span method contain all | Span Method |
<!-- demo-config-notes:end -->


- `columns`: Column info of the table
- `data`: Table data
- `bordered`: Whether to show the border

<demo src="./__demos__/columns-children.vue"></demo>

### Ellipsis And Tooltip

- `columns`: Column info of the table
- `data`: Table data

<demo src="./__demos__/ellipsis-and-tooltip.vue"></demo>

### Span Method

- `columns`: Column info of the table
- `data`: Table data
- `span-method`: Cell merge method (The index starts counting from the data item)
- `bordered`: Whether to show the border

<demo src="./__demos__/span-method.vue"></demo>

### Summary

- `columns`: Column info of the table
- `data`: Table data
- `summary`: Show footer summary row
- `summary-span-method`: Cell Merge Method for Summarizing Rows

<demo src="./__demos__/summary.vue"></demo>

## Scrolling and sticky positioning

### Scroll

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `columns` | Column info of the table | Scroll, Fluid Height, Fixed Column And Header |
| `data` | Table data | Scroll, Fluid Height, Fixed Column And Header |
| `pagination` | Pagination properties configuration | Scroll, Fluid Height, Fixed Column And Header |
| `height` | Table height; fixes the header and scrolls the body. Numbers are px | Scroll, Fixed Column And Header |
| `sticky-header` | Sticky header relative to the page/outer scroller; numeric values are top offsets in px | Sticky Header, Sticky header, pagination and horizontal scrolling |
| `sticky-pagination` | Sticky pagination relative to the page/outer scroller; numeric values are bottom offsets in px | Sticky Panation, Sticky header, pagination and horizontal scrolling |
<!-- demo-config-notes:end -->


- `columns`: Column info of the table
- `data`: Table data
- `height`: Table height. Fixes the header and scrolls the body when set. Number values are in px
- `pagination`: Pagination properties configuration

<demo src="./__demos__/scroll.vue"></demo>

### Fluid Height

- `columns`: Column info of the table
- `data`: Table data
- `max-height`: Table max height. Table shrinks when content is short; body scrolls when exceeded. Number values are in px
- `pagination`: Pagination properties configuration

<demo src="./__demos__/fluid-height.vue"></demo>

### Fixed Column And Header

- `columns`: Column info of the table
- `data`: Table data
- `height`: Table height. Fixes the header and scrolls the body when set. Number values are in px
- `pagination`: Pagination properties configuration

<demo src="./__demos__/fixed-column-and-header.vue"></demo>

### Sticky Header

- `columns`: Column info of the table
- `data`: Table data
- `sticky-header`: Sticky header relative to the page/outer scroll container (not table body scroll). Number is top offset in px
- `pagination`: Pagination properties configuration

<demo src="./__demos__/sticky-header.vue"></demo>

### Sticky Panation

- `columns`: Column info of the table
- `data`: Table data
- `sticky-pagination`: Sticky pagination relative to the page/outer scroll container. Number is bottom offset in px
- `pagination`: Pagination properties configuration

<demo src="./__demos__/sticky-panation.vue"></demo>

### Sticky header, pagination and horizontal scrolling

<demo src="./__demos__/en-US/sticky-layout.vue"></demo>

sticky-header and sticky-pagination follow the page or outer scroll container. A numeric zero enables the feature with zero offset. This differs from using height/max-height to constrain internal body scrolling. Avoid an extra overflow:hidden ancestor that interrupts sticky positioning.

Built-in sticky pagination keeps a synchronized horizontal rail above the pagination in the same sticky footer. The rail follows body scroll in both directions, and is omitted when content fits. Pagination no longer obscures the only reachable horizontal scroll control.

| Property | Behavior |
| --- | --- |
| pagination=true | Built-in pagination with its defaults |
| pagination={ pageSize, total, ... } | Configure built-in pagination; total does not fetch server data |
| pagination=false | No built-in pagination UI or slicing; the caller owns the current-page rows |
| sticky-header=true or number | Stick the header; a number sets its top offset |
| sticky-pagination=true or number | Stick the pagination and horizontal rail; a number sets its bottom offset |
| style="width: 100%" | Set the table container width; column widths determine horizontal overflow automatically |

For external pagination, pass pagination=false and render a separate Pagination component. Slice local data before passing it to Table, or request a server page. The business layout owns positioning and scrollbar clearance in that mode. The example switches between built-in sticky pagination and this fully external mode.

### Replace pagination content inside the managed footer

The pagination slot receives { page, pageSize, total, onChange, onPageSizeChange }. Render a business pagination component there to replace the built-in widget while Table keeps data slicing and the scrollbar-above-pagination layout. Keep this content in normal flow inside the footer. pagination=false instead disables the entire built-in pagination protocol.

`--c-table-sticky-scrollbar-height` sets the minimum horizontal rail height (16px by default); intrinsic sizing also reserves the native scrollbar height.

### Mount pagination externally

`pagination.container` accepts a CSS selector or HTMLElement. Omitting it keeps the footer inside Table. Only placement changes: page state, slicing, events and the sticky horizontal rail remain managed by Table. No slot or separate pager state is required. Keep the host in the same scroll context and use display: contents when needed. The target must exist; Vue 3.5 defer supports targets created in the same render batch. SSR hosts must handle Teleport output. pagination=false still disables Table pagination and slicing entirely.

```vue
<c-table
  :data="rows" :columns="columns"
  :sticky-header="0" :sticky-pagination="0"
  :pagination="{ pageSize: 10, total: 500, container: '#table-pagination' }"
/>
<div id="table-pagination" style="display: contents" />
```

The sticky layout demo provides an outer scrolling container. Table itself has no height/max-height or vertical scroll limit. Toggle page scrolling, custom pagination, and an external footer host. The Table-owned footer groups the synchronized horizontal scrollbar and the pagination slot, and moves them together when pagination.container is set. The external host must remain in the intended scrolling/layout boundary; arbitrary destinations do not remove CSS sticky constraints.

Sticky pagination suppresses the internal horizontal thumb/native scrollbar and reuses the shared Scrollbar in embed mode above the footer. It appears while the pointer is over Table or keyboard focus is inside Table, including when the footer is mounted externally; dragging, track clicks and trackpad scrolling remain synchronized. Vertical scrolling remains owned by the demo container unless Table height/max-height is explicitly set.

## Selection and data interaction

### Row Selection

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `columns` | Column info of the table | Row Selection, Row Selection Single, Expandable |
| `data` | Table data | Row Selection, Row Selection Single, Expandable |
| `row-selection` | Table row selector configuration | Row Selection, Row Selection Single, Tree Children |
| `draggable` | Table drag and drop sorting configuration | Droppable Table, Droppable Anchor |
| `selected-keys` | Selected row (controlled mode) takes precedence over `rowSelection` | Row Selection |
| `pagination` | Pagination properties configuration | Row Selection |
<!-- demo-config-notes:end -->


- `selected-keys`: Selected row (controlled mode) takes precedence over `rowSelection`
- `columns`: Column info of the table
- `data`: Table data
- `pagination`: Pagination properties configuration

<demo src="./__demos__/row-selection.vue"></demo>

### Row Selection Single

- `columns`: Column info of the table
- `data`: Table data
- `row-selection`: Table row selector configuration

<demo src="./__demos__/row-selection-single.vue"></demo>

### Expandable

- `columns`: Column info of the table
- `data`: Table data
- `expandable`: Expand row configuration of the table

<demo src="./__demos__/expandable.vue"></demo>

### Tree Children

- `columns`: Column info of the table
- `data`: Table data
- `expanded-keys`: Displayed Expanded Row, Subtree (Controlled Mode) takes precedence over `expandable`
- `row-selection`: Table row selector configuration

<demo src="./__demos__/tree-children.vue"></demo>

### Sort And Filter

- `columns`: Column info of the table
- `data`: Table data
- `filter-icon-align-left`: Whether the filter icon is aligned to the left

<demo src="./__demos__/sort-and-filter.vue"></demo>

### Droppable Table

- `columns`: Column info of the table
- `data`: Table data
- `draggable`: Table drag and drop sorting configuration

<demo src="./__demos__/droppable-table.vue"></demo>

### Droppable Anchor

- `columns`: Column info of the table
- `data`: Table data
- `draggable`: Table drag and drop sorting configuration

<demo src="./__demos__/droppable-anchor.vue"></demo>

### Editable Form

- `columns`: Column info of the table
- `data`: Table data

<demo src="./__demos__/editable-form.vue"></demo>

## Column management and rendering

### Column Manager Basic

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `columns` | Column info of the table | Column Manager Basic, Custom Filter, Custom Rendering |
| `data` | Table data | Column Manager Basic, Custom Filter, Custom Rendering |
| `pagination` | Pagination properties configuration | Column Manager Basic |
| `size` | The size of the table | Column Manager Basic |
| `row-class` | Class for table-row elements | Customize Table Elements |
<!-- demo-config-notes:end -->


- `columns`: Column info of the table
- `data`: Table data
- `pagination`: Pagination properties configuration
- `size`: The size of the table

<demo src="./__demos__/column-manager-basic.vue"></demo>

<demo src="./__demos__/custom-table-columns.vue"></demo>

### Custom Filter

- `columns`: Column info of the table
- `data`: Table data

<demo src="./__demos__/custom-filter.vue"></demo>

### Custom Rendering

- `columns`: Column info of the table
- `data`: Table data

<demo src="./__demos__/custom-rendering.vue"></demo>

### Customize Table Elements

- `columns`: Column info of the table
- `data`: Table data
- `row-class`: The class name of the table row element. The `2.34.0` version adds support for function values.

<demo src="./__demos__/customize-table-elements.vue"></demo>

## Async and large datasets

### Load More

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `columns` | Column info of the table | Load More, Column Manager Async, Virtual List Props |
| `data` | Table data | Load More, Column Manager Async, Virtual List Props |
| `pagination` | Pagination properties configuration | Column Manager Async, Virtual List Props |
| `load-more` | Load children asynchronously; call done(children), or done() to allow retry | Load More |
| `size` | The size of the table | Column Manager Async |
| `row-selection` | Table row selector configuration | Virtual List Props |
<!-- demo-config-notes:end -->


- `columns`: Column info of the table
- `data`: Table data
- `load-more`: Data lazy loading function, open the lazy loading function when it is passed in

<demo src="./__demos__/load-more.vue"></demo>

### Column Manager Async

- `columns`: Column info of the table
- `data`: Table data
- `pagination`: Pagination properties configuration
- `size`: The size of the table

<demo src="./__demos__/column-manager-async.vue"></demo>

### Virtual List Props

- `columns`: Column info of the table
- `data`: Table data
- `row-selection`: Table row selector configuration
- `virtual-list-props`: Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)

<demo src="./__demos__/virtual-list-props.vue"></demo>

## Business workflows

### Typed Config

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `columns` | Column info of the table | Task Workbench, Form Attribute |
| `data` | Table data | Task Workbench, Form Attribute |
| `pagination` | Pagination properties configuration | Task Workbench |
| `bordered` | Whether to show border | Form Attribute |
| `hoverable` | Whether to show the hover effect | Form Attribute |
| `stripe` | Whether to enable the stripe effect | Form Attribute |
<!-- demo-config-notes:end -->


<demo src="./__demos__/typed-config.vue"></demo>

### Task Workbench

- `columns`: Column info of the table
- `data`: Table data
- `pagination`: Pagination properties configuration

<demo src="./__demos__/task-workbench.vue"></demo>

### Form Attribute

- `columns`: Column info of the table
- `data`: Table data
- `bordered`: Whether to show the border
- `hoverable`: Whether to show the hover effect

<demo src="./__demos__/form-attribute.vue"></demo>

## API

### `<Table>` Props

| Parameter | Description | Type | Default |
| --------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------: |
| columns | Column info of the table | `TableColumnData[]` | `[]` |
| data | Table data | `TableData[]` | `[]` |
| bordered | Whether to show border | `boolean \| TableBorder` | `true` |
| hoverable | Whether to show the hover effect | `boolean` | `true` |
| stripe | Whether to enable the stripe effect | `boolean` | `false` |
| size | The size of the table | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| table-layout | Table layout algorithm, matching CSS `table-layout`. Defaults to `fixed`; calculated column widths are not expanded by content | `'fixed' \| 'auto'` | `'fixed'` |
| loading | Loading state | `boolean\|object` | `false` |
| row-selection | Table row selector configuration | `TableRowSelection` | `-` |
| expandable | Expand row configuration of the table | `TableExpandable` | `-` |
| height | Table height; fixes the header and scrolls the body. Numbers are px | `number \| string` | `-` |
| max-height | Maximum table height; shrinks for short content and scrolls the body on overflow. Numbers are px | `number \| string` | `-` |
| fit | Remaining-space allocation; the table always fills at least its parent `width`. `true` assigns it to flexible columns without `width`; `false` expands columns proportionally to their base widths | `boolean` | `true` |
| pagination | Pagination properties configuration | `boolean \| TablePaginationConfig` | `true` |
| page-position | Pagination region inside the table, currently tl/top/tr/bl/bottom/br; not the page-size dropdown placement | `'tl' \| 'top' \| tr' \| 'bl' \| 'bottom' \| 'br'` | `'br'` |
| indent-size | The indentation distance of the tree table | `number` | `16` |
| row-key | Value field of table row `key` | `string` | `'key'` |
| show-header | Whether to show the header | `boolean` | `true` |
| virtual-list-props | Virtual-list props; providing them enables virtual scrolling. See VirtualListProps | `VirtualListProps` | `-` |
| span-method | Cell merge method (The index starts counting from the data item) | `(data: {  record: TableData;  column: TableColumnData \| TableOperationColumn;  rowIndex: number;  columnIndex: number;}) => { rowspan?: number; colspan?: number } \| void` | `-` |
| span-all | Whether to make the index of the span method contain all | `boolean` | `false` |
| load-more | Load children asynchronously; call done(children), or done() to allow retry | `(record: TableData, done: (children?: TableData[]) => void) => void` | `-` |
| filter-icon-align-left | Whether the filter icon is aligned to the left | `boolean` | `false` |
| hide-expand-button-on-empty | Whether to hide expand button when subtree is empty | `boolean` | `false` |
| row-class | Class for table-row elements | `string\| any[]\| Record<string, any>\| ((record: TableData, rowIndex: number) => any)` | `-` |
| draggable | Table drag and drop sorting configuration | `TableDraggable` | `-` |
| column-resizable | Whether columns can be resized; drag handles render only under `table-layout: fixed` | `boolean` | `false` |
| summary | Show footer summary row | `boolean\| ((params: {    columns: TableColumnData[];    data: TableData[];  }) => TableData[])` | `-` |
| summary-text | The first column of text in the summary line | `string` | `'Summary'` |
| summary-span-method | Cell Merge Method for Summarizing Rows | `(data: {  record: TableData;  column: TableColumnData \| TableOperationColumn;  rowIndex: number;  columnIndex: number;}) => { rowspan?: number; colspan?: number } \| void` | `-` |
| selected-keys | Selected row (controlled mode) takes precedence over `rowSelection` | `(string \| number)[]` | `-` |
| default-selected-keys | The selected row by default (uncontrolled mode) takes precedence over `rowSelection` | `(string \| number)[]` | `-` |
| expanded-keys | Displayed Expanded Row, Subtree (Controlled Mode) takes precedence over `expandable` | `(string \| number)[]` | `-` |
| default-expanded-keys | Expand row, Subtree displayed by default (Uncontrolled mode) takes precedence over `expandable` | `(string \| number)[]` | `-` |
| default-expand-all-rows | Whether to expand all rows by default | `boolean` | `false` |
| sticky-header | Sticky header relative to the page/outer scroller; numeric values are top offsets in px | `boolean \| number` | `false` |
| sticky-pagination | Sticky pagination relative to the page/outer scroller; numeric values are bottom offsets in px | `boolean \| number` | `false` |
| scrollbar | Whether to enable virtual scroll bar | `boolean \| ScrollbarProps` | `true` |
| show-empty-tree | Whether to display empty subtrees | `boolean` | `false` |
| extra-column | Append an extra final column, e.g. settings; slots supply its content | `boolean \| TableExtraColumnConfig` | `false` |
| empty-type | Empty-state type | <br/>`default`\|`network`\|`unknown`\|`success` <br/> <br/> | `default` |
| empty-text | Empty-state text | <br/>`string` <br/> <br/> | `-` |

### `<Table>` Events

| Event | Description | Arguments |
| ---------------- | ------------------------------ | ---------------------------------------------------------------------------------- |
| expand | Emitted when an expandable row is clicked | rowKey: `string \| number`<br>record: `TableData` |
| expanded-change | Emitted when expanded rows change | rowKeys: `(string \| number)[]` |
| select | Emitted when a row selector is clicked | rowKeys: `string \| number[]`<br>rowKey: `string \| number`<br>record: `TableData` |
| select-all | Emitted when the select-all control is clicked | checked: `boolean` |
| selection-change | Emitted when selected rows change | rowKeys: `(string \| number)[]` |
| sorter-change | Emitted when sorting changes | dataIndex: `string`<br>direction: `string` |
| filter-change | Emitted when filtering changes | dataIndex: `string`<br>filteredValues: `string[]` |
| page-change | Emitted when table page changes | page: `number` |
| page-size-change | Emitted when table page size changes | pageSize: `number` |
| change | Emitted when table data changes | data: `TableData[]`<br>extra: `TableChangeExtra`<br>currentData: `TableData[]` |
| update:columns | Emitted when column configuration changes; supports v-model:columns | columns: `TableColumnData[]` |
| cell-mouse-enter | Emitted on cell hover enter | record: `TableData`<br>column: `TableColumnData`<br>ev: `Event` |
| cell-mouse-leave | Emitted on cell hover leave | record: `TableData`<br>column: `TableColumnData`<br>ev: `Event` |
| cell-click | Emitted when a cell is clicked | record: `TableData`<br>column: `TableColumnData`<br>ev: `Event` |
| row-click | Emitted when a row is clicked | record: `TableData`<br>ev: `Event` |
| header-click | Emitted when a header is clicked | column: `TableColumnData`<br>ev: `Event` |
| column-resize | Emitted when a column is resized | dataIndex: `string`<br>width: `number` |
| row-dblclick | Emitted when a row is double-clicked | record: `TableData`<br>ev: `Event` |
| cell-dblclick | Emitted when a cell is double-clicked | record: `TableData`<br>column: `TableColumnData`<br>ev: `Event` |
| row-contextmenu | Emitted when a row is right-clicked | record: `TableData`<br>ev: `Event` |
| cell-contextmenu | Emitted when a cell is right-clicked | record: `TableData`column: `TableColumnData`<br>ev: `Event` |

### `<Table>` Methods

| Method | Description | Arguments | Returns |
| ------------ | ---------------- | ------------------------------------------------------------------------ | ------ |
| selectAll | Set select-all state | checked: `boolean` | - |
| select | Set row-selection state | rowKey: `string \| number \| (string \| number)[]`<br>checked: `boolean` | - |
| expandAll | Set all rows’ expansion state | checked: `boolean` | - |
| expand | Set expansion state | rowKey: `string \| number \| (string \| number)[]`<br>checked: `boolean` | - |
| resetFilters | Reset column filters | dataIndex: `string \| string[]` | - |
| clearFilters | Clear column filters | dataIndex: `string \| string[]` | - |
| resetSorters | Reset column sorting | - | - |
| clearSorters | Clear column sorting | - | - |

### `<Table>` Slots

| Slot | Description | Arguments |
| ---------------- | :-----------------------------------: | ---------------------------------------------------------------------- |
| th | Custom th element | column: `TableColumnData` |
| thead | Custom thead element | - |
| empty | Empty content | - |
| summary-cell | Summary row | column: `TableColumnData`<br>record: `TableData`<br>rowIndex: `number` |
| pagination-right | Content to the right of pagination | - |
| pagination-left | Content to the left of pagination | - |
| td | Custom td element | column: `TableColumnData`<br>record: `TableData`<br>rowIndex: `number` |
| tr | Custom tr element | record: `TableData`<br>rowIndex: `number` |
| tbody | Custom tbody element | - |
| drag-handle-icon | Drag-anchor icon | - |
| footer | Table footer | - |
| expand-row | Expanded-row content | record: `TableData` |
| expand-icon | Expanded-row icon | expanded: `boolean`<br>record: `TableData` |
| columns | Declarative columns; when used, override columns | - |
| extra-column-header | Extra final-column header content | - |
| extra-column-cell | Extra final-column cell content | record / rowIndex, etc. |
| header-cell-actions | Header-side actions for leaf columns; entirely controlled by the caller | column / dataIndex |

### `<TableColumn>` Props

| Parameter | Description | Type | Default |
| ------------------ | ----------------------------------- | --------------------------------------------------------- | :-----: |
| data-index | Column identifier matching a TableData field | `string` | `-` |
| title | Column title | `string` | `-` |
| width | Column width | `number` | `-` |
| min-width | Minimum column width | `number` | `80` |
| align | Alignment | `TableColumnData['align']` | `-` |
| fixed | Fixed position | `TableColumnData['fixed']` | `-` |
| ellipsis | Whether to truncate with an ellipsis | `boolean` | `false` |
| sortable | Sorting options | `TableSortable` | `-` |
| filterable | Filtering options | `TableFilterable` | `-` |
| cell-class | Custom cell class | `ClassName` | `-` |
| header-cell-class | Custom header-cell class | `ClassName` | `-` |
| body-cell-class | Custom body-cell class | `ClassName \| ((record: TableData) => ClassName)` | `-` |
| summary-cell-class | Custom summary-cell class | `ClassName \| ((record: TableData) => ClassName)` | `-` |
| cell-style | Custom cell style | `CSSProperties` | `-` |
| header-cell-style | Custom header-cell style | `CSSProperties` | `-` |
| body-cell-style | Custom body-cell style | `CSSProperties \| ((record: TableData) => CSSProperties)` | `-` |
| summary-cell-style | Custom summary-cell style | `CSSProperties \| ((record: TableData) => CSSProperties)` | `-` |
| index | Manually specify the option index | `number` | `-` |
| tooltip | Whether to show a text tooltip when truncated | `boolean\|object` | `false` |

### `<TableColumn>` Slots

| Slot | Description | Arguments |
| -------------- | :------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter-icon | Filter-button icon | - |
| filter-content | Custom filter-popup content | filterValue: `string[]`<br>setFilterValue: `(filterValue: string[]) => void`<br>handleFilterConfirm: `(event: Event) => void`<br>handleFilterReset: `(event: Event) => void` |
| title | Title | - |
| cell | Cell | record: `TableData`<br>column: `TableColumnData`<br>rowIndex: `number` |

### TableData

| Parameter | Description | Type | Default |
| -------- | ---------------- | -------------------------- | :-----: |
| key | Row key | `string` | `-` |
| expand | Expanded-row content | `string \| RenderFunction` | `-` |
| children | Child data | `TableData[]` | `-` |
| disabled | Whether row selection is disabled | `boolean` | `false` |
| isLeaf | Whether this is a leaf node | `boolean` | `false` |

### TableSortable

| Parameter | Description | Type | Default |
| ---------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | :----: |
| sortDirections | Supported sort directions | `('ascend' \| 'descend')[]` | `-` |
| sorter | Sort comparator; `true` disables internal sorting | `((        a: TableData,        b: TableData,        extra: { dataIndex: string; direction: 'ascend' \| 'descend' }      ) => number)    \| boolean` | `-` |
| sortOrder | Sort direction | `'ascend' \| 'descend' \| ''` | `-` |
| defaultSortOrder | Default sort direction in uncontrolled mode | `'ascend' \| 'descend' \| ''` | `-` |

### TableFilterData

| Parameter | Description | Type | Default |
| ------ | ------------------ | -------------------------- | :----: |
| text | Filter-option content | `string \| RenderFunction` | `-` |
| value | Filter-option value | `string` | `-` |

### TableFilterable

| Parameter | Description | Type | Default |
| -------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: |
| filters | Filter data | `TableFilterData[]` | `-` |
| filter | Filter callback, similar to Array.prototype.filter | `(filteredValue: string[], <br/>record:TableData)=> boolean` | `-` |
| multiple | Whether to support multiple selection | `boolean` | `false` |
| filteredValue | Selected filters | `string[]` | `-` |
| defaultFilteredValue | Default selected filters | `string[]` | `-` |
| renderContent | Filter-popup content | `(data: {    filterValue: string[];    setFilterValue: (filterValue: string[]) => void;    handleFilterConfirm: (event: Event) => void;    handleFilterReset: (event: Event) => void;  }) => VNodeChild` | `-` |
| icon | Filter-button icon | `RenderFunction` | `-` |
| triggerProps | Filter-popup configuration | `TriggerProps` | `-` |
| alignLeft | Whether the filter icon is aligned to the left | `boolean` | `false` |

### TableColumnData

| Parameter | Description | Type | Default |
| ---------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | :-----: |
| dataIndex | Column identifier matching data in `TableData` | `string` | `-` |
| title | Column title | `string \| RenderFunction` | `-` |
| width | Base column width. Fixed when flexible columns exist and fit=true; if all columns are fixed and narrower than the container, expanded proportionally | `number` | `-` |
| minWidth | Minimum `width`. Columns without `width` share remaining space proportionally. Default 80 | `number` | `80` |
| align | Alignment | `'left' \| 'center' \| 'right'` | `-` |
| fixed | Fixed position | `'left' \| 'right'` | `-` |
| ellipsis | Whether to show an ellipsis | `boolean` | `false` |
| tooltip | Whether truncation shows a tooltip; accepts Tooltip props | `boolean \| Record<string, any>` | `-` |
| sortable | Sorting options | `TableSortable` | `-` |
| filterable | Filtering options | `TableFilterable` | `-` |
| children | Child header data for grouped headers | `TableColumnData[]` | `-` |
| cellClass | Custom cell class | `ClassName` | `-` |
| headerCellClass | Custom header-cell class | `ClassName` | `-` |
| bodyCellClass | Custom body-cell class | `ClassName \| ((record: TableData) => ClassName)` | `-` |
| summaryCellClass | Custom summary-cell class | `ClassName \| ((record: TableData) => ClassName)` | `-` |
| cellStyle | Custom cell style | `CSSProperties` | `-` |
| headerCellStyle | Custom header-cell style | `CSSProperties` | `-` |
| bodyCellStyle | Custom body-cell style | `CSSProperties \| ((record: TableData) => CSSProperties)` | `-` |
| summaryCellStyle | Custom summary-cell style | `CSSProperties \| ((record: TableData) => CSSProperties)` | `-` |
| render | Custom column-cell renderer | `(data: {    record: TableData;    column: TableColumnData;    rowIndex: number;  }) => VNodeChild` | `-` |
| slotName | Named render slot for this column; same arguments as #cell | `string` | `-` |
| titleSlotName | Named title-rendering slot for this column | `string` | `-` |

### TableBorder

| Parameter | Description | Type | Default |
| ---------- | ------------------------------- | --------- | :-----: |
| wrapper | Whether to show the outer border | `boolean` | `false` |
| cell | Whether to show header/body cell borders | `boolean` | `false` |
| headerCell | Whether to show header-cell borders | `boolean` | `false` |
| bodyCell | Whether to show body-cell borders | `boolean` | `false` |

### TableRowSelection

| Parameter | Description | Type | Default |
| ---------------------- | ---------------------------------------------- | ----------------------- | :-----: |
| type | Row-selection type | `'checkbox' \| 'radio'` | `-` |
| selectedRowKeys | Selected rows in controlled mode | `BaseType[]` | `-` |
| defaultSelectedRowKeys | Default selected rows in uncontrolled mode | `BaseType[]` | `-` |
| showCheckedAll | Whether to show select all | `boolean` | `false` |
| title | Column title | `string` | `-` |
| width | Column width | `number` | `-` |
| fixed | Whether fixed | `boolean` | `false` |
| checkStrictly | Allow parent selection; unlink parent/child checks | `boolean` | `true` |
| onlyCurrent | Keep only current-page keys; clear them when changing pages | `boolean` | `false` |

### TableExpandable

| Parameter | Description | Type | Default |
| ---------------------- | ------------------------------ | ------------------------------------------------------ | :-----: |
| expandedRowKeys | Expanded rows in controlled mode | `BaseType[]` | `-` |
| defaultExpandedRowKeys | Default expanded rows in uncontrolled mode | `BaseType[]` | `-` |
| defaultExpandAllRows | Whether to expand all rows by default | `boolean` | `false` |
| expandedRowRender | Custom expanded-row content | `(record: TableData) => VNodeChild` | `-` |
| icon | Expand icon | `(expanded: boolean, record: TableData) => VNodeChild` | `-` |
| title | Column title | `string` | `-` |
| width | Column width | `number` | `-` |
| fixed | Whether fixed | `boolean` | `false` |

### TableDraggable

| Parameter | Description | Type | Default |
| ------ | -------- | ------------------- | :-----: |
| type | Drag type | `'row' \| 'handle'` | `-` |
| title | Column title | `string` | `-` |
| width | Column width | `number` | `-` |
| fixed | Whether fixed | `boolean` | `false` |

### TableChangeExtra

| Parameter | Description | Type | Default |
| ---------- | ---------- | ------------------------------------------------ | :----: |
| type | Trigger type | `'pagination' \| 'sorter' \| 'filter' \| 'drag'` | `-` |
| page | Page number | `number` | `-` |
| pageSize | Items per page | `number` | `-` |
| sorter | Sorting information | `Sorter` | `-` |
| filters | Filtering information | `Filters` | `-` |
| dragTarget | Drag information | `TableData` | `-` |

### VirtualListProps

| Parameter | Description | Type | Default |
| :----------------- | ------------------------------------------------------------------ | ------------------ | :-----: |
| height | Viewport height | `number \| string` | `-` |
| threshold | Item-count threshold for virtual scrolling; counts below it do not enable virtualization | `number` | `-` |
| isStaticItemHeight | Removed: use `fixedSize` instead of the old fixed-height flag | `boolean` | `false` |
| fixedSize | Whether item heights are fixed | `boolean` | `false` |
| estimatedSize | Estimated item height when heights vary | `number` | `-` |
| buffer | Number of items premounted beyond viewport boundaries | `number` | `10` |

### TableExtraColumnConfig

| Parameter | Description | Type | Default |
| :----- | ---- | ---- | :----: |
| width | Column width; follows table size when omitted | `number` | xs 28 / sm 32 / md·lg·xl 36 |
| fixed | Fixed position | `'left' \| 'right'` | `'right'` |
| align | Alignment | `'left' \| 'center' \| 'right'` | `'center'` |
| dataIndex | Column identifier | `string` | `__cedar_table_extra__` |

### Pagination configuration type

`TablePaginationConfig = Omit<PaginationProps, 'total'> & { total?: number }`. When `pagination.total` is omitted, Table derives it from the effective data count. Remote pagination can still provide `total` explicitly. Existing `PaginationProps` objects remain accepted by Table; standalone `Pagination` still requires `total`. `TablePaginationConfig` is exported from root/table entries.


### Existing precedence of forwarded configuration (F07)

Column filterable.triggerProps is spread after internal Trigger settings, so nested fields such as open can currently override filter-popup state. F07 preserves this order/type for compatibility without automatically forbidding existing capabilities. Future restrictions require separate migration assessment of filter/popup states.


## Optional business-row type configuration (F08-A)

```ts
import { defineTableConfig } from '@cedar-design/ui'
import type { TypedTableConfig, TypedTableColumn, TableDataPath } from '@cedar-design/ui/table'

interface User { id: string; name: string; age: number }
const users: User[] = [{ id: 'a', name: 'Alice', age: 20 }]
const config = defineTableConfig<User>({
  rowKey: 'id', data: users,
  columns: [{ dataIndex: 'age', render: ({ record }) => record.age.toFixed(0) }],
})
```

Use the config with `<c-table v-bind="config" />` or TSX `<Table {...config} />`. Business-side as any is unnecessary. Existing TableData, TableColumnData, TableProps and component props remain. The new entry validates inputs and returns existing TableProps for old components. Runtime returns the same object without copying rows/columns, changing sorting/filtering or wrapping components.

| Associated scope | New type rules |
| --- | --- |
| data / columns | The same Row type recursively applies to tree children |
| dataIndex | Validates fields/nested paths such as profile.city, tags[0].label and tags.0.label, up to five business-structure levels. Dynamic strings/deeper paths retain the old entry |
| render / sortable / filterable | record, comparators and filters receive Row, including grouped child columns |
| Row callbacks | Cell styles/classes, rowClass, expandable, loadMore, spanMethod and custom summaries associate with Row |
| rowKey | Explicitly provide a Row field whose value is string/number; this is a field name, not a nested path |
| summary | May be omitted, false or a custom function returning complete Row. Automatic summary=true is not guaranteed to be a business row, so the new entry rejects it; existing Table configuration still supports it |

Business interfaces normally need not extend TableData explicitly; its any index broadens keyof and weakens spelling checks. Use ordinary business interfaces and generic constraints to validate reserved Table metadata compatibility. Business code still validates backend contents; types do not ensure unique IDs.

Type association covers only this configuration. Component template slots/events and custom components extensions do not automatically become Row-generic. Returned TableProps remains the old broad type; arbitrary later mutations are not Row-validated. If reactive sources replace arrays, use `computed(() => defineTableConfig<Row>(...))`; passing rows.value once is not an ongoing ref subscription.

Automatic summary rows may contain text, totals and missing fields; render(record: User) must not assume a complete User. Keep the old broad configuration for automatic summaries or heterogeneous tree rows. The new custom-summary entry requires a complete business row. Neither entry changes Table runtime behavior.

Platform scope: Maple Table is a native-table display container without data/columns API, so no associated-config entry is added there. Select/Cascader type associations require separate assessment.


## Reading direction and interaction

Table inherits native reading direction. Normal columns follow reading order; explicit fixed left/right sides stay physical through stable visual partitions. Mixed frozen group headers are projected into matching physical sections without mutating source columns or business indexes. Default cell alignment follows reading start; explicit left/right alignment stays physical. Header/body/summary/sticky rail share a normalized nonnegative inline scroll distance, including native negative RTL scrollLeft. Virtual row positioning preserves horizontal distance. Teleported footers retain source direction. Resize handles support directional pointer and keyboard input; sticky rails support arrows and Home/End. Direction switches preserve business state and cancel stale resize gestures.

Lazy children belong to the source node identity and row key, rather than to a reused key alone. Replacing the node, row key or loader invalidates old work/cache. Deactivation or unmount invalidates pending cell callbacks. `done()` releases pending for retry; `done([])` accepts an empty result. Only the first completion is accepted. Synchronous loader exceptions release pending and remain observable through Vue. Keep the callback-based `load-more` protocol; returned notification Promises do not control this work.

If a callback-style loader returns a Promise, its rejection releases pending and reaches the Vue error path; a fulfilled return value is ignored and does not replace `done`. This is error reporting for an explicit loader Prop, not Promise collection from `expand` or other notification events.
