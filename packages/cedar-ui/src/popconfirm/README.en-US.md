---
lang: en-US
permalink: /en/components/popconfirm/
---

# Popconfirm

A confirmation popup with before-confirm and before-cancel hooks.

## Basic examples

### Basic

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Type

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `content` | Content | Type |
| `type` | Confirmation status type | Type |
<!-- demo-config-notes:end -->


<demo src="./__demos__/type.vue"></demo>

### Api Review

## Layout and arrangement

### Placement

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `content` | Content | Placement |
| `placement` | Preferred popup side relative to the trigger, default top. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | Placement |
<!-- demo-config-notes:end -->


<demo src="./__demos__/placement.vue"></demo>

## Content and presentation

### Guard Protocol

<demo src="./__demos__/en-US/guard-protocol.vue"></demo>

### `<popconfirm>` Props

| Name | Description | Type | Default |
| --------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | :------: |
| content | Content | `string` | `-` |
| placement | Preferred popup side relative to the trigger, default top. Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `'top'` |
| open **(v-model)** | Controlled confirmation popup visibility | `boolean` | `-` |
| default-open | Initial uncontrolled popup visibility | `boolean` | `false` |
| type | Confirmation status type | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` |
| confirm-button-text | Confirm button text | `string` | `-` |
| cancel-text | Cancel button text | `string` | `-` |
| confirm-button-loading | Confirm button loading state | `boolean` | `false` |
| confirm-button-props | Confirm button props | `ButtonProps` | `-` |
| cancel-button-props | Cancel button props | `ButtonProps` | `-` |
| content-class | Popup content class | `ClassName` | `-` |
| content-style | Popup content style | `CSSProperties` | `-` |
| arrow-class | Arrow class | `ClassName` | `-` |
| arrow-style | Arrow style | `CSSProperties` | `-` |
| popup-container | Portal container | `string \| HTMLElement \| false` | `-` |
| `before-confirm` | Return a boolean/Promise or call done; the first completion wins | `PopconfirmBeforeConfirm` | — |
| `before-cancel` | Return a boolean/Promise or call done; the first completion wins | `PopconfirmBeforeConfirm` | — |

### `<popconfirm>` Events

| Event | Description | Arguments |
| -------------------- | ------------------------------ | ------------------ |
| open-change | Popup visibility changes | open: `boolean` |
| confirm | Accepted confirm action | - |
| cancel | Accepted cancel action | - |

### `<popconfirm>` Slots

| Slot | Description | Arguments |
| ------- | :--: | ---- |
| icon | Icon | - |
| content | Content | - |


Promise and done share a single completion state: false/done(false) rejects; true/done() allows; a resolved Promise&lt;void&gt; allows. The first completion wins. Errors emit guard-error; cancellation/unmount invalidates late completion. Synchronous void retains the callback protocol and waits for done on these close/confirm guards.


Cancellable hooks use `(payload, done, context)`: closure payloads contain `{ action }`, change/commit payloads contain `{ value, previousValue }`, and Popup uses `{ reason }`. Context provides `signal` and an optional original `event`. Return a boolean/Promise, or call done()/done(false). Synchronous void waits for done; Promise&lt;void&gt; allows the operation. First completion wins. Pending state controls loading/disabled automatically. Cancellation invalidates stale results. Button refs are not exposed.

## Customization and slots

### Custom

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `content` | Content | Custom |
| `confirm-button-text` | Confirm button text | Custom |
| `cancel-text` | Cancel button text | Custom |
<!-- demo-config-notes:end -->


<demo src="./__demos__/custom.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"` and supports runtime and nested overrides. Content and actions use logical alignment. Confirm/cancel actions follow reading order, and switching direction triggers neither action. Explicit popup placement retains its documented physical or logical meaning.

## API

### `<popconfirm>` Props

| Parameter | Description | Type | Default |
| --------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | :------: |
| content | Content | `string` | `-` |
| placement | Preferred popup side relative to the trigger, default top. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `'top'` |
| open **(v-model)** | Controlled confirmation popup visibility | `boolean` | `-` |
| default-open | Initial uncontrolled popup visibility | `boolean` | `false` |
| type | Confirmation status type | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` |
| confirm-button-text | Confirm button text | `string` | `-` |
| cancel-text | Cancel button text | `string` | `-` |
| confirm-button-loading | Confirm button loading state | `boolean` | `false` |
| confirm-button-props | Confirm button props | `ButtonProps` | `-` |
| cancel-button-props | Cancel button props | `ButtonProps` | `-` |
| content-class | Popup content class | `ClassName` | `-` |
| content-style | Popup content style | `CSSProperties` | `-` |
| arrow-class | Arrow class | `ClassName` | `-` |
| arrow-style | Arrow style | `CSSProperties` | `-` |
| popup-container | Portal container | `string \| HTMLElement \| false` | `-` |
| `before-confirm` | Return a boolean/Promise or call done; the first completion wins | `PopconfirmBeforeConfirm` | — |
| `before-cancel` | Return a boolean/Promise or call done; the first completion wins | `PopconfirmBeforeConfirm` | — |

### `<popconfirm>` Events

| Event | Description | Arguments |
| -------------------- | ------------------------------ | ------------------ |
| open-change | Popup visibility changes | open: `boolean` |
| confirm | Accepted confirm action | - |
| cancel | Accepted cancel action | - |

### `<popconfirm>` Slots

| Slot | Description | Arguments |
| ------- | :--: | ---- |
| icon | Icon | - |
| content | Content | - |

### Type definitions

The component exports the following types

```ts
import type { PopconfirmInstance } from '@cedar-design/ui'
```


### Placement semantics and configuration

placement directly uses TriggerPlacement / triggerPlacements. Legacy TriggerPosition / TRIGGER_POSITIONS aliases have been removed; placement values are unchanged.

### Before-hook waiting feedback

Before-hook waits show visible feedback and aria-busy. Rejected or failed operations recover; duplicate submissions do not start another copy. Notification event Promises never drive loading.
