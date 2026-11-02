---
lang: en-US
permalink: /en/components/cascader/
---

# Cascader

Hierarchical option selection with single, multiple and path models.

```ts
import type { CascaderProps, CascaderInstance } from "@cedar-design/ui";
```

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes null unchanged; omitted values preserve the existing default. Editors render null as blank without converting ordinary empty-string input to null. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

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

| Configuration | Purpose                                                                             | Related examples                                   |
| ------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------- |
| `options`     | Tree options; leaf values must be unique in scalar mode; paths distinguish branches | Appearance configuration comparison, Control Sizes |
| `clearable`   | Allow clearing; preserve disabled selections                                        | Appearance configuration comparison, Control Sizes |
| `size`        | Supports all five sizes; inherits group/form settings                               | Control Sizes                                      |
| `variant`     | filled, outline, standard; inherits InputGroup                                      | Control Sizes                                      |
| `placeholder` | Placeholder                                                                         | Control Sizes                                      |
| `multiple`    | Multiple selection; enables search by default                                       | Control Sizes                                      |

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

| Configuration    | Purpose                                                                             | Related examples                    |
| ---------------- | ----------------------------------------------------------------------------------- | ----------------------------------- |
| `options`        | Tree options; leaf values must be unique in scalar mode; paths distinguish branches | Multiple, Check Strictly, Path Mode |
| `placeholder`    | Placeholder                                                                         | Multiple, Check Strictly, Path Mode |
| `multiple`       | Multiple selection; enables search by default                                       | Multiple, Check Strictly            |
| `default-value`  | Default value (uncontrolled state)                                                  | Check Strictly, Path Mode           |
| `expand-trigger` | Menu / List expansion: click or hover                                               | Check Strictly, Path Mode           |
| `check-strictly` | Allow parent selection; unlink parent/child checks                                  | Check Strictly                      |

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

| Configuration    | Purpose                                                                             | Related examples                         |
| ---------------- | ----------------------------------------------------------------------------------- | ---------------------------------------- |
| `options`        | Tree options; leaf values must be unique in scalar mode; paths distinguish branches | Filterable, Case Sensitive, Format Label |
| `placeholder`    | Placeholder                                                                         | Filterable, Case Sensitive, Format Label |
| `filterable`     | Enable search                                                                       | Filterable, Case Sensitive               |
| `case-sensitive` | Case-sensitive built-in filtering; custom filters take priority                     | Case Sensitive                           |
| `format-label`   | Format selected labels; use label slot for VNodes                                   | Format Label                             |

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

| Configuration | Purpose                                                                             | Related examples             |
| ------------- | ----------------------------------------------------------------------------------- | ---------------------------- |
| `options`     | Tree options; leaf values must be unique in scalar mode; paths distinguish branches | Interaction state comparison |
| `clearable`   | Allow clearing; preserve disabled selections                                        | Interaction state comparison |
| `disabled`    | Whether disabled                                                                    | Interaction state comparison |

<!-- demo-config-notes:end -->

Toggle the state, interact with the component, and restore editing using the controls outside the specimen. Error appearance alone does not run validation.

<demo src="./__demos__/state-lab.vue"></demo>

## Configuration and composition

### Passthrough Options

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration         | Purpose                                                                                                                          | Related examples                         |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `edit-mode`           | Presentation                                                                                                                     | Passthrough Options, Copying and editing |
| `options`             | Tree options; leaf values must be unique in scalar mode; paths distinguish branches                                              | Passthrough Options, Copying and editing |
| `trigger-props`       | Menu Trigger props; field owns open state                                                                                        | Passthrough Options                      |
| `open-trigger-target` | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | Copying and editing                      |
| `filterable`          | Enable search                                                                                                                    | Copying and editing                      |

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

| Configuration | Purpose                                                                             | Related examples                  |
| ------------- | ----------------------------------------------------------------------------------- | --------------------------------- |
| `options`     | Tree options; leaf values must be unique in scalar mode; paths distinguish branches | Loading, Load More, Async Devices |
| `placeholder` | Placeholder                                                                         | Loading, Load More, Async Devices |
| `loading`     | Loading state; blocks selection and confirmation                                    | Loading, Async Devices            |
| `load-more`   | Load children asynchronously; call done(children), or done() to allow retry         | Load More                         |
| `path-mode`   | Return a complete path instead of a node value                                      | Async Devices                     |
| `filterable`  | Enable search                                                                       | Async Devices                     |

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

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Cascader props

Use `v-model`, `v-model:open` and `v-model:input-value` for controlled state. Clear values are `''` for single selection and `[]` for multiple selection. Select uses `undefined` when an actual empty-string option exists.

| Prop                                    | Description                                                                                                                                      | Type                                                          | Default                         |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | ------------------------------- |
| `open-trigger-target`                   | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available.                 | `'field' \| 'icon'`                                           | `'field'`                       |
| `model-value / default-value`           | Controlled value / uncontrolled initial value                                                                                                    | `Value`                                                       | `Single: ''; multiple: []`      |
| `open / default-open`                   | Controlled / initial open state                                                                                                                  | `boolean`                                                     | `undefined / false`             |
| `input-value / default-input-value`     | Search text, independent of selected values                                                                                                      | `string`                                                      | `undefined / ''`                |
| `multiple`                              | Multiple selection; enables search by default                                                                                                    | `boolean`                                                     | `false`                         |
| `size`                                  | Supports all five sizes; inherits group/form settings                                                                                            | `ComponentSize`                                               | `md`                            |
| `variant`                               | filled, outline, standard; inherits InputGroup                                                                                                   | `FormControlVariant`                                          | `filled`                        |
| `disabled / readonly / error`           | Inherits form state unless explicitly overridden                                                                                                 | `boolean`                                                     | `undefined`                     |
| `placeholder`                           | Placeholder                                                                                                                                      | `string`                                                      | `—`                             |
| `hint / line`                           | Floating hint / standard variant underline                                                                                                       | `boolean`                                                     | `true`                          |
| `text-color / focus-color / blur-color` | Field colors                                                                                                                                     | `string`                                                      | `—`                             |
| `loading`                               | Loading state; blocks selection and confirmation                                                                                                 | `boolean`                                                     | `false`                         |
| `show-tags`                             | Show tags; false displays separated text                                                                                                         | `boolean`                                                     | `true`                          |
| `separator`                             | Separator when show-tags=false                                                                                                                   | `string`                                                      | `,`                             |
| `text-align`                            | Text alignment: left / center / right. Inherits FormItem content-align when unset; standalone fields default to inline start                             | `'left' \| 'center' \| 'right'`                               | `-`                             |
| `max-tag-count`                         | Maximum visible tags; 0 means unlimited                                                                                                          | `number`                                                      | `0`                             |
| `tag-nowrap`                            | Keep tags on one line with ellipsis and preserved removal icons; overflow scrolls horizontally; hover, focus or tap truncated text to preview it | `boolean`                                                     | `false`                         |
| `popup-container`                       | Selector, element, element resolver, or false for inline rendering                                                                               | `PopupContainer`                                              | `—`                             |
| `trigger-props`                         | Menu Trigger props; field owns open state                                                                                                        | `TriggerProps`                                                | `—`                             |
| `virtual-list-props`                    | Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)                       | `VirtualListProps`                                            | `—`                             |
| `search-delay`                          | Search debounce delay in ms                                                                                                                      | `number`                                                      | `500`                           |
| `format-label`                          | Format selected labels; use label slot for VNodes                                                                                                | `function`                                                    | `—`                             |
| `clearable`                             | Allow clearing; preserve disabled selections                                                                                                     | `boolean`                                                     | `false`                         |
| `options`                               | Tree options; leaf values must be unique in scalar mode; paths distinguish branches                                                              | `CascaderOption[]` / `(query, { signal }) => Array / Promise` | `undefined`                     |
| `field-names`                           | Map value, label, disabled, children, isLeaf, tagProps, render                                                                                   | `CascaderFieldNames`                                          | `—`                             |
| `path-mode`                             | Return a complete path instead of a node value                                                                                                   | `boolean`                                                     | `false`                         |
| `check-strictly`                        | Allow parent selection; unlink parent/child checks                                                                                               | `boolean`                                                     | `false`                         |
| `filterable`                            | Enable search                                                                                                                                    | `boolean`                                                     | `Single: false; multiple: true` |
| case-sensitive                          | Case-sensitive built-in filtering; custom filters take priority                                                                                  | boolean                                                       | false                           |
| `filter-option`                         | Receives query and raw node                                                                                                                      | `(input, option) => boolean`                                  | `—`                             |
| `expand-trigger`                        | Menu / List expansion: click or hover                                                                                                            | `string`                                                      | `click`                         |
| `expand-child`                          | Expand to first child                                                                                                                            | `boolean`                                                     | `false`                         |
| `load-more`                             | Load children asynchronously; call done(children), or done() to allow retry                                                                      | `(option, done) => void`                                      | `—`                             |
| `fallback-option`                       | Display unresolved values                                                                                                                        | `boolean or (value) => string`                                | `true`                          |
| `search-option-only-label`              | Show node label only in search results                                                                                                           | `boolean`                                                     | `false`                         |
| `auto-fit-popup-width`                  | Match Menu width to field                                                                                                                        | `boolean`                                                     | `false`                         |
| `edit-mode`                             | Presentation                                                                                                                                     | `menu`                                                        | `menu`                          |

### Events and methods

- `update:modelValue`, `change(value)`: emitted on commit, not while editing a draft.
- `update:open`, `open-change(open)`: request an expanded-state change.
- `update:inputValue`, `input-value-change(text)`, `search(text)`: search state.
- `focus(event)`, `blur(event)`, `clear(event)`: native field events; only the field owner notifies Form.
- Methods: `focus()`, `blur()`.

### Slots and option data

Use `label({ data })` for custom `selected` labels; `selected` replaces the whole selection area. Also supports `prefix`, `suffix`, `clear-icon({ clear })`, `arrow-icon`, `loading-icon`, `search-icon`, `empty`, and `option({ data })`.

Option `label` is searchable plain text. Use `render` or the `option` slot for custom `option` content, and `format-label` or `label` slot for selected content. Values identify selections; labels never do. `disabled` blocks selection/removal, and `tagProps` customizes selected tags.

### `<CascaderPanel>` Props

| Parameter                 | Description                                                                                                      | Type                                                                                                                                                               |         Default         |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------: |
| path-mode                 | Return a complete path instead of a node value                                                                   | `boolean`                                                                                                                                                          |         `false`         |
| multiple                  | Multiple selection; enables search by default                                                                    | `boolean`                                                                                                                                                          |         `false`         |
| model-value **(v-model)** | Bound value                                                                                                      | `string\| number\| Record<string, any>\| (    \| string    \| number    \| Record<string, any>    \| (string \| number \| Record<string, any>)[]  )[]\| undefined` |           `-`           |
| default-value             | Default value (uncontrolled state)                                                                               | `string\| number\| Record<string, any>\| (    \| string    \| number    \| Record<string, any>    \| (string \| number \| Record<string, any>)[]  )[]\| undefined` | `'' \| undefined \| []` |
| options                   | Tree options; leaf values must be unique in scalar mode; paths distinguish branches                              | `CascaderOption[]` / `(query, { signal }) => Array / Promise`                                                                                                      |       `undefined`       |
| expand-trigger            | Menu / List expansion: click or hover                                                                            | `string`                                                                                                                                                           |        `'click'`        |
| check-strictly            | Allow parent selection; unlink parent/child checks                                                               | `boolean`                                                                                                                                                          |         `false`         |
| load-more                 | Load children asynchronously; call done(children), or done() to allow retry                                      | `(  option: CascaderOption,  done: (children?: CascaderOption[]) => void) => void`                                                                                 |           `-`           |
| field-names               | Customize fields in `CascaderOption`; when option `value` is an object, `value` is also used as the key property | `CascaderFieldNames`                                                                                                                                               |           `-`           |
| expand-child              | Expand to first child                                                                                            | `boolean`                                                                                                                                                          |         `false`         |

### `<CascaderPanel>` Events

| Event  | Description                             | Arguments                                                                              |
| ------ | --------------------------------------- | -------------------------------------------------------------------------------------- |
| change | Emitted when the selected value changes | value: `string \| number \| (string \| number \| (string \| number)[])[] \| undefined` |

### `<CascaderPanel>` Slots

| Slot  |                   Description                   | Arguments |
| ----- | :---------------------------------------------: | --------- |
| empty | Content displayed when no options are available | -         |

### CascaderOption

| Parameter | Description                           | Type                                      | Default |
| --------- | ------------------------------------- | ----------------------------------------- | :-----: |
| value     | Option value                          | `string \| number \| Record<string, any>` |   `-`   |
| label     | Option text                           | `string`                                  |   `-`   |
| render    | Custom render function                | `RenderFunction`                          |   `-`   |
| disabled  | Whether disabled                      | `boolean`                                 | `false` |
| tagProps  | Property used for the displayed label | `TagProps`                                |   `-`   |
| children  | Child options                         | `CascaderOption[]`                        |   `-`   |
| isLeaf    | Whether this is a leaf node           | `boolean`                                 | `false` |

## Type definitions

The component exports the following types

```ts
import type { CascaderProps } from "@cedar-design/ui";
```

### Form field presentation and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-`direct` modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

Field editing uses edit-mode: Cedar supports direct/click/dblclick, and Maple supports direct/popup. The old menu/list/picker editing values are not retained. Popup editors reuse the existing option index, search, asynchronous loading and virtual-list algorithms.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

### Single-selection checkmark variables

| Variable                        | Default                             |
| ------------------------------- | ----------------------------------- |
| `--c-cascader-item-check-color` | `var(--c-sys-color-action-primary)` |
| `--c-cascader-item-check-size`  | `var(--c-sys-font-size-md)`         |

### Built-in search fields

`searchFields` / `search-fields` is a readonly `('label' | 'value')[]`, defaulting to `['label']`. Multiple fields use OR matching, case-insensitive by default. `['value', 'label']` searches codes and names; fieldNames maps semantic fields to business fields. An empty array matches no items for a nonempty query. Values are compared as strings; object traversal, object values and pinyin matching require a custom callback. A custom callback takes precedence and decides case handling itself. Remote results use the existing protocol for disabling local filtering. Cascader retains path semantics and checks the configured fields on each path node.

## Configuring the cleared value

`empty-value` / `emptyValue` sets the model value produced by clearing. It accepts a value in the component model type or a zero-argument factory. Omission preserves the existing default; use `() => undefined` to distinguish omission from returning undefined. Arrays are shallow-copied on every clear; selected items that cannot be cleared remain. It does not redefine emptiness, alter Form reset defaults or treat 0/false as universally empty.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

The `options` prop accepts an array or `(query, { signal }) => array/Promise`. The component manages loading, cancellation and stale-result isolation; failures emit load-error. Single/multiple groups initialize with an empty-string query, searchable fields reload when the query changes, and root loading for tree fields remains independent of existing load-more child loading.
