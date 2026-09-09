---
permalink: /en/components/pagination/
lang: en-US
---

# Pagination

Pagination with a shared API and container-responsive layout.

## Examples

### Basic and two-way binding

<demo src="./__demos__/basic.vue"></demo>

### Page window and ellipsis

<demo src="./__demos__/more-page-size.vue"></demo>

### Page size and shared selector options

<demo src="./__demos__/show-page-size.vue"></demo>

### Jumper and prefix/suffix slots

<demo src="./__demos__/show-jumper.vue"></demo>

### Five sizes and elevation

<demo src="./__demos__/size.vue"></demo>

### Simple mode

<demo src="./__demos__/simple.vue"></demo>

### Custom total slot

<demo src="./__demos__/show-total.vue"></demo>

### Full feature controls

<demo src="./__demos__/all.vue"></demo>

### Custom page slots and styles

<demo src="./__demos__/custom-page-button.vue"></demo>

### Disabled and hide on single page

<demo src="./__demos__/disabled.vue"></demo>

### Data changes and auto adjustment

<demo src="./__demos__/auto-adjust.vue"></demo>

### Container width and compact layout

<demo src="./__demos__/responsive.vue"></demo>

## API

<!-- same-source-api:start -->
### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| total | Total records (required) | `number` | `—` |
| current | Current page; v-model:current | `number` | `—` |
| default-current | Initial uncontrolled page | `number` | `1` |
| page-size | Page size; v-model:page-size | `number` | `—` |
| default-page-size | Initial uncontrolled page size | `number` | `10` |
| disabled | Disable all interactions | `boolean` | `false` |
| hide-on-single-page | Hide with at most one page | `boolean` | `false` |
| simple | Explicit simple mode | `boolean` | `false` |
| show-total | Show total | `boolean` | `false` |
| show-more | Append forward jump in full mode | `boolean` | `false` |
| show-jumper | Show separate jumper in full mode; simple mode includes input | `boolean` | `false` |
| show-page-size | Show page size selector | `boolean` | `false` |
| page-size-options | Positive integer size options | `number[]` | `[10, 20, 30, 40, 50]` |
| page-size-props | Shared selector configuration; cannot override value, options or size | `PaginationPageSizeProps` | `—` |
| size | Size of all controls | `'xs' / 'sm' / 'md' / 'lg' / 'xl'` | `'md'` |
| page-item-style | Base numeric page style | `CSSProperties` | `—` |
| active-page-item-style | Additional active numeric page style | `CSSProperties` | `—` |
| base-size | Base threshold for ellipsis in full mode | `number` | `6` |
| buffer-size | Pages on either side of current page | `number` | `2` |
| elevation | Page button shadow; true uses level 2 | `boolean / number` | `false` |
| responsive | Automatically use simple mode by container width | `boolean` | `true` |
| compact-breakpoint | Maximum container width for compact mode, in px | `number` | `480` |
| auto-adjust | Preserve first record on size change; clamp after total shrinks | `boolean` | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:current | Request current page update | `number` |
| change | Committed page change; paired with update:current | `number` |
| update:page-size | Request page size update | `number` |
| page-size-change | Committed size change; paired with update:page-size | `number` |

### Slots

| Slot | Description | Scope |
| --- | --- | --- |
| total | Total | `{ total: number }` |
| page-item | Numeric page | `{ page: number }` |
| page-item-step | Previous / next | `{ type: 'previous' / 'next' }` |
| page-item-ellipsis | Ellipsis jump | `—` |
| jumper-prepend | Separate jumper prefix | `—` |
| jumper-append | Separate jumper suffix | `—` |

### Methods

| Method | Description |
| --- | --- |

<!-- same-source-api:end -->

## Behavior

Containers at or below compact-breakpoint use simple mode automatically, including desktop sidebars. Total and page-size controls remain available and wrap. Previous/next buttons follow size without forced enlargement on narrow screens (36px by default). Set responsive=false to retain full pagination; only the page list scrolls horizontally if necessary.

The simple page input also serves as the jumper. Numeric page, ellipsis and separate jumper prefix/suffix slots render only with their corresponding full-mode controls.

Buttons support Tab, Enter and Space; the active page exposes aria-current=page. The jumper requests a numeric keyboard and commits on Enter or blur. Empty, fractional and non-numeric values do not navigate. Integers are clamped to the valid range. Disabled controls cannot submit.

Auto adjustment preserves the first visible record when page size changes and clamps pages when total shrinks. An empty dataset resets to page 1. Controlled state waits for parent updates; an explicit current update in the same batch takes priority.

### PaginationPageSizeProps

The page-size menu fits its option content independently of the compact trigger width.

Shared fields: disabled?: boolean; placement?: top / top-start / top-end / bottom / bottom-start / bottom-end; popupContainer?: string | HTMLElement | false; class?: string; style?: CSSProperties. Parent disabled takes priority. Placement defaults to bottom-start.

Arbitrary SelectProps/MenuProps are no longer forwarded. Use page-size, page-size-options and size for pagination-owned fields.

## Types

```ts
import type { PaginationProps, PaginationInstance, PaginationPageSizeProps } from '@cedarjs/ui'
```

## Style variables

| Token | Default |
| --- | --- |
| `--c-pagination-text-color` | `var(--c-color-text-1)` |
| `--c-pagination-font-size` | `14px` |
| `--c-pagination-gap` | `12px` |
| `--c-pagination-item-gap` | `4px` |
| `--c-pagination-focus-space` | `3px` |
| `--c-pagination-size-xs` | `24px` |
| `--c-pagination-size-sm` | `28px` |
| `--c-pagination-size-md` | `36px` |
| `--c-pagination-size-lg` | `44px` |
| `--c-pagination-size-xl` | `52px` |
| `--c-pagination-item-padding` | `8px` |
| `--c-pagination-item-border-radius` | `4px` |
| `--c-pagination-icon-size` | `16px` |
| `--c-pagination-input-width` | `32px` |
| `--c-pagination-select-width` | `max-content` |
| `--c-pagination-touch-size` | `44px` |
| `--c-pagination-focus-width` | `2px` |
| `--c-pagination-focus-offset` | `1px` |
| `--c-pagination-focus-color` | `var(--c-color-primary)` |
| `--c-pagination-item-background` | `transparent` |
| `--c-pagination-hover-background` | `var(--c-color-fill-1)` |
| `--c-pagination-active-background` | `var(--c-color-primary-light-1)` |
| `--c-pagination-active-color` | `var(--c-color-primary)` |
| `--c-pagination-disabled-color` | `var(--c-color-text-disabled)` |
| `--c-pagination-disabled-background` | `var(--c-color-fill-1)` |
