---
permalink: /components/tree/
---

# Tree

对于文件夹、分类目录、组织架构等层级较多的内容，树可以清楚显示他们的层级关系，并具有展开、收起、选择等交互功能。

## 基础示例

### 基础用法

为每个节点赋予全局唯一的 `value`（必填项），`label` 为该节点显示的内容。

<demo src="./__demos__/basic.vue"></demo>

## 外观与布局

### 树节点密度与连接线

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `block-node` | 节点是否占据一行 | 树节点密度与连接线 |
| `checkable` | 是否在节点前添加复选框 | 树节点密度与连接线 |
| `size` | 尺寸 | 树节点密度与连接线 |
| `data` | 传入`data`,生成对应的树结构 | 树节点密度与连接线 |
| `default-selected-values` | 默认选中的树节点 | 树节点密度与连接线 |
| `show-line` | 是否展示连接线 | 树节点密度与连接线 |
<!-- demo-config-notes:end -->

比较节点尺寸、整行占位和连接线；选择策略、拖拽与异步子节点保持独立。

<details>
<summary>配置说明与使用限制</summary>

#### 不同尺寸

不同尺寸的树。

#### 节点占一行

节点占据一整行。

#### 显示连接线

为 `Tree` 添加 `showLine` 属性即可使树具有连接线

</details>

<demo src="./__demos__/appearance-comparison.vue"></demo>

## 节点选择与状态

### 多选

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `data` | 传入`data`,生成对应的树结构 | 多选、带复选框的树、双向绑定 |
| `checkable` | 是否在节点前添加复选框 | 带复选框的树、双向绑定、设置回填方式 |
| `multiple` | 是否支持多选 | 多选 |
| `check-strictly` | 是否取消父子节点关联 | 带复选框的树 |
| `checked-strategy` | 定制回填方式 <br/> all: 返回所有选中的节点 <br/> parent: 父子节点都选中时只返回父节点 <br/> child: 只返回子节点 | 设置回填方式 |
<!-- demo-config-notes:end -->

`Tree` 设置 `multiple` 属性为`true`，可以启用多选。

<demo src="./__demos__/multiple.vue"></demo>

### 带复选框的树

为 `Tree` 添加 `checkable` 属性即可使树具有复选框功能，可以用 `defaultCheckedValues` 指定复选框默认选中的节点。

<demo src="./__demos__/checkable.vue"></demo>

### 双向绑定

`selectedValues` 、 `checkedValues` 、 `expandedValues` 属性均可受控，不仅支持 `v-model` ，还可以在对应的 `select` / `check` /
`expand` 事件中自行控制如何更新属性值。

<demo src="./__demos__/control.vue"></demo>

### 设置回填方式

为 `Tree` 添加 `checkedStrategy` 可以设置选中时的回填方式

<demo src="./__demos__/checked-strategy.vue"></demo>

## 节点内容定制

### 定制节点图标

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `data` | 传入`data`,生成对应的树结构 | 定制节点图标、定制组件图标、定制额外节点 |
| `show-line` | 是否展示连接线 | 定制组件图标 |
| `block-node` | 节点是否占据一行 | 定制额外节点 |
| `checkable` | 是否在节点前添加复选框 | 定制额外节点 |
| `selectable` | 是否支持选择 | 定制额外节点 |
| `check-strictly` | 是否取消父子节点关联 | 定制额外节点 |
<!-- demo-config-notes:end -->

节点图标可以通过 `tree` 的 `icon` 插槽全局指定，也可以通过节点的 `icon` 属性单独指定。

<demo src="./__demos__/node-icon.vue"></demo>

### 定制组件图标

节点的图标 `loadingIcon`, `switcherIcon`，同时支持在 `tree` 和 `node` 两个纬度上定制，其中 `node` 的优先级较高。

<demo src="./__demos__/icons.vue"></demo>

### 定制额外节点

`Tree` 提供了名为 `extra` 的 `Slot`, 可以在节点上定制额外的内容。

<demo src="./__demos__/render-extra.vue"></demo>

### 自定义 data 的字段名称

通过 `fieldNames` 字段可以自定义 data 的字段名。

<demo src="./__demos__/field-names.vue"></demo>

## 搜索与拖拽

### 搜索树

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `data` | 传入`data`,生成对应的树结构 | 搜索树、拖拽 |
| `draggable` | 是否可以拖拽 | 拖拽 |
| `block-node` | 节点是否占据一行 | 拖拽 |
| `checkable` | 是否在节点前添加复选框 | 拖拽 |
<!-- demo-config-notes:end -->

展示如何实现搜索树的效果。

<demo src="./__demos__/search.vue"></demo>

### 搜索与筛选

`search-value` 对 `label`（或 `fieldNames.label` 映射字段）执行不区分大小写的包含匹配；`filter-tree-node` 提供额外的节点筛选，两者同时传入时取交集。匹配节点的祖先保留以维持层级。筛选不会修改展开状态：如果匹配节点位于收起的分支中，需要先展开对应祖先才能看到它。

<demo src="./__demos__/search.vue"></demo>

TreeSelect 的搜索、远程候选和大小写规则由 TreeSelect 自身管理，不受此处独立 Tree 的搜索配置替代。

### 拖拽

可拖拽的树节点。

<demo src="./__demos__/draggable.vue"></demo>

## 异步与虚拟滚动

### 动态加载

<!-- demo-config-notes:start -->
#### 本组配置对照

| 配置 | 作用 | 相关示例 |
| --- | --- | --- |
| `data` | 传入`data`,生成对应的树结构 | 动态加载、虚拟列表 |
| `load-more` | 异步加载数据的回调，返回一个 `Promise` | 动态加载 |
| `block-node` | 节点是否占据一行 | 虚拟列表 |
| `checkable` | 是否在节点前添加复选框 | 虚拟列表 |
| `virtual-list-props` | 传递虚拟列表属性，传入此参数以开启虚拟滚动，[VirtualListProps](#VirtualListProps) | 虚拟列表 |
<!-- demo-config-notes:end -->

动态加载节点。

<demo src="./__demos__/load-more.vue"></demo>

### 虚拟列表

通过指定 `virtualListProps` 来开启虚拟列表，在大量数据时获得高性能表现。

<demo src="./__demos__/virtual.vue"></demo>

## API

### Tree Props

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
| filter-tree-node                | 筛选节点，保留匹配节点的祖先                                                                                     | `(node: TreeNodeData) => boolean`                                                                                |   `-`   |
| search-value                    | 按节点标签搜索，不区分大小写                                                                                    | `string`                                                                                                        | `''`    |
| virtual-list-props              | 传递虚拟列表属性，传入此参数以开启虚拟滚动，[VirtualListProps](#VirtualListProps)                               | `VirtualListProps`                                                                                             |   `-`   |
| default-expand-selected         | 是否默认展开已选中节点的父节点                                                                                  | `boolean`                                                                                                      | `false` |
| default-expand-checked          | 是否默认展开已选中复选框节点的父节点                                                                            | `boolean`                                                                                                      | `false` |
| auto-expand-parent              | 是否自动展开已展开节点的父节点                                                                                  | `boolean`                                                                                                      | `true`  |
| half-checked-values **(v-model)** | 半选状态的节点.仅在 checkable 且 checkStrictly 时生效                                                           | `Array<string \| number>`                                                                                      |   `-`   |
| only-check-leaf                 | 开启后 checkedValues 只处理叶子节点，父节点状态由子节点决定（仅在 checkable 且 checkStrictly 为 false 时生效）    | `boolean`                                                                                                      | `false` |
| animation                       | 是否开启展开时的过渡动效                                                                                        | `boolean`                                                                                                      | `true`  |
| action-on-node-click            | 点击节点的时候触发的动作                                                                                        | `'expand'`                                                                                                     |   `-`   |

### Tree Events

| 事件名     | 描述                                                                                   | 参数                                                                                                                                                                                                            |
| ---------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| update:selectedValues | 选中节点值更新 | `TreeNodeValue[]` |
| update:checkedValues | 勾选节点值更新 | `TreeNodeValue[]` |
| update:halfCheckedValues | 半选节点值更新 | `TreeNodeValue[]` |
| update:expandedValues | 展开节点值更新 | `TreeNodeValue[]` |
| select     | 点击树节点时触发                                                                       | selectedValues: `Array<string \| number>`<br>data: `{ selected?: boolean; selectedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }`                                                                       |
| check      | 点击树节点复选框时触发。`halfCheckedValues` 和 `halfCheckedNodes` 从 `2.19.0` 开始支持。 | checkedValues: `Array<string \| number>`<br>data: `{ checked?: boolean; checkedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; halfCheckedValues: (string \| number)[]; halfCheckedNodes: TreeNodeData[]; }` |
| expand     | 展开/关闭                                                                              | expandKeys: `Array<string \| number>`<br>data: `{ expanded?: boolean; expandedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }`                                                                           |
| load-error | 当前节点异步加载失败 | error: `unknown`<br>node: `TreeNodeData` |
| drag-start | 节点开始拖拽                                                                           | ev: `DragEvent`<br>node: `TreeNodeData`                                                                                                                                                                         |
| drag-end   | 节点结束拖拽                                                                           | ev: `DragEvent`<br>node: `TreeNodeData`                                                                                                                                                                         |
| drag-over  | 节点被拖拽至可释放目标                                                                 | ev: `DragEvent`<br>node: `TreeNodeData`                                                                                                                                                                         |
| drag-leave | 节点离开可释放目标                                                                     | ev: `DragEvent`<br>node: `TreeNodeData`                                                                                                                                                                         |
| drop       | 节点在可释放目标上释放                                                                 | data: `{ e: DragEvent; dragNode: TreeNodeData; dropNode: TreeNodeData; dropPosition: number; }`                                                                                                                 |

### Tree Methods

| 方法名              | 描述                                                                     | 参数                                                                                     | 返回值         |
| ------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | -------------- |
| toggleCheck         | 切换指定可勾选节点的状态 | key: `TreeNodeValue`<br>e: `Event` | - |
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

### Tree Slots

| 插槽名        |        描述        | 参数                 |
| ------------- | :----------------: | -------------------- |
| label         | 节点内容 | node: `TreeNodeData` |
| extra         | 渲染额外的节点内容 | 直接传入 `TreeNodeData` |
| drag-icon     |   定制 drag 图标   | node: `TreeNodeData` |
| loading-icon  | 定制 loading 图标  | TreeNodeData |
| switcher-icon | 定制 switcher 图标 | TreeNodeData |
| icon          |    定制节点图标    | node: `TreeNodeData` |

`label`、`extra`、`switcher-icon` 和 `loading-icon` 在模板中接收的插槽参数是原始节点对象本身；`icon` 和 `drag-icon` 接收包含 `node` 及节点状态的对象。节点状态包括 `loading`、`checked`、`selected`、`indeterminate`、`expanded`、`isLeaf`。

## Types

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
| icon            | 指定 icon 在 TreeNodeData 中的字段名            | `string` |    `icon`    |

### VirtualListProps

| 参数名             | 描述                                                               | 类型               | 默认值  |
| ------------------ | ------------------------------------------------------------------ | ------------------ | :-----: |
| height             | 可视区域高度                                                       | `number \| string` |   `-`   |
| threshold          | 开启虚拟滚动的元素数量阈值，当数据数量小于阈值时不会开启虚拟滚动。 | `number`           |   `-`   |
| fixedSize          | 元素高度是否是固定的。                                             | `boolean`          | `false` |
| estimatedSize      | 元素高度不固定时的预估高度。                                       | `number`           |   `-`   |
| buffer             | 视口边界外提前挂载的元素数量。                                     | `number`           |  `10`   |

组件导出以下类型定义

```ts
import type { TreeInstance, TreeProps, TreeNodeData, TreeFieldNames, TreeNodeValue, FilterTreeNode, CheckedStrategy, CheckableType, SelectableType, LoadMore, DropPosition } from '@cedar-design/ui-vue'
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


| 焦点轮廓变量 | 默认值 |
| --- | --- |
| `--c-tree-focus-outline-width` | `2px` |

## 节点异步加载

`loadMore(node)` 是业务提供的异步加载函数。节点等待时标记 `aria-busy`；失败后停止等待并通过 `load-error(error, node)` 通知，可再次展开节点重试。旧节点、已替换加载函数或卸载后的过期请求不更新节点，也不发过期错误。业务函数负责更新自己的数据。

## 阅读方向与键盘交互

Tree 继承容器阅读方向，缩进、连接线和展开箭头随方向显示。键盘焦点与选中状态独立：上下键移动到上一/下一可用可见节点，Home/End 移动到首尾。LTR 右键展开或进入子级、左键收起或返回父级；RTL 左右互换。Enter 选中，Space 优先勾选可勾选节点，否则执行选中。

键盘跳过禁用节点，根节点通过 `aria-activedescendant` 标识当前焦点，虚拟滚动时保持根节点焦点。活动节点未挂载时暂时移除该引用，重新挂载后恢复。展开、过滤、删除节点后会修正活动节点。拖放的前/内/后仍由纵向位置决定，不因 RTL 反转。TreeSelect 内嵌使用时由组合框管理焦点。

复选框作为节点状态的视觉控件，不单独进入 Tab 顺序；键盘使用 Space 勾选当前节点，指针点击复选框仍可勾选并保持树焦点。节点的 `aria-checked` 表示选中、未选中或半选状态。

## CSS Variables

<!-- component-css-variables:start -->

通过以下变量定制组件外观。默认值随表中注明的主题或选择器条件变化；变量仅在对应的尺寸、变体和交互状态下生效。

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| 变量 | 默认值／条件 | 影响的样式 |
| --- | --- | --- |
| `--c-tree-checkbox-margin-right` | `var(--c-spacing-5)` | `margin-inline-end` |
| `--c-tree-custom-icon-margin-right` | `var(--c-spacing-5)` | `margin-inline-end` |
| `--c-tree-drag-icon-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-tree-drag-icon-spacing-right` | `var(--c-spacing-6)` | `inset-inline-end` |
| `--c-tree-drag-icon-spacing-text` | `var(--c-spacing-22)` | `margin-inline-start` |
| `--c-tree-draggable-gap-bg` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-tree-draggable-gap-height` | `2px` | `border-radius`, `bottom`, `height`, `margin-top`, `top` |
| `--c-tree-focus-outline-width` | `2px` | `outline` |
| `--c-tree-loading-icon-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-tree-node-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-tree-showline-line-bg` | `var(--c-color-neutral-3)` | `border-left` |
| `--c-tree-showline-line-spacing-vertical` | `var(--c-spacing-2)` | `bottom`, `top` |
| `--c-tree-showline-line-style` | `solid` | `border-left` |
| `--c-tree-showline-line-width` | `var(--c-border-width-1)` | `border-left`, `width` |
| `--c-tree-showline-plus-icon-bg` | `var(--c-color-fill-2)` | `background` |
| `--c-tree-showline-plus-icon-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-tree-showline-plus-icon-stroke` | `2px` | `height`, `margin-left`, `margin-top`, `width` |
| `--c-tree-showline-plus-icon-width` | `6px` | `height`, `margin-left`, `margin-top`, `width` |
| `--c-tree-showline-switcher-icon-size` | `14px` | `bottom`, `height`, `inset-inline-end`, `padding-inline-start`, `top`, `width` |
| `--c-tree-size-expand-icon-bg-hover` | `var(--c-size-4)` | `height`, `padding-inline-start`, `width` |
| `--c-tree-size-lg-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-tree-size-lg-icon-size` | `var(--c-size-3)` | `font-size`, `padding-inline-start`, `width` |
| `--c-tree-size-lg-line-height` | `var(--c-size-lg)` | `bottom`, `height`, `line-height`, `top` |
| `--c-tree-size-lg-title-padding-vertical` | `10px` | `padding-bottom`, `padding-top` |
| `--c-tree-size-md-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-tree-size-md-icon-size` | `var(--c-size-3)` | `font-size`, `padding-inline-start`, `width` |
| `--c-tree-size-md-line-height` | `var(--c-size-md)` | `bottom`, `height`, `line-height`, `top` |
| `--c-tree-size-md-title-padding-vertical` | `8px` | `padding` |
| `--c-tree-size-sm-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-tree-size-sm-icon-size` | `var(--c-size-3)` | `font-size`, `padding-inline-start`, `width` |
| `--c-tree-size-sm-line-height` | `var(--c-size-sm)` | `bottom`, `height`, `line-height`, `top` |
| `--c-tree-size-sm-title-padding-vertical` | `6px` | `padding-bottom`, `padding-top` |
| `--c-tree-size-xl-font-size` | `var(--c-sys-font-size-lg)` | `font-size` |
| `--c-tree-size-xl-icon-size` | `var(--c-size-4)` | `font-size`, `padding-inline-start`, `width` |
| `--c-tree-size-xl-line-height` | `var(--c-size-xl)` | `bottom`, `height`, `line-height`, `top` |
| `--c-tree-size-xl-title-padding-vertical` | `12px` | `padding-bottom`, `padding-top` |
| `--c-tree-size-xs-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-tree-size-xs-icon-size` | `var(--c-size-3)` | `font-size`, `padding-inline-start`, `width` |
| `--c-tree-size-xs-line-height` | `var(--c-size-xs)` | `bottom`, `height`, `line-height`, `top` |
| `--c-tree-size-xs-title-padding-vertical` | `2px` | `padding-bottom`, `padding-top` |
| `--c-tree-switcher-icon-color` | `var(--c-color-text-2)` | `background-color`, `color` |
| `--c-tree-switcher-icon-margin-right` | `var(--c-spacing-5)` | `margin-inline-end` |
| `--c-tree-title-bg-dragging` | `var(--c-color-fill-1)` | `background-color` |
| `--c-tree-title-bg-highlight` | `var(--c-color-primary-light-1)` | `background-color` |
| `--c-tree-title-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-tree-title-padding-horizontal` | `var(--c-spacing-2)` | `margin-inline-start`, `padding-inline-end`, `padding-inline-start` |
| `--c-tree-title-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-tree-title-text-color-active` | `var(--c-sys-color-action-primary)` | `color`, `outline`, `outline-color` |
| `--c-tree-title-text-color-active-disabled` | `var(--c-color-primary-light-3)` | `color` |
| `--c-tree-title-text-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-tree-title-text-color-dragging` | `var(--c-color-text-4)` | `color` |
| `--c-tree-title-text-color-highlight` | `var(--c-color-text-1)` | `color` |
| `--c-tree-title-text-color-hover` | `var(--c-color-text-1)` | `color` |

</div>

将覆盖设置在组件实际根节点或弹层真实挂载祖先上。例如给该元素添加下列 class，再按需替换变量值：

```css
.component-theme {
  --c-tree-drag-icon-color: var(--c-sys-color-content-brand);
}
```

显式行内样式及直接写入同一 CSS 属性的 Props 优先于样式表默认值。Teleport 后，普通 CSS 变量按实际挂载位置继承；使用 ThemeProvider 时，请遵循其局部主题与弹层配置规则。局部定制请直接覆盖组件变量；仅修改后代的 system 变量不会重新计算从根继承的组件别名。内部变量不属于公共 API。

<!-- component-css-variables:end -->
