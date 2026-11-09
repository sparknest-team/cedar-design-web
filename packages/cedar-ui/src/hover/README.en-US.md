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

### HoverOverlay Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| hovering | boolean | false | Hover decoration state |
| focusing | boolean | false | Focus decoration state |

`useHoverOverlay()` returns `hovering` and `handleHovering` for directive callbacks. The overlay has no declared events, slots or business instance methods and does not capture interaction. It uses absolute positioning, so the host needs a positioning context; for standalone use import `@cedar-design/ui/hover/style`.

Object styles override only the supplied properties. Leaving or disabling restores their original inline values and `!important` priorities; changing the desktop/mobile argument removes old listeners.

## Types

### Directives

| Usage | Description |
| --- | --- |
| `v-hover="callback"` | Notifies `(hovering: boolean) => void` on mouse enter and leave |
| `v-hover="styleObject"` | Applies styles on mouse enter and restores them on leave |
| `v-hover:desktop` / `v-hover:mobile` | Enabled according to the directive's platform detection; this does not imply real touchscreen hover support |

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-hover-overlay-focusing-opacity` | `0.12` | `opacity` |
| `--c-hover-overlay-opacity` | `0.04` | `opacity` |
| `--c-hover-transition-duration` | `var(--c-sys-motion-duration-fast)` | `transition` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-hover-overlay-focusing-opacity: 0.12;
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
