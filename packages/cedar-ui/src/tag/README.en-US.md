---
lang: en-US
permalink: /en/components/tag/
---

# Tag

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `color`: Overrides the color.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Color

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `color` | Custom background (border color when outline) | Color |
| `closable` | Whether the tag can be closed | Color |
<!-- demo-config-notes:end -->


- `color`: Overrides the color.

<demo src="./__demos__/color.vue"></demo>

### Appearance configuration comparison

Choose an axis to compare its available values with the same content and model. Other settings remain unchanged while comparing.

<demo src="./__demos__/appearance-lab.vue"></demo>

## Content and presentation

### Checkable

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `color` | Custom background (border color when outline) | Checkable, Icon |
| `checkable` | Whether the tag is selectable | Checkable |
| `status` | Tag status `color`; mutually exclusive with `color`, which takes precedence | Checkable |
| `default-value` | Default checked state of a selectable tag | Checkable |
| `variant` | Tag variant, aligned with Button | Checkable |
| `loading` | Whether the tag is loading | Checkable |
<!-- demo-config-notes:end -->


- `status`: Selects the semantic state.
- `variant`: Selects the visual variant.
- `color`: Overrides the color.

<demo src="./__demos__/checkable.vue"></demo>

### Icon

- `color`: Overrides the color.

<demo src="./__demos__/icon.vue"></demo>

## Interaction and control

### Closable

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `closable` | Whether the tag can be closed | Closable, Dynamic Tag |
| `loading` | Whether the tag is loading | Loading |
<!-- demo-config-notes:end -->


Preview configuration: `closable`.

<demo src="./__demos__/closable.vue"></demo>

### Dynamic Tag

Preview configuration: `:closable="index !== 0"`, `size="xs"`.

<demo src="./__demos__/dynamic-tag.vue"></demo>

### Loading

Preview configuration: `loading`.

<demo src="./__demos__/loading.vue"></demo>

## API

### Value and default value

Use ordinary `v-model`. `modelValue` is a selectable tag's boolean checked state. `defaultValue` initializes uncontrolled state once; later changes do not reset it. Explicit binding takes precedence, without initialization `update:modelValue`.

### `<Tag>` Props

| Prop | Description | Type | Default |
| --------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| color | Custom background (border color when outline) | `string` | - |
| text-color | Custom text color | `string` | - |
| status | Tag status `color`; mutually exclusive with `color`, which takes precedence | `'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| variant | Tag variant, aligned with Button | `'default' \| 'outline'` | `'default'` |
| size | Tag size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| show **(v-model)** | Whether the tag is visible | `boolean` | - |
| default-show | Default tag visibility | `boolean` | `true` |
| loading | Whether the tag is loading | `boolean` | `false` |
| closable | Whether the tag can be closed | `boolean` | `false` |
| checkable | Whether the tag is selectable | `boolean` | `false` |
| model-value **(v-model)** | Whether a selectable tag is checked | `boolean` | - |
| default-value | Default checked state of a selectable tag | `boolean` | `true` |
| nowrap | Whether content is nowrap with ellipsis | `boolean` | `false` |
| round | Whether to use a pill shape | `boolean` | `false` |

### `<Tag>` Events

| Event | Description | Arguments |
| ------ | -------------------------------------- | --------------------------------------------- |
| close | Triggered when the Close button is clicked and can only be used when the Close button is displayed | `(event: MouseEvent) => void` |
| check | Emitted on user selection, only in selectable mode | `(check: boolean, event: MouseEvent) => void` |
| update:show | Visibility changed | `(show: boolean) => void` |
| update:model-value | Checked-state change | `(checked: boolean) => void` |

### `<Tag>` Slots

| Slot | Description | Arguments |
| ---------- | -------------- | ---- |
| default | Tag content | - |
| icon | Icon | - |
| close-icon | Close-button icon | - |

### Type definitions

The component exports the following types

```ts
import type { TagProps } from '@cedar-design/ui'
```

## Shared implementation and platform boundaries

Each platform maintains a complete local implementation. They do not import a common core or share component instances or reactive state. Changes must update both implementations. Component bodies, props, key styles and paired tests have read-only source consistency checks; theme tokens and installation entries remain local to each library.

Both retain independent show/checked state, with controlled values updated by callers. Fade-out remains; class/style fall through explicitly to the actual tag. Size configuration, RTL context and icons are locally adapted. Mobile touch dimensions remain in tokens.

### Complete variable defaults and boundaries

Status text and outline borders use readable system content colors; colored fills use palette level 1. Unchecked stays neutral; checked status colors override generic hover. Neutral fills use fill-2 → fill-3. color overrides status; preset colors are outside this contrast guarantee. Callers must check custom backgrounds and set text-color if needed. Platform dimensions remain distinct. All public declarations are listed; 15 unused preset-icon hover-background/size variables, custom-icon-bg-hover and old InputTag references are removed without aliases.

| Variable | Default |
| --- | --- |
| `--c-tag-status-primary-bg-color` | `rgb(var(--c-primary-1))` |
| `--c-tag-status-primary-text-color` | `var(--c-sys-color-content-brand)` |
| `--c-tag-status-secondary-bg-color` | `rgb(var(--c-gray-2))` |
| `--c-tag-status-secondary-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tag-status-tertiary-bg-color` | `rgb(var(--c-gray-1))` |
| `--c-tag-status-tertiary-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tag-status-info-bg-color` | `rgb(var(--c-blue-1))` |
| `--c-tag-status-info-text-color` | `var(--c-sys-color-content-info)` |
| `--c-tag-status-success-bg-color` | `rgb(var(--c-success-1))` |
| `--c-tag-status-success-text-color` | `var(--c-sys-color-content-success)` |
| `--c-tag-status-warning-bg-color` | `rgb(var(--c-warning-1))` |
| `--c-tag-status-warning-text-color` | `var(--c-sys-color-content-warning)` |
| `--c-tag-status-danger-bg-color` | `rgb(var(--c-danger-1))` |
| `--c-tag-status-danger-text-color` | `var(--c-sys-color-content-danger)` |
| `--c-tag-variant-outline-status-primary-color` | `var(--c-sys-color-content-brand)` |
| `--c-tag-variant-outline-status-secondary-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tag-variant-outline-status-tertiary-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tag-variant-outline-status-info-color` | `var(--c-sys-color-content-info)` |
| `--c-tag-variant-outline-status-success-color` | `var(--c-sys-color-content-success)` |
| `--c-tag-variant-outline-status-warning-color` | `var(--c-sys-color-content-warning)` |
| `--c-tag-variant-outline-status-danger-color` | `var(--c-sys-color-content-danger)` |
| `--c-tag-variant-outline-default-color` | `var(--c-sys-color-content-primary)` |
| `--c-tag-variant-outline-default-border-color` | `var(--c-sys-color-border-default)` |
| `--c-tag-border-width` | `1px` |
| `--c-tag-border-type` | `solid` |
| `--c-tag-padding-horizontal` | `var(--c-spacing-4)` |
| `--c-tag-padding-vertical` | `0` |
| `--c-tag-icon-margin-right` | `var(--c-spacing-2)` |
| `--c-tag-text-font-weight` | `var(--c-font-weight-500)` |
| `--c-tag-border-radius` | `var(--c-sys-radius-sm)` |
| `--c-tag-round-radius` | `100px` |
| `--c-tag-size-xs` | `var(--c-size-4)` |
| `--c-tag-size-sm` | `var(--c-size-5)` |
| `--c-tag-size-md` | `var(--c-size-6)` |
| `--c-tag-size-lg` | `var(--c-size-7)` |
| `--c-tag-size-xl` | `var(--c-size-8)` |
| `--c-tag-size-xs-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-tag-size-sm-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-tag-size-md-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-tag-size-lg-font-size` | `var(--c-sys-font-size-md)` |
| `--c-tag-size-xl-font-size` | `var(--c-sys-font-size-md)` |
| `--c-tag-bg-not-checked-hover` | `var(--c-sys-color-state-hover)` |
| `--c-tag-custom-text-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-tag-default-bg` | `var(--c-sys-color-state-hover)` |
| `--c-tag-default-bg-hover` | `var(--c-color-fill-3)` |
| `--c-tag-default-icon-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tag-default-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-tag-default-border-color` | `transparent` |
| `--c-tag-default-border-color-hover` | `transparent` |
| `--c-tag-red-bg` | `rgb(var(--c-red-1))` |
| `--c-tag-red-bg-hover` | `rgb(var(--c-red-2))` |
| `--c-tag-red-border-color` | `transparent` |
| `--c-tag-red-border-color-hover` | `transparent` |
| `--c-tag-red-icon-color` | `rgb(var(--c-red-9))` |
| `--c-tag-red-text-color` | `rgb(var(--c-red-9))` |
| `--c-tag-orangered-bg` | `rgb(var(--c-orangered-1))` |
| `--c-tag-orangered-bg-hover` | `rgb(var(--c-orangered-2))` |
| `--c-tag-orangered-border-color` | `transparent` |
| `--c-tag-orangered-border-color-hover` | `transparent` |
| `--c-tag-orangered-icon-color` | `rgb(var(--c-orangered-9))` |
| `--c-tag-orangered-text-color` | `rgb(var(--c-orangered-9))` |
| `--c-tag-orange-bg` | `rgb(var(--c-orange-1))` |
| `--c-tag-orange-bg-hover` | `rgb(var(--c-orange-2))` |
| `--c-tag-orange-border-color` | `transparent` |
| `--c-tag-orange-border-color-hover` | `transparent` |
| `--c-tag-orange-icon-color` | `rgb(var(--c-orange-9))` |
| `--c-tag-orange-text-color` | `rgb(var(--c-orange-9))` |
| `--c-tag-gold-bg` | `rgb(var(--c-gold-1))` |
| `--c-tag-gold-bg-hover` | `rgb(var(--c-gold-2))` |
| `--c-tag-gold-border-color` | `transparent` |
| `--c-tag-gold-border-color-hover` | `transparent` |
| `--c-tag-gold-icon-color` | `rgb(var(--c-gold-9))` |
| `--c-tag-gold-text-color` | `rgb(var(--c-gold-9))` |
| `--c-tag-lime-bg` | `rgb(var(--c-lime-1))` |
| `--c-tag-lime-bg-hover` | `rgb(var(--c-lime-2))` |
| `--c-tag-lime-border-color` | `transparent` |
| `--c-tag-lime-border-color-hover` | `transparent` |
| `--c-tag-lime-icon-color` | `rgb(var(--c-lime-9))` |
| `--c-tag-lime-text-color` | `rgb(var(--c-lime-9))` |
| `--c-tag-green-bg` | `rgb(var(--c-green-1))` |
| `--c-tag-green-bg-hover` | `rgb(var(--c-green-2))` |
| `--c-tag-green-border-color` | `transparent` |
| `--c-tag-green-border-color-hover` | `transparent` |
| `--c-tag-green-icon-color` | `rgb(var(--c-green-9))` |
| `--c-tag-green-text-color` | `rgb(var(--c-green-9))` |
| `--c-tag-cyan-bg` | `rgb(var(--c-cyan-1))` |
| `--c-tag-cyan-bg-hover` | `rgb(var(--c-cyan-2))` |
| `--c-tag-cyan-border-color` | `transparent` |
| `--c-tag-cyan-border-color-hover` | `transparent` |
| `--c-tag-cyan-icon-color` | `rgb(var(--c-cyan-9))` |
| `--c-tag-cyan-text-color` | `rgb(var(--c-cyan-9))` |
| `--c-tag-blue-bg` | `rgb(var(--c-blue-1))` |
| `--c-tag-blue-bg-hover` | `rgb(var(--c-blue-2))` |
| `--c-tag-blue-border-color` | `transparent` |
| `--c-tag-blue-border-color-hover` | `transparent` |
| `--c-tag-blue-icon-color` | `rgb(var(--c-blue-9))` |
| `--c-tag-blue-text-color` | `rgb(var(--c-blue-9))` |
| `--c-tag-brand-bg` | `rgb(var(--c-brand-1))` |
| `--c-tag-brand-bg-hover` | `rgb(var(--c-brand-2))` |
| `--c-tag-brand-border-color` | `transparent` |
| `--c-tag-brand-border-color-hover` | `transparent` |
| `--c-tag-brand-icon-color` | `rgb(var(--c-brand-9))` |
| `--c-tag-brand-text-color` | `rgb(var(--c-brand-9))` |
| `--c-tag-purple-bg` | `rgb(var(--c-purple-1))` |
| `--c-tag-purple-bg-hover` | `rgb(var(--c-purple-2))` |
| `--c-tag-purple-border-color` | `transparent` |
| `--c-tag-purple-border-color-hover` | `transparent` |
| `--c-tag-purple-icon-color` | `rgb(var(--c-purple-9))` |
| `--c-tag-purple-text-color` | `rgb(var(--c-purple-9))` |
| `--c-tag-pinkpurple-bg` | `rgb(var(--c-pinkpurple-1))` |
| `--c-tag-pinkpurple-bg-hover` | `rgb(var(--c-pinkpurple-2))` |
| `--c-tag-pinkpurple-border-color` | `transparent` |
| `--c-tag-pinkpurple-border-color-hover` | `transparent` |
| `--c-tag-pinkpurple-icon-color` | `rgb(var(--c-pinkpurple-9))` |
| `--c-tag-pinkpurple-text-color` | `rgb(var(--c-pinkpurple-9))` |
| `--c-tag-magenta-bg` | `rgb(var(--c-magenta-1))` |
| `--c-tag-magenta-bg-hover` | `rgb(var(--c-magenta-2))` |
| `--c-tag-magenta-border-color` | `transparent` |
| `--c-tag-magenta-border-color-hover` | `transparent` |
| `--c-tag-magenta-icon-color` | `rgb(var(--c-magenta-9))` |
| `--c-tag-magenta-text-color` | `rgb(var(--c-magenta-9))` |
| `--c-tag-gray-bg` | `rgb(var(--c-gray-2))` |
| `--c-tag-gray-bg-hover` | `rgb(var(--c-gray-3))` |
| `--c-tag-gray-border-color` | `transparent` |
| `--c-tag-gray-border-color-hover` | `transparent` |
| `--c-tag-gray-icon-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tag-gray-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tag-close-margin-left` | `var(--c-spacing-2)` |
| `--c-tag-close-font-size` | `var(--c-sys-font-size-xs)` |

### Color override boundaries

Preset outline stays transparent; loading does not trigger preset fill hover. Dark backgrounds consume bg/bg-hover with instance overrides. Preset icon-color is separate from text-color. Unchecked presets remain neutral, while an explicit color still applies. Preset/custom colors do not guarantee contrast on arbitrary backgrounds.

### Motion variables

Built-in motion follows `prefers-reduced-motion: reduce`. Reduced motion does not prevent loading-state or close-event updates.

| Token | Default |
| --- | --- |
| `--c-tag-fade-duration` | `var(--c-sys-motion-duration-fast)` |
