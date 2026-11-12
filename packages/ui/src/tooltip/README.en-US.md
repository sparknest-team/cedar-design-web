---
lang: en-US
permalink: /en/components/tooltip/
---

# Tooltip

SSR limitation: a trigger slot node using both `v-for` and `v-memo` can make server rendering fail. Remove `v-memo` from that slot node when rendering on the server; ordinary `v-for` remains supported. The same limitation can affect the `content` slot; remove `v-memo` there for server rendering.

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `content="This is tooltip content"`, `content="This is a two-line tooltip content.This is a two-line tooltip content."`.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Status

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `content` | Hint content | Status, Appearance configuration comparison |
| `color` | Background color | Status, Appearance configuration comparison |
| `status` | Panel intent | Status |
<!-- demo-config-notes:end -->


- `status`: Selects the semantic state.
- `color`: Overrides the color.

<demo src="./__demos__/status.vue"></demo>

<demo src="./__demos__/color.vue"></demo>

### Appearance configuration comparison

Choose an axis to compare its available values with the same content and model. Other settings remain unchanged while comparing.

<demo src="./__demos__/appearance-lab.vue"></demo>

## Layout and arrangement

### Placement

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `content` | Hint content | Placement |
| `placement` | Preferred popup side relative to the trigger, default top. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | Placement |
<!-- demo-config-notes:end -->


- `placement`: Chooses the position relative to the trigger.

<demo src="./__demos__/placement.vue"></demo>

## Content and presentation

### Directive

The directive opens on hover or focus and allows the pointer to enter the tooltip. Escape closes the topmost tooltip. Multiple directive instances can coexist with regular Tooltip components. `v-tooltip:ellipsis` applies single-line truncation; pure text shows a tooltip only when its actual layout overflows, while elements with children continue to show a tooltip.

<demo src="./__demos__/directive.vue"></demo>

<demo src="./__demos__/text-ellipsis.vue"></demo>

## Directive options type

`TooltipOptions` can be imported from the root or `@cedar-design/ui-vue/tooltip`; it contains required `content` and optional `placement`.

## API

### Tooltip Props

Tooltip inherits Trigger positioning, container, controlled state, and `close` policies. Its defaults are `hide-empty=true` and `auto-fit-transform-origin=true`; an omitted `animation-name` uses the Tooltip animation. Empty content hides only the tooltip and does not change `open`; component nodes count as content even when they render no content, producing an empty tooltip and description relationship. Conditionally render the component node in the slot when its content may be empty. The instance exposes seven methods: `open`, `close`, `resize`, `allowClose`, `getReference`, `focusReference`, and `setReference`.

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| content | Hint content | `string` | — |
| status | Panel intent | `default \| primary \| info \| success \| warning \| danger` | `default` |
| size | Implemented sizes | `xs \| md` | `md` |
| color | Background color | `string` | — |
| text-color | Custom text color | `string` | — |
| trigger | Interaction | `TriggerEvent \| TriggerEvent[]`<br>`TriggerEvent: 'manual' \| 'hover' \| 'click' \| 'focus' \| 'contextMenu'` | `['hover', 'focus']` |
| placement | Preferred popup side relative to the trigger, default top. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | `TriggerPlacement`<br>`'left' \| 'right' \| 'bottom' \| 'top' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `top` |
| show-arrow | Show the arrow | `boolean` | `true` |
| popup-offset | Main-axis distance | `number` | `10` |
| unmount-on-close | Unmount after close | `boolean` | `true` |

Events: `update:open`, `open-change`, `open`, `opened`, `close`, `closed`, `click-outside`. Slots: `default`, `content`. Exposes `open`, `close`, `resize`, `allowClose`, `getReference`, `setReference` and `focusReference`.

Tooltip content has `role="tooltip"` and its ID is added to the actual reference’s `aria-describedby` while open. Existing and reference-attrs descriptions are merged without duplicates; closing, changing references or unmounting removes the tooltip ID and preserves existing descriptions.

## Usage notes

Use `color` to customize the background and `size="xs"` for the smallest size. There is no `backgroundColor` or boolean `xs` prop.

### Configuration

These are actual :root defaults. Prefer component variables for business customization; internal positioning variables are not public API.

With Teleport, variables must be in the actual popup scope, for example through `popup-style`. Trigger-button variables do not automatically inherit into popups.

## CSS Variables

All built-in themes use opacity 1. Colored solid text follows Button on-dark in both light/dark modes. Maple dark mode retains 4px radius, 14px font and 8px/16px vertical/horizontal padding. Neutral surfaces remain dark in both modes. `color` sets content/arrow backgrounds; `text-color` sets text. Explicit content-style/arrow-style override their respective nodes. Recheck custom colors/opacity.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-tooltip-animation-duration` | `var(--c-sys-motion-duration-standard)` | `transition` |
| `--c-tooltip-background` | `var(--c-sys-color-surface-tooltip)` | `background-color` |
| `--c-tooltip-border-radius` | `var(--c-sys-radius-md)` | `border-radius` |
| `--c-tooltip-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-tooltip-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-tooltip-max-width` | `350px` | `max-width` |
| `--c-tooltip-opacity` | `1` | `opacity` |
| `--c-tooltip-padding-horizontal` | `var(--c-sys-space-6)` | `padding` |
| `--c-tooltip-padding-vertical` | `var(--c-sys-space-4)` | `padding` |
| `--c-tooltip-size-xs-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-tooltip-size-xs-padding-horizontal` | `var(--c-sys-space-4)` | `padding` |
| `--c-tooltip-size-xs-padding-vertical` | `var(--c-sys-space-2)` | `padding` |
| `--c-tooltip-status-danger-background` | `var(--c-sys-color-status-danger)` | `background-color` |
| `--c-tooltip-status-danger-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-tooltip-status-info-background` | `var(--c-sys-color-status-info)` | `background-color` |
| `--c-tooltip-status-info-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-tooltip-status-primary-background` | `var(--c-sys-color-action-primary)` | `background-color` |
| `--c-tooltip-status-primary-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-tooltip-status-success-background` | `var(--c-sys-color-status-success)` | `background-color` |
| `--c-tooltip-status-success-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-tooltip-status-warning-background` | `var(--c-sys-color-status-warning)` | `background-color` |
| `--c-tooltip-status-warning-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-tooltip-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-tooltip-background: var(--c-sys-color-surface-tooltip);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
