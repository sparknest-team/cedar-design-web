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

### Empty Props

| Prop | Description | Type | Default |
| ------------------ | ---------------------------- | -------------------------------------------------------- | ------- |
| description | Description; falls back to i18n | `string` | - |
| image-url | Custom image URL | `string` | - |
| alt | Image alternative text | `string` | `''` |
| image-size | Image/icon size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number \| string` | `'md'` |
| show-icon | Whether to show the icon | `boolean` | `true` |
| show-description | Whether to show the description | `boolean` | `true` |

### Empty Events

| Event | Description | Arguments |
| ------ | -------- | --------------------- |
| click | Click callback | `(ev: MouseEvent)` |

### Empty Slots

| Slot | Description | Prop |
| ------- | --------- | ---- |
| image | Image/icon | - |
| default | Description content | - |
| extra | Extra actions | - |

## Types

The component exports the following types

```ts
import type { EmptyImageSize, EmptyProps } from '@cedar-design/ui'
```

ConfigProvider's `empty` slot can replace Empty content when no custom content is supplied; it is not a public Empty prop.

Local default, image and extra slots, or nonempty image-url/description, take precedence over the global replacement, including dynamic additions and removals. A global replacement owns the entire Empty content: show-icon, show-description and image-size control only the local template and do not rewrite provider nodes. Bubbling clicks from replacement content emit Empty click once, including multiple roots and nested Empty, with recursion protection.

## CSS Variables

Descriptions are text and must meet text contrast requirements; decorative icons may be weaker. Custom images/slots may have their own colors and are not forcibly recolored by `icon-color`. Desktop/mobile maintain their own dimensions and spacing while keeping variable responsibilities consistent.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-empty-description-color` | `var(--c-sys-color-content-tertiary)` | `color` |
| `--c-empty-description-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-empty-description-line-height` | `var(--c-line-height)` | `line-height` |
| `--c-empty-extra-margin-top` | `var(--c-spacing-5)` | `margin-top` |
| `--c-empty-icon-color` | `var(--c-sys-color-content-decorative)` | `color` |
| `--c-empty-image-margin-bottom` | `var(--c-spacing-2)` | `margin-bottom` |
| `--c-empty-padding` | `var(--c-spacing-5) 0` | `padding` |
| `--c-empty-size-lg` | `var(--c-size-35)` | `font-size`, `height`, `width` |
| `--c-empty-size-md` | `var(--c-size-25)` | `font-size`, `height`, `width` |
| `--c-empty-size-sm` | `var(--c-size-20)` | `font-size`, `height`, `width` |
| `--c-empty-size-xl` | `var(--c-size-45)` | `font-size`, `height`, `width` |
| `--c-empty-size-xs` | `var(--c-size-15)` | `font-size`, `height`, `width` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-empty-description-color: var(--c-sys-color-content-tertiary);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
