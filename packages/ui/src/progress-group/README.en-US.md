---
lang: en-US
permalink: /en/components/progress-group/
---

# Progress Group

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `max`: Sets the upper bound.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Progress group sizes and colors

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `items` | Segment data | Progress group sizes and colors |
| `size` | Track size | Progress group sizes and colors |
| `color` | Default color for segments without their own color | Progress group sizes and colors |
| `show-text` | Show the summed percentage | Progress group sizes and colors |
<!-- demo-config-notes:end -->


Compare segment sizes and color overrides separately from orientation, circular layouts, overflow and keyboard interaction.

<demo src="./__demos__/appearance-comparison.en-US.vue"></demo>

## Layout and arrangement

### Orientation

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `items` | Segment data | Orientation |
| `show-text` | Show the summed percentage | Orientation |
| `orientation` | Horizontal/vertical orientation of the linear progress track, default horizontal; only used for mode=line | Orientation |
| `size` | Track size | Orientation |
<!-- demo-config-notes:end -->


- `size`: Controls the component size.

<demo src="./__demos__/orientation.vue"></demo>

## Content and presentation

### Circle

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `mode` | Display mode | Circle |
| `items` | Segment data | Circle |
| `show-text` | Show the summed percentage | Circle |
| `circle-size` | Diameter in circle mode | Circle |
| `stroke-width` | Track width in circle mode | Circle |
<!-- demo-config-notes:end -->


Preview configuration: `mode="circle"`, `:items="items"`, `show-text`, `:circle-size="168"`.

<demo src="./__demos__/circle.vue"></demo>

## Interaction and control

### Overflow Keyboard

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `items` | Segment data | Overflow Keyboard |
| `max` | Total used to calculate segment proportions | Overflow Keyboard |
| `tooltip` | Whether to show segment hover/focus hints | Overflow Keyboard |
| `show-text` | Show the summed percentage | Overflow Keyboard |
| `aria-label` | Accessible group name | Overflow Keyboard |
| `mode` | Display mode | Overflow Keyboard |
<!-- demo-config-notes:end -->


- `max`: Sets the upper bound.

<demo src="./__demos__/overflow-keyboard.vue"></demo>

<demo src="./__demos__/slots.vue"></demo>

## Reading direction

Horizontal segments, highlights and hints share the same logical origin. Vertical progress remains top to bottom; rings retain their existing angles and data order.

## Usage notes

### Geometry and motion
Built-in effects respect `prefers-reduced-motion: reduce`. Track thickness applies to both horizontal and vertical layouts; circle geometry remains prop-driven.


`orientation` controls linear layout only; circle legend arrangement is unchanged. Circle `stroke-width` is a number in the 100×100 SVG coordinate system, not a CSS length. A `text` slot is displayed even when `show-text=false`. When `item.slot` is set, its prefix and `-leading`, `-label`, `-trailing` slots are used; missing dynamic slots use built-in content rather than generic `item-*` slots.

The pointer can enter and remain over the tooltip; after leaving, the focused segment’s tooltip returns. Escape closes it. Tooltip content is descriptive and should not contain interactive form controls.

## API

### ProgressGroup Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| aria-label | Accessible group name | `string` | — |
| items | Segment data | `ProgressGroupItem[]` | `[]` |
| mode | Display mode | `'line' \| 'circle'` | `'line'` |
| max | Total used to calculate segment proportions | `number` | `100` |
| show-text | Show the summed percentage | `boolean` | `false` |
| size | Track size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| color | Default color for segments without their own color | `string` | `content-brand` |
| circle-size | Diameter in circle mode | `number \| string` | `120` |
| stroke-width | Track width in circle mode | `number` | `8` |
| tooltip | Whether to show segment hover/focus hints | `boolean` | `true` |
| orientation | Horizontal/vertical orientation of the linear progress track, default horizontal; only used for mode=line | `'horizontal' \| 'vertical'` | `'horizontal'` |

### ProgressGroup Slots

| Name | Slot arguments |
| --- | --- |
| text | `{ percent, value, max }` |
| tooltip | `{ item, index, percent }` |
| item / item-leading / item-label / item-trailing | `{ item, index, percent }` |

## Types

### Item

| Prop | Description | Type |
| --- | --- | --- |
| label | Legend label | `string` |
| value | Segment value | `number` |
| color | Segment color | `string` |
| icon | Legend icon component | `Component` |
| slot | Custom slot-name prefix | `string` |
| class | Additional legend item class | `string` |
| tip | Custom hint text | `string` |

## CSS Variables

Graphic markers default to system content-brand. Color precedence: item.color → component color → default. Check custom-color contrast; geometry tokens retain platform differences.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-progress-group-dot-size` | `var(--c-sys-space-4)` | `height`, `width` |
| `--c-progress-group-font-size` | `var(--c-sys-font-size-sm)` | `font-size` |
| `--c-progress-group-gap` | `var(--c-sys-space-3)` | `gap` |
| `--c-progress-group-item-gap` | `var(--c-sys-space-2)` | `gap` |
| `--c-progress-group-muted-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-progress-group-radius` | `9999px` | `border-radius`, `clip-path` |
| `--c-progress-group-size-lg-thickness` | `12px` | `height`, `width` |
| `--c-progress-group-size-md-thickness` | `8px` | `height`, `width` |
| `--c-progress-group-size-sm-thickness` | `4px` | `height`, `width` |
| `--c-progress-group-size-xl-thickness` | `16px` | `height`, `width` |
| `--c-progress-group-size-xs-thickness` | `2px` | `height`, `width` |
| `--c-progress-group-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-progress-group-text-font-weight` | `var(--c-sys-font-weight-medium)` | `font-weight` |
| `--c-progress-group-tooltip-bg` | `var(--c-sys-color-surface-tooltip)` | `background` |
| `--c-progress-group-tooltip-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-progress-group-tooltip-duration` | `var(--c-sys-motion-duration-fast)` | `animation` |
| `--c-progress-group-tooltip-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-progress-group-tooltip-line-height` | `1.4` | `line-height` |
| `--c-progress-group-tooltip-max-width` | `240px` | `max-width` |
| `--c-progress-group-tooltip-offset` | `var(--c-sys-space-4)` | `bottom`, `height`, `inset-inline-start`, `width` |
| `--c-progress-group-tooltip-padding` | `5px var(--c-sys-space-4)` | `padding` |
| `--c-progress-group-tooltip-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-progress-group-track-color` | `var(--c-sys-color-state-hover)` | `background`, `stroke` |
| `--c-progress-group-transition-duration` | `var(--c-sys-motion-duration-standard)` | `animation`, `transition` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-progress-group-dot-size: var(--c-sys-space-4);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
