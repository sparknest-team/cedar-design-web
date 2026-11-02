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

Inherits the nearest `dir="ltr|rtl"` and supports runtime and nested overrides. Titles and expanded content inherit reading direction without changing expansion state. The left/right values of expand-icon-position remain physical sides. Custom expansion graphics are not additionally mirrored.

## API

The main value uses ordinary `v-model`: `modelValue` is an array of expanded panel names, including in accordion mode. `defaultValue` initializes uncontrolled state only on creation; later changes do not reset it. Initialization does not emit `update:modelValue`. When `modelValue` is provided, the parent controls the state and its value is authoritative.

<!-- same-source-api:start -->
### Props

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

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:model-value | Request an expanded-name update | `(string \| number)[]` |
| change | Emitted when expanded panels change | `(string \| number)[]`, `Event` |

### Slots

| Slot | Description | Scope |
| --- | --- | --- |
| default | Panel list | `—` |

### Methods

| Method | Description |
| --- | --- |
| toggleAll | Expand or collapse all panels (no-op in accordion) |

<!-- same-source-api:end -->

The parent `expand-icon` slot is forwarded to items that do not provide their own icon. Scope: `expanded`, `disabled`, `position`. It is not rendered on the root node.

#### CollapseToggleAllOptions

| Arguments | Description | Type | Default |
| --- | --- | --- | --- |
| expand | `'inverse'` toggles all; `boolean` expands or collapses all | `'inverse' \| boolean` | `—` |
| skipDisabled | Skip disabled panels | `boolean` | `false` |

### `<collapse-item>` Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| name **(required)** | Unique panel identifier corresponding to a value in `modelValue` | `string \| number` | `—` |
| title | Panel title | `string` | `—` |
| disabled | Whether disabled | `boolean` | `false` |
| show-expand-icon | Whether to show an expansion icon | `boolean` | `true` |
| destroy-on-hide | Destroy content when hidden | `boolean` | `false` |

### `<collapse-item>` Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| title | Panel title | `—` |
| extra | Extra content | `—` |
| expand-icon | Expand icon | expanded: `boolean`<br>disabled: `boolean`<br>position: `'left' \| 'right'` |
| default | Panel content | `—` |

### Type definitions

The component exports the following types. `Collapse.Item` and `CollapseItem` refer to the same component.

```ts
import type { CollapseInstance, CollapseToggleAllOptions, ExpandIconPosition } from '@cedar-design/ui'
```

## Color variables

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

### Reduced motion

Built-in CSS transitions follow `prefers-reduced-motion: reduce`. Removing transitions does not change final visibility, selected/expanded state or event semantics. Applications control custom animations inside slots.
