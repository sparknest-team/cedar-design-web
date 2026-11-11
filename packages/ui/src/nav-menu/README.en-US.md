---
lang: en-US
permalink: /en/components/nav-menu/
---

# Nav Menu

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `options`: Supplies the available options.

<demo src="./__demos__/basic.vue"></demo>

<demo src="./__demos__/horizontal-sub-menu.vue"></demo>

## Appearance and layout

### Size

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `options` | Navigation tree | Size |
| `size` | Size | Size |
| `mode` | Navigation orientation | Size |
<!-- demo-config-notes:end -->


- `options`: Supplies the available options.
- `size`: Controls the component size.

<demo src="./__demos__/size.vue"></demo>

## Hierarchy and responsive layout

### Sub Menu

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `options` | Navigation tree | Sub Menu |
| `accordion` | Expand only one branch per level | Sub Menu |
| `default-value` | Initial uncontrolled selected value | Sub Menu |
| `collapsed` | Collapsed state; supports v-model:collapsed | Sub Menu |
| `mode` | Navigation orientation | Sub Menu |
<!-- demo-config-notes:end -->


- `options`: Supplies the available options.

<demo src="./__demos__/sub-menu.vue"></demo>

<demo src="./__demos__/collapsed.vue"></demo>

<demo src="./__demos__/breakpoint.vue"></demo>

## Entries and panels

### Items Horizontal

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `mode` | Navigation orientation | Items Horizontal |
| `active-item` | Controlled named NavMenu.Item activation; supports v-model:active-item | Items Horizontal |
<!-- demo-config-notes:end -->


Preview configuration: `mode="horizontal"`, `label="分类"`, `:options="categories"`, `label="地区"`.

<demo src="./__demos__/items-horizontal.vue"></demo>

<demo src="./__demos__/items-vertical.vue"></demo>

<demo src="./__demos__/entry-state.vue"></demo>

<demo src="./__demos__/item-label.vue"></demo>

<demo src="./__demos__/item-label-independent.vue"></demo>

## Data and state control

### Controlled

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `options` | Navigation tree | Controlled |
| `model-value` | Current selected key; supports v-model. null means no selection | Controlled |
| `expanded-keys` | Controlled expanded branches | Controlled |
| `field-names` | Field mapping for key/label/children/disabled | Controlled |
| `disabled` | Globally disable selection/user expansion | Controlled |
| `default-value` | Initial uncontrolled selected value | Controlled |
<!-- demo-config-notes:end -->


- `options`: Supplies the available options.
- `disabled`: Prevents user interaction.

<demo src="./__demos__/controlled.vue"></demo>

<demo src="./__demos__/item-controlled.vue" title="Controlled state and disabled entries"></demo>

<demo src="./__demos__/panel-state.vue" title="Panel state and closing"></demo>

<demo src="./__demos__/field-names.vue"></demo>

<demo src="./__demos__/custom-content.vue"></demo>

## Usage notes

### Configuration

`popup-layout="full"` starts at the bottom edge of the trigger, spans the viewport width and fills the remaining viewport height below it. On Maple, the same layout starts below the entire filter bar. Mobile defaults to full-width; desktop defaults to dropdown.

Set a local mode with an outer `<c-theme-provider theme="dark">`. This component has no theme prop. Nest theme="light" for a light region; library popups follow their owning provider.

## API

### NavMenu Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| options | Navigation tree | NavMenuOption[] | [] |
| model-value | Current selected key; supports v-model. null means no selection | string / number / null | undefined |
| default-value | Initial uncontrolled selected value | string / number / null | null |
| active-item | Controlled named NavMenu.Item activation; supports v-model:active-item | string / number / null | undefined |
| default-active-item | Initial uncontrolled named NavMenu.Item activation | string / number / null | null |
| expanded-keys | Controlled expanded branches | (string / number)[] | undefined |
| default-expanded-keys | Initial uncontrolled expanded branches | (string / number)[] | [] |
| default-expand-all | Initially expand every branch | boolean | false |
| auto-expand-selected | Expand selected-item ancestors in vertical noncollapsed mode; controlled mode requests updates | boolean | true |
| accordion | Expand only one branch per level | boolean | false |
| mode | Navigation orientation | vertical / horizontal | vertical |
| collapsed | Collapsed state; supports v-model:collapsed | boolean | undefined |
| default-collapsed | Initial uncontrolled collapsed state | boolean | false |
| size | Size | xs / sm / md / lg / xl | md |
| disabled | Globally disable selection/user expansion | boolean | false |
| field-names | Field mapping for key/label/children/disabled | NavMenuFieldNames | Same-name fields by default |
| responsive | Enable horizontal overflow collection | boolean | true |
| indent | Indent per level in px | number | 24 |
| root-indent | Root indent in px | number | 12 |
| collapsed-width | Collapsed width in px | number | 56 |
| icon-size | Icon size in px | number | 20 |
| popup-container | Popup mount container; false renders locally | Matching Trigger type | Inherits Trigger definition |
| popup-class | Additional popup class | string / array / object | — |
| overflow-label | Overflow entry label; follows the current locale when omitted | string | Localized More |
| node-props | Node DOM attributes/events; internal selection, disabled and keyboard semantics remain | (context) => Record<string, unknown> | — |

Controlled props follow supplied values; update events are requests only. `default-*` initializes once, not on later changes. Selection and expansion are independent. `showOption` does not select.

### Platform correspondence

On both platforms, a panel is created on first opening and remains mounted after closing or switching entries by default. Internal drafts and expanded branches are preserved. With `unmount-on-close`, content unmounts after the closing transition and is recreated on reopening, without clearing the Item's own selection. Business code defines draft commit, reset and filter application timing.

Root `close()` only requests closing Item panels and restores entry focus. It does not change selected values, active-item or desktop navigation-tree expanded-keys. A controlled open that rejects updates stays open. An entry with neither options nor a content slot does not open; arriving async options render according to current open state. KeepAlive deactivation hides panels and requests closing; reactivation still follows the controlled value.

Item selection, open state, events, slot contexts and `select/close/setOpen` methods are consistent. Both roots expose `close/resize/setActiveItem`. `name` must be unique in the current menu; changing it releases the old `name`. Names may swap or be reused during reordering in one update, with duplicates checked after the update. Vertical options expand the current value's available ancestor path on initialization or controlled value/options updates, while users can still collapse branches manually.

| Capability | Cedar | Maple |
| --- | --- | --- |
| Root menu | Options navigation tree or Item entries; vertical by default | Item filter bar only; horizontal by default |
| popup-layout | dropdown (default) / full-width / full-height / full | full-width (default) / full |
| Panel origin | Below the current entry | Below the entire filter bar; a standalone Item uses its own lower edge |
| Trigger and positioning | trigger / placement | Click to open downward |
| Overlay and scrolling | Nonmodal; does not lock background scrolling | Root overlay / overlay-closable / lock-scroll / esc-to-close / z-index |
| Code Theme | Controlled by the local ThemeProvider theme | Follows the global theme; no theme prop |
| Navigation-tree methods only | showOption / scrollTo / setCollapsed | — |

Each library exports `NavMenuPopupLayout` with its supported values. Maple's `NavMenuMode` is horizontal only; `options-mode` supports both orientations. The default entry slot replaces the entry's inner content. Maple renders it inside a native button: use non-interactive text/icons and place forms and action buttons in the content slot.

### Arrow direction

Horizontal dropdowns point down when closed/up when open. Vertical inline branches point right/down. Right-opening submenus point right/left. Independent Item arrows follow placement and reverse when open. Arrows follow actual open state, not unaccepted controlled proposals.

### Keyboard

Vertical Up/Down and horizontal Left/Right move focus; Home/End reach first/last. Right expands vertical branches, Down opens horizontal branches, Left returns to parents. Escape closes the current popup and restores reference focus. Enter/Space activates nodes. Disabled nodes are skipped; inputs retain native keys. If narrowing moves a focused item into overflow, focus moves to the overflow entry.

### NavMenuOption Events

| Event | Arguments |
| --- | --- |
| update:model-value | key / null |
| update:active-item | name / null |
| update:expanded-keys | keys |
| update:collapsed | collapsed |
| select | key, original option, original Event |

### NavMenuOption Slots

The default slot contains independent `CNavMenuItem` entries. When present, horizontal menus scroll rather than using `responsive` overflow collection.

label/icon/extra render functions, same-name slots and nodeProps receive `{ option, active, expanded, level }`. `active` means this node itself matches modelValue; ancestor-path emphasis is internal. `expanded` describes branch expansion; level starts at 0.

### NavMenuOption Methods

| Method | Description |
| --- | --- |
| close() | Request closing Item panels and restore focus without changing tree expansion |
| showOption(key?) | Expand ancestors of the specified item, defaulting to current selection; does not select |
| scrollTo(key?) | Expand then scroll to an item; controlled expansion requires parent acceptance |
| resize() | Manually remeasure horizontal overflow |
| setCollapsed(value) | Update uncontrolled collapse or request a controlled update |
| setActiveItem(value) | Update uncontrolled named-Item activation or request a controlled update |

### NavMenuItem Props

When using the content slot, the custom panel takes its accessible name from the entry. Set aria-label or aria-labelledby on the entry when needed. Ensure custom entries have a meaningful name.

Titles follow matching selected options by default. `label` slots take highest precedence: use `<template #label>Advanced filters</template>` for fixed titles or bind a separate reactive variable for manual titles.

`v-model` stores panel selection. Slot `active` indicates business entry state: named entries in a root menu compare root activeItem with name; independent entries match their main value against ordinary options, including 0/empty string. Unknown values/groups/dividers do not activate independent entries. `highlight` overrides emphasis only: true forces it, false removes it, omission follows `active`. It changes neither `active` nor value. Opening a panel does not activate the entry.

`CNavMenuItem` (also `NavMenu.Item`) is an independent top-level entry outside root navigation-tree `modelValue`. Without `name`, each Item highlights from its own value, allowing simultaneous category/region filters. With unique names, root `activeItem/defaultActiveItem` maintains one highlighted entry. Both modes allow only one open Item panel without clearing other panels’ values. Ordinary root navigation uses `options + v-model`. Entries define their own `options` or replace panels through `content`. default customizes the entry; `label`/`icon` customize parts; `option-label`/`option-icon`/`option-extra` customize `options`.

Horizontal menus with default slots scroll rather than collecting entries into overflow, avoiding cloned form content. Pure `options` menus retain automatic overflow collection.  Item panels within one NavMenu are mutually exclusive. Clicking another entry requests closing the previous one; controlled open requires parent acceptance.

| Item prop | Description | Default |
| --- | --- | --- |
| name | Stable unique entry identifier; root activeItem makes named entries mutually exclusive. highlight separately overrides appearance | — |
| label | Entry title when unselected or selection does not match options; supports VNode/render functions | — |
| options / fieldNames | Same options/field mappings as NavMenu | `[]` |
| model-value / default-value | Independent controlled/initial value; string, number or null | `undefined` / `null` |
| highlight | Visual emphasis override without changing active/selection; defaults to active | — |
| hide-on-select | Close the panel after select | `true` |
| unmount-on-close | Destroy panel content after the closing transition; retain it by default | false |
| open / default-open | Controlled / initial panel state | `undefined` / `false` |
| disabled | Disable the entry, also respecting parent menu disabled | `undefined` |
| trigger | Trigger mode | `click` |
| placement | Ordinary dropdown placement; full-height right/left placements align to the corresponding entry edge | `bottom-start` |
| popup-layout | `dropdown`: standard `dropdown` / `full-width`: `full` width below the trigger / `full-height`: `full` height on the right / `full`: fills the available width and height below the trigger | `dropdown` |
| popup-style | Panel CSS; may override full-height width/direction/dimensions | — |
| popup-container / popup-class | Trigger container and popup class | Follow parent menu |
| options-mode | Horizontal/vertical default options-panel layout | `vertical` |

Entry/`content` slots receive `{ modelValue, selectedOption, active, open, select, close }`. select(key,event?) emits `update:modelValue` and select(key,option,event). Custom panels may select outside options, making option undefined and independent active false; use highlight if emphasis is needed. `close()` closes/restores entry focus. Controlled values affect titles/active only after acceptance. Entry-slot active is entry state, while label-render active compares its context option with the Item value. `hideOnSelect` is independent of acceptance; set false for manual confirmation.

Item also emits `update:open`/entry `click` and exposes `select`/`close`/`setOpen`. Full-width/full-height popups are nonmodal without scroll locks/focus traps. They default to body; custom containers must avoid ancestor transforms changing the fixed-position reference.

## Types

### NavMenuOption

```ts
interface NavMenuOption {
  key?: string | number
  type?: 'item' | 'group' | 'divider'
  label?: VNodeChild | ((context: NavMenuRenderContext) => VNodeChild)
  icon?: VNodeChild | ((context: NavMenuRenderContext) => VNodeChild)
  extra?: VNodeChild | ((context: NavMenuRenderContext) => VNodeChild)
  children?: NavMenuOption[]
  disabled?: boolean
  show?: boolean
  props?: HTMLAttributes
}
```

Ordinary options require unique stable keys, using mapped keys when fieldNames is supplied. Numeric 0 is valid. Groups/dividers may omit keys, though explicit keys are recommended for dynamic reordering. Duplicate keys/missing ordinary-item keys throw to prevent ambiguous selection paths. show=false hides nodes/subtrees. Disabled branches propagate downward. Ordinary branches expand; leaves select.

## Design reference

The workspace Naive UI 2.44.1 Menu informed option trees, ancestor paths and content rendering. No Naive UI/TreeMate runtime dependency is introduced. Local Trigger provides popups; public APIs follow Cedar names.

## Reading direction and keyboard interaction

NavMenu inherits the nearest native `dir` and supports runtime changes. Horizontal Left/Right navigation follows reading direction; vertical Up/Down does not reverse. In RTL, Left expands/enters a submenu and Right collapses/returns; LTR uses the opposite mapping. Escape closes the popover and returns focus to its trigger.

Nested data-menu popovers prefer inline end and adjust when space is limited, inheriting their source scope. Explicit `NavMenu.Item` physical `placement` keeps its meaning. Direction changes do not select a menu item or clear filter values.

## CSS Variables

The menu and its submenus share theme variables. `--c-nav-menu-light-bg` controls the background and `--c-nav-menu-light-item-bg-hover` controls hover backgrounds; use the corresponding variables below for selected and disabled states. Variables whose names contain `light` apply in both light and dark themes. Use ThemeProvider to theme a local menu and its popups.

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-nav-menu-arrow-size` | `12px` | `width` |
| `--c-nav-menu-border-radius` | `var(--c-border-radius-sm)` | `border-radius` |
| `--c-nav-menu-content-gap` | `8px` | `gap`, `margin`, `padding` |
| `--c-nav-menu-content-padding` | `12px` | `padding` |
| `--c-nav-menu-divider-color` | `var(--c-color-border-2)` | `background`, `border` |
| `--c-nav-menu-divider-width` | `1px` | `border`, `height`, `width` |
| `--c-nav-menu-focus-offset` | `-2px` | `outline-offset` |
| `--c-nav-menu-focus-width` | `2px` | `outline` |
| `--c-nav-menu-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-nav-menu-icon-size` | `20px` | `font-size` |
| `--c-nav-menu-light-bg` | `var(--c-color-bg-2)` | `background` |
| `--c-nav-menu-light-item-bg-hover` | `var(--c-color-fill-2)` | `background` |
| `--c-nav-menu-light-item-bg-selected` | `var(--c-color-fill-2)` | `background` |
| `--c-nav-menu-light-item-text-color` | `var(--c-color-text-2)` | `color` |
| `--c-nav-menu-light-item-text-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-nav-menu-light-item-text-color-selected` | `var(--c-sys-color-content-brand)` | `color`, `outline` |
| `--c-nav-menu-motion-duration` | `150ms` | `transition` |
| `--c-nav-menu-panel-width` | `min(400px, 100vw)` | Component styling |
| `--c-nav-menu-popup-max-height` | `320px` | `max-height` |
| `--c-nav-menu-popup-min-width` | `180px` | `min-width` |
| `--c-nav-menu-popup-shadow` | `0 6px 24px rgba(0, 0, 0, 0.12)` | `box-shadow` |
| `--c-nav-menu-row-height` | `40px` | `min-height` |
| `--c-nav-menu-row-height-lg` | `48px` | `min-height` |
| `--c-nav-menu-row-height-sm` | `32px` | `min-height` |
| `--c-nav-menu-row-height-xl` | `56px` | `min-height` |
| `--c-nav-menu-row-height-xs` | `28px` | `min-height` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-nav-menu-arrow-size: 12px;
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
