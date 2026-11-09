---
lang: en-US
permalink: /en/components/infinite-scroll/
---

# Infinite Scroll

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### List

- `status`: Selects the semantic state.

<demo src="./__demos__/list.vue"></demo>

## Content and presentation

### Error

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `status` | Pagination state; supports `v-model:status` | Error |
| `target` | Scroll container; defaults to the nearest scrolling ancestor | Error |
<!-- demo-config-notes:end -->


- `status`: Selects the semantic state.

<demo src="./__demos__/error.vue"></demo>

## Customization and slots

### Custom Status

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `status` | Pagination state; supports `v-model:status` | Custom Status |
| `target` | Scroll container; defaults to the nearest scrolling ancestor | Custom Status |
| `bottom-offset` | Distance-to-bottom threshold; numbers are px, strings are CSS lengths | Custom Status |
<!-- demo-config-notes:end -->


- `status`: Selects the semantic state.

<demo src="./__demos__/custom-status.vue"></demo>

## Lifecycle and edge cases

### Scheduler Lifecycle

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `status` | Pagination state; supports `v-model:status` | Scheduler Lifecycle |
| `target` | Scroll container; defaults to the nearest scrolling ancestor | Scheduler Lifecycle |
| `immediate` | Whether to check immediately after mounting and resolving the scroll container | Scheduler Lifecycle |
<!-- demo-config-notes:end -->


- `status`: Selects the semantic state.

<demo src="./__demos__/scheduler-lifecycle.vue"></demo>

When `target` is a selector, its element must exist when binding occurs. `check()` uses the current binding and does not resolve the selector again; pass the element or change `target` to rebind. Accept the emitted `loading` via `v-model:status`, then set `idle`, `error`, or `finished` when the request settles; assigning the original `idle` alone does not release the request lock. A negative numeric offset requires scrolling past the bottom. String offsets are resolved as CSS widths: negative lengths fall back to zero, and percentages use the measurement element’s CSS containing-block width.

## API

### InfiniteScroll Props

| Parameter | Description | Type | Default |
| ------------- | -------------------------------------------------- | ---------------------------------------------- | -------- |
| status | Pagination state; supports `v-model:status` | `'idle' \| 'loading' \| 'error' \| 'finished'` | `'idle'` |
| bottom-offset | Distance-to-bottom threshold; numbers are px, strings are CSS lengths | `string \| number` | `0` |
| immediate | Whether to check immediately after mounting and resolving the scroll container | `boolean` | `true` |
| disabled | Pause loading and retry | `boolean` | `false` |
| target | Scroll container; defaults to the nearest scrolling ancestor | `string \| HTMLElement` | `-` |

### InfiniteScroll Events

| Event | Description | Arguments |
| ------------- | -------------------------- | --------- |
| update:status | Requests pagination status `loading` | `loading` |
| load | Emitted when idle and the threshold is reached | - |
| retry | Emitted when retry is invoked in the error state | - |

`retry` does not also emit `load`. Both events may call the same business request function.

### InfiniteScroll Methods

| Method | Description |
| ------ | ---------------------------- |
| check | Immediately check whether the loading threshold is reached |
| retry | Request a retry in the `error` state |

### InfiniteScroll Slots

| Slot | Description | Prop |
| -------- | ---------------- | ------------------- |
| default | Observed content | - |
| loading | Pagination loading state | - |
| error | Pagination error state | `retry: () => void` |
| finished | All-pages-loaded state | - |

The default error area retries on click. `finished` is terminal; detection resumes only when the parent resets `status` to `idle`.

## Types

```ts
import type {
  InfiniteScrollInstance,
  InfiniteScrollMethods,
  InfiniteScrollProps,
  InfiniteScrollStatus,
} from "@cedar-design/ui";
```

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-infinite-scroll-error-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-infinite-scroll-loading-gap` | `8px` | `gap` |
| `--c-infinite-scroll-status-color` | `var(--c-color-text-3)` | `color` |
| `--c-infinite-scroll-status-font-size` | `var(--c-font-size-md)` | `font-size` |
| `--c-infinite-scroll-status-min-height` | `50px` | `min-height` |
| `--c-infinite-scroll-status-padding` | `12px 0` | `padding` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-infinite-scroll-error-color: var(--c-sys-color-content-danger);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
