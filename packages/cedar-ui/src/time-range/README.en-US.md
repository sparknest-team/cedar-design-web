---
lang: en-US
permalink: /en/components/time-range/
---

# TimeRange

A pair of time endpoints with explicit confirmation.

```ts
import type { TimeRangeProps, TimeRangeInstance } from "@cedar-design/ui";
```

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes null unchanged; omitted values preserve the existing default. Editors render null as blank without converting ordinary empty-string input to null. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Appearance and presentation

### Size

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration   | Purpose                                                                                                        | Related examples                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `format`        | Display format                                                                                                 | Field Appearance, Range formats and 12-hour clocks, Show Next Day |
| `clearable`     | Show the clear action                                                                                          | Range formats and 12-hour clocks, Placeholder, Show Next Day      |
| `placeholder`   | Placeholder                                                                                                    | Field Appearance, Placeholder                                     |
| `show-next-day` | Allow end before start and show next day. Otherwise reversed ranges cannot commit. Endpoints are never swapped | Range formats and 12-hour clocks, Show Next Day                   |
| `size`          | Size                                                                                                           | Size                                                              |
| `variant`       | Field appearance                                                                                               | Field Appearance                                                  |

<!-- demo-config-notes:end -->

- `size`: Controls the component size.

<demo src="./__demos__/size.vue"></demo>

### Field Appearance

- `format`: Controls the displayed format.
- `variant`: Input variant

<demo src="./__demos__/field-appearance.vue"></demo>

### Range formats and 12-hour clocks

Compare minute, second and 12-hour range displays and edit both endpoints. Next-day rules and model formats remain separate.

<demo src="./__demos__/format-comparison.vue"></demo>

### Placeholder

<demo src="./__demos__/placeholder.vue"></demo>

### Show Next Day

- `format`: Controls the displayed format.

<demo src="./__demos__/show-next-day.vue"></demo>

## Value model and selection rules

### Format Model

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose        | Related examples           |
| ------------- | -------------- | -------------------------- |
| `format`      | Display format | Format Model, Step, Bounds |
| `use12-hours` | 12-hour clock  | Step                       |

<!-- demo-config-notes:end -->

- `format`: Controls the displayed format.

<demo src="./__demos__/format-model.vue"></demo>

### Step

- `format`: Controls the displayed format.
- `step`: Controls the allowed increment.

<demo src="./__demos__/step.vue"></demo>

### Bounds

- `format`: Controls the displayed format.
- `min`: Sets the lower bound.
- `max`: Sets the upper bound.

<demo src="./__demos__/bounds.vue"></demo>

## Input and state control

### Interaction state comparison

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration    | Purpose                  | Related examples                                        |
| ---------------- | ------------------------ | ------------------------------------------------------- |
| `format`         | Display format           | Interaction state comparison, Text Entry, Default State |
| `clearable`      | Show the clear action    | Text Entry, Default State, Selection Events             |
| `disabled`       | Disable interaction      | Interaction state comparison, Selection Events          |
| `readonly`       | Read-only interaction    | Interaction state comparison, Selection Events          |
| `input-editable` | Allow desktop text input | Text Entry, Copying and editing                         |
| `model-value`    | Bound value              | Default State                                           |

<!-- demo-config-notes:end -->

Toggle the state, interact with the component, and restore editing using the controls outside the specimen. Error appearance alone does not run validation.

<demo src="./__demos__/state-lab.vue"></demo>

### Text Entry

- `format`: Controls the displayed format.
- `min`: Sets the lower bound.
- `max`: Sets the upper bound.

<demo src="./__demos__/text-entry.vue"></demo>

### Default State

- `format`: Controls the displayed format.

<demo src="./__demos__/default-state.vue"></demo>

### Selection Events

- `readonly`: Displays the current value without allowing edits.
- `disabled`: Prevents user interaction.
- `format`: Controls the displayed format.

<demo src="./__demos__/selection-events.vue"></demo>

### Copying and editing

With open-trigger-target="icon", use the input area to edit or copy and the suffix button to open. Existing text remains copyable when editing or search is disabled.

<demo src="./__demos__/open-trigger-target.en-US.vue"></demo>

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom line); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

## Reading direction

Range values remain `[start, end]`; direction changes preserve endpoint order, drafts and overnight semantics. Panels and time columns follow reading order, with visual Left/Right focus movement across endpoint columns. Cedar Up/Down moves focus and Enter/Space selects; Maple retains wheel selection with Up/Down. Existing confirmation settings control submission. Popovers inherit their source direction.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Popup configuration and field notifications

`popup-props` configures local Trigger positioning/appearance, e.g. `{ placement: 'top-start' }`, without overriding field open, disabled, trigger or other state/interaction. Top-level `popup-container`, including false, takes precedence. `input-editable` defaults to true and can disable desktop typing. `time-range-picker-props`, including class/style, controls panel appearance. Undeclared attrs no longer supply panel/popup configuration; id/aria-* fall through to the field.

`click(event)` notifies only clicks on non-disabled fields. Readonly may notify without expanding. Closing consistently listens to `open-change(false)`, a close request that controlled open still requires the parent to accept. Neither platform has a field close event; a close request is not a value commit.

`suffix-icon` receives `focus: boolean` and `popupOpen: boolean`. `focus(index = 0)` focuses start (0) or end (1) without committing; `blur()` removes focus and requests closing.

A `placeholder` string applies to both endpoints; arrays provide start/end text, with missing entries empty. Explicit empty strings do not fall back to default text.

### Props

| Arguments                 | Description                                                                                                                      | Type                                                | Default   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | --------- |
| `open-trigger-target`     | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | `'field' \| 'icon'`                                 | `'field'` |
| `model-value`             | Bound value                                                                                                                      | `(string \| number \| Date)[]`                      | `-`       |
| `open`                    | Controlled popup visibility                                                                                                      | `boolean`                                           | `-`       |
| `popup-props`             | Local Trigger presentation options; do not control field state                                                                   | `TimePopupPresentationProps<Partial<TriggerProps>>` | `{}`      |
| `input-editable`          | Allow desktop text input                                                                                                         | `boolean`                                           | `true`    |
| `clearable`               | Show the clear action                                                                                                            | `boolean`                                           | `true`    |
| `disabled`                | Disable interaction                                                                                                              | `boolean`                                           | `false`   |
| `readonly`                | Read-only interaction                                                                                                            | `boolean`                                           | `false`   |
| `size`                    | Size                                                                                                                             | `xs \| sm \| md \| lg \| xl`                        | `-`       |
| `variant`                 | Field appearance                                                                                                                 | `filled \| outline \| standard`                     | `filled`  |
| `placeholder`             | Placeholder                                                                                                                      | `string \| string[]`                                | `-`       |
| `format`                  | Display format                                                                                                                   | `string`                                            | `-`       |
| `use12-hours`             | 12-hour clock                                                                                                                    | `boolean`                                           | `false`   |
| `hide-disabled-options`   | Hide disabled time options                                                                                                       | `boolean`                                           | `false`   |
| `disable-confirm`         | Skip confirmation; valid selections commit immediately and request closing                                                       | `boolean`                                           | `false`   |
| `show-next-day`           | Allow end before start and show next day. Otherwise reversed ranges cannot commit. Endpoints are never swapped                   | `boolean`                                           | `false`   |
| `time-range-picker-props` | Forwarded to TimeRangePicker                                                                                                     | `object`                                            | `{}`      |

### Form field presentation and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-`direct` modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

Inline date/time fields retain their existing confirmation policy. In click/dblclick editors, internal panels hide confirmation tools, and the edit layer supplies one confirm/cancel pair. Standalone DatePicker, DateRangePicker, TimePicker and TimeRangePicker retain panel APIs/confirmation and do not inherit Form field presentation.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

### Forwarded configuration boundaries (F07)

Existing TimePopupPresentationProps and runtime filtering remain. Fields own open/defaultOpen, disabled, trigger, closeOnClickReference, preventFocus and expansion updates. Explicit top-level popup-container takes precedence, otherwise nested configuration is used. popupClass merges internal classes. Inline popupOffset stays 4; Maple also fixes unmountOnClose=true. Such fields in old types are not guaranteed to control final values. Existing Time types/runtime behavior are not narrowed here.

## Configuring the cleared value

`empty-value` / `emptyValue` sets the model value produced by clearing. It accepts a value in the component model type or a zero-argument factory. Omission preserves the existing default; use `() => undefined` to distinguish omission from returning undefined. Arrays are shallow-copied on every clear; selected items that cannot be cleared remain. It does not redefine emptiness, alter Form reset defaults or treat 0/false as universally empty.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.
