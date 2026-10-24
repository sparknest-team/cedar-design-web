---
permalink: /components/tree/
---

# Tree

对于文件夹、分类目录、组织架构等层级较多的内容，树可以清楚显示他们的层级关系，并具有展开、收起、选择等交互功能。

## 案例

### 基础用法

为每个节点赋予全局唯一的 `value`（必填项），`label` 为该节点显示的内容。

<demo src="./__demos__/basic.vue"></demo>

### 不同尺寸

不同尺寸的树。

<demo src="./__demos__/size.vue"></demo>

### 节点占一行

节点占据一整行。

<demo src="./__demos__/block-node.vue"></demo>

### 多选

`Tree` 设置 `multiple` 属性为`true`，可以启用多选。

<demo src="./__demos__/multiple.vue"></demo>

### 带复选框的树

为 `Tree` 添加 `checkable` 属性即可使树具有复选框功能，可以用 `defaultCheckedValues` 指定复选框默认选中的节点。

<demo src="./__demos__/checkable.vue"></demo>

### 双向绑定

`selectedValues` 、 `checkedValues` 、 `expandedValues` 属性均可受控，不仅支持 `v-model` ，还可以在对应的 `select` / `check` /
`expand` 事件中自行控制如何更新属性值。

<demo src="./__demos__/control.vue"></demo>

### 动态加载

动态加载节点。

<demo src="./__demos__/load-more.vue"></demo>

### 拖拽

可拖拽的树节点。

<demo src="./__demos__/draggable.vue"></demo>

### 设置回填方式

为 `Tree` 添加 `checkedStrategy` 可以设置选中时的回填方式

<demo src="./__demos__/checked-strategy.vue"></demo>

### 显示连接线

为 `Tree` 添加 `showLine` 属性即可使树具有连接线

<demo src="./__demos__/show-line.vue"></demo>

### 定制节点图标

节点图标可以通过 `tree` 的 `icon` 插槽全局指定，也可以通过节点的 `icon` 属性单独指定。

<demo src="./__demos__/node-icon.vue"></demo>

### 定制额外节点

`Tree` 提供了名为 `extra` 的 `Slot`, 可以在节点上定制额外的内容。

<demo src="./__demos__/render-extra.vue"></demo>

### 定制组件图标

节点的图标 `loadingIcon`, `switcherIcon`，同时支持在 `tree` 和 `node` 两个纬度上定制，其中 `node` 的优先级较高。

<demo src="./__demos__/icons.vue"></demo>

### 虚拟列表

通过指定 `virtualListProps` 来开启虚拟列表，在大量数据时获得高性能表现。

<demo src="./__demos__/virtual.vue"></demo>

### 搜索树

展示如何实现搜索树的效果。

<demo src="./__demos__/search.vue"></demo>

### 自定义 data 的字段名称

通过 `fieldNames` 字段可以自定义 data 的字段名。

<demo src="./__demos__/field-names.vue"></demo>

## 虚拟滚动命令的职责

<!-- api-review:start -->
### 功能调试

<demo src="./__demos__/api-review.vue"></demo>

<!-- api-review:end -->

## API

### `<tree>` Props

| 参数名                          | 描述                                                                                                            | 类型                                                                                                           | 默认值  |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | :-----: |
| size                            | 尺寸                                                                                                            | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                                         | `'md'`  |
| block-node                      | 节点是否占据一行                                                                                                | `boolean`                                                                                                      | `false` |
| default-expand-all              | 是否默认展开父节点                                                                                              | `boolean`                                                                                                      | `true`  |
| multiple                        | 是否支持多选                                                                                                    | `boolean`                                                                                                      | `false` |
| checkable                       | 是否在节点前添加复选框                                                                                          | `boolean\| ((    node: TreeNodeData,    info: {      level: number;      isLeaf: boolean;    }  ) => boolean)` | `false` |
| selectable                      | 是否支持选择                                                                                                    | `boolean\| ((    node: TreeNodeData,    info: {      level: number;      isLeaf: boolean;    }  ) => boolean)` | `true`  |
| check-strictly                  | 是否取消父子节点关联                                                                                            | `boolean`                                                                                                      | `false` |
| checked-strategy                | 定制回填方式 <br/> all: 返回所有选中的节点 <br/> parent: 父子节点都选中时只返回父节点 <br/> child: 只返回子节点 | `'all' \| 'parent' \| 'child'`                                                                                 | `'all'` |
| default-selected-values           | 默认选中的树节点                                                                                                | `Array<string \| number>`                                                                                      |   `-`   |
| selected-values **(v-model)**     | 选中的树节点                                                                                                    | `Array<string \| number>`                                                                                      |   `-`   |
| default-checked-values            | 默认选中复选框的树节点                                                                                          | `Array<string \| number>`                                                                                      |   `-`   |
| checked-values **(v-model)**      | 选中复选框的树节点                                                                                              | `Array<string \| number>`                                                                                      |   `-`   |
| default-expanded-values           | 默认展开的节点                                                                                                  | `Array<string \| number>`                                                                                      |   `-`   |
| expanded-values **(v-model)**     | 展开的节点                                                                                                      | `Array<string \| number>`                                                                                      |   `-`   |
| data                            | 传入`data`,生成对应的树结构                                                                                     | `TreeNodeData[]`                                                                                               |  `[]`   |
| field-names                     | 指定节点数据中的字段名                                                                                          | `TreeFieldNames`                                                                                               |   `-`   |
| show-line                       | 是否展示连接线                                                                                                  | `boolean`                                                                                                      | `false` |
| load-more                       | 异步加载数据的回调，返回一个 `Promise`                                                                          | `(node: TreeNodeData) => Promise<void>`                                                                        |   `-`   |
| draggable                       | 是否可以拖拽                                                                                                    | `boolean`                                                                                                      | `false` |
| allow-drop                      | 拖拽时是否允许在某节点上释放                                                                                    | `(options: {  dropNode: TreeNodeData;  dropPosition: -1 \| 0 \| 1;}) => boolean`                               |   `-`   |
| virtual-list-props              | 传递虚拟列表属性，传入此参数以开启虚拟滚动，[VirtualListProps](#VirtualListProps)                               | `VirtualListProps`                                                                                             |   `-`   |
| default-expand-selected         | 是否默认展开已选中节点的父节点                                                                                  | `boolean`                                                                                                      | `false` |
| default-expand-checked          | 是否默认展开已选中复选框节点的父节点                                                                            | `boolean`                                                                                                      | `false` |
| auto-expand-parent              | 是否自动展开已展开节点的父节点                                                                                  | `boolean`                                                                                                      | `true`  |
| half-checked-values **(v-model)** | 半选状态的节点.仅在 checkable 且 checkStrictly 时生效                                                           | `Array<string \| number>`                                                                                      |   `-`   |
| only-check-leaf                 | 开启后 checkedValues 只处理叶子节点，父节点状态由子节点决定（仅在 checkable 且 checkStrictly 为 false 时生效）    | `boolean`                                                                                                      | `false` |
| animation                       | 是否开启展开时的过渡动效                                                                                        | `boolean`                                                                                                      | `true`  |
| action-on-node-click            | 点击节点的时候触发的动作                                                                                        | `'expand'`                                                                                                     |   `-`   |

### `<tree>` Events

| 事件名     | 描述                                                                                   | 参数                                                                                                                                                                                                            |
| ---------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| select     | 点击树节点时触发                                                                       | selectedValues: `Array<string \| number>`<br>data: `{ selected?: boolean; selectedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }`                                                                       |
| check      | 点击树节点复选框时触发。`halfCheckedValues` 和 `halfCheckedNodes` 从 `2.19.0` 开始支持。 | checkedValues: `Array<string \| number>`<br>data: `{ checked?: boolean; checkedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; halfCheckedValues: (string \| number)[]; halfCheckedNodes: TreeNodeData[]; }` |
| expand     | 展开/关闭                                                                              | expandKeys: `Array<string \| number>`<br>data: `{ expanded?: boolean; expandNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }`                                                                           |
| drag-start | 节点开始拖拽                                                                           | ev: `DragEvent`<br>node: `TreeNodeData`                                                                                                                                                                         |
| drag-end   | 节点结束拖拽                                                                           | ev: `DragEvent`<br>node: `TreeNodeData`                                                                                                                                                                         |
| drag-over  | 节点被拖拽至可释放目标                                                                 | ev: `DragEvent`<br>node: `TreeNodeData`                                                                                                                                                                         |
| drag-leave | 节点离开可释放目标                                                                     | ev: `DragEvent`<br>node: `TreeNodeData`                                                                                                                                                                         |
| drop       | 节点在可释放目标上释放                                                                 | data: `{ e: DragEvent; dragNode: TreeNodeData; dropNode: TreeNodeData; dropPosition: number; }`                                                                                                                 |

### `<tree>` Methods

| 方法名              | 描述                                                                     | 参数                                                                                     | 返回值         |
| ------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | -------------- |
| scrollIntoView      | 虚拟列表滚动某个元素                                                     | options: `{ index?: number; value?: number \| string; align: 'auto' \| 'top' \| 'bottom'}` | -              |
| getSelectedNodes    | 获取选中的节点                                                           | -                                                                                        | TreeNodeData[] |
| getCheckedNodes     | 获取选中复选框的节点。支持传入 `checkedStrategy`，没有传则取组件的配置。 | options: `checkedStrategy?: 'all' \| 'parent' \| 'child'; includeHalfChecked?: boolean;` | TreeNodeData[] |
| getHalfCheckedNodes | 获取复选框半选的节点                                                     | -                                                                                        | TreeNodeData[] |
| getExpandedNodes    | 获取展开的节点                                                           | -                                                                                        | TreeNodeData[] |
| checkAll            | 设置全部节点的复选框状态                                                 | checked: `boolean`                                                                       | -              |
| checkNode           | 设置指定节点的复选框状态                                                 | value: `TreeNodeValue \| TreeNodeValue[]`<br>checked: `boolean`<br>onlyCheckLeaf: `boolean`    | -              |
| selectAll           | 设置全部节点的选中状态                                                   | selected: `boolean`                                                                      | -              |
| selectNode          | 设置指定节点的选中状态                                                   | value: `TreeNodeValue \| TreeNodeValue[]`<br>selected: `boolean`                               | -              |
| expandAll           | 设置全部节点的展开状态                                                   | expanded: `boolean`                                                                      | -              |
| expandNode          | 设置指定节点的展开状态                                                   | value: `TreeNodeValue \| TreeNodeValue[]`<br>expanded: `boolean`                               | -              |

### `<tree>` Slots

| 插槽名        |        描述        | 参数                 |
| ------------- | :----------------: | -------------------- |
| label         | 节点内容 | node: `TreeNodeData` |
| extra         | 渲染额外的节点内容 | -                    |
| drag-icon     |   定制 drag 图标   | node: `TreeNodeData` |
| loading-icon  | 定制 loading 图标  | TreeNodeData |
| switcher-icon | 定制 switcher 图标 | TreeNodeData |
| icon          |    定制节点图标    | node: `TreeNodeData` |

### TreeNodeData

| 参数名          | 描述                                | 类型               | 默认值  |
| --------------- | ----------------------------------- | ------------------ | :-----: |
| value             | 唯一标示                            | `string \| number` |   `-`   |
| label           | 该节点显示的标题                    | `string`           |   `-`   |
| selectable      | 是否允许选中                        | `boolean`          | `false` |
| disabled        | 是否禁用节点                        | `boolean`          | `false` |
| disableCheckbox | 是否禁用复选框                      | `boolean`          | `false` |
| checkable       | 是否显示多选框                      | `boolean`          | `false` |
| draggable       | 是否可以拖拽                        | `boolean`          | `false` |
| isLeaf          | 是否是叶子节点。动态加载时有效      | `boolean`          | `false` |
| icon            | 节点的图标                          | `() => VNode`      |   `-`   |
| switcherIcon    | 定制 switcher 图标，优先级大于 tree | `() => VNode`      |   `-`   |
| loadingIcon     | 定制 loading 图标，优先级大于 tree  | `() => VNode`      |   `-`   |
| dragIcon        | 定制 drag 图标，优先级大于 tree     | `() => VNode`      |   `-`   |
| children        | 子节点                              | `TreeNodeData[]`   |   `-`   |

### TreeFieldNames

| 参数名          | 描述                                            | 类型     |      默认值       |
| --------------- | ----------------------------------------------- | -------- | :---------------: |
| value             | 指定 value 在 TreeNodeData 中的字段名             | `string` |       `value`       |
| label           | 指定 label 在 TreeNodeData 中的字段名           | `string` |      `label`      |
| disabled        | 指定 disabled 在 TreeNodeData 中的字段名        | `string` |    `disabled`     |
| children        | 指定 children 在 TreeNodeData 中的字段名        | `string` |    `children`     |
| isLeaf          | 指定 isLeaf 在 TreeNodeData 中的字段名          | `string` |     `isLeaf`      |
| disableCheckbox | 指定 disableCheckbox 在 TreeNodeData 中的字段名 | `string` | `disableCheckbox` |
| checkable       | 指定 checkable 在 TreeNodeData 中的字段名       | `string` |    `checkable`    |
| icon            | 指定 icon 在 TreeNodeData 中的字段名            | `string` |    `checkable`    |

### VirtualListProps

| 参数名             | 描述                                                               | 类型               | 默认值  |
| ------------------ | ------------------------------------------------------------------ | ------------------ | :-----: |
| height             | 可视区域高度                                                       | `number \| string` |   `-`   |
| threshold          | 开启虚拟滚动的元素数量阈值，当数据数量小于阈值时不会开启虚拟滚动。 | `number`           |   `-`   |
| isStaticItemHeight | （已废除）元素高度是否是固定的。请使用 `fixedSize`                 | `boolean`          | `false` |
| fixedSize          | 元素高度是否是固定的。                                             | `boolean`          | `false` |
| estimatedSize      | 元素高度不固定时的预估高度。                                       | `number`           |   `-`   |
| buffer             | 视口边界外提前挂载的元素数量。                                     | `number`           |  `10`   |

### 类型定义

组件导出以下类型定义

```ts
import type { TreeInstance } from '@cedar-design/ui'
```

### 五档密度与图标

xs/sm/md/lg/xl 分别消费各档 icon-size、font-size、line-height、title-padding-vertical。图标尺寸同时参与展开按钮与缩进计算；show-line 跟随对应行高。

| 变量 | 默认值 |
| --- | --- |
| `--c-tree-size-xl-icon-size` | `var(--c-size-4)` |
| `--c-tree-size-xl-font-size` | `var(--c-sys-font-size-lg)` |
| `--c-tree-size-xl-line-height` | `var(--c-size-xl)` |
| `--c-tree-size-xl-title-padding-vertical` | `12px` |

### 节点字段与业务值

节点默认使用 `{ value, label, children }`，`value` 是全树唯一的字符串或数字（支持 `0`），`label` 是展示内容。后端使用其他字段时可配置 `fieldNames: { value: 'id', label: 'text', children: 'items' }`，无需修改后端数据。声明式组件子项的 `name`、Vue 的 `:key` 和 Table 的 `rowKey` 保持各自含义。

Tree 的独立状态采用 `selectedValues/defaultSelectedValues`、`checkedValues/defaultCheckedValues`、`halfCheckedValues`、`expandedValues/defaultExpandedValues`，分别通过同名具名 v-model 更新；`check` 事件数据中的半选集合为 `halfCheckedValues`。节点内容插槽为 `label`，TreeSelect 对应透传插槽为 `tree-slot-label`。`scrollIntoView({ value })` 按业务值定位；显式 `index` 仍表示虚拟列表从 0 开始的数组下标。
