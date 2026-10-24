---
permalink: /en/components/badge/
lang: en-US
---

# Badge

The same scenarios, parameters and interactions as Cedar. Only component prefixes differ; themes and site shells remain independent.

## Examples

### Basic usage

Badges use a red background and white text by default.

<demo src="./__demos__/basic.vue"></demo>

### Inline and standalone

<demo src="./__demos__/inline.vue"></demo>

### Dot badges

<demo src="./__demos__/dot.vue"></demo>

### Custom content

<demo src="./__demos__/content.vue"></demo>

### Maximum and zero

<demo src="./__demos__/max.vue"></demo>

### Statuses and colors

<demo src="./__demos__/color.vue"></demo>

### Five sizes

<demo src="./__demos__/size.vue"></demo>

### Positions and offsets

<demo src="./__demos__/position.vue"></demo>

### Show and hide

<demo src="./__demos__/show.vue"></demo>

### Solid and outline

<demo src="./__demos__/variant.vue"></demo>

## API

<!-- same-source-api:start -->
### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| description | Fallback description text | `string` | `-` |
| content | Badge content | `number \| string` | `-` |
| max | Numeric overflow shows max+; strings are not capped | `number` | `99` |
| dot | Display a dot | `boolean` | `false` |
| offset-x | Horizontal offset; ignored in inline mode | `number` | `0` |
| offset-y | Vertical offset | `number` | `0` |
| color | Custom color; outline uses it for border and text | `string` | `-` |
| text-color | Content text color | `string` | `-` |
| mode | Layout mode | `'floating' \| 'inline'` | `floating` |
| position | Physical floating position, unchanged in RTL | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left' \| 'left' \| 'right'` | `top-right` |
| inline-position | Logical inline position | `'start' \| 'end'` | `end` |
| size | Size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `md` |
| status | Semantic status | `SemanticStatus` | `danger` |
| show | Show the badge | `boolean` | `true` |
| show-zero | Show numeric zero | `boolean` | `false` |
| variant | Appearance | `'outline' \| 'default'` | `default` |

### Events

No component-defined events.

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| default | Wrapped content; overrides description | — |
| content | Custom badge content | — |

### Methods

No public methods.

### Platform notes

Props and slots match. Without a default slot or description, the badge becomes standalone inline content. Omitted content displays a dot. Direction, theme and CSS prefix come from each platform.
<!-- same-source-api:end -->

## Types

```ts
type SemanticStatus = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'primary' | 'secondary' | 'tertiary'
type BadgeVariant = 'default' | 'outline'
type BadgeMode = 'floating' | 'inline'
type BadgePosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'left' | 'right'
type BadgeInlinePosition = 'start' | 'end'
type BadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
```

## Style Variables

### Common

| Name | Default |
| --- | --- |
| `--c-badge-font-weight` | `500` |
| `--c-badge-bg-color` | `rgb(var(--c-danger-7))` |
| `--c-badge-text-color` | `#ffffff` |
| `--c-badge-description-text-color` | `var(--c-color-text-1)` |

### Size (`xs / sm / md / lg / xl`)

| Name |
| --- |
| `--c-badge-size-{size}-font-size` |
| `--c-badge-size-{size}-scale` |
| `--c-badge-size-{size}-dot-width` / `-dot-height` |
| `--c-badge-size-{size}-padding` |
| `--c-badge-size-{size}-height` |
| `--c-badge-size-{size}-border-radius` |
| `--c-badge-size-{size}-space` |
| `--c-badge-description-size-{size}-font-size` |

### Status (`default / info / success / warning / danger / primary`)

| Name |
| --- |
| `--c-badge-status-{status}-bg-color` |
| `--c-badge-status-{status}-text-color` |
| `--c-badge-variant-outline-status-{status}-text-color` |

The default `status="danger"` uses a red background with white text. Explicit `status="default"` uses neutral colors. All five sizes (`xs | sm | md | lg | xl`) are implemented.

### Color override boundaries

Fallback and danger fills use red backgrounds with white text: danger step 7 in light themes and step 4 in dark themes. The fixed neutral default fill and gray secondary/tertiary fills are intentional; override border-color to match a different host surface. Custom color/text-color contrast is caller-owned.
