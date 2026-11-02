---
lang: en-US
permalink: /en/components/transfer/
---

# Transfer

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `data`: Data of the transfer
- `default-value`: The default value in the target selection box (uncontrolled state)

<demo src="./__demos__/basic.vue"></demo>

## Search and data structures

### Search

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration               | Purpose                                 | Related examples      |
| --------------------------- | --------------------------------------- | --------------------- |
| `data`                      | Data of the transfer                    | Search, Grouped, Tree |
| `source-filterable`         | Show the source search input            | Search, Grouped       |
| `default-value`             | Complete uncontrolled target-side state | Search, Tree          |
| `source-filter-placeholder` | Source search placeholder               | Search, Grouped       |
| `target-filterable`         | Show the target search input            | Search                |
| `target-filter-placeholder` | Target search placeholder               | Search                |

<!-- demo-config-notes:end -->

- `data`: Data of the transfer
- `default-value`: The default value in the target selection box (uncontrolled state)

Dragging a filtered target list reorders only visible positions in the complete target sequence. Hidden required items, selections absent from the current candidate page, and their metadata are retained.

<demo src="./__demos__/search.vue"></demo>

### Grouped

- `data`: Data of the transfer

<demo src="./__demos__/grouped.vue"></demo>

### Tree

- `data`: Data of the transfer
- `default-value`: The default value in the target selection box (uncontrolled state)

<demo src="./__demos__/tree.vue"></demo>

## Content customization

### Custom

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                                 | Related examples      |
| --------------- | --------------------------------------- | --------------------- |
| `data`          | Data of the transfer                    | Custom, Custom Header |
| `default-value` | Complete uncontrolled target-side state | Custom, Custom Header |

<!-- demo-config-notes:end -->

- `data`: Data of the transfer
- `default-value`: The default value in the target selection box (uncontrolled state)

<demo src="./__demos__/custom.vue"></demo>

### Custom Header

- `data`: Data of the transfer
- `default-value`: The default value in the target selection box (uncontrolled state)

<demo src="./__demos__/custom-header.vue"></demo>

## Large datasets

### Large Data

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration               | Purpose                              | Related examples |
| --------------------------- | ------------------------------------ | ---------------- |
| `data`                      | Data of the transfer                 | Large Data       |
| `virtual-scroll`            | Whether virtual scrolling is enabled | Large Data       |
| `source-filterable`         | Show the source search input         | Large Data       |
| `source-filter-placeholder` | Source search placeholder            | Large Data       |

<!-- demo-config-notes:end -->

- `data`: Data of the transfer

<demo src="./__demos__/large-data.vue"></demo>

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### `<transfer>` Props

| Parameter                 | Description                                          | Type                                                        |             Default             |
| ------------------------- | ---------------------------------------------------- | ----------------------------------------------------------- | :-----------------------------: |
| data                      | Data of the transfer                                 | `TransferItem[]` / `(query, { signal }) => Array / Promise` |           `undefined`           |
| model-value **(v-model)** | Complete ordered target-side state                   | `TransferTargetItem[]`                                      |               `-`               |
| default-value             | Complete uncontrolled target-side state              | `TransferTargetItem[]`                                      |              `[]`               |
| disabled                  | Whether disabled                                     | `boolean`                                                   |             `false`             |
| virtual-scroll            | Whether virtual scrolling is enabled                 | `boolean`                                                   |             `false`             |
| target-draggable          | Whether the target list can be reordered by dragging | `boolean`                                                   |             `false`             |
| target-operation          | Target actions shown as a remove icon or action menu | `'remove' \| 'menu'`                                        |           `'remove'`            |
| clear-text                | Target clear-button text                             | `string`                                                    |             `清空`              |
| target-actions            | Custom actions appended to the target menu           | `TransferTargetAction[]`                                    |              `[]`               |
| source-filterable         | Show the source search input                         | `boolean`                                                   |             `false`             |
| target-filterable         | Show the target search input                         | `boolean`                                                   |             `false`             |
| show-search               | Show both search inputs                              | `boolean`                                                   |             `false`             |
| filter                    | Custom filter callback                               | `TransferFilter`                                            | Case-insensitive label matching |
| source-filter-placeholder | Source search placeholder                            | `string`                                                    |               `-`               |
| target-filter-placeholder | Target search placeholder                            | `string`                                                    |               `-`               |
| show-selected             | Keep selected items in the source list               | `boolean`                                                   |             `true`              |
| source-title              | Source list title                                    | `string`                                                    |               `-`               |
| target-title              | Target list title                                    | `string`                                                    |               `-`               |
| show-select-all           | Whether show select all checkbox on the header       | `boolean`                                                   |             `true`              |
| title                     | Source/target list titles                            | `string[]`                                                  |     `['Source', 'Target']`      |
| source-search-props       | Source Search configuration in Cedar                 | `object`                                                    |               `-`               |
| target-search-props       | Target Search configuration in Cedar                 | `object`                                                    |               `-`               |

### `<transfer>` Events

| Event         | Description                             | Arguments                                     |
| ------------- | --------------------------------------- | --------------------------------------------- |
| change        | Emitted when target state changes       | value: `TransferTargetItem[]`                 |
| search        | Emitted on user search                  | value: `string`<br>type: `'target'\|'source'` |
| rename        | Emitted when renaming is confirmed      | value: `TransferValue`, label: `string`       |
| target-action | Emitted when a custom action is clicked | key: `string`, item: `TransferItem`           |

### `<transfer>` Slots

| Slot           |       Description        | Arguments                                                                                                                                                                                             | Version |
| -------------- | :----------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| source         |       Source panel       | data: `TransferItem[]`<br>selectedKeys: `string[]`<br>onSelect: `(value: string[]) => void`                                                                                                           | 2.39.0  |
| source-title   |    Source-title slot     | countTotal: `number`<br>countSelected: `number`<br>searchValue: `string`<br>checked: `boolean`<br>indeterminate: `boolean`<br>onSelectAllChange: `(checked:boolean) => void`<br>onClear: `() => void` | 2.45.0  |
| to-target-icon | Move-to-target icon slot | -                                                                                                                                                                                                     | 2.52.0  |
| to-source-icon | Move-to-source icon slot | -                                                                                                                                                                                                     | 2.52.0  |
| target         |       Target panel       | data: `TransferItem[]`<br>selectedKeys: `string[]`<br>onSelect: `(value: string[]) => void`                                                                                                           | 2.39.0  |
| target-title   |    Target-title slot     | countTotal: `number`<br>countSelected: `number`<br>searchValue: `string`<br>checked: `boolean`<br>indeterminate: `boolean`<br>onSelectAllChange: `(checked:boolean) => void`<br>onClear: `() => void` | 2.45.0  |
| item           |         Options          | value: `TransferValue`<br>label: `string`<br>item: `TransferItem`                                                                                                                                     |         |

### TransferItem

| Parameter | Description                                        | Type                           | Default |
| --------- | -------------------------------------------------- | ------------------------------ | :-----: |
| value     | Option value                                       | `string \| number`             |   `-`   |
| label     | Option label                                       | `string`                       |   `-`   |
| disabled  | Whether disabled                                   | `boolean`                      | `false` |
| group     | Source-group title                                 | `string`                       |   `-`   |
| tip       | Option hint                                        | `string \| (() => VNodeChild)` |   `-`   |
| required  | Whether required; required items cannot be removed | `boolean`                      | `false` |

### Type definitions

The component exports the following types

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
} from "@cedar-design/ui";
```

### Form field presentation and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-`direct` modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

`data` accepts an array or (query, { signal }) => array/Promise. The component manages loading, cancellation and stale-result isolation; failures emit load-error. Single/multiple groups initialize with an empty query; searchable fields reload when queries change. Tree root loading is independent of existing load-more child loading.

## Reading direction and keyboard interaction

Transfer places candidates at inline-start and selected items at inline-end. Direction changes preserve selected identity/order, filters and frozen state. Native checkboxes and removal buttons support keyboard interaction. Vertical drag ordering and existing left/right freeze values keep their business meaning.
