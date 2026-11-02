---
lang: en-US
permalink: /en/components/empty/
---

# Empty

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `description="暂无数据"`.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Size

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `image-size` | Image/icon size | Size |
| `description` | Description; falls back to i18n | Size |
<!-- demo-config-notes:end -->


Preview configuration: `:image-size="size"`, `:description="image-size: ${size}"`.

<demo src="./__demos__/size.vue"></demo>

## Content and presentation

### Empty-state image and actions

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `description` | Description; falls back to i18n | Empty-state image and actions, Show |
| `image-url` | Custom image URL | Empty-state image and actions |
| `alt` | Image alternative text | Empty-state image and actions |
| `show-icon` | Whether to show the icon | Show |
| `show-description` | Whether to show the description | Show |
<!-- demo-config-notes:end -->


Compare custom artwork and extra actions to distinguish content replacement from supplemental controls.

<demo src="./__demos__/content-comparison.vue"></demo>

### Show

Preview configuration: `data-demo-empty`, `description="Dynamic empty state"`, `:show-icon="showIcon"`, `:show-description="showDescription"`.

<demo src="./__demos__/show.vue"></demo>

## API

### `<Empty>` Props

| Prop | Description | Type | Default |
| ------------------ | ---------------------------- | -------------------------------------------------------- | ------- |
| description | Description; falls back to i18n | `string` | - |
| image-url | Custom image URL | `string` | - |
| alt | Image alternative text | `string` | `''` |
| image-size | Image/icon size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number \| string` | `'md'` |
| show-icon | Whether to show the icon | `boolean` | `true` |
| show-description | Whether to show the description | `boolean` | `true` |

### `<Empty>` Events

| Event | Description | Arguments |
| ------ | -------- | --------------------- |
| click | Click callback | `(ev: MouseEvent)` |

### `<Empty>` Slots

| Slot | Description | Arguments |
| ------- | --------- | ---- |
| image | Image/icon | - |
| default | Description content | - |
| extra | Extra actions | - |

### Type definitions

The component exports the following types

```ts
import type { EmptyImageSize, EmptyProps } from '@cedar-design/ui'
```

ConfigProvider's `empty` slot can replace Empty content when no custom content is supplied; it is not a public Empty prop.

### Style variables

| Variable | Default | Purpose |
| --- | --- | --- |
| `--c-empty-description-color` | `var(--c-sys-color-content-tertiary)` | Low-emphasis empty-state description |
| `--c-empty-icon-color` | `var(--c-sys-color-content-decorative)` | Decorative nontext icon; not for text users need to read |
| `--c-empty-padding` | `var(--c-spacing-5) 0` | Container spacing |
| `--c-empty-image-margin-bottom` | `var(--c-spacing-2)` | Icon-to-description gap |
| `--c-empty-description-font-size` | `var(--c-font-size-body-3)` | Description font size |
| `--c-empty-description-line-height` | `var(--c-line-height)` | Description line height |
| `--c-empty-extra-margin-top` | `var(--c-spacing-5)` | Gap above additional actions |
| `--c-empty-size-xs/sm/md/lg/xl` | `var(--c-size-15/20/25/35/45)` | Default icon/image size presets |

Descriptions are text and must meet text contrast requirements; decorative icons may be weaker. Custom images/slots may have their own colors and are not forcibly recolored by `icon-color`. Desktop/mobile maintain their own dimensions and spacing while keeping variable responsibilities consistent.
