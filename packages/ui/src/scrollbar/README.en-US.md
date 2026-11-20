---
lang: en-US
permalink: /en/components/scrollbar/
---

# Scrollbar

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Type

- `type`: Type

<demo src="./__demos__/type.vue"></demo>

## Lifecycle and edge cases

### Thumb Lifecycle

<demo src="./__demos__/thumb-lifecycle.en-US.vue"></demo>

### Lifecycle

<demo src="./__demos__/lifecycle.en-US.vue"></demo>

## API

### Scrollbar Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| type | Track presentation | `'track' \| 'embed'` | `'embed'` |
| outer-class | Outer class accepting strings, boolean class objects and arrays | `ClassName` | `undefined` |
| outer-style | Vue style values including CSS strings, objects, arrays and conditional false | `StyleValue` | `undefined` |

All three props are optional. hide, disable-horizontal and disable-vertical are internal composition controls omitted from public ScrollbarProps. Hiding a decorative axis does not prevent native content scrolling or public scroll commands.

### Scrollbar Events

| Event | Description | Arguments |
| --- | --- | --- |
| scroll | Native scroll notification from the inner viewport with the original Event; listener Promises are not awaited | `event: Event` |

### Scrollbar Slots

| Slot | Description | Prop |
| --- | --- | --- |
| default | Scrolling content; provide one root element for content-size observation | — |

### Scrollbar Methods

| Method | Description | Arguments | Returns |
| --- | --- | --- | --- |
| scrollTo | Accept coordinates or native options; omitted numeric coordinates default to zero | `options?: number \| ScrollToOptions, y?: number` | `void` |
| scrollTop | Set the native vertical position, including zero | `top: number` | `void` |
| scrollLeft | Set the native horizontal position, including zero and native RTL negative values | `left: number` | `void` |

Object options pass to native Element.scrollTo, including left, top and behavior. Animation and cancellation follow browser rules without additional JS animation or completion Promises. Retained commands do not scroll inactive or unmounted instances.

## Types

```ts
import Scrollbar from '@cedar-design/ui-vue/scrollbar'
import type { ScrollbarProps, ScrollbarInstance } from '@cedar-design/ui-vue'
import type { ScrollbarProps as SubScrollbarProps } from '@cedar-design/ui-vue/scrollbar'
const options: ScrollbarProps = {
  outerClass: ['messages', { active: true }],
  outerStyle: [{ maxWidth: '100%' }, false],
  onScroll: (event: Event) => console.info(event.target),
}
```

### Focus and reading direction

id, dir, tabindex, role, aria-label and ordinary class/style apply to the inner viewport. For keyboard scrolling, provide tabindex=0 and a readable name, then use native arrow or page keys while the viewport is focused. Interactive content retains its own focus and key behavior.

Public horizontal coordinates use native browser scrollLeft without conversion to a common positive coordinate. Chromium RTL may use negative values; pass those native coordinates to scrollLeft/scrollTo. Visual thumbs stay synchronized. Internal thumb offsets are not public scroll coordinates.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-scrollbar-thumb-bar-bg-color` | `var(--c-sys-color-border-default)` | `background-color` |
| `--c-scrollbar-thumb-bar-bg-color-hover` | `var(--c-sys-color-border-strong)` | `background-color` |
| `--c-scrollbar-thumb-bar-border-radius` | `6px` | `border-radius` |
| `--c-scrollbar-thumb-bar-size` | `9px` | `height`, `margin`, `width` |
| `--c-scrollbar-track-bg-color` | `var(--c-sys-color-surface-muted)` | `background-color` |
| `--c-scrollbar-track-border-color` | `var(--c-sys-color-border-subtle)` | `border-bottom`, `border-left`, `border-right`, `border-top` |
| `--c-scrollbar-track-border-size` | `1px` | `border-bottom`, `border-left`, `border-right`, `border-top`, `margin`, `right` |
| `--c-scrollbar-track-size` | `15px` | `height`, `margin`, `width` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-scrollbar-thumb-bar-bg-color: var(--c-sys-color-border-default);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
