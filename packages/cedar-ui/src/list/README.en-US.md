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


- `data`: Supplies the example data.

<demo src="./__demos__/virtual-lifecycle.vue"></demo>

## API

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

ListVirtualListProps supports height, threshold, fixedSize, estimatedSize, buffer, itemKey and component. Removed isStaticItemHeight is unsupported; List.data supplies data. Counts at or below threshold render all items. Variable heights use measurements and estimatedSize; buffer controls overscan rows.

ListScrollbarProps supports type: 'track'|'embed', outerClass, outerStyle, hide, disableHorizontal and disableVertical. JavaScript object fields use camelCase.

### Events / Methods

- scroll(event: Event): one notification per real scroll event.
- scrollIntoView({ index?, key?, align }): virtual-list positioning. index overrides key; align is top/bottom/auto. auto does nothing for a fully visible item, otherwise scrolls the minimum distance required. Invalid targets or nonvirtual mode do nothing.

### Slots

List slots: default (overrides data), item({ item, index }), header, footer, empty. Empty state appears only without a default slot/data and while not loading. ListItem prefix/default/suffix retain list-item semantics without managing buttons/business interactions.

### Types

ListProps、ListSize、ListVirtualListProps、ListScrollbarProps、ListExpose、ListSlots、ListEmits、ListInstance、ListItemInstance。

List handles display and an optional virtual viewport. Compose InfiniteScroll status/target behavior for pagination rather than duplicating its loading state machine inside List.

## Style variables

| Token | Default |
| --- | --- |
| `--c-list-background` | `transparent` |
| `--c-list-empty-padding` | `16px` |
| `--c-list-empty-color` | `var(--c-list-text-color)` |
| `--c-list-loading-padding` | `0px` |
| `--c-list-border-width` | `1px` |
| `--c-list-border-color` | `var(--c-color-neutral-3)` |
| `--c-list-border-radius` | `var(--c-border-radius-md)` |
| `--c-list-text-color` | `var(--c-color-text-1)` |
| `--c-list-font-size` | `var(--c-font-size-body-3)` |
| `--c-list-line-height` | `var(--c-line-height)` |
| `--c-list-text-color-header` | `var(--c-color-text-1)` |
| `--c-list-font-size-header` | `var(--c-font-size-title-1)` |
| `--c-list-font-weight-header` | `var(--c-font-weight-500)` |
| `--c-list-line-height-header` | `1.5` |
| `--c-list-size-sm-padding-vertical-header` | `var(--c-spacing-4)` |
| `--c-list-size-sm-padding-horizontal-header` | `var(--c-spacing-8)` |
| `--c-list-size-sm-padding-vertical-item` | `9px` |
| `--c-list-size-sm-padding-horizontal-item` | `var(--c-spacing-8)` |
| `--c-list-size-md-padding-vertical-header` | `var(--c-spacing-6)` |
| `--c-list-size-md-padding-horizontal-header` | `var(--c-spacing-8)` |
| `--c-list-size-md-padding-vertical-item` | `13px` |
| `--c-list-size-md-padding-horizontal-item` | `var(--c-spacing-8)` |
| `--c-list-size-lg-padding-vertical-header` | `var(--c-spacing-7)` |
| `--c-list-size-lg-padding-horizontal-header` | `var(--c-spacing-8)` |
| `--c-list-size-lg-padding-vertical-item` | `17px` |
| `--c-list-size-lg-padding-horizontal-item` | `var(--c-spacing-8)` |
| `--c-list-item-prefix-margin-right` | `var(--c-spacing-8)` |
| `--c-list-item-suffix-margin-left` | `var(--c-spacing-8)` |
| `--c-list-size-sm-padding-vertical-footer` | `var(--c-list-size-sm-padding-vertical-item)` |
| `--c-list-size-sm-padding-horizontal-footer` | `var(--c-list-size-sm-padding-horizontal-item)` |
| `--c-list-size-md-padding-vertical-footer` | `var(--c-list-size-md-padding-vertical-item)` |
| `--c-list-size-md-padding-horizontal-footer` | `var(--c-list-size-md-padding-horizontal-item)` |
| `--c-list-size-lg-padding-vertical-footer` | `var(--c-list-size-lg-padding-vertical-item)` |
| `--c-list-size-lg-padding-horizontal-footer` | `var(--c-list-size-lg-padding-horizontal-item)` |
