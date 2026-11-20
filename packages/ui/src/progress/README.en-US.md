---
lang: en-US
permalink: /en/components/progress/
---

# Progress

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `:percent="20"`, `:percent="30"`.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Progress sizes and states

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `size` | xs/sm/md/lg/xl or CSS length; line thickness / circle diameter | Progress sizes and states |
| `percent` | Decimal 0–100; numeric strings supported; invalid values become zero, out-of-range values clamp | Progress sizes and states |
| `mode` | Line or circle | Progress sizes and states |
| `stroke-width` | Overrides thickness, numbers in px | Progress sizes and states |
| `status` | default/primary/secondary/tertiary/info/success/warning/danger; default becomes success at 100 unless indeterminate | Progress sizes and states |
<!-- demo-config-notes:end -->


Compare sizes and semantic states independently of circular, stepped and indeterminate models.

<demo src="./__demos__/appearance-comparison.en-US.vue"></demo>

## Content and presentation

### Circle

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `percent` | Decimal 0–100; numeric strings supported; invalid values become zero, out-of-range values clamp | Circle, Step, Loop |
| `mode` | Line or circle | Circle, Loop, Advanced |
| `status` | default/primary/secondary/tertiary/info/success/warning/danger; default becomes success at 100 unless indeterminate | Circle, Step |
| `steps` | Line segments, floored and clamped to 0–1000; ignored when indeterminate | Step |
| `size` | xs/sm/md/lg/xl or CSS length; line thickness / circle diameter | Step |
| `indeterminate` | Unknown progress; omits aria-valuenow | Loop |
<!-- demo-config-notes:end -->


- `status`: Selects the semantic state.

<demo src="./__demos__/circle.vue"></demo>

### Step

- `status`: Selects the semantic state.
- `size`: Controls the component size.

<demo src="./__demos__/step.vue"></demo>

### Loop

Preview configuration: `indeterminate`, `aria-label="Loading"`, `mode="circle"`, `:percent="60"`.

<demo src="./__demos__/loop.vue"></demo>

### Advanced

- `color`: Overrides the color.

<demo src="./__demos__/advanced.vue"></demo>

## Reading direction

Linear progress grows from inline start, and active/indeterminate animation follows reading direction. Percentages, numeric values and ring angles do not reverse. Reduced-motion preferences still apply.

## Usage notes

### Configuration

Determinate circular success/danger states show completion/failure icons, including xs. The text slot overrides these; ARIA numeric values remain.

### Layout updates

Circular `stroke-width` is resolved in the component CSS context, including `1em`, `calc()`, `var()` and percentages; a percentage is relative to the circle diameter. Font, variable and size changes update the geometry, and stroke width is capped at 99% of the diameter.

## API

### Progress Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| mode | Line or circle | `line \| circle` | `line` |
| percent | Decimal 0–100; numeric strings supported; invalid values become zero, out-of-range values clamp | `number \| string` | `0` |
| size | xs/sm/md/lg/xl or CSS length; line thickness / circle diameter | `ProgressSize`<br>`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number \| string` | `md` |
| stroke-width | Overrides thickness, numbers in px | `number \| string` | Follows size |
| steps | Line segments, floored and clamped to 0–1000; ignored when indeterminate | `number` | `0` |
| status | default/primary/secondary/tertiary/info/success/warning/danger; default becomes success at 100 unless indeterminate | `ProgressStatus`<br>`'default' \| 'success' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'warning' \| 'danger'` | `default` |
| color | Solid or gradient stops; overrides status | `string \| Record<string, string>` | — |
| track-color | Background track color | `string` | — |
| buffer-color | Remaining line track decoration, not a second progress value | `ProgressColor` | — |
| track | Show track and buffer decoration | `boolean` | `true` |
| show-text | Show text; xs circle hides text | `boolean` | `true` |
| text-class | Text container class | `string` | — |
| rotate | Clockwise angle from twelve o'clock | `number` | `0` |
| animation | Determinate continuous line shimmer | `boolean` | `false` |
| indeterminate | Unknown progress; omits aria-valuenow | `boolean` | `false` |

### Size semantics

| size | xs | sm | md | lg | xl |
| --- | --- | --- | --- | --- | --- |
| Linear thickness / default circular stroke in px | 2 | 3 | 4 | 6 | 8 |
| Circular diameter in px | 16 | 48 | 64 | 80 | 96 |

`size=12` / `size="12"` means 12px; `size="2rem"`, `"50%"` and `"calc(100% - 2px)"` retain CSS lengths. Custom linear size controls thickness; custom circular size controls diameter. stroke-width always takes precedence for thickness. Invalid/nonpositive lengths fall back to md. Percentage circular diameters require a definite parent width. All five presets are implemented; xs circular progress hides text. Cedar inherits omitted size from ConfigProvider; Maple defaults to md.

### Progress Slots

| Slot | Prop | Description |
| --- | --- | --- |
| text | `{ percent: number }` | Takes precedence over default |
| default | `{ percent: number }` | Custom display text |

Indeterminate progress shows an ellipsis by default; use the text slot for business text. The component does not mutate values or emit updates. Provide `aria-label` for the business task. All built-in animations respect reduced-motion settings.

## Types

Exports `ProgressProps`, `ProgressInstance`, `ProgressSize`, `ProgressMode`, `ProgressStatus`, `ProgressColor` and runtime `progressProps`.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-progress-animation-duration` | `1.5s` | `animation`, `animation-delay` |
| `--c-progress-danger-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-progress-default-color` | `var(--c-sys-color-action-primary)` | `color` |
| `--c-progress-font-size` | `var(--c-sys-font-size-sm)` | `font-size` |
| `--c-progress-info-color` | `var(--c-sys-color-content-info)` | `color` |
| `--c-progress-line-border-radius` | `9999px` | `border-radius` |
| `--c-progress-primary-color` | `var(--c-sys-color-action-primary)` | `color` |
| `--c-progress-secondary-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-progress-steps-gap` | `var(--c-sys-space-2)` | `gap` |
| `--c-progress-success-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-progress-tertiary-color` | `var(--c-sys-color-content-tertiary)` | `color` |
| `--c-progress-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-progress-text-gap` | `var(--c-sys-space-4)` | `gap` |
| `--c-progress-track-color` | `var(--c-sys-color-state-hover)` | `background`, `stroke` |
| `--c-progress-transition-duration` | `var(--c-sys-motion-duration-standard)` | `transition` |
| `--c-progress-warning-color` | `var(--c-sys-color-content-warning)` | `color` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-progress-danger-color: var(--c-sys-color-content-danger);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
