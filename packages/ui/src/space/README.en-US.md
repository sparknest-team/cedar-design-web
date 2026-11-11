---
lang: en-US
permalink: /en/components/space/
---

# Space

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Size

- `size`: Controls the component size.

<demo src="./__demos__/size.vue"></demo>

## Layout and arrangement

### Vertical

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `direction` | Row/column order of children, default row; column stacks them vertically. Does not use horizontal/vertical values | Vertical, Align, Layout Lab |
| `align` | Cross-axis alignment: `flex-start`, `flex-end`, `center`, `stretch` or `baseline`. When omitted, inferred from `direction`: `row` → `center`, `column` → `stretch` | Align, Layout Lab |
| `wrap` | Whether to exceed the line break | Wrap, Split |
| `size` | Gap: `xs`/`sm`/`md`/`lg`/`xl` or `[rowGap, columnGap]`, supporting CSS lengths and shorthand | Split, Layout Lab |
| `justify` | Main axis arrangement, Can be set to `flex-start` `flex-end` `center` `space-around` `space-between` `space-evenly` | Layout Lab |
<!-- demo-config-notes:end -->


- `direction`: Controls the content direction.

<demo src="./__demos__/vertical.vue"></demo>

### Align

- `direction`: Controls the content direction.
- `align`: Controls alignment on the cross axis.

<demo src="./__demos__/align.vue"></demo>

### Wrap

<demo src="./__demos__/wrap.vue"></demo>

### Split

- `size`: Controls the component size.

<demo src="./__demos__/split.vue"></demo>

### Layout Lab

- `direction`: Controls the content direction.
- `size`: Controls the component size.

<demo src="./__demos__/layout-lab.vue"></demo>

## Interaction and control

### Interactive Layout

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `wrap` | Whether to exceed the line break | Interactive Layout |
| `size` | Gap: `xs`/`sm`/`md`/`lg`/`xl` or `[rowGap, columnGap]`, supporting CSS lengths and shorthand | Interactive Layout |
| `direction` | Row/column order of children, default row; column stacks them vertically. Does not use horizontal/vertical values | Interactive Layout |
<!-- demo-config-notes:end -->


- `size`: Controls the component size.
- `direction`: Controls the content direction.

<demo src="./__demos__/interactive-layout.vue"></demo>

## Separators and wrapping

### Split wrapping and content state

Change wrapping, direction and order after typing a draft. A separator stays with its preceding item and may appear at a line end.

<demo src="./__demos__/split-wrapping.vue"></demo>

## Reading direction

Inherits the nearest native `dir`. `direction="row"` follows reading order; `column` remains top to bottom. justify/align flex-start and flex-end follow their respective flex axes. `size=[rowGap,columnGap]` always describes row and `column` gaps without swapping in RTL. Wrapping and split slots follow content order. Direction changes do not reverse data or recreate children with stable keys.

## API

### Children and size boundaries

Reordering keyed Fragment groups preserves local child identity. Whitespace, empty text, comments and empty Fragments do not generate spacing items. Meaningful text, numeric zero and empty elements are retained. Empty split content does not produce separators.

With wrap and split, a separator follows the previous item and may appear at a line end; hiding separators at every line boundary is not guaranteed. An item wider than its available line may still overflow. Without wrap, existing Flex gap and justify allocation remain. Layout switches do not recreate content nodes.

block switches the container between flex and inline-flex. align=stretch stretches the internal item wrapper without guaranteeing that its control fills it. Use the child control's block or width:100% when needed.

Invalid size shapes, negative/nonfinite numbers and arrays other than pairs fall back to md with development diagnostics. Array entries are lengths and do not accept preset names. CSS var/calc expressions remain supported; the browser handles syntax and resolved lengths.

### Space Props

| Prop | Description | Type | Default |
| --------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------- |
| direction | Row/column order of children, default row; column stacks them vertically. Does not use horizontal/vertical values | _string_ | `row` |
| justify | Main axis arrangement, Can be set to `flex-start` `flex-end` `center` `space-around` `space-between` `space-evenly` | _string_ | `flex-start` |
| align | Cross-axis alignment: `flex-start`, `flex-end`, `center`, `stretch` or `baseline`. When omitted, inferred from `direction`: `row` → `center`, `column` → `stretch` | _string_ | `-` |
| size | Gap: `xs`/`sm`/`md`/`lg`/`xl` or `[rowGap, columnGap]`, supporting CSS lengths and shorthand | _string \| number \| [string \| number, string \| number]_ | `md` |
| wrap | Whether to exceed the line break | _boolean_ | `false` |
| block | Uses a flex container; false uses inline-flex | _boolean_ | `true` |

### Space Slots

| Slot | Description | Prop |
| --------- | ---------- | ---- |
| `default` | Content of space | `-` |
| `split` | Range separator | `-` |

## Types

```ts
import type { SpaceProps, SpaceSize, SpaceDirection, SpaceAlign, SpaceJustify, SpaceInternalSize, SpaceInstance } from '@cedar-design/ui-vue'
```

## Usage notes



Both default to `size="md"`, `wrap=false`, `block=true` and `direction="row"`. Omitted align means center for row and stretch for column. Maple callers previously relying on default wrapping must add `wrap` explicitly.

`size` supports all five presets, numbers/numeric strings in px, CSS lengths/expressions such as 1rem or var(--gap), and `[rowGap, columnGap]`. Arrays are always row then column; direction does not swap them. Array entries are lengths, not preset names. Shared [row,column] presets: xs=[4,4], sm=[8,6], md=[12,8], lg=[16,12], xl=[24,16] px, overridable through CSS variables.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-space-size-lg-column-gap` | `var(--c-sys-space-5)` | Component styling |
| `--c-space-size-lg-row-gap` | `var(--c-sys-space-6)` | Component styling |
| `--c-space-size-md-column-gap` | `var(--c-sys-space-4)` | Component styling |
| `--c-space-size-md-row-gap` | `var(--c-sys-space-5)` | Component styling |
| `--c-space-size-sm-column-gap` | `var(--c-sys-space-3)` | Component styling |
| `--c-space-size-sm-row-gap` | `var(--c-sys-space-4)` | Component styling |
| `--c-space-size-xl-column-gap` | `var(--c-sys-space-6)` | Component styling |
| `--c-space-size-xl-row-gap` | `var(--c-sys-space-8)` | Component styling |
| `--c-space-size-xs-column-gap` | `var(--c-sys-space-2)` | Component styling |
| `--c-space-size-xs-row-gap` | `var(--c-sys-space-2)` | Component styling |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-space-size-lg-column-gap: var(--c-sys-space-5);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
