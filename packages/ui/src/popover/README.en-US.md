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

## Empty content

With `hide-empty`, the panel is hidden when the title is empty and the body contains only comments or whitespace. The open state is unchanged and the panel appears when content becomes available. Component nodes count as content.

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Content defaults to inline-start alignment and popovers inherit source direction. Logical start/end follow reading direction; explicit left/right placements remain physical.

## API

### Popover Props

Popover inherits Trigger positioning, container, controlled state and `close` policies. `auto-fit-transform-origin` defaults to true; an omitted `animation-name` uses the Popover animation. `content-class` and `content-style` apply to the content panel; `popup-class` and `popup-style` apply to the outer positioning node. The instance exposes seven methods: `open`, `close`, `resize`, `allowClose`, `getReference`, `focusReference`, and `setReference`. Focus remains on the trigger when opening. The panel is non-modal and Tab order depends on its actual DOM mount location; provide an accessible keyboard path for interactive content.

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | `string` | — |
| content | Body | `string` | — |
| trigger | Interaction | `TriggerEvent \| TriggerEvent[]`<br>`TriggerEvent: 'manual' \| 'hover' \| 'click' \| 'focus' \| 'contextMenu'` | `click` |
| placement | Preferred popup side relative to the trigger, default bottom. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | `TriggerPlacement`<br>`'left' \| 'right' \| 'bottom' \| 'top' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `bottom` |
| show-arrow | Show the arrow | `boolean` | `true` |
| popup-offset | Main-axis distance | `number` | `10` |
| unmount-on-close | Unmount content after closing; interaction drafts are retained by default | `boolean` | `false` |
| close-on-click-reference | Close when the trigger is clicked again | `boolean` | `true` |

Events: `update:open`, `open-change`, `open`, `opened`, `close`, `closed`, `click-outside`. Slots: `default`, `title`, `content`. Slots override same-name `content` props.

Panels have consistent content/title/body layers. Triggers are associated through `aria-controls`/`aria-expanded`; external references and SVG are also supported. The panel is a group and does not declare aria-haspopup by default. When setting an explicit popup type through reference-attrs, ensure it matches the actual content semantics.

## Usage notes

Use Trigger for unstyled positioning. Popover does not provide `defaultStyle`, `popoverClass` or `elevation`; customize appearance through CSS variables, `content-class` or `content-style`.

### Configuration

These are actual :root defaults. Prefer component variables for business customization; internal positioning variables are not public API.

With Teleport, variables must be in the actual popup scope, for example through `popup-style`. Trigger-button variables do not automatically inherit into popups.

## CSS Variables

Maple dark mode retains a 2px radius and platform-specific shadows. Content and arrows share background/border variables, independent of Trigger style-loading order.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-popover-animation-duration` | `var(--c-sys-motion-duration-standard)` | `transition` |
| `--c-popover-arrow-z-index` | `1` | `z-index` |
| `--c-popover-background` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-popover-border-color` | `var(--c-sys-color-border-default)` | `border` |
| `--c-popover-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-popover-border-width` | `1px` | `border` |
| `--c-popover-box-shadow` | `var(--c-shadow2-down)` | `box-shadow` |
| `--c-popover-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-popover-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-popover-padding-horizontal` | `var(--c-sys-space-7)` | `padding` |
| `--c-popover-padding-vertical` | `var(--c-sys-space-6)` | `padding` |
| `--c-popover-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-popover-title-content-gap` | `var(--c-sys-space-2)` | `margin-top` |
| `--c-popover-title-font-size` | `var(--c-sys-font-size-lg)` | `font-size` |
| `--c-popover-title-font-weight` | `var(--c-sys-font-weight-medium)` | `font-weight` |
| `--c-popover-title-text-color` | `var(--c-sys-color-content-primary)` | `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-popover-background: var(--c-sys-color-surface-overlay);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
