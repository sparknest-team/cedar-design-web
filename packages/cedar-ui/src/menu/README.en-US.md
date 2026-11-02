---
lang: en-US
permalink: /en/components/menu/
---

# Menu

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `options`: Supplies the available options.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Disabled

- `disabled`: Prevents user interaction.

<demo src="./__demos__/disabled.vue"></demo>

## Options and hierarchy

### Groups, submenus and option content

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `options` | Command tree | Groups, submenus and option content, Active Rendering |
| `hide-on-select` | Close the popup after activating a command | Active Rendering |
| `submenu-trigger` | How every submenu level expands | Active Rendering |
<!-- demo-config-notes:end -->


Compare flat groups, nested menus and option content. Expand or select options to inspect their hierarchy.

<demo src="./__demos__/structure-comparison.vue"></demo>

### Active Rendering

- `options`: Supplies the available options.

<demo src="./__demos__/active-rendering.vue"></demo>

## Triggers and positioning

### Context Menu

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `trigger` | Root menu trigger | Context Menu, Trigger |
| `options` | Command tree | Context Menu, Positioning |
| `align-point` | Align to the pointer position at activation; stays in place until the next context menu activation | Context Menu |
| `placement` | Preferred popup side relative to the trigger, default bottom. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | Placement |
| `strategy` | Positioning strategy inherited by every submenu | Positioning |
| `submenu-trigger` | How every submenu level expands | Positioning |
<!-- demo-config-notes:end -->


- `options`: Supplies the available options.

<demo src="./__demos__/context-menu.vue"></demo>

### Trigger

Preview configuration: `trigger="click"`, `label="Option 1"`, `label="Option 2"`, `trigger="hover"`.

<demo src="./__demos__/trigger.vue"></demo>

### Placement

- `placement`: Chooses the position relative to the trigger.

<demo src="./__demos__/placement.vue"></demo>

### Positioning

- `options`: Supplies the available options.

<demo src="./__demos__/positioning.vue"></demo>

### Popup Height

Preview configuration: `:popup-max-height="120"`, `:label="item"`, `:popup-max-height="false"`.

<demo src="./__demos__/popup-height.vue"></demo>

## State and content customization

### Selection

- `options`: Supplies the available options.

<demo src="./__demos__/selection.vue"></demo>

### Controlled

Preview configuration: `v-model:open="open"`, `label="Option 1"`, `label="Option 2"`.

<demo src="./__demos__/controlled.vue"></demo>

### Footer

<demo src="./__demos__/footer.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"` and supports runtime and nested overrides. Submenus and horizontal parent/child navigation follow the current reading direction. Vertical and boundary navigation keeps item order and skips disabled items. Portals inherit their source direction; switching direction preserves selection.

## API

### Value and default value

Use ordinary `v-model`. `modelValue` is the selected option value; `defaultValue` initializes uncontrolled state once, and later changes do not reset it. Explicit binding takes precedence. Initialization emits no `update:modelValue`.

### `<Menu>` Props

| Parameter | Description | Type | Default |
| --- | --- | --- | :---: |
| options | Command tree | `MenuOptionData[]` | `[]` |
| field-names | `label/value/children/disabled` field mapping | `MenuFieldNames` | `-` |
| model-value **(v-model)** | Current active value for controlled highlighting | `MenuValue` | `-` |
| open **(v-model)** | Whether the popup is visible | `boolean` | `-` |
| default-open | Uncontrolled default visibility | `boolean` | `false` |
| trigger | Root menu trigger | `'hover' \| 'click' \| 'focus' \| 'contextMenu'` | `'click'` |
| submenu-trigger | How every submenu level expands | `'hover' \| 'click'` | `'hover'` |
| placement | Preferred popup side relative to the trigger, default bottom. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | `MenuPlacement` | `'bottom'` |
| `strategy` | Positioning strategy inherited by every submenu | `'absolute' \| 'fixed'` | `'absolute'` |
| popup-container | Popup mount container | `string \| HTMLElement \| false` | `-` |
| popup-max-height | Default limit, pixel height, or unlimited | `boolean \| number` | `true` |
| hide-on-select | Close the popup after activating a command | `boolean` | `true` |
| auto-fit-popup-width | Match popup width to the trigger | `boolean` | `false` |
| disabled | Disable the menu | `boolean` | `false` |
| align-point | Align to the pointer position at activation; stays in place until the next context menu activation | `boolean` | `false` |

### `MenuOptionData`

| Field | Description | Type |
| --- | --- | --- |
| type | Plain command, group or divider | `'item' \| 'group' \| 'divider'` |
| label | Main content | `VNodeChild \| (context) => VNodeChild` |
| icon | Leading icon | `VNodeChild \| (context) => VNodeChild` |
| extra | Trailing content such as a shortcut | `VNodeChild \| (context) => VNodeChild` |
| value | Value passed to events on activation | `any` |
| children | Child commands; a plain option with children becomes a submenu | `MenuOptionData[]` |
| disabled | Disable this item and its descendants | `boolean` |
| show | Whether to render | `boolean` |
| ripple | Whether to show the click ripple | `boolean` |
| props | HTML attributes forwarded to the row element | `HTMLAttributes` |

The render context is `{ option, active, level }`. `type: 'group'` is visual only and does not add a level; `type: 'divider'` is neither focusable nor activatable.

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:model-value | Active value update request | `value: MenuValue` |
| open-change | Visibility update request | `open: boolean` |
| select | A menu item was activated | `value, option, event` |

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| default | Trigger element | - |
| content | Hand-written content, pairs with `MenuOption` | - |
| footer | Footer | - |
| option-label | Render every option's main content | `{ option, active, level }` |
| option-icon | Render every option's icon | `{ option, active, level }` |
| option-extra | Render every option's trailing content | `{ option, active, level }` |

### `<MenuOption>`

Retained for SplitButton and a few handwritten `content` cases. Props are `label`, `value`, `disabled`, `ripple` and `highlight`. The `label` render function and `default`/`icon`/`suffix` slots receive `{ option, active, level }`. Clicking emits `click`. `highlight` controls visual emphasis without committing selection. Groups/submenus are described only through `options`; `MenuGroup` and `MenuSubmenu` are no longer exported.

### Instance methods and keyboard

The instance exposes `open()`, `close()`, `resize()` and `setReference(reference?)`. Root menus support Up/Down, Home/End and Enter. Right enters submenus; Left/Escape returns. Each Escape closes only the topmost layer and restores focus.

Classes, CSS variables and internal DOM markers consistently use `c-menu-*`, `--c-menu-*` and `data-menu-*`.

### State and duration variables

Disabled overrides selection, pointer hover and keyboard focus. Selected hover uses a separate role, inheriting the selected background by default; override it for additional feedback. Both platforms paint selected backgrounds directly on options.

| Token | Default |
| --- | --- |
| `--c-menu-option-bg-selected-hover` | `var(--c-menu-option-bg-selected)` |

### Data identity and trigger switching

Reorderable items should provide stable unique values; internal Vue keys derive from business values. Numeric `0`, string `'0'` and boolean `false` remain distinct. Groups, separators and display items without values retain identity through their original option objects; no public key alias is added. Clicking another sibling trigger that is already hover-open closes the previous menu. Clicking inside a submenu does not incorrectly close its parent.


### Placement semantics and configuration

MenuPlacement uses the twelve-value TriggerPlacement domain. Both prop and type describe the preferred popup side relative to its trigger. The old MenuPosition export has been removed.
