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

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Explicit left/right popup corners remain physical. Icons, content, close actions and footer actions follow reading direction. Programmatic calls use explicit or document direction without borrowing another application instance's context.

## Usage notes

### Configuration

After Teleport, theme variables follow actual DOM ancestors. Variables inside content do not propagate upward to service-created containers.

Exceptions from close/closed notification callbacks do not retain closed entries or empty manager hosts. Resource cleanup is independent of callback execution.

## API

clear removes entries and releases their IDs synchronously. Adding the same ID afterward creates a new entry with a full display duration. Ordinary updates keep active entries in place, and clear does not additionally invoke the business onClose callback. Reduced motion disables built-in enter/leave transitions and movement while retaining static layout, colors and display duration.

duration (default 3000ms; 0 stays open) is a business display timer, not CSS animation duration. close notifies once per mounted instance and immediately cancels timers. Updates/repeated closing during leave do not reschedule auto-close. reset-on-update restarts only active, unclosed instances. KeepAlive deactivation cancels timing; reactivation restarts the full configured duration. Unmounting/stale callbacks emit no delayed close. TransitionGroup unmounts after actual leave completion, independently of duration. Six transition-* tokens control opacity/left/right enter/leave without changing auto-close deadlines.

### Notification Methods

`Notification` global methods can be used in three ways:

1. Call `this.$notification`
2. In Composition API, call `getCurrentInstance().appContext.config.globalProperties.$notification`
3. Import `Notification` and call its methods directly

All these entry points support `remove` and `clear`. Without a DOM on the server, notification methods return a no-op handle whose `close()` is safe to call. No notification is created or automatically replayed on the client.

Import-based calls cannot obtain the current Vue Context. AppContext injections such as i18n or route
must be supplied manually in the call, or by configuring a global AppContext for the component.

```ts
import { createApp } from 'vue'
import { Notification } from '@cedar-design/ui'

const app = createApp(App)
Notification._context = app._context
```

## Types

### NotificationMethod

| Parameter | Description | Type | Default |
| ------- | ---------------------- | ------------------------------------------------------------------------------------------------ | :----: |
| info | Show an information notification | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` | `-` |
| success | Show a success notification | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` | `-` |
| warning | Show a warning notification | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` | `-` |
| error | Show an error notification | `(    config: string \| NotificationConfig,    appContext?: AppContext  ) => NotificationReturn` | `-` |
| remove | Clear the notification with the specified `id` | `(id: string) => void` | `-` |
| clear | Clear all notifications | `(position?: NotificationPosition) => void`<br>`NotificationPosition: 'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `-` |

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
| closeButtonAriaLabel | Accessible name for the close button | `string` | `Close notification` |  |
| onClose | Close callback | `(id: number \| string) => void` | `-` |  |

`NotificationConfig` configures service calls; `NotificationProps` describes the underlying view fields `type`, `showIcon`, `closable`, `duration`, `resetOnUpdate`, and `closeButtonAriaLabel` and is not the service configuration. Updating an active ID resets its timer only when `duration` is explicitly supplied; otherwise the current timer continues.

### NotificationReturn

| Parameter | Description | Type | Default |
| ------ | ------------------ | ------------ | :----: |
| close | Close the current notification | `() => void` | `-` |

The component exports the following types

```ts
import type { NotificationInstance, NotificationConfig, NotificationReturn } from '@cedar-design/ui'
```

## CSS Variables

Panels use surface-overlay; body/title use content-primary; close buttons use content-secondary; borders use border-default. Status icons use readable status content colors: info no longer uses brand fills, and loading uses content-brand. Colors are grouped by status. Custom backgrounds require checking content/icon/close contrast. Plain-text actions/footers inherit panel content color; applications own independently styled slots.

wrapper-* controls list position/spacing; padding-*/margin-* control panel layout; icon-*/title-*/content-* control typography; close-* controls close buttons; border-*/box-shadow control borders/shadows; transition-* controls motion; z-index controls stacking. Existing geometry/motion defaults remain. The table lists actual declarations, not a claim that every historical geometry variable has verified consumers.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-notification-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-notification-border-style` | `solid` | `border` |
| `--c-notification-border-width` | `1px` | `border` |
| `--c-notification-box-shadow` | `0 4px 12px rgba(0, 0, 0, 0.15)` | `box-shadow` |
| `--c-notification-close-icon-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-notification-close-icon-font-size` | `12px` | `font-size` |
| `--c-notification-close-icon-hover-size` | `20px` | `height`, `width` |
| `--c-notification-close-icon-right` | `var(--c-spacing-6)` | `inset-inline-end` |
| `--c-notification-close-icon-top` | `var(--c-spacing-6)` | `top` |
| `--c-notification-content-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-notification-error-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-notification-error-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-notification-error-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-error-icon-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-notification-error-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-footer-margin-top` | `var(--c-spacing-7)` | `margin-top` |
| `--c-notification-icon-font-size` | `24px` | `font-size` |
| `--c-notification-icon-margin-right` | `var(--c-spacing-7)` | `padding-inline-end` |
| `--c-notification-info-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-notification-info-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-notification-info-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-info-icon-color` | `var(--c-sys-color-content-info)` | `color` |
| `--c-notification-info-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-margin-bottom` | `var(--c-spacing-8)` | `margin-bottom` |
| `--c-notification-normal-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-notification-normal-border-color` | `var(--c-sys-color-border-default)` | `border` |
| `--c-notification-normal-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-normal-icon-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-normal-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-padding-bottom` | `var(--c-spacing-8)` | `padding` |
| `--c-notification-padding-left` | `var(--c-spacing-8)` | `padding`, `width` |
| `--c-notification-padding-right` | `var(--c-spacing-8)` | `padding`, `width` |
| `--c-notification-padding-top` | `var(--c-spacing-8)` | `padding` |
| `--c-notification-success-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-notification-success-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-notification-success-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-success-icon-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-notification-success-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-title-font-size` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-notification-title-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-notification-title-margin-bottom` | `var(--c-spacing-2)` | `margin-top` |
| `--c-notification-transition-duration` | `var(--c-transition-duration-2)` | `transition` |
| `--c-notification-transition-duration-enter` | `var(--c-transition-duration-4)` | `transition` |
| `--c-notification-transition-duration-leave` | `var(--c-transition-duration-3)` | `transition` |
| `--c-notification-transition-timing-function` | `var(--c-transition-timing-function-linear)` | `transition` |
| `--c-notification-transition-timing-function-enter` | `var(--c-transition-timing-function-overshoot)` | `transition` |
| `--c-notification-transition-timing-function-leave` | `var(--c-transition-timing-function-standard)` | `transition` |
| `--c-notification-warning-bg` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-notification-warning-border-color` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-notification-warning-content-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-warning-icon-color` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-notification-warning-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-notification-width` | `300px` | `width` |
| `--c-notification-wrapper-margin-bottom` | `var(--c-spacing-8)` | `bottom` |
| `--c-notification-wrapper-margin-left` | `var(--c-spacing-8)` | `left` |
| `--c-notification-wrapper-margin-right` | `var(--c-spacing-8)` | `right` |
| `--c-notification-wrapper-margin-top` | `var(--c-spacing-8)` | `top` |
| `--c-notification-z-index` | `var(--c-z-index-notification)` | `z-index` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-notification-border-radius: var(--c-border-radius-md);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
