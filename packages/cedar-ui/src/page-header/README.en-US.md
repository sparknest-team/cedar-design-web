---
lang: en-US
permalink: /en/components/page-header/
---

# Page Header

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

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

Inherits the nearest `dir="ltr|rtl"` and supports runtime and nested overrides. The back action sits at reading start and its default icon points right in RTL. Titles and extras follow reading order. Custom back slots are not automatically mirrored.

## API

### PageHeader Props

| Prop | Description | Type | Default |
| -------- | ---------------- | --------- | ------- |
| show-back | Whether to show back | `boolean` | `false` |
| title | Main title | `string` | `-` |
| subtitle | Subtitle | `string` | `-` |
| extra | Extra content on the right | `string` | `-` |

### PageHeader Events

| Event | Description | Arguments |
| ------ | ------------------ | -------------- |
| back | Emitted when the back button is clicked | event: `Event` |

### PageHeader Slots

| Slot | Description | Arguments |
| -------- | -------------- | ---- |
| header | Content above the page header | - |
| back | Custom back icon | - |
| avatar | Avatar | - |
| title | Main title | - |
| subtitle | Subtitle | - |
| extra | Additional right-side content | - |
| default | Main page-header content | - |
| footer | Footer content | - |

## Type definitions

```ts
import type { PageHeaderProps } from '@cedar-design/ui'
```

## Shared implementation and platform boundaries

Each platform maintains a complete local implementation. They do not import a common core or share component instances or reactive state. Changes must update both implementations. Component bodies, props, key styles and paired tests have read-only source consistency checks; theme tokens and installation entries remain local to each library.

The back control is a native button with keyboard activation and back(MouseEvent). Cedar classes change from c-page-header-xxx to c-page-header__xxx. Icons remain locally supplied.

### Back-interaction variables

`--c-page-header-back-hover-size` (30px) sets the feedback-circle size without moving title layout. `--c-page-header-back-hover-bg` (`var(--c-sys-color-state-hover)`) sets its background. Hover applies only to hover-capable fine pointers; all input modes retain keyboard focus-visible feedback.
