---
lang: en-US
permalink: /en/components/slider/
---

# Slider

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Layout and arrangement

### Vertical

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| -------------- | --------------------------------------------------------- | -------- |
| `orientation` | Horizontal/vertical axis of the slider track and interaction, default horizontal; not the direction of value increments | Vertical |
| `aria-label` | Name, or separate names for range thumbs | Vertical |
| `range` | Fixed low/high thumbs; initial reversed values are sorted | Vertical |
| `show-tooltip` | true on hover/focus/drag, false hidden, always persistent | Vertical |

<!-- demo-config-notes:end -->


Preview configuration: `orientation="vertical"`, `aria-label="Vertical value"`, `range`, `show-tooltip="always"`.

<demo src="./__demos__/vertical.vue"></demo>

## Content and presentation

### Touch And Labels

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| -------------- | --------------------------------------------- | -------------- |
| `show-tooltip` | true on hover/focus/drag, false hidden, always persistent | Touch And Labels |
| `aria-label` | Name, or separate names for range thumbs | Touch And Labels |

<!-- demo-config-notes:end -->


Preview configuration: `show-tooltip="always"`, `aria-label="Always visible"`, `:show-tooltip="false"`, `active-color="#722ed1"`.

<demo src="./__demos__/touch-and-labels.vue"></demo>

## Interaction and control

### State Lab

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------ | ---------------------------------------------------- | -------------------------------------- |
| `aria-label` | Name, or separate names for range thumbs | Keyboard Input, Controlled Range |
| `range` | Fixed low/high thumbs; initial reversed values are sorted | Keyboard Input, Controlled Range |
| `step` | Positive finite step aligned to min; max remains reachable | Keyboard Input |
| `marks` | Map positions within the finite range to text | Keyboard Input |
| `show-ticks` | Show step ticks; dense ticks are reduced, up to 1000 | Keyboard Input |
| `show-input` | InputNumber; Enter or blur commits via the same model | Keyboard Input |

<!-- demo-config-notes:end -->


<demo src="./__demos__/state-lab.vue"></demo>

### Keyboard Input

- `step`: Controls the allowed increment.

<demo src="./__demos__/keyboard-input.vue"></demo>

### Controlled Range

- `readonly`: Displays the current value without allowing edits.
- `disabled`: Prevents user interaction.

<demo src="./__demos__/controlled-range.vue"></demo>

### Canceled pointer interactions

Every accepted pointer `start` has one `end`, including cancellation by disabling/readonly, bounds/step/orientation/range changes, capture loss, owner-window blur, KeepAlive deactivation, or unmount. `end` carries the last proposal from that gesture, or its initial value if it never proposed a change; changing range mode does not convert the old gesture's payload shape. Cancellation ends interaction, does not roll back earlier `change` proposals, and does not manufacture another model update. The parent still controls whether to accept proposals. A late pointerup/move cannot end the same gesture twice. Notification return Promises are not awaited.

<demo src="./__demos__/interaction-session.en-US.vue"></demo>

## Usage notes

### Editing and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-direct modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit({ value, previousValue }, done, { signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.

Public focus/blur methods are callable from initial mount. Focus opens an editable deferred editor and targets it after readiness; disabled, readonly, or reading fields do not open. Blur only blurs the current target without reopening. Stored methods never bind an old editor; closure, mode changes, deactivation, or unmount cancel queued calls.

Steps align to a decimal grid anchored at min, retaining exact endpoints and range constraints; representable decimal and exponential steps are supported. The public model remains Number; increments below its representable spacing cannot be expressed. format-tooltip only changes display. Numeric inputs follow their normal blur commit and validation flow; Slider does not add another value publication.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Slider Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| model-value | SliderValue / null | undefined | Controlled number or range pair; null is explicitly empty. |
| default-value | SliderValue | 0 | Uncontrolled initial value; ranges normalize to an ascending pair. |
| min | number / string | 0 | Finite minimum, accepting decimal and exponential numeric strings. |
| max | number / string | 100 | Finite maximum; interaction is blocked when it does not exceed min. |
| step | number / string | 1 | Positive finite step anchored at min; invalid values fall back to 1. |
| range | boolean | false | Two-thumb range with ordered, noncrossing endpoints. |
| orientation | 'horizontal' / 'vertical' | 'horizontal' | Track orientation; invalid values produce a development diagnostic. |
| disabled | boolean | undefined | Disable interaction; inherited from the form when omitted. |
| readonly | boolean | undefined | Readonly retains focus and tooltips while blocking value changes. |
| error | boolean | undefined | Error appearance, inherited from the form when omitted. |
| marks | Record<number, string> | undefined | Text marks at positions within the range. |
| show-ticks | boolean | false | Display step ticks, capped at 1000. |
| show-input | boolean | false | Show an accompanying InputNumber, or two in range mode. The slider’s aria-describedby also applies to the number inputs and is combined with form error descriptions. An explicit aria-description is forwarded to both the slider and number inputs. Browsers prioritize a resolvable aria-describedby, so the two descriptions are not necessarily combined. |
| show-tooltip | boolean / 'always' | true | True shows on hover, focus or drag; false hides; always remains visible. |
| format-tooltip | SliderTooltipFormatter | undefined | Format tooltips and aria-valuetext without changing the model. |
| aria-label | string / [string, string] | undefined | Single-thumb name or names for the two range thumbs. |
| active-color | string | undefined | Selected track color. |
| track-color | string | undefined | Background track color. |
| thumb-color | string | undefined | Thumb color. |
| label-color | string | undefined | Tooltip background color. |
| label-text-color | string | undefined | Tooltip text color. |
| track-height | number / string | undefined | Track thickness, with numeric values in px; invalid lengths preserve theme defaults. |
| thumb-size | number / string | undefined | Thumb diameter, with numeric values in px; invalid lengths preserve theme defaults. |
| edit-mode | FieldEditMode<br>`'direct' \| 'click' \| 'dblclick'` | undefined | Field editing entry, inherited from the form when omitted, otherwise direct. |
| read-pretty | boolean | undefined | Common pure-reading state, independent of readonly and disabled. |
| before-commit | BeforeFieldCommit | undefined | Deferred confirmation protocol ({ value, previousValue }, done, { signal }); complete with a boolean, Promise or done; synchronous undefined waits for done. |
| open | boolean | undefined | Controlled deferred editor state. |
| default-open | boolean | false | Initial uncontrolled deferred editor state. |
| popup-container | PopupContainer | undefined | Deferred editor mount target: selector, HTMLElement or false. |
| clearable | boolean | false | Provide clearing in the deferred editor; does not add a clear button to the inline slider. |
| empty-value | SliderProps['emptyValue'] | undefined | Published clear override, including explicit null. |
| empty-values | readonly unknown[] | undefined | Empty-value recognition inherited through field, FormItem and Form. |
| empty-text | string | undefined | Default empty reading text; defaults to a dash after inheritance. |

In range mode, `aria-labelledby` names the range group; an `aria-label` array still names the two thumbs. An explicit `role` takes precedence.

### Behavior and keyboard

Arrows adjust by step, PageUp/PageDown by 10 steps, Home/End reach available endpoints. Range-thumb ARIA min/max follow the other thumb. When overlapping, clicks left/down separate the lower thumb, right/up the upper thumb. Keyboard events inside interactive thumb content are not intercepted. Readonly retains focus/tooltips; disabled leaves the Tab sequence.

Pointer Events unify mouse, touch and pen. pointerup commits final coordinates; pointercancel/lost capture ends the latest proposal. Disabling, unmounting or KeepAlive deactivation cleans listeners/capture and stops value events. Horizontal sliders allow vertical page scrolling; vertical sliders allow horizontal scrolling.

Controlled display changes only after parent updates; normalization does not emit automatically. change/update:model-value report distinct proposals; end includes the final proposal without guaranteeing acceptance. Each keyboard/numeric-input operation has start/end; a drag has one pair. Internal InputNumber does not duplicate Form validation.

### Slider Events

| Event | Arguments | Meaning |
| ------------------ | ------------- | ---------------------------- |
| update:model-value | `SliderValue` | Request an update |
| change | `SliderValue` | Distinct numeric proposal paired with the model event |
| start | — | Interaction starts |
| end | `SliderValue` | Final proposal when interaction ends |

### Slider Slots / Methods

The button slot receives { currentValue, index }; custom content retains keyboard behavior, ARIA and tooltips. The read slot receives { value, text }, retaining null/undefined and range models; text is the formatted value. focus(index=0) focuses the displayed thumb; blur() blurs the currently focused owned element, including show-input numeric controls, without affecting outside controls.

Exports SliderProps, SliderValue, SliderOrientation, SliderTooltipFormatter, SliderTooltipVisibility, SliderEmits, SliderSlots, SliderExpose, SliderInstance and runtime sliderProps.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-slider-active-color` | `var(--c-sys-color-action-primary)` | `background`, `outline` |
| `--c-slider-control-height` | `var(--c-sys-control-height-md)` | `height`, `min-height`, `padding-bottom`, `padding-inline-end`, `width` |
| `--c-slider-disabled-color` | `var(--c-sys-color-content-disabled)` | `background`, `border-color` |
| `--c-slider-error-color` | `var(--c-sys-color-content-danger)` | `background`, `border-color` |
| `--c-slider-font-size` | `var(--c-sys-font-size-sm)` | `font-size` |
| `--c-slider-gap` | `var(--c-sys-space-4)` | `bottom`, `gap`, `left`, `padding` |
| `--c-slider-input-width` | `80px` | `width` |
| `--c-slider-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-slider-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-slider-thumb-border-color` | `var(--c-sys-color-action-primary)` | `border` |
| `--c-slider-thumb-color` | `var(--c-sys-color-surface-default)` | `background` |
| `--c-slider-thumb-size` | `16px` | `height`, `width` |
| `--c-slider-tooltip-background` | `var(--c-sys-color-surface-tooltip)` | `background` |
| `--c-slider-tooltip-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-slider-track-color` | `var(--c-sys-color-state-hover)` | `background` |
| `--c-slider-track-height` | `4px` | `height`, `width` |
| `--c-slider-transition-duration` | `var(--c-sys-motion-duration-fast)` | `transition` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-slider-active-color: var(--c-sys-color-action-primary);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
