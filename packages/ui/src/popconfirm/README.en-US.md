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

## Keyboard and focus

Provide a focusable trigger in the default slot. Opening moves focus into the non-modal confirmation dialog; Tab reaches its buttons and Escape requests closure. When focus is still inside on closure, it returns to the trigger. Clicking outside and moving focus away does not pull it back. In controlled mode, focus stays in the dialog if the parent declines the close request.

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Content and actions use logical alignment, with confirmation/cancellation following reading order. Direction changes do not confirm or cancel. Explicit popup placements retain their existing physical/logical contract.

## Triggers and positioning

### Popup placement

placement directly uses TriggerPlacement / triggerPlacements.

## API

### Popconfirm Props

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
| `before-cancel` | Return a boolean/Promise or call done; the first completion wins | `PopconfirmBeforeCancel` | — |

### Popconfirm Events

| Event | Description | Arguments |
| -------------------- | ------------------------------ | ------------------ |
| update:open | Request an update to visibility | open: `boolean` |
| open-change | Visibility update request notification; a controlled parent may decline it | open: `boolean` |
| guard-error | The guard threw or returned a rejected Promise | error: `unknown`, action: `'confirm' \| 'cancel'` |
| confirm | Accepted confirm action | - |
| cancel | Accepted cancel action | - |

### Popconfirm Slots

| Slot | Description | Prop |
| ------- | :--: | ---- |
| default | Reference element that triggers the confirmation popup | - |
| icon | Icon | - |
| content | Content | - |

## Types

The component exports the following types

```ts
import type { PopconfirmInstance, PopconfirmProps, PopconfirmBeforeConfirm, PopconfirmBeforeCancel } from '@cedar-design/ui-vue'
```


No dedicated instance methods are part of the public contract; internal Trigger methods and button references are not exposed as Popconfirm API.

### Async operation feedback

Awaited before-* hooks show loading feedback and aria-busy. Rejection or failure restores interaction; repeated input does not start the same operation again. Ordinary event return Promises do not participate in loading.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-popconfirm-border-color` | `var(--c-color-neutral-3)` | `border` |
| `--c-popconfirm-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-popconfirm-border-width` | `var(--c-border-width-1)` | `border` |
| `--c-popconfirm-box-shadow` | `var(--c-shadow2-down)` | `box-shadow` |
| `--c-popconfirm-button-margin-left` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-popconfirm-content-bg` | `var(--c-color-bg-popup)` | `background-color` |
| `--c-popconfirm-content-text-color` | `var(--c-color-text-2)` | `color` |
| `--c-popconfirm-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-popconfirm-icon-margin-right` | `var(--c-spacing-4)` | `margin-inline-end` |
| `--c-popconfirm-line-height` | `var(--c-line-height)` | `height`, `line-height` |
| `--c-popconfirm-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-popconfirm-padding-vertical` | `var(--c-spacing-7)` | `padding` |
| `--c-popconfirm-status-danger-title-icon-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-popconfirm-status-info-title-icon-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-popconfirm-status-success-title-icon-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-popconfirm-title-font-size` | `var(--c-font-size-body-3)` | `font-size`, `height` |
| `--c-popconfirm-title-icon-color` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-popconfirm-title-icon-size` | `18px` | `font-size` |
| `--c-popconfirm-title-margin-bottom` | `var(--c-spacing-7)` | `margin-bottom` |
| `--c-popconfirm-title-text-color` | `var(--c-color-text-1)` | `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-popconfirm-border-color: var(--c-color-neutral-3);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
