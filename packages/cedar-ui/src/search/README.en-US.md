---
lang: en-US
permalink: /en/components/search/
---

# Search

Search submits keywords and controlled field models. The application handles requests and loading.

## Basic examples

### Basic usage

Enter a keyword and press Enter. The first example has one input and one submitted value.

<demo src="./__demos__/en-US/basic.vue"></demo>

## Data and options

### Search button

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration     | Purpose                                  | Related examples                               |
| ----------------- | ---------------------------------------- | ---------------------------------------------- |
| `placeholder`     | Placeholder                              | Search button, With Fields, Controlled history |
| `search-button`   | Whether to show the shared search button | Search button, With Fields                     |
| `recent-searches` | Controlled search history                | With Fields, Controlled history                |
| `button-text`     | Shared search button text                | Search button                                  |
| `fields`          | Search field options                     | With Fields                                    |
| `select-style`    | Field selector style                     | With Fields                                    |

<!-- demo-config-notes:end -->

<demo src="./__demos__/en-US/search-button.vue"></demo>

### With Fields

<demo src="./__demos__/with-fields.vue"></demo>

### Controlled history

<demo src="./__demos__/local-storage.vue"></demo>

## Customization and slots

### History presentation and slots

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration     | Purpose                                                                                 | Related examples               |
| ----------------- | --------------------------------------------------------------------------------------- | ------------------------------ |
| `edit-mode`       | Search editing mode: direct searches in place; popup opens the search editor in a popup | History presentation and slots |
| `recent-searches` | Controlled search history                                                               | History presentation and slots |
| `label`           | Text to the left of the search input                                                    | History presentation and slots |
| `placeholder`     | Placeholder                                                                             | History presentation and slots |
| `clearable`       | Whether the value can be cleared                                                        | History presentation and slots |
| `show-action`     | Whether to show the mobile action                                                       | History presentation and slots |

<!-- demo-config-notes:end -->

<demo src="./__demos__/en-US/presentation.vue"></demo>

### Functional playground

## Interaction and control

### State Lab

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                                            | Related examples           |
| --------------- | -------------------------------------------------- | -------------------------- |
| `placeholder`   | Placeholder                                        | State Lab, Loading         |
| `loading`       | Loading state; submission is blocked while loading | State Lab, Loading         |
| `readonly`      | Whether readonly                                   | State Lab, Loading         |
| `search-button` | Whether to show the shared search button           | Loading, Controlled Fields |
| `disabled`      | Whether disabled                                   | State Lab                  |
| `default-value` | Uncontrolled default keyword                       | Loading                    |

<!-- demo-config-notes:end -->

<demo src="./__demos__/state-lab.vue"></demo>

### Loading

- `readonly`: Displays the current value without allowing edits.

<demo src="./__demos__/loading.vue"></demo>

### Controlled Fields

<demo src="./__demos__/en-US/controlled-fields.vue"></demo>

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Props

| Arguments                  | Description                                                                             | Type                      | Default                               |
| -------------------------- | --------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------- |
| `v-model`                  | Search keyword                                                                          | _string_                  | `-`                                   |
| `default-value`            | Uncontrolled default keyword                                                            | _string_                  | `''`                                  |
| `v-model:model-field`      | Current search field                                                                    | _string_                  | `-`                                   |
| `default-field`            | Uncontrolled default field                                                              | _string_                  | `-`                                   |
| `v-model:model`            | Object updated by field in field-search mode                                            | _Record<string, unknown>_ | `-`                                   |
| `fields`                   | Search field options                                                                    | _SearchField[]_           | `[]`                                  |
| `select-style`             | Field selector style                                                                    | _StyleValue_              | `-`                                   |
| `recent-searches`          | Controlled search history                                                               | _string[]_                | `[]`                                  |
| `max-search-history-count` | Maximum items in the next history list                                                  | _number_                  | `5`                                   |
| `edit-mode`                | Search editing mode: direct searches in place; popup opens the search editor in a popup | `'direct' \| 'popup'`     | `'direct'`                            |
| `search-button`            | Whether to show the shared search button                                                | _boolean_                 | `false`                               |
| `button-text`              | Shared search button text                                                               | _string_                  | `-`                                   |
| `button-props`             | Shared search button props                                                              | _ButtonProps_             | `-`                                   |
| `loading`                  | Loading state; submission is blocked while loading                                      | _boolean_                 | `false`                               |
| `clearable`                | Whether the value can be cleared                                                        | _boolean_                 | `false`                               |
| `variant`                  | Input variant: `filled`, `outline`, or `standard`                                       | _string_                  | `outline`                             |
| `size`                     | Input size inherited from Form / ConfigProvider                                         | `xs / sm / md / lg / xl`  | `md`                                  |
| `placeholder`              | Placeholder                                                                             | _string_                  | `-`                                   |
| `disabled`                 | Whether disabled                                                                        | _boolean_                 | `false`                               |
| `readonly`                 | Whether readonly                                                                        | _boolean_                 | `false`                               |
| `label`                    | Text to the left of the search input                                                    | _string_                  | `-`                                   |
| `shape`                    | Inner field shape: `round` or `square`                                                  | _string_                  | `square`                              |
| `background`               | Outer background color                                                                  | _string_                  | `-`                                   |
| `input-background`         | Inner field background color                                                            | _string_                  | `-`                                   |
| `show-action`              | Whether to show the mobile action                                                       | _boolean_                 | `false`                               |
| `action-text`              | Action button text                                                                      | `string`                  | Follows global locale and action-type |
| `action-type`              | Action type: `cancel` or `search`                                                       | _string_                  | `cancel`                              |
| `search-icon`              | Search icon name                                                                        | _string_                  | `magnify`                             |
| `max-length`               | Maximum length                                                                          | _string \| number_        | `-`                                   |
| `enterkeyhint`             | Virtual keyboard Enter hint                                                             | _string_                  | `search`                              |

### Events

| Event               | Description                                              | Callback arguments                   |
| ------------------- | -------------------------------------------------------- | ------------------------------------ |
| `update:modelValue` | Emitted when the keyword updates                         | `value: string`                      |
| `update:modelField` | Emitted when the field updates                           | `field: string`                      |
| `update:model`      | Emitted when the field model updates                     | `model: Record<string, unknown>`     |
| `input`             | Emitted during live editing                              | `value: string, event: Event`        |
| `change`            | Emitted on blur, Enter commit, or field change           | `value: string, event: Event`        |
| `clear`             | Emitted when clearing                                    | `event: Event`                       |
| `search`            | Emitted by the icon, button, Enter, or history selection | `result: SearchResult, event: Event` |
| `focus`             | Emitted on focus                                         | `event: FocusEvent`                  |
| `blur`              | Emitted on blur                                          | `event: FocusEvent`                  |
| `cancel`            | Emitted by the mobile cancel action                      | `event: Event`                       |

### Slots

| Name             | Description                                    | Arguments   |
| ---------------- | ---------------------------------------------- | ----------- |
| `prefix`         | Input prefix; replaces the default search icon | `-`         |
| `suffix`         | Input suffix                                   | `-`         |
| `clear-icon`     | Clear icon                                     | `{ clear }` |
| `button-default` | Shared search button content                   | `-`         |
| `button-icon`    | Shared search button icon                      | `-`         |
| `label`          | Left label                                     | `-`         |
| `action`         | Action content                                 | `-`         |

### Methods

| Method  | Description | Arguments | Returns |
| ------- | ----------- | --------- | ------- |
| `focus` | Focus       | `-`       | `-`     |
| `blur`  | Blur        | `-`       | `-`     |

### SearchField

| Arguments     | Description                                         | Type     |
| ------------- | --------------------------------------------------- | -------- |
| `label`       | Field label                                         | _string_ |
| `value`       | Field value                                         | _string_ |
| `placeholder` | Field `placeholder`; overrides Search `placeholder` | _string_ |

### SearchResult

| Arguments        | Description         | Type                                   |
| ---------------- | ------------------- | -------------------------------------- |
| `modelField`     | Search field        | _string \| undefined_                  |
| `modelValue`     | Raw search keyword  | _string_                               |
| `model`          | Field model object  | _Record<string, unknown> \| undefined_ |
| `recentSearches` | Next search history | _string[]_                             |

Input event contract: editing emits `input` before `update:modelValue`; committing on blur emits `change` only for a changed value. Clearing emits `clear → input → update:modelValue → change` once, updates the search field model once, and does not submit a search.

input fires before model updates. Enter waits for Input submission and controlled-value reconciliation before producing search results. If the parent rejects a trim proposal, search still uses the actual controlled value. Clearing notifies clear → input → update:modelValue → change without automatically searching.

## Controlled-model protocol

Value precedence is `modelValue` > `model`[current field] > uncontrolled `defaultValue`. With `model` and a current field, missing/null values display an empty string. Keep simultaneously bound models consistent in the parent. `modelField` overrides `defaultField` and the first field. Internal logic never forcibly overrides controlled values.

`model` is not mutated in place. Every logical update emits a new `update:model` object, clearing other declared fields while retaining undeclared properties. Use `v-model:model` or explicitly accept proposals. Switching fields produces one `update:modelField → update:modelValue → update:model → change` sequence. Parents can reject proposals. Enter/button/history searches wait one update cycle, then read the actually accepted field, keyword and `model`.

History is neither filtered by current input nor persisted internally. New history returned by `search` is trimmed, emptied entries removed, deduplicated and limited to the configured maximum. Empty keywords are not added. Nonfinite/negative limits are treated as 0. Clearing does not `search`; cancel proposes an empty string and emits cancel/change without searching.

Editing emits `input → update:modelValue`; changed commits emit `change`. Clear emits `clear → input → update:modelValue → change` once. Disabled, readonly and loading block search, cancel, history and field actions. Form / FormItem / InputGroup state is inherited. Deactivation or unmount cancels pending asynchronous search.

### Platform boundaries

The controller, public API and history content are independently copied. Both default to `presentation=inline`; Cedar defaults to `shape=square` and Maple to `shape=round`. Fullscreen history uses local Drawer / Popup instances. Desktop InputGroup and mobile search-bar layout/touch spacing remain independent. Input supports `xs/sm/md/lg/xl`; outer bar density is configured by Search tokens rather than scaled by size.

### Public types

`SearchPresentation`、`SearchProps`, `SearchEmits`, `SearchSlots`, `SearchExpose`, `SearchField`, `SearchResult`.

### Forwarded Input props

Explicit Input props include `modelModifiers`, `type`, `ariaLabel`, `placeholder`, `maxLength`, `readonly`, `disabled`, `autofocus`, `enterkeyhint`, `textColor`, `focusColor`, `blurColor`, `size`, `variant`, `clearable`, `inputAttrs` and `error`. `inputAttrs` carries native name/autocomplete/ARIA attributes to both outer and fullscreen Input; `error` overrides inherited `error` state. Search actions, popup cancellation and dialog labels follow the global locale. Programmatic cancel, field and history selection notify Form change once; native edits retain the Input event pipeline.

## Configuring the cleared value

`empty-value` / `emptyValue` sets the model value produced by clearing. It accepts a value in the component model type or a zero-argument factory. Omission preserves the existing default; use `() => undefined` to distinguish omission from returning undefined. Arrays are shallow-copied on every clear; selected items that cannot be cleared remain. It does not redefine emptiness, alter Form reset defaults or treat 0/false as universally empty.
Text and person-ID models remain strings; use an empty string or a business-defined string sentinel.
