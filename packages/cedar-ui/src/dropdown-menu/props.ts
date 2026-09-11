import type { PropType } from 'vue'
import { triggerPropDefaults, menuDefaults, rootPlatformProps, componentSizes, type ComponentSize, type DropdownMenuPosition, type DropdownMenuReference, type DropdownMenuSubmenuTrigger } from './platform'
import type { DropdownMenuFieldNames } from './selection'
import type { DropdownMenuOption, MenuValue } from './types'
export type { DropdownMenuOption, MenuOptionLabel, MenuOptionLabelRender } from './types'
export type DropdownMenuSize = ComponentSize
export const dropdownMenuProps = {
  options: { type: Array as PropType<DropdownMenuOption[]>, default: () => [] },
  fieldNames: Object as PropType<DropdownMenuFieldNames>,
  modelValue: { type: [String, Number, Boolean, Object] as PropType<MenuValue>, default: undefined },
  size: { type: String as PropType<ComponentSize>, default: 'md', validator: (value: unknown) => componentSizes.includes(value as ComponentSize) },
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  unmountOnClose: { type: Boolean, default: menuDefaults.unmountOnClose },
  trigger: { type: [String, Array] as PropType<'click' | 'hover' | 'focus' | 'contextMenu' | ('click' | 'hover' | 'focus' | 'contextMenu')[]>, default: 'click' },
  submenuTrigger: { type: String as PropType<DropdownMenuSubmenuTrigger>, default: menuDefaults.submenuTrigger, validator: (value: unknown) => value === 'click' || value === 'hover' },
  placement: { type: String as PropType<DropdownMenuPosition>, default: 'bottom' },
  reference: { type: [String, Object] as PropType<DropdownMenuReference>, default: undefined },
  ...rootPlatformProps,
  popupContainer: triggerPropDefaults.popupContainer,
  popupClass: [String, Array, Object],
  offsetX: { type: [String, Number], default: 0 },
  offsetY: { type: [String, Number], default: 0 },
  mouseEnterDelay: { type: Number, default: menuDefaults.mouseEnterDelay },
  mouseLeaveDelay: { type: Number, default: menuDefaults.mouseLeaveDelay },
  closeOnClickReference: { type: Boolean, default: menuDefaults.closeOnClickReference },
  cover: Boolean,
  popupMaxHeight: { type: [Boolean, Number], default: true },
  hideOnSelect: { type: Boolean, default: true },
  autoFitPopupWidth: Boolean,
  disabled: Boolean,
  alignPoint: Boolean,
  elevation: { type: [Boolean, Number], default: true },
}
export const props = dropdownMenuProps
export type DropdownMenuProps = import('vue').ExtractPublicPropTypes<typeof dropdownMenuProps>
