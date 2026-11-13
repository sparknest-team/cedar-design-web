---
lang: en-US
permalink: /en/components/cascader/
---

# Cascader

Hierarchical option selection with single, multiple and path models.

When cascading multiple selections, toggling a parent affects only selectable descendants; already selected disabled descendants are retained.

```ts
import type { CascaderProps, CascaderInstance } from "@cedar-design/ui-vue";
```

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes null unchanged; omitted values preserve the existing default. Editors render null as blank without converting ordinary empty-string input to null. In confirmation mode, clearing changes the draft; confirm commits it and cancel preserves the original model. Without confirmation, clearing commits directly.

The candidate `options` prop accepts an array or `(query, { signal }) => array/Promise`. Components own loading, cancellation and stale results, and emit load-error on failure. Choice groups initialize with an empty query; searchable fields load when queries change. Root tree loaders remain independent of existing load-more child loading.

## Reading direction

Inherits source dir. Child columns, expansion icons and separators follow reading direction. Horizontal keys enter loaded children or return to the parent in the visible direction, skipping disabled children; vertical keys retain logical order. Search preserves native horizontal caret editing. Path and multiple-value arrays are not reversed. Clearing the last value while closed resets navigation before reopening.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Appearance configuration comparison

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------- | ------------------------------------------------------ | ------------------------------ |
| `options` | Tree options; leaf values must be unique in scalar mode; paths distinguish branches | Appearance configuration comparison, Control Sizes |
| `clearable` | Allow clearing; preserve disabled selections | Appearance configuration comparison, Control Sizes |
| `size` | Supports all five sizes; inherits group/form settings | Control Sizes |
| `variant` | filled, outline, standard; inherits InputGroup | Control Sizes |
| `placeholder` | Placeholder | Control Sizes |
| `multiple` | Multiple selection; enables search by default | Control Sizes |

<!-- demo-config-notes:end -->


Choose an axis to compare its available values with the same content and model. Other settings remain unchanged while comparing.

<demo src="./__demos__/appearance-lab.vue"></demo>

### Control Sizes

- `size`: The size of the select
- `variant`: Selects the visual variant.
- `options`: Options for cascader
- `placeholder`: Placeholder

<demo src="../field-decorator/__demos__/control-sizes.vue"></demo>

## Selection modes and paths

### Multiple

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ---------------- | ------------------------------------------------------ | -------------------------------- |
| `options` | Tree options; leaf values must be unique in scalar mode; paths distinguish branches | Multiple, Check Strictly, Path Mode |
| `placeholder` | Placeholder | Multiple, Check Strictly, Path Mode |
| `multiple` | Multiple selection; enables search by default | Multiple, Check Strictly |
| `default-value` | Default value (uncontrolled state) | Check Strictly, Path Mode |
| `expand-trigger` | Menu / List expansion: click or hover | Check Strictly, Path Mode |
| `check-strictly` | Allow parent selection; unlink parent/child checks | Check Strictly |

<!-- demo-config-notes:end -->


- `options`: Options for cascader
- `placeholder`: Placeholder
- `multiple`: Whether it is a multi-selection state (The search is turned on by default in the multi-select mode)

<demo src="./__demos__/multiple.vue"></demo>

### Check Strictly

- `options`: Options for cascader
- `placeholder`: Placeholder
- `check-strictly`: Whether to enable strict selection mode
- `default-value`: Default value (uncontrolled state)

<demo src="./__demos__/check-strictly.vue"></demo>

### Path Mode

- `options`: Options for cascader
- `placeholder`: Placeholder
- `path-mode`: Whether the value is a path
- `default-value`: Default value (uncontrolled state)

<demo src="./__demos__/path-mode.vue"></demo>

### Clearable

- `options`: Options for cascader
- `placeholder`: Placeholder
- `clearable`: Whether to allow clear

<demo src="./__demos__/clearable.vue"></demo>

## Search and presentation

### Filterable

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ---------------- | ------------------------------------------------------ | -------------------------------------------- |
| `options` | Tree options; leaf values must be unique in scalar mode; paths distinguish branches | Filterable, Case Sensitive, Format Label |
| `placeholder` | Placeholder | Filterable, Case Sensitive, Format Label |
| `filterable` | Enable search | Filterable, Case Sensitive |
| `case-sensitive` | Case-sensitive built-in filtering; custom filters take priority | Case Sensitive |
| `format-label` | Format selected labels; use label slot for VNodes | Format Label |

<!-- demo-config-notes:end -->


- `options`: Options for cascader
- `placeholder`: Placeholder
- `filterable`: Whether to allow searching

<demo src="./__demos__/filterable.vue"></demo>

### Case Sensitive

- `options`: Options for cascader
- `filterable`: Whether to allow searching
- `placeholder`: Placeholder

<demo src="./__demos__/case-sensitive.vue"></demo>

### Format Label

- `options`: Options for cascader
- `placeholder`: Placeholder
- `format-label`: Format display content

<demo src="./__demos__/format-label.vue"></demo>

## Interaction and control

### Interaction state comparison

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ----------- | ------------------------------------------------------ | ------------ |
| `options` | Tree options; leaf values must be unique in scalar mode; paths distinguish branches | Interaction state comparison |
| `clearable` | Allow clearing; preserve disabled selections | Interaction state comparison |
| `disabled` | Whether disabled | Interaction state comparison |

<!-- demo-config-notes:end -->


Toggle the state, interact with the component, and restore editing using the controls outside the specimen. Error appearance alone does not run validation.

<demo src="./__demos__/state-lab.vue"></demo>

## Configuration and composition

### Passthrough Options

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --------------------- | -------------------------------------------------------------------------------------- | -------------------------------- |
| `edit-mode` | Presentation | Passthrough Options, Copying and editing |
| `options` | Tree options; leaf values must be unique in scalar mode; paths distinguish branches | Passthrough Options, Copying and editing |
| `trigger-props` | Menu Trigger props; field owns open state | Passthrough Options |
| `open-trigger-target` | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | Copying and editing |
| `filterable` | Enable search | Copying and editing |

<!-- demo-config-notes:end -->


- `open`: Whether to show the dropdown
- `options`: Options for cascader
- `trigger-props`: Trigger props of the drop-down menu

<demo src="./__demos__/passthrough-options.vue"></demo>

### Copying and editing

With open-trigger-target="icon", use the input area to edit or copy and the suffix button to open. Existing text remains copyable when editing or search is disabled.

<demo src="./__demos__/open-trigger-target.en-US.vue"></demo>

## Async loading and value resolution

### Loading

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| `options` | Tree options; leaf values must be unique in scalar mode; paths distinguish branches | Loading, Load More, Async Devices |
| `placeholder` | Placeholder | Loading, Load More, Async Devices |
| `loading` | Loading state; blocks selection and confirmation | Loading, Async Devices |
| `load-more` | Load children asynchronously; call done(children), or done() to allow retry | Load More |
| `path-mode` | Return a complete path instead of a node value | Async Devices |
| `filterable` | Enable search | Async Devices |

<!-- demo-config-notes:end -->


- `options`: Options for cascader
- `placeholder`: Placeholder
- `loading`: Whether it is loading state

<demo src="./__demos__/loading.vue"></demo>

### Load More

- `options`: Options for cascader
- `placeholder`: Placeholder
- `load-more`: Data lazy loading function, open the lazy loading function when it is passed in

<demo src="./__demos__/load-more.vue"></demo>

### Async Devices

- `options`: Options for cascader
- `loading`: Whether it is loading state
- `path-mode`: Whether the value is a path
- `filterable`: Whether to allow searching

<demo src="./__demos__/async-devices.vue"></demo>

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom line); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

## API

A panel branch's `aria-expanded` reflects whether its child column is actually displayed; focus or hover alone does not mark it expanded. Leaves have no `aria-expanded`. Selectable leaves and selectable strict-mode branches in a single-select hierarchical menu use `menuitemradio` and `aria-checked`; expansion-only branches remain `menuitem`, and multiple selection retains checkboxes. Single-select hierarchical panels have one Tab entry; arrow keys move between columns and options, while Tab or Shift+Tab leaves the menu. With virtualization, the entry remains among rendered options; custom interactive controls in option slots manage their own focus. Search results do not declare hidden submenus. Direct single-select search uses `listbox` and `option`, with the input referencing the popup and active item; editor single-select search uses `menuitemradio` and `aria-checked`, with one Tab entry. Hovering another option does not move that entry while an option owns focus. Multiple-select search retains checkboxes. In direct single-select search, the popup icon adds no Tab stop; click it or press ArrowDown in the input to open.

When options are added or removed at the end of a virtual column, options still within the rendered range retain their nodes and focus. Switching parents does not reuse the previous column's scroll position. Options can unmount when removed or outside the virtual window; business code should retain any long-lived input state used by slots.

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Cascader Props

Use `v-model`, `v-model:open` and `v-model:input-value` for controlled state. Clear values are `''` for single selection and `[]` for multiple selection. Select uses `undefined` when an actual empty-string option exists.

| Prop | Description | Type | Default |
| --------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | ------------------------ |
| need-confirm | Applies only to overlay editing. Single selection commits and closes on choice by default; true keeps a draft until confirmation. Multiple selection defaults to confirmation. Submission still runs form validation and before-commit; rejection keeps the editor open. | `boolean` | Single `false`; multiple `true` |
| `open-trigger-target` | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | `'field' \| 'icon'` | `'field'` |
| `model-value` | Controlled selected value; supports v-model | `CascaderBaseValue` | `undefined` |
| `default-value` | Initial uncontrolled selection; read once | `CascaderBaseValue` | Single: `undefined` with path-mode, otherwise `''`; multiple: `[]` |
| `open` | Controlled open state; supports v-model:open | `boolean` | `undefined` |
| `default-open` | Initial uncontrolled open state; read only at initialization | `boolean` | `false` |
| `input-value` | Controlled search text, independent of selection; supports v-model:input-value | `string` | `undefined` |
| `default-input-value` | Initial uncontrolled search text, independent of selection; read only at initialization | `string` | `''` |
| `multiple` | Multiple selection; enables search by default | `boolean` | `false` |
| `size` | Supports all five sizes; inherits group/form settings | `ComponentSize`<br>`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `md` |
| `variant` | filled, outline, standard; inherits InputGroup | `FormControlVariant`<br>`'standard' \| 'filled' \| 'outline'` | `outline` |
| `disabled` | Disabled state; explicit values override inherited Form / Group state | `boolean` | `undefined` |
| `readonly` | Read-only state; explicit values override inherited Form / Group state | `boolean` | `undefined` |
| `error` | Error state; explicit values override inherited Form / Group state | `boolean` | `undefined` |
| `placeholder` | Placeholder | `string` | `—` |
| `hint` | Enable the floating hint | `boolean` | `false` |
| `line` | Show the underline in the standard variant | `boolean` | `true` |
| `text-color` | Custom per-instance text color; prefer tokens for static themes | `string` | `—` |
| `focus-color` | Custom per-instance focused color; prefer tokens for static themes | `string` | `—` |
| `blur-color` | Custom per-instance unfocused color; prefer tokens for static themes | `string` | `—` |
| `loading` | Loading pauses selection, clearing, tag removal and confirmation; retains values while search and closing remain available. | `boolean` | `false` |
| `loading-mode` | Field loading presentation: default indicator or bottom indeterminate line. | `default / line` | `default` |
| `search-fields` | Fields used by built-in path search; defaults to label; custom filtering callbacks take precedence. | `readonly OptionSearchField[]`<br>`OptionSearchField: 'label' \| 'value'` | `['label']` |
| `read-pretty` | Common pure-reading state, inherited from FormItem / Form when omitted; independent of readonly and disabled. | `boolean` | `undefined` |
| `empty-value` | Clear output override; does not change empty-value recognition. | `CascaderProps['emptyValue']` | `undefined` |
| `before-commit` | Before confirmation, calls ({ value, previousValue }, done, { signal }); complete with a boolean, Promise or done; synchronous undefined waits for done. | `BeforeFieldCommit` | `undefined` |
| `show-tags` | Show tags; false displays separated text | `boolean` | `true` |
| `separator` | Separator when show-tags=false | `string` | `,` |
| `text-align` | Physical text alignment: left / center / right. When omitted, inherits FormItem content-align; standalone fields default to logical start | `'left' \| 'center' \| 'right'` | `-` |
| `max-tag-count` | Finite nonnegative integer; 0 leaves the displayed tag count unlimited. | `number` | `0` |
| `tag-nowrap` | Keep tags on one line with ellipsis and preserved removal icons; overflow scrolls horizontally; hover, focus or tap truncated text to preview it | `boolean` | `false` |
| `popup-container` | Selector, element, element resolver, or false for inline rendering | `PopupContainer` | `—` |
| `trigger-props` | Menu Trigger props; field owns open state | `TriggerProps` | `—` |
| `virtual-list-props` | Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps) | `VirtualListProps` | `—` |
| `search-delay` | Finite nonnegative search debounce delay in milliseconds. | `number` | `500` |
| `format-label` | Format selected labels; use label slot for VNodes | `function` | `—` |
| `clearable` | Allow clearing; preserve disabled selections | `boolean` | `false` |
| `options` | Tree options; leaf values must be unique in scalar mode; paths distinguish branches | `CascaderOption[]` / `(query, { signal }) => Array / Promise` | `undefined` |
| `field-names` | Map value, label, disabled, children, isLeaf, tagProps, render | `CascaderFieldNames` | `—` |
| `path-mode` | Return a complete path instead of a node value | `boolean` | `false` |
| `check-strictly` | Allow parent selection; unlink parent/child checks | `boolean` | `false` |
| `filterable` | Enable search | `boolean` | `Single: false; multiple: true` |
| case-sensitive | Case-sensitive built-in filtering; custom filters take priority | boolean | false |
| `filter-option` | Receives query and raw node | `(input, option) => boolean` | `—` |
| `expand-trigger` | Menu / List expansion: click or hover | `string` | `click` |
| `expand-child` | Expand to first child | `boolean` | `false` |
| `load-more` | Load children asynchronously; call done(children), or done() to allow retry | `(option, done) => void` | `—` |
| `fallback-option` | Display unresolved values | `boolean or (value) => { value, label }` | `true` |
| `search-option-only-label` | Show node label only in search results | `boolean` | `false` |
| `auto-fit-popup-width` | Match Menu width to field | `boolean` | `false` |
| `edit-mode` | Field presentation; inherits FormItem / Form when omitted. | `direct / click / dblclick` | `direct` |

### Cascader Events / Methods

In direct mode, Arrow Down requests opening when the field is closed. Once opened, the first enabled option becomes active if no option is already active and focus remains in the field, including when options arrive asynchronously. Losing focus, closing, or interacting again cancels the pending activation. A controlled `open` changes only when the parent accepts the request.

When a menu option has focus, Enter or Space activates it. Search inputs and nested checkboxes keep their own keyboard behavior.

- `keydown(event)`: keyboard event from the field, candidate menu, or editor panel; `preventDefault()` suppresses internal keyboard handling.

- `update:modelValue`, `change(value)`: emitted on commit, not while editing a draft.
- `update:open`, `open-change(open)`: request an expanded-state change.
- `update:inputValue`, `input-value-change(text)`, `search(text)`: search state.
- `focus(event)`, `blur(event)`, `clear(event)`: native field events; only the field owner notifies Form.
- `load-error(error)`: current options source failure notification; listener Promises are not collected.
- Methods: `focus()`, `blur()` and `refresh(): Promise<void>`; refresh does not open the editor.

### Slots and option data

Use `label({ data })` for custom `selected` labels; `selected` replaces the whole selection area. Also supports `prefix`, `suffix`, `clear-icon({ clear })`, `arrow-icon`, `loading-icon`, `search-icon`, `empty`, and `option({ data })`.

Option `label` is searchable plain text. Use `render` or the `option` slot for custom `option` content, and `format-label` or `label` slot for selected content. Values identify selections; labels never do. `disabled` blocks selection/removal, and `tagProps` customizes selected tags.

Buttons, links, input controls, list options, tree nodes, grid cells, elements with non-negative tabindex, audio/video with controls and nested Cascaders inside custom options manage their own clicks without selecting the outer option; ordinary content remains selectable. When `role` contains multiple tokens, the first role supported by the component determines click ownership. A standalone panel inside Shadow DOM moves option focus within its own root when using arrow keys. A click canceled with `preventDefault` does not trigger an option action, and continues to bubble according to DOM rules.

### CascaderPanel Props

| Parameter | Description | Type | Default |
| ------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------: |
| path-mode | Return a complete path instead of a node value | `boolean` | `false` |
| multiple | Multiple selection; enables search by default | `boolean` | `false` |
| model-value **(v-model)** | Bound value | `string\| number\| Record<string, any>\| (    \| string    \| number    \| Record<string, any>    \| (string \| number \| Record<string, any>)[]  )[]\| undefined` | `-` |
| default-value | Default value (uncontrolled state) | `string\| number\| Record<string, any>\| (    \| string    \| number    \| Record<string, any>    \| (string \| number \| Record<string, any>)[]  )[]\| undefined` | `'' \| undefined \| []` |
| options | Tree options; leaf values must be unique in scalar mode; paths distinguish branches | `CascaderOption[]` | `[]` |
| expand-trigger | Menu / List expansion: click or hover | `string` | `'click'` |
| check-strictly | Allow parent selection; unlink parent/child checks | `boolean` | `false` |
| load-more | Load children asynchronously; call done(children), or done() to allow retry | `(  option: CascaderOption,  done: (children?: CascaderOption[]) => void) => void` | `-` |
| field-names | Customize fields in `CascaderOption`; when option `value` is an object, `value` is also used as the key property | `CascaderFieldNames` | `-` |
| expand-child | Expand to first child | `boolean` | `false` |

### CascaderPanel Events

| Event | Description | Arguments |
| ------ | ---------------- | -------------------------------------------------------------------------------------- |
| change | Emitted when the selected value changes | value: `string \| number \| (string \| number \| (string \| number)[])[] \| undefined` |

### CascaderPanel Slots

| Slot | Description | Prop |
| ------ | :------------------: | ---- |
| empty | Content displayed when no options are available | - |

## Types

### CascaderOption

| Parameter | Description | Type | Default |
| -------- | -------------- | ----------------------------------------- | :-----: |
| value | Option value | `string \| number \| Record<string, any>` | `-` |
| label | Option text | `string` | `-` |
| render | Custom render function | `RenderFunction` | `-` |
| disabled | Whether disabled | `boolean` | `false` |
| tagProps | Property used for the displayed label | `TagProps` | `-` |
| children | Child options | `CascaderOption[]` | `-` |
| isLeaf | Whether this is a leaf node | `boolean` | `false` |

The component exports the following types

```ts
import type { CascaderProps } from "@cedar-design/ui-vue";
```

### Editing and confirmation

Use `edit-mode` to configure editing; field > FormItem > Form precedence applies, defaulting to `direct`. Supported values: `direct / click / dblclick`. Non-direct modes open an editor through the field value. Single selection commits on choice by default; need-confirm enables a draft and confirmation. Multiple selection defaults to confirmation. Cancel, reset or enabling readPretty discards an uncommitted draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit({ value, previousValue }, done, { signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

Field editing uses edit-mode: Cedar supports direct/click/dblclick, and Maple supports direct/popup. The old menu/list/picker editing values are not retained. Popup editors reuse the existing option index, search, asynchronous loading and virtual-list algorithms.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

### Search fields

`searchFields` / `search-fields` is a readonly `('label' | 'value')[]`, defaulting to `['label']`. Multiple fields use OR matching, case-insensitive by default. `['value', 'label']` searches codes and names; fieldNames maps semantic fields to business fields. An empty array matches no items for a nonempty query. Values are compared as strings; object traversal, object values and pinyin matching require a custom callback. A custom callback takes precedence and decides case handling itself. Remote results use the existing protocol for disabling local filtering. Cascader retains path semantics and checks the configured fields on each path node.

## Configuring the cleared value

`empty-value` defines the output of an existing clear action. Omission preserves the component fallback; supported types remain component-specific. It does not change empty-values recognition or Form reset defaults.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omission preserves the existing default. The UI displays null as blank without converting ordinary empty-string input to null. In confirmation mode, clearing changes the draft and confirm commits it; without confirmation, clearing commits directly.

The `options` prop accepts an array or `(query, { signal }) => array/Promise`. The component manages loading, cancellation and stale-result isolation; failures emit load-error. Single/multiple groups initialize with an empty-string query, searchable fields reload when the query changes, and root loading for tree fields remains independent of existing load-more child loading.

### Lazy-loading completion and errors

When an expandable option has unloaded children, Enter, Space, or the forward arrow starts lazy loading and displays its pending state. The forward arrow moves into children only if focus remains on the input or option that received the key. Search results do not expand children.

`loadMore(option, done)` keeps a callback-only contract in the field and standalone panel. Call `done(children)` to accept children or `done()` to end waiting and allow retry. Only the first callback is accepted; return values, including a resolved Promise, do not replace `done`. A synchronous loader exception releases waiting and reaches Vue's `errorCaptured` / application `errorHandler`. The `load-error` event remains specific to the `options` data source; it does not report `loadMore` exceptions. Handle asynchronous callback-based request failures in business code and call `done()`.

Replacing options, including nested mutations, field mappings or the loader invalidates old requests and cached lazy children. Unmounting or deactivation invalidates pending callbacks; stale results cannot modify replacement nodes or clear a newer request's pending state.

Public focus/blur methods are callable from initial mount. Focus opens an editable deferred editor and targets it after readiness; disabled, readonly, or reading fields do not open. Blur only blurs the current target without reopening. Stored methods never bind an old editor; closure, mode changes, deactivation, or unmount cancel queued calls.

Refresh can retry the component-owned asynchronous option source before the editor opens, using the existing AbortSignal, loading, and load-error protocol without opening the editor; static arrays do not create extra requests.

The existing CascaderEditMode type is exported from both the component subentry and the root entry, matching the edit-mode values supported by the current platform.

### Selection actions during loading

While manual loading or the current candidate request is active, selection fields preserve existing values and pause selection, clearing and tag removal. Blocked actions neither notify nor submit a model. Search text remains editable and disabled/readonly are not changed; set them separately to prevent searching.

Deferred editor clearing and confirmation are unavailable while loading; cancellation and closing remain available. Actions return to their normal state after both the manual flag and current request finish, still respecting disabled options. Loading on free-text fields such as Input and AutoComplete continues to allow text editing and clearing.

option({ data }) receives normalized CascaderOptionInfo; data.raw is the original option and data.path is the normalized root-to-current path. label({ data }) receives the field display item key/value/label/closable/tagProps. arrow-icon({ focus, menuOpen }) receives the real field focus and open state. read({ value, text }) retains null/undefined and the original model shape.

Public types include CascaderBaseValue, CascaderOptionInfo, CascaderReadScope, CascaderEmits, CascaderSlots and CascaderExpose from the root and cascader entry points. Standalone CascaderPanel accepts option arrays and does not own a root candidate loader.

Pending acceptance: verify actual screen-reader announcements with supported browsers (such as VoiceOver and NVDA), including field naming, hierarchical navigation and expanded state, search and selection, single and multiple modes, virtualized options, and form errors. This acceptance has not yet been completed.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-cascader-checkbox-bg-hover` | `var(--c-color-fill-3)` | `background-color` |
| `--c-cascader-font-item-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-cascader-item-bg-active` | `transparent` | `background`, `background-color` |
| `--c-cascader-item-bg-disabled` | `transparent` | `background-color` |
| `--c-cascader-item-bg-disabled-active` | `var(--c-color-fill-2)` | `background-color` |
| `--c-cascader-item-bg-hover` | `var(--c-color-fill-2)` | `background`, `background-color` |
| `--c-cascader-item-check-color` | `var(--c-sys-color-action-primary)` | `color` |
| `--c-cascader-item-check-size` | `var(--c-sys-font-size-md)` | `height`, `width` |
| `--c-cascader-item-icon-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-cascader-item-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-cascader-item-text-color-active` | `var(--c-sys-color-action-primary)` | `color` |
| `--c-cascader-item-text-color-disabled` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-cascader-item-text-color-disabled-active` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-cascader-item-text-color-hover` | `var(--c-cascader-item-text-color)` | `color` |
| `--c-cascader-margin-checkbox-right` | `var(--c-sys-space-4)` | `margin-inline-end` |
| `--c-cascader-margin-item-icon-left` | `var(--c-sys-space-5)` | `margin-inline-start` |
| `--c-cascader-option-min-width` | `100px` | `min-width` |
| `--c-cascader-padding-item-left` | `var(--c-sys-space-5)` | `padding-inline-end`, `padding-inline-start` |
| `--c-cascader-padding-item-right` | `var(--c-sys-space-5)` | `margin-inline-end`, `padding-inline-end` |
| `--c-cascader-panel-column-max-height` | `200px` | `max-height` |
| `--c-cascader-panel-column-min-width` | `120px` | `min-width` |
| `--c-cascader-popup-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-cascader-popup-box-shadow` | `0 4px 10px rgba(0, 0, 0, 0.1)` | `box-shadow` |
| `--c-cascader-popup-color-border` | `var(--c-color-fill-3)` | `border`, `border-inline-end`, `border-top` |
| `--c-cascader-popup-max-height` | `200px` | `height` |
| `--c-cascader-popup-padding-vertical` | `var(--c-sys-space-2)` | `padding`, `padding-block-end` |
| `--c-cascader-size-item-height` | `36px` | `height`, `line-height` |
| `--c-cascader-size-item-icon` | `12px` | `height`, `width` |
| `--c-cascader-slide-margin` | `120px` | `margin-inline-start` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-cascader-font-item-size: var(--c-sys-font-size-md);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
