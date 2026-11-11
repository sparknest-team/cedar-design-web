---
lang: en-US
permalink: /en/components/layout/
---

# Layout

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

<demo src="./__demos__/basic.vue"></demo>

## Layout and arrangement

### Scroll

Preview configuration: `bordered`, `scrollable`.

<demo src="./__demos__/scroll.vue"></demo>

### Sider Options

- `has-sider`: Indicates that there is a Sider in the sub-element, which generally does not need to be specified. Used to avoid style flicker when rendering on the server side.

<demo src="./__demos__/sider-options.vue"></demo>

## Content and presentation

### Resize

Preview configuration: `:resize-directions="['right']"`.

<demo src="./__demos__/resize.vue"></demo>

### Collapse

- `has-sider`: Indicates that there is a Sider in the sub-element, which generally does not need to be specified. Used to avoid style flicker when rendering on the server side.

<demo src="./__demos__/collapse.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Content inherits reading direction. Sider placement=left/right remains physical; collapse and ResizeBox handle meanings do not reverse. Header and content may use their own local dir.

Set a local mode with an outer `<c-theme-provider theme="dark">`. This component has no theme prop. Nest theme="light" for a light region; library popups follow their owning provider.

## API

### Layout Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| scrollable | Native scrolling on the layout; constrain its height | `boolean` | `false` |
| has-sider | Force sider layout, including SSR; mounted Sider children are also detected | `boolean` | `false` |

### LayoutHeader Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| bordered | Show the bottom border | `boolean` | `false` |

### LayoutContent Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| scrollable | Native scrolling on the content; constrain its height | `boolean` | `false` |

### LayoutFooter Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| bordered | Show the top border | `boolean` | `false` |

### LayoutSider Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| bordered | Show the border next to the content | `boolean` | `false` |
| placement | Physical sider placement; RTL does not swap left/right | `'left' \| 'right'` | `'left'` |
| collapse-mode | width changes available width; transform retains expanded content width and translates/clips it | `'width' \| 'transform'` | `'width'` |
| collapsed | Controlled when provided; waits for parent writeback | `boolean` | `undefined` |
| default-collapsed | Initial uncontrolled collapsed state | `boolean` | `false` |
| collapsible | Show the default trigger; does not block external or responsive collapse | `boolean` | `false` |
| width | Expanded base width; finite nonnegative pixels or a nonempty CSS width string | `number \| string` | `200` |
| collapsed-width | Collapsed width; finite nonnegative pixels, with a recovery trigger at zero | `number` | `48` |
| reverse-arrow | Reverse the default arrow; right placement also reverses it | `boolean` | `false` |
| breakpoint | Request collapse on narrow screens after mounting; re-evaluate changed configurations immediately | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | `undefined` |
| resize-directions | Use ResizeBox instead of the default div; physical edges, with handles removed while collapsed | `ResizeBoxDirection[]`<br>`ResizeBoxDirection: 'left' \| 'right' \| 'bottom' \| 'top'` | `undefined` |
| hide-trigger | Hide the default trigger; the caller supplies recovery access | `boolean` | `false` |

### LayoutSider Events

| Component | Event | Parameters and meaning |
| --- | --- | --- |
| Layout / LayoutContent / LayoutSider | scroll | Native Event; scrolling notification |
| LayoutSider | update:collapsed | boolean; collapsed-state update request |
| LayoutSider | collapse | boolean and 'clickTrigger' / 'responsive'; request source |
| LayoutSider | breakpoint | boolean; whether the environment requests collapse, independently of controlled state |

### LayoutSider Slots

| Component | Slot | Parameters and meaning |
| --- | --- | --- |
| Layout / LayoutHeader / LayoutContent / LayoutFooter / LayoutSider | default | Unscoped layout content |
| LayoutSider | trigger | Scope { collapsed: boolean }; rendered inside a native button, so do not nest another button |

### LayoutSider Methods

Layout, LayoutContent and LayoutSider expose scrollTo(options: ScrollToOptions) and scrollTo(x: number, y: number); Header/Footer have no dedicated instance methods.

## Types

The component exports the following types

```ts
import type { LayoutProps } from '@cedar-design/ui-vue'
```

### Additional layout capabilities

| Component | Prop | Type | Default | Description |
| --- | --- | --- | --- | --- |
| Content | scrollable | boolean | false | Use this element as a native scroll container |
| Header / Footer / Sider | bordered | boolean | false | Show the border next to the content |
| Sider | placement | 'left' / 'right' | 'left' | Sidebar placement; handles arrows automatically, while reverse-arrow remains supported |
| Sider | collapse-mode | 'width' / 'transform' | 'width' | Resize or translate content while collapsing |

Layout, Content and Sider emit `scroll`(event: Event) and expose `scrollTo(options: ScrollToOptions)` / `scrollTo(x: number, y: number)`. Sider scrolls its internal content node by default. `width` accepts numeric px or CSS lengths. Percentage widths with transform mode are discouraged; use definite lengths such as px/rem.

The collapse control is a native button supporting Tab, Enter and Space. With `collapsed-width="0"`, the hidden region is inert and the expansion entry stays at the sidebar edge. A custom trigger slot should contain display content without nested buttons.

## Responsive sider

Breakpoint subscriptions begin after mounting; SSR retains the initial collapsed or default-collapsed state. Changing the breakpoint immediately evaluates the current viewport. Removing it stops automatic responses and keeps the current collapsed state. The xs breakpoint requests collapse at widths up to 575px; other breakpoints request collapse below their minimum width, consistently collapsing on narrow screens.

The breakpoint event reports the current narrow-screen state on initial subscription and breakpoint configuration changes, then on matching-state changes, independently of collapsed. update:collapsed and collapse(..., responsive) are requested only when the target differs from the current collapsed state. Controlled mode waits for the parent to update the prop; environmental notifications still occur when the parent declines a state request. Notification events do not await promises returned by listeners.

## Resizable sider width ownership

When resize-directions is provided, Sider owns the current width: expanded mode retains the most recently resized width; collapsed mode uses collapsed-width and removes resize handles; expanding restores the latest expanded width. Collapse/expand preserves content nodes and input state. A collapsed-width of zero still supports the recovery trigger outside the content area. When the width prop value changes, temporary resizing is cleared and the new numeric or CSS length value takes effect. Controlled collapsed still waits for parent writeback. Transform-mode content width and translation use the latest expanded width.

Development uses Vue prop validation for enums, non-finite/negative widths and duplicate/unknown resize edges. Runtime filters/deduplicates edges, defaults invalid width/collapsed-width to 200/48 and placement to left, and does not subscribe to invalid breakpoints. Default trigger names use locale.layout.expandSider/collapseSider through global useLocale or ConfigProvider.locale. Public Props derive from actual components with typed event listeners; resizeDirections uses ResizeBoxDirection[].

```ts
import type { LayoutProps, SiderProps } from '@cedar-design/ui-vue'
const layout: LayoutProps = { onScroll: (event) => event.preventDefault() }
const sider: SiderProps = { resizeDirections: ['right'], onCollapse: (collapsed, reason) => console.log(collapsed, reason) }
```

## CSS Variables

Sider text, background and its collapse trigger follow the current theme. Variables whose names contain `light` can be overridden in both light and dark themes. Use `--c-layout-sider-light-box-shadow` for the Sider shadow, or `none` to disable it. `bordered` and `--c-layout-border-color` control borders independently.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-layout-border-color` | `var(--c-color-border-2)` | `border-bottom`, `border-left`, `border-right`, `border-top` |
| `--c-layout-focus-color` | `var(--c-sys-color-content-brand)` | `outline` |
| `--c-layout-font-color` | `var(--c-color-text-1)` | `color` |
| `--c-layout-sider-background-light` | `var(--c-color-bg-2)` | `background` |
| `--c-layout-sider-light-box-shadow` | `0 2px 5px 0 rgba(0, 0, 0, 0.08)` | `box-shadow` |
| `--c-layout-trigger-height` | `var(--c-size-12)` | `height`, `padding-bottom`, `width` |
| `--c-layout-trigger-light-border-color` | `var(--c-color-bg-5)` | `border-top` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-layout-border-color: var(--c-color-border-2);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
