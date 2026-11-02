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

### Split wrapping and content state

Change wrapping, direction and order after typing a draft. A separator stays with its preceding item and may appear at a line end.

<demo src="./__demos__/split-wrapping.vue"></demo>

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

## Reading direction

Inherits the nearest `dir="ltr|rtl"`. Row layout follows reading order; column layout stays top to bottom. Flex-start/flex-end follows the corresponding flex axis. The size pair always means [rowGap,columnGap], including in RTL. Wrapping and split slots preserve content order. Direction changes do not reverse data or recreate children with stable keys.

## API

### Children and size boundaries

Keyed Fragment groups preserve their local child identity when reordered. Pure whitespace, empty text, comments and empty Fragments do not create spacing items; visible text, zero and empty elements remain. Empty split content also produces no separator item.

With wrap and split, separators stay with their preceding item. This permits trailing separators at line ends; it does not suppress separators at every line boundary. Items wider than the available line may still overflow. Without wrap, the existing Flex gap and justify allocation are unchanged. Layout switches preserve content nodes.

block switches the container between flex and inline-flex. align=stretch stretches item wrappers, not every control inside them: use the child control's block option or width:100% when required.

Invalid size shapes, negative/nonfinite numbers or tuples without exactly two lengths fall back to md and receive development diagnostics. Tuple entries are lengths, not presets. CSS var/calc expressions remain supported; CSS grammar and resolved values belong to the browser.


### Space Props

### Props

| Arguments | Description | Type | Default |
| --------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------- |
| direction | Row/column order of children, default row; column stacks them vertically. Does not use horizontal/vertical values | _string_ | `row` |
| justify | Main axis arrangement, Can be set to `flex-start` `flex-end` `center` `space-around` `space-between` `space-evenly` | _string_ | `flex-start` |
| align | Cross-axis alignment: `flex-start`, `flex-end`, `center`, `stretch` or `baseline`. When omitted, inferred from `direction`: `row` → `center`, `column` → `stretch` | _string_ | `-` |
| size | Gap: `xs`/`sm`/`md`/`lg`/`xl` or `[rowGap, columnGap]`, supporting CSS lengths and shorthand | _string \| number \| [string \| number, string \| number]_ | `md` |
| wrap | Whether to exceed the line break | _boolean_ | `false` |
| block | Whether to use a flex container | _boolean_ | `true` |

### Slots

| Slot | Description | Arguments |
| --------- | ---------- | ---- |
| `default` | Content of space | `-` |
| `split` | Range separator | `-` |

### Type definitions

```ts
import type { SpaceProps, SpaceSize, SpaceDirection, SpaceAlign, SpaceJustify, SpaceInternalSize, SpaceInstance } from '@cedar-design/ui'
```

### Style variables

| Variable | Default |
| --- | --- |
| `--c-space-size-xs-row-gap` | `var(--c-sys-space-2)` |
| `--c-space-size-xs-column-gap` | `var(--c-sys-space-2)` |
| `--c-space-size-sm-row-gap` | `var(--c-sys-space-4)` |
| `--c-space-size-sm-column-gap` | `var(--c-sys-space-3)` |
| `--c-space-size-md-row-gap` | `var(--c-sys-space-5)` |
| `--c-space-size-md-column-gap` | `var(--c-sys-space-4)` |
| `--c-space-size-lg-row-gap` | `var(--c-sys-space-6)` |
| `--c-space-size-lg-column-gap` | `var(--c-sys-space-5)` |
| `--c-space-size-xl-row-gap` | `var(--c-sys-space-8)` |
| `--c-space-size-xl-column-gap` | `var(--c-sys-space-6)` |

## Shared implementation and platform boundaries

Each platform maintains complete local source without a common core or shared instances/reactive state. Update both implementations together. Read-only parity checks cover bodies, props, child flattening, main styles, size tokens and paired tests. Only installation entries/namespaces are adapted locally.

Both default to `size="md"`, `wrap=false`, `block=true` and `direction="row"`. Omitted align means center for row and stretch for column. Maple callers previously relying on default wrapping must add `wrap` explicitly.

`size` supports all five presets, numbers/numeric strings in px, CSS lengths/expressions such as 1rem or var(--gap), and `[rowGap, columnGap]`. Arrays are always row then column; direction does not swap them. Array entries are lengths, not preset names. Shared [row,column] presets: xs=[4,4], sm=[8,6], md=[12,8], lg=[16,12], xl=[24,16] px, overridable through CSS variables.
