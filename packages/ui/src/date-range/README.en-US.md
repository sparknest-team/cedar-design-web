---
lang: en-US
permalink: /en/components/date-range/
---

# DateRange

A date range field. The bound model is an array; use DateRangePicker for a standalone panel.

## String range models

Set format="MM-DD" and value-format="MM-DD" to get ['09-10', '10-10'] directly. These values have no year; parsing uses the current year and cannot preserve cross-year ordering. For real bookings store YYYY-MM-DD and map the payload in application code. format only changes display, while value-format changes the model and events.

Without time-zone the browser-local time zone remains in effect. An explicit IANA time zone changes the civil-time interpretation of strings; Date/timestamp values preserve their instant. Editing one endpoint does not change an untouched endpoint's repeated-hour occurrence or milliseconds.

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
| -------------- | ------------------------------------------------------- | ---------------------------- |
| `clearable` | Show the clear action | Mode, Separator |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | Appearance configuration comparison |
| `type` | Mode | Mode |
| `separator` | Range separator | Separator |
| `placeholder` | Placeholder | Separator |

<!-- demo-config-notes:end -->


Choose a dimension to compare all its values side by side while keeping other settings and content identical. Change the other settings to inspect combinations; input specimens share one model.

<demo src="./__demos__/appearance-lab.vue"></demo>

### Mode

<demo src="./__demos__/mode.vue"></demo>

### Separator

<demo src="./__demos__/separator.vue"></demo>

## Time and range rules

### Show Time

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --------------- | ------------------------------------------------------- | ---------------------- |
| `format` | Display format | Show Time, Boundaries |
| `show-time` | Include time selection | Show Time |
| `clearable` | Show the clear action | Show Time |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | Boundaries |
| `disabled-date` | Return true to disable a date | Boundaries |

<!-- demo-config-notes:end -->


<demo src="./__demos__/show-time.vue"></demo>

### Boundaries

<demo src="./__demos__/boundaries.vue"></demo>

## Value model and text input

### String Values

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| -------------- | ------------------------------------------------------- | -------------------------------------------------- |
| `format` | Display format | String Values, Text Entry |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | String Values |
| `disabled` | Disable interaction | Text Entry |

<!-- demo-config-notes:end -->


<demo src="./__demos__/en-US/string-values.vue"></demo>

### Text Entry

<demo src="../date/picker/__demos__/text-entry.vue"></demo>

## Interaction and field configuration

### Api Review

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------------------- | ------------------------------------------------------- | ------------------------------------ |
| `open` | Controlled popup visibility | Rejected Close, Passthrough Options |
| `date-range-picker-props` | Panel presentation options | Field Panel Tools, Entry Boundary |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | Api Review |
| `readonly` | Read-only interaction | Api Review |
| `format` | Display format | Field Panel Tools |
| `popup-props` | Trigger presentation options; cannot override owned visibility or date rules | Passthrough Options |

<!-- demo-config-notes:end -->


</details>

<demo src="./__demos__/state-lab.vue"></demo>

### Rejected Close

<demo src="./__demos__/rejected-close.vue"></demo>

### Field Panel Tools

<demo src="./__demos__/field-panel-tools.vue"></demo>

### Entry Boundary

<demo src="./__demos__/entry-boundary.vue"></demo>

### Passthrough Options

<demo src="./__demos__/passthrough-options.vue"></demo>

### Props

| Arguments | Description | Type | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------- |
| `open-trigger-target` | Pointer opening target: the whole field or only the suffix icon. Explicit keyboard opening and controlled open remain available. | `'field' \| 'icon'` | `'field'` |
| `model-value` | Bound value | `(Date \| string \| number)[]` | `-` |
| `type` | Date precision | `date \| week \| month \| year \| quarter` | `date` |
| `open` | Controlled popup visibility | `boolean` | `-` |
| `clearable` | Show the clear action | `boolean` | `true` |
| `disabled` | Disable interaction | `boolean \| boolean[]` | `-` |
| `readonly` | Read-only interaction | `boolean` | `false` |
| `size` | Component size | `xs \| sm \| md \| lg \| xl` | `-` |
| `variant` | Field appearance | `filled \| outline \| standard` | `outline` |
| `separator` | Range separator | `string` | `-` |
| `placeholder` | Placeholder | `string[]` | `-` |
| `disabled-date` | Return true to disable a date | `Function` | `-` |
| `format` | Display format | `string` | `-` |
| `show-time` | Include time selection | `boolean` | `false` |
| `date-range-picker-props` | Panel presentation options | `DateRangePickerOptions` | `{}` |

#### Copying and editing

With open-trigger-target="icon", use the input area to edit or copy and the suffix button to open. Existing text remains copyable when editing or search is disabled.

<demo src="./__demos__/open-trigger-target.en-US.vue"></demo>

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom line); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

## Reading direction

Range values remain `[start, end]`; changing reading direction does not swap endpoints or commit drafts. Calendar range connections and boundary radii follow reading direction. In paged grids, Left/Right moves focus visually and Up/Down preserves date-row order. Maple endpoint editing and continuous range highlighting use different rendering paths. Explicit `shortcuts-position="left|right"` remains physical; popovers inherit the field's source direction.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### DateRange Props

`input-attrs` applies to the two direct input elements. For example, `:input-attrs="[{ 'aria-label': 'Departure' }, { 'aria-label': 'Return' }]"` names each endpoint. The field owns its value, disabled, readonly, placeholder, role and popup state; shared descriptions, per-input descriptions and form errors are merged for each input. Component errors take precedence; otherwise each input retains its `aria-invalid`. `RangeInputAttributes` is exported from the component and root entries and includes native attributes and `Once` event types.

When FormItem's `label-attrs.for` explicitly targets one input, unnamed range endpoints use the form label together with localized start/end names. Explicit accessible names supplied through `input-attrs` or the field take precedence. Older custom locales can provide `fieldPresentation.rangeStart` and `fieldPresentation.rangeEnd`; when absent, the existing date or time start/end labels are used.

| Prop | Description | Type | Default behavior |
| --- | --- | --- | --- |
| `before-commit` | Explicit field-save guard using payload, done and context | `BeforeFieldCommit` | `undefined` |
| `blur-color` | Color while unfocused | `string` | Theme default |
| `clearable` | Allow clearing with disabled, readonly and pending guards | `boolean` | `true` |
| `date-range-picker-props` | Range-panel presentation options, with model/rules/type owned by the field | `DateRangePickerOptions` | `{}` |
| `default-open` | Initial uncontrolled opening, read only at creation | `boolean` | `false` |
| `default-value` | Initial uncontrolled value, read only at creation | `(DateValue \| undefined)[]` | `undefined` |
| `disable-confirm` | Commit on selection; false retains draft for confirmation | `boolean` | `false` |
| `disabled` | Disable all or lock start/end separately; fields inherit FormItem/Form when unset | `boolean \| boolean[]` | Inherited, finally false |
| `disabled-date` | Return true to disable the date; side is start/end | `(date: Date, side: DateSide) => boolean`<br>`DateSide: 'end' \| 'start'` | `undefined` |
| `disabled-time` | Return disabled hour/minute/second lists for a date and endpoint | `(date: Date, side: DateSide) => DateDisabledTime`<br>`DateSide: 'end' \| 'start'` | `undefined` |
| `edit-mode` | Field editing mode, inherited from FormItem/Form when unset | `FieldEditMode`<br>`'direct' \| 'click' \| 'dblclick'` | Inherited, finally direct |
| `empty-text` | Empty text in read-pretty mode | `string` | Inherited, finally '-' |
| `empty-value` | Clear output or synchronous factory, independent of emptyValues recognition | `(DateValue \| undefined)[] \| null \| (() => (DateValue \| undefined)[] \| null \| undefined)` | `undefined` |
| `empty-values` | Empty-value recognition list, replaced rather than merged | `readonly unknown[]` | Inherited/family default |
| `error` | Field error presentation, inherited when unset | `boolean` | Inherited, finally false |
| `focus-color` | Color while focused | `string` | Theme default |
| `format` | Display/text-input format; a function only formats without reverse text parsing | `string \| ((date: Date) => string)` | From precision/time settings |
| `hint` | Floating placeholder hint, suppressed by an outer Form label | `boolean` | `false` |
| `input-editable` | Allow text input without removing panel selection | `boolean` | `true` |
| `input-attrs` | Native attributes for the start and end inputs, in order; per-input names override shared names | `RangeInputAttributes[]` | `undefined` |
| `line` | Show the field border or underline | `boolean` | `true` |
| `loading` | Manual loading feedback, independent of event return values | `boolean` | `false` |
| `loading-mode` | Field loading presentation mode | `default \| line` | default |
| `max` | Inclusive maximum; a supplied invalid boundary is not silently ignored | `DateValue` | `undefined` |
| `min` | Inclusive minimum; a supplied invalid boundary is not silently ignored | `DateValue` | `undefined` |
| `model-value` | External date value; undefined is uncontrolled, null is explicitly empty | `(DateValue \| undefined)[] \| null` | `undefined` |
| `open` | Controlled field editor opening | `boolean` | `undefined` |
| `open-trigger-target` | Open by field or icon click, without restricting keyboard opening | `field \| icon` | field |
| `placeholder` | A range string applies to both endpoints, arrays configure each; omitted follows Locale | `string \| string[]` | `undefined` |
| `popup-container` | Editor container; false renders in place | `PopupContainer` | Shared container default |
| `popup-props` | Trigger presentation options, filtering owned state/model/rules/control listeners at runtime | `Record<string, unknown>` | `{}` |
| `read-pretty` | Read-pretty presentation without an editor, independent of readonly | `boolean` | Inherited, finally false |
| `readonly` | Readonly; fields allow focus/copy without value changes or opening editing | `boolean` | Inherited, finally false |
| `separator` | Separator text for joined/range display, including an empty string | `string` | ` ~ ` |
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
| ----------------- | ------------------------------------------------------- | -------------------------------------------------- | ------- |
| `default-value` | Uncontrolled initial value, read once | DateValue / DateValue[] | — |
| `value-format` | Model and event value format: a date format string, Date, or timestamp | string | Follows type |
| `min` | Inclusive minimum date; string bounds use value-format | DateValue | — |
| `max` | Inclusive maximum date; string bounds use value-format | DateValue | — |
| `disabled-time` | Disabled times for the current date and endpoint | (date: Date, side: DateSide) => DateDisabledTime<br>`DateSide: 'end' \| 'start'` | — |
| `disable-confirm` | Commit immediately | boolean | false |
| `default-open` | Uncontrolled initial open state | boolean | false |
| `popup-props` | Trigger presentation options; cannot override owned visibility or date rules | object | {} |
| `popup-container` | Portal target; the top-level value wins, including false for inline rendering | string / HTMLElement / (() => HTMLElement) / false | — |

`DateValue = Date | string | number`. Clearing a single value produces undefined; clearing a range produces [].
The date argument of `disabledDate(date, side)` and `disabledTime(date, side)` is always a Date; side is start/end.

`disabled-date` restricts range endpoints. A range may cross disabled interior values; it is not scanned item by item or truncated automatically. This applies to dates, months and years. Interior disabled values remain gray. Changing pages preserves the selected start and clears hover preview; reverse selection is sorted chronologically.
Time callbacks return numeric lists from `disabledHours()`, `disabledMinutes(hour)` and `disabledSeconds(hour, minute)`.
Invalid dates and incomplete/reversed ranges cannot be committed. Confirmation revalidates dynamic disabling rules. Locked range endpoints cannot be cleared or changed.
Nested panel props configure presentation only; they must not override top-level model-value, format, bounds, disabling rules or control events.

### DateRange Events

See the complete field and panel event lists on this page.

Desktop supports keyboard editing. The default panel edits a draft before confirmation; disable-confirm commits directly. Escape or closing discards the draft. focus(index = 0) focuses a start/end input, and blur() closes the popup.

### DateRangePicker Props

| Prop | Description | Type | Default behavior |
| --- | --- | --- | --- |
| `abbreviation` | Use abbreviated month-grid names; false uses full month names | `boolean` | `true` |
| `day-start-of-week` | First day of week for calendars, an integer from 0 to 6 | `DateWeekStart` | `0` |
| `default-picker-value` | Initial calendar viewport, read once; selected values take precedence over the current date | `DateSelection` | `undefined` |
| `default-value` | Initial uncontrolled value, read only at creation | `(DateValue \| undefined)[]` | `undefined` |
| `disable-confirm` | Commit on selection; false retains draft for confirmation | `boolean` | `true` |
| `disabled` | Disable all or lock start/end separately; fields inherit FormItem/Form when unset | `boolean \| boolean[]` | `false` |
| `disabled-date` | Return true to disable the date; side is start/end | `(date: Date, side: DateSide) => boolean`<br>`DateSide: 'end' \| 'start'` | `undefined` |
| `disabled-time` | Return disabled hour/minute/second lists for a date and endpoint | `(date: Date, side: DateSide) => DateDisabledTime`<br>`DateSide: 'end' \| 'start'` | `undefined` |
| `empty-value` | Clear output or synchronous factory, independent of emptyValues recognition | `(DateValue \| undefined)[] \| null \| (() => (DateValue \| undefined)[] \| null \| undefined)` | `undefined` |
| `exchange-time` | When interactive candidates reverse, swap times together with dates; model/text/shortcut values are not reordered | `boolean` | `true` |
| `format` | Display/text-input format; a function only formats without reverse text parsing | `string \| ((date: Date) => string)` | From precision/time settings |
| `max` | Inclusive maximum; a supplied invalid boundary is not silently ignored | `DateValue` | `undefined` |
| `min` | Inclusive minimum; a supplied invalid boundary is not silently ignored | `DateValue` | `undefined` |
| `model-value` | External date value; undefined is uncontrolled, null is explicitly empty | `(DateValue \| undefined)[] \| null` | `undefined` |
| `picker-value` | Controlled calendar viewport, separate from selection; range viewports contain two dates | `DateSelection` | `undefined` |
| `preview-shortcut` | Preview shortcuts on hover/focus without committing | `boolean` | `true` |
| `readonly` | Readonly panel without candidate changes or commits | `boolean` | `false` |
| `shortcuts` | Shortcuts with values or on-demand synchronous value factories, optional format/disabled | `DateShortcut[]` | `[]` |
| `shortcuts-position` | Shortcut position | `left \| bottom \| right` | `bottom` |
| `show-current` | Highlight the current date without changing selection or model | `boolean` | `true` |
| `show-time` | Enable time precision/selection, with visible precision controlled by format | `boolean` | `false` |
| `time-picker-props` | Presentation options for the Cedar embedded time panel, excluding date model/rules | `DateTimePickerOptions` | `{}` |
| `time-zone` | IANA time zone; an invalid zone does not fall back to a valid selectable value | `string` | System local time zone |
| `type` | Date precision; Cedar includes week/quarter, while Maple supports date/month/year | `date \| month \| year \| week \| quarter` | `date` |
| `value-format` | Serialized model format: Date, timestamp or format tokens, independent of display format | `string` | From precision/time settings |

## Configuring the cleared value

`empty-value` defines the output of an existing clear action. Omission preserves the component fallback; supported types remain component-specific. It does not change empty-values recognition or Form reset defaults.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

### Clearing in deferred editing

In deferred editing, clearing changes the draft; confirmation runs form validation and `beforeCommit` before publishing the configured `emptyValue`. Cancel restores the committed range. An untouched empty range or a half-selected range still requires complete endpoints; an explicit change from a non-empty range to an empty draft can be confirmed. Disabled/readonly fields and locked endpoints cannot be cleared. A rejected controlled open cannot publish a cleared model.

Public focus/blur methods are callable from initial mount. Focus opens an editable deferred editor and targets it after readiness; disabled, readonly, or reading fields do not open. Blur only blurs the current target without reopening. Stored methods never bind an old editor; closure, mode changes, deactivation, or unmount cancel queued calls.

Native range-input references apply string placeholders, including empty strings, to both endpoints and retain array labels by endpoint. Input placeholder visibility still follows hint. Readonly native inputs remain focusable and copyable while editing, opening and clearing are blocked. Global or endpoint disabled states take precedence over readonly. Existing omitted-placeholder defaults for each editing mode are preserved.

Native date-range references emit focus/blur without arguments: entering the input group emits focus, switching endpoints does not duplicate it, and leaving emits blur. Form receives each corresponding notification once under its existing rules. Readonly clicks still notify the original event without opening or editing. Disabled clicks do not notify or consume click.once early. Returning a Promise from an ordinary listener does not start busy state or block opening; asynchronous submission still uses explicit before-commit.

<!-- date-contract:start -->

### Values and formats

DateValue is string, number or native Date. Numbers are timestamps and 0 is not empty; modelValue=null is explicitly empty. Ranges retain broad arrays and incomplete endpoints rather than forcing a tuple; commits still validate completeness and validity. Maple general DatePicker/Date multiple selection does not widen Cedar single-value Props.

Tables list actual public properties. Inherited/precision-derived defaults describe resolved behavior; raw Props can be undefined. format controls display/text input and valueFormat controls the model protocol. Week/quarter display labels differ from model formats; function format has no reverse parser for text input.

Bounds are inclusive. Invalid supplied bounds block confirmation instead of being treated as omitted. Tightening rules does not clear the business model. disabledDate/disabledTime are explicit validation callbacks rather than asynchronous event tasks; time callbacks return disabled lists through DateDisabledTime.

### Field event parameter types

| Event | Arguments |
| --- | --- |
| `update:modelValue` | `DateRangeEmits['update:modelValue']` |
| `change` | `DateRangeEmits['change']` |
| `select` | `DateRangeEmits['select']` |
| `clear` | `DateRangeEmits['clear']` |
| `click` | `DateRangeEmits['click']` |
| `focus` | `DateRangeEmits['focus']` |
| `blur` | `DateRangeEmits['blur']` |
| `update:open` | `DateRangeEmits['update:open']` |
| `open-change` | `DateRangeEmits['open-change']` |
| `update:pickerValue` | `DateRangeEmits['update:pickerValue']` |
| `picker-value-change` | `DateRangeEmits['picker-value-change']` |
| `select-shortcut` | `DateRangeEmits['select-shortcut']` |

Field value/viewport notifications use the corresponding public Emits tuples; DateChangeArgs contains value, date(s) and text(s). Listener Promises are not awaited and do not drive loading. beforeCommit uses payload/done/context, with value/previousValue in payload and signal/optional event in context; undefined waits for done.

### Panel event parameter types

Standalone panels have the seven events below, without the old preview event. Navigation uses picker-value-change and update:pickerValue. Navigation/shortcut hover-focus preview does not imply selection or commit. Confirmation only notifies when valid; select draft is separate from committed change.

| Event | Arguments |
| --- | --- |
| `update:modelValue` | `DateRangePickerEmits['update:modelValue']` |
| `change` | `DateRangePickerEmits['change']` |
| `select` | `DateRangePickerEmits['select']` |
| `confirm` | `DateRangePickerEmits['confirm']` |
| `update:pickerValue` | `DateRangePickerEmits['update:pickerValue']` |
| `picker-value-change` | `DateRangePickerEmits['picker-value-change']` |
| `select-shortcut` | `DateRangePickerEmits['select-shortcut']` |

### DateRangePicker Slots / Methods

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
import { DateRange, DateRangePicker, type DateRangeProps, type DateRangePickerProps,
  type DateRangeEmits, type DateRangePickerEmits, type DateValue, type DateSelection,
  type DateChangeArgs, type DateRules, type DateShortcut } from '@cedar-design/ui-vue'
```

<!-- date-contract:end -->

## CSS Variables

<!-- component-css-variables:start -->

This component declares no independent public CSS variables. Use the configuration and layout APIs documented on this page. The appearance of composed controls follows the public variables of `date`; a shared variable can affect other controls in the same DOM subtree.

Internal custom properties and measurement values are implementation details and are not customization APIs.

<!-- component-css-variables:end -->
