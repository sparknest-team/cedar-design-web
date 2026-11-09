---
lang: en-US
permalink: /en/components/transfer/
---

# Transfer

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

When omitted, `disabled` and `readonly` inherit from FormItem / Form; explicit false overrides the corresponding state. Both block transfers, sorting, renaming and custom header clear actions. Readonly still allows asynchronous options to load for display. When the target list changes from empty to populated, enabled drag sorting attaches to the list.

Items use their own checkboxes or action buttons without an extra inert row focus stop. Icon-only clear and target action menu controls are native buttons with localized names.

Within FormItem, the form error describes the transfer group instead of being repeated on every internal option. Caller-provided `role` and `aria-describedby` remain intact.

When a target value is absent from the current data, the target list still displays its label, falling back to its value. Updating data alone does not change the model. Disabled or required status cannot be inferred for a missing item; keep the corresponding option in data when those restrictions are needed.

## Basic examples

### Basic usage

- `data`: Data of the transfer
- `default-value`: The default value in the target selection box (uncontrolled state)

<demo src="./__demos__/basic.vue"></demo>

## Search and data structures

### Search

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --------------------------- | -------------------------- | ---------------------------- |
| `data` | Data of the transfer | Search, Grouped, Tree |
| `source-filterable` | Show the source search input | Search, Grouped |
| `default-value` | Complete uncontrolled target-side state | Search, Tree |
| `source-filter-placeholder` | Source search placeholder | Search, Grouped |
| `target-filterable` | Show the target search input | Search |
| `target-filter-placeholder` | Target search placeholder | Search |

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

| Configuration | Purpose | Related examples |
| --------------- | -------------------------- | ---------------------------- |
| `data` | Data of the transfer | Custom, Custom Header |
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

| Configuration | Purpose | Related examples |
| --------------------------- | -------------------- | -------- |
| `data` | Data of the transfer | Large Data |
| `virtual-scroll` | Whether virtual scrolling is enabled | Large Data |
| `source-filterable` | Show the source search input | Large Data |
| `source-filter-placeholder` | Source search placeholder | Large Data |

<!-- demo-config-notes:end -->


- `data`: Data of the transfer

<demo src="./__demos__/large-data.vue"></demo>

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Transfer Props

| Parameter | Description | Type | Default |
| ------------------------- | -------------------------------- | ----------------------------------------------------------- | :--------------------: |
| data | Data of the transfer | `TransferItem[]` / `(query, { signal }) => Array / Promise` | `undefined` |
| model-value **(v-model)** | Complete ordered target-side state | `TransferTargetItem[] \| null` | `-` |
| default-value | Complete uncontrolled target-side state | `TransferTargetItem[]` | `[]` |
| disabled | Disabled; inherits the form when omitted | `boolean` | `undefined` |
| readonly | Readonly; inherits the form when omitted | `boolean` | `undefined` |
| virtual-scroll | Whether virtual scrolling is enabled | `boolean` | `false` |
| target-draggable | Whether the target list can be reordered by dragging | `boolean` | `false` |
| target-operation | Target actions shown as a remove icon or action menu | `'remove' \| 'menu'` | `'remove'` |
| clear-text | Target clear-button text | `string` | `清空` |
| target-actions | Custom actions appended to the target menu | `TransferTargetAction[]` | `[]` |
| source-filterable | Show the source search input | `boolean` | `false` |
| target-filterable | Show the target search input | `boolean` | `false` |
| show-search | Show both search inputs | `boolean` | `false` |
| filter | Custom filter callback | `TransferFilter` | Case-insensitive label matching |
| source-filter-placeholder | Source search placeholder | `string` | `-` |
| target-filter-placeholder | Target search placeholder | `string` | `-` |
| show-selected | Keep selected items in the source list | `boolean` | `true` |
| source-title | Source list title | `string` | `-` |
| target-title | Target list title | `string` | `-` |
| show-select-all | Whether show select all checkbox on the header | `boolean` | `true` |
| title | Source/target list titles | `string[]` | `['全选', '已选']` |
| source-search-props | Source Search configuration in Cedar | `object` | `-` |
| target-search-props | Target Search configuration in Cedar | `object` | `-` |

### Transfer Events

| Event | Description | Arguments |
| ------------- | -------------------- | --------------------------------------------- |
| load-error | Async option loading failed | error: `unknown` |
| update:modelValue | Update the target state | value: `TransferTargetItem[]` |
| change | Emitted when target state changes | value: `TransferTargetItem[]` |
| search | Emitted on user search | value: `string`<br>type: `'target'\|'source'` |
| rename | Emitted when renaming is confirmed | value: `TransferValue`, label: `string` |
| target-action | Emitted when a custom action is clicked | key: `string`, item: `TransferItem` |

### Transfer Slots

| Slot | Description | Prop | Version |
| -------------- | :--------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----- |
| source | Source panel | data: `TransferItem[]`<br>selectedKeys: `TransferValue[]`<br>onSelect: `(value: TransferValue[]) => void` | 2.39.0 |
| source-title | Source-title slot | countTotal: `number`<br>countSelected: `number`<br>searchValue: `string`<br>checked: `boolean`<br>indeterminate: `boolean`<br>onSelectAllChange: `(checked:boolean) => void`<br>onClear: `() => void` | 2.45.0 |
| target | Target panel | data: `TransferItem[]`<br>selectedKeys: `TransferValue[]`<br>onSelect: `(value: TransferValue[]) => void` | 2.39.0 |
| target-title | Target-title slot | countTotal: `number`<br>countSelected: `number`<br>searchValue: `string`<br>checked: `boolean`<br>indeterminate: `boolean`<br>onSelectAllChange: `(checked:boolean) => void`<br>onClear: `() => void` | 2.45.0 |
| read | Custom reading content | `{ value, text }` |  |
| item | Options | value: `TransferValue`<br>label: `string`<br>item: `TransferItem` |  |

### TransferItem Props

| Parameter | Description | Type | Default |
| -------- | ---------------------------- | ------------------------------ | :-----: |
| value | Option value | `string \| number` | `-` |
| label | Option label | `string` | `-` |
| disabled | Whether disabled | `boolean` | `false` |
| group | Source-group title | `string` | `-` |
| tip | Option hint | `string \| (() => VNodeChild)` | `-` |
| required | Whether required; required items cannot be removed | `boolean` | `false` |

## Types

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

### Editing and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-direct modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

`data` accepts an array or (query, { signal }) => array/Promise. The component manages loading, cancellation and stale-result isolation; failures emit load-error. Single/multiple groups initialize with an empty query; searchable fields reload when queries change. Tree root loading is independent of existing load-more child loading.

## Reading direction and keyboard interaction

Transfer maintains selection directly through candidate-list checkboxes. Candidates sit at inline start and selections at inline end: candidates are right and selections left in RTL. Headings, search, clear/action spacing and joined radii follow direction.

Direction changes do not modify `modelValue`, selection order, search queries or frozen state. Vertical list dragging keeps its order semantics. Remove buttons are keyboard-operable; required and disabled items cannot be removed. Frozen `left/right` values retain their existing business grouping rather than swapping with reading direction.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-transfer-border-color` | `var(--c-color-neutral-3)` | `border` |
| `--c-transfer-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-transfer-border-width` | `var(--c-border-width-1)` | `border`, `margin-inline-start` |
| `--c-transfer-checkbox-padding-left` | `var(--c-spacing-3)` | `padding-inline-start` |
| `--c-transfer-clear-text-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-transfer-draggable-list-padding-y` | `var(--c-spacing-4)` | `padding` |
| `--c-transfer-footer-height` | `var(--c-size-10)` | `height` |
| `--c-transfer-footer-padding-horizontal` | `var(--c-spacing-4)` | `inset-inline-end`, `padding` |
| `--c-transfer-group-title-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-transfer-group-title-height` | `var(--c-size-9)` | `height` |
| `--c-transfer-group-title-line-height` | `var(--c-size-7)` | `line-height` |
| `--c-transfer-group-title-padding-top` | `var(--c-spacing-4)` | `padding` |
| `--c-transfer-header-bg` | `var(--c-color-fill-1)` | `background-color` |
| `--c-transfer-header-count-margin-right` | `var(--c-spacing-1)` | `margin-inline-end` |
| `--c-transfer-header-flex-basis` | `var(--c-size-11)` | `flex` |
| `--c-transfer-header-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-transfer-header-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-transfer-header-selected-count-margin-left` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-transfer-header-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-transfer-header-title-margin-right` | `var(--c-spacing-4)` | `margin-inline-end` |
| `--c-transfer-header-unit-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-transfer-header-unit-text-color` | `var(--c-color-text-3)` | `color` |
| `--c-transfer-height` | `400px` | `height` |
| `--c-transfer-icon-bg` | `var(--c-color-fill-3)` | `background-color` |
| `--c-transfer-icon-color` | `var(--c-color-text-2)` | `color` |
| `--c-transfer-icon-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-transfer-item-bg` | `transparent` | `background-color` |
| `--c-transfer-item-bg-disabled` | `transparent` | `background-color` |
| `--c-transfer-item-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-transfer-item-drag-handle-margin-right` | `var(--c-spacing-4)` | `margin-inline-end` |
| `--c-transfer-item-draggable-bg-blink` | `var(--c-color-primary-light-1)` | `background-color` |
| `--c-transfer-item-draggable-bg-dragging` | `var(--c-color-fill-1)` | `background-color` |
| `--c-transfer-item-draggable-gap-bg` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-transfer-item-draggable-gap-height` | `var(--c-spacing-1)` | `border-radius`, `bottom`, `height`, `top` |
| `--c-transfer-item-draggable-text-color-dragging` | `var(--c-color-text-4)` | `color` |
| `--c-transfer-item-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-transfer-item-height` | `var(--c-size-9)` | `height`, `line-height` |
| `--c-transfer-item-padding-horizontal` | `var(--c-spacing-5)` | `padding` |
| `--c-transfer-item-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-transfer-item-text-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-transfer-item-text-color-hover` | `var(--c-color-text-1)` | `color` |
| `--c-transfer-item-tip-margin-left` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-transfer-operation-buttons-gap` | `var(--c-spacing-6)` | `margin-top` |
| `--c-transfer-operation-menu-button-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-transfer-operation-menu-button-padding-x` | `var(--c-spacing-6)` | `padding` |
| `--c-transfer-operation-menu-button-padding-y` | `7px` | `padding` |
| `--c-transfer-operation-menu-min-width` | `140px` | `min-width` |
| `--c-transfer-operation-menu-padding` | `var(--c-spacing-2)` | `padding` |
| `--c-transfer-operation-padding-horizontal` | `var(--c-spacing-8)` | `padding` |
| `--c-transfer-operation-words-button-padding-x` | `var(--c-spacing-6)` | `padding` |
| `--c-transfer-pagination-input-width` | `var(--c-size-6)` | `width` |
| `--c-transfer-pagination-separator-gap` | `var(--c-spacing-4)` | `padding` |
| `--c-transfer-search-padding-bottom` | `var(--c-spacing-2)` | `padding-block` |
| `--c-transfer-search-padding-left` | `var(--c-spacing-6)` | `padding-inline` |
| `--c-transfer-search-padding-right` | `var(--c-spacing-6)` | `padding-inline` |
| `--c-transfer-search-padding-top` | `var(--c-spacing-4)` | `padding-block` |
| `--c-transfer-title-height` | `var(--c-size-10)` | `height`, `line-height` |
| `--c-transfer-transition-timing-function-linear` | `var(--c-transition-timing-function-linear)` | `animation-timing-function` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-transfer-border-color: var(--c-color-neutral-3);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
