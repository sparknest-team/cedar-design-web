---
permalink: /en/components/badge/
lang: en-US
---

# Badge

The same scenarios, parameters and interactions as Cedar. Only component prefixes differ; themes and site shells remain independent.

## Basic examples

### Basic usage

Badges use a red background and white text by default.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Statuses and colors

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `content` | Badge content | Statuses and colors, Appearance configuration comparison |
| `status` | Semantic status | Statuses and colors |
| `mode` | Layout mode | Statuses and colors |
| `description` | Fallback description text | Statuses and colors |
| `color` | Custom color; outline uses it for border and text | Statuses and colors |
| `text-color` | Content text color | Statuses and colors |
<!-- demo-config-notes:end -->


<demo src="./__demos__/color.vue"></demo>

### Appearance configuration comparison

Choose a dimension to compare all its values side by side while keeping other settings and content identical. Change the other settings to inspect combinations; input specimens share one model.

<demo src="./__demos__/appearance-lab.vue"></demo>

## Layout and arrangement

### Positions and offsets

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `position` | Physical corner or left/right midpoint inside the host box, default top-right. Only used in floating mode; RTL does not mirror it | Positions and offsets |
| `content` | Badge content | Positions and offsets |
| `dot` | Display a dot | Positions and offsets |
| `offset-x` | Horizontal offset; ignored in inline mode | Positions and offsets |
| `offset-y` | Vertical offset | Positions and offsets |
| `mode` | Layout mode | Positions and offsets |
<!-- demo-config-notes:end -->


<demo src="./__demos__/position.vue"></demo>

## Content and presentation

### Inline and standalone

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `content` | Badge content | Inline and standalone, Dot badges, Maximum and zero |
| `dot` | Display a dot | Inline and standalone, Dot badges, Show and hide |
| `description` | Fallback description text | Inline and standalone, Show and hide |
| `show-zero` | Show numeric zero | Maximum and zero, Show and hide |
| `mode` | Layout mode | Inline and standalone |
| `inline-position` | Inline badge at the logical start or end of the host content, default end. Only used in inline mode | Inline and standalone |
<!-- demo-config-notes:end -->


<demo src="./__demos__/inline.vue"></demo>

### Dot badges

<demo src="./__demos__/dot.vue"></demo>

### Maximum and zero

<demo src="./__demos__/max.vue"></demo>

### Show and hide

<demo src="./__demos__/show.vue"></demo>

## Customization and slots

### Custom content

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `content` | Badge content | Custom content |
| `mode` | Layout mode | Custom content |
| `inline-position` | Inline badge at the logical start or end of the host content, default end. Only used in inline mode | Custom content |
<!-- demo-config-notes:end -->


<demo src="./__demos__/content.vue"></demo>

## API

<!-- same-source-api:start -->

Numeric `content` supports finite nonnegative values. Zero appears only when `show-zero` is true; dot mode and the `content` slot follow the same rule. Strings are displayed verbatim, including `0`. Negative and non-finite numbers are hidden. `max=0` disables truncation and an invalid maximum falls back to 99. Offsets accept finite negative values; invalid offsets fall back to `0`. In floating mode positive offsets move inward from the anchored edge, while positive vertical offsets at side midpoints move downward. Inline mode ignores horizontal offset and applies vertical offset as a block margin selected by start/end. A provided default slot counts as a host even when empty. The `content` slot overrides the default badge but remains subject to `show` and numeric zero visibility.

### Badge Props

| Parameter | Description | Type | Default |
| --------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------- | :---------: |
| description | Fallback description text | `string` | `-` |
| content | Badge content | `number \| string` | `-` |
| max | Maximum displayed numeric badge value. Numeric content above this value is shown as `${max}+`. | `number` | `99` |
| dot | Display a dot | `boolean` | `false` |
| offset-x | Horizontal offset; ignored in inline mode | `number` | `0` |
| offset-y | Vertical offset | `number` | `0` |
| color | Custom color; outline uses it for border and text | `string` | `-` |
| text-color | Content text color | `string` | `-` |
| mode | Layout mode | `'floating' \| 'inline'` | `floating` |
| position | Physical corner or left/right midpoint inside the host box, default top-right. Only used in floating mode; RTL does not mirror it | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left' \| 'left' \| 'right'` | `top-right` |
| inline-position | Inline badge at the logical start or end of the host content, default end. Only used in inline mode | `'start' \| 'end'` | `end` |
| size | Size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `md` |
| status | Semantic status | `SemanticStatus`<br>`'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `danger` |
| show | Show the badge | `boolean` | `true` |
| show-zero | Show numeric zero | `boolean` | `false` |
| variant | Appearance | `'outline' \| 'default'` | `default` |

### Badge Events

No component-specific events.

### Badge Slots

| Slot | Description | Prop |
| ------- | ---------------- | ---- |
| default | Fallback description text | - |
| content | Content displayed inside the badge | - |

### Badge Methods

No public methods.

### Usage notes

Props and slots match across platforms. Without a default slot and with an empty description, the badge renders independently inline. Omitting content displays a dot. Each library reads text direction from its own configuration and supplies its own theme colors and CSS prefix.
<!-- same-source-api:end -->

## Types

The component exports the following types

```ts
import type { BadgeInstance } from '@cedar-design/ui-vue'
```

### Color override boundaries

The bg-color fallback and danger fill use red backgrounds with white text: danger level 7 in light mode and level 4 in dark mode. Fixed neutral light gray and secondary/tertiary gray levels are intentional component colors. Override the border-color isolation ring to match the host surface. Callers must ensure contrast for custom color/text-color values.

## CSS Variables

The following CSS variables support customization with [ThemeProvider](#/en-US/theme-provider).

Filled badge text follows Button: primary, info, success, warning, danger and secondary use `content-on-dark`; tertiary uses `content-on-dark` in light mode and `content-on-bright` in dark mode. Default notification badges use red backgrounds and white text; the neutral background remains `#e0e0e0`.

Colored outline text and borders follow Button, using the matching `content-brand`, `content-info`, `content-success`, `content-warning` and `content-danger` semantic roles; secondary and tertiary outlines use `content-secondary` for readability. `variant-outline-bg-color` works for every status and defaults to transparent. The `color` prop overrides outline text and border; `text-color` overrides text further. Both preserve control through the background variable. Recheck contrast after customizing foreground or background.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-badge-bg-color` | `rgb(var(--c-danger-7))`<br>`rgb(var(--c-danger-4))` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-badge-border-color` | `var(--c-sys-color-surface-default)` | `background-color`, `box-shadow` |
| `--c-badge-description-size-lg-font-size` | `var(--c-sys-font-size-lg)` | `font-size` |
| `--c-badge-description-size-md-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-badge-description-size-sm-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-badge-description-size-xl-font-size` | `var(--c-sys-font-size-xl)` | `font-size` |
| `--c-badge-description-size-xs-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-badge-description-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-badge-font-weight` | `var(--c-sys-font-weight-medium)` | `font-weight` |
| `--c-badge-offset` | `2px` | `bottom`, `left`, `right`, `top` |
| `--c-badge-ring-width` | `2px` | `box-shadow`, `line-height` |
| `--c-badge-size-lg-border-radius` | `28px` | `border-radius` |
| `--c-badge-size-lg-dot-height` | `7px` | `height` |
| `--c-badge-size-lg-dot-width` | `7px` | `width` |
| `--c-badge-size-lg-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-badge-size-lg-height` | `28px` | `line-height`, `min-width` |
| `--c-badge-size-lg-padding` | `0 var(--c-sys-space-4)` | `padding` |
| `--c-badge-size-lg-scale` | `1` | `transform` |
| `--c-badge-size-lg-space` | `var(--c-sys-space-3)` | `margin-inline` |
| `--c-badge-size-md-border-radius` | `24px` | `border-radius` |
| `--c-badge-size-md-dot-height` | `6px` | `height` |
| `--c-badge-size-md-dot-width` | `6px` | `width` |
| `--c-badge-size-md-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-badge-size-md-height` | `24px` | `line-height`, `min-width` |
| `--c-badge-size-md-padding` | `0 var(--c-sys-space-4)` | `padding` |
| `--c-badge-size-md-scale` | `1` | `transform` |
| `--c-badge-size-md-space` | `var(--c-sys-space-3)` | `margin-inline` |
| `--c-badge-size-sm-border-radius` | `20px` | `border-radius` |
| `--c-badge-size-sm-dot-height` | `5px` | `height` |
| `--c-badge-size-sm-dot-width` | `5px` | `width` |
| `--c-badge-size-sm-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-badge-size-sm-height` | `20px` | `line-height`, `min-width` |
| `--c-badge-size-sm-padding` | `0 var(--c-sys-space-3)` | `padding` |
| `--c-badge-size-sm-scale` | `0.8333` | `transform` |
| `--c-badge-size-sm-space` | `var(--c-sys-space-1)` | `margin-inline` |
| `--c-badge-size-xl-border-radius` | `32px` | `border-radius` |
| `--c-badge-size-xl-dot-height` | `8px` | `height` |
| `--c-badge-size-xl-dot-width` | `8px` | `width` |
| `--c-badge-size-xl-font-size` | `var(--c-sys-font-size-lg)` | `font-size` |
| `--c-badge-size-xl-height` | `32px` | `line-height`, `min-width` |
| `--c-badge-size-xl-padding` | `0 10px` | `padding` |
| `--c-badge-size-xl-scale` | `1` | `transform` |
| `--c-badge-size-xl-space` | `var(--c-sys-space-4)` | `margin-inline` |
| `--c-badge-size-xs-border-radius` | `20px` | `border-radius` |
| `--c-badge-size-xs-dot-height` | `4px` | `height` |
| `--c-badge-size-xs-dot-width` | `4px` | `width` |
| `--c-badge-size-xs-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-badge-size-xs-height` | `20px` | `line-height`, `min-width` |
| `--c-badge-size-xs-padding` | `0 var(--c-sys-space-3)` | `padding` |
| `--c-badge-size-xs-scale` | `0.6667` | `transform` |
| `--c-badge-size-xs-space` | `0px` | `margin-inline` |
| `--c-badge-status-danger-bg-color` | `rgb(var(--c-danger-7))`<br>`rgb(var(--c-danger-4))` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-badge-status-danger-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-badge-status-default-bg-color` | `#e0e0e0` | `background-color` |
| `--c-badge-status-default-text-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-badge-status-info-bg-color` | `var(--c-sys-color-status-info)` | `background-color` |
| `--c-badge-status-info-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-badge-status-primary-bg-color` | `var(--c-sys-color-action-primary)` | `background-color` |
| `--c-badge-status-primary-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-badge-status-secondary-bg-color` | `rgb(var(--c-gray-6))` | `background-color` |
| `--c-badge-status-secondary-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-badge-status-success-bg-color` | `var(--c-sys-color-status-success)` | `background-color` |
| `--c-badge-status-success-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-badge-status-tertiary-bg-color` | `rgb(var(--c-gray-7))` | `background-color` |
| `--c-badge-status-tertiary-text-color` | `var(--c-sys-color-content-on-dark)`<br>`var(--c-sys-color-content-on-bright)` (`:root[cedar-theme="dark"]`) | `color` |
| `--c-badge-status-warning-bg-color` | `var(--c-sys-color-status-warning)` | `background-color` |
| `--c-badge-status-warning-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-badge-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-badge-variant-outline-bg-color` | `transparent` | `background-color` |
| `--c-badge-variant-outline-status-danger-text-color` | `var(--c-sys-color-content-danger)` | `border`, `color` |
| `--c-badge-variant-outline-status-default-text-color` | `var(--c-sys-color-content-primary)` | `border`, `color` |
| `--c-badge-variant-outline-status-info-text-color` | `var(--c-sys-color-content-info)` | `border`, `color` |
| `--c-badge-variant-outline-status-primary-text-color` | `var(--c-sys-color-content-brand)` | `border`, `color` |
| `--c-badge-variant-outline-status-secondary-text-color` | `var(--c-sys-color-content-secondary)` | `border`, `color` |
| `--c-badge-variant-outline-status-success-text-color` | `var(--c-sys-color-content-success)` | `border`, `color` |
| `--c-badge-variant-outline-status-tertiary-text-color` | `var(--c-sys-color-content-secondary)` | `border`, `color` |
| `--c-badge-variant-outline-status-warning-text-color` | `var(--c-sys-color-content-warning)` | `border`, `color` |
| `--c-badge-variant-outline-text-color` | `var(--c-sys-color-content-danger)` | `border`, `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-badge-bg-color: rgb(var(--c-danger-7));
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
