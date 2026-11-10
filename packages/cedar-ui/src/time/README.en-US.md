---
lang: en-US
permalink: /en/components/time/
---

# Time

A time field with a separate draft and confirmation step.

```ts
import type { TimeProps, TimeInstance } from "@cedar-design/ui";
```

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes null unchanged; omitted values preserve the existing default. Editors render null as blank without converting ordinary empty-string input to null. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Appearance and presentation

### Size

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------- | ---------- | ---------------------------------------- |
| `size` | Size | Size, Control Sizes |
| `variant` | Field appearance | Control Sizes, Field Appearance |
| `placeholder` | Placeholder | Control Sizes, Field Appearance |
| `format` | Display format | Field Appearance, Time formats and 12-hour clocks |
| `use12-hours` | 12-hour clock | Time formats and 12-hour clocks |

<!-- demo-config-notes:end -->


- `size`: Controls the component size.

<demo src="./__demos__/size.vue"></demo>

### Control Sizes

- `size`: Controls the component size.
- `variant`: Input variant

<demo src="../field-decorator/__demos__/control-sizes.vue"></demo>

### Field Appearance

- `format`: Controls the displayed format.
- `variant`: Input variant

<demo src="./__demos__/field-appearance.vue"></demo>

### Time formats and 12-hour clocks

Compare minute, second and 12-hour displays. Distinguish midnight (12 AM) from noon (12 PM); model formats and step constraints remain separate.

<demo src="./__demos__/format-comparison.vue"></demo>

## Value model and selection rules

### Format Model

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ----------------- | ---------- | -------------------------------------------- |
| `format` | Display format | Format Model, Step, Bounds |
| `model-value` | Bound value | Step |
| `use12-hours` | 12-hour clock | Step |
| `step` | Hour/minute/second steps | Step |
| `disable-confirm` | No Confirm | No Confirm |

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

### No Confirm

<demo src="./__demos__/no-confirm.vue"></demo>

## Input and state control

### Interaction state comparison

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ---------------- | ---------------- | -------------------------------------------- |
| `format` | Display format | Interaction state comparison, Text Entry, Default State |
| `readonly` | Read-only interaction | Interaction state comparison, Selection Events, Multiple Fields |
| `clearable` | Show the clear action | Text Entry, Default State, Selection Events |
| `disabled` | Disable interaction | Interaction state comparison, Selection Events |
| `input-editable` | Allow desktop text input | Text Entry, Copying and editing |
| `open` | Controlled popup visibility | Default State |

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

### Multiple Fields

- `readonly`: Displays the current value without allowing edits.
- `format`: Controls the displayed format.

<demo src="./__demos__/multiple-fields.vue"></demo>

### Copying and editing

With open-trigger-target="icon", use the input area to edit or copy and the suffix button to open. Existing text remains copyable when editing or search is disabled.

<demo src="./__demos__/open-trigger-target.en-US.vue"></demo>

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom line); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

## Reading direction

Inherits the nearest `dir="ltr|rtl"`; direction changes do not modify time or commit drafts. Hour, minute and second columns follow reading order, with Left/Right moving focus visually between columns. Cedar Up/Down and Home/End move focus within the current column, Enter/Space selects, and disabled options are skipped. Maple wheels retain Up/Down and Home/End selection behavior. Existing confirmation configuration determines immediate commits. Popovers inherit source field direction.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Popup configuration and field notifications

`popup-props` configures local Trigger positioning/appearance, e.g. `{ placement: 'top-start' }`, without overriding field state/interaction such as open, disabled or trigger. Top-level `popup-container`, including false, takes precedence. `input-editable` defaults to true and can disable desktop typing. `time-picker-props`, including class/style, controls panel appearance. Panel and popup configuration uses the declared props; id/aria-* fall through to the field.

`click(event)` notifies only clicks on non-disabled fields. Readonly may notify without expanding. Closing consistently listens to `open-change(false)`, a close request that controlled open still requires the parent to accept. Neither platform has a field close event; a close request is not a value commit.

The field icon slot is `suffix-icon` with `focus: boolean` and `popupOpen: boolean`. `focus(index = 0)` focuses an endpoint without committing; `blur()` removes focus and requests closing.

### Time Props

| Prop | Description | Type | Default behavior |
| --- | --- | --- | --- |
| `before-commit` | Explicit field-save guard using payload, done and context | `BeforeFieldCommit` | `undefined` |
| `blur-color` | Color while unfocused | `string` | Theme default |
| `clearable` | Allow clearing with disabled, readonly and pending guards | `boolean` | `true` |
| `default-open` | Initial uncontrolled opening, read only at creation | `boolean` | `false` |
| `default-value` | Initial uncontrolled value, read only at creation | `TimeValue` | `undefined` |
| `disable-confirm` | Commit a valid selection immediately; fields also request closing | `boolean` | `false` |
| `disabled` | Disable interaction; fields inherit FormItem/Form when unset | `boolean` | Inherited, finally false |
| `disabled-hours` | Return disabled hours in the 0–23 clock | `() => number[]` | `undefined` |
| `disabled-minutes` | Return disabled minutes for the selected hour | `(hour?: number) => number[]` | `undefined` |
| `disabled-seconds` | Return disabled seconds for the selected hour and minute | `(hour?: number, minute?: number) => number[]` | `undefined` |
| `edit-mode` | Field editing mode, inherited from FormItem/Form when unset | `FieldEditMode`<br>`'direct' \| 'click' \| 'dblclick'` | Inherited, finally direct |
| `empty-text` | Empty text in read-pretty mode | `string` | Inherited, finally '-' |
| `empty-value` | Clear output or factory, independent of empty-value recognition | `TimeValue \| null \| (() => TimeValue \| null \| undefined)` | `undefined` |
| `empty-values` | Empty-value recognition list, replaced rather than merged | `readonly unknown[]` | Inherited/family default |
| `error` | Field error presentation, inherited when unset | `boolean` | Inherited, finally false |
| `focus-color` | Color while focused | `string` | Theme default |
| `format` | String parsing, display and output format; 12-hour defaults include a | `string` | From use12Hours |
| `hide-disabled-options` | Hide disabled time options; clocks retain tick positions | `boolean` | `false` |
| `hint` | Floating placeholder hint, suppressed by an outer Form label | `boolean` | `true` |
| `input-editable` | Allow text input without removing panel selection | `boolean` | `true` |
| `line` | Show the field border or underline | `boolean` | `true` |
| `loading` | Manual loading feedback, independent of event return values | `boolean` | `false` |
| `loading-mode` | Field loading presentation mode | `default \| line` | `default` |
| `max` | Maximum inclusive clock time in HH:mm or HH:mm:ss | `string` | `undefined` |
| `min` | Minimum inclusive clock time in HH:mm or HH:mm:ss | `string` | `undefined` |
| `model-value` | External value; numbers and Dates retain their input kind, while normal commits output formatted strings | `TimeModelValue` | `undefined` |
| `open` | Controlled field editor opening | `boolean` | `undefined` |
| `open-trigger-target` | Open by field or icon click, without restricting keyboard opening | `field \| icon` | `field` |
| `placeholder` | Placeholder text; ranges also accept start/end arrays | `string` | `undefined` |
| `popup-container` | Editor container; false renders in place | `PopupContainer` | Shared container default |
| `popup-props` | Popup presentation options, excluding model, state and owned events | `TimePopupPresentationProps` | `{}` |
| `read-pretty` | Read-pretty presentation without an editor, independent of readonly | `boolean` | Inherited, finally false |
| `readonly` | Readonly; fields allow focus/copy without value changes or opening editing | `boolean` | Inherited, finally false |
| `size` | Five sizes, following field Form inheritance | `ComponentSize`<br>`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | Inherited, finally md |
| `step` | Hour/minute/second steps from midnight; invalid steps fall back to 1 | `TimeStep` | Effective steps are all 1 |
| `text-color` | Content text color | `string` | Theme default |
| `time-picker-props` | Time-panel presentation options; model, rules and state remain owned by the field | `TimePanelPresentationProps` | `{}` |
| `use12-hours` | 12-hour panel; disabled-hour callbacks still use 0–23 | `boolean` | `false` |
| `variant` | Field appearance | `filled \| outline \| standard` | `filled` |

### Editing and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-direct modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(payload, done, context)` can guard saving the editor. FormItem validates the candidate first; invalid candidates keep the editor open. `open / default-open / update:open` control the editor. `#read="{ value, text }"` customizes read content. See the unified field presentation examples in Form.

Inline date/time fields retain their existing confirmation policy. In click/dblclick editors, internal panels hide confirmation tools, and the edit layer supplies one confirm/cancel pair. Standalone DatePicker, DateRangePicker, TimePicker and TimeRangePicker retain panel APIs/confirmation and do not inherit Form field presentation.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

### Forwarded configuration boundaries

The time field manages open/defaultOpen, disabled, trigger, closeOnClickReference, preventFocus and visibility updates. An explicit top-level popup-container takes precedence over nested configuration; popupClass is merged. Inline presentation fixes popupOffset=4, and Maple also fixes unmountOnClose=true, so those nested fields may not control the final values.

### TimePicker Props

| Prop | Description | Type | Default behavior |
| --- | --- | --- | --- |
| `default-value` | Initial uncontrolled value, read only at creation | `TimeValue \| TimeValue[]` | `undefined` |
| `disable-confirm` | Commit a valid selection immediately; fields also request closing | `boolean` | `false` |
| `disabled` | Disable panel selection and confirmation | `boolean` | `false` |
| `disabled-hours` | Return disabled hours in the 0–23 clock | `() => number[]` | `undefined` |
| `disabled-minutes` | Return disabled minutes for the selected hour | `(hour?: number) => number[]` | `undefined` |
| `disabled-seconds` | Return disabled seconds for the selected hour and minute | `(hour?: number, minute?: number) => number[]` | `undefined` |
| `format` | String parsing, display and output format; 12-hour defaults include a | `string` | From use12Hours |
| `hide-disabled-options` | Hide disabled time options; clocks retain tick positions | `boolean` | `false` |
| `max` | Maximum inclusive clock time in HH:mm or HH:mm:ss | `string` | `undefined` |
| `min` | Minimum inclusive clock time in HH:mm or HH:mm:ss | `string` | `undefined` |
| `model-value` | Panel external value, seeding draft and accepting later changes | `TimeValue \| TimeValue[]` | `undefined` |
| `readonly` | Readonly panel without draft changes or confirmation | `boolean` | `false` |
| `show-next-day` | Ranges only: allow an earlier end time as next day without swapping endpoints | `boolean` | `false` |
| `step` | Hour/minute/second steps from midnight; invalid steps fall back to 1 | `TimeStep` | Effective steps are all 1 |
| `type` | Single/range mode of the desktop general panel | `time \| time-range` | `time` |
| `use12-hours` | 12-hour panel; disabled-hour callbacks still use 0–23 | `boolean` | `false` |

## Configuring the cleared value

`empty-value` defines the output of an existing clear action. Omission preserves the component fallback; supported types remain component-specific. It does not change empty-values recognition or Form reset defaults.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

Public focus/blur methods are callable from initial mount. Focus opens an editable deferred editor and targets it after readiness; disabled, readonly, or reading fields do not open. Blur only blurs the current target without reopening. Stored methods never bind an old editor; closure, mode changes, deactivation, or unmount cancel queued calls.

During deferred editing, clearing retains the configured valid empty-value and confirmation submits that empty value; null is not replaced by midnight. A newly created empty wheel panel may initialize a visible candidate without selecting or committing a model. Later explicit empty drafts in that panel are not automatically refilled. Reopening and cancelling does not publish another value.

### Field notifications and public types

Field update:modelValue/change use TimeModelValue (TimeRangeModelValue for ranges). Normal selections commit formatted strings; explicit clears retain configured null, timestamps, Date objects or range arrays accepted by the property. Auxiliary dates may be undefined; clearing a range to an empty array also yields an empty auxiliary array. Clear does not emit select. Select remains a formatted user draft, which may be incomplete for a range.

Exports TimeEmits, TimeModelValue, TimeReadScope, TimeSuffixIconScope, TimeSlots, TimeActionsScope and TimeExpose, plus TimeRangeEmits, TimeRangeModelValue, TimeRangeReadScope, TimeRangeSlots, TimeRangeActionsScope and TimeRangeExpose. Import each from the root or its component entry. Instances include the public Expose contract.

Field read receives { value, text } with a nullable model; suffix-icon receives { focus, popupOpen }; clear-icon receives a guarded clear(event?). Range fields also support separator. Cedar direct mode supports a default custom trigger, while Maple does not. Neither platform currently forwards field loading-icon, so types do not promise it. actions/extra operate on panel drafts: Cedar forwards them in direct mode; Maple forwards them during deferred editing, not direct mode. Inner confirm is not the outer final-save entry.

<!-- time-contract:start -->

### Defaults and format

Inherited, format-derived and effective-step defaults describe resolved behavior; raw Props may be undefined. Without format, the default is HH:mm:ss, or hh:mm:ss a with use12Hours=true. Bounds use 24-hour clock times, separate from Date-family valueFormat/time-zone rules.

### Field event and slot parameter types

Events notify only; listener Promises are not collected. update:modelValue and change include null, 0, Date or range arrays allowed by the clearing policy. select reports formatted draft rather than saving. Field update:open/open-change are opening requests; initialization does not notify automatically.

| Event | Arguments |
| --- | --- |
| `update:modelValue` | `TimeModelValue` |
| `change` | `TimeModelValue, Date \| undefined` |
| `select` | `string \| undefined, Date \| undefined` |
| `clear` | `()` |
| `click` | `Event` |
| `focus` | `()` |
| `blur` | `()` |
| `update:open` | `boolean` |
| `open-change` | `boolean` |

Field focus(index?)/blur() target the actual input or trigger without changing model. read receives value/text, suffix-icon receives focus/popupOpen, and clear-icon receives guarded clear(event?). prefix, selected, suffix and extra are unscoped; ranges also have separator. Cedar direct mode has a custom default trigger slot; Maple does not.

actions/extra belong to panel draft: Cedar direct forwards them, Maple direct does not, and deferred editing forwards them. Panel confirm() is not the outer field final-save entry point. Pure panels have actions/extra, without field read/clear-icon/loading-icon slots. Standalone panels expose no ref.confirm() method; custom confirmation uses actions.confirm.

### Panel event parameter types

Arguments are tuples from the corresponding public event type. Date arguments are parsed from formatted clock times and do not promise to preserve an input Date calendar day.

| Event | Arguments |
| --- | --- |
| `update:modelValue` | `TimePickerEmits['update:modelValue']` |
| `change` | `TimePickerEmits['change']` |
| `select` | `TimePickerEmits['select']` |
| `confirm` | `TimePickerEmits['confirm']` |

### Panel Events

Pure-panel business events are update:modelValue, change, select and confirm. select reports candidates; valid confirmation notifies confirm, while update:modelValue/change only occur for an actual value change. Field opening, clearing and focus events do not belong to pure panels.

Complete panel actions scope below; extra has no arguments.

```ts
import type { TimeValue } from '@cedar-design/ui'
type PanelActionsScope = { confirm: () => boolean; canConfirm: boolean; value: TimeValue | Array<TimeValue | undefined> | undefined }
```

### Explicit save guard

beforeCommit(payload, done, context) belongs to field saving. payload contains value/previousValue; context has signal and optional event. Returning undefined waits for done, while boolean/Promise results settle by their result. FormItem validates candidates first; failure retains draft. Ordinary select/change/confirm/click listener returns do not use this task protocol.

### Type imports

```ts
import { Time, TimePicker, type TimeProps, type TimeEmits,
  type TimeSlots, type TimeInstance, type TimePickerProps,
  type TimePickerEmits, type TimePickerSlots } from '@cedar-design/ui'
```

<!-- time-contract:end -->

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-time-picker-border-color` | `var(--c-color-neutral-3)` | `border`, `border-bottom`, `border-inline-end`, `border-top` |
| `--c-time-picker-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-time-picker-box-shadow` | `var(--c-shadow1-down)` | `box-shadow` |
| `--c-time-picker-cell-bg-active` | `var(--c-color-fill-2)` | `background-color` |
| `--c-time-picker-cell-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-time-picker-cell-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-time-picker-cell-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-time-picker-cell-font-weight-active` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-time-picker-cell-height` | `var(--c-size-6)` | `height`, `line-height` |
| `--c-time-picker-cell-padding-left` | `var(--c-spacing-9)` | `padding-inline-start` |
| `--c-time-picker-cell-spacing` | `var(--c-spacing-2)` | `height`, `padding` |
| `--c-time-picker-cell-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-time-picker-cell-text-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-time-picker-column-height` | `224px` | `height` |
| `--c-time-picker-column-width` | `var(--c-size-16)` | `width` |
| `--c-time-picker-footer-extra-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-time-picker-footer-padding` | `var(--c-spacing-4)` | `padding` |
| `--c-time-picker-popover-body-reserve` | `128px` | `height` |
| `--c-time-picker-popover-column-max-height` | `224px` | `height` |
| `--c-time-picker-popover-gap` | `32px` | `max-width` |
| `--c-time-picker-range-gap` | `var(--c-spacing-6)` | `gap` |
| `--c-time-picker-range-next-day-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-time-picker-range-panel-title-gap` | `var(--c-spacing-3)` | `gap` |
| `--c-time-picker-range-panel-title-line-height` | `22px` | `line-height` |
| `--c-time-picker-range-panel-title-padding-horizontal` | `var(--c-spacing-6)` | `padding` |
| `--c-time-picker-range-panel-title-padding-vertical` | `var(--c-spacing-3)` | `padding` |
| `--c-time-picker-range-wrapper-padding` | `var(--c-spacing-4)` | `padding` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-time-picker-border-color: var(--c-color-neutral-3);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
