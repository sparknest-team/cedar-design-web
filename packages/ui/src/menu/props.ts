import type { PropType } from 'vue'
import { menuDefaults } from './appearance'
import { triggerProps as triggerPropDefaults } from '../trigger'
import { componentSizes, type ComponentSize } from '../_utils/constant'
import type { MenuPlacement, MenuReference, MenuSubmenuTrigger } from './types'
import type { MenuFieldNames } from './selection'
import type { MenuOptionData, MenuValue } from './types'
export type { MenuOptionData, MenuOptionLabel, MenuOptionLabelRender } from './types'
export type MenuSize = ComponentSize
export const menuProps = {
  options: { type: Array as PropType<MenuOptionData[]>, default: () => [] },
  fieldNames: Object as PropType<MenuFieldNames>,
  modelValue: { type: [String, Number, Boolean, Object] as PropType<MenuValue>, default: undefined },
  /** 非受控初始选中值，仅创建时读取。 */
  defaultValue: { type: [String, Number, Boolean, Object] as PropType<MenuValue>, default: undefined },
  size: { type: String as PropType<ComponentSize>, default: 'md', validator: (value: unknown) => componentSizes.includes(value as ComponentSize) },
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  unmountOnClose: { type: Boolean, default: menuDefaults.unmountOnClose },
  trigger: { type: [String, Array] as PropType<'click' | 'hover' | 'focus' | 'contextMenu' | ('click' | 'hover' | 'focus' | 'contextMenu')[]>, default: 'click' },
  submenuTrigger: { type: String as PropType<MenuSubmenuTrigger>, default: menuDefaults.submenuTrigger, validator: (value: unknown) => value === 'click' || value === 'hover' },
  /** 浮层相对触发元素的首选方位，默认 bottom；启用默认的 auto-fit-position 时，空间不足会自动翻转并约束到可视区域，不保证最终停在该侧 */
  placement: { type: String as PropType<MenuPlacement>, default: 'bottom' },
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
export type MenuProps = import('../_utils/public-props').CompatiblePublicProps<typeof menuProps>
