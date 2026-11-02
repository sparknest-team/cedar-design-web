---
lang: en-US
permalink: /en/components/auto-complete/
---

# AutoComplete

Text input with suggested completions. Suggestions are arrays; application code owns remote loading.

## Reading direction

The editor and suggestion popup inherit source dir, including in custom containers. Horizontal caret keys keep native editing behavior; vertical keys navigate candidates, Enter selects and Escape closes. Candidate updates preserve the native composition buffer until composition ends instead of repainting the previous model value.

## Search and visibility

case-sensitive replaces the removed strict prop. Default matching searches label and ignores case; use search-fields to include value. Custom filter-option callbacks own their case policy; filter-option=false bypasses local filtering for remote results. AutoComplete has no public open/defaultOpen/update:open API: focusing and typing determine suggestion visibility. trigger-props can customize placement but cannot force internal open state. A public v-model:open would require a separate API change.

## Basic examples

### Basic

<demo src="./__demos__/basic.vue"></demo>

### Interaction state comparison

Toggle disabled, read-only and error states, then interact with the same instance. Recovery controls remain outside the target; error appearance alone does not validate data.

<details>
<summary>Configuration details and limits</summary>

#### State Lab

## Appearance and states

### Appearance configuration comparison

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                                                                  | Related examples                    |
| ------------- | ------------------------------------------------------------------------ | ----------------------------------- |
| `options`     | Suggestions, including groups; unique values become strings on selection | Appearance configuration comparison |
| `clearable`   | Allow clearing a nonempty editable value                                 | Appearance configuration comparison |

<!-- demo-config-notes:end -->

Choose a dimension to compare all its values side by side while keeping other settings and content identical. Change the other settings to inspect combinations; input specimens share one model.

<demo src="./__demos__/appearance-lab.vue"></demo>

## Matching and suggestions

### Opening Policy

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration    | Purpose                                                                  | Related examples                              |
| ---------------- | ------------------------------------------------------------------------ | --------------------------------------------- |
| `options`        | Suggestions, including groups; unique values become strings on selection | Opening Policy, Case Sensitive, Group Spacing |
| `placeholder`    | Placeholder or floating hint text                                        | Opening Policy, Case Sensitive, Group Spacing |
| `should-open`    | Opening policy; does not filter candidates                               | Opening Policy, Group Spacing, Virtual List   |
| `filter-option`  | Filter by label; false for remote filtering                              | Opening Policy                                |
| `case-sensitive` | Case-sensitive built-in matching                                         | Case Sensitive                                |
| `trigger-props`  | Trigger configuration; cannot override owned opening and disabled state  | Group Spacing                                 |

<!-- demo-config-notes:end -->

<demo src="./__demos__/opening-policy.vue"></demo>

### Case Sensitive

<demo src="./__demos__/case-sensitive.vue"></demo>

### Group Spacing

<demo src="./__demos__/group-spacing.vue"></demo>

### Virtual List

<demo src="./__demos__/virtual-list.vue"></demo>

## Content and field customization

### Footer

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                                                                  | Related examples  |
| ------------- | ------------------------------------------------------------------------ | ----------------- |
| `options`     | Suggestions, including groups; unique values become strings on selection | Footer, Decorator |
| `placeholder` | Placeholder or floating hint text                                        | Footer, Decorator |
| `field-names` | Map value, label, disabled and other fields                              | Footer            |
| `variant`     | Input variant; inherits Group when unset                                 | Decorator         |
| `hint`        | Enable Input floating hint                                               | Decorator         |
| `clearable`   | Allow clearing a nonempty editable value                                 | Decorator         |

<!-- demo-config-notes:end -->

<demo src="./__demos__/footer.vue"></demo>

### Decorator

<demo src="./__demos__/decorator.vue"></demo>

## Interaction and keyboard

### Api Review

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                                                                  | Related examples          |
| ------------- | ------------------------------------------------------------------------ | ------------------------- |
| `options`     | Suggestions, including groups; unique values become strings on selection | Api Review, Accessibility |
| `clearable`   | Allow clearing a nonempty editable value                                 | Api Review                |
| `disabled`    | Disabled; inherited when unset, explicit false overrides                 | Api Review                |
| `readonly`    | Readonly; focus/copy allowed, suggestions stay closed                    | Api Review                |
| `error`       | Error state; inherits FormItem when unset                                | Api Review                |
| `input-attrs` | Native input attributes; combobox state is owned by the component        | Accessibility             |

<!-- demo-config-notes:end -->

</details>

<demo src="./__demos__/state-lab.vue"></demo>

### Accessibility

<demo src="./__demos__/accessibility.vue"></demo>

## Async data and configuration

### Remote

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                                                                  | Related examples            |
| --------------- | ------------------------------------------------------------------------ | --------------------------- |
| `options`       | Suggestions, including groups; unique values become strings on selection | Remote, Passthrough Options |
| `filter-option` | Filter by label; false for remote filtering                              | Remote                      |
| `placeholder`   | Placeholder or floating hint text                                        | Remote                      |
| `disabled`      | Disabled; inherited when unset, explicit false overrides                 | Passthrough Options         |
| `should-open`   | Opening policy; does not filter candidates                               | Passthrough Options         |
| `trigger-props` | Trigger configuration; cannot override owned opening and disabled state  | Passthrough Options         |

<!-- demo-config-notes:end -->

<demo src="./__demos__/remote.vue"></demo>

### Passthrough Options

<demo src="./__demos__/passthrough-options.vue"></demo>

### Props

| Prop                 | Description                                                              | Type                                                                                     | Default                          |
| -------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | -------------------------------- |
| `model-value`        | Controlled text                                                          | `string`                                                                                 | `—`                              |
| `default-value`      | Initial uncontrolled text                                                | `string`                                                                                 | `''`                             |
| `options`            | Suggestions, including groups; unique values become strings on selection | `(AutoCompleteOption \| SelectOptionGroup)[]` / `(query, { signal }) => Array / Promise` | `undefined`                      |
| `field-names`        | Map value, label, disabled and other fields                              | `AutoCompleteFieldNames`                                                                 | `—`                              |
| `should-open`        | Opening policy; does not filter candidates                               | `(value: string) => boolean`                                                             | `value.length > 0`               |
| `filter-option`      | Filter by label; false for remote filtering                              | `AutoCompleteFilterOption`                                                               | automatic: arrays on; loader off |
| `case-sensitive`     | Case-sensitive built-in matching                                         | `boolean`                                                                                | `false`                          |
| `popup-container`    | Popup container; same contract as Trigger                                | `PopupContainer`                                                                         | `—`                              |
| `trigger-props`      | Trigger configuration; cannot override owned opening and disabled state  | `TriggerProps`                                                                           | `—`                              |
| `virtual-list-props` | Enable and configure virtual scrolling                                   | `VirtualListProps`                                                                       | `—`                              |
| `size`               | Five sizes; inherit Group / Form / global configuration when unset       | `xs \| sm \| md \| lg \| xl`                                                             | `md`                             |
| `variant`            | Input variant; inherits Group when unset                                 | `filled \| outline \| standard`                                                          | `outline`                        |
| `disabled`           | Disabled; inherited when unset, explicit false overrides                 | `boolean`                                                                                | `undefined`                      |
| `readonly`           | Readonly; focus/copy allowed, suggestions stay closed                    | `boolean`                                                                                | `undefined`                      |
| `error`              | Error state; inherits FormItem when unset                                | `boolean`                                                                                | `undefined`                      |
| `clearable`          | Allow clearing a nonempty editable value                                 | `boolean`                                                                                | `false`                          |
| `placeholder`        | Placeholder or floating hint text                                        | `string`                                                                                 | `—`                              |
| `hint`               | Enable Input floating hint                                               | `boolean`                                                                                | `undefined`                      |
| `line`               | Show border or underline                                                 | `boolean`                                                                                | `true`                           |
| `text-color`         | Instance text color                                                      | `string`                                                                                 | `—`                              |
| `focus-color`        | Instance focus color                                                     | `string`                                                                                 | `—`                              |
| `blur-color`         | Instance unfocused hint color                                            | `string`                                                                                 | `—`                              |
| `enterkeyhint`       | Virtual keyboard action hint                                             | `InputHTMLAttributes['enterKeyHint']`                                                    | `—`                              |
| `aria-label`         | Accessible input name                                                    | `string`                                                                                 | `—`                              |
| `max-length`         | Same length normalization for typing and selecting                       | `number \| { length: number; errorOnly?: boolean }`                                      | `0`                              |
| `show-word-limit`    | Display word count                                                       | `boolean`                                                                                | `false`                          |
| `word-length`        | Custom length calculation                                                | `(value: string) => number`                                                              | `—`                              |
| `word-slice`         | Custom slicing                                                           | `(value: string, maxLength: number) => string`                                           | `—`                              |
| `input-attrs`        | Native input attributes; combobox state is owned by the component        | `Record<string, unknown>`                                                                | `—`                              |

### Events

| Event                                     | Arguments                                                     |
| ----------------------------------------- | ------------------------------------------------------------- |
| `update:model-value`                      | `value: string`                                               |
| `input / search / change`                 | `value: string, event: Event`                                 |
| `select`                                  | `value: string, option: AutoCompleteOptionInfo, event: Event` |
| `clear`                                   | `event: Event`                                                |
| `focus / blur`                            | `event: FocusEvent`                                           |
| `dropdown-scroll / dropdown-reach-bottom` | `event: Event`                                                |

### Slots

| Slot              | Description                        |
| ----------------- | ---------------------------------- |
| `option`          | `{ data: AutoCompleteOptionInfo }` |
| `footer`          | Menu footer                        |
| `prefix / suffix` | Input prefix / suffix              |
| `clear-icon`      | `{ clear }`                        |

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom line); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

## API details

| Token                                           | Default                                             |
| ----------------------------------------------- | --------------------------------------------------- |
| `--c-auto-complete-popup-max-height`            | `var(--c-select-popup-max-height)`                  |
| `--c-auto-complete-popup-bg`                    | `var(--c-select-popup-bg)`                          |
| `--c-auto-complete-popup-border-radius`         | `var(--c-select-popup-border-radius)`               |
| `--c-auto-complete-popup-padding-vertical`      | `var(--c-select-popup-padding-vertical)`            |
| `--c-auto-complete-popup-font-size`             | `var(--c-select-popup-font-size)`                   |
| `--c-auto-complete-popup-border-color`          | `var(--c-select-popup-border-color)`                |
| `--c-auto-complete-popup-box-shadow`            | `var(--c-select-popup-box-shadow)`                  |
| `--c-auto-complete-option-height`               | `var(--c-select-popup-option-height)`               |
| `--c-auto-complete-option-font-weight-selected` | `var(--c-select-popup-option-font-weight-selected)` |
| `--c-auto-complete-option-padding-horizontal`   | `var(--c-select-popup-option-padding-horizontal)`   |
| `--c-auto-complete-option-bg-default`           | `var(--c-select-popup-option-bg)`                   |
| `--c-auto-complete-option-bg-hover`             | `var(--c-select-popup-option-bg-hover)`             |
| `--c-auto-complete-option-bg-selected`          | `var(--c-select-popup-option-bg-selected)`          |
| `--c-auto-complete-option-bg-disabled`          | `var(--c-select-popup-option-bg-disabled)`          |
| `--c-auto-complete-option-text-color-default`   | `var(--c-select-popup-option-text-color)`           |
| `--c-auto-complete-option-text-color-hover`     | `var(--c-select-popup-option-text-color-hover)`     |
| `--c-auto-complete-option-text-color-selected`  | `var(--c-select-popup-option-text-color-selected)`  |
| `--c-auto-complete-option-text-color-disabled`  | `var(--c-select-popup-option-text-color-disabled)`  |

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Props

| Prop                 | Description                                                              | Type                                                                                     | Default                                                      |
| -------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `model-value`        | Controlled text                                                          | `string`                                                                                 | `—`                                                          |
| `default-value`      | Initial uncontrolled text                                                | `string`                                                                                 | `''`                                                         |
| `options`            | Suggestions, including groups; unique values become strings on selection | `(AutoCompleteOption \| SelectOptionGroup)[]` / `(query, { signal }) => Array / Promise` | `undefined`                                                  |
| `field-names`        | Map value, label, disabled and other fields                              | `AutoCompleteFieldNames`                                                                 | `—`                                                          |
| `should-open`        | Opening policy; does not filter candidates                               | `(value: string) => boolean`                                                             | `value.length > 0`                                           |
| `filter-option`      | Filter by label; false for remote filtering                              | `AutoCompleteFilterOption`                                                               | Automatic: enabled for arrays, disabled for loader functions |
| `case-sensitive`     | Case-sensitive built-in matching                                         | `boolean`                                                                                | `false`                                                      |
| `popup-container`    | Popup container; same contract as Trigger                                | `PopupContainer`                                                                         | `—`                                                          |
| `trigger-props`      | Trigger configuration; cannot override owned opening and disabled state  | `TriggerProps`                                                                           | `—`                                                          |
| `virtual-list-props` | Enable and configure virtual scrolling                                   | `VirtualListProps`                                                                       | `—`                                                          |
| `size`               | Five sizes; inherit Group / Form / global configuration when unset       | `xs \| sm \| md \| lg \| xl`                                                             | `md`                                                         |
| `variant`            | Input variant; inherits Group when unset                                 | `filled \| outline \| standard`                                                          | `outline`                                                    |
| `disabled`           | Disabled; inherited when unset, explicit false overrides                 | `boolean`                                                                                | `undefined`                                                  |
| `readonly`           | Readonly; focus/copy allowed, suggestions stay closed                    | `boolean`                                                                                | `undefined`                                                  |
| `error`              | Error state; inherits FormItem when unset                                | `boolean`                                                                                | `undefined`                                                  |
| `clearable`          | Allow clearing a nonempty editable value                                 | `boolean`                                                                                | `false`                                                      |
| `placeholder`        | Placeholder or floating hint text                                        | `string`                                                                                 | `—`                                                          |
| `hint`               | Enable Input floating hint                                               | `boolean`                                                                                | `undefined`                                                  |
| `line`               | Show border or underline                                                 | `boolean`                                                                                | `true`                                                       |
| `text-color`         | Instance text color                                                      | `string`                                                                                 | `—`                                                          |
| `focus-color`        | Instance focus color                                                     | `string`                                                                                 | `—`                                                          |
| `blur-color`         | Instance unfocused hint color                                            | `string`                                                                                 | `—`                                                          |
| `enterkeyhint`       | Virtual keyboard action hint                                             | `InputHTMLAttributes['enterKeyHint']`                                                    | `—`                                                          |
| `aria-label`         | Accessible input name                                                    | `string`                                                                                 | `—`                                                          |
| `max-length`         | Same length normalization for typing and selecting                       | `number \| { length: number; errorOnly?: boolean }`                                      | `0`                                                          |
| `show-word-limit`    | Display word count                                                       | `boolean`                                                                                | `false`                                                      |
| `word-length`        | Custom length calculation                                                | `(value: string) => number`                                                              | `—`                                                          |
| `word-slice`         | Custom slicing                                                           | `(value: string, maxLength: number) => string`                                           | `—`                                                          |
| `input-attrs`        | Native input attributes; combobox state is owned by the component        | `Record<string, unknown>`                                                                | `—`                                                          |

### Events

| Event                                     | Arguments                                                     |
| ----------------------------------------- | ------------------------------------------------------------- |
| `update:model-value`                      | `value: string`                                               |
| `input / search / change`                 | `value: string, event: Event`                                 |
| `select`                                  | `value: string, option: AutoCompleteOptionInfo, event: Event` |
| `clear`                                   | `event: Event`                                                |
| `focus / blur`                            | `event: FocusEvent`                                           |
| `dropdown-scroll / dropdown-reach-bottom` | `event: Event`                                                |

Typing: `input → update:modelValue → search`; selection: `update:modelValue → select → change`; clear: `clear → input → update:modelValue → change`. Selecting the same value emits only select. change is a commit on blur, Enter or selection. Input owns typing/focus/clear Form notifications; AutoComplete notifies Form once for suggestion commits. Selection applies maxLength; select.value is the committed string, while option.value retains the original suggestion. clear receives an event, not a string.

### Slots

| Slot              | Description                        |
| ----------------- | ---------------------------------- |
| `option`          | `{ data: AutoCompleteOptionInfo }` |
| `footer`          | Menu footer                        |
| `prefix / suffix` | Input prefix / suffix              |
| `clear-icon`      | `{ clear }`                        |

### Methods

`focus()` / `blur()`

label is text. Use the option slot or an option render function for complex candidates; function/VNode labels are not supported. Arrow keys browse, Enter selects, Escape closes, and Tab retains native focus navigation. Vue useId keeps SSR identifiers stable.

## Type definitions

```ts
import type {
  AutoCompleteProps,
  AutoCompleteInstance,
  AutoCompleteOption,
  AutoCompleteOptionData,
  AutoCompleteOptionInfo,
  AutoCompleteFieldNames,
  AutoCompleteFilterOption,
} from "@cedar-design/ui";
```

## Style variables

| Token                                           | Default                                             |
| ----------------------------------------------- | --------------------------------------------------- |
| `--c-auto-complete-popup-max-height`            | `var(--c-select-popup-max-height)`                  |
| `--c-auto-complete-popup-bg`                    | `var(--c-select-popup-bg)`                          |
| `--c-auto-complete-popup-border-radius`         | `var(--c-select-popup-border-radius)`               |
| `--c-auto-complete-popup-padding-vertical`      | `var(--c-select-popup-padding-vertical)`            |
| `--c-auto-complete-popup-font-size`             | `var(--c-select-popup-font-size)`                   |
| `--c-auto-complete-popup-border-color`          | `var(--c-select-popup-border-color)`                |
| `--c-auto-complete-popup-box-shadow`            | `var(--c-select-popup-box-shadow)`                  |
| `--c-auto-complete-option-height`               | `var(--c-select-popup-option-height)`               |
| `--c-auto-complete-option-font-weight-selected` | `var(--c-select-popup-option-font-weight-selected)` |
| `--c-auto-complete-option-padding-horizontal`   | `var(--c-select-popup-option-padding-horizontal)`   |
| `--c-auto-complete-option-bg-default`           | `var(--c-select-popup-option-bg)`                   |
| `--c-auto-complete-option-bg-hover`             | `var(--c-select-popup-option-bg-hover)`             |
| `--c-auto-complete-option-bg-selected`          | `var(--c-select-popup-option-bg-selected)`          |
| `--c-auto-complete-option-bg-disabled`          | `var(--c-select-popup-option-bg-disabled)`          |
| `--c-auto-complete-option-text-color-default`   | `var(--c-select-popup-option-text-color)`           |
| `--c-auto-complete-option-text-color-hover`     | `var(--c-select-popup-option-text-color-hover)`     |
| `--c-auto-complete-option-text-color-selected`  | `var(--c-select-popup-option-text-color-selected)`  |
| `--c-auto-complete-option-text-color-disabled`  | `var(--c-select-popup-option-text-color-disabled)`  |

Clearing does not emit search or reopen candidates, including when focus returns from a keyboard-focused clear button to the input. The parent controls the value: each rejected clear or selection still emits a change proposal; an accepted candidate selection notifies Form once.

### Form field presentation and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-`direct` modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

Suggestions share Select’s list, group, selected and disabled styles. AutoComplete style variables follow the corresponding Select variables by default. In `inline` mode, the list opens below the input and follows scrolling; use `trigger-props` to explicitly change placement or enable automatic flipping. In `popup` mode, candidates use the same full editor surface as Select.

### Public type exports

Root and component entries export `AutoCompleteEmits`、`AutoCompleteSlots`、`AutoCompleteExpose` alongside Props and Instance. Emits are event argument tuples derived from the runtime validators; Expose contains focus/blur.

`case-sensitive` only makes built-in local filtering `case-sensitive`: `ap` matches `Apple` when false, but not when true. It does not require choosing an option or validate the value. A custom `filterOption` takes priority; `filterOption=false` disables local filtering and makes `case-sensitive` irrelevant.

### Migrating strict / Migration

The old `strict` prop is removed. Use `case-sensitive` (`caseSensitive` in TypeScript) instead; boolean meanings and the default false remain unchanged. This removal is marked for the next major release, without a compatibility alias.

### Built-in search fields

`searchFields` / `search-fields` is a readonly `('label' | 'value')[]`, defaulting to `['label']`. Multiple fields use OR matching, case-insensitive by default. `['value', 'label']` searches codes and names; fieldNames maps semantic fields to business fields. An empty array matches no items for a nonempty query. Values are compared as strings; object traversal, object values and pinyin matching require a custom callback. A custom callback takes precedence and decides case handling itself. Remote results use the existing protocol for disabling local filtering. Cascader retains path semantics and checks the configured fields on each path node.

## Configuring the cleared value

`empty-value` / `emptyValue` configures the model value produced by clearing. It accepts a value in the component model type, null, or a zero-argument factory. Omitting it preserves the existing default. Use `() => undefined` to distinguish omission from returning undefined. Arrays are shallow-copied on each clear; selected items that cannot be cleared remain. It does not redefine empty values, change Form reset defaults, or treat 0/false as universally empty.
Text and person-ID models remain strings; use an empty string or a business-defined string sentinel.

## Loading options through a function prop

Pass options(query, { signal }) directly; useAsyncData is unnecessary. options still accepts arrays, and an explicit array, including [], takes precedence. The component manages loading, stale-result isolation and cancellation. load-error reports failures, and the instance refresh() method retries. A business loader may accept only query and ignore the second argument.

filterable enables entering a search query. filterOption controls only local matching and never sends requests. With an options loader, remote results are not filtered again by default; with only an array, local matching is enabled by default. Most callers do not need filter-option.

```vue
<c-auto-complete v-model="text" :options="loadSuggestions" />
```

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.
