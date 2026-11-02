---
lang: en-US
permalink: /en/components/table-column-manager/
---

# Table Column Manager

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `options`: Supplies the available options.

<demo src="./__demos__/basic.vue"></demo>

## Table integration and persistence

### With Table Ungrouped

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `open` | Drawer visibility; `v-model:open` | With Table |
| `columns` | Current Table columns; assembled back into full definitions on confirmation | With Table |
| `options` | Left-side column definitions | With Table |
| `drawer-title` | Drawer title | With Table |
| `inline` | Render only the inline panel without a drawer | With Table |
<!-- demo-config-notes:end -->


Preview configuration: `v-model:columns="columns"`, `extra-column`, `column-resizable`, `:data="data"`.

<demo src="./__demos__/with-table-ungrouped.vue"></demo>

### With Table Header Menu

Preview configuration: `checked-text="fit"`, `unchecked-text="fit"`, `size="sm"`, `checked-text="fixed"`.

<demo src="./__demos__/with-table-header-menu.vue"></demo>

### With Table

- `options`: Supplies the available options.

<demo src="./__demos__/with-table.vue"></demo>

## Async catalog and search

### Remote

Preview configuration: `v-model:columns="columns"`, `:data="data"`, `:pagination="false"`, `size="xs"`.

<demo src="./__demos__/remote.vue"></demo>

## API

### State and persistence structure

Column order, titles and fixed positions are stored together in `items`. The component/`useTableColumnManager` do not cache state. Business code may persist
the following state to localStorage, Pinia or a server:

```ts
const state: ColumnManagerState = {
  version: 2,
  items: [
    { dataIndex: 'id', fixed: 'left', width: 120 },
    { dataIndex: 'name', title: 'User name' },
  ],
  layout: [],
}
```

This is a major breaking change: legacy `keys`, `fixedMap` and `titleMap` structures are no longer read.

```ts
const { state, restore } = useTableColumnManager({ defaultColumns, columnDefinitions })
const storageReady = ref(false)

onMounted(async () => {
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (raw) await restore(JSON.parse(raw))
  storageReady.value = true
})

watch(
  state,
  (value) => {
    if (!storageReady.value) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  },
  { deep: true }
)
```

`restore()` validates versions, removes stale/duplicate columns, cleans invalid widths/layouts, adds `required` columns and repairs fixed-region ordering.
`state` records only user-renamed titles and widths changed through `handleColumnResize`. Debounce server persistence in business code if needed.

### Default columns and candidate definitions

`defaultColumns` supplies complete initial Table columns and the reset baseline. `columnDefinitions` supplies popup candidates only and may contain just
`dataIndex`, `title`, grouping and hints:

```ts
const defaultColumns: ManagedTableColumn[] = [
  {
    title: 'Basic information',
    children: [
      {
        dataIndex: 'id',
        title: 'ID',
        fixed: 'left',
        width: 120,
        manager: { required: true },
      },
      { dataIndex: 'name', title: 'Name', minWidth: 180 },
    ],
  },
]

const columnDefinitions: ColumnDefinitions = [
  {
    key: 'base',
    title: 'Basic information',
    children: [
      { dataIndex: 'id', title: 'ID' },
      { dataIndex: 'name', title: 'Name' },
      { dataIndex: 'remark', title: 'Notes', tip: 'Optional column' },
    ],
  },
]

const manager = useTableColumnManager({
  defaultColumns,
  columnDefinitions,
  columnDefaults: { width: 140, ellipsis: true },
  createColumn: (definition) => ({ dataIndex: definition.dataIndex, title: definition.title }),
})
```

- `defaultColumns` determines initial display, reset, default width, fixed position, slots, rendering and `manager.required`.
- `columnDefinitions` determines popup candidates, not Table rendering configuration.
- `columnDefaults` supplies common Table defaults for new ordinary columns.
- `createColumn` handles a few candidates requiring special width, slots or rendering.
- For remote data, `columnSource.search` searches and `columnSource.resolve` restores unknown selected columns. `restore()` then returns a Promise.

### `<TableColumnManager>` Props

| Parameter | Description | Type | Default |
| ------------- | ---------------------------------- | ------------------------------------------------------- | ---------- |
| model-value | Complete ordered selected-column state, including titles/fixed positions | `ColumnManagerItem[]` | `-` |
| default-value | Initial uncontrolled selected state | `ColumnManagerItem[]` | `-` |
| columns | Current Table columns; assembled back into full definitions on confirmation | `TableColumnData[]` | `[]` |
| options | Left-side column definitions | `ColumnDefinitions` | `[]` |
| load-options | Asynchronously load column definitions | `() => Promise<ColumnDefinitions>` | `-` |
| remote-search | Remote search; hides top select-all when provided | `(keyword: string) => Promise<void>` | `-` |
| fallback-item | Resolve display for values absent from definitions | `(dataIndex: string) => ColumnDefinition \| undefined` | `-` |
| insert-at | Insertion context determining where new columns land | `{ dataIndex: string; side: 'left' \| 'right' }` | `-` |
| open | Drawer visibility; `v-model:open` | `boolean` | `-` |
| drawer-title | Drawer title | `string` | `自定义列` |
| drawer-width | Drawer width | `number \| string` | `720` |
| inline | Render only the inline panel without a drawer | `boolean` | `false` |
| placeholder | Search placeholder | `string` | `-` |

### Events

| Event | Description | Arguments |
| ----------------- | ------------------------------- | --------------------- |
| update:model-value | Complete selected-state changes | `ColumnManagerItem[]` |
| update:open | Drawer visibility changes | `boolean` |
| confirm | Assembled result after drawer/dialog confirmation | `ColumnManagerResult` |
| change | Selection, order, fixed-position or title changes | `ColumnManagerItem[]` |

### Methods

| Method | Description | Returns |
| ----------- | ------------------------ | --------------------- |
| getResult | Assemble Table columns from current selection | `ColumnManagerResult` |
| loadCatalog | Manually invoke `loadOptions` | `Promise<void>` |

### `useTableColumnManager`

Recommended with `c-table`. Returns `columns`, `state`, `restore`, `managerProps`, `HeaderAction` and others.
`HeaderAction` obtains context directly through `inject`; templates only need:

```vue
<template #header-cell-actions="{ column, dataIndex }">
  <HeaderAction :data-index="dataIndex" :column="column" />
</template>
```

`headerActions` configures visible header-action keys; all are shown by default.

Header-action behavior:

- Insert left/right: new columns enter the anchor's first-level group, preserving group titles/`colspan`. If the anchor is fixed, new columns inherit its fixed position.
- Fix/unfix: reorder leaf columns so fixed columns collect at the left/right edge.
- Edit columns: edit first-level group titles and column names; adjacent equal-name groups merge automatically.

Required rules need declaration only in `defaultColumns`. Transfer, clearing and header deletion all follow them:

```ts
{
  dataIndex: 'priority',
  title: 'Priority',
  manager: { required: true },
  fixed: 'left',
  width: 120,
  slotName: 'priority',
}
```

`columnDefinitions` need not duplicate width, fixed-position or required rules. User-resized widths persist in `items[].width`.

### Extra-column width

`c-table` `extra-column`, e.g. a settings control, defaults to 28px. Override with `extraColumn: { width: number }`.

### Utility functions in the column-management package

`buildColumnsResult` / `stateFromColumns` / `applyColumnEdit` / `applyColumnFixed` / `applyInsertToLayout` / `mapLeafColumns` support external assembly, group editing, fixed reordering and insertion. Traverse `columns` in business code for flat leaf lists; Table exports are unnecessary.

Catalog loading and remote searching own independent pending state; older completion cannot unlock newer work. loadOptions runs at creation, loader replacement and explicit loadCatalog calls. Manual calls retain Promise rejection; automatic reads use the Vue error path. Hook catalog/search jobs share current catalog ownership, restore has its own ownership, and newer column edits or disposal invalidate older restore results.
