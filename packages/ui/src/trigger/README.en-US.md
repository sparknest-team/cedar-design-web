---
lang: en-US
permalink: /en/components/trigger/
---

# Trigger

SSR limitation: a trigger or `content` slot node using both `v-for` and `v-memo` can make server rendering fail. The trigger slot can fail even while the popup is closed; the `content` slot can fail when the popup is open or `unmount-on-close=false`. Remove `v-memo` from that slot node when rendering on the server; ordinary `v-for` remains supported.

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

## Triggers and positioning

### Popup placement

placement is the preferred side; auto-fit-position defaults to true and can change the final side. It is not a position coordinate. top-start describes anchor placement and alignment, whereas top-left is a container corner. Top/bottom start and end mirror with reading direction; left/right remain physical, and vertical start/end remain top/bottom.

## Usage notes

### Configuration

These are actual :root defaults. Prefer component variables for business customization; internal positioning variables are not public API.

With Teleport, variables must be in the actual popup scope, for example through `popup-style`. Trigger-button variables do not automatically inherit into popups.

### Reduced motion

`allowClose()` restores the internal closing gate; there is no public counterpart to disable closing, and this method cannot prevent closure.

## API

### Trigger Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| dir | Reading direction; inherits the source scope when omitted. Physical left/right placements keep their meaning. | `ReadingDirection` (`ltr` / `rtl`) | — |
| open | Controlled open state | `boolean` | `-` |
| default-open | Initial uncontrolled state | `boolean` | `false` |
| trigger | Trigger modes; may be combined | `hover \| click \| focus \| contextMenu \| manual \| TriggerEvent[]`<br>`TriggerEvent: 'manual' \| 'hover' \| 'click' \| 'focus' \| 'contextMenu'` | `hover` |
| disabled | Prevent opening | `boolean` | `false` |
| reference | External reference element; defaults to the first actual element in the default slot | `string \| HTMLElement \| SVGElement` | `-` |
| placement | Preferred popup side relative to the trigger, default bottom. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | `TriggerPlacement`<br>`'left' \| 'right' \| 'bottom' \| 'top' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `bottom` |
| strategy | Positioning strategy | `absolute \| fixed` | `absolute` |
| cover | Cover the reference on the main axis | `boolean` | `false` |
| popup-offset | Outward distance along placement's main axis | `number` | `0` |
| popup-translate | Screen-axis offset, or per-placement offsets | `[number, number] \| Partial<Record<TriggerPlacement, [number, number]>>`<br>`TriggerPlacement: 'left' \| 'right' \| 'bottom' \| 'top' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `-` |
| align-point | Use pointer coordinates as a virtual reference | `boolean` | `false` |
| popup-container | Mount container; `false` renders in place. When switching within a document or between accessible same-origin iframes, focus restoration is attempted for native inputs and buttons that have not been transferred, including equivalent elements in open Shadow DOM. Opaque hosts that may contain closed Shadow DOM are not restored automatically. | `string \| HTMLElement \| false` | `body` |
| auto-fit-position | Flip and constrain to the viewport when space is insufficient | `boolean` | `true` |
| auto-fit-popup-width | Match popup width to the reference | `boolean` | `false` |
| auto-fit-popup-min-width | Match minimum popup width to the reference | `boolean` | `false` |
| auto-fix-position | Observe reference element size changes; disabling this still observes the popup and positioning parent and responds to window changes | `boolean` | `true` |
| update-at-scroll | Reposition while scrolling | `boolean` | `false` |
| scroll-to-close | Close when scrolling exceeds the threshold | `boolean` | `false` |
| scroll-to-close-distance | Close threshold | `number` | `0` |
| show-arrow | Render a decorative arrow | `boolean` | `false` |
| hide-empty | Skip a directly empty content slot; a component node counts as nonempty even if it renders nothing | `boolean` | `false` |
| prevent-focus | Prevent popup mousedown from taking focus | `boolean` | `false` |
| unmount-on-close | Unmount content after the leave transition | `boolean` | `true` |
| animation-name | Vue Transition name | `string` | `trigger-fade` |
| duration | Transition duration | `number \| { enter: number; leave: number }` | `-` |
| auto-fit-transform-origin | Derive transform origin from final placement | `boolean` | `false` |
| opened-class | Merge into the first default-slot node when open; external references do not receive this class | `ClassName` | `-` |
| reference-attrs | Attributes applied to the actual reference or a function of open; original attributes are restored when removed, replaced or unmounted | `TriggerReferenceAttrs \| ((open: boolean) => TriggerReferenceAttrs)` | `-` |
| popup-class | Custom positioning-layer classes | `ClassName` | `-` |
| popup-style | Custom positioning layer styles | `CSSProperties` | `-` |
| content-class | Custom content layer classes | `ClassName` | `-` |
| content-style | Custom content layer styles | `CSSProperties` | `-` |
| arrow-class | Custom arrow classes | `ClassName` | `-` |
| arrow-style | Custom arrow styles | `CSSProperties` | `-` |
| mouse-enter-delay | Hover-open delay in milliseconds | `number` | `100` |
| mouse-leave-delay | Hover-close delay in milliseconds | `number` | `100` |
| focus-delay | Focus-open delay in ms | `number` | `0` |
| popup-hover-stay | Keep open when the pointer enters the popup | `boolean` | `true` |
| blur-to-close | Close on blur | `boolean` | `true` |
| close-on-click-reference | Close on another reference click | `boolean` | `true` |
| click-outside-to-close | Close on outside click | `boolean` | `true` |
| esc-to-close | Close on Escape | `boolean` | `true` |
| restore-focus | Restore reference focus after closing is accepted | `boolean` | `true` |

### Trigger Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:open | Controlled update request from user interaction | `open: boolean` |
| open-change | User-interaction request notification | `open: boolean` |
| open / close | Actual enter/leave begins | `-` |
| opened / closed | Enter/leave transition completes | `-` |
| click-outside | The topmost popup receives an outside click | `event: Event` |
| resize | Reference size changes | `-` |

### Trigger Slots

| Slot | Description |
| --- | --- |
| default | Reference node |
| content | Popup content |

### Trigger Methods

`open()`、`close()`、`resize()`、`allowClose()`、`getReference()`、`setReference(reference?)`、`focusReference()`、`isTopLayer(event?)`。

## Keyboard and accessibility

`trigger="focus"` supports keyboard focus. `esc-to-close` lets only the topmost popup handle Escape. Trigger does not assign `role`, `aria-describedby` or business labels; semantic wrappers such as Tooltip, Popover and Menu must supply them.

With focus triggers, one outside pointer interaction that causes both blur and click requests closing once. If controlled state rejects the request, a later independent click can request closing again; `click-outside` continues to report outside click events.

## Native event modifiers on reference elements

Native `click`, `mouseenter`, `mouseleave`, `focusin`, `focusout`, `contextmenu` listeners and `.once`, `.capture`, `.passive` modifiers bind to the actual reference element, not the popup. `.once` follows the native element's listener lifetime. Replacing a callback does not reactivate a consumed listener; replacing the reference or removing and readding a listener starts a new lifetime. Deactivation/unmount unbind listeners. Listeners only notify; returned Promises do not drive opening/loading, and errors enter Vue's event error chain.

`aria-describedby` from `reference-attrs` is merged and deduplicated with existing reference descriptions; cleanup or reference replacement restores the original attribute.

Fixed positioning uses the actual `fixed` containing block when an ancestor has a transform, filter, perspective, or containing CSS property. Axis-aligned scaling is accounted for; rotated or skewed coordinate systems are not guaranteed. For accessible same-origin iframe references, the reference and popup documents share coordinate conversion and event handling; cross-origin or unrelated browsing contexts are not supported. With `update-at-scroll`, scrolling either document or a scrollable ancestor updates the popup.

When the popup is mounted inside a closed ShadowRoot in the same document, Trigger distinguishes clicks inside the popup from outside clicks. Clicks passing through the closed-root host are classified in a later task; account for this if application behavior depends on dismissal event timing.

When a reference is slotted into a scroll container inside a closed ShadowRoot, the outer Trigger cannot access the slot or container and cannot listen to its scrolling automatically. The closed component can call the Trigger instance's `resize()` on internal scroll or slot changes. For scroll-to-close behavior, call `close()` internally using an application-specific threshold, and remove listeners on unmount.

A popup mounted inside an iframe remains clipped by that iframe's viewport. Content outside the iframe is invisible even when cross-document coordinate conversion is correct.

## CSS Variables

Tooltip/Popover define arrow appearance themselves. Override their component variables rather than Trigger arrow-background.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-trigger-arrow-background` | `var(--c-sys-color-surface-overlay)` | `background-color` |
| `--c-trigger-arrow-radius` | `var(--c-sys-radius-sm)` | `border-radius` |
| `--c-trigger-arrow-size` | `var(--c-sys-space-4)` | `height`, `width` |
| `--c-trigger-transition-duration` | `var(--c-sys-motion-duration-fast)` | `transition` |
| `--c-trigger-transition-easing` | `var(--c-sys-motion-easing-standard)` | `transition` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-trigger-arrow-background: var(--c-sys-color-surface-overlay);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->

### Reduced motion

Built-in CSS transitions follow `prefers-reduced-motion: reduce`. Removing transitions does not change final visibility, selected/expanded state or event semantics. Applications control custom animations inside slots.
