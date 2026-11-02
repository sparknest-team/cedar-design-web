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

### `<result>` Props

| Parameter | Description | Type | Default |
| -------- | ---------------- | -------------------------------------------------------------------------------- | :------: |
| status | Result-page status | `'info' \| 'success' \| 'warning' \| 'danger' \| 'question' \| 'empty' \| '403' \| '404' \| '500'` | `'info'` |
| title | Title content | `string` | `-` |
| subtitle | Subtitle content | `string` | `-` |
| image-size | Status graphic size; numbers are px | `string \| number` | `-` |
| animation | Whether status-graphic animation is enabled | `boolean` | `true` |

### `<result>` Slots

| Slot | Description | Arguments | Version |
| -------- | :------: | ---- | :---- |
| icon | Custom status graphic | `{ size?: string }` |  |
| title | Title | - |  |
| subtitle | Subtitle | - |  |
| extra | Actions | - | 2.8.0 |
| default | Default slot | - | 2.8.0 |

### Type definitions

The component exports the following types

```ts
import type { ResultInstance } from '@cedar-design/ui'
```
