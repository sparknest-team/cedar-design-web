---
lang: en-US
permalink: /en/components/color/
---

# Color

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

When disabled or readonly is omitted, Color inherits the corresponding FormItem and Form state. Explicit false overrides that inherited state. Disabled and readonly controls cannot open the color panel or change the color.

The default trigger is a native button and supports Tab, Enter and Space. A supplied `id` belongs to that button and can be targeted by a FormItem label’s `for`. When the label has no explicit `for`, or its `for` matches the button `id`, the button name combines the label with the localized “Choose color” action. A supplied `aria-label` or `aria-labelledby` takes precedence; without a FormItem label the localized action is used. Custom trigger slots must provide their own accessible name and keyboard interaction.

## Basic examples

### Basic usage

- `show-text`: Show color value

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Size

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ----------- | ---------- | -------- |
| `size` | Size | Size |
| `show-text` | Show color value | Size |

<!-- demo-config-notes:end -->


- `size`: ComponentSize
- `show-text`: Show color value

<demo src="./__demos__/size.vue"></demo>

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Color Props

| Prop | Description | Type | Default |
| -------------------- | ------------------ | ---------------------------- | ------- |
| `model-value` | Bound value | `string` | `-` |
| `default-value` | Initial uncontrolled value | `string` | `undefined` |
| `format` | Color format | `hex \| rgb` | `-` |
| `size` | Size | `xs \| sm \| md \| lg \| xl` | `md` |
| `show-text` | Show color value | `boolean` | `false` |
| `show-history` | Show history colors | `boolean` | `false` |
| `show-preset` | Show preset colors | `boolean` | `false` |
| `disabled` | Disabled; inherits Form when omitted | `boolean` | `undefined` |
| `readonly` | Readonly; inherits Form when omitted | `boolean` | `undefined` |
| `disabled-alpha` | Disable alpha | `boolean` | `false` |
| `history-colors` | History colors | `string[]` | `undefined` |
| `preset-colors` | Preset colors | `string[]` | `undefined` |
| `empty-value` | Clear value or factory | `string \| null \| (() => string \| null)` | `undefined` |
| `color-picker-props` | Forwarded to ColorPicker | `Partial<ColorPickerProps>` | `{}` |

### Color Events

| Event | Description | Arguments |
| --- | --- | --- |
| `update:modelValue` | Update the field value | `(value)` |
| `change` | Notify a color change | `(value: string)` |
| `update:open` / `open-change` | Update or notify the field editor open state | `(open: boolean)` |

### Color Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Custom color picker trigger | — |
| `read` | Custom reading content | `{ value, text }` |

### Editing and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-direct modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

Drag listeners belong to the control's own view. KeepAlive deactivation or unmount ends the current gesture and releases listeners. Reactivation requires a new gesture; callbacks from the old gesture cannot change values.

## CSS Variables

<!-- component-css-variables:start -->

This component declares no independent public CSS variables. Use the configuration and layout APIs documented on this page. The appearance of composed controls follows the public variables of `color-picker`; a shared variable can affect other controls in the same DOM subtree.

Internal custom properties and measurement values are implementation details and are not customization APIs.

<!-- component-css-variables:end -->
