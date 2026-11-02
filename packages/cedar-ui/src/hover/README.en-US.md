---
lang: en-US
permalink: /en/components/hover/
---

# Hover

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `:hovering="hovering"`, `:focusing="focusing"`.

<demo src="./__demos__/basic.vue"></demo>

## API

### Directives

| Usage | Description |
| --- | --- |
| `v-hover="callback"` | Notifies `(hovering: boolean) => void` on mouse enter and leave |
| `v-hover="styleObject"` | Applies styles on mouse enter and restores them on leave |
| `v-hover:desktop` / `v-hover:mobile` | Enabled according to the directive's platform detection; this does not imply real touchscreen hover support |

### HoverOverlay Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| hovering | boolean | false | Hover decoration state |
| focusing | boolean | false | Focus decoration state |

`useHoverOverlay()` returns `hovering` and `handleHovering` for connection to directive callbacks. The overlay is absolutely positioned, so its host must establish a positioning context. For independent use, import `@cedar-design/ui/hover/style`.
