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

### Section size, heading and content

Toggle the heading, description and body independently. Try each style and status. Without a heading, an enabled marker spans the section. Size controls spacing. Choose a heading level from `h1` to `h6`. Section defaults to `h4`. The preview shows the active combination, font sizes and gaps above the title and description. Turn off “Show description” to hide the description and its spacing. Turn off “Show content” to leave only a comment in the default slot. The body container and its spacing disappear. The heading-to-marker gap is 12px at every size. Override `--c-section-marker-gap` on the section to customize it. The centered marker is one font size tall for a single line and grows by one line height for each additional line. The description appears below the title.

<demo src="./__demos__/sizes.en-US.vue"></demo>

### Grouping inline form fields

Inside Form, Section defaults to heading-line. Pass `show-marker` explicitly to display the heading marker. The fields follow the inline layout and wrap when space is limited. Use Divider between sections when needed.

<demo src="./__demos__/inline-form.en-US.vue"></demo>

## API

### Section Props

| Prop             | Description                                                                                    | Default                 |
| ---------------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| id               | Section anchor                                                                                 | Automatically generated |
| title            | Heading text                                                                                   | Empty                   |
| description      | Supporting text below the heading                                                              | Empty                   |
| size             | Visual size (xs / sm / md / lg / xl)                                                           | md                      |
| variant          | Appearance, plain, heading-line, tonal or outline                                              | heading-line            |
| status           | Status colors the marker, tonal fill and outline (default / info / success / warning / danger) | —                       |
| heading-level    | HTML heading level from 1 to 6                                                                 | `4`                     |
| show-marker      | Show the marker                                                                                | Off                     |
| marker-placement | Marker placement (`title` or `section`)                                                        | `title`                 |

### Section Slots

The default slot controls the body. Omitting it or hiding all its children with `v-if` removes the body container and its spacing. A text interpolation such as `{{ note }}` keeps the container even when the string is empty.

Use the default slot for content and extra for actions. The title and description slots override their respective text props.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable                                | Default / condition                                                                          | Affected styles                                         |
| --------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `--c-section-accent-color`              | `var(--c-sys-color-action-primary)`                                                          | `background`, `border`, `border-inline-start`           |
| `--c-section-after-gap`                 | `24px`                                                                                       | `margin-block`, `padding-block-start`                   |
| `--c-section-before-gap`                | `32px`                                                                                       | `padding-block-start`                                   |
| `--c-section-card-background`           | `var(--c-sys-color-surface-default)`                                                         | `background-color`                                      |
| `--c-section-card-padding`              | `16px`                                                                                       | `padding`                                               |
| `--c-section-card-radius`               | `6px`                                                                                        | `border-radius`                                         |
| `--c-section-content-size`              | `14px`                                                                                       | `font-size`                                             |
| `--c-section-description-color`         | `var(--c-sys-color-content-secondary)`                                                       | `color`                                                 |
| `--c-section-description-gap`           | `4px`                                                                                        | `margin-block-start`                                    |
| `--c-section-description-line-height`   | `20px`                                                                                       | `line-height`                                           |
| `--c-section-description-size`          | `13px`                                                                                       | `font-size`                                             |
| `--c-section-divider-color`             | `var(--c-sys-color-border-default)`                                                          | `border-block-start`                                    |
| `--c-section-divider-width`             | `1px`                                                                                        | `border`, `border-block-start`, `border-radius`         |
| `--c-section-header-gap`                | `16px`                                                                                       | `margin-block-start`                                    |
| `--c-section-heading-gap`               | `16px`                                                                                       | `margin-inline-start`                                   |
| `--c-section-heading-size-step`         | `1px`                                                                                        | `font-size`, `line-height`                              |
| `--c-section-marker-gap`                | `12px`                                                                                       | `padding-inline-end`, `padding-inline-start`, `row-gap` |
| `--c-section-marker-height`             | `calc(100% - 1lh + 1em)`                                                                     | `height`                                                |
| `--c-section-marker-radius`             | `2px`                                                                                        | `border-radius`                                         |
| `--c-section-marker-width`              | `3px`                                                                                        | `border-inline-start`, `padding-inline-start`, `width`  |
| `--c-section-outline-color`             | `var(--c-sys-color-border-default)`                                                          | `border`                                                |
| `--c-section-size-lg-card-padding`      | `20px`                                                                                       | `padding`                                               |
| `--c-section-size-lg-header-gap`        | `20px`                                                                                       | `margin-block-start`                                    |
| `--c-section-size-lg-marker-height`     | `calc(100% - 1lh + 1em)`                                                                     | `height`                                                |
| `--c-section-size-lg-title-line-height` | `28px`                                                                                       | `line-height`                                           |
| `--c-section-size-lg-title-size`        | `16px`                                                                                       | `font-size`                                             |
| `--c-section-size-sm-card-padding`      | `12px`                                                                                       | `padding`                                               |
| `--c-section-size-sm-header-gap`        | `12px`                                                                                       | `margin-block-start`                                    |
| `--c-section-size-sm-marker-height`     | `calc(100% - 1lh + 1em)`                                                                     | `height`                                                |
| `--c-section-size-sm-title-line-height` | `20px`                                                                                       | `line-height`                                           |
| `--c-section-size-sm-title-size`        | `16px`                                                                                       | `font-size`                                             |
| `--c-section-size-xl-card-padding`      | `24px`                                                                                       | `padding`                                               |
| `--c-section-size-xl-header-gap`        | `24px`                                                                                       | `margin-block-start`                                    |
| `--c-section-size-xl-marker-height`     | `calc(100% - 1lh + 1em)`                                                                     | `height`                                                |
| `--c-section-size-xl-title-line-height` | `32px`                                                                                       | `line-height`                                           |
| `--c-section-size-xl-title-size`        | `16px`                                                                                       | `font-size`                                             |
| `--c-section-size-xs-card-padding`      | `8px`                                                                                        | `padding`                                               |
| `--c-section-size-xs-header-gap`        | `8px`                                                                                        | `margin-block-start`                                    |
| `--c-section-size-xs-marker-height`     | `calc(100% - 1lh + 1em)`                                                                     | `height`                                                |
| `--c-section-size-xs-title-line-height` | `18px`                                                                                       | `line-height`                                           |
| `--c-section-size-xs-title-size`        | `16px`                                                                                       | `font-size`                                             |
| `--c-section-title-color`               | `var(--c-sys-color-content-primary)`                                                         | `color`                                                 |
| `--c-section-title-line-height`         | `24px`                                                                                       | `line-height`                                           |
| `--c-section-title-size`                | `16px`                                                                                       | `font-size`                                             |
| `--c-section-title-weight`              | `600`                                                                                        | `font-weight`                                           |
| `--c-section-tonal-background`          | `color-mix(in srgb, var(--c-sys-color-surface-muted) 60%, var(--c-section-card-background))` | `background-color`                                      |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-section-accent-color: var(--c-sys-color-action-primary);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
