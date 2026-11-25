---
lang: en-US
permalink: /en/components/overlay/
---

# Overlay

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `v-model:open="open"`.

<demo src="./__demos__/basic.vue"></demo>

## Usage notes

### Configuration

These are actual :root defaults. Prefer component variables for business customization; internal positioning variables are not public API.

## API

### Overlay Props

| Prop               | Description                                                                                | Type                             | Default  |
| ------------------ | ------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| `v-model:open`     | Visible state                                                                              | `boolean`                        | `false`  |
| `default-open`     | Whether to display by default in uncontrolled mode                                         | `boolean`                        | `false`  |
| `overlay-closable` | Whether clicking the backdrop closes the Overlay                                           | `boolean`                        | `true`   |
| `lock-scroll`      | Lock the target container while open. Inline overlays lock the body of their own document. | `boolean`                        | `true`   |
| `unmount-on-close` | Whether to unmount slot content after closing                                              | `boolean`                        | `true`   |
| `esc-to-close`     | Whether Escape closes the overlay                                                          | `boolean`                        | `true`   |
| `popup-container`  | Teleport target; `false` renders in place                                                  | `string \| HTMLElement \| false` | `'body'` |
| `z-index`          | Custom z-index                                                                             | `number`                         | `-`      |

### Overlay Events

| Event         | Description                  | Arguments       |
| ------------- | ---------------------------- | --------------- |
| `update:open` | Open state changed           | `boolean`       |
| `open`        | Opening starts               | `-`             |
| `opened`      | Opening transition completes | `-`             |
| `close`       | Closing starts               | `-`             |
| `closed`      | Closing transition completes | `-`             |
| `click`       | Click on the background area | `MouseEvent`    |
| `key-escape`  | Escape was pressed           | `KeyboardEvent` |

### Overlay Slots

| Slot      | Description                        |
| --------- | ---------------------------------- |
| `default` | Content above the background layer |

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable                         | Default / condition                 | Affected styles    |
| -------------------------------- | ----------------------------------- | ------------------ |
| `--c-overlay-animation-duration` | `var(--c-sys-motion-duration-slow)` | `transition`       |
| `--c-overlay-background-color`   | `var(--c-sys-color-scrim)`          | `background-color` |
| `--c-overlay-content-z-index`    | `var(--c-sys-layer-raised)`         | `z-index`          |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-overlay-background-color: var(--c-sys-color-scrim);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->

### Reduced motion

Built-in CSS transitions follow `prefers-reduced-motion: reduce`. Removing transitions does not change final visibility, selected/expanded state or event semantics. Applications control custom animations inside slots.
