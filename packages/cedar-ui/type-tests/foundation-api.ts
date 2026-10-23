import { useVModel } from '@cedarjs/use'

const props = { open: false, value: 1 }
const emit = (event: 'update:open' | 'close', value: boolean) => { void event; void value }
useVModel(props, 'open', { emit })
useVModel(props, 'value', { eventName: 'change', emit: (event: 'change', value: number) => { void event; void value } })
// @ts-expect-error the default request event is update:open, not change
useVModel(props, 'open', { emit: (event: 'change', value: boolean) => { void event; void value } })
// @ts-expect-error the custom request event must be accepted by the emitter
useVModel(props, 'value', { eventName: 'change', emit: (event: 'other', value: number) => { void event; void value } })

import type { TriggerProps } from '@cedarjs/ui/trigger'
const renderProps: TriggerProps = { unmountOnClose: false, showArrow: true, duration: { enter: 120, leave: 80 }, popupClass: 'position', contentClass: 'content', contentStyle: { padding: '8px' }, arrowClass: 'arrow', arrowStyle: { background: 'red' } }
void renderProps
// @ts-expect-error transition duration uses milliseconds
const invalidDuration: TriggerProps = { duration: 'fast' }
void invalidDuration

import type { MenuProps, MenuOptionData, MenuFieldNames } from '@cedarjs/ui/menu'
import type { TriggerInstance } from '@cedarjs/ui/trigger'
const fields: MenuFieldNames = { label: 'text', value: 'id', children: 'items' }
const menuOptions: MenuOptionData[] = [{ text: 'Branch', id: 'p', items: [{ text: 'Leaf', id: false }] }]
const menuSelection: MenuProps = { modelValue: 'leaf', options: menuOptions, fieldNames: fields, popupContainer: false }
void menuSelection
// @ts-expect-error Menu is a single-value command menu
const invalidMultipleMenu: MenuProps = { multiple: true }
// @ts-expect-error options must be an array
const invalidMenuOptions: MenuProps = { options: { value: 1 } }
// @ts-expect-error field mapping names must be strings
const invalidMenuFields: MenuProps = { fieldNames: { value: 42 } }
void invalidMenuOptions
void invalidMenuFields
void invalidMultipleMenu
const restoreMenuReference = (trigger: TriggerInstance) => trigger.focusReference()
void restoreMenuReference

import type { TooltipProps, TooltipInstance } from '@cedarjs/ui/tooltip'
import type { PopoverProps, PopoverInstance } from '@cedarjs/ui/popover'
const tooltipControls: TooltipProps = { trigger: ['hover', 'focus'], disabled: false, unmountOnClose: false, duration: { enter: 80, leave: 60 }, showArrow: true, contentClass: 'content', popupClass: 'position', color: 'red', textColor: 'white', size: 'xs' }
const popoverControls: PopoverProps = { title: 'Title', content: 'Body', trigger: 'manual', unmountOnClose: true, popupHoverStay: false, restoreFocus: false, duration: 80 }
const bubbleMethods = (tooltip: TooltipInstance, popover: PopoverInstance) => {
  tooltip.setReference(); tooltip.open(); tooltip.close(); tooltip.focusReference()
  popover.setReference(); popover.resize(); popover.allowClose(); popover.getReference()
}
void tooltipControls; void popoverControls; void bubbleMethods
// @ts-expect-error duration must use milliseconds
const invalidTooltipDuration: TooltipProps = { duration: 'quick' }
// @ts-expect-error unknown interaction is rejected
const invalidPopoverTrigger: PopoverProps = { trigger: 'longpress' }
void invalidTooltipDuration; void invalidPopoverTrigger

// Menu uses a data-first command tree and keeps MenuOption for composition.
import type { MenuInstance, MenuOptionProps } from '@cedarjs/ui/menu'
const optionProps: MenuOptionProps = { label: () => 'rendered', value: false }
const dropdownOptions: MenuOptionData[] = [
  { type: 'group', label: 'Actions', children: [{ label: ({ active }) => active ? 'Active' : 'Edit', value: 'edit' }] },
  { type: 'divider' },
]
const menuMethods = (menu: MenuInstance) => {
  menu.open(); menu.close(); menu.resize(); menu.setReference()
}
void optionProps; void dropdownOptions; void menuMethods
