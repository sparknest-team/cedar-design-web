---
lang: en-US
permalink: /en/components/countdown/
---

# Countdown

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `:time="2 * 60 * 60 * 1000"`.

<demo src="./__demos__/basic.vue"></demo>

## Content and presentation

### Time format and custom content

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `time` | Countdown duration in milliseconds | Time format and custom content, Statistic |
| `format` | Display format | Time format and custom content, Statistic |
<!-- demo-config-notes:end -->


Compare unit formats, milliseconds and custom time fragments, independently of playback controls.

<demo src="./__demos__/format-comparison.en-US.vue"></demo>

### Statistic

- `format`: Controls the displayed format.

<demo src="./__demos__/statistic.vue"></demo>

## Interaction and control

### Manual

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `time` | Countdown duration in milliseconds | Manual |
| `auto-start` | Whether to auto start count down | Manual |
| `format` | Display format | Manual |
<!-- demo-config-notes:end -->


- `format`: Controls the displayed format.

<demo src="./__demos__/manual.vue"></demo>

## API

`time` is a duration rather than an absolute deadline; the remaining duration freezes while paused or deactivated by KeepAlive. The default slot receives the five fields days, hours, minutes, seconds, and milliseconds directly. `change` fires on reset and animation frames and may be frequent. `auto-start` is read on mount or reset; changing it alone does not start or pause. Repeated format tokens are all replaced. Omitted larger units accumulate into smaller units, so `SSS` alone can exceed three digits.

Pause and deactivation synchronize the displayed and slot values with the frozen remaining time without emitting another `change`. If the deadline has passed before the next frame, pausing displays zero and resuming emits `end` once.

### Countdown Props

| Prop | Description | Type | Default |
| ------------- | ------------------------------------------ | -------------------- | ------------ |
| `time` | Countdown duration in milliseconds | `number \| string` | `0` |
| `format` | Display format | `string` | `'HH:mm:ss'` |
| `auto-start` | Whether to auto start count down | `boolean` | `true` |

### format placeholders

| Format | Description |
| ----- | ------------- |
| `DD` | Day |
| `HH` | Hour |
| `mm` | Minute |
| `ss` | Seconds |
| `S` | Milliseconds: 1 digit |
| `SS` | Milliseconds: 2 digits |
| `SSS` | Milliseconds: 3 digits |

### Countdown Events

| Event | Description | Arguments |
| -------- | ---------------- | --------------------- |
| `change` | Emitted after countdown changed | `timeData: TimeData` |
| `end` | Emitted after countdown ended | `-` |

### Countdown Slots

| Slot | Description | Prop |
| --------- | ---------- | --------------------- |
| `default` | Custom content | `timeData: TimeData` |

### Countdown Methods

| Method | Description | Arguments | Returns |
| ------- | ----------------------------------------------------------------- | ---- | ------ |
| `start` | Start countdown | `-` | `-` |
| `pause` | Pause countdown | `-` | `-` |
| `reset` | Reset the countdown; when `auto-start` is `true`, it starts automatically after reset | `-` | `-` |

## Types

### TimeData

| Name | Description | Type |
| -------------- | -------- | -------- |
| `days` | Remain days | `number` |
| `hours` | Remain hours | `number` |
| `minutes` | Remain minutes | `number` |
| `seconds` | Remaining seconds | `number` |
| `milliseconds` | Remain milliseconds | `number` |

The component exports the following types

```ts
import type { CountdownProps, CountdownInstance, TimeData } from '@cedar-design/ui-vue'
```

## Usage notes



SSR renders the initial formatted time. Changing format while paused updates the display. The finish event fires once per round; reset starts another round. Unmounting cleans up animation frames.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-countdown-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-countdown-text-font-size` | `var(--c-font-size-lg)` | `font-size` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-countdown-text-color: var(--c-sys-color-content-primary);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
