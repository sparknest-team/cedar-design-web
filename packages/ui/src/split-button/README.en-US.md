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

<demo src="./__demos__/appearance-lab.en-US.vue"></demo>

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

`click` is a notification event. The component does not process listener return values or automatically change its loading state. Business code controls `button-props.loading`; for asynchronous operations, reset it in `finally`. Disabled or loading links have no effective `href`.

<demo src="./__demos__/async-action.en-US.vue"></demo>

## Reading direction

The main button sits at inline start and the menu button at inline end. LTR/RTL changes do not swap business actions or emit extra selections. Enter/Space retain native button behavior. The menu button opens via Up/Down and skips disabled options; Home/End reaches boundaries, Enter selects, and Escape closes and restores focus. Popovers inherit trigger direction; start/end alignment follows direction while explicit left/right stays physical. Custom downward icons are not mirrored automatically.

## Menu button name

The menu trigger defaults to a localized “More actions” name. Override it with `aria-label` or `aria-labelledby` through `trigger-button-props`.

## Triggers and positioning

### Popup placement

Use `placement` to position the extra-actions menu. See `MenuPlacement` for the available values.

## API

### SplitButton Props

| Parameter | Description | Type | Default |
| -------------------- | ----------------------------------------- | ------------------------------------------------ | :-------: |
| open **(v-model)** | Whether the menu is open | `boolean` | `-` |
| default-open | Default menu open state in uncontrolled mode | `boolean` | `false` |
| disabled | Whether the entire split button is disabled | `boolean` | `false` |
| status | Button group semantic status | `SemanticStatus`<br>`'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `default` |
| variant | Button group variant | `ButtonVariant`<br>`'text' \| 'default' \| 'outline' \| 'tonal'` | `default` |
| size | Button group size; does not affect menu item size | `ComponentSize`<br>`'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `md` |
| color | Background color | `string` | `undefined` |
| text-color | Custom text color | `string` | `''` |
| elevation | Button group elevation | `boolean \| number` | `true` |
| button-props | Primary button props, including native attributes and events | `SplitButtonButtonProps` | `-` |
| trigger-button-props | Menu trigger button props, including native attributes and events | `SplitButtonButtonProps` | `-` |
| trigger | Menu trigger method | `'hover' \| 'click' \| 'focus' \| 'contextMenu'` | `click` |
| placement | Preferred popup side relative to the trigger, default bottom. With the default auto-fit-position enabled, Trigger may flip and constrain it to the viewport when space is limited; this is not a fixed final position | `MenuPlacement`<br>`'left' \| 'right' \| 'bottom' \| 'top' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end'` | `bottom` |
| popup-container | Menu mount container | `PopupContainer` | `-` |
| popup-max-height | Maximum menu height | `boolean \| number` | `true` |
| popup-class | Menu popup class | `string \| array \| object` | `-` |
| offset-x | Screen-horizontal offset; numbers are px, strings are converted as lengths | `string \| number` | `0` |
| offset-y | Screen-vertical offset; numbers are px, strings are converted as lengths | `string \| number` | `0` |
| hide-on-select | Close the menu after selection | `boolean` | `true` |

### SplitButton Events

| Event | Description | Arguments |
| ----------- | -------------------------- | -------------------- |
| update:open | Emitted when an open-state update is requested | open: `boolean` |
| open-change | Emitted when an open-state update is requested | open: `boolean` |
| click | Emitted when the primary button is clicked | event: `MouseEvent` |
| select | Emitted when a menu option is selected | value, option, event |

### SplitButton Slots

| Slot | Description | Prop |
| ------- | ---------------- | --------------- |
| default | Primary button content | - |
| icon | Menu trigger button icon | open: `boolean` |
| content | Menu content | - |

### SplitButton Methods

| Method | Description |
| -------- | -------------------------- |
| open() | Request menu opening; disabled prevents it |
| close() | Request menu closing |
| resize() | Recalculate menu position |

Controlled `open` emits update requests only; callers must update it. Main-button clicks bubble normally without opening the menu.

`click`, like Button's event, is a notification and does not await its listener result. Business code controls main-button loading through `button-props.loading`.

## Types

```ts
import type { SplitButtonInstance, SplitButtonProps } from '@cedar-design/ui-vue'
```

## CSS Variables

<!-- component-css-variables:start -->

This component declares no independent public CSS variables. Use the configuration and layout APIs documented on this page. The appearance of composed controls follows the public variables of `button`, `menu`; a shared variable can affect other controls in the same DOM subtree.

Internal custom properties and measurement values are implementation details and are not customization APIs.

<!-- component-css-variables:end -->
