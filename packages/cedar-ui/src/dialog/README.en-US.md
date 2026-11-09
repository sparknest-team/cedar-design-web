---
lang: en-US
permalink: /en/components/dialog/
---

# Dialog

With `draggable` enabled, title inputs, textareas, buttons, links with href and editable content retain native pointer behavior and do not start a drag. The ordinary title area remains draggable. In non-centered mode, numeric `top=0` is supported just like the string `0px`.

A modal dialog with matching declarative and programmatic APIs.

## Basic examples

### Basic

<demo src="./__demos__/basic.vue"></demo>

## Invocation and content

### Global

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `title` | Title | Confirm, Form, Simple |
| `type` | Status icon: `info`, `success`, `warning` or `error` | Confirm, Simple |
| `message` | Message content; the default slot is also supported | Confirm, Simple |
| `before-close` | Return a boolean/Promise or call done; the first completion wins | Form |
| `simple` | Compact layout with a centered footer | Simple |
<!-- demo-config-notes:end -->


<demo src="./__demos__/global.vue"></demo>

### Alert

<demo src="./__demos__/alert.vue"></demo>

### Confirm

<demo src="./__demos__/confirm.vue"></demo>

### Message

<demo src="./__demos__/message.vue"></demo>

### Form

<demo src="./__demos__/form.vue"></demo>

### Simple

<demo src="./__demos__/simple.vue"></demo>

### Service popup containers

Function calls honor `popupContainer` from explicit configuration or `setDefaultOptions`, using the component's selector/HTMLElement resolution and missing/invalid-selector fallback to body. The default targets body; `false` renders inline in the service's own body host. `handle.update({ popupContainer })` moves the same dialog and preserves content state and app context. Closing removes teleported content and its service host, independently of notification callback results. A custom container controls DOM attachment; layout still follows Dialog positioning and its containing block.

<demo src="./__demos__/service-container.vue"></demo>

## Sizing and layout

### Dialog sizing and long content

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `title` | Title | No Padding, Max Height |
| `body-style` | Body style | No Padding, Max Height |
| `width` | Width | Dialog sizing and long content |
| `fullscreen` | Fullscreen layout | Dialog sizing and long content |
<!-- demo-config-notes:end -->


Open one dialog at a time to compare widths, fullscreen layouts and long-content boundaries.

<demo src="./__demos__/size-comparison.vue"></demo>

### No Padding

<demo src="./__demos__/no-padding.vue"></demo>

### Max Height

<demo src="./__demos__/max-height.vue"></demo>

## Interaction and customization

### Draggable

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `unmount-on-close` | Unmount after closing | Custom Text, Advanced |
| `draggable` | Draggable | Draggable |
| `confirm-button-text` | Confirm button text | Custom Text |
| `cancel-button-text` | Cancel button text | Custom Text |
| `footer` | Whether to show the footer | Advanced |
| `type` | Status icon: `info`, `success`, `warning` or `error` | Advanced |
<!-- demo-config-notes:end -->


<demo src="./__demos__/draggable.vue"></demo>

### Custom Footer

<demo src="./__demos__/custom-footer.vue"></demo>

### Custom Text

<demo src="./__demos__/custom-text.vue"></demo>

### Advanced

<demo src="./__demos__/advanced.vue"></demo>

## Async actions and closing

### Async

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `before-close` | Return a boolean/Promise or call done; the first completion wins | Async close, before hooks and callback compatibility |
| `title` | Title | Async |
| `message` | Message content; the default slot is also supported | Async |
<!-- demo-config-notes:end -->


<demo src="./__demos__/async.vue"></demo>

### Guard Protocol

<demo src="./__demos__/en-US/guard-protocol.vue"></demo>

### DialogConfig

| Name | Description | Type |
| ------------- | ---------------------------------- | -------------------------- |
| `content` | Renderable content; takes priority over message | `RenderContent` |
| `footer` | Footer visibility or custom footer content | `boolean \| RenderContent` |
| `onConfirm` | Confirm callback | `(e?: Event) => void` |
| `onCancel` | Cancel callback | `(e?: Event) => void` |
| `onClickOverlay` | Overlay click callback | `() => void` |
| `onKeyEscape` | Escape callback | `() => void` |

### DialogMethod

| Method | Description | Return value |
| ---------------------------------- | ------------------------------ | -------------------------------------- |
| `Dialog.open(config)` | Open a dialog | `Promise<DialogAction> & DialogReturn` |
| `Dialog.confirm(config)` | Confirmation dialog; defaults to warning | Same as above |
| `Dialog.alert(config)` | Alert dialog without a cancel button | Same as above |
| `Dialog.info(config)` | Information dialog | Same as above |
| `Dialog.success(config)` | Success dialog | Same as above |
| `Dialog.warning(config)` | Warning dialog | Same as above |
| `Dialog.error(config)` | Error dialog | Same as above |
| `Dialog.close()` | Close the latest functional dialog | `void` |
| `Dialog.setDefaultOptions(config)` | Set default programmatic options | `void` |
| `Dialog.resetDefaultOptions()` | Reset default programmatic options | `void` |

### DialogReturn

| Prop | Description |
| ---------------- | -------- |
| `close()` | Close |
| `update(config)` | Update options |

### Reading direction

Inherits the nearest `dir="ltr|rtl"` and supports runtime and nested overrides. Content, headings and action gaps use logical edges. Portals inherit their source direction. Direction changes preserve close, confirm, cancel and pending-state semantics.

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Content, titles and action spacing use logical start/end. External popovers inherit their source direction. Closing, confirmation, cancellation and uncommitted state are unchanged by direction switches.

## Usage notes

### Async operation feedback
Awaited before-* hooks show loading feedback and aria-busy. Rejection or failure restores interaction; repeated input does not start the same operation again. Ordinary event return Promises do not participate in loading.

Programmatic notification callbacks do not control task completion. Service selection/closing results settle independently of callback errors, and closing completion always releases the owned host. Exceptions still propagate through the caller or Vue error channel; returned Promises do not control loading or closing.

### Dragging and cancellation
Title dragging is controlled only by the initiating primary pointer. Disabling `draggable`, closing, entering fullscreen, losing pointer capture or owner-window focus, deactivation and unmount all end the gesture and release listeners and capture. Reenabling requires a new gesture; the previous pointer cannot resume it. Disabling preserves the current offset; fullscreen and the existing post-close reset restore defaults. Listeners belong to the title element's document.

## API

### Dialog Props

| Parameter | Description | Type | Default |
| ------------------------- | -------------------------------------------- | -------------------------------- | ------------ |
| dir | Reading direction; inherits the source scope when omitted. Physical left/right placements keep their meaning. | `ReadingDirection` (`ltr` / `rtl`) | — |
| `open` **(v-model)** | Visible state | `boolean` | `-` |
| `default-open` | Initial uncontrolled state | `boolean` | `false` |
| `title` | Title | `string` | `-` |
| `message` | Message content; the default slot is also supported | `string` | `-` |
| `message-align` | Message alignment | `'left' \| 'center' \| 'right'` | `'left'` |
| `type` | Status icon: `info`, `success`, `warning` or `error` | `string` | `-` |
| `simple` | Compact layout with a centered footer | `boolean` | `false` |
| `width` | Width | `number \| string` | `-` |
| `top` | Top offset; ignored when `align-center` is enabled | `number \| string` | `-` |
| `title-align` | Title alignment | `'start' \| 'center'` | `'center'` |
| `align-center` | Center vertically and horizontally | `boolean` | `true` |
| `overlay` | Show overlay | `boolean` | `true` |
| `overlay-class` | Overlay class | `string` | `-` |
| `overlay-style` | Overlay style | `CSSProperties` | `-` |
| `overlay-closable` | Request closure on an overlay click | `boolean` | `true` |
| `esc-to-close` | Request closure on Escape | `boolean` | `true` |
| `lock-scroll` | Lock background scrolling while open | `boolean` | `true` |
| `close-on-route-change` | Close on browser history or hash changes | `boolean` | `false` |
| `popup-container` | Teleport target; `false` disables teleport | `string \| HTMLElement \| false` | `'body'` |
| `confirm-button` | Show the confirm button | `boolean` | `true` |
| `cancel-button` | Show the cancel button | `boolean` | `true` |
| `closable` | Show close button | `boolean` | `true` |
| `confirm-button-text` | Confirm button text | `string` | `-` |
| `cancel-button-text` | Cancel button text | `string` | `-` |
| `confirm-button-loading` | Confirm button loading state | `boolean` | `false` |
| `cancel-button-loading` | Cancel button loading state | `boolean` | `false` |
| `confirm-button-disabled` | Disable the confirm button | `boolean` | `false` |
| `cancel-button-disabled` | Disable the cancel button | `boolean` | `false` |
| `confirm-button-props` | Confirm button props | `ButtonProps` | `-` |
| `cancel-button-props` | Cancel button props | `ButtonProps` | `-` |
| `footer` | Whether to show the footer | `boolean` | `true` |
| `dialog-class` | Dialog class | `string \| any[]` | `-` |
| `dialog-style` | Dialog style | `CSSProperties` | `-` |
| `body-class` | Body class | `string \| any[]` | `-` |
| `body-style` | Body style | `StyleValue` | `-` |
| `hide-title` | Hide the title | `boolean` | `false` |
| `unmount-on-close` | Unmount after closing | `boolean` | `false` |
| `draggable` | Allow dragging | `boolean` | `false` |
| `fullscreen` | Fullscreen layout | `boolean` | `false` |
| `overlay-animation-name` | Overlay animation name | `string` | `fade-modal` |
| `dialog-animation-name` | Dialog animation name | `string` | `zoom-modal` |
| `z-index` | Stack level | `number` | `-` |
| `before-close` | Return a boolean/Promise or call done; the first completion wins | `DialogBeforeClose` | — |

### Dialog Events

| Event | Description | Arguments |
| ------------ | ------------- | --------------- |
| `open` | When opened | `-` |
| `opened` | Opening transition completes | `-` |
| `close` | Closing begins | `-` |
| `closed` | Closing transition completes | `-` |
| `confirm` | Accepted confirm action | `Event` |
| `cancel` | Accepted cancel or close action | `Event` |
| `click-overlay` | `MouseEvent` | `MouseEvent` |
| `key-escape` | ESC | `KeyboardEvent` |

The `close` button, overlay, ESC and `close()` use `close` semantics without an additional `cancel` event.

Built-in buttons, overlay, Escape, footer methods and instance confirm()/cancel() request beforeClose. Instance close(), returned handle close(), Dialog.close() and parent open=false are direct commands that bypass guards; a controlled parent still decides whether to accept update:open(false). Direct closing retires pending guards so late results cannot close a reopened instance. close does not mean leave completion; observe closed/onClosed. Maple Popup close()/requestClose() instead return `Promise<boolean>` for guarded requests.

### Dialog Slots

| Slot | Description | Prop |
| --------- | ---- | ---------------------------- |
| `default` | Content | `-` |
| `title` | Title | `-` |
| `footer` | Footer | `cancel`, `confirm`, `close` |

Confirm and cancel buttons use Button's `default` status and `text` variant unless `confirmButtonProps` or `cancelButtonProps` overrides them.

### Dialog Methods

Function-based Dialog calls default to simple layout (`simple: true`) with the top-right close button hidden (`closable: false`). Explicit options or global defaults can override both.

## Types

### DialogConfig

Accepts the component props in camelCase, plus:

| Parameter | Description | Type |
| ------------- | ---------------------------------- | -------------------------- |
| `content` | Renderable content; takes priority over `message` | `RenderContent` |
| `footer` | Whether to show a footer, or custom footer content | `boolean \| RenderContent` |
| `onConfirm` | Confirm callback | `(e?: Event) => void` |
| `onCancel` | Cancel callback | `(e?: Event) => void` |
| `onClickOverlay` | Overlay click callback | `() => void` |
| `onKeyEscape` | Escape callback | `() => void` |

### DialogMethod

| Method | Description | Returns |
| ---------------------------------- | ------------------------------ | -------------------------------------- |
| `Dialog.open(config)` | Open a dialog | `Promise<DialogAction> & DialogReturn` |
| `Dialog.confirm(config)` | Confirmation dialog; defaults to `type: warning` | As above |
| `Dialog.alert(config)` | Alert dialog without a cancel button | As above |
| `Dialog.info(config)` | Information dialog | As above |
| `Dialog.success(config)` | Success dialog | As above |
| `Dialog.warning(config)` | Warning dialog | As above |
| `Dialog.error(config)` | Error dialog | As above |
| `Dialog.close()` | Close the latest functional dialog | `void` |
| `Dialog.setDefaultOptions(config)` | Set default programmatic options | `void` |
| `Dialog.resetDefaultOptions()` | Reset default programmatic options | `void` |

### DialogReturn

| Prop | Description |
| ---------------- | -------- |
| `close()` | Close |
| `update(config)` | Update options |

After installation, call through `app.config.globalProperties.$dialog`.

```ts
import type {
  DialogAction,
  DialogConfig,
  DialogMethod,
  DialogReturn,
  DialogService,
  DialogType,
} from "@cedar-design/ui";
```

## CSS Variables

Dialog public color variables have the same meanings as Maple: `--c-dialog-background` is the raised panel background (`surface-raised`); `--c-dialog-overlay-background` is the scrim; `--c-dialog-title-text-color` and `--c-dialog-content-text-color` are primary content; `--c-dialog-close-button-color` is the secondary action. `--c-dialog-status-{info|success|warning|danger}-color` uses readable content-info/success/warning/danger, not status fills. Business themes should override these component variables; shared themes should override the corresponding system variables. Borders, widths, spacing and layout retain desktop specifications.

The backdrop consumes `sys-color-scrim` through the Dialog component variable. Maple no longer uses Popup colors for Dialog. Set a per-instance backdrop variable via `overlay-style`; a variable on the panel (`dialog-style`) does not inherit to its sibling backdrop. Explicit `overlay-style.backgroundColor` wins. Teleported content needs variables on its actual DOM ancestors. Dark themes inherit the same semantic colors; geometry remains platform-specific. Status icons use readable content colors.

Variables are grouped by purpose: background/overlay-background for panel/scrim; border-* for panel/divider borders; title-* for title typography; content-* for body typography; actions-* for actions; close-button-* for the close button; status-* for semantic icons; simple-*/fullscreen-* for mode dimensions; animation-* for enter/leave motion. width/margin-top control ordinary panel layout. Internal drag/position variables are not public customization points.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-dialog-actions-button-gap` | `var(--c-sys-space-6)` | `margin-inline-start` |
| `--c-dialog-actions-padding` | `var(--c-sys-space-7) var(--c-sys-space-8)` | `padding` |
| `--c-dialog-animation-duration` | `var(--c-sys-motion-duration-slow)` | `transition` |
| `--c-dialog-animation-easing` | `var(--c-sys-motion-easing-standard)` | `transition` |
| `--c-dialog-background` | `var(--c-sys-color-surface-raised)` | `background-color` |
| `--c-dialog-border-color` | `var(--c-sys-color-border-default)` | `border-bottom`, `border-top` |
| `--c-dialog-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-dialog-border-width` | `1px` | `border-bottom`, `border-top` |
| `--c-dialog-close-button-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-dialog-close-button-font-size` | `var(--c-sys-font-size-lg)` | `font-size` |
| `--c-dialog-close-button-inset-inline-end` | `var(--c-sys-space-7)` | `inset-inline-end` |
| `--c-dialog-close-button-size` | `32px` | `height`, `width` |
| `--c-dialog-content-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-dialog-content-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-dialog-content-padding` | `28px var(--c-sys-space-8)` | `padding` |
| `--c-dialog-content-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-dialog-fullscreen-height` | `100vh` | `height` |
| `--c-dialog-fullscreen-width` | `100vw` | `width` |
| `--c-dialog-margin-top` | `100px` | `top` |
| `--c-dialog-overlay-background` | `var(--c-sys-color-scrim)` | `background-color` |
| `--c-dialog-simple-actions-gap` | `32px` | `margin-top` |
| `--c-dialog-simple-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-dialog-simple-content-gap` | `28px` | `margin-bottom` |
| `--c-dialog-simple-padding` | `28px 32px 32px` | `padding` |
| `--c-dialog-simple-width` | `400px` | `width` |
| `--c-dialog-status-danger-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-dialog-status-icon-gap` | `var(--c-sys-space-5)` | `margin-inline-end` |
| `--c-dialog-status-icon-size` | `18px` | `font-size` |
| `--c-dialog-status-info-color` | `var(--c-sys-color-content-info)` | `color` |
| `--c-dialog-status-success-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-dialog-status-warning-color` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-dialog-title-font-size` | `var(--c-sys-font-size-lg)` | `font-size` |
| `--c-dialog-title-font-weight` | `var(--c-sys-font-weight-medium)` | `font-weight` |
| `--c-dialog-title-justify` | `center` | `justify-content` |
| `--c-dialog-title-min-height` | `48px` | `min-height` |
| `--c-dialog-title-padding` | `0 var(--c-sys-space-8)` | `padding` |
| `--c-dialog-title-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-dialog-width` | `520px` | `width` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-dialog-actions-button-gap: var(--c-sys-space-6);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
