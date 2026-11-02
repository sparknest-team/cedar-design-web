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
### Props

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
| status | Semantic status | `SemanticStatus` | `danger` |
| show | Show the badge | `boolean` | `true` |
| show-zero | Show numeric zero | `boolean` | `false` |
| variant | Appearance | `'outline' \| 'default'` | `default` |

### Events

No component-specific events.

### Slots

| Slot | Description | Arguments |
| ------- | ---------------- | ---- |
| default | Fallback description text | - |
| content | Content displayed inside the badge | - |

### Methods

No public methods.

### Platform notes

Props and slots match across platforms. Without a default slot and with an empty description, the badge renders independently inline. Omitting content displays a dot. Each library reads text direction from its own configuration and supplies its own theme colors and CSS prefix.
<!-- same-source-api:end -->

### Style variables

The following CSS variables support customization with [StyleProvider](#/en-US/style-provider).

| Variable | Default |
| --- | --- |
| `--c-badge-font-weight` | `var(--c-sys-font-weight-medium)` |
| `--c-badge-description-size-xs-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-badge-description-size-sm-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-badge-description-size-md-font-size` | `var(--c-sys-font-size-md)` |
| `--c-badge-description-size-lg-font-size` | `var(--c-sys-font-size-lg)` |
| `--c-badge-description-size-xl-font-size` | `var(--c-sys-font-size-xl)` |
| `--c-badge-description-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-badge-size-xs-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-badge-size-sm-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-badge-size-md-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-badge-size-lg-font-size` | `var(--c-sys-font-size-md)` |
| `--c-badge-size-xl-font-size` | `var(--c-sys-font-size-lg)` |
| `--c-badge-size-xs-scale` | `0.6667` |
| `--c-badge-size-sm-scale` | `0.8333` |
| `--c-badge-size-md-scale` | `1` |
| `--c-badge-size-lg-scale` | `1` |
| `--c-badge-size-xl-scale` | `1` |
| `--c-badge-size-xs-dot-width` | `4px` |
| `--c-badge-size-sm-dot-width` | `5px` |
| `--c-badge-size-md-dot-width` | `6px` |
| `--c-badge-size-lg-dot-width` | `7px` |
| `--c-badge-size-xl-dot-width` | `8px` |
| `--c-badge-size-xs-dot-height` | `4px` |
| `--c-badge-size-sm-dot-height` | `5px` |
| `--c-badge-size-md-dot-height` | `6px` |
| `--c-badge-size-lg-dot-height` | `7px` |
| `--c-badge-size-xl-dot-height` | `8px` |
| `--c-badge-size-xs-space` | `0px` |
| `--c-badge-size-sm-space` | `var(--c-sys-space-1)` |
| `--c-badge-size-md-space` | `var(--c-sys-space-3)` |
| `--c-badge-size-lg-space` | `var(--c-sys-space-3)` |
| `--c-badge-size-xl-space` | `var(--c-sys-space-4)` |
| `--c-badge-size-xs-padding` | `0 var(--c-sys-space-3)` |
| `--c-badge-size-sm-padding` | `0 var(--c-sys-space-3)` |
| `--c-badge-size-md-padding` | `0 var(--c-sys-space-4)` |
| `--c-badge-size-lg-padding` | `0 var(--c-sys-space-4)` |
| `--c-badge-size-xl-padding` | `0 10px` |
| `--c-badge-size-xs-height` | `20px` |
| `--c-badge-size-sm-height` | `20px` |
| `--c-badge-size-md-height` | `24px` |
| `--c-badge-size-lg-height` | `28px` |
| `--c-badge-size-xl-height` | `32px` |
| `--c-badge-size-xs-border-radius` | `20px` |
| `--c-badge-size-sm-border-radius` | `20px` |
| `--c-badge-size-md-border-radius` | `24px` |
| `--c-badge-size-lg-border-radius` | `28px` |
| `--c-badge-size-xl-border-radius` | `32px` |
| `--c-badge-bg-color` | `rgb(var(--c-danger-7))` |
| `--c-badge-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-status-default-bg-color` | `#e0e0e0` |
| `--c-badge-status-default-text-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-badge-status-info-bg-color` | `var(--c-sys-color-status-info)` |
| `--c-badge-status-info-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-status-success-bg-color` | `var(--c-sys-color-status-success)` |
| `--c-badge-status-success-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-status-warning-bg-color` | `var(--c-sys-color-status-warning)` |
| `--c-badge-status-warning-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-status-danger-bg-color` | `rgb(var(--c-danger-7))` |
| `--c-badge-status-danger-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-status-primary-bg-color` | `var(--c-sys-color-action-primary)` |
| `--c-badge-status-primary-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-status-secondary-bg-color` | `rgb(var(--c-gray-6))` |
| `--c-badge-status-secondary-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-status-tertiary-bg-color` | `rgb(var(--c-gray-7))` |
| `--c-badge-status-tertiary-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-badge-variant-outline-bg-color` | `transparent` |
| `--c-badge-variant-outline-text-color` | `var(--c-sys-color-content-danger)` |
| `--c-badge-variant-outline-status-info-text-color` | `var(--c-sys-color-content-info)` |
| `--c-badge-variant-outline-status-success-text-color` | `var(--c-sys-color-content-success)` |
| `--c-badge-variant-outline-status-warning-text-color` | `var(--c-sys-color-content-warning)` |
| `--c-badge-variant-outline-status-danger-text-color` | `var(--c-sys-color-content-danger)` |
| `--c-badge-variant-outline-status-primary-text-color` | `var(--c-sys-color-content-brand)` |
| `--c-badge-variant-outline-status-default-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-badge-variant-outline-status-secondary-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-badge-variant-outline-status-tertiary-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-badge-border-color` | `var(--c-sys-color-surface-default)` |
| `--c-badge-offset` | `2px` |
| `--c-badge-ring-width` | `2px` |

Filled badge text follows Button: primary, info, success, warning, danger and secondary use `content-on-dark`; tertiary uses `content-on-dark` in light mode and `content-on-bright` in dark mode. Default notification badges use red backgrounds and white text; the neutral background remains `#e0e0e0`.

Colored outline text and borders follow Button, using the matching `content-brand`, `content-info`, `content-success`, `content-warning` and `content-danger` semantic roles; secondary and tertiary outlines use `content-secondary` for readability. `variant-outline-bg-color` works for every status and defaults to transparent. The `color` prop overrides outline text and border; `text-color` overrides text further. Both preserve control through the background variable. Recheck contrast after customizing foreground or background.

### Type definitions

The component exports the following types

```ts
import type { BadgeInstance } from '@cedar-design/ui'
```

### Color override boundaries

The bg-color fallback and danger fill use red backgrounds with white text: danger level 7 in light mode and level 4 in dark mode. Fixed neutral light gray and secondary/tertiary gray levels are intentional component colors. Override the border-color isolation ring to match the host surface. Callers must ensure contrast for custom color/text-color values.
