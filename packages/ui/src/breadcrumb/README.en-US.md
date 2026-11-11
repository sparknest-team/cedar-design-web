---
lang: en-US
permalink: /en/components/breadcrumb/
---

# Breadcrumb

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

The default navigation landmark and ellipsis labels follow the current locale. Set aria-label on the root to customize the landmark name.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Content and presentation

### Routes

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `routes` | Route list | Routes, Droplist, Max Count |
| `max-count` | Maximum ordinary breadcrumb items, excluding the overflow item; 0 means unlimited | Max Count |
<!-- demo-config-notes:end -->


Preview configuration: `:routes="routes"`, `:href="paths.join('/')"`.

<demo src="./__demos__/routes.vue"></demo>

### Droplist

Preview configuration: `:routes="routes"`, `:droplist="droplist"`.

<demo src="./__demos__/droplist.vue"></demo>

### Max Count

Preview configuration: `:max-count="3"`, `:routes="maxRoutes"`, `:trigger="['hover', 'focus', 'click']"`, `:content="omittedItems.map((item) => item.label).join(' / ')"`.

<demo src="./__demos__/max-count.vue"></demo>

### Link

Preview configuration: `href="#/home"`, `href="#/channel"`.

<demo src="./__demos__/link.vue"></demo>

## Customization and slots

### Custom Split

Preview configuration: `separator="~"`, `separator="->"`.

<demo src="./__demos__/custom-split.vue"></demo>

### Custom Icon

<demo src="./__demos__/custom-icon.vue"></demo>

For routes with children, the parent remains a link and a separate button opens the menu. Selecting a child emits select(route, event) from the root; the application decides whether to navigate. Listen on individual manually composed BreadcrumbItem components for their select events.

## API

### Breadcrumb Props

| Prop | Description | Type | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------ |
| max-count | Maximum ordinary breadcrumb items, excluding the overflow item; 0 means unlimited | `number` | `0` |
| routes | Route list | `BreadcrumbRoute[]` | `-` |
| separator | Separator text | `string \| number` | `/` |

### Breadcrumb Slots

| Slot | Description | Prop |
| ----------- | ---------------------------------- | --------------------------------------------------------------------------- |
| default | Breadcrumb children | `-` |
| more-icon | Custom overflow icon | `omittedItems` `count` `start` `end` |
| item-render | Custom breadcrumb rendering when routes is provided | `route:BreadcrumbRoute`<br/>`routes:BreadcrumbRoute[]`<br/>`paths:string[]` |
| separator | Custom separator | `-` |

### Breadcrumb Events

| Event | Description | Arguments |
| --- | --- | --- |
| select | Emitted when a built-in dropdown child is selected in routes mode | `route: BreadcrumbRoute, event?: Event` |

The `more-icon` slot receives omitted route data only in routes mode. With manually composed default-slot items, omittedItems is empty; count, start and end still describe the omitted range.

### BreadcrumbItem Props

| Prop | Description | Type | Default |
| -------------- | ------------ | ----------------------------- | ------ |
| separator | Separator text | `string \| number` | `-` |
| href | Link URL | `string` | `-` |
| droplist | Dropdown menu content | `BreadcrumbRoute['children']` | `-` |
| dropdown-props | Menu props; open, onUpdate:open and onSelect are managed by the component | `MenuProps` | `-` |

### BreadcrumbItem Events

| Event | Description | Arguments |
| ------ | -------- | -------------- |
| click | Click event; omitted items do not emit it | `event: MouseEvent` |
| select | Fired when a built-in dropdown item is selected | `route: BreadcrumbRoute, event?: Event` |

### BreadcrumbItem Slots

| Slot | Description | Prop |
| --------- | -------------- | ---- |
| default | Item content | `-` |
| droplist | Custom dropdown menu | `-` |
| separator | Custom separator | `-` |

## Types

### BreadcrumbRoute

| Parameter | Description | Type | Default |
| -------- | ------------------------- | ------------------------------ | ------ |
| label | Breadcrumb label | `string` | `-` |
| path | Navigation path (`href` on the `a` element) | `string` |
| children | Dropdown menu items | `{label:string,path:string}[]` | `-` |

The component exports the following types

```ts
import type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbRoute } from '@cedar-design/ui-vue'
```

## Usage notes



- A nonempty `routes` array takes precedence over the default slot; an empty array falls back to the slot. Default route rendering links all items except the last, which has `aria-current="page"`. `item-render` controls links itself.
- Separator precedence: child slot → child prop → parent slot → parent prop. `0` and an empty string are supported.
- `max-count` is a nonnegative integer; 0 means unlimited. A value of 1 acts as 2 to preserve the first and current items. Positive fractions are rounded down and clamped to at least 2; negative or nonfinite values act as 0. Invalid values produce a development warning. Collapsing occurs only when the total exceeds the effective count plus 1; the overflow position does not trigger omitted items’ clicks, links or dropdowns.
- Built-in dropdown selection emits `select(route, event)`. Indices and separators update with dynamic insertion, removal, reordering and SSR.
- Custom attributes apply to the breadcrumb item content node.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-breadcrumb-bg` | `transparent` | `background-color` |
| `--c-breadcrumb-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-breadcrumb-dropdown-icon` | `var(--c-color-text-2)` | `color` |
| `--c-breadcrumb-font-weight-active` | `var(--c-font-weight-400)` | `font-weight` |
| `--c-breadcrumb-icon-color` | `var(--c-color-text-3)` | `color` |
| `--c-breadcrumb-link-text-color` | `rgb(var(--c-primary-8))` | `color` |
| `--c-breadcrumb-link-text-color-hover` | `rgb(var(--c-primary-9))` | `color` |
| `--c-breadcrumb-margin-dropdown-icon-left` | `var(--c-spacing-2)` | `margin-inline-start` |
| `--c-breadcrumb-margin-separator-horizontal` | `var(--c-spacing-2)` | `margin` |
| `--c-breadcrumb-padding-text-horizontal` | `var(--c-spacing-2)` | `margin`, `padding` |
| `--c-breadcrumb-separator-color` | `var(--c-color-text-4)` | `color` |
| `--c-breadcrumb-separator-font-size` | `inherit` | `font-size` |
| `--c-breadcrumb-separator-margin` | `0 var(--c-breadcrumb-margin-separator-horizontal)` | `margin` |
| `--c-breadcrumb-size-dropdown-icon` | `var(--c-size-3)` | `font-size` |
| `--c-breadcrumb-size-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-breadcrumb-size-text-height` | `var(--c-size-6)` | `line-height` |
| `--c-breadcrumb-text-border-radius-hover` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-breadcrumb-text-color` | `var(--c-color-text-2)` | `color` |
| `--c-breadcrumb-text-color-active` | `var(--c-color-text-1)` | `color` |
| `--c-breadcrumb-touch-target-size` | `44px` | `min-height`, `min-width` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-breadcrumb-icon-color: var(--c-color-text-3);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
