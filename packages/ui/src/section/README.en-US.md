---
permalink: /en/components/section/
lang: en-US
---

# Section

Group a heading, description, actions and content in a page, drawer or card. Outside forms, the parent layout controls section spacing. Inside Form, Section spans all grid columns, adjusts field spacing, and wraps fields horizontally in inline layout.

## Basic examples

### Plain section

<demo src="./__demos__/plain.vue"></demo>

### Section with a line

<demo src="./__demos__/line.vue"></demo>

## API

### Section Props

| Prop | Description | Default |
| --- | --- | --- |
| id | Section anchor | Automatically generated |
| title | Heading text | Empty |
| description | Supporting text below the heading | Empty |
| variant | Appearance, plain, line or card | line inside Form, otherwise plain |
| heading-level | HTML heading level from 1 to 6 | 3 inside Form, otherwise 2 |
| show-marker | Show a heading marker | Enabled inside Form |
| show-end-divider | Draw a trailing line in plain and line variants | false |

### Section Slots

Use the default slot for content and extra for actions. The title and description slots override their respective text props.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-section-accent-color` | `var(--c-sys-color-action-primary)` | `background` |
| `--c-section-after-gap` | `24px` | `margin-block`, `padding-block-start` |
| `--c-section-before-gap` | `32px` | `padding-block-start` |
| `--c-section-card-background` | `var(--c-sys-color-surface-default)` | `background` |
| `--c-section-card-padding` | `16px` | `padding` |
| `--c-section-card-radius` | `6px` | `border-radius` |
| `--c-section-description-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-section-description-gap` | `4px` | `margin-block-start` |
| `--c-section-description-line-height` | `20px` | `line-height` |
| `--c-section-description-size` | `13px` | `font-size` |
| `--c-section-divider-color` | `var(--c-sys-color-border-default)` | `border`, `border-block-start` |
| `--c-section-divider-width` | `1px` | `border`, `border-block-start` |
| `--c-section-end-divider-gap` | `24px` | `margin-block-start` |
| `--c-section-header-gap` | `20px` | `margin-block-end` |
| `--c-section-heading-gap` | `16px` | `margin-inline-start` |
| `--c-section-marker-gap` | `8px` | `margin-inline-end`, `row-gap` |
| `--c-section-marker-height` | `16px` | `height` |
| `--c-section-marker-radius` | `2px` | `border-radius` |
| `--c-section-marker-width` | `3px` | `width` |
| `--c-section-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-section-title-line-height` | `24px` | `line-height` |
| `--c-section-title-size` | `16px` | `font-size` |
| `--c-section-title-weight` | `600` | `font-weight` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-section-accent-color: var(--c-sys-color-action-primary);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
