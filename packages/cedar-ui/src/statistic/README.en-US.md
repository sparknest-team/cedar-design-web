---
lang: en-US
permalink: /en/components/statistic/
---

# Statistic

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `title="Downloads"`, `:value="125670"`, `show-group-separator`, `title="Comments"`.

<demo src="./__demos__/basic.vue"></demo>

## Content and presentation

### Tabular Nums

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `title` | Displayed-value title | Tabular Nums, Extra, Animation |
| `value` | Displayed value | Tabular Nums, Extra, Animation |
| `suffix` | Value suffix | Tabular Nums |
| `value-style` | Custom style of the value | Tabular Nums |
| `tabular-nums` | Use tabular digits to prevent width changes as values update | Tabular Nums |
| `prefix` | Value prefix | Extra |
<!-- demo-config-notes:end -->


Preview configuration: `title="比例数字（右侧标记会跳动）"`, `:value="count"`, `suffix="\|"`, `:value-style="{ fontVariantNumeric: 'proportional-nums' }"`.

<demo src="./__demos__/tabular-nums.vue"></demo>

### Extra

Preview configuration: `title="Revenue"`, `:value="9280"`, `prefix="$"`, `show-group-separator`.

<demo src="./__demos__/extra.vue"></demo>

### Animation

Preview configuration: `title="Growth Rate"`, `:value="50.52"`, `:precision="2"`, `:value-from="0"`.

<demo src="./__demos__/animation.vue"></demo>

### Statistic

Preview configuration: `title="Countdown"`, `:time="2 * 60 * 60 * 1000"`, `title="Campaign"`, `:time="4 * 24 * 60 * 60 * 1000"`.

<demo src="../countdown/__demos__/statistic.vue"></demo>

## Customization and slots

### Prefix Suffix

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `title` | Displayed-value title | Prefix Suffix, Count To |
| `suffix` | Value suffix | Prefix Suffix, Count To |
| `value` | Displayed value | Prefix Suffix |
| `prefix` | Value prefix | Prefix Suffix |
| `show-group-separator` | Whether to show the group separator | Prefix Suffix |
| `precision` | Decimal places (number mode) | Prefix Suffix |
<!-- demo-config-notes:end -->


Preview configuration: `title="Account Balance"`, `:value="125670"`, `prefix="$"`, `show-group-separator`.

<demo src="./__demos__/prefix-suffix.vue"></demo>

### Count To

Preview configuration: `title="Active Users"`, `:from="0"`, `:to="125670"`, `:duration="2000"`.

<demo src="./__demos__/count-to.vue"></demo>

## Animation duration boundaries

Duration is finite nonnegative milliseconds. Zero reaches the target on the next frame. Negative, NaN and infinite values produce development prop diagnostics and safely behave as zero without continuing to request frames. Pausing or unmounting before that frame cancels completion. Changing animation-duration replays enabled numeric animation according to the existing rules.

## API

`precision` accepts integers from 0 to 100; invalid values fall back to 0. Numeric formatting uses JavaScript binary numbers and rounding and is not exact financial arithmetic. Very large values may use exponential notation; when the difference between animation endpoints overflows, the final value is shown directly. Numeric grouping follows en-US rules, `separator` replaces grouping commas, and the decimal point remains a dot; dates use local time. Non-finite numeric values produce a warning, display literally, and do not animate. An invalid animation start falls back to 0 and an invalid duration to 0 with completion on the next frame.

### Statistic Props

| Prop | Description | Type | Default |
| ---------------------- | -------------------------------------------------------------- | ------------------------- | ------------ |
| `title` | Displayed-value title | `string` | - |
| `value` | Displayed value | `number \| string \| Date` | - |
| `prefix` | Value prefix | `string` | - |
| `suffix` | Value suffix | `string` | - |
| `format` | Date format (date mode) | `string` | `'HH:mm:ss'` |
| `extra` | Extra content | `string` | - |
| `start` | Whether to start the animation | `boolean` | `true` |
| `precision` | Decimal places (number mode) | `number` | `0` |
| `separator` | Group separator (number mode) | `string` | - |
| `show-group-separator` | Whether to show the group separator | `boolean` | `false` |
| `tabular-nums` | Use tabular digits to prevent width changes as values update | `boolean` | `false` |
| `animation` | Whether to enable animation | `boolean` | `false` |
| `animation-duration` | Animation duration | `number` | `2000` |
| `value-from` | Animation start value | `number` | - |
| `placeholder` | Placeholder when `value` is `undefined` and the default slot is unused | `string` | - |
| `value-style` | Custom style of the value | `CSSProperties` | - |

### Statistic Slots

| Slot | Description | Prop |
| --------- | ---------------------------------------- | ---- |
| `default` | Custom `value`, used when `value` is not provided | `-` |
| `title` | Title | `-` |
| `prefix` | The prepend icon of alert | `-` |
| `suffix` | Suffix | `-` |
| `extra` | Extra content | `-` |

## Types

The component exports the following types

```ts
import type { StatisticProps } from '@cedar-design/ui'
```

## Usage notes



Placeholder text updates when the default slot appears/disappears. Animation pauses on unmount/KeepAlive deactivation.

### Animation configuration and lifecycle

With `start=true`, dynamically enabling `animation` or changing the numeric target, `valueFrom` or `animationDuration` replays from the currently configured start. Formatting-only changes, such as precision or separators, do not replay. Disabling `animation` or switching to string/date immediately shows the target and stops frames. `start=false` pauses the current number; explicitly returning to `true` replays. Configuration changes while paused prepare a new start without scheduling frames. KeepAlive deactivation pauses; activation resumes unchanged configuration or resynchronizes changed configuration. Unmount releases frames.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-statistic-decimal-font-size` | `inherit` | `font-size` |
| `--c-statistic-extra-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-statistic-extra-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-statistic-extra-margin-top` | `var(--c-spacing-4)` | `margin-top` |
| `--c-statistic-prefix-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-statistic-prefix-font-size` | `14px` | `font-size` |
| `--c-statistic-prefix-spacing` | `var(--c-spacing-1)` | `margin-inline-end` |
| `--c-statistic-suffix-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-statistic-suffix-font-size` | `14px` | `font-size` |
| `--c-statistic-suffix-spacing` | `var(--c-spacing-1)` | `margin-inline-start` |
| `--c-statistic-title-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-statistic-title-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-statistic-title-margin-bottom` | `var(--c-spacing-4)` | `margin-bottom` |
| `--c-statistic-value-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-statistic-value-font-size` | `26px` | `font-size` |
| `--c-statistic-value-font-weight` | `var(--c-font-weight-500)` | `font-weight` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-statistic-decimal-font-size: inherit;
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
