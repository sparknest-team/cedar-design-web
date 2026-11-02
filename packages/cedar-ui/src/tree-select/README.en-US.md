---
lang: en-US
permalink: /en/components/tree-select/
---

# TreeSelect

A tree-backed selection field with explicit search fields and controlled selection.

## Reading direction

Inherits source dir. Horizontal keys expand, enter children, return or collapse according to reading direction; vertical keys and Home/End keep logical order. Search uses the actual active match. Values and multiple-value arrays are not reversed. Portaled content retains source direction in custom containers.

## Search migration

filterable replaces allowSearch. The old object retainInputValue option is now the independent retain-input-value boolean. filterable enables search; retain-input-value only retains query text after selecting. Default single selection disables search and multiple selection enables it.

Default local matching now searches label and ignores case. Restore the previous matching with search-fields=['value'] and case-sensitive=true. Multiple configured fields use OR matching. Custom filter-tree-node owns its matching rules. disableFilter bypasses built-in filtering.

## Basic examples

### Basic

<demo src="./__demos__/basic.vue"></demo>

### Api Review

## Data and options

### Search Matching

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration        | Purpose                                    | Related examples                                  |
| -------------------- | ------------------------------------------ | ------------------------------------------------- |
| `data`               | Data                                       | Search Matching, Retain the query after selecting |
| `filterable`         | Whether to allow searching                 | Search Matching, Retain the query after selecting |
| `case-sensitive`     | Case-sensitive built-in search             | Search Matching                                   |
| `multiple`           | Whether to support multiple selection      | Retain the query after selecting                  |
| `retain-input-value` | Keep search text after selecting an option | Retain the query after selecting                  |

<!-- demo-config-notes:end -->

<demo src="./__demos__/search-matching.vue"></demo>

### Retain the query after selecting

Type Al, then select Alice: the selected model contains Alice in both examples. Without retain-input-value the search text becomes empty; with it enabled, Al remains so Alan is still easy to select next. This does not control the selected label or whether the field is searchable. filterable enables searching.

<demo src="./__demos__/en-US/retain-input-value.vue"></demo>

The candidate `data` prop accepts an array or `(query, { signal }) => array/Promise`. Components own loading, cancellation and stale results, and emit load-error on failure. Choice groups initialize with an empty query; searchable fields load when queries change. Root tree loaders remain independent of existing load-more child loading.

## Lifecycle and edge cases

### Passthrough Options

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration         | Purpose                                                                                                                          | Related examples    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `data`                | Data                                                                                                                             | Passthrough Options |
| `tree-props`          | Can accept Props of all [Tree](/vue/component/tree) components                                                                   | Passthrough Options |
| `open-trigger-target` | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | Copying and editing |
| `filterable`          | Whether to allow searching                                                                                                       | Copying and editing |

<!-- demo-config-notes:end -->

<demo src="./__demos__/passthrough-options.vue"></demo>

### Copying and editing

With open-trigger-target="icon", use the input area to edit or copy and the suffix button to open. Existing text remains copyable when editing or search is disabled.

<demo src="./__demos__/open-trigger-target.en-US.vue"></demo>

### TreeSelect Props

| Prop                  | Description                                                                                                                      | Type                                                      | Default                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------- |
| `open-trigger-target` | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | `'field' \| 'icon'`                                       | `'field'`                     |
| model-value           | Value                                                                                                                            | string / number / array                                   | undefined                     |
| data                  | Data                                                                                                                             | TreeNodeData[] / `(query, { signal }) => Array / Promise` | `undefined`                   |
| multiple              | Whether to support multiple selection                                                                                            | boolean                                                   | false                         |
| filterable            | Whether to allow searching                                                                                                       | boolean                                                   | Single: false; multiple: true |
| retain-input-value    | Keep search text after selecting an option                                                                                       | boolean                                                   | false                         |
| case-sensitive        | Case-sensitive built-in search                                                                                                   | boolean                                                   | false                         |
| filter-tree-node      | Custom node filter function                                                                                                      | Function                                                  | undefined                     |
| tree-props            | Can accept Props of all [Tree](/vue/component/tree) components                                                                   | TreeProps                                                 | undefined                     |

### TreeSelect Events

| Event                                  | Description                              | Arguments     |
| -------------------------------------- | ---------------------------------------- | ------------- |
| update:modelValue                      | Request a selected business value update | value         |
| change                                 | Committed selected value changes         | value         |
| search                                 | Search text changes                      | text: string  |
| update:inputValue / input-value-change | Request input text update                | text: string  |
| update:open / open-change              | Panel visibility changes                 | open: boolean |
| clear                                  | Clear selection                          | None          |

### TreeSelect Slots

| Slot    | Description            |
| ------- | ---------------------- |
| default | Custom default content |

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom line); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### TreeSelect Props

| Prop                  | Description                                                                                                                      | Type                                                      | Default                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------- |
| `open-trigger-target` | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | `'field' \| 'icon'`                                       | `'field'`                     |
| model-value           | Value                                                                                                                            | string / number / array                                   | undefined                     |
| data                  | Data                                                                                                                             | TreeNodeData[] / `(query, { signal }) => Array / Promise` | `undefined`                   |
| multiple              | Whether to support multiple selection                                                                                            | boolean                                                   | false                         |
| filterable            | Whether to allow searching                                                                                                       | boolean                                                   | Single: false; multiple: true |
| retain-input-value    | Keep search text after selecting an option                                                                                       | boolean                                                   | false                         |
| case-sensitive        | Case-sensitive built-in search                                                                                                   | boolean                                                   | false                         |
| filter-tree-node      | Custom node filter function                                                                                                      | Function                                                  | undefined                     |
| tree-props            | Can accept Props of all [Tree](/vue/component/tree) components                                                                   | TreeProps                                                 | undefined                     |

`disabled`/`readonly` accept explicit field values and Form/FormItem inheritance. Confirmation locks editing. Failed validation preserves drafts; reset closes the popup and discards unfinished commits.

### TreeSelect Events

| Event                                  | Description                              | Arguments     |
| -------------------------------------- | ---------------------------------------- | ------------- |
| update:modelValue                      | Request a selected business value update | value         |
| change                                 | Committed selected value changes         | value         |
| search                                 | Search text changes                      | text: string  |
| update:inputValue / input-value-change | Request input text update                | text: string  |
| update:open / open-change              | Panel visibility changes                 | open: boolean |
| clear                                  | Clear selection                          | None          |

### TreeSelect Slots

| Slot    | Description            |
| ------- | ---------------------- |
| default | Custom default content |

## Type definitions

The component exports the following types

```ts
import type { TreeSelectProps } from "@cedar-design/ui";
```

### Form field presentation and confirmation

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

### In-place editing and keyboard precedence

`click`/`dblclick` use Form's editing inheritance. Hover/focus shows an edit icon that opens editing directly. disabled, readonly and readPretty hide edit entries. Panel clicks change only the draft.

While open, arrows navigate visible enabled nodes; Left/Right collapse/expand or move to parents/children; Home/End reach first/last nodes. Enter selects/checks the current node, or toggles an unselectable branch. Search prioritizes matching nodes; multiple selection uses Tree checking rules. Esc first closes the panel, retaining the draft and restoring input focus. With the panel closed, Enter saves and Esc cancels editing. Compare AutoComplete/PeopleSelect in Form's unified field-presentation examples.

Duplicate expansion requests for the same asynchronously loaded node are merged. Replacing nodes, closing editors or resetting Form invalidates old requests so they cannot expand/check nodes. Arrows can enter loaded children immediately. Query/candidate changes clear old filters before Enter can choose stale options. Field confirmation still validates before asynchronous commit.

### Node fields and business values

Nodes default to `{ value, label, children }`. `value` is a tree-wide unique string/number, including `0`; `label` is display content. Map other backend fields with `fieldNames: { value: 'id', label: 'text', children: 'items' }` without changing backend data. Declarative child `name`, Vue `:key` and Table `rowKey` retain separate meanings.

Independent Tree state uses `selectedValues/defaultSelectedValues`, `checkedValues/defaultCheckedValues`, `halfCheckedValues` and `expandedValues/defaultExpandedValues`, updated through corresponding named v-models. `check` event indeterminate sets use `halfCheckedValues`. Node content uses `label`; TreeSelect forwards `tree-slot-label`. `scrollIntoView({ value })` locates business values; explicit `index` remains a zero-based virtual-list array `index`.

### Search configuration

Use `filterable` to enable search: single defaults false, multiple true. `retain-input-value` separately controls whether selection retains the search query, default false.

Migration: `allow-search` becomes `filterable`; `{ retainInputValue: true }` becomes `filterable` plus `retain-input-value`. Old entries are removed without compatibility aliases and require a major release.

### Built-in search fields

`searchFields` / `search-fields` is a readonly `('label' | 'value')[]`, defaulting to `['label']`. Multiple fields use OR matching, case-insensitive by default. `['value', 'label']` searches codes and names; fieldNames maps semantic fields to business fields. An empty array matches no items for a nonempty query. Values are compared as strings; object traversal, object values and pinyin matching require a custom callback. A custom callback takes precedence and decides case handling itself. Remote results use the existing protocol for disabling local filtering. Cascader retains path semantics and checks the configured fields on each path node.

## Configuring the cleared value

`empty-value` / `emptyValue` sets the model value produced by clearing. It accepts a value in the component model type or a zero-argument factory. Omission preserves the existing default; use `() => undefined` to distinguish omission from returning undefined. Arrays are shallow-copied on every clear; selected items that cannot be cleared remain. It does not redefine emptiness, alter Form reset defaults or treat 0/false as universally empty.
