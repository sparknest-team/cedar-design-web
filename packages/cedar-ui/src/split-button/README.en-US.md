---
lang: en-US
permalink: /en/components/split-button/
---

# Split Button

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

- `placement`: Chooses the position relative to the trigger.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Variants

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `variant` | Button group variant | Variants |
| `disabled` | Whether the entire split button is disabled | Disabled |
| `button-props` | Props for the primary button | Disabled |
| `trigger-button-props` | Props for the menu trigger button | Disabled |
| `placement` | Preferred popup side relative to the trigger, default bottom. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | Appearance configuration comparison |
<!-- demo-config-notes:end -->


- `variant`: Selects the visual variant.

<demo src="./__demos__/variants.vue"></demo>

### Disabled

- `disabled`: Prevents user interaction.

<demo src="./__demos__/disabled.vue"></demo>

### Appearance configuration comparison

Choose an axis to compare its available values with the same content and model. Other settings remain unchanged while comparing.

<demo src="./__demos__/appearance-lab.vue"></demo>

## Content and presentation

### Popup

<!-- demo-config-notes:start -->
#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --- | --- | --- |
| `placement` | Preferred popup side relative to the trigger, default bottom. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | Popup |
| `offset-y` | Screen-vertical offset; numbers are px, strings are converted as lengths | Popup |
| `popup-max-height` | Maximum menu height | Popup |
| `hide-on-select` | Close the menu after selection | Popup |
<!-- demo-config-notes:end -->


- `placement`: Chooses the position relative to the trigger.

<demo src="./__demos__/popup.vue"></demo>

## Customization and slots

### Custom Icon

Preview configuration: `label="保存草稿"`, `value="draft"`, `label="保存并发布"`, `value="publish"`.

<demo src="./__demos__/custom-icon.vue"></demo>

## Interaction and control

### Controlled

Preview configuration: `v-model:open="open"`, `label="保存草稿"`, `value="draft"`, `label="保存并发布"`.

<demo src="./__demos__/controlled.vue"></demo>

## Async and dynamic data

### Async Action

click is a normal emitted event and supports async handlers. Business state controls loading; restore it in finally. Listener Promises do not automatically drive loading. Disabled/loading links have no effective href.

<demo src="./__demos__/async-action.vue"></demo>

## Reading direction

The primary action sits at reading start and the menu button at reading end. Direction changes neither swap actions nor select a value. Enter/Space retains native button behavior. Up/Down opens the menu and skips disabled items; Home/End focuses boundaries, Enter selects and Escape closes and restores focus. Popovers inherit the reference direction; start/end alignment follows reading direction while explicit left/right remains physical. Downward slot graphics are not mirrored.

## API

### `<split-button>` Props

| Parameter | Description | Type | Default |
| -------------------- | ----------------------------------------- | ------------------------------------------------ | :-------: |
| open **(v-model)** | Whether the menu is open | `boolean` | `-` |
| default-open | Default menu open state in uncontrolled mode | `boolean` | `false` |
| disabled | Whether the entire split button is disabled | `boolean` | `false` |
| status | Button group semantic status | `SemanticStatus` | `default` |
| variant | Button group variant | `ButtonVariant` | `default` |
| size | Button group size | `ComponentSize` | `md` |
| color | Background color | `string` | `''` |
| text-color | Custom text color | `string` | `''` |
| elevation | Button group elevation | `boolean \| number` | `true` |
| button-props | Props for the primary button | `Partial<ButtonProps>` | `-` |
| trigger-button-props | Props for the menu trigger button | `Partial<ButtonProps>` | `-` |
| trigger | Menu trigger method | `'hover' \| 'click' \| 'focus' \| 'contextMenu'` | `click` |
| placement | Preferred popup side relative to the trigger, default bottom. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | `MenuPlacement`: the standard twelve placements | `bottom` |
| popup-container | Menu mount container | `PopupContainer` | `-` |
| popup-max-height | Maximum menu height | `boolean \| number` | `true` |
| popup-class | Menu popup class | `string \| array \| object` | `-` |
| offset-x | Screen-horizontal offset; numbers are px, strings are converted as lengths | `string \| number` | `0` |
| offset-y | Screen-vertical offset; numbers are px, strings are converted as lengths | `string \| number` | `0` |
| hide-on-select | Close the menu after selection | `boolean` | `true` |

### `<split-button>` Events

| Event | Description | Arguments |
| ----------- | -------------------------- | -------------------- |
| update:open | Emitted when an open-state update is requested | open: `boolean` |
| open-change | Emitted when the menu open state changes | open: `boolean` |
| click | Emitted when the primary button is clicked | event: `MouseEvent` |
| select | Emitted when a menu option is selected | value, option, event |

### `<split-button>` Slots

| Slot | Description | Arguments |
| ------- | ---------------- | --------------- |
| default | Primary button content | - |
| icon | Menu trigger button icon | open: `boolean` |
| content | Menu content | - |

### Instance methods

| Method | Description |
| -------- | -------------------------- |
| open() | Request menu opening; disabled prevents it |
| close() | Request menu closing |
| resize() | Recalculate menu position |

Controlled `open` emits update requests only; callers must update it. Main-button clicks bubble normally without opening the menu.

Like Button, `click` is a Promise-consuming `onClick` callback prop supporting `@click`, not a second emitted notification. If `button-props.onClick` is also supplied, each handler runs once.

Both platforms independently copy bodies, props, style dependency entries and contract tests. Cedar adapts positioning through Menu without shared instances/runtime.

## Type definitions

```ts
import type { SplitButtonInstance, SplitButtonProps } from '@cedar-design/ui'
```


### Placement semantics and configuration

The menu side passes through the internal Menu placement to Trigger and uses MenuPlacement, without a second positioning entry.
