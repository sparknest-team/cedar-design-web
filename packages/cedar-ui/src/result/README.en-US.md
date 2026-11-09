---
lang: en-US
permalink: /en/components/result/
---

# Result

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `status`: Selects the semantic state.

<demo src="./__demos__/basic.vue"></demo>

## Content and presentation

### Success, warning and failure

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `status` | Result-page status | Success, warning and failure, HTTP result states, All |
| `title` | Title content | Success, warning and failure, All |
| `subtitle` | Subtitle content | HTTP result states |
<!-- demo-config-notes:end -->


Compare how semantic states affect the icon, title and actions. HTTP statuses and custom artwork remain separate.

<demo src="./__demos__/status-comparison.vue"></demo>

### HTTP result states

Compare permission, missing-resource and server-error content, with recovery actions appropriate to each case.

<demo src="./__demos__/http-status-comparison.vue"></demo>

### All

- `status`: Selects the semantic state.

<demo src="./__demos__/all.vue"></demo>

## Customization and slots

### Custom

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `title` | Title content | Custom |
| `subtitle` | Subtitle content | Custom |
<!-- demo-config-notes:end -->


Preview configuration: `title="This is title content"`, `subtitle="This is subtitle content"`.

<demo src="./__demos__/custom.vue"></demo>

## API

### Result Props

| Parameter | Description | Type | Default |
| -------- | ---------------- | -------------------------------------------------------------------------------- | :------: |
| status | Result-page status | `'info' \| 'success' \| 'warning' \| 'danger' \| 'question' \| 'empty' \| '403' \| '404' \| '500'` | `'info'` |
| title | Title content | `string` | `-` |
| subtitle | Subtitle content | `string` | `-` |
| image-size | Status graphic size; numbers are px | `string \| number` | `-` |
| animation | Whether status-graphic animation is enabled | `boolean` | `true` |

### Result Slots

| Slot | Description | Prop | Version |
| -------- | :------: | ---- | :---- |
| icon | Custom status graphic | `{ size?: string }` |  |
| title | Title | - |  |
| subtitle | Subtitle | - |  |
| extra | Actions | - | 2.8.0 |
| default | Default slot | - | 2.8.0 |

## Types

The component exports the following types

```ts
import type { ResultInstance } from '@cedar-design/ui'
```

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-result-background` | `var(--c-color-bg-white)` | `background-color` |
| `--c-result-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-result-content-margin` | `var(--c-spacing-8) 0 0` | `margin` |
| `--c-result-danger-border-color` | `var(--c-color-danger-light-3)` | `border-color` |
| `--c-result-danger-color` | `var(--c-sys-color-content-danger)` | `fill` |
| `--c-result-empty-border-color` | `rgb(var(--c-gray-2))` | `border-color` |
| `--c-result-empty-color` | `rgb(var(--c-gray-5))` | `fill` |
| `--c-result-extra-margin` | `var(--c-spacing-8) 0 0` | `margin` |
| `--c-result-image-size` | `80px` | `border`, `height`, `width` |
| `--c-result-info-border-color` | `var(--c-color-primary-light-3)` | `border-color` |
| `--c-result-info-color` | `var(--c-color-info)` | `fill` |
| `--c-result-padding` | `var(--c-spacing-10)` | `padding` |
| `--c-result-question-border-color` | `rgb(var(--c-gray-2))` | `border-color` |
| `--c-result-question-color` | `rgb(var(--c-gray-6))` | `fill` |
| `--c-result-subtitle-color` | `var(--c-color-text-2)` | `color` |
| `--c-result-subtitle-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-result-subtitle-line-height` | `1.5715` | `line-height` |
| `--c-result-subtitle-margin` | `var(--c-spacing-4) 0 0` | `margin` |
| `--c-result-success-border-color` | `var(--c-color-success-light-3)` | `border-color` |
| `--c-result-success-color` | `var(--c-sys-color-content-success)` | `fill` |
| `--c-result-title-color` | `var(--c-color-text-1)` | `color` |
| `--c-result-title-font-size` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-result-title-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-result-title-margin` | `var(--c-spacing-7) 0 0` | `margin` |
| `--c-result-warning-border-color` | `var(--c-color-warning-light-3)` | `border-color` |
| `--c-result-warning-color` | `var(--c-sys-color-content-warning)` | `fill` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-result-background: var(--c-color-bg-white);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
