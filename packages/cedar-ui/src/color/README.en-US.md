---
lang: en-US
permalink: /en/components/color/
---

# Color

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `show-text`: Show color value

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Size

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose          | Related examples |
| ------------- | ---------------- | ---------------- |
| `size`        | Size             | Size             |
| `show-text`   | Show color value | Size             |

<!-- demo-config-notes:end -->

- `size`: ComponentSize
- `show-text`: Show color value

<demo src="./__demos__/size.vue"></demo>

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Props

| Arguments            | Description              | Type                         | Default |
| -------------------- | ------------------------ | ---------------------------- | ------- |
| `model-value`        | Bound value              | `string`                     | `-`     |
| `format`             | Color format             | `hex \| rgb`                 | `-`     |
| `size`               | Size                     | `xs \| sm \| md \| lg \| xl` | `md`    |
| `show-text`          | Show color value         | `boolean`                    | `false` |
| `show-history`       | Show history colors      | `boolean`                    | `false` |
| `show-preset`        | Show preset colors       | `boolean`                    | `false` |
| `disabled`           | Disable interaction      | `boolean`                    | `false` |
| `disabled-alpha`     | Disable alpha            | `boolean`                    | `false` |
| `color-picker-props` | Forwarded to ColorPicker | `object`                     | `{}`    |

### Form field presentation and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-`direct` modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(value, { previousValue, signal })` can reject an overlay save. FormItem validates the candidate first and keeps the editor open on failure. `open / default-open / update:open` control the editor. Use `#read="{ value, text }"` to customize display. See the full field comparison in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

Dragging uses the control owner view. KeepAlive deactivation or unmount ends the gesture and releases its listeners; a new activation requires a new gesture, and callbacks from old gestures cannot change its value.
