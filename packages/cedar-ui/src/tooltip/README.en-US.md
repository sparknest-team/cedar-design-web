---
lang: en-US
permalink: /en/components/tooltip/
---

# Tooltip

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

<demo src="./__demos__/directive.vue"></demo>

<demo src="./__demos__/text-ellipsis.vue"></demo>

## API

Tooltip inherits Trigger positioning, containers, controlled state, closing policies and public methods.

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| content | Hint content | `string` | — |
| status | Panel intent | `default \| primary \| info \| success \| warning \| danger` | `default` |
| size | Implemented sizes | `xs \| md` | `md` |
| color | Background color | `string` | — |
| text-color | Custom text color | `string` | — |
| trigger | Interaction | `TriggerEvent \| TriggerEvent[]` | `['hover', 'focus']` |
| placement | Preferred popup side relative to the trigger, default top. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | `TriggerPlacement` | `top` |
| show-arrow | Show the arrow | `boolean` | `true` |
| popup-offset | Main-axis distance | `number` | `10` |
| unmount-on-close | Unmount after close | `boolean` | `true` |

Events: `update:open`, `open-change`, `open`, `opened`, `close`, `closed`, `click-outside`. Slots: `default`, `content`. Exposes `open`, `close`, `resize`, `allowClose`, `getReference`, `setReference` and `focusReference`.

Content has `role="tooltip"`. Opening adds its ID to the actual trigger's `aria-describedby`; closing, changing external reference or unmounting removes it.

## Shared-source contract

Cedar/Maple independently maintain matching bodies, props, appearance mappings and structural styles. Only prefixes, local imports and theme-token values differ. No `backgroundColor` or boolean `xs` compatibility entry exists.

## Public CSS variables

These are actual :root defaults. Prefer component variables for business customization; internal positioning variables are not public API.

| Variable | Default | Meaning and use case |
| --- | --- | --- |
| `--c-tooltip-background` | `var(--c-sys-color-surface-tooltip)` | Content and arrow background |
| `--c-tooltip-text-color` | `var(--c-sys-color-content-on-dark)` | Body foreground |
| `--c-tooltip-status-primary-background` | `var(--c-sys-color-action-primary)` | Primary content/arrow background |
| `--c-tooltip-status-info-background` | `var(--c-sys-color-status-info)` | Info content/arrow background |
| `--c-tooltip-status-success-background` | `var(--c-sys-color-status-success)` | Success content/arrow background |
| `--c-tooltip-status-warning-background` | `var(--c-sys-color-status-warning)` | Warning content/arrow background |
| `--c-tooltip-status-danger-background` | `var(--c-sys-color-status-danger)` | Danger content/arrow background |
| `--c-tooltip-status-primary-text-color` | `var(--c-sys-color-content-on-dark)` | Primary text; set together with its background |
| `--c-tooltip-status-info-text-color` | `var(--c-sys-color-content-on-dark)` | Info text; set together with its background |
| `--c-tooltip-status-success-text-color` | `var(--c-sys-color-content-on-dark)` | Success text; set together with its background |
| `--c-tooltip-status-warning-text-color` | `var(--c-sys-color-content-on-dark)` | Warning text; set together with its background |
| `--c-tooltip-status-danger-text-color` | `var(--c-sys-color-content-on-dark)` | Danger text; set together with its background |
| `--c-tooltip-padding-horizontal` | `var(--c-sys-space-6)` | Horizontal content padding |
| `--c-tooltip-padding-vertical` | `var(--c-sys-space-4)` | Vertical content padding |
| `--c-tooltip-font-size` | `var(--c-sys-font-size-md)` | Content font size |
| `--c-tooltip-line-height` | `var(--c-line-height)` | Content line height |
| `--c-tooltip-border-radius` | `var(--c-sys-radius-md)` | Content border radius |
| `--c-tooltip-max-width` | `350px` | Maximum tooltip-content width |
| `--c-tooltip-opacity` | `1` | Content/arrow opacity; changes require contrast checks |
| `--c-tooltip-size-xs-padding-horizontal` | `var(--c-sys-space-4)` | xs horizontal content padding |
| `--c-tooltip-size-xs-padding-vertical` | `var(--c-sys-space-2)` | xs vertical content padding |
| `--c-tooltip-size-xs-font-size` | `var(--c-sys-font-size-xs)` | xs content font size |
| `--c-tooltip-animation-duration` | `var(--c-sys-motion-duration-standard)` | Enter/leave duration; reduced motion may override it |

All built-in themes use opacity 1. Colored solid text follows Button on-dark in both light/dark modes. Maple dark mode retains 4px radius, 14px font and 8px/16px vertical/horizontal padding. Neutral surfaces remain dark in both modes. `color` sets content/arrow backgrounds; `text-color` sets text. Explicit content-style/arrow-style override their respective nodes. Recheck custom colors/opacity.

With Teleport, variables must be in the actual popup scope, for example through `popup-style`. Trigger-button variables do not automatically inherit into popups.
