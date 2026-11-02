---
lang: en-US
permalink: /en/components/alert/
---

# Alert

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Appearance configuration comparison

Choose an axis to compare its available values with the same content and model. Other settings remain unchanged while comparing.

<demo src="./__demos__/appearance-lab.vue"></demo>

## Content and presentation

### Title, alignment and banners

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `title` | Alert title | Title, alignment and banners, Action |
| `status` | Alert status | Title, alignment and banners, Show Icon |
| `center` | Whether to center the content | Title, alignment and banners |
| `banner` | Whether to display a top banner without borders or rounded corners | Title, alignment and banners |
| `show-icon` | Whether to show an icon | Show Icon |
| `closable` | Whether to show the close button | Action |
<!-- demo-config-notes:end -->


Compare title hierarchy, centered content and page-wide banners. Actions and dismiss behavior have separate examples.

<demo src="./__demos__/content-comparison.vue"></demo>

### Show Icon

- `status`: Selects the semantic state.

<demo src="./__demos__/show-icon.vue"></demo>

### Action

<demo src="./__demos__/action.vue"></demo>

## Customization and slots

### Custom Icon

- `status`: Selects the semantic state.

<demo src="./__demos__/custom-icon.vue"></demo>

## Interaction and control

### Dismiss controls and custom icons

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `closable` | Whether to show the close button | Dismiss controls and custom icons |
| `status` | Alert status | Dismiss controls and custom icons |
<!-- demo-config-notes:end -->


Operate the default and custom dismiss controls to compare the same dismissal behavior.

<demo src="./__demos__/dismiss-comparison.vue"></demo>

## API

### `<Alert>` Props

| Prop | Description | Type | Default |
| --------- | --------------------------------------------------------------------- | --------------------------------------------------- | ------------ |
| status | Alert status | `'info' \| 'success' \| 'warning' \| 'danger' \| 'default'` | `'info'` |
| variant | Visual variant | `'standard' \| 'tonal' \| 'outline'` | `'standard'` |
| color | Custom background color; overrides the background derived from type | `string` | - |
| title | Alert title | `string` | - |
| message | Content text; the default slot can also supply it | `string` | - |
| show-icon | Whether to show an icon | `boolean` | `true` |
| closable | Whether to show the close button | `boolean` | `false` |
| banner | Whether to display a top banner without borders or rounded corners | `boolean` | `false` |
| center | Whether to center the content | `boolean` | `false` |
| elevation | Elevation: `true`, `false`, or a level from `0-24` | `boolean \| number` | `false` |

### `<Alert>` Events

| Event | Description | Arguments |
| ----------- | ------------------ | ----------------------------- |
| close | Triggered when the Close button is clicked and can only be used when the Close button is displayed | `(event: MouseEvent) => void` |
| closed | Emitted after close transition | - |

### `<Alert>` Slots

| Slot | Description | Arguments |
| ---------- | -------- | ---- |
| default | Content | - |
| icon | Icon | - |
| title | Title | - |
| action | Actions | - |
| close-icon | The close icon of alert | - |

### Type definitions

The component exports the following types:

```ts
import type {
  AlertInstance,
  AlertProps,
  AlertStatus,
  AlertVariant,
} from '@cedar-design/ui'
```

### Style variables

See `style/token.less`; all variables use the `--c-alert-` prefix. Example override:

```css
:root {
  --c-alert-padding-vertical: 12px;
  --c-alert-padding-horizontal: 20px;
}
```

## Migration notes (breaking changes)

| Previous API | Current API |
| -- | -- |
| `type="error"` | `type="danger"` |
| `type="normal"` | `type="default"` |
| `closeable` | `closable` |
| `#close-element` slot | `#close-icon` slot |

Added capabilities: `variant` / `color` / `elevation` / `default` status / `closed` event.

`type="default"` renders no built-in icon. Use `#icon` when an icon is needed.

## Shared implementation and platform boundaries

Each platform maintains a complete local implementation. They do not import a common core or share component instances or reactive state. Changes must update both implementations. Component bodies, props, key styles and paired tests have read-only source consistency checks; theme tokens and installation entries remain local to each library.

The close button supports keyboard activation. close fires once, and closed fires after the leave transition. Maple renamed its internal __close-icon class to __close-btn. Default icons are adapted locally in each library.

### Complete variable defaults

Colored titles, content, icons and outline borders use readable system content colors. standard and tonal share the same level-1 background; standard adds a subtle decorative border. Default titles use content-primary; body text and icons use content-secondary. The content variable also sets the root inherited color, used by close icons and actions without an explicit color. Maple dark mode inherits these colors while retaining its geometry overrides: 16px padding, 22px icons, 12px icon/close gaps and 1.5 body line height. color changes only the background; callers must also verify foreground contrast. The table lists :root defaults, not theme overrides.

| Variable | Default |
| --- | --- |
| `--c-alert-padding-vertical` | `var(--c-sys-space-4)` |
| `--c-alert-padding-horizontal` | `var(--c-sys-space-6)` |
| `--c-alert-padding-vertical-with-title` | `var(--c-sys-space-6)` |
| `--c-alert-padding-horizontal-with-title` | `var(--c-sys-space-6)` |
| `--c-alert-border-radius` | `var(--c-sys-radius-md)` |
| `--c-alert-border-width` | `1px` |
| `--c-alert-font-size-content` | `var(--c-sys-font-size-md)` |
| `--c-alert-font-size-title` | `var(--c-sys-font-size-lg)` |
| `--c-alert-font-weight-title` | `var(--c-sys-font-weight-medium)` |
| `--c-alert-line-height` | `1.5715` |
| `--c-alert-line-height-title` | `1.5` |
| `--c-alert-title-margin-bottom` | `var(--c-sys-space-2)` |
| `--c-alert-icon-size` | `16px` |
| `--c-alert-icon-margin-right` | `var(--c-sys-space-4)` |
| `--c-alert-action-margin-left` | `var(--c-sys-space-5)` |
| `--c-alert-close-margin-left` | `var(--c-sys-space-4)` |
| `--c-alert-standard-info-bg` | `rgb(var(--c-blue-1))` |
| `--c-alert-standard-info-border` | `rgb(var(--c-blue-3))` |
| `--c-alert-standard-info-title` | `var(--c-sys-color-content-info)` |
| `--c-alert-standard-info-content` | `var(--c-sys-color-content-info)` |
| `--c-alert-standard-info-icon` | `var(--c-sys-color-content-info)` |
| `--c-alert-standard-success-bg` | `rgb(var(--c-success-1))` |
| `--c-alert-standard-success-border` | `rgb(var(--c-success-3))` |
| `--c-alert-standard-success-title` | `var(--c-sys-color-content-success)` |
| `--c-alert-standard-success-content` | `var(--c-sys-color-content-success)` |
| `--c-alert-standard-success-icon` | `var(--c-sys-color-content-success)` |
| `--c-alert-standard-warning-bg` | `rgb(var(--c-warning-1))` |
| `--c-alert-standard-warning-border` | `rgb(var(--c-warning-3))` |
| `--c-alert-standard-warning-title` | `var(--c-sys-color-content-warning)` |
| `--c-alert-standard-warning-content` | `var(--c-sys-color-content-warning)` |
| `--c-alert-standard-warning-icon` | `var(--c-sys-color-content-warning)` |
| `--c-alert-standard-danger-bg` | `rgb(var(--c-danger-1))` |
| `--c-alert-standard-danger-border` | `rgb(var(--c-danger-3))` |
| `--c-alert-standard-danger-title` | `var(--c-sys-color-content-danger)` |
| `--c-alert-standard-danger-content` | `var(--c-sys-color-content-danger)` |
| `--c-alert-standard-danger-icon` | `var(--c-sys-color-content-danger)` |
| `--c-alert-standard-default-bg` | `var(--c-color-fill-2)` |
| `--c-alert-standard-default-border` | `var(--c-sys-color-border-default)` |
| `--c-alert-standard-default-title` | `var(--c-sys-color-content-primary)` |
| `--c-alert-standard-default-content` | `var(--c-sys-color-content-secondary)` |
| `--c-alert-standard-default-icon` | `var(--c-sys-color-content-secondary)` |
| `--c-alert-tonal-info-bg` | `rgb(var(--c-blue-1))` |
| `--c-alert-tonal-info-title` | `var(--c-sys-color-content-info)` |
| `--c-alert-tonal-info-content` | `var(--c-sys-color-content-info)` |
| `--c-alert-tonal-info-icon` | `var(--c-sys-color-content-info)` |
| `--c-alert-tonal-success-bg` | `rgb(var(--c-success-1))` |
| `--c-alert-tonal-success-title` | `var(--c-sys-color-content-success)` |
| `--c-alert-tonal-success-content` | `var(--c-sys-color-content-success)` |
| `--c-alert-tonal-success-icon` | `var(--c-sys-color-content-success)` |
| `--c-alert-tonal-warning-bg` | `rgb(var(--c-warning-1))` |
| `--c-alert-tonal-warning-title` | `var(--c-sys-color-content-warning)` |
| `--c-alert-tonal-warning-content` | `var(--c-sys-color-content-warning)` |
| `--c-alert-tonal-warning-icon` | `var(--c-sys-color-content-warning)` |
| `--c-alert-tonal-danger-bg` | `rgb(var(--c-danger-1))` |
| `--c-alert-tonal-danger-title` | `var(--c-sys-color-content-danger)` |
| `--c-alert-tonal-danger-content` | `var(--c-sys-color-content-danger)` |
| `--c-alert-tonal-danger-icon` | `var(--c-sys-color-content-danger)` |
| `--c-alert-tonal-default-bg` | `var(--c-color-fill-2)` |
| `--c-alert-tonal-default-title` | `var(--c-sys-color-content-primary)` |
| `--c-alert-tonal-default-content` | `var(--c-sys-color-content-secondary)` |
| `--c-alert-tonal-default-icon` | `var(--c-sys-color-content-secondary)` |
| `--c-alert-outline-info-border` | `var(--c-sys-color-content-info)` |
| `--c-alert-outline-info-title` | `var(--c-sys-color-content-info)` |
| `--c-alert-outline-info-content` | `var(--c-sys-color-content-info)` |
| `--c-alert-outline-info-icon` | `var(--c-sys-color-content-info)` |
| `--c-alert-outline-success-border` | `var(--c-sys-color-content-success)` |
| `--c-alert-outline-success-title` | `var(--c-sys-color-content-success)` |
| `--c-alert-outline-success-content` | `var(--c-sys-color-content-success)` |
| `--c-alert-outline-success-icon` | `var(--c-sys-color-content-success)` |
| `--c-alert-outline-warning-border` | `var(--c-sys-color-content-warning)` |
| `--c-alert-outline-warning-title` | `var(--c-sys-color-content-warning)` |
| `--c-alert-outline-warning-content` | `var(--c-sys-color-content-warning)` |
| `--c-alert-outline-warning-icon` | `var(--c-sys-color-content-warning)` |
| `--c-alert-outline-danger-border` | `var(--c-sys-color-content-danger)` |
| `--c-alert-outline-danger-title` | `var(--c-sys-color-content-danger)` |
| `--c-alert-outline-danger-content` | `var(--c-sys-color-content-danger)` |
| `--c-alert-outline-danger-icon` | `var(--c-sys-color-content-danger)` |
| `--c-alert-outline-default-border` | `var(--c-sys-color-border-default)` |
| `--c-alert-outline-default-title` | `var(--c-sys-color-content-primary)` |
| `--c-alert-outline-default-content` | `var(--c-sys-color-content-secondary)` |
| `--c-alert-outline-default-icon` | `var(--c-sys-color-content-secondary)` |

### Motion variables

Built-in motion follows `prefers-reduced-motion: reduce`. Reduced motion does not prevent loading-state or close-event updates.

| Token | Default |
| --- | --- |
| `--c-alert-close-duration` | `var(--c-sys-motion-duration-slow)` |
