---
lang: en-US
permalink: /en/components/trigger/
---

# Trigger

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `trigger="click"`, `:popup-offset="10"`, `show-arrow`.

<demo src="./__demos__/basic.vue"></demo>

## Layout and arrangement

### Placement

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `trigger` | Trigger modes; may be combined | Placement |
| `placement` | Preferred popup side relative to the trigger, default bottom. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | Placement |
| `popup-offset` | Outward distance along placement's main axis | Placement |
| `show-arrow` | Render a decorative arrow | Placement |
<!-- demo-config-notes:end -->


- `placement`: Chooses the position relative to the trigger.

<demo src="./__demos__/placement.vue"></demo>

## Interaction and control

### Controlled

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `open` | Controlled open state | Controlled |
| `trigger` | Trigger modes; may be combined | Controlled |
| `placement` | Preferred popup side relative to the trigger, default bottom. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | Controlled |
| `popup-offset` | Outward distance along placement's main axis | Controlled |
| `popup-translate` | Screen-axis offset, or per-placement offsets | Controlled |
<!-- demo-config-notes:end -->


- `placement`: Chooses the position relative to the trigger.

<demo src="./__demos__/controlled.vue"></demo>

## API

### `<Trigger>` Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| dir | Reading direction; inherits the source scope when omitted. Physical left/right placements keep their meaning. | `ReadingDirection` (`ltr` / `rtl`) | — |
| open | Controlled open state | `boolean` | `-` |
| default-open | Initial uncontrolled state | `boolean` | `false` |
| trigger | Trigger modes; may be combined | `hover \| click \| focus \| contextMenu \| manual \| TriggerEvent[]` | `hover` |
| disabled | Prevent opening | `boolean` | `false` |
| reference | External reference element; defaults to the first actual element in the default slot | `string \| HTMLElement \| SVGElement` | `-` |
| placement | Preferred popup side relative to the trigger, default bottom. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | `TriggerPlacement` | `bottom` |
| strategy | Positioning strategy | `absolute \| fixed` | `absolute` |
| cover | Cover the reference on the main axis | `boolean` | `false` |
| popup-offset | Outward distance along placement's main axis | `number` | `0` |
| popup-translate | Screen-axis offset, or per-placement offsets | `[number, number] \| Partial<Record<TriggerPlacement, [number, number]>>` | `-` |
| align-point | Use pointer coordinates as a virtual reference | `boolean` | `false` |
| popup-container | Mount container; `false` renders in place | `string \| HTMLElement \| false` | `body` |
| auto-fit-position | Flip and constrain to the viewport when space is insufficient | `boolean` | `true` |
| auto-fit-popup-width | Match popup width to the reference | `boolean` | `false` |
| auto-fit-popup-min-width | Match minimum popup width to the reference | `boolean` | `false` |
| auto-fix-position | Reposition automatically on size changes | `boolean` | `true` |
| update-at-scroll | Reposition while scrolling | `boolean` | `false` |
| scroll-to-close | Close when scrolling exceeds the threshold | `boolean` | `false` |
| scroll-to-close-distance | Close threshold | `number` | `0` |
| show-arrow | Render a decorative arrow | `boolean` | `false` |
| hide-empty | Do not render when content is empty | `boolean` | `false` |
| prevent-focus | Prevent popup mousedown from taking focus | `boolean` | `false` |
| unmount-on-close | Unmount content after the leave transition | `boolean` | `true` |
| animation-name | Vue Transition name | `string` | `trigger-fade` |
| duration | Transition duration | `number \| { enter: number; leave: number }` | `-` |
| auto-fit-transform-origin | Derive transform origin from final placement | `boolean` | `false` |
| opened-class | Class added to the first reference node while open | `ClassName` | `-` |
| popup-class / popup-style | Positioning-layer class/style | `ClassName / CSSProperties` | `-` |
| content-class / content-style | Content-layer class/style | `ClassName / CSSProperties` | `-` |
| arrow-class / arrow-style | Arrow class/style | `ClassName / CSSProperties` | `-` |
| mouse-enter-delay / mouse-leave-delay | Hover open/close delay in ms | `number` | `100 / 100` |
| focus-delay | Focus-open delay in ms | `number` | `0` |
| popup-hover-stay | Keep open when the pointer enters the popup | `boolean` | `true` |
| blur-to-close | Close on blur | `boolean` | `true` |
| close-on-click-reference | Close on another reference click | `boolean` | `true` |
| click-outside-to-close | Close on outside click | `boolean` | `true` |
| esc-to-close | Close on Escape | `boolean` | `true` |
| restore-focus | Restore reference focus after closing is accepted | `boolean` | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:open | Controlled update request from user interaction | `open: boolean` |
| open-change | User-interaction request notification | `open: boolean` |
| open / close | Actual enter/leave begins | `-` |
| opened / closed | Enter/leave transition completes | `-` |
| click-outside | The topmost popup receives an outside click | `event: Event` |
| resize | Reference size changes | `-` |

### Slots

| Slot | Description |
| --- | --- |
| default | Reference node |
| content | Popup content |

### Expose

`open()`、`close()`、`resize()`、`allowClose()`、`getReference()`、`setReference(reference?)`、`focusReference()`、`isTopLayer(event?)`。

## Keyboard and accessibility

`trigger="focus"` supports keyboard focus. `esc-to-close` lets only the topmost popup handle Escape. Trigger does not assign `role`, `aria-describedby` or business labels; semantic wrappers such as Tooltip, Popover and Menu must supply them.

## Public CSS variables

These are actual :root defaults. Prefer component variables for business customization; internal positioning variables are not public API.

| Variable | Default | Meaning and use case |
| --- | --- | --- |
| `--c-trigger-arrow-background` | `var(--c-sys-color-surface-overlay)` | Standalone Trigger arrow background; wrappers use their own variables |
| `--c-trigger-arrow-size` | `var(--c-sys-space-4)` | Arrow square size |
| `--c-trigger-arrow-radius` | `var(--c-sys-radius-sm)` | Arrow border radius |
| `--c-trigger-transition-duration` | `var(--c-sys-motion-duration-fast)` | Default Trigger fade duration |
| `--c-trigger-transition-easing` | `var(--c-sys-motion-easing-standard)` | Default Trigger easing |

Tooltip/Popover define arrow appearance themselves. Override their component variables rather than Trigger arrow-background.

With Teleport, variables must be in the actual popup scope, for example through `popup-style`. Trigger-button variables do not automatically inherit into popups.

### Reduced motion

Built-in CSS transitions follow `prefers-reduced-motion: reduce`. Removing transitions does not change final visibility, selected/expanded state or event semantics. Applications control custom animations inside slots.


### Placement semantics and configuration

placement is a preferred side; final placement may change while auto-fit-position is true (the default). It is not a position coordinate. top-start is anchor-side alignment, whereas top-left denotes a container corner. Current Trigger start/end follows physical cross-axis geometry; automatic RTL mirroring is not promised.

## Native event modifiers on the reference

Native click, mouseenter, mouseleave, focusin, focusout and contextmenu listeners, including .once, .capture and .passive, belong to the actual reference element rather than the popup. Updating a consumed once callback does not rearm it; replacing the reference or removing and readding the listener starts a new native lifetime. Suspension and unmount detach listeners. Listener promises do not control opening or loading; errors follow Vue event error handling.
