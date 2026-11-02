---
lang: en-US
permalink: /en/components/color-picker/
---

# Color Picker

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

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

## API

### `<ColorPicker>` Props

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


### Existing precedence of forwarded configuration (F07)

Existing triggerProps are spread after some internal Trigger settings, so nested fields such as disabled can currently override internal values. F07 preserves this order and type for compatibility; it does not apply AutoComplete managed-field rules, promise a new safe subset or automatically prohibit these existing capabilities.

Dragging uses the control owner view. KeepAlive deactivation or unmount ends the gesture and releases its listeners; a new activation requires a new gesture, and callbacks from old gestures cannot change its value.
