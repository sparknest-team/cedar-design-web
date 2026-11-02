---
lang: en-US
permalink: /en/components/layout/
---

# Layout

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Layout and arrangement

### Scroll

Preview configuration: `bordered`, `scrollable`.

<demo src="./__demos__/scroll.vue"></demo>

### Sider Options

- `has-sider`: Indicates that there is a Sider in the sub-element, which generally does not need to be specified. Used to avoid style flicker when rendering on the server side.

<demo src="./__demos__/sider-options.vue"></demo>

## Content and presentation

### Resize

Preview configuration: `:resize-directions="['right']"`.

<demo src="./__demos__/resize.vue"></demo>

### Collapse

- `has-sider`: Indicates that there is a Sider in the sub-element, which generally does not need to be specified. Used to avoid style flicker when rendering on the server side.

<demo src="./__demos__/collapse.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"` and supports runtime and nested overrides. Content inherits reading direction. Sider placement=left/right and physical ResizeBox handles keep their physical-side semantics. Nested headings and content may override dir locally.

## API

### Layout Props

| Parameter | Description | Type | Default |
| --------- | ------------------------------------------------------------------ | ------- | :----: |
| scrollable | Enable native scrolling on this element; requires constrained height | boolean | false |
| has-sider | Indicates that there is a Sider in the sub-element, which generally does not need to be specified. Used to avoid style flicker when rendering on the server side. | boolean | false |

### Layout-Header Slots

| Slot | Description | Arguments |
| ------- | :--: | ---- |
| default | Content | - |

### Layout-content Slots

| Slot | Description | Arguments |
| ------- | :--: | ---- |
| default | Content | - |

### Layout-Footer Slots

| Slot | Description | Arguments |
| ------- | :--: | ---- |
| default | Content | - |

### Layout-Sider Props

| Parameter | Description | Type | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------- | :-----: |
| theme | Theme color | 'dark' \| 'light' | 'light' |
| collapsed | Current collapsed state | boolean | - |
| default-collapsed | Default collapsed state | boolean | false |
| collapsible | Whether collapsing is enabled | boolean | false |
| width | Width | number \| string | 200 |
| collapsed-width | Collapsed width | number | 48 |
| reverse-arrow | Reverse the collapse arrow; useful for a right-side Sider | boolean | false |
| breakpoint | Responsive breakpoint; see responsive Grid | 'xxl' \| 'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs' | - |
| resize-directions | Replace the native aside with ResizeBox; this is the ResizeBox directions parameter. See ResizeBox | Array<'left' \| 'right' \| 'top' \| 'bottom'> | - |
| hide-trigger | Hide the bottom collapse trigger | boolean | false |

### Layout-Sider Events

| Event | Description | Arguments |
| ---------- | ---------------------------------------------------------------- | -------------------------------------------------------- |
| collapse | Expand/collapse event, from the collapse control or responsive changes | collapsed: boolean<br>type: 'clickTrigger'\|'responsive' |
| breakpoint | Responsive-breakpoint event | collapsed: boolean |

### Layout-Sider Slots

| Slot | Description | Arguments |
| ------- | :------------------: | ------------------ |
| trigger | Custom bottom collapse trigger | collapsed: boolean |

## Type definitions

The component exports the following types

```ts
import type { LayoutProps } from '@cedar-design/ui'
```

### Additional layout capabilities

| Component | Prop | Type | Default | Description |
| --- | --- | --- | --- | --- |
| Content | scrollable | boolean | false | Use this element as a native scroll container |
| Header / Footer / Sider | bordered | boolean | false | Show a border adjacent to the content |
| Sider | placement | 'left' / 'right' | 'left' | Sidebar placement; handles arrows automatically, while reverse-arrow remains supported |
| Sider | collapse-mode | 'width' / 'transform' | 'width' | Resize or translate content while collapsing |

Layout, Content and Sider emit `scroll`(event: Event) and expose `scrollTo(options: ScrollToOptions)` / `scrollTo(x: number, y: number)`. Sider scrolls its internal content node by default. `width` accepts numeric px or CSS lengths. Percentage widths with transform mode are discouraged; use definite lengths such as px/rem.

The collapse control is a native button supporting Tab, Enter and Space. With `collapsed-width="0"`, the hidden region is inert and the expansion entry stays at the sidebar edge. A custom trigger slot should contain display content without nested buttons.
