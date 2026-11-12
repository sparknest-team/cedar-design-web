---
lang: en-US
permalink: /en/components/drawer/
---

# Drawer

A side panel with declarative and programmatic APIs and cancellable before-close operations.

The default header associates its `title` slot with the dialog through a stable, unique title id. Text and render-function service titles follow the same rule; simultaneous service roots do not reuse title ids. An explicit `ariaLabel` takes precedence, and a plain `title` prop can still name the dialog. Hidden or fully custom headers do not reference unrendered titles; provide `ariaLabel` explicitly.

`DrawerConfig` supports the same `dir`, `ariaLabel`, `closeButtonAriaLabel` and `overlayAnimationName` as the component. Guard errors notify `onGuardError(error, action)`. Retired `beforeConfirm` / `beforeCancel` have been replaced by `beforeClose`; changing a guard does not reopen a closed drawer.

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

## Closing and async control

### Guard Protocol

<demo src="./__demos__/en-US/guard-protocol.vue"></demo>

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

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Drawer placement left/right remain physical sides, so entrance/exit follows the corresponding screen edge. Header, content and footer inherit reading direction. Direction changes do not commit or clear content.

## Usage notes

### Async operation feedback
Awaited before-* hooks show loading feedback and aria-busy. Rejection or failure restores interaction; repeated input does not start the same operation again. Ordinary event return Promises do not participate in loading.

## API

### Drawer Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| dir | Reading direction; inherits the source scope when omitted. Physical left/right placements keep their meaning. | `ReadingDirection` (`ltr` / `rtl`) | — |
| open **(v-model)** | Controlled visibility | `boolean` | - |
| default-open | Initial uncontrolled visibility | `boolean` | `false` |
| placement | Side of the containing area where the drawer appears, default right. It is not anchored to a button and does not perform popup collision flipping | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` |
| title | Title | `string` | - |
| overlay | Show the overlay | `boolean` | `true` |
| overlay-class | Custom overlay classes | `string` | - |
| overlay-style | Custom overlay styles | `CSSProperties` | - |
| overlay-closable | Request closure on overlay click | `boolean` | `true` |
| aria-label | Explicit dialog name; takes precedence over the automatic title name | `string` | - |
| close-button-aria-label | Accessible name for the close button | `string` | `Close drawer` |
| overlay-animation-name | Overlay animation name | `string` | `fade-drawer` |
| closable | Show the close button | `boolean` | `true` |
| confirm-button-text | Confirm button text | `string` | - |
| cancel-button-text | Cancel button text | `string` | - |
| confirm-button-loading | Confirm button loading state | `boolean` | `false` |
| cancel-button-loading | Cancel button loading state | `boolean` | `false` |
| confirm-button-disabled | Confirm button disabled state | `boolean` | `false` |
| cancel-button-disabled | Cancel button disabled state | `boolean` | `false` |
| confirm-button-props | Confirm button props | `ButtonProps` | - |
| cancel-button-props | Cancel button props | `ButtonProps` | - |
| unmount-on-close | Unmount content after the closing transition | `boolean` | `false` |
| width | Drawer width for left / right placement | `number \| string` | `250` |
| height | Drawer height for top / bottom placement | `number \| string` | `250` |
| popup-container | Portal container | `string \| HTMLElement \| false` | `'body'` |
| drawer-class | Custom drawer panel classes | `string \| any[]` | - |
| drawer-style | Custom drawer panel styles | `CSSProperties` | - |
| body-class | Custom body classes | `string \| any[]` | - |
| body-style | Custom body styles | `StyleValue` | - |
| `before-close` | Return a boolean/Promise or call done; the first completion wins | `DrawerBeforeClose` | — |
| esc-to-close | Request closure on Escape | `boolean` | `true` |
| lock-scroll | Lock scrolling on the host | `boolean` | `true` |
| close-on-route-change | Request closure on route changes | `boolean` | `false` |
| z-index | Custom z-index | `number` | Automatically distributed |
| header | Show the header region | `boolean` | `true` |
| footer | Show the footer region | `boolean` | `true` |
| cancel-button | Show the cancel button | `boolean` | `true` |


### Drawer Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:open | Request a visibility update | `boolean` |
| confirm / cancel | Accepted confirm or cancel action | `Event` |
| open / close | Opening or closing begins | - |
| opened / closed | Opening or closing transition completes | - |
| click-overlay | Click the topmost overlay | `MouseEvent` |
| key-escape | Escape reaches the topmost drawer | `KeyboardEvent` |
| guard-error | Notifies when beforeClose throws or rejects; remains open and clears waiting | `(error: unknown, action: DrawerAction)` |

### Drawer Slots

`default`, `header`, `title`, `footer`. The `footer` slot receives `confirm`, `cancel` and `close` methods.

Footer confirm/cancel/close, built-in controls, overlay and Escape are beforeClose requests; instance confirm()/cancel() are guarded too. Instance close(), Drawer.open() handle close() and parent open=false are direct commands for completion or explicit exit, bypassing the guard without extra confirm/cancel. Controlled close() still only requests update:open(false); a rejecting parent remains authoritative. Direct closing aborts pending guards and invalidates late results. close() returns void and does not await leave; use closed/onClosed for completion.

Both Dialog implementations share this policy. Maple Popup close()/requestClose() and external model closing are awaitable guard requests returning `Promise<boolean>`; they are not Drawer direct-close commands. Popup destruction remains parent-owned. The demo Close directly action keeps an exit without changing Allow closing or pretending the guard approved.

### Imperative calls

`Drawer.open(config)` uses camelCase options such as `cancelButtonText`, `beforeClose` and `closeOnRouteChange`. Notifications use `onConfirm`, `onCancel`, `onOpen`, `onOpened`, `onClose`, `onClosed`, `onClickOverlay` and `onKeyEscape`.

```ts
import type { DrawerAction, DrawerConfig, DrawerProps } from '@cedar-design/ui-vue'
```

## CSS Variables

Built-in fade and four-direction slide disable transitions and initial displacement under `prefers-reduced-motion: reduce`. Adapt custom animations to the reduced-motion preference in your application.

Panel bg uses surface-raised; overlay-bg uses sys-color-scrim; header-text-color/content-text-color use content-primary, with the close button inheriting header-text-color; border-color uses border-default. Drawer keeps its existing geometry, motion and stacking defaults. Drawer is a Cedar component; Maple does not define empty same-name variables.

overlay-style sets instance scrim variables; drawer-style sets panel variables. These sibling nodes do not inherit variables from one another. Set global system theme variables on a real common ancestor. Explicit background props take precedence over variable consumption.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-drawer-bg` | `var(--c-sys-color-surface-raised)` | `background-color` |
| `--c-drawer-border-color` | `var(--c-sys-color-border-default)` | `border-bottom`, `border-top` |
| `--c-drawer-border-width` | `var(--c-border-width-1)` | `border-bottom`, `border-top` |
| `--c-drawer-close-btn-margin-left` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-drawer-close-icon-font-size` | `var(--c-size-3)` | `font-size` |
| `--c-drawer-content-padding-vertical` | `var(--c-spacing-6)` | `padding` |
| `--c-drawer-content-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-drawer-footer-button-margin-left` | `var(--c-spacing-6)` | `margin-inline-start` |
| `--c-drawer-footer-padding-vertical` | `var(--c-spacing-7)` | `padding` |
| `--c-drawer-header-font-size` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-drawer-header-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-drawer-header-height` | `var(--c-size-12)` | `height` |
| `--c-drawer-header-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-drawer-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-drawer-overlay-bg` | `var(--c-sys-color-scrim)` | `background-color` |
| `--c-drawer-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-drawer-transition-duration` | `var(--c-transition-duration-3)` | `transition` |
| `--c-drawer-transition-timing-function` | `var(--c-transition-timing-function-standard)` | `transition` |
| `--c-drawer-z-index` | `var(--c-z-index-drawer)` | `z-index` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-drawer-border-color: var(--c-sys-color-border-default);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
