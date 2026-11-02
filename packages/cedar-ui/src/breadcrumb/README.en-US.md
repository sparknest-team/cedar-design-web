---
lang: en-US
permalink: /en/components/breadcrumb/
---

# Breadcrumb

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

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

## API

### Breadcrumb Props

| Prop | Description | Type | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------ |
| max-count | Maximum ordinary breadcrumb items, excluding the overflow item; 0 means unlimited | `number` | `0` |
| routes | Route list | `BreadcrumbRoute[]` | `-` |
| separator | Separator text | `string \| number` | `/` |

### Breadcrumb Slots

| Slot | Description | Arguments |
| ----------- | ---------------------------------- | --------------------------------------------------------------------------- |
| more-icon | Custom overflow icon | `omittedItems` `count` `start` `end` |
| item-render | Custom breadcrumb rendering when routes is provided | `route:BreadcrumbRoute`<br/>`routes:BreadcrumbRoute[]`<br/>`paths:string[]` |
| separator | Custom separator | `-` |

### BreadcrumbItem Props

| Prop | Description | Type | Default |
| -------------- | ------------ | ----------------------------- | ------ |
| separator | Separator text | `string \| number` | `-` |
| href | Link URL | `string` | `-` |
| droplist | Dropdown menu content | `BreadcrumbRoute['children']` | `-` |
| dropdown-props | Props passed to Menu | `MenuProps` | `-` |

### BreadcrumbItem Events

| Event | Description | Arguments |
| ------ | -------- | -------------- |
| click | Click event; omitted items do not emit it | `event: MouseEvent` |
| select | Fired when a built-in dropdown item is selected | `route: BreadcrumbRoute, event?: Event` |

### BreadcrumbItem Slots

| Slot | Description | Arguments |
| --------- | -------------- | ---- |
| droplist | Custom dropdown menu | `-` |
| separator | Custom separator | `-` |

### BreadcrumbRoute

| Parameter | Description | Type | Default |
| -------- | ------------------------- | ------------------------------ | ------ |
| label | Breadcrumb label | `string` | `-` |
| path | Navigation path (`href` on the `a` element) | `string` |
| children | Dropdown menu items | `{label:string,path:string}[]` | `-` |

## Type definitions

The component exports the following types

```ts
import type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbRoute } from '@cedar-design/ui'
```

## Shared implementation and platform boundaries

Breadcrumb and BreadcrumbItem are maintained as local copies in Cedar / Maple. Component bodies, props, context, types, key styles and paired tests are checked by `design-ui/bin/copied-components-check.mjs`. Each library supplies its own icons, installation entry, menu implementation and theme tokens.

- A nonempty `routes` array takes precedence over the default slot; an empty array falls back to the slot. Default route rendering links all items except the last, which has `aria-current="page"`. `item-render` controls links itself.
- Separator precedence: child slot → child prop → parent slot → parent prop. `0` and an empty string are supported.
- `max-count` preserves the existing boundary: collapsing occurs only when the total exceeds `max-count + 1`. It keeps the first and trailing items. The overflow position does not trigger omitted items’ clicks, links or dropdowns.
- Built-in dropdown selection emits `select(route, event)`. Indices and separators update with dynamic insertion, removal, reordering and SSR.
- Cedar adds a `__content` wrapper for item content; attributes fall through to it. Maple retains its existing theme variables through token mappings.
