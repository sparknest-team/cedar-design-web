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

| Configuration | Purpose                               | Related examples |
| ------------- | ------------------------------------- | ---------------- |
| `data`        | Data for automatic completion         | Prefix           |
| `prefix`      | Keywords that trigger auto-completion | Prefix           |

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

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### `<mention>` Props

| Parameter                 | Description                                  | Type                                                                                                       |   Default   | Version |
| ------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | :---------: | :------ |
| model-value **(v-model)** | Bound value                                  | `string`                                                                                                   |     `-`     |         |
| default-value             | Default value (uncontrolled state)           | `string`                                                                                                   |    `''`     |         |
| data                      | Data for automatic completion                | `(string \| number \| SelectOptionData \| SelectOptionGroup)[]` / `(query, { signal }) => Array / Promise` | `undefined` |         |
| prefix                    | Keywords that trigger auto-completion        | `string \| string[]`                                                                                       |    `'@'`    |         |
| split                     | Before and after the selected item separator | `string`                                                                                                   |    `' '`    |         |
| type                      | default input or textarea                    | `'input' \| 'textarea'`                                                                                    |  `'input'`  |         |
| disabled                  | Whether disabled                             | `boolean`                                                                                                  |   `false`   |         |
| clearable                 | Whether to allow the input to be cleared     | `boolean`                                                                                                  |   `false`   | 2.23.0  |

### `<mention>` Events

| Event  | Description                                               | Arguments                                                     | Version |
| ------ | --------------------------------------------------------- | ------------------------------------------------------------- | :------ |
| change | Emitted when the value changes                            | value: `string`                                               |         |
| search | Emitted during dynamic search; prefix was added in 2.47.0 | value: `string`<br>prefix: `string`                           |         |
| select | Emitted when a dropdown option is selected                | value: `string \| number \| Record<string, any> \| undefined` |         |
| clear  | Emitted when the user clicks the clear button             | -                                                             | 2.23.0  |
| focus  | Emitted when the text input gains focus                   | ev: `FocusEvent`                                              | 2.42.0  |
| blur   | Emitted when the text input loses focus                   | ev: `FocusEvent`                                              | 2.42.0  |

### `<mention>` Methods

| Method | Description     | Arguments | Returns | Version |
| ------ | --------------- | --------- | ------- | :------ |
| focus  | Focus the input | -         | -       | 2.24.0  |
| blur   | Blur the input  | -         | -       | 2.24.0  |

### `<mention>` Slots

| Slot   |  Description   | Arguments          | Version |
| ------ | :------------: | ------------------ | :------ |
| option | Option content | data: `OptionInfo` | 2.13.0  |

### Type definitions

The component exports the following types

```ts
import type { MentionInstance } from "@cedar-design/ui";
```

Mention reuses Input/Textarea typography and spacing; its measurement mirror copies computed native input styles. Override the corresponding input variables. Ineffective mention-font-size, mention-line-height and mention-padding-* variables are removed.

### Form field presentation and confirmation

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

## Configuring the cleared value

`empty-value` / `emptyValue` sets the model value produced by clearing. It accepts a value in the component model type or a zero-argument factory. Omission preserves the existing default; use `() => undefined` to distinguish omission from returning undefined. Arrays are shallow-copied on every clear; selected items that cannot be cleared remain. It does not redefine emptiness, alter Form reset defaults or treat 0/false as universally empty.
Text and person-ID models remain strings; use an empty string or a business-defined string sentinel.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

`data` accepts an array or (query, { signal }) => array/Promise. The component manages loading, cancellation and stale-result isolation; failures emit load-error. Single/multiple groups initialize with an empty query; searchable fields reload when queries change. Tree root loading is independent of existing load-more child loading.

Both input and textarea show manual loading and the current explicit data-loader wait. Loading feedback does not implicitly disable editing; search notification return Promises do not start tasks. Old data requests cannot clear the current request indicator, and load-error retains its original error payload.
