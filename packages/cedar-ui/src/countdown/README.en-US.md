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

<demo src="./__demos__/format-comparison.vue"></demo>

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

| Slot | Description | Arguments |
| --------- | ---------- | --------------------- |
| `default` | Custom content | `timeData: TimeData` |

### TimeData

| Name | Description | Type |
| -------------- | -------- | -------- |
| `days` | Remain days | `number` |
| `hours` | Remain hours | `number` |
| `minutes` | Remain minutes | `number` |
| `seconds` | Remaining seconds | `number` |
| `milliseconds` | Remain milliseconds | `number` |

### Countdown Methods

| Method | Description | Arguments | Returns |
| ------- | ----------------------------------------------------------------- | ---- | ------ |
| `start` | Start countdown | `-` | `-` |
| `pause` | Pause countdown | `-` | `-` |
| `reset` | Reset the countdown; when `auto-start` is `true`, it starts automatically after reset | `-` | `-` |

## Type definitions

The component exports the following types

```ts
import type { CountdownProps, CountdownInstance, TimeData } from '@cedar-design/ui'
```

### Style variables

| Variable | Default |
| ------------------------------- | -------------------------- |
| `--c-countdown-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-countdown-text-font-size` | `var(--c-font-size-lg)` |

## Shared implementation and platform boundaries

Each platform maintains a complete local implementation. They do not import a common core or share component instances or reactive state. Changes must update both implementations. Component bodies, props, key styles and paired tests have read-only source consistency checks; theme tokens and installation entries remain local to each library.

SSR renders the initial formatted time. Changing format while paused updates the display. The finish event fires once per round; reset starts another round. Unmounting cleans up animation frames.
