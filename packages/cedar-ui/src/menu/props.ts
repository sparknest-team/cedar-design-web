import type { PropType } from 'vue'
import { menuDefaults } from './appearance'
import { triggerProps as triggerPropDefaults } from '../trigger'
import { componentSizes, type ComponentSize } from '../_utils/constant'
import type { MenuPosition, MenuReference, MenuSubmenuTrigger } from './types'
import type { MenuFieldNames } from './selection'
import type { MenuOptionData, MenuValue } from './types'
export type { MenuOptionData, MenuOptionLabel, MenuOptionLabelRender } from './types'
export type MenuSize = ComponentSize
export const menuProps = {
  options: { type: Array as PropType<MenuOptionData[]>, default: () => [] },
  fieldNames: Object as PropType<MenuFieldNames>,
  modelValue: { type: [String, Number, Boolean, Object] as PropType<MenuValue>, default: undefined },
  size: { type: String as PropType<ComponentSize>, default: 'md', validator: (value: unknown) => componentSizes.includes(value as ComponentSize) },
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  unmountOnClose: { type: Boolean, default: menuDefaults.unmountOnClose },
  trigger: { type: [String, Array] as PropType<'click' | 'hover' | 'focus' | 'contextMenu' | ('click' | 'hover' | 'focus' | 'contextMenu')[]>, default: 'click' },
  submenuTrigger: { type: String as PropType<MenuSubmenuTrigger>, default: menuDefaults.submenuTrigger, validator: (value: unknown) => value === 'click' || value === 'hover' },
  placement: { type: String as PropType<MenuPosition>, default: 'bottom' },
  reference: { type: [String, Object] as PropType<MenuReference>, default: undefined },
  /** 定位策略，所有层级子菜单响应式继承。 */
  strategy: triggerPropDefaults.strategy,
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
export const props = menuProps
export type MenuProps = import('vue').ExtractPublicPropTypes<typeof menuProps>
