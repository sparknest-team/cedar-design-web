---
lang: en-US
permalink: /en/components/count-to/
---

# Count To

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `:to="123456"`.

<demo src="./__demos__/basic.vue"></demo>

## Content and presentation

### Precision, duration and easing

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `to` | Target value | Precision, duration and easing |
| `precision` | Decimal precision | Precision, duration and easing |
| `duration` | Animation duration in milliseconds | Precision, duration and easing |
| `timing-function` | Animation easing function | Precision, duration and easing |
<!-- demo-config-notes:end -->


Compare final precision and the effect of duration and easing on number transitions. Manual playback remains separate.

<demo src="./__demos__/number-format-comparison.vue"></demo>

## Customization and slots

### Custom

Preview configuration: `:to="123456"`.

<demo src="./__demos__/custom.vue"></demo>

## Interaction and control

### Manual

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `to` | Target value | Manual |
| `auto-start` | Whether to start animation automatically | Manual |
<!-- demo-config-notes:end -->


Preview configuration: `:to="123456"`, `:auto-start="false"`.

<demo src="./__demos__/manual.vue"></demo>

## API

### CountTo Props

| Prop | Description | Type | Default |
| ----------------- | ------------------------ | ------------------------ | -------- |
| from | Start value | _number \| string_ | `0` |
| to | Target value | _number \| string_ | `0` |
| duration | Animation duration in milliseconds | _number \| string_ | `2000` |
| precision | Decimal precision | _number \| string_ | `0` |
| auto-start | Whether to start animation automatically | _boolean_ | `true` |
| timing-function | Animation easing function | _(v: number) => number_ | `-` |

### CountTo Events

| Event | Description | Callback arguments |
| ------ | -------------- | -------- |
| end | Triggered when animation ends | `-` |

### CountTo Slots

| Slot | Description | Arguments |
| ------- | ---------- | ----------------- |
| default | Custom content | `value: number` |

### CountTo Methods

| Method | Description | Arguments | Returns |
| ------ | ---------------------------------------------------------------- | ---- | ------ |
| start | Start the animation | `-` | `-` |
| pause | Pause the animation | `-` | `-` |
| reset | Reset the animation; when `auto-start` is `true`, playback starts automatically after reset | `-` | `-` |

## Type definitions

The component exports the following types

```ts
import type { CountToProps, CountToInstance } from '@cedar-design/ui'
```

### Style variables

| Variable | Default |
| ----------------------------- | -------------------------- |
| `--c-count-to-text-color` | `var(--c-sys-color-content-primary)` |
| `--c-count-to-text-font-size` | `var(--c-font-size-lg)` |

## Shared implementation and platform boundaries

Each platform maintains a complete local implementation. They do not import a common core or share component instances or reactive state. Changes must update both implementations. Component bodies, props, key styles and paired tests have read-only source consistency checks; theme tokens and installation entries remain local to each library.

Animation pauses on unmount and KeepAlive deactivation and resumes on reactivation. Each instance keeps independent values and animation state.
