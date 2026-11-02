---
lang: en-US
permalink: /en/components/tree/
---

# Tree

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `data`: Pass in `data` to generate the corresponding tree structure
- `default-expanded-values`: Nodes expanded by default
- `default-selected-values`: Tree node selected by default

<demo src="./__demos__/basic.vue"></demo>

## Appearance and layout

### Tree density and connecting lines

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `block-node` | Whether the node occupies a row | Tree density and connecting lines |
| `checkable` | Add a checkbox before nodes | Tree density and connecting lines |
| `size` | Size | Tree density and connecting lines |
| `data` | Pass in `data` to generate the corresponding tree structure | Tree density and connecting lines |
| `default-selected-values` | Tree node selected by default | Tree density and connecting lines |
| `show-line` | Whether to display the connection line | Tree density and connecting lines |
<!-- demo-config-notes:end -->


Compare node sizes, full-row blocks and connecting lines separately from selection, dragging and asynchronous nodes.

<demo src="./__demos__/appearance-comparison.vue"></demo>

## Node selection and state

### Multiple

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `data` | Pass in `data` to generate the corresponding tree structure | Multiple, Checkable, Control |
| `checkable` | Add a checkbox before nodes | Checkable, Control, Checked Strategy |
| `multiple` | Whether to support multiple selection | Multiple |
| `check-strictly` | Whether to cancel the parent-child node association | Checkable |
| `checked-strategy` | Customized backfill method <br/> all: return all selected nodes <br/> parent: return only parent node when both parent and child nodes are selected <br/> child: return only child nodes | Checked Strategy |
<!-- demo-config-notes:end -->


- `selected-values`: Selected tree node
- `multiple`: Whether to support multiple selection
- `data`: Pass in `data` to generate the corresponding tree structure

<demo src="./__demos__/multiple.vue"></demo>

### Checkable

- `checkable`: Whether to add a checkbox before the node, function format is supported since `2.27.0`
- `checked-values`: Tree node with check box selected
- `check-strictly`: Whether to cancel the parent-child node association
- `data`: Pass in `data` to generate the corresponding tree structure

<demo src="./__demos__/checkable.vue"></demo>

### Control

- `checkable`: Whether to add a checkbox before the node, function format is supported since `2.27.0`
- `selected-values`: Selected tree node
- `checked-values`: Tree node with check box selected
- `expanded-values`: Expanded node

<demo src="./__demos__/control.vue"></demo>

### Checked Strategy

- `checkable`: Whether to add a checkbox before the node, function format is supported since `2.27.0`
- `checked-values`: Tree node with check box selected
- `checked-strategy`: Customized backfill method <br/> all: return all selected nodes <br/> parent: return only parent node when both parent and child nodes are selected <br/> child: return only child nodes
- `data`: Pass in `data` to generate the corresponding tree structure

<demo src="./__demos__/checked-strategy.vue"></demo>

## Node customization

### Node Icon

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `data` | Pass in `data` to generate the corresponding tree structure | Node Icon, Icons, Render Extra |
| `show-line` | Whether to display the connection line | Icons |
| `block-node` | Whether the node occupies a row | Render Extra |
| `checkable` | Add a checkbox before nodes | Render Extra |
| `selectable` | Whether selection is supported | Render Extra |
| `check-strictly` | Whether to cancel the parent-child node association | Render Extra |
<!-- demo-config-notes:end -->


- `data`: Pass in `data` to generate the corresponding tree structure

<demo src="./__demos__/node-icon.vue"></demo>

### Icons

- `data`: Pass in `data` to generate the corresponding tree structure
- `show-line`: Whether to display the connection line

<demo src="./__demos__/icons.vue"></demo>

### Render Extra

- `block-node`: Whether the node occupies a row
- `checkable`: Whether to add a checkbox before the node, function format is supported since `2.27.0`
- `selectable`: Whether to support selection, function format is supported since `2.27.0`
- `check-strictly`: Whether to cancel the parent-child node association

<demo src="./__demos__/render-extra.vue"></demo>

### Field Names

- `default-selected-values`: Tree node selected by default
- `field-names`: Specify the field name in the node data
- `data`: Pass in `data` to generate the corresponding tree structure

<demo src="./__demos__/field-names.vue"></demo>

## Search and drag

### Search

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `data` | Pass in `data` to generate the corresponding tree structure | Search, Draggable |
| `draggable` | Whether it can be dragged | Draggable |
| `block-node` | Whether the node occupies a row | Draggable |
| `checkable` | Add a checkbox before nodes | Draggable |
<!-- demo-config-notes:end -->


- `data`: Pass in `data` to generate the corresponding tree structure

<demo src="./__demos__/search.vue"></demo>

### Draggable

- `draggable`: Whether it can be dragged
- `block-node`: Whether the node occupies a row
- `checkable`: Whether to add a checkbox before the node, function format is supported since `2.27.0`
- `data`: Pass in `data` to generate the corresponding tree structure

<demo src="./__demos__/draggable.vue"></demo>

## Async data and virtualization

### Load More

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `data` | Pass in `data` to generate the corresponding tree structure | Load More, Virtual |
| `load-more` | A callback for loading data asynchronously, returning a `Promise` | Load More |
| `block-node` | Whether the node occupies a row | Virtual |
| `checkable` | Add a checkbox before nodes | Virtual |
| `virtual-list-props` | Pass virtual list properties, pass in this parameter to turn on virtual scrolling, [VirtualListProps](#VirtualListProps) | Virtual |
<!-- demo-config-notes:end -->


- `data`: Pass in `data` to generate the corresponding tree structure
- `load-more`: A callback for loading data asynchronously, returning a `Promise`

<demo src="./__demos__/load-more.vue"></demo>

### Virtual

- `block-node`: Whether the node occupies a row
- `checkable`: Whether to add a checkbox before the node, function format is supported since `2.27.0`
- `data`: Pass in `data` to generate the corresponding tree structure
- `virtual-list-props`: Pass virtual list properties, pass in this parameter to turn on virtual scrolling, [VirtualListProps](#VirtualListProps)

<demo src="./__demos__/virtual.vue"></demo>

## API

### `<tree>` Props

| Parameter | Description | Type | Default |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | :-----: |
| size | Size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| block-node | Whether the node occupies a row | `boolean` | `false` |
| default-expand-all | Whether to expand the parent node by default | `boolean` | `true` |
| multiple | Whether to support multiple selection | `boolean` | `false` |
| checkable | Add a checkbox before nodes | `boolean\| ((    node: TreeNodeData,    info: {      level: number;      isLeaf: boolean;    }  ) => boolean)` | `false` |
| selectable | Whether selection is supported | `boolean\| ((    node: TreeNodeData,    info: {      level: number;      isLeaf: boolean;    }  ) => boolean)` | `true` |
| check-strictly | Whether to cancel the parent-child node association | `boolean` | `false` |
| checked-strategy | Customized backfill method <br/> all: return all selected nodes <br/> parent: return only parent node when both parent and child nodes are selected <br/> child: return only child nodes | `'all' \| 'parent' \| 'child'` | `'all'` |
| default-selected-values | Tree node selected by default | `Array<string \| number>` | `-` |
| selected-values **(v-model)** | Selected tree node | `Array<string \| number>` | `-` |
| default-checked-values | Tree node with checkbox selected by default | `Array<string \| number>` | `-` |
| checked-values **(v-model)** | Tree node with check box selected | `Array<string \| number>` | `-` |
| default-expanded-values | Nodes expanded by default | `Array<string \| number>` | `-` |
| expanded-values **(v-model)** | Expanded node | `Array<string \| number>` | `-` |
| data | Pass in `data` to generate the corresponding tree structure | `TreeNodeData[]` | `[]` |
| field-names | Specify the field name in the node data | `TreeFieldNames` | `-` |
| show-line | Whether to display the connection line | `boolean` | `false` |
| load-more | A callback for loading data asynchronously, returning a `Promise` | `(node: TreeNodeData) => Promise<void>` | `-` |
| draggable | Whether it can be dragged | `boolean` | `false` |
| allow-drop | Whether to allow release on a node when dragging | `(options: {  dropNode: TreeNodeData;  dropPosition: -1 \| 0 \| 1;}) => boolean` | `-` |
| virtual-list-props | Pass virtual list properties, pass in this parameter to turn on virtual scrolling, [VirtualListProps](#VirtualListProps) | `VirtualListProps` | `-` |
| default-expand-selected | Whether to expand the parent node of the selected node by default | `boolean` | `false` |
| default-expand-checked | Whether to expand the parent node of the checked node by default | `boolean` | `false` |
| auto-expand-parent | Whether to automatically expand the parent node of the expanded node | `boolean` | `true` |
| half-checked-values **(v-model)** | The keys of half checked. Only valid when checkable and checkStrictly | `Array<string \| number>` | `-` |
| only-check-leaf | When enabled, checkedValues is only for checked leaf nodes, and the status of the parent node is determined by the child node.(Only valid when checkable and checkStrictly is false) | `boolean` | `false` |
| animation | Whether to enable expand transition animation | `boolean` | `true` |
| action-on-node-click | The action triggered when the node is clicked | `'expand'` | `-` |

### `<tree>` Events

| Event | Description | Arguments |
| ---------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| select | Emitted when a tree node is clicked | selectedValues: `Array<string \| number>`<br>data: `{ selected?: boolean; selectedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }` |
| check | Emitted when a node checkbox is clicked. `halfCheckedValues`/`halfCheckedNodes` are supported since `2.19.0` | checkedValues: `Array<string \| number>`<br>data: `{ checked?: boolean; checkedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; halfCheckedValues: (string \| number)[]; halfCheckedNodes: TreeNodeData[]; }` |
| expand | Expand/collapse | expandKeys: `Array<string \| number>`<br>data: `{ expanded?: boolean; expandNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }` |
| drag-start | Node drag starts | ev: `DragEvent`<br>node: `TreeNodeData` |
| drag-end | Node drag ends | ev: `DragEvent`<br>node: `TreeNodeData` |
| drag-over | Node enters a drop target | ev: `DragEvent`<br>node: `TreeNodeData` |
| drag-leave | Node leaves a drop target | ev: `DragEvent`<br>node: `TreeNodeData` |
| drop | Node is dropped on a target | data: `{ e: DragEvent; dragNode: TreeNodeData; dropNode: TreeNodeData; dropPosition: number; }` |

### `<tree>` Methods

| Method | Description | Arguments | Returns |
| ------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | -------------- |
| scrollIntoView | Scroll a virtual-list item into view | options: `{ index?: number; value?: number \| string; align: 'auto' \| 'top' \| 'bottom'}` | - |
| getSelectedNodes | Get selected nodes | - | TreeNodeData[] |
| getCheckedNodes | Get checked nodes; accepts `checkedStrategy`, otherwise uses the component setting | options: `checkedStrategy?: 'all' \| 'parent' \| 'child'; includeHalfChecked?: boolean;` | TreeNodeData[] |
| getHalfCheckedNodes | Get indeterminate nodes | - | TreeNodeData[] |
| getExpandedNodes | Get expanded nodes | - | TreeNodeData[] |
| checkAll | Set all nodes’ checkbox state | checked: `boolean` | - |
| checkNode | Set specified nodes’ checkbox state | value: `TreeNodeValue \| TreeNodeValue[]`<br>checked: `boolean`<br>onlyCheckLeaf: `boolean` | - |
| selectAll | Set all nodes’ selection state | selected: `boolean` | - |
| selectNode | Set specified nodes’ selection state | value: `TreeNodeValue \| TreeNodeValue[]`<br>selected: `boolean` | - |
| expandAll | Set all nodes’ expansion state | expanded: `boolean` | - |
| expandNode | Set specified nodes’ expansion state | value: `TreeNodeValue \| TreeNodeValue[]`<br>expanded: `boolean` | - |

### `<tree>` Slots

| Slot | Description | Arguments |
| ------------- | :----------------: | -------------------- |
| label | Node content | node: `TreeNodeData` |
| extra | Render additional node content | - |
| drag-icon | Custom drag icon | node: `TreeNodeData` |
| loading-icon | Custom loading icon | TreeNodeData |
| switcher-icon | Custom switcher icon | TreeNodeData |
| icon | Custom node icon | node: `TreeNodeData` |

### TreeNodeData

| Parameter | Description | Type | Default |
| --------------- | ----------------------------------- | ------------------ | :-----: |
| value | Unique identifier | `string \| number` | `-` |
| label | Displayed node title | `string` | `-` |
| selectable | Whether selection is allowed | `boolean` | `false` |
| disabled | Whether the node is disabled | `boolean` | `false` |
| disableCheckbox | Whether the checkbox is disabled | `boolean` | `false` |
| checkable | Whether to show a checkbox | `boolean` | `false` |
| draggable | Whether it can be dragged | `boolean` | `false` |
| isLeaf | Whether this is a leaf; effective during dynamic loading | `boolean` | `false` |
| icon | Node icon | `() => VNode` | `-` |
| switcherIcon | Custom switcher icon; overrides Tree | `() => VNode` | `-` |
| loadingIcon | Custom loading icon; overrides Tree | `() => VNode` | `-` |
| dragIcon | Custom drag icon; overrides Tree | `() => VNode` | `-` |
| children | Children | `TreeNodeData[]` | `-` |

### TreeFieldNames

| Parameter | Description | Type | Default |
| --------------- | ----------------------------------------------- | -------- | :---------------: |
| value | TreeNodeData field mapped to value | `string` | `value` |
| label | TreeNodeData field mapped to label | `string` | `label` |
| disabled | TreeNodeData field mapped to disabled | `string` | `disabled` |
| children | TreeNodeData field mapped to children | `string` | `children` |
| isLeaf | TreeNodeData field mapped to isLeaf | `string` | `isLeaf` |
| disableCheckbox | TreeNodeData field mapped to disableCheckbox | `string` | `disableCheckbox` |
| checkable | TreeNodeData field mapped to checkable | `string` | `checkable` |
| icon | TreeNodeData field mapped to icon | `string` | `checkable` |

### VirtualListProps

| Parameter | Description | Type | Default |
| ------------------ | ------------------------------------------------------------------ | ------------------ | :-----: |
| height | Viewport height | `number \| string` | `-` |
| threshold | Item-count threshold for virtual scrolling; counts below it do not enable virtualization | `number` | `-` |
| isStaticItemHeight | Removed fixed-height flag; use `fixedSize` | `boolean` | `false` |
| fixedSize | Whether item heights are fixed | `boolean` | `false` |
| estimatedSize | Estimated item height when heights vary | `number` | `-` |
| buffer | Number of items premounted beyond viewport boundaries | `number` | `10` |

### Type definitions

The component exports the following types

```ts
import type { TreeInstance } from '@cedar-design/ui'
```

### Five densities and icons

xs/sm/md/lg/xl consume their icon-size, font-size, line-height and title-padding-vertical. Icon sizes also determine expansion-button/indent geometry; show-line follows the matching line height.

| Variable | Default |
| --- | --- |
| `--c-tree-size-xl-icon-size` | `var(--c-size-4)` |
| `--c-tree-size-xl-font-size` | `var(--c-sys-font-size-lg)` |
| `--c-tree-size-xl-line-height` | `var(--c-size-xl)` |
| `--c-tree-size-xl-title-padding-vertical` | `12px` |

### Node fields and business values

Nodes default to `{ value, label, children }`. `value` is a tree-wide unique string/number, including `0`; `label` is display content. Map other backend fields with `fieldNames: { value: 'id', label: 'text', children: 'items' }` without changing backend data. Declarative child `name`, Vue `:key` and Table `rowKey` retain separate meanings.

Independent Tree state uses `selectedValues/defaultSelectedValues`, `checkedValues/defaultCheckedValues`, `halfCheckedValues` and `expandedValues/defaultExpandedValues`, updated through corresponding named v-models. `check` event indeterminate sets use `halfCheckedValues`. Node content uses `label`; TreeSelect forwards `tree-slot-label`. `scrollIntoView({ value })` locates business values; explicit `index` remains a zero-based virtual-list array `index`.


| Focus outline token | Default |
| --- | --- |
| `--c-tree-focus-outline-width` | `2px` |

## Reading direction and keyboard interaction

Tree mirrors indentation, connectors, disclosure icons and horizontal branch keys. Up/down and Home/End navigate enabled visible nodes independently of selection. Enter selects; Space checks a checkable node or selects it. The tree keeps DOM focus through virtual scrolling using aria-activedescendant. Vertical drop semantics remain unchanged. Embedded TreeSelect retains its own focus owner.
