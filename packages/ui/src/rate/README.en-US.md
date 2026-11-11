---
lang: en-US
permalink: /en/components/rate/
---

# Rate

Keyboard and pointer rating selection.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Readonly

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --------------- | ---------------------------------------- | ---------- |
| `default-value` | Initial uncontrolled value; subsequent changes do not reset it | Readonly |
| `readonly` | Focusable but not editable; inherits Form when omitted | Readonly |
| `color` | Active color or increasing per-icon threshold color map | Color |

<!-- demo-config-notes:end -->


- `readonly`: Displays the current value without allowing edits.

<demo src="./__demos__/readonly.vue"></demo>

### Color

- `color`: Overrides the color.

<demo src="./__demos__/color.vue"></demo>

## Content and presentation

### Sizes And Symbols

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --------------- | ------------------------------------------------- | -------------------------------- |
| `default-value` | Initial uncontrolled value; subsequent changes do not reset it | Sizes And Symbols, Half, Rating count and clearing |
| `allow-half` | Enable half-point steps | Sizes And Symbols, Half |
| `grading` | Fixed five-face rating; overrides slots and icon props | Sizes And Symbols, Grading |
| `size` | Icon dimension: number/numeric string in px, otherwise CSS length | Sizes And Symbols |
| `aria-label` | Accessible business label | Sizes And Symbols |
| `gap` | Icon spacing: number/numeric string in px, otherwise CSS length | Sizes And Symbols |

<!-- demo-config-notes:end -->


- `size`: Controls the component size.

<demo src="./__demos__/sizes-and-symbols.vue"></demo>

### Half

<demo src="./__demos__/half.vue"></demo>

### Rating count and clearing

Compare rating totals and clearing the current selection, separately from half steps, keyboards and controlled values.

<demo src="./__demos__/value-rules-comparison.vue"></demo>

### Grading

<demo src="./__demos__/grading.vue"></demo>

## Customization and slots

### Character

<demo src="./__demos__/character.vue"></demo>

## Interaction and control

### State Lab

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --------------- | -------------------------------------- | ------------------------ |
| `disabled` | Disable interaction; inherits Form when omitted | State Lab, Keyboard |
| `readonly` | Focusable but not editable; inherits Form when omitted | State Lab, Keyboard |
| `allow-half` | Enable half-point steps | Keyboard |
| `clearable` | Click the current score again to clear; keyboard boundaries do not clear | Keyboard |
| `aria-label` | Accessible business label | Keyboard |
| `default-value` | Initial uncontrolled value; subsequent changes do not reset it | Keyboard |

<!-- demo-config-notes:end -->


<demo src="./__demos__/state-lab.vue"></demo>

### Keyboard

- `readonly`: Displays the current value without allowing edits.
- `disabled`: Prevents user interaction.

<demo src="./__demos__/keyboard.vue"></demo>

## Usage notes

### Editing and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-direct modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit({ value, previousValue }, done, { signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Rate Props

| Prop | Description | Type | Default |
| -------------- | ------------------------------------------------- | -------------------------------- | ---------- |
| model-value | Controlled value, including zero; external updates emit no events | number | undefined |
| default-value | Initial uncontrolled value; subsequent changes do not reset it | number | 0 |
| count | 0 < count <= 1000; floors to at least one; invalid or oversized counts fall back to five | number \| string | 5 |
| allow-half | Enable half-point steps | boolean | false |
| clearable | Click the current score again to clear; keyboard boundaries do not clear | boolean | false |
| grading | Fixed five-face rating; overrides slots and icon props | boolean | false |
| disabled | Disable interaction; inherits Form when omitted | boolean | undefined |
| readonly | Focusable but not editable; inherits Form when omitted | boolean | undefined |
| aria-label | Accessible business label | string | undefined |
| size | Icon dimension: number/numeric string in px, otherwise CSS length | number \| string | Style default |
| gap | Icon spacing: number/numeric string in px, otherwise CSS length | number \| string | Style default |
| color | Active color or increasing per-icon threshold color map | string \| Record<string, string> | undefined |
| empty-color | Inactive color | string | undefined |
| disabled-color | Disabled color, overriding active/inactive colors | string | undefined |
| icon | Checked icon | string \| Component | Filled star |
| half-icon | Half icon | string \| Component | Half star |
| empty-icon | Unchecked icon | string \| Component | Empty star |
| ripple | Click ripple | boolean | true |

size/gap do not accept xs/sm/md/lg/xl presets. Omitted or invalid values retain style defaults. Size must be positive; gap accepts zero and negative gaps fall back to the style default. CSS var/calc/min/max/clamp lengths are supported. Scores normalize to 0–count in steps of 1 or 0.5. Non-finite scores display zero without changing the external value.

### Rate Events

| Event | Arguments | Description |
| ------------------ | ------------- | ----------------------------------------- |
| update:model-value | value: number \| null | User produces a new value |
| change | value: number \| null | Confirmed new value; no duplicate for equal values |
| hover-change | value: number \| null | Hover preview; resets to zero on leave/blur/disabled/readonly |

### Rate Slots

| Slot | Prop | Description |
| --------- | ------------------------ | ---------------------------------------------- |
| character | { index, value, active } | index starts at zero, value at one; active means fully selected; replaces the rating symbol |
| read | { value, text } | Custom reading content retaining nullable models |

Precedence: grading > character > icon/half-icon/empty-icon > default icon. String icons require global registration; component values do not.

### Rate Methods

focus() focuses the rating; blur() removes focus. Readonly remains focusable, while disabled leaves the Tab sequence. Arrow keys adjust, Home clears and End selects the maximum. Keyboard events from interactive children and Alt/Ctrl/Meta combinations are not intercepted. Touch and mouse share half-selection/clearing rules.

## Types

Exports RateProps, RateColor, RateIcon, RateInstance, RateExpose, RateEmits, RateCharacterSlotProps, RateSlots and RateReadScope.

## Configuring the cleared value

`empty-value` defines the output of an existing clear action. Omission preserves the component fallback; supported types remain component-specific. It does not change empty-values recognition or Form reset defaults.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

Public focus/blur methods are callable from initial mount. Focus opens an editable deferred editor and targets it after readiness; disabled, readonly, or reading fields do not open. Blur only blurs the current target without reopening. Stored methods never bind an old editor; closure, mode changes, deactivation, or unmount cancel queued calls.

Handled scoring keys clear pointer preview and emit hover-change(0) once if a preview was active. If a controlled parent refuses an update, the display follows the external value. Later pointer motion can preview again; unhandled keys preserve the preview.

character.active means fully selected: at 1.5, the second symbol has active=false and its wrapper carries the half-selection class. read receives { value, text }, retaining null/undefined with shared formatted text. Custom read takes precedence over empty-text without changing an empty model to zero. Neither slot executes business tasks.

before-commit uses ({ value, previousValue }, done, { signal }). Return a boolean or Promise, or call done. A synchronous undefined return waits for done; aborted signals prevent stale results from committing. Ordinary change only notifies and does not await return values.

## CSS Variables

Cedar defaults to gold stars and compact spacing. Maple defaults to the theme primary color and larger touch spacing. CSS variables with the same suffix serve the same purpose on both platforms, while defaults may differ.

`transition-duration` controls hover/color transitions, `scale-duration` controls selection animation, and `transition-timing-function` controls easing. Reduced motion disables these animations. `size` and `gap` props override the corresponding tokens for a single instance.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-rate-action-padding` | `0px` | `padding` |
| `--c-rate-active-color` | `rgb(var(--c-gold-6))` | `color` |
| `--c-rate-active-scale` | `1.2` | `transform` |
| `--c-rate-disabled-color` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-rate-empty-color` | `var(--c-color-fill-3)` | `color` |
| `--c-rate-error-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-rate-focus-color` | `var(--c-sys-color-content-brand)` | `outline` |
| `--c-rate-focus-offset` | `2px` | `outline-offset` |
| `--c-rate-focus-width` | `2px` | `outline` |
| `--c-rate-gap` | `var(--c-spacing-4)` | `margin-inline-end` |
| `--c-rate-min-height` | `var(--c-size-md)` | `min-height` |
| `--c-rate-scale-duration` | `var(--c-transition-duration-4)` | `animation` |
| `--c-rate-size` | `var(--c-font-size-title-3)` | `font-size` |
| `--c-rate-transition-duration` | `var(--c-transition-duration-2)` | `transition` |
| `--c-rate-transition-timing-function` | `var(--c-transition-timing-function-standard)` | `animation`, `transition` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-rate-action-padding: 0px;
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
