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

| Configuration  | Purpose                                                                                                                 | Related examples |
| -------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `orientation`  | Horizontal/vertical axis of the slider track and interaction, default horizontal; not the direction of value increments | Vertical         |
| `aria-label`   | Name, or separate names for range thumbs                                                                                | Vertical         |
| `range`        | Fixed low/high thumbs; initial reversed values are sorted                                                               | Vertical         |
| `show-tooltip` | true on hover/focus/drag, false hidden, always persistent                                                               | Vertical         |

<!-- demo-config-notes:end -->

Preview configuration: `orientation="vertical"`, `aria-label="Vertical value"`, `range`, `show-tooltip="always"`.

<demo src="./__demos__/vertical.vue"></demo>

## Content and presentation

### Touch And Labels

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration  | Purpose                                                   | Related examples |
| -------------- | --------------------------------------------------------- | ---------------- |
| `show-tooltip` | true on hover/focus/drag, false hidden, always persistent | Touch And Labels |
| `aria-label`   | Name, or separate names for range thumbs                  | Touch And Labels |

<!-- demo-config-notes:end -->

Preview configuration: `show-tooltip="always"`, `aria-label="Always visible"`, `:show-tooltip="false"`, `active-color="#722ed1"`.

<demo src="./__demos__/touch-and-labels.vue"></demo>

## Interaction and control

### State Lab

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                                                    | Related examples                 |
| ------------- | ---------------------------------------------------------- | -------------------------------- |
| `aria-label`  | Name, or separate names for range thumbs                   | Keyboard Input, Controlled Range |
| `range`       | Fixed low/high thumbs; initial reversed values are sorted  | Keyboard Input, Controlled Range |
| `step`        | Positive finite step aligned to min; max remains reachable | Keyboard Input                   |
| `marks`       | Map positions within the finite range to text              | Keyboard Input                   |
| `show-ticks`  | Show step ticks; dense ticks are reduced, up to 1000       | Keyboard Input                   |
| `show-input`  | InputNumber; Enter or blur commits via the same model      | Keyboard Input                   |

<!-- demo-config-notes:end -->

<demo src="./__demos__/state-lab.vue"></demo>

### Keyboard Input

- `step`: Controls the allowed increment.

<demo src="./__demos__/keyboard-input.vue"></demo>

### Controlled Range

- `readonly`: Displays the current value without allowing edits.
- `disabled`: Prevents user interaction.

<demo src="./__demos__/controlled-range.vue"></demo>

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Props

| Prop                                     | Description                                                                                                             | Type                             | Default        |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------- |
| model-value                              | Controlled value; range uses a tuple                                                                                    | `SliderValue`                    | —              |
| default-value                            | Initial uncontrolled value                                                                                              | `SliderValue`                    | `0`            |
| min / max                                | Finite bounds; numeric strings are accepted. Invalid values fall back to 0/100. max<=min blocks interaction             | `number \| string`               | `0 / 100`      |
| step                                     | Positive finite step aligned to min; max remains reachable                                                              | `number \| string`               | `1`            |
| range                                    | Fixed low/high thumbs; initial reversed values are sorted                                                               | `boolean`                        | `false`        |
| orientation                              | Horizontal/vertical axis of the slider track and interaction, default horizontal; not the direction of value increments | `horizontal \| vertical`         | `horizontal`   |
| disabled / readonly / error              | Inherits applicable FormItem/Form state when omitted; readonly is focusable but cannot change values                    | `boolean`                        | Inherited      |
| show-ticks                               | Show step ticks; dense ticks are reduced, up to 1000                                                                    | `boolean`                        | `false`        |
| marks                                    | Map positions within the finite range to text                                                                           | `Record<number,string>`          | —              |
| show-input                               | InputNumber; Enter or blur commits via the same model                                                                   | `boolean`                        | `false`        |
| show-tooltip                             | true on hover/focus/drag, false hidden, always persistent                                                               | `boolean \| 'always'`            | `true`         |
| format-tooltip                           | Formats tooltip and aria-valuetext                                                                                      | `(value:number)=>string\|number` | Original value |
| aria-label                               | Name, or separate names for range thumbs                                                                                | `string \| [string,string]`      | —              |
| active-color / track-color / thumb-color | Active track/background/thumb fill colors                                                                               | `string`                         | CSS variable   |
| label-color / label-text-color           | Tooltip background/text colors                                                                                          | `string`                         | CSS variable   |
| track-height / thumb-size                | Track thickness/thumb diameter in numeric px or CSS lengths; invalid values retain theme defaults                       | `number \| string`               | CSS variable   |

### Behavior and keyboard

Arrows adjust by step, PageUp/PageDown by 10 steps, Home/End reach available endpoints. Range-thumb ARIA min/max follow the other thumb. When overlapping, clicks left/down separate the lower thumb, right/up the upper thumb. Keyboard events inside interactive thumb content are not intercepted. Readonly retains focus/tooltips; disabled leaves the Tab sequence.

Pointer Events unify mouse, touch and pen. pointerup commits final coordinates; pointercancel/lost capture ends the latest proposal. Disabling, unmounting or KeepAlive deactivation cleans listeners/capture and stops value events. Horizontal sliders allow vertical page scrolling; vertical sliders allow horizontal scrolling.

Controlled display changes only after parent updates; normalization does not emit automatically. change/update:model-value report distinct proposals; end includes the final proposal without guaranteeing acceptance. Each keyboard/numeric-input operation has start/end; a drag has one pair. Internal InputNumber does not duplicate Form validation. label-visible is removed; use show-tooltip without a compatibility alias.

### Events

| Event              | Arguments     | Meaning                                               |
| ------------------ | ------------- | ----------------------------------------------------- |
| update:model-value | `SliderValue` | Request an update                                     |
| change             | `SliderValue` | Distinct numeric proposal paired with the model event |
| start              | —             | Interaction starts                                    |
| end                | `SliderValue` | Final proposal when interaction ends                  |

### Slots / Methods

The button slot receives `{ currentValue:number,index:number }`. Custom content retains keyboard, ARIA and tooltip behavior. focus(index=0) focuses thumbs in display order; blur() removes focus.

Exports SliderProps, SliderValue, SliderOrientation, SliderTooltipFormatter, SliderTooltipVisibility, SliderEmits, SliderSlots, SliderExpose, SliderInstance and runtime sliderProps. Component bodies/styles are independently copied; installation/Form integration remain local to each library.

### Style variables

| Variable                         | Default                                |
| -------------------------------- | -------------------------------------- |
| `--c-slider-active-color`        | `var(--c-sys-color-content-brand)`     |
| `--c-slider-track-color`         | `var(--c-sys-color-state-hover)`       |
| `--c-slider-thumb-color`         | `var(--c-sys-color-surface-default)`   |
| `--c-slider-thumb-border-color`  | `var(--c-sys-color-content-brand)`     |
| `--c-slider-text-color`          | `var(--c-sys-color-content-secondary)` |
| `--c-slider-tooltip-background`  | `var(--c-sys-color-surface-tooltip)`   |
| `--c-slider-tooltip-color`       | `var(--c-sys-color-content-on-dark)`   |
| `--c-slider-error-color`         | `var(--c-sys-color-content-danger)`    |
| `--c-slider-disabled-color`      | `var(--c-sys-color-content-disabled)`  |
| `--c-slider-track-height`        | `4px`                                  |
| `--c-slider-thumb-size`          | `16px`                                 |
| `--c-slider-control-height`      | `var(--c-sys-control-height-md)`       |
| `--c-slider-font-size`           | `var(--c-sys-font-size-sm)`            |
| `--c-slider-gap`                 | `var(--c-sys-space-4)`                 |
| `--c-slider-radius`              | `var(--c-sys-radius-md)`               |
| `--c-slider-transition-duration` | `var(--c-sys-motion-duration-fast)`    |
| `--c-slider-input-width`         | `80px`                                 |

### Form field presentation and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-`direct` modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

`empty-value` accepts explicit `null` (or `() => null`). Clearing publishes `null` unchanged; omitted values preserve the existing default. Editors render `null` as blank without converting ordinary empty-string input to `null`. In popup editing, clearing changes the draft; confirm commits it and cancel preserves the original model.
