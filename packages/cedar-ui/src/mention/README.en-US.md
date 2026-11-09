---
lang: en-US
permalink: /en/components/mention/
---

# Mention

Text input with mention suggestions supplied by the application.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Customization and slots

### Prefix

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| -------- | -------------------- | -------------- |
| `data` | Data for automatic completion | Prefix |
| `prefix` | Keywords that trigger auto-completion | Prefix |

<!-- demo-config-notes:end -->


- `data`: Data for automatic completion
- `prefix`: Keywords that trigger auto-completion

<demo src="./__demos__/prefix.vue"></demo>

## Lifecycle and edge cases

### Mirror Lifecycle

<demo src="./__demos__/mirror-lifecycle.vue"></demo>

## Loading and waiting

### Controlled loading

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `loading` | Explicit business loading state | `boolean` | `false` |


Set loading explicitly to display feedback. Ordinary event return values do not drive loading. Before hooks retain their documented pending behavior.

<demo src="./__demos__/loading.vue"></demo>

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Mention Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| model-value (v-model) | Controlled text; null displays as empty | string \| null | undefined |
| default-value | Initial uncontrolled text | string | '' |
| data | Candidate array or explicit loader, including nested groups | readonly (string \| number \| SelectOptionData \| SelectOptionGroup)[] \| ((query: string, context: { signal: AbortSignal }) => Array \| `Promise<Array>`) | undefined |
| prefix | Trigger prefix; supports multiple characters and multiple prefixes | string \| string[] | '@' |
| split | Separator before and after a mention | string | ' ' |
| type | Input presentation | input \| textarea | input |
| disabled | Inherit Form when omitted; explicit false overrides it | boolean | undefined |
| readonly | Inherit Form when omitted; explicit false overrides it | boolean | undefined |
| clearable | Allow clearing text or the editor draft | boolean | false |
| loading | Manual waiting feedback; does not implicitly disable text editing | boolean | false |
| edit-mode | Editing mode, inherited from FormItem and Form | `'direct' \| 'click' \| 'dblclick'` | `'direct'` |
| read-pretty | Independent read presentation; explicit false overrides the parent | `boolean` | `false` |
| empty-value | Clear output; explicit null is submitted unchanged | `string \| null \| (() => string \| null)` | `''` |
| empty-values | Empty-value recognition; field takes precedence over FormItem and Form | `readonly unknown[]` | `-` |
| empty-text | Read empty text; an explicit empty string is valid | `string` | `'-'` |
| before-commit | Guard before saving a deferred edit; return a boolean or Promise, or complete via done | `(payload: { value: unknown; previousValue: unknown }, done: (allow?: boolean) => void, context: { signal: AbortSignal; event?: Event }) => void \| boolean \| Promise<void \| boolean>` | `-` |
| open | Controlled editor visibility, separate from native input focus | `boolean` | `-` |
| default-open | Initial visibility of an uncontrolled editor | `boolean` | `false` |
| popup-container | Editor mount container | `string \| HTMLElement \| false` | `-` |

### Mention Events

| Event | Description and arguments |
| --- | --- |
| update:modelValue | value: string \| null |
| change | value: string \| null; no native Event argument |
| search | query: string, prefix: string |
| select | value: SelectOptionValue \| undefined; from the actual leaf candidate |
| clear | event: Event |
| focus / blur | event: FocusEvent |
| load-error | error: unknown; preserves the original loader error |
| update:open / open-change | open: boolean; field editor only |

data is an explicit loader. search, change, select and load-error only notify; listener Promises are not collected. Direct input emits update:modelValue / change, and selection emits select / update:modelValue / change. Deferred editing updates a draft and submits the final model on confirmation.

### Mention Methods

| Method | Description | Returns |
| --- | --- | --- |
| focus | Focus the current target; deferred mode follows the field editing protocol | void |
| blur | Blur the current target without opening the editor | void |
| refresh | Retry the current data query with cancellation and failure handling, without opening the editor; static arrays issue no request | `Promise<void>` |

### Mention Slots

| Slot | Description and arguments |
| --- | --- |
| option | Candidates in both input presentations; data: SelectOptionInfo, including key, raw, value and label |
| read | Reading content in both input presentations; value: string \| null, text: string |
| prefix / suffix | Input prefix and suffix for type=input only |
| clear-icon | Clear node in both input presentations; clear(event?: Event): void |

clear-icon replaces the entire clear node. A custom node must call clear and provide an accessible button. There is no default input replacement, empty or loader-error slot; option does not replace the field input.

## Types

The component exports the following types

```ts
import type { MentionProps, MentionInstance, MentionEmits, MentionSlots, MentionExpose } from "@cedar-design/ui";
```

Mention reuses Input/Textarea typography and spacing; its measurement mirror copies computed native input styles. Override the corresponding input variables. 

### Editing and confirmation

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

## Configuring the cleared value

`empty-value` defines the output of an existing clear action. Omission preserves the component fallback; supported types remain component-specific. It does not change empty-values recognition or Form reset defaults.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

`data` accepts an array or (query, { signal }) => array/Promise. The component manages loading, cancellation and stale-result isolation; failures emit load-error. Single/multiple groups initialize with an empty query; searchable fields reload when queries change. Tree root loading is independent of existing load-more child loading.

Both input and textarea show manual loading and waiting for the current explicit data loader. Displaying waiting does not disable editing. A search notification's returned Promise does not start a task. An old data request cannot clear a newer request's indicator, and load-error preserves the original error.

Public focus/blur methods are callable from initial mount. Focus opens an editable deferred editor and targets it after readiness; disabled, readonly, or reading fields do not open. Blur only blurs the current target without reopening. Stored methods never bind an old editor; closure, mode changes, deactivation, or unmount cancel queued calls.

### Mention ranges and grouped options

prefix accepts single characters, multiple characters and arrays of strings. Selection replaces only the matched prefix and query before the caret, preserving the trailing text; the textarea mirror uses the matched prefix. Nested data groups render nonselectable titles and only leaves may be selected; disabled leaves do not submit. The option slot receives normalized candidates, including the valid identities zero and empty string.

### Candidate feedback and instance boundaries

Explicit data loading appears in the current Input/Textarea field, whose native input announces aria-busy. Manual loading combines with request loading and text remains editable. With no available candidates the mention menu stays closed. Failure ends current waiting and emits the original load-error; business code chooses error presentation. Error strings are not inserted into candidates or text. refresh waits for one read attempt; failures notify through load-error without awaiting error-listener Promises.

disabled/readonly pause requests; deactivation, unmount and stale responses cannot update data. refresh may read while the field editor is closed without opening it. The candidate menu belongs to the internal input; public open/default-open controls only the deferred field editor. MentionProps, MentionEmits, MentionSlots and MentionExpose are exported consistently from root and mention subentries; MeasureInfo remains internal measurement state.

Mention is available in Cedar.

### Input and candidate relationships

input uses combobox, while textarea retains a multiline textbox. Both link to the actual listbox and active candidate with aria-autocomplete, aria-controls and aria-activedescendant. Closing suggestions or making the field readonly removes active references; arrow navigation keeps DOM focus in the native input.

## CSS Variables

<!-- component-css-variables:start -->

This component declares no independent public CSS variables. Use the configuration and layout APIs documented on this page. The appearance of composed controls follows the public variables of `input`, `select`, `textarea`; a shared variable can affect other controls in the same DOM subtree.

Internal custom properties and measurement values are implementation details and are not customization APIs.

<!-- component-css-variables:end -->
