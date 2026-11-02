---
permalink: /en/components/card/
lang: en-US
---

# Card

Source changes synchronously invalidate render generations. Close, row direction, newer work, deactivation or disposal prevent old nextTick/timer/double-frame continuations from changing newer phases. Render/timer deliveries consume once. Recheck lifecycle/request/node after geometry hooks to reject reentrant disposal. Suspension cancels both timers and retained close/click input is inert; activation starts a fresh phase from current props without replay, and initial KeepAlive activation does not duplicate the wait.

## Basic examples

### Basic usage and subtitle

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Appearance configuration comparison

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `title` | Title | Appearance configuration comparison, Hover style |
| `description` | Description | Appearance configuration comparison |
| `hoverable` | Hover style | Hover style |
<!-- demo-config-notes:end -->


Choose a dimension to compare all its values side by side while keeping other settings and content identical. Change the other settings to inspect combinations; input specimens share one model.

<demo src="./__demos__/appearance-lab.vue"></demo>

### Hover style

<demo src="./__demos__/hoverable.vue"></demo>

## Layout and arrangement

### Images and directions

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `direction` | Order of cover and body, default column; supports row, column and row-reverse. Does not position the card itself | Images and directions |
| `title` | Title | Images and directions |
| `src` | Cover image URL; cover slot takes precedence | Images and directions |
| `alt` | Image alternative text | Images and directions |
| `image-height` | Image height; numbers use px | Images and directions |
| `image-width` | Image width; numbers use px | Images and directions |
<!-- demo-config-notes:end -->


<demo src="./__demos__/image.vue"></demo>

## Content and presentation

### Long title and tooltip

<demo src="./__demos__/tooltip.vue"></demo>

## Customization and slots

### Custom header

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `title` | Title | Custom header |
| `top-divider` | Top divider | Content slots |
| `bottom-divider` | Bottom divider | Content slots |
<!-- demo-config-notes:end -->


<demo src="./__demos__/no-padding.vue"></demo>

### Content slots

<demo src="./__demos__/slots.vue"></demo>

## Interaction and control

### Ripple and click

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `title` | Title | Ripple and click, Floating and close |
| `ripple` | Click ripple | Ripple and click |
| `floating` | Fullscreen state; supports v-model:floating | Floating and close |
| `floating-duration` | Fullscreen transition duration in ms | Floating and close |
<!-- demo-config-notes:end -->


<demo src="./__demos__/ripple.vue"></demo>

### Floating and close

<demo src="./__demos__/floating.vue"></demo>

## Lifecycle and edge cases

### Floating scheduler lifecycle

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `floating` | Fullscreen state; supports v-model:floating | Floating scheduler lifecycle |
| `ripple` | Click ripple | Floating scheduler lifecycle |
| `floating-duration` | Fullscreen transition duration in ms | Floating scheduler lifecycle |
| `title` | Title | Floating scheduler lifecycle |
<!-- demo-config-notes:end -->


500ms ripple wait is interaction policy; floating-duration defaults to250ms for collapse and transition. DoubleRaf settles layout; cancellation rejects stale continuation writes, not underlying frames. Public API and CSS variables are unchanged. Full Card Cedar21/Maple44 and scoped15 each are controlled tests, not native browser/OS certification.

<demo src="./__demos__/scheduler-lifecycle.vue"></demo>

The same scenarios, parameters and interactions as Cedar. Only component prefixes differ; themes and site shells remain independent.

## Reading direction

Headings, content and actions follow reading order. Default floating actions sit at reading end without mirroring images or custom slots.

## API

<!-- same-source-api:start -->
### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| variant | Appearance | `default / outline / tonal` | `default` |
| size | Density; omitted value follows platform rules below | `sm / md` | `undefined` |
| direction | Order of cover and body, default column; supports row, column and row-reverse. Does not position the card itself | `row / column / row-reverse` | `column` |
| hoverable | Hover styling | `boolean` | `false` |
| title-style | Title row styles | `CSSProperties` | `undefined` |
| title | Title | `string` | `undefined` |
| subtitle | Subtitle | `string` | `undefined` |
| description | Description | `string` | `undefined` |
| top-divider | Top divider | `boolean` | `false` |
| bottom-divider | Bottom divider | `boolean` | `false` |
| src | Cover image URL; cover slot takes precedence | `string` | `undefined` |
| fit | Cover image fit | `fill / contain / cover / none / scale-down` | `cover` |
| image-height | Image height; numbers use px | `string / number` | `undefined` |
| image-width | Image width; numbers use px | `string / number` | `undefined` |
| alt | Image alternative text | `string` | `undefined` |
| elevation | Shadow for default variant; true means level 1, false disables it, numeric levels 0–24 | `boolean / number` | `true` |
| ripple | Click ripple | `boolean` | `false` |
| floating | Fullscreen state; supports v-model:floating | `boolean` | `false` |
| floating-duration | Fullscreen transition duration in ms | `number` | `250` |

### Events

| Event | Arguments and timing |
| --- | --- |
| click | `(event: Event)`, emitted when the card is clicked |
| update:floating | `(value: boolean)`, emits false when the built-in close button requests closing; expansion is controlled by the parent |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| default | Body | — |
| cover | Cover; overrides src | — |
| header | Entire header; overrides title, title-action and subtitle | — |
| title | Title | `{ slotClass: string }` |
| title-action | Title action | — |
| subtitle | Subtitle | `{ slotClass: string }` |
| description | Description | `{ slotClass: string }` |
| footer | Footer actions | — |
| floating-content | Expanded content; column layout only | — |
| close-button | Custom close button; update floating yourself | — |

### Methods

No public methods.

### Platform notes

Props, event arguments and slots match. Cedar inherits the global size when size is omitted: xs/sm map to sm, all others to md. Maple falls back to md. Pass size explicitly for identical density. Themes and CSS prefixes remain platform-specific.
Card no longer has a loading prop. Compose a loading overlay with the Loading directive.
<!-- same-source-api:end -->

### `<Card>` CSS variables

| Variable | Default |
| --- | --- |
| `--c-card-hover-shadow` | `0 4px 12px rgb(0 0 0 / 12%)` |
| `--c-card-size-sm-title-font-size` | `16px` |
| `--c-card-size-sm-section-margin` | `8px 0 0` |
| `--c-card-size-sm-section-padding` | `0 12px` |
| `--c-card-padding` | `0 0 15px 0` |
| `--c-card-background` | `var(--c-sys-color-surface-default)` |
| `--c-card-filled-background` | `var(--c-sys-color-surface-muted)` |
| `--c-card-outline-color` | `var(--c-sys-color-border-default)` |
| `--c-card-border-radius` | `4px` |
| `--c-card-image-width` | `100%` |
| `--c-card-row-image-width` | `140px` |
| `--c-card-image-height` | `200px` |
| `--c-card-row-height` | `140px` |
| `--c-card-title-color` | `var(--c-sys-color-content-primary)` |
| `--c-card-title-font-size` | `20px` |
| `--c-card-title-padding` | `0 12px` |
| `--c-card-title-margin` | `15px 0 0 0` |
| `--c-card-title-row-margin` | `12px 0` |
| `--c-card-content-padding` | `0 16px` |
| `--c-card-content-margin` | `16px 0 0 0` |
| `--c-card-content-color` | `var(--c-sys-color-content-tertiary)` |
| `--c-card-content-font-size` | `14px` |
| `--c-card-content-row-margin` | `16px 0 0 0` |
| `--c-card-subtitle-color` | `var(--c-sys-color-content-secondary)` |
| `--c-card-subtitle-font-size` | `14px` |
| `--c-card-subtitle-padding` | `0 12px` |
| `--c-card-subtitle-margin` | `10px 0 0 0` |
| `--c-card-subtitle-row-margin` | `-8px 0 0 0` |
| `--c-card-description-color` | `var(--c-sys-color-content-secondary)` |
| `--c-card-description-font-size` | `14px` |
| `--c-card-description-margin` | `20px 0 0 0` |
| `--c-card-description-padding` | `0 13px` |
| `--c-card-footer-padding` | `0 12px` |
| `--c-card-footer-right` | `13px` |
| `--c-card-footer-bottom` | `9px` |
| `--c-card-footer-margin` | `30px 0 0 0` |
| `--c-card-line-height` | `22px` |
| `--c-card-row-line-height` | `1.5` |
| `--c-card-floating-buttons-bottom` | `16px` |
| `--c-card-floating-buttons-right` | `16px` |
| `--c-card-floating-buttons-color` | `var(--c-sys-color-content-primary)` |
| `--c-card-close-button-icon-size` | `24px` |
| `--c-card-close-button-size` | `56px` |
| `--c-card-close-button-background` | `#212121` |
| `--c-card-close-button-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-card-close-button-border-radius` | `50%` |

Card colors follow system semantics: regular/filled backgrounds and borders use `surface-default`, `surface-muted` and `border-default`. Titles, body text and secondary text use `content-primary`, `content-tertiary` and `content-secondary`. Expanded floating-button containers sit on the card surface and use `content-primary`; text/icons on dark close buttons use `content-on-dark`. The `#212121` close-button background is Card-specific, not the global primary-action color. See the Design Token specification for old variable mappings.

### Type definitions

The component exports the following types

```ts
import type { CardProps } from '@cedar-design/ui'
```

See `API-MIGRATION.md` at the repository root for size and cross-platform migration rules. Only the documented sizes are supported, not every ComponentSize.

### Variable consumption rules

Row content consumes `--c-card-content-row-margin`, independently from the title margin. Card intentionally exposes only sm/md density, not all five control sizes. Motion uses `--c-card-animation-duration` (`var(--c-sys-motion-duration-slow)`) and `--c-card-animation-easing` (`var(--c-sys-motion-easing-standard)`). Reduced motion disables transitions on every animated Card section.
