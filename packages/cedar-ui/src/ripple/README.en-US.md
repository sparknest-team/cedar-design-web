---
lang: en-US
permalink: /en/components/ripple/
---

# Ripple

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Options

| Options | Description | Type | Default |
| --- | --- | --- | --- |
| color | Ripple color | `string` | `currentColor` |
| disabled | Prevent ripples and cancel pending animation | `boolean` | `false` |

Use `v-ripple="{ color, disabled }"`. Unmount cancels animations/timers and removes listeners; each element maintains independent keyboard state.

## Styles

For direct directive registration, import `@cedar-design/ui/ripple/style`. Runtime imports no CSS, supporting SSR package imports. Variables use `--c-ripple-*` and are declared in `style/token.less`. Theme defaults may differ from mobile while motion/consumption protocols stay aligned.

| Variable | Default | Responsibility |
| --- | --- | --- |
| --c-ripple-color | currentColor | Ripple background; color option takes precedence |
| --c-ripple-cubic-bezier | cubic-bezier(0.68, 0.01, 0.62, 0.6) | Transform expansion easing |
| --c-ripple-expand-duration | 200ms | Transform expansion duration |
| --c-ripple-fade-duration | 140ms | Linear opacity appear/fade duration |

Variables belong on the actual directive host and inherit into ripples. Defaults currently match across platforms. 250ms is the minimum postcreation display/postfade removal wait, not visual duration or the entire lifecycle. Runtime reads computed transition duration/delay. Fade waits until the later of creation+250ms or activation+expansion duration; removal waits max(250ms, fade duration). Long overrides are not truncated. 0ms/unstyled retain cleanup floors. Reduced motion hides decoration. Expansion samples on creation/activation, fade on fade start; arbitrary midphase CSS changes/animations are not guaranteed.

Repeated release queues once. Disabling/unmounting cleans owned timers/direct ripples without deleting nested instances. Document listeners bind/remove against mount-time ownerDocument, without automatic cross-document rebinding. Only host Enter/Space and matching keyup/blur participate. The directive does not supply button semantics, accessible names or business clicking to plain divs. Real touch/OS preferences need separate validation.
