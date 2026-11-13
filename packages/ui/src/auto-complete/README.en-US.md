---
lang: en-US
permalink: /en/components/auto-complete/
---

# AutoComplete

Text input with suggested completions. Suggestions accept arrays or an explicit options loader; the component manages request waiting and cancellation, while ordinary events remain notifications.

## Reading direction

The editor and suggestion popup inherit source dir, including in custom containers. Horizontal caret keys keep native editing behavior; vertical keys navigate candidates, Enter selects and Escape closes. Candidate updates preserve the native composition buffer until composition ends instead of repainting the previous model value.

## Search and visibility

Default matching searches labels and ignores case; search-fields can include values. Custom filter-option callbacks own their case policy; false bypasses local filtering for remote results. Candidate visibility is private and follows input/focus plus should-open. Public open/default-open and their events control the deferred field editor. Trigger presentation options cannot force candidate visibility.

## Basic examples

### Basic

<demo src="./__demos__/basic.vue"></demo>

### Interaction state comparison

Toggle disabled, read-only and error states, then interact with the same instance. Recovery controls remain outside the target; error appearance alone does not validate data.

<details>
<summary>Configuration details and limits</summary>

### Custom text submission

Choose a suggestion to commit immediately, or confirm custom text.

<demo src="./__demos__/en-US/custom-draft.vue"></demo>

## Appearance and states

### Appearance configuration comparison

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ----------- | -------------------------------------------- | ------------ |
| `options` | Suggestions, including groups; unique values become strings on selection | Appearance configuration comparison |
| `clearable` | Allow clearing a nonempty editable value | Appearance configuration comparison |

<!-- demo-config-notes:end -->


Choose a dimension to compare all its values side by side while keeping other settings and content identical. Change the other settings to inspect combinations; input specimens share one model.

<demo src="./__demos__/appearance-lab.vue"></demo>

## Matching and suggestions

### Opening Policy

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ---------------- | --------------------------------------------------- | ------------------------------------ |
| `options` | Suggestions, including groups; unique values become strings on selection | Opening Policy, Case Sensitive, Group Spacing |
| `placeholder` | Placeholder or floating hint text | Opening Policy, Case Sensitive, Group Spacing |
| `should-open` | Opening policy; does not filter candidates | Opening Policy, Group Spacing, Virtual List |
| `filter-option` | Filter by label; false for remote filtering | Opening Policy |
| `case-sensitive` | Case-sensitive built-in matching | Case Sensitive |
| `trigger-props` | Trigger configuration; cannot override owned opening and disabled state | Group Spacing |

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

| Configuration | Purpose | Related examples |
| ------------- | -------------------------------------------- | -------------------------------- |
| `options` | Suggestions, including groups; unique values become strings on selection | Footer, Decorator |
| `placeholder` | Placeholder or floating hint text | Footer, Decorator |
| `field-names` | Map value, label, disabled and other fields | Footer |
| `variant` | Input variant; inherits Group when unset | Decorator |
| `clearable` | Allow clearing a nonempty editable value | Decorator |

<!-- demo-config-notes:end -->


<demo src="./__demos__/footer.vue"></demo>

### Decorator

<demo src="./__demos__/decorator.vue"></demo>

## Interaction and keyboard

### Api Review

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------- | -------------------------------------------- | -------------------------- |
| `options` | Suggestions, including groups; unique values become strings on selection | Api Review, Accessibility |
| `clearable` | Allow clearing a nonempty editable value | Api Review |
| `disabled` | Disabled; inherited when unset, explicit false overrides | Api Review |
| `readonly` | Readonly; focus/copy allowed, suggestions stay closed | Api Review |
| `error` | Error state; inherits FormItem when unset | Api Review |
| `input-attrs` | Native input attributes; combobox state is owned by the component | Accessibility |

<!-- demo-config-notes:end -->


</details>

<demo src="./__demos__/state-lab.vue"></demo>

### Accessibility

<demo src="./__demos__/accessibility.vue"></demo>

## Async data and configuration

### Remote

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --------------- | --------------------------------------------------- | ------------------------------ |
| `options` | Suggestions, including groups; unique values become strings on selection | Remote, Passthrough Options |
| `filter-option` | Filter by label; false for remote filtering | Remote |
| `placeholder` | Placeholder or floating hint text | Remote |
| `disabled` | Disabled; inherited when unset, explicit false overrides | Passthrough Options |
| `should-open` | Opening policy; does not filter candidates | Passthrough Options |
| `trigger-props` | Trigger configuration; cannot override owned opening and disabled state | Passthrough Options |

<!-- demo-config-notes:end -->


<demo src="./__demos__/remote.vue"></demo>

### Passthrough Options

<demo src="./__demos__/passthrough-options.vue"></demo>

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom line); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

## Usage notes

### Editing and confirmation

Use `edit-mode` to configure editing; field > FormItem > Form precedence applies, defaulting to `direct`. Supported values: `direct / click / dblclick`. Non-direct modes open an editor through the field value. Choosing a suggestion commits immediately by default; custom text uses confirmation. With need-confirm, suggestions also remain drafts until confirmation. Cancel, reset or enabling readPretty discards an uncommitted draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(payload, done, context)` can guard saving the editor. FormItem validates the candidate first; invalid candidates keep the editor open. `open / default-open / update:open` control the editor. `#read="{ value, text }"` customizes read content. See the unified field presentation examples in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

The candidate list shares group, selected and disabled styling with Select, and AutoComplete variables follow their Select counterparts by default. In direct mode the list opens below the input and updates while scrolling; trigger-props can change placement or enable automatic flipping. The field presentation owns the deferred editor while the internal input owns suggestions; each platform retains its public edit-mode values.

### Search fields

`searchFields` / `search-fields` is a readonly `('label' | 'value')[]`, defaulting to `['label']`. Multiple fields use OR matching, case-insensitive by default. `['value', 'label']` searches codes and names; fieldNames maps semantic fields to business fields. An empty array matches no items for a nonempty query. Values are compared as strings; object traversal, object values and pinyin matching require a custom callback. A custom callback takes precedence and decides case handling itself. Remote results use the existing protocol for disabling local filtering. Cascader retains path semantics and checks the configured fields on each path node.

### Configuration

Clearing does not emit search or reopen candidates, including when focus returns from a keyboard-focused clear button to the input. The parent controls the value: each rejected clear or selection still emits a change proposal; an accepted candidate selection notifies Form once.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### AutoComplete Props

| Prop | Description | Type | Default |
| -------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------- |
| need-confirm | Applies only to overlay editing. Choosing a suggestion commits and closes by default; true keeps a draft until confirmation. Submission still runs form validation and before-commit; rejection keeps the editor open. AutoComplete typing does not auto-submit; a changed text draft provides a confirmation button, while choosing a suggestion completes selection immediately. | `boolean` | `false` |
| `model-value` | Controlled text | `string \| null` | `—` |
| `default-value` | Initial uncontrolled text | `string` | `''` |
| `options` | Suggestions, including groups; unique values become strings on selection | `(AutoCompleteOption \| SelectOptionGroup)[]` / `(query, { signal }) => Array / Promise` | `undefined` |
| `field-names` | Map value, label, disabled and other fields | `AutoCompleteFieldNames` | `—` |
| `should-open` | Opening policy; does not filter candidates | `(value: string) => boolean` | `value.length > 0` |
| `filter-option` | Filter by label; false for remote filtering | `AutoCompleteFilterOption` | Automatic: enabled for arrays, disabled for loader functions |
| `case-sensitive` | Case-sensitive built-in matching | `boolean` | `false` |
| `popup-container` | Popup container; same contract as Trigger | `PopupContainer` | `—` |
| `trigger-props` | Trigger configuration; cannot override owned opening and disabled state | `TriggerProps` | `—` |
| `virtual-list-props` | Enable and configure virtual scrolling | `VirtualListProps` | `—` |
| `size` | Five sizes; inherit Group / Form / global configuration when unset | `xs \| sm \| md \| lg \| xl` | `md` |
| `variant` | Input variant; inherits Group when unset | `filled \| outline \| standard` | `outline` |
| `disabled` | Disabled; inherited when unset, explicit false overrides | `boolean` | `undefined` |
| `readonly` | Readonly; focus/copy allowed, suggestions stay closed | `boolean` | `undefined` |
| `error` | Error state; inherits FormItem when unset | `boolean` | `undefined` |
| `clearable` | Allow clearing a nonempty editable value | `boolean` | `false` |
| `placeholder` | Placeholder or floating hint text | `string` | `—` |
| `hint` | Enable Input floating hint | `boolean` | `undefined` |
| `line` | Show border or underline | `boolean` | `true` |
| `text-color` | Instance text color | `string` | `—` |
| `focus-color` | Instance focus color | `string` | `—` |
| `blur-color` | Instance unfocused hint color | `string` | `—` |
| `enterkeyhint` | Virtual keyboard action hint | `InputHTMLAttributes['enterKeyHint']` | `—` |
| `aria-label` | Accessible input name | `string` | `—` |
| `max-length` | Finite nonnegative length or `{ length, errorOnly? }`; 0 is unlimited; invalid values diagnose and fall back to no limit | `number \| { length: number; errorOnly?: boolean }` | `0` |
| `show-word-limit` | Display word count | `boolean` | `false` |
| `word-length` | Custom length calculation | `(value: string) => number` | `—` |
| `word-slice` | Custom slicing | `(value: string, maxLength: number) => string` | `—` |
| `input-attrs` | Native input attributes; combobox state is owned by the component | `Record<string, unknown>` | `—` |
| edit-mode | Editing mode, inherited from FormItem and Form | `'direct' \| 'click' \| 'dblclick'` | `'direct'` |
| read-pretty | Independent read presentation; explicit false overrides the parent | `boolean` | `false` |
| empty-value | Clear output; explicit null is submitted unchanged | `string \| null \| (() => string \| null)` | `''` |
| empty-values | Empty-value recognition; field takes precedence over FormItem and Form | `readonly unknown[]` | `-` |
| empty-text | Read empty text; an explicit empty string is valid | `string` | `'-'` |
| before-commit | Guard before saving a deferred edit; return a boolean or Promise, or complete via done | `(payload: { value: unknown; previousValue: unknown }, done: (allow?: boolean) => void, context: { signal: AbortSignal; event?: Event }) => void \| boolean \| Promise<void \| boolean>` | `-` |
| open | Controlled editor visibility, separate from native input focus | `boolean` | `-` |
| default-open | Initial visibility of an uncontrolled editor | `boolean` | `false` |
| search-delay | Query debounce in milliseconds for an explicit options loader; search notifications are not delayed | number | 250 |
| search-fields | Built-in search fields, mapped through field-names | `readonly ('label' \| 'value')[]` | `['label']` |
| loading | Manual waiting feedback; does not implicitly disable text editing | boolean | false |
| loading-mode | Field waiting feedback style | default \| line | default |

### AutoComplete Events

| Event | Arguments |
| --- | --- |
| keydown | event: KeyboardEvent |
| update:modelValue | value: string \| null |
| input | value: string, event: Event |
| search | value: string, event: Event |
| change | value: string \| null, event: Event |
| select | value: string, option: AutoCompleteOptionInfo, event: Event |
| clear | event: Event |
| focus / blur | event: FocusEvent |
| dropdown-scroll / dropdown-reach-bottom | event: Event |
| load-error | error: unknown |
| update:open / open-change | open: boolean |

`keydown` notifies before the internal keyboard action; call `preventDefault()` to suppress it.
When suggestions are embedded in the editor, Escape closes the editor. When suggestions are a separate popup, Escape closes that popup first.

Typing: `input → update:modelValue → search`; selection: `update:modelValue → select → change`; clear: `clear → input → update:modelValue → change`. Selecting the same value emits only select. change is a commit on blur, Enter or selection. Input owns typing/focus/clear Form notifications; AutoComplete notifies Form once for suggestion commits. Selection applies maxLength; select.value is the committed string, while option.value retains the original suggestion. clear receives an event, not a string.

options is an explicit data loader accepting query and { signal }; it may return an array or a Promise. Failures emit load-error, and refresh retries the current query. Ordinary events such as search only notify and do not collect listener Promises. open events refer only to the deferred field editor.

### AutoComplete Slots

| Slot | Description and arguments |
| --- | --- |
| option | data: AutoCompleteOptionInfo |
| empty | Empty candidate content inside the field editor; no arguments. Cedar shows it with its native input; Maple shows it in the editor candidate area. |
| footer | Menu footer |
| prefix / suffix | Input prefix / suffix |
| clear-icon | clear(event?: Event): void |
| read | value: string \| null, text: string; preserves the raw empty model |

default does not replace the input. option customizes candidates, read customizes reading content, and empty customizes the field editor with no candidates. Ordinary direct input closes the menu when no candidates match.

### AutoComplete Methods

| Method | Arguments | Returns |
| --- | --- | --- |
| focus | - | void |
| blur | - | void |
| refresh | - | `Promise<void>` |

Arrow keys reopen the popup after Escape closes it: ArrowDown activates the first enabled candidate and ArrowUp the last, without committing the model; Enter selects. Composition, canceled keyboard events, readonly/disabled and should-open conditions are respected; Tab retains native focus navigation. Vue useId provides stable SSR identifiers. While candidates are open, aria-controls links the input to the list; the reference is removed on close. When virtualization unmounts the active item, its reference is temporarily removed and restored after remounting.

## Types

```ts
import type {
  AutoCompleteProps,
  AutoCompleteInstance,
  AutoCompleteOption,
  AutoCompleteOptionData,
  AutoCompleteOptionInfo,
  AutoCompleteFieldNames,
  AutoCompleteFilterOption,
} from "@cedar-design/ui-vue";
```

### Type imports

Root and component entries export `AutoCompleteEmits`、`AutoCompleteSlots`、`AutoCompleteExpose` alongside Props and Instance. Emits are event argument tuples derived from the runtime validators; Expose contains focus/blur.

`case-sensitive` only makes built-in local filtering `case-sensitive`: `ap` matches `Apple` when false, but not when true. It does not require choosing an option or validate the value. A custom `filterOption` takes priority; `filterOption=false` disables local filtering and makes `case-sensitive` irrelevant.

## Configuring the cleared value

`empty-value` defines the output of an existing clear action. Omission preserves the component fallback; supported types remain component-specific. It does not change empty-values recognition or Form reset defaults.

## Loading options through a function prop

Pass options(query, { signal }) directly; useAsyncData is unnecessary. options still accepts arrays, and an explicit array, including [], takes precedence. The component manages loading, stale-result isolation and cancellation. load-error reports failures, and the instance refresh() method retries. A business loader may accept only query and ignore the second argument.

AutoComplete text input always supports searching; filter-option only controls local matching and does not issue requests. Explicit options loaders disable secondary local filtering by default; arrays enable it. Business code usually does not need filter-option.

```vue
<c-auto-complete v-model="text" :options="loadSuggestions" />
```

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omission preserves the existing default. The UI displays null as blank without converting ordinary empty-string input to null. In confirmation mode, clearing changes the draft and confirm commits it; without confirmation, clearing commits directly.

Public focus/blur methods are callable from initial mount. Focus opens an editable deferred editor and targets it after readiness; disabled, readonly, or reading fields do not open. Blur only blurs the current target without reopening. Stored methods never bind an old editor; closure, mode changes, deactivation, or unmount cancel queued calls.

Refresh can retry the component-owned asynchronous option source before the editor opens, using the existing AbortSignal, loading, and load-error protocol without opening the editor; static arrays do not create extra requests.

Follow-up acceptance testing (not yet completed): use real screen readers, such as VoiceOver and NVDA, with supported browsers to verify spoken input names, suggestion loading and navigation, selection, dismissal, and form errors.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-auto-complete-option-bg-default` | `var(--c-select-popup-option-bg)` | `background-color` |
| `--c-auto-complete-option-bg-disabled` | `var(--c-select-popup-option-bg-disabled)` | `background-color` |
| `--c-auto-complete-option-bg-hover` | `var(--c-select-popup-option-bg-hover)` | `background-color` |
| `--c-auto-complete-option-bg-selected` | `var(--c-select-popup-option-bg-selected)` | `background-color` |
| `--c-auto-complete-option-font-weight-selected` | `var(--c-select-popup-option-font-weight-selected)` | `font-weight` |
| `--c-auto-complete-option-height` | `var(--c-select-popup-option-height)` | `line-height` |
| `--c-auto-complete-option-padding-horizontal` | `var(--c-select-popup-option-padding-horizontal)` | `padding-inline` |
| `--c-auto-complete-option-text-color-default` | `var(--c-select-popup-option-text-color)` | `color` |
| `--c-auto-complete-option-text-color-disabled` | `var(--c-select-popup-option-text-color-disabled)` | `color` |
| `--c-auto-complete-option-text-color-hover` | `var(--c-select-popup-option-text-color-hover)` | `color` |
| `--c-auto-complete-option-text-color-selected` | `var(--c-select-popup-option-text-color-selected)` | `color` |
| `--c-auto-complete-popup-bg` | `var(--c-select-popup-bg)` | `background-color` |
| `--c-auto-complete-popup-border-color` | `var(--c-select-popup-border-color)` | `border` |
| `--c-auto-complete-popup-border-radius` | `var(--c-select-popup-border-radius)` | `border-radius` |
| `--c-auto-complete-popup-box-shadow` | `var(--c-select-popup-box-shadow)` | `box-shadow` |
| `--c-auto-complete-popup-font-size` | `var(--c-select-popup-font-size)` | `font-size` |
| `--c-auto-complete-popup-max-height` | `var(--c-select-popup-max-height)` | `max-height` |
| `--c-auto-complete-popup-padding-vertical` | `var(--c-select-popup-padding-vertical)` | `padding-block` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-auto-complete-option-padding-horizontal: var(--c-select-popup-option-padding-horizontal);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
