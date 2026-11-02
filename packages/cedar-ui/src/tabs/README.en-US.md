---
lang: en-US
permalink: /en/components/tabs/
---

# Tabs

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `default-value="overview"`, `name="overview"`, `title="概览"`, `name="details"`.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Appearance Lab

Preview configuration: `layout="vertical"`, `:clearable="false"`, `options`, `aria-label="variant"`.

<demo src="./__demos__/appearance-lab.vue"></demo>

## Appearance and direction

### Type

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `orientation` | Horizontal/vertical axis of tab navigation, default horizontal; affects navigation layout and arrow-key behavior | Type, Position |
| `item-style` | `StyleValue` | No Padding, Custom Style |
| `default-value` | `string / number` | No Padding, Custom Style |
| `variant` | `line / card / outline / plain / capsule / enclosed` | Type |
| `size` | `xs / sm / md / lg / xl` | Type |
| `editable` | `boolean` | Type |
<!-- demo-config-notes:end -->


- `variant`: Selects the visual variant.
- `size`: Controls the component size.

<demo src="./__demos__/type.vue"></demo>

### Position

Preview configuration: `type="button"`, `value="normal"`, `value="reverse"`, `value="horizontal"`.

<demo src="./__demos__/position.vue"></demo>

### Icon Tabs

Preview configuration: `name="1"`, `name="2"`, `name="3"`, `item-vertical`.

<demo src="./__demos__/icon-tabs.vue"></demo>

### No Padding

Preview configuration: `:item-style="{ padding: 0 }"`, `default-value="2"`, `name="1"`, `title="Tab 1"`.

<demo src="./__demos__/no-padding.vue"></demo>

### Custom Style

Preview configuration: `default-value="overview"`, `item-class="custom-tab-content"`, `:item-style="{ padding: '16px' }"`, `item-wrapper-class="custom-tab-panel"`.

<demo src="./__demos__/custom-style.vue"></demo>

## Navigation and content composition

### Nav Content

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `default-value` | `string / number` | Nav Content |
| `swipeable` | `boolean` | Same Source |
| `lazy-load` | `boolean` | Same Source |
<!-- demo-config-notes:end -->


Preview configuration: `default-value="overview"`, `aria-label="内容分类"`, `name="overview"`, `title="概览"`.

<demo src="./__demos__/nav-content.vue"></demo>

### Same Source

Preview configuration: `swipeable`, `lazy-load`, `aria-label="内容分类"`, `:name="item.key"`.

<demo src="./__demos__/same-source.vue"></demo>

### Suffix

Preview configuration: `name="1"`, `title="Tab 1"`, `name="2"`, `title="Tab 2"`.

<demo src="./__demos__/suffix.vue"></demo>

## Interaction and dynamic tabs

### Trigger

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `default-value` | `string / number` | Trigger, Lazy Load |
| `trigger` | `click / hover` | Trigger |
| `lazy-load` | `boolean` | Lazy Load |
| `variant` | `line / card / outline / plain / capsule / enclosed` | Editable |
| `editable` | `boolean` | Editable |
| `show-add-button` | `boolean` | Editable |
<!-- demo-config-notes:end -->


Preview configuration: `value="click"`, `value="hover"`, `default-value="1"`, `:trigger="trigger"`.

<demo src="./__demos__/trigger.vue"></demo>

### Lazy Load

Preview configuration: `default-value="2"`, `lazy-load`, `name="1"`, `title="Tab 1"`.

<demo src="./__demos__/lazy-load.vue"></demo>

### Editable

- `variant`: Selects the visual variant.

<demo src="./__demos__/editable.vue"></demo>

## API

TabPane, TabNav and TabItem all require unique names. Selection and navigation/panel association use `name`; Vue key controls only node reuse. Provide `:key` separately in loops.

Use ordinary `v-model`. `modelValue` is the selected tab name. `defaultValue` initializes uncontrolled state once without later resets or initialization `update:modelValue`. When provided, the parent value controls selection.

### Tabs Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| model-value | `string / number` | `undefined` | Current selected name; controlled when provided |
| default-value | `string / number` | `undefined` | Initial uncontrolled value; defaults to the first available item |
| variant | `line / card / outline / plain / capsule / enclosed` | `line` | Visual variant |
| size | `xs / sm / md / lg / xl` | Global value or md | Size |
| orientation | Horizontal/vertical axis of tab navigation, default horizontal; affects navigation layout and arrow-key behavior | `horizontal` | Navigation orientation |
| indicator-position | Indicator on the navigation side facing the content (normal) or the opposite side (reverse), default normal; does not use four-side values | `normal` | Indicator on the content side or opposite side |
| editable | `boolean` | `false` | Allow closing tabs |
| show-add-button | `boolean` | `false` | Show the add button in editable mode |
| auto-switch | `boolean` | `false` | Switch to the last available tab after adding |
| lazy-load | `boolean` | `false` | Mount on first activation |
| destroy-on-hide | `boolean` | `false` | Unmount content when hidden |
| justify | `boolean` | `false` | Fill container height in horizontal orientation |
| animation | `boolean` | `false` | Content fade-in animation |
| item-class | `string / object / array` | `undefined` | Inner class for each panel; merged with built-in classes |
| item-style | `StyleValue` | `undefined` | Inner style for each panel; supports string, object or array |
| item-wrapper-class | `string / object / array` | `undefined` | Outer class for each panel; merged with built-in classes |
| item-wrapper-style | `StyleValue` | `undefined` | Outer style for each panel; supports string, object or array |
| tab-class | `string / object / array` | `undefined` | Outer navigation-label class, including title/close button; merged with built-in classes |
| tab-style | `StyleValue` | `undefined` | Outer navigation-label style; supports string, object or array |
| hide-content | `boolean` | `false` | Hide the content area |
| trigger | `click / hover` | `click` | Mouse trigger mode; touch always uses click |
| scroll-position | Target position or numeric offset of the selected tab within the navigation scroll viewport, default auto; not popup placement | `auto` | Selected-tab scroll position; numbers are start offsets |
| scroll-buttons | `boolean / auto` | `auto` | Show arrows on overflow; auto hides them on touch devices |
| activation-mode | `automatic / manual` | `automatic` | Whether arrow keys immediately select |
| swipeable | `boolean` | `false` | Horizontal swipe between content panels; no looping |

### Tabs Events

| Event | Arguments | Description |
| --- | --- | --- |
| update:model-value | name: string / number | Request a selected-value update |
| change | name: string / number | Notify on selecting a different available item; controlled mode still requires parent modelValue updates |
| tab-click | name, event: Event | Click an available item, including repeat clicks; hover/arrows/swipes do not emit click |
| add | event: Event | Request adding a tab; the caller updates data |
| delete | name, event: Event | Request removing a tab; the caller updates data |

### TabPane Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| name **(required)** | string / number | — | Unique business identifier matching modelValue |
| title | string | undefined | Navigation title |
| disabled | boolean | false | Prevent selecting and closing |
| closable | boolean | true | Show the close button in editable mode |
| item-vertical | boolean | false | Vertical icon/text layout |
| lazy-load | boolean | undefined | Inherit Tabs; explicit false overrides it |
| destroy-on-hide | boolean | undefined | Inherit Tabs; explicit false overrides it |

### TabNav Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| name **(required)** | string / number | — | Unique business identifier matching modelValue |
| title | string | undefined | Title |
| disabled | boolean | false | Prevent selecting and closing |
| closable | boolean | true | Show the close button in editable mode |
| item-vertical | boolean | false | Vertical icon/text layout |

TabNav/TabItem associate through the same `name`. Names are unique within a group; number `1` and string `'1'` differ. Vue `key` controls node reuse only; provide `:key` in loops independently. It does not determine selection.

### TabItem Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| name **(required)** | string / number | — | Unique business identifier matching modelValue |
| lazy-load | boolean | undefined | Inherit Tabs; explicit false overrides it |
| destroy-on-hide | boolean | undefined | Inherit Tabs; explicit false overrides it |

Inactive panels always have hidden. The above props determine whether internal state survives. destroy-on-hide overrides lazy-load; active content remains mounted. TabsNavs/TabsItems have no business props.

### Slots

| Component | Slot | Description |
| --- | --- | --- |
| Tabs | default | TabPane list, or TabsNavs/TabsItems for advanced composition |
| TabPane | default / title | Panel content / custom navigation title |
| TabsNavs | default | TabNav list |
| TabsNavs | prefix / suffix / add-icon | Navigation prefix/suffix areas and add icon |
| TabNav | title / default / icon | title/default slots customize the title; icon supplies an icon |
| TabsItems | default | TabItem list |
| TabItem | default | Panel content |

### Expose

`TabsNavs.resize(): void` remeasures overflow and scrolls the selected tab into view. ResizeObserver watches size changes automatically.

### Keyboard and direction

Arrow keys skip disabled items and wrap; Home/End reach first/last. Delete requests closing editable tabs. Horizontal uses Left/Right, vertical uses Up/Down. Manual mode moves focus only; Enter/Space activates the native button. `dir="rtl"` supports right-to-left layout. Give TabsNavs an `aria-label` to name navigation.

### Types

Exports TabsName, TabsVariant, TabsTrigger, TabsIndicatorPosition, TabsScrollPosition, TabsActivationMode and Props/Instance/runtime props/`_XxxComponent` for all six components. Both platforms use the same prop definitions.

## Style variables

Matching token suffixes have matching meanings on both platforms, with platform-specific defaults. The variables and their defaults are listed below.

| Variable | Default |
| --- | --- |
| `--c-tabs-background` | `var(--c-sys-color-surface-default)` |
| `--c-tabs-title-text-color` | `var(--c-sys-color-content-secondary)` |
| `--c-tabs-title-text-color-active` | `var(--c-sys-color-content-brand)` |
| `--c-tabs-title-text-color-disabled` | `var(--c-sys-color-content-disabled)` |
| `--c-tabs-muted-background` | `var(--c-sys-color-surface-muted)` |
| `--c-tabs-border-color` | `var(--c-sys-color-border-default)` |
| `--c-tabs-hover-background` | `var(--c-sys-color-state-hover)` |
| `--c-tabs-nav-gap` | `var(--c-sys-space-2)` |
| `--c-tabs-tab-gap` | `var(--c-sys-space-2)` |
| `--c-tabs-header-padding` | `var(--c-sys-space-5)` |
| `--c-tabs-control-height` | `var(--c-sys-control-height-xs)` |
| `--c-tabs-touch-target` | `var(--c-sys-control-touch-target)` |
| `--c-tabs-border-width` | `1px` |
| `--c-tabs-focus-width` | `2px` |
| `--c-tabs-focus-offset` | `-3px` |
| `--c-tabs-radius` | `var(--c-sys-radius-md)` |
| `--c-tabs-icon-gap` | `var(--c-sys-space-3)` |
| `--c-tabs-content-padding` | `var(--c-sys-space-6)` |
| `--c-tabs-indicator-size` | `2px` |
| `--c-tabs-indicator-radius` | `1px` |
| `--c-tabs-animation-duration` | `var(--c-sys-motion-duration-standard)` |
| `--c-tabs-active-font-weight` | `var(--c-sys-font-weight-semibold)` |
| `--c-tabs-group-padding` | `var(--c-sys-space-2)` |
| `--c-tabs-capsule-radius` | `var(--c-sys-radius-pill)` |
| `--c-tabs-active-shadow` | `0 1px 3px rgba(0, 0, 0, 0.12)` |
| `--c-tabs-size-xs-tab-height` | `var(--c-sys-control-height-xs)` |
| `--c-tabs-size-xs-tab-padding` | `var(--c-sys-space-2) var(--c-sys-space-4)` |
| `--c-tabs-size-xs-tab-font-size` | `var(--c-sys-font-size-xs)` |
| `--c-tabs-size-sm-tab-height` | `var(--c-sys-control-height-sm)` |
| `--c-tabs-size-sm-tab-padding` | `var(--c-sys-space-3) var(--c-sys-space-5)` |
| `--c-tabs-size-sm-tab-font-size` | `var(--c-sys-font-size-sm)` |
| `--c-tabs-size-md-tab-height` | `var(--c-sys-control-height-md)` |
| `--c-tabs-size-md-tab-padding` | `var(--c-sys-space-4) var(--c-sys-space-6)` |
| `--c-tabs-size-md-tab-font-size` | `var(--c-sys-font-size-md)` |
| `--c-tabs-size-lg-tab-height` | `var(--c-sys-control-height-lg)` |
| `--c-tabs-size-lg-tab-padding` | `10px var(--c-sys-space-7)` |
| `--c-tabs-size-lg-tab-font-size` | `var(--c-sys-font-size-lg)` |
| `--c-tabs-size-xl-tab-height` | `var(--c-sys-control-height-xl)` |
| `--c-tabs-size-xl-tab-padding` | `var(--c-sys-space-5) var(--c-sys-space-8)` |
| `--c-tabs-size-xl-tab-font-size` | `var(--c-sys-font-size-xl)` |

Both platforms keep the same API, state, lifecycle and keyboard behavior. Desktop and mobile differences use style tokens and pointer media queries; the packages remain independent at runtime.

## Independent source copies and public types

Both platforms independently maintain Tabs, TabPane, TabsNavs, TabNav, TabsItems and TabItem without cross-library runtimes or generic platform configuration. All xs/sm/md/lg/xl sizes are implemented. Cedar inherits ConfigProvider size/rtl. Maple defaults to md and supports setPropsDefaults, explicit size and DOM dir. Panels use native hidden; InfiniteScroll observes visibility directly rather than old panel registration.

Public types include TabsEmits, TabsSlots, TabPaneSlots, TabsNavsSlots, TabNavSlots, TabsItemsSlots, TabItemSlots and TabsNavsExpose. Only TabsNavs has its own method, resize(). Other members have no own imperative methods/notification events; selection/editing events belong to Tabs.
