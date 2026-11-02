---
lang: en-US
permalink: /en/components/field-decorator/
---

# Field Decorator

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

Focused inputs do not draw an additional outer outline. Existing variant borders, underlines or backgrounds provide focus feedback. This applies to consumers including Input, Textarea, Date and Time.

Input, textarea and numeric-input carets use `currentColor`, matching the current input text. Error state does not override caret color separately.

`--c-field-caret-color` defaults to `currentColor` and controls Input, InputNumber and Textarea carets without changing text color.

## Basic examples

### Control Sizes

Preview configuration: `aria-label="Comparison size"`, `:value="item"`, `aria-label="Comparison variant"`, `:size="size"`.

<demo src="./__demos__/control-sizes.vue"></demo>

## Loading and waiting

### Shared field loading

`loading` displays the shared field indicator. `loading-mode` is `default` (indicator) or `line` (an indeterminate bottom line); it defaults to `default`. Rendering belongs to FieldDecorator. Loading does not implicitly disable editing or change readonly. Set those states separately.

 <demo src="./__demos__/loading.vue"></demo>

### Loading tokens

| Token | Default |
| --- | --- |
| `--c-field-loading-line-size` | `2px` |
| `--c-field-loading-duration` | `1s` |
| `--c-field-loading-color` | `var(--c-field-focus-color)` |

## Props

The outline notch uses `fieldset / legend`, not a background mask. It starts aligned with the content column and reserves `hint-space` on both sides. CSS `max()/calc()` in `padding-inline-start` must be emitted verbatim by Less, preventing different Less versions from prematurely evaluating it as `0px`. `check:input` checks source parity and both libraries’ Less output.

| Prop | Type | Default / meaning |
| --- | --- | --- |
| `tag` | `'div' \| 'span'` | `div`; wrapper element |
| `value` | `unknown` | Checks only whether content is empty |
| `id` | `string` | Native control id associated with the floating label |
| `title` | `string` | Native title tooltip |
| `size` | `ComponentSize` | `md`; implements all five sizes |
| `variant` | `'outline' \| 'filled' \| 'standard'` | `outline` |
| `placeholder` | `string` | Floating label text |
| `hint` | `boolean` | Cedar false / Maple true |
| `hint-center` | `boolean` | `true`; use false for multiline controls |
| `line` | `boolean` | `true`; whether to show a border or underline |
| `focused` | `boolean` | Consumer-supplied focus state |
| `composing` | `boolean` | Keep the label floated during IME composition |
| `disabled` / `readonly` / `error` | `boolean` | Provided by the consumer after merging Form / Group state |
| `clearable` | `boolean` | `false`; whether clearing is allowed |
| `text-color` / `focus-color` / `blur-color` | `string` | Custom text, focused and unfocused colors |
| `cursor` | `string` | Custom caret |

## Slots and events

`default` contains a native input, tags or display content. `prefix` / `suffix` contain adornments. `clear-icon` receives `clear(event?)`; a custom button should call it. Clearing does not bubble to open the selection panel.

`clear(event)` asks the consumer to update the value; `mousedown(event)` lets the consumer manage focus. The wrapper does not mutate the model itself.

Style semantics use `--c-field-*` / `--mp-field-*`, declared in each library's `style/token.less`. Implementations are not shared across libraries. Consumers must not draw a second border.

## Error and disabled border variables

Prefix these suffixes with `--c-field-` / `--mp-field-`: `variant-outline-border-color-error` controls outline error borders; `variant-standard-line-color-error` controls standard error underlines; `variant-standard-line-color-disabled` controls standard disabled underlines and defaults to system border-subtle. Disabled overrides error, hover and focus. All three support local overrides. `field-error-color` still controls error text. Internal variables are not business API; unused legacy declarations are removed without aliases.

Changing `tag` rebinds size observation to the current root and content elements. KeepAlive deactivation releases observation and queued measurement; frames from an earlier activation cannot update the current layout.
