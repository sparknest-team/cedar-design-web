---
lang: en-US
permalink: /en/components/notification/
---

# Notification

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"` and supports runtime and nested overrides. Explicit left/right notification corners remain physical. Icons, content, close actions and footers follow reading direction. Imperative calls use explicit or document direction rather than borrowing another app context.

## API

clear immediately releases entries and IDs. Re-adding the same ID, even in the same update cycle, creates an independent internal instance and a fresh complete display timer. Ordinary active-ID updates remain in place. Internal keys are not public API. clear still does not add business onClose calls. Reduced-motion component styles disable opacity, left/right enter, appear and leave transitions and initial displacement without a global tiny-duration fallback. Static layout/colors and business display deadlines remain unchanged. Real OS/browser matrices require separate validation.

duration (default 3000ms; 0 stays open) is a business display timer, not CSS animation duration. close notifies once per mounted instance and immediately cancels timers. Updates/repeated closing during leave do not reschedule auto-close. reset-on-update restarts only active, unclosed instances. KeepAlive deactivation cancels timing; reactivation restarts the full configured duration. Unmounting/stale callbacks emit no delayed close. TransitionGroup unmounts after actual leave completion, independently of duration. Six transition-* tokens control opacity/left/right enter/leave without changing auto-close deadlines. Normal override checks are not real OS reduced-motion validation.

### `Notification` global methods

`Notification` global methods can be used in three ways:

1. Call `this.$notification`
2. In Composition API, call `getCurrentInstance().appContext.config.globalProperties.$notification`
3. Import `Notification` and call its methods directly

Import-based calls cannot obtain the current Vue Context. AppContext injections such as i18n or route
must be supplied manually in the call, or by configuring a global AppContext for the component.

```ts
import { createApp } from 'vue'
import { Notification } from '@cedar-design/ui'

const app = createApp(App)
Notification._context = app._context
```

### NotificationMethod

| Parameter | Description | Type | Default |
| ------- | ---------------------- | ------------------------------------------------------------------------------------------------ | :----: |
| info | Show an information notification | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` | `-` |
| success | Show a success notification | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` | `-` |
| warning | Show a warning notification | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` | `-` |
| error | Show an error notification | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` | `-` |
| remove | Clear the notification with the specified `id` | `(id: string) => void` | `-` |
| clear | Clear all notifications | `(position?: NotificationPosition) => void` | `-` |

### NotificationConfig

| Parameter | Description | Type | Default | Version |
| ---------------- | --------------------------- | ---------------------------------------------------- | :-----: | :----- |
| content | Content | `RenderContent` | `-` |  |
| title | Title | `RenderContent` | `-` |  |
| icon | Icon | `RenderFunction` | `-` |  |
| id | Unique id | `string` | `-` |  |
| style | Style | `CSSProperties` | `-` |  |
| class | Class name | `ClassName` | `-` |  |
| position | Physical corner of the notification itself in the viewport, default top-right. Corner values use vertical-first kebab-case spelling | `'top-left'\|'top-right'\|'bottom-left'\|'bottom-right'` | `top-right` |  |
| showIcon | Whether to show the icon | `boolean` | `true` |  |
| closable | Whether closable | `boolean` | `false` |  |
| duration | Display duration in `ms` | `number` | `3000` |  |
| footer | Footer content | `RenderFunction` | `-` | 2.25.0 |
| closeIcon | Close-button icon | `RenderFunction` | `-` |  |
| closeIconElement | Close-button element | `RenderFunction` | `-` |  |
| onClose | Close callback | `(id: number \| string) => void` | `-` |  |

### NotificationReturn

| Parameter | Description | Type | Default |
| ------ | ------------------ | ------------ | :----: |
| close | Close the current notification | `() => void` | `-` |

### Type definitions

The component exports the following types

```ts
import type { NotificationInstance, NotificationConfig, NotificationReturn } from '@cedar-design/ui'
```

## Public CSS variables

Panels use surface-overlay; body/title use content-primary; close buttons use content-secondary; borders use border-default. Status icons use readable status content colors: info no longer uses brand fills, and loading uses content-brand. Colors are grouped by status. Custom backgrounds require checking content/icon/close contrast. Plain-text actions/footers inherit panel content color; applications own independently styled slots.

wrapper-* controls list position/spacing; padding-*/margin-* control panel layout; icon-*/title-*/content-* control typography; close-* controls close buttons; border-*/box-shadow control borders/shadows; transition-* controls motion; z-index controls stacking. Existing geometry/motion defaults remain. The table lists actual declarations, not a claim that every historical geometry variable has verified consumers.

| Variable | Default |
| --- | --- |
| `--c-notification-wrapper-margin-top` | `var(--c-spacing-8)` |
| `--c-notification-wrapper-margin-bottom` | `var(--c-spacing-8)` |
| `--c-notification-wrapper-margin-left` | `var(--c-spacing-8)` |
| `--c-notification-wrapper-margin-right` | `var(--c-spacing-8)` |
| `--c-notification-z-index` | `var(--c-z-index-notification)` |
| `--c-notification-border-radius` | `var(--c-border-radius-md)` |
| `--c-notification-margin-bottom` | `var(--c-spacing-8)` |
| `--c-notification-width` | `300px` |
| `--c-notification-padding-top` | `var(--c-spacing-8)` |
| `--c-notification-padding-bottom` | `var(--c-spacing-8)` |
| `--c-notification-padding-left` | `var(--c-spacing-8)` |
| `--c-notification-padding-right` | `var(--c-spacing-8)` |
| `--c-notification-icon-font-size` | `24px` |
| `--c-notification-title-font-size` | `var(--c-font-size-title-1)` |
| `--c-notification-title-font-weight` | `var(--c-font-weight-500)` |
| `--c-notification-content-font-size` | `var(--c-font-size-body-3)` |
| `--c-notification-icon-margin-right` | `var(--c-spacing-7)` |
| `--c-notification-title-margin-bottom` | `var(--c-spacing-2)` |
| `--c-notification-footer-margin-top` | `var(--c-spacing-7)` |
| `--c-notification-box-shadow` | `0 4px 12px rgba(0, 0, 0, 0.15)` |
| `--c-notification-border-width` | `1px` |
| `--c-notification-border-style` | `solid` |
| `--c-notification-close-icon-color` | `var(--c-sys-color-content-secondary)` |
| `--c-notification-close-icon-font-size` | `12px` |
| `--c-notification-close-icon-top` | `var(--c-spacing-6)` |
| `--c-notification-close-icon-right` | `var(--c-spacing-6)` |
| `--c-notification-close-icon-hover-size` | `20px` |
| `--c-notification-normal-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-notification-normal-icon-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-normal-title-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-normal-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-normal-border-color` | `var(--c-sys-color-border-default)` |
| `--c-notification-info-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-notification-info-icon-color` | `var(--c-sys-color-content-info)` |
| `--c-notification-info-title-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-info-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-info-border-color` | `var(--c-sys-color-border-default)` |
| `--c-notification-success-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-notification-success-icon-color` | `var(--c-sys-color-content-success)` |
| `--c-notification-success-title-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-success-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-success-border-color` | `var(--c-sys-color-border-default)` |
| `--c-notification-warning-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-notification-warning-icon-color` | `var(--c-sys-color-content-warning)` |
| `--c-notification-warning-title-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-warning-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-warning-border-color` | `var(--c-sys-color-border-default)` |
| `--c-notification-error-bg` | `var(--c-sys-color-surface-overlay)` |
| `--c-notification-error-icon-color` | `var(--c-sys-color-content-danger)` |
| `--c-notification-error-title-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-error-content-color` | `var(--c-sys-color-content-primary)` |
| `--c-notification-error-border-color` | `var(--c-sys-color-border-default)` |
| `--c-notification-transition-duration` | `var(--c-transition-duration-2)` |
| `--c-notification-transition-duration-enter` | `var(--c-transition-duration-4)` |
| `--c-notification-transition-duration-leave` | `var(--c-transition-duration-3)` |
| `--c-notification-transition-timing-function` | `var(--c-transition-timing-function-linear)` |
| `--c-notification-transition-timing-function-enter` | `var(--c-transition-timing-function-overshoot)` |
| `--c-notification-transition-timing-function-leave` | `var(--c-transition-timing-function-standard)` |

After Teleport, theme variables follow actual DOM ancestors. Variables inside content do not propagate upward to service-created containers.

A throwing close/closed notification cannot retain the closed item or its empty manager host. Resources are released independently of notification callbacks.
