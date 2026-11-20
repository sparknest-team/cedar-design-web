---
lang: en-US
permalink: /en/components/segmented/
---

# Segmented

Switch quickly between a few mutually exclusive options.

`model-value` is controlled: interaction proposes an update, and a rejected proposal restores both native checked state and styling. `default-value` only initializes local state. Omitting both selects no initial option. Ordinary `change` notifications do not await returned Promises.

Models support string / number. Undefined selects uncontrolled mode; null is not part of the public model type.

Omitted disabled, readonly and size inherit FormItem and Form; size then uses ConfigProvider and finally md. Explicit false overrides inherited state. Readonly retains keyboard focus and prevents changes. FormItem errors are exposed through aria-invalid, and their messages are associated with the radio group alongside any existing aria-describedby, without adding field chrome or loading props.

## Basic examples

### Basic usage

- `options`: Options

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Segment sizes and disabled states

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `size` | Size | Segment sizes and disabled states |
| `options` | Action list | Segment sizes and disabled states |
| `disabled` | Disable interaction | Segment sizes and disabled states |
| `default-value` | Uncontrolled default value | Segment sizes and disabled states |
<!-- demo-config-notes:end -->


Compare density at each size and disabled-option behavior.

<demo src="./__demos__/appearance-state-comparison.en-US.vue"></demo>

## Layout and arrangement

### Block

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `block` | Fill parent width | Block |
| `options` | Action list | Block |
<!-- demo-config-notes:end -->


- `block`: Fit parent width
- `options`: Options

<demo src="./__demos__/block.vue"></demo>

## Interaction and control

### Controlled

- `model-value`: Binding value
- `options`: Options

<demo src="./__demos__/controlled.vue"></demo>

## Accessibility

- The root uses `role="radiogroup"`; native `radio` options support keyboard changes.
- `name` binds a native form field `name`.
- An omitted name uses an SSR-stable instance identifier; separate instances retain separate native radio groups.
- Whole-control disabling sets `aria-disabled`.

## API

### Segmented Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| model-value | Current value Supports `v-model`. | `string \| number` | `—` |
| default-value | Uncontrolled default value | `string \| number` | — |
| options | Options; accepts readonly arrays | `ReadonlyArray<string \| number \| SegmentedOption>` | `[]` |
| size | Size; inherits form and global configuration when omitted, falling back to md | `xs \| sm \| md \| lg \| xl` | `undefined` |
| disabled | Disabled; inherits the form when omitted; explicit false overrides | `boolean` | `undefined` |
| readonly | Readonly; inherits the form when omitted; explicit false overrides | `boolean` | `undefined` |
| block | Fill parent width | `boolean` | `false` |
| orientation | Horizontal/vertical arrangement of segmented options, default horizontal; not text reading direction | `horizontal \| vertical` | `horizontal` |
| name | Native name | `string` | — |

### Segmented Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Value change | `(value, event)` |
| update:model-value | v-model | `(value)` |

### Segmented Slots

| Slot | Description | Prop |
| --- | --- | --- |
| label | Custom option content | `{ data: SegmentedOption }` |

## Types

### SegmentedOption

| Field | Description | Type |
| --- | --- | --- |
| label | Label; falls back to value when omitted | `string \| () => VNodeChild` |
| value | Value | `string \| number` |
| disabled | Disable this item | `boolean` |

Number 1 and string "1" are separate options. The first occurrence wins when the same typed value is repeated. The label slot takes precedence over option.label; icon-only content still needs an accessible name. Business metadata is available through slot data and is not forwarded as native attributes.

The instance adds no focus, blur or select methods. Segmented manages exclusive selection and provides no associated content panels.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-segmented-bg` | `var(--c-sys-color-surface-muted)` | `background` |
| `--c-segmented-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-segmented-font-size-lg` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-segmented-font-size-md` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-segmented-font-size-sm` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-segmented-font-size-xl` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-segmented-font-size-xs` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-segmented-height-lg` | `var(--c-size-9)` | `min-height` |
| `--c-segmented-height-md` | `var(--c-size-8)` | `min-height` |
| `--c-segmented-height-sm` | `var(--c-size-7)` | `min-height` |
| `--c-segmented-height-xl` | `var(--c-size-10)` | `min-height` |
| `--c-segmented-height-xs` | `var(--c-size-6)` | `min-height` |
| `--c-segmented-item-bg-hover` | `var(--c-sys-color-state-hover)` | `background` |
| `--c-segmented-item-bg-selected` | `var(--c-sys-color-surface-default)` | `background` |
| `--c-segmented-item-border-radius` | `calc(var(--c-segmented-border-radius) - 1px)` | `border-radius` |
| `--c-segmented-item-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-segmented-item-color-hover` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-segmented-item-color-selected` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-segmented-item-disabled-color` | `var(--c-sys-color-content-disabled)` | `color` |
| `--c-segmented-item-font-weight-selected` | `500` | `font-weight` |
| `--c-segmented-item-padding-lg` | `0 14px` | `padding` |
| `--c-segmented-item-padding-md` | `0 var(--c-spacing-6)` | `padding` |
| `--c-segmented-item-padding-sm` | `0 var(--c-spacing-5)` | `padding` |
| `--c-segmented-item-padding-xl` | `0 var(--c-spacing-7)` | `padding` |
| `--c-segmented-item-padding-xs` | `0 var(--c-spacing-4)` | `padding` |
| `--c-segmented-label-gap` | `var(--c-spacing-2)` | `gap` |
| `--c-segmented-padding` | `var(--c-border-width-3)` | `padding` |
| `--c-segmented-shadow-selected` | `0 1px 2px rgba(0, 0, 0, 0.06)` | `box-shadow` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-segmented-border-radius: var(--c-border-radius-md);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
