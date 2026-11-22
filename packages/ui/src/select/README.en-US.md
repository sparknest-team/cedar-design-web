---
lang: en-US
permalink: /en/components/select/
---

# Select

Single or multiple selection with array options, controlled values and shared field presentation.

## Reading direction

Select inherits source `dir`. Standalone fields align to inline start; FormItem content-align still takes precedence when inherited. Explicit left/right alignment remains physical. Tags keep their array order and empty-search Backspace removes the last closable value. Dropdowns and picker panels retain source direction, including in a custom popup-container.

## Async arrays and clearing

useAsyncData is a public composable exported by @cedar-design/use-vue. Pass a loader to that composable and bind its data/loading to Select. Options remain arrays. An initialization call is per owner; share a parent result to avoid duplicate loading.

empty-value sets the single-selection clear result. Omitted preserves the existing behavior: empty string unless an empty-string option exists, in which case clearing may produce undefined. The event types include undefined. Multiple selection keeps its array semantics and cannot clear disabled selected options.

case-sensitive defaults to false. search-fields defaults to ['label']; ['value', 'label'] matches either field. Custom filters retain priority.

| Variable | Default |
| ------------------------------------- | ----------------------------------- |
| `--c-select-popup-option-check-color` | `var(--c-sys-color-action-primary)` |
| `--c-select-popup-option-check-size` | `var(--c-sys-font-size-md)` |
| `--c-select-popup-option-check-gap` | `var(--c-sys-space-4)` |

## Basic examples

### Basic

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Appearance configuration comparison

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------- | --------------------------------------------------- | ------------------------------ |
| `options` | Primitive, object or grouped options; one source for every presentation | Appearance configuration comparison, Control Sizes |
| `clearable` | Allow clearing; preserve disabled selections | Appearance configuration comparison, Control Sizes |
| `size` | Supports all five sizes; inherits group/form settings | Control Sizes |
| `variant` | filled, outline, standard; inherits InputGroup | Control Sizes |
| `placeholder` | Placeholder | Control Sizes |
| `multiple` | Multiple selection; enables search by default | Control Sizes |

<!-- demo-config-notes:end -->


Choose a dimension to compare all its values side by side while keeping other settings and content identical. Change the other settings to inspect combinations; input specimens share one model.

<demo src="./__demos__/appearance-lab.en-US.vue"></demo>

### Control Sizes

<demo src="../field-decorator/__demos__/control-sizes.en-US.vue"></demo>

## Selection modes and options

### Multiple

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------- | ------------------------------------------------ | ------------------------------------ |
| `placeholder` | Placeholder | Multiple, Same Label, Optgroup |
| `multiple` | Multiple selection; enables search by default | Multiple, Same Label, Optgroup |
| `clearable` | Allow clearing; preserve disabled selections | Multiple, Same Label, Options Review |
| `filterable` | Enable search; optionally retainInputValue | Same Label, Options Review |
| `options` | Primitive, object or grouped options; one source for every presentation | Same Label, Group Spacing |
| `scrollbar` | Whether to enable virtual scroll bar | Multiple |

<!-- demo-config-notes:end -->


<demo src="./__demos__/multiple.vue"></demo>

### Single-selection confirmation

Applies only to overlay editing. Single selection commits and closes on choice by default; true keeps a draft until confirmation. Multiple selection defaults to confirmation. Submission still runs form validation and before-commit; rejection keeps the editor open.

<demo src="./__demos__/en-US/confirmation.vue"></demo>

### Same Label

<demo src="./__demos__/same-label.vue"></demo>

### Optgroup

<demo src="./__demos__/optgroup.vue"></demo>

### Group Spacing

<demo src="./__demos__/group-spacing.vue"></demo>

### Options Review

<demo src="./__demos__/options-review.vue"></demo>

### Allow Create

<demo src="./__demos__/allow-create.vue"></demo>

### Fallback Option

<demo src="./__demos__/fallback-option.vue"></demo>

## Search and filtering

### Filterable

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ---------------- | ------------------------------------------------ | ------------------------------------ |
| `placeholder` | Placeholder | Filterable, Search Matching, Dropdown Scroll |
| `options` | Primitive, object or grouped options; one source for every presentation | Filterable, Search Matching, Virtual List |
| `filterable` | Enable search; optionally retainInputValue | Filterable, Search Matching |
| `loading` | Loading state; blocks selection and confirmation | Filterable |
| `multiple` | Multiple selection; enables search by default | Filterable |
| `case-sensitive` | Case-sensitive built-in filtering; custom filters take priority | Search Matching |

<!-- demo-config-notes:end -->


<demo src="./__demos__/filterable.vue"></demo>

### Search Matching

<demo src="./__demos__/search-matching.vue"></demo>

### Dropdown Scroll

<demo src="./__demos__/dropdown-scroll.vue"></demo>

### Virtual List

<demo src="./__demos__/virtual-list.vue"></demo>

## Content and dropdown customization

### Tag Props

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------- | ------------------------------------------------ | --------------------------------------------- |
| `placeholder` | Placeholder | Tag Props, Custom Header, Custom Footer |
| `multiple` | Multiple selection; enables search by default | Tag Props, Custom Header, Slots Review |
| `options` | Primitive, object or grouped options; one source for every presentation | Tag Props, Slots Review |
| `filterable` | Enable search; optionally retainInputValue | Custom Footer, Slots Review |
| `clearable` | Allow clearing; preserve disabled selections | Slots Review |

<!-- demo-config-notes:end -->


<demo src="./__demos__/tag-props.vue"></demo>

### Custom Header

<demo src="./__demos__/custom-header.vue"></demo>

### Custom Footer

<demo src="./__demos__/custom-footer.vue"></demo>

### Custom Label

<demo src="./__demos__/custom-label.vue"></demo>

### Slots Review

<demo src="./__demos__/slots-review.vue"></demo>

## Value model and linked fields

### Selection Data Flow

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `options` | Primitive, object or grouped options; one source for every presentation | Selection Data Flow, Linkage, Empty recognition and clear output |
| `clearable` | Allow clearing; preserve disabled selections | Empty recognition and clear output, Interaction state comparison |
| `edit-mode` | Field presentation; inherits FormItem/Form when omitted | Selection Data Flow |
| `default-active-first-option` | On opening, activate the first enabled candidate if no valid selected option exists. Highlighting does not update modelValue or emit change; an existing valid selection takes priority | Selection Data Flow |
| `placeholder` | Placeholder | Selection Data Flow |
| `empty-value` | Clear output override; return an array for multiple selection and preserve protected items | Empty recognition and clear output |

<!-- demo-config-notes:end -->


<demo src="./__demos__/selection-data-flow.en-US.vue"></demo>

### Linkage

<demo src="./__demos__/linkage.vue"></demo>

### Empty recognition and clear output

This example keeps an empty string as the valid All option and clears to null. Compare the selected All option with the cleared state in the model output. Deleting the search query does not remove the selected value. The additional fields show multiple selection clearing to [] and a factory explicitly producing undefined, each with its own model output.

<demo src="./__demos__/en-US/empty-value.vue"></demo>

### Interaction state comparison

Toggle disabled, read-only and error states, then interact with the same instance. Recovery controls remain outside the target; error appearance alone does not validate data.

<demo src="./__demos__/state-lab.vue"></demo>

## Async data and search

### Loading

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --------------- | ------------------------------------------------ | ---------------------------------------------------------------------- |
| `loading` | Loading state; blocks selection and confirmation | Loading, Search, Async Devices |
| `options` | Primitive, object or grouped options; one source for every presentation | Search, Async Devices, Async Source |
| `placeholder` | Placeholder | Loading, Search, Async Devices |
| `filterable` | Enable search; optionally retainInputValue | Async Devices, Async Source, Async Data |
| `multiple` | Multiple selection; enables search by default | Search, Async Devices |
| `filter-option` | false disables local filtering; callback receives query and raw option | Search |

<!-- demo-config-notes:end -->


<demo src="./__demos__/loading.en-US.vue"></demo>

### Search

<demo src="./__demos__/search.vue"></demo>

### Async Devices

<demo src="./__demos__/async-devices.vue"></demo>

### Async Source

<demo src="./__demos__/async-source.vue"></demo>

### Async Data

<demo src="./__demos__/en-US/async-data.vue"></demo>

## Configuration and lifecycle

### Passthrough Options

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `options` | Primitive, object or grouped options; one source for every presentation | Passthrough Options, Scheduler Lifecycle, Copying and editing |
| `edit-mode` | Field presentation; inherits FormItem/Form when omitted | Passthrough Options, Copying and editing |
| `trigger-props` | Optional dropdown Trigger settings. Placement defaults to bottom-start and automatically adjusts when space is limited. The field owns open state; there is no top-level placement prop | Passthrough Options |
| `open-trigger-target` | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | Copying and editing |
| `filterable` | Enable search; optionally retainInputValue | Copying and editing |

<!-- demo-config-notes:end -->


<demo src="./__demos__/passthrough-options.vue"></demo>

### Scheduler Lifecycle

<demo src="./__demos__/scheduler-lifecycle.vue"></demo>

### Copying and editing

With open-trigger-target="icon", use the input area to edit or copy and the suffix button to open. Existing text remains copyable when editing or search is disabled.

<demo src="./__demos__/open-trigger-target.en-US.vue"></demo>

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom line); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

Selected rows show a primary-colored right-side checkmark in both single/multiple modes; candidate highlighting alone does not. In confirmation editors, checkmarks reflect draft selection, committed to Form on confirmation. Disabled selected items retain disabled appearance.

### Clear values

`SelectValue` includes `undefined`. By default, single-select clear emits `''`; if the current options contain a `value: ''` option, it emits `undefined` to distinguish clearing from selecting that option. This published behavior is preserved. Both `change` and `update:modelValue` use `SelectValue`.

`empty-value` defines clear output; omission preserves the existing fallback. Single selection can use `() => undefined` to explicitly return undefined; multiple selection should return an array matching its model shape. Protected disabled selections take priority and prevent the clear override from running. Controlled mode still requires parent acceptance.

Root and component entries export `SelectValue` and `SelectEmptyValue`.

### Select Props

Use `v-model`, `v-model:open` and `v-model:input-value` for controlled state. Clear values are `''` for single selection and `[]` for multiple selection. Select uses `undefined` when an actual empty-string option exists.

| Prop | Description | Type | Default |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------- |
| need-confirm | Applies only to overlay editing. Single selection commits and closes on choice by default; true keeps a draft until confirmation. Multiple selection defaults to confirmation. Submission still runs form validation and before-commit; rejection keeps the editor open. | `boolean` | Single `false`; multiple `true` |
| `open-trigger-target` | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | `'field' \| 'icon'` | `'field'` |
| `model-value` | Controlled selected value; supports v-model | `Value \| null` | `undefined` |
| `default-value` | Initial uncontrolled selection; read once | `Value` | Single: `''`; multiple: `[]` |
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
| `loading-mode` | Loading layout: default indicator or bottom line | `default / line` | `default` |
| `show-tags` | Show tags; false displays separated text | `boolean` | `true` |
| `separator` | Separator when show-tags=false | `string` | `,` |
| `text-align` | Physical text alignment: left / center / right. When omitted, inherits FormItem content-align; standalone fields default to logical start | `'left' \| 'center' \| 'right'` | `-` |
| `max-tag-count` | Finite nonnegative integer; 0 leaves the displayed tag count unlimited. | `number` | `0` |
| `tag-nowrap` | Keep tags on one line with ellipsis and preserved removal icons; overflow scrolls horizontally; hover, focus or tap truncated text to preview it | `boolean` | `false` |
| `popup-container` | Selector, element, element resolver, or false for inline rendering | `PopupContainer` | `—` |
| `trigger-props` | Optional dropdown Trigger settings. Placement defaults to bottom-start and automatically adjusts when space is limited. The field owns open state; there is no top-level placement prop | `TriggerProps` | `—` |
| `virtual-list-props` | Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps) | `VirtualListProps` | `—` |
| `search-delay` | Finite nonnegative search debounce delay in milliseconds. | `number` | `500` |
| `format-label` | Format selected labels; use label slot for VNodes | `function` | `—` |
| `clearable` | Allow clearing; preserve disabled selections | `boolean` | `true` |
| `empty-value` | Clear override; multiple mode accepts arrays or recognized empty values and falls back to an empty array for invalid scalars; disabled selections take precedence. | `SelectEmptyValue` | `undefined` |
| `options` | Primitive, object or grouped options; one source for every presentation | `SelectOption[]` / `(query, { signal }) => Array / Promise` | `undefined` |
| `field-names` | Map value, label, disabled, tagProps, render; object values need a unique ID field | `SelectFieldNames` | `—` |
| `filterable` | Enable search; optionally retainInputValue | `boolean or { retainInputValue?: boolean }` | `Single: false; multiple: true` |
| case-sensitive | Case-sensitive built-in filtering; custom filters take priority | boolean | false |
| `filter-option` | false disables local filtering; callback receives query and raw option | `boolean or (input, option) => boolean` | Automatic: enabled for arrays, disabled for loader functions |
| `creatable` | Allow creating missing options | `boolean` | `false` |
| `fallback-option` | Display unresolved values or return a complete fallback option | `boolean or (value) => SelectOptionData` | `true` |
| `show-extra-options` | Display fallback/created options in the panel | `boolean` | `true` |
| `limit` | Finite nonnegative integer; 0 leaves the selection count unlimited. | `number` | `0` |
| `auto-fit-popup-width` | Match Menu width to the field | `boolean` | `true` |
| `default-active-first-option` | On opening, activate the first enabled candidate if no valid selected option exists. Highlighting does not update modelValue or emit change; an existing valid selection takes priority | `boolean` | `true` |
| `unmount-on-close` | Unmount Menu content when closed | `boolean` | `false` |
| `scrollbar` | Whether to enable virtual scroll bar | `boolean or ScrollbarProps` | `true` |
| `show-header-on-empty` | Show the header in the empty state | `boolean` | `false` |
| `show-footer-on-empty` | Show the footer in the empty state | `boolean` | `false` |
| `edit-mode` | Field presentation; inherits FormItem/Form when omitted | `direct / click / dblclick` | `direct` |
| `before-commit` | Before confirmation, calls ({ value, previousValue }, done, { signal }); complete with a boolean, Promise or done; synchronous undefined waits for done. | `BeforeFieldCommit` | — |

### Select Events / Methods

- `update:modelValue`, `change(value)`: emitted on commit, not while editing a draft.
- `update:open`, `open-change(open)`: request an expanded-state change.
- `update:inputValue`, `input-value-change(text)`, `search(text)`: search state.
- `focus(event)`, `blur(event)`, `clear(event)`: native field events; only the field owner notifies Form.
- Methods: `focus()`, `blur()`.

Select also emits `remove(value)`, `exceed-limit(value, event)`, `dropdown-scroll(event)`, and `dropdown-reach-bottom(event)`.

### Slots and option data

Use `label({ data })` for custom `selected` labels; `selected` replaces the whole selection area. Also supports `prefix`, `suffix`, `clear-icon({ clear })`, `arrow-icon`, `loading-icon`, `search-icon`, `empty`, and `option({ data })`.

An option’s `label` is plain text used for search. Use `render` or the `option` slot for custom option content, and `format-label` or the `label` slot for custom selected-value rendering. Options are identified by value rather than label. An option’s `disabled` prevents selection and removal, while `tagProps` customizes its selected tag. It supports attributes such as `style` and listeners such as `onClose`; Select controls tag visibility and removability according to its current state, and close events also participate in Select’s removal flow.

Select additionally supports `header`, `footer`, `trigger`, and default `Option / Optgroup` children. Option props: `value`, `label`, `disabled`, `tagProps`, `index`; its default slot receives `selected`. Group data uses `{ isGroup: true, label, options }`. List and Picker also accept slot options; Picker displays their text labels.

Single/multiple options both use popup-option-padding-horizontal. There is no implicit search-highlight DOM; custom option slots style their own highlighted fragments. 

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

### Option Props

| Prop | Description | Type | Default |
| --------- | ------------------------------------- | ------------------------------------------------------ | --------- |
| value | Option Value | string \| number \| boolean \| Record<string, unknown> | undefined |
| label | Option group title | string | undefined |
| disabled | Whether to disable | boolean | false |
| tag-props | Selected tag props, native attributes, and Tag event listeners | SelectOptionTagProps | undefined |
| index | Explicit option order | number | undefined |

### Option Slots

| Slot | Description | Arguments |
| ------- | -------------- | --------------------- |
| default | Custom option content | { selected: boolean } |
| icon | Option icon | - |
| suffix | Option suffix | - |

### Optgroup Props

| Prop | Description | Type | Default |
| ----- | -------- | ------ | --------- |
| label | Option group title | string | undefined |

### Optgroup Slots

| Slot | Description | Arguments |
| ------- | ---------------------- | ---- |
| label | Option group title | - |
| default | Option children inside a group | - |

### Select Slots

| Slot | Description | Arguments |
| ------------ | ------------------------ | --------------- |
| default | Option / Optgroup children | - |
| option | Custom option content | { data } |
| label | Option group title | { data } |
| selected | Replace the whole selected-value region | - |
| header | Menu header | - |
| footer | Menu footer | - |
| trigger | Custom field trigger | - |
| prefix | Field prefix | - |
| suffix | Field suffix | - |
| clear-icon | Custom clear action | { clear } |
| arrow-icon | Dropdown arrow | - |
| search-icon | Search icon | - |
| loading-icon | Loading icon | - |
| empty | Empty-state content | - |
| read | Read-mode content | { value, text } |

### Select Events

| Event | Description | Arguments |
| --------------------- | ------------ | ------------ |
| update:model-value | Request a model value update | value |
| change | Option | value |
| update:open | Request popup visibility | open |
| open-change | Popup visibility changes | open |
| update:input-value | Request search text update | text |
| input-value-change | Search text changes | text |
| search | Triggered when the user searches | text |
| focus | Field gains focus | event |
| blur | Field loses focus | event |
| keydown | Field or editor search key; `preventDefault()` suppresses internal keyboard handling | event: KeyboardEvent |
| clear | Triggered when the value of the input changes | event |
| remove | Triggered when the delete button of the label is clicked | value |
| exceed-limit | Selection would exceed the multiple-selection limit | value, event |
| dropdown-scroll | Menu scrolls | event |
| dropdown-reach-bottom | Menu reaches its bottom | event |

### Select Methods

| Method | Description | Arguments |
| ----- | ---------------- | ---- |
| focus | Focus the actual field | - |
| blur | Blur the actual field | - |

### Type imports

Root and component entries export `SelectEmits`、`SelectSlots`、`SelectExpose` alongside Props and Instance. Emits are event argument tuples derived from the runtime validators; Expose contains focus/blur.

### Search fields

`searchFields` / `search-fields` is a readonly `('label' | 'value')[]`, defaulting to `['label']`. Multiple fields use OR matching, case-insensitive by default. `['value', 'label']` searches codes and names; fieldNames maps semantic fields to business fields. An empty array matches no items for a nonempty query. Values are compared as strings; object traversal, object values and pinyin matching require a custom callback. A custom callback takes precedence and decides case handling itself. Remote results use the existing protocol for disabling local filtering. Cascader retains path semantics and checks the configured fields on each path node.

## Loading options through a function prop

Pass options(query, { signal }) directly; useAsyncData is unnecessary. options still accepts arrays, and an explicit array, including [], takes precedence. The component manages loading, stale-result isolation and cancellation. load-error reports failures, and the instance refresh() method retries. A business loader may accept only query and ignore the second argument.

filterable enables entering a search query. filterOption controls only local matching and never sends requests. With an options loader, remote results are not filtered again by default; with only an array, local matching is enabled by default. Most callers do not need filter-option.

```vue
<c-select v-model="value" :options="loadOptions" filterable />
```

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omission preserves the existing default. The UI displays null as blank without converting ordinary empty-string input to null. In confirmation mode, clearing changes the draft and confirm commits it; without confirmation, clearing commits directly.

Cancellable hooks use `(payload, done, context)`: closure payloads contain `{ action }`, change/commit payloads contain `{ value, previousValue }`, and Popup uses `{ reason }`. Context provides `signal` and an optional original `event`. Return a boolean/Promise, or call done()/done(false). Synchronous void waits for done; Promise&lt;void&gt; allows the operation. First completion wins. Pending state controls loading/disabled automatically. Cancellation invalidates stale results. Button refs are not exposed.

In direct mode, focus() targets the native input. In closed deferred mode it focuses the reference without opening; when open it targets the current editor. blur() blurs the current input or editor without reopening or simulating selection. Cached and remounted editors both resolve the current target.

Public SelectInstance/SelectExpose and PeopleSelectInstance/PeopleSelectExpose reflect the existing methods. PeopleSelectExpose is available from the root and component subentry. refresh() returns `Promise<void>` and reloads function-based options through the existing protocol; it does not represent completion of saving or business actions.

SelectEditMode is exported consistently from root and select subentries, retaining each platform public edit-mode values.

### Selection actions during loading

While manual loading or the current candidate request is active, selection fields preserve existing values and pause selection, clearing and tag removal. Blocked actions neither notify nor submit a model. Search text remains editable and disabled/readonly are not changed; set them separately to prevent searching.

Deferred editor clearing and confirmation are unavailable while loading; cancellation and closing remain available. Actions return to their normal state after both the manual flag and current request finish, still respecting disabled options. Loading on free-text fields such as Input and AutoComplete continues to allow text editing and clearing.

Pass business data through object `value` or `options`.

Multiple empty-value supports arrays, null/undefined and empty values recognized by empty-values; other scalars are rejected. Factories run only for a real clear with no disabled retained selections; invalid results produce a development diagnostic and fall back to [], without publishing an invalid scalar.

Follow-up acceptance testing (not yet completed): use real screen readers, such as VoiceOver and NVDA, with supported browsers to verify spoken field names, single and multiple selection, groups and virtual lists, keyboard navigation, loading, and form errors.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-select-popup-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-select-popup-border-color` | `var(--c-sys-color-border-subtle)` | `border`, `border-bottom`, `border-top` |
| `--c-select-popup-border-radius` | `var(--c-sys-radius-lg)` | `border-radius` |
| `--c-select-popup-box-shadow` | `0 8px 24px rgba(0, 0, 0, 0.08)` | `box-shadow` |
| `--c-select-popup-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-select-popup-group-title-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-select-popup-group-title-height` | `20px` | `line-height` |
| `--c-select-popup-group-title-padding-horizontal` | `var(--c-select-popup-option-padding-horizontal)` | `padding` |
| `--c-select-popup-group-title-padding-top` | `var(--c-sys-space-4)` | `margin-top` |
| `--c-select-popup-group-title-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-select-popup-loading-min-height` | `50px` | `min-height` |
| `--c-select-popup-max-height` | `200px` | `max-height` |
| `--c-select-popup-option-bg` | `transparent` | `background-color` |
| `--c-select-popup-option-bg-disabled` | `transparent` | `background-color` |
| `--c-select-popup-option-bg-hover` | `var(--c-sys-color-state-hover)` | `background`, `background-color` |
| `--c-select-popup-option-bg-selected` | `transparent` | `background`, `background-color` |
| `--c-select-popup-option-bg-selected-hover` | `var(--c-select-popup-option-bg-hover)` | `background`, `background-color` |
| `--c-select-popup-option-border-radius` | `0` | `border-radius` |
| `--c-select-popup-option-check-color` | `var(--c-sys-color-action-primary)` | `color` |
| `--c-select-popup-option-check-gap` | `var(--c-sys-space-4)` | `margin-inline-start` |
| `--c-select-popup-option-check-size` | `var(--c-sys-font-size-md)` | `height`, `width` |
| `--c-select-popup-option-font-weight-selected` | `var(--c-sys-font-weight-medium)` | `font-weight` |
| `--c-select-popup-option-height` | `36px` | `line-height`, `min-height` |
| `--c-select-popup-option-icon-margin-right` | `var(--c-sys-space-4)` | `margin-inline-end` |
| `--c-select-popup-option-padding-horizontal` | `var(--c-sys-space-4)` | `padding`, `padding-inline` |
| `--c-select-popup-option-suffix-icon-margin-left` | `var(--c-sys-space-5)` | `margin-inline-start` |
| `--c-select-popup-option-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-select-popup-option-text-color-disabled` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-select-popup-option-text-color-hover` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-select-popup-option-text-color-selected` | `var(--c-sys-color-action-primary)` | `color`, `outline`, `outline-color` |
| `--c-select-popup-padding-horizontal` | `0` | `padding-inline`, `padding-inline-end`, `padding-inline-start` |
| `--c-select-popup-padding-vertical` | `var(--c-sys-space-2)` | `padding`, `padding-block`, `padding-block-end`, `padding-block-start` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-select-popup-border-color: var(--c-sys-color-border-subtle);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
