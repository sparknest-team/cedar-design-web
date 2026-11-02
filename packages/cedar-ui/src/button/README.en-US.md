---
permalink: /en/components/button/
lang: en-US
---

# Button

Both libraries use the same implementation and examples; package prefixes, themes and registration stay local.

## Basic examples

### Eight statuses

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Four variants

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `variant` | Appearance; inherits group, otherwise default | Four variants, Colors, ripple and elevation |
| `size` | Size; inherits group, otherwise md | Four variants, Five sizes |
| `status` | Semantic color; inherits group, otherwise default | Four variants |
| `disabled` | Disabled; inherits group, explicit false overrides | Disabled buttons and links |
| `component` | Root tag; link attributes fall through | Disabled buttons and links |
| `loading` | Loading; blocks activation and navigation | Disabled buttons and links |
<!-- demo-config-notes:end -->


The `default` variant uses white text for primary, info, success, warning, danger and secondary solid fills.

<demo src="./__demos__/variants.vue"></demo>

### Five sizes

Horizontal buttons and inputs of the same size share the default height and font size within each platform. Cedar heights are 24/28/32/36/44px; Maple heights are 32/40/48/56/64px. Horizontal button padding is 8/12/16/20/24px per side, with a 6px icon-label gap. Stacked buttons keep their separate content-based height. Component-level overrides remain independent.

<demo src="./__demos__/size.vue"></demo>

### Disabled buttons and links

<demo src="./__demos__/disabled.vue"></demo>

### Colors, ripple and elevation

<demo src="./__demos__/custom-color.vue"></demo>

## Icons and layout

### Icons and label layouts

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `status` | Semantic color; inherits group, otherwise default | Icons and label layouts |
| `variant` | Appearance; inherits group, otherwise default | Icons and label layouts |
| `size` | Size; inherits group, otherwise md | Icons and label layouts |
| `stacked` | Stack icon and text; inherits group when omitted | Icons and label layouts |
| `round` | Round button | Icons and label layouts |
| `block` | Full available width | Block buttons |
<!-- demo-config-notes:end -->


Use built-in icons to compare icon-only, inline and stacked labels across four variants and five sizes. Stacked buttons grow with content and keep at least 8px of top and bottom padding. Omit the default slot for icon-only buttons; round controls shape and stacked controls label layout.

<demo src="./__demos__/icons.vue"></demo>

### Block buttons

<demo src="./__demos__/block.vue"></demo>

## Button groups

### Group inheritance and overrides

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `status` | Semantic color; inherits group, otherwise default | Group inheritance and overrides |
| `disabled` | Disabled; inherits group, explicit false overrides | Group inheritance and overrides |
| `loading` | Loading; blocks activation and navigation | Button Group Content |
<!-- demo-config-notes:end -->


<demo src="./__demos__/button-group.vue"></demo>

### Button Group Layout

<demo src="./__demos__/button-group-layout.vue"></demo>

### Button Group Content

<demo src="./__demos__/button-group-content.vue"></demo>

## Forms and events

### Control Sizes

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `size` | Size; inherits group, otherwise md | Control Sizes |
| `variant` | Appearance; inherits group, otherwise default | Control Sizes |
| `html-type` | Native button type | Native form, focus and touch events |
| `focusable` | Allow sequential Tab focus; does not prevent programmatic focus | Native form, focus and touch events |
<!-- demo-config-notes:end -->


- `size`: Controls the component size.
- `variant`: Selects the visual variant.

<demo src="../field-decorator/__demos__/control-sizes.vue"></demo>

### Native form, focus and touch events


<demo src="./__demos__/native-events.vue"></demo>

## Loading and action feedback

### Loading layouts and animations

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `loading` | Loading; blocks activation and navigation | Loading layouts and animations, Loading Appearance |
| `loading-size` | Indicator size; xs/sm/md/lg/xl map to 12/14/16/18/20px; numbers are px; follows button size when omitted; not used in line mode | Loading layouts and animations, Loading Appearance |
| `loading-type` | Spinner animation; same as Loading.type; not used in line mode | Loading layouts and animations |
| `loading-mode` | Inline, covering, or bottom progress line; line only uses loading-color | Loading layouts and animations |
| `loading-color` | Loading indicator color | Loading Appearance |
| `ripple` | Click ripple | Feedback |
<!-- demo-config-notes:end -->


<demo src="./__demos__/loading.vue"></demo>

### Loading Appearance

<demo src="./__demos__/loading-appearance.vue"></demo>

### Feedback

- `elevation`: Controls the shadow intensity.

<demo src="./__demos__/feedback.vue"></demo>

### Sync, async and rejection recovery

<demo src="./__demos__/controlled-loading.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Icons and content follow reading order; stacked content stays top to bottom and slot graphics are not mirrored. ButtonGroup owns horizontal joining edges and outer corners even when a child has a different text direction. A single child keeps all corners; vertical groups preserve top-to-bottom order. Native Tab, Enter and Space remain available; ordinary groups do not intercept horizontal arrows. Disabled and loading behavior stays unchanged.

## API

<!-- same-source-api:start -->

### Props

| Prop | Description | Type | Default |
| ------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------- | -------------- |
| status | Semantic color; inherits group, otherwise default | `SemanticStatus` | `undefined` |
| variant | Appearance; inherits group, otherwise default | `default / text / outline / tonal` | `undefined` |
| size | Size; inherits group, otherwise md | `xs / sm / md / lg / xl` | `undefined` |
| html-type | Native button type | `button / submit / reset` | `button` |
| component | Root tag; link attributes fall through | `button / a` | `button` |
| round | Round button | `boolean` | `false` |
| block | Full available width | `boolean` | `false` |
| loading | Loading; blocks activation and navigation | `boolean` | `false` |
| loading-type | Spinner animation; same as Loading.type; not used in line mode | `circle / wave / cube / rect / disappear` | `circle` |
| loading-mode | Inline, covering, or bottom progress line; line only uses loading-color | `default / fill / line` | `default` |
| loading-size | Indicator size; xs/sm/md/lg/xl map to 12/14/16/18/20px; numbers are px; follows button size when omitted; not used in line mode | `ComponentSize / number` | `undefined` |
| loading-color | Loading indicator color | `string` | `currentColor` |
| disabled | Disabled; inherits group, explicit false overrides | `boolean` | `undefined` |
| ripple | Click ripple | `boolean` | `true` |
| focusable | Allow sequential Tab focus; does not prevent programmatic focus | `boolean` | `true` |
| autofocus | Native autofocus | `boolean` | `false` |
| text-color | Custom text color | `string` | `undefined` |
| color | Custom background or variant base color | `string` | `undefined` |
| elevation | Default variant shadow; true=2, false=off, rounded/clamped 0–24; group owns grouped elevation | `boolean / number` | `true` |
| stacked | Stack icon and text; inherits group when omitted | `boolean` | `undefined` |

### Events

| Event | Arguments and behavior |
| ---------- | ------------------------------------------- |
| click | `(event: MouseEvent) => void` |
| touchstart | `(event: TouchEvent) => void` |

click is a normal emitted event and supports async handlers. Business state controls loading; restore it in finally. Listener Promises do not automatically drive loading. Disabled/loading links have no effective href.

### Slots

| Slot | Description | Arguments |
| ------- | -------------------------------- | ---- |
| default | Button label; retained while loading | — |
| icon | Leading icon; above label when stacked | — |

### Methods

No custom public methods.
<!-- same-source-api:end -->

## ButtonGroup

### ButtonGroup Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| status | Default semantic status; a child may override it | SemanticStatus | default |
| size | Default button size; a child may override it | xs / sm / md / lg / xl | md |
| variant | Default appearance; adjacent effective variants determine joining, including mixed variants | default / text / outline / tonal | default |
| color | Default custom color; a child may override it | string | undefined |
| text-color | Default text color; a child may override it | string | undefined |
| disabled | Default disabled state; an explicit child false overrides group true | boolean | false |
| stacked | Default vertical icon/text layout; a child may explicitly override with false | boolean | false |
| vertical | Vertical group layout, independent of button content stacking | boolean | false |
| elevation | Group shadow; true means 2, numbers normalize to 0–24; applies only to an enabled default-variant group | boolean / number | true |

The root defaults to `role="group"`. Supply `aria-label` or `aria-labelledby` when the action group needs a name. Native attributes can override role. Ordinary groups retain native Tab / Enter / Space handling without arrow-key focus management.

**Inheritance:** explicit child values win for status, size, variant, color, text-color, disabled and stacked. Elevation belongs to the group; a child's own elevation does not apply. Nested groups use their nearest group's settings and defaults rather than combining outer disabled states.

### ButtonGroup Events

No custom events. `@click` falls through to the root DOM element and can receive descendant bubbling; listen to each Button for its action. The group does not collect listener Promises or own a task or selection model.

### ButtonGroup Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| default | Joined styling supports directly adjacent Button DOM nodes under the group root | — |

**Composition:** extra DOM wrappers, prefix/suffix text and arbitrary controls are outside the joined-styling contract. Wrapped buttons may still inherit configuration without sharing the same joined edges. The group owns outer corners and does not preserve an individual round button's circular shape. Use Space for separated or arbitrary content. For narrow containers, the application chooses scrolling, shorter labels or vertical layout; groups do not wrap automatically.

### ButtonGroup Expose

| Name | Description |
| --- | --- |
| buttonGroupProvider | Reactive group configuration with readonly ComputedRef fields; elevation is boolean / number and other fields match the Props |

There are no additional group action methods.

## Types

ButtonProps、ButtonVariant、ButtonLoadingMode、ButtonInstance、ButtonGroupProps、ButtonGroupInstance。

## CSS variable responsibilities and complete defaults

Button exposes 58 appearance tokens. `{status}-color` controls the solid background, `{status}-foreground-color` controls text/outline/tonal foreground, and `{status}-tonal-color` controls soft backgrounds. `solid-text-color` and `solid-state-layer-color` are shared by semantic statuses; default/tertiary foregrounds and primary/tertiary state layers retain theme-specific roles.

Sizes use xs/sm/md/lg/xl. Font sizes, transition duration, focus width/offset and stacked-height increments reuse system variables. Button groups and stacked buttons share border-radius. Four state opacity variables preserve hover/active differences. loading-duration controls only the bottom progress line; Loading controls other loading animations. Internal variables and fixed animation geometry are not public customization points.

| Variable | Default |
| --------------------------------------- | ----------------------------------------- |
| `--c-button-border-radius` | `var(--c-sys-radius-md)` |
| `--c-button-content-gap` | `var(--c-sys-space-3)` |
| `--c-button-danger-color` | `var(--c-sys-color-status-danger)` |
| `--c-button-danger-disabled-color` | `rgb(var(--c-danger-3))` |
| `--c-button-danger-foreground-color` | `var(--c-sys-color-content-danger)` |
| `--c-button-danger-tonal-color` | `rgb(var(--c-danger-1))` |
| `--c-button-default-color` | `var(--c-sys-color-surface-default)` |
| `--c-button-default-foreground-color` | `var(--c-sys-color-content-primary)` |
| `--c-button-default-tonal-color` | `var(--c-sys-color-surface-muted)` |
| `--c-button-disabled-color` | `var(--c-color-fill-2)` |
| `--c-button-disabled-solid-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-disabled-text-color` | `var(--c-sys-color-content-disabled)` |
| `--c-button-focus-color` | `var(--c-sys-color-content-brand)` |
| `--c-button-info-color` | `var(--c-sys-color-status-info)` |
| `--c-button-info-disabled-color` | `rgb(var(--c-blue-3))` |
| `--c-button-info-foreground-color` | `var(--c-sys-color-content-info)` |
| `--c-button-info-tonal-color` | `rgb(var(--c-blue-1))` |
| `--c-button-lg-height` | `36px` |
| `--c-button-lg-padding` | `0 var(--c-sys-space-7)` |
| `--c-button-loading-duration` | `1s` |
| `--c-button-loading-line-height` | `3px` |
| `--c-button-md-height` | `32px` |
| `--c-button-md-padding` | `0 var(--c-sys-space-6)` |
| `--c-button-plain-state-opacity-active` | `1` |
| `--c-button-plain-state-opacity-hover` | `0.5` |
| `--c-button-primary-color` | `var(--c-sys-color-action-primary)` |
| `--c-button-primary-disabled-color` | `rgb(var(--c-primary-3))` |
| `--c-button-primary-foreground-color` | `var(--c-sys-color-content-brand)` |
| `--c-button-primary-state-layer-color` | `var(--c-button-solid-state-layer-color)` |
| `--c-button-primary-tonal-color` | `rgb(var(--c-primary-1))` |
| `--c-button-secondary-color` | `rgb(var(--c-gray-6))` |
| `--c-button-secondary-foreground-color` | `var(--c-sys-color-content-secondary)` |
| `--c-button-secondary-tonal-color` | `rgb(var(--c-gray-2))` |
| `--c-button-sm-height` | `28px` |
| `--c-button-sm-padding` | `0 var(--c-sys-space-5)` |
| `--c-button-solid-state-layer-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-solid-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-stacked-gap` | `var(--c-sys-space-2)` |
| `--c-button-state-layer-color` | `var(--c-sys-color-surface-page)` |
| `--c-button-state-opacity-active` | `0.12` |
| `--c-button-state-opacity-hover` | `0.08` |
| `--c-button-success-color` | `var(--c-sys-color-status-success)` |
| `--c-button-success-disabled-color` | `rgb(var(--c-success-3))` |
| `--c-button-success-foreground-color` | `var(--c-sys-color-content-success)` |
| `--c-button-success-tonal-color` | `rgb(var(--c-success-1))` |
| `--c-button-tertiary-color` | `rgb(var(--c-gray-7))` |
| `--c-button-tertiary-foreground-color` | `var(--c-sys-color-content-secondary)` |
| `--c-button-tertiary-state-layer-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-button-tertiary-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-button-tertiary-tonal-color` | `rgb(var(--c-gray-1))` |
| `--c-button-warning-color` | `var(--c-sys-color-status-warning)` |
| `--c-button-warning-disabled-color` | `rgb(var(--c-warning-3))` |
| `--c-button-warning-foreground-color` | `var(--c-sys-color-content-warning)` |
| `--c-button-warning-tonal-color` | `rgb(var(--c-warning-1))` |
| `--c-button-xl-height` | `44px` |
| `--c-button-xl-padding` | `0 var(--c-sys-space-8)` |
| `--c-button-xs-height` | `24px` |
| `--c-button-xs-padding` | `0 var(--c-sys-space-4)` |
