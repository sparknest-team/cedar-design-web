---
permalink: /en/components/button/
lang: en-US
---

# Button

Both libraries use the same implementation and examples; package prefixes, themes and registration stay local.

## Examples

### Eight statuses

<demo src="./__demos__/basic.vue"></demo>

### Four variants

<demo src="./__demos__/variants.vue"></demo>

### Five sizes

<demo src="./__demos__/size.vue"></demo>

### Disabled buttons and links

<demo src="./__demos__/disabled.vue"></demo>

### Loading layouts and animations

<demo src="./__demos__/loading.vue"></demo>

### Sync, async and rejection recovery

<demo src="./__demos__/auto-loading.vue"></demo>

### Block buttons

<demo src="./__demos__/block.vue"></demo>

### Colors, ripple and elevation

<demo src="./__demos__/custom-color.vue"></demo>

### Icon slots and round buttons

<demo src="./__demos__/round.vue"></demo>

### Stacked icon and text

<demo src="./__demos__/stacked.vue"></demo>

### Group inheritance and overrides

<demo src="./__demos__/button-group.vue"></demo>

### Native form, focus and touch events

<demo src="./__demos__/native-events.vue"></demo>

## API

<!-- same-source-api:start -->
### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| status | Semantic color; inherits group, otherwise default | `SemanticStatus` | `undefined` |
| variant | Appearance; inherits group, otherwise default | `default / text / outline / tonal` | `undefined` |
| size | Size; inherits group, otherwise md | `xs / sm / md / lg / xl` | `undefined` |
| html-type | Native button type | `button / submit / reset` | `button` |
| component | Root tag; link attributes fall through | `button / a` | `button` |
| round | Round button | `boolean` | `false` |
| block | Full available width | `boolean` | `false` |
| loading | Loading; blocks activation and navigation | `boolean` | `false` |
| loading-type | Spinner animation; same as Loading.type | `circle / wave / cube / rect / disappear` | `circle` |
| loading-mode | Inline, covering, or bottom progress line | `default / fill / line` | `default` |
| loading-size | Spinner size; inherits button size, or xs when replacing an inline icon | `ComponentSize / number` | `undefined` |
| loading-color | Loading indicator color | `string` | `currentColor` |
| loading-radius | Circle spinner radius | `string / number` | `undefined` |
| auto-loading | Wait for click/touchstart Promise results; sync callbacks do not flash loading | `boolean` | `false` |
| icon-container | Icon container appearance | `boolean` | `false` |
| disabled | Disabled; inherits group, explicit false overrides | `boolean` | `undefined` |
| ripple | Click ripple | `boolean` | `true` |
| focusable | Allow sequential Tab focus; does not prevent programmatic focus | `boolean` | `true` |
| autofocus | Native autofocus | `boolean` | `false` |
| text-color | Custom text color | `string` | `undefined` |
| color | Custom background or variant base color | `string` | `undefined` |
| elevation | Default variant shadow; true=2, false=off, rounded/clamped 0–24; group owns grouped elevation | `boolean / number` | `true` |
| stacked | Stack icon and text; inherits group when omitted | `boolean` | `undefined` |

### Events

| Event | Arguments and behavior |
| --- | --- |
| click | `(event: Event) => void / Promise<unknown>` |
| touchstart | `(event: Event) => void / Promise<unknown>` |

Handlers may return promises and multiple listeners are supported. With auto-loading, all listeners must settle before unblocking, including after rejection. Unmounting or KeepAlive deactivation invalidates pending completion. Listener return values are read directly; events are not dispatched a second time. Native focus/blur attributes fall through. Disabled/busy clicks prevent navigation and propagation.

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| default | Button label; retained while loading | — |
| icon | Leading icon; above label when stacked | — |

### Methods

No custom public methods.
<!-- same-source-api:end -->

## ButtonGroup

Props: size=md, status=default, variant=default, color/text-color=undefined, disabled/stacked/vertical=false, elevation=true. Uses the default slot and exposes buttonGroupProvider (reactive group configuration). No custom events.

## Migration

Cedar loading-type=default/fill/line becomes loading-mode=default/fill/line; loading-type now selects spinner animation. Maple uses loading-mode=fill to retain the previous covering layout. Both default ripple and focusable to true. CSS tokens now use the shared Button token names (with --c-/--c- prefixes); see style/token.less.

## Types

ButtonProps、ButtonVariant、ButtonLoadingMode、ButtonHandler、ButtonInstance、ButtonGroupProps、ButtonGroupInstance。
