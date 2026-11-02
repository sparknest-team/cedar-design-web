---
lang: en-US
permalink: /en/components/calendar/
---

# Calendar

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Views and date presentation

### Modes

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `mode` | Mode | Modes |
| `modes` | Displayed mode | Modes |
| `day-start-of-week` | First day of the week | Week Options |
| `is-week` | Whether to show week numbers | Week Options |
<!-- demo-config-notes:end -->


- `mode`: Mode
- `modes`: Displayed mode

<demo src="./__demos__/modes.vue"></demo>

### Week Options

Preview configuration: `:day-start-of-week="mondayFirst ? 1 : 0"`, `:is-week="showWeek"`.

<demo src="./__demos__/week-options.vue"></demo>

## Interaction and customization

### Controlled

<demo src="./__demos__/controlled.vue"></demo>

### Custom Cell

<demo src="./__demos__/custom-cell.vue"></demo>

### Custom Header

<demo src="./__demos__/custom-header.vue"></demo>

## API

### `<calendar>` Props

| Parameter | Description | Type | Default |
| ------------------------- | -------------------- | ----------------------- | :-----------------: |
| model-value **(v-model)** | Bound value | `date` | `-` |
| default-value | Default value (uncontrolled state) | `date` | `-` |
| mode | Mode | `'month' \| 'year'` | `-` |
| default-mode | Default Mode | `'month' \| 'year'` | `'month'` |
| modes | Displayed mode | `('month' \| 'year')[]` | `['month', 'year']` |
| day-start-of-week | First day of the week | `0 \| 1` | `0` |
| is-week | Whether to show week numbers | `boolean` | `false` |

### `<calendar>` Events

| Event | Description | Arguments |
| ------------ | -------------------- | ------------ |
| change | Emitted when the selected date changes | date: `Date` |
| panel-change | Emitted when the displayed date panel changes | date: `Date` |

### `<calendar>` Slots

| Slot | Description | Arguments | Version |
| ------- | :--------------: | --------------------------------------------------- | :----- |
| header | Custom header content | year: `number`<br>month: `number` | 2.53.0 |
| default | Custom cell content | year: `number`<br>month: `number`<br>date: `number` | 2.53.0 |

### Type definitions

The component exports the following types

```ts
import type { CalendarInstance } from "@cedar-design/ui";
```
