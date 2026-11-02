---
lang: en-US
permalink: /en/components/carousel/
---

# Carousel

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Direction and layout

### Vertical

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `slides-per-view` | Visible count; auto uses item size | Multi Slides, Centered Slides, Auto Sized |
| `space-between` | Item gap; numbers/numeric strings are px | Multi Slides, Centered Slides, Auto Sized |
| `draggable` | Mouse dragging, independent of touch | Multi Slides, Auto Sized |
| `centered-slides` | Center active slide | centered-slides、auto-sized |
| `orientation` | Horizontal/vertical axis of carousel sliding, default horizontal; does not determine indicator position | Vertical |
| `model-value` | Controlled one-based slide number | Multi Slides |
<!-- demo-config-notes:end -->


- `orientation`: Controls the content direction.

<demo src="./__demos__/vertical.vue"></demo>

### Multi Slides

Preview configuration: `:slides-per-view="2.5"`, `:space-between="10"`, `:model-value="current"`, `:loop="loop"`.

<demo src="./__demos__/multi-slides.vue"></demo>

### Centered Slides

Preview configuration: `:slides-per-view="1.5"`, `:space-between="10"`, `centered-slides`.

<demo src="./__demos__/centered-slides.vue"></demo>

### Auto Sized

- `height`: Constrains the component height.

<demo src="./__demos__/auto-sized.vue"></demo>

## Navigation and effects

### Navigation

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `show-arrow` | Arrow visibility | Navigation |
| `indicator-type` | Indicator appearance | Indicator style and position |
| `indicator-position` | Indicator edge or outer region of the carousel container, default bottom. Not a trigger-relative popup placement | Indicator style and position |
| `effect` | Effect; all supported by both libraries | Transition effects |
<!-- demo-config-notes:end -->


Preview configuration: `show-arrow="always"`, `show-arrow="hover"`.

<demo src="./__demos__/navigation.vue"></demo>

### Indicator style and position

All indicator presets use the same three local slides and active-slide model. Click an indicator or a navigation arrow in any specimen: every specimen changes to the same slide. The first group compares dot, line and slider; the second compares top and outer positions. The grid stacks on narrow screens.

<demo src="./__demos__/indicator-comparison.vue"></demo>

### Transition effects

Change adjacent slides to compare fade, card and slide effects independently of autoplay and input methods.

<demo src="./__demos__/effect-comparison.vue"></demo>

### Custom Indicator

<demo src="./__demos__/custom-indicator.vue"></demo>

## Playback and interaction

### Forbid Loop

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `height` | Container height; numbers are px | Autoplay, Controlled, Interactive Content |
| `keyboard` | Scoped arrow/Home/End navigation | Keyboard, Controlled, Interactive Content |
| `auto-play` | Autoplay configuration | Autoplay, Auto Play Hover |
| `draggable` | Mouse dragging, independent of touch | controlled、interactive-content |
| `loop` | Loop without duplicating instances | Forbid Loop |
| `trigger` | Indicator trigger | Trigger |
<!-- demo-config-notes:end -->


Preview configuration: `:loop="false"`.

<demo src="./__demos__/forbid-loop.vue"></demo>

### Autoplay

- `height`: Constrains the component height.

<demo src="./__demos__/autoplay.vue"></demo>

### Auto Play Hover

Preview configuration: `:auto-play="{ interval: 2000, hoverToPause: true }"`.

<demo src="./__demos__/auto-play-hover.vue"></demo>

### Trigger

Preview configuration: `trigger="hover"`.

<demo src="./__demos__/trigger.vue"></demo>

### Mousewheel

Preview configuration: `mousewheel`.

<demo src="./__demos__/mousewheel.vue"></demo>

### Keyboard

Preview configuration: `keyboard`.

<demo src="./__demos__/keyboard.vue"></demo>

### Change Event

<demo src="./__demos__/change-event.vue"></demo>

### Controlled

- `height`: Constrains the component height.

<demo src="./__demos__/controlled.vue"></demo>

### Interactive Content

- `height`: Constrains the component height.

<demo src="./__demos__/interactive-content.vue"></demo>

## Lifecycle

### Scheduler Lifecycle

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `auto-play` | Autoplay configuration | Scheduler Lifecycle |
| `move-speed` | Explicit duration in milliseconds | Scheduler Lifecycle |
| `height` | Container height; numbers are px | Scheduler Lifecycle |
| `keyboard` | Scoped arrow/Home/End navigation | Scheduler Lifecycle |
| `mousewheel` | Wheel navigation | Scheduler Lifecycle |
<!-- demo-config-notes:end -->


- `height`: Constrains the component height.

<demo src="./__demos__/scheduler-lifecycle.vue"></demo>

## API

### Value and default value

Use ordinary `v-model`. `modelValue` is the current slide number, starting at 1. `defaultValue` initializes uncontrolled state only on creation; later changes do not reset it. An explicit bound value takes precedence. Initialization does not emit `update:modelValue`.

### Carousel Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `model-value` | Controlled one-based slide number | `number` | `undefined` |
| `default-value` | Uncontrolled initial index | `number` | `1` |
| `loop` | Loop without duplicating instances | `boolean` | `true` |
| `auto-play` | Autoplay configuration | `boolean \| number \| CarouselAutoPlayConfig` | `false` |
| `move-speed` | Explicit duration in milliseconds | `number` | `undefined (token)` |
| `trigger` | Indicator trigger | `click \| hover` | `click` |
| `orientation` | Horizontal/vertical axis of carousel sliding, default horizontal; does not determine indicator position | `horizontal \| vertical` | `horizontal` |
| `show-arrow` | Arrow visibility | `always \| hover \| never` | `always` |
| `arrow-class` | Additional arrow class | `string` | `undefined` |
| `indicator` | Show indicators | `boolean` | `true` |
| `indicator-type` | Indicator appearance | `dot \| line \| slider` | `dot` |
| `indicator-position` | Indicator edge or outer region of the carousel container, default bottom. Not a trigger-relative popup placement | `bottom \| top \| left \| right \| outer` | `bottom` |
| `indicator-class` | Additional indicator class | `string` | `undefined` |
| `indicator-color` | Custom indicator background | `string` | `undefined` |
| `height` | Container height; numbers are px | `number \| string` | `undefined` |
| `transition-timing-function` | Explicit timing function | `string` | `undefined (token)` |
| `touchable` | Touch dragging | `boolean` | `true` |
| `draggable` | Mouse dragging, independent of touch | `boolean` | `false` |
| `mousewheel` | Wheel navigation | `boolean` | `false` |
| `keyboard` | Scoped arrow/Home/End navigation | `boolean` | `false` |
| `slides-per-view` | Visible count; auto uses item size | `number \| auto` | `1` |
| `space-between` | Item gap; numbers/numeric strings are px | `number \| string` | `0` |
| `effect` | Effect; all supported by both libraries | `slide \| fade \| card` | `slide` |
| `centered-slides` | Center active slide | `boolean` | `false` |
| `aria-label` | Carousel accessible name | `string` | Locale |
| `previous-button-aria-label` | Previous button accessible name | `string` | Locale |
| `next-button-aria-label` | Next button accessible name | `string` | Locale |

### Model and interaction
Public slide numbers start at 1. Controlled actions emit update:model-value, then change(slideNumber, previousSlideNumber, isManual), and do not move until the parent accepts current. External assignments do not emit change. Method option event:false suppresses only change, not the model proposal. isManual is true for user actions and false for autoplay.

loop moves existing children across boundaries without cloning component instances. Without looping or centering, the final viewport is clamped to avoid empty space; selection can move within the final visible group without moving the track. Partly visible slides remain accessible; fully offscreen slides are inert. fade displays one slide. auto uses explicit CarouselItem width horizontally or height vertically; vertical mode requires a container height. Only CarouselItem children, including those inside Vue Fragments, count as slides; comments and ordinary elements do not.

auto-play=true uses 3000ms and pauses on hover; a number sets milliseconds without hover pausing; an object configures interval/hoverToPause. Focus within, dragging, hidden documents/ancestors and KeepAlive deactivation always pause playback. Reduced-motion preferences are respected. Interactive children such as inputs/buttons keep native behavior; mark custom interactive areas with data-carousel-no-drag. show-arrow=hover also shows arrows on keyboard focus.

### Events
| Event | Arguments |
| --- | --- |
| update:model-value | slideNumber: number |
| change | slideNumber: number, previousSlideNumber: number, isManual: boolean |

### Slots
| Slot | Arguments |
| --- | --- |
| default | CarouselItem |
| prev / next / indicator | { slideNumber, length, hovering, prev, next, to, resize } |

### Methods
| Method | Signature |
| --- | --- |
| prev / next | (options?: CarouselToOptions) => void |
| to | (slideNumber: number, options?: CarouselToOptions) => void |
| resize | () => void |

CarouselItem has no own props, events or methods. Its default slot supplies slide content.

### Types
CarouselProps, CarouselItemProps, CarouselInstance, CarouselItemInstance, CarouselEmits, CarouselSlots, CarouselItemSlots, CarouselExpose, CarouselSlotScope, CarouselToOptions, CarouselChangeData, CarouselOrientation, CarouselEffect, CarouselAutoPlayConfig, CarouselArrowType, CarouselIndicatorType, CarouselIndicatorPosition, CarouselTriggerEvent.

### Style variables

| Token | Default |
| --- | --- |
| `--c-carousel-indicator-dot-size` | `8px` |
| `--c-carousel-indicator-position` | `var(--c-sys-space-4)` |
| `--c-carousel-indicator-gap` | `var(--c-sys-space-3)` |
| `--c-carousel-indicator-color-default` | `rgb(255 255 255 / 35%)` |
| `--c-carousel-indicator-color-active` | `var(--c-sys-color-content-on-dark)` |
| `--c-carousel-indicator-outer-margin-bottom` | `var(--c-sys-space-8)` |
| `--c-carousel-indicator-line-width` | `20px` |
| `--c-carousel-indicator-line-height` | `3px` |
| `--c-carousel-indicator-line-border-radius` | `var(--c-sys-radius-sm)` |
| `--c-carousel-arrow-size` | `var(--c-sys-control-height-md)` |
| `--c-carousel-arrow-font-size` | `var(--c-sys-font-size-xl)` |
| `--c-carousel-arrow-margin` | `var(--c-sys-space-4)` |
| `--c-carousel-arrow-color` | `var(--c-sys-color-content-on-dark)` |
| `--c-carousel-arrow-background` | `rgb(0 0 0 / 35%)` |
| `--c-carousel-arrow-background-hover` | `rgb(0 0 0 / 55%)` |
| `--c-carousel-arrow-disabled-opacity` | `0.4` |
| `--c-carousel-navigation-z-index` | `10` |
| `--c-carousel-transition-duration` | `var(--c-sys-motion-duration-standard)` |
| `--c-carousel-transition-timing-function` | `ease` |
| `--c-carousel-fade-duration` | `var(--c-sys-motion-duration-standard)` |
| `--c-carousel-card-duration` | `var(--c-sys-motion-duration-standard)` |
| `--c-carousel-card-scale` | `0.85` |
| `--c-carousel-card-opacity` | `0.6` |
| `--c-carousel-focus-width` | `2px` |
| `--c-carousel-focus-offset` | `2px` |
| `--c-carousel-focus-color` | `var(--c-sys-color-content-brand)` |

### Loop transition boundaries

Each slide always has one component instance. Ordinary previous/next navigation recycles positions after the departing slide exits. Multi-slide or centered jumps that would require one slide in two positions settle immediately without animation, cloning interactive content or queuing unlimited transitions. Fewer items than visible slides are not cloned to fill space. Accessible names follow global Locale; explicit label props take precedence.

Native root listeners such as `keydown`, `mouseenter`, `mouseleave`, `focusin` and `focusout` run alongside internal navigation and autoplay pause handling. Native `.once` listeners fire once for the root element lifetime.
