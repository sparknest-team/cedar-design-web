---
lang: en-US
permalink: /en/components/tree-select/
---

# TreeSelect

A tree-backed selection field with explicit search fields and controlled selection.

## Reading direction

Inherits source dir. Horizontal keys expand, enter children, return or collapse according to reading direction; vertical keys and Home/End keep logical order. Search uses the actual active match. Values and multiple-value arrays are not reversed. Portaled content retains source direction in custom containers.

## Basic examples

### Basic

<demo src="./__demos__/basic.vue"></demo>

### Checkbox multiple selection

Select a parent to check its available children. `tree-checked-strategy="child"` publishes leaf identities; disabled nodes remain unavailable.

<demo src="./__demos__/en-US/multiple.vue"></demo>

## Data and options

### Search Matching

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| -------------------- | ---------------------- | ------------------------------------------------ |
| `data` | Data | Search Matching, Retain the query after selecting |
| `filterable` | Whether to allow searching | Search Matching, Retain the query after selecting |
| `case-sensitive` | Case-sensitive built-in search | Search Matching |
| `multiple` | Whether to support multiple selection | Retain the query after selecting |
| `retain-input-value` | Keep search text after selecting an option | Retain the query after selecting |

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

| Configuration | Purpose | Related examples |
| --------------------- | -------------------------------------------------------------------------------------- | -------------------- |
| `data` | Data | Passthrough Options |
| `tree-props` | Can accept Props of all [Tree](/vue/component/tree) components | Passthrough Options |
| `open-trigger-target` | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | Copying and editing |
| `filterable` | Whether to allow searching | Copying and editing |

<!-- demo-config-notes:end -->


<demo src="./__demos__/passthrough-options.vue"></demo>

### Copying and editing

With open-trigger-target="icon", use the input area to edit or copy and the suffix button to open. Existing text remains copyable when editing or search is disabled.

<demo src="./__demos__/open-trigger-target.en-US.vue"></demo>

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### TreeSelect Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| need-confirm | `boolean` | Single `false`; multiple `true` | Applies only to overlay editing. Single selection commits and closes on choice by default; true keeps a draft until confirmation. Multiple selection defaults to confirmation. Submission still runs form validation and before-commit; rejection keeps the editor open. |
| model-value | TreeSelectValue | undefined | Controlled value: node identity, label value, homogeneous arrays or null. |
| default-value | TreeSelectValue | undefined | Uncontrolled initial value, read only at creation. |
| data | readonly TreeNodeData[] / `OptionsLoader<TreeNodeData>` | undefined | Root candidate array or (query, { signal }) loader. |
| multiple | boolean | false | Enable multiple selection and determine default searching when filterable is omitted. |
| label-in-value | boolean | false | Publish label-value objects; an explicit label takes precedence over the candidate name. |
| tree-checkable | boolean | false | Use tree checkboxes and a multiple-value model; this flag alone does not enable searching. |
| tree-check-strictly | boolean | false | Check parent and child nodes independently. |
| tree-checked-strategy | 'all' / 'parent' / 'child' | 'all' | Display strategy for linked checks, following Tree rules. |
| filterable | boolean | undefined | Explicit values take precedence; the default follows multiple, not tree-checkable. |
| retain-input-value | boolean | false | Retain search text after selection. |
| input-value | string | undefined | Controlled search text, independent of the selected value. |
| default-input-value | string | '' | Initial uncontrolled search text. |
| case-sensitive | boolean | false | Case-sensitive built-in node searching; custom callbacks take precedence. |
| search-fields | readonly OptionSearchField[]<br>`OptionSearchField: 'label' \| 'value'` | ['label'] | Built-in search fields, mapped through field-names. |
| filter-tree-node | (searchKey, nodeData) => boolean | undefined | Custom node filtering callback. |
| disable-filter | boolean | false | Disable internal node filtering for data already filtered by the application. |
| field-names | TreeFieldNames | undefined | Business node field mapping; identities must be unique across the tree. |
| load-more | (nodeData) => `Promise<void>` | undefined | Lazy node loading using the Tree loading protocol. |
| fallback-option | boolean / function | true | Synchronous node fallback for missing candidates; false hides unmatched values. |
| selectable | boolean / leaf / function | true | Node selection policy; leaf allows only leaf nodes. |
| tree-props | `Partial<TreeProps>` | undefined | Internal tree configuration; managed top-level fields take precedence; TreeSelectTreeOptions checks the boundary. |
| trigger-props | `Partial<TriggerProps>` | undefined | Candidate popup configuration; top-level opening and mounting policies take precedence. |
| dropdown-style | CSSProperties | undefined | Candidate content style. |
| dropdown-class-name | string / string[] | undefined | Additional candidate content classes. |
| scrollbar | boolean / ScrollbarProps | true | Candidate-area scrollbar configuration. |
| show-header-on-empty | boolean | false | Retain header content when candidates are empty. |
| show-footer-on-empty | boolean | false | Retain footer content when candidates are empty. |
| placeholder | string | undefined | Placeholder for the default selection field. |
| size | ComponentSize<br>`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | undefined | Selection field size, inherited from group and form when omitted. |
| border | boolean | true | The default field uses filled; false switches to standard. |
| max-tag-count | number | undefined | Maximum displayed selected tags; omission or 0 leaves the count unlimited. |
| disabled | boolean | undefined | Disable editing; inherited from the form when omitted. |
| readonly | boolean | undefined | Readonly, inherited from the form when omitted; distinct from pure reading. |
| error | boolean | undefined | Error state, inherited from the form when omitted. |
| loading | boolean | false | Field and candidate waiting feedback; pauses selection, clearing, removal and confirmation while retaining search and closing. |
| loading-mode | 'default' / 'line' | 'default' | Field indicator or bottom loading line; does not change the popup loader scope. |
| clearable | boolean | false | Allow clearing; deferred modes first update the draft. |
| empty-value | TreeSelectProps['emptyValue'] | undefined | Clear result override: node value, array, null or factory; omission preserves existing rules. |
| empty-values | readonly unknown[] | undefined | Empty-value recognition, inherited through field, FormItem and Form. |
| empty-text | string | undefined | Default empty reading text; defaults to a dash after inheritance; custom read takes precedence. |
| read-pretty | boolean | undefined | Common pure-reading state, inherited from the form when omitted. |
| edit-mode | direct / click / dblclick | undefined | Editing entry, inherited from the form when omitted, otherwise direct. |
| before-commit | BeforeFieldCommit | undefined | Before confirmation, calls ({ value, previousValue }, done, { signal }); complete with a boolean, Promise or done; synchronous undefined waits for done. |
| open | boolean | undefined | Controlled candidate popup or deferred editor state. |
| default-open | boolean | false | Initial uncontrolled open state. |
| popup-container | PopupContainer | undefined | Top-level mount target: selector, HTMLElement or false. |
| open-trigger-target | 'field' / 'icon' | 'field' | Open editing from the field or only its icon; keyboard entry remains available. |

### TreeSelect Events

| Event | Arguments | Description |
| --- | --- | --- |
| update:modelValue / change | TreeSelectValue / undefined | Selected value publication; deferred drafts do not trigger it. |
| update:inputValue / input-value-change / search | string | Input text and search notifications. |
| update:open / open-change | boolean | Candidate popup or editor open notifications. |
| keydown | KeyboardEvent | Field keyboard event; `preventDefault()` suppresses internal keyboard handling. |
| clear | — | Clear action notification; deferred modes still require confirmation. |
| load-error | error: unknown, node?: TreeNodeData | The current root data source or node loadMore failed; node failures include the original node. Listener Promises are not awaited. |

### TreeSelect Slots

| Slot | Arguments | Description |
| --- | --- | --- |
| trigger | — | Replace the default field trigger content. |
| read | TreeSelectReadScope | Common reading { value, text }; text is the formatted value and is empty for empty values; empty-text affects default reading only. |
| label | { data: SelectionFieldItem } | Selected item content in the default field. |
| selected / prefix / suffix | — | Selected area, prefix and suffix of the default field, consistent with Select. |
| clear-icon | { clear(event?) } | Custom clear node; call clear for the standard clear action. |
| arrow-icon | { focus, menuOpen } | Default field arrow with real focus and open state. |
| loading-icon / search-icon | — | Default field loading or search icon; line mode does not show a loading icon. |
| header / footer | — | Candidate content header and footer; corresponding props control visibility when empty. |
| loader / empty | — | Candidate panel waiting and empty content; loader is separate from the field loading-icon. |
| tree-slot-label / tree-slot-extra | node: TreeNodeData, status: TreeSelectNodeStatus | Forward Tree node label and extra content; node data is the first argument and status the second. |
| tree-slot-* | Parameters of the corresponding Tree slot | Other Tree slots are forwarded using the corresponding protocol. |

### TreeSelect Methods

| Method | Returns | Description |
| --- | --- | --- |
| refresh() | `Promise<void>` | Reload the current data source without opening the editor. |
| focus() / blur() | void | Operate the current default field input; deferred modes use the common editing entry. |

### Public types

TreeSelectProps is inferred from actual props. TreeSelectValue, TreeSelectLabelValue, TreeSelectReadScope, TreeSelectNodeStatus, TreeSelectEmits, TreeSelectSlots and TreeSelectExpose are available from the root and tree-select entry points. There is no default editor replacement slot; use tree-slot-label for node content.

### Editing and confirmation

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

### In-place editing and keyboard precedence

`click`/`dblclick` use Form's editing inheritance. Hover/focus shows an edit icon that opens editing directly. disabled, readonly and readPretty hide edit entries. Panel clicks change only the draft.

While open, arrows navigate visible enabled nodes; Left/Right collapse/expand or move to parents/children; Home/End reach first/last nodes. Enter selects/checks the current node, or toggles an unselectable branch. Search prioritizes matching nodes; multiple selection uses Tree checking rules. Esc first closes the panel, retaining the draft and restoring input focus. With the panel closed, Enter saves and Esc cancels editing. Compare AutoComplete/PeopleSelect in Form's unified field-presentation examples.

Checkboxes in a multiple-selection tree do not create separate Tab stops. Pointer selection retains input focus, and nodes expose checked and mixed states through `aria-checked`.

Duplicate expansion requests for the same asynchronously loaded node are merged. Replacing nodes, closing editors or resetting Form invalidates old requests so they cannot expand/check nodes. Arrows can enter loaded children immediately. Query/candidate changes clear old filters before Enter can choose stale options. Field confirmation still validates before asynchronous commit.

### Node fields and business values

Nodes default to `{ value, label, children }`. `value` is a tree-wide unique string/number, including `0`; `label` is display content. Map other backend fields with `fieldNames: { value: 'id', label: 'text', children: 'items' }` without changing backend data. Declarative child `name`, Vue `:key` and Table `rowKey` retain separate meanings.

Tree's standalone state uses `selectedValues/defaultSelectedValues`, `checkedValues/defaultCheckedValues`, `halfCheckedValues` and `expandedValues/defaultExpandedValues`, updated through the matching named v-models. The half-checked collection in the `check` event is `halfCheckedValues`. The node content slot is `label`; TreeSelect forwards it as `tree-slot-label`. `scrollIntoView({ value })` locates a node by business value, while an explicit `index` remains the virtual list's zero-based array index. Opening the virtual list scrolls to the active item; its reference is not exposed while it is unmounted and is restored after remounting.

### Search configuration

Use `filterable` for searching; omission follows only `multiple`. Enabling `tree-checkable` alone creates a `multiple`-value model without enabling searching; set `filterable` explicitly. `retain-input-value` independently retains search text after selection and defaults to false.

Replace the old `allow-search` with `filterable`. Replace `{ retainInputValue: true }` with `filterable` plus `retain-input-value`.

### Search fields

`searchFields` / `search-fields` is a readonly `('label' | 'value')[]`, defaulting to `['label']`. Multiple fields use OR matching, case-insensitive by default. `['value', 'label']` searches codes and names; fieldNames maps semantic fields to business fields. An empty array matches no items for a nonempty query. Values are compared as strings; object traversal, object values and pinyin matching require a custom callback. A custom callback takes precedence and decides case handling itself. Remote results use the existing protocol for disabling local filtering. Cascader retains path semantics and checks the configured fields on each path node.

## Configuring the cleared value

`empty-value` defines the output of an existing clear action. Omission preserves the component fallback; supported types remain component-specific. It does not change empty-values recognition or Form reset defaults.

Refresh can retry the component-owned asynchronous option source before the editor opens, using the existing AbortSignal, loading, and load-error protocol without opening the editor; static arrays do not create extra requests.

### Input and open button

The native combobox and separate open button both announce aria-haspopup=tree. While the panel is visible, the same aria-controls points to the actual tree. Expanded state stays synchronized; disabled/readonly and open-trigger-target rules remain in force.

### Selection actions during loading

While manual loading or the current candidate request is active, selection fields preserve existing values and pause selection, clearing and tag removal. Blocked actions neither notify nor submit a model. Search text remains editable and disabled/readonly are not changed; set them separately to prevent searching.

Deferred editor clearing and confirmation are unavailable while loading; cancellation and closing remain available. Actions return to their normal state after both the manual flag and current request finish, still respecting disabled options. Loading on free-text fields such as Input and AutoComplete continues to allow text editing and clearing.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-tree-select-highlight-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-tree-select-option-active-background` | `var(--c-color-fill-2)` | `background` |
| `--c-tree-select-option-radius` | `var(--c-select-popup-option-border-radius)` | `border-radius` |
| `--c-tree-select-popup-padding-left` | `var(--c-select-popup-padding-horizontal)` | `padding-inline-start` |
| `--c-tree-select-popup-padding-right` | `var(--c-select-popup-padding-horizontal)` | `padding-inline-end` |
| `--c-tree-select-popup-padding-vertical` | `var(--c-select-popup-padding-vertical)` | `padding`, `padding-block-end`, `padding-block-start` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-tree-select-option-active-background: var(--c-color-fill-2);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
