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

### Alert Props

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

### Alert Events

| Event | Description | Arguments |
| ----------- | ------------------ | ----------------------------- |
| close | Triggered when the Close button is clicked and can only be used when the Close button is displayed | `(event: MouseEvent) => void` |
| closed | Emitted after close transition | - |

### Alert Slots

| Slot | Description | Prop |
| ---------- | -------- | ---- |
| default | Content | - |
| icon | Icon | - |
| title | Title | - |
| action | Actions | - |
| close-icon | The close icon of alert | - |

## Types

The component exports the following types:

```ts
import type {
  AlertInstance,
  AlertProps,
  AlertStatus,
  AlertVariant,
} from '@cedar-design/ui-vue'
```

## Usage notes

`type="default"` renders no built-in icon. Use `#icon` when an icon is needed.



The close button supports keyboard activation. close fires once; closed fires after the leave transition finishes.

### Close labels and elevation types

The close control uses the shared `common.close` locale key and updates reactively with its language scope. The `close-icon` slot replaces only the graphic. Customize `locale.common.close` through Cedar ConfigProvider, or the `'common.close'` message through Maple LocaleProvider.

`elevation` accepts only booleans or numbers. Use `:elevation="4"` for a numeric level; the string `elevation="4"` is outside the public type. Keyboard activation and clicks emit a MouseEvent; `closed` still fires after the leave transition.

## CSS Variables

See `style/token.less`; all variables use the `--c-alert-` prefix. Example override:

```css
:root {
  --c-alert-padding-vertical: 12px;
  --c-alert-padding-horizontal: 20px;
}
```

Colored titles, content, icons and outline borders use readable system content colors. standard and tonal share the same level-1 background; standard adds a subtle decorative border. Default titles use content-primary; body text and icons use content-secondary. The content variable also sets the root inherited color, used by close icons and actions without an explicit color. Maple dark mode inherits these colors while retaining its geometry overrides: 16px padding, 22px icons, 12px icon/close gaps and 1.5 body line height. color changes only the background; callers must also verify foreground contrast. The table lists :root defaults, not theme overrides.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-alert-action-margin-left` | `var(--c-sys-space-5)` | `margin-inline-start` |
| `--c-alert-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-alert-border-width` | `1px` | `border` |
| `--c-alert-close-duration` | `var(--c-sys-motion-duration-slow)` | `transition` |
| `--c-alert-close-margin-left` | `var(--c-sys-space-4)` | `margin-inline-start` |
| `--c-alert-font-size-content` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-alert-font-size-title` | `var(--c-sys-font-size-lg)` | `font-size` |
| `--c-alert-font-weight-title` | `var(--c-sys-font-weight-medium)` | `font-weight` |
| `--c-alert-icon-margin-right` | `var(--c-sys-space-4)` | `margin-inline-end` |
| `--c-alert-icon-size` | `16px` | `font-size` |
| `--c-alert-line-height` | `1.5715` | `line-height` |
| `--c-alert-line-height-title` | `1.5` | `line-height` |
| `--c-alert-outline-danger-border` | `var(--c-sys-color-content-danger)` | `border-color` |
| `--c-alert-outline-danger-content` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-outline-danger-icon` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-outline-danger-title` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-outline-default-border` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-alert-outline-default-content` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-alert-outline-default-icon` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-alert-outline-default-title` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-alert-outline-info-border` | `var(--c-sys-color-content-info)` | `border-color` |
| `--c-alert-outline-info-content` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-outline-info-icon` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-outline-info-title` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-outline-success-border` | `var(--c-sys-color-content-success)` | `border-color` |
| `--c-alert-outline-success-content` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-outline-success-icon` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-outline-success-title` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-outline-warning-border` | `var(--c-sys-color-content-warning)` | `border-color` |
| `--c-alert-outline-warning-content` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-outline-warning-icon` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-outline-warning-title` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-padding-horizontal` | `var(--c-sys-space-6)` | `padding` |
| `--c-alert-padding-horizontal-with-title` | `var(--c-sys-space-6)` | `padding` |
| `--c-alert-padding-vertical` | `var(--c-sys-space-4)` | `padding` |
| `--c-alert-padding-vertical-with-title` | `var(--c-sys-space-6)` | `padding` |
| `--c-alert-standard-danger-bg` | `rgb(var(--c-danger-1))` | `background-color` |
| `--c-alert-standard-danger-border` | `rgb(var(--c-danger-3))` | `border-color` |
| `--c-alert-standard-danger-content` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-standard-danger-icon` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-standard-danger-title` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-standard-default-bg` | `var(--c-color-fill-2)` | `background-color` |
| `--c-alert-standard-default-border` | `var(--c-sys-color-border-default)` | `border-color` |
| `--c-alert-standard-default-content` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-alert-standard-default-icon` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-alert-standard-default-title` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-alert-standard-info-bg` | `rgb(var(--c-blue-1))` | `background-color` |
| `--c-alert-standard-info-border` | `rgb(var(--c-blue-3))` | `border-color` |
| `--c-alert-standard-info-content` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-standard-info-icon` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-standard-info-title` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-standard-success-bg` | `rgb(var(--c-success-1))` | `background-color` |
| `--c-alert-standard-success-border` | `rgb(var(--c-success-3))` | `border-color` |
| `--c-alert-standard-success-content` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-standard-success-icon` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-standard-success-title` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-standard-warning-bg` | `rgb(var(--c-warning-1))` | `background-color` |
| `--c-alert-standard-warning-border` | `rgb(var(--c-warning-3))` | `border-color` |
| `--c-alert-standard-warning-content` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-standard-warning-icon` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-standard-warning-title` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-title-margin-bottom` | `var(--c-sys-space-2)` | `margin-bottom` |
| `--c-alert-tonal-danger-bg` | `rgb(var(--c-danger-1))` | `background-color` |
| `--c-alert-tonal-danger-content` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-tonal-danger-icon` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-tonal-danger-title` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-alert-tonal-default-bg` | `var(--c-color-fill-2)` | `background-color` |
| `--c-alert-tonal-default-content` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-alert-tonal-default-icon` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-alert-tonal-default-title` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-alert-tonal-info-bg` | `rgb(var(--c-blue-1))` | `background-color` |
| `--c-alert-tonal-info-content` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-tonal-info-icon` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-tonal-info-title` | `var(--c-sys-color-content-info)` | `color` |
| `--c-alert-tonal-success-bg` | `rgb(var(--c-success-1))` | `background-color` |
| `--c-alert-tonal-success-content` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-tonal-success-icon` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-tonal-success-title` | `var(--c-sys-color-content-success)` | `color` |
| `--c-alert-tonal-warning-bg` | `rgb(var(--c-warning-1))` | `background-color` |
| `--c-alert-tonal-warning-content` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-tonal-warning-icon` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-alert-tonal-warning-title` | `var(--c-sys-color-content-warning)` | `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-alert-border-radius: var(--c-sys-radius-md);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->

### Motion

Built-in motion follows `prefers-reduced-motion: reduce`. Reduced motion does not prevent loading-state or close-event updates.
