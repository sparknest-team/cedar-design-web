---
lang: en-US
permalink: /en/components/color-picker/
---

# Color Picker

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

FormItem errors describe the inline panel or built-in trigger while preserving any existing `aria-describedby`. A custom trigger can bind the default slot’s `describedBy` value to its interactive element’s `aria-describedby`.

```vue
<ColorPicker :hide-trigger="false">
  <template #default="{ describedBy }">
    <button type="button" :aria-describedby="describedBy">Choose color</button>
  </template>
</ColorPicker>
```

During server rendering, the custom trigger slot does not yet support `v-for` and `v-memo` on the same node. Remove that node’s `v-memo` when SSR is required.

When a FormItem label has no explicit `for`, the inline panel is named as a group by that label, while the built-in trigger combines it with its localized action. A supplied `id` belongs to the built-in button; its name also combines the label and action when the label’s `for` matches that ID. Explicit `aria-label` or `aria-labelledby` takes precedence. Give each field an explicit name when a FormItem contains multiple fields.

## Basic examples

### Basic usage

- `default-value`: Default value (uncontrolled state)

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Disabled

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `default-value` | Default | Disabled |
| `disabled` | Disabled | Disabled |
| `hide-trigger` | Panel only, without a trigger | Disabled |
| `show-text` | Show color value | Disabled |
<!-- demo-config-notes:end -->


- `default-value`: Default value (uncontrolled state)
- `disabled`: disabled
- `hide-trigger`: There is no trigger element, only the color panel is displayed
- `show-text`: Show color value

<demo src="./__demos__/disabled.vue"></demo>

## Content and presentation

### Colors

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `default-value` | Default | Colors |
| `history-colors` | History colors | Colors |
| `show-history` | Show history colors | Colors |
| `show-preset` | Show preset colors | Colors |
<!-- demo-config-notes:end -->


- `default-value`: Default value (uncontrolled state)
- `history-colors`: Color array of historical colors
- `show-history`: Show history colors

History and presets accept HEX, HEX with alpha, RGB and RGBA. Selecting one updates both color and opacity; invalid entries leave the current color unchanged. Percentage RGB channels are converted and clamped to their valid ranges.

Use parenthesized RGB / RGBA functions with comma- or space-separated channels. Incomplete input and extra text are invalid. An invalid initial model falls back to opaque red.

`default-value` initializes the picker once. The parent owns a controlled `model-value`: selection proposes an update, and a rejected proposal restores the controlled color. External model synchronization does not emit `change`.
- `show-preset`: Show preset colors

<demo src="./__demos__/colors.vue"></demo>

## Data and options

### Format

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `default-value` | Default | Format |
| `format` | Color value format | Format |
| `show-text` | Show color value | Format |
| `hide-trigger` | Panel only, without a trigger | Format |
<!-- demo-config-notes:end -->


- `default-value`: Default value (uncontrolled state)
- `format`: Color value format
- `show-text`: Show color value
- `hide-trigger`: There is no trigger element, only the color panel is displayed

<demo src="./__demos__/format.vue"></demo>

When disabled, the palette and sliders leave the Tab order, and the inputs and format selector cannot be operated. Hue and opacity sliders support arrow keys and Home / End; color channels have localized accessible names.

`format` controls the output color format and initializes the panel's input mode. The panel selector changes the input mode independently. Later `format` changes affect output without resetting that mode or emitting change by themselves.

## API

### ColorPicker Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| model-value **(v-model)** | Bound value | `string` | `-` |
| default-value | Default | `string` | `-` |
| format | Color value format | `'hex' \| 'rgb'` | `-` |
| size | Size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| show-text | Show color value | `boolean` | `false` |
| show-history | Show history colors | `boolean` | `false` |
| show-preset | Show preset colors | `boolean` | `false` |
| disabled | Disable interaction | `boolean` | `false` |
| disabled-alpha | Disable alpha | `boolean` | `false` |
| hide-trigger | Panel only, without a trigger | `boolean` | `true` |
| history-colors | History colors | `string[]` | `-` |
| preset-colors | Preset colors | `string[]` | `-` |


### Forwarded configuration precedence

Nested triggerProps fields such as disabled can override the corresponding popup settings supplied by ColorPicker. To disable the entire component, check both top-level props and nested configuration.

Drag listeners belong to the control's own view. KeepAlive deactivation or unmount ends the current gesture and releases listeners. Reactivation requires a new gesture; callbacks from the old gesture cannot change values.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-color-picker-control-bar-alpha-margin-top` | `var(--c-spacing-9)` | `margin-top` |
| `--c-color-picker-control-bar-border-radius` | `10px` | `border-radius` |
| `--c-color-picker-control-bar-handle-inner-offset` | `var(--c-spacing-4)` | `height`, `width` |
| `--c-color-picker-control-bar-handle-size` | `var(--c-size-4)` | `height`, `width` |
| `--c-color-picker-control-bar-height` | `14px` | `height` |
| `--c-color-picker-control-bar-width` | `182px` | `width` |
| `--c-color-picker-input-bg-color` | `var(--c-color-fill-2)` | `background-color` |
| `--c-color-picker-input-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-color-picker-input-size-lg-padding` | `calc((var(--c-field-size-lg-height) - var(--c-color-picker-preview-size-lg)) / 2) var(--c-spacing-3)` | `padding` |
| `--c-color-picker-input-size-md-padding` | `calc((var(--c-field-size-md-height) - var(--c-color-picker-preview-size-md)) / 2) var(--c-spacing-2)` | `padding` |
| `--c-color-picker-input-size-sm-padding` | `calc((var(--c-field-size-sm-height) - var(--c-color-picker-preview-size-sm)) / 2) var(--c-spacing-2)` | `padding` |
| `--c-color-picker-input-size-xs-padding` | `calc((var(--c-field-size-xs-height) - var(--c-color-picker-preview-size-xs)) / 2) var(--c-spacing-2)` | `padding` |
| `--c-color-picker-palette-handle-border-size` | `var(--c-border-width-2)` | `border` |
| `--c-color-picker-palette-handle-size` | `var(--c-size-4)` | `height`, `width` |
| `--c-color-picker-palette-height` | `178px` | `height` |
| `--c-color-picker-panel-affix-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-color-picker-panel-alpha-input-width` | `52px` | `width` |
| `--c-color-picker-panel-bg-color` | `var(--c-color-bg-1)` | `background-color` |
| `--c-color-picker-panel-block-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-color-picker-panel-block-margin` | `var(--c-spacing-6)` | `margin` |
| `--c-color-picker-panel-block-size` | `var(--c-size-4)` | `height`, `width` |
| `--c-color-picker-panel-border-color` | `var(--c-color-border-2)` | `border`, `border-inline-end`, `border-inline-start`, `border-top` |
| `--c-color-picker-panel-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-color-picker-panel-box-shadow` | `var(--c-shadow2-down)` | `box-shadow` |
| `--c-color-picker-panel-checker-size` | `var(--c-spacing-4)` | `background-size` |
| `--c-color-picker-panel-colors-empty-margin-y` | `var(--c-spacing-9)` | `margin` |
| `--c-color-picker-panel-colors-list-margin` | `calc(-1 * var(--c-spacing-4)) calc(-1 * var(--c-spacing-2)) 0` | `margin` |
| `--c-color-picker-panel-colors-section-margin-top` | `var(--c-spacing-9)` | `margin-top` |
| `--c-color-picker-panel-colors-wrapper-margin-top` | `var(--c-spacing-7)` | `margin-top` |
| `--c-color-picker-panel-empty-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-color-picker-panel-format-padding-left` | `var(--c-spacing-4)` | `padding-inline-start` |
| `--c-color-picker-panel-format-select-width` | `58px` | `width` |
| `--c-color-picker-panel-input-group-margin-left` | `var(--c-spacing-9)` | `margin-inline-start` |
| `--c-color-picker-panel-input-margin-top` | `var(--c-spacing-9)` | `margin-top` |
| `--c-color-picker-panel-input-padding-x` | `var(--c-spacing-6)` | `padding` |
| `--c-color-picker-panel-padding` | `var(--c-spacing-9)` | `padding` |
| `--c-color-picker-panel-preview-size` | `var(--c-size-10)` | `font-size`, `height`, `width` |
| `--c-color-picker-panel-section-title-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-color-picker-panel-section-title-font-weight` | `var(--c-font-weight-400)` | `font-weight` |
| `--c-color-picker-panel-width` | `260px` | `width` |
| `--c-color-picker-preview-border-color` | `var(--c-color-border-2)` | `border` |
| `--c-color-picker-preview-border-size` | `var(--c-border-width-1)` | `border` |
| `--c-color-picker-preview-size-lg` | `26px` | `height`, `padding`, `width` |
| `--c-color-picker-preview-size-md` | `var(--c-size-6)` | `height`, `padding`, `width` |
| `--c-color-picker-preview-size-sm` | `22px` | `height`, `padding`, `width` |
| `--c-color-picker-preview-size-xs` | `var(--c-size-4)` | `height`, `padding`, `width` |
| `--c-color-picker-value-font-color` | `var(--c-color-text-1)` | `color` |
| `--c-color-picker-value-font-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-color-picker-value-font-size` | `var(--c-field-size-md-font-size)` | `font-size` |
| `--c-color-picker-value-margin-left` | `var(--c-spacing-2)` | `margin-inline-start` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-color-picker-control-bar-alpha-margin-top: var(--c-spacing-9);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
