---
lang: en-US
permalink: /en/components/message/
---

# Message

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Type

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `status` | Semantic status | Appearance Lab |
| `position` | Region of the message itself in the viewport: top/center/bottom, default top. Not positioned relative to a trigger | Appearance Lab |
| `closable` | Show the close button | Appearance Lab |
| `duration` | Auto-close duration in ms; `0` disables automatic closing | Appearance Lab |
| `variant` | Visual emphasis | Appearance Lab |
<!-- demo-config-notes:end -->


<demo src="./__demos__/type.vue"></demo>

### Variant

<demo src="./__demos__/variant.vue"></demo>

### Appearance Lab

- `status`: Selects the semantic state.

<demo src="./__demos__/appearance-lab.vue"></demo>

## Layout and arrangement

### Location

<demo src="./__demos__/location.vue"></demo>

## Content and presentation

### Time

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `status` | Semantic status | Component |
| `position` | Region of the message itself in the viewport: top/center/bottom, default top. Not positioned relative to a trigger | Component |
| `closable` | Show the close button | Component |
| `duration` | Auto-close duration in ms; `0` disables automatic closing | Component |
<!-- demo-config-notes:end -->


<demo src="./__demos__/time.vue"></demo>

### Update

<demo src="./__demos__/update.vue"></demo>

### Pause On Hover

<demo src="./__demos__/pause-on-hover.vue"></demo>

### Component

- `status`: Selects the semantic state.

<demo src="./__demos__/component.vue"></demo>

## Customization and slots

### Custom Icon

<demo src="./__demos__/custom-icon.vue"></demo>

## Interaction and control

### Closable

<demo src="./__demos__/closable.vue"></demo>

### Loading

<demo src="./__demos__/loading.vue"></demo>

<demo src="./__demos__/multiple.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Content, icons and close-button spacing follow reading order. Direction changes do not alter message type, timers or closing. Programmatic calls use explicit configuration or document direction.

## Usage notes

### Component attribute forwarding

`Message.Component` forwards `id`, `class`, `style`, `aria-*` and native event listeners to its actual `role="alert"` region: the Cedar message root or the Maple inner visible panel. Each attribute is applied once. Required internal roles and classes remain; component lifecycle listeners such as `open` are not bound as DOM listeners. Native attributes update with the parent in both inline and Teleport modes. `dir` continues to determine reading direction. A function service `id` identifies the message for updates and is separate from a component native DOM `id`.
### Configuration

Visual variant is independent of status. neutral uses a neutral popup and status icon; tonal uses a low-emphasis status background with dark content; solid uses a high-emphasis fill and matching foreground. Cedar/Maple both default to neutral; explicit solid/tonal have matching visual semantics. default/loading solid retains a dark background, with the loading icon indicating progress. Both export MessageVariant; function calls, setDefaultOptions and same-id updates support variant.

Exceptions from close/closed notification callbacks do not retain closed entries or empty manager hosts. Resource cleanup is independent of callback execution.

## API

### Message Options

| Prop | Description | Type | Default |
| --------------------- | -------------------------------------- | ------------------------------------------------------------ | --------------- |
| `open` | Controlled visibility Supports `v-model:open`. | `boolean` | `false` |
| id | Unique queue identifier; the same id updates the existing instance | `string \| number` | Automatically generated |
| status | Semantic status | `default \| info \| success \| warning \| danger \| loading` | `default` |
| variant | Visual emphasis | `neutral \| tonal \| solid` | `neutral` |
| position | Region of the message itself in the viewport: top/center/bottom, default top. Not positioned relative to a trigger | `top \| center \| bottom` | `top` |
| content | Content | `MessageContent` | - |
| icon | Custom icon | `MessageContent` | - |
| action | Action-area content | `MessageContent` | - |
| duration | Auto-close duration in ms; `0` disables automatic closing | `number` | `3000` |
| showIcon | Whether to show the status icon | `boolean` | `true` |
| closable | Show the close button | `boolean` | `false` |
| pauseOnHover | Pause while hovered | `boolean` | `false` |
| resetOnUpdate | Whether same-id updates reset the complete duration | `boolean` | `false` |
| closeButtonAriaLabel | Close button label | `string` | `Close message` |
| popupContainer | Mount container; function-call queues are isolated by container and position | `string \| HTMLElement \| false` | `body` |

Function options additionally accept `onOpen / onOpened / onClose / onClosed`. Close callbacks receive the current `id`.

### Message Events

`update:open`, `open`, `opened`, `close`, and `closed`, emitted once per visibility cycle. When an initially open message hydrates, it skips the initial enter animation and emits `opened` after `open` on mount.

### Message Methods

| Method | Description |
| ------------------------------------------------- | ------------------------ |
| `Message(options \| string)` | Open a default message |
| `Message.info/success/warning/error/loading(...)` | Open a message with the corresponding status |
| `Message.clear(position?)` | Clear all messages or a specified position |
| `Message.setDefaultOptions(options)` | Set defaults for subsequent calls |
| `Message.resetDefaultOptions()` | Restore defaults |

Returns `{ close() }`; repeated calls do not repeat closing. A handle owns a specific message item: it remains valid for same-id updates of that item, but cannot close a new item after the old item completed leaving and its id was reused.

The optional second appContext argument applies to each message: injections, registered components, global properties and error handling use that application context. It does not capture a local Provider at the call site. Applications still share one queue and chronological stack per target/position; Message.clear continues clearing across applications. Each call uses its explicit context, then the current install default. An update with no available context retains the existing item scope. Switching a same-id item to another available context remounts its presentation and restarts its duration while keeping its business handle valid; other items keep their presentation and timers.

`Message.Component` retains its real Props and instance types. Its `restartTimer()` instance method resets only while active, open and resetOnUpdate=true. It is not a service-handle method; while hover-paused, it resets only the saved remaining duration.

| Component instance method | Description |
| ---- | ---- |
| restartTimer() | Reset the current duration, subject to active, open, resetOnUpdate and hover-pause state |

`MessageContent` is `VNodeChild | (() => VNodeChild)`: text, numbers, empty boolean children, VNodes, nested child arrays and synchronous render functions. Arbitrary plain objects and asynchronous tasks are not renderable content. content, icon and action share this protocol; local slots take precedence.

duration must be finite and nonnegative. Negative values, NaN and Infinity do not schedule automatic closure and trigger development prop validation. Zero stays open; restartTimer follows the same rules.

### Message Slots

`default`、`icon`、`action`。


Messages automatically stay above active popups in the current document and track newly opened popups and explicit `zIndex` changes. They do not take over dialog focus or Esc handling. `--c-message-z-index` sets the minimum message stacking level. Custom mount containers must still avoid ancestor stacking contexts and clipping constraints.

## CSS Variables

Colors use `--c-message-{variant}-{status}-{bg|content-color|icon-color|border-color|close-color}`. bg sets the panel background; content-color sets body/action text unless separately styled; icon-color sets status icons; border-color sets borders; close-color sets close controls. With a custom background, verify all three foregrounds. Geometry retains platform density rather than forcing equal defaults. Variables must affect actual Teleport-container ancestors.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-message-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-message-border-style` | `solid` | `border` |
| `--c-message-border-width` | `1px` | `border` |
| `--c-message-box-shadow` | `var(--c-shadow2-down)` | `box-shadow` |
| `--c-message-close-btn-margin-left` | `var(--c-spacing-4)` | `margin-inline-start` |
| `--c-message-close-icon-font-size` | `12px` | `font-size` |
| `--c-message-close-icon-hover-opacity` | `0.08` | `opacity` |
| `--c-message-close-icon-hover-size` | `20px` | `height`, `width` |
| `--c-message-content-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-message-icon-font-size` | `20px` | `font-size` |
| `--c-message-icon-margin-right` | `var(--c-spacing-4)` | `margin-inline-end`, `margin-inline-start` |
| `--c-message-margin-bottom` | `var(--c-spacing-7)` | `margin-bottom` |
| `--c-message-neutral-danger-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-message-neutral-danger-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-message-neutral-danger-close-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-message-neutral-danger-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-neutral-danger-icon-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-message-neutral-default-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-message-neutral-default-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-message-neutral-default-close-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-message-neutral-default-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-neutral-default-icon-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-neutral-info-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-message-neutral-info-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-message-neutral-info-close-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-message-neutral-info-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-neutral-info-icon-color` | `var(--c-sys-color-content-info)` | `color` |
| `--c-message-neutral-loading-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-message-neutral-loading-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-message-neutral-loading-close-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-message-neutral-loading-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-neutral-loading-icon-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-message-neutral-success-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-message-neutral-success-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-message-neutral-success-close-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-message-neutral-success-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-neutral-success-icon-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-message-neutral-warning-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-message-neutral-warning-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-message-neutral-warning-close-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-message-neutral-warning-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-neutral-warning-icon-color` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-message-padding-bottom` | `var(--c-spacing-5)` | `padding` |
| `--c-message-padding-left` | `var(--c-spacing-7)` | `padding` |
| `--c-message-padding-right` | `var(--c-spacing-7)` | `padding` |
| `--c-message-padding-top` | `var(--c-spacing-5)` | `padding` |
| `--c-message-solid-danger-bg` | `var(--c-sys-color-status-danger)` | `background-color` |
| `--c-message-solid-danger-border-color` | `transparent` | `border-color` |
| `--c-message-solid-danger-close-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-danger-content-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-danger-icon-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-default-bg` | `#333` | `background-color` |
| `--c-message-solid-default-border-color` | `transparent` | `border-color` |
| `--c-message-solid-default-close-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-message-solid-default-content-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-message-solid-default-icon-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-message-solid-info-bg` | `var(--c-sys-color-status-info)` | `background-color` |
| `--c-message-solid-info-border-color` | `transparent` | `border-color` |
| `--c-message-solid-info-close-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-info-content-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-info-icon-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-loading-bg` | `#333` | `background-color` |
| `--c-message-solid-loading-border-color` | `transparent` | `border-color` |
| `--c-message-solid-loading-close-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-message-solid-loading-content-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-message-solid-loading-icon-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-message-solid-success-bg` | `var(--c-sys-color-status-success)` | `background-color` |
| `--c-message-solid-success-border-color` | `transparent` | `border-color` |
| `--c-message-solid-success-close-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-success-content-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-success-icon-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-warning-bg` | `var(--c-sys-color-status-warning)` | `background-color` |
| `--c-message-solid-warning-border-color` | `transparent` | `border-color` |
| `--c-message-solid-warning-close-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-warning-content-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-solid-warning-icon-color` | `var(--c-sys-color-content-on-bright)` | `color` |
| `--c-message-tonal-danger-bg` | `var(--c-color-danger-light-1)` | `background-color` |
| `--c-message-tonal-danger-border-color` | `transparent` | `border-color` |
| `--c-message-tonal-danger-close-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-danger-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-danger-icon-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-message-tonal-default-bg` | `var(--c-sys-color-surface-muted)` | `background-color` |
| `--c-message-tonal-default-border-color` | `transparent` | `border-color` |
| `--c-message-tonal-default-close-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-default-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-default-icon-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-info-bg` | `rgba(var(--c-blue-6), 0.12)` | `background-color` |
| `--c-message-tonal-info-border-color` | `transparent` | `border-color` |
| `--c-message-tonal-info-close-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-info-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-info-icon-color` | `var(--c-sys-color-content-info)` | `color` |
| `--c-message-tonal-loading-bg` | `var(--c-color-primary-light-1)` | `background-color` |
| `--c-message-tonal-loading-border-color` | `transparent` | `border-color` |
| `--c-message-tonal-loading-close-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-loading-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-loading-icon-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-message-tonal-success-bg` | `var(--c-color-success-light-1)` | `background-color` |
| `--c-message-tonal-success-border-color` | `transparent` | `border-color` |
| `--c-message-tonal-success-close-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-success-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-success-icon-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-message-tonal-warning-bg` | `var(--c-color-warning-light-1)` | `background-color` |
| `--c-message-tonal-warning-border-color` | `transparent` | `border-color` |
| `--c-message-tonal-warning-close-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-warning-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-message-tonal-warning-icon-color` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-message-transition-duration` | `var(--c-transition-duration-1)` | `animation`, `transition` |
| `--c-message-transition-duration-icon` | `var(--c-transition-duration-4)` | `animation` |
| `--c-message-transition-timing-function` | `var(--c-transition-timing-function-linear)` | `animation`, `transition` |
| `--c-message-transition-timing-function-icon` | `var(--c-transition-timing-function-overshoot)` | `animation` |
| `--c-message-wrapper-margin-bottom` | `var(--c-spacing-12)` | `bottom` |
| `--c-message-wrapper-margin-top` | `var(--c-spacing-12)` | `top` |
| `--c-message-wrapper-padding-horizontal` | `var(--c-spacing-5)` | `padding` |
| `--c-message-z-index` | `var(--c-z-index-message)` | `z-index` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-message-border-radius: var(--c-border-radius-sm);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
