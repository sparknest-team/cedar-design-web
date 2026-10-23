---
permalink: /components/table-column-manager/
---

# TableColumnManager 表格列管理

双栏列管理内容组件：左侧搜索勾选，右侧拖拽排序 / 冻结 / 删除。

- 默认自带抽屉容器（`v-model:open`），确认后通过 `confirm` 事件回写 `columns`。
- 传入 `inline` 可只渲染内联面板，用于放入自定义弹窗 / 容器。
- 与 Table **解耦**：Table 只提供 `v-model:columns`、`extra-column`、`#header-cell-actions` 等扩展点；列管理 UI / 算法由外部组合。

## 基础用法

组件自身渲染抽屉；弹窗场景使用 `inline` 内联面板放入 `c-dialog`。

<demo src="./__demos__/basic.vue"></demo>

## 与 Table 组合：不分组

普通数组形式的 `columnDefinitions`，覆盖必选列、左右冻结、列宽调整、插槽、重命名和表头快捷操作。

<demo src="./__demos__/with-table-ungrouped.vue"></demo>

## 与 Table 组合：分组与持久化

配合 `useTableColumnManager` 组合式函数，一行接入：

- `extra-column` + `#extra-column-header`：末列冻结设置按钮
- `#header-cell-actions`：表头右侧操作，使用 `HeaderAction` 组件
- `v-model:columns` / `@column-resize`：改列并重渲染

表头操作项通过 `headerActions` 配置 key，事件绑定在组件内部完成；插入/编辑弹窗由 `c-table-column-manager` 内部渲染。

<demo src="./__demos__/with-table-header-menu.vue"></demo>

## 按钮切换抽屉 / 弹窗

外部选择容器类型：抽屉模式直接用组件，弹窗模式传入 `inline`。

<demo src="./__demos__/with-table.vue"></demo>

## 异步目录与远程搜索

`loadOptions` 加载全量目录，`remoteSearch` 驱动搜索。

<demo src="./__demos__/remote.vue"></demo>

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### 状态与持久化结构

列的顺序、标题和冻结状态统一存放在 `items` 中。组件和 `useTableColumnManager` 不维护缓存，业务层可按需将
以下状态存入 localStorage、Pinia 或服务端：

```ts
const state: ColumnManagerState = {
  version: 2,
  items: [
    { dataIndex: 'id', fixed: 'left', width: 120 },
    { dataIndex: 'name', title: '用户名称' },
  ],
  layout: [],
}
```

这是大版本破坏性调整，不再读取旧的 `keys`、`fixedMap`、`titleMap` 结构。

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

`restore()` 会校验版本、移除失效或重复列、清洗非法宽度和布局、补齐 `required` 列，并修复冻结区顺序。
`state` 只记录用户重命名的标题和通过 `handleColumnResize` 调整过的宽度。保存到服务端时建议在业务层增加防抖。

### 默认列与候选定义

`defaultColumns` 是完整的 Table 初始列和重置基准；`columnDefinitions` 只负责弹窗候选项，可以只有
`dataIndex`、`title`、分组和提示：

```ts
const defaultColumns: ManagedTableColumn[] = [
  {
    title: '基本信息',
    children: [
      {
        dataIndex: 'id',
        title: '编号',
        fixed: 'left',
        width: 120,
        manager: { required: true },
      },
      { dataIndex: 'name', title: '名称', minWidth: 180 },
    ],
  },
]

const columnDefinitions: ColumnDefinitions = [
  {
    key: 'base',
    title: '基本信息',
    children: [
      { dataIndex: 'id', title: '编号' },
      { dataIndex: 'name', title: '名称' },
      { dataIndex: 'remark', title: '备注', tip: '可选列' },
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

- `defaultColumns` 决定初始展示、重置、默认宽度、冻结、插槽、渲染和 `manager.required`。
- `columnDefinitions` 决定弹窗候选范围，不承担 Table 渲染配置。
- `columnDefaults` 是新增普通列的统一 Table 默认值。
- `createColumn` 用于少数需要特殊宽度、插槽或渲染的候选列。
- 远程场景使用 `columnSource.search` 搜索、`columnSource.resolve` 恢复未知的已选列；此时 `restore()` 返回 Promise。

### `<TableColumnManager>` Props

| 参数名        | 描述                               | 类型                                                    | 默认值     |
| ------------- | ---------------------------------- | ------------------------------------------------------- | ---------- |
| model-value   | 已选列完整状态（顺序、标题、冻结） | `ColumnManagerItem[]`                                   | `-`        |
| default-value | 非受控初始已选状态                 | `ColumnManagerItem[]`                                   | `-`        |
| columns       | 当前表格列，确认时拼回完整列定义   | `TableColumnData[]`                                     | `[]`       |
| options       | 左侧列定义                         | `ColumnDefinitions`                                     | `[]`       |
| load-options  | 异步加载列定义                     | `() => Promise<ColumnDefinitions>`                      | `-`        |
| remote-search | 远程搜索（有值时隐藏顶栏全选）     | `(keyword: string) => Promise<void>`                    | `-`        |
| fallback-item | 值不在定义中时反显                 | `(dataIndex: string) => ColumnDefinition \| undefined` | `-`        |
| insert-at     | 插入上下文，影响新增列落点         | `{ dataIndex: string; side: 'left' \| 'right' }`        | `-`        |
| open          | 抽屉是否可见（`v-model:open`）     | `boolean`                                               | `-`        |
| drawer-title  | 抽屉标题                           | `string`                                                | `自定义列` |
| drawer-width  | 抽屉宽度                           | `number \| string`                                      | `720`      |
| inline        | 是否只渲染内联面板（不渲染抽屉）   | `boolean`                                               | `false`    |
| placeholder   | 搜索框占位                         | `string`                                                | `-`        |

### Events

| 事件名            | 描述                            | 参数                  |
| ----------------- | ------------------------------- | --------------------- |
| update:model-value | 已选完整状态变更                | `ColumnManagerItem[]` |
| update:open       | 抽屉可见性变更                  | `boolean`             |
| confirm           | 点击抽屉/弹窗确认后返回组装结果 | `ColumnManagerResult` |
| change            | 选择、排序、冻结或标题变化      | `ColumnManagerItem[]` |

### Methods

| 方法名      | 描述                     | 返回值                |
| ----------- | ------------------------ | --------------------- |
| getResult   | 按当前选择组装表格列结果 | `ColumnManagerResult` |
| loadCatalog | 手动触发 `loadOptions`   | `Promise<void>`       |

### `useTableColumnManager`

推荐与 `c-table` 组合使用。返回 `columns`、`state`、`restore`、`managerProps`、`HeaderAction` 等，其中
`HeaderAction` 直接通过 `inject` 获取上下文，模板中只需：

```vue
<template #header-cell-actions="{ column, dataIndex }">
  <HeaderAction :data-index="dataIndex" :column="column" />
</template>
```

可通过 `headerActions` 配置要展示的表头操作 key，默认全部展示。

表头操作行为：

- **向左 / 向右插入**：新列会写入锚点所在一级分组，保证分组标题与 `colspan` 正确；若锚点列已冻结，新列会继承相同的冻结位置。
- **冻结 / 取消冻结**：按规则重排叶子列顺序，冻结列集中靠左或靠右。
- **编辑列**：可修改一级分组标题与列名称，相邻同名分组会自动合并。

必选规则只需要在 `defaultColumns` 中声明，Transfer、清空操作和表头删除都会遵循同一规则：

```ts
{
  dataIndex: 'priority',
  title: '优先级',
  manager: { required: true },
  fixed: 'left',
  width: 120,
  slotName: 'priority',
}
```

`columnDefinitions` 中无需重复宽度、冻结和必选规则。用户拖拽后的宽度保存在对应的 `items[].width`。

### 扩展列宽度

`c-table` 的 `extra-column` 扩展列（如设置按钮）默认宽度为 **28px**，可通过 `extraColumn: { width: number }` 覆盖。

### 工具函数（列管理包内）

`buildColumnsResult` / `stateFromColumns` / `applyColumnEdit` / `applyColumnFixed` / `applyInsertToLayout` / `mapLeafColumns` 等用于外部组合时拼装、编辑分组、冻结重排。扁平叶子列表请在业务侧从 `columns` 自行遍历，不必依赖 Table 导出。
