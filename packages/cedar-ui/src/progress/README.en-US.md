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

<demo src="./__demos__/appearance-comparison.vue"></demo>

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

Linear progress grows from reading start and activity motion follows reading direction. Values and circular angles remain unchanged, and reduced-motion settings still apply.

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| mode | Line or circle | `line \| circle` | `line` |
| percent | Decimal 0–100; numeric strings supported; invalid values become zero, out-of-range values clamp | `number \| string` | `0` |
| size | xs/sm/md/lg/xl or CSS length; line thickness / circle diameter | `ProgressSize` | `md` |
| stroke-width | Overrides thickness, numbers in px | `number \| string` | Follows size |
| steps | Line segments, floored and clamped to 0–1000; ignored when indeterminate | `number` | `0` |
| status | default/primary/secondary/tertiary/info/success/warning/danger; default becomes success at 100 unless indeterminate | `ProgressStatus` | `default` |
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

### Slots

| Slot | Arguments | Description |
| --- | --- | --- |
| text | `{ percent: number }` | Takes precedence over default |
| default | `{ percent: number }` | Custom display text |

Indeterminate progress shows an ellipsis by default; use the text slot for business text. The component does not mutate values or emit updates. Provide `aria-label` for the business task. All built-in animations respect reduced-motion settings.

### Type definitions

Exports `ProgressProps`, `ProgressInstance`, `ProgressSize`, `ProgressMode`, `ProgressStatus`, `ProgressColor` and runtime `progressProps`.

## Style variables

| Variable | Default |
| --- | --- |
| `--c-progress-font-size` | `var(--c-sys-font-size-sm)` |
| `--c-progress-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-progress-track-color` | `var(--c-sys-color-state-hover)` |
| `--c-progress-default-color` | `var(--c-sys-color-content-brand)` |
| `--c-progress-primary-color` | `var(--c-sys-color-content-brand)` |
| `--c-progress-secondary-color` | `var(--c-sys-color-content-secondary)` |
| `--c-progress-tertiary-color` | `var(--c-sys-color-content-tertiary)` |
| `--c-progress-info-color` | `var(--c-sys-color-content-info)` |
| `--c-progress-success-color` | `var(--c-sys-color-content-success)` |
| `--c-progress-warning-color` | `var(--c-sys-color-content-warning)` |
| `--c-progress-danger-color` | `var(--c-sys-color-content-danger)` |
| `--c-progress-line-border-radius` | `9999px` |
| `--c-progress-text-gap` | `var(--c-sys-space-4)` |
| `--c-progress-steps-gap` | `var(--c-sys-space-2)` |
| `--c-progress-transition-duration` | `var(--c-sys-motion-duration-standard)` |
| `--c-progress-animation-duration` | `1.5s` |

Determinate circular success/danger states show completion/failure icons, including xs. The text slot overrides these; ARIA numeric values remain.
