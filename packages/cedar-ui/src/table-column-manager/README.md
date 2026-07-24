---
permalink: /components/table-column-manager/
---

# TableColumnManager 表格列管理

双栏列管理内容组件：左侧搜索勾选，右侧拖拽排序 / 冻结 / 删除。本身**不含** Dialog / Drawer。

与 Table **解耦**：Table 只提供 `v-model:columns`、`extra-column`、`#header-cell-actions` 等扩展点；列管理 UI / 算法由外部组合。

## 基础用法

放入抽屉或弹窗，确认后用 `getResult()` 回写 columns。

<demo src="./__demos__/basic.vue"></demo>

## 与 Table 组合（推荐）

Table 提供扩展点，外部控制菜单内容与弹层：

- `extra-column` + `#extra-column-header`：末列冻结设置按钮
- `#header-cell-actions`：表头右侧操作（内容完全由外部决定）
- `v-model:columns` / `@column-resize`：改列并重渲染；叶子信息从 columns 变更里自行解析

<demo src="./__demos__/with-table-header-menu.vue"></demo>

## 按钮切换抽屉 / 弹窗

外部控制容器类型，确认后 `getResult()` 写回 columns。

<demo src="./__demos__/with-table.vue"></demo>

## 异步目录与远程搜索

`loadOptions` 加载全量目录，`remoteSearch` 驱动搜索。

<demo src="./__demos__/remote.vue"></demo>

## API

### `<TableColumnManager>` Props

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value | 已选列 `dataIndex`（含顺序） | `string[]` | `-` |
| default-value | 非受控初始已选 | `string[]` | `-` |
| columns | 当前表格列，确认时拼回完整列定义 | `TableColumnData[]` | `[]` |
| options | 左侧列目录 | `ColumnCatalog` | `[]` |
| load-options | 异步加载目录 | `() => Promise<ColumnCatalog>` | `-` |
| remote-search | 远程搜索（有值时隐藏顶栏全选） | `(keyword: string) => Promise<void>` | `-` |
| fallback-item | 值不在目录中时反显 | `(dataIndex: string) => ColumnCatalogItem \| undefined` | `-` |
| fixed-map | 冻结映射 | `Record<string, 'left' \| 'right'>` | `-` |
| default-fixed-map | 非受控初始冻结 | `Record<string, 'left' \| 'right'>` | `-` |
| title-map | 自定义列标题 | `Record<string, string>` | `-` |
| required-keys | 必选列（不可删除） | `string[]` | `[]` |
| insert-at | 插入上下文，影响新增列落点 | `{ dataIndex: string; side: 'left' \| 'right' }` | `-` |
| placeholder | 搜索框占位 | `string` | `-` |

### Events

| 事件名 | 描述 | 参数 |
| --- | --- | --- |
| update:modelValue | 已选变更 | `string[]` |
| update:fixedMap | 冻结映射变更 | `Record<string, 'left' \| 'right'>` |
| update:titleMap | 列标题映射变更 | `Record<string, string>` |
| change | 选择或排序变化 | `keys, items` |

### Methods

| 方法名 | 描述 | 返回值 |
| --- | --- | --- |
| getResult | 按当前选择组装表格列结果 | `ColumnManagerResult` |
| loadCatalog | 手动触发 `loadOptions` | `Promise<void>` |

### 工具函数（列管理包内）

`buildColumnsResult` / `stateFromColumns` / `applyColumnEdit` / `applyColumnFixed` / `applyInsertToLayout` / `mapLeafColumns` 等用于外部组合时拼装、编辑分组、冻结重排。扁平叶子列表请在业务侧从 `columns` 自行遍历，不必依赖 Table 导出。

向左 / 向右插入时请传 `insertAt` + `prevKeys`：新列会写入锚点所在一级分组，保证分组标题与 colspan 正确。
