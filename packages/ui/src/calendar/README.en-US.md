---
lang: en-US
permalink: /en/components/calendar/
---

# Calendar

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

`allow-select=false` blocks date selection and disables the Today button. Previous and next navigation remain available without changing the selected value.

`day-start-of-week`, `is-week` and `modes` update reactively. With controlled `mode`, the built-in switch emits `update:mode` and the parent decides whether to accept it; `default-mode` only initializes uncontrolled mode.

`panel` uses compact views: the year view shows month choices and the month view shows compact dates. `panel-width` sets a reactive width in pixels; `panel-today-btn` shows a footer Today button, whose selection respects `allow-select`.

Use Tab to enter the date area, arrow keys to move focus, and Enter or Space to select. Moving focus does not change the selection. The compact year panel moves by month; browsing remains available when selection is disabled.

The default slot receives `year`, `month`, and `date` for dates in month and full year views. The compact year panel displays month choices and does not render date slots. Selecting a date or Today emits `change`, `update:modelValue`, and `panel-change`; navigating pages or changing the displayed year or month emits `panel-change`. A controlled mode switch emits `update:mode`.

When the timestamp of controlled `model-value` changes, the view moves to that date. Browsing or passing the same timestamp again does not reset the view. External updates do not emit an additional `panel-change`.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.en-US.vue"></demo>

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

<demo src="./__demos__/controlled.en-US.vue"></demo>

### Custom Cell

<demo src="./__demos__/custom-cell.vue"></demo>

### Custom Header

<demo src="./__demos__/custom-header.vue"></demo>

## API

### Calendar Props

| Parameter | Description | Type | Default |
| ------------------------- | -------------------- | ----------------------- | :-----------------: |
| model-value **(v-model)** | Bound value | `date` | `-` |
| default-value | Default value (uncontrolled state) | `date` | `-` |
| allow-select | Whether date selection is allowed | `boolean` | `true` |
| panel | Whether to use the compact panel | `boolean` | `false` |
| panel-width | Compact panel width in pixels | `number` | `undefined` |
| panel-today-btn | Whether to show the panel footer Today button | `boolean` | `false` |
| mode | Mode | `'month' \| 'year'` | `-` |
| default-mode | Default Mode | `'month' \| 'year'` | `'month'` |
| modes | Displayed mode | `('month' \| 'year')[]` | `['month', 'year']` |
| day-start-of-week | First day of the week | `0 \| 1` | `0` |
| is-week | Whether to show week numbers | `boolean` | `false` |

### Calendar Events

| Event | Description | Arguments |
| ------------ | -------------------- | ------------ |
| change | Emitted when the selected date changes | date: `Date` |
| update:mode | Request a display mode change | mode: `'month' \| 'year'` |
| panel-change | Emitted when the displayed date panel changes | date: `Date` |

### Calendar Slots

| Slot | Description | Prop | Version |
| ------- | :--------------: | --------------------------------------------------- | :----- |
| header | Custom header content | year: `number`<br>month: `number` | 2.53.0 |
| default | Custom cell content | year: `number`<br>month: `number`<br>date: `number` | 2.53.0 |

## Types

The component exports the following types

```ts
import type { CalendarInstance } from "@cedar-design/ui-vue";
```

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-calendar-bg-cell-disabled` | `var(--c-color-fill-1)` | `background-color` |
| `--c-calendar-bg-cell-hover-in-range` | `var(--c-color-primary-light-1)` | `background-color` |
| `--c-calendar-bg-cell-hover-range-boundary` | `var(--c-color-primary-light-2)` | `background-color` |
| `--c-calendar-bg-cell-in-range` | `var(--c-color-primary-light-1)` | `background-color` |
| `--c-calendar-bg-cell-range-boundary` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-calendar-bg-circle-selected` | `rgb(var(--c-primary-6))` | `background-color`, `border` |
| `--c-calendar-bg-switch-icon` | `var(--c-color-bg-5)` | `background-color` |
| `--c-calendar-bg-switch-icon-hover` | `var(--c-color-fill-3)` | `background-color` |
| `--c-calendar-border-color` | `var(--c-color-neutral-3)` | `border`, `border-bottom`, `border-left`, `border-right`, `border-top` |
| `--c-calendar-box-shadow` | `var(--c-color-primary-light-3)` | `box-shadow` |
| `--c-calendar-cell-text-in-view` | `var(--c-color-text-1)` | `color` |
| `--c-calendar-cell-text-not-in-view` | `var(--c-color-text-4)` | `color` |
| `--c-calendar-cell-text-selected` | `var(--c-color-white)` | `color` |
| `--c-calendar-cell-today-border-color` | `var(--c-sys-color-action-primary)` | `border` |
| `--c-calendar-date-circle-border-radius` | `var(--c-border-radius-circle)` | `border-radius` |
| `--c-calendar-date-circle-size` | `var(--c-size-7)` | `height`, `width` |
| `--c-calendar-date-content-height` | `70px` | `height` |
| `--c-calendar-date-padding` | `var(--c-spacing-5)` | `padding` |
| `--c-calendar-date-value-font-size` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-calendar-date-value-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-calendar-header-height` | `var(--c-size-7)` | `height`, `line-height` |
| `--c-calendar-header-icon-border-radius` | `var(--c-border-radius-circle)` | `border-radius` |
| `--c-calendar-header-icon-box-shadow` | `0 0 0 var(--c-spacing-1) var(--c-calendar-box-shadow)` | `box-shadow` |
| `--c-calendar-header-icon-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-calendar-header-icon-margin` | `var(--c-spacing-6)` | `margin`, `margin-left`, `margin-right` |
| `--c-calendar-header-icon-size` | `var(--c-size-7)` | `height`, `line-height`, `width` |
| `--c-calendar-header-padding-horizontal` | `var(--c-spacing-9)` | `padding` |
| `--c-calendar-header-padding-vertical` | `var(--c-spacing-9)` | `padding` |
| `--c-calendar-header-value-font-size` | `var(--c-font-size-title-2)` | `font-size` |
| `--c-calendar-header-value-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-calendar-header-value-month-margin` | `var(--c-spacing-10)` | `margin-left`, `margin-right` |
| `--c-calendar-header-value-month-width` | `var(--c-size-19)` | `width` |
| `--c-calendar-header-value-year-margin` | `var(--c-spacing-4)` | `margin-left`, `margin-right` |
| `--c-calendar-header-value-year-width` | `var(--c-size-25)` | `width` |
| `--c-calendar-mode-year-body-padding` | `var(--c-spacing-6)` | `padding` |
| `--c-calendar-mode-year-min-width` | `820px` | `min-width` |
| `--c-calendar-month-cell-date-circle-size` | `22px` | `height`, `width` |
| `--c-calendar-month-cell-date-padding` | `var(--c-spacing-1)` | `padding` |
| `--c-calendar-month-cell-date-value-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-calendar-month-cell-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-calendar-month-cell-week-list-item-padding` | `var(--c-spacing-3)` | `padding` |
| `--c-calendar-month-row-height` | `var(--c-size-25)` | `height` |
| `--c-calendar-month-title-font-size` | `var(--c-font-size-title-1)` | `font-size` |
| `--c-calendar-month-title-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-calendar-month-title-padding-horizontal` | `var(--c-spacing-3)` | `padding` |
| `--c-calendar-month-title-padding-vertical` | `var(--c-spacing-5)` | `padding` |
| `--c-calendar-month-with-days-row-height` | `26px` | `height` |
| `--c-calendar-panel-bg-cell-hover` | `var(--c-color-primary-light-1)` | `background-color` |
| `--c-calendar-panel-bg-cell-selected` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-calendar-panel-body-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-calendar-panel-body-padding-vertical` | `14px` | `padding` |
| `--c-calendar-panel-cell-boundary-border-radius` | `calc((var(--c-calendar-panel-date-cell-circle-height) + var(--c-calendar-panel-date-cell-padding-vertical) * 2) / 2)` | `border-radius` |
| `--c-calendar-panel-cell-padding-vertical` | `var(--c-spacing-1)` | `padding` |
| `--c-calendar-panel-cell-selected-border-radius` | `var(--c-border-radius-circle)` | `border-radius` |
| `--c-calendar-panel-color-current-time-dot` | `rgb(var(--c-primary-6))` | `background-color` |
| `--c-calendar-panel-date-cell-circle-height` | `var(--c-size-6)` | `border-radius`, `height`, `line-height`, `min-width` |
| `--c-calendar-panel-date-cell-padding-vertical` | `var(--c-spacing-2)` | `border-radius`, `padding` |
| `--c-calendar-panel-date-value-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-calendar-panel-footer-height` | `38px` | `height`, `line-height` |
| `--c-calendar-panel-header-icon-margin` | `var(--c-spacing-1)` | `margin-left`, `margin-right` |
| `--c-calendar-panel-header-icon-size` | `var(--c-size-6)` | `height`, `line-height`, `width` |
| `--c-calendar-panel-header-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-calendar-panel-header-padding-vertical` | `var(--c-spacing-4)` | `padding` |
| `--c-calendar-panel-header-value-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-calendar-panel-header-value-line-height` | `var(--c-size-6)` | `line-height` |
| `--c-calendar-panel-text-color-cell-hover` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-calendar-panel-text-color-cell-selected` | `var(--c-color-white)` | `color` |
| `--c-calendar-panel-today-dot-offset` | `var(--c-spacing-1)` | `margin-left` |
| `--c-calendar-panel-today-dot-size` | `var(--c-spacing-2)` | `height`, `width` |
| `--c-calendar-panel-week-list-item-font-weight` | `var(--c-font-weight-400)` | `font-weight` |
| `--c-calendar-panel-week-list-item-height` | `var(--c-size-8)` | `height`, `line-height` |
| `--c-calendar-panel-year-cell-circle-height` | `var(--c-size-6)` | `border-radius` |
| `--c-calendar-panel-year-cell-padding-vertical` | `var(--c-spacing-2)` | `padding` |
| `--c-calendar-panel-year-date-value-border-radius` | `var(--c-spacing-6)` | `border-radius` |
| `--c-calendar-panel-year-mode-cell-padding-vertical` | `var(--c-spacing-2)` | `padding` |
| `--c-calendar-switch-icon` | `var(--c-color-text-2)` | `color` |
| `--c-calendar-text-color-cell-hover-range-boundary` | `var(--c-color-text-1)` | `color` |
| `--c-calendar-text-color-cell-range-boundary` | `var(--c-color-white)` | `color` |
| `--c-calendar-text-title-color` | `var(--c-color-text-1)` | `color` |
| `--c-calendar-week-list-item-padding-horizontal` | `var(--c-spacing-7)` | `padding` |
| `--c-calendar-week-list-item-padding-vertical` | `var(--c-spacing-8)` | `padding` |
| `--c-calendar-week-list-text-color` | `#7d7d7f` | `color` |
| `--c-calendar-year-cell-padding-horizontal` | `var(--c-spacing-4)` | `padding` |
| `--c-calendar-year-cell-padding-vertical` | `var(--c-spacing-8)` | `padding` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-calendar-border-color: var(--c-color-neutral-3);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
