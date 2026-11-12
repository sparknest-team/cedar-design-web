---
lang: en-US
permalink: /en/components/list/
---

# List

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Size

- `size`: Controls the component size.

<demo src="./__demos__/size.vue"></demo>

## Content and layout

### Prefix Suffix

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `bordered` | Outer border | Actions Layout |
| `data` | Data consumed by item slot | Actions Layout |
<!-- demo-config-notes:end -->


Preview configuration: `shape="square"`.

<demo src="./__demos__/prefix-suffix.vue"></demo>

### Actions Layout

- `data`: Supplies the example data.

<demo src="./__demos__/actions-layout.vue"></demo>

## Scrolling and virtualization

### Bounded Scroll

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `data` | Data consumed by item slot | Bounded Scroll, Virtual List, Virtual Navigation |
| `virtual-list-props` | Data virtualization; ignored when default slot exists | Virtual List, Virtual Navigation |
| `max-height` | Maximum ordinary viewport height; number in px or CSS length, zero means unlimited | Bounded Scroll |
| `scrollbar` | Ordinary viewport custom scrollbar; false uses native scrolling | Bounded Scroll |
| `size` | Implemented sizes only; xs/xl are not supported | Bounded Scroll |
| `split` | Item/header/footer separators, independent of border | Bounded Scroll |
<!-- demo-config-notes:end -->


- `data`: Supplies the example data.
- `size`: Controls the component size.

<demo src="./__demos__/bounded-scroll.vue"></demo>

### Virtual List

- `data`: Supplies the example data.

<demo src="./__demos__/virtual-list.vue"></demo>

### Virtual Navigation

- `data`: Supplies the example data.

<demo src="./__demos__/virtual-navigation.vue"></demo>

## Lifecycle

### Virtual Lifecycle

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `data` | Data consumed by item slot | Virtual Lifecycle |
| `virtual-list-props` | Data virtualization; ignored when default slot exists | Virtual Lifecycle |
<!-- demo-config-notes:end -->

On KeepAlive reactivation, the virtual list restores its last recorded vertical and horizontal scroll positions within the current scrollable range. A new scroll command issued during reactivation takes precedence.


- `data`: Supplies the example data.

<demo src="./__demos__/virtual-lifecycle.vue"></demo>

## API

The virtual list covers the viewport before prerendering additional items on either side according to `buffer`; `buffer=0` is valid. `estimatedSize` must be finite and positive, including values below 1; invalid values fall back to 30px. `fixedSize` can change dynamically. Variable-height mode uses measured and estimated sizes and, when available, `ResizeObserver` to watch measurable mounted roots. The `item` slot receives the original index and unknown data, may return multiple measurable root nodes, and should provide a stable `itemKey`; measurement uses the combined root bounds for each item. To expose the complete collection to assistive technology, business rows can supply `aria-setsize` and `aria-posinset` using the actual data.

Server rendering currently fails when the same node combines `v-for` and `v-memo` inside the `default`, `header`, `footer`, `empty` or `item` slot. Data mode is affected with or without virtualization. Temporarily remove `v-memo` from that node and verify update behavior.

### List Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| data | Data consumed by item slot | unknown[] | undefined |
| size | Implemented sizes only; xs/xl are not supported | 'sm' \| 'md' \| 'lg' | md |
| bordered | Outer border | boolean | true |
| split | Item/header/footer separators, independent of border | boolean | true |
| loading | Initial loading/refresh feedback, not pagination state | boolean | false |
| max-height | Maximum ordinary viewport height; number in px or CSS length, zero means unlimited | number \| string | 0 |
| virtual-list-props | Data virtualization; ignored when default slot exists | ListVirtualListProps | undefined |
| scrollbar | Ordinary viewport custom scrollbar; false uses native scrolling | boolean \| ListScrollbarProps | true |

Virtual lists use a dedicated viewport without nesting a custom scrollbar. virtualListProps.height overrides maxHeight; with neither, height defaults to 200px. Numeric and unit-bearing CSS lengths are accepted. Invalid/nonpositive max-height does not constrain height.

ListVirtualListProps supports height, threshold, fixedSize, estimatedSize, buffer, itemKey and component. List.data supplies data. Counts at or below threshold render all items. Variable heights use measurements and estimatedSize; buffer controls overscan rows.

ListScrollbarProps supports type: 'track'|'embed', outerClass, outerStyle, hide, disableHorizontal and disableVertical. JavaScript object fields use camelCase.

### List Events / Methods

- scroll(event: Event): one notification per real scroll event.
- scrollIntoView({ index?, key?, align }): virtual-list positioning. index overrides key; align is top/bottom/auto. auto does nothing for a fully visible item, otherwise scrolls the minimum distance required. Invalid targets or nonvirtual mode do nothing.

### List Slots

List slots: default (overrides data), item({ item, index }), header, footer, empty. Empty state appears only without a default slot/data and while not loading. ListItem prefix/default/suffix retain list-item semantics without managing buttons/business interactions.

## Types

ListProps、ListSize、ListVirtualListProps、ListScrollbarProps、ListExpose、ListSlots、ListEmits、ListInstance、ListItemInstance。

List handles display and an optional virtual viewport. Compose InfiniteScroll status/target behavior for pagination rather than duplicating its loading state machine inside List.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-list-background` | `transparent` | `background` |
| `--c-list-border-color` | `var(--c-color-neutral-3)` | `border`, `border-bottom`, `border-top` |
| `--c-list-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-list-border-width` | `1px` | `border`, `border-bottom`, `border-top` |
| `--c-list-empty-color` | `var(--c-list-text-color)` | `color` |
| `--c-list-empty-padding` | `16px` | `padding` |
| `--c-list-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-list-font-size-header` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-list-font-weight-header` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-list-item-prefix-margin-right` | `var(--c-spacing-8)` | `margin-inline-end` |
| `--c-list-item-suffix-margin-left` | `var(--c-spacing-8)` | `margin-inline-start` |
| `--c-list-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-list-line-height-header` | `1.5` | `line-height` |
| `--c-list-loading-padding` | `0px` | `padding` |
| `--c-list-size-lg-padding-horizontal-footer` | `var(--c-list-size-lg-padding-horizontal-item)` | `padding` |
| `--c-list-size-lg-padding-horizontal-header` | `var(--c-spacing-8)` | `padding` |
| `--c-list-size-lg-padding-horizontal-item` | `var(--c-spacing-8)` | `padding` |
| `--c-list-size-lg-padding-vertical-footer` | `var(--c-list-size-lg-padding-vertical-item)` | `padding` |
| `--c-list-size-lg-padding-vertical-header` | `var(--c-spacing-7)` | `padding` |
| `--c-list-size-lg-padding-vertical-item` | `17px` | `padding` |
| `--c-list-size-md-padding-horizontal-footer` | `var(--c-list-size-md-padding-horizontal-item)` | `padding` |
| `--c-list-size-md-padding-horizontal-header` | `var(--c-spacing-8)` | `padding` |
| `--c-list-size-md-padding-horizontal-item` | `var(--c-spacing-8)` | `padding` |
| `--c-list-size-md-padding-vertical-footer` | `var(--c-list-size-md-padding-vertical-item)` | `padding` |
| `--c-list-size-md-padding-vertical-header` | `var(--c-spacing-6)` | `padding` |
| `--c-list-size-md-padding-vertical-item` | `13px` | `padding` |
| `--c-list-size-sm-padding-horizontal-footer` | `var(--c-list-size-sm-padding-horizontal-item)` | `padding` |
| `--c-list-size-sm-padding-horizontal-header` | `var(--c-spacing-8)` | `padding` |
| `--c-list-size-sm-padding-horizontal-item` | `var(--c-spacing-8)` | `padding` |
| `--c-list-size-sm-padding-vertical-footer` | `var(--c-list-size-sm-padding-vertical-item)` | `padding` |
| `--c-list-size-sm-padding-vertical-header` | `var(--c-spacing-4)` | `padding` |
| `--c-list-size-sm-padding-vertical-item` | `9px` | `padding` |
| `--c-list-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-list-text-color-header` | `var(--c-color-text-1)` | `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-list-background: transparent;
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
