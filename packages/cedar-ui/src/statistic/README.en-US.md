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

## API

### `<Statistic>` Props

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

### `<Statistic>` Slots

| Slot | Description | Arguments |
| --------- | ---------------------------------------- | ---- |
| `default` | Custom `value`, used when `value` is not provided | `-` |
| `title` | Title | `-` |
| `prefix` | The prepend icon of alert | `-` |
| `suffix` | Suffix | `-` |
| `extra` | Extra content | `-` |

### Type definitions

The component exports the following types

```ts
import type { StatisticProps } from '@cedar-design/ui'
```

### Style variables

| Variable | Default |
| --- | --- |
| `--c-statistic-title-color` | `var(--c-sys-color-content-secondary)` |
| `--c-statistic-title-font-size` | `var(--c-font-size-body-3)` |
| `--c-statistic-title-margin-bottom` | `var(--c-spacing-4)` |
| `--c-statistic-value-color` | `var(--c-sys-color-content-primary)` |
| `--c-statistic-value-font-size` | `26px` |
| `--c-statistic-value-font-weight` | `var(--c-font-weight-500)` |
| `--c-statistic-decimal-font-size` | `inherit` |
| `--c-statistic-prefix-color` | `var(--c-sys-color-content-secondary)` |
| `--c-statistic-prefix-font-size` | `14px` |
| `--c-statistic-prefix-spacing` | `var(--c-spacing-1)` |
| `--c-statistic-suffix-color` | `var(--c-sys-color-content-secondary)` |
| `--c-statistic-suffix-font-size` | `14px` |
| `--c-statistic-suffix-spacing` | `var(--c-spacing-1)` |
| `--c-statistic-extra-color` | `var(--c-sys-color-content-secondary)` |
| `--c-statistic-extra-font-size` | `var(--c-font-size-body-3)` |
| `--c-statistic-extra-margin-top` | `var(--c-spacing-4)` |

## Shared implementation and platform boundaries

Each platform maintains a complete local implementation. They do not import a common core or share component instances or reactive state. Changes must update both implementations. Component bodies, props, key styles and paired tests have read-only source consistency checks; theme tokens and installation entries remain local to each library.

Placeholder text updates when the default slot appears/disappears. Animation pauses on unmount/KeepAlive deactivation.
