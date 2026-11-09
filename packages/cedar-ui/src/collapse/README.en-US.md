---
lang: en-US
permalink: /en/components/collapse/
---

# Collapse

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `:default-value="['1', 2]"`, `title="Beijing Toutiao Technology Co., Ltd."`, `name="1"`, `:name="2"`.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Disabled

Preview configuration: `:default-value="[1]"`, `title="Beijing Toutiao Technology Co., Ltd."`, `:name="1"`, `:disabled="disabled"`.

<demo src="./__demos__/disabled.vue"></demo>

## Layout and arrangement

### Nested

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `default-value` | Uncontrolled initial expanded names | Nested, Icon Position |
| `destroy-on-hide` | Destroy content when hidden | Nested |
| `offset` | Gap between expanded panels | Offset |
| `expand-icon-position` | Expand-icon position within the header: left or right, default left. Does not control content expansion direction | Icon Position |
| `show-expand-icon` | Whether to show expansion icons; child items decide when omitted | Icon Position |
<!-- demo-config-notes:end -->


Preview configuration: `:default-value="['1', 2]"`, `destroy-on-hide`, `title="Beijing Toutiao Technology Co., Ltd."`, `name="1"`.

<demo src="./__demos__/nested.vue"></demo>

### Offset

Preview configuration: `:offset="offset"`, `title="Beijing Toutiao Technology Co., Ltd."`, `name="1"`, `name="2"`.

<demo src="./__demos__/offset.vue"></demo>

### Icon Position

Preview configuration: `:default-value="['1']"`, `:expand-icon-position="position"`, `:show-expand-icon="!hideIcon"`, `title="Beijing Toutiao Technology Co., Ltd."`.

<demo src="./__demos__/icon-position.vue"></demo>

## Content and presentation

### Accordion

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `default-value` | Uncontrolled initial expanded names | Accordion, Borders and dividers, Expand Icon |
| `accordion` | Accordion mode; at most one open panel | Accordion |
| `bordered` | Whether to show border | Borders and dividers |
| `divider` | Show dividers | Borders and dividers |
| `destroy-on-hide` | Destroy content when hidden | Destroy |
<!-- demo-config-notes:end -->


Preview configuration: `:default-value="[1]"`, `accordion`, `title="Beijing Toutiao Technology Co., Ltd."`, `name="1"`.

<demo src="./__demos__/accordion.vue"></demo>

### Borders and dividers

Compare outer borders and separators between panels, including their appearance while expanded.

<demo src="./__demos__/border-comparison.vue"></demo>

### Extra

Preview configuration: `title="Beijing Toutiao Technology Co., Ltd."`, `name="1"`, `:name="2"`, `name="3"`.

<demo src="./__demos__/extra.vue"></demo>

### Expand Icon

Preview configuration: `:default-value="['1', 2]"`, `title="Beijing Toutiao Technology Co., Ltd."`, `name="1"`, `:name="2"`.

<demo src="./__demos__/expand-icon.vue"></demo>

### Destroy

Preview configuration: `:default-value="['1', 2]"`, `destroy-on-hide`, `title="Beijing Toutiao Technology Co., Ltd."`, `name="1"`.

<demo src="./__demos__/destroy.vue"></demo>

## Customization and slots

### Custom

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `default-value` | Uncontrolled initial expanded names | Custom |
| `bordered` | Whether to show border | Custom |
<!-- demo-config-notes:end -->


Preview configuration: `:default-value="['1', 2]"`, `:bordered="false"`, `title="Beijing Toutiao Technology Co., Ltd."`, `name="1"`.

<demo src="./__demos__/custom.vue"></demo>

## Interaction and control

### Toggle All

Preview configuration: `title="Panel 1"`, `name="1"`, `title="Panel 2"`, `name="2"`.

<demo src="./__demos__/toggle-all.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Header and expanded content inherit reading direction; changing direction preserves expansion. expand-icon-position left/right remain physical sides. Custom expansion graphics are not mirrored automatically.

## API

The main value uses ordinary `v-model`: `modelValue` is an array of expanded panel names, including in accordion mode. `defaultValue` initializes uncontrolled state only on creation; later changes do not reset it. Initialization does not emit `update:modelValue`. When `modelValue` is provided, the parent controls the state and its value is authoritative.

<!-- same-source-api:start -->

### Collapse Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| model-value | Expanded names; v-model | `(string \| number)[]` | `—` |
| default-value | Uncontrolled initial expanded names | `(string \| number)[]` | `[]` |
| accordion | Accordion mode; at most one open panel | `boolean` | `false` |
| show-expand-icon | Whether to show expansion icons; child items decide when omitted | `boolean` | `—` |
| expand-icon-position | Expand-icon position within the header: left or right, default left. Does not control content expansion direction | `'left' \| 'right'` | `'left'` |
| bordered | Whether to show border | `boolean` | `true` |
| divider | Show dividers | `boolean` | `true` |
| offset | Gap between expanded panels | `boolean` | `false` |
| destroy-on-hide | Destroy content when hidden | `boolean` | `false` |

Panel content is mounted eagerly by default. When either the parent or an item enables `destroy-on-hide`, closed content is destroyed after the closing transition; reopening during the transition preserves it. Changing this setting while closed takes effect immediately. An explicit parent `show-expand-icon` overrides the item setting.

### Collapse Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:model-value | Request an expanded-name update | `(string \| number)[]` |
| change | Emitted when expanded panels change | `(string \| number)[]`, `Event` |

### Collapse Slots

| Slot | Description | Scope |
| --- | --- | --- |
| default | Panel list | `—` |

### Collapse Methods

| Method | Description |
| --- | --- |
| toggleAll | Expand or collapse all panels (no-op in accordion) |

<!-- same-source-api:end -->

The parent `expand-icon` slot is forwarded to items that do not provide their own icon. Scope: `expanded`, `disabled`, `position`. It is not rendered on the root node.

### CollapseItem Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| name **(required)** | Unique panel identifier corresponding to a value in `modelValue` | `string \| number` | `—` |
| title | Panel title | `string` | `—` |
| heading-level | Heading level from 1 to 6, chosen for the page; omitted by default | `1–6` | `—` |
| region | Whether content is a region landmark | `boolean` | `true` |
| disabled | Whether disabled | `boolean` | `false` |
| show-expand-icon | Whether to show an expansion icon | `boolean` | `true` |
| destroy-on-hide | Destroy content when hidden | `boolean` | `false` |

Choose `heading-level` for the page structure; set `:region="false"` when many panels would create excessive region landmarks. `extra` sits outside the header button and can contain independent actions; avoid interactive controls in title and expand-icon slots. A right-side expand icon sits inside the header button, followed by `extra`.

### CollapseItem Slots

| Slot | Description | Prop |
| --- | --- | --- |
| title | Panel title | `—` |
| extra | Extra content | `—` |
| expand-icon | Expand icon | expanded: `boolean`<br>disabled: `boolean`<br>position: `'left' \| 'right'` |
| default | Panel content | `—` |

## Types

### CollapseToggleAllOptions

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| expand | `'inverse'` toggles all; `boolean` expands or collapses all | `'inverse' \| boolean` | `—` |
| skipDisabled | Skip disabled panels | `boolean` | `false` |

The component exports the following types. `Collapse.Item` and `CollapseItem` refer to the same component.

```ts
import type { CollapseInstance, CollapseToggleAllOptions, ExpandIconPosition } from '@cedar-design/ui'
```

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-collapse-border-color` | `var(--c-sys-color-border-default)` | `border` |
| `--c-collapse-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-collapse-border-width` | `var(--c-border-width-1)` | `border` |
| `--c-collapse-content-bg` | `var(--c-sys-color-surface-muted)` | `background-color` |
| `--c-collapse-content-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-collapse-content-padding-vertical` | `var(--c-spacing-4)` | `padding` |
| `--c-collapse-content-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-collapse-content-text-color-disabled` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-collapse-expand-icon` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-collapse-expand-icon-active-transform` | `rotate(90deg)` | `transform` |
| `--c-collapse-expand-icon-right-active-transform` | `rotate(-90deg)` | `transform` |
| `--c-collapse-expand-icon-right-transform` | `rotate(0deg)` | `transform` |
| `--c-collapse-expand-icon-size` | `14px` | `font-size` |
| `--c-collapse-expand-icon-spacing-text` | `5px` | `gap` |
| `--c-collapse-expand-icon-transform` | `rotate(0deg)` | `transform` |
| `--c-collapse-focus-color` | `currentColor` | `outline` |
| `--c-collapse-focus-offset` | `-2px` | `outline-offset` |
| `--c-collapse-focus-width` | `2px` | `outline` |
| `--c-collapse-item-border-color` | `var(--c-sys-color-border-default)` | `border-bottom` |
| `--c-collapse-item-border-width` | `var(--c-border-width-1)` | `border-bottom` |
| `--c-collapse-item-margin-top` | `var(--c-spacing-4)` | `margin-top` |
| `--c-collapse-line-height` | `1.5715` | `line-height` |
| `--c-collapse-motion-duration` | `var(--c-transition-duration-2)` | `transition` |
| `--c-collapse-motion-easing` | `var(--c-transition-timing-function-standard)` | `transition` |
| `--c-collapse-title-bg` | `var(--c-sys-color-surface-default)` | `background`, `background-color` |
| `--c-collapse-title-bg-active` | `var(--c-sys-color-surface-default)` | `background-color` |
| `--c-collapse-title-bg-disabled` | `var(--c-sys-color-surface-default)` | `background-color` |
| `--c-collapse-title-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-collapse-title-font-weight-active` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-collapse-title-line-height` | `24px` | `line-height` |
| `--c-collapse-title-padding-horizontal` | `13px` | `padding` |
| `--c-collapse-title-padding-vertical` | `var(--c-spacing-4)` | `padding` |
| `--c-collapse-title-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-collapse-title-text-color-disabled` | `var(--c-sys-color-content-disabled)` | `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-collapse-border-color: var(--c-sys-color-border-default);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->

### Colors

Collapse public color variables default to system semantics consistently in Cedar and Maple:

| Variable | Default semantic value |
| --- | --- |
| `--c-collapse-border-color` | `--c-sys-color-border-default` |
| `--c-collapse-title-bg` | `--c-sys-color-surface-default` |
| `--c-collapse-title-bg-active` | `--c-sys-color-surface-default` |
| `--c-collapse-title-bg-disabled` | `--c-sys-color-surface-default` |
| `--c-collapse-title-text-color` | `--c-sys-color-content-primary` |
| `--c-collapse-title-text-color-disabled` | `--c-sys-color-content-disabled` |
| `--c-collapse-content-text-color` | `--c-sys-color-content-primary` |
| `--c-collapse-content-text-color-disabled` | `--c-sys-color-content-disabled` |
| `--c-collapse-content-bg` | `--c-sys-color-surface-muted` |
| `--c-collapse-expand-icon` | `var(--c-sys-color-content-secondary)` |
| `--c-collapse-item-border-color` | `--c-sys-color-border-default` |

#### Reduced motion

Built-in CSS transitions follow `prefers-reduced-motion: reduce`. Removing transitions does not change final visibility, selected/expanded state or event semantics. Applications control custom animations inside slots.
