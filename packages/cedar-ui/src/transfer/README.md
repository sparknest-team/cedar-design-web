---
permalink: /components/transfer/
---

# Transfer

两栏布局的多选组件。勾选左侧选项后会即时加入右侧，右侧选项可以直接移除。

## 案例

### 基础用法

数据穿梭框的基本用法。

<demo src="./__demos__/basic.vue"></demo>

### 搜索

通过 `source-filterable`、`target-filterable` 分别开启两侧搜索，通过 `filter` 自定义过滤逻辑；也可使用 `show-search` 同时开启两侧搜索。

<demo src="./__demos__/search.vue"></demo>

### 大数据

通过 `virtual-scroll` 开启虚拟滚动，可流畅处理大量选项。

<demo src="./__demos__/large-data.vue"></demo>

### 分组与拖拽

选项通过 `group` 分组、`tip` 展示说明。设置 `target-draggable` 后可以拖拽调整右侧顺序；设置
`target-operation="menu"` 后，右侧菜单支持重命名、左右冻结、取消冻结和删除，并可通过
`target-actions` 追加自定义弹窗操作。默认的 `remove` 模式仍显示删除图标。

<demo src="./__demos__/grouped.vue"></demo>

右侧状态由一个有序对象数组完整表达：

```ts
const value = ref([
  { value: 'id', label: '编号', fixed: 'left' },
  { value: 'name', label: '名称' },
])
```

### 自定义选项渲染

通过 `item` 插槽自定义选项的渲染内容。

<demo src="./__demos__/custom.vue"></demo>

### 树型穿梭框

通过穿梭框自定义接口可以实现树型穿梭框。

<demo src="./__demos__/tree.vue"></demo>

### 自定义标题栏

通过 `source-title` ,`target-title` 插槽自定义标题栏的渲染内容

<demo src="./__demos__/custom-header.vue"></demo>

## API

### `<transfer>` Props

| 参数名                    | 描述                                        | 类型                     |         默认值         |
| ------------------------- | ------------------------------------------- | ------------------------ | :--------------------: |
| data                      | 穿梭框的数据                                | `TransferItem[]`         |          `[]`          |
| model-value **(v-model)** | 右侧有序完整状态                            | `TransferTargetItem[]`   |          `-`           |
| default-value             | 非受控状态下的右侧完整状态                  | `TransferTargetItem[]`   |          `[]`          |
| disabled                  | 是否禁用                                    | `boolean`                |        `false`         |
| virtual-scroll            | 是否启用虚拟滚动                            | `boolean`                |        `false`         |
| target-draggable          | 是否允许拖拽调整右侧顺序                    | `boolean`                |        `false`         |
| target-operation          | 右侧操作显示为删除图标或操作菜单            | `'remove' \| 'menu'`     |       `'remove'`       |
| clear-text                | 右侧清空按钮文本                            | `string`                 |         `清空`         |
| target-actions            | 追加到右侧菜单的自定义操作                  | `TransferTargetAction[]` |          `[]`          |
| source-filterable         | 是否显示源列表搜索框                        | `boolean`                |        `false`         |
| target-filterable         | 是否显示目标列表搜索框                      | `boolean`                |        `false`         |
| show-search               | 是否同时显示两侧搜索框                      | `boolean`                |        `false`         |
| filter                    | 自定义过滤函数                              | `TransferFilter`         |   标签忽略大小写匹配   |
| source-filter-placeholder | 源列表搜索框占位文本                        | `string`                 |          `-`           |
| target-filter-placeholder | 目标列表搜索框占位文本                      | `string`                 |          `-`           |
| show-selected             | 是否在源列表保留已选项                      | `boolean`                |         `true`         |
| source-title              | 源列表标题                                  | `string`                 |          `-`           |
| target-title              | 目标列表标题                                | `string`                 |          `-`           |
| show-select-all           | 是否展示全选勾选框                          | `boolean`                |         `true`         |
| title                     | 源列表和目标列表标题                        | `string[]`               | `['Source', 'Target']` |
| source-search-props       | Cedar Search 的源搜索框配置                 | `object`                 |          `-`           |
| target-search-props       | Cedar Search 的目标搜索框配置               | `object`                 |          `-`           |

### `<transfer>` Events

| 事件名        | 描述                 | 参数                                          |
| ------------- | -------------------- | --------------------------------------------- |
| change        | 右侧状态改变时触发   | value: `TransferTargetItem[]`                 |
| search        | 用户搜索时触发       | value: `string`<br>type: `'target'\|'source'` |
| rename        | 重命名确认时触发     | value: `TransferValue`, label: `string`       |
| target-action | 点击自定义操作时触发 | key: `string`, item: `TransferItem`           |

### `<transfer>` Slots

| 插槽名         |       描述       | 参数                                                                                                                                                                                                  | 版本   |
| -------------- | :--------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----- |
| source         |      源面板      | data: `TransferItem[]`<br>selectedKeys: `string[]`<br>onSelect: `(value: string[]) => void`                                                                                                           | 2.39.0 |
| source-title   |    源标题插槽    | countTotal: `number`<br>countSelected: `number`<br>searchValue: `string`<br>checked: `boolean`<br>indeterminate: `boolean`<br>onSelectAllChange: `(checked:boolean) => void`<br>onClear: `() => void` | 2.45.0 |
| to-target-icon | 移至目标图标插槽 | -                                                                                                                                                                                                     | 2.52.0 |
| to-source-icon |  移至源图标插槽  | -                                                                                                                                                                                                     | 2.52.0 |
| target         |     目标面板     | data: `TransferItem[]`<br>selectedKeys: `string[]`<br>onSelect: `(value: string[]) => void`                                                                                                           | 2.39.0 |
| target-title   |   目标标题插槽   | countTotal: `number`<br>countSelected: `number`<br>searchValue: `string`<br>checked: `boolean`<br>indeterminate: `boolean`<br>onSelectAllChange: `(checked:boolean) => void`<br>onClear: `() => void` | 2.45.0 |
| item           |       选项       | value: `TransferValue`<br>label: `string`<br>item: `TransferItem`                                                                                                                                     |        |

### TransferItem

| 参数名   | 描述                         | 类型                           | 默认值  |
| -------- | ---------------------------- | ------------------------------ | :-----: |
| value    | 选项的值                     | `string \| number`             |   `-`   |
| label    | 选项的标签                   | `string`                       |   `-`   |
| disabled | 是否禁用                     | `boolean`                      | `false` |
| group    | 源列表分组标题               | `string`                       |   `-`   |
| tip      | 选项提示内容                 | `string \| (() => VNodeChild)` |   `-`   |
| required | 是否为必选项，必选项不可删除 | `boolean`                      | `false` |

### 类型定义

组件导出以下类型定义

```ts
import type {
  TransferFilter,
  TransferFixed,
  TransferInstance,
  TransferItem,
  TransferTargetAction,
  TransferTargetItem,
  TransferTargetOperation,
  TransferValue,
} from '@cedarjs/ui'
```
