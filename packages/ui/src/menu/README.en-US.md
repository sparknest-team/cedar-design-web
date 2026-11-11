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

### Option values

Give each command a stable, unique `value` when adding, removing or reordering options. Numeric `0`, string `'0'` and boolean `false` are different values.

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
Use `placement` to choose the preferred popup position relative to the trigger. See Menu Props for the available values. Automatic fitting can change the final position when space is limited.

- `placement`: Chooses the position relative to the trigger.

<demo src="./__demos__/placement.vue"></demo>

### Positioning

- `options`: Supplies the available options.

<demo src="./__demos__/positioning.vue"></demo>

### Popup Height

Preview configuration: `:popup-max-height="120"`, `:label="item"`, `:popup-max-height="false"`.

<demo src="./__demos__/popup-height.vue"></demo>

### Switching triggers

Clicking another hover-open sibling trigger closes the previous menu. Clicking inside a submenu keeps its parent open.

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

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Submenus expand in reading order; enter/return horizontal keys follow the current direction, while Up/Down and boundary navigation preserve order and skip disabled options. Menus mounted externally inherit the source direction. Direction changes do not change selection.

## Size and elevation

`size` controls option line height and font `size`; `md` uses the default theme. `elevation=true` uses the default menu shadow, `false` removes it, and a number selects the corresponding global elevation level.

## Keyboard interaction

Enter, Space or an arrow key opens the menu from its trigger. Up/Down and Home/End move between enabled options; Enter or Space activates an option. The forward key enters a submenu and the backward key returns, following the reading direction. Escape requests closing the topmost menu; focus returns to its trigger after closing. Tab requests close and continues browser focus navigation. Editable inputs retain their text-editing keys.

## API

### Value and default value

Use ordinary `v-model`. `modelValue` is the selected option value; `defaultValue` initializes uncontrolled state once, and later changes do not reset it. Explicit binding takes precedence. Initialization emits no `update:modelValue`.

### Menu Props

| Parameter | Description | Type | Default |
| --- | --- | --- | :---: |
| options | Command tree | `MenuOptionData[]` | `[]` |
| field-names | `label/value/children/disabled` field mapping | `MenuFieldNames` | `-` |
| model-value **(v-model)** | Current active value for controlled highlighting | `MenuValue` | `-` |
| open **(v-model)** | Whether the popup is visible | `boolean` | `-` |
| default-open | Uncontrolled default visibility | `boolean` | `false` |
| trigger | Root menu trigger | `'hover' \| 'click' \| 'focus' \| 'contextMenu'` or an array | `'click'` |
| submenu-trigger | How every submenu level expands | `'hover' \| 'click'` | `'hover'` |
| placement | Preferred popup side relative to the trigger, default bottom. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | `MenuPlacement`<br>`'left' \| 'right' \| 'bottom' \| 'top' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `'bottom'` |
| `strategy` | Positioning strategy inherited by every submenu | `'absolute' \| 'fixed'` | `'absolute'` |
| popup-container | Popup mount container | `string \| HTMLElement \| false` | `-` |
| popup-max-height | Default limit, pixel height, or unlimited | `boolean \| number` | `true` |
| hide-on-select | Close the popup after activating a command | `boolean` | `true` |
| auto-fit-popup-width | Match popup width to the trigger | `boolean` | `false` |
| disabled | Disable the menu | `boolean` | `false` |
| align-point | Align to the pointer position at activation; stays in place until the next context menu activation | `boolean` | `false` |
| default-value | Initial uncontrolled selected value | `MenuValue` | `-` |
| size | Menu item size | `MenuSize` | `md` |
| unmount-on-close | Unmount the panel after closing | `boolean` | `true` |
| reference | External trigger element or selector | `MenuReference` | `-` |
| popup-class | Positioning-layer class | `string / array / object` | `-` |
| offset-x / offset-y | Offset relative to the trigger | `string / number` | `0` |
| mouse-enter-delay / mouse-leave-delay | Root menu hover-open / hover-close delay in milliseconds | `number` | `100` |
| close-on-click-reference | Close when the trigger is clicked again | `boolean` | `true` |
| cover | Whether the popup covers its trigger | `boolean` | `false` |
| elevation | Default shadow, no shadow, or a specific elevation level | `boolean / number` | `true` |

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
| ripple | Ripple configuration (Cedar does not render ripples) | `boolean` |
| props | HTML attributes forwarded to the row element | `HTMLAttributes` |

The render context is `{ option, active, level }`. `type: 'group'` is visual only and does not add a level; `type: 'divider'` is neither focusable nor activatable.

### Menu Events

| Event | Description | Arguments |
| --- | --- | --- |
| update:model-value | Active value update request | `value: MenuValue` |
| open-change | Visibility update request | `open: boolean` |
| select | A menu item was activated | `value, option, event` |
| update:open | Open-state update request | `open: boolean` |
| key-escape | Root menu handles Escape | None |
| open / opened | Opening starts / completes | None |
| close / closed | Closing starts / completes | None |
| click-outside | Outside click on the topmost popup | `event: Event` |

### Menu Slots

| Slot | Description | Prop |
| --- | --- | --- |
| default | Trigger element | - |
| content | Hand-written content, pairs with `MenuOption` | - |
| footer | Footer | - |
| option-label | Render every option's main content | `{ option, active, level }` |
| option-icon | Render every option's icon | `{ option, active, level }` |
| option-extra | Render every option's trailing content | `{ option, active, level }` |

### `<MenuOption>`

Use MenuOption for SplitButton actions or handwritten items in `content`. Configure `label`, `value`, `disabled`, `ripple` and `highlight`. Label renderers and the `default`, `icon` and `suffix` slots receive `{ option, active, level }`. Activating an item emits `click`. `highlight` changes appearance without selecting the value. Configure groups and submenus through `options`.



### Menu Methods

Use `open()` to open the menu, `close()` to close it, `resize()` to update positioning, and `setReference(reference?)` to change the trigger element.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-menu-bg` | `var(--c-color-bg-popup)` | `background-color` |
| `--c-menu-border-color` | `var(--c-color-fill-3)` | `background-color`, `border`, `border-top` |
| `--c-menu-border-radius` | `var(--c-border-radius-md)` | `border-radius` |
| `--c-menu-box-shadow` | `var(--c-shadow2-down)` | `box-shadow` |
| `--c-menu-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-menu-group-title-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-menu-group-title-height` | `var(--c-size-5)` | `line-height` |
| `--c-menu-group-title-margin-top` | `var(--c-spacing-4)` | `margin-top` |
| `--c-menu-group-title-padding-horizontal` | `var(--c-spacing-6)` | `padding` |
| `--c-menu-group-title-text-color` | `var(--c-color-text-3)` | `color` |
| `--c-menu-max-height` | `var(--c-size-50)` | `max-height` |
| `--c-menu-option-bg` | `transparent` | `background-color` |
| `--c-menu-option-bg-disabled` | `transparent` | `background-color` |
| `--c-menu-option-bg-hover` | `var(--c-color-fill-2)` | `background-color` |
| `--c-menu-option-bg-selected` | `var(--c-color-fill-2)` | `background-color` |
| `--c-menu-option-bg-selected-hover` | `var(--c-menu-option-bg-selected)` | `background-color` |
| `--c-menu-option-font-weight-selected` | `var(--c-font-weight-500)` | `font-weight` |
| `--c-menu-option-height` | `var(--c-size-9)` | `line-height` |
| `--c-menu-option-icon-margin-right` | `var(--c-spacing-4)` | `margin-inline-end` |
| `--c-menu-option-padding-horizontal` | `var(--c-spacing-6)` | `padding` |
| `--c-menu-option-suffix-icon-margin-left` | `var(--c-spacing-6)` | `margin-inline-start` |
| `--c-menu-option-text-color` | `var(--c-color-text-2)` | `color` |
| `--c-menu-option-text-color-disabled` | `var(--c-color-text-4)` | `color` |
| `--c-menu-option-text-color-hover` | `var(--c-color-text-1)` | `color` |
| `--c-menu-option-text-color-selected` | `var(--c-color-text-1)` | `color` |
| `--c-menu-padding-vertical` | `var(--c-spacing-2)` | `margin`, `margin-top`, `padding` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-menu-border-color: var(--c-color-fill-3);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->

### Option state colors

Use `--c-menu-option-bg-selected` for selected rows and `--c-menu-option-bg-selected-hover` for their hover background. Disabled colors take precedence over selected, hover and focus styles.
