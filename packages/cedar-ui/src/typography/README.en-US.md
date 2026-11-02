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

Preview configuration: `status="secondary"`, `status="primary"`, `status="success"`, `status="warning"`.

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

### Common Props

`Typography.Title`, `Typography.Paragraph` and `Typography.Text` share these props.

| Prop | Description | Type | Default |
| --- | --- | --- | :---: |
| status | Semantic text status | `SemanticStatus` | `-` |
| bold | Bold | `boolean` | `false` |
| mark | Mark styling | `boolean \| { color: string }` | `false` |
| underline | Underline styling | `boolean` | `false` |
| delete | Strikethrough styling | `boolean` | `false` |
| code | Code-block styling | `boolean` | `false` |
| disabled | Whether to disable link | `boolean` | `false` |
| editable | Enable editing | `boolean` | `false` |
| editing **(v-model)** | Whether currently editing | `boolean` | `-` |
| default-editing | Default editing state | `boolean` | `false` |
| edit-text **(v-model)** | Edited text | `string` | `-` |
| copyable | Enable copying | `boolean` | `false` |
| copy-text | Text to copy | `string` | `-` |
| copy-delay | Delay in ms before the copy button becomes clickable again after successful copying | `number` | `3000` |
| ellipsis | Automatic truncation; see EllipsisConfig | `boolean \| EllipsisConfig` | `false` |
| edit-tooltip-props | Edit-button Tooltip options | `object` | `-` |
| copy-tooltip-props | Copy-button Tooltip options | `object` | `-` |

### Common Events

| Event | Description | Arguments |
| --- | --- | --- |
| edit-start | Editing starts | `-` |
| change | Edited content changes | `text: string` |
| edit-end | Editing ends | `-` |
| copy | Copy | `text: string` |
| ellipsis | Ellipsis-state change | `isEllipsis: boolean` |
| expand | Expand/collapse event | `expanded: boolean` |

### Common Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| expand-node | Custom expand/collapse buttons | `expanded: boolean` |
| copy-icon | Custom copy-button icon | `copied: boolean` |
| copy-tooltip | Custom copy-button tooltip content | `copied: boolean` |

### `<TypographyTitle>` Props

| Prop | Description | Type | Default |
| --- | --- | --- | :---: |
| heading | Heading level, equivalent to `h1`/`h2`/`h3`/`h4`/`h5`/`h6` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` |

### `<TypographyParagraph>` Props

| Prop | Description | Type | Default |
| --- | --- | --- | :---: |
| blockquote | Block quotation | `boolean` | `false` |
| spacing | Paragraph line height; use the default for long text and `close` for short text | `'default' \| 'close'` | `'default'` |

### EllipsisConfig

| Prop | Description | Type | Default |
| --- | --- | --- | :---: |
| rows | Number of displayed lines before truncation | `number` | `1` |
| expandable | Whether expand/collapse is supported | `boolean` | `false` |
| ellipsisStr | Ellipsis | `string` | `'...'` |
| suffix | Suffix | `string` | `-` |
| showTooltip | Popup options for truncated content | `boolean \| { type: 'tooltip' \| 'popover'; props: Record<string, any> }` | `false` |
| css | Use CSS truncation; currently does not support expansion, custom ellipsis or suffix | `boolean` | `false` |

### Type definitions

The component exports the following types:

```ts
import type {
  TypographyInstance,
  TypographyParagraphInstance,
  TypographyTitleInstance,
  TypographyTextInstance,
  EllipsisConfig,
} from '@cedar-design/ui'
```
