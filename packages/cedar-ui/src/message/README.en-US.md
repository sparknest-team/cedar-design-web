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

Inherits the nearest `dir="ltr|rtl"` and supports runtime and nested overrides. Content, icon and close gaps follow reading direction. Direction changes preserve message type, timing and close semantics. Imperative calls use explicit or document direction.

## API

### Props / MessageOptions

| Prop | Description | Type | Default |
| --------------------- | -------------------------------------- | ------------------------------------------------------------ | --------------- |
| open / `v-model:open` | Controlled visibility | `boolean` | `false` |
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

### Events

`update:open`, `open`, `opened`, `close`, and `closed`, emitted once per visibility cycle.

### Methods

| Method | Description |
| ------------------------------------------------- | ------------------------ |
| `Message(options \| string)` | Open a default message |
| `Message.info/success/warning/error/loading(...)` | Open a message with the corresponding status |
| `Message.clear(position?)` | Clear all messages or a specified position |
| `Message.setDefaultOptions(options)` | Set defaults for subsequent calls |
| `Message.resetDefaultOptions()` | Restore defaults |

Returns `{ close() }`. Repeated `close()` calls do not duplicate closing lifecycle events.

### Slots

`default`、`icon`、`action`。

## Public CSS variables

Visual variant is independent of status. neutral uses a neutral popup and status icon; tonal uses a low-emphasis status background with dark content; solid uses a high-emphasis fill and matching foreground. Cedar/Maple both default to neutral; explicit solid/tonal have matching visual semantics. default/loading solid retains a dark background, with the loading icon indicating progress. Both export MessageVariant; function calls, setDefaultOptions and same-id updates support variant.

Colors use `--c-message-{variant}-{status}-{bg|content-color|icon-color|border-color|close-color}`. bg sets the panel background; content-color sets body/action text unless separately styled; icon-color sets status icons; border-color sets borders; close-color sets close controls. With a custom background, verify all three foregrounds. Geometry retains platform density rather than forcing equal defaults. Variables must affect actual Teleport-container ancestors.

| Variable | Default |
| --- | --- |
| `--c-message-neutral-default-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-message-neutral-default-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-neutral-default-icon-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-neutral-default-border-color` | `var(--c-sys-color-border-default)` |
| `--c-message-neutral-default-close-color` | `var(--c-sys-color-content-secondary)` |
| `--c-message-neutral-info-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-message-neutral-info-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-neutral-info-icon-color` | `var(--c-sys-color-content-info)` |
| `--c-message-neutral-info-border-color` | `var(--c-sys-color-border-default)` |
| `--c-message-neutral-info-close-color` | `var(--c-sys-color-content-secondary)` |
| `--c-message-neutral-success-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-message-neutral-success-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-neutral-success-icon-color` | `var(--c-sys-color-content-success)` |
| `--c-message-neutral-success-border-color` | `var(--c-sys-color-border-default)` |
| `--c-message-neutral-success-close-color` | `var(--c-sys-color-content-secondary)` |
| `--c-message-neutral-warning-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-message-neutral-warning-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-neutral-warning-icon-color` | `var(--c-sys-color-content-warning)` |
| `--c-message-neutral-warning-border-color` | `var(--c-sys-color-border-default)` |
| `--c-message-neutral-warning-close-color` | `var(--c-sys-color-content-secondary)` |
| `--c-message-neutral-danger-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-message-neutral-danger-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-neutral-danger-icon-color` | `var(--c-sys-color-content-danger)` |
| `--c-message-neutral-danger-border-color` | `var(--c-sys-color-border-default)` |
| `--c-message-neutral-danger-close-color` | `var(--c-sys-color-content-secondary)` |
| `--c-message-neutral-loading-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-message-neutral-loading-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-neutral-loading-icon-color` | `var(--c-sys-color-content-brand)` |
| `--c-message-neutral-loading-border-color` | `var(--c-sys-color-border-default)` |
| `--c-message-neutral-loading-close-color` | `var(--c-sys-color-content-secondary)` |
| `--c-message-tonal-default-bg` | `var(--c-sys-color-surface-muted)` |
| `--c-message-tonal-default-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-default-icon-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-default-border-color` | `transparent` |
| `--c-message-tonal-default-close-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-info-bg` | `rgba(var(--c-blue-6), 0.12)` |
| `--c-message-tonal-info-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-info-icon-color` | `var(--c-sys-color-content-info)` |
| `--c-message-tonal-info-border-color` | `transparent` |
| `--c-message-tonal-info-close-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-success-bg` | `var(--c-color-success-light-1)` |
| `--c-message-tonal-success-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-success-icon-color` | `var(--c-sys-color-content-success)` |
| `--c-message-tonal-success-border-color` | `transparent` |
| `--c-message-tonal-success-close-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-warning-bg` | `var(--c-color-warning-light-1)` |
| `--c-message-tonal-warning-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-warning-icon-color` | `var(--c-sys-color-content-warning)` |
| `--c-message-tonal-warning-border-color` | `transparent` |
| `--c-message-tonal-warning-close-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-danger-bg` | `var(--c-color-danger-light-1)` |
| `--c-message-tonal-danger-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-danger-icon-color` | `var(--c-sys-color-content-danger)` |
| `--c-message-tonal-danger-border-color` | `transparent` |
| `--c-message-tonal-danger-close-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-loading-bg` | `var(--c-color-primary-light-1)` |
| `--c-message-tonal-loading-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-tonal-loading-icon-color` | `var(--c-sys-color-content-brand)` |
| `--c-message-tonal-loading-border-color` | `transparent` |
| `--c-message-tonal-loading-close-color` | `var(--c-sys-color-content-primary)` |
| `--c-message-solid-default-bg` | `#333` |
| `--c-message-solid-default-content-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-message-solid-default-icon-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-message-solid-default-border-color` | `transparent` |
| `--c-message-solid-default-close-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-message-solid-info-bg` | `var(--c-sys-color-status-info)` |
| `--c-message-solid-info-content-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-info-icon-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-info-border-color` | `transparent` |
| `--c-message-solid-info-close-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-success-bg` | `var(--c-sys-color-status-success)` |
| `--c-message-solid-success-content-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-success-icon-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-success-border-color` | `transparent` |
| `--c-message-solid-success-close-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-warning-bg` | `var(--c-sys-color-status-warning)` |
| `--c-message-solid-warning-content-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-warning-icon-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-warning-border-color` | `transparent` |
| `--c-message-solid-warning-close-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-danger-bg` | `var(--c-sys-color-status-danger)` |
| `--c-message-solid-danger-content-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-danger-icon-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-danger-border-color` | `transparent` |
| `--c-message-solid-danger-close-color` | `var(--c-sys-color-content-on-bright)` |
| `--c-message-solid-loading-bg` | `#333` |
| `--c-message-solid-loading-content-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-message-solid-loading-icon-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-message-solid-loading-border-color` | `transparent` |
| `--c-message-solid-loading-close-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-message-wrapper-margin-top` | `var(--c-spacing-12)` |
| `--c-message-wrapper-margin-bottom` | `var(--c-spacing-12)` |
| `--c-message-wrapper-padding-horizontal` | `var(--c-spacing-5)` |
| `--c-message-z-index` | `var(--c-z-index-message)` |
| `--c-message-padding-top` | `var(--c-spacing-5)` |
| `--c-message-padding-bottom` | `var(--c-spacing-5)` |
| `--c-message-padding-left` | `var(--c-spacing-7)` |
| `--c-message-padding-right` | `var(--c-spacing-7)` |
| `--c-message-margin-bottom` | `var(--c-spacing-7)` |
| `--c-message-border-radius` | `var(--c-border-radius-sm)` |
| `--c-message-icon-font-size` | `20px` |
| `--c-message-content-font-size` | `var(--c-font-size-body-3)` |
| `--c-message-icon-margin-right` | `var(--c-spacing-4)` |
| `--c-message-box-shadow` | `var(--c-shadow2-down)` |
| `--c-message-border-width` | `1px` |
| `--c-message-border-style` | `solid` |
| `--c-message-close-icon-font-size` | `12px` |
| `--c-message-close-btn-margin-left` | `var(--c-spacing-4)` |
| `--c-message-close-icon-hover-size` | `20px` |
| `--c-message-close-icon-hover-opacity` | `0.08` |
| `--c-message-transition-duration` | `var(--c-transition-duration-1)` |
| `--c-message-transition-duration-icon` | `var(--c-transition-duration-4)` |
| `--c-message-transition-timing-function` | `var( --c-transition-timing-function-linear )` |
| `--c-message-transition-timing-function-icon` | `var( --c-transition-timing-function-overshoot )` |

A throwing close/closed notification cannot retain the closed item or its empty manager host. Resources are released independently of notification callbacks.
