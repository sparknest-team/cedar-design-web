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

| Configuration             | Purpose                                                     | Related examples                  |
| ------------------------- | ----------------------------------------------------------- | --------------------------------- |
| `block-node`              | Whether the node occupies a row                             | Tree density and connecting lines |
| `checkable`               | Add a checkbox before nodes                                 | Tree density and connecting lines |
| `size`                    | Size                                                        | Tree density and connecting lines |
| `data`                    | Pass in `data` to generate the corresponding tree structure | Tree density and connecting lines |
| `default-selected-values` | Tree node selected by default                               | Tree density and connecting lines |
| `show-line`               | Whether to display the connection line                      | Tree density and connecting lines |

<!-- demo-config-notes:end -->

Compare node sizes, full-row blocks and connecting lines separately from selection, dragging and asynchronous nodes.

<demo src="./__demos__/appearance-comparison.en-US.vue"></demo>

## Node selection and state

### Multiple

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration      | Purpose                                                                                                                                                                                  | Related examples                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `data`             | Pass in `data` to generate the corresponding tree structure                                                                                                                              | Multiple, Checkable, Control         |
| `checkable`        | Add a checkbox before nodes                                                                                                                                                              | Checkable, Control, Checked Strategy |
| `multiple`         | Whether to support multiple selection                                                                                                                                                    | Multiple                             |
| `check-strictly`   | Whether to cancel the parent-child node association                                                                                                                                      | Checkable                            |
| `checked-strategy` | Customized backfill method <br/> all: return all selected nodes <br/> parent: return only parent node when both parent and child nodes are selected <br/> child: return only child nodes | Checked Strategy                     |

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

| Configuration    | Purpose                                                     | Related examples               |
| ---------------- | ----------------------------------------------------------- | ------------------------------ |
| `data`           | Pass in `data` to generate the corresponding tree structure | Node Icon, Icons, Render Extra |
| `show-line`      | Whether to display the connection line                      | Icons                          |
| `block-node`     | Whether the node occupies a row                             | Render Extra                   |
| `checkable`      | Add a checkbox before nodes                                 | Render Extra                   |
| `selectable`     | Whether selection is supported                              | Render Extra                   |
| `check-strictly` | Whether to cancel the parent-child node association         | Render Extra                   |

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

| Configuration | Purpose                                                     | Related examples  |
| ------------- | ----------------------------------------------------------- | ----------------- |
| `data`        | Pass in `data` to generate the corresponding tree structure | Search, Draggable |
| `draggable`   | Whether it can be dragged                                   | Draggable         |
| `block-node`  | Whether the node occupies a row                             | Draggable         |
| `checkable`   | Add a checkbox before nodes                                 | Draggable         |

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

| Configuration        | Purpose                                                                                                                  | Related examples   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `data`               | Pass in `data` to generate the corresponding tree structure                                                              | Load More, Virtual |
| `load-more`          | A callback for loading data asynchronously, returning a `Promise`                                                        | Load More          |
| `block-node`         | Whether the node occupies a row                                                                                          | Virtual            |
| `checkable`          | Add a checkbox before nodes                                                                                              | Virtual            |
| `virtual-list-props` | Pass virtual list properties, pass in this parameter to turn on virtual scrolling, [VirtualListProps](#virtuallistprops) | Virtual            |

<!-- demo-config-notes:end -->

- `data`: Pass in `data` to generate the corresponding tree structure
- `load-more`: A callback for loading data asynchronously, returning a `Promise`

<demo src="./__demos__/load-more.vue"></demo>

### Virtual

- `block-node`: Whether the node occupies a row
- `checkable`: Whether to add a checkbox before the node, function format is supported since `2.27.0`
- `data`: Pass in `data` to generate the corresponding tree structure
- `virtual-list-props`: Pass virtual list properties, pass in this parameter to turn on virtual scrolling, [VirtualListProps](#virtuallistprops)

<demo src="./__demos__/virtual.vue"></demo>

## API

### Tree Props

| Parameter                         | Description                                                                                                                                                                              | Type                                                                                                           | Default |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | :-----: |
| size                              | Size                                                                                                                                                                                     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                                                         | `'md'`  |
| block-node                        | Whether the node occupies a row                                                                                                                                                          | `boolean`                                                                                                      | `false` |
| default-expand-all                | Whether to expand the parent node by default                                                                                                                                             | `boolean`                                                                                                      | `true`  |
| multiple                          | Whether to support multiple selection                                                                                                                                                    | `boolean`                                                                                                      | `false` |
| checkable                         | Add a checkbox before nodes                                                                                                                                                              | `boolean\| ((    node: TreeNodeData,    info: {      level: number;      isLeaf: boolean;    }  ) => boolean)` | `false` |
| selectable                        | Whether selection is supported                                                                                                                                                           | `boolean\| ((    node: TreeNodeData,    info: {      level: number;      isLeaf: boolean;    }  ) => boolean)` | `true`  |
| check-strictly                    | Whether to cancel the parent-child node association                                                                                                                                      | `boolean`                                                                                                      | `false` |
| checked-strategy                  | Customized backfill method <br/> all: return all selected nodes <br/> parent: return only parent node when both parent and child nodes are selected <br/> child: return only child nodes | `'all' \| 'parent' \| 'child'`                                                                                 | `'all'` |
| default-selected-values           | Tree node selected by default                                                                                                                                                            | `Array<string \| number>`                                                                                      |   `-`   |
| selected-values **(v-model)**     | Selected tree node                                                                                                                                                                       | `Array<string \| number>`                                                                                      |   `-`   |
| default-checked-values            | Tree node with checkbox selected by default                                                                                                                                              | `Array<string \| number>`                                                                                      |   `-`   |
| checked-values **(v-model)**      | Tree node with check box selected                                                                                                                                                        | `Array<string \| number>`                                                                                      |   `-`   |
| default-expanded-values           | Nodes expanded by default                                                                                                                                                                | `Array<string \| number>`                                                                                      |   `-`   |
| expanded-values **(v-model)**     | Expanded node                                                                                                                                                                            | `Array<string \| number>`                                                                                      |   `-`   |
| data                              | Pass in `data` to generate the corresponding tree structure                                                                                                                              | `TreeNodeData[]`                                                                                               |  `[]`   |
| field-names                       | Specify the field name in the node data                                                                                                                                                  | `TreeFieldNames`                                                                                               |   `-`   |
| show-line                         | Whether to display the connection line                                                                                                                                                   | `boolean`                                                                                                      | `false` |
| load-more                         | A callback for loading data asynchronously, returning a `Promise`                                                                                                                        | `(node: TreeNodeData) => Promise<void>`                                                                        |   `-`   |
| draggable                         | Whether it can be dragged                                                                                                                                                                | `boolean`                                                                                                      | `false` |
| allow-drop                        | Whether to allow release on a node when dragging                                                                                                                                         | `(options: {  dropNode: TreeNodeData;  dropPosition: -1 \| 0 \| 1;}) => boolean`                               |   `-`   |
| filter-tree-node                  | Filter nodes and retain ancestors of matches                                                                                                                                             | `(node: TreeNodeData) => boolean`                                                                              |   `-`   |
| search-value                      | Search node labels case-insensitively                                                                                                                                                    | `string`                                                                                                       |  `''`   |
| virtual-list-props                | Pass virtual list properties, pass in this parameter to turn on virtual scrolling, [VirtualListProps](#virtuallistprops)                                                                 | `VirtualListProps`                                                                                             |   `-`   |
| default-expand-selected           | Whether to expand the parent node of the selected node by default                                                                                                                        | `boolean`                                                                                                      | `false` |
| default-expand-checked            | Whether to expand the parent node of the checked node by default                                                                                                                         | `boolean`                                                                                                      | `false` |
| auto-expand-parent                | Whether to automatically expand the parent node of the expanded node                                                                                                                     | `boolean`                                                                                                      | `true`  |
| half-checked-values **(v-model)** | The keys of half checked. Only valid when checkable and checkStrictly                                                                                                                    | `Array<string \| number>`                                                                                      |   `-`   |
| only-check-leaf                   | When enabled, checkedValues is only for checked leaf nodes, and the status of the parent node is determined by the child node.(Only valid when checkable and checkStrictly is false)     | `boolean`                                                                                                      | `false` |
| animation                         | Whether to enable expand transition animation                                                                                                                                            | `boolean`                                                                                                      | `true`  |
| action-on-node-click              | The action triggered when the node is clicked                                                                                                                                            | `'expand'`                                                                                                     |   `-`   |

### Tree Events

| Event                    | Description                                                                                                  | Arguments                                                                                                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| update:selectedValues    | Selected node values updated                                                                                 | `TreeNodeValue[]`                                                                                                                                                                                                   |
| update:checkedValues     | Checked node values updated                                                                                  | `TreeNodeValue[]`                                                                                                                                                                                                   |
| update:halfCheckedValues | Half-checked node values updated                                                                             | `TreeNodeValue[]`                                                                                                                                                                                                   |
| update:expandedValues    | Expanded node values updated                                                                                 | `TreeNodeValue[]`                                                                                                                                                                                                   |
| select                   | Emitted when a tree node is clicked                                                                          | selectedValues: `Array<string \| number>`<br>data: `{ selected?: boolean; selectedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }`                                                                         |
| check                    | Emitted when a node checkbox is clicked. `halfCheckedValues`/`halfCheckedNodes` are supported since `2.19.0` | checkedValues: `Array<string \| number>`<br>data: `{ checked?: boolean; checkedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; halfCheckedValues: (string \| number)[]; halfCheckedNodes: TreeNodeData[]; }` |
| expand                   | Expand/collapse                                                                                              | expandKeys: `Array<string \| number>`<br>data: `{ expanded?: boolean; expandedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }`                                                                             |
| load-error               | Current node async load failed                                                                               | error: `unknown`<br>node: `TreeNodeData`                                                                                                                                                                            |
| drag-start               | Node drag starts                                                                                             | ev: `DragEvent`<br>node: `TreeNodeData`                                                                                                                                                                             |
| drag-end                 | Node drag ends                                                                                               | ev: `DragEvent`<br>node: `TreeNodeData`                                                                                                                                                                             |
| drag-over                | Node enters a drop target                                                                                    | ev: `DragEvent`<br>node: `TreeNodeData`                                                                                                                                                                             |
| drag-leave               | Node leaves a drop target                                                                                    | ev: `DragEvent`<br>node: `TreeNodeData`                                                                                                                                                                             |
| drop                     | Node is dropped on a target                                                                                  | data: `{ e: DragEvent; dragNode: TreeNodeData; dropNode: TreeNodeData; dropPosition: number; }`                                                                                                                     |

### Tree Methods

| Method              | Description                                                                        | Arguments                                                                                   | Returns        |
| ------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------- |
| toggleCheck         | Toggle the specified checkable node                                                | key: `TreeNodeValue`<br>e: `Event`                                                          | -              |
| scrollIntoView      | Scroll a virtual-list item into view                                               | options: `{ index?: number; value?: number \| string; align: 'auto' \| 'top' \| 'bottom'}`  | -              |
| getSelectedNodes    | Get selected nodes                                                                 | -                                                                                           | TreeNodeData[] |
| getCheckedNodes     | Get checked nodes; accepts `checkedStrategy`, otherwise uses the component setting | options: `checkedStrategy?: 'all' \| 'parent' \| 'child'; includeHalfChecked?: boolean;`    | TreeNodeData[] |
| getHalfCheckedNodes | Get indeterminate nodes                                                            | -                                                                                           | TreeNodeData[] |
| getExpandedNodes    | Get expanded nodes                                                                 | -                                                                                           | TreeNodeData[] |
| checkAll            | Set all nodes’ checkbox state                                                      | checked: `boolean`                                                                          | -              |
| checkNode           | Set specified nodes’ checkbox state                                                | value: `TreeNodeValue \| TreeNodeValue[]`<br>checked: `boolean`<br>onlyCheckLeaf: `boolean` | -              |
| selectAll           | Set all nodes’ selection state                                                     | selected: `boolean`                                                                         | -              |
| selectNode          | Set specified nodes’ selection state                                               | value: `TreeNodeValue \| TreeNodeValue[]`<br>selected: `boolean`                            | -              |
| expandAll           | Set all nodes’ expansion state                                                     | expanded: `boolean`                                                                         | -              |
| expandNode          | Set specified nodes’ expansion state                                               | value: `TreeNodeValue \| TreeNodeValue[]`<br>expanded: `boolean`                            | -              |

### Tree Slots

| Slot          |          Description           | Prop                             |
| ------------- | :----------------------------: | -------------------------------- |
| label         |          Node content          | node: `TreeNodeData`             |
| extra         | Render additional node content | Receives `TreeNodeData` directly |
| drag-icon     |        Custom drag icon        | node: `TreeNodeData`             |
| loading-icon  |      Custom loading icon       | TreeNodeData                     |
| switcher-icon |      Custom switcher icon      | TreeNodeData                     |
| icon          |        Custom node icon        | node: `TreeNodeData`             |

Template slots `label`, `extra`, `switcher-icon`, and `loading-icon` receive the original `node` object; `icon` and `drag-icon` receive an object containing `node` and `node` state. State includes `loading`, `checked`, `selected`, `indeterminate`, `expanded`, and `isLeaf`.

## Types

### TreeNodeData

| Parameter       | Description                                              | Type               | Default |
| --------------- | -------------------------------------------------------- | ------------------ | :-----: |
| value           | Unique identifier                                        | `string \| number` |   `-`   |
| label           | Displayed node title                                     | `string`           |   `-`   |
| selectable      | Whether selection is allowed                             | `boolean`          | `false` |
| disabled        | Whether the node is disabled                             | `boolean`          | `false` |
| disableCheckbox | Whether the checkbox is disabled                         | `boolean`          | `false` |
| checkable       | Whether to show a checkbox                               | `boolean`          | `false` |
| draggable       | Whether it can be dragged                                | `boolean`          | `false` |
| isLeaf          | Whether this is a leaf; effective during dynamic loading | `boolean`          | `false` |
| icon            | Node icon                                                | `() => VNode`      |   `-`   |
| switcherIcon    | Custom switcher icon; overrides Tree                     | `() => VNode`      |   `-`   |
| loadingIcon     | Custom loading icon; overrides Tree                      | `() => VNode`      |   `-`   |
| dragIcon        | Custom drag icon; overrides Tree                         | `() => VNode`      |   `-`   |
| children        | Children                                                 | `TreeNodeData[]`   |   `-`   |

### TreeFieldNames

| Parameter       | Description                                  | Type     |      Default      |
| --------------- | -------------------------------------------- | -------- | :---------------: |
| value           | TreeNodeData field mapped to value           | `string` |      `value`      |
| label           | TreeNodeData field mapped to label           | `string` |      `label`      |
| disabled        | TreeNodeData field mapped to disabled        | `string` |    `disabled`     |
| children        | TreeNodeData field mapped to children        | `string` |    `children`     |
| isLeaf          | TreeNodeData field mapped to isLeaf          | `string` |     `isLeaf`      |
| disableCheckbox | TreeNodeData field mapped to disableCheckbox | `string` | `disableCheckbox` |
| checkable       | TreeNodeData field mapped to checkable       | `string` |    `checkable`    |
| icon            | TreeNodeData field mapped to icon            | `string` |      `icon`       |

### VirtualListProps

| Parameter     | Description                                                                              | Type               | Default |
| ------------- | ---------------------------------------------------------------------------------------- | ------------------ | :-----: |
| height        | Viewport height                                                                          | `number \| string` |   `-`   |
| threshold     | Item-count threshold for virtual scrolling; counts below it do not enable virtualization | `number`           |   `-`   |
| fixedSize     | Whether item heights are fixed                                                           | `boolean`          | `false` |
| estimatedSize | Estimated item height when heights vary                                                  | `number`           |   `-`   |
| buffer        | Number of items premounted beyond viewport boundaries                                    | `number`           |  `10`   |

The component exports the following types

```ts
import type {
  CheckableType,
  CheckedStrategy,
  DropPosition,
  FilterTreeNode,
  LoadMore,
  SelectableType,
  TreeFieldNames,
  TreeInstance,
  TreeNodeData,
  TreeNodeValue,
  TreeProps,
} from '@cedar-design/ui-vue'
```

### Five densities and icons

xs/sm/md/lg/xl consume their icon-size, font-size, line-height and title-padding-vertical. Icon sizes also determine expansion-button/indent geometry; show-line follows the matching line height.

| Variable                                  | Default                     |
| ----------------------------------------- | --------------------------- |
| `--c-tree-size-xl-icon-size`              | `var(--c-size-4)`           |
| `--c-tree-size-xl-font-size`              | `var(--c-sys-font-size-lg)` |
| `--c-tree-size-xl-line-height`            | `var(--c-size-xl)`          |
| `--c-tree-size-xl-title-padding-vertical` | `12px`                      |

### Node fields and business values

Nodes default to `{ value, label, children }`. `value` is a tree-wide unique string/number, including `0`; `label` is display content. Map other backend fields with `fieldNames: { value: 'id', label: 'text', children: 'items' }` without changing backend data. Declarative child `name`, Vue `:key` and Table `rowKey` retain separate meanings.

Independent Tree state uses `selectedValues/defaultSelectedValues`, `checkedValues/defaultCheckedValues`, `halfCheckedValues` and `expandedValues/defaultExpandedValues`, updated through corresponding named v-models. `check` event indeterminate sets use `halfCheckedValues`. Node content uses `label`; TreeSelect forwards `tree-slot-label`. `scrollIntoView({ value })` locates business values; explicit `index` remains a zero-based virtual-list array `index`.

| Focus outline variables        | Default |
| ------------------------------ | ------- |
| `--c-tree-focus-outline-width` | `2px`   |

## Asynchronous node loading

`loadMore(node)` is an application-provided asynchronous loader. The node has `aria-busy` while pending; on failure, waiting stops and `load-error(error, node)` is emitted. Expand the node again to retry. Stale requests for replaced nodes or loaders, or after unmount, neither update nodes nor emit stale errors. The application loader is responsible for updating its data.

## Reading direction and keyboard interaction

Tree inherits container direction; indentation, connectors and expansion arrows follow it. Keyboard focus is independent of selection. Up/Down moves through available visible nodes and Home/End reaches boundaries. In LTR, Right expands/enters children and Left collapses/returns; RTL swaps the horizontal keys. Enter selects. Space checks a checkable node, otherwise selects it.

Keyboard navigation skips disabled nodes. The root identifies the focused node through `aria-activedescendant` and retains focus during virtualization. If the active node is unmounted, its reference is temporarily removed and restored after remounting. Expanding, filtering or removing nodes corrects the active node. Before/inside/after drop positions remain determined by vertical position and are not reversed in RTL. When embedded in TreeSelect, the combobox manages focus.

Checkboxes visually represent node state and do not create separate Tab stops. Press Space to toggle the active node; pointer clicks also toggle it while retaining tree focus. The node `aria-checked` indicates checked, unchecked, or mixed state.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable                                    | Default / condition                 | Affected styles                                                                |
| ------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------ |
| `--c-tree-checkbox-margin-right`            | `var(--c-spacing-5)`                | `margin-inline-end`                                                            |
| `--c-tree-custom-icon-margin-right`         | `var(--c-spacing-5)`                | `margin-inline-end`                                                            |
| `--c-tree-drag-icon-color`                  | `var(--c-sys-color-content-brand)`  | `color`                                                                        |
| `--c-tree-drag-icon-spacing-right`          | `var(--c-spacing-6)`                | `inset-inline-end`                                                             |
| `--c-tree-drag-icon-spacing-text`           | `var(--c-spacing-22)`               | `margin-inline-start`                                                          |
| `--c-tree-draggable-gap-bg`                 | `rgb(var(--c-primary-6))`           | `background-color`                                                             |
| `--c-tree-draggable-gap-height`             | `2px`                               | `border-radius`, `bottom`, `height`, `margin-top`, `top`                       |
| `--c-tree-focus-outline-width`              | `2px`                               | `outline`                                                                      |
| `--c-tree-loading-icon-color`               | `var(--c-sys-color-content-brand)`  | `color`                                                                        |
| `--c-tree-node-border-radius`               | `var(--c-border-radius-sm)`         | `border-radius`                                                                |
| `--c-tree-showline-line-bg`                 | `var(--c-color-neutral-3)`          | `border-left`                                                                  |
| `--c-tree-showline-line-spacing-vertical`   | `var(--c-spacing-2)`                | `bottom`, `top`                                                                |
| `--c-tree-showline-line-style`              | `solid`                             | `border-left`                                                                  |
| `--c-tree-showline-line-width`              | `var(--c-border-width-1)`           | `border-left`, `width`                                                         |
| `--c-tree-showline-plus-icon-bg`            | `var(--c-color-fill-2)`             | `background`                                                                   |
| `--c-tree-showline-plus-icon-border-radius` | `var(--c-border-radius-sm)`         | `border-radius`                                                                |
| `--c-tree-showline-plus-icon-stroke`        | `2px`                               | `height`, `margin-left`, `margin-top`, `width`                                 |
| `--c-tree-showline-plus-icon-width`         | `6px`                               | `height`, `margin-left`, `margin-top`, `width`                                 |
| `--c-tree-showline-switcher-icon-size`      | `14px`                              | `bottom`, `height`, `inset-inline-end`, `padding-inline-start`, `top`, `width` |
| `--c-tree-size-expand-icon-bg-hover`        | `var(--c-size-4)`                   | `height`, `padding-inline-start`, `width`                                      |
| `--c-tree-size-lg-font-size`                | `var(--c-font-size-body-3)`         | `font-size`                                                                    |
| `--c-tree-size-lg-icon-size`                | `var(--c-size-3)`                   | `font-size`, `padding-inline-start`, `width`                                   |
| `--c-tree-size-lg-line-height`              | `var(--c-size-lg)`                  | `bottom`, `height`, `line-height`, `top`                                       |
| `--c-tree-size-lg-title-padding-vertical`   | `10px`                              | `padding-bottom`, `padding-top`                                                |
| `--c-tree-size-md-font-size`                | `var(--c-font-size-body-3)`         | `font-size`                                                                    |
| `--c-tree-size-md-icon-size`                | `var(--c-size-3)`                   | `font-size`, `padding-inline-start`, `width`                                   |
| `--c-tree-size-md-line-height`              | `var(--c-size-md)`                  | `bottom`, `height`, `line-height`, `top`                                       |
| `--c-tree-size-md-title-padding-vertical`   | `8px`                               | `padding`                                                                      |
| `--c-tree-size-sm-font-size`                | `var(--c-font-size-body-3)`         | `font-size`                                                                    |
| `--c-tree-size-sm-icon-size`                | `var(--c-size-3)`                   | `font-size`, `padding-inline-start`, `width`                                   |
| `--c-tree-size-sm-line-height`              | `var(--c-size-sm)`                  | `bottom`, `height`, `line-height`, `top`                                       |
| `--c-tree-size-sm-title-padding-vertical`   | `6px`                               | `padding-bottom`, `padding-top`                                                |
| `--c-tree-size-xl-font-size`                | `var(--c-sys-font-size-lg)`         | `font-size`                                                                    |
| `--c-tree-size-xl-icon-size`                | `var(--c-size-4)`                   | `font-size`, `padding-inline-start`, `width`                                   |
| `--c-tree-size-xl-line-height`              | `var(--c-size-xl)`                  | `bottom`, `height`, `line-height`, `top`                                       |
| `--c-tree-size-xl-title-padding-vertical`   | `12px`                              | `padding-bottom`, `padding-top`                                                |
| `--c-tree-size-xs-font-size`                | `var(--c-font-size-body-1)`         | `font-size`                                                                    |
| `--c-tree-size-xs-icon-size`                | `var(--c-size-3)`                   | `font-size`, `padding-inline-start`, `width`                                   |
| `--c-tree-size-xs-line-height`              | `var(--c-size-xs)`                  | `bottom`, `height`, `line-height`, `top`                                       |
| `--c-tree-size-xs-title-padding-vertical`   | `2px`                               | `padding-bottom`, `padding-top`                                                |
| `--c-tree-switcher-icon-color`              | `var(--c-color-text-2)`             | `background-color`, `color`                                                    |
| `--c-tree-switcher-icon-margin-right`       | `var(--c-spacing-5)`                | `margin-inline-end`                                                            |
| `--c-tree-title-bg-dragging`                | `var(--c-color-fill-1)`             | `background-color`                                                             |
| `--c-tree-title-bg-highlight`               | `var(--c-color-primary-light-1)`    | `background-color`                                                             |
| `--c-tree-title-bg-hover`                   | `var(--c-color-fill-2)`             | `background-color`                                                             |
| `--c-tree-title-padding-horizontal`         | `var(--c-spacing-2)`                | `margin-inline-start`, `padding-inline-end`, `padding-inline-start`            |
| `--c-tree-title-text-color`                 | `var(--c-color-text-1)`             | `color`                                                                        |
| `--c-tree-title-text-color-active`          | `var(--c-sys-color-action-primary)` | `color`, `outline`, `outline-color`                                            |
| `--c-tree-title-text-color-active-disabled` | `var(--c-color-primary-light-3)`    | `color`                                                                        |
| `--c-tree-title-text-color-disabled`        | `var(--c-color-text-4)`             | `color`                                                                        |
| `--c-tree-title-text-color-dragging`        | `var(--c-color-text-4)`             | `color`                                                                        |
| `--c-tree-title-text-color-highlight`       | `var(--c-color-text-1)`             | `color`                                                                        |
| `--c-tree-title-text-color-hover`           | `var(--c-color-text-1)`             | `color`                                                                        |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-tree-drag-icon-color: var(--c-sys-color-content-brand);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
