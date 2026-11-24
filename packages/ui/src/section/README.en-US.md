---
permalink: /en/components/section/
lang: en-US
---

# Section

Group a heading, description, actions and content in a page, drawer or card. Outside forms, the parent layout controls section spacing. Inside Form, Section spans all grid columns, adjusts field spacing, and wraps fields horizontally in inline layout.

## Basic examples

### Plain section

<demo src="./__demos__/plain.en-US.vue"></demo>

### Section with a line

`heading-line` is the default variant.

<demo src="./__demos__/line.en-US.vue"></demo>

### Outlined section with a custom heading

Use the title and description slots for the section header. `show-marker` adds an accent before the heading, and `heading-level` sets its HTML level.

<demo src="./__demos__/outline.en-US.vue"></demo>

### Section sizes

Choose a size and heading level to preview the title. Each heading column shows its default font size. The dashed border marks the content area.

| Size | h1 | h2 | h3 | h4 | h5 | h6 | Card padding | Gap below header |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `xs` | 24px | 20px | 18px | 16px | 14px | 12px | 8px | 8px |
| `sm` | 24px | 20px | 18px | 16px | 14px | 12px | 12px | 12px |
| `md` | 26px | 22px | 20px | 18px | 16px | 14px | 16px | 20px |
| `lg` | 30px | 26px | 24px | 22px | 20px | 18px | 20px | 24px |
| `xl` | 34px | 30px | 28px | 26px | 24px | 22px | 24px | 28px |

<demo src="./__demos__/sizes.en-US.vue"></demo>

### With or without a heading

Switch between plain, heading-line, tonal and outline, then toggle the heading and description independently. The example starts with just the body. Enable the marker to mark the entire section. When the heading is visible, you can choose either placement. With both the heading and description off, Section omits the header, including the line in the heading-line variant.

<demo src="./__demos__/heading-options.en-US.vue"></demo>

### Grouping inline form fields

Inside Form, Section defaults to heading-line. Pass `show-marker` explicitly to display the heading marker. The fields follow the inline layout and wrap when space is limited. Use Divider between sections when needed.

<demo src="./__demos__/inline-form.en-US.vue"></demo>

## API

### Section Props

| Prop | Description | Default |
| --- | --- | --- |
| id | Section anchor | Automatically generated |
| title | Heading text | Empty |
| description | Supporting text below the heading | Empty |
| size | Visual size (xs / sm / md / lg / xl) | md |
| variant | Appearance, plain, heading-line, tonal or outline | heading-line |
| status | Status colors the marker, tonal fill and outline (default / info / success / warning / danger) | — |
| heading-level | HTML heading level from 1 to 6 | `4` |
| show-marker | Show the marker | Off |
| marker-placement | Marker placement (`title` or `section`) | `title` |

### Section Slots

Use the default slot for content and extra for actions. The title and description slots override their respective text props.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-section-accent-color` | `var(--c-sys-color-action-primary)` | `background`, `background-color`, `border` |
| `--c-section-after-gap` | `24px` | `margin-block`, `padding-block-start` |
| `--c-section-before-gap` | `32px` | `padding-block-start` |
| `--c-section-card-background` | `var(--c-sys-color-surface-default)` | `background-color` |
| `--c-section-card-padding` | `16px` | `padding` |
| `--c-section-card-radius` | `6px` | `border-radius` |
| `--c-section-content-size` | `14px` | `font-size` |
| `--c-section-description-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-section-description-gap` | `4px` | `margin-block-start` |
| `--c-section-description-line-height` | `20px` | `line-height` |
| `--c-section-description-size` | `13px` | `font-size` |
| `--c-section-divider-color` | `var(--c-sys-color-border-default)` | `border-block-start` |
| `--c-section-divider-width` | `1px` | `border`, `border-block-start` |
| `--c-section-header-gap` | `20px` | `margin-block-end` |
| `--c-section-heading-gap` | `16px` | `margin-inline-start` |
| `--c-section-heading-size-step` | `1px` | `font-size`, `line-height` |
| `--c-section-marker-gap` | `12px` | `padding-inline-end`, `padding-inline-start`, `row-gap` |
| `--c-section-marker-height` | `16px` | `height` |
| `--c-section-marker-radius` | `2px` | `border-radius` |
| `--c-section-marker-width` | `3px` | `padding-inline-start`, `width` |
| `--c-section-outline-color` | `var(--c-sys-color-border-default)` | `border` |
| `--c-section-size-lg-card-padding` | `20px` | `padding` |
| `--c-section-size-lg-header-gap` | `24px` | `margin-block-end` |
| `--c-section-size-lg-marker-height` | `20px` | `height` |
| `--c-section-size-lg-title-line-height` | `28px` | `line-height` |
| `--c-section-size-lg-title-size` | `20px` | `font-size` |
| `--c-section-size-sm-card-padding` | `12px` | `padding` |
| `--c-section-size-sm-header-gap` | `12px` | `margin-block-end` |
| `--c-section-size-sm-marker-height` | `14px` | `height` |
| `--c-section-size-sm-title-line-height` | `20px` | `line-height` |
| `--c-section-size-sm-title-size` | `14px` | `font-size` |
| `--c-section-size-xl-card-padding` | `24px` | `padding` |
| `--c-section-size-xl-header-gap` | `28px` | `margin-block-end` |
| `--c-section-size-xl-marker-height` | `24px` | `height` |
| `--c-section-size-xl-title-line-height` | `32px` | `line-height` |
| `--c-section-size-xl-title-size` | `24px` | `font-size` |
| `--c-section-size-xs-card-padding` | `8px` | `padding` |
| `--c-section-size-xs-header-gap` | `8px` | `margin-block-end` |
| `--c-section-size-xs-marker-height` | `12px` | `height` |
| `--c-section-size-xs-title-line-height` | `18px` | `line-height` |
| `--c-section-size-xs-title-size` | `14px` | `font-size` |
| `--c-section-title-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-section-title-line-height` | `24px` | `line-height` |
| `--c-section-title-size` | `16px` | `font-size` |
| `--c-section-title-weight` | `600` | `font-weight` |
| `--c-section-tonal-background` | `var(--c-sys-color-surface-muted)` | `background-color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-section-accent-color: var(--c-sys-color-action-primary);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
