---
permalink: /en/components/row/
lang: en-US
---

# Row

24-column Flex layout. Row manages gutters and alignment; Col manages spans, offsets, ordering and breakpoints. Use Grid for CSS Grid collapse and suffix items.

> **Choosing a layout**
>
> - Grid + GridItem: Use for form columns and card grids with consistent column widths, spans, responsive column counts, or collapsed rows and suffix items.
> - Row + Col: Use for 24-column Flex layouts that need horizontal/vertical alignment, wrapping control, fixed and flexible widths together, or responsive ordering. Row controls the row; Col controls width, offset and order.
> - Space: Use for simple groups of buttons, tags or text that only need spacing, direction and alignment. Use native Flex for more flexible width allocation.

## Basic examples

### 24-column layout

<demo src="./__demos__/basic.vue"></demo>

## Layout and arrangement

### Two-axis and responsive gutters

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `gutter` | Gutter: number, responsive object or [horizontal, vertical] | Two-axis and responsive gutters, Horizontal and vertical alignment, Wrapping and plain container mode |
| `justify` | Horizontal alignment | Horizontal and vertical alignment, Layout Lab |
| `align` | Vertical alignment | Horizontal and vertical alignment, Layout Lab |
| `wrap` | Wrap columns | Wrapping and plain container mode |
| `div` | Use Row and Col as plain divs without layout styles | Wrapping and plain container mode |
<!-- demo-config-notes:end -->


<demo src="./__demos__/gutter.vue"></demo>

### Horizontal and vertical alignment

<demo src="./__demos__/alignment.vue"></demo>

### Wrapping and plain container mode

<demo src="./__demos__/wrap.vue"></demo>

### Nested rows and isolated gutters

<demo src="./__demos__/nested.vue"></demo>

<!-- same-source-api:start -->

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| gutter | Gutter: number, responsive object or [horizontal, vertical] | `RowGutter` | `0` |
| justify | Horizontal alignment | `start / center / end / space-around / space-between` | `start` |
| align | Vertical alignment | `start / center / end / stretch` | `start` |
| wrap | Wrap columns | `boolean` | `true` |
| div | Use Row and Col as plain divs without layout styles | `boolean` | `false` |

### Events

| Event | Description |
| --- | --- |
| click | Native MouseEvent, emitted once per click |

### Slots

| Slot | Description |
| --- | --- |
| default | Layout content |

### Methods

| Method | Description |
| --- | --- |
<!-- same-source-api:end -->

The wrap example toggles wrapping and plain `div` mode independently. Plain mode removes Row layout styles and child Col spacing; gutter controls distinguish horizontal spacing from vertical spacing. Row uses Flex, not CSS Grid.

### Layout Lab

<demo src="./__demos__/layout-lab.vue"></demo>

## API

<!-- same-source-api:start -->
### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| gutter | Gutter: number, responsive object or [horizontal, vertical] | `RowGutter` | `0` |
| justify | Horizontal alignment | `start / center / end / space-around / space-between` | `start` |
| align | Vertical alignment | `start / center / end / stretch` | `start` |
| wrap | Wrap columns | `boolean` | `true` |
| div | Use Row and Col as plain divs without layout styles | `boolean` | `false` |

### Events

| Event | Description |
| --- | --- |
| click | Native MouseEvent, emitted once per click |

### Slots

| Slot | Description |
| --- | --- |
| default | Layout content |

### Methods

| Method | Description |
| --- | --- |
<!-- same-source-api:end -->

Wrapping examples compare wrapped and ordinary `div` modes. Ordinary mode removes Row layout and child Col spacing. Gap examples distinguish horizontal/vertical spacing. Row uses Flex, not CSS Grid.

## Responsiveness and accessibility

Breakpoints use the browser viewport: xs is the base; sm ≥576, md ≥768, lg ≥992, xl ≥1200 and xxl ≥1600px. Configured values resolve downward from the largest matching breakpoint. SSR starts with xs and responds to the viewport after mounting. Grid collapsing and dynamic ordering are calculated after mounting. These layout containers add no keyboard shortcuts; callers supply content semantics and focusable elements. There are no public methods or dedicated theme tokens.

## Imports

Grid contains only Grid.Item. Row and Col are independent components with their own source, styles, navigation, documentation and demos. Grid.Row/Grid.Col, Row/Col re-exports from Grid and GridRowInstance/GridColInstance are removed. Import them from the library root or separate row/col entries. Installing Grid no longer registers Row/Col automatically.
