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

## Usage notes

### Error and disabled borders

Changing `tag` rebinds size observation to the current root and content nodes. KeepAlive deactivation releases observation and queued measurements; a frame from an earlier activation cannot change current layout.

## API

### FieldDecorator Props

The floating hint leaves a gap in the outline, aligned with the content column. Adjust the space on either side through `hint-space`.

| Prop | Type | Default / meaning |
| --- | --- | --- |
| `loading` | `boolean` | `false`; show loading without changing disabled or readonly |
| `loading-mode` | `'default' \| 'line'` | `default`; indicator or bottom progress line |
| `tag` | `'div' \| 'span'` | `div`; wrapper element |
| `value` | `unknown` | Checks only whether content is empty |
| `id` | `string` | Native control id associated with the floating label |
| `title` | `string` | Native title tooltip |
| `size` | `ComponentSize`<br>`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `md`; implements all five sizes |
| `variant` | `'outline' \| 'filled' \| 'standard'` | `outline` |
| `placeholder` | `string` | Floating label text |
| `hint` | `boolean` | `true` |
| `hint-center` | `boolean` | `true`; use false for multiline controls |
| `line` | `boolean` | `true`; whether to show a border or underline |
| `focused` | `boolean` | Consumer-supplied focus state |
| `composing` | `boolean` | Keep the label floated during IME composition |
| `disabled` | `boolean` | Consumer-supplied disabled state after merging Form / Group state |
| `readonly` | `boolean` | Consumer-supplied read-only state after merging Form / Group state |
| `error` | `boolean` | Consumer-supplied error state after merging Form / Group state |
| `clearable` | `boolean` | `false`; whether clearing is allowed |
| `text-color` | `string` | Custom per-instance text color; prefer tokens for static themes |
| `focus-color` | `string` | Custom per-instance focused color; prefer tokens for static themes |
| `blur-color` | `string` | Custom per-instance unfocused color; prefer tokens for static themes |
| `cursor` | `string` | Custom caret |

### FieldDecorator Slots / Events

`default` contains a native input, tags or display content. `prefix` / `suffix` contain adornments. `clear-icon` receives `clear(event?)`; a custom button should call it. Clearing does not bubble to open the selection panel.

`loading-icon` replaces the indicator icon only when `loading=true` and `loading-mode=default`; `line` mode renders no icon. `fieldLoadingProps` contains `loading` and `loadingMode`; `fieldLoadingModes`, `FieldLoadingMode`, and `FieldLoadingProps` are exported from the component and root entry points.

`clear(event)` asks the consumer to update the value; `mousedown(event)` lets the consumer manage focus. The wrapper does not mutate the model itself.

Style semantics use `--c-field-*` / `--mp-field-*`, declared in each library's `style/token.less`. Implementations are not shared across libraries. Consumers must not draw a second border.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-field-blur-color` | `var(--c-sys-color-content-tertiary)` | `border-bottom`, `color` |
| `--c-field-border-radius` | `var(--c-border-radius-md)` | `border-end-end-radius`, `border-end-start-radius`, `border-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--c-field-border-width` | `1px` | `border`, `border-bottom`, `margin-inline-start`, `min-height`, `outline`, `outline-offset`, `padding-inline-start` |
| `--c-field-caret-color` | `currentColor` | `caret-color` |
| `--c-field-clear-icon-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-field-clear-icon-size` | `12px` | `font-size` |
| `--c-field-clear-padding` | `2px` | `padding` |
| `--c-field-clear-radius` | `50%` | `border-radius` |
| `--c-field-clear-visibility` | `hidden` | `visibility` |
| `--c-field-content-gap` | `8px` | `gap`, `padding-inline-end`, `padding-inline-start` |
| `--c-field-content-padding-vertical` | `5px` | `top` |
| `--c-field-control-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-field-control-text-color-disabled` | `var(--c-sys-color-content-disabled)` | `-webkit-text-fill-color`, `color` |
| `--c-field-error-color` | `var(--c-sys-color-status-danger)` | `border-bottom-color`, `border-color`, `color` |
| `--c-field-focus-color` | `var(--c-sys-color-action-primary)` | `border-bottom-color`, `color`, `outline` |
| `--c-field-hint-duration` | `0.2s` | `transition` |
| `--c-field-hint-scale` | `0.75` | `font-size`, `top`, `transform` |
| `--c-field-hint-space` | `4px` | `padding`, `padding-inline-start` |
| `--c-field-icon-size` | `14px` | `font-size` |
| `--c-field-line-height` | `1.5` | `line-height`, `top` |
| `--c-field-loading-color` | `var(--c-field-focus-color)` | `color` |
| `--c-field-loading-duration` | `1s` | `animation` |
| `--c-field-loading-line-size` | `2px` | `height` |
| `--c-field-padding-horizontal` | `12px` | `inset-inline-start`, `margin-inline-end`, `margin-inline-start`, `max-width`, `padding`, `padding-inline-end`, `padding-inline-start` |
| `--c-field-placeholder-text-color` | `var(--c-sys-color-content-tertiary)` | `color` |
| `--c-field-prefix-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-field-size-lg-font-size` | `14px` | `font-size` |
| `--c-field-size-lg-height` | `36px` | `flex`, `height`, `min-height`, `padding` |
| `--c-field-size-md-font-size` | `14px` | `font-size` |
| `--c-field-size-md-height` | `32px` | `flex`, `height`, `min-height`, `padding` |
| `--c-field-size-sm-font-size` | `14px` | `font-size` |
| `--c-field-size-sm-height` | `28px` | `flex`, `height`, `min-height`, `padding` |
| `--c-field-size-xl-font-size` | `16px` | `font-size` |
| `--c-field-size-xl-height` | `44px` | `flex`, `height`, `min-height` |
| `--c-field-size-xs-font-size` | `12px` | `font-size` |
| `--c-field-size-xs-height` | `24px` | `flex`, `height`, `min-height`, `padding` |
| `--c-field-suffix-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-field-variant-filled-background` | `var(--c-sys-color-surface-muted)` | `background` |
| `--c-field-variant-filled-background-disabled` | `var(--c-color-fill-2)` | `background` |
| `--c-field-variant-filled-background-error` | `var(--c-color-danger-light-1)` | `background` |
| `--c-field-variant-filled-background-focus` | `var(--c-color-fill-3)` | `background` |
| `--c-field-variant-filled-background-hover` | `var(--c-sys-color-state-hover)` | `background` |
| `--c-field-variant-outline-background` | `transparent` | `background` |
| `--c-field-variant-outline-border-color` | `var(--c-sys-color-border-default)` | `border`, `border-color` |
| `--c-field-variant-outline-border-color-disabled` | `var(--c-sys-color-border-subtle)` | `border-color` |
| `--c-field-variant-outline-border-color-error` | `var(--c-sys-color-status-danger)` | `border-color` |
| `--c-field-variant-outline-border-color-focus` | `var(--c-sys-color-action-primary)` | `border-color` |
| `--c-field-variant-outline-border-color-hover` | `var(--c-sys-color-border-strong)` | `border-color` |
| `--c-field-variant-standard-line-color` | `var(--c-field-blur-color)` | `border-bottom` |
| `--c-field-variant-standard-line-color-disabled` | `var(--c-sys-color-border-subtle)` | `border-bottom-color` |
| `--c-field-variant-standard-line-color-error` | `var(--c-field-error-color)` | `border-bottom-color` |
| `--c-field-variant-standard-line-color-focus` | `var(--c-field-focus-color)` | `border-bottom-color` |
| `--c-field-variant-standard-line-size` | `1px` | `border-bottom` |
| `--c-field-variant-standard-line-size-focus` | `2px` | `border-bottom-width` |
| `--c-search-color-icon` | `var(--c-color-text-2)` | `color` |
| `--c-search-size-icon` | `14px` | `font-size` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-field-blur-color: var(--c-sys-color-content-tertiary);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->

### Error and disabled borders

Prefix these suffixes with `--c-field-` / `--mp-field-`: `variant-outline-border-color-error` controls outline error borders; `variant-standard-line-color-error` controls standard error underlines; `variant-standard-line-color-disabled` controls standard disabled underlines and defaults to system border-subtle. Disabled overrides error, hover and focus. All three support local overrides. `field-error-color` still controls error text.
