---
lang: en-US
permalink: /en/components/loading/
---

# Loading

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `tip="加载中"`.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Loading shape, size and color

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `size` | Loading-indicator size; numbers are px | Loading shape, size and color |
| `type` | Loading animation type | Loading shape, size and color |
| `color` | Indicator and hint-text color | Loading shape, size and color |
<!-- demo-config-notes:end -->


Compare the shape, size and color of loading indicators. Container masks and directives remain separate.

<demo src="./__demos__/appearance-comparison.en-US.vue"></demo>

## Layout and arrangement

### Wrap

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `tip` | Prompt copy | Wrap |
| `loading` | Whether loading; effective only when wrapping content | Wrap |
<!-- demo-config-notes:end -->


Preview configuration: `tip="LOADING"`, `:loading="loading"`, `title="介绍"`, `description="Cedar 是一个基于 Vue 3 的企业级桌面端组件库。"`.

<demo src="./__demos__/wrap.vue"></demo>

## Content and presentation

### Directive

Preview configuration: `title="介绍"`, `description="v-c-loading 会在当前容器内渲染 Loading 遮罩，不会改变内容结构。"`.

<demo src="./__demos__/directive.vue"></demo>

## API

### Loading Props

| Prop | Description | Type | Default |
| --------- | -------------------------------------- | --------------------------------------------- | -------- |
| type | Loading animation type | `circle \| wave \| cube \| rect \| disappear` | `circle` |
| size | Loading-indicator size; numbers are px | `xs \| sm \| md \| lg \| xl \| number` | `md` |
| radius | Radius for `circle` indicators | `string \| number` | - |
| color | Indicator and hint-text color | `string` | - |
| loading | Whether loading; effective only when wrapping content | `boolean` | `false` |
| tip | Prompt copy | `string` | - |
| hide-icon | Whether to hide the loading indicator | `boolean` | `false` |

`v-c-loading` accepts boolean shorthand or `{ loading, tip, type, size, radius, color, hideIcon, fullscreen, background }`. The object's `loading` field controls state; other props match `Loading`.

### Loading Slots

| Slot | Description |
| ------- | ---------------------- |
| default | Content covered by the loading mask |
| tip | Custom hint content |
| icon | Custom loading indicator |

The `icon` slot replaces every built-in `type` animation. Without it, the ConfigProvider `loading` slot takes precedence over built-in animations. `hide-icon=true` hides all indicators while allowing tip content to remain visible.

## Types

### Registration

`v-c-loading` renders Cedar's built-in `Loading` component. The `c-` prefix avoids collisions with other libraries’ directives. Register it in any of the following ways.

```ts
// 1. Full installation: registers Loading and v-c-loading automatically
import CedarVue from "@cedar-design/ui-vue";

app.use(CedarVue);
```

```ts
// 2. Install Loading on demand: registers the component and directive
import { Loading } from "@cedar-design/ui-vue";

app.use(Loading);
```

```ts
// 3. Register only the directive manually
import { vLoading } from "@cedar-design/ui-vue";

app.directive("c-loading", vLoading);
```

With `CedarResolver()`, `unplugin-vue-components` resolves template `v-c-loading` automatically. `directives: false` disables directive resolution.

The component exports the following types:

```ts
import type { LoadingProps } from "@cedar-design/ui-vue";
```

The loading-directive mask prevents default click behavior and propagation. Clicking it does not activate Card or ordinary parent click handlers. Normal clicking resumes after loading. It does not disable keyboard access to underlying controls; set those controls’ `disabled` props to block all interaction.

### Overlay styles

| Variable | Description |
| --- | --- |
| `--c-loading-overlay-background` | Directive overlay background; the background option overrides this value. |

Content-overlay class: `.c-loading__content-overlay`.

Each directive update replaces the complete configuration; omitted options and boolean `true` use defaults. Changing `fullscreen` while loading moves the overlay between the host and its owner document body. Host children stay in place. Multiple `fullscreen` instances share a counted scroll lock: closing a local instance does not unlock `fullscreen` instances, and the final `fullscreen` instance preserves an existing external lock class.

### Icons and status messages

A numeric `size` sets the custom indicator container's font size in pixels. Named sizes control built-in animations. Custom icons inherit the `--c-loading-indicator-size` font size (20px by default): `1em` children scale with it, while SVGs with fixed pixel dimensions keep their own size. Use the `icon` slot for graphics and `tip` or its slot for status text.

Standalone Loading has `role="status"`, `aria-live="polite"` and `aria-atomic="true"`. Without a tip it includes localized visually hidden status text, even when the icon is hidden. Wrapper mode retains `aria-busy`. The directive sets `aria-busy="true"` on the original host and restores its previous value on cleanup, preserving a later external change.

Assistive technology may defer announcements within a busy region. For business start, completion or failure messages, maintain a persistent status region outside the busy region and update its text. The overlay does not disable keyboard interaction. See [WAI-ARIA `aria-busy`](https://www.w3.org/TR/wai-aria-1.2/#aria-busy) and [ARIA22 status messages](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22).

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-loading-color` | `rgb(var(--c-primary-6))` | `background-color`, `color` |
| `--c-loading-directive-z-index` | `2000` | `z-index` |
| `--c-loading-indicator-size` | `20px` | `font-size` |
| `--c-loading-opacity` | `0.38` | `opacity` |
| `--c-loading-overlay-background` | `color-mix(in srgb, var(--c-color-bg-white) 62%, transparent)` | `background` |
| `--c-loading-tip-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-loading-tip-font-weight` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-loading-tip-margin` | `var(--c-spacing-3) 0 0` | `margin` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-loading-color: rgb(var(--c-primary-6));
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
