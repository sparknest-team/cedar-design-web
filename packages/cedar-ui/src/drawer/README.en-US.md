---
lang: en-US
permalink: /en/components/drawer/
---

# Drawer

A side panel with declarative and programmatic APIs and cancellable before-close operations.

## Basic examples

### Basic

<demo src="./__demos__/basic.vue"></demo>

## Sizing and positioning

### Drawer size and placement

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `unmount-on-close` | Unmount content after the closing transition | Drawer size and placement |
| `placement` | Side of the containing area where the drawer appears, default right. It is not anchored to a button and does not perform popup collision flipping | Drawer size and placement |
| `popup-container` | Portal container | Popup Container |
<!-- demo-config-notes:end -->


Open each drawer separately to compare placement and occupied space. Nesting, containers and guards remain separate.

<demo src="./__demos__/position-size-comparison.vue"></demo>

### Popup Container

<demo src="./__demos__/popup-container.vue"></demo>

## Content and nesting

### Nest Drawer

<demo src="./__demos__/nest-drawer.vue"></demo>

### Custom Node

<demo src="./__demos__/custom-node.vue"></demo>

### Function Call

<demo src="./__demos__/function-call.vue"></demo>

### Api Review

## Closing and async control

### Guard Protocol

<demo src="./__demos__/en-US/guard-protocol.vue"></demo>

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| dir | Reading direction; inherits the source scope when omitted. Physical left/right placements keep their meaning. | `ReadingDirection` (`ltr` / `rtl`) | — |
| open **(v-model)** | Controlled visibility | `boolean` | - |
| default-open | Initial uncontrolled visibility | `boolean` | `false` |
| placement | Side of the containing area where the drawer appears, default right. It is not anchored to a button and does not perform popup collision flipping | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` |
| title | Title | `string` | - |
| overlay | Show the overlay | `boolean` | `true` |
| overlay-class / overlay-style | Overlay class and style | `string / CSSProperties` | - |
| overlay-closable | Request closure on overlay click | `boolean` | `true` |
| closable | Show the close button | `boolean` | `true` |
| confirm-button-text / cancel-button-text | Action button text | `string` | - |
| confirm-button-loading / cancel-button-loading | Action button loading state | `boolean` | `false` |
| confirm-button-disabled / cancel-button-disabled | Action button disabled state | `boolean` | `false` |
| confirm-button-props / cancel-button-props | Action button props | `ButtonProps` | - |
| unmount-on-close | Unmount content after the closing transition | `boolean` | `false` |
| width / height | Width for left/right placement; height for top/bottom placement | `number \| string` | `250` |
| popup-container | Portal container | `string \| HTMLElement \| false` | `'body'` |
| drawer-class / drawer-style | Panel class and style | `string \| any[] / CSSProperties` | - |
| body-class / body-style | Body class and style | `string \| any[] / StyleValue` | - |
| `before-close` | Return a boolean/Promise or call done; the first completion wins | `DrawerBeforeClose` | — |
| esc-to-close | Request closure on Escape | `boolean` | `true` |
| lock-scroll | Lock scrolling on the host | `boolean` | `true` |
| close-on-route-change | Request closure on route changes | `boolean` | `false` |
| z-index | Custom z-index | `number` | Automatically allocated |
| header / footer / cancel-button | Show the corresponding region | `boolean` | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:open | Request a visibility update | `boolean` |
| confirm / cancel | Accepted confirm or cancel action | `Event` |
| open / close | Opening or closing begins | - |
| opened / closed | Opening or closing transition completes | - |
| click-overlay | Click the topmost overlay | `MouseEvent` |
| key-escape | Escape reaches the topmost drawer | `KeyboardEvent` |

### CSS

| Variable | Default |
| --- | --- |
| `--c-drawer-header-height` | `var(--c-size-12)` |
| `--c-drawer-footer-button-margin-left` | `var(--c-spacing-6)` |
| `--c-drawer-header-font-size` | `var(--c-font-size-title-1)` |
| `--c-drawer-padding-horizontal` | `var(--c-spacing-7)` |
| `--c-drawer-footer-padding-vertical` | `var(--c-spacing-7)` |
| `--c-drawer-content-padding-vertical` | `var(--c-spacing-6)` |
| `--c-drawer-header-font-weight` | `var(--c-font-weight-500)` |
| `--c-drawer-border-color` | `var(--c-sys-color-border-default)` |
| `--c-drawer-border-width` | `var(--c-border-width-1)` |
| `--c-drawer-header-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-drawer-content-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-drawer-bg` | `var(--c-sys-color-surface-raised)` |
| `--c-drawer-overlay-bg` | `var(--c-sys-color-scrim)` |
| `--c-drawer-line-height` | `var(--c-line-height)` |
| `--c-drawer-z-index` | `var(--c-z-index-drawer)` |
| `--c-drawer-close-icon-font-size` | `var(--c-size-3)` |
| `--c-drawer-close-btn-margin-left` | `var(--c-spacing-4)` |
| `--c-drawer-transition-duration` | `var(--c-transition-duration-3)` |
| `--c-drawer-transition-timing-function` | `var(--c-transition-timing-function-standard)` |


Promise and done share a single completion state: false/done(false) rejects; true/done() allows; a resolved Promise&lt;void&gt; allows. The first completion wins. Errors emit guard-error; cancellation/unmount invalidates late completion. Synchronous void retains the callback protocol and waits for done on these close/confirm guards.


Cancellable hooks use `(payload, done, context)`: closure payloads contain `{ action }`, change/commit payloads contain `{ value, previousValue }`, and Popup uses `{ reason }`. Context provides `signal` and an optional original `event`. Return a boolean/Promise, or call done()/done(false). Synchronous void waits for done; Promise&lt;void&gt; allows the operation. First completion wins. Pending state controls loading/disabled automatically. Cancellation invalidates stale results. Button refs are not exposed.

## Reading direction

Inherits the nearest `dir="ltr|rtl"` and supports runtime and nested overrides. Drawer placement=left/right remains physical, including entry and exit motion. Headings, content and footer actions inherit reading direction. Direction changes do not submit or clear content.

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| dir | Reading direction; inherits the source scope when omitted. Physical left/right placements keep their meaning. | `ReadingDirection` (`ltr` / `rtl`) | — |
| open **(v-model)** | Controlled visibility | `boolean` | - |
| default-open | Initial uncontrolled visibility | `boolean` | `false` |
| placement | Side of the containing area where the drawer appears, default right. It is not anchored to a button and does not perform popup collision flipping | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` |
| title | Title | `string` | - |
| overlay | Show the overlay | `boolean` | `true` |
| overlay-class / overlay-style | Overlay class and style | `string / CSSProperties` | - |
| overlay-closable | Request closure on overlay click | `boolean` | `true` |
| closable | Show the close button | `boolean` | `true` |
| confirm-button-text / cancel-button-text | Action button text | `string` | - |
| confirm-button-loading / cancel-button-loading | Action button loading state | `boolean` | `false` |
| confirm-button-disabled / cancel-button-disabled | Action button disabled state | `boolean` | `false` |
| confirm-button-props / cancel-button-props | Action button props | `ButtonProps` | - |
| unmount-on-close | Unmount content after the closing transition | `boolean` | `false` |
| width / height | Width for left/right placement; height for top/bottom placement | `number \| string` | `250` |
| popup-container | Portal container | `string \| HTMLElement \| false` | `'body'` |
| drawer-class / drawer-style | Panel class and style | `string \| any[] / CSSProperties` | - |
| body-class / body-style | Body class and style | `string \| any[] / StyleValue` | - |
| `before-close` | Return a boolean/Promise or call done; the first completion wins | `DrawerBeforeClose` | — |
| esc-to-close | Request closure on Escape | `boolean` | `true` |
| lock-scroll | Lock scrolling on the host | `boolean` | `true` |
| close-on-route-change | Request closure on route changes | `boolean` | `false` |
| z-index | Custom z-index | `number` | Automatically distributed |
| header / footer / cancel-button | Show the corresponding region | `boolean` | `true` |


### Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:open | Request a visibility update | `boolean` |
| confirm / cancel | Accepted confirm or cancel action | `Event` |
| open / close | Opening or closing begins | - |
| opened / closed | Opening or closing transition completes | - |
| click-overlay | Click the topmost overlay | `MouseEvent` |
| key-escape | Escape reaches the topmost drawer | `KeyboardEvent` |

### Slots

`default`, `header`, `title`, `footer`. The `footer` slot receives `confirm`, `cancel` and `close` methods.

### Imperative calls

`Drawer.open(config)` uses camelCase options such as `cancelButtonText`, `beforeClose` and `closeOnRouteChange`. Notifications use `onConfirm`, `onCancel`, `onOpen`, `onOpened`, `onClose`, `onClosed`, `onClickOverlay` and `onKeyEscape`.

```ts
import type { DrawerAction, DrawerConfig, DrawerProps } from '@cedar-design/ui'
```

## CSS variables and color semantics

Built-in fade and four-direction slide disable transitions and initial displacement under prefers-reduced-motion: reduce. Component styles handle this without global fallbacks. Default durations remain unchanged; business-defined animations require separate handling. Compiled-CSS checks do not substitute for testing live OS preference changes.

Panel bg uses surface-raised; overlay-bg uses sys-color-scrim; header-text-color/content-text-color use content-primary, with the close button inheriting header-text-color; border-color uses border-default. Drawer keeps its existing geometry, motion and stacking defaults. Drawer is a Cedar component; Maple does not define empty same-name variables.

overlay-style sets instance scrim variables; drawer-style sets panel variables. These sibling nodes do not inherit variables from one another. Set global system theme variables on a real common ancestor. Explicit background props take precedence over variable consumption. The unused close-icon-right variable is removed; title layout and close-btn-margin-left position the close button, without an ineffective compatibility alias.

| Variable | Default |
| --- | --- |
| `--c-drawer-header-height` | `var(--c-size-12)` |
| `--c-drawer-footer-button-margin-left` | `var(--c-spacing-6)` |
| `--c-drawer-header-font-size` | `var(--c-font-size-title-1)` |
| `--c-drawer-padding-horizontal` | `var(--c-spacing-7)` |
| `--c-drawer-footer-padding-vertical` | `var(--c-spacing-7)` |
| `--c-drawer-content-padding-vertical` | `var(--c-spacing-6)` |
| `--c-drawer-header-font-weight` | `var(--c-font-weight-500)` |
| `--c-drawer-border-color` | `var(--c-sys-color-border-default)` |
| `--c-drawer-border-width` | `var(--c-border-width-1)` |
| `--c-drawer-header-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-drawer-content-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-drawer-bg` | `var(--c-sys-color-surface-raised)` |
| `--c-drawer-overlay-bg` | `var(--c-sys-color-scrim)` |
| `--c-drawer-line-height` | `var(--c-line-height)` |
| `--c-drawer-z-index` | `var(--c-z-index-drawer)` |
| `--c-drawer-close-icon-font-size` | `var(--c-size-3)` |
| `--c-drawer-close-btn-margin-left` | `var(--c-spacing-4)` |
| `--c-drawer-transition-duration` | `var(--c-transition-duration-3)` |
| `--c-drawer-transition-timing-function` | `var(--c-transition-timing-function-standard)` |

### Before-hook waiting feedback

Before-hook waits show visible feedback and aria-busy. Rejected or failed operations recover; duplicate submissions do not start another copy. Notification event Promises never drive loading.
