---
permalink: /en/components/button/
lang: en-US
---

# Button

Both libraries use the same implementation and examples; package prefixes, themes and registration stay local.

## Examples

### Eight statuses

<demo src="./__demos__/basic.vue"></demo>

### Four variants

The `default` variant uses white text for primary, info, success, warning, danger and secondary solid fills.

<demo src="./__demos__/variants.vue"></demo>

### Five sizes

Horizontal buttons and inputs of the same size share the default height and font size within each platform. Cedar heights are 24/28/32/36/44px; Maple heights are 32/40/48/56/64px. Horizontal button padding is 8/12/16/20/24px per side, with a 6px icon-label gap. Stacked buttons keep their separate content-based height. Component-level overrides remain independent.

<demo src="./__demos__/size.vue"></demo>

### Disabled buttons and links

<demo src="./__demos__/disabled.vue"></demo>

### Loading layouts and animations

<demo src="./__demos__/loading.vue"></demo>

### Sync, async and rejection recovery

<demo src="./__demos__/auto-loading.vue"></demo>

### Block buttons

<demo src="./__demos__/block.vue"></demo>

### Colors, ripple and elevation

<demo src="./__demos__/custom-color.vue"></demo>

### Icons and label layouts

Use built-in icons to compare icon-only, inline and stacked labels across four variants and five sizes. Stacked buttons grow with content and keep at least 8px of top and bottom padding. Omit the default slot for icon-only buttons; round controls shape and stacked controls label layout.

<demo src="./__demos__/icons.vue"></demo>

### Group inheritance and overrides

<demo src="./__demos__/button-group.vue"></demo>

### Native form, focus and touch events

<demo src="./__demos__/native-events.vue"></demo>

## API

<!-- same-source-api:start -->
### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
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
| auto-loading | Wait for click/touchstart Promise results; sync callbacks do not flash loading | `boolean` | `false` |
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
| --- | --- |
| click | `(event: Event) => void / Promise<unknown>` |
| touchstart | `(event: Event) => void / Promise<unknown>` |

Handlers may return promises and multiple listeners are supported. With auto-loading, all listeners must settle before unblocking, including after rejection. Unmounting or KeepAlive deactivation invalidates pending completion. Listener return values are read directly; events are not dispatched a second time. Native focus/blur attributes fall through. Disabled/busy clicks prevent navigation and propagation.

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| default | Button label; retained while loading | — |
| icon | Leading icon; above label when stacked | — |

### Methods

No custom public methods.
<!-- same-source-api:end -->

## ButtonGroup

Props: size=md, status=default, variant=default, color/text-color=undefined, disabled/stacked/vertical=false, elevation=true. Uses the default slot and exposes buttonGroupProvider (reactive group configuration). No custom events.

## Types

ButtonProps、ButtonVariant、ButtonLoadingMode、ButtonHandler、ButtonInstance、ButtonGroupProps、ButtonGroupInstance。
## CSS variable roles and defaults

Button exposes 58 appearance tokens. `{status}-color` controls the solid background, `{status}-foreground-color` controls text/outline/tonal foreground, and `{status}-tonal-color` controls soft backgrounds. `solid-text-color` and `solid-state-layer-color` are shared by semantic statuses; default/tertiary foregrounds and primary/tertiary state layers retain theme-specific roles.

Size names use xs/sm/md/lg/xl. Typography, transition duration, focus width/offset and stacked height increments inherit system tokens; group and stacked corners reuse border-radius. The four state opacity tokens keep hover/active distinct. Loading duration applies to the bottom progress line; spinner animation is owned by Loading. Internal variables and fixed animation geometry are implementation details.


| Variable | Default |
| --- | --- |
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
