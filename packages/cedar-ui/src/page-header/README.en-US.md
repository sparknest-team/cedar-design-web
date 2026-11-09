---
lang: en-US
permalink: /en/components/page-header/
---

# Page Header

The back button only emits `back`; it does not navigate or call browser history. The demos show a Message notification. Handle the destination in your application. The native button supports click, Enter and Space.

Displays the current page title, context and related actions. Use `class` / `style` for application-specific positioning and backgrounds.

## Basic examples

### Basic usage

- `show-back`: Whether to show the back button
- `title`: Main title
- `subtitle`: Subtitle

<demo src="./__demos__/basic.vue"></demo>

## Content and presentation

### Breadcrumbs and transparent surfaces

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `title` | Main title | Breadcrumbs and transparent surfaces, Content |
| `subtitle` | Subtitle | Breadcrumbs and transparent surfaces, Content |
| `show-back` | Whether to show back | Content |
<!-- demo-config-notes:end -->


Compare breadcrumb navigation and title hierarchy on transparent surfaces.

<demo src="./__demos__/surface-comparison.vue"></demo>

### Content

- `show-back`: Whether to show the back button
- `title`: Main title
- `subtitle`: Subtitle

<demo src="./__demos__/content.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. The back button sits at inline start; its default icon points right in RTL. Title, subtitle and extra content follow reading order. Custom back slots are not mirrored automatically.

## Usage notes

### Configuration

The back button shows circular feedback for hover-capable mouse pointers and keyboard focus. The feedback circle does not affect title layout.

## API

The back button uses the current locale’s back text by default. Use `back-button-aria-label` for a more specific name. The title slot can contain a heading at the level appropriate for the page. The back event is a notification and does not navigate automatically.

### PageHeader Props

| Prop | Description | Type | Default |
| -------- | ---------------- | --------- | ------- |
| show-back | Whether to show back | `boolean` | `false` |
| back-button-aria-label | Accessible name of the back button | `string` | Current locale back text |
| title | Main title | `string` | `-` |
| subtitle | Subtitle | `string` | `-` |
| extra | Extra content on the right | `string` | `-` |

### PageHeader Events

| Event | Description | Arguments |
| ------ | ------------------ | -------------- |
| back | Emitted when the back button is clicked | event: `MouseEvent` |

### PageHeader Slots

| Slot | Description | Prop |
| -------- | -------------- | ---- |
| header | Content above the page header | - |
| back | Custom back icon | - |
| avatar | Avatar | - |
| title | Main title | - |
| subtitle | Subtitle | - |
| extra | Additional right-side content | - |
| default | Main page-header content | - |
| footer | Footer content | - |

## Types

```ts
import type { PageHeaderProps } from '@cedar-design/ui'
```

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-page-header-back-color` | `var(--c-color-text-2)` | `color` |
| `--c-page-header-back-hover-bg` | `var(--c-sys-color-state-hover)` | `background` |
| `--c-page-header-back-hover-size` | `30px` | `height`, `width` |
| `--c-page-header-back-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-page-header-content-margin-top` | `var(--c-spacing-8)` | `margin-top` |
| `--c-page-header-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-page-header-footer-margin-top` | `var(--c-spacing-8)` | `margin-top` |
| `--c-page-header-item-gap` | `var(--c-spacing-6)` | `margin-inline-start` |
| `--c-page-header-row-gap` | `var(--c-spacing-6)` | `margin-bottom` |
| `--c-page-header-subtitle-color` | `var(--c-color-text-3)` | `color` |
| `--c-page-header-title-color` | `var(--c-color-text-1)` | `color` |
| `--c-page-header-title-font-size` | `var(--c-font-size-title-2)` | `font-size` |
| `--c-page-header-title-font-weight` | `600` | `font-weight` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-page-header-back-color: var(--c-color-text-2);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
