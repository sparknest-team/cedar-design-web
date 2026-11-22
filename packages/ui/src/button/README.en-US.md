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
| `variant` | Appearance; inherits from the button group when omitted, otherwise outline | Four variants, Colors, ripple and elevation |
| `size` | Size resolves from the button, then its group, then ConfigProvider, falling back to md | Four variants, Five sizes |
| `status` | Semantic color; inherits group, otherwise default | Four variants |
| `disabled` | Disabled; inherits group, explicit false overrides | Disabled buttons and links |
| `component` | Root tag; link attributes fall through | Disabled buttons and links |
| `loading` | Loading; blocks activation and navigation | Disabled buttons and links |
<!-- demo-config-notes:end -->

The `default` variant uses white text for primary, info, success, warning, danger and secondary solid fills.

<demo src="./__demos__/variants.en-US.vue"></demo>

### Five sizes

Horizontal buttons and inputs of the same size share the default height and font size within each platform. Cedar heights are 24/28/32/36/44px; Maple heights are 32/40/48/56/64px. Horizontal button padding is 8/12/16/20/24px per side, with a 6px icon-label gap. Stacked buttons keep their separate content-based height. Component-level overrides remain independent.

<demo src="./__demos__/size.vue"></demo>

Cedar Button resolves size from its own prop, then its group, then ConfigProvider, falling back to md. Removing an override reveals the current provider value; provider changes update both button and loading-indicator sizing. Maple retains own/group/md sizing without a new global size provider.

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
| `variant` | Appearance; inherits from the button group when omitted, otherwise outline | Icons and label layouts |
| `size` | Size resolves from the button, then its group, then ConfigProvider, falling back to md | Icons and label layouts |
| `stacked` | Stack icon and text; inherits group when omitted | Icons and label layouts |
| `round` | Round button | Icons and label layouts |
| `block` | Full available width | Block buttons |
<!-- demo-config-notes:end -->

Use built-in icons to compare icon-only, inline and stacked labels across four variants and five sizes. Stacked buttons grow with content and keep at least 8px of top and bottom padding. Omit the default slot for icon-only buttons; round controls shape and stacked controls label layout.

<demo src="./__demos__/icons.en-US.vue"></demo>

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
| `size` | Size resolves from the button, then its group, then ConfigProvider, falling back to md | Control Sizes |
| `variant` | Appearance; inherits from the button group when omitted, otherwise outline | Control Sizes |
| `html-type` | Native button type | Native form, focus and touch events |
| `focusable` | Allow sequential Tab focus; does not prevent programmatic focus | Native form, focus and touch events |
<!-- demo-config-notes:end -->

- `size`: Controls the component size.
- `variant`: Selects the visual variant.

<demo src="../field-decorator/__demos__/control-sizes.en-US.vue"></demo>

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

### Controlled loading and failure recovery

<demo src="./__demos__/controlled-loading.en-US.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Icons and content follow reading order; stacked content remains top to bottom without mirroring custom graphics. ButtonGroup uses its direction for horizontal arrangement, joined borders and end radii; individual buttons may override text direction. Single buttons retain full radii, and vertical groups keep top-to-bottom order. Native Tab, Enter and Space remain available; ordinary groups do not intercept arrow keys. Disabled and loading behavior is unchanged.

## API

<!-- same-source-api:start -->

### Button Props

| Prop | Description | Type | Default |
| ------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------- | -------------- |
| status | Semantic color; inherits group, otherwise default | `SemanticStatus`<br>`'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `undefined` |
| variant | Appearance; inherits from the button group when omitted, otherwise outline | `default / text / outline / tonal` | `undefined` |
| size | Size resolves from the button, then its group, then ConfigProvider, falling back to md | `xs / sm / md / lg / xl` | `undefined` |
| html-type | Native button type | `button / submit / reset` | `button` |
| component | Root tag; link attributes fall through | `button / a` | `button` |
| round | Round button | `boolean` | `false` |
| block | Full available width | `boolean` | `false` |
| loading | Loading; blocks activation and navigation | `boolean` | `false` |
| loading-type | Spinner animation; same as Loading.type; not used in line mode | `circle / wave / cube / rect / disappear` | `circle` |
| loading-mode | Inline, covering, or bottom progress line; line only uses loading-color | `default / fill / line` | `default` |
| loading-size | Indicator size; xs/sm/md/lg/xl map to 12/14/16/18/20px; numbers are px; follows button size when omitted; not used in line mode | `ComponentSize / number`<br>`ComponentSize: 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `undefined` |
| loading-color | Loading indicator color | `string` | `currentColor` |
| disabled | Disabled; inherits group, explicit false overrides | `boolean` | `undefined` |
| ripple | Click ripple | `boolean` | `true` |
| focusable | Allow sequential Tab focus; does not prevent programmatic focus | `boolean` | `true` |
| autofocus | Native autofocus | `boolean` | `false` |
| text-color | Custom text color | `string` | `undefined` |
| color | Custom background or variant base color | `string` | `undefined` |
| elevation | Shadow for the default variant; true means 1, false disables it, and numbers are rounded and clamped to 0–24; controlled by the group when grouped | `boolean / number` | `false` |
| stacked | Stack icon and text; inherits group when omitted | `boolean` | `undefined` |

### Button Events

| Event | Arguments and behavior |
| ---------- | ------------------------------------------- |
| click | `(event: MouseEvent) => void` |

`click` is a notification event. The component does not process listener return values or switch loading automatically. Business code controls `loading` and should restore it in `finally` after asynchronous work. Disabled or loading links have their effective `href` removed.

### Button Slots

| Slot | Description | Arguments |
| ------- | -------------------------------- | ---- |
| default | Button label; retained while loading | — |
| icon | Leading icon; above label when stacked | — |

### Button Methods

No custom public methods.
<!-- same-source-api:end -->

### ButtonGroup Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| status | Default semantic status for child buttons; individual buttons may override it | `SemanticStatus`<br>`'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | default |
| size | Default child button size; individual buttons may override it | xs / sm / md / lg / xl | undefined |
| variant | Default child appearance; adjacent buttons join using their effective variants, including mixed variants | default / text / outline / tonal | outline |
| color | Default custom child color; individual buttons may override it | string | undefined |
| text-color | Default child text color; individual buttons may override it | string | undefined |
| disabled | Default disabled state; an explicit child false overrides group true | boolean | false |
| stacked | Stack child icon and text vertically by default; a child may explicitly override with false | boolean | false |
| vertical | Vertical group layout, independent of button content stacking | boolean | false |
| elevation | Shadow for the entire group; true means 1 and numbers are normalized to 0–24; applies only to the default variant when the group is enabled | boolean / number | false |

The root defaults to `role="group"`. Supply `aria-label` or `aria-labelledby` when the action group needs a name. Native attributes can override role. Ordinary groups retain native Tab / Enter / Space handling without arrow-key focus management.

**Inheritance:** explicit child status, size, variant, color, text-color, disabled and stacked values take precedence. An omitted group size inherits ConfigProvider and ultimately falls back to md. The group always owns elevation; individual button elevation is ignored. Nested groups use their nearest group's configuration and defaults without automatically accumulating outer disabled state.

### ButtonGroup Events

No custom events. `@click` forwards a native root event and may receive descendant bubbling; listen to each Button's click for its action. The group does not collect event Promises or manage tasks or selection.

### ButtonGroup Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| default | Joined styling supports directly adjacent Button DOM nodes under the group root | — |

**Composition:** extra DOM wrappers, surrounding text and other controls are outside the joined appearance contract. Wrapped buttons may inherit configuration but do not receive the same joined styling. The group owns outer radii and does not preserve a standalone round button's circular appearance. Use Space for separate buttons or mixed content. In narrow areas, business code chooses scrolling, shorter labels or vertical layout; groups do not wrap automatically.

### ButtonGroup Methods

| Name | Description |
| --- | --- |
| buttonGroupProvider | Reactive group configuration with readonly ComputedRef fields; elevation is boolean / number and other fields match the Props |

No additional group action methods.

## Types

ButtonProps、ButtonVariant、ButtonLoadingMode、ButtonInstance、ButtonGroupProps、ButtonGroupInstance。

## CSS Variables

Button exposes 58 appearance tokens. `{status}-color` controls the solid background, `{status}-foreground-color` controls text/outline/tonal foreground, and `{status}-tonal-color` controls soft backgrounds. `solid-text-color` and `solid-state-layer-color` are shared by semantic statuses; default/tertiary foregrounds and primary/tertiary state layers retain theme-specific roles.

Sizes use xs/sm/md/lg/xl. Font sizes, transition duration, focus width/offset and stacked-height increments reuse system variables. Button groups and stacked buttons share border-radius. Four state opacity variables preserve hover/active differences. loading-duration controls only the bottom progress line; Loading controls other loading animations. Internal variables and fixed animation geometry are not public customization points.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-button-border-radius` | `var(--c-sys-radius-md)` | `border-bottom-left-radius`, `border-bottom-right-radius`, `border-radius`, `border-top-left-radius`, `border-top-right-radius` |
| `--c-button-content-gap` | `var(--c-sys-space-3)` | `gap` |
| `--c-button-danger-color` | `var(--c-sys-color-status-danger)` | `background-color`, `color` |
| `--c-button-danger-disabled-color` | `rgb(var(--c-danger-3))`<br>`rgba(var(--c-danger-6), 0.5)` (`:root[cedar-theme="dark"]`) | `background-color`, `color` |
| `--c-button-danger-foreground-color` | `var(--c-button-danger-color)` | `color` |
| `--c-button-danger-tonal-color` | `rgb(var(--c-danger-1))` | `background-color` |
| `--c-button-default-color` | `var(--c-sys-color-surface-default)` | `background-color` |
| `--c-button-default-foreground-color` | `var(--c-sys-color-content-primary)` | `background-color`, `color` |
| `--c-button-default-tonal-color` | `var(--c-sys-color-surface-muted)` | `background-color` |
| `--c-button-disabled-color` | `var(--c-color-fill-2)` | `background-color` |
| `--c-button-disabled-solid-text-color` | `var(--c-sys-color-content-on-dark)`<br>`rgba(255, 255, 255, 0.3)` (`:root[cedar-theme="dark"]`) | `color` |
| `--c-button-disabled-text-color` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-button-focus-color` | `var(--c-sys-color-action-primary)` | `outline` |
| `--c-button-info-color` | `var(--c-sys-color-status-info)` | `background-color`, `color` |
| `--c-button-info-disabled-color` | `rgb(var(--c-blue-3))`<br>`rgba(var(--c-blue-6), 0.5)` (`:root[cedar-theme="dark"]`) | `background-color`, `color` |
| `--c-button-info-foreground-color` | `var(--c-button-info-color)` | `color` |
| `--c-button-info-tonal-color` | `rgb(var(--c-blue-1))` | `background-color` |
| `--c-button-lg-height` | `36px` | `height`, `min-width`, `width` |
| `--c-button-lg-padding` | `0 var(--c-sys-space-7)` | `padding` |
| `--c-button-loading-duration` | `1s` | `animation` |
| `--c-button-loading-line-height` | `3px` | `height` |
| `--c-button-md-height` | `32px` | `height`, `min-width`, `width` |
| `--c-button-md-padding` | `0 var(--c-sys-space-6)` | `padding` |
| `--c-button-plain-state-opacity-active` | `1` | `opacity` |
| `--c-button-plain-state-opacity-hover` | `0.5` | `opacity` |
| `--c-button-primary-color` | `var(--c-sys-color-action-primary)` | `background-color`, `color` |
| `--c-button-primary-disabled-color` | `rgb(var(--c-primary-3))`<br>`rgba(var(--c-primary-6), 0.5)` (`:root[cedar-theme="dark"]`) | `background-color`, `color` |
| `--c-button-primary-foreground-color` | `var(--c-button-primary-color)` | `color` |
| `--c-button-primary-state-layer-color` | `var(--c-button-solid-state-layer-color)` | `background-color` |
| `--c-button-primary-tonal-color` | `rgb(var(--c-primary-1))` | `background-color` |
| `--c-button-secondary-color` | `rgb(var(--c-gray-6))` | `background-color` |
| `--c-button-secondary-foreground-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-button-secondary-tonal-color` | `rgb(var(--c-gray-2))` | `background-color` |
| `--c-button-sm-height` | `28px` | `height`, `min-width`, `width` |
| `--c-button-sm-padding` | `0 var(--c-sys-space-5)` | `padding` |
| `--c-button-solid-state-layer-color` | `var(--c-sys-color-content-on-dark)` | `background-color` |
| `--c-button-solid-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-button-stacked-gap` | `var(--c-sys-space-2)` | `gap`, `min-height`, `min-width` |
| `--c-button-state-layer-color` | `var(--c-sys-color-surface-page)` | `background-color` |
| `--c-button-state-opacity-active` | `0.12` | `opacity` |
| `--c-button-state-opacity-hover` | `0.08` | `opacity` |
| `--c-button-success-color` | `var(--c-sys-color-status-success)` | `background-color`, `color` |
| `--c-button-success-disabled-color` | `rgb(var(--c-success-3))`<br>`rgba(var(--c-success-6), 0.5)` (`:root[cedar-theme="dark"]`) | `background-color`, `color` |
| `--c-button-success-foreground-color` | `var(--c-button-success-color)` | `color` |
| `--c-button-success-tonal-color` | `rgb(var(--c-success-1))` | `background-color` |
| `--c-button-tertiary-color` | `rgb(var(--c-gray-7))` | `background-color` |
| `--c-button-tertiary-foreground-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-button-tertiary-state-layer-color` | `var(--c-sys-color-content-on-bright)`<br>`var(--c-sys-color-content-on-dark)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-button-tertiary-text-color` | `var(--c-sys-color-content-on-dark)`<br>`var(--c-sys-color-content-on-bright)` (`:root[cedar-theme="dark"]`) | `color` |
| `--c-button-tertiary-tonal-color` | `rgb(var(--c-gray-1))` | `background-color` |
| `--c-button-warning-color` | `var(--c-sys-color-status-warning)` | `background-color`, `color` |
| `--c-button-warning-disabled-color` | `rgb(var(--c-warning-3))`<br>`rgba(var(--c-warning-6), 0.5)` (`:root[cedar-theme="dark"]`) | `background-color`, `color` |
| `--c-button-warning-foreground-color` | `var(--c-button-warning-color)` | `color` |
| `--c-button-warning-tonal-color` | `rgb(var(--c-warning-1))` | `background-color` |
| `--c-button-xl-height` | `44px` | `height`, `min-width`, `width` |
| `--c-button-xl-padding` | `0 var(--c-sys-space-8)` | `padding` |
| `--c-button-xs-height` | `24px` | `height`, `min-width`, `width` |
| `--c-button-xs-padding` | `0 var(--c-sys-space-4)` | `padding` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-button-border-radius: var(--c-sys-radius-md);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
