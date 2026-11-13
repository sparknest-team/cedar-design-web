---
lang: en-US
permalink: /en/components/date/
---

# Date

Floating date panels use the visual viewport height so the full calendar is visible when space permits. Short windows scroll content while keeping actions visible. Override `--c-date-picker-popover-max-height` to adjust the limit (default `100dvh - 32px`).

A date field with a trigger. Use DatePicker for a standalone panel.

## String models and time zones

format controls display; value-format controls the model and events. Use YYYY-MM-DD for a date string or YYYY-MM for a month string. MM-DD has no year and parsing uses the current year, so retain a full date for cross-year ordering or explicit leap-year rules.

Omitting time-zone preserves browser-local behavior. With an IANA time zone, Date and timestamps represent instants while strings represent local civil times in that zone. Invalid DST times are rejected; newly entered repeated times resolve to the first occurrence. Untouched Date/timestamp range endpoints preserve their exact instant and hidden precision. Maple-only scroll/line views do not change Cedar panel defaults.

## Basic examples

### Basic

<demo src="./__demos__/basic.vue"></demo>

### Interaction state comparison

Toggle disabled, read-only and error states, then interact with the same instance. Recovery controls remain outside the target; error appearance alone does not validate data.

<details>
<summary>Configuration details and limits</summary>

## Appearance and date presentation

### Appearance configuration comparison

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| -------------- | ------------------------------------------------------- | -------------------------------- |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | Appearance configuration comparison, Locale Isolation |
| `type` | Type | Type, Locale Isolation |
| `size` | Size | Control Sizes |
| `variant` | Field appearance | Control Sizes |
| `placeholder` | Placeholder | Control Sizes |
| `clearable` | Show the clear action | Type |

<!-- demo-config-notes:end -->


Choose a dimension to compare all its values side by side while keeping other settings and content identical. Change the other settings to inspect combinations; input specimens share one model.

<demo src="./__demos__/appearance-lab.vue"></demo>

### Control Sizes

<demo src="../field-decorator/__demos__/control-sizes.vue"></demo>

### Type

<demo src="./__demos__/type.vue"></demo>

### Month Labels

<demo src="./picker/__demos__/month-labels.vue"></demo>

### Locale Isolation

<demo src="./picker/__demos__/locale-isolation.vue"></demo>

## Time and selection rules

### Show Time

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| -------------- | ------------------------------------------------------- | -------- |
| `show-time` | Include time selection | Show Time |
| `format` | Display format | Show Time |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | Show Time |
| `clearable` | Show the clear action | Show Time |

<!-- demo-config-notes:end -->


<demo src="./__demos__/show-time.vue"></demo>

### Time Presentation

<demo src="./picker/__demos__/time-presentation.vue"></demo>

## Value model and text input

### Value Formats

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| `format` | Display format | Value Formats, String Values, Text Entry |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | Value Formats, String Values |
| `type` | Type | String Values, Period Text |
| `date-picker-props` | Panel presentation options | Period Text |

<!-- demo-config-notes:end -->


<demo src="./__demos__/value-formats.vue"></demo>

### String Values

<demo src="./__demos__/en-US/string-values.vue"></demo>

### Period Text

<demo src="./picker/__demos__/period-text.vue"></demo>

### Text Entry

<demo src="./picker/__demos__/text-entry.vue"></demo>

## Interaction and field configuration

### Api Review

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------------- | ------------------------------------------------------- | ------------------------------------ |
| `disabled` | Disable interaction | Api Review, Field Protocol |
| `open` | Controlled popup visibility | Rejected Close, Passthrough Options |
| `date-picker-props` | Panel presentation options | Field Panel Tools, Entry Boundary |
| `placeholder` | Placeholder | Field Protocol, Entry Boundary |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | Api Review |
| `readonly` | Read-only interaction | Api Review |

<!-- demo-config-notes:end -->


</details>

<demo src="./__demos__/state-lab.vue"></demo>

### Rejected Close

<demo src="./__demos__/rejected-close.vue"></demo>

### Field Panel Tools

<demo src="./picker/__demos__/field-panel-tools.vue"></demo>

### Field Protocol

<demo src="./__demos__/field-protocol.vue"></demo>

### Entry Boundary

<demo src="./picker/__demos__/entry-boundary.vue"></demo>

### Passthrough Options

<demo src="./__demos__/passthrough-options.vue"></demo>

### Props

| Arguments | Description | Type | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------- |
| `open-trigger-target` | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | `'field' \| 'icon'` | `'field'` |
| `model-value` | Bound value | `Date \| string \| number` | `-` |
| `type` | Date precision | `date \| week \| month \| year \| quarter` | `date` |
| `open` | Controlled popup visibility | `boolean` | `-` |
| `clearable` | Show the clear action | `boolean` | `true` |
| `disabled` | Disable interaction | `boolean` | `false` |
| `readonly` | Read-only interaction | `boolean` | `false` |
| `size` | Component size | `xs \| sm \| md \| lg \| xl` | `-` |
| `variant` | Field appearance | `filled \| outline \| standard` | `outline` |
| `placeholder` | Placeholder | `string` | `-` |
| `disabled-date` | Return true to disable a date | `Function` | `-` |
| `format` | Display format | `string \| Function` | Depends on type |
| `show-time` | Include time selection | `boolean` | `false` |
| `date-picker-props` | Panel presentation options | `DatePickerOptions` | `{}` |

#### Copying and editing

With open-trigger-target="icon", use the input area to edit or copy and the suffix button to open. Existing text remains copyable when editing or search is disabled.

<demo src="./__demos__/open-trigger-target.en-US.vue"></demo>

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom line); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Calendar dates, months and years follow reading order; navigation icons mirror, while date values keep their meaning. In paged grids, Left/Right moves focus visually, Up/Down moves one row, and Home/End moves to the row boundary, skipping disabled items. Focus navigation does not select; Enter/Space keeps the existing selection behavior. Navigation is bounded by the displayed grid. Explicit `shortcuts-position="left|right"` remains physical; `bottom` stays below. Field popovers inherit their source direction.

## Triggers and positioning

### Popup placement

The Date field prefers bottom-start below its input. Override the preferred side through popupProps.placement only when needed; the underlying Trigger positions it, not Popup or Popover. DatePicker is a standalone date panel with no input anchor. Configure popup placement on the Date field.

Public focus/blur methods are callable from initial mount. Focus opens an editable deferred editor and targets it after readiness; disabled, readonly, or reading fields do not open. Blur only blurs the current target without reopening. Stored methods never bind an old editor; closure, mode changes, deactivation, or unmount cancel queued calls.

<!-- date-contract:start -->

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Date Props

| Prop | Description | Type | Default behavior |
| --- | --- | --- | --- |
| `before-commit` | Explicit field-save guard using payload, done and context | `BeforeFieldCommit` | `undefined` |
| `blur-color` | Color while unfocused | `string` | Theme default |
| `clearable` | Allow clearing with disabled, readonly and pending guards | `boolean` | `true` |
| `date-picker-props` | Date-panel presentation options, with model/rules/type owned by the field | `DatePickerOptions` | `{}` |
| `default-open` | Initial uncontrolled opening, read only at creation | `boolean` | `false` |
| `default-value` | Initial uncontrolled value, read only at creation | `DateValue` | `undefined` |
| `disable-confirm` | Commit on selection; false retains draft for confirmation | `boolean` | `false` |
| `disabled` | Disable interaction; fields inherit FormItem/Form when unset | `boolean` | Inherited, finally false |
| `disabled-date` | Return true to disable the date; side is start/end | `(date: Date, side: DateSide) => boolean`<br>`DateSide: 'end' \| 'start'` | `undefined` |
| `disabled-time` | Return disabled hour/minute/second lists for a date and endpoint | `(date: Date, side: DateSide) => DateDisabledTime`<br>`DateSide: 'end' \| 'start'` | `undefined` |
| `edit-mode` | Field editing mode, inherited from FormItem/Form when unset | `FieldEditMode`<br>`'direct' \| 'click' \| 'dblclick'` | Inherited, finally direct |
| `empty-text` | Empty text in read-pretty mode | `string` | Inherited, finally '-' |
| `empty-value` | Clear output or synchronous factory, independent of emptyValues recognition | `DateValue \| null \| (() => DateValue \| null \| undefined)` | `undefined` |
| `empty-values` | Empty-value recognition list, replaced rather than merged | `readonly unknown[]` | Inherited/family default |
| `error` | Field error presentation, inherited when unset | `boolean` | Inherited, finally false |
| `focus-color` | Color while focused | `string` | Theme default |
| `format` | Display/text-input format; a function only formats without reverse text parsing | `string \| ((date: Date) => string)` | From precision/time settings |
| `hint` | Floating placeholder hint, suppressed by an outer Form label | `boolean` | `false` |
| `input-editable` | Allow text input without removing panel selection | `boolean` | `true` |
| `line` | Show the field border or underline | `boolean` | `true` |
| `loading` | Manual loading feedback, independent of event return values | `boolean` | `false` |
| `loading-mode` | Field loading presentation mode | `default \| line` | default |
| `max` | Inclusive maximum; a supplied invalid boundary is not silently ignored | `DateValue` | `undefined` |
| `min` | Inclusive minimum; a supplied invalid boundary is not silently ignored | `DateValue` | `undefined` |
| `model-value` | External date value; undefined is uncontrolled, null is explicitly empty | `DateValue \| null` | `undefined` |
| `open` | Controlled field editor opening | `boolean` | `undefined` |
| `open-trigger-target` | Open by field or icon click, without restricting keyboard opening | `field \| icon` | field |
| `placeholder` | Field placeholder, following Locale when omitted | `string` | `undefined` |
| `popup-container` | Editor container; false renders in place | `PopupContainer` | Shared container default |
| `popup-props` | Trigger presentation options, filtering owned state/model/rules/control listeners at runtime | `Record<string, unknown>` | `{}` |
| `read-pretty` | Read-pretty presentation without an editor, independent of readonly | `boolean` | Inherited, finally false |
| `readonly` | Readonly; fields allow focus/copy without value changes or opening editing | `boolean` | Inherited, finally false |
| `separator` | Separator text for joined/range display, including an empty string | `string` | `, ` |
| `show-time` | Enable time precision/selection, with visible precision controlled by format | `boolean` | `false` |
| `size` | Five sizes, following field Form inheritance | `ComponentSize`<br>`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | Inherited, finally md |
| `text-color` | Content text color | `string` | Theme default |
| `time-picker-props` | Presentation options for the Cedar embedded time panel, excluding date model/rules | `DateTimePickerOptions` | `{}` |
| `time-zone` | IANA time zone; an invalid zone does not fall back to a valid selectable value | `string` | System local time zone |
| `type` | Date precision; Cedar includes week/quarter, while Maple supports date/month/year | `date \| month \| year \| week \| quarter` | `date` |
| `value-format` | Serialized model format: Date, timestamp or format tokens, independent of display format | `string` | From precision/time settings |
| `variant` | Field appearance | `filled \| outline \| standard` | `outline` |

### Shared date-family contract

| Prop | Description | Type | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------- |
| `default-value` | Uncontrolled initial value, read once | DateValue / DateValue[] | — |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | string | Follows type |
| `min` | Inclusive minimum date; string bounds use value-format | DateValue | — |
| `max` | Inclusive maximum date; string bounds use value-format | DateValue | — |
| `disabled-time` | Disabled times for the current date and endpoint | (date: Date, side: DateSide) => DateDisabledTime<br>`DateSide: 'end' \| 'start'` | — |
| `disable-confirm` | Commit immediately | boolean | false |
| `default-open` | Uncontrolled initial open state | boolean | false |
| `popup-props` | Optional field-popup presentation settings. Placement defaults to bottom-start and is positioned automatically by the underlying Trigger; the preferred side can be overridden. No top-level placement prop; field state and rules cannot be overridden | object | {} |
| `popup-container` | Portal target; the top-level value wins, including false for inline rendering | string / HTMLElement / (() => HTMLElement) / false | — |

`DateValue = Date | string | number`. Clearing a single value produces undefined; clearing a range produces [].
The date argument of `disabledDate(date, side)` and `disabledTime(date, side)` is always a Date; side is start/end.
Time callbacks return numeric lists from `disabledHours()`, `disabledMinutes(hour)` and `disabledSeconds(hour, minute)`.
Invalid dates and incomplete/reversed ranges cannot be committed. Confirmation revalidates dynamic disabling rules. Locked range endpoints cannot be cleared or changed.
Nested panel props configure presentation only; they must not override top-level model-value, format, bounds, disabling rules or control events.

### Date Events

See the complete field and panel event lists on this page.

Desktop supports keyboard editing. The default panel edits a draft before confirmation; disable-confirm commits directly. Escape or closing discards the draft. focus(index = 0) focuses a start/end input, and blur() closes the popup.

### DatePicker Props

| Prop | Description | Type | Default behavior |
| --- | --- | --- | --- |
| `abbreviation` | Use abbreviated month-grid names; false uses full month names | `boolean` | `true` |
| `day-start-of-week` | First day of week for calendars, an integer from 0 to 6 | `DateWeekStart` | `0` |
| `default-picker-value` | Initial calendar viewport, read once; selected values take precedence over the current date | `DateSelection` | `undefined` |
| `default-value` | Initial uncontrolled value, read only at creation | `DateValue` | `undefined` |
| `disable-confirm` | Commit on selection; false retains draft for confirmation | `boolean` | `true` |
| `disabled` | Disable panel selection and commit | `boolean` | `false` |
| `disabled-date` | Return true to disable the date; side is start/end | `(date: Date, side: DateSide) => boolean`<br>`DateSide: 'end' \| 'start'` | `undefined` |
| `disabled-time` | Return disabled hour/minute/second lists for a date and endpoint | `(date: Date, side: DateSide) => DateDisabledTime`<br>`DateSide: 'end' \| 'start'` | `undefined` |
| `empty-value` | Clear output or synchronous factory, independent of emptyValues recognition | `DateValue \| null \| (() => DateValue \| null \| undefined)` | `undefined` |
| `format` | Display/text-input format; a function only formats without reverse text parsing | `string \| ((date: Date) => string)` | From precision/time settings |
| `max` | Inclusive maximum; a supplied invalid boundary is not silently ignored | `DateValue` | `undefined` |
| `min` | Inclusive minimum; a supplied invalid boundary is not silently ignored | `DateValue` | `undefined` |
| `model-value` | External date value; undefined is uncontrolled, null is explicitly empty | `DateValue \| null` | `undefined` |
| `picker-value` | Controlled calendar viewport, separate from selection; range viewports contain two dates | `DateSelection` | `undefined` |
| `preview-shortcut` | Preview shortcuts on hover/focus without committing | `boolean` | `true` |
| `readonly` | Readonly panel without candidate changes or commits | `boolean` | `false` |
| `shortcuts` | Shortcuts with values or on-demand synchronous value factories, optional format/disabled | `DateShortcut[]` | `[]` |
| `shortcuts-position` | Shortcut position | `left \| bottom \| right` | `bottom` |
| `show-current` | Highlight the current date without changing selection or model | `boolean` | `true` |
| `show-now-button` | Show the now action according to the actual panel range capabilities | `boolean` | `true` |
| `show-time` | Enable time precision/selection, with visible precision controlled by format | `boolean` | `false` |
| `time-picker-props` | Presentation options for the Cedar embedded time panel, excluding date model/rules | `DateTimePickerOptions` | `{}` |
| `time-zone` | IANA time zone; an invalid zone does not fall back to a valid selectable value | `string` | System local time zone |
| `type` | Date precision; Cedar includes week/quarter, while Maple supports date/month/year | `date \| month \| year \| week \| quarter` | `date` |
| `value-format` | Serialized model format: Date, timestamp or format tokens, independent of display format | `string` | From precision/time settings |

## Explicit time zones

`timeZone` accepts IANA names such as `Asia/Shanghai`. Date objects and millisecond timestamps represent instants; strings represent local time in the target zone. Display, typed input, min/max, shortcuts and disabling rules use the same protocol; event Date objects retain the actual instant. Omitting `timeZone` preserves local-zone behavior. Nonexistent daylight-saving times and invalid zones cannot be committed; repeated times use the first occurrence. Maple scroll / line are mobile calendar presentations; desktop retains its existing panel.

## Configuring the cleared value

`empty-value` defines the output of an existing clear action. Omission preserves the component fallback; supported types remain component-specific. It does not change empty-values recognition or Form reset defaults.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

### Values and formats

DateValue is string, number or native Date. Numbers are timestamps and 0 is not empty; modelValue=null is explicitly empty. Ranges retain broad arrays and incomplete endpoints rather than forcing a tuple; commits still validate completeness and validity. Maple general DatePicker/Date multiple selection does not widen Cedar single-value Props.

Tables list actual public properties. Inherited/precision-derived defaults describe resolved behavior; raw Props can be undefined. format controls display/text input and valueFormat controls the model protocol. Week/quarter display labels differ from model formats; function format has no reverse parser for text input.

Bounds are inclusive. Invalid supplied bounds block confirmation instead of being treated as omitted. Tightening rules does not clear the business model. disabledDate/disabledTime are explicit validation callbacks rather than asynchronous event tasks; time callbacks return disabled lists through DateDisabledTime.

### Field event parameter types

| Event | Arguments |
| --- | --- |
| `update:modelValue` | `DateEmits['update:modelValue']` |
| `change` | `DateEmits['change']` |
| `select` | `DateEmits['select']` |
| `clear` | `DateEmits['clear']` |
| `click` | `DateEmits['click']` |
| `focus` | `DateEmits['focus']` |
| `blur` | `DateEmits['blur']` |
| `update:open` | `DateEmits['update:open']` |
| `open-change` | `DateEmits['open-change']` |
| `update:pickerValue` | `DateEmits['update:pickerValue']` |
| `picker-value-change` | `DateEmits['picker-value-change']` |
| `select-shortcut` | `DateEmits['select-shortcut']` |

Field value/viewport notifications use the corresponding public Emits tuples; DateChangeArgs contains value, date(s) and text(s). Listener Promises are not awaited and do not drive loading. beforeCommit uses payload/done/context, with value/previousValue in payload and signal/optional event in context; undefined waits for done.

### Panel event parameter types

Standalone panels have the seven events below, without the old preview event. Navigation uses picker-value-change and update:pickerValue. Navigation/shortcut hover-focus preview does not imply selection or commit. Confirmation only notifies when valid; select draft is separate from committed change.

| Event | Arguments |
| --- | --- |
| `update:modelValue` | `DatePickerEmits['update:modelValue']` |
| `change` | `DatePickerEmits['change']` |
| `select` | `DatePickerEmits['select']` |
| `confirm` | `DatePickerEmits['confirm']` |
| `update:pickerValue` | `DatePickerEmits['update:pickerValue']` |
| `picker-value-change` | `DatePickerEmits['picker-value-change']` |
| `select-shortcut` | `DatePickerEmits['select-shortcut']` |

### DatePicker Slots / Methods

Field default replaces the trigger; prefix/selected/suffix replace content, and ranges also support separator. Preserve names, endpoint distinctions and keyboard access when replacing native controls. read receives value/text, suffix-icon receives focus/popupOpen, and clear-icon receives guarded clear(event?), respecting emptyValue and disabled/readonly guards.

actions receives confirm/disabled/selectNow/nowDisabled, with both actions returning void. It has no Time-panel canConfirm/value arguments. disabled=true prevents confirmation. Standalone panels can replace the action region; the outer editing shell owns final saving in hosted editing, while the panel contributes auxiliary actions. Panel confirm is not the outer-save method.

Now capabilities follow the actual panel: Cedar single panels support it, while Cedar range panels have no now action. Maple range panels stage now for the active endpoint, preserve the other endpoint and still require confirmation. The presence of selectNow in scope does not imply every mode supports the action.

Cedar cell customizes a calendar cell with date and, for ranges, type=start/end; extra adds content. Maple Date/DatePicker page-calendar summaries support year({year}), month({year,month}), date({week,year,month,date}), range({choose}) and multiple({choose}) according to mode. Maple DateRange/DateRangePicker do not forward these single-panel summary slots, nor do scroll/line viewports promise them.

loading-icon is not wired to date fields or pure panels and is not available merely because the underlying decorator supports it. Field focus(index?)/blur() delegate to real controls. Cedar/direct-field blur closes the field popup; Maple range persistent-reference blur only clears its focus, without pretending to close the outer Drawer. Pure panels expose no focus/blur methods.

### Presentation configuration and ranges

datePickerProps/dateRangePickerProps configure presentation without overriding owned model/rules/type/control events; Maple internal range datePickerProps uses a calendar allowlist. popupProps retains a broad dictionary, with public DatePopupOptions/DateRangePopupOptions recommended and owner keys still filtered at runtime. Cedar timePickerProps configures embedded time presentation; Maple pickerProps configures wheels.

A range placeholder string applies to both endpoints; arrays configure each and missing entries are empty. readonly is separate from disabled; unset field state inherits Form. Cedar range-panel exchangeTime only handles reversed interactive candidates: true swaps their times, false retains endpoint times. It does not reorder external model/text/shortcut values. Maple does not expose this property.

### Type imports

```ts
import { Date as DateField, DatePicker, type DateProps, type DatePickerProps,
  type DateEmits, type DatePickerEmits, type DateValue, type DateSelection,
  type DateChangeArgs, type DateRules, type DateShortcut } from '@cedar-design/ui-vue'
```

<!-- date-contract:end -->

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-date-picker-actions-padding` | `8px 12px` | `padding` |
| `--c-date-picker-body-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-date-picker-body-padding-vertical` | `14px` | `padding` |
| `--c-date-picker-box-shadow` | `var(--c-shadow1-down)` | `box-shadow` |
| `--c-date-picker-btn-confirm-margin-vertical` | `5px` | `margin` |
| `--c-date-picker-cell-bg-disabled` | `var(--c-color-fill-1)` | `background-color` |
| `--c-date-picker-cell-bg-hover-in-range` | `var(--c-color-fill-2)` | `background-color` |
| `--c-date-picker-cell-bg-in-range` | `var(--c-color-primary-light-1)` | `background-color` |
| `--c-date-picker-cell-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-date-picker-cell-font-weight-in-view` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-date-picker-cell-hover-range-boundary-bg` | `var(--c-color-fill-2)` | `background-color` |
| `--c-date-picker-cell-hover-range-boundary-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-date-picker-cell-range-boundary-bg` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-date-picker-cell-range-boundary-text-color` | `var(--c-color-white)` | `color` |
| `--c-date-picker-cell-text-color-in-view` | `var(--c-color-text-1)` | `color` |
| `--c-date-picker-cell-text-color-not-in-view` | `var(--c-color-text-4)` | `color` |
| `--c-date-picker-container-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-date-picker-container-min-height` | `var(--c-size-15)` | `min-height` |
| `--c-date-picker-datetime-popover-width` | `calc(var(--c-date-picker-panel-date-width) + var(--c-date-picker-time-panel-min-width) + 2px)` | `flex`, `width` |
| `--c-date-picker-footer-btn-wrapper-padding-horizontal` | `var(--c-spacing-4)` | `padding` |
| `--c-date-picker-footer-btn-wrapper-padding-vertical` | `3px` | `padding` |
| `--c-date-picker-footer-extra-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-date-picker-footer-extra-padding-horizontal` | `var(--c-spacing-9)` | `padding` |
| `--c-date-picker-footer-extra-padding-vertical` | `var(--c-spacing-4)` | `padding` |
| `--c-date-picker-footer-now-height` | `var(--c-size-9)` | `height`, `line-height` |
| `--c-date-picker-header-label-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-date-picker-header-label-padding` | `var(--c-spacing-1)` | `padding` |
| `--c-date-picker-header-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-date-picker-header-padding-vertical` | `var(--c-spacing-4)` | `padding` |
| `--c-date-picker-header-title-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-date-picker-header-title-line-height` | `var(--c-size-6)` | `line-height` |
| `--c-date-picker-panel-background` | `var(--c-sys-color-surface-overlay)` | `background` |
| `--c-date-picker-panel-border` | `var(--c-color-border-2)` | `border` |
| `--c-date-picker-panel-border-color` | `var(--c-color-neutral-3)` | `border`, `border-bottom`, `border-inline-end`, `border-inline-start`, `border-left`, `border-right`, `border-top` |
| `--c-date-picker-panel-cell-bg-hover` | `var(--c-color-fill-3)` | `background-color` |
| `--c-date-picker-panel-cell-bg-selected` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-date-picker-panel-cell-border-radius` | `var(--c-date-picker-panel-cell-circle-height)` | `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--c-date-picker-panel-cell-boundary-border-radius` | `var(--c-date-picker-panel-cell-circle-height)` | `border-end-end-radius`, `border-end-start-radius`, `border-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--c-date-picker-panel-cell-circle-height` | `var(--c-size-6)` | `border-end-end-radius`, `border-end-start-radius`, `border-radius`, `border-start-end-radius`, `border-start-start-radius`, `height`, `line-height`, `min-width`, `width` |
| `--c-date-picker-panel-cell-padding-vertical` | `var(--c-spacing-2)` | `padding`, `padding-inline-end`, `padding-inline-start` |
| `--c-date-picker-panel-cell-selected-border-radius` | `var(--c-border-radius-circle)` | `border-radius` |
| `--c-date-picker-panel-cell-text-color-hover` | `var(--c-color-text-1)` | `color` |
| `--c-date-picker-panel-cell-text-color-selected` | `var(--c-color-white)` | `color` |
| `--c-date-picker-panel-current-time-dot-color` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-date-picker-panel-date-width` | `265px` | `flex`, `min-width`, `width` |
| `--c-date-picker-panel-label-bg-hover` | `var(--c-color-fill-3)` | `background-color` |
| `--c-date-picker-panel-month-width` | `265px` | `width` |
| `--c-date-picker-panel-preferred-width` | `var(--c-date-picker-popover-width)` | `flex`, `width` |
| `--c-date-picker-panel-quarter-width` | `265px` | `width` |
| `--c-date-picker-panel-radius` | `8px` | `border-radius` |
| `--c-date-picker-panel-time-cell-spacing-horizontal` | `var(--c-spacing-2)` | `padding` |
| `--c-date-picker-panel-time-cell-width` | `var(--c-size-9)` | `width` |
| `--c-date-picker-panel-time-padding` | `var(--c-spacing-3)` | `padding` |
| `--c-date-picker-panel-time-padding-horizontal` | `var(--c-spacing-5)` | `padding-inline-start` |
| `--c-date-picker-panel-week-width` | `298px` | `flex`, `width` |
| `--c-date-picker-panel-year-width` | `265px` | `width` |
| `--c-date-picker-popover-gap` | `32px` | `max-height`, `max-width` |
| `--c-date-picker-popover-max-height` | `calc(100dvh - var(--c-date-picker-popover-gap))` | `max-height` |
| `--c-date-picker-popover-width` | `calc(var(--c-date-picker-panel-date-width) + 2px)` | `flex`, `width` |
| `--c-date-picker-preview-outline` | `1px dashed var(--c-color-primary)` | `outline` |
| `--c-date-picker-range-panel-min-width` | `224px` | `min-width` |
| `--c-date-picker-range-popover-width` | `calc(var(--c-date-picker-panel-date-width) * 2 + 2px)` | `flex`, `width` |
| `--c-date-picker-row-padding-vertical` | `var(--c-spacing-1)` | `padding` |
| `--c-date-picker-shortcuts-active-text-color` | `var(--c-sys-color-action-primary)` | `color` |
| `--c-date-picker-shortcuts-column-width` | `128px` | `flex`, `width` |
| `--c-date-picker-shortcuts-inline-item-margin-right` | `var(--c-spacing-5)` | `margin-inline` |
| `--c-date-picker-shortcuts-inline-item-margin-vertical` | `5px` | `margin-block` |
| `--c-date-picker-shortcuts-item-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-date-picker-shortcuts-item-padding-vertical` | `var(--c-spacing-3)` | `padding` |
| `--c-date-picker-shortcuts-margin-top` | `var(--c-spacing-5)` | `margin` |
| `--c-date-picker-shortcuts-max-height` | `300px` | `max-height` |
| `--c-date-picker-shortcuts-placement-item-margin-vertical` | `5px` | `margin` |
| `--c-date-picker-shortcuts-placement-padding-horizontal` | `var(--c-spacing-4)` | `padding` |
| `--c-date-picker-shortcuts-placement-padding-vertical` | `5px` | `padding` |
| `--c-date-picker-shortcuts-width` | `106px` | `width` |
| `--c-date-picker-switch-icon-bg` | `var(--c-color-bg-popup)` | `background-color` |
| `--c-date-picker-switch-icon-bg-hover` | `var(--c-color-fill-3)` | `background-color` |
| `--c-date-picker-switch-icon-border-radius` | `var(--c-border-radius-circle)` | `border-radius` |
| `--c-date-picker-switch-icon-color` | `var(--c-color-text-2)` | `color` |
| `--c-date-picker-switch-icon-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-date-picker-switch-icon-margin` | `var(--c-spacing-1)` | `margin-left`, `margin-right` |
| `--c-date-picker-switch-icon-size` | `var(--c-size-6)` | `height`, `width` |
| `--c-date-picker-time-panel-min-width` | `160px` | `flex`, `min-width`, `width` |
| `--c-date-picker-timepicker-height` | `276px` | `height` |
| `--c-date-picker-timepicker-title-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-date-picker-timepicker-title-height` | `var(--c-size-10)` | `height`, `line-height` |
| `--c-date-picker-today-dot-offset` | `var(--c-spacing-1)` | `bottom`, `margin-left` |
| `--c-date-picker-today-dot-size` | `var(--c-spacing-2)` | `height`, `width` |
| `--c-date-picker-transition-duration-1` | `var(--c-transition-duration-1)` | `transition` |
| `--c-date-picker-transition-timing-function-linear` | `var(--c-transition-timing-function-linear)` | `transition` |
| `--c-date-picker-view-tab-pane-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-date-picker-view-tab-pane-text-color-active` | `var(--c-color-text-1)` | `color` |
| `--c-date-picker-view-tab-pane-text-color-inactive` | `var(--c-color-text-4)` | `color` |
| `--c-date-picker-view-tab-pane-text-icon-spacing` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-date-picker-view-tabs-height` | `50px` | `height`, `line-height` |
| `--c-date-picker-week-list-item-color` | `var(--c-color-text-3)` | `color` |
| `--c-date-picker-week-list-item-height` | `var(--c-size-8)` | `height`, `line-height` |
| `--c-date-picker-week-popover-width` | `calc(var(--c-date-picker-panel-week-width) + 2px)` | `flex`, `width` |
| `--c-date-picker-week-range-popover-width` | `calc(var(--c-date-picker-panel-week-width) * 2 + 2px)` | `flex`, `width` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-date-picker-actions-padding: 8px 12px;
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
