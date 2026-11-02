---
permalink: /en/components/divider/
lang: en-US
---

# Divider

Separate content sections in lists and layouts.

## Basic examples

### Basic Usage

Separate adjacent content sections.

<demo src="./__demos__/basic.vue"></demo>

## Layout and arrangement

### Vertical Divider

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `orientation` | Horizontal/vertical orientation of the divider itself, default horizontal; does not control text alignment | Vertical Divider |
| `type` | Line style | Vertical Divider |
| `text-align` | Text position along the line; start/end follow logical direction | Vertical Divider |
| `description` | Description text; the default slot takes priority | Vertical Divider |
<!-- demo-config-notes:end -->


Set `orientation="vertical"` in a flex container with available height. Text follows the vertical direction.

<demo src="./__demos__/vertical.vue"></demo>

## Content and presentation

### Line size, style and color

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `inset` | Inset along the line: left/right horizontally, top/bottom vertically | Line size, style and color |
| `spacing` | Outer spacing across the line: top/bottom horizontally, left/right vertically | Line size, style and color |
| `orientation` | Horizontal/vertical orientation of the divider itself, default horizontal; does not control text alignment | Line size, style and color |
| `type` | Line style | Line size, style and color |
| `thickness` | Line width in px; theme defaults to 1px; hairline takes priority | Line size, style and color |
| `color` | Line color; defaults to the theme border color | Line size, style and color |
<!-- demo-config-notes:end -->


Compare thickness or insets, line style and color. Text and custom content remain separate.

<details>
<summary>Configuration details and limits</summary>

#### Spacing & Inset

Compare five presets, numbers, CSS lengths and asymmetric pairs. The vertical example shows how spacing follows orientation.

#### Line Style

Compare solid, dashed, dotted and double lines using `type`. Use a `thickness` of at least 3px for a visible double line.

#### Color, Thickness & Opacity

Customize the line using `color`, `thickness` and `opacity`. Zero opacity preserves layout; `hairline` takes priority over `thickness`.

</details>

<demo src="./__demos__/line-appearance-comparison.vue"></demo>

### With Text

Use `description` and `text-align` to position text at the start, center or end. Toggle RTL to inspect logical start/end alignment.

<demo src="./__demos__/with-text.vue"></demo>

## Customization and slots

### Custom Content

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `type` | Line style | Custom Content |
| `description` | Description text; the default slot takes priority | Custom Content |
<!-- demo-config-notes:end -->


The default slot takes priority over `description`. Provide padding for custom content in the caller.

<demo src="./__demos__/custom.vue"></demo>

## Interaction and control

### Live Properties

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `orientation` | Horizontal/vertical orientation of the divider itself, default horizontal; does not control text alignment | Live Properties |
| `opacity` | Opacity of the entire divider, including text, from 0 to 1; zero preserves layout | Live Properties |
| `hairline` | Scale the theme line width by half; 0.5px with the default theme | Live Properties |
| `thickness` | Line width in px; theme defaults to 1px; hairline takes priority | Live Properties |
| `inset` | Inset along the line: left/right horizontally, top/bottom vertically | Live Properties |
| `spacing` | Outer spacing across the line: top/bottom horizontally, left/right vertically | Live Properties |
<!-- demo-config-notes:end -->


Toggle orientation, default slot text, opacity and hairline to inspect updates and restoration.

<demo src="./__demos__/live-properties.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"`. Horizontal text start/end follows reading order; vertical start/end remains top/bottom. Inset controls along-line indentation and spacing controls perpendicular margins. Paired horizontal inset and vertical spacing uses logical start/end. Vertical borders use inline start; hairline, border type and aria-orientation retain their meaning. Direction changes preserve content nodes.

### Content height and minimum thickness

Explicit thickness accepts finite numbers greater than or equal to 1. hairline still takes priority, using half the theme width. Values below 1 (including zero and negative values), and non-finite values, are ignored and use the theme width; development builds warn.

Multiline descriptions and custom content occupy their full height, including spacing=0. Subsequent content stays below the divider.

<demo src="./__demos__/content-flow.vue"></demo>

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `orientation` | Horizontal/vertical orientation of the divider itself, default horizontal; does not control text alignment | `horizontal` \| `vertical` | `horizontal` |
| `type` | Line style | `solid` \| `dashed` \| `dotted` \| `double` | `solid` |
| `text-align` | Text position along the line; start/end follow logical direction | `start` \| `center` \| `end` | `center` |
| `description` | Description text; the default slot takes priority | `string` | — |
| `inset` | Inset along the line: left/right horizontally, top/bottom vertically | `DividerSize` | — |
| `spacing` | Outer spacing across the line: top/bottom horizontally, left/right vertically | `DividerSize` | `md` |
| `thickness` | Line width in px; theme defaults to 1px; hairline takes priority | `number` | — |
| `hairline` | Scale the theme line width by half; 0.5px with the default theme | `boolean` | `false` |
| `color` | Line color; defaults to the theme border color | `string` | — |
| `opacity` | Opacity of the entire divider, including text, from 0 to 1; zero preserves layout | `number` | — |

### Spacing values

`DividerSize = number | string | [number | string] | [number | string, number | string]`

`inset` controls the ends of the line; `spacing` controls the outer gap between the line and adjacent content. Both accept presets `xs`, `sm`, `md`, `lg`, `xl`, a number in px, a CSS length, or an array. A scalar or single-item array applies to both ends; `[start, end]` sets each end separately. Array entries are lengths, not preset names.

| Direction | inset array order | spacing array order |
| --- | --- | --- |
| horizontal | Inline start/end inset; right/left in RTL | Top/bottom margin |
| vertical | Top/bottom inset | Inline start/end margin; right/left in RTL |

`inset` has no `inset` by default; `spacing` defaults to the platform’s `md` `spacing`. Presets use platform theme tokens, so pixel values may differ.


Development builds diagnose invalid orientation, text-align, type, size structure, thickness and opacity. Invalid enums use their defaults; invalid inset is omitted, invalid spacing uses md, and invalid opacity is omitted. Opacity must be finite and within [0,1]. Size arrays contain one or two lengths, without preset names inside arrays. Finite negative margins and CSS var/calc expressions remain supported; the browser parses CSS expressions.

### Slots

| Slot | Description |
| --- | --- |
| `default` | Custom divider content; overrides description |

## Type definitions

```ts
import type { DividerProps, DividerInstance, DividerSize, DividerSizePreset, DividerOrientation, DividerTextAlign, DividerType } from '@cedar-design/ui'
```

### Style variables

| Variable | Default |
| --- | --- |
| `--c-divider-color` | `var(--c-sys-color-border-default)` |
| `--c-divider-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-divider-border-width` | `1px` |
| `--c-divider-text-padding` | `16px` |
| `--c-divider-text-align-inset` | `24px` |
| `--c-divider-orientation-vertical-inset-xs` | `2px` |
| `--c-divider-orientation-horizontal-inset-xs` | `12px` |
| `--c-divider-orientation-vertical-spacing-xs` | `4px` |
| `--c-divider-orientation-horizontal-spacing-xs` | `8px` |
| `--c-divider-orientation-vertical-inset-sm` | `4px` |
| `--c-divider-orientation-horizontal-inset-sm` | `16px` |
| `--c-divider-orientation-vertical-spacing-sm` | `8px` |
| `--c-divider-orientation-horizontal-spacing-sm` | `12px` |
| `--c-divider-orientation-vertical-inset-md` | `6px` |
| `--c-divider-orientation-horizontal-inset-md` | `24px` |
| `--c-divider-orientation-vertical-spacing-md` | `12px` |
| `--c-divider-orientation-horizontal-spacing-md` | `16px` |
| `--c-divider-orientation-vertical-inset-lg` | `8px` |
| `--c-divider-orientation-horizontal-inset-lg` | `32px` |
| `--c-divider-orientation-vertical-spacing-lg` | `16px` |
| `--c-divider-orientation-horizontal-spacing-lg` | `24px` |
| `--c-divider-orientation-vertical-inset-xl` | `12px` |
| `--c-divider-orientation-horizontal-inset-xl` | `40px` |
| `--c-divider-orientation-vertical-spacing-xl` | `24px` |
| `--c-divider-orientation-horizontal-spacing-xl` | `32px` |

Presets read the active platform theme. Text spacing is 16px on desktop and 8px on mobile.
