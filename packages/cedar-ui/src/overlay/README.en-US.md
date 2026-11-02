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

## API

### Props

| Arguments | Description | Type | Default |
| ------------------ | -------------------------------------------- | -------------------------------- | -------- |
| `v-model:open` | Visible state | `boolean` | `false` |
| `default-open` | Whether to display by default in uncontrolled mode | `boolean` | `false` |
| `overlay-closable` | Whether clicking the backdrop closes the Overlay | `boolean` | `true` |
| `lock-scroll` | Lock scrolling on the host | `boolean` | `true` |
| `unmount-on-close` | Whether to unmount slot content after closing | `boolean` | `true` |
| `esc-to-close` | Whether Escape closes the overlay | `boolean` | `true` |
| `popup-container` | Teleport target; `false` renders in place | `string \| HTMLElement \| false` | `'body'` |
| `z-index` | Custom z-index | `number` | `-` |

### Events

| Event | Description | Arguments |
| ------------- | ------------ | --------------- |
| `update:open` | Open state changed | `boolean` |
| `open` | Opening starts | `-` |
| `opened` | Opening transition completes | `-` |
| `close` | Closing starts | `-` |
| `closed` | Closing transition completes | `-` |
| `click` | Click on the background area | `MouseEvent` |
| `key-escape` | Escape was pressed | `KeyboardEvent` |

### Slots

| Slot | Description |
| --------- | ---------------- |
| `default` | Content above the background layer |

## Public CSS variables

These are actual :root defaults. Prefer component variables for business customization; internal positioning variables are not public API.

| Variable | Default | Meaning and use case |
| --- | --- | --- |
| `--c-overlay-background-color` | `var(--c-sys-color-scrim)` | Scrim background only; does not change foreground-content opacity |
| `--c-overlay-animation-duration` | `var(--c-sys-motion-duration-slow)` | Enter/leave duration; reduced motion may override it |
| `--c-overlay-content-z-index` | `var(--c-sys-layer-raised)` | Local stacking level of content above the scrim |

### Reduced motion

Built-in CSS transitions follow `prefers-reduced-motion: reduce`. Removing transitions does not change final visibility, selected/expanded state or event semantics. Applications control custom animations inside slots.
