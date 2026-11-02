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

## API

### `<infinite-scroll>` Props

| Parameter | Description | Type | Default |
| ------------- | -------------------------------------------------- | ---------------------------------------------- | -------- |
| status | Pagination state; supports `v-model:status` | `'idle' \| 'loading' \| 'error' \| 'finished'` | `'idle'` |
| bottom-offset | Distance-to-bottom threshold; numbers are px, strings are CSS lengths | `string \| number` | `0` |
| immediate | Whether to check immediately after mounting and resolving the scroll container | `boolean` | `true` |
| disabled | Pause loading and retry | `boolean` | `false` |
| target | Scroll container; defaults to the nearest scrolling ancestor | `string \| HTMLElement` | `-` |

### `<infinite-scroll>` Events

| Event | Description | Arguments |
| ------------- | -------------------------- | --------- |
| update:status | Requests pagination status `loading` | `loading` |
| load | Emitted when idle and the threshold is reached | - |
| retry | Emitted when retry is invoked in the error state | - |

`retry` does not also emit `load`. Both events may call the same business request function.

### `<infinite-scroll>` Methods

| Method | Description |
| ------ | ---------------------------- |
| check | Immediately check whether the loading threshold is reached |
| retry | Request a retry in the `error` state |

### `<infinite-scroll>` Slots

| Slot | Description | Arguments |
| -------- | ---------------- | ------------------- |
| default | Observed content | - |
| loading | Pagination loading state | - |
| error | Pagination error state | `retry: () => void` |
| finished | All-pages-loaded state | - |

The default error area retries on click. `finished` is terminal; detection resumes only when the parent resets `status` to `idle`.

### Type definitions

```ts
import type {
  InfiniteScrollInstance,
  InfiniteScrollMethods,
  InfiniteScrollProps,
  InfiniteScrollStatus,
} from "@cedar-design/ui";
```

### Style variables

| Variable | Default |
| ----------------------------------------------- | ----------------------- |
| `--c-infinite-scroll-status-min-height` | `50px` |
| `--c-infinite-scroll-status-padding` | `12px 0` |
| `--c-infinite-scroll-status-color` | `var(--c-color-text-3)` |
| `--c-infinite-scroll-status-font-size` | `var(--c-font-size-md)` |
| `--c-infinite-scroll-loading-gap` | `8px` |
| `--c-infinite-scroll-error-color` | `var(--c-color-danger)` |
