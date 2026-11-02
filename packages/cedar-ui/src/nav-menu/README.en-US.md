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

## NavMenu API

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
| theme | Code Theme | light / dark | Inherit Sider, otherwise light |
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
| overflow-label | Overflow-entry label | string | More |
| node-props | Node DOM attributes/events; internal selection, disabled and keyboard semantics remain | (context) => Record<string, unknown> | — |

Controlled props follow supplied values; update events are requests only. `default-*` initializes once, not on later changes. Selection and expansion are independent. `showOption` does not select.

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

### Events

| Event | Arguments |
| --- | --- |
| update:model-value | key / null |
| update:active-item | name / null |
| update:expanded-keys | keys |
| update:collapsed | collapsed |
| select | key, original option, original Event |

### Slots

The default slot contains independent `CNavMenuItem` entries. When present, horizontal menus scroll rather than using `responsive` overflow collection.

label/icon/extra render functions, same-name slots and nodeProps receive `{ option, active, expanded, level }`. `active` means this node itself matches modelValue; ancestor-path emphasis is internal. `expanded` describes branch expansion; level starts at 0.

### Cross-platform contract

Both libraries create panel content on first open and retain it when closed or switched, including local drafts and expanded branches. With `unmount-on-close`, content is destroyed after the closing transition and recreated on the next open; the Item's own selected value remains intact. Applications own draft submission, resets and filter application.

Root `close()` requests closing Item panels and restores entry focus without changing selected values, active-item or desktop tree expanded-keys. Controlled open values remain authoritative when closure is rejected. Entries with neither options nor a content slot never open; asynchronous options follow the current open state when they arrive. KeepAlive suspension hides panels and requests closure; controlled state remains authoritative on activation.

Item values, open state, events, slot contexts and `select/close/setOpen` methods share the same contract. Both roots expose `close/resize/setActiveItem`. Names must be unique within the menu; changing a name releases the previous one. Batched swaps and insertions validate the final rendered names. Vertical options expand enabled ancestors of the selected value on initialization and value/options updates. Users can still collapse branches manually.

| Capability | Cedar | Maple |
| --- | --- | --- |
| Root menu | options tree or Item entries; vertical by default | Item filter bar only; horizontal by default |
| popup-layout | dropdown (default) / full-width / full-height / full | full-width (default) / full |
| Panel origin | Individual entry bottom | Entire filter bar bottom; standalone Item uses its own bottom |
| Trigger and placement | trigger / placement | Click to open downward |
| Backdrop and scrolling | Non-modal; background scroll remains available | Root overlay / overlay-closable / lock-scroll / esc-to-close / z-index |
| Theme | theme override | Global theme; no theme prop |
| Tree-only methods | showOption / scrollTo / setCollapsed | — |

Each library exports `NavMenuPopupLayout` with its supported values. Maple's `NavMenuMode` is horizontal only; `options-mode` supports both orientations. The default entry slot replaces the entry's inner content. Maple renders it inside a native button: use non-interactive text/icons and place forms and action buttons in the content slot.

### Methods

| Method | Description |
| --- | --- |
| close() | Request closing Item panels and restore focus without changing tree expansion |
| showOption(key?) | Expand ancestors of the specified item, defaulting to current selection; does not select |
| scrollTo(key?) | Expand then scroll to an item; controlled expansion requires parent acceptance |
| resize() | Manually remeasure horizontal overflow |
| setCollapsed(value) | Update uncontrolled collapse or request a controlled update |
| setActiveItem(value) | Update uncontrolled named-Item activation or request a controlled update |

### Arrow direction

Horizontal dropdowns point down when closed/up when open. Vertical inline branches point right/down. Right-opening submenus point right/left. Independent Item arrows follow placement and reverse when open. Arrows follow actual open state, not unaccepted controlled proposals.

### Keyboard

Vertical Up/Down and horizontal Left/Right move focus; Home/End reach first/last. Right expands vertical branches, Down opens horizontal branches, Left returns to parents. Escape closes the current popup and restores reference focus. Enter/Space activates nodes. Disabled nodes are skipped; inputs retain native keys. If narrowing moves a focused item into overflow, focus moves to the overflow entry.

## NavMenu.Item API

Titles follow matching selected options by default. `label` slots take highest precedence: use `<template #label>Advanced filters</template>` for fixed titles or bind a separate reactive variable for manual titles. `update-label` is removed.

`v-model` stores panel selection. Slot `active` indicates business entry state: named entries in a root menu compare root activeItem with name; independent entries match their main value against ordinary options, including 0/empty string. Unknown values/groups/dividers do not activate independent entries. `highlight` overrides emphasis only: true forces it, false removes it, omission follows `active`. It changes neither `active` nor value. Opening a panel does not activate the entry.

`CNavMenuItem` (also `NavMenu.Item`) is an independent top-level entry outside root navigation-tree `modelValue`. Without `name`, each Item highlights from its own value, allowing simultaneous category/region filters. With unique names, root `activeItem/defaultActiveItem` maintains one highlighted entry. Both modes allow only one open Item panel without clearing other panels’ values. Ordinary root navigation uses `options + v-model`. Entries define their own `options` or replace panels through `content`. default customizes the entry; `label`/`icon` customize parts; `option-label`/`option-icon`/`option-extra` customize `options`.

Horizontal menus with default slots scroll rather than collecting entries into overflow, avoiding cloned form content. Pure `options` menus retain automatic overflow collection. New Item does not support legacy child collection. Item panels within one NavMenu are mutually exclusive. Clicking another entry requests closing the previous one; controlled open requires parent acceptance.

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

## Migrating from older versions

Legacy child collection and state aliases are removed. New `NavMenu.Item` is an independent top-level entry with different usage.

| Previous usage | Current usage |
| --- | --- |
| Legacy Item/SubMenu/ItemGroup components | Use options/children/type=group for navigation trees; new NavMenu.Item for custom top-level entries |
| selectedKeys/defaultSelectedKeys arrays | modelValue/defaultValue single key |
| openKeys/defaultOpenKeys | expandedKeys/defaultExpandedKeys |
| menu-item-click | select(key, option, event) |
| pop/popButton mode | vertical + collapsed; horizontal remains horizontal |
| Child title/icon slots | Root scoped label/icon/extra slots or option VNodes |
| Built-in collapse button/breakpoint | External buttons control collapsed; containers handle responsive layout |
| Unrestricted triggerProps/tooltipProps forwarding | Explicit popupContainer/popupClass props |

All library demos, exports, global types and resolver entries are migrated. Styles use BEM `c-nav-menu__*` / `c-nav-menu--*`; old selectors and unused tokens are removed.

## Design reference

The workspace Naive UI 2.44.1 Menu informed option trees, ancestor paths and content rendering. No Naive UI/TreeMate runtime dependency is introduced. Local Trigger provides popups; public APIs follow Cedar names.

## Style variables

| Variable | Default |
| --- | --- |
| --c-nav-menu-font-size | `var(~'--c-font-size-body-3')` |
| --c-nav-menu-border-radius | `var(~'--c-border-radius-sm')` |
| --c-nav-menu-light-bg | `var(~'--c-color-bg-2')` |
| --c-nav-menu-light-item-bg-hover | `var(~'--c-color-fill-2')` |
| --c-nav-menu-light-item-bg-selected | `var(~'--c-color-fill-2')` |
| --c-nav-menu-light-item-text-color | `var(~'--c-color-text-2')` |
| --c-nav-menu-light-item-text-color-selected | `rgb(var(~'--c-primary-6'))` |
| --c-nav-menu-light-item-text-color-disabled | `var(~'--c-color-text-4')` |
| --c-nav-menu-dark-bg | `var(~'--c-color-menu-dark-bg')` |
| --c-nav-menu-dark-item-bg-hover | `var(~'--c-color-menu-dark-hover')` |
| --c-nav-menu-dark-item-bg-selected | `var(~'--c-color-menu-dark-hover')` |
| --c-nav-menu-dark-item-text-color | `var(~'--c-color-text-4')` |
| --c-nav-menu-dark-item-text-color-selected | `var(~'--c-color-white')` |
| --c-nav-menu-dark-item-text-color-disabled | `var(~'--c-color-text-2')` |
| --c-nav-menu-row-height | `40px` |
| --c-nav-menu-row-height-xs | `28px` |
| --c-nav-menu-row-height-sm | `32px` |
| --c-nav-menu-row-height-lg | `48px` |
| --c-nav-menu-row-height-xl | `56px` |
| --c-nav-menu-content-gap | `8px` |
| --c-nav-menu-content-padding | `12px` |
| --c-nav-menu-icon-size | `20px` |
| --c-nav-menu-arrow-size | `12px` |
| --c-nav-menu-focus-width | `2px` |
| --c-nav-menu-focus-offset | `-2px` |
| --c-nav-menu-divider-width | `1px` |
| --c-nav-menu-divider-color | `var(--c-color-border-2)` |
| --c-nav-menu-popup-min-width | `180px` |
| --c-nav-menu-popup-max-height | `320px` |
| --c-nav-menu-popup-shadow | `0 6px 24px rgb(0 0 0 / 12%)` |
| --c-nav-menu-motion-duration | `150ms` |
| --c-nav-menu-panel-width | `min(400px, 100vw)` |

`popup-layout="full"` starts at the bottom edge of the trigger, spans the viewport width and fills the remaining viewport height below it. On Maple, the same layout starts below the entire filter bar. Mobile defaults to full-width; desktop defaults to dropdown.


## Reading direction and keyboard interaction

NavMenu inherits the nearest native `dir` and reacts to changes. Horizontal navigation follows reading direction; vertical up/down navigation stays unchanged. Data-menu branches mirror expand/parent keys and prefer the inline-end side for nested popups. Popups retain the source direction. Explicit Item placement remains physical; changing direction does not select an item or clear filters.
