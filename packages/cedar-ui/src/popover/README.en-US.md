---
lang: en-US
permalink: /en/components/popover/
---

# Popover

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `title="设备状态"`.

<demo src="./__demos__/basic.vue"></demo>

## Interaction and control

### Interactive

Preview configuration: `v-model:open="open"`, `title="快速备注"`, `placeholder="关闭后再次打开，草稿仍会保留"`.

<demo src="./__demos__/interactive.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"` and supports runtime and nested overrides. Content defaults to reading start and portals inherit their source direction. Logical start/end alignment follows direction, while explicit left/right placement remains physical.

## API

Popover inherits Trigger positioning, containers, controlled state, close policies and public methods.

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | `string` | — |
| content | Body | `string` | — |
| trigger | Interaction | `TriggerEvent \| TriggerEvent[]` | `click` |
| placement | Preferred popup side relative to the trigger, default bottom. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | `TriggerPlacement` | `bottom` |
| show-arrow | Show the arrow | `boolean` | `true` |
| popup-offset | Main-axis distance | `number` | `10` |
| unmount-on-close | Unmount content after closing; interaction drafts are retained by default | `boolean` | `false` |
| close-on-click-reference | Close when the trigger is clicked again | `boolean` | `true` |

Events: `update:open`, `open-change`, `open`, `opened`, `close`, `closed`, `click-outside`. Slots: `default`, `title`, `content`. Slots override same-name `content` props.

Panels have consistent content/title/body layers. Triggers are associated through `aria-controls`/`aria-expanded`; external references and SVG are also supported.

## Shared-source contract

Cedar and Maple independently maintain the same component body, props, appearance mapping and structural styles. Use Trigger directly for unstyled positioning. Popover has no `defaultStyle`, `popoverClass` or `elevation`; customize appearance through component tokens, `content-class` or `content-style`.

## Public CSS variables

These are actual :root defaults. Prefer component variables for business customization; internal positioning variables are not public API.

| Variable | Default | Meaning and use case |
| --- | --- | --- |
| `--c-popover-background` | `var(--c-sys-color-surface-overlay)` | Content and arrow background |
| `--c-popover-text-color` | `var(--c-sys-color-content-secondary)` | Body foreground |
| `--c-popover-border-color` | `var(--c-sys-color-border-default)` | Content and arrow border color |
| `--c-popover-border-width` | `1px` | Content and arrow border width |
| `--c-popover-border-radius` | `var(--c-sys-radius-md)` | Content border radius |
| `--c-popover-box-shadow` | `var(--c-shadow2-down)` | Content shadow; retains platform differences |
| `--c-popover-arrow-z-index` | `1` | Arrow stacking within the current popup |
| `--c-popover-padding-horizontal` | `var(--c-sys-space-7)` | Horizontal content padding |
| `--c-popover-padding-vertical` | `var(--c-sys-space-6)` | Vertical content padding |
| `--c-popover-font-size` | `var(--c-sys-font-size-md)` | Content font size |
| `--c-popover-line-height` | `var(--c-line-height)` | Content line height |
| `--c-popover-title-text-color` | `var(--c-sys-color-content-primary)` | Title foreground |
| `--c-popover-title-font-size` | `var(--c-sys-font-size-lg)` | Title font size |
| `--c-popover-title-font-weight` | `var(--c-sys-font-weight-medium)` | Title font weight |
| `--c-popover-title-content-gap` | `var(--c-sys-space-2)` | Title-to-body gap |
| `--c-popover-animation-duration` | `var(--c-sys-motion-duration-standard)` | Enter/leave duration; reduced motion may override it |

Maple dark mode retains a 2px radius and platform-specific shadows. Content and arrows share background/border variables, independent of Trigger style-loading order.

With Teleport, variables must be in the actual popup scope, for example through `popup-style`. Trigger-button variables do not automatically inherit into popups.
