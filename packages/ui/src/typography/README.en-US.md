---
lang: en-US
permalink: /en/components/typography/
---

# Typography

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `bold`, `:heading="2"`, `mark`, `underline`.

<demo src="./__demos__/basic.vue"></demo>

## Content and presentation

### Title

Preview configuration: `:heading="2"`, `:heading="3"`, `:heading="4"`, `:heading="5"`.

<demo src="./__demos__/title.vue"></demo>

### Text

Preview configuration: `status="secondary"`, `status="tertiary"`, `status="info"`, `status="primary"`, `status="success"`, `status="warning"`.

<demo src="./__demos__/text.vue"></demo>

### Paragraph

Preview configuration: `:heading="5"`, `status="secondary"`, `spacing="close"`.

<demo src="./__demos__/paragraph.vue"></demo>

### Ellipsis

Preview configuration: `:heading="4"`, `ellipsis`, `:ellipsis="{
        rows: 2,
        showTooltip: true,
      }"`, `:ellipsis="{
        rows: 2,
        showTooltip: true,
        css: true,
      }"`.

<demo src="./__demos__/ellipsis.vue"></demo>

## Interaction and control

### Operations

Preview configuration: `copyable`, `editable`, `v-model:edit-text="str"`.

<demo src="./__demos__/operations.vue"></demo>

## Lifecycle and edge cases

### Scheduler Lifecycle

<demo src="./__demos__/scheduler-lifecycle.vue"></demo>

## API

### Typography Slots

| Slot | Description | Prop |
| --- | --- | --- |
| default | Typography content | `-` |

### TypographyText Props

| Prop | Description | Type | Default |
| --- | --- | --- | :---: |
| status | Semantic text status | `SemanticStatus`<br>`'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `-` |
| bold | Bold | `boolean` | `false` |
| mark | Mark styling | `boolean \| { color: string }` | `false` |
| underline | Underline styling | `boolean` | `false` |
| delete | Strikethrough styling | `boolean` | `false` |
| code | Code-block styling | `boolean` | `false` |
| disabled | Disable copy, edit and expand buttons while preserving text and ellipsis measurement | `boolean` | `false` |
| editable | Enable editing | `boolean` | `false` |
| editing **(v-model)** | Whether currently editing | `boolean` | `-` |
| default-editing | Default editing state | `boolean` | `false` |
| edit-text **(v-model)** | Edited text | `string` | `-` |
| copyable | Enable copying | `boolean` | `false` |
| copy-text | Text to copy | `string` | `-` |
| copy-delay | Duration of successful copy feedback in ms; copying remains available | `number` | `3000` |
| ellipsis | Automatic truncation; see EllipsisConfig | `boolean \| EllipsisConfig` | `false` |
| edit-tooltip-props | Edit-button Tooltip options | `object` | `-` |
| copy-tooltip-props | Copy-button Tooltip options | `object` | `-` |

### TypographyText Events

| Event | Description | Arguments |
| --- | --- | --- |
| edit-start | Editing starts | `-` |
| update:editing | Request an editing state change | `editing: boolean` |
| update:editText | Request an edit text change | `text: string` |
| change | Edited content changes | `text: string` |
| edit-end | Editing ends | `-` |
| copy | Notifies after a successful clipboard write | `text: string` |
| ellipsis | Ellipsis-state change | `isEllipsis: boolean` |
| expand | Expand/collapse event | `expanded: boolean` |

### TypographyText Slots

| Slot | Description | Prop |
| --- | --- | --- |
| default | Text or rich content | `-` |
| expand-node | Custom expand/collapse buttons | `expanded: boolean` |
| copy-icon | Custom copy-button icon | `copied: boolean` |
| copy-tooltip | Custom copy-button tooltip content | `copied: boolean` |

### TypographyTitle Props

| Prop | Description | Type | Default |
| --- | --- | --- | :---: |
| status | Semantic text status | `SemanticStatus`<br>`'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `-` |
| bold | Bold | `boolean` | `false` |
| mark | Mark styling | `boolean \| { color: string }` | `false` |
| underline | Underline styling | `boolean` | `false` |
| delete | Strikethrough styling | `boolean` | `false` |
| code | Code-block styling | `boolean` | `false` |
| disabled | Disable copy, edit and expand buttons while preserving text and ellipsis measurement | `boolean` | `false` |
| editable | Enable editing | `boolean` | `false` |
| editing **(v-model)** | Whether currently editing | `boolean` | `-` |
| default-editing | Default editing state | `boolean` | `false` |
| edit-text **(v-model)** | Edited text | `string` | `-` |
| copyable | Enable copying | `boolean` | `false` |
| copy-text | Text to copy | `string` | `-` |
| copy-delay | Duration of successful copy feedback in ms; copying remains available | `number` | `3000` |
| ellipsis | Automatic truncation; see EllipsisConfig | `boolean \| EllipsisConfig` | `false` |
| edit-tooltip-props | Edit-button Tooltip options | `object` | `-` |
| copy-tooltip-props | Copy-button Tooltip options | `object` | `-` |
| heading | Heading level, equivalent to `h1`/`h2`/`h3`/`h4`/`h5`/`h6` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` |

### TypographyTitle Events

| Event | Description | Arguments |
| --- | --- | --- |
| edit-start | Editing starts | `-` |
| update:editing | Request an editing state change | `editing: boolean` |
| update:editText | Request an edit text change | `text: string` |
| change | Edited content changes | `text: string` |
| edit-end | Editing ends | `-` |
| copy | Notifies after a successful clipboard write | `text: string` |
| ellipsis | Ellipsis-state change | `isEllipsis: boolean` |
| expand | Expand/collapse event | `expanded: boolean` |

### TypographyTitle Slots

| Slot | Description | Prop |
| --- | --- | --- |
| default | Text or rich content | `-` |
| expand-node | Custom expand/collapse buttons | `expanded: boolean` |
| copy-icon | Custom copy-button icon | `copied: boolean` |
| copy-tooltip | Custom copy-button tooltip content | `copied: boolean` |

### TypographyParagraph Props

| Prop | Description | Type | Default |
| --- | --- | --- | :---: |
| status | Semantic text status | `SemanticStatus`<br>`'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `-` |
| bold | Bold | `boolean` | `false` |
| mark | Mark styling | `boolean \| { color: string }` | `false` |
| underline | Underline styling | `boolean` | `false` |
| delete | Strikethrough styling | `boolean` | `false` |
| code | Code-block styling | `boolean` | `false` |
| disabled | Disable copy, edit and expand buttons while preserving text and ellipsis measurement | `boolean` | `false` |
| editable | Enable editing | `boolean` | `false` |
| editing **(v-model)** | Whether currently editing | `boolean` | `-` |
| default-editing | Default editing state | `boolean` | `false` |
| edit-text **(v-model)** | Edited text | `string` | `-` |
| copyable | Enable copying | `boolean` | `false` |
| copy-text | Text to copy | `string` | `-` |
| copy-delay | Duration of successful copy feedback in ms; copying remains available | `number` | `3000` |
| ellipsis | Automatic truncation; see EllipsisConfig | `boolean \| EllipsisConfig` | `false` |
| edit-tooltip-props | Edit-button Tooltip options | `object` | `-` |
| copy-tooltip-props | Copy-button Tooltip options | `object` | `-` |
| blockquote | Block quotation | `boolean` | `false` |
| spacing | Paragraph line height; use the default for long text and `close` for short text | `'default' \| 'close'` | `'default'` |

### TypographyParagraph Events

| Event | Description | Arguments |
| --- | --- | --- |
| edit-start | Editing starts | `-` |
| update:editing | Request an editing state change | `editing: boolean` |
| update:editText | Request an edit text change | `text: string` |
| change | Edited content changes | `text: string` |
| edit-end | Editing ends | `-` |
| copy | Notifies after a successful clipboard write | `text: string` |
| ellipsis | Ellipsis-state change | `isEllipsis: boolean` |
| expand | Expand/collapse event | `expanded: boolean` |

### TypographyParagraph Slots

| Slot | Description | Prop |
| --- | --- | --- |
| default | Text or rich content | `-` |
| expand-node | Custom expand/collapse buttons | `expanded: boolean` |
| copy-icon | Custom copy-button icon | `copied: boolean` |
| copy-tooltip | Custom copy-button tooltip content | `copied: boolean` |

## Types

The component exports the following types:

```ts
import type {
  TypographyInstance,
  TypographyParagraphInstance,
  TypographyTitleInstance,
  TypographyTextInstance,
  EllipsisConfig,
} from '@cedar-design/ui-vue'
```
### EllipsisConfig

| Prop | Description | Type | Default |
| --- | --- | --- | :---: |
| rows | Displayed lines; values other than positive safe integers fall back to 1 | `number` | `1` |
| expandable | Whether expand/collapse is supported | `boolean` | `false` |
| ellipsisStr | Ellipsis | `string` | `'...'` |
| suffix | Suffix | `string` | `-` |
| showTooltip | Popup options for truncated content | `boolean \| { type: 'tooltip' \| 'popover'; props: Record<string, any> }` | `false` |
| css | Use CSS truncation; currently does not support expansion, custom ellipsis or suffix | `boolean` | `false` |

While editing, confirming an IME candidate does not end editing. Enter outside composition or blur ends editing.

Success feedback and `copy` are emitted only after the clipboard write succeeds. A browser fallback is attempted if the native write fails; if both fail, no success is reported. Users may retry, and stale results do not overwrite newer state.

CSS ellipsis clips only the content; copy and edit controls remain available outside the clipped region. Expansion, custom ellipsis strings and suffixes are unsupported in CSS mode.

Default copy and ellipsis measurement use the rendered slot text and follow updates within slot components without mounting another copy of them. Rich content follows browser text extraction and does not include HTML or current form-control values; provide `copy-text` when exact content is needed.

Editing preserves the original element, `id`, classes and layout styles. The input uses an explicit `aria-label` / `aria-labelledby`, or a localized edit label. After Enter, focus returns to the edit button when the key is released; blur or an application focus change is respected. Each typography component forwards updates for `v-model:editing` and `v-model:edit-text`.

The root Typography component has a `default` slot. `TypographyEmits` and `TypographyContentSlots` are exported from the package root and component entry; `TypographySlots` describes the root slot. `edit-text` controls the editor value while display content comes from the `default` slot; bind both to the same application value when appropriate. The editor is single-line.

`heading` accepts 1–6 and falls back to h1 for invalid values. `copy-delay` accepts finite values from 0 to 2147483647 ms and falls back to 3000 for invalid values. `info` and `tertiary` use their semantic text colors; `default` or an omitted status uses the normal text color.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-typography-blockquote-bg` | `var(--c-color-bg-2)` | `background-color` |
| `--c-typography-blockquote-border-left-color` | `var(--c-color-neutral-6)` | `border-inline-start` |
| `--c-typography-blockquote-border-width` | `var(--c-border-width-2)` | `border-inline-start` |
| `--c-typography-blockquote-padding-left` | `var(--c-spacing-4)` | `padding-inline-start` |
| `--c-typography-code-bg` | `var(--c-color-neutral-2)` | `background-color` |
| `--c-typography-code-border-color` | `var(--c-color-neutral-3)` | `border` |
| `--c-typography-code-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-typography-code-text-color` | `var(--c-color-text-2)` | `color` |
| `--c-typography-edit-border-width` | `var(--c-border-width-1)` | `inset-inline-start`, `margin-bottom`, `margin-inline-end`, `margin-top` |
| `--c-typography-edit-padding-x` | `var(--c-spacing-6)` | `inset-inline-start`, `margin-inline-end` |
| `--c-typography-edit-padding-y` | `var(--c-spacing-2)` | `margin-bottom`, `margin-top` |
| `--c-typography-expand-margin-x` | `var(--c-spacing-2)` | `margin` |
| `--c-typography-expand-text-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-typography-expand-text-color-hover` | `rgb(var(--c-primary-5))` | `color` |
| `--c-typography-font-size-h1` | `var(--c-font-size-display-1)` | `font-size` |
| `--c-typography-font-size-h2` | `var(--c-size-8)` | `font-size` |
| `--c-typography-font-size-h3` | `var(--c-size-7)` | `font-size` |
| `--c-typography-font-size-h4` | `var(--c-font-size-title-3)` | `font-size` |
| `--c-typography-font-size-h5` | `var(--c-font-size-title-2)` | `font-size` |
| `--c-typography-font-size-h6` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-typography-heading-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-typography-heading-margin-bottom` | `0` | `margin-bottom` |
| `--c-typography-heading-margin-top` | `0` | `margin-top` |
| `--c-typography-icon-copy-bg` | `transparent` | `background-color` |
| `--c-typography-icon-copy-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-typography-icon-copy-color` | `var(--c-color-text-2)` | `color` |
| `--c-typography-icon-copy-color-copied` | `var(--c-sys-color-content-success)` | `color` |
| `--c-typography-icon-copy-color-hover` | `var(--c-color-text-2)` | `color` |
| `--c-typography-icon-edit-bg` | `transparent` | `background-color` |
| `--c-typography-icon-edit-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-typography-icon-edit-color` | `var(--c-color-text-2)` | `color` |
| `--c-typography-icon-edit-color-hover` | `var(--c-color-text-2)` | `color` |
| `--c-typography-list-item-margin-left` | `var(--c-spacing-8)` | `margin-inline-start` |
| `--c-typography-operation-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-typography-operation-margin-left` | `var(--c-spacing-1)` | `margin-inline-start` |
| `--c-typography-operation-padding` | `var(--c-spacing-1)` | `padding` |
| `--c-typography-paragraph-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-typography-paragraph-line-height-close` | `1.3` | `line-height` |
| `--c-typography-text-bg-mark` | `rgb(var(--c-yellow-4))` | `background-color` |
| `--c-typography-text-color` | `var(--c-color-text-1)` | `color` |
| `--c-typography-text-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-typography-text-color-error` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-typography-text-color-info` | `var(--c-sys-color-content-info)` | `color` |
| `--c-typography-text-color-primary` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-typography-text-color-secondary` | `var(--c-color-text-2)` | `color` |
| `--c-typography-text-color-success` | `var(--c-sys-color-content-success)` | `color` |
| `--c-typography-text-color-tertiary` | `var(--c-sys-color-content-tertiary)` | `color` |
| `--c-typography-text-color-warning` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-typography-text-font-weight-bold` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-typography-text-margin-code-horizontal` | `var(--c-spacing-1)` | `margin` |
| `--c-typography-text-padding-code-horizontal` | `var(--c-spacing-4)` | `padding` |
| `--c-typography-text-padding-code-vertical` | `var(--c-spacing-1)` | `padding` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-typography-blockquote-border-left-color: var(--c-color-neutral-6);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
