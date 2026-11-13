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


Loading preserves the checked state and exposes disabled and busy semantics on checkable tags. If loading starts while the close control has focus, focus moves to the tag. Independent interactive controls in the content do not toggle the tag.

The close button name defaults to the current locale’s close text and can be overridden with `close-button-aria-label`. The tag root remains single-line; `nowrap` mainly enables the inner truncation wrapper and does not control multiline wrapping.

### Value and default value

Use ordinary `v-model`. `modelValue` is a selectable tag's boolean checked state. `defaultValue` initializes uncontrolled state once; later changes do not reset it. Explicit binding takes precedence, without initialization `update:modelValue`.

### Tag Props

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
| `close-button-aria-label` | Accessible name of the close button; defaults to the current locale | `string` | `—` |
| checkable | Whether the tag is selectable | `boolean` | `false` |
| model-value **(v-model)** | Whether a selectable tag is checked | `boolean` | - |
| default-value | Default checked state of a selectable tag | `boolean` | `true` |
| nowrap | Whether to enable the content truncation wrapper; the root remains single-line | `boolean` | `false` |
| round | Whether to use a pill shape | `boolean` | `false` |

### Tag Events

| Event | Description | Arguments |
| ------ | -------------------------------------- | --------------------------------------------- |
| close | Triggered when the Close button is clicked and can only be used when the Close button is displayed | `(event: MouseEvent) => void` |
| check | Emitted on user selection, only in selectable mode | `(check: boolean, event: MouseEvent) => void` |
| update:show | Visibility changed | `(show: boolean) => void` |
| update:model-value | Checked-state change | `(checked: boolean) => void` |

### Tag Slots

| Slot | Description | Prop |
| ---------- | -------------- | ---- |
| default | Tag content | - |
| icon | Icon | - |
| close-icon | Close-button icon | - |

## Types

The component exports the following types

```ts
import type { TagProps, TagSlots, TagEmits } from '@cedar-design/ui-vue'
```

## Usage notes



The application updates controlled show / checked values. Hiding retains the fade-out effect; class / style apply to the actual tag. CSS variables customize mobile touch sizing.

### Color override boundaries

Preset outline stays transparent; loading does not trigger preset fill hover. Dark backgrounds consume bg/bg-hover with instance overrides. Preset icon-color is separate from text-color. Unchecked presets remain neutral, while an explicit color still applies. Preset/custom colors do not guarantee contrast on arbitrary backgrounds.

## CSS Variables

Status text and outline borders use the corresponding theme semantic colors with light colored fills. Unselected tags remain neutral; selected status colors take precedence over hover. The neutral background switches between fill-2 and fill-3. color takes precedence over status. Keep text readable on custom backgrounds and set text-color when needed.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-tag-bg-not-checked-hover` | `var(--c-sys-color-state-hover)` | `background-color` |
| `--c-tag-blue-bg` | `rgb(var(--c-blue-1))`<br>`rgba(var(--c-blue-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-blue-bg-hover` | `rgb(var(--c-blue-2))`<br>`rgba(var(--c-blue-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-blue-border-color` | `transparent` | `border` |
| `--c-tag-blue-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-blue-icon-color` | `rgb(var(--c-blue-6))` | `color` |
| `--c-tag-blue-text-color` | `rgb(var(--c-blue-6))` | `border-color`, `color` |
| `--c-tag-border-radius` | `var(--c-sys-radius-sm)` | `border-radius` |
| `--c-tag-border-type` | `solid` | `border` |
| `--c-tag-border-width` | `1px` | `border`, `line-height` |
| `--c-tag-brand-bg` | `rgb(var(--c-brand-1))`<br>`rgba(var(--c-brand-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-brand-bg-hover` | `rgb(var(--c-brand-2))`<br>`rgba(var(--c-brand-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-brand-border-color` | `transparent` | `border` |
| `--c-tag-brand-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-brand-icon-color` | `rgb(var(--c-brand-6))` | `color` |
| `--c-tag-brand-text-color` | `rgb(var(--c-brand-6))` | `border-color`, `color` |
| `--c-tag-close-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-tag-close-margin-left` | `var(--c-spacing-2)` | `margin-left`, `margin-right` |
| `--c-tag-custom-text-color` | `var(--c-sys-color-content-on-dark)` | `color` |
| `--c-tag-cyan-bg` | `rgb(var(--c-cyan-1))`<br>`rgba(var(--c-cyan-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-cyan-bg-hover` | `rgb(var(--c-cyan-2))`<br>`rgba(var(--c-cyan-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-cyan-border-color` | `transparent` | `border` |
| `--c-tag-cyan-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-cyan-icon-color` | `rgb(var(--c-cyan-6))` | `color` |
| `--c-tag-cyan-text-color` | `rgb(var(--c-cyan-6))` | `border-color`, `color` |
| `--c-tag-default-bg` | `var(--c-sys-color-state-hover)` | `background-color` |
| `--c-tag-default-bg-hover` | `var(--c-color-fill-3)` | `background-color` |
| `--c-tag-default-border-color` | `transparent` | `border-color` |
| `--c-tag-default-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-default-icon-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-tag-default-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-tag-fade-duration` | `var(--c-sys-motion-duration-fast)` | `transition` |
| `--c-tag-gold-bg` | `rgb(var(--c-gold-1))`<br>`rgba(var(--c-gold-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-gold-bg-hover` | `rgb(var(--c-gold-2))`<br>`rgba(var(--c-gold-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-gold-border-color` | `transparent` | `border` |
| `--c-tag-gold-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-gold-icon-color` | `rgb(var(--c-gold-6))` | `color` |
| `--c-tag-gold-text-color` | `rgb(var(--c-gold-6))` | `border-color`, `color` |
| `--c-tag-gray-bg` | `rgb(var(--c-gray-2))`<br>`rgba(var(--c-gray-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-gray-bg-hover` | `rgb(var(--c-gray-3))`<br>`rgba(var(--c-gray-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-gray-border-color` | `transparent` | `border` |
| `--c-tag-gray-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-gray-icon-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-tag-gray-text-color` | `var(--c-sys-color-content-secondary)` | `border-color`, `color` |
| `--c-tag-green-bg` | `rgb(var(--c-green-1))`<br>`rgba(var(--c-green-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-green-bg-hover` | `rgb(var(--c-green-2))`<br>`rgba(var(--c-green-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-green-border-color` | `transparent` | `border` |
| `--c-tag-green-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-green-icon-color` | `rgb(var(--c-green-6))` | `color` |
| `--c-tag-green-text-color` | `rgb(var(--c-green-6))` | `border-color`, `color` |
| `--c-tag-icon-margin-right` | `var(--c-spacing-2)` | `margin-left`, `margin-right` |
| `--c-tag-lime-bg` | `rgb(var(--c-lime-1))`<br>`rgba(var(--c-lime-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-lime-bg-hover` | `rgb(var(--c-lime-2))`<br>`rgba(var(--c-lime-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-lime-border-color` | `transparent` | `border` |
| `--c-tag-lime-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-lime-icon-color` | `rgb(var(--c-lime-6))` | `color` |
| `--c-tag-lime-text-color` | `rgb(var(--c-lime-6))` | `border-color`, `color` |
| `--c-tag-magenta-bg` | `rgb(var(--c-magenta-1))`<br>`rgba(var(--c-magenta-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-magenta-bg-hover` | `rgb(var(--c-magenta-2))`<br>`rgba(var(--c-magenta-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-magenta-border-color` | `transparent` | `border` |
| `--c-tag-magenta-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-magenta-icon-color` | `rgb(var(--c-magenta-6))` | `color` |
| `--c-tag-magenta-text-color` | `rgb(var(--c-magenta-6))` | `border-color`, `color` |
| `--c-tag-orange-bg` | `rgb(var(--c-orange-1))`<br>`rgba(var(--c-orange-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-orange-bg-hover` | `rgb(var(--c-orange-2))`<br>`rgba(var(--c-orange-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-orange-border-color` | `transparent` | `border` |
| `--c-tag-orange-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-orange-icon-color` | `rgb(var(--c-orange-6))` | `color` |
| `--c-tag-orange-text-color` | `rgb(var(--c-orange-6))` | `border-color`, `color` |
| `--c-tag-orangered-bg` | `rgb(var(--c-orangered-1))`<br>`rgba(var(--c-orangered-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-orangered-bg-hover` | `rgb(var(--c-orangered-2))`<br>`rgba(var(--c-orangered-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-orangered-border-color` | `transparent` | `border` |
| `--c-tag-orangered-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-orangered-icon-color` | `rgb(var(--c-orangered-6))` | `color` |
| `--c-tag-orangered-text-color` | `rgb(var(--c-orangered-6))` | `border-color`, `color` |
| `--c-tag-padding-horizontal` | `var(--c-spacing-4)` | `padding` |
| `--c-tag-padding-vertical` | `0` | `line-height`, `padding` |
| `--c-tag-pinkpurple-bg` | `rgb(var(--c-pinkpurple-1))`<br>`rgba(var(--c-pinkpurple-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-pinkpurple-bg-hover` | `rgb(var(--c-pinkpurple-2))`<br>`rgba(var(--c-pinkpurple-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-pinkpurple-border-color` | `transparent` | `border` |
| `--c-tag-pinkpurple-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-pinkpurple-icon-color` | `rgb(var(--c-pinkpurple-6))` | `color` |
| `--c-tag-pinkpurple-text-color` | `rgb(var(--c-pinkpurple-6))` | `border-color`, `color` |
| `--c-tag-purple-bg` | `rgb(var(--c-purple-1))`<br>`rgba(var(--c-purple-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-purple-bg-hover` | `rgb(var(--c-purple-2))`<br>`rgba(var(--c-purple-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-purple-border-color` | `transparent` | `border` |
| `--c-tag-purple-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-purple-icon-color` | `rgb(var(--c-purple-6))` | `color` |
| `--c-tag-purple-text-color` | `rgb(var(--c-purple-6))` | `border-color`, `color` |
| `--c-tag-red-bg` | `rgb(var(--c-red-1))`<br>`rgba(var(--c-red-6), 0.2)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-red-bg-hover` | `rgb(var(--c-red-2))`<br>`rgba(var(--c-red-6), 0.35)` (`:root[cedar-theme="dark"]`) | `background-color` |
| `--c-tag-red-border-color` | `transparent` | `border` |
| `--c-tag-red-border-color-hover` | `transparent` | `border-color` |
| `--c-tag-red-icon-color` | `rgb(var(--c-red-6))` | `color` |
| `--c-tag-red-text-color` | `rgb(var(--c-red-6))` | `border-color`, `color` |
| `--c-tag-round-radius` | `100px` | `border-radius` |
| `--c-tag-size-lg` | `var(--c-size-7)` | `height`, `line-height` |
| `--c-tag-size-lg-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-tag-size-md` | `var(--c-size-6)` | `height`, `line-height` |
| `--c-tag-size-md-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-tag-size-sm` | `var(--c-size-5)` | `height`, `line-height` |
| `--c-tag-size-sm-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-tag-size-xl` | `var(--c-size-8)` | `height`, `line-height` |
| `--c-tag-size-xl-font-size` | `var(--c-sys-font-size-md)` | `font-size` |
| `--c-tag-size-xs` | `var(--c-size-4)` | `height`, `line-height` |
| `--c-tag-size-xs-font-size` | `var(--c-sys-font-size-xs)` | `font-size` |
| `--c-tag-status-danger-bg-color` | `rgb(var(--c-danger-1))` | `background-color` |
| `--c-tag-status-danger-text-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-tag-status-info-bg-color` | `rgb(var(--c-blue-1))` | `background-color` |
| `--c-tag-status-info-text-color` | `var(--c-sys-color-content-info)` | `color` |
| `--c-tag-status-primary-bg-color` | `rgb(var(--c-primary-1))` | `background-color` |
| `--c-tag-status-primary-text-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-tag-status-secondary-bg-color` | `rgb(var(--c-gray-2))` | `background-color` |
| `--c-tag-status-secondary-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-tag-status-success-bg-color` | `rgb(var(--c-success-1))` | `background-color` |
| `--c-tag-status-success-text-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-tag-status-tertiary-bg-color` | `rgb(var(--c-gray-1))` | `background-color` |
| `--c-tag-status-tertiary-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-tag-status-warning-bg-color` | `rgb(var(--c-warning-1))` | `background-color` |
| `--c-tag-status-warning-text-color` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-tag-text-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-tag-variant-outline-default-border-color` | `var(--c-sys-color-border-default)` | `border` |
| `--c-tag-variant-outline-default-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-tag-variant-outline-status-danger-color` | `var(--c-sys-color-content-danger)` | `border`, `color` |
| `--c-tag-variant-outline-status-info-color` | `var(--c-sys-color-content-info)` | `border`, `color` |
| `--c-tag-variant-outline-status-primary-color` | `var(--c-sys-color-content-brand)` | `border`, `color` |
| `--c-tag-variant-outline-status-secondary-color` | `var(--c-sys-color-content-secondary)` | `border`, `color` |
| `--c-tag-variant-outline-status-success-color` | `var(--c-sys-color-content-success)` | `border`, `color` |
| `--c-tag-variant-outline-status-tertiary-color` | `var(--c-sys-color-content-secondary)` | `border`, `color` |
| `--c-tag-variant-outline-status-warning-color` | `var(--c-sys-color-content-warning)` | `border`, `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-tag-blue-border-color: transparent;
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->

### Motion

Built-in motion follows `prefers-reduced-motion: reduce`. Reduced motion does not prevent loading-state or close-event updates.
