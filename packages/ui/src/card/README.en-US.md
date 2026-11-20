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

<demo src="./__demos__/appearance-lab.en-US.vue"></demo>

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
| `image-src` | Cover image URL; cover slot takes precedence | Images and directions |
| `image-alt` | Image alternative text | Images and directions |
| `image-fit` | Cover image fit mode; defaults to cover | Images and directions |
| `image-height` | Image height; numbers use px | Images and directions |
| `image-width` | Image width; numbers use px | Images and directions |
<!-- demo-config-notes:end -->

<demo src="./__demos__/image.vue"></demo>

### Composing Tabs and nested cards

Group headings use TypographyTitle.

Compose Card, Tabs and vertical Space. Compact outlined cards group each panel; wide tables scroll within their own container on small screens. The industry panel uses section headings without extra cards.

<demo src="./__demos__/nested-tabs.vue"></demo>

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
| `floating` | Floating expansion state; supports v-model:floating | Floating and close |
| `floating-duration` | Floating expansion transition duration in ms | Floating and close |
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
| `floating` | Floating expansion state; supports v-model:floating | Floating scheduler lifecycle |
| `ripple` | Click ripple | Floating scheduler lifecycle |
| `floating-duration` | Floating expansion transition duration in ms | Floating scheduler lifecycle |
| `title` | Title | Floating scheduler lifecycle |
<!-- demo-config-notes:end -->


<demo src="./__demos__/scheduler-lifecycle.en-US.vue"></demo>

The same scenarios, parameters and interactions as Cedar. Only component prefixes differ; themes and site shells remain independent.

## Reading direction

Title, content and actions follow reading order. Default floating actions sit at inline end; images and custom slots are not mirrored.

## API

<!-- same-source-api:start -->

`row-reverse` reverses the horizontal cover and body order, with reading direction still following the container. Collapsed `floating-content` keeps its nodes and state but is inert to keyboard and assistive technology; it becomes interactive when expanded. Floating is available only in column direction.

The expanded Card keeps its DOM position and native form ownership. Browsers with Popover API support can display it in the top layer, above transformed or clipping ancestors. An existing native modal or open popover in the same document takes precedence until it closes or is removed. The Card checks open shadow roots and its own shadow tree. Hosts manage layers inside other closed shadow roots. When top-layer display is unavailable or opening is canceled, the Card uses fixed positioning within its existing layout. When focus is inside an expanded Card, Escape requests closing unless an inner control has already handled the key; a nested topmost popup handles Escape first. When a button outside the Card opens it in the browser top layer, focus moves to the expanded panel if the button still has focus and the Card is the topmost layer. Pressing Escape on the panel returns focus to the opener. A child control that already has focus keeps it. In the browser top layer, Tab and Shift+Tab cycle through the expanded Card and library overlays above it. The expanded panel has the group role. After the top-layer Card finishes opening, background controls become inert. Library overlays above the Card and detectable native top layers remain interactive. Closing or unmounting the Card releases the background and preserves author-supplied `inert`. If a background web component creates a shadow root after isolation starts and immediately opens a native popover, set `popover` on the host and call the host’s `showPopover()`. This lets the Card release the host before opening and isolate it again after closing. Use Dialog when modal dialog semantics are required.

When focus is in a native dialog opened with `showModal()`, Escape goes to the dialog. A `cancel` handler can keep the dialog open, and the Card stays expanded.

Pressing Escape inside an expanded Card dismisses an open native auto or hint popover first. This also applies when focus remains on its trigger.

When focus remains inside the expanded content or on the close button, closing attempts to return focus to the control used before expansion. If focus has moved elsewhere, it is not moved back. During the expansion delay, focusing the expanded content displays it immediately without waiting for the fade-in animation. Expanded content and the close button that are still hidden and unfocused during this delay are excluded from the accessibility tree; focusing either displays them immediately.

If the opener is inside an external closed Shadow Root, Card cannot access the internal control directly. The host must delegate focus or the application must restore focus. `delegatesFocus` can forward host focus into the root, but does not guarantee the original control when several controls are present.

When customizing the title, set `aria-labelledby` to the ID of its text element. For example, use `aria-labelledby="order-title"` on the Card and `<h2 id="order-title">Order details</h2>` in the header slot. This keeps a nearby action button out of the panel name. If the panel has no visible heading, supply `aria-label`.

The default close button uses the current locale's close label; override it with `close-button-aria-label`. `floating-duration` is a finite nonnegative number of milliseconds; 0 disables the delay and invalid values fall back to 250. With reduced motion enabled, opening and closing do not wait for ripple or transition animations; changing the preference during an animation also takes effect.

### Card Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| variant | Appearance | `default / outline / tonal` | `outline` |
| size | Density; omitted value follows platform rules below | `sm / md` | `undefined` |
| direction | Order of cover and body, default column; supports row, column and row-reverse. Does not position the card itself | `row / column / row-reverse` | `column` |
| hoverable | Hover styling | `boolean` | `false` |
| title-style | Title row styles | `CSSProperties` | `undefined` |
| title | Title | `string` | `undefined` |
| subtitle | Subtitle | `string` | `undefined` |
| description | Description | `string` | `undefined` |
| top-divider | Top divider | `boolean` | `false` |
| bottom-divider | Bottom divider | `boolean` | `false` |
| image-src | Cover image URL; cover slot takes precedence | `string` | `undefined` |
| image-fit | Cover image fit | `fill / contain / cover / none / scale-down` | `cover` |
| image-height | Image height; numbers use px | `string / number` | `undefined` |
| image-width | Image width; numbers use px | `string / number` | `undefined` |
| image-alt | Image alternative text | `string` | `undefined` |
| elevation | Shadow for default variant; true means level 1, false disables it, numeric levels 0–24 | `boolean / number` | `0` |
| ripple | Click ripple | `boolean` | `false` |
| floating | Floating expansion state; supports v-model:floating | `boolean` | `false` |
| floating-duration | Floating expansion transition duration in ms | `number` | `250` |
| aria-label | Accessible name for the expanded panel. Defaults to the plain text title. | `string` | `—` |
| aria-labelledby | ID of the visible heading in a custom title or header slot. | `string` | `—` |
| close-button-aria-label | Accessible name of the default close button | `string` | `—` |

### Card Events

| Event | Arguments and timing |
| --- | --- |
| click | `(event: Event)`, emitted when the card is clicked |
| update:floating | `(value: boolean)`, emits false when the built-in close button or Escape requests closing; expansion is controlled by the parent |

### Card Slots

| Slot | Description | Prop |
| --- | --- | --- |
| default | Body | — |
| cover | Cover content; overrides the image-src image | — |
| header | Entire header; overrides title, title-action and subtitle | — |
| title | Title | `{ slotClass: string }` |
| title-action | Title action | — |
| subtitle | Subtitle | `{ slotClass: string }` |
| description | Description | `{ slotClass: string }` |
| footer | Footer actions | — |
| floating-content | Expanded content; column layout only | — |
| close-button | Custom close button; update floating yourself | — |

### Card Methods

No public methods.

### Usage notes

Props, event arguments and slots match. Cedar inherits the global size when size is omitted: xs/sm map to sm, all others to md. Maple falls back to md. Pass size explicitly for identical density. Themes and CSS prefixes remain platform-specific.
Use the Loading directive to compose a loading overlay on Card.
<!-- same-source-api:end -->

## Types

The component exports the following types

```ts
import type { CardProps } from '@cedar-design/ui-vue'
```

Only the documented size presets are supported, rather than every ComponentSize value.

## CSS Variables

Regular/filled backgrounds and borders use `surface-default`, `surface-muted` and `border-default`. Titles, body and secondary text use `content-primary`, `content-tertiary` and `content-secondary`. Expanded floating buttons use `content-primary`; text and icons on dark close buttons use `content-on-dark`.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-card-animation-duration` | `var(--c-sys-motion-duration-slow)` | `transition` |
| `--c-card-animation-easing` | `var(--c-sys-motion-easing-standard)` | `transition-timing-function` |
| `--c-card-background` | `var(--c-sys-color-surface-default)` | `background` |
| `--c-card-border-radius` | `4px` | `border-radius` |
| `--c-card-close-button-background` | `#212121` | `background-color` |
| `--c-card-close-button-border-radius` | `50%` | `border-radius` |
| `--c-card-close-button-icon-size` | `24px` | `font-size` |
| `--c-card-close-button-size` | `56px` | `height`, `width` |
| `--c-card-close-button-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-card-content-color` | `var(--c-sys-color-content-tertiary)` | `color` |
| `--c-card-content-font-size` | `14px` | `font-size` |
| `--c-card-content-margin` | `16px 0 0 0` | `margin` |
| `--c-card-content-padding` | `0 16px` | `padding` |
| `--c-card-content-row-margin` | `16px 0 0 0` | `margin` |
| `--c-card-description-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-card-description-font-size` | `14px` | `font-size` |
| `--c-card-description-margin` | `20px 0 0 0` | `margin` |
| `--c-card-description-padding` | `0 13px` | `padding` |
| `--c-card-filled-background` | `var(--c-sys-color-surface-muted)` | `background-color` |
| `--c-card-floating-buttons-bottom` | `16px` | `bottom` |
| `--c-card-floating-buttons-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-card-floating-buttons-right` | `16px` | `inset-inline-end` |
| `--c-card-footer-bottom` | `9px` | `bottom` |
| `--c-card-footer-margin` | `30px 0 0 0` | `margin` |
| `--c-card-footer-padding` | `0 12px` | `padding` |
| `--c-card-footer-right` | `13px` | `inset-inline-end` |
| `--c-card-hover-shadow` | `0 4px 12px rgba(0, 0, 0, 0.12)` | `box-shadow` |
| `--c-card-image-height` | `200px` | `height` |
| `--c-card-image-width` | `100%` | `width` |
| `--c-card-line-height` | `22px` | `line-height` |
| `--c-card-outline-color` | `var(--c-sys-color-border-default)` | `border` |
| `--c-card-padding` | `0 0 15px 0` | `padding` |
| `--c-card-row-height` | `140px` | `min-height` |
| `--c-card-row-image-width` | `140px` | `width` |
| `--c-card-row-line-height` | `1.5` | `line-height` |
| `--c-card-size-sm-section-margin` | `8px 0 0` | `margin` |
| `--c-card-size-sm-section-padding` | `0 12px` | `padding` |
| `--c-card-size-sm-title-font-size` | `16px` | `font-size` |
| `--c-card-subtitle-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-card-subtitle-font-size` | `14px` | `font-size` |
| `--c-card-subtitle-margin` | `10px 0 0 0` | `margin` |
| `--c-card-subtitle-padding` | `0 12px` | `padding` |
| `--c-card-subtitle-row-margin` | `-8px 0 0 0` | `margin` |
| `--c-card-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-card-title-font-size` | `20px` | `font-size` |
| `--c-card-title-margin` | `15px 0 0 0` | `margin` |
| `--c-card-title-padding` | `0 12px` | `padding` |
| `--c-card-title-row-margin` | `12px 0` | `margin` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-card-background: var(--c-sys-color-surface-default);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->

### Sizing and motion

Use `--c-card-content-row-margin` for horizontal content spacing. Card supports only sm / md sizes. `--c-card-animation-duration` defaults to `var(--c-sys-motion-duration-slow)` and `--c-card-animation-easing` to `var(--c-sys-motion-easing-standard)`. Reduced motion disables Card transitions.
