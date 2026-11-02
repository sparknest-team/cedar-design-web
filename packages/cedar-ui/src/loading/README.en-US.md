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

<demo src="./__demos__/appearance-comparison.vue"></demo>

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

### `<Loading>` Props

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

#### Registration

`v-c-loading` renders Cedar's built-in `Loading` component. The `c-` prefix avoids collisions with other libraries’ directives. Register it in any of the following ways.

```ts
// 1. Full installation: registers Loading and v-c-loading automatically
import CedarVue from "@cedar-design/ui";

app.use(CedarVue);
```

```ts
// 2. Install Loading on demand: registers the component and directive
import { Loading } from "@cedar-design/ui";

app.use(Loading);
```

```ts
// 3. Register only the directive manually
import { vLoading } from "@cedar-design/ui";

app.directive("c-loading", vLoading);
```

With `CedarResolver()`, `unplugin-vue-components` resolves template `v-c-loading` automatically. `directives: false` disables directive resolution.

### `<Loading>` Slots

| Slot | Description |
| ------- | ---------------------- |
| default | Content covered by the loading mask |
| tip | Custom hint content |
| icon | Custom loading indicator |

The `icon` slot replaces every built-in `type` animation. Without it, the ConfigProvider `loading` slot takes precedence over built-in animations. `hide-icon=true` hides all indicators while allowing tip content to remain visible.

## Type definitions

The component exports the following types:

```ts
import type { LoadingProps } from "@cedar-design/ui";
```

The loading-directive mask prevents default click behavior and propagation. Clicking it does not activate Card or ordinary parent click handlers. Normal clicking resumes after loading. It does not disable keyboard access to underlying controls; set those controls’ `disabled` props to block all interaction.

### Overlay styles

| Variable | Description |
| --- | --- |
| `--c-loading-overlay-background` | Directive overlay background; the background option overrides this value. |

Content-overlay class: `.c-loading__content-overlay`.

Each directive update replaces the complete configuration; omitted options and boolean `true` use defaults. Changing `fullscreen` while loading moves the overlay between the host and its owner document body. Host children stay in place. Multiple fullscreen instances share a counted scroll lock: closing a local instance does not unlock fullscreen instances, and the final fullscreen instance preserves an existing external lock class.
