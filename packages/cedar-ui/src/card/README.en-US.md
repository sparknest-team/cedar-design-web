---
permalink: /en/components/card/
lang: en-US
---

# Card

The same scenarios, parameters and interactions as Cedar. Only component prefixes differ; themes and site shells remain independent.

## Examples

### Basic usage and subtitle

<demo src="./__demos__/basic.vue"></demo>

### Custom header

<demo src="./__demos__/no-padding.vue"></demo>

### Hover style

<demo src="./__demos__/hoverable.vue"></demo>

### Variants and elevation

<demo src="./__demos__/variant.vue"></demo>

### Images and directions

<demo src="./__demos__/image.vue"></demo>

### Sizes

<demo src="./__demos__/size.vue"></demo>

### Long title and tooltip

<demo src="./__demos__/tooltip.vue"></demo>

### Content slots

<demo src="./__demos__/slots.vue"></demo>


### Ripple and click

<demo src="./__demos__/ripple.vue"></demo>

### Floating and close

<demo src="./__demos__/floating.vue"></demo>

## API

<!-- same-source-api:start -->
### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| variant | Appearance | `default / outline / tonal` | `default` |
| size | Density; omitted value follows platform rules below | `sm / md` | `undefined` |
| direction | Cover and body layout | `row / column / row-reverse` | `column` |
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
| click | `(event: Event)`, when the card is clicked |
| update:floating | `(value: boolean)`, built-in close requests false; the parent controls opening |

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

Cedar inherits global size when omitted (xs/sm map to sm, others to md); Maple falls back to md. Pass size explicitly for matching density. Themes and CSS prefixes remain platform-specific. Card has no loading prop; compose it with the Loading directive.
<!-- same-source-api:end -->

### Style Variables

| Variable | Default |
| --- | --- |
| `--c-card-hover-shadow` | `0 4px 12px rgb(0 0 0 / 12%)` |
| `--c-card-size-sm-title-font-size` | `16px` |
| `--c-card-size-sm-section-margin` | `8px 0 0` |
| `--c-card-size-sm-section-padding` | `0 12px` |
| `--c-card-padding` | `0 0 15px 0` |
| `--c-card-background` | `var(--c-color-bg-2)` |
| `--c-card-filled-background` | `hsla(0, 0%, 93%, 1)` |
| `--c-card-outline-color` | `var(--c-color-border-2)` |
| `--c-card-border-radius` | `4px` |
| `--c-card-image-width` | `100%` |
| `--c-card-row-image-width` | `140px` |
| `--c-card-image-height` | `200px` |
| `--c-card-row-height` | `140px` |
| `--c-card-title-color` | `#333` |
| `--c-card-title-font-size` | `20px` |
| `--c-card-title-padding` | `0 12px` |
| `--c-card-title-margin` | `15px 0 0 0` |
| `--c-card-title-row-margin` | `12px 0` |
| `--c-card-content-padding` | `0 16px` |
| `--c-card-content-margin` | `16px 0 0 0` |
| `--c-card-content-color` | `var(--c-color-text-3)` |
| `--c-card-content-font-size` | `14px` |
| `--c-card-content-row-margin` | `16px 0 0 0` |
| `--c-card-subtitle-color` | `rgba(0, 0, 0, 0.6)` |
| `--c-card-subtitle-font-size` | `14px` |
| `--c-card-subtitle-padding` | `0 12px` |
| `--c-card-subtitle-margin` | `10px 0 0 0` |
| `--c-card-subtitle-row-margin` | `-8px 0 0 0` |
| `--c-card-description-color` | `rgba(0, 0, 0, 0.6)` |
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
| `--c-card-floating-buttons-color` | `#fff` |
| `--c-card-close-button-icon-size` | `24px` |
| `--c-card-close-button-size` | `56px` |
| `--c-card-close-button-primary-color` | `#212121` |
| `--c-card-close-button-text-color` | `#fff` |
| `--c-card-close-button-border-radius` | `50%` |
